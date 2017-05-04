// Part I:
// Make the tests pass for the following tasks:
// Create a constructor function for a Person. Each person should have a 
// firstName, lastName, favoriteColor, favoriteNumber and favoriteFoods 
// (which should be an array).
function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = favoriteFoods || [];
    this.family = []; // moved up here from prototype below
}

// Add a function on the Person.prototype called fullName that returns the 
// firstName and lastName property of an object created by the Person 
// constructor concatenated together.
Person.prototype.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

var p = new Person("Shana", "Malarkin", "Green", 38);
p.fullName(); // Shana Malarkin

// Overwrite the toString method from the Object prototype by creating a 
// toString method for Person. The toString method should return a string in 
// the following format:
Person.prototype.toString = function () {
    return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
}

var p = new Person("Shana", "Malarkin", "Green", 38);
p.toString(); // Shana Malarkin, Favorite Color: Green, Favorite Number: 38

// Add a property on the Person object called family which is an empty array.
// > Person.prototype.family = []; // moved up to the constructor!
// > it worked in the console, but wasn't passing tests

// Add a function on the Person.prototype called addToFamily which adds an 
// object constructed from the Person constructor to the family array. To make 
// sure that the object you are adding is an object construced from the Person
// constructor - take a look at the instanceof operator. Make sure that your 
// family array does not include duplicates! This method should return the 
// length of the family array.

Person.prototype.addToFamily = function (obj) {
    if (obj instanceof Person && this.family.indexOf(obj) === -1) {
        this.family.push(obj);
    }
    return this.family.length;
};

var p = new Person("Shana", "Malarkin", "Green", 38)
p.family; // []
p.addToFamily(p); // 1
p.family.length; // 1
p.addToFamily(p); // 1 - No duplicates!
p.family.length; // Length should still be 1

// Part II:
// Make the tests pass for the following tasks:
// Implement your own version of Array.prototype.map
Array.prototype.map = function (fn) {
    // console.log(this); // this is the array!
    var newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(fn(this[i], i, this));
    }
    return newArr;
}

// Implement a function that reverses a string and place it on the String.prototype
String.prototype.reverse = function () {
    // console.log(this); // this is the string
    let revStr = '';
    for (var i = this.length - 1; i >= 0; i--) {
        revStr += this[i];
    }
    return revStr;
};

// Implement your own version of Function.prototype.bind
Function.prototype.bind = function (thisArg, ...outerArgs) {
    // console.log(this); // this is the function (add in our case)
    var func = this;
    return function (...innerArgs) {
        // console.log(this); // this is the window
        return func.apply(thisArg, outerArgs.concat(innerArgs));
    }
}

// Part III:

// For the last part, let's think less about the actual code we need to write 
// and more about thinking in an Object Oriented way.

// Let's imagine that we are building an application which allows users to play 
// chess. What constructor functions would we need? What kinds of prototype 
// functions and properties would we need as well?
/* We would need:
    -constructor functions for the pieces
    -functions for the movements of the pieces
    -a board function to see where occupied sqares are
    -a function for wins, turns, scorekeeping
*/

// Let's imagine that we are building a game of Tic Tac Toe. What kinds of 
// prototype functions and properties would we need as well?
/* We would need: 
    -a player function (if it's x or o) 
    -a square function (to see if it's occupied or not)
    -a board function to see where the occupied squares are
    -a function for wins, turns, scorekeeping
*/