function replaceWith(string, char1, char2){
	var stringArr = string.split("");
	stringArr.forEach(function(arrayItem,index){
		if(arrayItem===char1){
			stringArr[index]=char2;
		}
	});
	return stringArr.join("");
}

replaceWith("Foo","F","B");


function expand(array,num){
	var results=[];
	for(var x=0; x<num; x++){
		results = results.concat(array);
	}
	return results;
}

expand([4,5,6],2);

function acceptNumbersOnly(){
	var onlyNumbers = true;
	var argsArray = [].slice.call(arguments);
	for(var x=0; x<argsArray.length; x++){
		if(argsArray[x] !== argsArray[x]){
			onlyNumbers = false;
			break;
		} else if (typeof argsArray[x] !== "number"){
			onlyNumbers = false;
			break;
		}
	}
	return onlyNumbers;
}

acceptNumbersOnly(1,NaN,2,3);

function mergeArrays(array1,array2){
	var results = array1.concat(array2);
	return results.sort();
}

mergeArrays([30,20,10],[3,2,1,5]);

var obj1= {
    name: "Foo",
    num: 33
}
var obj2 = {
    test: "thing",
    num: 55
}

function mergeObjects(obj1,obj2){
	var newObject = {};
	for(prop in obj1){
		newObject[prop] = obj1[prop];
	}
	for(prop in obj2){
		newObject[prop] = obj2[prop];
	}
	return newObject;

}
mergeObjects(obj1, obj2);

