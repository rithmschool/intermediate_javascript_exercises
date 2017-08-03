//Creates a slice of array with n elements dropped from the beginning.
	//_.drop([1, 2, 3]);
// => [2, 3]
function drop(array, n){
	if (n === undefined){
	  return array.slice(1);
	}
	return array.slice(n);

}


function fromPairs(array) {
  if(array.length === 0) {
    return undefined;
  } else {
    var obj = {};
    for(var i = 0; i < array.length; i++) {
      obj[array[i][0]] = array[i][1];
    }
    return obj;
  }
} 

function head(array){
	return array.shift();
}

function take(array, num){
	var newArr = [];
  	if (num === undefined) {
    	return [array[0]];
  	} else if (num >= array.length) {
    	newArr = array;
  	} else {
    	newArr = array.slice(0, num);
  	}
  	return newArr;
}


function takeRight(array, num){
	if (num === 0) {
    	return [];
  	}	else if (num >= array.length) {
    	return array;
  	} else if (num === undefined) {
    	return [array[(array.length - 1)]];
  	} else
    return array.slice(-num);
}

function union(arr1, arr2) {
  var newArr = arr1.slice();
  for (var i = 0; i < arr2.length; i++) {
    if (newArr.indexOf(arr2[i]) === -1){
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}

function zipObject(arr1, arr2) {
  var obj = {};
  for(var i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i];
  }
  return obj;
}

 
function includes(input, value, index) {
   //check type of input
  if (Array.isArray(input)) {
    if(index !== undefined){
      var slicedArr= input.slice(index);
      return (slicedArr[0] === value); 
    } else {
        return (input.indexOf(value) != -1);
    }
  } else if (typeof input === "string") {
    return (input.indexOf(value) != -1);  
  } else {
    return (Object.values(input).indexOf(value) > -1); 
  }

}

function sample(arr){
  return arr[Math.floor(Math.random() * (arr.length))];
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

function padEnd(){

}

function repeat(){

}

function upperFirst(str){

}

function flatten(){

}

function zip(){

}

function unzip(){

}

function flip(){

}

function flattenDeep(){

}
