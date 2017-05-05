function SquareView (divId, square) {
	this.divId = divId;
	this.div = document.getElementById(divId); // square_0_0 (or square_2_1)
	this.square = square;
}


SquareView.prototype.changeState = function (newState) {
	console.log("this state", this);
	this.square.state = newState;
	if(newState !== "blank") {
		this.div.innerText = newState;
	} else {
		this.div.innerText = "";
	}
	return this.square.state;
}

