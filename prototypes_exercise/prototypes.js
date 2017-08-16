//Part I

function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods){
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.favoriteFoods = [];
	this.family = [];
}

Person.prototype.fullName = function(){
	return `${this.firstName} ${this.lastName}`;
}

Person.prototype.toString = function(){
	return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
}

Person.prototype.addToFamily = function(person){
	if(person instanceof Person && !this.family.includes(person)){
		return this.family.push(person);
	}
}

//Part II

Array.prototype.map = function(fn){
	let newArr = [];
	for(let i = 0; i < this.length; i++){
		newArr.push(fn(this[i], [i], this))
	}
	return newArr;
}


String.prototype.reverse = function(){
	let reverseStr = "";
	for(let i = this.length-1; i >=0; i--){
		reverseStr = reverseStr.concat(this[i]);
	}
	return reverseStr;
}


Function.prototype.bind = function(thisArg){
	let _this = this;
	let outerArgs = [].slice.call(arguments, 1)
	return function() {
		let innerArgs = [].slice.call(arguments);
		return _this.apply(thisArg, outerArgs.concat(innerArgs));
	}
}

Array.prototype.reduce = function(fn, startVal) {
  let acc = startVal ? startVal : this[0];
  let idx = startVal ? 0 : 1;

  while(idx < this.length){
  	acc = fn(acc, this[idx], idx, this);
  	idx++;
  }
  return acc;
}
