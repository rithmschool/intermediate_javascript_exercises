function drop(arr, param){
	if (param === undefined) return arr.slice(1);
	if (param > arr.length) return [];
	if (param === 0 ) return arr;
	return arr.slice(param);
}

function fromPairs(arr){
	var returnObj = {};
	while (arr.length>0){
		var shiftArr = arr.shift();
		returnObj[shiftArr[0]] = shiftArr[1]
	}
	return returnObj
}

function head(arr){
	return arr[0];
}

function take(arr, param){
	if (param === 0) return [];
	if (param === undefined) return [arr[0]];
	if (param >= arr.length) return arr;
	return arr.slice(0,param);
}

function takeRight(arr, param){
	if (param === undefined) return [arr[arr.length-1]];
	if (param >= arr.length) return arr;
	if (param === 0) return [];
	return arr.slice(arr.length-param);
}

function takeWhile(){

}

function union(arr1,arr2){
    var unionArr = [];
    for (var i =0; i< arr1.length; i++){
        if (! unionArr.includes(arr1[i])) unionArr.push(arr1[i]);
    }
    for (var i =0; i< arr2.length; i++){
        if (! unionArr.includes(arr2[i])) unionArr.push(arr2[i]);
    }
    return unionArr;
}

function zip(...arrs){
	//let returnArr1 = [];
	//let returnArr2 = [];
	let returnArr = [];

	for (let i=0; i<arrs[0].length; i++){
		returnArr.push([]);
	}

	let arrLength = arrs[0].length;

    while (arrs.length > 0) {
        let curArr = arrs.shift();
        for (let i = 0; i< arrLength;  i++){
            //if (typeof curArr[i] !== "undefined"){
                returnArr[i].push(curArr[i]);
            //} else {
            //	returnArr[i].push(undefined);
            //}
        }
    }
    
    return returnArr;
}

function unzip(arrs){
	let returnArr = [];
	let makeArrays = arrs[0].length;

	for (let i = 0; i< makeArrays; i++){
		returnArr.push([]);
	}

	while (arrs.length > 0){
		let curArr = arrs.shift();

		for (let i = 0; i<makeArrays; i++){
			returnArr[i].push(curArr[i]);
		}
	}
	return returnArr;

}

function zipObject(keyArr, valArr){
	var returnObj = {};
	while (keyArr.length > 0){
		returnObj[keyArr.shift()] = valArr.shift() || undefined;
	}
	return returnObj;
}

function includes(arr, target, startIndex){
	startIndex = startIndex || 0;
	// ('abcd', 'bc') true
	if (typeof arr === 'string'){
		for (var i =startIndex; i<= arr.length-target.length; i++){
			if(arr.slice(i,target.length+i) === target){
				return true;
			} 
		}
		return false;
	}
	console.log(arr);
	if (typeof arr === 'object'){
		var keyArr = Object.keys(arr);
		var resultArr = [];
		for (var i=0; i<keyArr.length; i++){
            resultArr.push(arr[keyArr[i]])
		}
		arr = resultArr;
	}


	for (var i = startIndex; i < arr.length; i++){
		if (arr[i] === target) return true;
	}
	return false;

}

function sample(arr){
	return arr[Math.floor(Math.random()*arr.length)];
}

function flip(fn){
    return function(...innerArgs){
        return fn.apply(this, innerArgs.reverse())
        
    }
}

function cloneDeep(arr){
	return {};
}

function sumBy(objects, callback){
    if (typeof callback === 'function'){
    	return objects.reduce(function(acc, cur, idx, array){
    		acc += callback(cur);
    		// function(o) { return o.n; }
    		return acc;
    	},0)
    } else {
        // let's hope it's keys :)
        return objects.reduce(function(acc, cur, idx, array){
    		acc += cur[callback];
    		// function(o) { return o.n; }
    		return acc;
    	},0)
    }
}

function inRange(num, start, end){
    if (end < 0){
        var temp = end;
        end = start;
        start = temp;
    }
	if ( ! end) {
		end = start;
		start = 0;
	}

	return start < num && num < end;
}

function has(obj, ...targetKey){

    return targetKey.every(function(val, idx, array){
        if (obj[val]){
            return true;
        } else {
            // if obj[val] is an object, recurse
            return has(obj[val]) || false 
        }
    })
}

function omit(obj, arr){
  keysArr = Object.keys(obj);
  resultObj = {};

  for (var i = 0; i < keysArr.length; i++){
     if ( ! arr.includes(keysArr[i])) {
        resultObj[keysArr[i]] = obj[keysArr[i]];
     }
   }

   return resultObj;
}

function pick(obj, arr){
  keysArr = Object.keys(obj);
  resultObj = {};

  for (var i = 0; i < keysArr.length; i++){
     if (arr.includes(keysArr[i])) {
        resultObj[keysArr[i]] = obj[keysArr[i]];
     }
   }
   
   return resultObj;
}

function pickBy(obj, callback){
  keysArr = Object.keys(obj);
  resultObj = {};

  for (var i = 0; i < keysArr.length; i++){
     if (callback(obj[keysArr[i]]) ) {
        resultObj[keysArr[i]] = obj[keysArr[i]];
     }
   }
   
   return resultObj;
}

function omitBy(obj, callback){
  keysArr = Object.keys(obj);
  resultObj = {};

  for (var i = 0; i < keysArr.length; i++){
     if (! callback(obj[keysArr[i]]) ) {
        resultObj[keysArr[i]] = obj[keysArr[i]];
     }
   }
   
   return resultObj;
}

function padEnd(str, len, padString){
	padString = padString || "  ";
	padCopy = padString;
	padString = padString.split("");
	padCopy = padCopy.split(""); // copies of arrays create references!

	if (str.length === len) { return str;}

	stringArray = str.split("");

	while (stringArray.length < len){
		if (padString.length == 0) padString = padString.concat(padCopy)
		stringArray.push(padString.shift());
	}

	stringArray = stringArray.join("");
	return stringArray;
}

function repeat(str, num){
	if (num === 0) return "";
	if (num > 0){
		return str + repeat(str, num-1);
	} 
}

function upperFirst(str){
	str = str.split("");
	str[0] = str[0].toUpperCase();
	str = str.join("");
	return str;
}

function flatten(arr){
    var returnArr = []
    for (var i = 0 ; i < arr.length ; i++){
        if (! Array.isArray(arr[i])){
         returnArr.push(arr[i]);
        } else{
           // Now we have an array to deal with
            arr[i].forEach(function(val){
                returnArr.push(val);
             })         
        }
    }
    return returnArr;
}

function flattenDeep(arr){
	let returnArr = [];

	for (let i = 0; i< arr.length; i++){
		if (Array.isArray(arr[i])){
			returnArr = returnArr.concat(flattenDeep(arr[i]));
		} else {
			returnArr.push(arr[i]);
		}
	}
	return returnArr;

}








