// square

function Square(id, view = "null", state = "") {
	this.state = state;
	this.id = id;
	this.view;
	this.row = this.id.split("_")[1]; 
	this.column = this.id.split("_")[2];
}

// state can be X, O, or ""

