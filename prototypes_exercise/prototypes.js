function Person(firstName, lastName, favoriteColor, favoriteNumber){
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.favoriteFoods = [];
	this.family = [];
}

Person.prototype.fullName = function() {
	return `${this.firstName} ${this.lastName}`;
}

Person.prototype.toString = function() {
	return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`
}

Person.prototype.addToFamily = function(obj) {
	if (obj instanceof Person) {
		if (this.family.every(function(value) {
			return !(JSON.stringify(obj) === JSON.stringify(value));
		})) {
			this.family.push(obj);
		}
	}
}

Array.prototype.map = function(fn) {
	holdingArray = [];
	for (var i = 0; i < this.length; i++) {
		holdingArray.push(fn(this[i],i,this));
	}
	return holdingArray;
}

String.prototype.reverse = function() {
	return this.split("").reverse().join("");
}


Function.prototype.bind = function(key,...outerArgs) {
	let fn = this;
	return function(...innerArgs) {
		return fn.apply(key,outerArgs.concat(innerArgs));
	}
}