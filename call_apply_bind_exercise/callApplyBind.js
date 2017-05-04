function IntroducePerson(fullName) {
	this.fullName = fullName;
	this.sayHi = function() {
		return `This person's name is ${this.fullName}`
	}
}

var obj = new  IntroducePerson('Harry Potter')


// Answer: arguments and sets


function sumEvenArguments(...args) {
	var sum = 0;
	for (var i = 0; i < args.length; i++) {
		if (args[i] % 2 === 0) {
			sum += args[i]
		}
	}
	return sum;
}


function arrayFrom(arrLikeObj) {
	return [].slice.call(arrLikeObj)
}



function add(a,b){
    return a+b
}

function invokeMax(fn, max) {
	var counter = 0;
	console.log("updated");
	return function() {
		if (counter < max) {
			counter += 1;
			return fn(...arguments);
// 			return fn.apply(this, arguments);
		}
		return "Maxed Out!"
	}

}


function guessingGame(amount) {
	var guessCount = 0;
	var answer = Math.round(Math.random() * 10);

	return function(guess) {
		if (guessCount < amount) {
			guessCount += 1;
			if (guess === answer) {
				return "You got it!"
			} else if (guess > answer) {
				return "You're too high!"
			} else {
				return "You're too low!"
			}
		} else if (guessCount === amount) {
			guessCount += 1;
			return `No more guesses the answer was ${answer}`
		} else {
			return 'You are all done playing!'
		}

	}
}

