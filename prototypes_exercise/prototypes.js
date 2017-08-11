/* jshint esversion: 6 */

function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.favoriteFoods = favoriteFoods;
  this.family = [];
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.toString = function() {
  return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
};

Person.prototype.addToFamily = function(person) {
  if (person instanceof Person && !this.family.includes(person)) {
    this.family.push(person);
  }

  return this.family.length;
};

Array.prototype.map = function(cb) {
  var mapped = [];

  for (var i = 0; i < this.length; i++) {
    mapped.push(cb(this[i], i, this));
  }

  return mapped;
};

String.prototype.reverse = function() {
  var array = this.split('');
  var result = [];
  for (var i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }

  return result.join('');
};

Function.prototype.bind = function(thisArg) {
  var _this = this;
  var outerArgs = [].slice.call(arguments, 1);

  return function() {
    var innerArgs = [].slice.call(arguments);
    return _this.apply(thisArg, outerArgs.concat(innerArgs));
  };
};

// implementation that Elie showed us on Wednesday
// function bind(fn, thisArg){
//     var outerArgs = [].slice.call(arguments,2);
//     return function(){
//         var innerArgs = [].slice.call(arguments);
//         return fn.apply(thisArg, outerArgs.concat(innerArgs));
//     };
// }

Array.prototype.reduce = function(cb) {
  var args = [].slice.call(arguments);

  if (args[1]) {
    acc = args[1];
    startIdx = 0;
  } else {
    acc = this[0];
    startIdx = 1;
  }

  for (var i = startIdx; i < this.length; i++) {
      acc = cb(acc, this[i], i, this);
  }

  return acc;
};
