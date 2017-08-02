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

//solution
const person = {
    fullName: "Harry Potter",
    sayHi(){
        setTimeout(() => console.log("Your name is " + this.fullName),100)
    }
}
```

```javascript
var name = "Josie"
console.log("When " + name + " comes home, so good")

//solution
let name = "Josie"
console.log(`When ${name} comes home, so good`)

```

```javascript
var DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // stop me from doing this!
```
`const DO_NOT_CHANGE = 42;`

```javascript
var arr = [1,2]
var temp = arr[0]
arr[0] = arr[1]
arr[1] = temp

//solution let arr = [1,2]
[2, 1] = [1, 2]
```

```javascript
function double(arr){
    return arr.map(function(val){
        return val*2
    });
}

//solution
const double = (arr) => arr.map(val => val*2)

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

//solution
const obj = {
  numbers: {
      a: 1,
      b: 2
  }
}

 const {numbers:{a, b}}= obj

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

//solution

let add = (a=10, b=10) => (a + b);
```

Research the following functions - what do they do?

<br>
<code> <strong>Array.from </strong></code> 

[Returns an array from an array-like or iterable object.](
https://docs.microsoft.com/en-us/scripting/javascript/reference/array-from-function-array-javascript)

<br>
<code> <strong> Object.assign </strong></code> 

[Copies the values from one or more source objects to a target object.](https://docs.microsoft.com/en-us/scripting/javascript/reference/object-assign-function-object-javascript)

<br>
<code> <strong> Array.includes </strong></code> 

[Returns a Boolean value indicating whether an array includes a certain element.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

<br>
<code> <strong> String.startsWith </strong></code> 

[Returns a value that indicates whether a string or substring starts with another specified string.](https://docs.microsoft.com/en-us/scripting/javascript/reference/startswith-method-string-javascript)
