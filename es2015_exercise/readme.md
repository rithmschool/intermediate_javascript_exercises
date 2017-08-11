# ES2015 Exercise

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
var person2 = {
    fullName: "Harry Potter",
    sayHi: function(){
        setTimeout(() => {
            console.log(`Your name is ${this.fullName}`)
        },1000)
    }
}
```

```javascript
var name = "Josie"
console.log("When " + name + " comes home, so good")
console.log(`When ${name} comes home, so good`);
//Steely Dan?
```

```javascript
var DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // stop me from doing this!
const doNotChange = 42;
```

```javascript
var arr = [1,2]
var temp = arr[0]
arr[0] = arr[1]
arr[1] = temp
var [a, b] = [1, 2];
[a, b] = [b, a];
```

```javascript
function double(arr){
    return arr.map(function(val){
        return val*2
    });
}

function double1(arr){
  return arr.map(value => value * 2);
}
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

var {a, b, c} = obj.numbers;
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
function add(a = 10, b = 10) {
  return a + b;
}
//or better
var add = (a = 10, b = 10) => a + b;
```

Research the following functions - what do they do?

`Array.from` - It allows you to create arrays from array like objects, things with a length property and indexed elements - has the optional parameter .map() to perform a function on each element in the new array. which syntax would be like: Array.from(obj, mapFn, thisArg) Fancy using arrow functions: Array.from([1, 2, 3], x => x + x) //[2, 4, 6]

`Object.assign` - _not a deep clone_ but basically copies the enumerable and own properties from a source object to a target object. Uses get on source and set on target - so it assigns properties vs just copying or defining new properties example of cloning an object - BUT not a deep clone

```javascript
var obj = {a: 1};
var copy = Object.assign({}, obj)
console.log(copy); //{a: 1}
```

using to merge objects:

```javascript
var o1 = {a : 1};
var o2 = {b : 2};
var o3 = {c : 3};
var obj = Object.assign(o1, o2, o3);
console.log(obj); //{a: 1, b: 2, c: 3}
```

watch out when you merge objects with the same properties though ==> the properties are overwritten by other objects that have the properties later in the parameters order

```javascript
var o1 = {a : 1, b: 1, c: 1};
var o2 = {b : 2, c: 2};
var o3 = {c : 3};
var obj =Object.assign({}, o1, o2, o3);
console.log(obj); //{a: 1, b: 2, c: 3}
```

Also:

```javascript
var v1 = 'abc';
var v2 = true;
var v3 = 10;
var v4 = Symbol('foo');

var obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

`Array.includes` - determines if an array includes a certain element, returns a boolean.

syntax:

```javascript
arr.includes(searchElement);
arr.includes(searchElement, fromIndex);
```

Parameters: the element to search for and the optional fromIndex: the position in this array at which to begin searching for the searched element, a negative value searches from the index of array.length + fromIndex. defaults to zero

```javascript
var a = [1, 2, 3];
a.includes(2); //true
a.includes(4); //false
```

`String.startsWith` - determines whether a string begins with the characters of a specified string, returning boolean

syntax:

```javascript
stringWhatever.startsWith("thing I', searching for", position);
```

parameters: searchString: characters to be searched for at the start of this string position: (optional) the position in this string at which to begin searching for searchString, defaults to zero _Also case sensitive_

```javascript
//startswith
var str = 'To be, or not to be, that is the question.';

console.log(str.startsWith('To be'));         // true
console.log(str.startsWith('not to be'));     // false
console.log(str.startsWith('not to be', 10)); // true
```
