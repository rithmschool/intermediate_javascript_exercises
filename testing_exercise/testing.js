function replaceWith(str, character, replace){
	var strArr = str.split("");
	for (var i = 0; i < strArr.length; i++) {
		if (strArr[i] === character) {
			strArr[i] = replace;
		}
	}
	return strArr.join("");
}


function expand(arr, num) {
	var output = [];
	for (var i = 1; i <= num; i++) {
		for (var j = 0; j< arr.length; j++){
		output.push(arr[j]);
		}
	}
	return output
}


function acceptNumbersOnly(){
	for (var i = 0; i < arguments.length; i++){
		if (typeof arguments[i] !== "number" || arguments[i] % 1 !== 0) {
			return false;
		}
	}
	return true;
}


function mergeArrays(arr1,arr2) {
	return arr1.concat(arr2).sort()
}

function mergeObjects(obj1, obj2) {
	var joined = {};
	for (var key in obj1) {
		joined[key] = obj1[key];
	}
	for (var keys in obj2) {
		if (joined[keys]) {
			delete joined[keys];
		}
		joined[keys] = obj2[keys];
	}
	return joined;
}

