////////////////////////////////
// Part 1


function Person(firstName, lastName, favoriteColor, favoriteNumber){
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.favoriteFoods = [];
	this.family = [];
}

Person.prototype.fullName = function(){
	return this.firstName + " " + this.lastName;
};

var ray = new Person("Raymond", "Chow", "black", 7);
// console.log(ray.fullName());


Person.prototype.toString = function(){
	var fullString;
	fullString = this.firstName +" "+ this.lastName +", Favorite Color: "+
				 this.favoriteColor +", Favorite Number: "+  this.favoriteNumber;
	return fullString;
};

// console.log(ray.toString());

Person.prototype.addToFamily = function(newMember){
	if(newMember instanceof Person){
		if(this.family.indexOf(newMember)===-1){
			this.family.push(newMember);
		}
	}
	
	return this.family.length;
};


var kate = new Person("Katelyn", "Chow", "Pink", 3);
kate.addToFamily(ray);
kate.addToFamily(ray);
kate.addToFamily(ray);
// console.log(kate.family.length);
// console.log(kate.family);


////////////////////////////////
// Part 2

Array.prototype.map = function(callback){
	var results=[];
	this.forEach(function(arrayItem,idx,array){
		results.push(callback(arrayItem,idx,array));
	});
	return results;
}

[1,2,3,4,5].map(function(arrayItem,idx,array){
	return arrayItem;
});


String.prototype.reverse = function(){
	var stringArray = this.split("");
	var stringLength = stringArray.length;
	var newStringArray = [];
	for(var x=0; x<stringLength; x++){
		var popped = stringArray.pop();
		newStringArray.push(popped);
	}
	var newString = newStringArray.join("");
	return newString;
};

var someString = "cat";
// console.log(someString.reverse());



console.log("////////////////////////////////////////////////////////////");


function add(a,b){
	return a+b;
}

// Function.prototype.bind = function(newThis){
// 	var _this = this;
// 	console.log("Outside args:",arguments);
// 	console.log(newThis);

// 	function returnedFunc(){
// 		var argsArray = [].slice.call(arguments);
// 		console.log("Inside args:",arguments);
// 		console.log(argsArray);
// 		// console.log(argsArray);
		
// 		// return _this.apply(null, argsArray);
// 		// var result = _this.apply(newThis, argsArray);
// 		return _this.apply(newThis, argsArray);
// 	}
// 	return returnedFunc;
// };

Function.prototype.bind = function(newThis){
	var _this = this;
	var outsideArgs = [].slice.call(arguments);
	var thisObj = outsideArgs.shift();
	
	function returnedFunc(){
		var argsArray = outsideArgs.concat([].slice.call(arguments));
		return _this.apply(thisObj, argsArray);
	}
	return returnedFunc;
};

var someFunc1 = add.bind(this);
console.log(someFunc1(3,4));

var someFunc2 = add.bind(this,10);
console.log(someFunc2(6));




