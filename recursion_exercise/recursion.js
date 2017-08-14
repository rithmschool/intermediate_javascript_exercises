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

// contains with helper recursion
// function contains(obj, num) {
// 	var ret = false;
// 	function helper(a) {
// 		var kArr = Object.keys(a);

// 		if (kArr.length === 0)
// 			return;

// 		for (var i=0; i<kArr.length; i++) {
// 			if (typeof a[kArr[i]] === 'object')
// 				helper(a[kArr[i]]);
// 			else
// 				if (a[kArr[i]] === num)
// 					ret = true;
// 		}
// 	}
// 	helper(obj);
// 	return ret;
// }

// contains with simple recursion
function contains(obj, num) {
	var kArr = Object.keys(obj);

	for (var i=0; i<kArr.length; i++) {
	    if (typeof obj[kArr[i]] === 'object') {
	        if (contains(obj[kArr[i]], num) === true)
	            return true;
	    }
	    else
	        if (obj[kArr[i]] === num)
	            return true;
	}
	return false;
}

// code war problems:
// 1) real size
function realSize(arrays) {
	var nArr = [];
	function helper(a) {
		for(var i=0; i < a.length; i++) {
			if(a[i] instanceof Array)
				helper(a[i]);
			else
				nArr.push(a[i]);
		}
	}
	helper(arrays);
    return nArr.length;
}

// 2) with helper recursion
function SumSquares(l){
    var total = 0;
    function helper(a) {
        for(var i=0; i < a.length; i++) {
            if (a[i] instanceof Array)
                helper(a[i]);
            else
                total += a[i] * a[i];
        }

    }
    helper(l);
    return total;
}

// 2) with simple recursion 
function SumSquares(l){
    var total = 0;
    for(var i=0; i < l.length; i++) {
    	if (l[i] instanceof Array)
    		total += SumSquares(l[i]);
    	else
    		total += l[i] * l[i];
    }
    return total;
}

// 3) replicate with helper method recursion
function replicate(times, number) {
    var nArr = [];
    function helper(times, number) {
        if(times <= 0)
            return;
        
        nArr.push(number);
        helper(--times, number);

    }
    helper(times, number)
    return nArr;
}

// 3) replicate with simple recursion
function replicate(times, number) {
	var arr = [];
	if (times <= 0) return arr;
	arr = replicate(times - 1, number);
    arr.push(number);
    return arr;
}


function search(arr, num) {
	var idx = -1;
	function helper(a, rId) {
		if (rId === a.length)
			return;

		if(a[rId] === num)
		    idx = rId;
		else
		    helper(a, ++rId);
	}
	helper(arr, 0);
	return idx;
}

// search using simple recursion


function binarySearch(arr, num) {
	var idx = -1;
	var minIndex = 0;
	var maxIndex = arr.length -1;
	function helper(a) {
		var mid = Math.floor(maxIndex - minIndex / 2);

		if(a[mid] > num) {
		    maxIndex = mid - 1;
		    helper(a);
		}
		else if (a[mid] < num) {
		    minIndex = mid + 1;
		    helper(a);
		}
		else {
		    return mid;
		}
	}
	idx = helper(arr);
	return idx;
}

// simple recursion
function stringifyNumbers(obj) {
	var nObj = {};
	var kArr = Object.keys(obj);

	if (kArr.length === 0)
		return obj;

	for (var i=0; i<kArr.length; i++) {
	    if (typeof obj[kArr[i]] === 'object') {
	    	nObj[kArr[i]] = stringifyNumbers(obj[kArr[i]]);
	    }
	    else
	        if (typeof obj[kArr[i]] == 'number')
	        	nObj[kArr[i]] = obj[kArr[i]] + "";
	        else
	        	nObj[kArr[i]] = obj[kArr[i]];
	}
	return nObj;
}
