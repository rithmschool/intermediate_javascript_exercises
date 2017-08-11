document.addEventListener("DOMContentLoaded", function() {
	//Imediate Calls
	var game = new Game();

	//set up web clicks
	$('#new-game').click(function(){
		game.reset();
	})
	

	//Functions
	function Game(){
		this.player = 'X';
		this.message = new Message();
		this.board = new Board(this);
		this.gameOn = true;
	}
	Game.prototype.reset = function(){
		this.player = 'X';
		this.board.clear();
		this.message.clear();
		this.board.changePlayer(this.player);
		this.gameOn = true;
	}
	Game.prototype.play = function(row, col){
		//check for leagal move
		if(this.gameOn && this.board.isEmpty(row,col)){
			//mark play
			this.board.play(row,col,this.player);
			//check for win or tie
			if(this.winLooseOrDraw()){
				this.gameOn = false;
				this.message.set(this.winLooseOrDraw());
			}
			//change players
			this.player = (this.player === 'X'? 'O':'X');
			this.board.changePlayer(this.player);
			//this.board.
		}
	}
	Game.prototype.winLooseOrDraw = function(){
		let ties = 0;
		for(let row = 0; row < 3; row++){
			let count = {X:0, O:0, "":0};
			for(let col = 0; col < 3; col++){
				count[this.board.get(row, col)]++;
			}
			if(count['X']>0 && count['O']>0) ties++;
			else if(count['X'] === 3) return 'X Wins!';
			else if(count['O'] === 3) return 'O Wins!';
			//console.log(count,ties);
		}
		for(let col = 0; col < 3; col++){
			let count = {X:0, O:0, "":0};
			for(let row = 0; row < 3; row++){
				count[this.board.get(row, col)]++;
			}
			if(count['X']>0 && count['O']>0) ties++;
			else if(count['X'] === 3) return 'X Wins!';
			else if(count['O'] === 3) return 'O Wins!';
			//console.log(count,ties);
		}
		let count = {X:0, O:0, "":0};
		for(let row = 0, col=0; row < 3; row++, col++){
			count[this.board.get(row, col)]++;
		}
		if(count['X']>0 && count['O']>0) ties++;
		else if(count['X'] === 3) return 'X Wins!';
		else if(count['O'] === 3) return 'O Wins!';
		count = {X:0, O:0, "":0};
		for(let row = 2, col=0; row >= 0; row--, col++){
			count[this.board.get(row, col)]++;
		}
		if(count['X']>0 && count['O']>0) ties++;
		else if(count['X'] === 3) return 'X Wins!';
		else if(count['O'] === 3) return 'O Wins!';

		if(ties === 8) return 'Tie Game';
		else return false;
	}

	function Board(game){
		this.game = game;
		this.$board = $('#board');
				this.squares = [];

		for(let r = 0; r < 3; r++){
			let row = [];
			for(let col = 0; col < 3; col++){
				row.push(new Squares($(`#square_${r}_${col}`)));
			}
			this.squares.push(row);
		}

		this.$board.on('click', '.square', function(e){
			var [row, col] = e.target.id.split('_').slice(1);
			this.game.play(row,col);
		}.bind(this));

	}
	Board.prototype.clear = function(){
		$('.square').text('').removeClass('X O');
	}
	Board.prototype.get = function(row, col){
		return this.squares[row][col].get();
	}
	Board.prototype.isEmpty = function(row, col){
		return this.squares[row][col].isEmpty();
	}
	Board.prototype.play = function(row, col, player){
		this.squares[row][col].set(player);
	}
	Board.prototype.changePlayer = function(player){
		this.$board.removeClass('X O');
		this.$board.addClass(player);
	}

	function Squares($jObj){
		this.$jObj = $jObj;
	}
	Squares.prototype.isEmpty = function(){
		return this.$jObj.text() === '';
	}
	Squares.prototype.set = function(val){
		this.$jObj.text(val);
		this.$jObj.addClass(val);
	}
	Squares.prototype.get = function(){
		return this.$jObj.text();
	}

	function Message(){
		this.$message = $('#message');
	}
	Message.prototype.set = function(msg){
		this.$message.text(msg);
	}
	Message.prototype.clear = function(msg){
		this.$message.text('');
	}

});