//	Part I
function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = [];
    this.fullName = function(){
        return `${this.firstName} ${this.lastName}`
    };
    this.family = [];
}

Person.prototype.toString = function(){
    return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`
}

Person.prototype.addToFamily = function(){
    if(this.family.indexOf(this) === -1){
        return this.family.push(this);
    }
}