window.addEventListener('load', function() {
  var canvas = document.getElementById('shapes-game'),
    height = canvas.scrollHeight,
    width = canvas.scrollWidth,
    gameOn = false,
    expectedKey = undefined,
    ctx = canvas.getContext('2d'),
    // white triangle = up, red square = down,
    // red triangle = left, white square = right
    expectedKeysMap = { white0: 38, red1: 40, red0: 37, white1: 39 },
    timerSpan = document.getElementById('time-remaining'),
    scoreSpan = document.getElementById('score-val'),
    seconds = 30,
    intervalId,
    size = 100;

  canvas.width = width;
  canvas.height = height;

  function clear() {
    ctx.clearRect(0, 0, width, height);
  }
  function drawGameStartText() {
    ctx.font = '36px mono';
    ctx.fillStyle = 'white';
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowOffsetBlur = 3.0;
    ctx.shadowColor = 'rgba(0,0,0,0.2)';
    ctx.fillText(
      'Press the space bar to start a new game',
      width / 2 - 275,
      height / 2
    );
  }

  function drawRandomShape() {
    var color = Math.random() > 0.5 ? 'red' : 'white';
    var shape = Math.random() > 0.5 ? '1' : '0';
    var x = Math.floor(Math.random() * 690);
    var y = Math.floor(Math.random() * 640);

    ctx.fillStyle = color;

    if (shape === '1') {
      ctx.fillRect(x, y, size, size);
    } else {
      drawTriangle(x, y, color);
    }
    expectedKey = expectedKeysMap[color + shape];
  }

  function drawTriangle(x, y, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + size);
    ctx.lineTo(x + size, y + size);
    ctx.fill();
  }

  function keyUpHandler(e) {
    if (e.keyCode == expectedKey) {
      scoreSpan.innerText = +scoreSpan.innerText + 1;
    } else {
      scoreSpan.innerText = +scoreSpan.innerText - 1;
    }
    clear(ctx, width, height);
    drawRandomShape();
  }

  function startGame() {
    clear(ctx, width, height);
    gameOn = true;
    drawRandomShape();
    timerSpan.innerText = 30;
    scoreSpan.innerText = 0;

    intervalId = setInterval(function() {
      timerSpan.innerText = timerSpan.innerText - 1;
      if (timerSpan.innerText === 0) {
        clearInterval(intervalId);
        gameOn = false;
        restartGame();
        clear(ctx, width, height);
        drawGameStartText(ctx, width, height, score);
      }
      timerSpan.innerHTML = seconds;
    }, 1000);
  }

  function startTimer(duration, display) {
    var timer = duration,
      minutes,
      seconds;
    setInterval(function() {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      display.textContent = minutes + ':' + seconds;

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  window.onload = function() {
    var thirty = 30,
      display = document.querySelector('#time');
    startTimer(thirty, display);
  };

  function restartGame(ctx, width, height) {
    seconds = 30;
    scoreSpan.innerHTML = 0;
    ctx.textAlign = 'center';
    ctx.fillText('Press the space bar to play again', width / 2, height / 2);
    ctx.fillText('You scored ' + score + ' points', width / 2, height / 2 + 50);
    gameOn = false;
  }

  drawGameStartText();

  document.addEventListener('keydown', function(e) {
    if (gameOn && [37, 38, 39, 40].includes(e.keyCode)) {
      keyUpHandler(e);
    }
    if (!gameOn && e.keyCode === 32) {
      startGame();
    }
  });
});
