//replaceWith
function replaceWith(string, letter1, letter2) {
	var replacedString = "";
	for (var i = 0; i < string.length; i++) {
		if (string[i] === letter1) {
			replacedString = replacedString + letter2;
		} else {
			replacedString = replacedString + string[i];
		}
	}
	return replacedString;
}

//expand

function expand(array, num) {
	var newArray = [];
	for (var i = 0; i < num; i++) {
		newArray = newArray.concat(array);
	}
	return newArray;
}

//acceptsNumbersOnly

function acceptNumbersOnly() {
	return [].every.call(arguments, function(value) {
		return typeof(value) === "number" && !(isNaN(value));
	})
}

//mergeArrays

function mergeArrays(arr1,arr2) {
	return arr1.concat(arr2).sort(function(a,b) { return a - b});
}

//mergeObjects

function mergeObjects(obj1,obj2) {
	var holderObject = {};
	for (var prop1 in obj1) {
		holderObject[prop1] = obj1[prop1];
	}
	for (var prop2 in obj2) {
		holderObject[prop2] = obj2[prop2];
	}
	return holderObject;
}