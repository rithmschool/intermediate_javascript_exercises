

window.addEventListener("DOMContentLoaded", function(){

	var canvas = document.getElementById('my-canvas');

	//console.log("width: ", canvas.width, "height: ", canvas.height);

	// canvas starts with a weird pixel coordinate notion. Fix it with the following code:

	canvas.width = canvas.scrollWidth;
	canvas.height = canvas.scrollHeight;

	/// Let's draw something.

	var ctx = canvas.getContext('2d');

	//https://github.com/rithmschool/intermediate_javascript/blob/master/unit-01/04-introduction-to-canvas.md
/*
	ctx.fillStyle = "orange";
	var upperLeftX = 0;
	var upperLeftY = 0;
	var width = 50;
	var height = 50;
	ctx.fillRect(upperLeftX, upperLeftY, width, height);

	// drawing a triangle:
	ctx.fillStyle = "red";
	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(40, 40);
	ctx.lineTo(0, 80);
	ctx.fill();
	ctx.closePath();

	ctx.fillStyle = "green";
	ctx.beginPath();
	ctx.moveTo(100,100);
	ctx.lineTo(200, 100);
	ctx.lineTo(200, 200);
	ctx.fill();
	ctx.closePath();


	ctx.fillStyle = "orange";
	ctx.beginPath();
	ctx.arc(50,350,50,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();
*/
	var circle = {
		center: [150,375],
		radius: 25,
		color: "orange",
		draw: function() {
			//this.center = [x,y];
			ctx.fillstyle = this.color;
			ctx.beginPath();
			ctx.arc(this.center[0],this.center[1],this.radius,0,2*Math.PI);
			ctx.stroke();
			ctx.fill();
			ctx.closePath();
		}
	}

	var square = {
		corner: [0,350],
		//corner: [50-canvas.width, 50-canvas.height],
		width: 50,
		height: 50,
		color: "red",
		draw: function() {
			ctx.fillStyle = this.color;
			ctx.fillRect(this.corner[0], this.corner[1], this.width, this.height);
		}
	}
		
	function draw() {
		ctx.clearRect(square.corner[0], square.corner[1], canvas.width, canvas.height);
		square.corner[0]+= 5;
		square.corner[1]-= 5;
		square.draw();
	}

	var circleDirection = -5;

	var xCircleDirection = 5;
	var yCircleDirection = 5;

	function drawCircle(){

		if (circle.center[0] >= 375 || circle.center[0] <= 25) xCircleDirection *= -1;//*Math.random()+.5;
		if (circle.center[1] >= 375 || circle.center[1] <= 25) yCircleDirection *= -1;//*Math.random()+.5;
		ctx.clearRect(circle.center[0]-circle.radius-2, circle.center[1]-circle.radius-2, circle.radius *2+4, circle.radius*2+4)
		circle.center[0] -= xCircleDirection;
		circle.center[1] += yCircleDirection;
		circle.draw();
	}
	//draw();
	drawCircle();

	//circle.draw(circle.center[0],circle.center[1]);

	//var squareMoves = setInterval(draw, 30);
	var circleMoves = setInterval(drawCircle, 30);


	//debugger;
	while (square.corner[0] > 340){
		clearInterval(squareMoves);
	}


});