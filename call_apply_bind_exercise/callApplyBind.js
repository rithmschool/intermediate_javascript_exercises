function sumEvenArguments() {
	var result = 0;
	for(var i = 0; i < arguments.length; i++) {
		if(arguments[i] % 2 === 0) {
			result += arguments[i];
		}
	}
	return result
}


function arrayFrom() {
	var finalArr = [];
	for(var i = 0; i < arguments.length; i++) {
		finalArr.push(arguments[i]);
	}
	return finalArr;
}

function invokeMax(fn, maxAmount) {
    
    var counter = 0;

    return function() {
        counter++;
        
        if(counter > maxAmount) {
            return "Maxed Out!"
        } else {
            return fn.apply(this, [].slice.call(arguments))
        }
    }
}


var addOnlyThreeTimes = invokeMax(add,3);
addOnlyThreeTimes(1,2); // 3
addOnlyThreeTimes(2,2); // 4
addOnlyThreeTimes(1,2); // 3
addOnlyThreeTimes(1,2); // "Maxed Out!"



function guessingGame(amount) {
    
    var answer = Math.round(Math.random()*10)
    var guesses = 0;

    
    return function(guess) {
        if(guesses < amount) {
            guesses++
        } else {
            return "Game Over!"
        }

        if(guess === answer){
            return "You got it!";
        } else if(guess > answer) {
            return "You're too high!";
        } else if(guess < answer) {
            return "You're too low!"
        }
        
    }
}