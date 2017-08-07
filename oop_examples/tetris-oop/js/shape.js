function Shape(points, gridItem) {
  this.gridItem = gridItem;
  this.points = points;
}


Shape.copyShape = function(shape) {
  s = new Shape([], new GridItem(shape.gridItem.color));
  for (var i = 0; i < shape.points.length; i++) {
    s.points.push(new Point(shape.points[i].x, shape.points[i].y));
  }

  return s;
};


Shape.prototype.color = function() {
  return this.gridItem.color;
};


Shape.prototype.bottomPoints = function() {
  var bottomPoints = [];
  for (var i = 0; i < this.points.length; i++) {
    var p = this.points[i];
    var lowest = true;

    // y values count downward, so the higher the number
    // the lower the y value
    for (var j = 0; j < this.points.length; j++) {
      if (i !== j && p.x === this.points[j].x) {
        if (p.y < this.points[j].y) {
          lowest = false;
        }
      }
    }

    if (lowest) bottomPoints.push(p);
  }

  return bottomPoints;
}