///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// PART 1
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// 1. Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber and favoriteFoods (which should be an array). 
///////////////////////////////////////////////////////////

function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods = []) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.favoriteFoods = favoriteFoods;
	this.family = [];
}

// var shriya = new Person("Shriya", "Nevatia", "teal", "8", ["artichokes", "pasta", "cheese"]);

///////////////////////////////////////////////////////////
// 2. Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.
///////////////////////////////////////////////////////////

Person.prototype.fullName = function() {
	return `${this.firstName} ${this.lastName}`;
}

// shriya.fullName();

///////////////////////////////////////////////////////////
// 3. Overwrite the toString method from the Object prototype by creating a toString method for Person. The toString method should return a string in the following format:
///////////////////////////////////////////////////////////

Object.prototype.toString = function() {
	return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
}

// shriya.toString();

///////////////////////////////////////////////////////////
// 4. Add a property on the Person object called family which is an empty array.
///////////////////////////////////////////////////////////

Person.prototype.family = [];

// must be added to prototype because instances of Person cannot see the Person constructor, only Person.prototype

///////////////////////////////////////////////////////////
// 5. Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object construced from the Person constructor - take a look at the instanceofoperator. Make sure that your family array does not include duplicates! This method should return the length of the family array.
///////////////////////////////////////////////////////////

Person.prototype.addToFamily = function(p) {
	if (p instanceof Person && this.family.indexOf(p) === -1) {
		return this.family.push(p);
	}
}

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// PART 2
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// 1. Implement your own version of Array.prototype.map
///////////////////////////////////////////////////////////

var map = function(fn) {
	return fn.apply(this, Array.prototype);
}

// ///////////////////////////////////////////////////////////
// // 2. Implement a function that reverses a string and place it on the String.prototype
// ///////////////////////////////////////////////////////////

String.prototype.reverse = function() {
	return this.split("").reverse().join("");
}


// ///////////////////////////////////////////////////////////
// // 3. Implement your own version of Function.prototype.bind
// ///////////////////////////////////////////////////////////

Function.prototype.bind = function(thisArg, ...args1) {
	var copyThis = this;
	return function(...args2) {
        var args = args1.concat(args2);
        return copyThis.apply(thisArg, args);   
    }
}

// first test doesn't pass! 

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// PART 3
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// 1. Let's imagine that we are building an application which allows users to play chess. What constructor functions would we need? What kinds of prototype functions and properties would we need as well?
///////////////////////////////////////////////////////////

// I would make a constructor for the game board and constructors for each piece
// Pieces would have properties like black or white & name of the piece i.e. pawn, queen
// Then would add prototype functions to the board constructor for qualities of the board like colors of different squares
// And prototype functions to the piece constructors to govern the movements which are valid on the board
// Finally, there would be a way to keep score of each player & say whose turn it is, and when someone wins

///////////////////////////////////////////////////////////
// 2. Let's imagine that we are building a game of Tic Tac Toe. What kinds of prototype functions and properties would we need as well?
///////////////////////////////////////////////////////////

// There would again be a game board constructor containing the 9 spaces
// We could update properties of this board when each space was filled with an X or an O
// There would also be a function in the constructor that kept track and figured out if there was a winner or not, or the board was full and the game was complete






















