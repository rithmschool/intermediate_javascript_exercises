/*
1. The constructor function's purpose is to allow us to make multiple objects using one function
and to link those objects to that functions prototype.  This allows us to create shared
methods and properties between objects

A javascript constructor function is an artificial construct used to  replicate 'classes' found
in other object orientated programming languages, such as python, but its implementation is 
not quite the same..

2. The new keyword does four things:
- it creates a new object.
- it binds the 'this' keyword to that object
- it returns an object (unless there is also a return statement in it which the following 
rules are applied:
	-if the return value is primitive - return the object, ignore the primitive
	-if the return value is an object - return that object instead of your constructed object)
- it links the object to the constructor's object prototype

3. The keyword 'this' inside the constructor function refers to the global scope when the function
itself has not been invoked.  When the function has been invoked and the keyword 'new' has not
been used, it refers to the global scope - the window.  If the keyword 'new' is used, it will
refer to the object that had been created.

4. 'Class' is an object orientated programming concept, found in many true object orientated
languages such as python, that allows a function to create objects and links those objects to
the creating function.  Instances are those objects are are created and instances are linked 
to classes.

*/

function Person(firstName, lastName, favoriteColor, favoriteNumber){
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber
}

Person.prototype.multiplyFavoriteNumber = function(num) {
	return num * this.favoriteNumber;
}

function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(){
    Parent.apply(this,arguments);
}