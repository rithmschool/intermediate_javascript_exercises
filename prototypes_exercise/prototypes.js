function Person(firstName, lastName, favoriteColor, favoriteNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.favoriteFoods = [];
  this.family = [];
}

Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

var p = new Person("Shana", "Malarkin", "Green", 38);
console.log(p.fullName()); // Shana Malarkin

Person.prototype.toString = function() {
  return this.firstName + " " + this.lastName + ", Favorite Color: " + this.favoriteColor + 
          ", Favorite Number: " + this.favoriteNumber;
}

//var p1 = new Person("Shana", "Malarkin", "Green", 38);
console.log(p.toString()); // Shana Malarkin, Favorite Color: Green, Favorite Number: 38

Person.prototype.addToFamily = function(object) {
  if (object instanceof Person)
    if (this.family.indexOf(object) === -1)
      this.family.push(object);

  return this.family.length;
}

Array.prototype.map = function(fn, thisArg) {
//  if (thisArg) this = thisArg; How do we handle this?!
  var newArray = [];

  for (var i = 0; i < this.length; i++) {
    newArray.push(fn(this[i], i, this));
  }

  return newArray;
}

String.prototype.reverse = function() {
  var reverse = "";

  for (var i = this.length - 1; i >= 0; i--) {
    reverse = reverse.concat(this[i]);
  }

  return reverse;
}

Function.prototype.bind = function(thisArg, ...outerArgs) {
  var _this = this;
  return function() {
    return _this.apply(thisArg, [...outerArgs, ...arguments]);
  }
}