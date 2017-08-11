// Create a slice of array with n elements dropped from the beginning
// Starts at the element just past the dropped elements, adds to a temp array and returns when loop is done
// This could also be implemented with slice but where is the fun in that?
function drop(arr, num=1){
	var temp = [];
	if (num > arr.length) return temp;
	for (var i = num; i < arr.length; i++) {
		temp.push(arr[i]);
	}
	return temp;
}

// Example inputs / outputs
console.log(drop([1,2,3,4,5,6], 2)); // [3,4,5,6]

// Changes an array of key-value pairs (represented as arrays, themselves) into an object and returns the object
// Loop through the array, creating a key for the object from sub-array[0] and passing the value from sub-array[1]
function fromPairs(arr){
	var temp = {};
	for (var i = 0; i < arr.length; i++) {
		temp[arr[i][0]] = arr[i][1];
	}
	return temp;
}

// Example inputs / outputs
console.log(fromPairs([['a', 1], ['b', 2]])); // {'a': 1, 'b': 2}

// Returns the first element of an array
function head(arr){
	return arr[0];
}

console.log(head([1,2,3])); // 1
console.log(head([])); // undefined;

// Creates a slice of array with n elements taken from the beginning.
// Start at the beginning, loop through add n elements to a temp array and return it.
function take(arr, num=1){
	var temp = [];
	if (num > arr.length) return arr;
	for (var i = 0; i < num; i++) {
		temp.push(arr[i]);
	}
	return temp;
}

console.log(take([1, 2, 3]));// => [1]
console.log(take([1, 2, 3], 2));// => [1, 2]
console.log(take([1, 2, 3], 5));// => [1, 2, 3]


// Creates a slice of array with n elements taken from the end.
// Start at the length-1 - num, loop through add n elements to a temp array and return it.
function takeRight(arr, num=1){
	var temp = [];
	if (num > arr.length) return arr;
	for (var i = arr.length-num; i < arr.length; i++) {
		temp.push(arr[i]);
	}
	return temp;
}

console.log("takeRight: " + takeRight([1, 2, 3]));// => [3]
console.log("takeRight: " + takeRight([1, 2, 3], 2));// => [2, 3]
console.log("takeRight: " + takeRight([1, 2, 3], 5));// => [1, 2, 3]

// Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.
// Create a lookup object. create a key for all found elements and push element into array, as long as the key didn't
// 	previously exist
function union(){
	var lookup = {}
	var temp = [];
	var newArr = [];

	if (arguments.length === 0) return newArr;
	if (arguments.length === 1) return arguments[0];

	for (var i = 0; i < arguments.length; i++) {
		temp = temp.concat(arguments[i]);
	}

	for (var j = 0; j < temp.length; j++) {
		if (temp[j] in lookup === false) {
			lookup[temp[j]] = true;
			newArr.push(temp[j]);
		}
	}

	return newArr;
}

console.log(union([2], [1, 2]));// => [2, 1]

function zipObject(arr1, arr2){
	var temp = {};
	if (arr1.length === 0 || arr2.length === 0) return null;

	for (var i = 0; i < arr1.length; i++) {
		temp[arr1[i]] = arr2[i];
	}
	return temp;
}

console.log(zipObject(['a', 'b'], [1, 2]));// => { 'a': 1, 'b': 2 }

//Checks if value is in collection. If collection is a string, it's checked for a substring of value,
// otherwise SameValueZero is used for equality comparisons. If fromIndex is negative, it's used as the offset
// from the end of collection.
function includes(collection, value, fromIndex=0){
	if (Array.isArray(collection)) {
		// Do array things
		if (fromIndex > collection.length) return false;
		if (fromIndex >= 0) {
			for (var i = fromIndex; i < collection.length; i++) {
				if (collection[i] === value) return true;
			}
		} else {
			for (var i = collection.length-fromIndex; i >= 0; i--) {
				if (collection[i] === value) return true;
			}
		}
		
	} else if (typeof collection === 'object') {
		// Do object things
		for (var key in collection) {
			if (collection[key] === value) return true;
		}
	} else if (typeof collection === 'string') {
		// Do string things
		if (collection.search(value) > -1) return true;
	}

	// How did you get here?! You should not be here!
	return false;
}

console.log("includes: " + includes([1, 2, 3], 1, -1));// => true
console.log(includes('abcd', 'bc'));// => true

// Gets a random element from collection.
function sample(collection){
	if (collection.length === 0) return collection[0];
	return collection[Math.floor(Math.random() * collection.length)];
}

