function replaceWith(str,charOut,charIn){
	return str.split("").map(function(val){
		if(val === charOut){
			return charIn;
		} 
		return val;
	}).join("");
}

function expand(arr,num){
	var newArr = [];
	for(var i = 0; i < Math.floor(num); i++){
		newArr = newArr.concat(arr);
	}
	return newArr;
}

function acceptNumbersOnly(){
	if(arguments.length === 0){
		return false;
	}
	for(var i = 0; i < arguments.length; i++){
		if(typeof arguments[i] !== "number" || isNaN(arguments[i])){
			return false;
		}
	}
	return true;
}

function mergeArrays(arr1,arr2){
	return arr1.concat(arr2).sort(function(a,b){
		return a - b;
	});
}

function mergeObjects(obj1, obj2) {
    var newObj = {};
    for(var key in obj1){
        newObj[key] = obj1[key];
    }
    for(var key in obj2){
        newObj[key] = obj2[key];
    }
    return newObj;
}