window.addEventListener("load", function() {

  function clear(ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
  }

  function drawRandomShape(ctx) {
    //0 = white triangle 1 = red triangle 2 = white square 3 = red square
    var shapes = [0, 1, 2, 3];
    var x = Math.floor(Math.random() * (650 - 100) + 100);
    var y = Math.floor(Math.random() * (650 - 100) + 100);

    if (shapes.indexOf(Math.floor(Math.random() * (4 - 0))) === 0) {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(x, x);
        ctx.lineTo(x, x + 70);
        ctx.lineTo(x + 70, x + 70);
        ctx.fill();
        ctx.closePath();
        return 0;
      }
    else if (shapes.indexOf(Math.floor(Math.random() * (4 - 0))) === 1) {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(x, x);
        ctx.lineTo(x, x + 70);
        ctx.lineTo(x + 70, x + 70);
        ctx.fill();
        ctx.closePath();
        return 1;
      }
    else if (shapes.indexOf(Math.floor(Math.random() * (4 - 0))) === 2) {
      ctx.fillStyle = 'white';
      ctx.fillRect(x, y, 70, 70);
      return 2;
    }
    else {
      ctx.fillStyle = 'red';
      ctx.fillRect(x, y, 70, 70);
      return 3;
    }
  }

  function drawGameStartText(ctx, width, height, score) {
    ctx.fillStyle = 'white';
    ctx.font = '36px serif';
    ctx.fillText('Press the space bar to start a new game', width, height);
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
  //white shapes
  // ctx.fillStyle = 'white';
  // ctx.fillRect(300, 20, 70, 70);
  // ctx.beginPath();
  // ctx.moveTo(30, 30);
  // ctx.lineTo(30, 100);
  // ctx.lineTo(100, 100);
  // ctx.fill();
  // ctx.closePath();
  // //red Shapes
  // ctx.fillStyle = 'red';
  // ctx.fillRect(200, 400, 70, 70);
  // ctx.beginPath();
  // ctx.moveTo(200, 200);
  // ctx.lineTo(200, 270);
  // ctx.lineTo(270, 270);
  // ctx.fill();
  // ctx.closePath();
  // //clear shapes, triangle must be cleared like a square
  // ctx.clearRect(200, 200, 100, 100);
  // //Game start text
  // ctx.fillStyle = 'white';

  //timer

  drawGameStartText(ctx, 100, 400);
  document.addEventListener("keyup", function(event) {
    if (event.keyCode === 32) {
        var countdown = 30;
        var timer = setInterval(count, 1000);
        //0 = white triangle (up) 1 = red triangle(left) 2 = white square(right) 3 = red square(down)
        function count() {
          countdown--;
          timerSpan.innerHTML = countdown;
          clear(ctx, width, height);
          if (countdown === 0) {
            timerSpan.innerHTML = countdown;
            clearInterval(timer);
          }
        }
      }
    else {
      if (event.keyCode === 37) {
        if (randomShape === 1) Number(scoreSpan.innerHTML += 1);
        else Number(scoreSpan.innerHTML -= 1);
      }
      else if (event.keyCode === 38) {
        if (randomShape === 0) Number(scoreSpan.innerHTML += 1);
        else Number(scoreSpan.innerHTML -= 1);
      }
      else if (event.keyCode === 39) {
        if (randomShape === 2) Number(scoreSpan.innerHTML += 1);
        else Number(scoreSpan.innerHTML -= 1);
      }
      else if (event.keyCode === 40){
        if (randomShape === 3) Number(scoreSpan.innerHTML += 1);
        else Number(scoreSpan.innerHTML - 1);
      }
      else Number(scoreSpan.innerHTML -= 1);
    }

      //once key gets pressed it runs functions attached
      //waits for next key to be pressed
      //
      //match expectedKey to expectedKeysMap
    drawRandomShape(ctx);
  });
});
