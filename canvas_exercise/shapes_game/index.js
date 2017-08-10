/* jshint esversion: 6 */

window.addEventListener("load", function() {

  // ===========================================================================
  // clear
  function clear(ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
  }

  // ===========================================================================
  // drawRandomShape
  function drawRandomShape(ctx, width, height) {
    const shapeSize = 100;
    var shapes = ['triangle', 'square'];
    var colors = ['white', 'red'];

    var shapeIdx = Math.floor(Math.random() * 2);
    var colorIdx = Math.floor(Math.random() * 2);

    var shape = shapes[shapeIdx];
    var color = colors[colorIdx];

    current = color + shapeIdx;

    var rndX = Math.floor(Math.random() * 700);
    var rndY = Math.floor(Math.random() * 650);

    if (shape === 'triangle') {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(rndX, rndY);
      ctx.lineTo(rndX + shapeSize, rndY + shapeSize);
      ctx.lineTo(rndX, rndY + shapeSize);
      ctx.fill();
      ctx.closePath();
    }

    if (shape === 'square') {
      ctx.fillStyle = color;
      ctx.fillRect(rndX, rndY, shapeSize, shapeSize);
    }
  }


  // ===========================================================================
  // drawGameStartText
  function drawGameStartText(ctx, width, height, score) {
    ctx.font = '30px serif';
    ctx.fillStyle = 'white';
    ctx.fillText('Press the space bar to start a new game.', 170, 360);

    if (score !== undefined) {
      ctx.font = '24px serif';
      ctx.fillStyle = 'white';
      ctx.fillText('Score: ' + scoreSpan.innerText, 365, 400);
    }
  }


  // ===========================================================================
  // restartGame
  function restartGame(ctx, width, height) {
    clear(ctx, width, height);
    scoreSpan.innerText = 0;
    timerSpan.innerText = 30;
  }

  var canvas = document.getElementById("shapes-game"),
      height = canvas.scrollHeight,
      width = canvas.scrollWidth,
      current,
      score,
      gameOn = false,
      ctx = canvas.getContext('2d'),
      // white triangle = up, red square = down,
      // red triangle = left, white square = right
      expectedKeysMap = {white0: 38, red1: 40, red0: 37, white1: 39},
      timerSpan = document.getElementById("time-remaining"),
      scoreSpan = document.getElementById("score-val"),
      seconds = 3,
      timer,
      intervalId;

  canvas.width = width;
  canvas.height = height;

  drawGameStartText(ctx, width, height);

  document.addEventListener("keyup", function(event) {
    if (event.keyCode === 32 && gameOn === false) {
      gameOn = true;
      timer = 30;
      score = 0;
      restartGame(ctx, width, height);
      drawRandomShape(ctx, width, height);

      intervalId = setInterval(function () {
        timerSpan.innerText = --timer;

        if (timer < 1) {
          clearInterval(intervalId);
          clear(ctx, width, height);
          drawGameStartText(ctx, width, height, 0);
          gameOn = false;
        }
      }, 1000);

    } else if (event.keyCode !== 32 && gameOn) {
      if (event.keyCode === expectedKeysMap[current]) {
        scoreSpan.innerText = ++score;

      } else {
        scoreSpan.innerText = --score;
      }

      clear(ctx, width, height);
      drawRandomShape(ctx, width, height);
    }
  });
});
