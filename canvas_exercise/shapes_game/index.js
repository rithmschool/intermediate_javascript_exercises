window.addEventListener("load", function() {

  function clear(ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
  }

  function drawRandomShape(ctx, width, height) {
      // needs to define expectedKey
      clear(ctx,canvas.width,canvas.height);
      var shapeArr = ["whiteTri", "redSq", "redTri", "whiteSq"];
      var expectedShape = shapeArr[Math.floor(Math.random()*3.99999)];
      var expectedKey = expectedKeysMap[expectedShape];

      // set color based on expectedShape;
      if (expectedShape === "redSq" || expectedShape === "redTri"){
        ctx.fillStyle = "red";
      } else {
        ctx.fillStyle = "white";
      }

      // randomly set location
        var upperLeftX = Math.floor(Math.random() * ((width-50) - 50)) + 50;
        var upperLeftY = Math.floor(Math.random() * ((height-50) - 50)) + 50;

      // set shape based on expectedShape
      if (expectedShape === "redSq" || expectedShape === "whiteSq") {
        var widthShape = 50;
        var heightShape = 50;
        
        ctx.fillRect(upperLeftX,upperLeftY, widthShape, heightShape);
      }

      else {
        ctx.beginPath();
        ctx.moveTo(upperLeftX, upperLeftY);
        ctx.lineTo(upperLeftX, upperLeftY+50);
        ctx.lineTo(upperLeftX+50, upperLeftY+50);
        ctx.fill();
      }

      return expectedShape;
  }

  function drawGameStartText(ctx, width, height) {
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Press space to begin",width/2,height/2);
    if(score > 0) {
      ctx.font = "20px Arial";
      ctx.fillText("You scored "+score+" points",width/2,height/2);
    }
  }

  function restartGame(ctx, width, height,oldScore,secStart) {
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Press space to play again",width/2,height/2);
    ctx.font = "20px Arial";
    ctx.fillText("You scored "+oldScore+" points",width/2,height/2 + 50);
    gameOn = false;
    timeLeft = secStart;
    score = 0;

  }

  var canvas = document.getElementById("shapes-game"),
      height = canvas.scrollHeight,
      width = canvas.scrollWidth,
      gameOn = false,
      expectedKey = undefined,
      ctx = canvas.getContext('2d'),
      // white triangle = up, red square = down,
      // red triangle = left, white square = right
      expectedKeysMap = {whiteTri: "ArrowUp", redSq: "ArrowDown", 
        redTri: "ArrowLeft", whiteSq: "ArrowRight"},
      timerSpan = document.getElementById("time-remaining"),
      scoreSpan = document.getElementById("score-val"),
      secondsStart = 5; 
      seconds = secondsStart;
      timerSpan.innerText = seconds;
      timeLeft = seconds;
      score = 0;


  canvas.width = width;
  canvas.height = height;

  drawGameStartText(ctx, width, height, score);
  var expectedShape = "";

  document.addEventListener("keyup", function() {
     var key = event.key;

     
     // *** want to prevent these keys from moving the page ***


     if (key === " " && gameOn === false) {
      // start timer

      scoreSpan.innerText = score;
      timerSpan.innerText = timeLeft;
      gameOn = true;

      intervalId = setInterval(function(){
        timeLeft--;
        timerSpan.innerText = timeLeft;
      },1000);

      // stop timer after 30 seconds and reset game
      setTimeout(function(){
        clearTimeout(intervalId);
        clear(ctx, width, height);
        restartGame(ctx, width, height, score, secondsStart);
      },seconds * 1000);

      // draw the first shape
      expectedShape = drawRandomShape(ctx,width,height);
     }

     else if (key === expectedKeysMap[expectedShape] && gameOn === true){
      // add point
      score += 1;
      scoreSpan.innerText = score;
      gameOn = true;

      // create new shape
      expectedShape = drawRandomShape(ctx,width,height);
      
     } else if (gameOn === true){
      // subtract point
      score -= 1;
      scoreSpan.innerText = score;
      gameOn = true;
     }


  });

});


