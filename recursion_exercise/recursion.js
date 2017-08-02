// - Write a function called `productOfArray` which takes in an array of numbers and returns the product of them all

function productOfArray(arr) {
	if (arr.length === 1) {
		return arr[0];
	}
	return arr[0] * productOfArray(arr.slice(1))
}



// - Write a function called `collectStrings` which accepts an object and returns an array of all the values in the object that have a typeof string

function collectStrings(obj) {
var arr = []
function helper(a){
		for (var key in a){
		if (typeof(a[key]) === "object") {
			helper(a[key])
		} else {
			arr.push(a[key])
		}
	}
}
helper(obj)
return arr;
}



// - Write a function called `contains` that searches for a value in a nested object. It returns true if the object contains that value.

function contains(nestedObject, value) {
	for (var key in nestedObject) {
		if (typeof(nestedObject[key]) === "object") {
			if (contains(nestedObject[key], value)) {
                return true
			    };
		}
		if (nestedObject[key] === value) {
			return true;
		}
	}
	return false
}



// - [https://www.codewars.com/kata/the-real-size-of-a-multi-dimensional-array/train/javascript](https://www.codewars.com/kata/the-real-size-of-a-multi-dimensional-array/train/javascript)
function realSize(arrays) {
var count = 0;
  function helper(a) {
    for (var i =0; i < a.length; i++) {
      if (Array.isArray(a[i]) === true) {
        helper(a[i])
        }else if (Number.isInteger(a[i])) {
        count++;
        }
    }
  }
helper(arrays)
return count;
}



// - [https://www.codewars.com/kata/sum-squares-of-numbers-in-list-that-may-contain-more-lists/train/javascript](https://www.codewars.com/kata/sum-squares-of-numbers-in-list-that-may-contain-more-lists/train/javascript)

function SumSquares(l){
var sum = 0
function helper(a) {
  for (var i = 0; i < a.length; i++) {
      if (Array.isArray(a[i]) === true) {
        helper(a[i])
      } else if (Number.isInteger(a[i])) {
      sum += (a[i] * a[i])
      }
  }  
  }
  helper(l)
    return sum
}


// - [https://www.codewars.com/kata/recursive-replication](https://www.codewars.com/kata/recursive-replication)
function replicate(times, number) {
if (times === 1) {
  return [number];
}
if (times < 1) {
return [];
}
return [number].concat(replicate(times-1, number))
}


// Write a function called search that finds a value in an array and returns the index where the value is at. If the value is not found, the function should return negative 1.
function search(arr,val) {
	var index = 0
	function helper(a,v) {
	for (var i = 0; i < a.length; i++) {
		if (a[i] === v) {
			return i
		}
	}
		return -1;
	}
return helper(arr,val)

}


//Refactor your search function to use a faster algorithm called binary search https://www.youtube.com/watch?v=JQhciTuD3E8.
function binarySearch(arr,val) {
var l = 0;
var	r = arr.length - 1;
var middle = Math.floor((l+r)/2);

	function helper(a,v,l,r) {
	middle = Math.floor((l+r)/2);
		if (l > r) {
			return middle = -1;
		}
		if (a[middle] === v) {
			return middle
		} else if (v > a[middle]) {
			l = middle+1
			helper(a,v,l, r)
		} else {
			r = middle -1
			helper(a,v, l, r)
		}
	}
helper(arr,val,l,r)
return middle
}

// //iterative
// function binary(arr, val) {
// 	var l = 0
// 	var r = arr.length-1
// 	var middle = 0;

// 	while (true) {
// 		if (l > r) {
// 		return -1
// 		}

// 		middle = Math.floor((l+r)/2)
		
// 		if (arr[middle] === val) {
// 			return middle
// 		} else if (val > arr[middle]) {
// 			l = middle +1
// 		} else {
// 			r = middle - 1
// 		}
// 	}
// }




//- Write a function called `stringifyNumbers` which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

function stringifyNumbers(obj) {
	var answer = {}
	for (var key in obj) {
		if (typeof obj[key] === "number") {
			answer[key] = obj[key].toString();
		} else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
			answer[key] = stringifyNumbers(obj[key])
		} else {
			answer[key] = obj[key];
		}
	}
	return answer;
}



