window.addEventListener("load", function() {

  function clear() {
    ctx.clearRect(0, 0, width, height);
  }

  function drawRandomShape() {
    let color = Math.random() > 0.5 ? 'red' : 'white';
    let shape = Math.random() > 0.5 ? '1' : '0';
    let x = Math.floor(Math.random() * 690);
    let y = Math.floor(Math.random() * 640);

    ctx.fillStyle = color;

    if (shape === '1'){
      ctx.fillRect(x, y, spriteSize, spriteSize);
    } else {
      drawTriangle(x, y, color);
    }
    expectedKey = expectedKeysMap[color+shape];
  }

  function drawGameStartText() { 
    ctx.font = "36px sans-serif";
    ctx.fillStyle = 'white';
    ctx.fillText('Press the space bar to start a new game',70,375);
  }

  function drawTriangle(x, y, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y+spriteSize);
    ctx.lineTo(x+spriteSize, y+spriteSize);
    ctx.closePath();
    ctx.fill();
  }

  function keyUpHandler(e) {
    if (e.keyCode == expectedKey) {
      scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
    } else {
      scoreSpan.innerText = parseInt(scoreSpan.innerText) - 1;
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

    intervalId = setInterval(function(){
      timerSpan.innerText = timerSpan.innerText - 1;
      if (timerSpan.innerText == 0) {
        clearInterval(intervalId);
        gameOn = false;
        clear(ctx, width, height);
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
      // white triangle = up, red square = down,
      // red triangle = left, white square = right
      expectedKeysMap = {white0: 38, red1: 40, red0: 37, white1: 39},
      timerSpan = document.getElementById("time-remaining"),
      scoreSpan = document.getElementById("score-val"),
      seconds = 3,
      intervalId,
      spriteSize = 100;

  canvas.width = width;
  canvas.height = height;

  drawGameStartText();

  document.addEventListener("keyup", function(e) {
    if (gameOn && [37,38,39,40].includes(e.keyCode)) {
      keyUpHandler(e);
    }
    if (!gameOn && e.keyCode === 32) {
      startGame();
    }    
  });
});

