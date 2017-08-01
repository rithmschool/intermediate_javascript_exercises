function replaceWith(str, replaceThisChar, replacementChar) {
	var arrayOfChars = str.split("");
	arrayOfChars.forEach(function(val, index){
		if (val === replaceThisChar) {
			arrayOfChars[index] = replacementChar;
		}
	});
	return arrayOfChars.join("");
}

function expand(arr, num) {
	if (num === 1) {
		return arr;
	}
	var result = arr;
	for (var i = 1; i < num; i++) {
		result = result.concat(arr);
	}
	return result;
}

function acceptNumbersOnly() {
	for (var i = 0; i < arguments.length; i++) {
		if (typeof(arguments[i]) !== "number" || isNaN(arguments[i])) {
			return false;
		}
	}
	return true;
}

function mergeArrays(arr1, arr2) {

}

function mergeObjects(obj1, obj2) {

}