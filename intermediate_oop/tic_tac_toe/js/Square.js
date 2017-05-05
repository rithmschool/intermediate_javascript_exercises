function Square() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(function (el) {
        el.innerText = "";
    });
}

Square.prototype.setSquare = function (game, clickedSq, player) {
    clickedSq.innerText = (player === game.x ? "X" : "O");
}
