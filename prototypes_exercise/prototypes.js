// Create a constructor function for a Person. Each person should have a firstName, lastName, 
// favoriteColor, favoriteNumber and favoriteFoods (which should be an array).

function Person(firstName, lastName, favoriteColor, favoriteNumber, ...favoriteFoods) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.favoriteFoods = favoriteFoods;
	this.family = []
}


// Add a function on the Person.prototype called fullName that returns the 
// firstName and lastName property of an object created by the Person constructor concatenated together.

// var p = new Person("Shana", "Malarkin", "Green", 38);
// p.fullName(); // Shana Malarkin

Person.prototype.fullName = function() {
	return `${this.firstName} ${this.lastName}`
}

// Overwrite the toString method from the Object prototype by creating a toString method for Person. 
// The toString method should return a string in the following format:

// var p = new Person("Shana", "Malarkin", "Green", 38);
// p.toString(); // Shana Malarkin, Favorite Color: Green, Favorite Number: 38

Person.prototype.toString = function() {
	return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}` 
}


// Add a property on the Person object called family which is an empty array.
// Person.prototype.__proto__.family = [];

// Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person 
// constructor to the family array. To make sure that the object you are adding is an object construced from the 
// Person constructor - take a look at the instanceofoperator. Make sure that your family array does not include duplicates! 
// This method should return the length of the family array.

// var p = new Person("Shana", "Malarkin", "Green", 38) 
// p.family; // []
// p.addToFamily(p); // 1
// p.family.length; // 1
// p.addToFamily(p); // 1 - No duplicates!
// p.family.length; // Length should still be 1

Person.prototype.addToFamily = function(person) {
	if (person instanceof Person && !this.family.includes(person)) {
	// if (this.family.indexOf(person) === -1 && person.family !== undefined) {
		this.family.push(person)
	}
	return this.family.length
}


// Implement your own version of Array.prototype.map

Array.prototype.map = function(fn) {
	var returnArr = []
	for (var i = 0; i < this.length; i++) {
		returnArr.push(fn(this[i],i,this));
	}
	return returnArr;
}


	


//Implement a function that reverses a string and place it on the String.prototype

String.prototype.reverse = function() {
	var reversedArr = []
	for (var i = this.length-1; i >=0; i--) {
		reversedArr.push(this[i])
	}	
	return reversedArr.join("")
}



//Implement your own version of Function.prototype.bind

Function.prototype.bind = function(thisArg, ...outerArgs) {
	var _this = this; //initial function

	return function (...innerArgs) {
		// return _this.apply(thisArg,outerArgs.concat(innerArgs)) //this way for apply
		return _this.call(thisArg,...(outerArgs.concat(innerArgs))) //this way for call
	}
}




