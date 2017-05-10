function Scoreboard(name, x, y, scoreboardWidth, scoreboardHeight, score=0) {
	this.name = name;
	this.score = score;
	this.component = new CanvasComponent(x, y, scoreboardWidth, scoreboardHeight);
}

Scoreboard.SCOREB_WIDTH = 80;
Scoreboard.SCOREB_HEIGHT = 40;

Scoreboard.prototype.draw = function(context) {
	this.component.drawText(context, `${this.name}:  ${this.score}`);
}