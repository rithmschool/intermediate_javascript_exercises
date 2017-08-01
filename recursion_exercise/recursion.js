function productOfArray(arr) {
	if (arr.length === 1) {
		return arr[0];
	}

	return arr[0] * productOfArray(arr.slice(1));
}

function collectStrings(obj) {
	var nArr = [];
	function helper(a) {
		var kArr = Object.keys(a);
		for (var i=0; i<kArr.length; i++) {
			if (kArr.length === 0)
				return;

			if (typeof a[kArr[i]] === 'object') {
				helper(a[kArr[i]]);
			}
			else
				nArr.push(a[kArr[i]]);
		}
	}
	helper(obj);
	return nArr;
}

function contains(obj, num) {
	var ret = false;
	function helper(a) {
		var kArr = Object.keys(a);
		for (var i=0; i<kArr.length; i++) {
			if (kArr.length === 0)
				return;

			if (typeof a[kArr[i]] === 'object')
				helper(a[kArr[i]]);
			else
				if (a[kArr[i]] === num)
					ret = true;
		}
	}
	helper(obj);
	return ret;
}