function Grid(context, squareSize, squaresX, squaresY) {
  this.context = context;

  this.squareSize = squareSize;

  this.squaresX = squaresX
  this.squaresY = squaresY;
  this.gridData = [];

  for (var y = 0; y < this.squaresY; y++) {
    this.gridData.push((new Array(this.squaresX)).fill(null));
  }
}

Grid.prototype.draw = function() {
  for (var y = 0; y < this.squaresY; y++) {
    for (var x = 0; x < this.squaresX; x++) {
      this.context.beginPath();
      this.context.lineWidth="2";
      this.context.strokeStyle="white";
      this.context.rect(x*this.squareSize+.25,y*this.squareSize+.25,this.squareSize,this.squareSize); 
      this.context.stroke();

      if (this.gridData[y][x] !== null) {
        this.context.fillStyle = this.gridData[y][x].color;
        this.context.fillRect(x*this.squareSize+.5,y*this.squareSize+.5,this.squareSize-.25,this.squareSize-.25)
      }
    }
  }
};

Grid.prototype.linesToClear = function() {
  lines = [];
  for (var y = 0; y < this.squaresY; y++) {
    clearLine = true;
    
    for (var x = 0; x < this.squaresX; x++) {
      if (this.gridData[y][x] === null) {
        clearLine = false;
        break;
      }
    }

    if (clearLine) {
      lines.push(y);
    }
  }

  return lines;
};

Grid.prototype.addToGrid = function(tetromino) {
  tetromino.shape.points.forEach(function(p) {
    this.gridData[p.y][p.x] = new GridItem(tetromino.shape.color());
  }, this);
};

Grid.prototype.checkCollisions = function(tetromino) {
  points = tetromino.shape.bottomPoints();

  var collision = false;
  for (var i = 0; i < points.length; i++) {
    if (points[i].y + 1 === this.squaresY) {
      collision = true;
      console.log("COLLISION: with bottom")
      break;
    }
  }

  if (!collision) {
    for (var j = 0; j < points.length; j++) {
      var p = points[j];
      var x = p.x;
      var y = p.y + 1;
      if (x < this.squaresX &&
          y < this.squaresY &&
          this.gridData[y][x] !== null) {
        collision = true;
        console.log("COLLISION: with other item")
        break;
      }
    }
  }

  return collision;
};

Grid.prototype.validPosition = function(points) {
  return points.reduce(function(acc, point) {
    var inbounds = point.x >= 0 && point.x < this.squaresX &&
                   point.y >= 0 && point.y < this.squaresY;
    if (inbounds) {
      var gridItem = this.gridData[point.y][point.x];
      if (gridItem !== null) {
        acc = false;
      }
    } else {
      acc = false;
    }

    return acc;
  }, true);
};