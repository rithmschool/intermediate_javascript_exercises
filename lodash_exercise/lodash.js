function drop(arr, num){
    if (num === undefined){
        num = 1;
    }
    return arr.slice(num);
}

function fromPairs(pairsArr){
    return pairsArr.reduce(function(acc, el){
        acc[el[0]] = el[1];
        return acc;
    }, {});
}

function head(arr){
    return arr.length ? arr[0] : undefined;
}

function take(arr, num){
    if (num === undefined) num = 1;
    return arr.slice(0,num);
}

function takeRight(arr, num){
    if (num === undefined) num = 1;
    if (num > arr.length) num = arr.length;
    return arr.slice(arr.length-num);
}

/*bonus*/
// function takeWhile(){

// }

function union(){
    var args = Array.from(arguments);
    var mergeArgsArr = [].concat.apply([],args);
    return Array.from(new Set(mergeArgsArr));
}

/*another version of union*/
//function union(){
// var unionArr = [];
// var args = Array.from(arguments);
// args.forEach(function(el){
//   el.forEach(function(subEl){
//     if(!unionArr.includes(subEl)){
//       unionArr.push(subEl);
//     }
//   });
// });
// return unionArr;
//}

/*bonus*/
function zip(){
    var args = Array.from(arguments);
    var newArr = [];
    while(args[0].length > 0){
        newArr.push(args.map(function(el){
            return el.shift();
        }));
    }
    return newArr;
}

/*bonus*/
function unzip(){
    var args = Array.from(arguments);
    var newArr = [];
    while(args[0][0].length > 0){
        var subArr = args[0].map(function(el){
            return el.shift();
        });
        newArr.push(subArr);
    }
    return newArr;
}

function zipObject(arrProps, arrVals){
    var obj = {};
    for (var i = 0; i < arrProps.length; i++){
        obj[arrProps[i]] = arrVals[i];
    }
    return obj;
}

function includes(collection,val,fromIndex){
    if (Array.isArray(collection) || 
        typeof(collection) === 'string'){
        return collection.slice(fromIndex).includes(val);
    }
    if (typeof(collection) === 'object'){
        return Object.values(collection).includes(val);
    }
}

/*How does this work with an object?? Is this right?*/
function sample(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

/*bonus*/
// function flip(fn){
//     return function(){
//       var args = Array.from(arguments);
//       args.reverse();
//       return fn.apply(this, args);
//     }
// }


function flip(fn){
    return function(){
      return fn(...Array.from(arguments).reverse());
    }
}


//NEED TO WORK ON DOING THIS RECURSIVELY
function cloneDeep(val){
    if (Array.isArray(val)){
        var arrCopy = val.slice();
        for (var i = 0; i < arrCopy.length; i++){
            if (typeof(arrCopy[i] === 'object')){
                arrCopy[i] = Object.assign({},arrCopy[i]);
            }
        }
        return arrCopy;
    }
    if (typeof(val) === 'object'){
        return Object.assign({},val);
    }
    return val;
}

function sumBy(arr, iter){
    if (typeof(iter) === 'string'){
        return arr.reduce(function(acc,el){
            return acc + el[iter];
        }, 0);
    }
    if (typeof(iter) === 'function'){
        return arr.reduce(function(acc,el){
            return acc + iter(el);
        }, 0);
    }
}

function inRange(num,start,end){
    if (arguments.length === 2){
        end = arguments[1];
        start = 0;
    }
    //for negative start & end
    if (start < 0 && end < 0){
        return start > num && num > end;
    }
    //for positive start & end
    return start < num && num < end;
}

function has(obj, path){
    if (typeof(path) === 'string'){
        path = path.split('.')
    }
    var currObj = obj;
    for (var i = 0; i < path.length; i++){
      if (currObj[path[i]] === undefined){
        return false;
      }
      else {
        if (typeof(currObj[path[i]]) === 'object'){
          currObj = currObj[path[i]];
        }
      }
    }
    return true;
}

function omit(obj, paths){
    return paths.reduce(function(acc, el){
        delete acc[el];
        return acc;
    },obj);
}

function pick(obj, paths){
    return paths.reduce(function(acc, el){
        acc[el] = obj[el];
        return acc;
    }, {});
}

function pickBy(obj, cb){
    var filterObj = {};
    for (var prop in obj){
        if (cb(obj[prop])){
            filterObj[prop] = obj[prop];
        }
    }
    return filterObj;
}

function omitBy(obj, cb){
    var filterObj = {};
    for (var prop in obj){
        if (!cb(obj[prop])){
            filterObj[prop] = obj[prop];
        }
    }
    return filterObj;
}

function padEnd(str, len, padStr){
    if (str.length >= len){
        return str;
    }
    var finalStr = str;
    for (var i = 0; i < (len - str.length); i++){
        if (padStr){
            var pos = i % padStr.length; 
            finalStr += padStr[pos];
        }
        else {
            finalStr += " ";
        }
    }
    return finalStr;
}

function repeat(str, timesRepeat){
    var repeatedStr = '';
    for (var i = 0; i < timesRepeat; i++){
        repeatedStr += str;
    }
    return repeatedStr;
}

function upperFirst(str){
    return str[0].toUpperCase() + str.slice(1);
}

function flatten(arr){
    return arr.reduce(function(acc,el){
        if (Array.isArray(el)){
          acc = acc.concat(el);   
        } 
        else {
          acc.push(el);
        }
        return acc;
    },[]);
}

/*bonus*/
function flattenDeep(arr){
    var flatArr = [];
  
    function flattenDeepHelper(arr){
        arr.forEach(function(el){
          if (!Array.isArray(el)){
            flatArr.push(el);
          }
          else {
            flattenDeepHelper(el);
          }
        })
    }
    
    flattenDeepHelper(arr);

    return flatArr;
}