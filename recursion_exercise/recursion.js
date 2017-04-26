function productOfArray(arr) {
    // // base case
    // if (arr.length === 0) return 1;
    // // smaller invocation
    // return arr[0] * productOfArray(arr.slice(1));
    return arr.length === 0 ? 1 : arr[0] * productOfArray(arr.slice(1));
}

function collectStrings(obj) {
    var arr = [];

    function collectStringsHelper(o) {
        for (var key in o) {
            if (typeof o[key] === "string") { // base case
                arr.push(o[key]);
            } else { // smaller invocation
                collectStringsHelper(o[key]);
            }
        }
    }
    collectStringsHelper(obj);
    return arr;
}

function contains(obj, val) {
    var flag = false;
    function helperContains(o) {
        for (var key in o) {
            // base case
            if (o[key] === val) {
                flag = true;
            }
            // smaller invocation
            if (typeof o[key] === "object") {
                helperContains(o[key]);
            }
        }
    }
    helperContains(obj);
    return flag;
}

// contains()- can it be done without a helper function? - try it later!

/* CODEWARS PROBLEMS */
//https://www.codewars.com/kata/the-real-size-of-a-multi-dimensional-array/train/javascript
function realSize(arrays) {
    var count = 0;

    function realSizeHelper(arr) {
        if (arr.length === 0) return; // base case
        if (!Array.isArray(arr[0])) { // not an array -> a number
            count++;
        } else {
            realSizeHelper(arr[0]); // it's an array -> recurse
        }
        realSizeHelper(arr.slice(1)); // recurse for next values in array
    }
    realSizeHelper(arrays);
    return count;
}

//https://www.codewars.com/kata/sum-squares-of-numbers-in-list-that-may-contain-more-lists/train/javascript
function SumSquares(l) {
    var squared = 0;

    function sumSquaresHelper(arr) {
        if (arr.length === 0) return; // base case
        if (!Array.isArray(arr[0])) { // not an array -> a number
            squared += arr[0] * arr[0];
        } else {
            sumSquaresHelper(arr[0]); // it's an array -> recurse
        }
        sumSquaresHelper(arr.slice(1)); // recurse for next values in array
    }
    sumSquaresHelper(l);
    return squared;
}

//https://www.codewars.com/kata/recursive-replication
function replicate(times, number) {
    var newArr = [];

    function replicateHelper(t, n) {
        // base case
        if (t < 1) return;
        // smaller invocation
        newArr.push(n);
        return replicateHelper(t - 1, n);
    }
    replicateHelper(times, number);
    return newArr;
}

/* BONUS */
function search(arr, val) { 
    var index = 0;

    function searchHelper(a, v) {
        // base case
        if (a.length === 0) return -1;

        if (a[0] === v) {
            return index;
        }

        index++; // next value
        // smaller invocation
        return searchHelper(a.slice(1), v);
    }
    return searchHelper(arr, val);
}

// search()- can it be done without a helper function? - try it later!

// binary search

// stringify numbers

// codewars problem