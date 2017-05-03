var obj = {
    fullName: "Harry Potter",
    sayHi: function(){
            return "This person's name is " + this.fullName
    }
}




/// Other array like objects: arguments, DOM.

function sumEvenArguments(...args){
	return args.reduce(function(acc,cur){
		if (cur%2 === 0 ) acc += cur;
		return acc;
	},0)
}


function arrayFrom(input){
	return [].concat.call(arguments);

}

function invokeMax(fn, times){
	let counter = 0;
	return function(){
		if (counter < times){
			var innerArgs = [].slice.call(arguments);
			counter++;
			return fn.apply(this, innerArgs);
		} else {
			return "Maxed Out!";
		}
	}
}

function guessingGame(maxGuesses){

	if (maxGuesses < 0 || maxGuesses > 10){ return "invalid number of guesses"};

	let answer = Math.floor(Math.random()*10);

	let guessCounter = 1;

	return function(guess){
		if (guessCounter < maxGuesses){
			guessCounter++;
			return `No more guesses the answer was ${answer}`;
		}
		if (guessCounter >= maxGuesses){
			guessCounter++; // don't really have to do this
			return "You are all done playing!";
		}
		guessCounter ++
		if (guess === answer) return "You got it!";
		if (guess > answer) return "You're too high!";
		if (guess < answer) return "You're too low!";
	}
}