window.addEventListener("load", function() {
  //flow of what needs to happen:
  //drawGameStartText - game starts text is drawn, text is cleared
  //game starts when space bar is hit
  //drawRandomShape - draws random shape
  // shape attached to key
  // check if key hit matches expectedkeymap
  // also need to reassaign expectedkey from undefined to it's shape
  var squareSize = 150;
  var shapesArr = [
    "squareWhite",
    "triWhite",
    "squareRed",
    "triRed",
  ];
  var currentShape = undefined;

  function clear(ctx, width, height) {
    //clears the screen
    ctx.clearRect(0, 0, width, height);
  }

  function drawRandomShape(ctx, width, height) {
    //draws square or triangle
    //needs to be in a different location everytime called
    clear(ctx, width, height);
    var shapeNumber = Math.floor(Math.random() * 4);
    var x = Math.floor(Math.random() * (width - squareSize));
    var y = Math.floor(Math.random() * (height - squareSize));
    draw(ctx, shapesArr[shapeNumber], x, y);
    updateScore();
  }

  function updateScore(){
    var span = document.getElementById("score-val");
    span.innerText = points;
  }

  function draw(ctx, shape, x, y) {
    currentShape = shape;
    switch (shape) {
      case "squareWhite":
        ctx.fillStyle = "white";
        ctx.fillRect(x, y, squareSize, squareSize);
        break;
      case "triWhite":
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x + squareSize, y + squareSize);
        ctx.lineTo(x, y + squareSize);
        ctx.fill();
        ctx.closePath();
        break;
      case "squareRed":
        ctx.fillStyle = "red";
        ctx.fillRect(x, y, squareSize, squareSize);
        break;
      case "triRed":
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x + squareSize, y + squareSize);
        ctx.lineTo(x, y + squareSize);
        ctx.fill();
        ctx.closePath();
        break;
    }
  }

  function drawGameStartText(ctx, width, height, score) {
    gameOn = true;
    ctx.font = '45px serif';
    ctx.fillStyle = "white";
    ctx.fillText('To start game, hit the space bar', 100, 300);
  }

  function restartGame(ctx, width, height) {
    //gets called after finish first game
    //timer reset
    //score reset
    //game cleared
    //addEventListener for hitting the spacebar
    //then call generate random shape

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
      points = 0,
      intervalId;

  canvas.width = width;
  canvas.height = height;

  document.addEventListener("keyup", function(event) {
    if (event.keyCode === 32) { // spacebar
      drawRandomShape(ctx, width, height);

    } else if (event.keyCode === 37) { // left
      if (currentShape === "triRed") {
        points++;
      } else {
        points--;
      }
    } else if (event.keyCode === 38) { // up
      if (currentShape === "triWhite") {
        points++
      } else {
        points--;
      }
    } else if (event.keyCode === 39) { // right
      if (currentShape === "squareWhite") {
        points++;
      } else {
        points--;
      }
    } else if (event.keyCode === 40) { // down
      if (currentShape === "squareRed") {
        points++;
      } else {
        points--;
      }
    }
    drawRandomShape(ctx, width, height);
  });
  drawGameStartText(ctx, width, height, 0);
});
