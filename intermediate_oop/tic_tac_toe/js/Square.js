function Square(id) {
	this.id = id;
	this.state = "";
	this.row = this.id.split("_")[1];
	this.col = this.id.split("_")[2];
	this.div = document.getElementById(this.id);
}

Square.prototype.changeState = function(newState) {
	this.state = newState;
	this.div.innerText = this.state;
	return this.state;
}