//question one

var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function(){
            return "This person's name is " + this.fullName
        }
    }
}

obj.person.sayHi.call(obj);  // This person's name is Harry Potter

//question two

// Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.
// sumEvenArguments(1,2,3,4) // 6
// sumEvenArguments(1,2,6) // 8
// sumEvenArguments(1,2) // 2

function sumEvenArguments (){
	return [].slice.call(arguments).reduce(function(accumulator, currentValue){
			if (currentValue % 2 === 0)
				return accumulator + currentValue;
			else return accumulator + 0;
	},0)
	
}


function arrayFrom (){
	return [].slice.call(arguments);
}

function invokeMax (func, maxCount){
	var count = 0; 
	return function(...args){
		// how does inner function know when outer function has been called?
		// 
		count++;
		if (count > maxCount){
			return 'Maxed Out!'
		}
		
		return func.apply(null,  args);
	}
}