// 
function cloneDeep(value){
	if (!value) return {};

	if (Array.isArray(value)) {
		var temp = [];
		for (var i = 0; i < value.length; i++) {
			temp.push(cloneDeep(value[i]));
		}
		return temp;
	} else if (typeof value === 'object') {
		var obj = {};
		for (var key in value) {
			obj[key] = cloneDeep(value[key]);
		}
		return obj;
	} else {
		return value;
	}
}

var objectsToClone = [{ 'a': 1 }, { 'b': 2 }];
var shallow = cloneDeep(objectsToClone);
console.log("clone deep: " + JSON.stringify(shallow));
console.log(shallow[0] === objectsToClone[0]);// => true

var objey = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

var cloney = cloneDeep(objey);
console.log("clone deep: " + JSON.stringify(cloney));

//This method is like _.sum except that it accepts iteratee which is invoked for each element in array to 
//generate the value to be summed. The iteratee is invoked with one argument: (value).
function sumBy(arr, iteratee=null){
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		if (typeof iteratee === 'function') {
			sum += iteratee(arr[i]);
		} else if (typeof iteratee == 'string') {
			sum += arr[i][iteratee];
		} else {
			sum += arr[i];
		}
	}

	return sum;
}
var objects1 = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
console.log("sumBy: " + sumBy(objects1, 'n'));
// => 20

//Checks if n is between start and up to, but not including, end. If end is not specified, 
//	it's set to start with start then set to 0. If start is greater than end the params are
//	swapped to support negative ranges.
function inRange(num, start, end){
	if (arguments.length === 2) {
		end = start;
		start = 0;
	} else if (start > end) {
		var temp = end;
		end = start;
		start = temp;
	}

	if (num >= start && num < end)
		return true;

	return false;
}

console.log("inRange: " + inRange(4,8));

// Checks if path is a direct property of object.
// Base Case: if we do not find the object after all possible depth tests
function has(object, path){
	if (path.length === 0) return false;
	if (Array.isArray(path)) {
		if (path.length === 0) return false; // Can it ever really get here?		
		if (path.length === 1) return path[0] in object;

		if (path[0] in object) {
			return has(object[path[0]], path.slice(1));
		} else {
			return false;
		}
	} else if (typeof path === 'string') {
		if (path.length > 1) {
			return has (object[path[0]], path.split("."));
		} else {
			return path in object;
		}
	}
}

var hasObject = { 'a': { 'b': 2 } };
console.log("has: " + has(hasObject, ['a', 'b']));


//this method creates an object composed of the own and inherited enumerable property
//paths of object that are not omitted.
// Base Case: we've run out of elements in paths
function omit(object, paths){
	var omitObj = {};
	var newObj = {};

	for (var i = 0; i < paths.length; i++) {
		omitObj[paths[i]] = true;
	}

	for (var key in object) {
		if (key in omitObj === false) {
			newObj[key] = object[key];
		}
	}

	return newObj;
}

function pick(object, paths){
	var newObj = {};

	for (var i = 0; i < paths.length; i++) {
		newObj[paths[i]] = object[paths[i]];
	}

	return newObj;
}

function pickBy(object, testFunc){
	var newObj = {};
	if (typeof testFunc !== "function") return {};

	for (var key in object) {
		if (testFunc(object[key]))
			newObj[key] = object[key];
	}

	return newObj;
}

function omitBy(object, testFunc){
	var omitObj = {};
	var newObj = {};
	if (typeof testFunc !== "function") return {};

	for (var key in object) {
		if (testFunc(object[key]))
			omitObj[key] = object[key];
	}

	for (var key in object) {
		if (key in omitObj === false) {
			newObj[key] = object[key];
		}
	}

	return newObj;
}

function padEnd(string='', length=0, chars=' '){
	var paddedStr = string;
	while (paddedStr.length < length) {
		paddedStr = paddedStr.concat(chars);
	}
	if (length > string.length)
		return paddedStr.slice(0, length);
	else
		return paddedStr;
}

console.log("padEnd: " + padEnd('abc', 6));
// => 'abc   '

function repeat(string='', n=1){
	var repeatedStr = string;
	if (n === 0) return "";

	for (var i = 1; i < n; i++) {
		repeatedStr = repeatedStr.concat(string);
	}

	return repeatedStr;
}

function upperFirst(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
}

// Flattens array a single level deep.
// Base Case: We run out of elements in the aray (any)
function flatten(array){
	var flattenedArr = [];

	for (var i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			for (var j = 0; j < array[i].length; j++)
			flattenedArr.push(array[i][j]);
		} else {
			flattenedArr.push(array[i]);
		}
	}

	return flattenedArr;
}

function zip(){

}

function unzip(){

}

function flip(){

}

function flattenDeep(){

}
