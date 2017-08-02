function productOfArray(array){
	//base case
	if(array.length === 0){
		return 1
	}
	//different input
	return array[0] * productOfArray(array.slice(1))
}
//input: object
//output: true/false if object contains value

function contains(obj, value){
	for(var key in obj){
	  if(obj[key] === value){
             return true;
      } 
      if(typeof obj[key] === "object"){
           if(contains(obj[key], value) === true){
               return true
	  	}
	  }
	}
	return false;
}

function collectStrings(obj){
    var array =[];
    function helper(obj){
       for(var key in obj){
           if(typeof(obj[key]) === "string"){
               array.push(obj[key]);
           } else (
                helper(obj[key])
           )

       }
    }

    helper(obj);
    return array;
}

function search(array, lookFor){
    var index = 0;
    var originalLength = array.length;
    function helper(array,lookFor){
        //base case
          if(index === originalLength){
               index = -1
               return;
          }

          if(array[0] === lookFor){
                return;
          } 
          index+=1
          helper(array.slice(1), lookFor);
    }
    helper(array,lookFor);
    return index;
}


