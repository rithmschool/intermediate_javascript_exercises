function Person (firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.multiplyFavoriteNumber = function (number){
                                    return number * this.favoriteNumber;
                                        }
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
    Parent.apply(this, arguments)
}

// or

function Child2 (firstName, lastName, favoriteColor, favoriteFood){
	Parent.apply(this, [firstName, lastName, favoriteColor, firstName])
}

// or

function Child3 (firstName, lastName, favoriteColor, favoriteFood){
	Parent.call(this, firstName, lastName, favoriteColor, favoriteFood)
}


// Rationale

// use Parent function in Child function to avoid duplication. Essentially, "borrowing " the code from the Person function 
// Next, we need to define what "this" becomes, when we invoke our Parent function inside Child

// by passing "this" as our first argument, we are telling Parent to use any new child object created by the Child constructor
// to have that object as the value of "this" instead of the objects created by Parent constructor

// the right value of the keyword this is whatever object is being created from the Child constructor. So we need to explicitly change the value of this

// so call, bind or apply are our options. dismiss bind because we don't want to return a function 
// call accepts a comma-separated set of arguments, while apply accepts an array of arguments. So we use apply because arguments is an array-like object..

