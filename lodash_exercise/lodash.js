function drop(arr, n = 1){
  if (n === 0) return arr;
  let newArr = arr.slice(1);
  return drop(newArr, n - 1);
}

function fromPairs(arr){
  let obj = {};
  for(let i = 0; i < arr.length; i++) {
    obj[arr[i][0]] = arr[i][1];
  }
  return obj;
}

function head(arr){
  return arr[0];
}

function take(arr, n = 1){
  return arr.slice(0,n);
}

function takeRight(arr, n = 1){
  if (n >= arr.length) return arr;
  return arr.slice(arr.length - n);
}

function union(){
  let uniq = [];
  let arr = Array.from(arguments).reduce(function(a,b){ return a.concat(b)},[]);
  for (let e of arr) {
    if (uniq.indexOf(e)) uniq.push(e);
  }
  return uniq;
}

function zipObject(arr1, arr2){
  let obj = {};
  for (let i = 0; i < arr1.length; i++){
    obj[arr1[i]] = arr2[i];
  }
  return obj;
}

function includes(col, val, fromIndex = 0){
  if (fromIndex) return col.indexOf(val) === fromIndex; 
  return !!JSON.stringify(col).match(RegExp(val));
}

function sample(col){
  return col[Math.floor(Math.random() * col.length)];
}

function cloneDeep(col){
  return JSON.parse(JSON.stringify(col));
}

function sumBy(arr, fn){
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof fn === 'string') {
      sum += arr[i][fn];
    } else {
      sum += fn(arr[i]);  
    }
  }
  return sum;
}

function inRange(num, start=0, end) {
  if (num < 0) { num *= -1; start *= -1; end *= -1; }
  if (arguments.length > 2) {
    return start < num && num < end;
  } else {
    return 0 < num && num < start;
  }
}

function has(obj, path) {
  if (Array.isArray(path)) {
    for (let i = 0; i < path.length; i++) {
      if (obj[path[i]]) return true;
    }
  }
  return !!(obj[path]);
}

function omit(obj, paths){
  for(let i = 0; i < paths.length; i++){
    delete obj[paths[i]];
  }
  return obj;
}

function pick(obj, paths){
  let newObj = {};
  for(let i = 0; i < paths.length; i++){
    newObj[paths[i]] = obj[paths[i]];
  }
  return newObj;
}

function pickBy(obj, fn){
  let newObj = {};
  for (let key in obj) {
    if (fn(obj[key])) newObj[key] = obj[key];
  }
  return newObj;
}

function omitBy(obj, fn){
  for (let key in obj) {
    if (fn(obj[key])) delete obj[key];
  }
  return obj;
}

function padEnd(string, len, pad = ' '){
  if (string.length >= len) return string;
  const length = len - string.length;
  for (let i = 1; i <= length; i++) {
    string += pad;
  }
  return string.slice(0,len);
}

function repeat(string, times){
  let newStr = '';
  for (let i = 0; i < times; i++) {
    newStr += string;
  }
  return newStr;
}

function upperFirst(str){
  return str.slice(0,1).toUpperCase().concat(str.slice(1));
}

// Yeah, I know it's a nested loop, but I couldn't figure out
// any other way to do it
function flatten(arr){
  let flat = [];
  for (let e of arr) {
    if (Array.isArray(e)) {
      for (let f of e){
        flat.push(f);  
      }
    } else {
      flat.push(e);  
    }
  }
  return flat;
}

function zip(){

}

function unzip(){

}

function flip(){

}

function flattenDeep(){

}
