document.addEventListener("DOMContentLoaded", function () {

    // select square DOM elements
    const board = document.getElementById('board');
    // select button
    const button = document.getElementById('new-game');

    let newGame = new Game(); // start the game

    board.addEventListener('click', function (e) {
        if (newGame.on && newGame.newBoard[e.target.id] === 0) { // game's on and clicked sq isn't occupied
            if (newGame.xTurn) {
                newGame.newBoard[e.target.id] = 1; // change board state
                newGame.square.setSquare(newGame, e.target, newGame.x); // modify css
                newGame.winStates(newGame.newBoard, newGame.x); // check win conditions
            } else {
                newGame.newBoard[e.target.id] = 2;
                newGame.square.setSquare(newGame, e.target, newGame.o);
                newGame.winStates(newGame.newBoard, newGame.o);
            }
            newGame.xTurn = !newGame.xTurn; // change player turn
        }
    });

    button.addEventListener('click', function (e) {
        newGame = new Game(); // reassign newGame
    });
});