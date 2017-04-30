window.addEventListener("load", function() {

  const ORANGE_REC = 0;
  const WHITE_REC = 1; 
  const ORANGE_TRI = 2;
  const WHITE_TRI = 3; 

  function drawRandomShape(ctx, width, height, func){

      index = Math.floor(Math.random() * 3) // returns a random whole number between 0 and 3

      var xInt = Math.random()*500;  // need these for generating randomly positioned triangles
      var yInt = Math.random()*500;
        
      if (index === 0){
        // Execute drawRandomRectangle and sets fill style to orange
         drawRandomRectangle(ctx, 100, 100, "orange");
      } else if (index === 1){
        // Execute drawRandomRectangle ();
        drawRandomRectangle(ctx, 100, 100, "white");
      } else if (index === 2){
        // Execute drawTriangle and pass "orange" as the color
        drawRandomTriangle(ctx, xInt, yInt, "orange");
      } else {
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
    timer  = 30
    timerSpan.innerHTML = timer;
    score = 0;
    scoreSpan.innerHTML = score;
  }

  var canvas = document.getElementById("shapes-game"),
      height = canvas.scrollHeight,
      width = canvas.scrollWidth,
      gameOn = false,
      ctx = canvas.getContext('2d'),
      index,
      timer;   

  canvas.width = width;
  canvas.height = height;

  drawGameStartText("salmon");   // invoke function to put text on screen
                                // consider usinstart a gameOn function --when DOM loads, invoke drawGameStart

  function clear(ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
  }

  document.addEventListener("keyup", function(){
    if (event.keyCode === 32) {// i.e. if spacebar is pressed {
      gameOn = true;

      clear(ctx, width, height);
      drawRandomShape(ctx, 100, 100);
    }

    // grab the timer element from HTML, start timer and 
    // set timer value to display on screen
    
    var timerSpan = document.getElementById("time-remaining"),
        intervalId,
        timer = parseInt(timerSpan.innerText);

    intervalId = setInterval(function(){
          timer = timer - 1 ;
          timerSpan.innerHTML = timer; 

          if (timer < 1){
            clearInterval(intervalId);
            restartGame();
          }
      }, 1000);

    // code below keeps track of the score and updates as the game progresses by accessing
        // the value of each keyup and comparing with the shape currently on the screen (via the shape's index)

        // white triangle = up, red square = down,  // left = 37, right = 39, up = 38, down = 40
        // red triangle = left, white square = right // 
     
    var scoreSpan = document.getElementById("score-val");
    var score = parseInt(scoreSpan.innerText);
    var correct;
        
    if (index === 0 && event.keyCode === 38 ||
        index === 1 && event.keyCode === 39 ||
        index === 2 && event.keyCode === 37 ||
        index === 3 && event.keyCode === 40) {
      correct = true;
    } else if (event.keyCode <= 40 && event.keyCode >= 38)  {
      correct = false;
    }

    if (correct !== undefined) {
      if (correct) {
        score++;
      } else {
        score--;
      }
      scoreSpan.innerHTML = score;
      clear(ctx, width, height);
      drawRandomShape(ctx, 100, 100);

    }
    
  });

});



