function drop(){
	if(arguments.length < 2){
		var newArray = arguments[0].slice(1);
	} else if (arguments[1] === 0){
		return arguments[0];
	} else {
		var newArray = arguments[0].slice(arguments[1]);
	}
	return newArray;
}

function fromPairs(arr){
	return arr.reduce(function(prev, next, i){
		prev[next[0]] = next[1];
		return prev;
	}, {})
}

function head(arr){
	if(arr.length === 0) return;
	return arr[0];
}

function take(arr, arr2){
	if(arguments.length === 1) return [arr[0]];
	if(arr2 === 0) return [];
	return arr.slice(0,arr2);
}

function takeRight(arr){
	if(arguments.length === 1) return arr.slice(-1);
	if(arguments[1] === 0) return [];
	return arr.slice(-arguments[1]);
}

function takeWhile(){
	printf('Lol');
}

function union(arr, arr2){
	var newArray = [];
	arr.forEach(function(val){
		if(!newArray.includes(val)){
			newArray.push(val);
		}
	});
	arr2.forEach(function(val){
		if(!newArray.includes(val)){
			newArray.push(val);
		}
	});
	return newArray;
}

function zip(arr){
	//find the longest argument
	var longest = 0;
	for(var i = 0; i < arguments.length; i++){
		if(arguments[i].length > longest){
			longest = arguments[i].length;
		}
	}
	//Make the array based on longest
	var array = [];
	for(var i = 0; i < longest; i++){
		array.push([]);
	}
	//loop through all arguments
	for (var j = 0; j < arguments.length; j++){
		//loop in the arrays in the arguments
		for(var k = 0; k < longest; k++){
			array[k].push(arguments[j][k]);
		}
	}
	return array;
}

function unzip(arr){
	//take the first array's length
	var length = arr[0].length;
	if(length === 0) return;

	//make an array with array length sub arrays
	var array = [];
	for(var i = 0; i < length; i++){
		array.push([]);
	}

	//loop through the array
	for(var j = 0; j < arr.length; j++){
		//loop though every value of the array and assign them
		for(var k = 0; k < length; k++){
			array[k].push(arr[j][k]);
		}
	}

	return array;

}

function zipObject(arr, arr2){
	return arr.reduce(function(prev, next, i, arr){
		prev[arr[i]] = arr2[i];
		return prev;
	}, {});
}

function includes(arg1, arg2){
	if(Array.isArray(arg1) || typeof(arg1) === 'string'){
		var index = arg1.indexOf(arg2)
		if(index >= 0){
			if(arguments.length === 3){
				if(index > arguments[2]){
					return true;
				} else {
					return false;
				}
			} else {
				return true;
			}
		}
	} else if(typeof(arg1) === 'object') {
		for(var prop in arg1){
			if(arg1[prop] === arg2) return true;
		}
		return false;
	}
}

function sample(arr){
	return arr[Math.floor(Math.random() * arr.length)];
}

function flip(callback){
	return function (){
		var args = [].reverse.call(arguments);
		return callback.apply(callback, args);
	}
}

function cloneDeep(arr){
	return arr.slice();
}

function sumBy(obj, arg2){
	return obj.reduce(function(prev, next, i){
		if(typeof(arg2) === 'function'){
			prev += arg2(next);
			return prev;
		} else {
			if(next[arg2]) prev += next[arg2];
			return prev;
		}
	}, 0)
}

function inRange(){
	var number = arguments[0];
	if(arguments.length < 3){
		var start = 0;
		var end = arguments[1];
	} else {
		var start = arguments[1];
		var end = arguments[2];
	}
	if(start < 0 && end < 0 && number < 0){
		start = start * -1;
		end = end * -1;
		number = number * -1;
	}
	return number > start && number < end;
}

function has(obj, key){
	var bool = false;

	if(typeof(key) === 'string'){
		for (var prop in obj){
			if(obj[prop] === 'object'){
				bool = has(obj,key);
			} else {
				if(prop === key) return true;
			}
		}
	} else {
		for (var prop in obj){
			var index = key.indexOf(prop);
			if(index >= 0) key = key.splice(index, 1);
			if((key.length) === 0) return true;
			if(obj[prop] === 'object'){
				bool = has(obj,key);
			} else {
				if(key[0] === prop){
					return true;
				} else {
					return false;
				}
			}
		}
	}
	return bool;
}

function omit(obj, arr){
	var newObj = {};
	for (var prop in obj){
		if(!arr.includes(prop)){
			newObj[prop] = obj[prop];
		}
	}
	return newObj;
}

function pick(obj, arr){
	var newObj = {};
	for(var prop in obj){
		if(arr.includes(prop)){
			newObj[prop] = obj[prop];
		}
	}
	return newObj;
}

function pickBy(obj, callback){
	var newObj = {};
	for(var prop in obj){
		if(callback(obj[prop])){
			newObj[prop] = obj[prop];
		}
	}
	return newObj;
}

function omitBy(obj, callback){
	var newObj = {};
	for(var prop in obj){
		if(!callback(obj[prop])){
			newObj[prop] = obj[prop];
		}
	}
	return newObj;
}

function padEnd(arg1, arg2, arg3){
	var copy = '' + arg1;
	if(arg2 === 0) return '';
	if(arg2 <= arg1.length) return arguments[0];
	if(arguments.length < 3){
		for(var i = 0; i < (arg2 - arg1.length); i++){
			copy += ' ';
		}
		return copy;
	} else {
		var i = 0;
		while(i < arg2 - arg1.length){
			for(var j = 0; j < arg3.length; j++){
				copy += arg3[j];
				i++;
				if(copy.length >= arg2) break;
			}
		}
		return copy;
	}

}

function repeat(string, num){
	var newString = '';
	for(var i = 0; i < num; i++){
		newString += string;
	}
	return newString;
}

function upperFirst(str){
	var newString = str[0].toUpperCase();
	newString += str.slice(1);
	return newString;
}

function flatten(arr){
	var newArr = [];
	for(var i = 0; i < arr.length; i++){
		if(Array.isArray(arr[i])){
			newArr = newArr.concat(arr[i]);
			break;
		} else {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

function flattenDeep(arr){
	var newArray = [];

	function helper(arr){
		if(arr.length === 0) return;
		if(typeof(arr[0]) === 'number'){
			newArray.push(arr[0]);
		} else {
			helper(arr[0]);
		}
		helper(arr.slice(1));
	}
	helper(arr);

	return newArray;
}