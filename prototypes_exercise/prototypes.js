function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods, family) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.favoriteFoods = [].concat.apply([],favoriteFoods);
  this.family = [];
}

var p = new Person("Polina", "Marchenko", "blue", 15, ["pelmeni", "cheese"]);

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

Person.prototype.toString = function() {
  return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
}

var m = new Person("Philipp", "Schulte", "green", 20, ["pizza", "pasta"]);
console.log(m);

Person.prototype.addToFamily = function(...relatives) {

  relatives.forEach(function(relative) {
    if (relative instanceof Person && !this.family.includes(relative)) {
      this.family.push(relative);
    }
  }, this);
}


String.prototype.reverse = function() {
  if (this.length < 1) return "";
  return this.reverse.apply(this.slice(1)) + this[0];
};


Array.prototype.map = function(cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i, this));
  }
  return newArr;
}

Function.prototype.myBind = function(thisArg, fn) {
  return function(...innerArgs) {
      return fn.apply(this, ...innerArgs);
  }
}
