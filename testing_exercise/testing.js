

function replaceWith(stringArr, target, replacement){
	var newString = "";

	for (var i = 0; i < stringArr.length; i++){
		
		if ( stringArr[i] === target ){
			newString += replacement;
			stringArr[i] = replacement;
		} else {
			newString += stringArr[i];
		}
	}

	return newString;
}

function expand(arr, times){
	var  newArr = [];

	for (var i = 0; i < times; i++){
		for (var j = 0; j < arr.length; j++){
			newArr.push(arr[j]);
		}
	}

	console.log(newArr);
	return newArr;
}

function acceptsOnlyNumbers(){
	for (var i = 0; i < arguments.length; i++){
		if (typeof arguments[i] !== 'number' || isNaN(arguments[i])){
			return false;
		}
	}
	return true;
}

function mergeArrays(arr1, arr2){
    arr1 = arr1.concat(arr2);
    return arr1.sort();
}

function mergeObjects(obj1, obj2){
	var returnObj = obj1;
	var keys = Object.keys(obj2);
	for (var i = 0; i < keys.length; i++){
		returnObj[keys[i]] = obj2[keys[i]];
	}
	return returnObj;

}



