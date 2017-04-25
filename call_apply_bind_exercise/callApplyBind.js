function sumEvenArguments(){
	var sum = 0;
	for(var i=0; i<arguments.length; i++){
		if(arguments[i] % 2 === 0){
			sum = sum + arguments[i];
		}
	}
	return sum;
}


function arrayFrom(arguments){
	return [].slice.call(arguments);
}


function invokeMax(fn, maxAmount){
    var count = 0;
	return function(){
		var arr = Array.from(arguments);
		if(count >= maxAmount){
		  return "Maxed Out!";
		}
		count++;
		return fn.apply(this, arguments);
		
	}; 
}