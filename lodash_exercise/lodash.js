function drop(arr, num=1){
  if (num === 1) {
    return arr.slice(1);
  }
  return arr.slice(num);
}

function fromPairs(arr){
  // assuming arr is an array of arrays containing key value pairs
  // e.g. [[key, value],[key, value],[key, value]]
  if (arr.length === 0) {
    return {};
  } else {
    var result = {};
    for (var i = 0; i < arr.length; i++) {
      result[arr[i][0]] = arr[i][1];
    }
    return result;
  }
}

function head(arr){
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
}

function take(arr, num=1){
  return arr.slice(0, num);
}

function takeRight(arr, num=1){
  if (num === 0) {
    return []
  }
  return arr.slice(num*-1);
}

function union(){
  // assuming arguments will be an "array" of arrays
  var result = [];
  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {
      if (result.indexOf(arguments[i][j]) === -1) {
        result.push(arguments[i][j]);
      }
    }
  }
  return result;
}

function zipObject(keysArr, valuesArr){
  var result = {};
  for (var i = 0; i < keysArr.length; i++) {
    result[keysArr[i]] = valuesArr[i];
  }
  return result;
}

function includes(collection, val, fromIndex=0){
  // collection can be an array, string, or object
  if (typeof collection === "object" && Array.isArray(collection) !== true) {
    for (var key in collection) {
      if (collection[key] === val) {
        return true;
      }
    }
    return false;
  }
  return collection.slice(fromIndex).indexOf(val) !== -1 ? true : false;
}

function sample(arr){
  return arr[Math.floor(Math.random()*arr.length-1)];
}

function cloneDeep(collection){ // [1, 2, 3, [4, [5]]]
  var result;
  if (Array.isArray(collection)) {
    result = [];
    collection.forEach(function(val){
      // we want to make all the references different
      result.concat(cloneDeep(val));
    });
  } else {
    result = {};
    for (var key in collection) {
      result[key] = collection[key];
    }
  }
  return result;
}

function sumBy(arrOfObj, iteratee){
  if (typeof iteratee === "string") {
    return arrOfObj.reduce(function(acc, obj){
      acc += obj[iteratee];
      return acc;
    }, 0);
  } else {
    var sum = 0;
    for (var i = 0; i < arrOfObj.length; i++) {
      sum += iteratee(arrOfObj[i]);
    }
    return sum;
  }
}

function inRange(num, start=0, end){
  // Checks if n is between start and up to, but not including, end.
  // If end is not specified, it's set to start with start then set to 0.
  // If start is greater than end the params are swapped to support negative ranges.
  if (end === undefined) {
    end = start;
    start = 0;
  }
  if (start > end) {
    var hold = start;
    start = end;
    end = hold;
  }
  return (num > start && num < end);
}

function has(obj, path){
  // NOT WORKING

  // returns true if obj.path exists
  // returns false if obj.path is not valid
  // has({a:1}, a) --> true
  // has({{a:1}}, a) --> false
  // if path is just a string
  if (typeof path === "string") {
    for (var key in obj) {
      if (key === path) return true;
    }
  }
  if (Array.isArray(path)) {
    for (var i = 0; i < path.length; i++) {
      if (obj[path[i]] === undefined) {
        return false;
      }
    }
    return true;
  }
  return false;
}

function omit(obj, arrKeysToOmit){
  var result = {};
  for (var key in obj) {
    if (arrKeysToOmit.indexOf(key) === -1) {
      result[key] = obj[key];
    }	    
  }
  return result;
}

function pick(obj, arrKeysToPick){
  var result = {};
  for (var key in obj) {
    if (arrKeysToPick.indexOf(key) !== -1) {
      result[key] = obj[key];
    }	    
  }
  return result;
}

function pickBy(obj, callback){
  var result = {};
  for (var key in obj) {
    if (callback(obj[key])) {
      result[key] = obj[key];
    }
  }
  return result;
}

function omitBy(obj, callback){
  var result = {};
  for (var key in obj) {
    if (!callback(obj[key])) {
      result[key] = obj[key];
    }
  }
  return result;
}

function padEnd(str, finalLength, chars=" "){
  var result = str.slice();
  // if the desired length is less than or equal to the original string's length
  // there is nothing to pad to the end, so return it.
  // or if we pass in an empty string to pad to the end
  if (str.length >= finalLength || chars.length === 0) {
    return result;
  }
  var times = Math.floor((finalLength-str.length)/chars.length);
  var remainder = (finalLength-str.length)%chars.length;
  for (let i = 0; i < times; i++) {
    // so I learned today that .concat() doesn't modify the original string
    // and that you need to reassign it to capture the returned new string
    // so I'm just going to use += from now on...
    result += chars;
  }
  for (let j = 0; j < remainder; j++) {
    result += chars[j];
  }
  return result;
}

function repeat(str, times){
  if (times === 0) return "";
  if (times === 1) return str;

  var result = "";
  for (var i = 0; i < times; i++) {
    result = result.concat(str);
  }
  return result;
}

function upperFirst(str){
  var result = "";
  return result.concat(str[0].toUpperCase() + str.slice(1));
}

function flatten(arr){
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result = result.concat(arr[i]);
  }
  return result;
}

// BONUS

function zip(){

}

function unzip(){

}

function flip(){

}

function flattenDeep(){
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // if the current element is an array,
      // we need to go down a layer to flatten that as well
      // and then remember to add it to the result and reassign since concat doesn't modify original arr
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

