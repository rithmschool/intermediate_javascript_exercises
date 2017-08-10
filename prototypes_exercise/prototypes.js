function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
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

Person.prototype.addToFamily = function(person) {
  if (!this.family.includes(person) && person instanceof Person) this.family.push(person);
}

Person.prototype.toString = function() {
  return `${this.fullName()}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
}

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

Array.prototype.map = function(fn, index, array) {
  var newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(fn(this[i], i, this));
  }
  return newArray;
}

Function.prototype.bind = function(thisArg, ...outerArgs){
  var _this = this;
  return function() {
    return _this.apply(thisArg, [...outerArgs, ...arguments]);
  }
}