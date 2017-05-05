document.addEventListener("DOMContentLoaded", function() {

	const board = new Board();

	board.reset();

	// event listener on id=board that calls a function on board's prototype
	// to flip the card (board calls a function from squareView)
	// call board.turn

	// capture card ID from the DOM

	// until board functions that track game state make you stop, keeps you from clicking that again

	// const button = document.getElementById('button')
	// button.addEventListener

	const square_0_0 = new Square("square_0_0");
	board.squares[square_0_0.id] = square_0_0;
	const squareView_0_0 = new SquareView("square_0_0", square_0_0);
	square_0_0.view = squareView_0_0;

	const square_0_1 = new Square("square_0_1");
	board.squares[square_0_1.id] = square_0_1;
	const squareView_0_1 = new SquareView("square_0_1", square_0_1); // fix others
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
