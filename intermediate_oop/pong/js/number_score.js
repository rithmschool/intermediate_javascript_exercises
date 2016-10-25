function NumberScore(x,y){
	this.x = x;
	this.y = y;
	this.score = 0; // 80
	this.component1 = new CanvasNumbersComponent(x,y,0);
	this.component2 = new CanvasNumbersComponent(x-65,y,0);
}

NumberScore.prototype.update = function() {
  this.component1.update();
  this.component2.update();
};

NumberScore.prototype.draw = function(context) {
  this.component1.draw(context);
  if(this.score>9){
  	this.component2.draw(context);
  }
};

NumberScore.prototype.scoreOnePoint = function(){
	this.score = this.score + 3;
	var stringNumber = this.score.toString();
	var number1;
	var number2;
	if(this.score>9){
		number2 = parseInt(stringNumber.charAt(0));
		number1 = parseInt(stringNumber.charAt(1));
	}
	this.component1.update(number1,this.x,this.y);
  	
	if(this.score>9){
		this.x=this.x+30;
		this.component2.update(number2,this.x-65,this.y);
	}
};

// this.leftScore = new NumberScore(430,15);
// this.rightScore = new NumberScore(580,15);