function productOfArray(arr) {
    if(arr.length === 1) return arr[0];
    var arrZero = arr[0];
    var arrCopy = arr.slice();
    arrCopy.shift();
    return arrZero * productOfArray(arrCopy);
}

function collectStrings(obj) {
    var array = [];
    function helper(object) {
        for (var key in object) {
            if(typeof object[key] === "object") {
                helper(object[key]);
            }

            else if(typeof object[key] === "string") {
                array.push(object[key]);
            }
        }
    } 
    helper(obj);
    return array;
}

function contains(obj, val) {

    var result = false;

    function helper2(object, value) {
        for (var key in object) {
            if(object[key] === value) {
                result = true;
            }
            if(typeof object[key] === "object") {
                helper2(object[key], value);
            } 
        }
    }
    helper2(obj,val);

    return result;
}

function search(array,value){
    // finds a value in an array and returns the index where the value is at
    // if the value is not found, it returns -1
    var counter = 0;
    function helper4(arr,val){
        if(arr.length === 0) {
            counter = -1;
        }
        else if (arr[0] !== val) {
            counter ++;
            helper4(arr.slice(1),val);
        }
    }
    helper4(array,value);
    return counter;
}

function binarySearch(arr, val, start, end) {
    // assume array is already sorted (as in the test cases)

    var start = start || 0;
    var end = end || arr.length-1;

    var middlePosition = Math.floor(arr.length / 2); // 2
    var middleValue = arr[middlePosition];

    if(arr.length === 0){
        return -1;
    } 

    if(middleValue === val) {
        return start + middlePosition;
    }

    if(val > middleValue){ 
        start += middlePosition + 1;
        return binarySearch(arr.slice(middlePosition+1),val,start,end);
    }

    if(val < middleValue){
        end -= middlePosition - 1; 
        return binarySearch(arr.slice(0,middlePosition),val,start,end);
    }
}


function stringifyNumbers(object) {
    
    // first copy the object
    var newObj = {};
    var value;
    for (key in object) {
        value = object[key];
        if(typeof value === "object" && Array.isArray(value) === false){
            newObj[key] = stringifyNumbers(value);
        } else {
            newObj[key] = value;
        }
    }

    // now replace number values with strings
    for (var key in newObj) {
        if(typeof newObj[key] === "object") {
            stringifyNumbers(newObj[key]);
        } 
        else if(typeof newObj[key] === "number") {
            newObj[key] = newObj[key].toString();
        }
    }
    return newObj;
}
