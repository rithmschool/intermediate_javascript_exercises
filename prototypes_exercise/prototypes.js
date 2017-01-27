function Person (firstName,lastName,favoriteColor, favoriteNumber, favoriteFoods) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = [];
    this.family = [];
}

Person.prototype.fullName = function () {
    return `${this.firstName} ${this.lastName}`
}

Person.prototype.toString = function() {
     return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`
}

// Person.prototype.family = [];

Person.prototype.addToFamily = function (myPerson) { 
    if (myPerson instanceof Person && 
        this.family.indexOf(myPerson) === -1) {
        this.family.push(myPerson)
    }
}

Array.prototype.map = function (callback) {
	newArr =[];
	this.forEach(function (val, idx, arr) {
		newArr.push(callback(val, idx, arr));
	});
	return newArr;
}

Array.prototype.map = function (callback) {
	newArr =[];
	for (var i = 0; i < this.length; i++) {
		newArr.push(callback(this[i], i, this))
	}
	return newArr;
}

String.prototype.reverse = function () {
	// arr = [].slice.call(this, this);
	arr = Array.from(this);
	reverseStr = "";
	for (var i = arr.length - 1; i >= 0; i--) {
		reverseStr += arr[i];
	}
	return reverseStr;
}

// Function.prototype.bind = function() {} //TEST SUITE SAYS THIS WORKS with no code doing anything

Function.prototype.bind = function(thisArg) {
	bindFn = this;
	bindArgs = Array.from(arguments).slice(1);
	return function () {
		args = Array.from(arguments);
		return bindFn.apply(thisArg, bindArgs.concat(args))
	}
}