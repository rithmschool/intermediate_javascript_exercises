
function productOfArray(arr){
	if (arr.length === 2) return arr[0] * arr[1];
	return arr[0] * productOfArray(arr.slice(1));
}

function collectStrings(obj){

	var stringsArr = [];
	//base case: all nodes in the object are checked and put onto an array? let's see.
	// iterate through object.
	// if value is a string, pop onto array?
	// if value is an array or object, recurse.
		function strHelp(obj){
			var keys = Object.keys(obj);

			if (keys.length === 0) return;

			for (var i = 0; i < keys.length; i++){
				if (typeof obj[keys[i]] === 'string'){
					stringsArr.push(obj[keys[i]]);
				}
				if (typeof obj[keys[i]] === 'object'){
					strHelp(obj[keys[i]]);
				}
			}
		}

	strHelp(obj);
	return stringsArr;
}

function contains(obj, target){

	var successFlag = false;

	function containHelp(obj){

		var keys = Object.keys(obj);

		//if (keys.length === 0) return false;

		for (var i =0; i<keys.length; i++){
			if (typeof obj[keys[i]] !== 'object'){
				//look compare value
				// if value is what we're looking for, return true.
				if ( obj[keys[i]] === target){
					successFlag = true;
					// return true;
				} 
			} else{
				containHelp(obj[keys[i]]);
			}
		}
	}

	containHelp(obj);
	return successFlag;

}
/*
function contains(obj, target){
	var keys = Object.keys(obj);

	for (var i = 0; i<keys.length; i++){
		if (typeof obj[keys[i]] !== 'object'){
			if (obj[keys[i]] === target){
				return true;
			}
		} else{
			contains(obj[keys[i]]);
		}
	}
	return false;
}
*/
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44
                    }
                }
            }
        }
    }
}