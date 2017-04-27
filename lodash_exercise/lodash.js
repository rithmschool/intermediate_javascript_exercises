function drop(arr, num){
    if(num === undefined) {
    	num = 1;
    }
    if(num >= arr.length) {
    	num = arr.length;
    }
    return arr.slice(num);
}

function fromPairs(pairsArr){
    var pairsDict = {};
    pairsArr.forEach(function(pair) {
        pairsDict[pair[0]] = pair[1]
    })
    return pairsDict;
}

function head(arr){
    if(arr.length === 0) return undefined;
    return arr[0];
}

function take(arr, num){
    if(num === undefined) {
    	num = 1;
    }
    if(num >= arr.length) {
    	num = arr.length;
    }
	return arr.slice(0, num);
}

function takeRight(arr, num){
    if(num === undefined) {
    	num = 1;
    }
    if(num >= arr.length) {
    	num = arr.length;
    }
	return arr.slice(arr.length-num, arr.length);
}

function union(arrays){
	var newArr = [];
	for(i=0; i<arguments.length; i++) {
		for(j=0; j<arguments[i].length; j++) {
			if(newArr.includes(arguments[i][j]) === false) {
				newArr.push(arguments[i][j]);
			}
		}
	}
	return newArr;
}

function zipObject(arr1, arr2){
	zipDict = {}
	arr1.forEach(function(val) {
		zipDict[val] = arr2[arr1.indexOf(val)]
	})
	return zipDict;
}

// function includes(arr, val, i) {
// 	if (arguments.length < 2) {return undefined;}
// 	i = (i || 0);

// 	if (Array.isArray(arguments[0]) {
// 		for(i; i<arguments[0].length; i++) {
// 		 	if(arguments[0][i] === arguments[1]) {
// 		 		return true;
// 		 	}
// 		}
// 	} else if (typeof arguments[0] === 'object') {
// 		for(key in arguments[0]) {
// 		 	if(arguments[0][key] === arguments[1])	{
// 				return true;	
// 		 	}
// 		}
// 	} else if (typeof arguments[0] === 'string') {
// 		return "I don't know!"
// 	} else return undefined;
// }

function sample(obj){
	var i = Math.round((obj.length-1)*Math.random());
	return obj[i];
}

// function cloneDeep(arrObjs){
// 	newArr = [];

// 	for(i=0; i<arrObjs.length; i++) {
// 		for(key in arrObjs[i]) {
// 			newArr.push({key: arrObjs[i][key]});
// 		}
// 	}
// }
// error note: should create a deep copy of an array

function sumBy(arrObjs){
	var sum = 0;
	for(i=0; i<arrObjs.length; i++) {
		for(key in arrObjs[i]) {
			sum += arrObjs[i][key]
		}
	}
	return sum;
}

function inRange(num, start, end){
	if(arguments.length === 2) {
		end = arguments[1];
		start = 0;
	}
	if (end < start) {
		return end <= num && num < start;
	}
	return start <= num && num < end;
}

// function has(){

// }

function omit(obj, arrToOmit){
	arrToOmit.forEach(function(val) {
		delete obj[val]
	})
	return obj;
}

function pick(obj, arrToIncl){
	newObj = {};
	arrToIncl.forEach(function(val) {
		newObj[val] = obj[val];
	})
	return newObj;
}

function pickBy(obj, toTest){
	newObj = {};
	for(key in obj) {
		if(toTest(obj[key])) {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}

function omitBy(obj, toTest){
	newObj = {};
	for(key in obj) {
		if(toTest(obj[key]) !== true) {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}

// function padEnd(){

// }

function repeat(str, times){
	var string = "";
	if (times === 0) return string;
	while(times > 0) {
		string = string + str;
		times -= 1;
	}
	return string;
}

function upperFirst(str){
	return str[0].toUpperCase() + str.slice(1);
}

// function flatten(multiArr){
// 	newArr = [];
// 	keepChecking = true;
// 	for(i=0; i<multiArr.length; i++) {
// 		if(Array.isArray(multiArr[i])) {
// 			while(keepChecking) {
// 				newArr.concat(multiArr[i]);
// 				keepChecking = false;
// 			} newArr.push(multiArr[i]);
// 		}	
// 	}
// }

////

function flattenDeep(){

}

function takeWhile(){

}

function zip(){

}

function unzip(){

}

function flip(){
	
}