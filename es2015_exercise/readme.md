## ES2015 Exercise

Convert the following es5 code blocks into es2015 code:

```javascript
var person = {
  fullName: "Harry Potter",
  sayHi: function(){
    setTimeout(() => {
      console.log(`Your name is ${this.fullName}`)
    }, 1000)
  }
}
```

```javascript
var name = "Josie";
console.log(`When ${name} comes home, so good`);
```

```javascript
const DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50;

VM277:1 Uncaught SyntaxError: Identifier 'DO_NOT_CHANGE' has already been declared
    at <anonymous>:1:1
```

```javascript
function double(arr){
    return arr.map(val => val*2);
}
```

```javascript
var obj = {
  numbers: {
    a: 1,
    b: 2
  } 
};

var {a,b} = obj.numbers;
```

```javascript
function add(a = 10, b = 10) {
  return a + b;
}
```

Research the following functions - what do they do?

`Array.from` - _Creates a new array from any iterable object._

`Object.assign` - _Copies the values from a source object to a target object. Note that the copies of any nested objects are shallow copies._

`Array.includes` - _Checks to see if an array 'includes' (go figure) the value passed in as an argument._

`String.startsWith` - _Checks to see if the string 'starts with' the pattern passed in as an argument. Accepts an option position parameter so you can in fact make it check for a pattern that is NOT at the start of the string. Default position value is 0, hence, starts with..._
