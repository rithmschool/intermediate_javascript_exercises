// $(document).ready(function(){
// 	$("#board").on("click",".square", function(e){
// 		console.log($(e.target).html("x")); 
// 	});
// });


//Click EVENTS
var clickEvents = {
	//when new game button is clicked, GameStarter() ?
    init: function() {
        	//$("board").empty();
        	$("#new-game").on("click", function(e){
        		$(".square").empty();
		    	console.log($(e.target).val()); 
		    });
        //clickEvents.setup();
    },
 
 	//when each square id is clicked, draw X or O depending on what player played
 	//last, and change state of square
    writeXorO: function() {
        $("#board").on("click",".square", function(e){
			console.log($(e.target).html("x")); 
			//change status of that squre to filled
		});
    },
};


//Board class
function Board(squares){
	this.filledSquare = 0;
	this.squares = squares;
	this.grid = []
	console.log(this)
}

//will build board with jQuery listener on each div
Board.prototype.buildBoard = function(){
	$(document).ready(clickEvents.init);
	for(i = 0; i < 9; i++){
		this.grid[i] = new Square;
	}
	
}
//will update board
Board.prototype.update = function(row,column,status){
	this.grid[row][column]
}
//make marks on board

//display the board at current state


//Game class for "rules" or gameplay
//will decide win, lose, or tie
function GameMaster(){
	this.board = new Board();
	this.board.buildBoard();
	this.players = []
	this.players[0] = new Player("X");
	this.players[1] = new Player("O");

}

//GameStarter class to start or clear board
function GameStarter(){
	var beginGame = new GameMaster();
	beginGame;
}
//starts game
GameStarter();

//Player class, makes each player 
function Player(player){
	this.player = player;
}


function Square(){
	//status - can be X, O, or ""
	this.status = "";
}

Square.prototype.makeMark = function(player = "X"){
	//if it's not empty("E") (it's occupied)
	if(this.status !== "E"){
		alert("The square is already filled");
	} else {
		$(document).ready(clickEvents.writeXorO);
		this.status = "X"
	}
}


Square.prototype.getMark = function(){
	return this.mark
}

//make move class
function Move(){
	this.x = x
	this.o = o
}
