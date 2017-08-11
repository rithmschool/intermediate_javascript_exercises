//Write a function called productOfArray which takes in an array of numbers and returns the product of them all
//productOfArray([1,2,3]) // 6
//productOfArray([1,2,3,10]) // 60
function productOfArray(arr) {
    //returns all elements multiplied
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1)); 
    //destructive
    //return arr.shift() * productOfArray(arr[])
}
//Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string



function collectStrings(obj) {
	var stringKeys = [];
	for (var key in obj) {
		if(typeof obj[key] === 'string'){
			stringKeys.push(obj[key]);
		}
		if (typeof obj[key] === "object") {
			stringKeys = stringKeys.concat(collectStrings(obj[key]));
		}
	}
	return stringKeys;
}
	
//Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44
                    }
                }
            }
        }
    }
}
//contains(nestedObject, 44) // true
//contains(nestedObject, "foo") // false
function contains(obj, value) {
	return collectStrings(obj).indexOf(value) !== -1;
}




