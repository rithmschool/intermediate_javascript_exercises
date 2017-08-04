function drop(arr, n=1){
  return arr.slice(n)
}

function fromPairs(arr){
  var obj = {}
  arr.forEach(function(val){
    obj[val[0]] = val[1]
  })
  return obj;
}

function head(arr){
  return arr[0];
}

function take(arr, n=1){
  return arr.slice(0,n);
}

function takeRight(arr, n=1){
  if(n >= arr.length) n = arr.length;
  return arr.slice(arr.length-n)
}

function union(...arrays){
  var newArr = [];
  arrays.forEach(function(val){
    val.forEach(function(e){
      if(newArr.indexOf(e) === -1){
        newArr.push(e);
      }
    })
  })
  return newArr;
}

function zipObject(arr1,arr2){
  return arr1.reduce(function(acc,next,idx){
    acc[next] = arr2[idx];
    return acc;
  },{})
} 

function includes(col, val, idx=0){
  if(typeof col === "object" && !Array.isArray(col)){
    for(var key in col){
      if(col[key] === val){
        return true; 
      }
    }
    return false;
  }
  if(Array.isArray(col)){
    if(idx>0){
      col = col.slice(idx)
    }
    return col.indexOf(val) >=0;
  }
  if(typeof col === "string"){
    return col.indexOf(val) >=0;
  }
}

function sample(col){
  var objArr = [];
  if(typeof col === "object" && !Array.isArray(col)){
    for(var key in col){
      objArr.push(col[key]);
    }
    return objArr[Math.floor(Math.random()*objArr.length)];
  }
  if(Array.isArray(col)){
    return col[Math.floor(Math.random()*col.length)];
  }
}

function cloneDeep(val){
  var obj = {};
  var arr = [];
  if(typeof val === "object"){
    for(var i = 0; i < val.length; i++){
      for(var key in val[i]){
        if(typeof val === "object"){
          obj[key] = cloneDeep(val[i][key])
        } else{
          obj[key] = val[i][key];
        }
      }
      arr.push(obj)
    }
  return arr; 
  } 
}

function sumBy(arr,itr){
  if(typeof itr === "function"){
    return arr.reduce(function(acc,next){
      acc += itr(next);
      return acc;
    },0);
  } else if(typeof itr === "string"){
    return arr.reduce(function(acc,next){
      return acc + next[itr];
    },0);
  }
}


function inRange(num, start=0, end){
  if(arguments.length === 2){
    end = start;
    start = 0;
  }
  return num>=Math.min(start,end) && num<Math.max(start,end);
}


function has(obj,path){
  if(typeof path === "string"){
    for(var key in obj){
      return key === path;
    }
  }
  if(Array.isArray(path)){
    for(var key in obj){
      return path.includes(key);
    }
  }
}

function omit(obj, paths){
  var newObj = {};
  for(var key in obj){
      if(paths.indexOf(key) === -1){
          newObj[key] = obj[key]
      }
  }
  return newObj;
}

function pick(obj, paths){
  var newObj = {};
  for(var key in obj){
      if(paths.indexOf(key) >= 0){
          newObj[key] = obj[key]
      }
  }
  return newObj;
}

function pickBy(obj, fn){
  var newObj = {};
  for(var key in obj){
    if(fn(obj[key])){
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

function omitBy(obj, fn){
  var newObj = {};
  for(var key in obj){
    if(!fn(obj[key])){
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

function padEnd(str,num,padding){
  if(arguments.length === 2) padding = " ";
  if(str.length + padding.length === num){
    return str.concat(padding);
  }
  if(str.length + padding.length < num){
    str = str.concat(padding);
    return padEnd(str,num,padding);
  }
  else if(str.length + padding.length > num){
    return str.concat(padding).slice(0,num);
  } 
}


function repeat(str,num){
  var newStr = "";
  for(var i = 0; i < num; i++){
    newStr = newStr.concat(str);
  }
  return newStr;
}

function upperFirst(str){
  return str[0].toUpperCase().concat(str.slice(1));
}

function flatten(arr){
  return arr.reduce(function(acc,next){
    return acc.concat(next);
  },[]);
}


function zip(...arr){
  var resultArr = [];
  arr[0].forEach(function(val,idx){
    var holderArr = [];
    arr.forEach(function(v,i){
      holderArr.push(arr[i][idx]);
    })
  resultArr.push(holderArr);
  })
  return resultArr;
}

function unzip(...arr){
  var resultArr = [];
  arr[0][0].forEach(function(val,idx){
    var holderArr = [];
    arr[0].forEach(function(v,i){
      holderArr.push(arr[0][i][idx]);
    })
  resultArr.push(holderArr);
  })
  return resultArr;
}


function flip(fn){
  return function(...args){
    return fn(...args.reverse());
  }
}

function flattenDeep(arr){
  var newArr = [];
  function helper(a){
    for(var i = 0; i < a.length; i++){
      if(Array.isArray(a[i])) helper(a[i]);
      else newArr.push(a[i]);
    }
  }
  helper(arr);
  return newArr;
}

