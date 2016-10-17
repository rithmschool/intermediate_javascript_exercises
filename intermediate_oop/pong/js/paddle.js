function Paddle(x, y, paddleSpeed, paddleWidth, paddleHeight, humanControllable=false) {
  this.velocityUp = new Velocity(0, paddleSpeed * -1);
  this.velocityDown = new Velocity(0, paddleSpeed);
  this.component = new CanvasComponent(x, y, paddleWidth, paddleHeight);
  this.keydown = undefined;
  this.humanControllable = humanControllable;
  this.upKeyCode = 38;
  this.downKeyCode = 40;
  if (this.humanControllable) {
    this.__setupArrowBindings();
  }
}

Paddle.PADDLE_WIDTH = 20;
Paddle.PADDLE_HEIGHT = 125;
Paddle.PADDLE_SPEED = 15;

Paddle.prototype.update = function() {
  this.component.update();
}; 

Paddle.prototype.draw = function(context) {
  this.component.draw(context);
};

Paddle.prototype.__setupArrowBindings = function() {
 document.addEventListener("keydown", function(event) {
    if (event.which === this.upKeyCode) {
      this.keyDown = this.upKeyCode;
      this.component.velocity = this.velocityUp;
    } else if (event.which === this.downKeyCode) {
      this.keyDown = this.downKeyCode;
      this.component.velocity = this.velocityDown;
    }
  }.bind(this));


  document.addEventListener("keyup", function(event) {
    if (this.keyDown === event.which) {
      this.keyDown = undefined;
      this.component.velocity = undefined;
    }
  }.bind(this));
};

Paddle.prototype.handleCollision = function(ball) {
  var pLeft = this.component.x;
  var pRight = this.component.x + this.component.width;
  var pTop = this.component.y;
  var pBottom = this.component.y + this.component.height;

  var bLeft = ball.component.x;
  var bRight = ball.component.x + ball.component.width;
  var bTop = ball.component.y;
  var bBottom = ball.component.y + ball.component.height;

  if ((pLeft < bRight) && (pRight > bLeft) && (pTop < bBottom) && (pBottom > bTop)) {
    ball.component.velocity.x *= -1;
  }
};