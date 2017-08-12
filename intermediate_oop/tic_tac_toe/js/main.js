//click event

$(document).ready(function(){
	var gameMaster = new GameMaster();
});


function GameMaster(){
	this.board = new Board(this);
	this.player = "X"
}


GameMaster.prototype.winLoseDraw = function(validity,x){
	console.log(validity)
	//if winning pattern
	//if draw pattern
	//else send to GameMaster.play
}

//shared variables
GameMaster.prototype.validMove = function(validity,x){
	if(validity.status === ""){
		//validity: obj of "Square" (and hence it's property status)
		//x = id of square
		this.play(validity,x);
	} else {
		alert('If at first you do not succeed, try try again.')
	}
}


GameMaster.prototype.play = function(validity,x){
	validity.play(this.player);
	if(this.player === "X"){
		this.player = "O";
		validity.status = "O"
	} else {
		this.player = "X";
		validity.status = "X"
	}
	this.winLoseDraw(validity,x)
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
		this.gameMaster.validMove(this,x);   
	}.bind(this));
}

Square.prototype.play = function(mark){
	this.status = mark
	this.$position.text(mark);
}