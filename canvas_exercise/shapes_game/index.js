window.addEventListener("load", function() {


  function clear(ctx, width, height) {
    ctx.clearRect(0,0,canvas.width,canvas.height)
  }

  function createTriangle(x,y) {
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+100,y+100);
    ctx.lineTo(x,y+100);
    ctx.fill();
    ctx.closePath();
  }


  function drawRandomShape(ctx, width, height) {
    var shape = (Math.floor(Math.random() *4))+1  //number from 1-4
    var x = (Math.floor(Math.random() * 700))+1   //wont go out of bounds on x axis
    var y = (Math.floor(Math.random() * 650))+1   //wont go out of bounds on y axis


    if (shape === 1) {
      ctx.fillStyle = "white"
      createTriangle(x,y)
      expectedKey = 38

    } else if (shape === 2) {
      ctx.fillStyle = "red"
      ctx.fillRect(x,y,100,100)
      expectedKey = 40

    } else if (shape === 3) {
      ctx.fillStyle = "red"
      createTriangle(x,y)
      expectedKey = 37

    } else if (shape === 4) {
      ctx.fillStyle = "white"
      ctx.fillRect(x,y,100,100)
      expectedKey = 39

    }
  }

  function drawGameStartText(ctx, width, height) {
   
    ctx.fillStyle = "white"
    ctx.font = "38px serif"
    ctx.fillText("Press the space bar to start a new game",100, 350)
}

  function restartGame(ctx, width, height, score) {
    
    drawGameStartText(ctx,width,height)
    ctx.font = "25px serif"
    ctx.fillText("Score: " + score, 350,400)

  }

  function clearAndShow(ctx,width,height) {
    clear(ctx,width,height)
    drawRandomShape(ctx,width,height)
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
      seconds = 0,
      intervalId;

  canvas.width = width;
  canvas.height = height;

  drawGameStartText(ctx, width, height)

  document.addEventListener("keyup", function(e) {
    //I feel like this nested if statements can be condensed.
    if (timerSpan.innerHTML > 29) {
      if (e.keyCode === 32) {
        clearAndShow(ctx,width,height) // when space is first pressed, clear the words and show the first shape.
        var decreaseTimerId = setInterval(function(){
          timerSpan.innerHTML --; // decrease timer span
          seconds ++ // variable to check when 30 seconds has elapsed ... somehow I could not use timerSpan.innerHTML to check??
          if (seconds === 30) {
            clearInterval(decreaseTimerId);
            clear(ctx, width, height)
            //show score on the screen and reset all the variables.
            restartGame(ctx,width,height,scoreSpan.innerHTML) 
            seconds = 0;
            timerSpan.innerHTML = 30
            scoreSpan.innerHTML = 0
          }
        },1000) 
      }
      //^ everything above checks if the space key is pressed and do some action based on a condition.
    } else if (e.keyCode === expectedKey) {
      scoreSpan.innerHTML ++
    } else {
      scoreSpan.innerHTML --
    }

  clearAndShow(ctx,width,height)
  });

});

