function Tetromino(context, shape, squareSize, squaresX, squaresY ) {
  this.context = context;
  this.shape = shape;
  this.squareSize = squareSize;
  this.squaresX = squaresX;
  this.squaresY = squaresY;
}


Tetromino.prototype.possibleShapes = [];

// L-left
Tetromino.prototype.possibleShapes.push(
  new Shape([new Point(4, 0), new Point(4, 1),
             new Point(5, 1), new Point(6, 1)],
            new GridItem("blue")));

// L-right
Tetromino.prototype.possibleShapes.push(
  new Shape([new Point(4, 1), new Point(5, 1),
             new Point(6, 1), new Point(6, 0)],
            new GridItem("darkorange")));

// T
Tetromino.prototype.possibleShapes.push(
  new Shape([new Point(4, 1), new Point(5, 1),
             new Point(6, 1), new Point(5, 0)],
            new GridItem("rebeccapurple")));

// Z-left
Tetromino.prototype.possibleShapes.push(
  new Shape([new Point(4, 0), new Point(5, 0),
             new Point(5, 1), new Point(6, 1)],
            new GridItem("red")));

// Z-right
Tetromino.prototype.possibleShapes.push(
  new Shape([new Point(4, 1), new Point(5, 1),
             new Point(5, 0), new Point(6, 0)],
            new GridItem("green")));

// Square
Tetromino.prototype.possibleShapes.push(
  new Shape([new Point(4, 0), new Point(4, 1),
             new Point(5, 0), new Point(5, 1)],
            new GridItem("gold")));

// Line
Tetromino.prototype.possibleShapes.push(
  new Shape([new Point(3, 0), new Point(4, 0),
             new Point(5, 0), new Point(6, 0)],
            new GridItem("dodgerblue")));

Tetromino.createRandomShape = function() {
  var index = Math.floor(Math.random() * Tetromino.prototype.possibleShapes.length);

  var shape = Tetromino.prototype.possibleShapes[index];

  return Shape.copyShape(shape);
}

Tetromino.prototype.draw = function() {
  var point;
  for (var i = 0; i < this.shape.points.length; i++) {
    point = this.shape.points[i]
    this.context.fillStyle = this.shape.color();
    this.context.fillRect(point.x*this.squareSize+.5,point.y*this.squareSize+.5,this.squareSize-.25,this.squareSize-.25)
  }
}


// "d", "l", "r"
Tetromino.prototype.move = function(direction) {
  var xAdd = 0;
  var yAdd = 0;

  if (direction === "d")  yAdd = 1;
  else if (direction === "l")  xAdd = -1;
  else if (direction === "r") xAdd = 1;

  var newPoints = [];
  var allowed = true;
  var newPoint;
  for (var i = 0; i < this.shape.points.length; i++) {
    newPoint = new Point(this.shape.points[i].x + xAdd, this.shape.points[i].y + yAdd);
    if (this.__validPoint(newPoint)) {
      newPoints.push(newPoint);
    } else {
      allowed = false;
    }
  }

  if (allowed) {
    this.shape.points = newPoints;
  }
}

Tetromino.prototype.rotate = function() {
  console.log("rotate");
}

Tetromino.prototype.__validPoint = function(point) {
  return point.x >= 0 && point.x < this.squaresX &&
         point.y >= 0 && point.y < this.squaresY;
}