function drop(array, n){
	if (n === 0) {
		return array;
	} else if (!n) {
		return array.slice(1)
	} else {
		return array.slice(n)
	}
}

function fromPairs(arr){
var obj = {};
	for (var i = 0; i < arr.length; i++){
		obj[arr[i][0]] = arr[i][1];
	}
return obj;
}

function head(arr){
if (arr.length === 0) {
	return undefined;
}else {
	return arr[0]
}
}

function take(arr, n){

if (n === 0) {
	return [];
} else if (!n) {
	return arr.slice(0,1)
} else {
	return arr.slice(0,n)
}
}

function takeRight(arr, n){
	if (n === 0) {
		return [];
	} else if (!n) {
		return arr.slice(arr.length-1)
	} else if (n > arr.length) {
		return arr.slice(0)
	} else {
		return arr.slice(n-1)
	}
}

function union(){
	var arr = [];

	for (var x = 0; x < arguments.length; x++) {
	for (var i = 0; i < arguments[x].length; i++) {
		if (arr.indexOf(arguments[x][i]) === -1) {
			arr.push(arguments[x][i]);
		}
	}
	}
	return arr;
}

function zipObject(arr1,arr2){
var obj = {}
	for (var i = 0; i < arr1.length; i++) {
		if (!(arr2[i])){ 
			obj[arr1[i]] = undefined;
		} else {
			obj[arr1[i]] = arr2[i];
		}
	}
return obj;
}

function includes(collection, value, check){

	if (typeof collection === "string") {
		return (collection.search(value) !== -1)
	} else if (Array.isArray(collection)) {
		if (!check) {
			return (collection.indexOf(value) !== -1) 
		} else {
			return (collection[check] === value)
		}
	} else if (typeof collection === "object") {
		for (var key in collection) {
			return (collection[key] === value) 
		}
	}

}

function sample(collection){
var random = Math.random()
	if (Array.isArray(collection)) {
		var arrLength = Math.floor(random * collection.length)
		return collection[arrLength];
	} else if (typeof collection === "object") {
		var keys = []
		for (var key in collection) {
			keys.push(key)
		}
		return collection[keys[Math.floor(random * keys.length)]]
	}
}

function cloneDeep(value){
var arr = [];
var obj = {};

function helper(object) {
	for (var key in object);
	if (typeof object === "object") {
		return obj[key] = helper(object[key])
	} else {
		return obj[key] = value[key];
	}
}

	if (Array.isArray(value)) {
		for (var i = 0; i < value.length; i ++) {
			if (typeof value[i] === "object") {
				holder = helper(value)
				arr.push(holder)
			} else {
			var holder = value[i];
			arr.push(holder);
			}
		}
		return arr;
	} else if (typeof value === "object") {
		for (var key in value) {
			obj[key] = value[key];
		}
		return obj;
	}

}

function sumBy(arr, fn) {
var sum = 0;
	for (var i = 0 ; i < arr.length; i++) {
		if (typeof fn === "function"){
			sum += fn(arr[i]);
		} else {
			sum += arr[i][fn]
		}
	}
return sum;
}

function inRange(num, start, end){
var arr = [];


	if (!end) {
		end = start;
		start = 0;
		for (var i = start; i < end; i++) {
		arr.push(i)
		}

	} else if (start > end) {
		for (var i = end; i < start; i++) {
		arr.push(i);
		}

	} else {
		for (var i = start; i < end; i++) {
		arr.push(i)
		}
	}

	return (arr.indexOf(Math.floor(num)) !== -1)

}


function has(object,path){
var arr = [];
	function helper(obj) {
		for (var key in obj) {
			arr.push(key);
			if (typeof obj[key] === "object") {
				return helper(obj[key]);
			}
		}
	}

helper(object);

if (Array.isArray(path)) {
	for (var i = 0; i < path.length; i ++){
	   if (arr.indexOf(path[i]) !== -1) {
	   	return true
	   }
	}
} else if (typeof path === "string") {
	 	if (arr.indexOf(path) !== -1) {
	 		return true
	 	}
	}
return false
}

function omit(object, remove){
var newObj = {};
for (var key in object) {
	if (remove.indexOf(key) === -1) {
		newObj[key] = object[key];
	}
}
return newObj;
}

function pick(obj, add){
var newObj = {};
for (var key in obj) {
	if (add.indexOf(key) !== -1) {
		newObj[key] = obj[key];
	}
}
return newObj;
}

function pickBy(obj, fn){
var newObj = {}
for (var key in obj) {
	if (fn(obj[key])) {
		newObj[key] = obj[key];
	}
}
return newObj;
}

function omitBy(obj, fn){
var newObj = {};
for (var key in obj) {
	if (!fn(obj[key])) {
		newObj[key] = obj[key];
	}
}
return newObj;
}

function padEnd(str, length, char){
	if (!char) {
		char = " "
	}
	while (str.length < length) {
		str = str + char;
	}
	if (str.length > length) {
		return str.slice(0,length);
	} else if (str.length === length) {
		return str
	}
}


function repeat(str, n){

	if (n === 0) {
		return ""
	} else if (n > 0) {
		if (n === 1) {
			return str;
		}
		return str + repeat(str, n-1)
	}
}



function upperFirst(str){
return (str[0].toUpperCase()) + (str.slice(1))
}

function flatten(arr){
var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			return newArr.concat(arr[i])
		} else {
			newArr.push(arr[i])
		}
	}
}



//bonus
function zip(){

}

function unzip(){

}

function flip(){

}

function flattenDeep(){

}
