window.addEventListener("load", function() {

  function clear(ctx, width, heigt) {
  }

  function drawRandomShape(ctx, width, height) {
  }

  function drawGameStartText(ctx, width, height, score) {
  }

  function restartGame(ctx, width, height) {
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
      intervalId;

  canvas.width = width;
  canvas.height = height;

  document.addEventListener("keyup", function() {
 
  });
});

