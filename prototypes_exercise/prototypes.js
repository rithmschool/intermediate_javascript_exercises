function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = [];
    this.family = [];

}

Person.prototype.fullName = function() {
    return `${this.firstName} ${this.lastName}`
};

Person.prototype.addToFamily = function() {
    if (person instanceof Person && !this.family.includes(person)) {
        this.family.push(person);
    }
    return person;
};

Person.prototype.toString = function() {
    return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`
}

Array.prototype.map = function(cb) {
    var newArray = []
    this.forEach(function(arg, i, a) {
        newArray.push(cb(arg, i, a))
    })
    return newArray;
};

String.prototype.reverse = function() {
	return this.split('').reverse().join('')
}

function bind(func, thisValue) {
    return function() {
        return func.apply(thisValue, arguments);
    }
}
