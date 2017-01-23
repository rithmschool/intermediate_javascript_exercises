
var canvas = document.getElementById('my-canvas');

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

var ctx = canvas.getContext('2d');

var mySquare = {
    corner: [0,0],
    width: 50,
    height: 50,
    color: "red",
    draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.corner[0], this.corner [1], this.width, this.height);
        ctx.fillStyle = "blue";
        ctx.fillText("Blu Square", this.corner[0]+5, this.corner[1]+25, 40);
   }
};

var mySquare2 = {
    corner: [0,350],
    width: 50,
    height: 50,
    color: "blue",
    draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.corner[0], this.corner [1], this.width, this.height);
        ctx.fillStyle = "red";
        ctx.fillText("Blu Square", this.corner[0]+5, this.corner[1]+25, 40);
   }
}

mySquare.draw();

mySquare2.draw();

function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
mySquare.corner[0] += 2;
mySquare.corner[1] += 2;
mySquare2.corner[0] += 2;
mySquare2.corner[1] -= 2;
mySquare2.draw();
mySquare.draw();
}

setInterval(draw, 50);

// ctx.fillStyle = "orange";
// ctx.moveTo(0,0);
// ctx.lineTo(40, 40);
// ctx.lineTo(0, 40);
// ctx.lineTo(0, 60)
// ctx.fill();