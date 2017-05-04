/*
Part I:

Make the tests pass for the following tasks:

Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber and favoriteFoods (which should be an array).
*/

function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods=[]){
	this.firstName = firstName,
	this.lastName = lastName,
	this.favoriteColor = favoriteColor,
	this.favoriteNumber = favoriteNumber,
	this.favoriteFoods = favoriteFoods,
	this.family = []
}

/*
Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.

var p = new Person("Shana", "Malarkin", "Green", 38);
p.fullName(); // Shana Malarkin
*/

Person.prototype.fullName = function(){
	return `${this.firstName} ${this.lastName}`; 
}

/*
Overwrite the toString method from the Object prototype by creating a toString method for Person. The toString method should return a string in the following format:
var p = new Person("Shana", "Malarkin", "Green", 38);
p.toString(); // Shana Malarkin, Favorite Color: Green, Favorite Number: 38
*/

Person.prototype.toString = function(){
	return this.fullName() + `, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
}

/*
Add a property on the Person object called family which is an empty array.
*/

/*
Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object construced from the Person constructor - take a look at the instanceofoperator. Make sure that your family array does not include duplicates! This method should return the length of the family array.

var p = new Person("Shana", "Malarkin", "Green", 38) 
p.family; // []
p.addToFamily(p); // 1
p.family.length; // 1
p.addToFamily(p); // 1 - No duplicates!
p.family.length; // Length should still be 1
*/

Person.prototype.addToFamily = function(obj){
	if (obj instanceof Person && !this.family.includes(obj)){
		this.family.push(obj);
	}
	return this.family.length;
}

/*
Part II:

Make the tests pass for the following tasks:

Implement your own version of Array.prototype.map
*/

Array.prototype.map = function (arr, cb){
	var newArr = [];
	for (var i = 0; i < arr.length; i++){
		newArr.push(cb(arr[i]), i, arr);
	}
	return newArr;
}

/*
Implement a function that reverses a string and place it on the String.prototype
*/

String.prototype.reverse = function(){
  var reverseStr = '';
	for (var i = this.length-1; i >=0; i--){
	  reverseStr += this[i];
	}
	return reverseStr
}

/*
Implement your own version of Function.prototype.bind
*/

Function.prototype.bind = function (fn, thisArg, ...outerArgs){
    return function(...innerArgs){
        var allTheArgs = outerArgs.concat(innerArgs)
        return fn.apply(thisArg, allTheArgs);
    }
}

// function bind(fn, thisArg) {
//   var outerArgs = [].slice.call(arguments, 2);
//   return function(){
//     var innerArgs = [].slice.call(arguments);
//     return fn.apply(thisArg, outerArgs.concat(innerArgs));
//   }
// }

/*
Part III:

For the last part, let's think less about the actual code we need to write and more about thinking in an Object Oriented way.

Let's imagine that we are building an application which allows users to play chess. What constructor functions would we need? What kinds of prototype functions and properties would we need as well?

ANSWER:

Let's imagine that we are building a game of Tic Tac Toe. What kinds of prototype functions and properties would we need as well?

ANSWER:

*/