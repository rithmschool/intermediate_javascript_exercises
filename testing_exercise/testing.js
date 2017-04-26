function replaceWith(str, char1, char2) {
    return str.split('').map(function (el) {
        if (el === char1) {
            return char2;
        }
        return el;
    }).join('');
}

function expand(arr, num) {
    num = Math.floor(num);
    if (num <= 0) {
        return [];
    }
    var newArr = [];
    if (num === 1) {
        for (var i = 0; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
        return newArr;
    }
    for (var i = 0; i < arr.length * num; i++) {
        var j = i % num;
        newArr.push(arr[j]);
    }
    return newArr;
}

function acceptNumbersOnly() {
    var args = Array.prototype.slice.call(arguments);
    if (args.length < 1) {
        return false;
    }
    return args.every(function (el) {
        if (typeof el !== "number" || Number.isNaN(el)) {
            return false;
        }
        return true;
    });
}

function mergeArrays(arr1, arr2){
    return (arr1.concat(arr2)).sort(function(a, b){
        return a - b; // ascending order
    });
}

function mergeObjects(object1, object2){
    var newObj = {};
    for (var key in object1){
        newObj[key] = object1[key];
    }
    for (var key in object2){
        newObj[key] = object2[key];
    }
    return newObj;
}