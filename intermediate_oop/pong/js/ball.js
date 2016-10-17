function Ball(x, y, velocity, canvasWidth, canvasHeight, pointScoredCallback=function() {}) {
  this.component = new CanvasComponent(x, y, Ball.BALL_WIDTH, Ball.BALL_HEIGHT, velocity);
  this.canvasWidth = canvasWidth;
  this.canvasHeight = canvasHeight;
  this.pointScoredCallback = pointScoredCallback;
}

Ball.BALL_WIDTH = 20;
Ball.BALL_HEIGHT = 25;

Ball.DIRECTION_LEFT = 0;
Ball.DIRECTION_RIGHT = 1;


Ball.prototype.update = function() {
  this.component.update();
  this.__boundsChecking();
};

Ball.prototype.draw = function(context) {
  this.component.draw(context);
};

Ball.prototype.__boundsChecking = function() {
  if ((this.component.y + this.component.height >= this.canvasHeight ||
      this.component.y <= 0) && this.component.velocity) {
    this.component.velocity.y *= -1;
  }

  var _this = this;
  if (this.component.x + this.component.width < 0 && this.component.velocity) {
    this.component.velocity = undefined;
    setTimeout(function() {
      _this.pointScoredCallback(Ball.DIRECTION_LEFT);
    }, 0);
  }

  if (this.component.x > this.canvasWidth && this.component.velocity) {
    this.component.velocity = undefined;
    setTimeout(function() {
      _this.pointScoredCallback(Ball.DIRECTION_RIGHT);
    }, 0);
  }
};

Ball.prototype.randomVelocityAndPosition = function(direction) {
  var middle = Math.floor(this.canvasWidth / 2);
  this.component.x = middle;
  var x = Math.floor((Math.random() * 5) + 2);
  var y = Math.floor((Math.random() * 10) + 2);
  this.component.velocity = new Velocity(x, y);
  if (direction === Ball.DIRECTION_LEFT) {
    this.component.velocity.x *= -1;
  }
};
