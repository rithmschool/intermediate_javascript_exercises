function productOfArray(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.splice(1));
}

function collectStrings(obj) {
    var newArray = [];
    function helper(myObj) {
        for (var key in myObj) {
            if (typeof myObj[key] === 'object') {
                helper(myObj[key]);
            }
            else {
                newArray.push(myObj[key]);
            }
        }
    }
    helper(obj);
    return newArray;
}

function contains(obj, src) {
    var isFound = false;
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            isFound = contains(obj[key], src);
        }
        else if (obj[key] === src) {
            return true;
        }
        if (isFound) return true;
    }
    return false;
}
