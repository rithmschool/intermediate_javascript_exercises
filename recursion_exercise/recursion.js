function productOfArray(arr){
    if(arr.length === 0){
        return 1;
    }
    return arr.shift() * productOfArray(arr);
}



function contains(nestedObject, value){

  function containsHelper(obj, value){
      for(var key in obj){
          if(typeof obj[key] === "object"){
             return containsHelper(obj[key], value);
          }
          else{
             return obj[key] === value;
          }
      }
  }
  return containsHelper(nestedObject, value);
}



function collectStrings(obj){
  var arr = [];
  function collectStringsHelper(obj){
      for(var key in obj){
          if(typeof obj[key] === "object"){
              collectStringsHelper(obj[key]);
          }
          else{
              arr.push(obj[key]);
          }
      }
  }
  collectStringsHelper(obj);
  return arr;
}


function realSize(arrays) {
  var numberOfIntegers = 0;
  // Force be with you, code warrior!
  function realSizeHelper(arrays){
    for(var i=0; i<arrays.length; i++){
      if(Array.isArray(arrays[i])){
        return realSizeHelper(arrays[i]);
      }else{
        numberOfIntegers+=1;
      }
    }
  }
  realSizeHelper(arrays);
  return numberOfIntegers;
}

//realSize([[[1]],2,3,[4,[5,[6]]]])



function SumSquares(l){
    var sum = 0;
    function sumSquaresHelper(l){
      for(var i=0; i<l.length; i++){
        if(Array.isArray(l[i])){
          sumSquaresHelper(l[i]);
        }else{
          sum = sum + (l[i] * l[i]);
        }
      }
    }
    sumSquaresHelper(l);
    return sum;
}

function replicate(times, number){
  var arr = [];
  
  function replicateHelper(times, number){
    if(times === 0){
      return;
    }
    arr.push(number);
    replicateHelper(times-1, number);
  }
  replicateHelper(times, number);
  return arr;
}

//replicate(3, 5);



function search(arr, n, count){
  if(arguments.length === 2) {var count = 0;}
  if(arr.length === count){
    return -1;
  }
  else if(arr[count] === n){
      return count;
  }
  else{
      return search(arr, n, ++count);
  }

}

//search([1,2,3,4,5], 1);


function binarySearch(arr, search){
  function binarySearchHelper(arr,search, l, r){
      if(l <= r){
         var mid = Math.floor((l + r) / 2);
          if(arr[mid] > search){
              return binarySearchHelper(arr, search, l, mid-1);
          }
          else if(arr[mid] < search){
              return binarySearchHelper(arr, search, mid+1, r);
          }
          else{
              return mid;
          }
      } 
      else{
        return -1;
      }  
  }
    return binarySearchHelper(arr, search, 0, arr.length-1);
}


function stringifyNumbers(obj){
  var newObj = {};
  for(var key in obj){
    if(typeof obj[key] === "object" && !Array.isArray(obj[key])){
      newObj[key] = stringifyNumbers(obj[key]);
    }else if(typeof obj[key] === "number"){
       newObj[key] = obj[key].toString();
    }else{
      newObj[key] = obj[key];
    }   
  }
  return newObj;
}


