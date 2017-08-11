function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods, family) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.favoriteFoods = [];
  this.family = [];
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

Person.prototype.toString = function() {
  return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor},` +
   ` Favorite Number: ${this.favoriteNumber}`;
}

Person.prototype.addToFamily = function(p1) {
  if (p1 instanceof Person) {
    if(!this.family.includes(p1)) {
      this.family.push(p1);
    }
    return this.family;
  }
}


Array.prototype.map = function(cb) {
  var nArr = [];
  for(var i=0; i< this.length; i++ ) {
    nArr.push(cb(this[i], i, this));
  }

  return nArr;
}

Array.prototype.reduce = function(cb) {
  var args = [].slice.call(arguments);
  if(arguments.length === 1) {
    var retValue = this[0];
    for(var i=1; i< this.length; i++) {
      retValue = cb(retValue, this[i], i, this);
    }
    return retValue;
  }
  else {
    for(var i=0; i< this.length; i++) {
      args[1] = cb(args[1], this[i], i, this);
    }
    return args[1];
  }
}

String.prototype.reverse = function() {
  var rStr = "";

  for(var i=0; i< this.length; i++) {
    rStr = this[i] + rStr;
  } 

  return rStr;
}


Function.prototype.bind = function(thisArg, ...oArgs) {
  var _this = this;
  return function(thisArg) {
    return _this.apply(thisArg, [...arguments, ...oArgs]);
  }
}