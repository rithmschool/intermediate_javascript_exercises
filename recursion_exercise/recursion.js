//productOfArray function
function productOfArray(array) {
	if (array.length === 1) {
		return array[0];
	}
	return array[array.length - 1] * productOfArray(array.slice(0, array.length - 1));
}

//collectStrings function

function collectStrings(object) {
	var holdingArray = [];
	function collector(object) {
		if (typeof(object) === "object") {
			for(var prop in object) {
				if (typeof(object[prop]) === "string") {
					holdingArray.push(object[prop]);
				} else if (typeof(object[prop]) === "object") {
					return collector(object[prop]);
				}
			}
		}
	}
	collector(object);
	return holdingArray;
}

//contains function

function contains(object, value) {
	var searchValue = false;
	function objectContains(object,value) {
		for (var prop in object) {
			if (object[prop] === value) {
				searchValue = true;
				return searchValue;
			} else if (typeof(object[prop]) === "object") {
				objectContains(object[prop], value);
			}
		}
	}
	objectContains(object,value);	
	return searchValue;
}

//search function
function search(array, number) {
	var arrayIndex = array.length - 1;
	function searchIn(array, number) {
		if (array.length === 0) {
			return -1;
		}
		if (array[array.length - 1] === number) {
			return array.indexOf(number);
		}
		arrayIndex--;
		return searchIn(array.slice(0,array.length - 1), number);
	}
	searchIn(array, number);
	return arrayIndex;
}

//binarySearch function
function binarySearch(array, value) {
	var indexValue = Math.floor(array.length/ 2);
	var totalLength = array.length;
	var dummyArray = array.concat();
	function binarySearchGo(array,value) {
		if (array.length <= 1) {
			if (array[0] === value) {
				indexValue = indexValue;
				console.log("found!");
				return indexValue;
			} else {
				indexValue = -1;
				return indexValue;
			}
		}
		if (array[Math.floor(array.length/ 2)] === value) {
			console.log("found!");
			return indexValue;
		}
		if (array[Math.floor(array.length/ 2)] < value) {
			totalLength = totalLength - Math.floor(totalLength/ 2);
			indexValue = indexValue + (Math.floor((totalLength/2) + 0.5));
			return binarySearchGo(array.splice(Math.floor(array.length/2) + 1,array.length - Math.floor(array.length/2)), value);
		}
		if (array[Math.floor(array.length/ 2)] > value) {
			totalLength = totalLength - Math.floor(totalLength/ 2);
			indexValue = indexValue - (Math.floor((totalLength/2) + 0.5));
			return binarySearchGo(array.splice(0, Math.floor(array.length/2)), value);
		}
	}
	binarySearchGo(dummyArray,value);
	return indexValue;
}

//stringifyNumbers function
function stringifyNumbers(object) {
	
	var holdingObj = {};
	
	function stringifyThis(object) {
		for (var prop in object) {
			if (typeof(object[prop]) === "number") {
				holdingObj[prop] = object[prop].toString();
			} else if (typeof(object[prop]) === "string") {
				holdingObj[prop] = object[prop];
			} else if (typeof(object[prop]) === "boolean") {
				holdingObj[prop] = object[prop];
			} else if (Array.isArray(object[prop])) {
				holdingObj[prop] = object[prop];
			} else if (typeof(object[prop]) === "object") {
				holdingObj[prop] = stringifyNumbers(object[prop]);
			}
		}
	}
	stringifyThis(object);
	return holdingObj;
}