//click event

$(document).ready(function(){
	var gameMaster = new GameMaster();
});


function GameMaster(){
	this.board = new Board(this);
	this.player = "X"
}

//shared variables
GameMaster.prototype.play = function(sq){
	sq.play(this.player);
	if(this.player === "X"){
		this.player = "O"
	} else {
		this.player = "X"
	}
}

function Board(gameMaster){
	this.grid = [];
	this.gameMaster = gameMaster;
	for(i = 0; i < 9; i++){
		this.grid[i] = new Square(i,gameMaster);
	}
}

function Square(x, gameMaster){
	this.status = "";
	this.$position = $(`#square_${x}`)
	this.gameMaster = gameMaster; 
	this.$position.on("click", function(){
		this.gameMaster.play(this);
	}.bind(this));
}

Square.prototype.play = function(mark){
	this.status = mark
	this.$position.text(mark);
}