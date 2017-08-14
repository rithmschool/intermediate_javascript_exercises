function drop(arr, num){
  var dropArr = [];
  if(num === undefined) {
  	num = 1;
  }
  for(var i = num; i < arr.length; i++) {
  	dropArr.push(arr[i])
  }
  return dropArr;
}

function fromPairs(arr){
	var pairsObj = {};
	for(var i = 0; i < arr.length; i++) {
		pairsObj[arr[i][0]] = arr[i][1];		
	}
	return pairsObj;
}

function head(){
  if(arguments[0].length === 0) {
  	return undefined
  } else {
  	return arguments[0][0];
  }
}

function take(arr, num){
	var takeArr = [];
	if(arr.length === 0) {
		return takeArr;
	} 
	if(num === undefined) {
		takeArr.push(arr[0]);
	}
	if(num > arr.length) {
		num = arr.length;
	}

	for(var i = 0; i < num; i++) {
		takeArr.push(arr[i]);
	}
	return takeArr; 
}

function takeRight(arr, num){
	var arrRt = [];
	if(num === 0) {
		return arrRt;
	}	
	if(num === undefined) {
		arrRt.push(arr[arr.length-1]);
	}
	if(num > arr.length) {
		num = 1
	}
	for(var i = num-1; i < arr.length; i++) {
		arrRt.push(arr[i]);
	}
	return arrRt;
}

function union(arrays){
	var uniqArr = [];
	var singleArr = [];

	for(var i = 0; i < arguments.length; i++) {
		singleArr = singleArr.concat(arguments[i])
	}
	for(var i = 0; i < singleArr.length; i++) {
		if(uniqArr.indexOf(singleArr[i]) === -1) {
			uniqArr.push(singleArr[i]);
		}
	}
	return uniqArr;
}

function zipObject(arr1, arr2){
	var zipObj = {};
	for(var i = 0; i < arr1.length; i++) {
		zipObj[arr1[i]] = arr2[i];
	}
	return zipObj;
}

//Checks if value is in collection. If collection is a string, it's checked for a substring of value, otherwise SameValueZero is used for equality comparisons. If fromIndex is negative, it's used as the offset from the end of collection.
function includes(collection, value, indx){
//REFACTOR
	if(indx !== undefined) {
		startPt = indx;
	} else {
		startPt = 0;
	}
	if(typeof collection === 'string') {
		if(collection.indexOf(value, startPt) !== -1) {
			return true;
		}
			return false
	} else if(Array.isArray(collection)) {
		if(collection.indexOf(value, startPt) !== -1) {
			return true
		}
			return false
	} else {
		for (var n in collection) {
			if(collection[n] === value) {
				return true;
			}
		}
	}
}

function sample(arr){
	var randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
}

function cloneDeep(collection){
	var finalArr = [];
	function cloneDeepHelper(coll) {
		for(var i = 0; i < coll.length; i++) {
			if(Array.isArray(coll[i])) {
				finalArr.push(coll[i]);
			} else {
				var obj = {};					
				for(var n in coll[i]) {
					obj[coll[i][n]] = coll[i][n]; 
					finalArr.push(obj[coll[i][n]]);
				}
			}
		}
	}
	cloneDeepHelper(collection);
	return finalArr;
}

function sumBy(arr, param){
	var total = 0;
	for(var i = 0; i < arr.length; i++) {
		if(typeof param === 'function') {
			total += param(arr[i]); 
 		} else {
 			total += arr[i][param];
 		}
	}
	return total;
}

function inRange(num, start, end){

	if (end === undefined) {
		end = start;
		start = 0;
	}
	if (start > end) {
		var holder = start; 
		start = end; 
		end = holder;
	}
	if(num >= start && num < end) {
		return true;
	} return false;

}

function has(obj, path){
	if(Array.isArray(path)){
		var arrPath = path.join(".");
		if( obj+ arrPath === undefined)
			return false;
			return true;
	}

	if(obj.hasOwnProperty(path))
		return true;
		return false;
}

function omit(obj, paths){
	//create a copy of obj
	var copy = Object.assign({}, obj);
	for(var i = 0; i < paths.length; i++) {
		delete copy[paths[i]];
	}
	return copy;
}

function pick(obj, paths){
	var finalObj = {};
	
	for(let val of paths) {
		finalObj[val] = obj[val];
	}
	return finalObj;
}

function pickBy(obj, predicate){
	var finalObj = {};
	for(var n in obj) {
		if(predicate(obj[n])) {
			finalObj[n] = obj[n];
		} 
	}
	return finalObj;
}

function omitBy(obj, predicate){
	var finalObj = {};
	for(var n in obj) {
		if(!predicate(obj[n])) {
			finalObj[n] = obj[n];
		} 
	}
	return finalObj;
}

function padEnd(str, len, chars){
	var sl = str.length;
	if(sl === len) {
		return str;
	}
	if(sl < len & chars === undefined) {
		for(var i = 0; i < len-sl; i++) {
			str +=" ";
		}
		return str;
	} 
	if(sl > len) {
		str = str.substring(0, len);
	} 
	if(sl < len) {
		var loops = (len-sl)/chars.length;
		if(loops % 2 === 0) {
			for(var i = 0; i < loops; i++) {
				str += chars;
			}
		} else {
			for(var i = 0; i < Math.ceil((len-sl)/chars.length); i++) {
				str += chars;
			}
			str = str.substring(0, len);
		}
		return str;
	}
}

function repeat(str, num){
	var finalStr = "";
	if(num === undefined) {
		return "";
	}
	for(var i = 0; i < num; i++) {
		finalStr += str;
	}
	return finalStr;
}

function upperFirst(str){
	var result = str.split("");
	result[0] = result[0].toUpperCase();
	var finalStr = result.join("");
	return finalStr;
}

function flatten(array){
	var finalArr = []

	function flattenHelper (arr) {
		for(var i = 0; i < arr.length; i++) {
			if(Array.isArray(arr[i])) {
				for(var j = 0; j < arr[i].length; j++) {
					finalArr.push(arr[i][j]);
				}
			} else {
				finalArr.push(arr[i]);
			}
		}
		return finalArr;
	}
	flattenHelper(array);
	return finalArr;
}

function zip(){

}

function unzip(){

}

function flip(){

}

function flattenDeep(){

}
