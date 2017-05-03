function Person(firstName, lastName, favoriteColor, favoriteNumber){
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
}

function Person(firstName, lastName, favoriteColor, favoriteNumber){
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.multiplyFavoriteNumber = function(num){
		return (num * this.favoriteNumber);
	}
}

function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
	Parent.call(Child, firstName, lastName, favoriteColor, favoriteFood);
}