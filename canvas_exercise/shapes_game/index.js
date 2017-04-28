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
  var gameScore = 0;
  var gamePlay = false;
  var countDownTimer;
  var animateShape ; // to be used by functions inside the draw functions.
  var cBuff = "xxxxxxxxxxxx";
  var konami = "abbarlrldduu";

  startGame();

  document.addEventListener("keyup", function (e) {

    // konami code
    // last char off
    // add result to beginning.
    if (gamePlay){
      cBuff = keyToChar(e.keyCode) + cBuff.substring(0,11);

      // compare to konami
      if (cBuff === konami){
        console.log("you are the big winner");
        
        endGame();
        gameScore +=10000000;
        scoreSpan.innerText = gameScore
        clearInterval(countDownTimer);
      } 
    }

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
      clearInterval(animateShape);
      // score something
      gameScore++;
      // next round
      drawRandomShape()
    } else {
      // decrement the score.
      debugger;
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
      countDownTimer = setInterval(function () {
        secondsLeft--;
        timerSpan.innerText = secondsLeft;
        if (secondsLeft <= 0) {
          clearInterval(countDownTimer);
          endGame();
        }
      }, 1000);
    }
  });

  function keyToChar(keyPress){
    switch(keyPress) {
    case 65:
        return "a";
        break;
    case 66:
        return "b";
        break;
    case 38:
        return "u";
        break;
    case 40:
        return "d";
        break;
    case 37:
        return "l";
        break;
    case 39:
        return "r";
        break;
    default:
        return "x"
    }

  }

  function startGame() {
    clear(ctx, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.font = '48px serif';
    ctx.fillText("Begingame", 295, 350);
    ctx.font = '18px serif';
    ctx.fillText("Spacebar to start", 345, 410);
  }

  function endGame() {
    if (animateShape) clearInterval(animateShape);
    //if (countDownTimer) clearInterval(countDownTimer);
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
      corner: [Math.random() * 700, Math.random() * 500],
      width: 50,
      height: 50,
      color: color,
      draw: function () {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.corner[0], this.corner[1], this.width, this.height);
      }
    }
    square.draw();
    animateShape = setInterval(function(){
      // clear
      clear(ctx, canvas.width, canvas.height);
      //draw square in new position.
      square.corner[1] += 1;
      square.draw();
    }, 50)
  }

  function drawTriangle(color) {
    var xRange = Math.random() * 700;
    var yRange = Math.random() * 500;
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
    animateShape = setInterval(function(){
      // clear
      clear(ctx, canvas.width, canvas.height);
      //draw square in new position.
      //square.corner[1] += 5;
      triangle.y1 += 1;
      triangle.y2 += 1;
      triangle.y3 += 1;
      triangle.draw();
    }, 50)
  }

});