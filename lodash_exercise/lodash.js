function drop(arr, n){
	// if (arr.length <=2){
	// 	// should remove all the elements of an array if the second parameter is greater than the length of the array
	// 	return []
	
	//it("should remove the first element of an array when no second parameter is passed", function(){
  //   expect(drop([1,2,3])).to.deep.equal([2,3])
  // });
  	if (arguments.length < 2){
  		return arr.slice(1);
  	}

  // 	it("should remove all the elements of an array if the second parameter is greater than the length of the array", function(){
  //   expect(drop([1,2,3],10)).to.deep.equal([])
  // });

  	else if (n > arr.length){
  		return [];
  	}
  	//should not remove anything if the second parameter has a value of 0
  	// else if (n = 0){
  	// 	return arr; 
  	// }

  	// expected [ 2, 3 ] to deeply equal [ 1, 2, 3 ]
	
	return arr.slice(1  - n);

	// should remove the first element of an array when no second parameter is passed
}


function fromPairs(arr){

	// .fromPairs([['a', 1], ['b', 2]]);
	// => { 'a': 1, 'b': 2 }
	var obj = {};
	for (var i = 0; i < arr.length; i++){
		obj[arr[i][0]] = arr[i][1];
	}

	return obj;

}

function zipObject(arr1, arr2){
// 	zipObject (['a', 'b'], [1, 2] );
// // => { 'a': 1, 'b': 2 }

	var obj = {};
	for (var i = 0; i < arr1.length; i++){
		obj[arr1[i]] = arr2[i];


		// obj[arr[0][i]] = arr[1][i];
	}

	return obj;
}

function head(arr){
	return arr.shift();

}

function take(arr, n){
	// Creates a slice of array with n elements taken from the beginning.

	if (arguments.length === 1){
		return arr.slice(0,1);
	}
	return arr.slice(0, n);
	 
}

function takeRight(arr, n){

	//Creates a slice of array with n elements taken from the end.

	if (arguments.length === 1){
		return arr.slice(arr.length -1)
	}

	// it("returns an empty array if the second parameter is 0", function(){
 //    expect(takeRight([1, 2, 3], 0)).to.deep.equal([])
 //  });

 	if (n === 0) return [];


	// A negative index can be used, indicating an offset from the end of the sequence. 
	// slice(-2) extracts the last two elements in the sequence.

	return arr.slice(-n);


}

function sample(arr){
	return arr[arr.length * Math.round(Math.random())];

}

function flatten (arr){

	var newArr = [];
  
  arr.forEach(function(val){
    if (Array.isArray(val)){
      newArr = newArr.concat(val);
    }
    else {
      newArr.push(val);
    }
  })
  
  
  return newArr;
  
}


function flattenDeep(arr){

	// Two possibilities, each value in array is either an array or a non-array (number or string). 
	// if a value is a number, we want to push this value into our new array
	// if a value s an array, we can concat this with our new Array

  var newArr = [];
  
  arr.forEach(function(val){
    if (Array.isArray(val)){
      newArr = newArr.concat(flattenDeep(val));
    }
    else {
      newArr.push(val);
    }
  })
  
  return newArr;
  
}


function repeat(str, n){
	return str.repeat(n);
}

function upperFirst(str){
	return str[0].toUpperCase() + str.substring(1);

}

function inRange(number, start, end){

	// Tried 3 approaches for dealing with cases when 2 arguments are passed, None worked..

	// Option 1
	// start = (typeof start === undefined)? 0 : start;

	// // or 

	// if (arguments.length === 2 ) 
 // 		arguments[0] = number;
 // 		arguments[1] = end;
 // 		start = 0;
    
 //    // or

 //    if (arguments.length === 2 && 0 < Math.round(number) < end)

 //    	// main body execution 
    
	if (start < Math.round(number) < end) {
	 		return true;
	 	}		
 	else 
 		return false;
		
}

function includes(value, collection, fromIndex){
	// test ==> 'Blue Whale'.includes('blue')

	// it("should return true if a value exists in an array", function(){
  //   expect(includes([1, 2, 3], 1)).to.equal(true)
  // });

  // collection (Array|Object|string): The collection to inspect.
// value (*): The value to search for.
// [fromIndex=0] (number): The index to search from.

	// if (typeof value === "string"){
	// 	return collection.includes(value);
	// }


  // [1, 2, 3].includes(2)


}

function union(arr1, arr2){
	var newArr = arr1.concat(arr2);
	var result = []

	// so now newArr = [2, 1, 2];

	for (var i = 0; i < newArr.length; i++){
		if (!result.includes(newArr[i])){
			result.push(newArr[i])
		}

		// if my element is not in newArr, then push into newArr
		// else, return 
		return result;
	}


	// expect(union([2], [1, 2])).to.deep.equal([2, 1])

	// newArr.filter(function(val){
	// 	return val
	// })



}




function sumBy(arr, key){
	arr.reduce(function(a, b){
		return a + b; 
	})
	//incomplete


}






function pick(obj, arr){
	// create new object
	var newObj = {};
	// use forEach to iterate through each val in arr
	// if val is in obj, then assign that key-value to the newObj

	arr.forEach(function(val){
		  if (val in obj){
		    
		  	newObj[val] = obj[val]

		    // Object.assign(newObj, obj);  // Object.assign copies the entire object instead of the key-value pairs you want!
		  }
	})	
	return newObj;
}


function omit(obj, arr){
	// this should be easy once I get pick() to


}

function pickBy(object, func){
// var object = { 'a': 1, 'b': '2', 'c': 3 };

// describe("#pickBy", function(){
//   it("should return a new object with all keys picked by a truthy condition in a callback function", function(){
//     function isNumber(val){
//       return typeof val === 'number';
//     }
//     var object = { 'a': 1, 'b': '2', 'c': 3 };
//     expect(pickBy(object, isNumber)).to.deep.equal({ 'a': 1, 'c': 3 })
//   });
// });
 
// _.pickBy(object, _.isNumber);
// // => { 'a': 1, 'c': 3 }

// Creates an object composed of the object properties 
// predicate returns truthy for. The predicate is invoked with 
// two arguments: (value, key).



// Solution
// apply func on every value of object
// return the key-value pairs which run true; 




}

function omitBy(){

	// will attempt once I get omit();

}

function padEnd(){

}



// yet to attempt



function zip(){

	// yet to attempt

}

function flip(){
	// need to have a function inside ()
	// returns a function (an anonymous function)
	// invoke the function with an array 
	// flip them
	// call them with the reversed array
	// use apply to pass in array


}

function unzip(){
	// yet to attempt
}



function cloneDeep(value){

	// Don't understand what this function does
    

}

function has(){

	// Don't understand what this function does

}