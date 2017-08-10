// - Write a function called `sumEvenArguments` which takes all of the arguments passed to a function and returns the sum of the even ones.
function sumEvenArguments() {
  var args = [].slice.call(arguments);
  console.log(args);
  var sum = 0;
  for (var i = 0; i < args.length; i++) {
    if (args[i] % 2 === 0) sum += args[i];
  }
  return sum;
}

// ```javascript
console.log(sumEvenArguments(1,2,3,4)); // 6
console.log(sumEvenArguments(1,2,6)); // 8
console.log(sumEvenArguments(1,2)); // 2
// ```


// - Write a function called `arrayFrom` which converts an array-like-object into an array. 

function arrayFrom() {
  return [].slice.apply(arguments);
}


// ```javascript
// function sample(){
//     var arr = arrayFrom(arguments)
//     if(!arr.reduce) throw "This is not an array!"
//     return arr.reduce(function(acc,next){
//         return acc+next;
//     },0)
// }
// ```

// Write a function called `invokeMax` which accepts a function and a maximum amount. `invokeMax` should return a 
//  function that when called increments a counter. If the counter is greater than the maximum amount, the inner
//  function should return "Maxed Out"

function invokeMax(fn, maximum) {
  var counter = 0;

  return function () {
    
    if (++counter > maximum)
      return "Maxed Out!";

    return fn.apply(this, arguments);
  }
}

function sayHi(count) {
  console.log("Hi! Count: " + count);
}


// ```javascript
// function add(a,b){
//     return a+b
// }

// var addOnlyThreeTimes = invokeMax(add,3);
// addOnlyThreeTimes(1,2) // 3
// addOnlyThreeTimes(2,2) // 4
// addOnlyThreeTimes(1,2) // 3
// addOnlyThreeTimes(1,2) // "Maxed Out!"
// ```


function guessingGame(amount) {
  var answer = Math.floor(Math.random() * 11);
  var guesses = 0;
  var alreadyWon = false;
  
  return function(guess) {
    if (alreadyWon) return "Dude you already won! Restart this beast."
    if (guesses >= amount) return "Sorry buddy, you have exceeded your guesses!";
    guesses++;
    if (guess === answer) {
      alreadyWon = true;
      return  "You got it! Guesses: " + guesses;;
    }
    else if (guess < answer) {
      return "You're too low! Guesses Remaining: " + (amount - guesses);
    } else {
      return "You're too high! Guesses Remaining: " + (amount - guesses);
    }
  }
}

var game = guessingGame(5);
console.log(game(1));
console.log(game(2));
console.log(game(7));
console.log(game(8));
console.log(game(9));
console.log(game(4));










