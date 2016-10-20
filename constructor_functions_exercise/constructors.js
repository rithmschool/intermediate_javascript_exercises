// Answer the following questions and make the tests pass.

// What is the purpose of a constructor function?

//A constructor function allows you to create a shortcut/tool for passing 
//repetitive keys into similar objects. For example, if I have a bunch of profiles
//with the same keys (name/location/paid) I can use the constructor to create a new profiles
//via an empty object quickly and auto-populate the keys with the info pass into the constructor
//who would want to retype (name/location/paid) as keys each time?

// What does the new keyword do?

//allows you to to use the constructor for a new instance. 

// What does the keyword this refer to inside of a constructor function?

//it refers to the empty object you are about to fill with the constructor's "blueprint"

// What is a class? What is an instance?

//A logical grouping of data and processes. Person is a conceptual object, like persons i.e. profiles 
// a class. Tim is the instance in a class, because person is the blueprint tim was made from
//(note parent/child refers to inheritance)

// Create a constructor function for a Person, 
//each person should have a firstName, lastName, favoriteColor, favoriteNumber.

function Person (firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;

    this.multiplyFavoriteNumber = function (num) {
        return num*this.favoriteNumber
    }
}
// Write a method (synonym for function) called multiplyFavoriteNumber that takes in a number 
//and returns the product of the number and the Person's favorite number
//**the point here is that you set this function as part of parent, so its going to do this for every instance of the constructor 


// Refactor the following code so that there is no duplication inside the Child function.

// function Parent(firstName, lastName, favoriteColor, favoriteFood){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.favoriteColor = favoriteColor;
//     this.favoriteFood = favoriteFood;
// }

// function Child(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.favoriteColor = favoriteColor;
//     this.favoriteFood = favoriteFood;
// }

function Child (firstName, lastName, favoriteColor, favoriteFood) {
    Parent.call(this,firstName, lastName, favoriteColor, favoriteFood)
}