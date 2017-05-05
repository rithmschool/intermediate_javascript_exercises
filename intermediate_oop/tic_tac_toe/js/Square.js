function Square(id, state = "") {
	this.id = id;
	this.state = state;
	this.view = null;
	this.row = this.id.split("_")[1];
	this.col = this.id.split("_")[2];
}

// BEHAVIOR

// var square = new Square();

// if (square.state === "blank") {
// 	// do stuff;
// }

// square.changeState("x");
