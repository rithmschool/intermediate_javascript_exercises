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

function includes(){

}

function sample(){

}

function cloneDeep(){

}

function sumBy(){

}

function inRange(){

}

function has(){

}

function omit(){

}

function pick(){

}

function pickBy(){

}

function omitBy(){

}

function padEnd(){

}

function repeat(){

}

function upperFirst(str){

}

function flatten(){

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
