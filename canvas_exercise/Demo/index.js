// document.addEventListener("DOMContentLoaded", function(){
	var canvas = document.getElementById("my-canvas");
	canvas.width = canvas.scrollWidth;
	canvas.height = canvas.scrollHeight;

		
	var x = 0;
	var y = 0;
	// var addX = 2;
	// var addY = 3;

	// var ctx = canvas.getContext('2d');
	// ctx.fillStyle = "pink";
	// ctx.fillRect(x,y,100,100);
	// ctx.clearRect(0,0,canvas.width,canvas.height);
	
	
	canvas.font = '48px serif';
  	canvas.strokeText('Hello world', 10, 50);

	// function update(){
	// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// 	x+= 1;
	// 	y+= 1;
	// 	ctx.fillRect(x,y,100,100);
	// }

	// function update() {
	//   ctx.clearRect(0, 0, canvas.width, canvas.height);
	//   if (x > canvas.width || x < 0) { addX *= -1; }
	//   if (y > canvas.height || y < 0) { addY *= -1; }
	//   x += addX;
	//   y += addY;
	//   ctx.fillRect(x, y, 100, 100);
	// }	4

	// setInterval(update, 10)

// });