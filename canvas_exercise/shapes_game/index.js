window.addEventListener("load", function() {

  function clear(ctx, width, heigt) {
    ctx.clearRect(0,0,width,height);
  }

  function drawRandomShape(ctx, width, height) {
    var shapeNum = Math.floor(Math.random() * 4);

    var x = Math.random() * (width - 100);
    var y = Math.random() * (height - 100);

    effectOn = false;
    clearInterval(initParticlesTimer);
    clearInterval(particlesInterval);
    clearTimeout(stopParticleTimer);

    switch(shapeNum) {
      case 0:  // Red Triangle
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+100, y+100);
        ctx.lineTo(x, y+100);
        ctx.lineTo(x,y);
        ctx.fill();
        ctx.closePath();
        initParticlesTimer = setTimeout(function() {
          blastShape(x,y);
        }, 800);
        return "red0";
      case 1: // White Square
        ctx.fillStyle = "white";
        ctx.fillRect(x,y,100,100);
        initParticlesTimer = setTimeout(function() {
          blastShape(x,y);
        }, 800);
        return "white1"
      case 2: // White Triangle
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+100, y+100);
        ctx.lineTo(x, y+100);
        ctx.lineTo(x,y);
        ctx.fill();
        ctx.closePath();
        initParticlesTimer = setTimeout(function() {
          blastShape(x,y);
        }, 800);
        return "white0";
      default: // Red Square
        ctx.fillStyle = "red";
        ctx.fillRect(x,y,100,100);
        initParticlesTimer = setTimeout(function() {
          blastShape(x,y);
        }, 800);
        return "red1";
    }
  }

  function drawGameStartText(ctx, width, height, score) {
    ctx.font = "40px comic-sans";
    ctx.fillStyle = "white";
    ctx.fillText("Press any key to start!", width*0.3, height*0.45);
    ctx.fillText("Last Score: " + score, width*0.38, height*0.55);
  }

  function restartGame(ctx, width, height, scoreSpan, timerSpan) {
    clear(ctx, width, height);
    drawGameStartText(ctx,width,height, scoreSpan.innerText);
    resetTimeNScore(scoreSpan, timerSpan);
  }

  function resetTimeNScore(scoreSpan) {
    scoreSpan.innerText = 0;
    timerSpan.innerText = 30;
  }

  function startTimer(timerSpan) {
    intervalId = setInterval(function() {
    timerSpan.innerText = Number(timerSpan.innerText) - 1;

      if (Number(timerSpan.innerText) === 0) {
        clearInterval(intervalId);
        endGame();
      }
    }, 1000);
  }

  function endGame() {
    expectedKey = undefined;
    gameOn = false;
    effectOn = false;
    restartGame(ctx, width, height, scoreSpan, timerSpan);
  }

  // MAYBE implement this
  function randomEffect(randomNum) {

  }

  function blastShape(x, y) {
    
    clear(ctx, height, width);
    var tempX = 0;
    var tempY = 0;
    effectOn = true;
    for (var i = 0; i < particles.length; i++) {
      particles[i].x = Math.floor(Math.random() * 50) + x;
      particles[i].y = Math.floor(Math.random() * 50) + y;
      particles[i].velX = Math.floor(Math.random() * 5 - 2.5);
      particles[i].velY = Math.floor(Math.random() * 5 - 2.5);
    }
    

    particlesInterval = setInterval(function() {
      if (effectOn) {
        clear(ctx, canvas.width, canvas.height);
        for (var j = 0; j < particles.length; j++) {
          ctx.fillRect(particles[j].x,particles[j].y,2,2);
          particles[j].x += particles[j].velX;
          particles[j].y += particles[j].velY;
        }
        particleTimer = setTimeout(function() {
          if (effectOn) {
            clearInterval(particlesInterval);
            effectOn = false;
            clear(ctx, canvas.width, canvas.height);
          }
        }, 2000);
      }
    }, 50); 
  }

/*
  Initialize game and variables
*/

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
      particles = [],
      initParticlesTimer,
      particlesInterval,
      stopParticleTimer,
      effectOn = false;;

  canvas.width = width;
  canvas.height = height;

  // Set up the particles only once;.
  for (var i = 0; i < 50; i++) {
      var particle = {
        x: 0, 
        y: 0, 
        velX: 10, 
        velY: 10
      }
      particles.push(particle);
  }

  document.addEventListener("keyup", function(event) {
    if (gameOn === false) {
      startTimer(timerSpan);
      gameOn = true;
    }

    clear(ctx, canvas.width, canvas.height);

    if (expectedKey !== undefined) {
      if (event.keyCode === expectedKeysMap[expectedKey]) {
        scoreSpan.innerText = Number(scoreSpan.innerText) + 1;
      }
    }
    
    expectedKey = drawRandomShape(ctx, canvas.width, canvas.height);
  });

  

  restartGame(ctx, canvas.width, canvas.height, scoreSpan);
});

