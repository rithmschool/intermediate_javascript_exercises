// 1. What is the purpose of a constructor function?
	//	A constructor function allows us to return objects (with the help of the new keyword)

// 2. What does the new keyword do?
	//	A number of things: 1) creates a {}, 2) assigns "this" => {}, 3) returns "this", and 4) adds a 'link'

// 3. What does the keyword this refer to inside of a constructor function?
	//	Without "new", it refers to the global object

// 4. What is a class? What is an instance?
	//	
	//	An instance refers to an object created from a class

// 5. Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber.
function Person(firstName, lastName, favoriteColor, favoriteNumber){
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
}

// 6. Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the Person's favorite number
function Person(firstName, lastName, favoriteColor, favoriteNumber){
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.multiplyFavoriteNumber = function(num){
		return num*(this.favoriteNumber);
	}
}

// 7. Refactor the following code so that there is no duplication inside the Child function.

function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName){
    Parent.apply(this, arguments);
}

