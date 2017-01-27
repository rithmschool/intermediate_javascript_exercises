//1. Constructors are designed to help create many different instnaces of a specific object
//2. New allows us to use constructors to mimic classes by creating a new Object, assigning this to that object, 
//then returning that object.
//3. From inside a constructor function, this will refer to the nearest parent object - 
//when used with "new", this becomes its own object, otherwise it will default to the window object.
//4. A class is kind of like a template for something we want to create and/or use. An instance of
//that object the result each time we create and use that new class. Instatiating ten copies of one 
//class should give us ten objects of a single class.

function Person(firstName, lastName, favoriteNumber, favoriteColor) {
	this.firstName = firstName,
	this.lastName = lastName,
	this.favoriteNumber = favoriteNumber
	this.favoriteColor = favoriteColor
	this.multiplyFavoriteNumber = function multiplyFavoriteNumber (num) {
	return (this.favoriteNumber)*(num);
}
    
}



function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName){
    Parent.apply(this, arguments)
}