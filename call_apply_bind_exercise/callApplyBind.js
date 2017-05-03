function sumEvenArguments(...nums){
	var sum = 0;
	for(var val of nums){
		if(val % 2 === 0){
			sum += val;
		}
	}
	return sum
}

function arrayFrom(alo){
	var newArray = [];
	for(var i = 0; i < alo.length; i++){
		newArray.push(alo[i]);
	}
	return newArray;
}

function invokeMax(fn, num){
	var counter = 0;
	var times = num;
	return function(...inner){
		if(counter < times){
			counter++;
			return fn.apply(fn, inner);
		} else {
			return "Maxed Out!";
		}
	}
}