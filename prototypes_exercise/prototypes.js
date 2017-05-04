// Part I

function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.favoriteFoods = [];
	this.family = []
}

Person.prototype.fullName = function() {
	return `${this.firstName} ${this.lastName}`;
}

Person.prototype.toString = function() {
	return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`
}

Person.prototype.family = [];

Person.prototype.addToFamily = function (personToAdd) {

	if(personToAdd instanceof Person) {
		if(this.family.indexOf(personToAdd) === -1) {
			this.family.push(personToAdd);
		}
	}
	return this.family.length;	
}

// Part II

Array.prototype.map = function(fn) {
	
	var newArr = [];

	for (var i=0; i<this.length; i++) {
		newArr.push(fn(this[i], i, this));
	}

	return newArr;
}

String.prototype.reverse = function() {

	newStr = "";
	for (var i=this.length-1; i>=0; i--) {
		newStr = newStr.concat(this[i]);
	}
	return newStr;
}


// Implement your own version of Function.prototype.bind

//`bind` does not immediately invoke the function. 
// It returns to you a partially applied function. 
// You can then at any point in time execute that function 
// using `this` and any arguments you have at that time.


Function.prototype.bind = function (thisArg, ...others) {

    var that = this; // thank you Elie for the tip!
    // need the above line so we can refer to the function "add" (or
    // whatever other function we're using bind to partially apply)
	var outerArgs = others; // an array

	return function inner() {
		var innerArgs = [].slice.call(arguments); // an array
		var bothArgs = outerArgs.concat(innerArgs); // an array
		return that(...bothArgs); // spread the array
	}
}








