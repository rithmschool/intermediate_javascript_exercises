function Pong(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.height = this.canvas.height;
  this.width = this.canvas.width;
  this.context = this.canvas.getContext('2d');
  this.intervalId = undefined;

  //pointScored.bind() -- bind Pong
  this.ball = new Ball(10, 10, undefined, this.width, this.height, this.pointScored.bind(this));
  this.ball.randomVelocityAndPosition();
  this.paddleL = new Paddle(15, 350, Paddle.PADDLE_SPEED, Paddle.PADDLE_WIDTH, Paddle.PADDLE_HEIGHT, true)
  this.paddleL.upKeyCode = 83;
  this.paddleL.downKeyCode = 90;
  this.paddleR = new Paddle(970, 350, Paddle.PADDLE_SPEED, Paddle.PADDLE_WIDTH, Paddle.PADDLE_HEIGHT, true);
  this.dashes = [];
  this.__createDashes();

  this.scoreDiv = document.getElementById('score');
  this.scoreDiv.className = '';
  this.scoreL = 0;
  this.scoreR = 0;
  this.writeScore();

  this.winner;
  this.winMessageLocation = 100;

  this.resetBtn = document.getElementById('resetBtn');
  this.resetBtn.className = 'hidden';
}

//calls update
Pong.prototype.startGameLoop = function() {
  this.intervalId = setInterval(this.update.bind(this), 20); //every 20 ms
};

//called within Ball
Pong.prototype.pointScored = function(pointType) {
  if (pointType === Ball.DIRECTION_LEFT) {
    // console.log("point for Right");
    this.scoreR++;
    this.ball.randomVelocityAndPosition(Ball.DIRECTION_RIGHT);
  } else if (pointType === Ball.DIRECTION_RIGHT) {
    // console.log("Point for left");
    this.scoreL++;
    this.ball.randomVelocityAndPosition(Ball.DIRECTION_LEFT);
  }
  this.writeScore();

  //if there is a winner...
  if (this.checkWinner()) {
      //STOP GAME!
      clearInterval(this.intervalId);

      //display the win message
      this.displayWinMessage();
  };
}

Pong.prototype.displayWinMessage = function(){
  this.resetBtn.className = '';
  this.scoreDiv.className = 'hidden';
  //Right wins - display message on the right
  if (this.winner === 'Right'){
    this.winMessageLocation = this.width/2 + 20;
  }
  this.displayWinMessage;
  this.context.font = "80px Arial";
  this.context.fillStyle = 'green';
  this.context.fillText(`${this.winner} wins!`, 
      this.winMessageLocation, this.height/2);
  this.context.font = '20px Arial',
  this.context.fillText(`Score: ${this.scoreL}`, 100, this.height-20);
  this.context.fillText(`Score: ${this.scoreR}`, this.width-250, this.height-20);
}

//CHANGE BACK TO 10
Pong.prototype.checkWinner = function(){
  if (this.scoreL === 10){
    this.winner = 'Left';
    return true;
  }
  if (this.scoreR === 10) {
    this.winner = 'Right';
    return true;
  }
  return false;
}

Pong.prototype.writeScore = function(){
    this.scoreDiv.innerText = `(${this.scoreL} - ${this.scoreR})`;
}

Pong.prototype.clearCanvas = function() {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

//every update:
  //redraw the elements
Pong.prototype.update = function() {
  this.clearCanvas();
  this.ball.update();
  this.paddleL.update();
  this.paddleR.update();

  this.paddleL.handleCollision(this.ball);
  this.paddleR.handleCollision(this.ball);

  this.paddleL.draw(this.context);
  this.paddleR.draw(this.context);
  this.__drawDashes();
  this.ball.draw(this.context);
};


Pong.prototype.__createDashes = function(height) {
  var space = 10;
  this.dashes = [];
  var x = (this.width / 2) - 2;
  for (var y = space; y < this.height; y += space) {
    this.dashes.push(new CanvasComponent(x, y, 5, 15));
    y += 15;
  } 
};

//draw each of these canvas components
Pong.prototype.__drawDashes = function() {
  this.dashes.forEach(function(dash) {
    dash.draw(this.context);
  }.bind(this));
};