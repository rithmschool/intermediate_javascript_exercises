/*

1. To build objects that are the same except for the values of the their properties.

2. new creates a new object. Sets 'this' to be the new object. Returns that object. Creates __proto__ links to the prototype

3. this, in a constructor function refers to the object that is being constructed. In the general case it will
be the identical but for the values of the properties, however, if someone has borrowed your function and applied
an explict this (e.g. call, bind, or apply) you get what they gave you.

4. In object oriented programming a class is the definition of what an object has in terms of properties and methods.
An instance is a object made using that definition.


*/


// 5.

function Person(firstName, lastName, favoriteColor, favoriteNumber){
	this.firstName =  firstName,
	this.lastName = lastName,
	this.favoriteNumber = favoriteNumber,
	this.favoriteColor = favoriteColor
}

// 6.

Person.prototype.multiplyFavoriteNumber = function(factor){
	return factor * this.favoriteNumber;
}

// 7.

function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(...args){
    return Person.apply(this,args);
}