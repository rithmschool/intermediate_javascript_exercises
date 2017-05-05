document.addEventListener("DOMContentLoaded", function() {

	const squareDomIds = [
		'square_0_0',
		'square_0_1',
		'square_0_2',
		'square_1_0',
		'square_1_1',
		'square_1_2',
		'square_2_0',
		'square_2_1',
		'square_2_2'
	]

	let board = new Board(squareDomIds);
	let game = new Game;

	const boardDiv = document.getElementById('board');
	const newGameBtn = document.getElementById('new-game');
	const message = document.getElementById('message');

	//when start a new game: create a new game & new board -- clear DOM text of pieces
	//set the message to blank
	newGameBtn.addEventListener('click', function(){
		game = new Game();
		board = new Board(squareDomIds);
		board.clearDOMText();
		message.innerText = "";
	});

	boardDiv.addEventListener('click', function(e){
		//if the player clicks on a square & 
		//the square isn't filled &
		//there isn't a game winner...
		if (e.target.className === 'square' && 
			!board.isSquareFilled(e.target.id) && 
			!game.getIsWinner()){
			var clickedSquare = board.squares[e.target.id];
			//call the fill function on the square to fill it
			clickedSquare.fill();
			//set the player of the square
			clickedSquare.setPlayer(game.getCurrentPlayer());
			//draw the play (and switch players)
			game.drawPlay(e.target.id);
			//check if the game is over;
		 	game.checkGameOver();
		}
	});

	function Board(squares){
		//create an object to hold all the squares instances (objects)
		this.squares = squares.reduce(function(acc, el){
			acc[el] = new Square(el);
			return acc;
		}, {});
	}

	//remove X's and O's from board (clear squares) when start new game
	Board.prototype.clearDOMText = function(){
		var squaresObj = this.squares;
		for (var key in squaresObj){
			document.getElementById(key).innerText = "";
		}
	}

	//check if entire Board is filled
	Board.prototype.isFilled = function(){
		var squaresObj = this.squares;
		for (var key in squaresObj){
			if (!squaresObj[key].isFilled){
				return false;
			}
		}
		return true;
	}

	//check is a specific square on the Board is filled
	Board.prototype.isSquareFilled = function(squareId){
		if (this.squares[squareId].isFilled){
			return true;
		}
		else {
			return false;
		}
	}

	Board.prototype.checkThreeSquaresMatch = function (sqId1, sqId2, sqId3){
		var squaresObj = this.squares;

		//check to see if all the three squares' players match (either all X or all O), but
		//make sure they are not null
		if ((squaresObj[sqId1].getPlayer() ===
			squaresObj[sqId2].getPlayer()) &&
			(squaresObj[sqId1].getPlayer() ===
			squaresObj[sqId3].getPlayer()) &&
			squaresObj[sqId1].getPlayer() !== null){
			return true;
		}
	}

	function Game(){
		this.arePlaying = true;
		this.isWinner = false;
		this.currentPlayer = "X";
		this.playerColor = "black";
		this.winningPiece;
	}

	Game.prototype.getCurrentPlayer = function(){
		return this.currentPlayer;
	}

	Game.prototype.drawPlay = function(squareId){
		//write the X or O in the square
		document.getElementById(squareId).style.color = this.playerColor;
		document.getElementById(squareId).innerText = this.currentPlayer;

		//switch players
		this.switchPlayer();
	}

	//toggle between players (X or O) and playerColors (black (for X) and red (for O))
	Game.prototype.switchPlayer = function(){
		this.currentPlayer === "X" ? this.currentPlayer = "O" : this.currentPlayer = "X";
		this.playerColor === "black"? this.playerColor = "red" : this.playerColor = "black";
	}

	Game.prototype.getIsWinner = function(){
		return this.isWinner;
	}

	Game.prototype.checkWinner = function(){
			//check rows
		if (board.checkThreeSquaresMatch('square_0_0', 'square_0_1', 'square_0_2') ||
			board.checkThreeSquaresMatch('square_1_0', 'square_1_1', 'square_1_2') ||
			board.checkThreeSquaresMatch('square_2_0', 'square_2_1', 'square_2_2') ||
			//check cols
			board.checkThreeSquaresMatch('square_0_0', 'square_1_0', 'square_2_0') ||
			board.checkThreeSquaresMatch('square_0_1', 'square_1_1', 'square_2_1') ||
			board.checkThreeSquaresMatch('square_0_2', 'square_1_2', 'square_2_2') ||
			//check diagonal
			board.checkThreeSquaresMatch('square_0_0', 'square_1_1', 'square_2_2') ||
			board.checkThreeSquaresMatch('square_0_2', 'square_1_1', 'square_2_0') 
		){
			this.isWinner = true;
			//the currentPlayer is really the next piece to play, so 
			//set the winning piece as the opposite of the currentPlayer 
			this.winningPiece = (this.currentPlayer === 'X') ? 'O' : 'X';
		}
	}

	Game.prototype.checkGameOver = function(){
		this.checkWinner();

		//if no winner & board is filled, there is a tie
		if (!this.isWinner && board.isFilled()){
			message.innerText = "Tie!";
			this.arePlaying = false;
			return true;
		}
		else if (this.isWinner){
			message.innerText = `${this.winningPiece} wins!`; 
			this.arePlaying = false;
			return true;
		}
		//if no winner & board not filled, return false
		return false;
	}

	function Square(domId){
		this.domId = domId;
		this.isFilled = false;
		this.player = null;
	}

	Square.prototype.fill = function(){
		this.isFilled = true;
	}

	Square.prototype.setPlayer = function(player){
		this.player = player;
	}

	Square.prototype.getPlayer = function(){
		return this.player;
	}

});
