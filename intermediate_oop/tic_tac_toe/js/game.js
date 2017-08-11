function Game() {
  this.players = [];
  this.players.push(new Player("Brian", "X", 1));
  this.players.push(new Player("Jenny", "O", -1));
  this.currentPlayer = 0;
  this.message = document.getElementById("message");

  this.board = new Board();
  this.containerDiv = document.getElementById("board");
  this.containerDiv.addEventListener('click', this.attemptMark.bind(this));
  this.newGameBtn = document.getElementById("new-game");
  this.newGameBtn.addEventListener('click', this.newGame.bind(this));
}

Game.prototype.attemptMark = function(event) {
  // this is bound to GAME so we can call game's board's functions, and more!
  // Also remember to use Player's mark
  var targetIdStr = event.target.id;
  
  if (event.target.className !== "square") {
    return;
  }

  var x = Number.parseInt(targetIdStr[7]);
  var y = Number.parseInt(targetIdStr[9]);

  if (event.target.innerText === "") {
    console.log(`Player ${this.currentPlayer+1}: Marking Board with: ${this.players[this.currentPlayer].mark}`);
    this.board.makeMark(x, y, this.players[this.currentPlayer].adjuster);
    event.target.innerText = this.players[this.currentPlayer].mark;
    if (this.testWin(x, y)) {
      this.message.innerText = `Player ${this.currentPlayer+1} Wins!`;
    }
    this.currentPlayer = this.currentPlayer === 0? 1 : 0;
  } else {
    alert("That square is occupied!");
  }
}

Game.prototype.testWin = function(x, y) {
  return this.board.testWinCondition(x, y, this.players[this.currentPlayer].adjuster);
}

Game.prototype.newGame = function() {
  this.currentPlayer = 0;
  this.board.clearBoard();
  this.message.innerText = "";
  var squares = document.getElementsByClassName("square");
  for (var i = 0; i < squares.length; i++) {
     squares[i].innerText = "";
  }
}


