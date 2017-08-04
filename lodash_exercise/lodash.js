function drop(arr, n=1){
	var nArr = [];
	for(var i=n; i<arr.length; i++)
		nArr.push(arr[i]);

	return nArr;
}

function fromPairs(arr){
	var nObj = {};
	for(var i=0; i<arr.length; i++)
		nObj[arr[i][0]] = arr[i][1];

	return nObj;
}

function head(arr){
	if(arr === [])
		return undefined;

	return arr[0];

}

function take(arr, num=1){
	var nArr = [];
	for(var i=0; i<num; i++) {
		if(i === arr.length)
			break;

		nArr.push(arr[i]);
	}
	return nArr;
}

// Implementation 1
function takeRight(arr, num=1){
	var nArr = [];
	for(var i=0; i<num; i++) {
		if(i === arr.length)
			break;

		nArr.push(arr[(arr.length-1) - i]);
	}
	return nArr.reverse();
}

// Implementation 2
function takeRight(arr, num=1){
	var nArr = [];
	while (num > arr.length) {
		num--;
	}

	nArr = arr.slice(arr.length - num);

	return nArr;
}

function union(...arrays){
	var rSet = new Set();
	var nArr = [];

	for(var i=0; i<arrays.length; i++)
		nArr = nArr.concat(arrays[i]);

	for (var j=0; j<nArr.length; j++) {
		rSet.add(nArr[j]);
	}

	return Array.from(rSet);
}

function zipObject(props, values){
	var nObj = {};
	for(var i=0; i<props.length; i++) {
		if (i > values.length -1)
			nObj[props[i]] = undefined;

		nObj[props[i]] = values[i];
	}
	return nObj;
}

function includes(a, val, idx=0){
	if (typeof a === 'string') {
		if(a.indexOf(val) !== -1)
			return true;
	}
	else if (Array.isArray(a)) {
		if (idx > 0) {
			var nArr = a.slice(idx);
			if(nArr.indexOf(val) > -1)
				return true;
		}
		else {
			if(a.indexOf(val) > -1)
				return true;
		}
	}
	else if (typeof a === 'object') {
		if (Object.values(a).indexOf(val) > -1)
			return true;
	}
	else if (Array.isArray(a)) {
		if (idx > 0) {
			var nArr = a.slice(idx);
			if(nArr.indexOf(val) > -1)
				return true;
		}
		else
			if(a.indexOf(val) > -1)
				return true;
	}

	return false;
}

function sample(arr){
	var num = Math.floor(Math.random() * arr.length); 
	return arr[num];
}

function cloneDeep(a){
	if (Array.isArray(a)) {
		var nArr = [];
		for (var i=0; i < a.length; i++) {
			if (Array.isArray(a[i]) || typeof a[i] === 'object')
				nArr.push(cloneDeep(a[i]));
			else
				nArr.push(a[i]);
		}

		return nArr;
	}
	else if (typeof a === 'object') {
		var nObj = {};
		for (key in a) {
			if ( Array.isArray(a[key]) || typeof a[key] === 'object')
				nObj[key] = cloneDeep(a[key]);
		}
		return nObj;
	}
}

function sumBy(arr, second){
	var sum = 0;
	if(typeof second === 'function') {
		for(var i=0; i<arr.length; i++)
			sum += second(arr[i]);
	}
	else if(typeof second === 'string') {
		for(var i=0; i<arr.length; i++)
			sum += arr[i][second];
	}

	return sum;
}

function inRange(num, start=0, end){
	
	if (start != 0 && end === undefined) {
		end = start
		start = 0;
	}

	if (num < 0)
		return num > end && num < start;
	else
		return num < end && num > start;
}

function has(obj, gKeys){
	if(typeof gKeys === 'string')
		gKeys = gKeys.split('.');

	var presentKeys = [];
	function helper(a) {
		for (key in a) {
			presentKeys.push(key);

			if(typeof a[key] === 'object')
				helper(a[key]);
		}
	}
	helper(obj);

	for(var i=0; i<gKeys.length; i++) {
		if (presentKeys.indexOf(gKeys[i]) === -1)
			return false;
	}

	return true;
}

function omit(obj, gKeys){
	if(typeof gKeys === 'string')
		gKeys = gKeys.split('.');

	var rObj = {};
	function helper(a) {
		for (key in a) {
			if (gKeys.indexOf(key) === -1) {
				if (a[key] !== undefined)
					if(typeof a[key] === 'object')
						helper(a[key]);
					else
						rObj[key] = a[key];
			}
		}
	}
	helper(obj);

	return rObj;
}

function pick(obj, gKeys){
	if(typeof gKeys === 'string')
		gKeys = gKeys.split('.');

	var rObj = {};
	function helper(a) {
		for (key in a) {
			if (gKeys.indexOf(key) !== -1) {
				if (a[key] !== undefined)
					if(typeof a[key] === 'object')
						helper(a[key]);
					else
						rObj[key] = a[key];
			}
		}
	}
	helper(obj);

	return rObj;
}

function pickBy(obj, fn){
	rObj = {};
	for (key in obj)
		if (fn(obj[key]))
			rObj[key] = obj[key];
	return rObj;
}

function omitBy(obj, fn){
	rObj = {};
	for (key in obj)
		if (!fn(obj[key]))
			rObj[key] = obj[key];
		
	return rObj;
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
