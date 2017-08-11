document.addEventListener("DOMContentLoaded", function() {
  var game = new Game();
  game.newGame();
  
  document.getElementById('new-game').addEventListener('click', function(){
    game.newGame();
  });
});
