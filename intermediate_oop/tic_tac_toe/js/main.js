document.addEventListener("DOMContentLoaded", function() {
	// creates the board
	const board = new Board();

	var squares = document.getElementsByClassName("square");
	var ids = [];
	for (var i = 0; i < squares.length; i++) {
		ids.push(squares[i].id);
	}
	
	// start the game
	board.createBoard(ids);

	const DOMboard = document.getElementById("board");
	DOMboard.addEventListener("click", function(e) {
		var squareId = e.target.id;
		// only run a turn if this exists
		if (e.target.parentElement.parentElement.id === "board") {
			board.turn(squareId);
		}
	});

	const button = document.getElementById("new-game");
	button.addEventListener("click", function() {
		board.reset();
	});
});
