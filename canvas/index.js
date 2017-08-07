document.addEventListener('DOMContentLoaded', function() {
  var canvas = document.getElementById('my-canvas');
  console.log('width: ', canvas.width, 'height: ', canvas.height);
  canvas.width = canvas.scrollWidth;
  canvas.height = canvas.scrollHeight;

  var ctx = canvas.getContext('2d');

  var upperLeftX = 0;
  var upperLeftY = 0;
  var width = 50;
  var height = 50;
  ctx.fillStyle = 'orange';
  ctx.fillRect(100, 100, 200, 200);

  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(40, 40);
  ctx.lineTo(0, 80);
  ctx.fill();
  ctx.closePath();
  ctx.fillText('Hello world', 100, 200);
  ctx.font = '148px serif';

  canvas.width = canvas.scrollWidth;
  canvas.height = canvas.scrollHeight;
  var intervalId = setInterval(draw, 50);
  square.corner = [50, 50];

  var canvas = document.getElementById('my-canvas');
  canvas.width = canvas.scrollWidth;
  canvas.height = canvas.scrollHeight;
  var ctx = canvas.getContext('2d');

  var square = {
    corner: [0, 0],
    width: 50,
    height: 50,
    color: 'red',
    draw: function() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.corner[0], this.corner[1], this.width, this.height);
    }
  };

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    square.draw();
  }

  var intervalId = setInterval(draw, 50);

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    square.corner[0] += 2;
    square.corner[1] += 2;
    square.draw();
  }

  canvas.width = canvas.scrollWidth;
  canvas.height = canvas.scrollHeight;
  var x = 0;
  var y = 0;
  var addX = 2;
  var addY = 3;
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'pink';
  ctx.fillRect(x, y, 100, 100);

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (x > canvas.width || x < 0) {
      addX *= -1;
    }
    if (y > canvas.height || y < 0) {
      addY *= -1;
    }
    x += addX;
    y += addY;
    ctx.fillRect(x, Math.tan(y), 100, 100);
  }

  setInterval(update, 40);
});

ctx.fillStyle = 'blue';
ctx.fillRect(100, 100, 100, 100);
ctx.fillStyle = 'red';
ctx.fillRect(400, 100, 100, 100);
ctx.fillStyle = 'green';
ctx.fillRect(300, 100, 100, 100);

//line

ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(300, 100);
ctx.lineTo(400, 300);
ctx.strokeStyle = 'purple';
ctx.stroke();

//Arc / circle
ctx.beginPath();
ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
ctx.strokeStyle = 'brown';
ctx.stroke();

for (var i = 0; i < 3; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, Math.PI * 2, false);
  ctx.strokeStyle = 'orange';
  ctx.stroke();
}

ctx.fillStyle = 'blue';
ctx.fillRect(100, 100, 100, 100);
ctx.fillStyle = 'red';
ctx.fillRect(400, 100, 100, 100);
ctx.fillStyle = 'green';
ctx.fillRect(300, 100, 100, 100);

//line

ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(300, 100);
ctx.lineTo(400, 300);
ctx.strokeStyle = 'purple';
ctx.stroke();

//Arc / circle
ctx.beginPath();
ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
ctx.strokeStyle = 'brown';
ctx.stroke();

for (var i = 0; i < 3; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, Math.PI * 2, false);
  ctx.strokeStyle = 'orange';
  ctx.stroke();
}
