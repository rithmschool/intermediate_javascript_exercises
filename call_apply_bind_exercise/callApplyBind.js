function sumEvenArguments(...nums) {
  var sum = 0;
  nums.forEach(function(num) {
    if (num % 2 === 0) {
      sum += num;
    }
  });
  return sum;
}

function arrayFrom(...someInput) {
  return someInput;
}

function invokeMax(fn, max) {
  var counter = 0;
  return function(...innerArgs) { //i am returning function add(a,b)
    counter++;
      if (counter > max) {
          return "Maxed Out!"
      } else {
          return fn.apply(max, innerArgs);
      }
  }
}

function guessingGame(amount) {
  var answer = Math.floor(Math.random()*10);
  var guesses = 0;
  return function(guess) {
    guesses++;
    if (guesses < amount) {
      if (guess === answer) {
        return "You got it!";
      } else if (guess > answer) {
        return "You're too high";
      } else {
        return "You're too low"
      }
    }
    return "You are all done playing!";
  }
}

var game = guessingGame(5);
game(4);
game(3);
game(5);
game(2);
game(1);
game(5);
