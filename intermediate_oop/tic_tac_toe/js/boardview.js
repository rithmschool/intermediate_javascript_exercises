function BoardView(game) {
  this.container = document.getElementById("board");
  this.game = game;
  $(this.container).on("click", ".square", this.draw.bind(this));
  $("#new-game").on("click", this.reset.bind(this));
}

BoardView.prototype.draw = function(event) {
  this.game.add(Number(event.target.id));
  var turn = this.game.getTurn();
  event.target.innerText = turn;
  this.game.counter ++;
  this.game.changeTurn();
  this.game.result(this.game.check, this.game.counter);
}

BoardView.prototype.reset = function() {
  this.game.reset();
  $(".square").text("");
}
