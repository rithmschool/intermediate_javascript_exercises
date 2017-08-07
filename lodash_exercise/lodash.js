function identity(value) {
  return value;
}

function drop(array, n = 1) {
  return array.slice(n);
}

function fromPairs(array) {
  return array.reduce(function(prev, curr, idx) {
    prev[curr[0]] = curr[1];
    return prev;
  }, {});
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

function cloneDeep(collection) {
  if (Array.isArray(collection)) {
    return Object.assign([], ...collection);
  }
  if (typeof collection === 'object') {
    return Object.assign({}, collection);
  }
}

function sumBy(array, iteratee) {
  var count = 0;
  for (var idx = 0; idx < array.length; idx++) {
    if (typeof iteratee === 'function') {
      count += iteratee(array[idx]);
    } else {
      count += array[idx][iteratee];
    }
  }
  return count;
}

function inRange(value, start, end) {
  start = +start || 0;
  if (end === undefined) {
    end = start;
    start = 0;
  } else {
    end = +end || 0;
  }
  return value >= Math.min(start, end) && value < Math.max(start, end);
}
function has(object, other) {
  return object.hasOwnProperty(...other) ? true : false;
}

function omit(obj, arr) {
  return Object.keys(obj).reduce(function(prev, curr, idx) {
    if (!arr.includes(curr)) {
      prev[curr] = obj[curr];
    }
    return prev;
  }, {});
}

function pick(obj, arr) {
  return arr.reduce(function(newObj, key) {
    if (key in obj) {
      newObj[key] = obj[key];
    }
    return newObj;
  }, {});
}

function pickBy(obj, cb) {
  var o = {};
  forEach(obj, function(value, key, collection) {
    if (cb(value)) {
      o[key] = collection[key];
    }
  });
  return o;
}

function omitBy(obj, cb) {
  var o = {};
  forEach(obj, function(value, key, collection) {
    if (!cb(value)) {
      o[key] = collection[key];
    }
  });
  return o;
}
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
  return array.reduce(function(prev, curr) {
    return prev.concat(curr);
  }, []);
}

function zip(array) {
  var max = 0;
  var result = new Array(max);
  array = Array.from(arguments);

  forEach(array, function(arg) {
    max = Math.max(arg.length, max);
  });

  for (var i = 0; i < max; i++) {
    result[i] = array.map(item => item[i]);
  }

  return result;
}
//**************************************************//

function unzip(array) {
  var index = -1;
  var length = 0;

  array = filter(array, function(arg) {
    if (Array.isArray(arg)) {
      length = Math.max(arg.length, length);
      return true;
    }
  });

  var result = new Array(length);

  while (++index < length) {
    result[index] = map(array, function(obj) {
      return obj[index];
    });
  }
  return result;
}

function flip(func) {
  return function() {
    var flipped = [];
    for (var i = arguments.length - 1; i >= 0; i--) {
      flipped.push(arguments[i]);
    }
    return func(...flipped);
  };
}
//**************************************************//
function flattenDeep(array) {
  return array.reduce(function(prev, toFlatten) {
    return prev.concat(
      Array.isArray(toFlatten) ? flattenDeep(toFlatten) : toFlatten
    );
  }, []);
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

function map(array, callBack) {
  return array.reduce((mapArr, item) => mapArr.concat(callBack(item)), []);
}

function filter(array, callBack) {
  return array.reduce((filterArr, item) => {
    if (callBack(item)) {
      filterArr.push(item);
    }
    return filterArr;
  }, []);
}
