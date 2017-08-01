function replaceWith(entry, replaceChar, withChar) {
	if (entry.indexOf(replaceChar) !== -1) {
		for (var i=0; i < entry.length; i++)
			if (entry[i] === replaceChar)
				 entry = entry.substr(0, i) + withChar + entry.substr(i + 1, entry.length - 1);
	}
	
	return entry;
}

function expand(arr, num) {
	if (num <=0)
		return arr;

	var nArr = [];
	for(var i=0; i < num; i++)
		for(var j=0; j < arr.length; j++)
			nArr.push(arr[j]);

	return nArr;
}

function acceptNumbersOnly(...nums) {
	for(var i=0; i < nums.length; i++) {
		if (isNaN(nums[i]))
			return false;
		else if(typeof nums[i] !== 'number')
			return false;
	}

	return true;
}

function mergeArrays(arr1, arr2) {
	if (arr1.length === 0 && arr2.length === 0)
		return [];

	if(typeof(arr1[0]) === 'number' || typeof(arr2[0]) === 'number')
		return arr1.concat(arr2).sort(function(a,b){return a - b});
	else
		return arr1.concat(arr2).sort();
}

function mergeObjects(obj1, obj2) {
	for (var key in obj2) {
		obj1[key] = obj2[key];
	}
	return obj1;
}
