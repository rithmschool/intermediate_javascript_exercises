window.addEventListener('load', function() {
  function clear(ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
  }

  function drawRandomShape(ctx, width, height) {
    function animate() {
      requestAnimationFrame(animate);
    }
  }

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
    seconds = 3,
    intervalId;
  canvas.width = width;
  canvas.height = height;

  // View

  function drawGameStartText(ctx, width, height, score) {
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.fillStyle('white');
    ctx.font = '48px serif';
    ctx.fillText('Press the space bar to start a new game', 10, 50);
  }

  function draw() {}

  //control
  document.addEventListener('keyup', function() {});
  var keycodes = {
    space: 32,
    leftArrow: 37,
    rightArrow: 39,
    downArrow: 38,
    upArrow: 40
  };

  function restartGame(ctx, width, height) {}
});
