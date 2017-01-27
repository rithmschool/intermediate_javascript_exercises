window.addEventListener("load", function() {

  function clear(ctx, width, height) {
    ctx.clearRect(0,0,width,height);
  }

  function drawRandomShape(ctx) {
    var randX = Math.floor(Math.random()*600);
    var randY = Math.floor(Math.random()*650);
    var random = Math.random();

    var squareR = {
      corner: [randX, randY],
      width: 75,
      height: 75,
      color: "red",
      draw: function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.corner[0],this.corner[1],this.width,this.height);
      }
    }

    var squareW = {
      corner: [randX, randY],
      width: 75,
      height: 75,
      color: "white",
      draw: function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.corner[0],this.corner[1],this.width,this.height);
      }
    }

    var triangleR = {
      corner: [randX, randY],
      color: "red",
      draw: function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.moveTo(this.corner[0],this.corner[1]);
        ctx.lineTo(this.corner[0]+75,this.corner[1]+75);
        ctx.lineTo(this.corner[0],this.corner[1]+75);
        ctx.fill();
        ctx.closePath();
      }
    }

    var triangleW = {
      corner: [randX, randY],
      color: "white",
      draw: function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.moveTo(this.corner[0],this.corner[1]);
        ctx.lineTo(this.corner[0]+75,this.corner[1]+75);
        ctx.lineTo(this.corner[0],this.corner[1]+75);
        ctx.fill();
        ctx.closePath();
      }
    }

    if(random >= 0.75){
      squareR.draw();
      expectedKey = 40;
    }else if(random >= 0.5) {
      squareW.draw();
      expectedKey = 39;
    }else if(random >= 0.25){
      triangleW.draw();
      expectedKey = 38;
    }else{
      triangleR.draw();
      expectedKey = 37;
    }

  }

  function drawGameStartText(ctx, score) {
    ctx.fillStyle = "white";
    ctx.font = "bold 30px Papyrus";
    ctx.fillText("Press space bar to start a new game!", 140,370);
    if(score.innerText !== "0"){ctx.fillText("Score: " + score.innerText, 320, height/2 + 40)};
  }

  // function restartGame(ctx, width, height) {
  //   if(gameOn === "complete" && ){

  //   }
  // }

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
      seconds = 30,
      intervalId;

  canvas.width = width;
  canvas.height = height;

  document.addEventListener("keyup", function() {
    if(event.which === 32 && gameOn === false){
      clear(ctx,width,height);
      drawRandomShape(ctx);
      gameOn === true;
      
      //Timer
      var timerId = setInterval(function(){
        timerSpan.innerText -= 1;
        if(timerSpan.innerText === "0"){
          clearInterval(timerId);
        }
      },1000);
      setTimeout(function(){
        clear(ctx,width,height);
        ctx.fillText("Final Score: " + scoreSpan.innerText, 300, 330)
        gameOn === "complete";
      },30000);
    }

    //Keys
    if(event.which === expectedKey && event.which !== 32){
      scoreSpan.innerText = Number(scoreSpan.innerText) + 100;
      clear(ctx,width,height);
      drawRandomShape(ctx);
    }else if(event.which !== expectedKey && event.which !== 32){
      scoreSpan.innerText -= 100;
      clear(ctx,width,height);
      drawRandomShape(ctx);
    }
  });
  drawGameStartText(ctx, scoreSpan);
});



