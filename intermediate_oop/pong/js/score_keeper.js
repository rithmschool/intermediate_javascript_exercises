function ScoreKeeper(scoreToWin){
	this.scoreToWin = scoreToWin;
	this.rightScore = 0;
	this.leftScore = 0;
}

ScoreKeeper.prototype.pointForRight = function(){
	this.rightScore = this.rightScore + 1;
};

ScoreKeeper.prototype.pointForLeft = function(){
	this.leftScore = this.leftScore + 1;
};

ScoreKeeper.prototype.getRightScore = function(){
	return this.rightScore;
};

ScoreKeeper.prototype.getLeftScore = function(){
	return this.leftScore;
};


ScoreKeeper.prototype.checkForWinner = function(){
	if(this.leftScore>=this.scoreToWin){
		return "leftWins";
	} else if (this.rightScore>=this.scoreToWin){
		return "rightWins";
	}
};






