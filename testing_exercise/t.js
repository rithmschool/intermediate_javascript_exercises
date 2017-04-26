
function toughRecursiveProblem(input){
    
    var arrayToRemember = [];
    
    function helperFunction(){
        arrayToRemeber.push('whatever')
        return helperFunction(smaller input)
    }

    return helperFunction(input)
    
}


function flatten (arr) {
	var newArr = [];

	function flattenHelper(){
		//iterate through, check if its an array if so recurse
		// if its not..push into newArr
	}
	flattenHelper(arr)

	return newArr;
}