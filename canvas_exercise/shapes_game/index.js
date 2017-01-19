window.addEventListener("load", function() {

  function clear(ctx, width, heigt) {
    ctx.clearRect(0, 0, width, heigt);
  }

  function drawRandomShape(ctx, width, height) {
    // Get a random color.  Either red or white
    var color = ["red", "white"][Math.floor(Math.random() * 2)];
    
    const size = 100;
    // Starting path for triangles and squares
    var trianglePath = [[0,0], [0,size], [size, size]];
    var squarePath = trianglePath.slice();
    squarePath.push([size, 0]);

    // Getting a shape, either triangle or square
    var index = Math.floor(Math.random() * 2)
    var shapePath = [trianglePath, squarePath][index];


    var translateX = Math.floor(Math.random() * (width - size));
    var translateY = Math.floor(Math.random() * (height - size));


    ctx.beginPath();
    ctx.fillStyle = color;
    var p0 = shapePath[0];
    ctx.moveTo(p0[0] + translateX, p0[1] + translateY);
    for (var i = 1; i < shapePath.length; i++) {
      var p = shapePath[i];
      ctx.lineTo(p[0] + translateX, p[1] + translateY);
    }
    ctx.fill();

    return color + index;
  }

  function drawGameStartText(ctx, width, height, score) {
    ctx.font = "38px serif";
    ctx.fillStyle = "white"
    ctx.fillText("Press the space bar to start a new game", width / 2 - 275, height / 2);
    if (score !== undefined) {
      ctx.font = "30px serif";
      ctx.fillText(`Score: ${score}`, width / 2 - 50, height / 2 + 50);
    }
  }

  function restartGame(ctx, width, height) {
    seconds = 30;
    scoreSpan.innerHTML = 0;
  }

  var expectedKey = undefined;

  var canvas = document.getElementById("shapes-game"),
      height = canvas.scrollHeight,
      width = canvas.scrollWidth,
      gameOn = false,
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
    if (!gameOn && event.which === 32) {
      gameOn = true;
      restartGame();
      clear(ctx, width, height);
      expectedKey = expectedKeysMap[drawRandomShape(ctx, width, height)];
      intervalId = setInterval(function() {
        seconds--;
        if (seconds === 0) {
          clearInterval(intervalId);
          gameOn = false;
          var score = +scoreSpan.innerHTML;
          restartGame();
          clear(ctx, width, height);
          drawGameStartText(ctx, width, height, score);
        }
        timerSpan.innerHTML = seconds;
      }, 1000);
    } else if (gameOn && Object.values(expectedKeysMap).includes(event.which)) {
      if (expectedKey === event.which) {
        scoreSpan.innerHTML = Number(scoreSpan.innerHTML) + 1;
        console.log("Got it!");
      } else {
        scoreSpan.innerHTML = Number(scoreSpan.innerHTML) - 1;
      }
      clear(ctx, width, height);
      expectedKey = expectedKeysMap[drawRandomShape(ctx, width, height)];
    }  
  });
  drawGameStartText(ctx, width, height);
});

