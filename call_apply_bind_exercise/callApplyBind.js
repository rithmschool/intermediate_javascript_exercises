function sumEvenArguments() {
  return [...arguments].reduce(function(acc, val) {
    return (val % 2 == 0) ? acc + val : acc;
  }, 0);
}

function arrayFrom() {
  return [...arguments];
}

function invokeMax(fn, maxAmt) {
  var count = 0;
  return function() {
    if (++count > maxAmt) return "Maxed Out!";
    return fn.apply(this, [].slice.call(arguments));
  }
}

// OR
function invokeMax(fn, maxAmt) {
  var count = 0;
  return function() {
    if (++count > maxAmt) return "Maxed Out!";
    return fn(...arguments);
  }
}

function guessingGame(amount) {
  var answer = Math.floor(Math.random() * 10);
  var guesses = 0;
  return function(guess) {
    if (guess === answer) {
      guesses = amount + 1; // bump guesses up to trigger guess check below
      return "You got it!";
    }
    if (++guesses === amount) return "No more guesses the answer was " + answer;
    if (guesses > amount) return "You are all done playing!";
    if (guess > answer) return "You're too high!";
    if (guess < answer) return "You're too low!" ;
  }
}