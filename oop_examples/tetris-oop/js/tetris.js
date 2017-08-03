function Tetris(canvas, fps=40) {
  this.canvas = canvas;
  this.fps = fps;
  this.height = canvas.height;
  this.width = canvas.width;
  this.context = canvas.getContext('2d');
  this.intervalId = undefined;

  this.squareSize = Math.floor(this.height / 20)-.05;
  this.squaresX = 10;
  this.squaresY = 20;

  this.nextTetromino = this.createRandomTetromino();

  this.fallingTetromino = null;
  this.fallingSpeed = this.fps;
  this.frameCount = 0;

  this.addKeyBindings();


  this.grid = new Grid(this.context, this.squareSize, this.squaresX, this.squaresY);
}


Tetris.prototype.addKeyBindings = function() {
  var keys = {up: 38, left: 37, right: 39, down: 40, space: 32}
  document.addEventListener("keydown", function(event) {
    if (this.fallingTetromino !== null) {
      var moved = false
      if (event.which === keys.left) {
        this.fallingTetromino.move("l");
        moved = true;
      } else if (event.which === keys.right) {
        this.fallingTetromino.move("r");
        moved = true;
      } else if (event.which === keys.down) {
        this.fallingTetromino.move("d");
        moved = true;
      } else if (event.which === keys.up) {
        this.fallingTetromino.rotate();
        moved = true;
      }

      if (moved) {
        this.checkCollisions();
      }
    }
  }.bind(this));
}

Tetris.prototype.play = function() {
  if (this.fallingTetromino === null) {
    this.newFallingTetromino();
  }
  this.intervalId = setInterval(this.update.bind(this), 1000 / this.fps);
};

Tetris.prototype.createRandomTetromino = function() {
  var shape = Tetromino.createRandomShape();
  return new Tetromino(this.context,
                       shape,
                       this.squareSize,
                       this.squaresX,
                       this.squaresY);
}

Tetris.prototype.pause = function() {
  clearInterval(this.intervalId);
  this.intervalId = undefined;
};

Tetris.prototype.clear = function() {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Tetris.prototype.update = function() {
  this.clear();
  this.draw();
};

Tetris.prototype.draw = function() {
  this.frameCount++;
  this.updateFall();
  this.grid.draw();
  this.fallingTetromino.draw();
};

Tetris.prototype.updateFall = function() {
  if (this.frameCount % this.fps === 0 && this.fallingTetromino) {
    this.fallingTetromino.move('d');
    this.checkCollisions();
  }
}

Tetris.prototype.checkCollisions = function() {
  if (this.grid.checkCollisions(this.fallingTetromino)) {
    this.grid.addToGrid(this.fallingTetromino);
    this.newFallingTetromino();
  }
}

Tetris.prototype.newFallingTetromino = function() {
  this.fallingTetromino = this.nextTetromino;
  this.nextTetromino = this.createRandomTetromino();
}