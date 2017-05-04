function Person(firstName, lastName, favoriteColor, favoriteNumber) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber

	// the lines below are equivalent to the Person.prototype approach
	// but that approach is preferred because the function
	// doesn't have to be stored in each person's object

	// this.multiplyFavoriteNumber = function (num) {
	// return num * this.favoriteNumber;
	// }
}

Person.prototype.multiplyFavoriteNumber = function (num) {
	return num * this.favoriteNumber;
}