window.addEventListener("load", function() {

  function clear(ctx, width, heigt) {
    ctx.clearRect(0, 0, width, height);
  }

  function drawTraingle(ctx, width, height, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(width,height);
    ctx.lineTo(width+100, height+100);
    ctx.lineTo(width, height+100);
    ctx.fill();
    ctx.closePath();
  }

  function drawRandomShape(shapes) {
    var shape = shapes[Math.floor(Math.random()*shapes.length)];
    var randWidth = Math.floor(Math.random() * (700 - 100)) + 100;
    var randHeight = Math.floor(Math.random() * (650 - 100)) + 100;
    var eKey;
    switch(shape) {
      case "redT":
          clear(ctx, (canvas.width), (canvas.height));
          drawTraingle(ctx, randWidth, randHeight, "red");
          eKey = "redT";
          break;
      case "redS":
          clear(ctx, (canvas.width), (canvas.height));
          drawSquare(ctx, randWidth, randHeight, 100, 100, "red");
          eKey = "redS";
          break;
      case "whiteT":
          clear(ctx, (canvas.width), (canvas.height));
          drawTraingle(ctx, randWidth, randHeight, "white");
          eKey = "whiteT";
          break;
      case "whiteS":
          clear(ctx, (canvas.width), (canvas.height));
          drawSquare(ctx, randWidth, randHeight, 100, 100, "white");
          eKey = "whiteS";
          break;
      default:
          clear(ctx, (canvas.width), (canvas.height));
          drawTraingle(ctx, randWidth, randHeight, "red");
          eKey = "redT";
    }
    return eKey;
  }

  function drawSquare(ctx, startx, starty, width, height, color) {
    var square = {
      corner: [startx,starty],
      width: width,
      height: height,
      color: color,
      draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.corner[0], this.corner[1], this.width, this.height);
      }
    }
    square.draw();
  }

  function drawGameStartText(ctx, width, height, score) {
    ctx.fillStyle = "#FFFFFF";
    ctx.font = '30px san-serif';
    ctx.textBaseline = 'middle'; 
    ctx.textAlign = 'center'; 
    ctx.fillText('Press the space bar to start a new game.' , width, height);
    ctx.fillText("Score: " + score, width, height + 30);
  }


  //.  ########################## //
  //          Loading prep work
  //.  ########################## //
  var canvas = document.getElementById("shapes-game"),
  height = canvas.scrollHeight,
  width = canvas.scrollWidth,
  gameOn = false,
  expectedKey = undefined,
  shapes = ["whiteS", "whiteT", "redS", "redT"],
  ctx = canvas.getContext('2d'),
  // white triangle = up, red square = down,
  // red triangle = left, white square = right
  expectedKeysMap = {whiteT: 38, redS: 40, redT: 37, whiteS: 39},
  timerSpan = document.getElementById("time-remaining"),
  scoreSpan = document.getElementById("score-val"),
  seconds = 3,
  cScore = 0,
  intervalId;
  canvas.width = width;
  canvas.height = height;
  drawGameStartText(ctx, (canvas.width/2), (canvas.height/2), 0);

  //.  ########################## //
  //         Key up activities
  //.  ########################## //
  document.addEventListener("keyup", function(e) {
    if (e.keyCode === 32) {
      gameOn = true;
      expectedKey = drawRandomShape(shapes);

      // start timer
      var time = parseInt(timerSpan.innerText);
      intervalId = setInterval(function() {
        timerSpan.innerText = --time;
        if (time === 0) {
          clearInterval(intervalId);
          // reset gameOn, score and time to default values
          gameOn = false;
          scoreSpan.innerText = "0";
          timerSpan.innerText = "30";
          // display text
          clear(ctx, (canvas.width), (canvas.height));
          drawGameStartText(ctx, (canvas.width/2), (canvas.height/2), cScore);
        }
      }, 1000);
    }
    else { // score computations
      if(gameOn) {
        cScore = parseInt(scoreSpan.innerText);
        if (e.keyCode === expectedKeysMap[expectedKey])
          scoreSpan.innerText = ++cScore;
        else {
          if(cScore > 0)
            scoreSpan.innerText = --cScore;
        }

        expectedKey = drawRandomShape(shapes);
      }
    }
  });
});