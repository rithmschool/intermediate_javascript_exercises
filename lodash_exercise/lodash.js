
function drop(arr, index){
  if(index === undefined){
      return arr.slice(1);
  } else {
      return arr.slice(index);
  }
}


function fromPairs(arr){
    var newObj = {};
    arr.forEach(function(item){
        newObj[item[0]] = item[1];
    })
    return newObj;
}



function head(arr){
    return arr[0];
}


function take(arr, index){
    if(index === undefined){
        return arr.slice(0,1);
    } else {
        return arr.slice(0, index);
    }
}

function takeRight(arr, index){
    
    if(index === undefined){
        return arr.slice(arr.length -1);
    }  else if(index > arr.length){
        return arr.slice();
    } else  {
        return arr.slice(arr.length - index);
    }
        }



function takeWhile(arr, callback){
    var newArr = [];
    arr.forEach(function(item){
        if(callback(item)){
            newArr.push(item);
        }
    })
    return newArr;
}

function union(arr1, arr2){
    var newArr = arr1.concat(arr2);
    var lastArr = [];
    newArr.forEach(function(item){
      if(lastArr.indexOf(item) === -1){
          lastArr.push(item);
      }
    })
    return lastArr;
}


function zip(arr1, arr2, arr3){
   
 
 }

function unzip(){

}


   function zipObject(arr1,arr2){
    var obj={};
    for(var i = 0; i < arr1.length; i++){
        obj[arr1[i]] = arr2[i];
    }

    return obj;
}


function includes(collection, target, startIndex){
    if(typeof(collection) === 'string'){
    if(collection.indexOf(target) !== -1){
        return true;
    } else {
        return false;
    }
   }
   if(Array.isArray(collection)){
       if(startIndex !== undefined){
           var slicedArr = collection.slice(startIndex);
           if(slicedArr.indexOf(target) !== -1){
           return true;
       } else{
           return false;
       }

       }else if(collection.indexOf(target) !== -1){
           return true;
       } else{
           return false;
       }
   }

   if(typeof(collection) === "object"){
       for(var key in collection){
           if(collection[key] === target){
               return true;
           } 
       }
   }
}

function sample(){

}


 function flip(fn){
    return function reverseArgs(){
        var args = Array.from(arguments).reverse()//getting arguments and reversing them
        //arguments refers to inner function arguments which when outer function stored in variable , the variable arguments = inner function arguments
        return fn(...args)//spread array values into their own parameter
    }
}



function cloneDeep(){

}

function sumBy(arr, callback){
    var objTotal = 0;
    for(var i = 0; i < arr.length; i++){
        if (typeof arr[i] === "number") {
    objTotal += callback(arr[i]);
    } 
        if(typeof(arr[i] === "object")){
        for(var key in arr[i]){
            if(typeof(arr[i][key] === "object")){
                objTotal += arr[i][key];
            } 
        }
    } 
}
   return objTotal;
}


function inRange(target, start, end) {
    if (target > start && target < end) {
        return true;
    } else if (end === undefined) {
        end = start;
        start = 0;
        if (target > start && target < end) {
            return true;
        }
    } else if (start > end) {
        [start, end] = [end,start];
        /*var temp = start;
        start = end;
        end = temp;*/
        if (target > start && target < end) {
            return true;
        }
    }
    return false;
}

function has(){

}

function omit(obj, arr) {
    var newObj = {};
    function helper(obj, arr) {
        for (let key in obj) {
            for (let i = 0; i < arr.length; i++) {
                if (key !== arr[i]) {
                    newObj[key] = obj[key];
                    delete obj[key];
                    arr.shift();
                    return helper(obj, arr);
                } else {
                    console.log('do nothing');
                    delete obj[arr[i]];
                    arr.shift();
                    return helper(obj, arr);
                }
            }
        }
    }
    helper(obj, arr);
    return newObj;
}

function pick(obj, arr) {
    let newObj = {};
    for (var key in obj) {
        if (arr.indexOf(key) !== -1) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

function pickBy(obj, callback) {
    var newObj = {};
    for (var key in obj) {
        if (callback(obj[key])) {
            newObj[key] = obj[key]
        }
    }
    return newObj;
}



function omitBy(obj, callback) {
    var newObj = {};
    for (var key in obj) {
        if (!callback(obj[key])) {
            newObj[key] = obj[key]
        }
    }
    return newObj;
}

function padEnd(str, strLength, padChar) {
    let diff = 0;
    let resultString = "";
    let strRepeat = "";
    let padding =" ";
     if(str.length >= strLength){
        return str;
    } else {
        
        diff = strLength - str.length;
    
     if (padChar === undefined) {
        padChar = " ".repeat(3);
         resultString = str + padChar;
    } else {
         padding = strRepeater(padChar);
         resultString = str + padding;
    }
}
   
    function strRepeater(str) {
        for (let i = 0; i < diff - 1; i++) {
            if (i === diff - 2 ) {
                i = 0;
                strRepeat += str[i];
                break;
            }
            strRepeat += str;
        }
        return strRepeat;
    }
    return resultString;
}



function repeat(str, num) {
    let newStr = "";
    for (let i = 0; i < num; i++) {
        newStr += str;
    }
    return newStr;
}

function upperFirst(str){

}

function flatten(){

}

function flattenDeep(){

}