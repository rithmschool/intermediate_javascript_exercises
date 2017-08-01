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

}

function mergeArrays(arr1, arr2) {

}

function mergeObjects(obj1, obj2) {

}