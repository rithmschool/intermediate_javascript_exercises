function Square() {
  this.state = Square.EMPTY_STATE;
}

Square.EMPTY_STATE = 0;
Square.X_STATE = 1;
Square.O_STATE = 2;

Square.prototype.x = function() {
  return this.state === Square.X_STATE;
};

Square.prototype.o = function() {
  return this.state === Square.O_STATE;
};

Square.prototype.empty = function() {
  return this.state === Square.EMPTY_STATE;
};

Square.stateToString = function(state) {
  if (state === Square.X_STATE) {
    return "X";
  } else if (state === Square.O_STATE) {
    return "O";
  } else {
    return "";
  }
};
