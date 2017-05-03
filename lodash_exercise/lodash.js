function drop(array){
	var holdingArray = array.concat();
	var n;
	if (arguments[1] === undefined) {
		n = 1;
	} else {
		n = arguments[1];
	}
	function helper(array, n) {
		if (n === 0 || array.length === 0) { 
			return; 
		};
		array.shift();
		return helper(array, n - 1);
	}
	helper(holdingArray, n);
	return holdingArray;
}

function fromPairs(array){
	var holdingObj = {};
	function helper(array) {
		if (array.length === 0) {
			return;
		}
		holdingObj[array[0][0]] = array[0][1];
		array.shift();
		return helper(array);
	}
	helper(array);
	return holdingObj;
}

function head(array){
	if (array.length === 0) {
		return undefined;
	} else {
		return array[0];
	}
}

function take(array){
	var copyArray = array.concat();
	var holdingArray = [];
	var n;
	if (arguments[1] === undefined) {
		n = 1;
	} else {
		n = arguments[1];
	}
	function helper(array, n) {
		if (n === 0 || array.length === 0) {
			return;
		}
		holdingArray.push(array.shift());
		return helper(array, n - 1);
	}
	helper(copyArray, n);
	return holdingArray;
}

function takeRight(array){
	var copyArray = array.concat();
	var holdingArray = [];
	var num;
	if (arguments[1] === undefined) {
		num = 1;
	} else {
		num = arguments[1];
	}
	function helper(array,num) {
		if (num === 0 || array.length === 0) {
			return;
		}
		holdingArray.unshift(array.pop());
		return helper(array, num - 1);
	}
	helper(copyArray, num);
	return holdingArray;
}


function takeWhile(array, callback){
	var holdingArray = [];
	function helper(array, callback) {
		if (array.length === 0) {
			return;
		}
		if (callback(array[0])) {
			holdingArray.push(array.shift());
		} else {
			return;
		}
	}
	helper(array, callback);
	return holdingArray;
}

function union(arr1, arr2){
	var copyArray = arr1.concat();
	function helper(array) {
		if (array.length === 0) {
			return;
		}
		if (!copyArray.includes(array[0])) {
			copyArray.push(array.shift());
		} else {
			array.shift();
		}
		return helper(array);
	}
	helper(arr2);
	return copyArray;
}

function zip(){
	var holdingArray = [];
	if (arguments.length === 0) {
		return holdingArray;
	}
	for (var i = 0; i < arguments[0].length; i++) {
		holdingArray[i] = [];
		holdingArray[i].push(arguments[0][i]);
	}
	for (var j = 1; j < arguments.length; j++) {
		for (var z = 0; z <arguments[0].length; z++) {
			holdingArray[z].push(arguments[j][z]);
		}
	}
	return holdingArray;
}

function unzip(){
	var holdingArray = [];
	if (arguments.length === 0){
		return holdingArray;
	}
	for (var i = 0; i < arguments[0][0].length; i++) {
		holdingArray[i] = [];
		holdingArray[i].push(arguments[0][0][i]);
	}
	for (var j = 1; j < arguments[0].length; j++) {
		for (var z = 0; z < arguments[0][0].length; z++) {
			holdingArray[z].push(arguments[0][j][z]);
		}
	}
	return holdingArray;
}

function zipObject(arr1,arr2){
	return arr1.reduce(function(acc,value,index) {
		acc[value] = arr2[index];
		return acc;
	}, {})

}

function includes(input, value, index){
	var start = index || 0;
	var dummyString = ''
		// if input is an array
		if (Array.isArray(input)) {
			for (var i = start; i < input.length; i++) {
				if (input[i] === value) {
					return true;
				}
			}
		}
		// if input is an object
		if (typeof(input) === "object" && !Array.isArray(input)) {
			for (var prop in input) {
				if (input[prop] === value) {
					return true;
				}
			}
		}

		// if input is a string
		if (typeof(input) === "string") {
			dummyString = input.substring(start);
			if (dummyString.indexOf(value) >= 0) {
				return true;
			}
		}
	return false;
}

