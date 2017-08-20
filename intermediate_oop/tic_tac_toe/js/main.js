// document.addEventListener("DOMContentLoaded", function() {
// });

function Game() {
  this.board = new Board();
  this.playerX = new Player(prompt("Player X"), "X")
  this.playerO = new Player(prompt("Player O"), "O")
  this.player = this.playerX.xo;

  $('.square').click(this.clickedSquare.bind(this));
}

function Board(player){
  var $square = $('.square');
  this.board = [];
}

function Player (name, xo){
    this.name = name;
    this.xo = xo;
}

Game.prototype.playerSelection = function(player){
  if(this.player === "X"){
    this.player = this.playerO.xo
  } else {
    this.player = this.playerX.xo
  }
  // this.board(player)
};

Board.prototype.addPosition = function($sqr, player){
  if(this.board[$sqr.attr('id')] === undefined){
      this.board[$sqr.attr('id')] = player
      $sqr.text(player);
  } else {
    console.log('DENIED!')
  }
}

Game.prototype.clickedSquare = function (e) {
  this.board.addPosition($(e.target), this.player)
  this.playerSelection(this.player)
};

var myGame = new Game();

