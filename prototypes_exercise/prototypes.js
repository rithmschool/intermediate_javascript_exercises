// PART 1

function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods=[]) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.favoriteFoods = favoriteFoods;
  this.family = [];
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

Person.prototype.toString = function() {
  return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
}

Person.prototype.addToFamily = function(personObj) {
  // check if personObj is actually a Person object & if there is a duplicate
  if (personObj instanceof Person && this.family.indexOf(personObj) === -1) {
    this.family.push(personObj);
  }
  return this.family.length;
}

// PART 2

Array.prototype.map = function(fn) {
  var result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(fn(this[i], i, this));
  }
  return result;
}

String.prototype.reverse = function() {
  var result = [];
  let temp = this.split("");
  for (let i = temp.length-1; i >= 0; i--) {
    result.push(temp[i]);
  }
  return result.join("");
}

Function.prototype.bind = function(thisArg, ...outerArgs) { // anon func takes thisArg to reset the this, and other arguments if needed
  var _this = this; // refers to the function that bind was called on
  // _this takes whatever arguments that it usually would
  return function(...innerArgs) {
    return _this.apply(thisArg, outerArgs.concat(innerArgs));
  }
}