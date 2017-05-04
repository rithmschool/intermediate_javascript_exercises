function Person(firstName,lastName, favoriteColor,favoriteNumber){
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteFoods = [];
	this.favoriteNumber = favoriteNumber;
	this.family = [];
}

Person.prototype.fullName = function(){
	return `${this.firstName} ${this.lastName}`;
}

Person.prototype.toString = function(){
	 return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
}

Person.prototype.addToFamily = function(newFamilyMember){
	let nf = newFamilyMember;

	let dupeFam = false;

	if (this.family.length > 0){
		for (let i = 0; i<this.family.length; i++){
			if (this.family[i].firstName === nf.firstName && this.family[i].lastName === nf.lastName){
				dupeFam = true;
			}
		}
	}

	if (dupeFam === false){
		this.family.push(newFamilyMember);
	}

	return this.family.length;

}

Array.prototype.map = function(callback){
	let returnArr = [];

	for (let i =0; i<this.length; i++){
		returnArr.push(callback(this[i], i, this));
	}

	return returnArr;
}

String.prototype.reverse = function(){
	returnStr = "";
	for (let i = this.length-1; i>=0; i--){
		returnStr = returnStr + this[i];

	}
	return returnStr;

}

Function.prototype.bind = function(thisArg){
    var outArgs = [].slice.call(arguments,1);
    // This is the trick! Create a closure for "this".
    var fn = this;
    return function(){
        var innerArgs = [].slice.call(arguments)
        return fn.apply(thisArg, outArgs.concat(innerArgs));
    }
}

/*Function.prototype.bind = function(callback, thisArg){

	console.log(arguments);
	let outArgs = [].slice.call(arguments,2);
	console.log("outArgs", outArgs);

	return function(){
		let inArgs = [].slice.call(arguments);
		console.log("inArgs", inArgs)
		return callback.apply(thisArg,outArgs.concat(inArgs));
	}
}*/

/*
Part III

Chess:
Constructor functions:
create pieces for both players
build a board
place pieces on the board.
create an off-board location for pieces?

Prototype functions:
detect board edges
Each piece should have moves that are valid.
which pieces are avaailable to move for a player.

Perhaps some sort of object that maintains the state of whose turn it is?
TicTacToe:

*/


