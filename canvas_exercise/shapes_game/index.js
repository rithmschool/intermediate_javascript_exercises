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
    
    
    
    var randomSquareCorner = Math.floor(Math.random() * 300 + 50);
    //SHAPES
    var squareRed = {
    corner: [Math.floor(Math.random() * 300 + 50), Math.floor(Math.random() * 300 + 50)],
    width: 50,
    height: 50,
    color: "red",
    draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.corner[0], this.corner[1], this.width, this.height);
    }
}
    
    var squareWhite = {
    corner: [Math.floor(Math.random() * 300 + 50),Math.floor(Math.random() * 300 + 50)],
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
     var x = Math.floor(Math.random() * 300 + 50);
     var y = Math.floor(Math.random() * 300 + 50);
     ctx.fillStyle = "white";
     ctx.moveTo(x, y);
     ctx.lineTo(x + 50, y + 50);
     ctx.lineTo(x, y + 50);
     ctx.fill();
        }
     function drawTriangleRed(){
     var x = Math.floor(Math.random() * 300 + 50);
     var y = Math.floor(Math.random() * 300 + 50);
     ctx.fillStyle = "red";
     ctx.moveTo(x, y);
     ctx.lineTo(x + 50, y + 50);
     ctx.lineTo(x, y + 50);
     ctx.fill();
        }
    
    var arrayOfShapes = [drawTriangleRed, drawTriangleWhite, drawSquareRed, drawSquareWhite];
    setInterval(arrayOfShapes[Math.floor(Math.random() * 3)], );
    
});

