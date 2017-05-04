function Grid () {
	this.results = {
		X: [],
		O: []
	}
	this.move = 0;
	this.on = true;
}

Grid.prototype.testWin = function(input) {
	if (this.results[input].indexOf("s1") !== -1 && this.results[input].indexOf("s2") !== -1 && this.results[input].indexOf("s3") !== -1) {
		return true;
	}  else if (this.results[input].indexOf("s4") !== -1 && this.results[input].indexOf("s5") !== -1 && this.results[input].indexOf("s6") !== -1) {
		return true;
	} else if (this.results[input].indexOf("s7") !== -1 && this.results[input].indexOf("s8") !== -1 && this.results[input].indexOf("s9") !== -1) {
		return true;
	} else if (this.results[input].indexOf("s1") !== -1 && this.results[input].indexOf("s4") !== -1 && this.results[input].indexOf("s7") !== -1) {
		return true;
	} else if (this.results[input].indexOf("s2") !== -1 && this.results[input].indexOf("s5") !== -1 && this.results[input].indexOf("s8") !== -1) {
		return true;
	} else if (this.results[input].indexOf("s3") !== -1 && this.results[input].indexOf("s6") !== -1 && this.results[input].indexOf("s9") !== -1) {
		return true;
	} else if (this.results[input].indexOf("s1") !== -1 && this.results[input].indexOf("s5") !== -1 && this.results[input].indexOf("s9") !== -1) {
		return true;
	} else if (this.results[input].indexOf("s3") !== -1 && this.results[input].indexOf("s5") !== -1 && this.results[input].indexOf("s7") !== -1) {
		return true;
	} else {
		return false;
	}
}

Grid.prototype.addResult = function (input, value) {
	this.results[input].push(value);
}

Grid.prototype.reset = function() {
	this.results.X = [];
	this.results.O = [];
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