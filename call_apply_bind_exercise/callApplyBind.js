var obj = {
    fullName: "Harry Potter",
    sayHi: function(){
            return "This person's name is " + this.fullName
    }
}




/// Other array like objects: arguments, DOM.

function sumEvenArguments(...args){
	return args.reduce(function(acc,cur){
		if (cur%2 === 0 ) acc += cur;
		return acc;
	},0)
}


function arrayFrom(input){
	return [].concat.call(arguments);

}

function invokeMax(fn, times){
	let counter = 0;
	return function(){
		if (counter < times){
			var innerArgs = [].slice.call(arguments);
			counter++;
			return fn.apply(this, innerArgs);
		} else {
			return "Maxed Out!";
		}
	}
}