function sample(array){
	return array[Math.floor(Math.random() * 4)];
}


function flip (fn) {
    return function() {
        var args = Array.from(arguments);
        args.reverse();
        return fn.apply(fn, args);
    }
}

function cloneDeep(object){
	var holdingObj;
	if (Array.isArray(object)) {
		holdingObj = [];
	} else if (typeof(object) === "object") {
		holdingObj = {};
	}
	if (Array.isArray(object)) {
		for(var i = 0; i < object.length; i++) {
			if (typeof(object[i]) === "object") {
				holdingObj.push(cloneDeep(object[i]));
			} else {
				holdingObj.push(object[i]);
			}
		} 
	} else if (typeof(object) === "object") {
		for (var prop in object) {
			if (typeof(object[prop]) === "object") {
				holdingObj[prop] = cloneDeep(object[prop]);
			} else {
				holdingObj[prop] = object[prop];
			}
		}
	}
	return holdingObj;

}

function sumBy(array, value){
	var counter = 0;
	array.forEach(function(val) {
		if (typeof(value) === "string") {
			counter += val[value];
		} else {
			counter += value(val);
		}
	})
	return counter;
}

function inRange(number, start, end){
	var low;
	var high;
	if (arguments[2] === undefined) {
		low = 0;
		high = Math.abs(start);
	} else {
		low = Math.abs(start);
		high = Math.abs(end);
	}
	if (Math.abs(number) >= low && Math.abs(number) < high) {
		return true;
	}
	return false;
}

function has(object, keys){
	var keysArray;
	if (Array.isArray(keys)) {
		keysArray = keys;
	} else {
		keysArray = keys.split(".");
	}
	keysArray.forEach(function(value) {
		if (object[value] === undefined) {
			return false;
		}
	})
	return true;
}

function omit(object,key){
	var newObj = JSON.parse((JSON.stringify(object)));
	key.forEach(function(value) {
		delete newObj[value];
	})
	return newObj;
}

function pick(object,key){
	var newObj = {};
	key.forEach(function(value) {
		newObj[value] = object[value];
	})
	return newObj;
}

function pickBy(object, value){
	var newObj = {};
	for (var prop in object) {
		if (value(object[prop])) {
			newObj[prop] = object[prop];
		}
	}
	return newObj;
}

function omitBy(object,value){
	var newObj = JSON.parse(JSON.stringify(object));
	for (var prop in object) {
		if (value(object[prop])) {
			delete newObj[prop];
		}
	}
	return newObj;
}


function padEnd(string, length, char){
	var str = string;
	var toggle = 0;
	var padding = length - string.length;
	var character;
	if (arguments[2] === undefined) {
		character = "  ";
	} else {
		character = char;
	}
	function helper(string,length,character) {
		if (length <= 0) {
			return string;
		}
		string += character[(length + 2 - 1) % 2];
		return helper(string, length - 1, character);
	};
	str = helper(str, padding, character);
	return str;

}

function repeat(string, number){
	var newString = "";
	function helper(string, number){
		if (number <= 0) {
			return;
		}
		newString = newString + string;
		return helper(string, number - 1);
	}
	helper(string, number);
	return newString;
}

function upperFirst(str){
	var newString = "";
	newString += str[0].toUpperCase();
	for (var i = 1; i < str.length; i++) {
		newString += str[i];
	}
	return newString;
}

function flatten(array){
	return array.reduce(function(acc, value) {
		return acc.concat(value);
	}, []);
}


function flattenDeep(array){
	var holdingArray = [];
	for (var i = 0; i < array.length; i++) {
		if (!Array.isArray(array[i])) {
			holdingArray.push(array[i]);
		} else if (Array.isArray(array[i])) {
			holdingArray = holdingArray.concat(flattenDeep(array[i]));
		}
	}
	return holdingArray;
}

