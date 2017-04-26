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
    
    function checkForString (element){

    	// Handle base case first. When do we stop recursion? When we've gone through every element in obj, return false ??
    	// If we check the typeof of something that doesn't exist in object, we get undefined...but typeof(null) === "object"

    	if (typeof(element) === null) {  //undefined?
    		return ;
    	}

    	// need mechanism for evaluating whether each element is a string. 
    	// if result of test is true; ---> push that element into our array called arr

    	if (typeof(element) === "string"){
    		arr.push(element);


    	}

    	return checkForString(obj[element]);

    	// how do I make my object "smaller" each recursion? Can I 
    	// my brain's stack is overflowing :(
    	

    	// need to call checkForString using multiple inputs  i.e. recursively, 
    	

    	// return checkForString(element);


        }

    checkForString(); //Need to call the function helper to get it build our array

    return arr;


}