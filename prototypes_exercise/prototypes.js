function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods){
	this.firstName  = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.favoriteFoods = [];
	this.family = [];

}

Person.prototype.fullName = function(){
	return this.firstName + ' ' +  this.lastName;
}

Person.prototype.toString = function(){
	return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`
}

Person.prototype.addToFamily = function(newFam){
	if(!(newFam instanceof Person)) return this.family.length;
	if(this.family.indexOf(newFam) >= 0){
		return this.family.length;
	}
	this.family.push(newFam);
	return this.family.length;
}

Array.prototype.map = function(fn){
	var newArray = [];
	for(var i = 0; i < this.length; i++){
		newArray.push(fn(this[i], i, this));
	}

	return newArray;
}

Function.prototype.bind = function(){
	return "fail the test";
}
