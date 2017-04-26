function replaceWith(string, ltrOld, ltrNew) {
	var newString = "";
	for(var i=0; i<string.length; i++) {
		if(string[i]==ltrOld) {
			newString += ltrNew;
		} else {
			newString += string[i];
		}
	};
	if(newString === "") {
		return string;
	};
	return newString;
}

//

function expand(arr, num) {
	var newArr = [];
	for(var i=0; i < arr.length*num; i++) {
		newArr.push(arr[i % arr.length]);
	}
	return newArr;
}

//

function acceptNumbersOnly(args) {
	for(var i=0; i<arguments.length; i++) {
		if(isNaN(arguments[i]))
			return false;
	}
	return true;
}

//

function mergeArrays(arr1, arr2) {
	if(arr2 == undefined || arr2 == [])
		return arr1;
	if(typeof arr1 != 'object' || typeof arr2 != 'object')
		return undefined;
	for(var i=0; i<arr2.length; i++) {
		arr1.push(arr2[i])
	}
	return arr1.sort(function(a, b) {
		return a - b;
		});
}

//

function mergeObjects(obj1, obj2) {
	for(var key in obj2) {
		obj1[key] = obj2[key]
	}
	return obj1;
}




