function CanvasWinTitle(x, y) {
  this.x = x;
  this.y = y;
  this.winner = "none";

  this.img = new Image();
  this.img.onload = function() {
      
  };
  this.img.src = 'images/win.png';
}

CanvasWinTitle.prototype.update = function(winner) {
  this.winner = winner;
};

CanvasWinTitle.prototype.draw = function(context) {
  
  if(this.winner === "leftWins"){
    context.drawImage(this.img, 120, 300);
    console.log("POIN! LEFT");
  } else if (this.winner === "rightWins") {
    context.drawImage(this.img, 620, 300);
    console.log("POIN! RIGHT");
  }
  
};


