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
    seconds = 3,
    intervalId;

  canvas.width = width;
  canvas.height = height;

  drawGameStartText()

  function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function drawRandomShape() {
    var randomShape = ['white0', 'red1', 'red0', 'white1'][Math.floor(Math.random()*4)],
        x = Math.floor(Math.random()*(width-100)),
        y = Math.floor(Math.random()*(height-100));
        ctx.fillStyle = randomShape.slice(0, -1);

    clear()

    function square(){
      ctx.fillRect(x,y,100,100);
    }

    function triangle(){
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.lineTo(100+x, 100+y);
      ctx.lineTo(x, 100+y);
      ctx.fill();
      ctx.closePath();
    }

    if(+randomShape[randomShape.length-1] === 1){
      square()
    } else {
      triangle()
    }
    expectedKey = randomShape;
  }


  function drawGameStartText() {
    clear()
    ctx.font = '30px serif';
    ctx.fillStyle = 'white';
    ctx.fillText('Press the space bar to start a new game', 150, 350);
  }

  function restartGame() {
    timerSpan.innerText = 30;
    scoreSpan.innerText = 0;
    gameOn = false;

    drawGameStartText()
  }

  document.addEventListener("keyup", function(e) {
    if(gameOn){
      if(e.keyCode === expectedKeysMap[expectedKey]){
        scoreSpan.innerText = +scoreSpan.innerText + 1;
      } else {
        scoreSpan.innerText = +scoreSpan.innerText - 1;
      }
      drawRandomShape()
    }

    if(!gameOn && e.keyCode === 32){
      gameOn = true;
      var timerId = setInterval(function(){
          timerSpan.innerText = +timerSpan.innerText - 1;
      },1000);

      setTimeout(function(){
         clearTimeout(timerId);
         restartGame();
      },31000);
    }
  });

});

