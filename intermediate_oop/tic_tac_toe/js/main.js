var X = "X";
var O = "O";
var E = "_";

document.addEventListener("DOMContentLoaded", function() {
  function Game() {
    this.nextPlayer = X;
    this.board = new Board();

  }

  function Board() {
    this.grid = [
      [E, E, E],
      [E, E, E],
      [E, E, E],
    ];

  }
});
//what classes do I want?
//Game - win? occupied?, Board- display, makeMove(0,2,"x")
//Cells- current state, has an x, o or unoccupied
//player- could be an x or o
//ok to do vanilla javascript as long as you put it into classes
//var game = new game constructor
//call function on game that sets up the board
//some cb when the boad gets clicked
