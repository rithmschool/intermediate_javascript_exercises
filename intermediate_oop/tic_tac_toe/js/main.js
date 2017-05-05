document.addEventListener("DOMContentLoaded", function() {

	var g = new Game();

	let $board = $("#board");

	$board.on('click',function(e){
		g.play($(e.target)[0].id)
	});

	let $newgame = $("#new-game");

	$newgame.on('click',function(e){
		g.reset();
	});

})


function Game(){
	this.b = new Board();
	this.turn = "X";
	this.playable = true;
	this.playCount = 0;

	this.clear.bind(this);
	this.play.bind(this);
}

Game.prototype.reset = function(){
	$("#message").text("");
	this.clear();
	this.playable=true;
	this.turn = "X";
	this.playCount = 0;
}

Game.prototype.play= function(htmlId){
	// id in coord.
	if (! this.playable){ return null}

	let coord = [];
	coord[0] = +htmlId.slice(7,8);
	coord[1] = +htmlId.slice(9,10);
	if ( this.b.update(coord, this.turn)) {
		// switch 
		this.turn = this.turn === "X"? "O" : "X";
		this.playCount++;

		if (this.b.isGameWon()){
			$("#message").text(`${this.b.isGameWon()} Won!`);
			this.playable = false;
		}else if ( this.playCount === 9){
			$("#message").text(`Game is a draw!`);
			this.playable = false;
		}
	}
}

Game.prototype.clear = function(){
	// how to we get our this right?
	this.b.clear();
}

function Board(){
	this.xy = [
				[new Square([0,0]), new Square([0,1]), new Square([0,2])],
				[new Square([1,0]), new Square([1,1]), new Square([1,2])],
				[new Square([2,0]), new Square([2,1]), new Square([2,2])]
				];

}

Board.prototype.isGameWon = function(){

	// check rows:
	for (let i=0; i < 3; i++){
		let rowCheck = this.xy[i][0].content + this.xy[i][1].content + this.xy[i][2].content;
		 if (rowCheck === "XXX" || rowCheck === "OOO") return rowCheck[0];
	}

	// check columns:
	for (let i=0; i < 3; i++){
		let rowCheck = this.xy[0][i].content + this.xy[1][i].content + this.xy[2][i].content;
		 if (rowCheck === "XXX" || rowCheck === "OOO") return rowCheck[0];
	}

	// check L-R diagonal
	let rowCheck = this.xy[0][0].content + this.xy[1][1].content + this.xy[2][2].content;
	if (rowCheck === "XXX" || rowCheck === "OOO") return rowCheck[0];

	rowCheck = this.xy[0][2].content + this.xy[1][1].content + this.xy[2][0].content;
	if (rowCheck === "XXX" || rowCheck === "OOO") return rowCheck[0];

	return null;
}


Board.prototype.toString = function(){
	let outString = "";
	for (let i = 0; i<3; i++){
		for (let j =0; j<3; j++){
			let printChar = this.xy[i][j].content || "_"
			outString += printChar + " ";
		}
		outString +="\n"
	}
	return outString;
}

Board.prototype.update = function(coord, val){ // coord is an array of x/y: [x,y]
	return this.xy[coord[0]][coord[1]].setVal(val);
}

Board.prototype.clear = function(){
	for (let i=0; i<3; i++){
		for (let j=0; j<3; j++){
			this.xy[i][j].clear();
		}
	}
}

function Square(coord){
	this.content = "";
	this.coord = coord;
	this.htmlId = "#square_" + coord[0] + "_" + coord[1]; // square_0_2
}

Square.prototype.setVal = function(val){
	if (this.content === ""){
		this.content = val;
		$(this.htmlId).text(this.content);

		return val;
	}else{
		return null;
	}
}
Square.prototype.clear = function(){
	this.content = "";
	$(this.htmlId).text("");
}

