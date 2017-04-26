function productOfArray(arr) {
    if(arr.length === 1) return arr[0];
    var arrZero = arr[0];
    arr.shift();
    return arrZero * productOfArray(arr);
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

function binarySearch(array, value) {
    // assume array is already sorted (as in the test cases)

    var counter = 0;

    function helper5(arr,val) {
        var middlePosition = Math.floor(arr.length / 2); // 2
        var middle = arr[middlePosition];
        
        if(arr.length === 0){
            counter = -1;
        } 

        if(middle === val) {
            counter += middlePosition;
        }
    
        if(middle < val){ 
            counter += middlePosition + 1;
            helper5(arr.slice(middlePosition+1),val);
        }

        if(middle > val){ 
            helper5(arr.slice(0,middlePosition),val);
        }
    }

    helper5(array,value);
    return counter;
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
