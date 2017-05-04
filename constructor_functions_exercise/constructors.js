// Answer the following questions and make the tests pass.
// 1. What is the purpose of a constructor function?
/* The purpose of a constructor function is to make a blueprint in which to
   be able to make many similar objects with the same keys. They are similar
   to classes in other languages. */

// 2. What does the new keyword do?
/* The new keyword does 4 things. It creates an empty object. It sets the 
   keyword 'this' to be the newly created empty object. It adds an implicit 
   return, so that we do not have to write it explicitly. And it creates an
   internal link (__proto__) from the object and the .prototype property on 
   the constructor function. */

// 3. What does the keyword this refer to inside of a constructor function?
/* The keyword 'this' is determined when a function is run. In a constructor
   function, 'this' is the empty object that will be created. */

// 4. What is a class? What is an instance?
/* A class is like a blueprint/set of plans on how things should be built. 
   An instance is the creation/construction of those plans. */

// 5. Create a constructor function for a Person, each person should have a 
//    firstName, lastName, favoriteColor and favoriteNumber.
function Person(firstName, lastName, favoriteColor, favoriteNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
}

// 6. Write a method called multiplyFavoriteNumber that takes in a number and 
//    returns the product of the number and the Person's favorite number
// function Person(firstName, lastName, favoriteColor, favoriteNumber) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.favoriteColor = favoriteColor;
//     this.favoriteNumber = favoriteNumber;
//     this.multiplyFavoriteNumber = function (number) {
//         return this.favoriteNumber * number;
//     }
// }

// 7. Refactor the following code so that there is no duplication inside the 
//    Child function.
Person.prototype.multiplyFavoriteNumber = function (number) {
    return this.favoriteNumber * number;
};

function Parent(firstName, lastName, favoriteColor, favoriteFood) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood) {
    Parent.call(this, firstName, lastName, favoriteColor, favoriteFood);
}