// fix following code:
var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function () {
            return `This person's name is ${obj.fullName}`
        }
    }
}
console.log(obj.person.sayHi());

// two examples of "array-like-objects" that we have seen:
// arguments and node-lists

function sumEvenArguments() {
    let arr = [].slice.call(arguments);
    let sum = 0;
    arr.forEach(function (el) {
        if (el % 2 === 0) {
            sum += el;
        }
    });
    return sum;
}

function arrayFrom() {
    return [].slice.call(arguments);
}

function invokeMax(fn, maxAmt) {
    let counter = 0;
    return function () {
        if (counter < maxAmt) {
            counter++;
            return fn.apply(this, arguments);
            // return fn(...arguments);
        } else {
            return "Maxed Out!";
        }
    }
}

function guessingGame(amount) {
    let answer = Math.floor(Math.random() * 10);
    let guesses = 0;
    return function (guess) {
        ++guesses;
        if (guesses > amount) {
            return `You are all done playing!`;
        } else if (guesses === amount && guess !== answer) {
            return `No more guesses the answer was ${answer}`;
        }
        if (guess === answer) {
            return `You got it!`;
        } else if (guess > answer) {
            return `You're too high!`;
        } else {
            return `You're too low!`;
        }
    }
}