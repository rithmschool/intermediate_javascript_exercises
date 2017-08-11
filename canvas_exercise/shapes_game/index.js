window.addEventListener("load", function() {

  function clear(ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
  }

  function drawRandomShape(ctx) {
    //0 = white triangle 1 = red triangle 2 = white square 3 = red square
    var shapes = [0, 1, 2, 3];
    var x = Math.floor(Math.random() * (650 - 100) + 100);
    var y = Math.floor(Math.random() * (650 - 100) + 100);

    //{white0: 38, red1: 40, red0: 37, white1: 39}
    if (shapes.indexOf(Math.floor(Math.random() * (4 - 0))) === 0) {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(x, x);
        ctx.lineTo(x, x + 70);
        ctx.lineTo(x + 70, x + 70);
        ctx.fill();
        ctx.closePath();
        return 'white0';
      }
    else if (shapes.indexOf(Math.floor(Math.random() * (4 - 0))) === 1) {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(x, x);
        ctx.lineTo(x, x + 70);
        ctx.lineTo(x + 70, x + 70);
        ctx.fill();
        ctx.closePath();
        return 'red0';
      }
    else if (shapes.indexOf(Math.floor(Math.random() * (4 - 0))) === 2) {
      ctx.fillStyle = 'white';
      ctx.fillRect(x, y, 70, 70);
      return 'white1';
    }
    else {
      ctx.fillStyle = 'red';
      ctx.fillRect(x, y, 70, 70);
      return 'red1';
    }
  }

  function drawGameStartText(ctx, width, height, score) {
    ctx.fillStyle = 'white';
    ctx.font = '36px serif';
    ctx.fillText('Press the space bar to start a new game', width, height);
    if (score !== undefined) {
      ctx.fillText('Score: ' + score, width + 225, height + 50);
    }
  }

  function restartGame(ctx, width, height) {
      countdown = 30;
      scoreSpan.innerHTML = 0;
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
      countdown = 30,
      intervalId;

  canvas.width = width;
  canvas.height = height;

  document.addEventListener("keyup", function(event) {
    if (!gameOn && event.keyCode === 32) {
        gameOn = true;
        clear(ctx, width, height);
        expectedKey = expectedKeysMap[drawRandomShape(ctx)];
        intervalId = setInterval(function() {
          countdown--;
          if (countdown === 0) {
            clearInterval(intervalId);
            gameOn = false;
            var endScore = +scoreSpan.innerHTML;
            restartGame();
            clear(ctx, width, height);
            drawGameStartText(ctx, 100, 400, endScore);
          }
          timerSpan.innerHTML = countdown;
        }, 1000);
        //0 = white triangle (up) 1 = red triangle(left) 2 = white square(right) 3 = red square(down)
      }
    else if (gameOn && Object.values(expectedKeysMap).includes(event.keyCode)) {
        if (expectedKey === event.keyCode) {
          scoreSpan.innerHTML = Number(scoreSpan.innerHTML) + 1;
        }
        else {
          scoreSpan.innerHTML = Number(scoreSpan.innerHTML) - 1;
        }
        clear(ctx, width, height);
        expectedKey = expectedKeysMap[drawRandomShape(ctx)];
      }
  });
  drawGameStartText(ctx, 100, 400);

      //once key gets pressed it runs functions attached
      //waits for next key to be pressed
      //
      //match expectedKey to expectedKeysMap
});
