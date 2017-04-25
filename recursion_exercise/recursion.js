/*
Write a function called productOfArray which takes in an array 
of numbers and returns the product of them all
*/
function productOfArray(arr){
	if (arr.length === 1){
		return arr.pop();
	}
	var lastEl = arr.pop();
	return lastEl * productOfArray(arr);
}

/*
Write a function called `collectStrings` which accepts an object and 
returns an array of all the values in the object that have a typeof string
*/
function collectStrings(obj){
	var arrayStrings = [];
	for (var key in obj){
		if (typeof(obj[key]) === 'string'){
			arrayStrings.push(obj[key]);
		}
		else {
			if (typeof(obj[key] === 'object')){
				arrayStrings = arrayStrings.concat(collectStrings(obj[key]));
			}
		}
	}
	return arrayStrings;
}

/*
Write a function called contains that searches for a value in a nested 
object. It returns true if the object contains that value.
*/
function contains(obj, searchVal){
	for (var key in obj){
		if (typeof(obj[key]) === 'object'){
			if (contains(obj[key],searchVal)){
				return true;
			}
		}
		else {
			if (obj[key] === searchVal){
				return true;
			}
		}
	}
	return false;
}

/*CodeWars account name: juliahazer */
/**************CodeWars Problems****************/

/*https://www.codewars.com/kata/the-real-size-of-a-multi-dimensional-array/train/javascript*/
function realSize(arrays) {
	var count = 0;
	for (var i = 0; i < arrays.length; i++){
		if (Array.isArray(arrays[i])){
			count += realSize(arrays[i]);
		}
		else if (typeof arrays[i] === 'number'){
			count++;
		}
	}
	return count;
}

/*https://www.codewars.com/kata/sum-squares-of-numbers-in-list-that-may-contain-more-lists/train/javascript*/
function SumSquares(l){
	var sum = 0;
	for (var i = 0; i < l.length; i++){
		if (Array.isArray(l[i])){
			sum += SumSquares(l[i]);
		}
		else {
			sum += l[i] * l[i];
		}
	}
	return sum;
}

/*https://www.codewars.com/kata/recursive-replication*/
function replicate(times,number){
	var arr = [];

	if (times < 0){
		return arr;
	}

	function replicateHelper(times){
		if (times === 0) return;
		arr.push(number);
		return replicateHelper(times-1);
	}

	replicateHelper(times);

	return arr;
}

/****************************BONUS QUESTIONS***********************/

/*
Write a function called search that finds a value in an array and 
returns the index where the value is at. If the value is not found, 
the function should return negative 1.
*/
function search(arr, searchVal){
	var index = 0 ;

	function searchHelper(){
		if (arr.length === 0){
			index = -1;
		}
		else if (arr[0] !== searchVal){
			arr.shift();
			index++;
			searchHelper(arr,searchVal);
		}
	}

	searchHelper();
	return index;

	//return arr.indexOf(searchVal);
}