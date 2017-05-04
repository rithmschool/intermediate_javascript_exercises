# Constructors Exercise

Answer the following questions and make the tests pass.

1. What is the purpose of a constructor function? 

	A constructor function, similar to a factory function, is used to return some sort of object. It uses the keyword `this` and does not include a `return`.

2. What does the `new` keyword do?

	The `new` keyword does four things:

	* It creates an empty object.
	* It sets `this` to be the empty object.
	* It adds `return this` (returning the above object) to the constructor function.
	* It creates a link between the objected that the constructor function created and that constructor function's prototype (which is an object).

3. What does the keyword `this` refer to inside of a constructor function? 

	The keyword `this` doesn't refer to anything until that function is invoked. If it is invoked using the keyword `new`, then `this` will refer to the object that the construct function created (originally the empty object created by `new`).

4. What is a `class`? What is an `instance`?

	A `class` is a centralized process or blueprint for making objects. Those objects are called `instances`.

5. Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber.

	See .js file.

6. Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the Person's favorite number

	See .js file.
	
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
Refactored:

```javascript
function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
    Parent.call(this, firstName, lastName, favoriteColor, favoriteFood);
}
```