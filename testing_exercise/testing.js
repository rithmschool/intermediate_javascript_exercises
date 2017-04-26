/* 
Write a function called replaceWith that takes in a string, a character to replace and a character to replace it with and returns the string with the replacements. Write tests to make sure this is case sensitive

replaceWith("awesome", "e", "z") // "awzsomz"
replaceWith("Foo", "F", "B") // "Boo"
*/

function replaceWith(str, char1, char2) {
	if (typeof str !== "string" || typeof char1 !== "string" || typeof char2 !== "string") {
		return "";
	} else {
		var splitStr = str.split("");
		for (var i = 0; i < splitStr.length; i++) {
			if (char1 === char1.toUpperCase()) {
				if(splitStr[i] === char1) {
					splitStr[i] = char2;			
				}
			} else if (char1 === char1.toLowerCase()) {
				if(splitStr[i] === char1) {
					splitStr[i] = char2;
				}
			}
		}
		str = splitStr.join("");
		return str;
	}
}

/* 
Write a function called expand which takes an array and a number and returns a copy of the array with as many numbers as specified

expand([1,2,3],3) //[1,2,3,1,2,3,1,2,3]
expand(["foo", "test"],1) //["foo","test"]
*/

function expand(arr, num) {
	var newArr = [];
	if (num <= 0 || typeof num !== "number") {
		return [];
	} else {
		for (var i = 0; i < num; i++) {
			for (var j = 0; j < arr.length; j++) {
				newArr.push(arr[j]);
			}
		}
	}
	return newArr;
}

 
/*
 Write a function called acceptNumbersOnly which takes in any number of arguments and returns true if all of them are numbers. Watch out for NaN - it is a typeof "number"!

// acceptNumbersOnly(1,"foo") // false
// acceptNumbersOnly(1,2,3,4,5,6,7) // true
// acceptNumbersOnly(1,2,3,4,5,6,NaN) // false
*/

function acceptNumbersOnly() {
	for (var i = 0; i < arguments.length; i++) {
		if (isNaN(arguments[i])) {
			return false;
		} else if (typeof arguments[i] !== "number") {
			return false;
		}
	}
	return true;
}

// /* 
// Write a function called mergeArrays which takes in two arrays and returns one array with the values sorted

// mergeArrays([2,1],[3,4]) // [1,2,3,4]
// 

function mergeArrays(arr1, arr2) {
	if (!(typeof arr1.isArray) || !(typeof arr2.isArray)) {
		return [];
	} else {
		for (var i = 0; i < arr2.length; i++) {
			arr1.push(arr2[i]);
		}
		return arr1.sort();
	}
}

/* 
Write a function called mergeObjects which takes in two objects and return an object with the keys and values combined. If the second parameter has the same key - it should override first one. There is a built in function called Object.assign - research it, but do not use it, try to do this on your own!

var obj1= {
    name: "Foo",
    num: 33
}

var obj2 = {
    test: "thing",
    num: 55
}

mergeObjects(obj1, obj2) 

>>
{
    name: "Foo",
    test: "thing",
    num: 55
}
*/

function mergeObjects(obj1, obj2) {
	if (!(typeof obj1 === "object") || !(typeof obj2 === "object")) {
		return {};
	} else {
		var newObj = {};
		for (var key in obj1) {
			// add key to obj1 if doesn't exist, otherwise update w/ obj2's value
			key = obj2[key];
		}
		// for (var key in obj2) {
		// 	obj1[key] = obj2[key];
		// }
		return newObj;
	}
}













