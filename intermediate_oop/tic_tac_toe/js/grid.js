function Grid () {
	this.results = {
		X: new Set(),
		O: new Set()
	}
	this.move = 0;
	this.on = true;
}

Grid.prototype.testWin = function(input) {
	if (this.results[input].has("s1") && this.results[input].has("s2") && this.results[input].has("s3")) {
		return true;
	}  else if (this.results[input].has("s4") && this.results[input].has("s5") && this.results[input].has("s6")) {
		return true;
	} else if (this.results[input].has("s7") && this.results[input].has("s8") && this.results[input].has("s9")) {
		return true;
	} else if (this.results[input].has("s1") && this.results[input].has("s4") && this.results[input].has("s7")) {
		return true;
	} else if (this.results[input].has("s2") && this.results[input].has("s5") && this.results[input].has("s8")) {
		return true;
	} else if (this.results[input].has("s3") && this.results[input].has("s6") && this.results[input].has("s9")) {
		return true;
	} else if (this.results[input].has("s1") && this.results[input].has("s5") && this.results[input].has("s9")) {
		return true;
	} else if (this.results[input].has("s3") && this.results[input].has("s5") && this.results[input].has("s7")) {
		return true;
	} else {
		return false;
	}
}

Grid.prototype.addResult = function (input, value) {
	this.results[input].add(value);
}

Grid.prototype.reset = function() {
	this.results.X = new Set();
	this.results.O = new Set();
	this.move = 0;
	this.on = true;
}

Grid.prototype.increaseMove = function() {
	this.move++;
}

Grid.prototype.turnOff = function () {
	this.on = false;
}

Grid.prototype.createPage = function(div, message, winner) {
	var $p = $("<p>")
	if (message ==="tie") {
		$p.text("You have tied!");
	} else if (message === "win") {
		$p.text(winner + " has won the game!");
	}
	return div.append($p);
}