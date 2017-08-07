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
//**************************************************//
function zip() {
  return [...arguments].reduce(
    (prev, curr, idx) => {
      if (idx === 0) {
        prev[0].push(curr);
      } else {
        prev[1].push(curr);
      }
      return prev;
    },
    [[], []]
  );
}

function unzip() {}

function flip(flipped) {
  return flipped();
}
function flipped() {
  return [...arguments].reduceRight(function(prev, curr) {
    return prev - curr;
  });
}
//**************************************************//
function flattenDeep(array) {
  return array.reduce(function(prev, toFlatten) {
    return prev.concat(
      Array.isArray(toFlatten) ? flattenDeep(toFlatten) : toFlatten
    );
  }, []);
}
