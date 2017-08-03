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
