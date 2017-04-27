function drop(arr, num) {
    if (num === undefined) { // or arguments[1] <-> num
        return arr.slice(1);
    }
    num = num || 0;
    return arr.slice(num);
}

function fromPairs(arr) {
    var obj = {};
    arr.forEach(function (el) {
        obj[el[0]] = el[1];
    });
    return obj;
}

function head(arr) {
    if (arr === []) return undefined;
    return arr[0];
}

function take(arr, num) {
    if (num === undefined) {
        return arr.slice(0, 1);
    }
    return arr.slice(0, num);
}

function takeRight(arr, num) {
    if (num === undefined) {
        return arr.slice(-1);
    }
    if (num === 0) return [];
    return arr.slice(-num);
}

function union(arr1, arr2) {
    return arr1.concat(arr2.filter(function (el) {
        if (!arr1.includes(el)) {
            return el;
        }
    }));
}

function zipObject(arr1, arr2) {
    return arr1.reduce(function (acc, cur, idx) {
        acc[cur] = arr2[idx];
        return acc;
    }, {});
}

function includes(collection, value, index) {
    index = index || 0;
    if (Array.isArray(collection)) {
        return collection.slice(index).some(function (el) {
            return el === value;
        });
    }
    if (typeof collection === "object") {
        for (var key in collection) {
            if (collection[key] === value) {
                return true;
            }
        }
        return false;
    }
    if (typeof collection === "string") {
        return collection.split(value) ? true : false;
    }
}

function sample(collection) {
    if (Array.isArray(collection)) {
        return collection[Math.floor(Math.random() * collection.length)];
    }
    // collection as an object ignored for tests
}

function cloneDeep(value) {
    var newObj = {};
    function objCloneHelp(obj) {
        for (var key in obj) {
            if (typeof obj[key] === "object" && obj[key] !== null) {
                newObj[key] = objCloneHelp(obj[key]);
            } else {
                newObj[key] = obj[key];
            }
        }
        return newObj;
    }
    objCloneHelp(value);
    return newObj;
}

function sumBy(arr, iteratee) {
    if (typeof iteratee === "function") {
        return arr.reduce(function (acc, cur) {
            acc += iteratee(cur);
            return acc;
        }, 0);
    } else { // iteratee is a key (string)
        return arr.reduce(function (acc, cur) {
            if (cur[iteratee]) { // there's a value with chosen key
                acc += cur[iteratee];
            }
            return acc;
        }, 0);
    }
}

function inRange(number, start, end) {
    if (end === undefined) { // end <-> arguments[2]
        end = start;
        start = 0;
    }
    if (number < 0 && start < 0) {
        if (number < start && number > end) {
            return true;
        }
    }
    if (number >= start && number < end) {
        return true;
    } else return false;

    if (start > end) {
        inRange(number, end, start);
    }
}

function has(object, path) {
    if (typeof path === "string") { // object key
        for (var keys in object) {
            return keys === path;
        }
        return false;
    }
    if (Array.isArray(path)) { // array of keys
        for (var keys in object) {
            return path.includes(keys);
        }
    }
}

function omit(object, paths) {
    var obj = {};
    for (var key in object) {
        if (!paths.includes(key)) {
            obj[key] = object[key];
        }
    }
    return obj;
}

function pick(object, paths) {
    var obj = {};
    for (var key in object) {
        if (paths.includes(key)) {
            obj[key] = object[key];
        }
    }
    return obj;
}

function pickBy(object, predicateFn) {
    var obj = {};
    for (var key in object) {
        if (predicateFn(object[key])) { // predicateFn(val, key)
            obj[key] = object[key];
        }
    }
    return obj;
}

function omitBy(object, predicateFn) {
    var obj = {};
    for (var key in object) {
        if (!predicateFn(object[key])) {
            obj[key] = object[key];
        }
    }
    return obj;
}

// was called pad; in test file, it's called padEnd
function padEnd(string, length, chars) {
    var newStr = string || '';
    length = length || 0;
    chars = chars || ' ';
    if (newStr.length !== length) {
        while (newStr.length < length) { // under
            newStr += chars;
        }
        if (newStr.length > length) { // if chars push length over
            newStr = newStr.slice(0, length);
        }
    }
    return newStr;
}

function repeat(string, times) {
    return string.repeat(times);
}

function upperFirst(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function flatten(array) { // one level only
    // return [].concat(...array); // with spread operator 
    return array.reduce(function (acc, cur) {
        return acc.concat(cur);
    }, []);
}

// BONUS 
function zip() {

}

function unzip() {

}

function flip() {

}

function flattenDeep(array) {
    // recursive solution 
    var newArr = [];

    function flattenHelper(a) {
        if (a.length === 0) return; // base case
        if (!Array.isArray(a[0])) { // not an array -> a number
            newArr.push(a[0]);
        } else { // if array -> recurse
            flattenHelper(a[0]);
        }
        flattenHelper(a.slice(1)); // recurse for next values in array
    }
    flattenHelper(array);
    return newArr;
}

// bonus? with no test
function takeWhile() {

}