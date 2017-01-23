window.addEventListener("load", function() {
//Clears the screen when called
  function clear(ctx, width, height) {
      ctx.clearRect(0,0, width, height);
  };

  function drawRandomShape(ctx, width, height) {

    clear(ctx,width,height);

    var randX = Math.floor(Math.random() * 720);
    var randY = Math.floor(Math.random() * 700);
    var rand = Math.random();

      var square = {
          corner: [randX, randY],
          width: 50,
          height: 50,
          draw: function () {
            ctx.fillStyle = "white";
            ctx.fillRect(this.corner[0],this.corner[1], this.width, this.height);
          }
      };

      var squareR = {
          corner: [randX, randY],
          width: 50,
          height: 50,
          draw: function () {
            ctx.fillStyle = "red";
            ctx.fillRect(this.corner[0],this.corner[1], this.width, this.height)
          }
      };

      var triangle = {
          corner: [randX, randY],
          draw: function () {
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.moveTo(this.corner[0], this.corner[1]);
            ctx.lineTo(this.corner[0]+50, this.corner[1]+50);
            ctx.lineTo(this.corner[0], this.corner[1]+50);
            ctx.fill();
            ctx.closePath();
          }
      };

      var triangleR = {
          corner: [randX, randY],
          draw: function () {
            ctx.fillStyle =  "red";
            ctx.beginPath();
            ctx.moveTo(this.corner[0], this.corner[1]);
            ctx.lineTo(this.corner[0]+50, this.corner[1]+50);
            ctx.lineTo(this.corner[0], this.corner[1]+50);
            ctx.fill();
            ctx.closePath();
          }
      }
  //draws one of four shapes based on rand value
        if (rand < .25 ) {
          triangleR.draw();
          expectedKey = 37
        } else if (rand < .5 && rand > .25) {
          square.draw();
          expectedKey = 39
        } else if (rand > .5 && rand < .75) {
          squareR.draw();
          expectedKey = 40
        } else if (rand >= .75){
          triangle.draw();
          expectedKey = 38
        }   
  };

//prompts for user to start the game
  function drawGameStartText(ctx, score) {
      ctx.fillStyle = "white";
      ctx.font = "bold 30px comic sans";
      ctx.fillText("Press space bar to start a new game", 165, 360, 700);
      ctx.fillText("score: " + score.innerHTML, 350, 500);   
  }
//resets values
  function restartGame(ctx, width, height) {
      timerSpan.innerHTML = 30;
      scoreSpan.innerHTML = 0;
  }
//variables used throughout the game and its functions
  var canvas = document.getElementById("shapes-game"),
      height = canvas.scrollHeight,
      width = canvas.scrollWidth,
      gameOn = false,
      expectedKey = undefined,
      ctx = canvas.getContext('2d'),
      expectedKeysMap = {white0: 38, red1: 40, red0: 37, white1: 39},
      timerSpan = document.getElementById("time-remaining"),
      scoreSpan = document.getElementById("score-val"),
      seconds = 30,
      intervalId;

  canvas.width = width;
  canvas.height = height;

  document.addEventListener("keyup", function(eventObj) {
    //if game is NOT running and user hits Spacebar, sets gameOn value to true and starts recursively calling
    //drawRandomShape(). Also sets interval to increment timer element down 1 per second, and sets two timeout functions
    //that clear the board and display end-game text and score. When gameOn = false, press space to start again;
    if (eventObj.which === 32 && gameOn === false) {
      restartGame(ctx, width, height);
      drawRandomShape(ctx, width, height);
      gameOn = true;
      
      var intervalId = setInterval(function () {
        timerSpan.innerHTML -= 1;
        if (timerSpan.innerHTML == 0) {
        clearInterval(intervalId);
        }
      }, 1000);
      setTimeout(function () {
          clear(ctx, width, height);
      }, 30000);
      setTimeout(function () {
          ctx.style = "white";
          ctx.fillText("Final Score: " + scoreSpan.innerHTML, 300, 400);
      }, 30000);
      setTimeout(function () {
          gameOn = false;
      }, 30000);
  };
        //NOT WORKING: prevents arrow keys from moving the screen by default
        console.log([32, 37, 38, 39, 40].indexOf(eventObj.which) > -1);
        if([32, 37, 38, 39, 40].indexOf(eventObj.which) > -1) {
          eventObj.preventDefault();
        };
        //if event object key matches player input, increment score by 1
        if (eventObj.which === 37 && eventObj.which === expectedKey) {
            scoreSpan.innerHTML = Number(scoreSpan.innerHTML) + 1; 
        }
        if (eventObj.which === 38 && eventObj.which === expectedKey) {
            scoreSpan.innerHTML = Number(scoreSpan.innerHTML) + 1; 
        }
        if (eventObj.which === 39 && eventObj.which === expectedKey) {
            scoreSpan.innerHTML = Number(scoreSpan.innerHTML) + 1; 
        }
        if (eventObj.which === 40 && eventObj.which === expectedKey) {
            scoreSpan.innerHTML = Number(scoreSpan.innerHTML) + 1; 
        };
  //clears board for next shape IF game is set to ON
  if (gameOn) {
    clear(ctx, width, height);
  //draws random shape again for next round IF game is set to ON
    drawRandomShape(ctx, width, height);
    }
});
//things done before any player input
drawGameStartText(ctx, scoreSpan); 
});

