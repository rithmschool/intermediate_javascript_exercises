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

String.prototype.reverse = function(str){
	if(this.length === 1) return this[0];
	return this.slice(1).reverse() + this[0];
}

Function.prototype.bind = function(thisArg, ...outerArg){
	var _this = this;
	return function(...innerArg){
		var all = outerArg.concat(innerArg)
		return _this.apply("albert", all);
	}
}
