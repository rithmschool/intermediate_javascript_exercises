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
```
var person = {
    fullName: "Harry Potter",
    sayHi(){
        setTimeout(() => console.log("Your name is " + this.fullName).bind(this),1000)
    }
}


```javascript
var name = "Josie"
console.log("When " + name + " comes home, so good")
```

var name = "Josie"
console.log(`When ${name} comes home, so good`)


```javascript
var DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // stop me from doing this!
```

const DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // stop me from doing this!

```javascript
var arr = [1,2]
var temp = arr[0]
arr[0] = arr[1]
arr[1] = temp
```

var [b,a] = arr
-- or --
var [a,b] = arr
var arr = [b,a]

```javascript
function double(arr){
    return arr.map(function(val){
        return val*2
    });
}
```

var double = (arr) => arr.map(val => val*2);
    


```javascript
var obj = {
    numbers: {
        a: 1,
        b: 2
    } 
}

var a = obj.numbers.a;
var b = obj.numbers.b;
```

var{a,b} = obj.numbers



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
```

var add = (a=10, b=10) => a+b





Research the following functions - what do they do?

`Array.from` - Creates an array from an array-like object

`Object.assign` - Creates a new object with key-value pairs copied from another array.

`Array.includes` - checks if a value is in the array but does not return the index

`String.startsWith` - returns true or false based on whether the string begins with the argument passed.
