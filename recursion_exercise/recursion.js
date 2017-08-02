//productOfArray
function productOfArray(arr) {
	if(arr.length === 0) {
		return 1;
	}
	return arr[0] * productOfArray(arr.slice(1));
}

//collectStrings
function collectStrings(obj) {

	var finalArray = [];

	function collectStringsHelper(objH) {

		for(var n in objH) {

			if(typeof objH[n] === 'string') {
				finalArray.push(objH[n]);
			} else {
				return collectStringsHelper(objH[n])
			}
		}

	}
	collectStringsHelper(obj);
	return finalArray;

}

//contains
//input: nested object
//output: boolean
//process: recurse thru a nested object and look for a value 
function contains(obj, val) {
  for (var key in obj) {
    if (obj[key] === val) {
        return true;
    }

    if (typeof obj[key] === 'object') {
      if (contains(obj[key], val)) {
        return true;
      }
    }
  }

  return false;
}


function realSize(arrays) {
  // Force be with you, code warrior!
  var count = 0;
  
  for(var i = 0; i < arrays.length
  if(Array.isArray(arrays)) {
    return realSize(arra
  }
  
  return 0;
}













