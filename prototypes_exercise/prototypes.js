function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
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
    if (relative instanceof Person) {
      this.family.push(relative);
    }
  }, this);
}

//
// String.prototype.reverse = function() {
//   if (this.str.length < 1) return "";
//   return reverse(this.str.slice(1)) + this.str[0];
// };
