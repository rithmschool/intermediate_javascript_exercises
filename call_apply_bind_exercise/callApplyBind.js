function sumEvenArguments(){
    var newArgs = Array.prototype.slice.call(arguments);
    return newArgs.reduce(function(acc,next){
        if(next % 2 === 0){
            return acc+next;
        }
        return acc;
    },0)
}

function arrayFrom(arrayLikeObject){
    return [].slice.call(arrayLikeObject)
}

function invokeMax(fn, num){
    var max = 0;
    return function(){
        var args = [].slice.call(arguments)
        if(max >= num){
            return "Maxed Out!"
        }
        max++
        return fn.apply(this,arguments)
    }
}

function guessingGame(amount){
    var answer = Math.floor(Math.random()*11);
    var guesses = 0;
    var completed = false
    return function(guess){
        if(!completed){
            var option;
            guesses++
            if(guess === answer) {
                completed = true;
                option = "You got it!"
            }
            if(guess > answer) option = "You're too high!"
            if(guess < answer) option = "You're too low!"
            if(guesses === amount && guess !== answer) {
                completed = true;
                return "No more guesses the answer was " + answer;
            }
            return option;
        }
        return "You are all done playing!"
    }
}