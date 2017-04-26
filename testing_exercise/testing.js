function replaceWith(str, charOut, charIn) {
	var newArr = str.split("");
	for(var i = 0; i<str.length; i++) {
		if(str[i] === charOut) {
			newArr[i] = charIn;
		}
	}
	return newArr.join("");
}

function expand(arr,num) {
	var newArr = [];
	for(var i = 0; i<Math.floor(num); i++) {
		newArr = newArr.concat(arr);
	}
	return newArr;
}

function acceptNumbersOnly() {
	if(arguments.length === 0){
		return false;
	}
	for(var i = 0; i<arguments.length; i++) {
		if(typeof arguments[i] !== "number" || isNaN(arguments[i])) {
			return false;
		}
	}
	return true;
}

function mergeArrays(arr1,arr2) {
	var mergeArr = arr1.concat(arr2).sort();
	return mergeArr;
}

function mergeObjects(obj1, obj2) {
	var mergeObj = obj1;
	for (var key in obj2) {
		mergeObj[key] = obj2[key];
	}
	return mergeObj;
}