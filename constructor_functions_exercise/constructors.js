/*
1. What is the purpose of a constructor function?
	ANSWER:
	It is a blueprint for creating objects.
	It reduces the need for duplicate code.

2. What does the new keyword do?
	ANSWER:
	It does 4 things:
		-it creates an object
		-it sets the value of 'this' to that object
		-it returns the object (this)
		-it creates a link between the constructor function prototype object and the object created
			(which is accessible from the object via __proto__)

3. What does the keyword this refer to inside of a constructor function?
	ANSWER:
	The keyword 'this' refers to the object created & returned by the new keyword.

4. What is a class? What is an instance?
	ANSWER:
	A class is a blueprint (like a constructor function)
	An instance is the object created by a class 

5. Create a constructor function for a Person, each person should 
have a firstName, lastName, favoriteColor and favoriteNumber.

6. Write a method called multiplyFavoriteNumber that takes in a 
number and returns the product of the number and the Person's 
favorite number
*/

function Person(firstName, lastName, favoriteColor, favoriteNumber){
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
}

Person.prototype.multiplyFavoriteNumber = function(num){
	return this.favoriteNumber * num;
}

/*
7. Refactor the following code so that there is no duplication inside the Child function.
*/

function Parent(firstName, lastName, favoriteColor, favoriteFood){
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteFood = favoriteFood;
}

function Child(...args){
	Parent.apply(this, args);
}

