function BoardView(game) {
  this.container = document.getElementById("board");
  this.game = game;
  this.squares = document.querySelectorAll(".square");
  for(var i = 0; i < this.squares.length; i++){
    this.squares[i].addEventListener("click", this.draw.bind(this));
  }
  document.querySelector("#new-game").addEventListener("click", this.reset.bind(this));
}

BoardView.prototype.draw = function(event) {
  if(this.game.gameState() && event.target.innerText === ''){
  	this.game.add(Number(event.target.id));
  	var turn = this.game.getTurn();
  	event.target.innerText = turn;
  	this.game.upCounter();
  	this.game.changeTurn();
  	this.game.result(this.game.check, this.game.counter);
  }
}

BoardView.prototype.reset = function() {
  this.game.reset();
  for(var i = 0; i< this.squares.length; i++){
    this.squares[i].innerText = "";
  }
}
