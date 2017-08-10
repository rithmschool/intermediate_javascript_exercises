window.addEventListener("load", function() {
  var canvas = document.getElementById("gameboard");

  var tetris = new Tetris(canvas);

  tetris.play(); 
});