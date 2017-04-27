function drop(arr,n){
	// takes an array and a number
	// drops the number of elements from the beginning of the array
	// returns a new array
	if(arguments.length === 1) n=1;
	return arr.filter(function(val,index){
		return index >= n;
	});
}

function fromPairs(arr){
// _.fromPairs([['a', 1], ['b', 2]]);
// => { 'a': 1, 'b': 2 }
// takes an array with nested arrays of key/value pairs
// returns an object with the key/value pairs
	var obj = {};
	arr.forEach(function(val){
		obj[val[0]] = val[1];
	});
	return obj;
}

function head(arr){
// returns the first element of an array
// if the array length is zero, returns undefined
	if (arr.length === 0) return undefined;
	return arr[0];
}

function take(arr,n){
// creates a slice of array with n elements from beginning
// recall slice goes from start up to but not including end
	if(arguments.length === 1) n=1;
	return arr.slice(0,n);
}

function takeRight(arr,n){
// creates a slice of array with n elements from end
	if(arguments.length === 1) n=1;
	if (n >= arr.length) n = arr.length;
	return arr.slice(arr.length-n);
}

// function takeWhile(){
// 	// no tests :)
// 	// BONUS
// }

function union(arr1,arr2){
// creates an array of unique values, in order
	var arrOut = arr1.concat(arr2.filter(function(val){
		return !arr1.includes(val);
	}));
	return arrOut;
}

function zip(array1, array2, array3){
//BONUS
// takes an array of arrays
// returns an array of arrays, the first containing all the first elements,
// the second containing all of the second, and so on
// zip(['a', 'b'], [1, 2], [true, false]); // [['a', 1, true], ['b', 2, false]]
    var newArr = [];
    
    function zipHelper(arr1, arr2, arr3){
        var innerArr = [];
        var args = Array.from(arguments); // array of arguments
        for (var i=0; i<arguments.length; i++) {
            innerArr[i] = args[i].shift();          
        }
        newArr.push(innerArr);
        if (args[0].length > 0) {
            zipHelper(args[0],args[1],args[2]);
        }
    }
    
    zipHelper(array1, array2, array3);
    return newArr; 
}

function unzip(array){
//BONUS
// opposite of zip
// unzip([['a', 1, true], ['b', 2, false]]) // ['a', 'b'], [1, 2], [true, false]
       
    var newArr = [];
    
    function unzipHelper(arr){
        var innerArr = [];
        for (var i=0; i<arr.length; i++) {
            innerArr[i] = arr[i].shift();        
        }
        newArr.push(innerArr);
        if (arr[0].length > 0) {
            unzipHelper([arr[0],arr[1]]);
        }
    }
    
    unzipHelper(array);
    return newArr;   

}


function zipObject(arr1,arr2){
	var obj = {};
    var numKeys = arr1.length;
	for (var i = 0; i<numKeys; i++) {
		obj[arr1.shift()] = arr2.shift();
	}
	return obj;
}

function includes(collection, val, from){
// checks if value is in collection
// if collection is a string, it's checked for a substring of value
// otherwise SameValueZero is used for equality comparisons
// if fromIndex is negative, it's used as the offset from the end
// of the collection. It defaults to zero.

	// if fromIndex is not defined, return 0
	if(arguments.length === 2) from = 0;

	// if collection is an array or string, use includes to check if in
	if(typeof collection === "string" || Array.isArray(collection)){
		if(collection.indexOf(val) !== -1 && collection.indexOf(val) >= from) {
			return true;
		};
		return false;
	};
	
	// if collection is an object, search over keys
	if(typeof collection === "object") {
		for (keys in collection) {
			if(collection[keys] === val) return true;
		}
	}

	return false;
}

function sample(arr){
	return arr[Math.floor(Math.random())*arr.length];
}

function flip(func){
	// BONUS
    // creates a function that invokes func with arguments reversed.
    
    oldArgs = func || null;

    return function subtract(a,b,c){

        var args = Array.from(arguments);
        var argsRev = args.reverse();

        if(args === oldArgs.arguments) {
            return a-b-c; 
        }
        
        return func.apply(func, argsRev);
        
    }
}

function cloneDeep(arr){
    var newArr = [];
    for (var i=0; i<arr.length; i++) {
        var newObj = {};
        var value;
        for (key in arr[i]) {
            value = arr[i][key];
            if(typeof value === "object"){
                newObj[key] = cloneDeep(value);
            } else {
                newObj[key] = value;
            }
        }
        newArr.push(newObj);
    }
    return newArr;
}

