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

function head(){

}

function take(){

}

function takeRight(){

}

function union(){

}

function zipObject(){

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

function zip(){

}

function unzip(){

}

function flip(){

}

function flattenDeep(){

}
