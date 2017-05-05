document.addEventListener("DOMContentLoaded", function() {
	// creates the board
	const board = new Board();

	// start the game
	board.reset();

	const square_0_0 = new Square("square_0_0");
	board.squares[square_0_0.id] = square_0_0;
	const squareView_0_0 = new SquareView("square_0_0", square_0_0);
	square_0_0.view = squareView_0_0;

	const square_0_1 = new Square("square_0_1");
	board.squares[square_0_1.id] = square_0_1;
	const squareView_0_1 = new SquareView("square_0_1", square_0_1);
	square_0_1.view = squareView_0_1;

	const square_0_2 = new Square("square_0_2");
	board.squares[square_0_2.id] = square_0_2;
	const squareView_0_2 = new SquareView("square_0_2", square_0_2);
	square_0_2.view = squareView_0_2;

	const square_1_0 = new Square("square_1_0");
	board.squares[square_1_0.id] = square_1_0;
	const squareView_1_0 = new SquareView("square_1_0", square_1_0);
	square_1_0.view = squareView_1_0;

	const square_1_1 = new Square("square_1_1");
	board.squares[square_1_1.id] = square_1_1;
	const squareView_1_1 = new SquareView("square_1_1", square_1_1);
	square_1_1.view = squareView_1_1;

	const square_1_2 = new Square("square_1_2");
	board.squares[square_1_2.id] = square_1_2;
	const squareView_1_2 = new SquareView("square_1_2", square_1_2);
	square_1_2.view = squareView_1_2;

	const square_2_0 = new Square("square_2_0");
	board.squares[square_2_0.id] = square_2_0;
	const squareView_2_0 = new SquareView("square_2_0", square_2_0);
	square_2_0.view = squareView_2_0;

	const square_2_1 = new Square("square_2_1");
	board.squares[square_2_1.id] = square_2_1;
	const squareView_2_1 = new SquareView("square_2_1", square_2_1);
	square_2_1.view = squareView_2_1;

	const square_2_2 = new Square("square_2_2");
	board.squares[square_2_2.id] = square_2_2;
	const squareView_2_2 = new SquareView("square_2_2", square_2_2);
	square_2_2.view = squareView_2_2;

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


	// add event listener to DOM object #board, calling a function from Board that calls a function from SquareView that changes the DOM squares to X or O
	// until the Board functions that keep track of game state tell you to stop looping, or until someone pushes the button

	// if e.target (DOM square) has the class "blank", then let turn

});
