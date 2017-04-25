function drop(arr, amount){
	if(amount === undefined){
		amount = 1;
	}
	return arr.slice(0+amount);
}

function fromPairs(arr){
	var obj = {};
	arr.forEach(function(val){
		obj[val[0]] = val[1];
	});
	return obj;
}

function head(array){
	return array[0];
}

function take(arr, takeAmount){
	if(takeAmount === undefined){
		takeAmount = 1;
	}
	return arr.slice(0, takeAmount);
}

function takeRight(arr, rightAmount){
	if(rightAmount === undefined){
		rightAmount = 1;
	}
	if(arr.length-rightAmount < 0){
		return arr;
	}
	return arr.slice(arr.length-rightAmount);
}


function takeWhile(arr, callback){
	var newArr = [];
	arr.forEach(function(val){
		if(callback(val)){
			newArr.push(val);
		}
	});
	return newArr;
}



function union(arr1, arr2){
	arr = arr1.concat(arr2);
    return arr.reduce(function(previousValue, nextValue){
    	if(!previousValue.includes(nextValue)){
        	previousValue.push(nextValue);
    	}
    	return previousValue;
	},[]);
}

function zip(arr1, arr2, arr2){
	var length = 0;
	var newArr = [];
	for(var i=0; i<arguments.length; i++){
		var length = Math.max(length, arguments[i].length);
	}
	for(var i=0; i<length; i++){
		var arr = [];
		for(var j=0; j<arguments.length; j++){
			arr.push(arguments[j][i]);
		}
		newArr.push(arr);
	}
	return newArr;
}

function unzip(){

}

function zipObject(){

}

function includes(){

}

function sample(){

}

function flip(){

}

function cloneDeep(){

}

function sumBy(){

}

function inRange(){

}

function has(){

}

function omit(){

}

function pick(){

}

function pickBy(){

}

function omitBy(){

}

function pad(){

}

function repeat(){

}

function upperFirst(str){

}

function flatten(){

}

function flattenDeep(){

}