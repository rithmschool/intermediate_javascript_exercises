function Pong(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.height = this.canvas.height;
  this.width = this.canvas.width;
  this.context = this.canvas.getContext('2d');
  this.intervalId = undefined;

  this.ball = new Ball(10, 10, undefined, this.width, this.height, this.pointScored.bind(this));
  this.ball.randomVelocityAndPosition();
  this.paddleL = new Paddle(15, 350, Paddle.PADDLE_SPEED, Paddle.PADDLE_WIDTH, Paddle.PADDLE_HEIGHT, this.height, true)
  this.paddleL.upKeyCode = 83;
  this.paddleL.downKeyCode = 90;
  this.paddleR = new Paddle(970, 350, Paddle.PADDLE_SPEED, Paddle.PADDLE_WIDTH, Paddle.PADDLE_HEIGHT, this.height, true);
  this.dashes = [];
  this.leftScore = 0; // added
  this.rightScore = 0; // added
  this.winningScore = 10; // added
  this.__createDashes();
}

Pong.prototype.startGameLoop = function() {
  this.intervalId = setInterval(this.update.bind(this), 20); 
  
};

// added this function for end of game to clear the canvas, show the winner, and stop the interval
Pong.prototype.endGameLoop = function(winner) {
  this.clearCanvas();
  this.context.fillText(`${this.winner} player wins!`, this.width/2, this.height/2);
  clearInterval(this.intervalId);
}

// new function to display the score and check for a winner
Pong.prototype.displayScore = function(ballDirection) {
  var ctx = this.context;
  ctx.font = "50px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  if(ballDirection === 0) {
    this.rightScore++;
  }
  if(ballDirection === 1) {
    this.leftScore++;
  }
  if((this.rightScore >= this.winningScore) || (this.leftScore >= this.winningScore)) {
    if(this.leftScore > this.rightScore) {
      this.winner = "Left";
    } else {
      this.winner = "Right";
    }
    this.endGameLoop(this.winner);
  }
  ctx.fillText(this.leftScore, this.width/4, this.height/10);
  ctx.fillText(this.rightScore, 3*this.width/4, this.height/10);
}

Pong.prototype.pointScored = function(pointType) {
  if (pointType === Ball.DIRECTION_LEFT) {
    this.displayScore(Ball.DIRECTION_LEFT); // 0
    this.ball.randomVelocityAndPosition(Ball.DIRECTION_RIGHT);
  } else if (pointType === Ball.DIRECTION_RIGHT) {
    this.displayScore(Ball.DIRECTION_RIGHT) // 1
    this.ball.randomVelocityAndPosition(Ball.DIRECTION_LEFT);
  }

}

Pong.prototype.clearCanvas = function() {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

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
  this.displayScore(); // added this to display the score on each update
};


Pong.prototype.__createDashes = function(height) {
  var space = 10;
//  this.dashes = [];
  var x = (this.width / 2) - 2;
  for (var y = space; y < this.height; y += space) {
    this.dashes.push(new CanvasComponent(x, y, 5, 15));
    y += 15;
  } 
};

Pong.prototype.__drawDashes = function() {
  this.dashes.forEach(function(dash) {
    dash.draw(this.context);
  }.bind(this));
};