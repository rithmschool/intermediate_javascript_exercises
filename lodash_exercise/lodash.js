
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

function flip(){

}

function cloneDeep(){

}

function sumBy(){

}

function inRange(){

}

function has(){

}

function omit(){

}

function pick(){

}

function pickBy(){

}

function omitBy(){

}

function pad(){

}

function repeat(){

}

function upperFirst(str){

}

function flatten(){

}

function flattenDeep(){

}