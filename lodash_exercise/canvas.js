

var canvas = document.getElementById("my-canvas");
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;
var ctx = canvas.getContext('2d');

var square = {
    corner: [0,0],
    width: 50,
    height: 50,
    color: "red",
    draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.corner[0], this.corner[1], this.width, this.height);
        ctx.font = "10px serif";
        ctx.fillStyle = "black";
        ctx.fillText("Hello",this.corner[0]+5 , this.corner[1]+25);
    }
}

var anotherSquare = {
    corner: [0,350],
    width: 50,
    height: 50,
    color: "red",
    draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.corner[0], this.corner[1], this.width, this.height);
        ctx.font = "10px serif";
        ctx.fillStyle = "black";
        ctx.fillText("Hello", this.corner[0]+5 , this.corner[1]+25);
    }
}

//square.draw();

// ctx.moveTo(50, 0);
// ctx.lineTo(200, 0);
// ctx.lineTo(150, 200);
// ctx.lineTo(0, 200);
// ctx.fill();

function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	square.corner[0] += 2;
	square.corner[1] += 2;
	square.draw();
	anotherSquare.draw();
	anotherSquare.corner[0] += 2;
	anotherSquare.corner[1] -= 2;
}


setInterval(draw, 50);

