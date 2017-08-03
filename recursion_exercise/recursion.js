function productOfArray(arr){
	if(arr.length === 0) return 1;
	return arr[0] * productOfArray(arr.slice(1))
}

function collectStrings(obj){
	var newArr = [];
	function helper(newObj){
		for(var key in newObj){
			if(typeof newObj[key] === "object") helper(newObj[key]);
			if(typeof newObj[key] === "string") newArr.push(newObj[key]);
		}
	}
	helper(obj);
	return newArr;
}

function contains(obj, val){
	var result = false;
	function helper(helperObj){
		for(var key in helperObj){
			if(helperObj[key] === val) result = true;
			else if(typeof helperObj[key] === "object") helper(helperObj[key]);
		}	
	}
	helper(obj);
	return result;
}	


function realSize(arrays) {
	var count = 0;
	function helper(arr){
		for(var i = 0; i < arr.length; i++){
			if(typeof arr[i] === "number") count++;
     else if(Array.isArray(arr[i])) helper(arr[i]);
   }
 }
  helper(arrays);
  return count;
}

function SumSquares(l){
	var total = 0;
  function helper(a){
    for(var i = 0; i < a.length; i++){
     if(typeof a[i] === "number") total += Math.pow(a[i], 2);
     else if(Array.isArray(a[i])) helper(a[i]);
   }
 }
 helper(l);
 return total;
}

function replicate(times, number) {
	var newArr = [];
  if(times <= 0) return newArr;
  else return newArr.concat(number,replicate(times-1, number));
}


function search(arr, val){
	var index = 0;
	function helper(newArr){
		if(newArr.length === 0) index = -1;
		if(newArr[0] !== val){
			index++;
			helper(newArr.slice(1));
		}
	}
	helper(arr);
	return index;
}

function binarySearch(arr, val, start, end){
	var start = start || 0;
	var end = end || arr.length-1;
	var middle = Math.floor((start+end)/2);
	if(end < start || val < arr[start] || val > arr[end]) return -1;
	if(val === arr[middle]) return middle;
	if(val < arr[middle]) return binarySearch(arr, val, start, middle-1);
  else return binarySearch(arr, val, middle+1, end);
}

function stringifyNumbers(obj) {
  var newObj = {};
  for(var key in obj) {
    if(typeof obj[key] === "object" && !Array.isArray(obj[key])){
      newObj[key] = stringifyNumbers(obj[key]);
    } else if(typeof obj[key] === "number"){
    	newObj[key] = (obj[key]).toString();
    } else{
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

function F(n) {
  if (n === 0) return 1;
  return n - M(F(n - 1));
}

function M(n) {
  if (n === 0) return 0;
  return n - F(M(n - 1));
}
