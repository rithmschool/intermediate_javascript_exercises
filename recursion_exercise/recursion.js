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

function search(arr, val) {
	// if (arr.length === 0) return -1;
	// if (arr[0] === val) {
	// 	return 0;
	// } else {
		
	// }
}

function binarySearch(arr, val) {

}

function stringifyNumbers(obj) {

}