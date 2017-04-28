window.addEventListener("load", function() {

  var canvas = document.getElementById("shapes-game"),
      height = canvas.scrollHeight,
      width = canvas.scrollWidth,
      gameOn, 
      choiceShape = undefined,
      ctx = canvas.getContext('2d'),
          // white triangle = up, red square = down,
          // red triangle = left, white square = right
      // expectedKeysMap = {white0: 38, red1: 40, red0: 37, white1: 39},
      timerSpan = document.getElementById("time-remaining"),
      scoreSpan = document.getElementById("score-val"),
      seconds = 3,
      intervalId,
      time,
      choiceShape,
      choiceX,
      choiceY;

  canvas.width = width;
  canvas.height = height;


  function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function changeScore(correct) {
    var num = +(scoreSpan.innerText)
    if(correct) {
      scoreSpan.innerText = num + 1;
      correct = false;
    } else {
      scoreSpan.innerText = num - 1;
    }
  }

  function advanceTime() {
    time = +(timerSpan.innerText)      //// Reset TIME 
    if(time > 0) {
      timerSpan.innerText = time - 1;
    } else {
        gameEnd();
    }
  }

  // function gameStatus() {
  //   if(time > 0) {
  //     drawRandomShape();
  //   } else {
  //     gameEnd();    //////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*******
  //   }
  // }

  function drawRandomShape() {
    clear();
    choiceShape = Math.round(Math.random()*3);
    choiceX = Math.round(Math.random()*350);
    choiceY = Math.round(Math.random()*350);
    
    if(choiceShape === 1) {
      drawSquare("red", choiceX, choiceY);   //down
    } else if(choiceShape === 2) {
      drawSquare("white", choiceX, choiceY);   //right
    } else if(choiceShape === 3) {
      drawTriangle("red", choiceX, choiceY);  //left
    } else {
      drawTriangle("white", choiceX, choiceY);  //up
    }
  }

  function drawGameStartText() {      
    clear(); 
    ctx.font = '18px serif';
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText('Press the space bar to begin play!', width/2, height/2);      
  }

  function gameEnd() {
    gameOn = false;   
    clear();       
    ctx.font = '18px serif';
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText('Your score = ' + scoreSpan.innerText, width/2, height/2.2);
    ctx.fillText('Game over. Press space if you want to play again.', width/2, height/2);  
  }

/////// THIS NEEDS TO BE COMBINED WITH ABOVE
//   function restartGame(ctx, width, height) {
//     gameOn = true;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawRandomShape();
//   }

  function drawSquare(color, x, y) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 50, 50);
  }

  function drawTriangle(color, x, y) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x, y+50);
    ctx.lineTo(x+50, y+50);
    ctx.fill();
    ctx.closePath();
  }


  document.addEventListener("keyup", function(e) {
    var correct;
    if (e.keyCode == 32 && !gameOn) {
      gameOn = true;
      scoreSpan.innerText = 0;
      timerSpan.innerText = 30;        
      drawRandomShape();        
      setInterval(advanceTime, 1000/1);
    } else if (e.keyCode === 37 && gameOn) {
      if(choiceShape == 3) {
        correct = true;
      } else {
        correct = false;
      }
    } else if (e.keyCode === 38 && gameOn) {
      if(choiceShape == 0) {
        correct = true;
      } else {
        correct = false;
      }
    }  else if (e.keyCode === 39 && gameOn) {
      if(choiceShape == 2) {
                correct = true;
      } else {
        correct = false;
      }
    } else if (e.keyCode === 40 && gameOn) {
      if(choiceShape == 1) {
        correct = true;
      } else {
        correct = false;
      }
    }
       

    if (correct !== undefined) {
      changeScore(correct);
      drawRandomShape();
    }
  });
 
  drawGameStartText();
  
});
