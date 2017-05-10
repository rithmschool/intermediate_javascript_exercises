window.addEventListener("DOMContentLoaded", function() {
	var canvas = document.getElementById("my-canvas");
	canvas.width = canvas.scrollWidth;
	canvas.height = canvas.scrollHeight;
	var ctx = canvas.getContext('2d');
		
	// var square = {
	// 	corner: [0,0],
	// 	width: 50,
	// 	height: 50,
	// 	color: "red",
	// 	draw: function() {
	// 		ctx.fillStyle = this.color;
	// 		ctx.fillRect(this.corner[0], this.corner[1], this.width, this.height);
	// 	}
	// }

	// function draw() {
	// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// 	square.corner[0] += 2;
	// 	square.corner[1] += 2;
	// 	square.draw();
	// }

	// var intervalId = setInterval(draw, 1000/10);
	// clearInterval(intervalId);

	var circle = {
		center: [0, 400],
		radius: 20,
		sAngle: 0,
		eAngle: 2*Math.PI, // full circle in radians
		color: "pink",
		draw: function() {
			ctx.fillStyle = this.color;
			ctx.strokeStyle = this.color;

			ctx.beginPath();
			ctx.arc(this.center[0], this.center[1], this.radius, this.sAngle, this.eAngle);
			ctx.stroke();
			ctx.fill();
		}
	}

	function drawCircle() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		circle.center[0] += 2;
		circle.center[1] -= 2;
		circle.draw();
		if (circle.center[0] === 400 || circle.center[1] === 0) {
			clearInterval(intervalId);
		}
	}

	var intervalId = setInterval(drawCircle, 1000/10);
});