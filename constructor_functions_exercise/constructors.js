// 1 The purpose of a constructor function is to help you compose objects more quickly, using a set blueprint
// with set parameters

// 2 The keyword new works as a helper to the constructor function (in the cases we've seen, there may
// be other applications), and when new is used before the Constructor function, then
// it will create a new object, assign `this` to be the new object, return 'this', and add a 'link'
// so you can access it later

// 3 'this' inside the constructor function refers to the object being created

// 4 A "class" is like a blueprint, but something not directly implemeneted in JavaScript like in
// other languages, which is why constructor function are used.  An instance is when the constructor function
// is implemented

// 5
function Person(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
}


// 6 // Using this wonderful approach after learning it afterwards :)
Person.prototype.multiplyFavoriteNumber = function(num){
	return num * this.favoriteNumber
}

// 7
function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
    return Parent.apply(this, arguments);
}

