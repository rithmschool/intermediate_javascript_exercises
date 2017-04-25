
function sumEvenArguments () {
// var args = Array.from(arguments);
	var args = [].slice.call(arguments);
	var ans = 0;
	args.forEach(function (x) {
		if (x % 2 === 0) {
			ans += x;
		}
	} );
	return ans;
}

function arrayFrom (arrayNot) {
	var arr = Array.prototype.slice(arrayNot);
	return arr;
}

function invokeMax (fn, num) {
	var count = 0;
	return function () {
		count += 1;
		if (count > num) {
			return "Maxed Out!";
		} else {
            var argsArr = Array.from(arguments);
			return fn.apply(this, argsArr);
		}
	}
};

function guessingGame(num) {
    var count = 0;
    return function(guess) {
        count += 1;
        if (count === num) {
            return "You are all done playing fool.";
        }
        var ans = Math.round(Math.random()*10.1);
        console.log(ans);
        if (guess === ans) {
            return "You won! Imagine that..."
        } else {
            return "You are wrong, and are dumb."
        }
    }
}
// guessingGame(5)
// var game1 = guessingGame(2);

// var game1 = guessingGame(4);