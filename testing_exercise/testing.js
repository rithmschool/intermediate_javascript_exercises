function replaceWith(string, replaces, replacedWith){
	var letterArr = string.split("");
	for(var i = 0; i < letterArr.length; i++){
		if(letterArr[i] === replaces){
			letterArr[i] = replacedWith;
		}
	}
	return letterArr.join("")
}


function expand(arr, num){
	var newArr = [];
	for(var i = 1; i <= num; i++){
		for(var j = 0; j < arr.length; j++){
			newArr.push(arr[j]);
		}
	}
	return newArr;
}

function acceptNumbersOnly(){
	var args = arguments;
	for(var i = 0; i < args.length; i++)
		if(isNaN(args[i]) === true) {
			return false;
		} 
		return true;
}

function mergeArrays(arr1,arr2){
	return arr1.concat(arr2).sort()
}

function mergeObjects(object1, object2){
	var object3 = {};
    for (var key in object1) { object3[key] = object1[key]; }
    for (var key in object2) { object3[key] = object2[key]; }
    return object3;
}