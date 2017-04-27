function drop(arr, n = 1){
	// create slice of arr with n elements dropped from the beginning 
	// returns new arr
	// by default, if you don't pass in an argument for n, it drops 1 from the front
	var copy = arr.slice();
	for (var i = 0; i < n; i++) {
		copy.shift();
	} 
	return copy;
}

function fromPairs(pairs){
	// takes in an arr of key: value pairs, as a set of 2-dimensional arrays
	// returns a new object with that set of key: value pairs 
	var newObj = {};
	for (var i = 0; i < pairs.length; i++) {
		newObj[pairs[i][0]] = pairs[i][1];
	}
	return newObj;
}

function head(arr){
	// takes in an arr
	// returns first element of arr
	return arr.shift();
}

function take(arr, n = 1){
	// reverse of drop
	// takes an arr and returns an arr of the first n elements
	var part = [];
	for (var i = 0; i < n; i++) {
		if (arr[i]) {
			part[i] = arr[i];
		}
	}
	return part;
}

function takeRight(arr, n = 1){
	// like take but from the end rather than beginning
	// *not in reverse*, just counted from the end
	return drop(arr, arr.length - n);
}

function union([arrays]){
	var myArgs = [].slice.call(arguments);
	var uniques = [];
	for (var i = 0; i < myArgs.length; i++) {
		for (var j = 0; j < myArgs[i].length; j++) {
			if (!(uniques.includes(myArgs[i][j]))) {
				uniques.push(myArgs[i][j]);
			}
		}
	}
	return uniques;
}

function zipObject(props, vals){
	// takes in an array of properties & values
	// returns an object with those properties and values

	var newObj = {};
	for (var i = 0; i < props.length; i++) { // make sure all keys included if longer than vals
		newObj[props[i]] = vals[i]; // vals[i] will be undefined if outside the range
	}
	return newObj;
}

function includes(thing, val, index = 0){
	// checks thing (array, object, or string) to see if it has value val 
	// if thing is a string, checks if substring
	// starts looking from index

	if (typeof thing === "string" || Array.isArray(thing)) {
		var subThing = thing.slice(index, thing.length + 1);
		return subThing.includes(val);
	} else if (typeof thing === "object") {
		// objects are not ordered, so no need to use the index
		for (var key in thing) {
			if (thing[key] === val) {
				return true;
			}
		}
		return false;
	}
	return false;
}

function sample(arr){
	// takes something and returns a random element from it 
	// I implemented it just for arrays but it looks like the real one handles Objects too
	return arr[Math.floor(Math.random() * (arr.length - 1))];
}

// function cloneDeep(thing){
// 	// array of objects or empty object
// 	// make sure each object is ALSO a new one
// 	if (Array.isArray(thing)) {
// 		var newThing = thing.map(function(val) {
// 			return val;
// 		});
// 	} else if (typeof thing === "object") {
// 		for (var key in thing) {
// 			var newThing = {};
// 			newThing[key] = thing[key];
// 		}
// 	} 
// 	return newThing;
// }

// function sumBy(arr, fun){
// 	// sums with a callback function
// 	// complicated part is the object shorthand
// }

function inRange(n, start = 0, end){
	// checks if start <= n < end 
	// if no end arg, end = start (2nd arg) and start = 0
	// if start > end, swap parameters

	if (!end) { // if end is undefined; end is falsey
		end = start;
		start = 0;
	} else if (start > end) {
		var origStart = start;
		start = end;
		end = origStart;
	} 

	if (start <= n && n < end) {
		return true;
	} else {
		return false;
	}
}

// function has(){
// 	// also complicated; handles array of keys as a parameter
// }

function omit(obj, arr){
	// return new object with all specified keys omitted
	// keys inputted as an array
	var newObj = {};
	for (var key in obj) {
		if (!arr.includes(key)) {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}

function pick(obj, arr){
	// opposite of omit
	// return new object with only specified keys
	var newObj = {};
	for (var key in obj) {
		if (arr.includes(key)) {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}

function pickBy(obj, fun){
	// return new object with only key: value pairs that callback function returns truthy for
	var newObj = {};
	for (var key in obj) {
		if (fun(obj[key], key)) {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}

function omitBy(obj, fun){
	// return new object with only key: value pairs that callback function returns falsey
	// opposite of pickBy
	var newObj = {};
	for (var key in obj) {
		if (!(fun(obj[key], key))) {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}

// function padEnd(str, len, chars){
// 	// pads str on right side if it's shorter than len
// 	// so that entire return string has length of len
// 	// if chars specified, pads chars to end
// 	// otherwise pads spaces
// 	var newStr;
// 	if (str >= len) {
// 		newStr = str.slice(0, len+1);
// 		return newStr;
// 	} else if (!chars) {
// 		chars = " ";
// 	}

// 	// more stuff here
// }

function repeat(str, n){
	// returns new string with repeated str n times
	var newStr = "";
	for (var i = 0; i < n; i++) {
		newStr = newStr.concat(str);
	}
	return newStr;
}

function upperFirst(str){
	// makes first char uppercase
	var newStr = str[0].toUpperCase() + str.slice(1);
	return newStr;
}

function flatten(arr){
	// flattens array only 1 level deep
	var returnArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])){
			for (var j = 0; j < arr[i].length; j++) {
				returnArr.push(arr[i][j]);
			}
		} else {
			returnArr[i] = arr[i];
		}
	}
	return returnArr;
}

/////////////////////////////////////
////////////// BONUSES //////////////
/////////////////////////////////////

// function takeWhile(){
// 	// "brually horrible"
// }

// function zip(){

// }

// function unzip(){

// }

// function flip(){

// }

// function flattenDeep(){

// }

// chunk; started by accident; not done
// function chunk(arr, size = 1){
// 	var endArr = [];
// 	var numSubArrs = Math.ceil(arr / size);
// 	for (var i = 0; i < numSubArrs; i++) {
// 		endArr.push([]);
// 	}
// }








