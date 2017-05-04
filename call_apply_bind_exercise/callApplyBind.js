/*Fix the following code: 
	var obj = {
		fullName: "Harry Potter",
		person: {
			sayHi: function(){
				return "This person's name is " + this.fullName
			}
		}
	}
*/

var obj = {
	fullName: "Harry Potter",
	sayHi: function(){
		return "This person's name is " + this.fullName
	}
}

//console.log(obj.sayHi());

/*List two examples of 'array-like objects':
	arguments (keyword w/in functions)
	document.getElementsByClassName() -- many DOM methods return 
		array-like objects
	
*/

/*Write a function called sumEvenArguments which takes all of the arguments 
passed to a function and returns the sum of the even ones.*/

function sumEvenArguments(...args){
	return args.reduce(function(acc, el){
		if (el % 2 === 0) acc += el
		return acc;
	}, 0);
}

sumEvenArguments(1,2,3,4) // 6
sumEvenArguments(1,2,6) // 8
sumEvenArguments(1,2) // 2

/*Write a function called arrayFrom which converts an array-like-object 
into an array.
function sample(){
	var arr = arrayFrom(arguments)
	if(!arr.reduce) throw "This is not an array!"
	return arr.reduce(function(acc,next){
		return acc+next;
	},0)
}*/

function arrayFrom(arrLike){
	return [].slice.call(arrLike);
}

/*Write a function called invokeMax which accepts a function and a 
maximum amount. invokeMax should return a function that when called 
increments a counter. If the counter is greater than the maximum amount, 
the inner function should return "Maxed Out"*/

function invokeMax(fn, max){
  var counter = 0;
  return function(){
	  var innerArgs = [].slice.call(arguments);
	  if (counter < max) {
		counter++
		return fn.apply(this, innerArgs)
	  }
	  else {
		return "Maxed Out!"
	  }
  }
}

/*Write a function called guessingGame which takes in one parameter amount. 
The function should return another function that takes in a parameter called 
guess. In the outer function, you should create a variable called answer which
 is the result of a random number between 0 and 10 as well as a variable called 
 guesses which should be set to 0.

In the inner function, if the guess passed in is the same as the random number 
(defined in the outer function) - you should return the string "You got it!". 
If the guess is too high return "You're too high!" and if it is too low, return
 "You're too low!". You should stop the user from guessing if the amount of guesses 
 they have made is greater than the initial amount passed to the outer function.
*/

function guessingGame(amount){
	var answer = Math.floor(Math.random() * 10);
	console.log(answer);
	var guesses = 1;
	return function(guess){
		if (guesses === amount){
			guesses++;
			return "No more guesses the answer was " + answer;
		}
		else if (guesses > amount){
			return "You are all done playing!";
		}
		else {
			if (guess === answer){
				guesses = amount + 1;
				return "You got it!"
			}
			else if (guess > answer){
				guesses++
				return "You're too high!"
			}
			else {
				guesses++  
				return "You're too low!"
			}
		}
	}
}