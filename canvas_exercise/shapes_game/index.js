window.addEventListener("load", function() {


  function clear(ctx, width, height) {
    ctx.clearRect(0,0,canvas.width,canvas.height)
  }


  function drawRandomShape(ctx, width, height) {
    var shape = (Math.floor(Math.random() *4))+1  //number from 1-4
    var x = (Math.floor(Math.random() * 700))+1   //wont go out of bounds on x axis
    var y = (Math.floor(Math.random() * 650))+1   //wont go out of bounds on y axis

    if (shape === 1) {
      ctx.fillStyle = "white"
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.lineTo(x+100,y+100);
      ctx.lineTo(x,y+100);
      ctx.fill();
      ctx.closePath();
      correct = shape
    } else if (shape === 2) {
      ctx.fillStyle = "red"
      ctx.fillRect(x,y,100,100)
      correct = shape

    } else if (shape === 3) {
      ctx.fillStyle = "red"
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.lineTo(x+100,y+100);
      ctx.lineTo(x,y+100);
      ctx.fill();
      ctx.closePath();
      correct = shape

    } else if (shape === 4) {
      ctx.fillStyle = "white"
      ctx.fillRect(x,y,100,100)
      correct = shape

    }
  }

  function drawGameStartText(ctx, width, height, score) {
   
    ctx.fillStyle = "white"
    ctx.font = "38px serif"
    ctx.fillText("Press the space bar to start a new game",100, 350)
}

  function restartGame(ctx, width, height, score) {

    ctx.fillStyle = "white"
    ctx.font = "38px serif"
    ctx.fillText("Press the space bar to start a new game",100, 350)
    ctx.font = "25px serif"
    ctx.fillText("Score: " + score, 350,400)

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
  var correct = 0;
  drawGameStartText(ctx, width, height)

  document.addEventListener("keyup", function(e) {
    if (timerSpan.innerHTML > 29) {
      if (e.keyCode === 32) {
        clear(ctx,width,height)
        drawRandomShape(ctx,width,height)
        var decreaseTimerId = setInterval(function(){
          timerSpan.innerHTML --;
          seconds ++
          if (seconds === 30) {
            clearInterval(decreaseTimerId);
            clear(ctx, width, height)
            restartGame(ctx,width,height,scoreSpan.innerHTML)
            seconds = 0;
            timerSpan.innerHTML = 30
            scoreSpan.innerHTML = 0

          }
        },1000) 
      }
    }
    else if (correct === 1 && e.keyCode === 38) {
      scoreSpan.innerHTML ++
      clear(ctx,width,height)
      drawRandomShape(ctx,width,height)
    } else if (correct === 2 && e.keyCode === 40) {
      scoreSpan.innerHTML ++
      clear(ctx,width,height)
      drawRandomShape(ctx,width,height)
    } else if (correct === 3 && e.keyCode === 37) {
      scoreSpan.innerHTML ++
      clear(ctx,width,height)
      drawRandomShape(ctx,width,height)
    } else if (correct === 4 && e.keyCode === 39) {
      scoreSpan.innerHTML ++
      clear(ctx,width,height)
      drawRandomShape(ctx,width,height)
    } else {
      scoreSpan.innerHTML --
      clear(ctx,width,height)
      drawRandomShape(ctx,width,height)
    }

  });

});

