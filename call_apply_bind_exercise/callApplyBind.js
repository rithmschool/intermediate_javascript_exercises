// fix this code
var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function(){
            return "This person's name is " + this.fullName;
        }
    }
};

// - List two examples of "array-like-objects" that we have seen.
    // -arguments 
    // -query all --> searching for elements on the html DOM, returns a bunch of elements in a list

//     Write a function called `sumEvenArguments` which takes all of the arguments passed to a function and returns the sum of the even ones.

function sumArguments() {
	var argsArray = Array.prototype.slice.call(arguments);
	//then use filter to select only the even numbers 

	var evens = argsArray.filter(function(val){
		return val % 2 ===0;
	});

	//loop through new array and add each one 
	var sum= 0;
	for(i=0; i< evens.length; i++) {
		sum = sum + evens[i];
	}
	return sum;
}

// ```javascript
//sumEvenArguments(1,2,3,4) // 6
// sumEvenArguments(1,2,6) // 8
// sumEvenArguments(1,2) // 2
// ```

// - Write a function called `arrayFrom` which converts an array-like-object into an array. 

function arrayFrom(arrLike){
	//what is an array like object? = An Arguments array 
	return [].slice.apply(arrLike);
	

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

// Write a function called `invokeMax` which accepts a function and a maximum amount. 
//`invokeMax` should return a function that when called increments a counter. 
//If the counter is greater than the maximum amount, the inner function should return "Maxed Out"

function invokeMax(cb, max) {
//	var count = function(){
	var count = 0;
	return function () {
		if (max > count) { 
			count++ 
			return cb();
		} else {
			return "Maxed Out!"
		}
	}

}

function puppies() {
	return ["Whiskey", "Deli Sandwhich"];
}


function hi() {
	return "hi";
}
var puppiesOnlyTwice = invokeMax(puppies, 2)
puppiesOnlyTwice();


var hiThreeTimes = invokeMax(hi, 3);

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

//(1) Write a function called `guessingGame` which takes in one parameter `amount`. 
///confused about hwere to add closure--> what does amount itself stand for? 

function guessingGame(amount) {
	var answer = Math.floor(Math.random() * 10);
 
	var guesses = 0;
	return function (num) {
		if (amount > guesses) {
			guesses++;
			return  guess(num);
		} else { 
			return "No more guesses!";
		}
	};
	//(2)The function should return another function that takes in a parameter called `guess`. 
    //(3) In the outer function, you should create a variable called `answer` which is the 
    //result of a random number between 0 and 10 as well as a variable called `guesses` which should be set to 0. 
	function guess(num) { 
		if (num === answer) {
			return "You got it!";
		} else if (num > answer) {
			return "You're too high!";
		} else {
			return "You're too low!";
		}
	}
}



// In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - 
//you should return the string "You got it!". If the guess is too high return "You're too high!" and if it is too low, return "You're too low!". 
//You should stop the user from guessing if the amount of guesses they have made is greater than the initial `amount` passed to the outer function. 

// You will have to make use of closure to solve this problem.


// ```javascript
// var game = guessingGame(5)
// game(1) // "You're too low!" 
// game(8) // "You're too high!"
// game(5) // "You're too low!"
// game(7) // "You got it!" 
// game(1) // "You are all done playing!" 

// var game2 = guessingGame(3)
// game2(5) // "You're too low!" 
// game2(3) // "You're too low!"
// game2(1) // "No more guesses the answer was 0" 
// game2(1) // "You are all done playing!" 
// ```
