// var obj = {
//     fullName: "Harry Potter",
//     sayHi: function(){
//             return "This person's name is " + this.fullName
//     }
// }

//	List two examples of "array-like-objects" that we have seen.
//	1) arguments and 2) HTML nodes

function sumEvenArguments(){
	var args = [].slice.call(arguments)
	var sum = 0;
	args.forEach(function(x){
		if(x % 2 === 0){
			sum += x;	
		};
	});
	return sum;
};

function arrayFrom(){
	return [].slice.call(arguments);
};

function invokeMax(fn, max){
	var count = 0;
	return function(){
		count++;
		if(count > max){
			return "Maxed Out!"
		} else {
			var args = [].slice.call(arguments);
			return fn.apply(this, args);
		}
	}
}