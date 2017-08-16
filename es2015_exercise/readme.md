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

var person = {
    fullName: "Harry Potter",
    sayHi(){
        setTimeout(() =>
            console.log(`Your name is ${this.fullName}`)
        ,1000)
    }
}
```

```javascript
var name = "Josie"
console.log("When " + name + " comes home, so good")

var name = "Josie"
console.log(`When ${name} comes home, so good`)
```

```javascript
var DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // stop me from doing this!

const DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // Uncaught TypeError: Assignment to constant variable.
```

```javascript
var arr = [1,2]
var temp = arr[0]
arr[0] = arr[1]
arr[1] = temp

var arr = [1,2]
var [temp,temp2] = arr
[temp,temp2] = [temp2,temp]
```

```javascript
function double(arr){
    return arr.map(function(val){
        return val*2
    });
}

let double = arr => arr.map(val => val*2)
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


var {a,b} = obj.numbers;
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

let add = (a=10, b=10) => a+b;
```

Research the following functions - what do they do?

`Array.from` - creates a new Array instance from an array-like or iterable objects, such as arguments

`Object.assign` - creates a shallow copy of an object by copying the vaules of all enumerable and own properties from one or more source objects to a target object and returning the target object

`Array.includes` - determines whether an array includes a certain element, returning true if found and false if not found; if we need the index of the element, need to use indexOf

`String.startsWith` - determines whether a string begins with the characters of a specified string, returning true if the characters are found and false if not found
