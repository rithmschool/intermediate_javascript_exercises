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

		if (kArr.length === 0)
			return;

		for (var i=0; i<kArr.length; i++) {
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


function search(arr, num) {
	var idx = -1;
	function helper(a, rId) {
		if (rId === a.length)
			return;

		if(a[rId] === num) {
		    idx = rId;
		}
		else {
		    helper(a, ++rId)
		}
	}
	helper(arr, 0);
	return idx;
}

function binarySearch(arr, num) {

}
