function Person(firstName, lastName, favoriteColor, favoriteNumber){
	this.firstName	= firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.multiplyFavoriteNumber = function(num){
		return this.favoriteNumber * num;
	}
}


function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName){
	Parent.apply(this, arguments);
}
