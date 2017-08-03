function identity(value) {
  return value;
}

function forEach(collection, iteratee) {
  if (Array.isArray(collection)) {
    for (var index = 0; index < collection.length; index++) {
      iteratee(collection[index], index, collection);
    }
  }
  for (var prop in collection) {
    iteratee(collection[prop], prop, collection);
  }
}

function drop(array, n = 1) {
  return array.slice(n);
}

function fromPairs(array) {
  return array.reduce(function(prev, curr, idx) {
    prev[curr[0]] = curr[1];
    return prev;
  }, {});
  // var index = -1;
  // var l = array == null ? 0 : array.length;
  // var result = {};
  // while (++index < l) {
  //   var pair = array[index];
  //   result[(pair[0] = pair[1])];
  // }
  // return result;
}

function head(array) {
  return array[0];
}

function take(array, n = 1) {
  return array.slice(0, n);
}

function takeRight(array, n = 1) {
  return n == 0 ? [] : array.slice(-n);
}

function union(...array) {
  return [...new Set(array[0].concat(array[1]))];
}

function zipObject(arr, arr1) {
  return arr.reduce(function(prev, curr, idx) {
    prev[curr] = arr1[idx];
    return prev;
  }, {});
}

function includes(collection, target, startingIndex = 0) {
  if (typeof collection === 'string') {
    return collection.includes(target, collection.slice(startingIndex));
  }
  collection = Array.isArray(collection)
    ? collection
    : Object.values(collection);

  return collection.includes(target, drop(collection, startingIndex));
}

function sample(array) {
  return Math.round(Math.random(...array) + array[0]);
}
//[{ a: 1 }, { b: 2 }]
function cloneDeep(array) {}

function sumBy(array, iteratee) {
  return array && array.length ? iteratee(identity) : 0;
}

function inRange(num, start, end) {
  num = Math.floor(num);
  if (end == undefined) {
    start = 0;
  }
  if (num < 0) {
    return num <= start && num >= end ? true : false;
  } else {
    return num >= start && num <= end ? true : false;
  }
}

function has(object, other) {
  return object.hasOwnProperty(...other) ? true : false;
}

function omit(obj, arr) {}

function pick(obj, arr) {
  return arr.reduce(function(newObj, key) {
    if (key in obj) {
      newObj[key] = obj[key];
    }
    return newObj;
  }, {});
}

function pickBy(obj, cb) {}

function omitBy() {}

function padEnd(str, target, char) {
  return str.padEnd(target, char);
}

function repeat(str, n) {
  return str.repeat(n);
}

function upperFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function flatten(array) {
  var flat = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flat = flat.concat(array[i]);
    } else {
      flat.push(array[i]);
    }
  }
  return flat;
}

function zip() {}

function unzip() {}

function flip() {
  return [...arguments].reduceRight(function(prev, curr) {
    return prev - curr;
  });
}

function flattenDeep(array) {
  return array.reduce(function(prev, toFlatten) {
    return prev.concat(
      Array.isArray(toFlatten) ? flattenDeep(toFlatten) : toFlatten
    );
  }, []);
}
