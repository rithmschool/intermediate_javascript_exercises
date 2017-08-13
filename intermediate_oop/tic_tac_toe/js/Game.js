function Game() {
  this.currentPlayer = 'X';
  this.board = new Board('board');
  this.message = document.getElementById('message');

  board.addEventListener('click', this.move.bind(this));
}

Game.prototype.move = function(square) {
  if (square.target.className === 'square' && square.target.innerHTML === '') {
    square.target.innerHTML = this.currentPlayer;
    
    if (this.checkForWinner(square.target)){
      this.message.innerHTML = `${this.currentPlayer} Wins!`;
    }
    
    this.currentPlayer = this.currentPlayer === 'O' ? 'X' : 'O';  
  }
}

Game.prototype.newGame = function() {
  this.board.clear();
  this.message.innerHTML = '';
  this.currentPlayer = 'X';
}

Game.prototype.checkForWinner = function(square) {
  var pattern = /XXX|OOO/;

  var rowIdx = square.id.charAt(7);
  var colIdx = square.id.charAt(9);

  var row = this.board.rowIds[rowIdx].map(function(e){
    return document.getElementById(e).innerHTML;
  }).join('');
  var col = this.board.colIds[colIdx].map(function(e){
    return document.getElementById(e).innerHTML;
  }).join('');
  var diag1 = this.board.diagIds[0].map(function(e){
    return document.getElementById(e).innerHTML;
  }).join('');
  var diag2 = this.board.diagIds[1].map(function(e){
    return document.getElementById(e).innerHTML;
  }).join('');


  if (row.match(pattern)) return true;
  if (col.match(pattern)) return true;
  if (diag1.match(pattern)) return true;  
  if (diag2.match(pattern)) return true;
  return false;
}