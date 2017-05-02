window.addEventListener("DOMContentLoaded", function () {

	var canvas = document.getElementById("my-canvas");
	canvas.width = canvas.scrollWidth;
	canvas.height = canvas.scrollHeight;
	var ctx = canvas.getContext('2d');

	function drawTriangle(color, x, y) {
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.moveTo(x,y);
		ctx.lineTo(x, y+50);
		ctx.lineTo(x+50, y);
		ctx.fill();
		ctx.closePath();
	}

  drawTriangle("red", 50, 50);

	// var canvas = document.getElementById("my-canvas");
	// canvas.width = canvas.scrollWidth;
	// canvas.height = canvas.scrollHeight;
	// var ctx = canvas.getContext('2d');
		
	// var circle = {
	// 	corner: [0,0],
	// 	color: "purple",
	// 	x: 50,
	// 	y: 50,
	// 	draw: function() {
	// 		ctx.fillStyle = this.color;
	// 		ctx.beginPath();
	// 		ctx.arc(circle.x,circle.y,50,0,2*Math.PI);
	// 		ctx.fill();
	// 		}
	// }

	// var directionX = right;
	// var directionY = down;

	// function checkDirection() {
	// 	if (circle.x === 350) {
	// 		directionX = left;
	// 	}
	// 	else if (circle.y === 350) {
	// 		directionY = up;
	// 	}
	// 	else if (circle.x === 50) {
	// 		directionX = right;
	// 	}
	// 	else if (circle.y === 50)
	// 		directionY = down;
	// }

	// function drawUpLeft() {
	// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// 	circle.x -= 5;
	// 	circle.y -= 5;
	// 	circle.draw();
	// }

	// function drawDownRight() {
	// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// 	circle.x += 5;
	// 	circle.y += 5;
	// 	circle.draw();
	// }


	// setInterval(draw, 1000/10);
	// setInterval(circle.draw, 1000/10);	

});