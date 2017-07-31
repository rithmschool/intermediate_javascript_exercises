function replaceWith(str, rep, repWith) {
	var newStr = "";
	for (var i = 0; i < str.length; i++) {
		if (str[i] === rep) {
			newStr += repWith;
		} else {
			newStr += str[i];
		}
	}
	return newStr;
}

function expand(arr, repeat) {
	var expandedArr = [];
	for (var i = 0; i < repeat; i++) {
		expandedArr = expandedArr.concat(arr);
	}
	return expandedArr;
}

function acceptNumbersOnly() {
	for (var i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] !== 'number' || isNaN(arguments[i])) {
			return false;
		}
	}
	return true;
}

function mergeArrays(arr1, arr2) {
	if (Array.isArray(arr1) === false || Array.isArray(arr2) === false) {
		return false;
	}

	return arr1.concat(arr2).sort();
}

function mergeObjects(obj1, obj2) {
	if (!obj1 || !obj2 || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
		return false;
	}
	for (var key in obj2) {
		obj1[key] = obj2[key];
	}
	return obj1;
}