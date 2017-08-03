function drop(arr, skip = 1){
	return arr.slice(skip);
}

function fromPairs(arr){
	var obj = {};

		for(let p = 0; p < arr.length; p++){
			obj[arr[p][0]] = arr[p][1];
		}

	return obj;
}

function head(arr){
	return arr[0];
}

function take(arr, n = 1){
	return arr.slice(0, n);
}

function takeRight(arr, n = 1){
	return arr.reduce(function(t,c,i,a){
		if(i > arr.length-1-n){
			t.push(c);
			return t;
		}else return t;
	},[]);
}

function union(){
	var resObj = {};
	  var resArr = [];
	  
	  for(let i = 0; i < arguments.length; i++){
	    let arr = arguments[i];
	    
	    for(let v of arr){
	      var newKey = !resObj.hasOwnProperty(JSON.stringify(v));
	      if(newKey){
	        resArr.push(v);
	        resObj[JSON.stringify(v)] = 'Now I have it.';
	       }
	    }
	    
	  }
	  
	  return resArr;
}

function zipObject(keys, vals){
	var obj = {};

	for(let i = 0; i < keys.length; i++){
		obj[keys[i]] = vals[i];
	}

	return obj;
}

function includes(input, val, fromIndex = 0){
	if(Array.isArray(input)){
		for(let i = fromIndex; i < input.length; i++) 
			{
				if(input[i] === val) 
					return true;
			}
	}else if(typeof input === 'object'){
		for(let k in input){
				if(input[k] === val){
					return true;
				}
		}
	}else if(typeof input === 'string'){
		for(let i = fromIndex; i < input.length; i++){
			var temp = input.slice(i, i+ val.length); 
			if(temp === val) return true;
		}
	}
	
	return false;
}

function sample(obj){
	if(Array.isArray(obj)){
		return obj[Math.floor(Math.random() * obj.length)];
	}
	else{
		let keys = Object.keys(obj);
		let k = Math.floor(Math.random() * keys.length);
		return(obj[keks[k]]);
	}

}

function cloneDeep(obj){
	var newObj = {}
	if(Array.isArray(obj)) newObj = [];

	for(let k in obj){
		if(typeof obj[k] === 'object'){ newObj[k] = cloneDeep(obj[k]);}
		else newObj[k] = obj[k];
	}

	return newObj;
}

function sumBy(arr, cb){
	var total = 0;
	var fn;
	if(typeof cb === 'string'){
		fn = function(obj){
			return obj[cb];
		}
	}else{
		fn = cb;
	}

	for(let e of arr){
		total += fn(e);
	}

	return total;
}

function inRange(num, start, end){
	if(!end){
		end = start;
		start = 0;
	}

	if(end < start){
		return num <= start && num > end;
	}
	else {
		return num >= start && num < end; 
	}
	
}

function has(obj, path){
	var keys, isDefined = obj;
	if(typeof path === 'string') { keys = path.split('.'); }
	else { keys = path; }

	for(let k of keys){
		isDefined = isDefined[k];
		if(isDefined === undefined) return false;
	}

	return true;
	
	/* 
	var keys;
	if(typeof path === 'string') { keys = path.split('.'); }
	else { keys = path; } 

	if(keys.length === 0) return true;
	if(obj[keys[0]] === undefined) return false;
	return has(obj[keys], keys.slice[1]);
	*/

}

function omit(obj, keys){
	var newObj = {};

	for(let key in obj){
		newObj[key] = obj[key];
	}

	for(let key of keys){
		delete(newObj[key]);
	}

	return newObj;
}

function pick(obj, keys){
	var newObj = {};

	for(let k of keys){
		newObj[k] = obj[k];
	}

	return newObj;
}

function pickBy(obj, fn){
	var newObj = {};

	for(let key in obj){
		if(fn(obj[key])) newObj[key] = obj[key];
	}

	return newObj;
}

function omitBy(obj, fn){
	var newObj = {};

	for(let key in obj){
		if(!fn(obj[key])) newObj[key] = obj[key];
	}

	return newObj;
}

function padEnd(str, len, pad = " "){
	var newStr = str;

	while(newStr.length < len) { newStr += pad; }

	return newStr.substring(0, len);
}

function repeat(str, num){
	var newStr = '';

	for(let i = 0; i < num; i++) newStr += str;

	return newStr;
}

function upperFirst(str){

	return str[0].toUpperCase() + str.substring(1);

}

function flatten(arr){
	var newArr = [];

	for(let v of arr){
		if(Array.isArray(v)){
			for(let sv of v) newArr.push(sv);
		} 
		else {
			newArr.push(v);
		}
	}

	return newArr;
}

function zip(){
	var newArr = [];

	for(let a = 0; a < arguments[0].length; a++){
		let temp = [];

		for(let i = 0; i < arguments.length; i++){
			temp.push(arguments[i][a]);
		}

		newArr.push(temp);
	}

	return newArr;
}

function unzip(arr){
	var newArr = [];

	for(let a = 0; a < arr[0].length; a++){
		let temp = [];

		for(let i = 0; i < arr.length; i++){
			temp.push(arr[i][a]);
		}

		newArr.push(temp);
	}

	console.log(newArr);
	return newArr;
}

function flip(fn){

	return function(...args){
		var rev = args.reverse();
		return fn(...rev);
	}
}

function flattenDeep(arr){
	var newArr = [];

	for(let v of arr){
		if(Array.isArray(v)){
			newArr = newArr.concat(flattenDeep(v));
		} 
		else {
			newArr.push(v);
		}
	}

	return newArr;
}
