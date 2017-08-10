// Fix the following code:

var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function(){
            return "This person's name is " + this.fullName
        }
    }
}
obj.person.sayHi.call(obj)



var obj = {
    fullName: "Harry Potter",
    sayHi: function(){
        return "This person's name is " + this.fullName
    }
}






// Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.
// sumEvenArguments(1,2,3,4) // 6
// sumEvenArguments(1,2,6) // 8
// sumEvenArguments(1,2) // 2

//I feel like there should be an easier way to do this with less code ....
function sumEvenArguments() {
	var arr = [].slice.call(arguments)
	var evens = []
	arr.forEach(function(element) {
		if (element % 2===0) {
			evens.push(element)
		}
	})

	var sum = 0
	evens.forEach(function(element) {
		sum = sum + element
	})
	return sum
}


// Write a function called arrayFrom which converts an array-like-object into an array.
// function sample(){
//     var arr = arrayFrom(arguments)
//     if(!arr.reduce) throw "This is not an array!"
//     return arr.reduce(function(acc,next){
//         return acc+next;
//     },0)
// }

function arrayFrom() {
	var arr = [].slice.call(arguments)
	return arr
}


// Write a function called invokeMax which accepts a function and a maximum amount. invokeMax should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function should return "Maxed Out"

// function add(a,b){
//     return a+b
// }

// var addOnlyThreeTimes = invokeMax(add,3);
// addOnlyThreeTimes(1,2) // 3
// addOnlyThreeTimes(2,2) // 4
// addOnlyThreeTimes(1,2) // 3
// addOnlyThreeTimes(1,2) // "Maxed Out!"

function invokeMax(fn, max) {
	// var outerArgs = [].slice.call(arguments)
	var counter = 0

	return function() {
		if (counter === max) {
			return "Maxed Out!"
		} else {
			counter++
			return fn.apply(this,arguments) //ES 5
			// return fn(...arguments) //ES2015
		}
	}
}



// Write a function called guessingGame which takes in one parameter amount. The function should return another function that takes in a parameter called guess. In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.

// In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". If the guess is too high return "You're too high!" and if it is too low, return "You're too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.

// You will have to make use of closure to solve this problem.

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


function guessingGame(amount) {
	var answer = (Math.floor(Math.random() *11))
	var guesses = 0
	return function() {
		var guess = [].slice.call(arguments);
		// var guess = args[0]
		guesses++
		if (guesses > amount) {
			return "No more guesses, the answer was " + answer
		} else if (guess > answer) {
			return "You're too high!"
		} else if (guess < answer) {
			return "You're too low!"
		} else {
			return "You got it!"
		}

	}

}



