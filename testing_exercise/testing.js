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
	var mergedArr = arr1.concat(arr2);
	return mergedArr.sort(function(a, b){
		return a - b;
	});
}

function mergeObjects(obj1, obj2) {
	var result = {};
	for (var key in obj1) {
		result[key] = obj1[key];
	}
	for (var key in obj2) {
		result[key] = obj2[key];
	}
	return result;
}