///////////////////////////////////////////////////////////
// 1: fix the following code
///////////////////////////////////////////////////////////

var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function(){
            return "This person's name is " + obj.fullName;
        }
    }
}

// call the function: 

obj.person.sayHi();

///////////////////////////////////////////////////////////
// 2: examples of "array-like objects"
///////////////////////////////////////////////////////////

// 1 - arguments - a keyword created for each function; arguments.length works but no other array functions can be called on arguments because it's not an actual array

// 2 - ???

///////////////////////////////////////////////////////////
// 3. sumEvenArguments
///////////////////////////////////////////////////////////

function sumEvenArguments(...args) {
	var sum = 0;
	for (let val of args) {
		if (val % 2 === 0) {
			sum += val;
		}
	}
	return sum
}


///////////////////////////////////////////////////////////
// 4. arrayFrom
///////////////////////////////////////////////////////////


function arrayFrom(arrLikeObj) {
	return [].concat.apply(this, arrLikeObj);
}


///////////////////////////////////////////////////////////
// 5. invokeMax
///////////////////////////////////////////////////////////

function invokeMax(fn, max, ...args) {
	var counter = 0;
	return function(...args) {
		while (counter < max) {
			counter++;
			return fn.apply(this, args);
		}
		return "Maxed Out!";
	}
}


///////////////////////////////////////////////////////////
// 6. guessingGame
///////////////////////////////////////////////////////////

function guessingGame (amount) {
	var answer = (Math.floor(Math.random() * 11));
	var guesses = 0;
	return function(guess) {
		guesses++;
		if (guesses > amount) {
			return "You are all done playing!";
		} else {
			if (guess === answer) {
				return "You got it!";
			} else if (guess > answer) {
				return "You're too high!";
			} else if (guess < answer) {
				return "You're too low!";
			}
		}
	}
} 





