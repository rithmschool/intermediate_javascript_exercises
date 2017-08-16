function Board(){
	//key is id of square; value is the text
	this.squares = {}
}

Board.prototype.initSquares = function(){
	var allSquares = document.querySelectorAll(".square");
	for(var i = 0; i < allSquares.length; i++){
		this.squares[allSquares[i].id] = "";
		allSquares[i].innerText = "";
	}
}


function Player(){
	this.text = Math.random() < .5 ? "X" : "O";
}


function Game(){
	this.turnCount = 0;
	this.winner = false;
	this.board = new Board();
	this.player = new Player();
}

Game.prototype.initBoard = function(){
	this.board.initSquares();
}

Game.prototype.reset = function(){
	this.initBoard();
	this.player.text = Math.random() < 0.5 ? "X" : "O";
	this.turnCount = 0;
	this.winner = false;
	this.displayMessage(this.player.text + "'s turn");
}


Game.prototype.switchPlayers = function(id){
	//if square is clicked, change the text of square to that player
	this.board.squares[id] = this.player.text

	this.turnCount++;
	if(this.checkForWinner()){
		this.displayMessage("Congratulations, " + this.player.text + " wins!");
	} else if(this.turnCount === 9 && !this.winner){
		this.displayMessage("Tie Game!");
	} else if(this.player.text === "X"){
		this.player.text = "O";
		this.displayMessage(this.player.text + "'s turn");
	} else {
		this.player.text = "X";
		this.displayMessage(this.player.text + "'s turn");
	} 
}


Game.prototype.checkForWinner = function(){
	if(this.checkRow("1", "2", "3") || 
	this.checkRow("4", "5", "6") || 
	this.checkRow("7", "8", "9") || 
	this.checkRow("1", "4", "7") || 
	this.checkRow("2", "5", "8") || 
	this.checkRow("3", "6", "9") || 
	this.checkRow("1", "5", "9") || 
	this.checkRow("3", "5", "7")){
		this.winner = true;
	}
	return this.winner;

}

Game.prototype.checkRow = function(id1, id2, id3){
	if(this.board.squares[id1] === this.player.text
		&& this.board.squares[id2] === this.player.text
		&& this.board.squares[id3] === this.player.text
	){
		this.winner = true;
	}
	return this.winner;
}

Game.prototype.displayMessage = function(msg){
	var message = document.querySelector("#message");
	message.innerText = msg;
}


document.addEventListener("DOMContentLoaded", function() {
	const game = new Game();
	game.initBoard();

	const gameBoard = document.getElementById("board");
	gameBoard.addEventListener("click", function(e){
		if(e.target.innerText === "" && !game.winner){
			e.target.innerText = game.player.text;
			game.switchPlayers(e.target.id);
		}
	})
				
	const resetButton = document.getElementById("new-game");
	resetButton.addEventListener("click", function(e){
		game.reset();
	})
});





