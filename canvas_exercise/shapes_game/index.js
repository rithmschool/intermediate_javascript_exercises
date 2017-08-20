//get random shape on screen
//get to go away when key pressed
//if button correct/not then move on or not
//score
//refresh when done

//window.addEventListener("load", function() {

function clear(width, height) {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

var selected = '';

//draw  random Shape in random location
function drawShape(){

  var shapesArray = [drawWhiteTri, drawRedTri, drawRedSq, drawWhiteSq];

  //var start to randomize shape locations 
  var startLocX = Math.floor(Math.random()*(height -50));
  var startLocY = Math.floor(Math.random()*(width-50));

  //functions to draw shapes
  function drawWhiteSq(){
    ctx.fillStyle = 'white'
    ctx.fillRect(startLocX,startLocY, 50,50)
    ctx.closePath();
    selected = "drawWhiteSq"
  }
  function drawRedSq(){
    ctx.fillStyle = 'red'
    ctx.fillRect(startLocX,startLocY, 50,50)
    ctx.closePath();
    selected = "drawRedSq"
  }
  function drawRedTri(){
    ctx.fillStyle = 'red'
    ctx.beginPath();
    ctx.moveTo(startLocX,startLocY)
    ctx.lineTo(startLocX + 50,startLocY + 50)
    ctx.lineTo(startLocX,startLocY + 50)
    ctx.fill();
    ctx.closePath();
    selected = "drawRedTri"
  }
  function drawWhiteTri(){
    ctx.fillStyle = 'white'
    ctx.beginPath();
    ctx.moveTo(startLocX,startLocY)
    ctx.lineTo(startLocX + 50,startLocY + 50)
    ctx.lineTo(startLocX,startLocY + 50)
    ctx.fill();
    ctx.closePath();
    selected = "drawWhiteTri"
  }

  var currentShape = shapesArray[Math.floor(Math.random()*shapesArray.length)]();

};

//restart Game by clearing screen, drawing text, and listening for space bar push
function restartGame(ctx, width, height){
  clear();
  timerSpan.innerHTML = 30;
  scoreSpan.innerHTML = 0;
  drawText();
  listenForSpaceBar();
}


var canvas = document.getElementById("shapes-game"),
    height = canvas.scrollHeight,
    width = canvas.scrollWidth,
    gameOn = false,
    expectedKey = undefined,
    ctx = canvas.getContext('2d'),
    expectedKeysMap = {drawWhiteTri: 38, drawRedSq: 40, drawRedTri: 37, drawWhiteSq: 39},
    timerSpan = document.getElementById("time-remaining"),
    scoreSpan = document.getElementById("score-val"),
    seconds = 3,  
    interValid;
    canvas.width = width;
    canvas.height = height;

function drawText() {
  ctx.font = '30px serif';
  ctx.fillStyle = 'white';
  ctx.fillText("Press the Space Bar to Begin a New Game", 100, 300)
}

//listen for spacebar, if pushed, start timer and points acrueing
function listenForSpaceBar(){
	document.addEventListener("keyup", function(event){
		  if(event.keyCode === 32){
		  	startTimer(); 
		  	points();
		  }
	  }); 
};

//start timer and once hits 30 seconds, restart game
function startTimer(){
  var timerId = setInterval(function(){
  	timerSpan.innerHTML = +timerSpan.innerHTML - 1
  },1000);

  setTimeout(function(){
     clearTimeout(timerId);
     restartGame();
  },31000);  
} 

restartGame();

function points(){
	document.addEventListener("keyup", function(event){    
	    if(event.keyCode === expectedKeysMap[selected]){
	      scoreSpan.innerHTML = +scoreSpan.innerHTML + 1;
	    } else {
	      scoreSpan.innerHTML = +scoreSpan.innerHTML - 1;
	    }
	  	clear();
	  	drawShape();
	});
}
