/* jshint esversion: 6 */

var obj = {
  fullName: "Harry Potter",
  sayHi() {
    return "This person's name is " + this.fullName;
  }
};

/*
array-like objects:
1. arguments,
2. DOM node-list
*/

function sumEvenArguments() {
  var args = [].slice.call(arguments);
  var sum = 0;

  for (var i = 0; i < args.length; i++) {
    if (args[i] % 2 === 0) sum += args[i];
  }

  return sum;
}

function arrayFrom(arrayLikeObj) {
  var array = [];

  for (var i = 0; i < arrayLikeObj.length; i++) {
    array.push(arrayLikeObj[i]);
  }

  return array;
}

function invokeMax(cb, max) {
  var counter = 0;
  return function() {
    var args = [].slice.call(arguments);

    counter ++;

    if (counter > max) return "Maxed Out!";
    else return args[0] + args[1];
  };
}

function guessingGame(amount) {
  var answer = Math.floor(Math.random() * 10);
  var guesses = 0;

  return function() {
    guesses++;
    var args = [].slice.call(arguments);
    var guess = args[0];

    if (guesses <= amount) {
      if (guess === answer) return 'You got it!';
      if (guess > answer) return "You're too high!";
      if (guess < answer) return "You're too low!";
    } else return 'You are all done playing!';
  };
}





// end
