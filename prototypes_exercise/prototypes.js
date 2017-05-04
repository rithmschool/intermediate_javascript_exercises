function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods=[], family=[]) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.favoriteFoods = favoriteFoods;
	this.family = family;
}

Person.prototype.fullName = function() {
	return `${this.firstName} ${this.lastName}`
};

Person.prototype.toString = function() {
	return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
};

Person.prototype.addToFamily = function(person) {
	if (person instanceof Person && !(this.family.includes(person))) {
		this.family.push(person);
	}
	return this.family.length;
};


Array.prototype.map = function(callback) {
	var newArr = [];
	for(var i = 0; i < this.length; i++) {
		newArr.push(callback(this[i], i, this));
	}
	return newArr;
}


String.prototype.reverse = function() {
	newStr = "";
	for(var i = this.length - 1; i > -1; i--) {
		newStr += this[i];
	}
	return newStr;
}


Function.prototype.bind = function(thisArg, ...outerArgs) {
	var functionCopy = this;

	return function(...args) {
		return functionCopy.apply(thisArg, outerArgs.concat(args));
	}
}

