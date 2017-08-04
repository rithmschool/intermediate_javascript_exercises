window.addEventListener("load", function() {

  function clear() {
    ctx.clearRect(0,0,width,height);
  }

  function drawRandomShape() {
    let top = Math.floor(Math.random() * (height -50));
    let left = Math.floor(Math.random() * (width -50));
    let pick = Math.floor(Math.random() * 4);
    clear();

    switch (pick){
      case 0: //white0 white triangle = up
        expectedKey = 'ArrowUp';
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.moveTo(left,top);
        ctx.lineTo(left+50, top+50);
        ctx.lineTo(left, top+50);
        ctx.fill();
        ctx.closePath();
        break;
      case 1: //red1 red square = down
        expectedKey = 'ArrowDown';
        ctx.fillStyle = 'red';
        ctx.fillRect(
          top,
          left,
          50,
          50);
        break;
      case 2: //red0 red triangle = left
        expectedKey = 'ArrowLeft';
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(left,top);
        ctx.lineTo(left+50, top+50);
        ctx.lineTo(left, top+50);
        ctx.fill();
        ctx.closePath();
        break;
      case 3: //white1 white square = right
        expectedKey = 'ArrowRight';
        ctx.fillStyle = 'white';
        ctx.fillRect(
          top,
          left,
          50,
          50);
        break;
    }

  }

  function drawGameStartText() {
    console.log('End Game');
    clear();
    ctx.font = '2em serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    ctx.fillText('Press the space bar to start the game.', 
      Math.floor(width/2), 
      Math.floor(height/2.25));
    if(score > 0){
      ctx.fillText('Last score is ' + score, 
      Math.floor(width/2), 
      Math.floor(height/2));
    }

  }

  function startGame(){
        console.log('Starting Game');
        scoreSpan.innerText = score = 0;
        seconds = 30;
        gameOn = true;
        clear();
        drawRandomShape();

        intervalId = setInterval(function(){
          timerSpan.innerText = --seconds;
          if(seconds <= 0) {
            clearInterval(intervalId);
            gameOn = false;
            drawGameStartText();
          }
        }, 1000);
  }

  var canvas = document.getElementById("shapes-game"),
      height = canvas.scrollHeight,
      width = canvas.scrollWidth,
      gameOn = false,
      expectedKey = undefined,
      ctx = canvas.getContext('2d'),
      timerSpan = document.getElementById("time-remaining"),
      scoreSpan = document.getElementById("score-val"),
      score = 0,
      seconds = 0,
      intervalId;

  canvas.width = width;
  canvas.height = height;

  document.addEventListener("keyup", function(e) {
      if(e.key === ' ' && !gameOn){
        startGame();
      }else if(gameOn && e.key == expectedKey){ //right key
        scoreSpan.innerText = ++score;
        drawRandomShape();
      }else if(gameOn && 'ArrowUpArrowDownArrowLeftArrowRight'.includes(e.key)){ //wrong key
        scoreSpan.innerText = --score;
        drawRandomShape();
      }
  });

  //On Load
  drawGameStartText();
});

