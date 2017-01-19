function drop(array, number) {
    if (number === undefined) {
        number = 1
    }
    return array.slice(0 + number);
}

function fromPairs(array) {
    var obj = {};
    array.forEach(function(value) {
        obj[value[0]] = value[1]
    })
    return obj;
}

function head(array) {
    return array[0];
}

function take(array, number) {
    if (number === undefined) {
        number = 1
    }
    return array.splice(0, number);
}

function takeRight(array, number) {
    if (number === undefined) {
        number = 1;
    }
    if (number >= array.length) {
        return array;
    }
    return array.slice(array.length - number);
}

function takeWhile(array, callback) {
    return array.filter(function(value) {
        return callback(value)
    })

}

function union(arr1, arr2) {
    var combined = arr1.concat(arr2);
    return combined.reduce(function(previousValue, nextValue) {
        if (!previousValue.includes(nextValue)) {
            previousValue.push(nextValue);
        }
        return previousValue;
    }, [])
}

function zip() {
    var newArr = [];
    var args = arguments.length;
    for (var i = 0; i < args; i++) {
        newArr[i].push([])
    }

    for (var i = 0; i < newArr.length; i++) {
        var innerArray = [];
        for (j = 0; j < args; j++) {
            innerArr.push(arguments[i][j])
        }
        newArr.push(innerArray)
    }
    return newArr;
}

function unzip() {

}

function zipObject() {

}

function includes(itemToCheck, value, index) {
    if (!Array.isArray(itemToCheck) && typeof itemToCheck !== "string")
        for (keys in itemToCheck) {
            if (itemToCheck[keys] === value) {
                return true;
            }
            return false;
        }
    if (index === undefined) {
        return itemToCheck.indexOf(value) > -1 }
    return itemToCheck.slice(index).indexOf(value) > -1
}

function sample(array) {
	var randomIndex = Math.round(array.length*Math.random());
	return array[randomIndex];
}

function flip(func) {
	
	function func()
}

function cloneDeep() {

}

function sumBy() {

}

function inRange() {

}

function has() {

}

function omit() {

}

function pick() {

}

function pickBy() {

}

function omitBy() {

}

function pad() {

}

function repeat() {

}

function upperFirst(str) {

}

function flatten() {

}

function flattenDeep() {

}
