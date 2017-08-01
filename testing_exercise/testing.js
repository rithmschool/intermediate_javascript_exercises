function replaceWith(str, charToFind, charReplacement) {
  	var find = charToFind;
  	var re = new RegExp(find, 'g');
  	return str.replace(re, charReplacement)
}


function expand(arr, num) {
	var finalArr = [];
	for (var i = 0; i < num; i++) {
		finalArr = finalArr.concat(arr);
	}
	return finalArr;
}

function acceptNumbersOnly() {
	for(var i = 0; i < arguments.length; i++) {
		if(typeof arguments[i] !== 'number' || isNaN(arguments[i])) {
			return false;
		}
	}
	return true;
}

function mergeArrays(arr1, arr2) {
	var singleArr = arr1.concat(arr2);
	var finalArr = singleArr.sort();
	return finalArr;
}

function mergeObjects(obj1, obj2) {
	var finalObj = obj1;
	for(var n in obj2) {
		finalObj[n] = obj2[n];
	}
	return finalObj
}


