window.addEventListener("load", function() {

  var canvas = document.getElementById("shapes-game"),
      height = canvas.scrollHeight,
      width = canvas.scrollWidth,
      gameOn = false,
      expectedKey = undefined,
      ctx = canvas.getContext('2d'),
      // white triangle = up (38), red square = down (40),
      // red triangle = left (37), white square = right (39)
      // expectedKeysMap = {white0: 38, red1: 40, red0: 37, white1: 39},
      timerSpan = document.getElementById("time-remaining"),
      scoreSpan = document.getElementById("score-val"),
      statusSpan = document.getElementById("status-msg"),
      correctSpan = document.getElementById('correct-msg'),
      seconds = 30,
      intervalId;

  var pieceArr = [
    ['triangle', 'red', 37], //0 - triangle red - left (37)
    ['triangle', 'white', 38], //1 - triangle white - up (38)
    ['square', 'red', 40], //2 - square red - down (40)
    ['square', 'white', 39] //3 - square white - right (39)
  ];

  var currentPieceIndex;

  var startGameMessage = "Press the space bar to start a new game";
  var score = 0;
  var hasPlayedYet = false;
  var randomX;
  var randomY;

  var length = 50;

  var numShapes = 4;

  canvas.width = width;
  canvas.height = height;

  document.addEventListener("keyup", function(e) {
    //typing a space bar to start the game
    if (e.keyCode == 32 && !gameOn){
      restartGame(ctx, width, height);
    }
    //once game is started, update score if select correct piece or not
    else if (gameOn){
      if(e.keyCode === pieceArr[currentPieceIndex][2]){
        score++;
        correctSpan.style.color = "green";
        correctSpan.innerHTML = " - Correct!";
      }
      else {
        score--;
        correctSpan.style.color = "red";
        correctSpan.innerHTML = " - Wrong!";
      }
      scoreSpan.innerHTML = score;
      clear(ctx,width,height);
      drawRandomShape(ctx,width,height);
    } 
  });

  function clear(ctx, width, height) {
    ctx.clearRect(0,0,width,height);
  }
 
  function getRandomValue(max){
    return Math.floor(Math.random() * max);
  }

  function drawRandomShape(ctx, width, height) {
    //randomly select index for pieceArr (picking which shape/color to draw)
    currentPieceIndex = getRandomValue(numShapes);

    //get random X & Y values;
    var randomX = getRandomValue(width-length);
    var randomY = getRandomValue(height-length);

    //draw current shape
    if (currentPieceIndex < 2){
      drawTriangle(pieceArr[currentPieceIndex][1], randomX, randomY);
    }
    else {
      drawSquare(pieceArr[currentPieceIndex][1], randomX, randomY);
    }
  }

  function drawTriangle(color,startX,startY) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + length,startY + length);
    ctx.lineTo(startX,startY + length);
    ctx.fill();
    ctx.closePath();
  }

  function drawSquare(color, startX, startY) {
    ctx.fillStyle = color
    ctx.fillRect(startX, startY, length, length);
  }

  function drawGameStartText(ctx, width, height, score) {
    //display startGameMessage;
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(startGameMessage, width/2, height/2);

    /*write score message if have played the game already*/
    if(hasPlayedYet){
      ctx.font = "22px Arial";
      ctx.fillText("Score: " + score, width/2, height/2 + 50);
    }
  }

  function endGame(){
    clear(ctx,width,height);
    drawGameStartText(ctx,width,height,score);
    gameOn = false;
    statusSpan.innerHTML = "Game Over!";
    correctSpan.innerHTML = "";
  }

  function runTimer(){
    intervalId = setInterval(function(){
      seconds--;
      if (seconds === 0){
        clearInterval(intervalId);
        endGame();
      }
      timerSpan.innerHTML = seconds;
    }, 1000);
  }

  function restartGame(ctx, width, height) {
    gameOn = true;
    score = 0;
    seconds = 30;
    statusSpan.innerHTML = "Playing";
    timerSpan.innerHTML = seconds;
    hasPlayedYet = true;
    clear(ctx,width,height);
    runTimer();
    drawRandomShape(ctx,width,height);
  }

  drawGameStartText(ctx,width,height,score);

});

