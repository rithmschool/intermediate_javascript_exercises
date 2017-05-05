document.addEventListener("DOMContentLoaded", function () {

    // select square DOM elements
    const board = document.getElementById('board');
    const squares = document.querySelectorAll('.square');
    // select button and message span DOM elements
    const button = document.getElementById('new-game');
    const message = document.getElementById('message');

    let newGame = new Game(); // start the game

    board.addEventListener('click', function (e) {
        if (newGame.on && newGame.newBoard[e.target.id] === 0) { // game's on and clicked sq isn't occupied
            if (newGame.xTurn) {
                newGame.newBoard[e.target.id] = 1; // change board state
                newGame.square.setSquare(e.target, newGame.x); // modify css
                newGame.winStates(newGame.newBoard, newGame.x); // check win conditions
                newGame.xTurn = !newGame.xTurn; // change player turn
            } else {
                newGame.newBoard[e.target.id] = 2;
                newGame.square.setSquare(e.target, newGame.o);
                newGame.winStates(newGame.newBoard, newGame.o);
                newGame.xTurn = !newGame.xTurn;
            }
        }
    });

    button.addEventListener('click', function (e) {
        newGame = new Game(); // reassign newGame
    });

    // player
    function Player(XorO) {
        this.XorO = XorO;
    }

    // square css
    function Square() {
        squares.forEach(function (el) {
            el.innerText = "";
        });
    }

    Square.prototype.setSquare = function (clickedSq, player) {
        clickedSq.innerText = (player === newGame.x ? "X" : "O");
    }

    // board state (0s- cleared/open board, 1s- x, 2s- o)
    function Board() {
        return {
            square_0_0: 0,
            square_0_1: 0,
            square_0_2: 0,
            square_1_0: 0,
            square_1_1: 0,
            square_1_2: 0,
            square_2_0: 0,
            square_2_1: 0,
            square_2_2: 0
        };
    }

    // win/tie, turns
    function Game() {
        this.on = true;

        // create 2 players
        this.x = new Player('X');
        this.o = new Player('O');

        // x always starts
        this.xTurn = true;

        // create board and set squares
        this.newBoard = new Board();
        this.square = new Square();

        // clear prior message text
        message.innerText = "";
    }

    Game.prototype.winStates = function (boardState) {
        let testVal = (this.xTurn ? 1 : 2);
        let player = (this.xTurn ? 'X' : 'O');
        // if win state -> turn off board so no more clicks
        // across
        if (boardState.square_0_0 === testVal && boardState.square_0_1 === testVal && boardState.square_0_2 === testVal) {
            message.innerText = `${player} wins!`;
            this.on = false;
        }
        if (boardState.square_1_0 === testVal && boardState.square_1_1 === testVal && boardState.square_1_2 === testVal) {
            message.innerText = `${player} wins!`;
            this.on = false;
        }
        if (boardState.square_2_0 === testVal && boardState.square_2_1 === testVal && boardState.square_2_2 === testVal) {
            message.innerText = `${player} wins!`;
            this.on = false;
        }
        // down
        if (boardState.square_0_0 === testVal && boardState.square_1_0 === testVal && boardState.square_2_0 === testVal) {
            message.innerText = `${player} wins!`;
            this.on = false;
        }
        if (boardState.square_0_1 === testVal && boardState.square_1_1 === testVal && boardState.square_2_1 === testVal) {
            message.innerText = `${player} wins!`;
            this.on = false;
        }
        if (boardState.square_0_2 === testVal && boardState.square_1_2 === testVal && boardState.square_2_2 === testVal) {
            message.innerText = `${player} wins!`;
            this.on = false;
        }
        // diagonal
        if (boardState.square_0_0 === testVal && boardState.square_1_1 === testVal && boardState.square_2_2 === testVal) {
            message.innerText = `${player} wins!`
            this.on = false;;
        }
        if (boardState.square_0_2 === testVal && boardState.square_1_1 === testVal && boardState.square_2_0 === testVal) {
            message.innerText = `${player} wins!`;
            this.on = false;
        }
        // tie
        if (boardState.square_0_0 !== 0 && boardState.square_0_1 !== 0 && boardState.square_0_2 !== 0 && boardState.square_1_0 !== 0 && boardState.square_1_1 !== 0 && boardState.square_1_2 !== 0 && boardState.square_2_0 !== 0 && boardState.square_2_1 !== 0 && boardState.square_2_2 !== 0) {
            message.innerText = `tie!`;
            this.on = false;
        }
    }
});