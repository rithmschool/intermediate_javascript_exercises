function sumEvenArguments () {
	var args = Array.from(arguments);
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
