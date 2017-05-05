function CanvasComponent(x, y, width, height, velocity=undefined, color="white") {
  this.velocity = velocity;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
}


//adds velocity x & y to the current x & y
CanvasComponent.prototype.update = function() {
  if (this.velocity !== undefined) {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}

CanvasComponent.prototype.draw = function(context) {
  context.fillStyle = this.color;
  context.fillRect(this.x, this.y, this.width, this.height);  
}