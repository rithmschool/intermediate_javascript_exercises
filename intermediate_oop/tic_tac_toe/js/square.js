// square

function Square(id) {
	this.state = "";
	this.id = id;
	this.row = this.id.split("_")[1]; 
	this.column = this.id.split("_")[2];
	this.div = document.getElementById(this.id); // square_0_0 (or square_2_1)
}

// state can be X, O, or ""

Square.prototype.changeState = function (newState) {
	console.log("this state", this);
	this.state = newState;
	this.div.innerText = newState;
	return this.state;
}

