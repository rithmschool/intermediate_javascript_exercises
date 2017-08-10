var obj = {
    fullName: "Harry Potter",
    sayHi(){
            return `This person's name is ${this.fullName}`;
    }
}

//array like objects
//arrays from DOM methods
//arguments

function sumEvenArguments(){
    var args = [].slice.call(arguments);
    return args.reduce(function (all, item){
        if (item % 2 === 0) return all + item;
        return all;
      },0);
}

function arrayFrom() {
  var args = [].slice.call(arguments);
  return args;
}

function invokeMax(fn, max) {
    var count = 0;
    return function(){
        var arg = [].slice.call(arguments);
        count++;
        if (count > max) return `Maxed Out!`;

        return fn.apply(this, arg);
    }
}

function guessingGame(amount) {
  var answer = Math.floor(Math.random() * 10);
  var guesses = 0;
  return function(guess) {
    guesses++;
    if (guesses > amount) return `No more guesses the answer was ${answer}`;
    if (guess === answer) return "You got it!";
    if (guess < answer) return "You're too low!";
    if (guess > answer) return "You're too high!"
  }
}
