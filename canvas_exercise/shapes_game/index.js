window.addEventListener("load", function() {

  function clear(ctx, width, height) {
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
         console.log(current);
     } else if(random === drawSquareWhite){
          current = 39;
         console.log(current);
     } else if(random === drawTriangleWhite){
          current = 38;
         console.log(current);
     } else if(random === drawSquareRed){
          current = 40;
         console.log(current);
     } 
     return random();
    }
    
  
    
    
    
    
    


//****************************CHECK IF KEYPRESS CORRESPONDS WITH CURRENT**************************??
window.addEventListener("keyup", function(event){
      event.preventDefault();
        if(event.keyCode === current){
       
        alert("You pressed a arrow");
    }
    
});


    
                       
//**********************GAME COUNTDOWN TIMER ***************************//                  
      var count = 30;
    function countdown(){
        var timer = document.getElementById('time-remaining');
        count--;
        timer.innerHTML = count;
    }
   var gameTimer = setInterval(countdown(), 1000);
   var shapeTimer = setInterval(function(){
          pickRandomShape();
    }, 3000);
    
    


//if arrayOfShapes[random] ==== drawTriangleRed 
 // current = 18;
// if keypress === current then score goes up
// if keypress !== current score goes down
  //while(count > 0){
        //start counting down
        //run setInterval function
        //event Listener for keypress. If keypress value === current then score up.
        // when count alert game over
        //display restart button
  //  } 
});