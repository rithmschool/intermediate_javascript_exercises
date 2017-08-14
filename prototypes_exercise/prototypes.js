function Person(fName, lName, favColor, favNum, favFoods ) {
	this.firstName = fName,
	this.lastName = lName,
	this.favoriteColor = favColor,
	this.favoriteNumber = favNum,
	this.favoriteFoods = [];
	this.family = [];
}


Person.prototype.fullName = function() {
    return `${this.firstName} ${this.lastName}`;
};


Person.prototype.toString = function() {
    return `${this.fullName()}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
};


Person.prototype.addToFamily = function(person) {
    if(person instanceof Person && !this.family.includes(person)) {
        this.family.push(person);
        return this.person;
    }
};

Array.prototype.map = function(cb) {
	var newArr = [];
	for(let i = 0; i < this.length; i++) {
		newArr.push(cb(this[i], i, this));
	}
	return newArr;
}


String.prototype.reverse = function() {
	return this.split("").reverse().join("");
}

// still working on figuring out bind 







