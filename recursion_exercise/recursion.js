function productOfArray(arr){
  var total = 1;
  
  function helper(arr){
    if(arr.length > 0){
        total = total * arr[0];
        helper(arr.slice(1));
    } 

  }

  helper(arr);

  return total;
}



function contains(obj, val){
    for(var key in obj){
        if(obj[key] === val){
            return true;
        } else if(typeof(obj[key]) === "object") {
            return contains(obj[key], val);
        } else {
            return false;
        }
    }
}

function collectStrings(obj){
    var newArr = [];
   
    function helper(obj){
      for(var key in obj){
        if(typeof(obj[key]) === "string"){
            newArr.push(obj[key]);
        } else if(typeof(obj[key]) === "object") {
            return helper(obj[key]);
        } 
    }
  }

     helper(obj);

    return newArr;
}

function realSize(arrays) {
  var newArr=[];
  
  function helper(arrays){
    for(var i = 0; i < arrays.length; i++){
        if(Array.isArray(arrays[i])){
            helper(arrays[i]);
        } else {
            newArr.push(arrays[i]);
        }
    }
  }

  helper(arrays);
  return newArr.length;
}


function search(arr, val){
   var count = 0;
   
   function helper(arr, val){
       if(arr.length === 0){
        count = -1;
        return count;
    } else if(val === arr[0]){
      return count;
    } else  {
         count = count + 1;
         helper(arr.slice(1), val);
    }
   }
   
   helper(arr, val);
   return count; 
}

function binarySearch(arr, target){
    var max = arr.length - 1;
    var min = 1;
    var index;


    
    function helper(arr, target, max, min){
        var avg = (max + min) / 2;
        index =  Math.floor(avg);

    
      
       
       if(arr[index] === target ){
           return index;
       } 
        

       if(arr[index] < target){
           min = index + 1;
           helper(arr, target, max, min);
       } else {
            max = index - 1;
            helper(arr, target, max, min);
       }
        if(max < min){
         return -1;
       }

    }

    helper(arr, target, max, min);
    return index;

}





