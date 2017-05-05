//Call Apply Bind Exercise

var obj = {
	fullName : "Harry Potter",
	sayHi: function() {
		return `This person's name is ${this.fullName}`;
	}
}

/* 
Two examples of array-like-objects:
-arguments keyword when a function is invoked.
- jQuery or DOM objects returned.
*/

function sumEvenArguments(){
	var counter = 0;
	[].forEach.call(arguments, function(value) {
		if (Number.isInteger(value) && value % 2 === 0) {
			counter+=value;
		}
	})
	return counter;
}

function arrayFrom(arg) {
	return [].slice.call(arg);
}

function invokeMax(fn, num){
	let counter = num;
	return function(){
		if (counter === 0) {
			return "Maxed Out!";
		} else {
			counter--;
			return fn.apply(this,arguments);
		}
	}
}

function guessingGame(amount){
	let counter = amount;
	let answer = Math.floor(Math.random()*10);
	return function(guess) {
		if (counter === 0) {
			return "You are all done playing"
		} else {
			if (guess === answer) {
				return "You got it!";
			} else if (guess > answer) {
				counter--;
				return "You're too high!";
			} else if (guess < answer) {
				counter--;
				return "You're too low!"
			}
		}
	}
}