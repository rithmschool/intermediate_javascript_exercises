///////////////////////////////////////////////////////////
// 1. What is the purpose of a constructor function?
///////////////////////////////////////////////////////////

// A constructor function allows you to create objects that have the same structure; it's a way to make easily replicable objects 

///////////////////////////////////////////////////////////
// 2. What does the new keyword do?
///////////////////////////////////////////////////////////

// The new keyword does four things: 
	// creates an empty object {}
	// sets the keyword this to be that empty object
	// adds a "return this" to the function it's invoked on (therefore allowing you to return that object)
	// creates a link to the .prototype of the constructor function

///////////////////////////////////////////////////////////
// 3. What does the keyword this refer to inside of a constructor function?
///////////////////////////////////////////////////////////

// Inside a constructor function, this refers to the empty object that is created when the constructor is invoked with the keyword new
// thus, every time a property is set using this.keyName, these properties are all added to the same object, which is then returned by the function at the end of the function execution

///////////////////////////////////////////////////////////
// 4. What is a class? What is an instance?
///////////////////////////////////////////////////////////

// Javascript does not inherently have classes, although ES2015 allows you to use the keyword class to basically create a constructor
// a class is a function that creates an object; an instance of a class is an individual object created using that class constructor 

///////////////////////////////////////////////////////////
// 5. Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber.
///////////////////////////////////////////////////////////

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
}

///////////////////////////////////////////////////////////
// 6. Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the Person's favorite number
///////////////////////////////////////////////////////////

Person.prototype.multiplyFavoriteNumber = function(num) {
	return num * this.favoriteNumber;
}

// run this with the following: 

var shriya = new Person("Shriya", "Nevatia", "teal", "8");
shriya.multiplyFavoriteNumber(2);

///////////////////////////////////////////////////////////
// 7. Refactor the following code so that there is no duplication inside the Child function.
///////////////////////////////////////////////////////////

function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
    Parent.apply(this, arguments);
}

// run this with the following:

var mary = new Child("mary", "sue", "pink", "cabbage");