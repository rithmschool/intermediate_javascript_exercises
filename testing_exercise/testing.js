function replaceWith(str, char1, char2){
	return str.replace(char1, char2);
}

function expand(array, num){
	var newArray = [];
	for(var i = 0; i < num; i++){
		newArray = newArray.concat(array);
	}
	return newArray;
}


function acceptsNumbersOnly(){
	for(var i = 0; i < arguments.length; i++){
		if(isNaN(arguments[i])){
			return false;
		}
	}return true;
}

function mergeArrays(arr1, arr2){
	return arr1.concat(arr2).sort();
}

function mergeObjects(obj1, obj2){
	var obj3 = {};
	for(var key in obj1){
		obj3[key] = obj1[key];
	}
	for(var key in obj2){
		obj3[key] = obj2[key];
	}
	return obj3;
}