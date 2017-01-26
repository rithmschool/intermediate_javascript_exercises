window.addEventListener("load", function() {
  function redRectangle() {
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 50, 50);
  }

  function whiteRectangle() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 50, 50);
  }

  function redTriangle() {
    ctx.fillStyle = "red";
    ctx.moveTo(0, 0);
    ctx.lineTo(40, 40);
    ctx.lineTo(0, 80);
    ctx.fill();
  }

  function whiteTriangle() {
    ctx.fillStyle = "white";
    ctx.moveTo(0, 0);
    ctx.lineTo(40, 40);
    ctx.lineTo(0, 80);
    ctx.fill();
  }

  function clear() {
    ctx.clearRect(0, 0, 800, 750);
    drawRandomShape();
  }

  function drawRandomShape(ctx) {

    var rand = Math.floor(Math.random() * 20);

    if (rand > 15) {
      redRectangle();
      expectedKey = 40;
    } else if (rand > 10 && rand <= 15) {
      whiteTriangle();
      expectedKey = 38;
    } else if (rand > 5 && rand <= 10) {
      redTriangle();
      expectedKey = 37;
    } else {
      whiteRectangle()
      expectedKey = 39;
    }
  }

  function drawGameStartText() {

    ctx.font = "20px veranda";
    ctx.fillStyle = "blue";
    ctx.textAlign = "center";
    ctx.fillText = "white"
  }

  function restartGame(ctx, width, height) {}

  var canvas = document.getElementById("shapes-game"),
    height = canvas.scrollHeight,
    width = canvas.scrollWidth,
    gameOn = false,
    expectedKey = undefined,
    ctx = canvas.getContext('2d'),
    // white triangle = up, red square = down,
    // red triangle = left, white square = right
    expectedKeysMap = {
      white0: 38,
      red1: 40,
      red0: 37,
      white1: 39
    },
    timerSpan = document.getElementById("time-remaining"),
    scoreSpan = document.getElementById("score-val"),
    seconds = 30,
    intervalId;

  canvas.width = width;
  canvas.height = height;

  document.addEventListener("keydown", function(up) {

  });


  drawRandomShape()

  document.addEventListener("keydown", function(x) {

    if (x.keyCode == 32) {
      clear();
    }

    if (x.keyCode == 38) {
      if (expectedKey === x.keyCode) {
        scoreSpan.innerHTML = Number(scoreSpan.innerHTML) + 1;
        clear();
      } else {
        scoreSpan.innerHTML -= 1;
        clear();
      }
    } else if (x.keyCode == 39) {
      if (expectedKey === x.keyCode) {
        scoreSpan.innerHTML = Number(scoreSpan.innerHTML) + 1
        clear();
      } else {
        scoreSpan.innerHTML -= 1;
        clear();
      }
    } else if (x.keyCode == 40) {
      if (expectedKey === x.keyCode) {
        scoreSpan.innerHTML = Number(scoreSpan.innerHTML) + 1;
        clear();
      } else {
        scoreSpan.innerHTML -= 1;
        clear();
      }
    } else if (x.keyCode == 37) {
      if (expectedKey === x.keyCode) {
        scoreSpan.innerHTML = Number(scoreSpan.innerHTML) + 1;
        clear();
      } else {
        scoreSpan.innerHTML -= 1;
        clear();
      }
    }
  });




});
