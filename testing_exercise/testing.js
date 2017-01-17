    function addUpTo(n){
    	if(n < 1 || !Number.isInteger(n)) return;
		return (n * (n+1))/2;    	
    }


    function replaceWith(str,replaceChar,rWith){
    	var result = ""
    	for(var i=0; i<str.length; i++){
    		if(str[i] === replaceChar){
    			result = result + rWith;
    		}
    		else{
    		result = result + str[i];
    		}
    	}
    	return result;
    }


    function expand(arr, n){
    	var result = [];
    	for(var i=0; i<n; i++){
    		result = result.concat(arr);
    	}
    	return result;
    }

    function acceptNumbersOnly(){
    	for(var i=0; i<arguments.length; i++){
    		if(isNaN(arguments[i]) === true){
    			return false;
    		}
    	}
    	return true;
    }

    function mergeArrays(arr1, arr2){
    	arr1 = sort(arr1);
    	arr2 = sort(arr2);
    	return arr1.concat(arr2);
    }	

    function sort(arr){
    	for(var i=0; i<arr.length-1; i++){
    		for(var j=0; j<arr.length-1; j++){
    			if(arr[j] > arr[j+1]){
    				var temp = arr[j];
    				arr[j] = arr[j+1];
    				arr[j+1] = temp;
    			}
    		}
    	}
    	return arr;
    }


    function mergeObjects(obj1, obj2){
        for(var key in obj2){
            obj1[key] = obj2[key];
        }
        return obj1;
    }


