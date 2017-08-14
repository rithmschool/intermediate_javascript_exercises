var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function(){
            return "This person's name is " + this.fullName
        }.bind(obj)
    }
}


function sumEvenArguments() {
  var args = [].slice.call(arguments);

  return args.reduce(function(acc, nextValue) {
    if( nextValue % 2 === 0 ) acc += nextValue;
    return acc;
  }, 0);

  // return args.filter(function(a) { return (a % 2) === 0; }).reduce(function(acc, nextValue) {
  // 	return acc + nextValue
  // }, 0);
}

function arrayFrom() {
  return [].slice.call(arguments);
}

function invokeMax(fn, num) {
  var count = num;
  return function innerFunction(){
      if (count <= 0) {
          return "Maxed Out!";
      }
      else {
          count--;
          return fn.apply(this, arguments);

      }
  }
}

function guessingGame(amount) {
  var answer = Math.floor(Math.random() * 11);
  var guesses = 0;
  return function innerFunction(guess) {
    if(guesses <= amount) {
        if(guesses === amount && guess !== answer) {
            guesses++;
            return "No more guesses the answer was " + answer;
        }
        if(guess === answer) {
            guesses = amount + 1;
            return "You got it!";
        }
        if (guess < answer) {
            guesses++;
            return "You're too low!";
        }
        if (guess > answer) {
            guesses++;
            return "You're too high!";
        }
    }
    else {
        return "You are all done playing!";
    }
  }
}