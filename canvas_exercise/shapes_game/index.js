window.addEventListener("load", function() {

  var canvas = document.getElementById("shapes-game"),
      height = canvas.scrollHeight,
      width = canvas.scrollWidth,
      // gameOn = false,
      // expectedKey = undefined,
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

  var shapeVal = 0;
  var totalScore = 0;
  var timerCountDown = 1;
  var keyCodes = [37, 38, 39, 40];


//-------------------------------------------------------------------  
//Opening screen
drawStartText();

//-------------------------------------------------------------------  
//Start Game
  function startGame() {
    clear(); //clear the canvas
    drawRandomShape(); //add a random shape track scoring 
    countDown(); //start timer countdown
  }

//-------------------------------------------------------------------

function drawStartText() {
  ctx.font = '40px serif';
  ctx.fillStyle = 'orange';
  ctx.fillText('Press the Space Bar to start a new game', 60, 340);
}

function drawStartTextAfterGame() {
  ctx.font = '40px serif';
  ctx.fillStyle = 'orange';
  ctx.fillText('Game Over', 290, 340);  
  ctx.fillText('Press the Space Bar to start a new game', 60, 380);  
}

//To start game, listen for spacebar keypress
document.body.onkeypress = function(e){
    if(e.keyCode === 32){
      startGame();
    } 
}

function clear() {
  ctx.clearRect(0, 0, height, width); 
}

  function drawRandomShape() {
    //draw random image
    var randomImg = Math.floor(Math.random()*(5-1)+1);
    switch(randomImg) {
      case 1:
        drawRedSquare()
        break;
      case 2:
        drawWhiteSquare()
        break;
      case 3:
        drawRedTriangle()
        break;
      case 4:
        drawWhiteTriangle()
    }
    //compare image's value to keycode value, and calculate scoring
    document.body.onkeydown = function(e){
      if(e.keyCode == shapeVal) {
        totalScore++
        scoreSpan.innerHTML = totalScore;
        clear()
        drawRandomShape()
      } else if(keyCodes.includes(e.keyCode)) {
        totalScore--
        scoreSpan.innerHTML = totalScore;
        clear()
        drawRandomShape()
      }
    }
  }

  function randomCoordinate() {
    return Math.floor(Math.random()*(600-100)+100);
  }

//-------------------------------------------------

function countDown() {
    timerCountDown = 30;
    var intervalID = setInterval(function () {
        timerSpan.innerHTML = timerCountDown;
        timerCountDown-- ;
          if(timerCountDown < 1) {
          clearInterval(intervalID);  //if i is 0, then stop the interval
          endGame();
          totalScore = 0;
            if (event.onkeypress) {
    event.preventDefault();
  }
          }
    }, 1000);
}


function endGame() {
  clear();
  drawStartTextAfterGame(); 
  timerSpan.innerHTML = "0";
  scoreSpan.innerHTML = totalScore+1;

}


//-------------------------------------------------------------------
//shape functions
  function drawRedSquare() {
    shapeVal = 40
    var upperLeftX = randomCoordinate()
    var upperLeftY = randomCoordinate()
    var width = 100;
    var height = 100;
    ctx.fillStyle = "red";
    ctx.fillRect(upperLeftX, upperLeftY, width, height); 
  }

  function drawWhiteSquare() {
    shapeVal = 39
    var upperLeftX = randomCoordinate()
    var upperLeftY = randomCoordinate()
    var width = 100;
    var height = 100;
    ctx.fillStyle = "white";
    ctx.fillRect(upperLeftX, upperLeftY, width, height); 
  }  

function drawWhiteTriangle() {  
    shapeVal = 38
    var xCoord = randomCoordinate()
    var yCoord = randomCoordinate()
    var canvas = document.getElementById('shapes-game');
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(xCoord, yCoord);    
    ctx.lineTo(xCoord, yCoord + 100);
    ctx.lineTo(xCoord + 100, yCoord + 100);    
    ctx.fill();
}

function drawRedTriangle() {  
    shapeVal = 37
    var xCoord = randomCoordinate()
    var yCoord = randomCoordinate()
    var canvas = document.getElementById('shapes-game');
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(xCoord, yCoord);    
    ctx.lineTo(xCoord, yCoord + 100);
    ctx.lineTo(xCoord + 100, yCoord + 100);    
    ctx.fill();
}


});

