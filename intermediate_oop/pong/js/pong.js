function Pong(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.height = this.canvas.height;
  this.width = this.canvas.width;
  this.context = this.canvas.getContext('2d');
  this.intervalId = undefined;

  this.ball = new Ball(10, 10, undefined, this.width, this.height, this.pointScored.bind(this));
  this.ball.randomVelocityAndPosition();
  this.paddleL = new Paddle(15, 350, Paddle.PADDLE_SPEED, Paddle.PADDLE_WIDTH, Paddle.PADDLE_HEIGHT, true, 'player1');
  this.paddleL.upKeyCode = 83;
  this.paddleL.downKeyCode = 90;
  this.paddleR = new Paddle(970, 350, Paddle.PADDLE_SPEED, Paddle.PADDLE_WIDTH, Paddle.PADDLE_HEIGHT, true, 'player2');
  this.dashes = [];
  this.__createDashes();
  this.scoreboardP1 = new Scoreboard('player1', 800, 760, Scoreboard.SCOREB_WIDTH, Scoreboard.SCOREB_HEIGHT);
  this.scoreboardP2 = new Scoreboard('player2', 900, 760, Scoreboard.SCOREB_WIDTH, Scoreboard.SCOREB_HEIGHT);
}

Pong.prototype.startGameLoop = function() {
  this.intervalId = setInterval(this.update.bind(this), 20); 
};

Pong.prototype.endGame = function() {
  clearInterval(this.intervalId);
  this.update(true);
}

Pong.prototype.pointScored = function(pointType) {
  if (pointType === Ball.DIRECTION_LEFT) {
    this.scoreboardP2.score += 1;
    this.ball.randomVelocityAndPosition(Ball.DIRECTION_RIGHT);
  } else if (pointType === Ball.DIRECTION_RIGHT) {
    this.scoreboardP1.score += 1;
    this.ball.randomVelocityAndPosition(Ball.DIRECTION_LEFT);
  }
  if (this.scoreboardP2.score === 2 || this.scoreboardP1.score === 2) {
    this.endGame();

  }
}

Pong.prototype.clearCanvas = function() {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Pong.prototype.update = function(gameEnds) {
  this.clearCanvas();
  this.ball.update();
  this.paddleL.update();
  this.paddleR.update();

  this.paddleL.handleCollision(this.ball);
  this.paddleR.handleCollision(this.ball);

  this.paddleL.draw(this.context);
  this.paddleR.draw(this.context);
  this.__drawDashes();
  if(!gameEnds) {
    this.ball.draw(this.context);
  }
  this.scoreboardP1.draw(this.context);
  this.scoreboardP2.draw(this.context);
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

Pong.prototype.__drawDashes = function() {
  this.dashes.forEach(function(dash) {
    dash.draw(this.context);
  }.bind(this));
};