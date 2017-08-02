function productOfArray(arr) {
	// base case: if arr length === 0, return 1
	// return product of all
	if (arr.length === 0) return 1;

	return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3])); // 6
console.log(productOfArray([1,2,3,10])) // 60

function collectStrings(obj) {
	var newArr = [];
	// base case: The loop iteration ends!
	// Loop through all keys
	// Search each key of object
		// Is value of type string? If so, add to array
		// If type is objects, recurse!
		// If type is neither, keep looking.
	// Return new array
	for (var key in obj) {
		if (typeof obj[key] === 'string') {
			newArr = newArr.concat(obj[key]);
		} else if (typeof obj[key] === 'object' && Array.isArray(obj[key]) === false) {
			newArr = newArr.concat(collectStrings(obj[key]));
		}
	}

	return newArr;
}

var obj = {
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

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])

function contains(nestedObject, val) {
	// base case: The loop iteration ends!
	// Loop through all keys
	// Search each key in the object
		// If the value matches they element value, return true
		// If not keep looking
	// If never found, return false
	var found = false;
	for (var key in nestedObject) {
    	if (typeof nestedObject[key] === 'object' && Array.isArray(nestedObject[key]) !== true) {
		  found = contains(nestedObject[key], val);
		} else if (nestedObject[key] === val) {
		  found = true;
		}
		if (found) return true;
	}
	return found || false;
}

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
    },
    stuff2: {
    	info: {
    		foo: "foo"
    	}
    }
}

//console.log(contains(nestedObject, 44)); // true
console.log(contains(nestedObject, "foo")); // false

function search(arr, val) {
	var count = 0;

	if (arr.length === 0) return -1;

	if (arr[0] === val) {
		return 0;
	}

	count += search(arr.slice(1), val);

	if (count === -1) return -1;

	return count + 1;
}
// Try thinking of it as a count. You increase the count until you find the thing then return!

// base case: if the value is never found
// create an index variable
// traverse the array
//  if not found, return -1
//  if found, return index

console.log(search([1,2,3,4,5],5)); // 4
console.log(search([1,2,3,4,5],15)); // -1

// This may only be called on a sorted array.
// This also might be the ugliest code I've ever written. Yikes dat base case section...
function binarySearch(arr, val) {
	var foundIndex = 0;

	function helpSearch(arr, val) {
		var searchIndex = Math.floor(arr.length / 2);
		if (arr.length === 1) {
			if (arr[0] !== val) {
				foundIndex = -1;
				return;
			} else {
				return;
			}
		} else if (arr.length === 0) {
			foundIndex = -1;
			return;
		}

		if (val > arr[searchIndex]) {
			foundIndex += searchIndex + 1;
			helpSearch(arr.slice(searchIndex + 1), val);
		} else if (val < arr[searchIndex]) {
			foundIndex -= searchIndex - 1;
			helpSearch(arr.slice(0, searchIndex), val);
		} else if (val === arr[searchIndex]) {
			foundIndex+=searchIndex;
			return;
		}

	}

	helpSearch(arr, val);

	return foundIndex;
}

// base case: if the value is never found, return -1
// Helper Function
	// foundIndex should be set to offsets combined
console.log(binarySearch([1],5)); // -1
console.log(binarySearch([1,2,3,4,5],5)); // 4
console.log(binarySearch([1,2,3,4,5],15)); // -1



function stringifyNumbers(obj) {
	var newObj = {};

	for (var key in obj) {
		if (typeof obj[key] === 'number') {
			newObj[key] = obj[key].toString();
		} else if (typeof obj[key] === 'object' && Array.isArray(obj[key]) === false) {
			newObj[key] = stringifyNumbers(obj[key]);
		} else {
			newObj[key] = obj[key];
		}
	}

	return newObj;
}

// Store data in a new object
// No need for Helper
// Base Case: when the for loop ends!
// Examine each key's type
	// If the type is object, set the element to the result of recurse!
	// If not, add the key,value pair to the object and move on
		// Of course, if it's a number, stringify that crap!
	// Return the new object!

var obj1 = {
      num: 1,
      test: [],
      data: {
        val: 4,
        info: {
          isRight: true,
          random: 66,
          nested: {
            inner: {
              nestedInner: {
                another: {
                  num: 10
                }
              }
            }
          }
        }
      }
    }
console.log(JSON.stringify(stringifyNumbers(obj1)));
/*/
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
/*/









