function productOfArray(arr) {
	if (arr.length === 1) {
		return arr[0];
	}
	return arr[0] * productOfArray(arr.slice(1));
}

function collectStrings(obj) {
	var strings = [];
	function collectStringsHelper(obj) {
		for (var key in obj) {
			if (typeof(obj[key]) === "string") {
				strings.push(obj[key]);
			} else {
				collectStringsHelper(obj[key]);
			}
		}
	}
	collectStringsHelper(obj);
	return strings;
}

function contains(nestedObj, searchTerm) {
	for (var key in nestedObj) {
		if (typeof(nestedObj[key]) === "object") {
			if (contains(nestedObj[key], searchTerm)) {
			    return true;
			};
		} else if (nestedObj[key] === searchTerm) {
			return true;
		}
	}
	return false;
}

function search(arr, val, currentIndex=0) {
    if (arr[0] === val) {
	   return currentIndex;
	}
	// if an empty array is passed in, value is not found
	else if (arr.length === 0) {
	   return -1;
	}
	// otherwise, increment the index to keep track of it, and then remove the
	// value that was already checked, and pass in a shorter array to search()
	else {
		currentIndex++;
		currentIndex = search(arr.slice(1), val, currentIndex);
	}
	return currentIndex;
}

function binarySearch(arr, val) {
	// sort the array
	// find the middle, compare
	// remove the middle and everything before or after it
	// depending on the comparison
	// repeat
}

function stringifyNumbers(obj) {

}