
function productOfArray(arr){
	if (arr.length === 2) return arr[0] * arr[1];
	return arr[0] * productOfArray(arr.slice(1));
}

function collectStrings(obj){

	var stringsArr = [];
	//base case: all nodes in the object are checked and put onto an array? let's see.
	// iterate through object.
	// if value is a string, pop onto array?
	// if value is an array or object, recurse.
		function strHelp(obj){
			var keys = Object.keys(obj);

			if (keys.length === 0) return;

			for (var i = 0; i < keys.length; i++){
				if (typeof obj[keys[i]] === 'string'){
					stringsArr.push(obj[keys[i]]);
				}
				if (typeof obj[keys[i]] === 'object'){
					strHelp(obj[keys[i]]);
				}
			}
		}

	strHelp(obj);
	return stringsArr;
}

function contains(obj, target){

	var successFlag = false;

	function containHelp(obj){

		var keys = Object.keys(obj);

		for (var i =0; i<keys.length; i++){
			if (typeof obj[keys[i]] !== 'object'){
				//look compare value
				// if value is what we're looking for, return true.
				if ( obj[keys[i]] === target){
					successFlag = true;
				} 
			} else{
				containHelp(obj[keys[i]]);
			}
		}
	}

	containHelp(obj);
	return successFlag;

}

function search(arr, val){
	var myArr = arr;
	foundFlag = -1;

	function searchHelp(arr){
		if (arr[arr.length-1] === val){
			foundFlag = arr.length-1;
		} else {
			if (arr.length > 1){
				arr.pop()
				searchHelp(arr);
			}
		}
	}

	searchHelp(myArr);
	return foundFlag;

}

function binarySearch(arr,val){
	console.log(arr);
	//var myArr = arr.sort();
	var indexOffset = 0;
	var foundFlag = -1;

	function searchHelp(arr){
		// determine middlepoint of arr.length
		var middlepoint = Math.floor(arr.length/2);

		if (arr[middlepoint] === val){
			foundFlag = middlepoint + indexOffset;
			return;
		} 

		if (arr[middlepoint] < val && arr.length > 2){
			indexOffset += middlepoint;
			searchHelp(arr.slice(middlepoint));
		}

		if (arr[middlepoint] > val){
			searchHelp(arr.slice(0,middlepoint));
		}
	}

	searchHelp(arr);
	return foundFlag;
}

search([1,2,3,4,5],5) // 4
search([1,2,3,4,5],15) // -1








