function drop(arr, num=1){
	if (num === 1) {
		return arr.slice(1);
	} else {
		return arr.slice(num);
	}
}

function fromPairs(arr){
	// assuming arr is an array of arrays containing key value pairs
	// e.g. [[key, value],[key, value],[key, value]]
	if (arr.length === 0) {
		return {};
	} else {
		var result = {};
		for (var i = 0; i < arr.length; i++) {
			result[arr[i][0]] = arr[i][1];
		}
		return result;
	}
}

function head(arr){
	if (arr.length === 0) {
		return undefined;
	} else {
		return arr[0];
	}
}

function take(arr, num=1){
	return arr.slice(0, num);
}

function takeRight(arr, num=1){
	if (num === 0) {
		return []
	} else {
		return arr.slice(num*-1);
	}
}

function union(){
	// assuming arguments will be an "array" of arrays
	var result = [];
	for (var i = 0; i < arguments.length; i++) {
		for (var j = 0; j < arguments[i].length; j++) {
			if (result.indexOf(arguments[i][j]) === -1) {
				result.push(arguments[i][j]);
			}
		}
	}
	return result;
}

function zipObject(keysArr, valuesArr){
	var result = {};
	for (var i = 0; i < keysArr.length; i++) {
		result[keysArr[i]] = valuesArr[i];
	}
	return result;
}

function includes(collection, val, fromIndex=0){
	// collection can be an array, string, or object
	if (typeof collection === "object" && Array.isArray(collection) !== true) {
		for (var key in collection) {
			if (collection[key] === val) {
				return true;
			}
		}
		return false;
	}
	return (collection.slice(fromIndex).indexOf(val) !== -1) ? true : false;
}

function sample(arr){
	return arr[Math.floor(Math.random()*arr.length-1)];
}

function cloneDeep(collection){
	var result;
	if (Array.isArray(collection)) {
		result = [];
		collection.forEach(function(val){
			// we want to make all the references different
			result.concat(cloneDeep(val));
		});
	} else {
	    result = {};
		for (var key in collection) {
			result[key] = collection[key];
		}
	}
	return result;
}

function sumBy(arrOfObj, iteratee){
	if (typeof iteratee === "string") {
		return arrOfObj.reduce(function(acc, obj){
			acc += obj[iteratee];
			return acc;
		}, 0);
	} else {
		var sum = 0;
		for (var i = 0; i < arrOfObj.length; i++) {
			sum += iteratee(arrOfObj[i]);
		}
		return sum;
	}
}

function inRange(num, start=0, end){
	// Checks if n is between start and up to, but not including, end.
	// If end is not specified, it's set to start with start then set to 0.
	// If start is greater than end the params are swapped to support negative ranges.
	if (end === undefined) {
		end = start;
		start = 0;
	}
	if (start > end) {
		var hold = start;
		start = end;
		end = hold;
	}
	return (num > start && num < end);

}

function has(){

}

function omit(obj, arrKeysToOmit){
	var result = {};
	for (var key in obj) {
		if (arrKeysToOmit.indexOf(key) === -1) {
			result[key] = obj[key];
		}	    
	}
	return result;
}

function pick(obj, arrKeysToPick){
	var result = {};
	for (var key in obj) {
		if (arrKeysToPick.indexOf(key) !== -1) {
			result[key] = obj[key];
		}	    
	}
	return result;
}

function pickBy(obj, callback){
	var result = {};
	for (var key in obj) {
		if (callback(obj[key])) {
			result[key] = obj[key];
		}
	}
	return result;
}

function omitBy(obj, callback){
	var result = {};
	for (var key in obj) {
		if (!callback(obj[key])) {
			result[key] = obj[key];
		}
	}
	return result;
}

function padEnd(){

}

function repeat(str, times){
	if (times === 0) return "";
	if (times === 1) return str;

	var result = "";
	for (var i = 0; i < times; i++) {
		result = result.concat(str);
	}
	return result;
}

function upperFirst(str){
	var result = "";
	return result.concat(str[0].toUpperCase() + str.slice(1));
}

function flatten(arr){
	//NOT WORKING
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			flatten(arr[i]);
		} else {
			result.push(arr[i]);
		}
	}
	return result;
}

// BONUS

function zip(){

}

function unzip(){

}

function flip(){

}

function flattenDeep(){

}
