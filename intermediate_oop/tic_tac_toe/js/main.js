document.addEventListener("DOMContentLoaded", function() {

	// create an instance of the Board class
	const board = new Board();

	// collect all elements with class = "square"
	var DOMsquares = document.getElementsByClassName("square");

	// make an array of these elements' ids
	var squareIds = [];
	for (var i=0; i<DOMsquares.length; i++) {
		squareIds.push(DOMsquares[i].id)
	}

	// add squares to the board layout from the array of "square" element ids
	board.addSquares(squareIds);

	// create a board event listener
	const DOMboard = document.getElementById("board");
	DOMboard.addEventListener("click", function (e) {
		var squareId = e.target.id;
		if(e.target.parentElement.parentElement.id === "board" && board.winner === "none") {
			// if a square is clicked on, play a turn on that square
			board.turn(squareId);
		}
	})

	// create a "New Game" button event listener
	const DOMbutton = document.getElementById("new-game");
	DOMbutton.addEventListener("click", function (e) {
		// if the button is clicked on, reset the game
		board.reset();
	})

});
