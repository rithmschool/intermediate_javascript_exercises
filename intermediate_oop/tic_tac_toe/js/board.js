function Board() {
  this.row = [0, 0, 0];
  this.col = [0, 0, 0];
  this.diagUpperLeft = 0;
  this.diagUpperRight = 0;
  this.boardSize = 3;   // I am aware this is extraneous! May support n-size boards one day :D
}

Board.prototype.makeMark = function(x, y, adjuster){
  this.row[x] += adjuster;
  this.col[y] += adjuster;

  // Middle spot, vs diagonals...
  if (x === 1 && y === 1) {
    this.diagUpperLeft += adjuster;
    this.diagUpperRight += adjuster;
  } else if (x === y) { // Wrote it out the long way and noticed the pattern :D
    this.diagUpperLeft += adjuster;
  } else if (Math.abs(x - y) === this.boardSize-1) {
    this.diagUpperRight += adjuster;
  }
}

// Question: Do I need to bother with "else if" for formatting purposes, if each condition returns??
Board.prototype.testWinCondition = function(x, y, adjuster) {
  if (this.row[x] === adjuster * this.boardSize) return true;
  if (this.col[y] === adjuster * this.boardSize) return true;
  if (this.diagUpperLeft === adjuster * this.boardSize) return true;
  if (this.diagUpperRight === adjuster * this.boardSize) return true;

  return false;
}

Board.prototype.clearBoard = function() {
  for (var i = 0; i < this.row.length; i++) {
    this.row[i] = 0;
    this.col[i] = 0;
  }
  this.diagUpperLeft = 0;
  this.diagUpperRight = 0;
}