function sumEvenArguments() {
    var copy = Array.prototype.slice.call(arguments);
    return copy.reduce(function (acc, next) {
        if (next % 2 === 0) {
            acc += next
        }
        return acc;
    }, 0);
}

function arrayFrom() {
    var copy = Array.prototype.slice.call(arguments);
    return copy;
}

function invokeMax(fn, max) {
    var count = 0;
    return function () {
        var args = Array.from(arguments);
        ++count;
        if (count <= fn.apply(null, args)) {
            return fn.apply(null, args);
        } else {
            return "Maxed Out!";
        }
    }
}

function add(a, b) {
    return a + b
}