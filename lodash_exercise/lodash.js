function drop(arr, n){
  return arguments.length < 2 ? arr.slice(1) : arr.slice(n);
}

function fromPairs(arr){
  return arr.reduce(function(acc, cur) {
     acc[cur[0]] = cur[1];
     return acc;
  }, {});
}

function head(arr){
  return arr.shift();
}

function take(arr, n){

  if (n === undefined) {
    return arr.slice(0,1);
  } else if (n === 0) {
    return [];
  } else if (n >= arr.length) {
    return arr.slice();
  } else {
    return arr.slice(0, n);
  }
}

function takeRight(arr, n){
  if (n === undefined) {
    return arr.slice(-1);
  } else if (n >= arr.length) {
    return arr.slice();
  } else if (n === 0) {
    return [];
  } else {
    return arr.slice(-n);
  }
}

function takeWhile(){

}

function union(arr1, arr2){
  var arr3 = arr1.concat(arr2);
  return arr3.reduce(function(acc, cur) {
      if (!acc.includes(cur)) {
        acc.push(cur);
      }
      return acc;
  }, []);
}

function zip(){

}

function unzip(){

}

function zipObject(arr1, arr2){
    var newObj = {};

    for (var i = 0; i < arr1.length; i++) {
        newObj[arr1[i]] = arr2[i];
    }
    return newObj;
}

function includes(collection, val, start){
  if (Array.isArray(collection) && start !== undefined) {
    for (var i = start; i < collection.length; i++) {
      if(collection[i] === val) {
        return true;
      }
    }
    return false;
  } else if (typeof collection === "string") {
    for (var i = 0; i < collection.length; i++) {
      if (collection.indexOf(val) !== -1) {
        return true;
      }
    }
    return false;
  } else if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        if(collection[i] === val) {
          return true;
        }
      }
      return false;
    } else if (typeof collection === "object"){
        for (var key in collection) {
          if (collection[key] === val) {
            return true;
          }
        }
        return false;
    }
}

function sample(arr){
  return Math.floor(Math.random() * (arr[arr.length-1] - arr[0])) + arr[0];
}

function flip(){

}

function cloneDeep(){

}

function sumBy(objects, cb){
  if (typeof cb === "string") {
      return objects.reduce(function(acc, cur) {
          for (var key in cur) {
              if (key === cb) {
                  acc += cur[key];
              }
          }
          return acc;
      }, 0);
  } else {
      return objects.reduce(function(acc, cur) {
         if (cb(cur)) {
             for (var key in cur) {
                 acc += cur[key];
             }
         }
         return acc;
      },0);
  }
}

function inRange(val, start, end){
    if (end === undefined) {
      end = start;
      var begin = 0;
      if (val > begin && val < end) {
        return true;
      } else if (val >= end) {
          return false;
      }
    } else if (val > start && val < end) {
        return true;
    } else if (val < 0 && start < 0 && end < 0) {
        if (val > end && val < start) {
          return true;
        }
    }
}

function has(obj, val){
    if (obj.hasOwnProperty(val)) {
      return true;
    } else if (Array.isArray(val)){
        for (var key in obj) {

        }
    }
    return false;

}

function omit(obj, keys){
  for (var key in obj) {
    if (keys.includes(key)) {
      delete obj[key];
    }
  }
  return obj;
}

function pick(obj, keys){
  var newObj = {};
    for (var key in obj) {
      if (keys.includes(key)) {
        newObj[key] = obj[key];
      }
    }
    return newObj;
}

function pickBy(obj, cb){
  var newObj = {};
    for (var key in obj) {
      if (cb(obj[key])) {
        newObj[key] = obj[key];
      }
    }
    return newObj;
}

function omitBy(obj, cb){
  var newObj = {};
    for (var key in obj) {
      if (!cb(obj[key])) {
        newObj[key] = obj[key];
      }
    }
    return newObj;
}

function padEnd(str, val, pattern){

}

function repeat(str, n){
  var result = "";
    while (n > 0) {
      result += str;
      n--;
    }
    return result;
}

function upperFirst(str){
  return str[0].toUpperCase() + str.slice(1);
}

function flatten(arr){
  return arr.reduce(function(acc, cur) {
        return acc.concat(cur);
    }, []);
}

function flattenDeep(arr){
  return arr.reduce(function(acc, cur) {
    if (Array.isArray(cur)) {
      return acc.concat(flattenDeep(cur));
    } else {
      return acc.concat(cur);
    }
  }, []);
}
