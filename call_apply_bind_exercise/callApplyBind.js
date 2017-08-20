// ## Call Apply Bind Exercises

// Fix the following code:

// ```javascript
// var obj = {
//     fullName: "Harry Potter",
//		sayHi: function(){
//             return "This person's name is " + this.fullName
//      }
// }
// ```

// - List two examples of "array-like-objects" that we have seen.
//     -arguments
//     -when using DOM methods (getElementById) it returns an array-like object of the found items (div etc)

function sumEvenArguments(){
	var array = [].slice.call(arguments)
	var sum = 0;
	for(var i = 0; i < array.length; i++){
		if(array[i] % 2 === 0){
			sum += array[i]
		}
	}
	return sum

}


function arrayFrom(arraylikeobj){
	return [].slice.call(arraylikeobj)
}

function invokeMax(fn, thisArg){
	var max = [].slice.call(arguments,1)
	var counter =0;
	return function(){
		var innerArgs = [].slice.call(arguments);
		if(counter >= max){
			return "Maxed Out!"
		} else {
			counter +=1
			return fn.apply(this,innerArgs)
		}
	}
}

function guessingGame(amount){
	var answer = Math.floor(Math.random * 11);
	var guesses = 0;
	return function(guess){
		//var innerArgs = [].slice.call(arguments);
		if(guesses >= amount){
			return "You are all done playing!"
		} 
		if(guesses < amount){
			guesses += 1
			if(guess < answer){
				return "You're too low!"
			}
			if(guess > answer){
				return "You're too high!"
			}
			if(guess === answer){
				return "You got it!"
			}
			else {
				return 'No more guesses the answer was ${answer}'
			}
			
		}
	}
}




