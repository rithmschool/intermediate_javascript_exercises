function sumEvenArguments() {
  var arr = [].slice.call(arguments);
  var sum = 0;
  for(var i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

function arrayFrom() {
  var arr = [].slice.call(arguments);
  return arr;
}

function invokeMax(fn, max) {
  var counter = 0;
  return function() {
    var innerArgs = [].slice.call(arguments);
    if (counter >= max) {
      return "Maxed Out!";
    } else {
      counter++;
      return fn.apply(this, arguments);
    }
  }
}
///yeah still need clarification on how this works ^

function guessingGame(amount) {
  var answer = Math.floor(Math.random() * 10);
  var guesses = 0;
  return function(guess) {
    guesses++;
    if (guesses > amount) {
      return "You are all done playing!";
    } else if (answer < guess) {
      return "You're too high!";
    } else if (answer > guess) {
      return "You're too low!";
    } else if (answer === guess) {
      return "You got it!";
    }
  }
}
