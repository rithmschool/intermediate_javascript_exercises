window.addEventListener("load", function () {
  function clear(ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
  }
  
  function drawRandomShape(ctx, width, height) {
    currentShape.shape = shapePicker();
    currentShape.color = colorPicker();
    if (currentShape.shape === "triangle") {
      drawTriangle(currentShape.color);
    } else {
      drawSquare(currentShape.color);
    }
  }

  var canvas = document.getElementById("shapes-game"),
    height = canvas.scrollHeight,
    width = canvas.scrollWidth,
    gameOn = false,
    expectedKey = undefined,
    ctx = canvas.getContext('2d'),
    // white triangle = up, red square = down,
    // red triangle = left, white square = right
    // expectedKeysMap = { white0: 38, red1: 40, red0: 37, white1: 39 },
    timerSpan = document.getElementById("time-remaining"),
    scoreSpan = document.getElementById("score-val");
    // seconds = 3,
    // intervalId;
  canvas.width = width;
  canvas.height = height;
  var currentShape = {
    shape: "",
    color: ""
  }
  var secondsLeft;
  var gameScore;
  var gamePlay = false;
  startGame();


  document.addEventListener("keyup", function (e) {
    var shapeGuess = { shape: "", color: "" };
    if (gamePlay && e.keyCode === 37) { // left
      shapeGuess.shape = "triangle";
      shapeGuess.color = "red"
    }
    if (gamePlay && e.keyCode === 38) { // up
      shapeGuess.shape = "triangle";
      shapeGuess.color = "white"
    }
    if (gamePlay && e.keyCode === 39) { // right
      shapeGuess.shape = "square";
      shapeGuess.color = "white"
    }
    if (gamePlay && e.keyCode === 40) { // down
      shapeGuess.shape = "square";
      shapeGuess.color = "red"
    }
    if (gamePlay && shapeGuess.color === currentShape.color && shapeGuess.shape === currentShape.shape) {
      // clear
      clear(ctx, canvas.width, canvas.height);
      // score something
      gameScore++;
      // next round
      drawRandomShape()
    } else {
      // decrement the score.
      if (gamePlay) gameScore--;
    }
    scoreSpan.innerText = gameScore;

    if (e.keyCode === 32 && gamePlay === false) { // space bar
      // start the game.
      gamePlay = true;
      // clear
      clear(ctx, canvas.width, canvas.height);
      // reset score
      gameScore = 0;
      scoreSpan.innerText = gameScore;
      // reset timer
      secondsLeft = 30;
      timerSpan.innerText = secondsLeft;
      drawRandomShape();
      var countDownTimer = setInterval(function () {
        secondsLeft--;
        console.log("seconds left:", secondsLeft);
        timerSpan.innerText = secondsLeft;
        if (secondsLeft <= 0) {
          clearInterval(countDownTimer);
          endGame();
        }
      }, 1000);
    }
  });


  function startGame() {
    clear(ctx, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.font = '48px serif';
    ctx.fillText("Begingame", 295, 350);
    ctx.font = '18px serif';
    ctx.fillText("Spacebar to start", 345, 410);
  }

  function endGame() {
    clear(ctx, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.font = '48px serif';
    // end game string "you're done."
    ctx.fillText("Endgame", 315, 350); // play with these soon to center the score.
    ctx.font = '18px serif';
    ctx.fillText("Spacebar to start", 345, 410); // play with these soon to center the score.
    gamePlay = false;
  }

  function shapePicker() {
    if (Math.random() < .5) {
      return "square";
    } else {
      return "triangle"
    }
  }

  function colorPicker() {
    if (Math.random() < .5) {
      return "red";
    } else {
      return "white";
    }
  }

  function drawSquare(color) {
    var square = {
      //corner: [50,50],
      corner: [Math.random() * 700, Math.random() * 650],
      width: 50,
      height: 50,
      color: color,
      draw: function () {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.corner[0], this.corner[1], this.width, this.height);
      }
    }
    square.draw();
  }

  function drawTriangle(color) {
    var xRange = Math.random() * 700;
    var yRange = Math.random() * 650;
    var triangle = {
      x1: 0 + xRange,
      y1: 0 + yRange,
      x2: 0 + xRange,
      y2: 50 + yRange,
      x3: 50 + xRange,
      y3: 50 + yRange,
      all: [this.x1, this.x2, this.x3, this.y1, this.y2, this.y3],
      color: color,
      draw: function () {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.lineTo(this.x3, this.y3);
        ctx.fill();
        ctx.closePath();
      }
    }
    triangle.draw();
  }

});
