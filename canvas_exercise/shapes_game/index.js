window.addEventListener("load", function() {

  function clear(ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
  }

  function drawRandomShape(ctx, width, height) {
    var randomShapeNumber = Math.floor(Math.random()*(4)+1);
    var x = Math.floor(Math.random()*642); // multiplied by 692 to ensure shape doesn't go off black screen 
    var y = Math.floor(Math.random()*592); // multiplied by 642 to ensure shape doesn't go off black screen

    // 1 - White Triangle
    if (randomShapeNumber === 1) {
      expectedKey = "white0";
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.moveTo(x, y); // random point on screen
      ctx.lineTo(x+100, y+100); // 
      ctx.lineTo(x, y+100);
      ctx.fill();
      ctx.closePath();
    }

    // 2 - Red Square
    if (randomShapeNumber === 2) {
      expectedKey = "red1";
      ctx.fillStyle = "red";
      ctx.fillRect(x, y, 100, 100);      
    }


    // 3 - Red Triangle
    if (randomShapeNumber === 3) {
      expectedKey = "red0";
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x+100, y+100);
      ctx.lineTo(x, y+100);
      ctx.fill();
      ctx.closePath();
    }

    // 4 - White Square
    if (randomShapeNumber === 4) {
      expectedKey = "white1";
      ctx.fillStyle = "white";
      ctx.fillRect(x, y, 100, 100);
    }

  }

  function drawGameStartText(ctx, width, height, score) {
    clear(ctx, width, height); // clear the board of any text or shapes
    seconds = 30; // restart the seconds
    timerSpan.innerText = "30"; // restart the timerSpan
    scoreSpan.innerText = "0"; // restart the score

    if (alreadyPlayed) {
      ctx.fillStyle = "white"; // re-render start text
      ctx.font = "2em Times New Roman";
      ctx.fillText("Score: " + score, 120, 300);
    }

    ctx.fillStyle = "white"; // re-render start text
    ctx.font = "2.3em Times New Roman";
    ctx.fillText("Press the space bar to start the game.", 120, 350);

    score = 0; 
  }

  function runTimer() {
    intervalId = setInterval(function(){
      if (seconds === 0) {
        clearInterval(intervalId);
        drawGameStartText(ctx, width, height, score);
        gameOn = !gameOn;
      } else {
        seconds--;
        timerSpan.innerText = seconds;
      }
    }, 1000);
  };

  var canvas = document.getElementById("shapes-game"),
      height = canvas.scrollHeight,
      width = canvas.scrollWidth,
      gameOn = false,
      alreadyPlayed = false,
      expectedKey = undefined,
      ctx = canvas.getContext('2d'),
      // white triangle / white0 = up, red square / red1 = down,
      // red triangle / red0 = left, white square / white1 = right
      expectedKeysMap = {white0: 38, red1: 40, red0: 37, white1: 39},
      timerSpan = document.getElementById("time-remaining"),
      scoreSpan = document.getElementById("score-val"),
      score = 0,
      seconds = 30, // added a 0 to make it 30?
      intervalId;

  canvas.width = width;
  canvas.height = height;

  document.addEventListener("keyup", function(e) {
    // if gameOn is true, check which key is pressed and address accordingly
    if (gameOn) {
      if (e.keyCode === expectedKeysMap[expectedKey]) {
        score++;
        scoreSpan.innerText = score;
        clear(ctx, width, height);
        drawRandomShape(ctx, width, height);
      } else {
        score--;
        scoreSpan.innerText = score;
      }

    } else { // if gameOn is false, only start game if space bar is clicked
      if (e.keyCode === 32) {
        gameOn = !gameOn;
        alreadyPlayed = true;
        clear(ctx, width, height);
        drawRandomShape(ctx, width, height);
        runTimer();
      }
    }
  });

  drawGameStartText(ctx, width, height);
});

