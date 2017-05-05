// board

function Board() {
	this.player = Math.random() < 0.5 ? "X" : "O"; // randomize starting player
	this.turnCount = 0;
	this.squares = {}; // keys are squareIds, values are the square instances
	this.gameBoard = [[],[],[]]; // nested array to store played moves
}

// function to add squares to the board
Board.prototype.addSquares = function (squareIds) {
	for (var i=0; i<squareIds.length; i++) {
		this.squares[squareIds[i]] = new Square(squareIds[i]);
	}
}

// function to clear board and reset the game
Board.prototype.reset = function () {
	this.player = Math.random() < 0.5 ? "X" : "O"; 
	this.turnCount = 0;
	for (var key in this.squares) {
		this.squares[key].changeState("");
	}
	this.gameBoard = [[],[],[]]; 
	this.printMessage("");
}

// function to play a turn
Board.prototype.turn = function(squareId) {

	var currSquare = this.squares[squareId];

	if(currSquare.state === "" && this.turnCount < 9) {

		// flip the card and change its state
		currSquare.changeState(this.player); 

		// increment the turn counter
		this.turnCount++;

		// add the current square's state (X or O) to the gameBoard array
		this.gameBoard[currSquare.row][currSquare.column] = currSquare.state;
		// array with 3 nested arrays of length 3

		// check for a win after at least 5 turns (not possible before then)
		if (this.turnCount >= 5) { 
			var winner = this.checkForWin(squareId);
		}
		
		// if at 9 turns there was no win, it's a tie
		if (!winner && this.turnCount === 9) {
			this.printMessage("It's a tie!");
		}

		// change the player
		this.player = this.player === "X" ? "O" : "X";
	}
}

// function to check for a win
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

// function to print messages in the element with id = "message"
Board.prototype.printMessage = function(message) {
	var DOMmessage = document.getElementById("message");
	DOMmessage.innerText = message;
}
