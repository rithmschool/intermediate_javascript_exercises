# Constructors Exercise

Answer the following questions and make the tests pass.

**1. What is the purpose of a constructor function?**

The purpose of a construction function is to minimise the repetition of code for a "factory-like" function. It is a blue print of the object which makes use of the key word `this` and `new`.   

The constructor function also does not use camelCasing to distinguish between a function and a construtor.

When invoking the constructor you need the key word `new` or else the blue prints with the key word `this` will latch on to the closest object (not created by the key word `new`)

**2. What does the `new` keyword do**

It does four things
1. Creates a new empty object
2. Sets the key word `this` to be the newly created object from 1.
3. Returns the object (unless you return a non primitive inside the constructor)
4. creates a link between the object and the constructor's prototype

**3. What does the keyword `this` refer to inside of a constructor function? **

The key word `this` depends on the context given. If without the `new` word. `this` will refer to the closest object which might be the global window. When `this` is called with the `new` key word, it will refer to the object created by the `new` key word.

**4. What is a `class`? What is an `instance`?**

A Class is a blueprint which instances make use of to make new instances of the class. 

In object-orientated programming. A Class would be the blueprints for the object and instances use these Classes to make objects. JavaScript tries to mimic this using Constructors for Classes

**5. Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber.**

```js
function Person(firstName, lastName, favoriteColor, favoriteNumber){
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
}
```

**6. Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the Person's favorite number
**

```js
function Person(firstName, lastName, favoriteColor, favoriteNumber){
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.multiplyFavoriteNumber = function(){
		return (322 * this.favoriteNumber);
	}
}
```


**7. Refactor the following code so that there is no duplication inside the `Child` function.**


```javascript
function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
	Parent.call(Child, firstName, lastName, favoriteColor, favoriteFood);
}
```
