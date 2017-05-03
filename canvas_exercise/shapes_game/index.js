window.addEventListener("load", function() {
  //add storage
  storage = JSON.parse(localStorage.getItem("topscore"));
  if(storage === null){
    storage = [];
    var obj = {["highScore"]: 0};
    storage.push(obj);
  } else {
    var top = document.getElementById("high-score");
    top.innerText = storage[0].highScore;
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
      intervalId,
      dropId;
  canvas.width = width;
  canvas.height = height;
  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText("Press the space bar to start a new game!", canvas.width/2, canvas.height/2); 


  function drawRedSquare (x,y){
    dropId = setInterval(function(){
      if(y === canvas.height){
        clearInterval(dropId);
        scoreDown();
        drawRandomShape(ctx, canvas.width, canvas.height);
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'red';
      y++;
      ctx.fillRect(x, y, 50, 50);
    }, 5)
  }

  function drawWhiteSquare (x,y){
    dropId = setInterval(function(){
      if(y === canvas.height){
        clearInterval(dropId);
        scoreDown();
        drawRandomShape(ctx, canvas.width, canvas.height);
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      y++;
      ctx.fillRect(x, y, 50, 50);
    }, 5)
  }

  function drawTriangle(x,y){
    dropId = setInterval(function(){
      if(y === canvas.height){
        clearInterval(dropId);
        scoreDown();
        drawRandomShape(ctx, canvas.width, canvas.height);
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "red";
      y++;
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.lineTo(x + 50,y +50);
      ctx.lineTo(x, y + 50);
      ctx.fill();
      ctx.closePath();
    })

  }

  function drawWhiteTriangle(x,y){
    dropId = setInterval(function(){
      if(y === canvas.height){
        clearInterval(dropId);
        scoreDown();
        drawRandomShape(ctx, canvas.width, canvas.height);
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      y++;
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.lineTo(x + 50,y +50);
      ctx.lineTo(x, y + 50);
      ctx.fill();
      ctx.closePath();
    });

  }

  function clear(ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
  }

  function drawRandomShape(ctx, width, height) {
    clear(ctx, canvas.width, canvas.height);
    var random = Math.floor(Math.random() * 4);
    var x = Math.floor(Math.random() * (width - 50));
    var y = Math.floor(Math.random() * (height/2 - 50));
    if(random === 1){
      expectedKey = 1;
      drawRedSquare(x,y);
    } else if(random === 2){
      expectedKey = 2;
      drawWhiteSquare(x,y);
    } else if(random === 3){
      expectedKey = 3;
      drawTriangle(x,y);
    } else {
      expectedKey = 4;
      drawWhiteTriangle(x,y);
    }
  }
  // when the game ends display this
  function drawGameStartText(ctx, width, height, score) {
    clear(ctx, canvas.width, canvas.height);
    //increase high score if higher.
    if(score > storage[0].highScore){
      var high = document.querySelector('#high-score');
      high.innerText = score;
      storage[0].highScore = score;
      localStorage.setItem("topscore", JSON.stringify(storage));
    }
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Game over! your score is: " + score, canvas.width/2, canvas.height/2 - 50);
    ctx.fillText("Press the space bar to start a new game!", canvas.width/2, canvas.height/2 + 50);
    gameOn = false; 

  }

  function restartGame(ctx, width, height) {
    scoreSpan.innerText = 0;
    timerSpan.innerText = 30;
    clear(ctx, canvas.width, canvas.height);
    intervalId = setInterval(countDown, 1000);
    setTimeout(function(){
      drawGameStartText(ctx, canvas.width,canvas.height,scoreSpan.innerText);
      clearInterval(intervalId);
      clearInterval(dropId);
      expectedKey = undefined;
    }, 30000);
    gameOn = true;
  }

  function countDown(){
    var timer = timerSpan.innerText;
    timer--;
    timerSpan.innerText = timer;
  }

  function scoreUp(){
    var animate = document.querySelector('#plus');
    animate.className = "animation";
    var animate1 = document.querySelector('#shapes-game');
    animate1.className = "glowGreen";
    setTimeout(function(){
      animate.className = '';
      animate1.className = '';
    }, 1000);
    var score = scoreSpan.innerText;
    score++;
    scoreSpan.innerText = score;
  }

  function scoreDown(){
    var animate2 = document.querySelector('#minus');
    animate2.className = "animationDown";
    var animate3 = document.querySelector('#shapes-game');
    animate3.className = "glowRed";
    setTimeout(function(){
      animate2.className = '';
      animate3.className = '';
    }, 1000);
    var score = scoreSpan.innerText;
    score--;
    scoreSpan.innerText = score;
  }



  document.onkeydown = function(e){
      //reset animations
      if(e.keyCode === 38 && gameOn){
        //up
        if(expectedKey === 4){
          scoreUp();
        } else {
          scoreDown();
        }
        clearInterval(dropId);
        drawRandomShape(ctx, canvas.width, canvas.height);
      } else if (e.keyCode === 40 && gameOn) {
        //down
        if(expectedKey === 1){
          scoreUp();
        } else {
          scoreDown();
        }
        clearInterval(dropId);
        drawRandomShape(ctx, canvas.width, canvas.height);
      } else if (e.keyCode === 37 && gameOn) {
        //left
        if(expectedKey === 3){
          scoreUp();
        } else {
          scoreDown();
        }
        clearInterval(dropId);
        drawRandomShape(ctx, canvas.width, canvas.height);
      } else if (e.keyCode === 39 && gameOn) {
        //right
        if(expectedKey === 2){
          scoreUp();
        } else {
          scoreDown();
        }
        clearInterval(dropId);
        drawRandomShape(ctx, canvas.width, canvas.height);
      } else if (e.keyCode === 32 && !gameOn) {
        restartGame(ctx, canvas.width, canvas.height);
        drawRandomShape(ctx, canvas.width, canvas.height);
      }

  }
});

