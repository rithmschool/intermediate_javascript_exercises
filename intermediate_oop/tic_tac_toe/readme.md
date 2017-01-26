# Tic Tac Toe OOP Solution

To solve the problem, remember to go through a design process first.  Here is how the solution was designed:

### Tic Tac Toe OOP Design

First, what are components, processes, and data involved in tic tac toe?  Here is a brain dump of all of the things I can think of:

* Board
* Player
* X's, O's
* Squares
* Turns (Maybe?)
* Game
* Winner/Loser

Now let's organize these thoughts a little more using words like has, owns, uses:

* There is 1 board
* A board has squares
* Squares can be X, O or empty
* There is 1 game
* A game has 2 players
* A game should decide whose turn it is
* A game has a board
* The game decides who wins or loses based on the board
* A board view can be displayed using a board

### Tic Tac Toe OOP Code

Now that we have high level design requirements, let's think of what classes we will need:

* game.js - A game of tic tac toe
* board.js - A tic tac toe game board
* player.js - A single player
* square.js - A square in the tic tac toe game board


Additionally, we'll need a `main.js` to create an instance of the game and interact with the html on the page.

#### game.js

Creates an instance of a board, two players and keeps track of whose turn it is.  The game will be responsible for making a move on the board and making sure that the move is valid.  Also, it will be able to identify when someone has won.

#### board.js

Creates a 2 dimensional array of new square objects (details about square.js below).  The board is a state machine, which means that it keeps tracks of different game states.

The possible states of the board are:

* PLAYING
* X_WINS
* O_WINS
* TIE

The board can tell you if a square is empty and can also check if someone has won or tied the game.

#### player.js

A player keeps track of the type of player (X or O) and the name of the player (if you want to display that).

#### square.js

A square can have 3 states: empty, X, or O.

