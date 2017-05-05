function productOfArray(arr){
	if(arr.length === 1) return arr[0];

	return arr[0] * productOfArray(arr.slice(1));
}

function collectStrings(obj){
	var array = [];

	function helper(obj1){
		for(var prop in obj1){
			if(typeof(obj1[prop]) === 'string'){
				array.push(obj1[prop]);
			} else {
				helper(obj1[prop]);
			}
		}
	}
	helper(obj);
	return array;
}

function contains(obj, key){
	for(var prop in obj){
		if(obj[prop] === key){
			return true;
		} else if(typeof(obj[prop]) === 'object'){
			if( contains(obj[prop], key) === true){
				return true;
			}	
		}
	}
	return false;
}

function search(arr, key){
	var index = 0;
	var found = -1;

	function helper(arr, key){
		if(arr.length === 0){
			return;
		}
		if(arr[0] === key){
			found = 1;
		}
		if(found === -1) index++;
		helper(arr.slice(1), key);
	}

	helper(arr, key);

	if(found === 1){
		return index;
	} else {
		return found;
	}
}


function binarySearch(arr, key, start = 0, end = arr.length -1){
	if(start > end) return -1;
	var mid = Math.floor((start+end)/2);
	if(arr[mid] === key){
		return mid;
	} else if(arr[mid] < key){
		return binarySearch(arr,key, mid+1,end);
	} else if(arr[mid] > key){
		return binarySearch(arr,key, start, mid-1);
	}
}



// function binarySearch(array, key){
// 	var index = 0;
// 	var found = -1;
// 	function helper(arr, key){
// 		if(arr.length === 1){
// 			if(arr[0] === key){
// 				found = 1;
// 			} else{
// 				found = -1;
// 			}
// 		} else {
// 			var mid = Math.floor(arr.length/2);
// 			if(arr[mid] === key){
// 				index += mid;
// 				found = 1;
// 			} else if (arr[mid] < key){
// 				index += mid + 1;
// 				helper(arr.slice(mid+1, arr.length), key);
// 			} else if (arr[mid] > key){
// 				helper(arr.slice(0,mid), key)
// 			}
// 		}
// 	}
// 	helper(array,key);
// 	if(found === 1){
// 		return index;
// 	} else {
// 		return found;
// 	}
// }

function stringifyNumbers(obj){

	var newObj = {};

	function helper(obj){
		for(var prop in obj){
			if(typeof(obj[prop]) === 'string'){
				newObj[prop] = obj[prop];
			} else if (typeof(obj[prop]) === 'boolean'){
				newObj[prop] = obj[prop];
			} else if (typeof(obj[prop]) === 'number'){
				newObj[prop] = obj[prop].toString();
			} else if (Array.isArray(obj[prop])){
				newObj[prop] = obj[prop];
			} else if(typeof(obj[prop]) === 'object'){
				newObj[prop] = stringifyNumbers(obj[prop]);
			}
		}
	}
	helper(obj);
	console.log(newObj);
	return newObj;
}






