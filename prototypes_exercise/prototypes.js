function Person(first, last, favoriteColor, favoriteNumber, favoriteFoods, family){
    this.firstName = first;
    this.lastName = last;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = [];
    this.family = [];
}

Person.prototype.fullName = function(){
    return this.firstName + ' ' + this.lastName;
}

Person.prototype.addToFamily = function(people){
  if(!this.family.includes(people) && people instanceof Person)
    this.family.push(people)
  return this.family.length;
}

Person.prototype.toString = function(){
  return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
}


Array.prototype.map = function(cb, thisArg){
  var result =[];
  for(let i = 0; i <this.length; i++){
     result.push(cb(this[i], i, this))
  }
  return result;
}

String.prototype.reverse = function(){
  var revStr = '';

  for(let i = this.length-1; i >= 0; i--){
    revStr += this[i];
  }

  return revStr;
}

Function.prototype.bind = function(thisArg, ...outer){
  var _this = this;

  return function(...inner) {
    return _this.apply(thisArg, outer.concat(inner))
  }
}









