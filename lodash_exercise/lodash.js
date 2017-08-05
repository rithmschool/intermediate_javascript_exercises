/* jshint esversion: 6 */

// =============================================================================
function drop(array, n = 1){
  return array.slice(n);
}

// =============================================================================
function fromPairs(array){
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    obj[array[i][0]] = array[i][1];
  }

  return obj;
}

// =============================================================================
function head(array){
  return array[0] || undefined;
}

// =============================================================================
function take(array, n = 1){
  return array.slice(0, n);
}

// =============================================================================
function takeRight(array, n = 1){
  let begin = array.length - n < 0 ? 0 : array.length - n;
  return array.slice(begin);
}

// =============================================================================
function union(){
  let arrays = Array.from(arguments);
  let result = [];

  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      if(!result.includes(arrays[i][j])) {
        result.push(arrays[i][j]);
      }
    }
  }

  return result;
}

// =============================================================================
function zipObject(keys, values){
  let result = {};

  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i];
  }

  return result;
}

// =============================================================================
function includes(collection, value, fromIndex = 0){
  if (Array.isArray(collection)) {
    if (collection.indexOf(value) === fromIndex) {
      return true;
    } else {
      return false;
    }

  } else if (typeof collection === 'object') {
    for (let key in collection) {
      if (collection[key] === value) {
        return true;
      }
    }

    return false;

  } else if (typeof collection === 'string') {
    if (collection.indexOf(value) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  return false;
}

// =============================================================================
function sample(collection){
  let rnd = Math.floor(Math.random() * collection.length);

  if (Array.isArray(collection)) {
    return collection[rnd];
  } else {
    let keyNum = 0;

    for (let key in collection) {
      if (keyNum === rnd) {
        return collection[key];
      }

      keyNum++;
    }
  }
}

// =============================================================================
function cloneDeep(value){
  let clone = [];

  function helper(val) {
    if (Array.isArray(val)) {
      for (var i = 0; i < val.length; i++) {
        clone.concat(cloneDeep(val[i]));
      }

      return clone;
    }
  }

  helper(value);

  return clone;
}

// =============================================================================
function sumBy(array, iteratee){
  let sum = 0;

  if (typeof iteratee === 'string') {
    for (let i = 0; i < array.length; i++) {
      if (array[i][iteratee]) sum += array[i][iteratee];
    }
  }

  if (typeof iteratee === 'function') {
    for (let i = 0; i < array.length; i++) {
      sum += iteratee(array[i]);
    }
  }

  return sum;
}

// =============================================================================
function inRange(number, end, start = 0){
  if (start > end) {
    [start, end] = [end, start];
    // let swap = start;
    // start = end;
    // end = swap;
  }

  if (start <= number && number < end) {
    return true;
  }

  return false;
}

// =============================================================================
function has(object, path){
  // create array of all keys in object
  // check to see if key(s) exists
  let keyArray = [];

  function helper (obj) {
    for (let key in obj) {
      keyArray.push(key);
      if (typeof obj[key] === 'object') {
        return helper(obj[key]);
      }
    }
  }

  helper (object);

  if (Array.isArray(path)) {
    for (var i = 0; i < path.length; i++) {
      if (!keyArray.includes(path[i])) {
        return false;
      }
    }

    return true;
  }

  if (keyArray.includes(path)) {
    return true;
  }

  return false;
}

// =============================================================================
function omit(object, array){
  let result = {};

  for (let key in object) {
    if (!array.includes(key)) result[key] = object[key];
  }

  return result;
}

// =============================================================================
function pick(object, array){
  let result = {};

  for (let key in object) {
    if (array.includes(key)) result[key] = object[key];
  }

  return result;
}

// =============================================================================
function pickBy(object, cb){
  let result = {};

  for (let key in object) {
    if (cb(object[key])) result[key] = object[key];
  }

  return result;
}

// =============================================================================
function omitBy(object, cb){
  let result = {};

  for (let key in object) {
    if (!cb(object[key])) result[key] = object[key];
  }

  return result;
}

// =============================================================================
function padEnd(string = '', length = 0, chars = ' '){
  while (string.length < length) {
    string += chars;
  }

  if (string.length > length) return string.slice(0, length);

  return string;
}

// =============================================================================
function repeat(string = '', n = 1){
  if (n === 0) string = '';
  let chars = string;

  for (var i = 1; i < n; i++) {
    string += chars;
  }

  return string;
}

// =============================================================================
function upperFirst(str){
  return str[0].toUpperCase() + str.slice(1);
}

// =============================================================================
function flatten(array){
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        result.push(array[i][j]);
      }
    } else result.push(array[i]);
  }

  return result;
}

// =============================================================================
function zip(...args){
  var numArrays = args.length;
  var longest = 0;
  var longestIdx = 0;
  var result = [];

  // identify the longest array
  for (let i = 0; i < numArrays; i++) {
    if (args[i].length > longest) {
      longest = args[i].length;
      longestIdx = i;
    }
  }

  // splice the longest array out of the args array
  var longArr = args.splice(longestIdx, 1);

  // unshift the longest array into the args array so that it's first
  args.unshift(longArr[0]);

  for (let i = 0; i < longest; i++) {
    let array = [];

    for (let j = 0; j < numArrays; j++) {
      array.push(args[j][i]);
    }

    result.push(array);
  }

  return result;
}

// =============================================================================
function unzip(arrays) {
  var result = [];

  for (let i = 0; i < arrays[0].length; i++) {
    var array = [];

    for (var j = 0; j < arrays.length; j++) {
      if (arrays[j][i] !== undefined) {
        array.push(arrays[j][i]);
      }
    }

    result.push(array);
  }

  return result;
}

// =============================================================================
function flip(){

}

// =============================================================================
function flattenDeep(array){
  let flattened = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flattened = flattened.concat(flattenDeep(array[i]));
    } else {
      flattened.push(array[i]);
    }
  }

  return flattened;
}
