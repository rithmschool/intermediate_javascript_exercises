function Person(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = [];
    this.family = [];
}

Person.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}

Person.prototype.addToFamily = function(person){
    if(this.family.indexOf(person) === -1 && person instanceof Person){
        this.family.push(person)
    }
}

Person.prototype.toString = function(){
        return this.firstName + " " + this.lastName + ", Favorite Color: " + this.favoriteColor + ", Favorite Number: " + this.favoriteNumber;
}

String.prototype.reverse = function(){
    return this.split("").reverse().join("");
}

Function.prototype.bind = function(thisArg){
    // preserve the correct value of this for the inner function
    var _this = this;
    // grab any arguments passed to bind after the thisArg
    var outerArgs = Array.prototype.slice.call(arguments,1);
    // bind returns a function
    return function(){
        // grab any new/remaning arguments passed to the returned function
        var innerArgs = Array.prototype.slice.call(arguments);
        // invoke the original
        return _this.apply(thisArg, outerArgs.concat(innerArgs))
    }
}