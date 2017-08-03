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
      console.log(arrays[i][j]);
      if(!result.includes(arrays[i][j])) result.push(arrays[i][j]);
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
    if (collection.indexOf(value) === fromIndex) return true;
    else return false;

  } else if (typeof collection === 'object') {
    for (let key in collection) {
      if (collection[key] === value) return true;
    }

    return false;
  } else if (typeof collection === 'string') {
    if (collection.indexOf(value) !== -1) return true;
    else return false;
  }

  return false;
}

// =============================================================================
function sample(collection){
  let rnd = Math.floor(Math.random() * collection.length);

  if (Array.isArray(collection)) return collection[rnd];
  else {
    let keyNum = 0;

    for (let key in collection) {
      if (keyNum === rnd) return collection[key];
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
    let swap = start;
    start = end;
    end = swap;
  }

  if (start <= number && number < end) return true;
  else return false;
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
  console.log(keyArray);

  if (Array.isArray(path)) {
    for (var i = 0; i < path.length; i++) {
      if (!keyArray.includes(path[i])) return false;
    }

    return true;
  } else {
    if (keyArray.includes(path)) return true;
    else return false;
  }
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

function zip(){

}

function unzip(){

}

function flip(){

}

function flattenDeep(){

}
