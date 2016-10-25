function ScoreKeeper(scoreToWin){
	this.scoreToWin = scoreToWin;
	this.rightScore = 0;
	this.leftScore = 0;
}

ScoreKeeper.prototype.pointForRight = function(){
	this.rightScore = this.rightScore + 1;
	this.__checkForWinner();
};

ScoreKeeper.prototype.pointForLeft = function(){
	this.leftScore = this.leftScore + 1;
	this.__checkForWinner();
};

ScoreKeeper.prototype.updateScoreBoard = function(){
	var message = this.leftScore + " to " + this.rightScore;
	messageConsole.innerText = message;
};

ScoreKeeper.prototype.__checkForWinner = function(){
	if(this.leftScore>=this.scoreToWin || this.rightScore>=this.scoreToWin){
		this.rightScore = 0;
		this.leftScore = 0;
	}
};
