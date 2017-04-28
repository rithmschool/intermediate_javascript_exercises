window.addEventListener("load", function() {

  var shapeIndex = [0, 1, 2, 3];
  var shapes = ["orangeRec", "whiteRec", "orangeTri", "whiteTri"];

  function getRandomIndex(arr) {
      return arr[Math.floor(Math.random() * arr.length)]
  }

  function drawRandomShape(ctx, width, height, func){

      index = getRandomIndex(shapeIndex); // gets a random number from our list 

      var xInt = Math.random()*500;
      var yInt = Math.random()*500;
        // for generating randomly positioned triangles

      if (index === 0){
        // Execute drawRandomRectangle and sets fill style to orange
         drawRandomRectangle(ctx, 100, 100, "orange");
      }
      else if (index === 1){
        // Execute drawRandomRectangle ();
        drawRandomRectangle(ctx, 100, 100, "white");
      }
      else if (index === 2){
        // Execute drawTriangle and pass "orange" as the color
        drawRandomTriangle(ctx, xInt, yInt, "orange");
      }
      else {
        // execute drawTriangle and pass "white" as the color ();
        drawRandomTriangle(ctx, xInt, yInt,"white");
      }
  }

  function drawRandomRectangle (ctx, height, width, color) {
    ctx.fillStyle = color;
      
    var upperLeftX = Math.random()* 500;
    var upperLeftY = Math.random()* 500;

    ctx.fillRect(upperLeftX, upperLeftY, width, height);
  }

  function drawRandomTriangle (ctx, randomX, randomY, color){

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(randomX,randomY);
    ctx.lineTo(randomX,  randomY + 100);
    ctx.lineTo(randomX + 100 , randomY + 100);

    // Drawing triangle this way --> randomY increases first as we draw 100 units down, then randomX increases so we go 100 units right. 
    // remember the coordinate system of canvas (y-increases down and x increases right)
    ctx.fill();
    ctx.closePath();

  }

  function drawGameStartText(color) {
    ctx.fillStyle = color;
    ctx.font = '30px sans-serif';
    ctx.fillText('Press the spacebar to start a new game', 150, 350); 

  }


  function restartGame(ctx, width, height) {
    // when timer === 0, call clearRec (entire screen)
    // invoke draw function with score and saying bye
    timer = 30;
    score = 0;
  }

  var canvas = document.getElementById("shapes-game"),
      height = canvas.scrollHeight,
      width = canvas.scrollWidth,
      gameOn = false,
      ctx = canvas.getContext('2d'),
      index;   

  canvas.width = width;
  canvas.height = height;

  drawGameStartText("salmon");   // invoke function to put text on screen

  function clear(ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
  }

  document.addEventListener("keyup", function(){
      if (event.keyCode === 32) {// i.e. if spacebar is pressed {
        gameOn = true;

        clear();
        drawRandomShape(ctx, 100, 100);

        // grab the timer element from HTML, start timer and 
        // set timer value to display on screen
        
        var timerSpan = document.getElementById("time-remaining"),
            intervalId,
            timer = parseInt(timerSpan.innerText);

        intervalId = setInterval(function(){
              timer = timer - 1 ;
              timerSpan.innerHTML = timer; 

              if (timer <= 0){
                clearInterval(intervalId);

                restartGame();
              }
          }, 1000);

        // code below keeps track of the score and updates as the game progresses by accessing
        // the value of each keyup and comparing with the shape currently on the screen (via the shape's index)

        // white triangle = up, red square = down,
        // red triangle = left, white square = right
     
    var scoreSpan = document.getElementById("score-val");
        score = parseInt(scoreSpan.innerText);
        

        if (index === 0 && event.keyCode === 37 )  {
          score ++ ;
          scoreSpan.innerHTML = score;
        }
        else  if (index === 1 && event.keyCode === 40) {
          score ++ ;
          scoreSpan.innerHTML = score;
        }

        else  if (index === 2 && event.keyCode === 38) {
              score ++ ;
              scoreSpan.innerHTML = score;
        }
            
        else if (index === 3 && event.keyCode === 39) {
              score ++ ;
              scoreSpan.innerHTML = score;
          }

        else   {
          score -- ;
          scoreSpan.innerHTML = score;
        }

      }
    })

  })



