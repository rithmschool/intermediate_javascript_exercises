function SquareView(divId, square = null) {

	this.divId = divId;
	this.div = document.getElementById(divId);

	this.square = square;

	



	// there is a divId for each square in the DOM

	// if square is blank, switch to X or O
	// if user clicks on square that has already been flipped to X or O, make sure another click doesn't change this



	// call Square.changeState("state to change to") <-- get this from the Board "turn"
	// then grab DOM div and update the innertext to "", "X", or "O" depending on Square.state 
}

SquareView.prototype.changeState = function(newState) {
	this.square.state = newState;
	this.div.innerText = this.square.state;
	return this.square.state;
}
