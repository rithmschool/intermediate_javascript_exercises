window.addEventListener("load", function() {

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
      score = 0,
      seconds = 30,
      intervalId;

  canvas.width = width;
  canvas.height = height;

  function drawRandomShape() {
    var randomiser = Math.floor(Math.random() * 4);
    var randomX = 50 + Math.floor(Math.random() * 650);
    var randomY = 50 + Math.floor(Math.random() * 600);
    var whiteTriangle = {
      color: "white",
      draw: function(x,y) {
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x,y+60);
        ctx.lineTo(x+60,y+60);
        ctx.lineTo(x,y);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        expectedKey = 38;
      }
    };
    var redTriangle = {
      color: "red",
      draw: function(x,y) {
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x,y+60);
        ctx.lineTo(x+60,y+60);
        ctx.lineTo(x,y);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        expectedKey = 37;
      }
    };;
    var whiteSquare = {
      width: 50,
      height: 50,
      color: "white",
      draw: function(x,y) {
        ctx.fillStyle = this.color;
        ctx.fillRect(x, y, this.width, this.height);
        expectedKey = 39;
      }
    };
    var redSquare = {
      width: 50,
      height: 50,
      color: "red",
      draw: function(x,y) {
        ctx.fillStyle = this.color;
        ctx.fillRect(x,y, this.width, this.height);
        expectedKey = 40;
      }
    };
    if (randomiser < 1) {
      whiteTriangle.draw(randomX,randomY);
    } else if (randomiser < 2) {
      redTriangle.draw(randomX,randomY)
    } else if (randomiser < 3) {
      whiteSquare.draw(randomX,randomY);
    } else {
      redSquare.draw(randomX,randomY);
    }
  }

  function drawGameStartText() {
    var startBar = {
      width: 800,
      height: 600,
      color: "#292929",
      draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 70, this.width, this.height);
      }
    };
    var gameText = {
      color: "red",
      draw: function() {
        ctx.fillStyle = this.color;
        ctx.font = '48px serif';
        ctx.fillText("Press spacebar to start!",200,375);
      }
    }
    startBar.draw();
    gameText.draw();
  }

  function startGame() {
    intervalID = setInterval(intervalTracker, 1000);
    drawRandomShape()
  }

  function intervalTracker() {
    if (seconds <= 0) {
      timerSpan.innerHTML = seconds.toString()
      clearTimeout(intervalID);
      restartGame();
    } else {
      console.log(seconds);
      seconds--;
      timerSpan.innerHTML = seconds.toString();
    }
  }

  function restartGame() {
    var endBar = {
      width: 800,
      height: 600,
      color: "#292929",
      draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 70, this.width, this.height);
      }
    };
    var endText = {
      color: "red",
      draw: function() {
        ctx.fillStyle = this.color;
        ctx.font = '48px serif';
        ctx.fillText("Your score is: " + scoreSpan.innerText,240,375);
      }
    }
    var restartText = {
      color: "red",
      draw: function() {
        ctx.fillStyle = this.color;
        ctx.font = '36px serif';
        ctx.fillText("(press spacebar to reset)",235,425);
      }
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    endBar.draw();
    endText.draw();
    restartText.draw();
  }
  document.addEventListener("keyup", function(event) {
    //spacebar functionality
    if (event.keyCode === 32) {
      if (gameOn === false) {
          gameOn = true;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          startGame();

        } else if (gameOn === true && seconds === 0) {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          gameOn = false;
          seconds = 30;
          score = 0;
          scoreSpan.innerHTML = score.toString();
          timerSpan.innerHTML = seconds.toString();
          drawGameStartText()
        }
      }
    //up-arrow functionality
    if(event.keyCode === 38) {
      if (gameOn === true && seconds > 0) {
        if (expectedKey === 38) {
          score++;
          scoreSpan.innerHTML = score.toString();
        } else {
          score--;
          scoreSpan.innerHTML = score.toString();
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawRandomShape()
      }
    }
    //down-arrow functionality
    if(event.keyCode === 40) {
      if (gameOn === true && seconds > 0) {
        if (expectedKey === 40) {
          score++;
          scoreSpan.innerHTML = score.toString();
        } else {
          score--;
          scoreSpan.innerHTML = score.toString();
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawRandomShape()
      }
    }
    //right-arrow functionality
    if(event.keyCode === 39) {
      if (gameOn === true && seconds > 0) {
        if (expectedKey === 39) {
          score++;
          scoreSpan.innerHTML = score.toString();
        } else {
          score--;
          scoreSpan.innerHTML = score.toString();
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawRandomShape()
      }
    }
    //left-array functionality
    if(event.keyCode === 37) {
      if (gameOn === true && seconds > 0) {
        if (expectedKey === 37) {
          score++;
          scoreSpan.innerHTML = score.toString();
        } else {
          score--;
          scoreSpan.innerHTML = score.toString();
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawRandomShape()
      }
    }
  })
  drawGameStartText();
});

