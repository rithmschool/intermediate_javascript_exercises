function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = [];
    this.family = [];
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}


Person.prototype.toString = function () {
    return `${this.fullName()}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`
}

Person.prototype.addToFamily = function () {
    if (this.family.indexOf(this) === -1) {
        this.family.push(this);
        return this.family.length;
    }
}

Array.prototype.map = function (cb) {
    var arr = [];
    this.forEach(function (item, idx, ar) {
        arr.push(cb(item, idx, ar));
    })
    return arr;
}

String.prototype.reverse = function () {
    var newStr = "";
    for (let i = this.length - 1; i >= 0; i--) {
        newStr += this[i];
    }
    return newStr;
}