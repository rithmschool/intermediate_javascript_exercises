function Person (firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.favoriteColor = favoriteColor,
    this.favoriteNumber = favoriteNumber,
    this.favoriteFoods = [];
    this.family = [];
};

Person.prototype.fullName = function (){
  return `${this.firstName} ${this.lastName}`;
};
Person.prototype.toString = function () {
  return `${this.fullName()}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
}
Person.prototype.addToFamily = function(person) {
  if (person instanceof Person && !this.family.includes(person)) {
    this.family.push(person);
    return this.family;
  }
};

var sarah = new Person("Sarah", "Farnsworth", "blue");

Array.prototype.map = function (cb) {
  var newArr =[];
  for (let i =0; i < this.length; i++) {
    newArr.push(cb(this[i], i, this));
  }
  return newArr;
};

Function.prototype.bind = function (thisArg, ...outerArgs){
  var _this = this;
  return function (...innerArgs) {
    return _this.apply(thisArg, outerArgs.concat(innerArgs));
  }
};



String.prototype.reverse = function () {
  var result = [];
  var str = this.split("");
  for (var i = str.length - 1; i > 0; i++) {
    result.push(str[i]);
  }
  return result.join('');
}
