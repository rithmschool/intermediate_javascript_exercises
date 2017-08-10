function Person(
	firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods =[]
	)
{	//"Elie", "Schoppik", "purple", 34
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.favoriteFoods = favoriteFoods;
	this.fullName = function(){ return `${this.firstName} ${this.lastName}`;};
	this.family = [];
}

Person.prototype.toString = function()
	{ return `${this.fullName()}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}` };
Person.prototype.addToFamily = function(fm){
	if(this.family.includes(fm)) return this.family.length;
	if(fm instanceof Person === false) return this.family.length;

	this.family.push(fm);

	return this.family.length;
};

Array.prototype.map = function(fn, keepUndefined = false){
	var newArr = [];
	
	for(let i = 0; i < this.length; i++){
		if(this[i] !== undefined || keepUndefined){
			newArr.push(fn(this[i], i, this));
		}
	}

	return newArr;
}

String.prototype.reverse = function(){
	return this.split('').reverse().join('');
}

function rev(str){
	return str.split('').reverse().join('');
}

/*Function.prototype.bind = function(thisArg, ...args){
	var fnThis = this;

	return function(...newArgs){
		return fnThis.apply(thisArg, args.concat(newArgs));
	}

}*/

Function.prototype.bind = function(thisArg, ...args){
	var fnThis = this;

	return function(...newArgs){
		//return fnThis.apply(thisArg, args.concat(newArgs));
		thisArg.__TempFunction__ = fnThis;
		let temp = thisArg.__TempFunction__(...args,...newArgs);
		delete thisArg.__TempFunction__ ;
		return temp;
	}

}