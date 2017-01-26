function drop(arr, n) {
  if (n === undefined) {
    n = 1;
  }

  return arr.slice(n);

}

function fromPairs(arr) {
  var obj = {};

  arr.forEach(function(x) {
    obj[x[0]] = x[1];
  });

  return obj;

}

function head(arr) {
  return arr[0];
}

function take(arr, n) {
  if (n === undefined) {
    return arr.slice(0, 1);
  } else {
    return arr.slice(0, n);
  }
}

function takeRight(arr, n) {
  if (n === undefined) {
    return arr.slice(arr.length - 1);
  } else if (n < arr.length) {
    return arr.slice(arr.length - n);
  } else {
    return arr;
  }
}

function takeWhile(arr, callback) {
  return arr.filter(function(x) {
    return callback(x);
  });
}

function union(a, b) {

  var x = a.concat(b);
  var arr = [];

  x.forEach(function(t) {
    if (arr.indexOf(t) === -1) {
      arr.push(t);
    }
  });

  return arr;

}

function zip() {

}

function unzip() {

}

function zipObject() {

}

function includes(collection, value, index) {

  var regex = new RegExp(value, "gi");

  if (Array.isArray(collection)) {
    for (var i = index || 0; i < collection.length; i++) {
      if (collection[i] === value) {
        return true;
      }
    }
  }

  if (typeof value === 'string') {
    return !!collection.match(regex);
  }

  if (typeof collection === 'object' && !Array.isArray(collection)) {
    for (var key in collection) {
      if (collection[key] === value) {
        return true;
      }
    }
  }

  return false;
}

function sample(collection) {

  return collection[Math.floor(Math.random() * collection.length)];

}

function flip() {

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
