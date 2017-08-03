function drop(arr, num){
  if (num === 0) return arr;
  if (!num) num = 1;
  return arr.slice(num);
}

function fromPairs(arr){
  var newObj = {};
  for (var i = 0; i < arr.length; i++) {
    newObj[arr[i][0]] = arr[i][1];
  }
  return newObj;
}

function head(arr){
    return arr.shift();
}

function take(arr, num){
    if (num === 0) return [];
    if (!num) return [arr[0]];
    return arr.slice(0, num);
}

function takeRight(arr, num){
    if (num === 0) return [];
    if (!num) return [arr.length];
	  if (num > arr.length -1) return arr;
    return arr.slice(num - 1, arr.length);
}

function union(){
    var array = [];
    for (var i = 0; i < arguments.length; i++) {
        array = array.concat(arguments[i]);
    }
    return array.filter(function(val, index, arr) {
      return arr.indexOf(val) === index;
    });
}

function zipObject(arr1, arr2){
    var myObj = {};
    for (var i = 0; i < arr1.length; i++) {
      myObj[arr1[i]] = arr2[i];
    }
    return myObj;
}

function includes(collection, src){
    if (arguments.length > 2) return false;
    if (typeof collection === 'string') {
      if (collection.match(src)) return true;
      return false;
    }
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        if (collection[i] === src) return true;
        else return false;
      }
    }
    if (typeof collection === 'object') {
      for (var key in collection) {
        if (collection[key] === src) return true;
        return false;
      }
    }
}

function sample(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

function cloneDeep(val){
    if (Array.isArray(val)) {
      var newVal = [];
      for (var i = 0; i < val.length; i++){
        newVal = newVal.concat(cloneDeep(val[i]));
      }
      return newVal;
    }
    else {
      var newVal = {};
      for (var key in val) {
        newVal[key] = val[key];
      }
      return newVal;
    }
}

function sumBy(arr, key){
    return arr.reduce(function(all, item, index){
      if (typeof key === 'function') {
        return all + key(item);
      }
      return all + item[key];
    }, 0);
}

function inRange(num, start, end){
    if (start > end) {
      if (num > end & num < start) return true;
    }
    if (typeof end === 'undefined') {
      end = start;
      start = 0;
    }
    if (num > start && num < end) return true;
    else return false;
}

function has(obj, path){
    var isTrue = true;
    if (Array.isArray(path)) {
      for (var i = 0; i < path.length; i++) {
        for (var key in obj) {
          if (obj[key] === path[i]) isTrue && true;
          else isTrue && false;
        }
      }
    }
    else {
      for (var key in obj) {
        if (obj[key] === path) isTrue && true;
        else isTrue && false;
      }
    }
    return isTrue;
}

function omit(obj, path){
    var newObj = obj;
    for (var i = 0; i < path.length; i++) {
      for (var key in newObj) {
        if (newObj[key] === path) {
          delete newObj[key];
        }
      }
    }
    return newObj;
}

function pick(){

}

function pickBy(){

}

function omitBy(){

}

function padEnd(){

}

function repeat(){

}

function upperFirst(str){

}

function flatten(){

}

function zip(){

}

function unzip(){

}

function flip(){

}

function flattenDeep(){

}
