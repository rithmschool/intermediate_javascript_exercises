// General comments - I understand the rationale for using recursion but I'm confused by at least 2 things -

// 1 - the mechanism we use to make our input smaller for each execution of our recursion 
// e.g. for arrays/strings, we use shift() or array.slice(1). But for objects ?

// 2 - I think I understand why you'd want to use an inner function 
// but which function do you call with which input? and how does this repeat/vary?


function productOfArray (arr){
    if (arr.length === 0) {
        return 1;
    }

    return arr[0] * productOfArray(arr.slice(1));
    
}


function collectStrings (obj){
    var arr = [];
    
    function checkForString (object){

    	// Handle base case first. When do we stop recursion? When we've gone through every element in obj, return false ??
    	// If we check the typeof of something that doesn't exist in object, we get undefined...but typeof(null) === "object"

	    for (var key in object) {	

	    	if (typeof object[key] === "string")  {  
	    		arr.push(object[key]);

	    	// loop through every key in the object, if the typeof that value is a string, then push that value to the arr array

	    	}

	    	if (typeof object[key] === "object"){
	    		checkForString(object[key]);
	    	}
	   
	    }
    }
    return arr;
}

// similar approach to the code for collectStrings. 
// however, in this case, we're searching whether each key in obj 
// is our value i.e. 2nd argument

function contains (object, value){
    var result = false; 

    function evaluator (obj, val){
        for (var key in obj){
            if (obj[key] === val){
                result = true; 
            } else return evaluator(obj[key], val)
        }
    }
    evaluator(object, value);
    return result; 
}

function stringifyNumbers (obj){

    // 3 possibilities when we evaluate each value in our obj
    /// 1) value could be a number --> so we convert to string
    // 2) value could be an object which needs to be recursed through
    // 3) value could be a value that is neither a number nor an object that needs to be recursed through, so we just assign this in our new object

    var newObj = {}
    for (var key in obj){
        if (typeof obj[key] === "number"){
            newObj[key] = obj[key].toString()
        }else if (typeof obj[key] === "object" && Array.isArray(!obj[key]))  // checks each value to see whether, it is an object that is NOT an array
            {newObj[key] = stringifyNumbers(obj[key]);
        }else {newObj[key] = obj[key]}

        }
        return newObj;
    }

// basic idea for search, we first define our pointers i.e. index of array
// if the value has not been found, then we move our pointers so we can check other elements in the array
function linearSearch (array, value, startIndex = 0, endIndex = array.length -1) {
    if (startIndex > endIndex){
        return -1;
    }
    else if (array[startIndex] !== value){
        linearSearch(array, value, startIndex + 1, endIndex); // if value not found, call linearSearch starting from the next element in array
    }
    
}


function binarySearch (array, value, low = 0, high = array.length -1){
     // use default parameters to set initial values for our low pointer and high pointer

    var mid = Math.floor((low + high)/2);  // define a midpoint 
    if (low > high){
        return - 1;
    } else if (array[mid] === value) {   
        return mid;
    } else if (array[mid] > value) {
        // move your pointer so you get rid of values that are to the right of mid and apply BinarySearch again
       return binarySearch(array,value, low , mid - 1);

    } else return binarySearch(array, value, mid + 1, high)     // move pointer to get rid of values to the left of midpoint and apply BS again           

    // if our value is bigger than values at the left of
}


