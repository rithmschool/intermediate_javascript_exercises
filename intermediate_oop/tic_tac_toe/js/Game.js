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

    const message = document.getElementById('message');
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
        this.on = false;
    }
    if (boardState.square_0_2 === testVal && boardState.square_1_1 === testVal && boardState.square_2_0 === testVal) {
        message.innerText = `${player} wins!`;
        this.on = false;
    }

    // tie
    if (message.innerText === "" && boardState.square_0_0 !== 0 && boardState.square_0_1 !== 0 && boardState.square_0_2 !== 0 && boardState.square_1_0 !== 0 && boardState.square_1_1 !== 0 && boardState.square_1_2 !== 0 && boardState.square_2_0 !== 0 && boardState.square_2_1 !== 0 && boardState.square_2_2 !== 0) {
        message.innerText = `tie!`;
        this.on = false;
    }
}