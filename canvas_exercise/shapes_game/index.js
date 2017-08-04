window.addEventListener("load", function() {

  function clear(ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
  }

  function drawRandomShape(ctx, width, height) {
    clear(ctx, canvas.width, canvas.height);
    var shapes = ["wTri", "wSq", "rTri", "rSq"];
    var randomShape = shapes[Math.floor(Math.random()*shapes.length)];

    var randomX = Math.floor(Math.random()*(canvas.width - 2*width) + width);
    var randomY = Math.floor(Math.random()*(canvas.height - 2*height) + height);


    if(randomShape === "wSq" || randomShape === "wTri") {
      ctx.fillStyle = "white";
    } else {
      ctx.fillStyle = "red";
    }

    if(randomShape === "wSq" || randomShape === "rSq") {
      ctx.fillRect(randomX, randomY, width, height);
    } else {
      ctx.beginPath();
      ctx.moveTo(randomX, randomY);
      ctx.lineTo(randomX + width, randomY + height);
      ctx.lineTo(randomX, randomY + height);
      ctx.fill();
      ctx.closePath();
    }

    return randomShape;
  }

  function drawGameStartText(ctx, width, height, score) {
    ctx.fillStyle = "white";
    ctx.font = '30px arial';
    ctx.textAlign = "center";
    ctx.fillText('Press the space bar to start a new game', width/2, height/2);
  }


  function restartGame(ctx, width, height) {
    clear(ctx, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = '30px arial';
    ctx.textAlign = "center";
    ctx.fillText('Press the space bar to play again', width/2, height/2);
    ctx.fillText("You scored " + score + " points", width/2, height/2 + 50);
    gameOn = false;
    score = 0;
    seconds = 30;
  }

  var canvas = document.getElementById("shapes-game"),
      height = canvas.scrollHeight,
      width = canvas.scrollWidth,
      gameOn = false,
      expectedKey = undefined,
      ctx = canvas.getContext('2d'),
      // white triangle = up, red square = down,
      // red triangle = left, white square = right
      expectedKeysMap = {wTri: 38, rSq: 40, rTri: 37, wSq: 39},
      timerSpan = document.getElementById("time-remaining"),
      scoreSpan = document.getElementById("score-val"),
      seconds = 30,
      score = 0,
      intervalId;

  canvas.width = width;
  canvas.height = height;

  document.addEventListener("keyup", function(e) {
    e.preventDefault(); //doesn't work
    if(e.keyCode === 32 && !gameOn){
      gameOn = true;
      scoreSpan.innerText = score;
      timerSpan.innerText = seconds;
      intervalId = setInterval(function(){
        seconds--;
        timerSpan.innerText = seconds;
      },1000)

      setTimeout(function(){
        clearInterval(intervalId);
        clear(ctx, canvas.width, canvas.height);
        restartGame(ctx, canvas.width, canvas.height);
      },seconds * 1000);

      expectedKey = drawRandomShape(ctx, 50, 50)
    } else if(e.keyCode === expectedKeysMap[expectedKey] && gameOn){
        score++;
        scoreSpan.innerText = score;
        expectedKey = drawRandomShape(ctx, 50, 50);
    } else if(gameOn){
        score--;
        scoreSpan.innerText = score;
        expectedKey = drawRandomShape(ctx, 50, 50);
    }
  });

  drawGameStartText(ctx, canvas.width, canvas.height)

});


