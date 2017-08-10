## ES2015 Exercise

Convert the following es5 code blocks into es2015 code:

```javascript
var person = {
    fullName: "Harry Potter",
    sayHi: function(){
        setTimeout(function(){
            console.log("Your name is " + this.fullName)
        }.bind(this),1000)
    }
}

// es2015
var person = {
  fullName: "Harry Potter",
  sayHi() {
    setTimeout(() => {
      console.log(`Your name is ${this.fullName}`);
    }, 1000);
  }
};
```

```javascript
var name = "Josie"
console.log("When " + name + " comes home, so good")

// es2015
var name = "Josie";
console.log(`When ${name} comes home, so good`);
```

```javascript
var DO_NOT_CHANGE = 42;
const DO_NOT_CHANGE = 50; // stop me from doing this!

```

```javascript
var arr = [1,2]
var temp = arr[0]
arr[0] = arr[1]
arr[1] = temp

// es2015
var [a, b] = arr;
var arr = [b, a];
```

```javascript
function double(arr){
    return arr.map(function(val){
        return val*2
    });
}

// es2015
var double = arr => arr.map(val => val * 2);
```

```javascript
var obj = {
    numbers: {
        a: 1,
        b: 2
    }
}

var a = obj.numbers.a;
var b = obj.numbers.b;

// es2015
{a, b} = obj.numbers;
```

```javascript
function add(a,b){
    if(a === 0) a = 0
    else {
        a = a || 10    
    }
    if(b === 0) b = 0
    else {
        b = b || 10    
    }
    return a+b
}

// es2015
var add = (a = 10, b = 10) => a + b;
```

Research the following functions - what do they do?

## `Array.from`
Creates a new array from an iterable or array-like object, for example from a list of arguments passed into a function:

`var array = Array.from(arguments);`

Array.from() optionally takes two arguments, a map function that runs on each element in the array, and an optional thisArg, that's used when executing the map function.

## `Object.assign`
Copies the values of all enumerable properties of one or more source objects to a target object (passed in as the first parameter), which is returned. Propertes in the returned object are overwritten by properties in the source object if they have the same name. The copy that is created is a shallow copy, that is, only references to arrays and objects are copied, not the actual values.

## `Array.includes`
This method is used to determine if an array includes a specified element and returns true if found, false if not found. It can be used in place of `Array.indexOf()` when a true or false is needed rather than the element's index. It takes an optional argument that specifies which index to begin searching from.

## `String.startsWith`
This case-sensitive method checks to see if a string begins with the provided substring. It accepts an optional parameter that indicates the index at which to begin searching.
