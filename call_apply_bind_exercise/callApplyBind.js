// var obj = {
//     fullName: "Harry Potter",
//     person: {
//         sayHi: function(){
//             return "This person's name is " + this.fullName
//         }
//     }
// }

var obj = {
    person: {
    	fullName: "Harry Potter",
        sayHi: function(){
            return "This person's name is " + this.fullName
        }
    }
}

obj.person.sayHi();

function sumEvenArguments(){
	var results=[];
	var argsArray = [].slice.call(arguments);
	results = argsArray.filter(function(arrayItem){
		if(arrayItem%2 === 0){
			return true;
		}
	}).reduce(function(prev,current){
		return prev+current;
	})

	return results;
}

sumEvenArguments(1,2,3,4,6,7);



function sample(){
    var arr = arrayFrom(arguments);
    if(!arr.reduce) throw "This is not an array!";
    return arr.reduce(function(acc,next){
        return acc+next;
    },0);
}

function arrayFrom(arrayLikeObj){
	var newArray = Array.prototype.slice.call(arrayLikeObj);
	return newArray;
}

sample();


function add(a,b){
	return a+b;
}

function multiply(a,b){
	return a*b;
}

function invokeMax (callback, maxNum){
	var counter=0;
	
	function someFunc(){
		if(counter>=maxNum){
			return "Maxed Out!";
		} else {
			var argsArray = [].slice.call(arguments);
			var result = callback.apply(null, argsArray);
			counter = counter + 1;
			return result;
		}
	}	
	return someFunc;
}

var addOnlyThreeTimes = invokeMax(add,3);
addOnlyThreeTimes(2,5);
addOnlyThreeTimes(10,11);
addOnlyThreeTimes(1,14);
addOnlyThreeTimes(0,9);
addOnlyThreeTimes(2,5);




function guessingGame(amount){
	var max = 9;
	var min = 0;
	var answer = Math.floor(Math.random() * (max - min + 1)) + min;
	var guessesLeft = amount;
	var done = false;

	return function (guess){
		guessesLeft = guessesLeft - 1;
		if (done){
			console.log("You are all done playing!");
		} else if(guess===answer) {
			done = true;
			console.log("You got it!");
		} else if(guessesLeft===0){
			done = true;
			console.log("No more guesses the answer was " + answer);
		} else  {
			if(guess<answer){
				console.log("You're too low!");
			} else if(guess>answer) {
				console.log("You're too high!");
			}
		}
	}
}

var game = guessingGame(5);








/////////
