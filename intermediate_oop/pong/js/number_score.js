function NumberScore(x,y){
	this.x = x;
	this.y = y;
	this.score = 0; // 80
	this.component1 = new CanvasNumbersComponent(x,y,0);
	this.component2 = new CanvasNumbersComponent(x-65,y,0);
}

NumberScore.prototype.update = function(num) {
	//TODO need to set x and y
	this.score = num;
	if(num>9){
		var numString = num.toString();
		this.component1.update(parseInt(numString.charAt(1)),this.x,this.y);
		this.component2.update(parseInt(numString.charAt(0)),this.x-65,this.y);
	} else {
		this.component1.update(num, this.x,this.y);
  		this.component2.update(-1, this.x,this.y);
	}
  
};

NumberScore.prototype.draw = function(context) {
  this.component1.draw(context);
  if (this.score>9){
  	this.component2.draw(context);
  }
  
};

NumberScore.prototype.changeXPos = function(xPos){
	this.x = xPos;
	console.log(this.x);
	var numString = this.score.toString();
	this.component1.update(parseInt(numString.charAt(1)),this.x,this.y);
	this.component2.update(parseInt(numString.charAt(0)),this.x-65,this.y);
};