function sumBy(arr,iteratee){
// like sum, except it accepts iteratee, which is invoked for each 
// element in array to generate the value to be summed.
    
    if(typeof iteratee !== "string") {
        var iterateeArr = [];
        for(var i=0; i<arr.length; i++){
            iterateeArr.push(iteratee(arr[i]));
        } 
        return iterateeArr.reduce(function(acc,next){
            acc += next;
            return acc;
        })
    }
    
	return arr.reduce(function(acc,next){
		if(iteratee in next) {
			acc += next[iteratee];
		}
		return acc;
	},0);
}

function inRange(n,start,end){
// checks if n is between start (defaults to 0) and up to, but not 
// including, end.
	if(arguments.length === 2){
		end = start;
		start = 0;
	}
	var min = Math.min(start,end);
	var max = Math.max(start,end);

	return (n>=min && n<max);
}

function has(obj,path){
// checks if path is a direct property of object
// path is an array ['a','b'] or a string 'a.b'
	if (typeof path === "string") {
		path = path.split(".");
	}
	if(typeof obj === "object"){
        if (path[0] in obj) {
            var oldKey = path.shift();
            has(obj[oldKey],path);
        }
        return true;
	}
    return false;
}

function omit(obj, arrPaths){
// creates an object composed of the own and inherited
// enumerable property paths of object that are not commited.
// Example: var object = { 'a': 1, 'b': '2', 'c': 3 };
// omit(object, ['a', 'c']); returns { 'b': '2' }

    var newObj = {};

    for (keys in obj){
        if(!(arrPaths.includes(keys))){
            newObj[keys] = obj[keys]
        }
    }
    return newObj;
}

function pick(obj, arrPaths){
// opposite of omit - returns an object of the picked object properties

    var newObj = {};

    for (keys in obj){
        if((arrPaths.includes(keys))){
            newObj[keys] = obj[keys]
        }
    }
    return newObj;
}

function pickBy(obj, condition){
// creates an object composed of the object properties predicate 
// returns truthy for. 

    var newObj = {};

    for (keys in obj){
        if(condition(obj[keys])){
            newObj[keys] = obj[keys];
        }
    }
    return newObj;
};

function omitBy(obj, condition){
// opposite of pickBy 

    var newObj = {};

    for (keys in obj){
        if(!(condition(obj[keys]))){
            newObj[keys] = obj[keys];
        }
    }
    return newObj;
};

function padEnd(string,length,characs){
// pads string on the right side if it's shorter than length
// padding chars are truncated if they exceed length
// str defaults to ""
// len defaults to 0
// chars defaults to " "
    
    if(arguments.length === 2) characs = " ";

    if((string.length + characs.length) === length) {
        return string.concat(characs);
    }

    if(string.length + characs.length < length) {
        string = string.concat(characs);
        return padEnd(string,length,characs);
    }

    if(string.length + characs.length > length) {
        return string.concat(characs).split("").slice(0,length).join("");
    }

}

function repeat(str,n){
// takes a string (default = "") and a number n (default = 1)
// repeats the string n times

    if(arguments.length === 0) {
        return "";
    } 
    else if(arguments.length === 1) {
        if(typeof arguments[0] === "string") {
            return arguments[0];
        } else {
            return "";
        }
    }
    if(str.length === 0 || n === 0) return "";

    // base case if n = 1, return str

    if(n===1) return str;
    return str + repeat(str,n-1);
}

function upperFirst(str){
// converts the first char of a string to upper case
// str defaults to ""
    var arr = str.split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
}

function flatten(arr){
// flattens an array once
    for (var i=0; i<arr.length; i++) {
        if(typeof arr[i] === "object"){
            var sliced = arr.slice(i);
            break;
        }
    }
    var newArr = arr.slice(0,i).concat(sliced[0]);

    return newArr;
}

function flattenDeep(arr){
//BONUS
    var newArr = [];

    function flattenDeepHelper(array){
        for (var i=0; i<array.length; i++){
            if(Array.isArray(array[i])) {
                flattenDeepHelper(array[i]);
            } else {
                newArr.push(array[i]);
            }
        }
        return newArr;
    }

    flattenDeepHelper(arr);
    return newArr;
}



