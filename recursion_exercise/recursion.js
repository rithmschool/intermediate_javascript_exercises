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

	    	// if the typeof of the value in that object equivalent to an object? If yes, then call the function again.
			// use object[key] as the mechanism for running through the object. at every point object[key] is different...
	    	// need mechanism for evaluating whether each element is a string. 
	   
	    }
  	
    	// 
    	// return checkForString(element);
    }

     //Need to call the function helper to get it build our array

    return arr;
}