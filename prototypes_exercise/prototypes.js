function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = [];
    this.family = [];

}

Person.prototype.fullName = function() {
    return `${this.firstName} ${this.lastName}`
};

Person.prototype.addToFamily = function() {
    if (person instanceof Person && !this.family.includes(person)) {
        this.family.push(person);
    }
    return person;
};

Person.prototype.toString = function() {
    return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`
}

Array.prototype.map = function(cb) {
    var newArray = []
    this.forEach(function(arg, i, a) {
        newArray.push(cb(arg, i, a))
    })
    return newArray;
};

String.prototype.reverse = function() {
	return this.split('').reverse().join('')
}

// function bind(func, thisValue) {
//     return function() {
//         return func.apply(thisValue, arguments);
//     }
// }
Function.prototype.bind = function (fn, thisArg){
  return function(){
    return fn.apply(thisArg, arguments);
  }
}

Array.prototype.reduce = function(combiner, initialValue) {
  var counter,
    accumulatedValue;

  // If the array is empty, do nothing
  if(this.length === 0) {
    return this;
  } else {
    // If the user didn't pass an initial value, use the first item.
    if(arguments.length === 1) {
      counter = 1;
      accumulatedValue = this[0];
    } else if(arguments.length >= 2) {
      counter = 0;
      accumulatedValue = initialValue;
    } else {
      throw "Invalid arguments.";
    }

    // Loop through the array, feeding the current value and the result of
    // the previous computation back into the combiner function until
    // we've exhausted the entire array and are left with only one function.
    while(counter < this.length) {
      accumulatedValue = combiner(accumulatedValue, this[counter])
      counter++;
    }

    return [accumulatedValue];
  }
};
