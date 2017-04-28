function replaceWith(string, char1, char2){
	var newString = '';
	for(var i = 0; i < string.length; i++){
		if(string[i] === char1){
			newString += char2;
		} else {
			newString += string[i];
		}
	}
	return newString;
}

function expand(arr, num){
	var copyArr = arr;
	if(num < 1) return [];
	if(num === 1){
		return arr;
	}
	for(var i = 0; i < num - 1; i++){
		arr = arr.concat(copyArr);
	}
	return arr;
}

function acceptNumbersOnly(){
	// var total = 0;
	// for(var i = 0; i < arguments.length; i++){
	// 	if(typeof(arguments[i]) !== 'number'){
	// 		return false;
	// 	}
	// 	if(isNaN(arguments[i])){
	// 		return false;
	// 	}
	// }
	// return true;
	return [].every.call(arguments, function(val){
		return Number.isFinite(val);
	});
}

function mergeArrays(arr1, arr2){
	arr1 = arr1.concat(arr2);
	arr1.sort();
	return arr1;
}

function mergeObjects(obj1, obj2){
	var obj3 = {};
	for (var prop in obj1){
		obj3[prop] = obj1[prop];
	}
	for (var prop in obj2){
		obj3[prop] = obj2[prop];
	}
	return obj3;
}