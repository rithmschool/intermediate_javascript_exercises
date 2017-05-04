function Person(firstName, lastName, favoriteColor, favoriteNumber) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.multiplyFavoriteNumber = function(num) {
		return num * this.favoriteNumber
	}
}

var me = new Person('Amanda', 'Nagai', 'purple', '8')
me.multiplyFavoriteNumber(6);





function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
	Parent.call(this, firstName, lastName, favoriteColor, favoriteFood);
}

new Child('Amy', 'Nagai', 'green', 'spaghetti')