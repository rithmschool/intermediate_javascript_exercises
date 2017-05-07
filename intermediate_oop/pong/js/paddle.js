function Paddle(x, y, paddleSpeed, paddleWidth, paddleHeight, canvasHeight, humanControllable=false) {
  this.velocityUp = new Velocity(0, paddleSpeed * -1);
  this.velocityDown = new Velocity(0, paddleSpeed);
  this.component = new CanvasComponent(x, y, paddleWidth, paddleHeight);
  this.canvasHeight = canvasHeight;
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
  this.__boundsChecking();
}; 

Paddle.prototype.draw = function(context) {
  this.component.draw(context);
};

// new function to keep paddle from sliding off top and bottom of screen:
Paddle.prototype.__boundsChecking = function(keyPressed) {
  if ((this.component.y + this.component.height >= this.canvasHeight ||
      this.component.y <= 0) && this.component.velocity) {
      this.component.velocity = undefined;
      return false;
  } else if ((this.component.y + this.component.height >= this.canvasHeight) && 
    (keyPressed === this.downKeyCode)/* key is Arrowdown */) {
    return false;
  } else if ((this.component.y <= 0) && (keyPressed === this.upKeyCode)/* key is Arrowup */) { 
    return false;
  }
  return true;
};

Paddle.prototype.__setupArrowBindings = function() {
 document.addEventListener("keydown", function(event) {

    if (this.keyDown === undefined && this.__boundsChecking(event.which)) {
      if (event.which === this.upKeyCode) {
        this.keyDown = this.upKeyCode;
        this.component.velocity = this.velocityUp;
      } else if (event.which === this.downKeyCode) {
        this.keyDown = this.downKeyCode;
        this.component.velocity = this.velocityDown;
      }
    }
  }.bind(this));


  document.addEventListener("keyup", function(event) {
    if (this.keyDown === event.which) {
      this.keyDown = undefined;
      this.component.velocity = undefined;
    }
    this.__boundsChecking();
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

  if ((pLeft <= bRight) && (pRight >= bLeft) && (pTop <= bBottom) && (pBottom >= bTop)) {
    // adding logic to check for top or bottom strike, which should only change y direction
    // if pBottom is in between bTop and bBottom -OR- pTop is in between bBottom and bTop
    if ((pBottom <= bBottom) || (pTop >= bTop)) {
      console.log("flipping y velocity");
      ball.component.velocity.y *= -1;
    } else {
      console.log("flipping x velocity");
      ball.component.velocity.x *= -1;
    }
  }

};