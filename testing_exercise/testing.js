/*
Write a function called replaceWith that takes in a string, 
a character to replace and a character to replace it with and 
returns the string with the replacements. Write tests to make 
sure this is case sensitive
*/
function replaceWith(word, findLetter, replaceLetter){
	if (typeof(word) !== 'string'){
		return "This needs a string";
	}
	var replacedWord = '';
	for (var i = 0; i < word.length; i++){
		if (word[i] === findLetter){
			replacedWord += replaceLetter;
		}
		else {
			replacedWord += word[i]
		}
	}
	return replacedWord;
}

/*
Write a function called expand which takes an array and a 
number and returns a copy of the array with as many numbers 
as specified
*/
function expand(arr, numCopies){
	var newArr = [];
	if (!Array.isArray(arr)){
		return "The first argument needs to be an array";
	}
	for (var i = 1; i <= numCopies; i++){
		newArr = newArr.concat(arr);
	}
	return newArr;
}

/*
Write a function called acceptNumbersOnly which takes in any 
number of arguments and returns true if all of them are numbers. 
Watch out for NaN - it is a typeof "number"!
*/
function acceptNumbersOnly(){
	for (var i = 0; i < arguments.length; i++){
		if (typeof(arguments[i]) !== 'number' ||
			isNaN(arguments[i])){
			return false;
		}
	}
	return true;
}

/*
Write a function called mergeArrays which takes in two arrays 
and returns one array with the values sorted
*/
function mergeArrays(arr1, arr2){
	return arr1.concat(arr2).sort();
}

/*
Write a function called mergeObjects which takes in two objects 
and return an object with the keys and values combined. If the second 
parameter has the same key - it should override first one. There is a 
built in function called Object.assign - research it, but do not use it, 
try to do this on your own!
*/
function mergeObjects(obj1, obj2){
	var mergeObj = {};
	for (var prop in obj1){
		mergeObj[prop] = obj1[prop];
	}
	for (var prop in obj2){
		mergeObj[prop] = obj2[prop];
	}
	return mergeObj;
	//return Object.assign({}, obj1, obj2);
}