window.addEventListener("load", function() {

  function clear(ctx, width, heigt) {
  }

  function drawRandomShape(ctx, width, height) {

  }

  function drawGameStartText(ctx, width, height, score) {

  }

  function restartGame(ctx, width, height) {

  }

    


  var time = document.getElementById("time-remaining");
  function timer(){
    var start = 30;
    var timerId = setInterval(function(){
      console.log("decrementing");
      start--;
      time.innerText = start;
    },1000);
    setTimeout(function(){
     clearInterval(timerId);
     alert("you won!");
     reset()
    },30099);
  }

 // timer();

 function reset(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    text.draw();
    scoreId.innerText = 0;
    time.innerText = 30;
    gameOn = false;
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


var text = {
  draw: function(){
    ctx.font = "30px serif";
    ctx.fillStyle = "white";
    ctx.fillText("Press the space bar to start a new game", 150, 400);
  }
}

 text.draw();
  
var redTriangle = {
  draw: function() {
    var start = Math.random()*600;
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.moveTo(start, start+100);
    ctx.lineTo(start+50, start+150);
    ctx.lineTo(start, start+150);
    ctx.fill();
  }
}


var triangle = {
  draw: function() {
    var start = Math.random()*700
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.moveTo(start, start);
    ctx.lineTo(start, start+50);
    ctx.lineTo(start+50, start+50);
    ctx.fill();
  }
}

// var redSquare = {
//   draw: function(){
//     ctx.beginPath();
//     ctx.fillStyle= "red";
//     ctx.fillRect(500, 500, 50, 50);
//   }
// }

var redSquare = {
  corner: [650, 650],
  width: 50,
  height: 50,
  draw: function(){
    ctx.beginPath();
    ctx.fillStyle= "red";
    ctx.fillRect(Math.random()*this.corner[0], Math.random()*this.corner[1], this.width, this.height);
  }
}

var square = {
  corner: [600, 600],
  width: 50,
  height: 50,
  draw: function(){
    ctx.beginPath();
    ctx.fillStyle= "white";
    ctx.fillRect(Math.random()*this.corner[0], Math.random()*this.corner[1], this.width, this.height);
  }
}

// redSquare.draw();
// square.draw();
// redTriangle.draw();
// triangle.draw();

var expectedValue = 33;
function pickRandomShape(){
  var choice = Math.random();
  if(choice <= 0.25) {redTriangle.draw(); expectedValue = 37}
  if(choice > 0.25 && choice <=0.5) {triangle.draw(); expectedValue = 38}
  if(choice > 0.5 && choice <= 0.75) {redSquare.draw(); expectedValue = 40}
  if(choice > 0.75 && choice <= 1) {square.draw(); expectedValue = 39}
}


var scoreId = document.getElementById("score-val");
function gainScore(){
  scoreId.innerText = Number(scoreId.innerText) + 1;
}

function looseScore(){
  scoreId.innerText = Number(scoreId.innerText) - 1;
}


document.addEventListener("keyup", function(event) {
    if(event.which === 32 && !gameOn){
      console.log("insi")
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      gameOn = true;
      timer();
      pickRandomShape();
    }
})


document.addEventListener("keyup", function(event){
  if(event.which != 32){
    if(event.which === expectedValue){
      gainScore();

    }else{
      looseScore();
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pickRandomShape();
  }

})

});

