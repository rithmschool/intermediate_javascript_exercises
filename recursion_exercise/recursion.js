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
//    sumSquaresHelper(l);
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