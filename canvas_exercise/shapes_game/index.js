window.addEventListener("load", function() {

  function clear(ctx, width, heigt) {
    ctx.clearRect(0,0,width,height);
  }

  function drawRandomShape(ctx, width, height) {
    var shapeNum = Math.floor(Math.random() * 4);

    var x = Math.random() * (width - 100);
    var y = Math.random() * (height - 100);

    switch(shapeNum) {
      case 0:  // Red Triangle
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+100, y+100);
        ctx.lineTo(x, y+100);
        ctx.lineTo(x,y);
        ctx.fill();
        ctx.closePath();
        return "red0";
      case 1: // White Square
        ctx.fillStyle = "white";
        ctx.fillRect(x,y,100,100);
        return "white1"
      case 2: // White Triangle
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+100, y+100);
        ctx.lineTo(x, y+100);
        ctx.lineTo(x,y);
        ctx.fill();
        ctx.closePath();
        return "white0";
      default: // Red Square
        ctx.fillStyle = "red";
        ctx.fillRect(x,y,100,100);
        return "red1";

    }
  }

  function drawGameStartText(ctx, width, height, score) {
    ctx.font = "40px comic-sans";
    ctx.fillStyle = "white";
    ctx.fillText("Press any key to start!", width*0.3, height*0.45);
    ctx.fillText("Last Score: " + score, width*0.38, height*0.55);
  }

  function restartGame(ctx, width, height, scoreSpan, timerSpan) {
    clear(ctx, width, height);
    drawGameStartText(ctx,width,height, scoreSpan.innerText);
    resetTimeNScore(scoreSpan, timerSpan);
  }

  function resetTimeNScore(scoreSpan) {
    scoreSpan.innerText = 0;
    timerSpan.innerText = 30;
  }

  function startTimer(timerSpan) {
    var timer = setInterval(function() {
      timerSpan.innerText = Number(timerSpan.innerText) - 1;

      if (Number(timerSpan.innerText) === 0) {
        clearInterval(timer);
        endGame();
      }
    }, 1000);
  }

  function endGame() {
    expectedKey = undefined;
    gameOn = false;
    // return undefined :D
    restartGame(ctx, width, height, scoreSpan, timerSpan);
  }

  // NEED TO HAVE AN END-GAME SCREEN and input moves to a reset game.

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
      seconds = 3,
      intervalId;

  canvas.width = width;
  canvas.height = height;

  document.addEventListener("keyup", function(event) {
    if (gameOn === false) {
      startTimer(timerSpan);
      gameOn = true;
    }

    clear(ctx, canvas.width, canvas.height);

    if (expectedKey !== undefined) {
      if (event.keyCode === expectedKeysMap[expectedKey]) {
        scoreSpan.innerText = Number(scoreSpan.innerText) + 1;
      }
    }
    
    expectedKey = drawRandomShape(ctx, canvas.width, canvas.height);
  });

  

  restartGame(ctx, canvas.width, canvas.height, scoreSpan);
});

