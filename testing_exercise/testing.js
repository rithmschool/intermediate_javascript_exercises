

function replaceWith (word, charRemove, charReplace){
  // Hello Elie - this is yourself!
 // Two approaches: 

 // 1) if charRemove is a character in word, find the indexOf charRemove. 
 // 	use string method "replace" to substitute charRemove with charReplace

 // 2) Magically make the string "word" mutable. Then assign as follows:
 // 	word["charRemove"] = charReplace;

// 3) I'm guessing there's a simpler way that I'm overlooking..
}



function expand (arr, num){
	if (num <= 0){
		return "2nd argument provided is negative. This can not work here";
	}
	var newArr = [];
	for (var i = 0; i < num; i++){
      for (var j = 0; j < arr.length; j++){
        newArr.push(arr[j]);
      }
	}
	return newArr;


}

function mergeArrays (arr1, arr2){
  var arr  = arr1.concat(arr2);
  return arr.sort();
}

function mergeObjects (objA, objB){
  var obj ={};
  obj = Object.assign(obj, obj1, obj2);
  return obj;
}


function acceptNumbersOnly (...args){
	var result; 
	return args.every(function(element){
       return Number.isInteger(element) 
    
  });  
  
}

// function replaceWith (){

// }
