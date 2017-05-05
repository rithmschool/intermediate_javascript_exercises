//pass the pointScoredCallback function from Pong
function Ball(x, y, velocity, canvasWidth, canvasHeight, pointScoredCallback=function() {}) {
  this.component = new CanvasComponent(x, y, Ball.BALL_WIDTH, Ball.BALL_HEIGHT, velocity);
  this.canvasWidth = canvasWidth; //1000
  this.canvasHeight = canvasHeight; //800
  this.pointScoredCallback = pointScoredCallback;
}

Ball.BALL_WIDTH = 20;
Ball.BALL_HEIGHT = 25;

Ball.DIRECTION_LEFT = 0;
Ball.DIRECTION_RIGHT = 1;

Ball.prototype.update = function() {
  this.component.update(); //update the velocity
  this.__boundsChecking(); //check the bounds
};

Ball.prototype.draw = function(context) {
  this.component.draw(context);
};

Ball.prototype.__boundsChecking = function() {
  //if at the bottom of the canvas, change the velocity's y to go other direction
  //down to up or vice versa 
  //checks if current y + the height (25) >= 800 
  if ((this.component.y + this.component.height >= this.canvasHeight ||
      this.component.y <= 0) && this.component.velocity) {
    this.component.velocity.y *= -1;
  }

  var _this = this;
  
  //off screen left and point for the right
  //if component x (-20 or more) + width (20) < 0
  if (this.component.x + this.component.width < 0 && this.component.velocity) {
    this.component.velocity = undefined;
    setTimeout(function() {
      _this.pointScoredCallback(Ball.DIRECTION_LEFT);
    }, 0);
  }

  //off screen right and point for the left
  //if component x (1000 or more), since canvas width is 1000
  if (this.component.x > this.canvasWidth && this.component.velocity) {
    this.component.velocity = undefined;
    setTimeout(function() {
      _this.pointScoredCallback(Ball.DIRECTION_RIGHT);
    }, 0);
  }
};

//happens everytime the ball goes off the screen
//pass it the direction left
Ball.prototype.randomVelocityAndPosition = function(direction) {
  var middle = Math.floor(this.canvasWidth / 2); //will always be 500 (1000 / 2)
  this.component.x = middle; 
  //slower to left/right
  var x = Math.floor((Math.random() * 5) + 2); //between 2 and 6
  //more chance to be faster -- up/down
  var y = Math.floor((Math.random() * 10) + 2); //between 2 and 11

  //aassigns it a random velocity
  this.component.velocity = new Velocity(x, y);
  if (direction === Ball.DIRECTION_LEFT) {
    this.component.velocity.x *= -1; //if it's going to the Left, make the x negative
  }
};
