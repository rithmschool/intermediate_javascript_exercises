function Person(firstName, lastName, favoriteColor, favoriteNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
}

Person.prototype.multiplyFavoriteNumber = function(number, favoriteNumber) {
  return number * this.favoriteNumber;
}

function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

//refactor Parent & Child classes
function Child(firstName, lastName, favoriteColor, favoriteFood){
    Parent.apply(this, args);
}
