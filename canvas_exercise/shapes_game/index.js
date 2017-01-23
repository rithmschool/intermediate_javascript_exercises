window.addEventListener("load", function() {

<<<<<<< HEAD
  function clear(ctx, width, height) {
=======
  function clear(ctx, width, heigt) {
>>>>>>> 14056facdfa58b3e06b572e1f423e75b437afea4
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

<<<<<<< HEAD
  
    
    
    //******************SHAPE FUNCTIONS***********************//
    var randomSquareCorner = Math.floor(Math.random() * 300 + 50);
    //SHAPES
    var squareRed = {
    corner: [Math.floor(Math.random() * 650 + 50), Math.floor(Math.random() * 650 + 50)],
    width: 50,
    height: 50,
    color: "red",
    draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.corner[0], this.corner[1], this.width, this.height);
    }
}
    
    var squareWhite = {
    corner: [Math.floor(Math.random() * 650 + 50),Math.floor(Math.random() * 650 + 50)],
    width: 50,
    height: 50,
    color: "white",
    draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.corner[0], this.corner[1], this.width, this.height);
    }
}

  function drawSquareRed() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    squareRed.corner[0] ;
    squareRed.corner[1] ;
    squareRed.draw();
    }
function drawSquareWhite() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    squareWhite.corner[0];
    squareWhite.corner[1];
    squareWhite.draw();
    }

   
   function drawTriangleWhite(){
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     var x = Math.floor(Math.random() * 650 + 50);
     var y = Math.floor(Math.random() * 650 + 50);
     ctx.beginPath();
     ctx.fillStyle = "white";
     ctx.moveTo(x, y);
     ctx.lineTo(x + 50, y + 50);
     ctx.lineTo(x, y + 50);
     ctx.fill();
     ctx.closePath();
        }
     function drawTriangleRed(){
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     var x = Math.floor(Math.random() * 650 + 50);
     var y = Math.floor(Math.random() * 650 + 50);
     ctx.beginPath();
     ctx.fillStyle = "red";
     ctx.moveTo(x, y);
     ctx.lineTo(x + 50, y + 50);
     ctx.lineTo(x, y + 50);
     ctx.fill();
     ctx.closePath();
        }
    
    
    
    //*********************PICK RANDOM SHAPE EVERY 3 SECONDS *****************************//
    var current = 0;
    function pickRandomShape(){
     var arrayOfShapes = [drawTriangleRed, drawTriangleWhite, drawSquareRed, drawSquareWhite];
     var random = arrayOfShapes[Math.floor(Math.random() * 4)];
      
     if(random === drawTriangleRed){
          current = 37;
     } else if(random === drawSquareWhite){
          current = 39;
         
     } else if(random === drawTriangleWhite){
          current = 38;
        
     } else if(random === drawSquareRed){
          current = 40;
         
     } 
     return random();
    }
   
    
  
    
    
    
    
    

var score = 0;
var scoreId = document.getElementById('score-val');
//****************************CHECK IF KEYPRESS CORRESPONDS WITH CURRENT**************************??
window.addEventListener("keyup", function(event){
    if(event.keyCode !== 32){
      event.preventDefault();
    
        if(event.keyCode === current){
         scoreId.innerHTML = score+=1;
       
    } else if(event.keyCode !== current) {
        scoreId.innerHTML = score-=1;
    }
}
});


    
                       
//**********************GAME COUNTDOWN TIMER ***************************//                  
      var count = 30;
    function countdown(){
       stopGame();
        var timer = document.getElementById('time-remaining');
        if(count === 30){
            pickRandomShape();
        }
        count--;
        timer.innerHTML = count;
    }
    
    function stopGame(){
        if(count === 0){
            clearInterval(gameTimer);
            clearInterval(shapeTimer);
             ctx.clearRect(0, 0, canvas.width, canvas.height);
            document.getElementById('restart-button').style.display = "block";
            alert("GAME OVER. Your score is " + scoreId.innerHTML );
        }
    }
    
    var gameTimer;
    var shapeTimer;
    //****************SET INTERVAL ************************************//
    window.addEventListener('keyup', function(){
    if(event.keyCode === 32){
        
    
     gameTimer = setInterval(countdown, 1000);
     shapeTimer = setInterval(function(){
          pickRandomShape();
    }, 3000);
    document.getElementById('start-game').style.display = "none";
    }
    });
   

    
   
    //*********************RELOAD GAME **************************************//
     document.getElementById('restart-button').addEventListener('click', function(){
       location.reload();
         });
    




});
=======
  document.addEventListener("keyup", function() {
 
  });
});

>>>>>>> 14056facdfa58b3e06b572e1f423e75b437afea4
