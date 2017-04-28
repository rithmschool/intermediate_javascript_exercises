window.addEventListener("load", function() {

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
      score = 0;

  canvas.width = width;
  canvas.height = height;

  //Add text to the canvas
  function drawGameStartText(ctx, width, height) {
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Press the space button to start", width/2, height/2);
  }

  drawGameStartText(ctx, width, height);

  function clear(ctx, width, heigt) {
    ctx.clearRect(0, 0, width, height);
  }

  function drawRandomShape(ctx, width, height) {
    expectedKey = Math.floor((Math.random() * 4) + 1);
    if (expectedKey === 1) {
      //red square
      ctx.fillStyle = "red";
      var upperLeftX = Math.floor(Math.random() * (width - 80) + 80);
      var upperLeftY = Math.floor(Math.random() * (height - 80) + 80);
      var width = 40;
      var height = 40;
      ctx.fillRect(upperLeftX, upperLeftY, width, height);
    } else if (expectedKey === 2) {
      //white square
      ctx.fillStyle = "white";
      var upperLeftX = Math.floor(Math.random() * (width - 80) + 80);
      var upperLeftY = Math.floor(Math.random() * (height - 80) + 80);
      var width = 40;
      var height = 40;
      ctx.fillRect(upperLeftX, upperLeftY, width, height);
    } else if (expectedKey === 3) {
      //red triangle
      ctx.fillStyle = "red";
      ctx.beginPath();
      var upperLeftX = Math.floor(Math.random() * (width - 80) + 80);
      var upperLeftY = Math.floor(Math.random() * (height - 80) + 80);
      ctx.moveTo(upperLeftX, upperLeftY);
      ctx.lineTo(upperLeftX, upperLeftY + 40);
      ctx.lineTo(upperLeftX + 40, upperLeftY + 40);
      ctx.fill();
      ctx.closePath();
    } else if (expectedKey === 4) {
      //white trangle
      ctx.fillStyle = "white";
      ctx.beginPath();
      var upperLeftX = Math.floor(Math.random() * (width - 80) + 80);
      var upperLeftY = Math.floor(Math.random() * (height - 80) + 80);
      ctx.moveTo(upperLeftX, upperLeftY);
      ctx.lineTo(upperLeftX, upperLeftY + 40);
      ctx.lineTo(upperLeftX + 40, upperLeftY + 40);
      ctx.fill();
      ctx.closePath();
    }
  }

  function restartGame(ctx, width, height) {
    drawGameStartText(ctx, width, height);
    timerSpan.innerHTML = 30;
    scoreSpan.innerHTML = 0;
  }

  document.addEventListener("keyup",
    function(event) {
      if (event.keyCode === 32 && !gameOn) {
        clear(ctx, width, height);
        var timeLeft = 30;
        intervalId = setInterval(countdown, 1000);

        function countdown() {
          if (timeLeft === 0) {
            clearTimeout(intervalId);
            gameOn = false;
            clear(ctx, width, height);
            restartGame(ctx, width, height);
          } else {
            timeLeft--;
            timerSpan.innerHTML = timeLeft;
            gameOn = true;
          }
        }
        drawRandomShape(ctx, width, height);
      } else if (event.keyCode === 38 && gameOn) {

          if (expectedKey === 4) {
            score ++;
            scoreSpan.innerHTML = score;
          } else {
            score --;
            scoreSpan.innerHTML = score;
          }
        clear(ctx, width, height);
        drawRandomShape(ctx, width, height);
      } else if (event.keyCode === 37 && gameOn) {

        if (expectedKey === 3) {
          score ++;
          scoreSpan.innerHTML = score;
        } else {
          score --;
          scoreSpan.innerHTML = score;
        }
        clear(ctx, width, height);
        drawRandomShape(ctx, width, height);
      } else if (event.keyCode === 39 && gameOn) {
        if (expectedKey === 2) {
          score ++;
          scoreSpan.innerHTML = score;
        } else {
          score --;
          scoreSpan.innerHTML = score;
        }
        clear(ctx, width, height);
        drawRandomShape(ctx, width, height);
      } else if (event.keyCode === 40 && gameOn) {
        if (expectedKey === 1) {
          score ++;
          scoreSpan.innerHTML = score;
        } else {
          score --;
          scoreSpan.innerHTML = score;
        }
        clear(ctx, width, height);
        drawRandomShape(ctx, width, height);
      }
    });
  });
