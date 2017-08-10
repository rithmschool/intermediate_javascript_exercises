function sumEvenArguments() {
  var arr = [].slice.call(arguments);
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

function arrayFrom(arrLikeObj) {
  var arr = [].slice.call(arrLikeObj);
  return arr;
}

function invokeMax(fn, maxTimes) {
  var counter = 0;
  return function() {
    if (counter >= maxTimes) {
      return "Maxed Out!";
    } else {
      counter++;
      return fn.apply(this, arguments);
    }
  }
}

function guessingGame(num) {
  var answer = Math.floor(Math.random()*10);
  var guesses = 0;
  return function(guess) {
    if (guesses === num) {
      return `No more guesses. The answer was ${answer}.`;
    }
    else {
      guess++;
      if (guess === answer) {
        return "You got it!";
      }
      else if (guess > answer) {
        return "You're too high!";
      }
      else if (guess < answer) {
        return "You're too low!";
      }
    }
  }
}






