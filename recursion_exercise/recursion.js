function productOfArray(array){

	var count = 1;

	function helper(array){
		if(array.length > 0){
			count = count * array[0];
			return helper(array.slice(1));
		}
	}

	helper(array)
	return count;
}

function contains(obj, val){
	for(var key in obj){
		if(obj[key] === val){
			return true;
		}else if(typeof(obj[key]) === "object"){
			return contains(obj[key], val);
		}else{
			return false;
		}
	}
}

function collectStrings(obj){

	var strings = [];

	function helper(obj){
		for(var key in obj){
			if(typeof(obj[key]) === "string"){
				strings.push(obj[key]);
			}else if(typeof(obj[key]) === "object"){
				return helper(obj[key]);
			}	
		}
	}
	helper(obj)
	return strings;
}

function search(arr, val){
	var count = 0;
	
	function helper(arr, val){
		if(arr.length == 0){
			count = -1;
		}else if(arr[0] === val){
        	return count;
	    }else{
			count++
			helper(arr.slice(1), val)
		}
	}
	helper(arr, val)
	return count;
}

function binarySearch(arr, target){
    var max = arr.length - 1;
    var min = 1;
    
    
    function helper(arr, target, max, min){
        var avg = (max + min) / 2;
        var index =  Math.floor(avg);
        
     
       if(arr[index] === target ){
           return index;
       } 

       if(max < min){
         return -1;
     }

       if(arr[index] < target){
           min = index + 1;
           return helper(arr, target, max, min);
       } else if(arr[index] > target){
           max = index -1;
            return helper(arr, target, max, min);
       }
    }
    return helper(arr, target, max, min);
    
}












