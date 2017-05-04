function sumEvenArguments() {
    return [].slice.call(arguments).reduce(function(acc,next) {
        if (next % 2 === 0) return acc+next;
        return acc;
    },0)
}


function sample(){
    var arr = arrayFrom(arguments)
    if(!arr.reduce) throw "This is not an array!"
    return arr.reduce(function(acc,next){
        return acc+next;
    },0)
}

function arrayFrom(ALO) {
	return [].slice.call(arguments);
}


function invokeMax(fn, max) {
	// return a function that when called increments a counter
	// if counter > max, inner function returns "Maxed Out"
	var counter = 0;
	var max;

	return function inner(){
		counter++
		if (counter > max) return "Maxed Out!"
		return fn.apply(this,arguments);
    }
}

function guessingGame(max) {
	// takes in amount ("max")
	// returns another function that takes in a parameter called guess
	var answer = Math.floor(Math.random()*11);
	var guesses = 0;

	return function game(guess) {
		guesses++;
		if (guesses > max) {
			return "You are all done playing!"
		}
		if (guesses === max) {
			return `No more guesses. The answer was ${answer}.`
		}
		if (guess === answer) {
		    guesses = max + 1;
			return "You got it!";
		}
		if (guess < answer) {
			return "You're too low!";
		}
		if (guess > answer) {
			return "You're too high!";
		}
	}
}






