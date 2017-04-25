window.addEventListener("load", function() {

  function redRectangle(){
    var randX = Math.floor(Math.random()*500);
    var randY = Math.floor(Math.random()*500);  
    ctx.fillStyle = "red";
    ctx.fillRect(randX,randY,50,50);
  }
  function whiteRectangle(){
    var randX = Math.floor(Math.random()*500);
    var randY = Math.floor(Math.random()*500);  
    ctx.fillStyle = "white";
    ctx.fillRect(randX,randY,50,50);
  }
  function redTriangle() {
    var randX = Math.floor(Math.random()*500);
    var randY = Math.floor(Math.random()*500);  
    ctx.fillStyle = "red";
    ctx.beginPath()
    ctx.moveTo(randX,randY);
    ctx.lineTo(randX+40, randY+40);
    ctx.lineTo(randX+0, randY+80);
    ctx.fill();
    ctx.closePath();
  }
  function whiteTriangle(){
    var randX = Math.floor(Math.random()*500);
    var randY = Math.floor(Math.random()*500);  
    ctx.fillStyle = "white";
    ctx.beginPath()
    ctx.moveTo(randX,randY);
    ctx.lineTo(randX+40, randY+40);
    ctx.lineTo(randX+0, randY+80);
    ctx.fill();
    ctx.closePath();
  }

  function drawRandomShape(ctx) {
    var rand = Math.floor(Math.random()*20);
    gameOn = true;

    if(rand > 15){
      redRectangle();
      expectedKey = 40; 
    } else if(rand > 10 && rand <= 15){
      whiteTriangle();
      expectedKey = 38;
    } else if(rand > 5 && rand <= 10){
      redTriangle();
      expectedKey = 37;
    } else{whiteRectangle();
      expectedKey = 39;
    } 
  }
///////////////////////////

  function clear() {
      ctx.clearRect(0,0,800,750);
      drawRandomShape();
  }


  function image(){
    var img = new Image();
    img.onload = function() {
    ctx.drawImage(img, canvas.width/2, canvas.height/2);
    };
    img.src = 'https://s24.postimg.org/psxbs2gn9/sdasda.gif';
  }

  function drawGameStartText() {
    ctx.shadowColor = "salmon";
    ctx.shadowBlur = 10;
    ctx.font = "40px verdana";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Hi, this is game!", canvas.width/2, canvas.height/5); 
    ctx.fillText("But aren't games supposed to be fun?", canvas.width/2, canvas.height/4); 
    ctx.fillText("You aren't having fun?!", canvas.width/2, canvas.height/3); 
    ctx.fillStyle = "white";
    ctx.fillText("Well, press space to start having fun! ", canvas.width/2, canvas.height/2); 
    image();

  }


    var time = document.getElementById("time-remaining");

    function timer() {
      var start = 29;
      var timerId = setInterval(function() {
        time.innerText = start--;
      }, 1000);

      setTimeout(function() {
        clearInterval(timerId);
        alert(`Game Over! Your score was ${scoreSpan.innerText}`);
        drawGameStartText();
        gameOn == false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        score.innerText = 0;
        time.innerText = 30;

      }, 30999)

    }

  var canvas = document.getElementById("shapes-game"),
    height = canvas.scrollHeight,
    width = canvas.scrollWidth,
    gameOn = false,
    expectedKey = undefined,
    ctx = canvas.getContext('2d'),
    // white triangle = up, red square = down,
    // red triangle = left, white square = right
    expectedKeysMap = {white0: 38, red1: 40, red0: 37, white1: 39},
    timerSpan = document.getElementById("time-remaining"),
    scoreSpan = document.getElementById("score-val"),
    seconds = 30,
    intervalId;

  canvas.width = width;
  canvas.height = height;

  drawGameStartText()

  document.addEventListener("keydown", function(x) {
    if(x.keyCode == 32){
      if(gameOn == false){
        clear();
        timer();
      }
    }

    if (x.keyCode == 38) {
      if(expectedKey === x.keyCode){
        scoreSpan.innerHTML = Number(scoreSpan.innerHTML) + 1;
        clear();
      }else{
        scoreSpan.innerHTML -= 1;
        clear();
      }
    } else if(x.keyCode == 39) {
      if(expectedKey === x.keyCode){
        scoreSpan.innerHTML = Number(scoreSpan.innerHTML) + 1
        clear();
      }else{
        scoreSpan.innerHTML -= 1;
        clear();
      }
    } else if (x.keyCode == 40) {
      if(expectedKey === x.keyCode){
        scoreSpan.innerHTML = Number(scoreSpan.innerHTML) + 1;
        clear();
      }else{
        scoreSpan.innerHTML -= 1;
        clear();
      }
    } else if (x.keyCode == 37) {
      if(expectedKey === x.keyCode){
        scoreSpan.innerHTML = Number(scoreSpan.innerHTML) + 1;
        clear();
      }else{
        scoreSpan.innerHTML -= 1;
        clear();
      }
    }
  });

});

