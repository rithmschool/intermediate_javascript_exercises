// board

function Board() {
	this.player = Math.random() < 0.5 ? "X" : "O"; // randomize starting player
	this.turnCount = 0;
	this.winner = null;
	this.squares = {
	};
	this.gameBoard = [[],[],[]];
}

Board.prototype.createBoard = function (arrayIds) {
	for (var i=0; i<arrayIds.length; i++) {
		this.squares[arrayIds[i]] = new Square(arrayIds[i]);
	}
}

Board.prototype.reset = function () {
	for (var key in this.squares) {
		this.squares[key].changeState("");
	}
	this.player = Math.random() < 0.5 ? "X" : "O"; 
	this.winner = null;
	this.turnCount = 0;
	this.printMessage("");
	this.gameBoard = [[],[],[]];
}


Board.prototype.turn = function(squareId) {
	var currSquare = this.squares[squareId];

	if(currSquare.state === "" && this.turnCount < 9) {
		currSquare.changeState(this.player); 
		this.turnCount++;

		this.gameBoard[currSquare.row][currSquare.column] = currSquare.state;
		// array with 3 nested arrays of length 3

		if (this.turnCount >= 5) { // no one can win before the 5th turn
			var winner = this.checkForWin(squareId);
		}
		
		// else if(turnCount === 9) --> tie
		if (!winner && this.turnCount === 9) {
			this.printMessage("It's a tie!");
		}

		this.player = this.player === "X" ? "O" : "X";
	}
}

Board.prototype.checkForWin = function(squareId) {

	var currRow = this.squares[squareId].row;
	var currCol = this.squares[squareId].column;

	var currPlay =  this.player;

	// check if the current row wins
	if(this.gameBoard[currRow][0] === currPlay && 
		this.gameBoard[currRow][1] === currPlay &&
		this.gameBoard[currRow][2] === currPlay) {
		this.printMessage(`${currPlay} wins!`)
		return "winner";
	}

	// check if the current column wins
	if(this.gameBoard[0][currCol] === currPlay && 
		this.gameBoard[1][currCol] === currPlay &&
		this.gameBoard[2][currCol] === currPlay) {
		this.printMessage(`${currPlay} wins!`)
		return "winner";
	}

	// check if diagonal wins
	if(this.gameBoard[0][0] === currPlay && 
		this.gameBoard[1][1] === currPlay &&
		this.gameBoard[2][2] === currPlay) {
		this.printMessage(`${currPlay} wins!`)
		return "winner";
	}

	// check if other diagonal wins
	if(this.gameBoard[0][2] === currPlay && 
		this.gameBoard[1][1] === currPlay &&
		this.gameBoard[2][0] === currPlay) {
		this.printMessage(`${currPlay} wins!`)
		return "winner";
	}

}



Board.prototype.printMessage = function(message) {
	var DOMmessage = document.getElementById("message");
	DOMmessage.innerText = message;
}



