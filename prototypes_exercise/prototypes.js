//this is constructor function, specific to every instance. If it's not just instance, can put on prototype

function Person(firstName,lastName,favoriteColor,favoriteNumber,favoriteFoods=[]){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = favoriteFoods;
    this.family = [];
}

//adding "key" or "property" to prototype which is an anonymous function
Person.prototype.fullName = function(){
	return `${this.firstName} ${this.lastName}`;
}

Person.prototype.toString = function(){
	return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`
}

Person.prototype.addToFamily = function(p){
	if(this.family.includes(p)){
		return this.family.length;
	} 
	if(p instanceof Person === false){
		return this.family.length;
	}
	this.family.push(p);
	return this.family.length;
}

// var tim = new Person("Tim", "Garcia", "blue");
// var moxie = new Person("Moxie", "garcia", "green");
//tim.addtoFamily(moxie);


//arr.map(function(el){
	// return {
	// 	name: el
	// }
//})
Array.prototype.map = function(fn){
	var newArray =[];
	for(var i =0; i < this.length; i++){ 
		newArray.push(fn(this[i],i,this))
	}
	return newArray;
}

String.prototype.reverse = function(){
	var newString = "";
	for(var i = 0; i < this.length; i++){
		newString += this[this.length-1-i]
	}
	return newString;
}


// var sayAge = function(){
// 	return this.age;
// }
// var newFunction = sayAge.bind({age:20},"test","tes");
// Function.prototype.bind = function(...args){
// 	//_this "this" is the Function
// 	var _this = this;
// 	return (function(...args){

// 	}).apply(_this)
// }

Function.prototype.bind = function(myThis, ...args){
	var _this = this;
	return(function(...newArgs){
		return _this.apply(myThis, args.concat(newArgs))
	})
}

Function.prototype.reduce = function(){
	
}










