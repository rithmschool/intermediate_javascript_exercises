# Constructors Exercise

Answer the following questions and make the tests pass.

1. What is the purpose of a constructor function? 
To create the blueprints that can create objects that have the same properties
2. What does the `new` keyword do?
It: 1. creates an object, 2. assigns this keyword to that object, 3. returns the object, 4. creates a link to the .prototype property of the constructor function used to assign properties on that object
3. What does the keyword `this` refer to inside of a constructor function? 
Nothing until it is invoked using the keyword "new"; it's a ~placeholder
4. What is a `class`? What is an `instance`?
A 'class' is the structure (a function?) that assigns the properties of all of the objects created from it. An instance is an object created from that class.
5. Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber.

6. Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the Person's favorite number

7. Refactor the following code so that there is no duplication inside the `Child` function.

```javascript
function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}
```
