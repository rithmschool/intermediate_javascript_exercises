function CanvasNumbersComponent(x, y) {
  this.x = x;
  this.y = y;
  this.number = 0; // if -1 than blank
}

CanvasNumbersComponent.prototype.update = function(number,x,y) {
  this.number = number;
  this.x = x;
  this.y = y;
};

CanvasNumbersComponent.prototype.draw = function(context) {
  // context.fillStyle = this.color;
  // context.fillRect(this.x, this.y, this.width, this.height);  
  // console.log(this.x, this.y);
  // console.log(this.number)
  switch(this.number){
    case 0:
      drawZero(context,this.x,this.y);
      break;
    case 1:
      drawOne(context,this.x,this.y);
      break;
    case 2:
      drawTwo(context,this.x,this.y);
      break;
    case 3:
      drawThree(context,this.x,this.y);
      break;
    case 4:
      drawFour(context,this.x,this.y);
      break;
    case 5:
      drawFive(context,this.x,this.y);
      break;
    case 6:
      drawSix(context,this.x,this.y);
      break;
    case 7:
      drawSeven(context,this.x,this.y);
      break;
    case 8:
      drawEight(context,this.x,this.y);
      break;
    case 9:
      drawNine(context,this.x,this.y);
      break;
  }
  
};


function drawZero(context,x,y){
  context.fillStyle = "white";
  context.fillRect(x, y, 10, 70);
  context.fillRect(x+40, y, 10, 60);
  context.fillRect(x, y, 40, 10);
  context.fillRect(x, y+60, 50, 10);
  // context.fillRect(x, y+30, 40, 10);
}

function drawOne(context,x,y){
  context.fillStyle = "white";
  context.fillRect(x+20, y, 10, 70);
}

function drawOne(context,x,y){
  context.fillStyle = "white";
  context.fillRect(x+20, y, 10, 70);
}

function drawTwo(context,x,y){
  context.fillStyle = "white";
  context.fillRect(x+40, y, 10, 40);
  context.fillRect(x, y, 40, 10);
  context.fillRect(x, y+60, 50, 10);
  context.fillRect(x, y+30, 40, 10);
  context.fillRect(x, y+30, 10, 40);
}

function drawThree(context,x,y){
  context.fillStyle = "white";
  context.fillRect(x+40, y, 10, 60);
  context.fillRect(x, y, 40, 10);
  context.fillRect(x, y+60, 50, 10);
  context.fillRect(x, y+30, 40, 10);
}

function drawFour(context,x,y){
  context.fillStyle = "white";
  context.fillRect(x, y, 10, 30);
  context.fillRect(x+40, y, 10, 70);
  context.fillRect(x, y+30, 40, 10);
}

function drawFive(context,x,y){
  context.fillStyle = "white";
  context.fillRect(x, y, 10, 40);
  context.fillRect(x+40, y+30, 10, 40);
  context.fillRect(x, y, 50, 10);
  context.fillRect(x, y+60, 50, 10);
  context.fillRect(x, y+30, 40, 10);
}

function drawSix(context,x,y){
  context.fillStyle = "white";
  context.fillRect(x, y, 10, 70);
  context.fillRect(x+40, y+30, 10, 40);
  context.fillRect(x, y+60, 50, 10);
  context.fillRect(x, y+30, 40, 10);
}

function drawSeven(context,x,y){
  context.fillStyle = "white";
  context.fillRect(x+40, y, 10, 70);
  context.fillRect(x, y, 40, 10);
}

function drawEight(context,x,y){
  context.fillStyle = "white";
  context.fillRect(x, y, 10, 70);
  context.fillRect(x+40, y, 10, 60);
  context.fillRect(x, y, 40, 10);
  context.fillRect(x, y+60, 50, 10);
  context.fillRect(x, y+30, 40, 10);
}

function drawNine(context,x,y){
  context.fillStyle = "white";
  context.fillRect(x, y, 10, 40);
  context.fillRect(x+40, y, 10, 70);
  context.fillRect(x, y, 40, 10);
  context.fillRect(x, y+30, 40, 10);
}
