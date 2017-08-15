"use strict"

function sumEvenArguments(){
	var arr =  [].slice.call(arguments);
	return arr.reduce( 
	   function(t, v){ 
	       if(v % 2 === 0) { return t+v; } 
	       else { return t;}
	   },0);
}

function arrayFrom(obj){
	return [].slice.call(obj);
	//return Array.prototype.slice.call(obj);
	/*
	var arr = [];
	
	for(let i = 0; i < obj.length; i++){
		arr.push(obj[i]);
	}

	return arr;
	*/
}

function invokeMax(fn, max){
	var count = 0;

	return function(){
		if(++count > max) return `Maxed Out!`;
		var arr = [].slice.call(arguments);

		return fn.apply(this, arr);
	};

}

function guessingGame(amount){
	var count  = 0;
	var answer = Math.floor(Math.random() * 11);

	return function(guess){
		if(count++ === amount) { return `No more guesses the answer was ${answer}`; }
		else if(count > amount) { return `You are all done playing!`; }
		else if(answer > guess){ return "You're too low!"; }
		else if(answer < guess){ return "You're too high!"; }
		else if(answer === guess){ return "You got it!"; }
	}

}
