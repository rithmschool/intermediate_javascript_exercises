function Pong(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.height = this.canvas.height;
  this.width = this.canvas.width;
  this.context = this.canvas.getContext('2d');
  this.intervalId = undefined;

  this.ball = new Ball(10, 10, undefined, this.width, this.height, this.pointScored.bind(this));
  this.ball.randomVelocityAndPosition();
  this.paddleL = new Paddle(15, 350, Paddle.PADDLE_SPEED, Paddle.PADDLE_WIDTH, Paddle.PADDLE_HEIGHT, true)
  this.paddleL.upKeyCode = 87;
  this.paddleL.downKeyCode = 83;
  this.paddleR = new Paddle(970, 350, Paddle.PADDLE_SPEED, Paddle.PADDLE_WIDTH, Paddle.PADDLE_HEIGHT, true);
  this.dashes = [];
  this.__createDashes();
}

Pong.prototype.startGameLoop = function() {
  this.intervalId = setInterval(this.update.bind(this), 20); 
};

Pong.prototype.pointScored = function(pointType) {
  var messageText = document.querySelector('#messageText');
  var rightPoint = document.querySelector('#rightScore');
  var leftPoint = document.querySelector('#leftScore');
  if (pointType === Ball.DIRECTION_LEFT) {
    
    console.log("point for Right");
    if(messageText.innerText === ""){
      rightPoint.innerText++;
    }
    this.ball.randomVelocityAndPosition(Ball.DIRECTION_RIGHT);
  } else if (pointType === Ball.DIRECTION_RIGHT) {
    if(messageText.innerText === ""){
      leftPoint.innerText++;
    }
    this.ball.randomVelocityAndPosition(Ball.DIRECTION_LEFT);
  }
  console.log("Point for left");
  if(rightPoint.innerText === "10"){
    messageText.innerText = "Right player wins!";
  }
  if(leftPoint.innerText === "10"){
    messageText.innerText = "Left player wins!";
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