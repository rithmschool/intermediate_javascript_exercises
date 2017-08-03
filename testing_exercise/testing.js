function replaceWith(str, target, replacement){
	return str
		.split('')
		.map(function(v){
			if(v === target) return replacement;
			else return v;
		}).join('');
}

function expand(arr, num) {
	var a = [];

	for(let i = 0; i < num; i++){
		a = a.concat(arr);
	}

	return a;
}

function acceptNumbersOnly(...args) {
	for(let a of args){
		if(typeof a !== 'number' || isNaN(a)){
			return false;
		}
	}

	return true;
}

function mergeArrays(arr1, arr2) {
	return arr1.concat(arr2).sort(function(a, b){return a-b;});
}

function mergeObjects(...args) {
	return args.reduce(function(t,v){
		Object.keys(v).forEach(function(sv){
			t[sv] = v[sv];
		});
		return t;
	},{});
}