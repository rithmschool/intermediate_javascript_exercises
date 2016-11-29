// 1) The constructor function is the blueprint or class for a new object.
// 2) The new keyword creates a new empty object with a constructor function.
// 3) The keyword this refers to the newly created empty object.
// 4) The class is essentially a blue print for creating objects. 
// 	  The instances are those objects that are made from the the class/Constructor function.


////////////////////
// 5)

function Person(firstName,lastName,favoriteColor,favoriteNumber){
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
    // function multiplyFavoriteNumber(multiplier){
    //     return this.favoriteNumber*multiplier;
    // }
}

var person = new Person("Raymond", "Chow", "black", 26);

////////////////////
// 6)

Person.prototype.multiplyFavoriteNumber = function(multiplier) {
    return this.favoriteNumber*multiplier;
};

person.multiplyFavoriteNumber(10);



////////////////////
// 7)
function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
    Parent.call(this, firstName, lastName, favoriteColor, favoriteFood);
}

var katelyn = new Child("Katelyn", "Chow", "pink", "dumplings");
console.log(katelyn.firstName + " loves " + katelyn.favoriteFood);



