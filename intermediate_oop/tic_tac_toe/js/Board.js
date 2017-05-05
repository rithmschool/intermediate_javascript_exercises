function Board() {
	this.squares = {};
	this.player = Math.random() < 0.5 ? "X" : "O";
	this.turnCount = 0;
	this.winner = null;
	this.gameBoard = [[],[],[]];

	// add thing here that creates all the squares
}

Board.prototype.createBoard = function(ids) {
	for (var i = 0; i < ids.length; i++) {
		this.squares[ids[i]] = new Square(ids[i]);
	}
}

Board.prototype.reset = function() {
	// loop through all keys (squares) and set their states to "blank"
	var obj = this.squares;
	for (var key in obj) {
		obj[key].changeState("");
	}

	// reset everything
	this.printMsg("");
	this.turnCount = 0;
	this.winner = null;
	this.player = Math.random() < 0.5 ? "X" : "O";
	this.gameBoard = [[],[],[]];
}

Board.prototype.turn = function(squareId) {
	var currSquare = this.squares[squareId];

	console.log("row " + currSquare.row);
	console.log("col " + currSquare.col);

	if (currSquare.state === "" && this.turnCount < 9) {

		// take the actual turn
		currSquare.changeState(this.player); 
		
		this.turnCount++;

		this.gameBoard[currSquare.row][currSquare.col] = currSquare.state;
		console.log(this.gameBoard);

		// check for winner if at least 5 turns have passed
		if (this.turnCount >= 5) {
			var currWinner = this.checkForWin(squareId);
		}

		// if winner is undefined:
		if (!currWinner && (this.turnCount === 9)) {
			this.printMsg("It's a tie!");
		}

		// increment to the next turn & switch the player
		this.player = (this.player === "X") ? "O" : "X";
	} 
}

Board.prototype.checkForWin = function(squareId) {
	var row = this.squares[squareId].row;
	var col = this.squares[squareId].col;
	var currPlayer = this.player;

	// if one square's state exists && all squares in a row are filled && states are the same
	if ((this.gameBoard[row][0] === currPlayer) && 
		(this.gameBoard[row][1] === currPlayer) && 
		(this.gameBoard[row][2] === currPlayer)) {

		this.winner = this.squares[squareId].state;
	}
	// if all squares in a column are filled, check if their states are the same
	if ((this.gameBoard[0][col] === currPlayer) && 
		(this.gameBoard[1][col] === currPlayer) && 
		(this.gameBoard[2][col] === currPlayer)) {

		this.winner = this.squares[squareId].state;
	}

	// if all squares in a diagonal are filled, check if their states are the same
	if ((this.gameBoard[0][0] === currPlayer) && 
		(this.gameBoard[1][1] === currPlayer) && 
		(this.gameBoard[2][2] === currPlayer)) {

		this.winner = this.squares[squareId].state;
	}

	if ((this.gameBoard[0][2] === currPlayer) && 
		(this.gameBoard[1][1] === currPlayer) && 
		(this.gameBoard[2][0] === currPlayer)) {

		this.winner = this.squares[squareId].state;
	}

	// this.squares is an object full of squares, where each square has a .state property that is X, O, or blank
	if (this.winner === this.player) {
		this.printMsg(`${this.player} wins!`);
	}
	return this.winner;
}

Board.prototype.printMsg = function(message) {
	var msg = document.getElementById("message");
	msg.innerText = message;
}