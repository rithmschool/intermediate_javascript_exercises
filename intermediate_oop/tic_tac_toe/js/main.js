document.addEventListener("DOMContentLoaded", function() {
  var g = new Game();

  function clearBoard() {
    document.querySelectorAll(".square").forEach(function(square) {
      square.innerHTML = "";
    });
    setMessage("");
  }

  function setMessage(message) {
    document.getElementById("message").innerHTML = message;
  }

  document.getElementById("new-game").addEventListener("click", function() {
    g.reset();
    clearBoard();
  });

  document.getElementById("board").addEventListener("click", function(event) {
    if (event.target.classList.contains("square")) {
      squareInfo = event.target.id.split("_");
      row = Number(squareInfo[1]);
      col = Number(squareInfo[2]);
      var val = g.makeMove(row, col)
      if (val !== undefined) {
        let stateValue = Square.stateToString(val);
        event.target.innerHTML = `<span class=${stateValue}>${stateValue}</span>`;
      }
      var state = g.winner();

      if (state === Board.X_WINS) {
        setMessage("X Wins!")
      } else if (state === Board.O_WINS) {
        setMessage("O Wins!");
      } else if (state === Board.TIE) {
        setMessage("Tie!");
      }
    }
  });
});
