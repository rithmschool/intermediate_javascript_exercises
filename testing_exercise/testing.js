function replaceWith(str, oldChar, newChar){
	return str.replace(RegExp(oldChar,"g"), newChar)
}

// console.log(
// replaceWith("awesome", "e", "z") 
// )

function expand(arr, num){
	let result = [];

	for(let i = 0; i <  num; i++){
		result = result.concat(arr);		
	}

	return result;
}

// console.log(
// expand([1,2,3],4), //[1,2,3,1,2,3,1,2,3]
// expand(["foo", "test"],1) //["foo","test"]
// 	)

function acceptNumbersOnly(){

	for(let i =0; i < arguments.length; i++){
		if(typeof arguments[i] !== 'number' || isNaN(arguments[i])){
			return false;
		}
	}
	return true;
}


// console.log(
// acceptNumbersOnly(1,"foo"), // false
// acceptNumbersOnly(1,2,3,4,5,6,7), // true
// acceptNumbersOnly(1,2,3,4,5,6,NaN)  // false
// )



function mergeArrays(arr1, arr2){
	return arr1.concat(arr2)
						 .sort((a,b) => a - b);
}
// console.log(
// mergeArrays([2,1],[3,4]) // [1,2,3,4]
// )

var obj1= {
    name: "Foo",
    num: 33
}

var obj2 = {
    test: "thing",
    num: 55
}


function mergeObjects(obj1, obj2){
	return Object.assign(obj1, obj2);
}


// console.log(
// mergeObjects(obj1, obj2)
// 	)











