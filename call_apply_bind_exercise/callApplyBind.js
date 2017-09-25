function sumEvenArguments() {
  return [].slice.apply(arguments).reduce(function(acc, curr) {
    if (curr % 2 === 0) {
      acc += curr;
    }
    return acc;
  }, 0);
}

function arrayFrom(argument) {
  return [].slice.apply(arguments);
}

function invokeMax(fn, max) {
  var count = 0;
  return function() {
    count++;
    if (count > max) {
      return 'Maxed Out!';
    } else {
      return fn.apply(null, arguments);
    }
  };
}

function guessingGame(amount) {
  let answer = randomNumberUpTo10();
  return guess => {
    if (amount === 0) {
      return 'You are all done playing';
    } else {
      if (guess === answer) {
        return 'You got it!';
      } else if (guess > answer) {
        amount--;
        return "You're too high!";
      } else if (guess < answer) {
        amount--;
        return "You're too low!";
      }
    }
  };
}

function randomNumberUpTo10() {
  return Math.floor(Math.random() * 10);
}
