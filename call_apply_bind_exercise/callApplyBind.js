// FIXED CODE
// The this was referring to the object `person`, which did not have a variable of fullName


// var obj = {
//     fullName: "Harry Potter",
//     sayHi() {
//         return "This person's name is " + this.fullName
//     }
// }


// Two Array Like Objects we have seen - the `arguments` variable in a function and HTML nodes 
// returned when getting elements through the DOM



function sumEvenArguments() {
    return Array.from(arguments).filter(val => val % 2 === 0).reduce((prev, next) => prev + next)
}

// with call

function sumEvenArguments() {
    return [].slice.call(arguments).filter(val => val % 2 === 0).reduce((prev, next) => prev + next)
}

function arrayFrom(alo) {
    return [].slice.call(alo)
}

function invokeMax(fn, max) {
    var counter = 0;
    return function() {
        if (counter < max) {
            counter++;
            return fn(...arguments);
        } else {
            return "Maxed Out!"
        }
    }

}


function guessingGame(amount) {
    var answer = Math.floor(Math.random() * 10);
    var guesses = 0;
    return function(guess) {
        if (guesses >= amount) {
            return "You are all done playing!"
        } else {
            if (guess === answer) {
                return "You got it!"
            }
            if (guess > answer) {
                guesses++;
                return "You're too high!";
            } else {
                guesses++;
                return "You're too low!";
            }
        }
    }

}
