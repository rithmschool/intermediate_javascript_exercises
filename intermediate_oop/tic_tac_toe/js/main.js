document.addEventListener("DOMContentLoaded", function() {

	const board = new Board();

	var DOMsquares = document.getElementsByClassName("square");

	var arrayIds = [];
	for (var i=0; i<DOMsquares.length; i++) {
		arrayIds.push(DOMsquares[i].id)
	}

	board.createBoard(arrayIds);

	// create our board event listener

	const DOMboard = document.getElementById("board");
	DOMboard.addEventListener("click", function (e) {
		var squareId = e.target.id;
		if(e.target.parentElement.parentElement.id === "board") {
			board.turn(squareId);
		}
	})

	// create a new game event listener

	const DOMbutton = document.getElementById("new-game");
	DOMbutton.addEventListener("click", function (e) {
		board.reset();
	})

});
