## ES2015 Exercise

Convert the following es5 code blocks into es2015 code:

```javascript
const person = {
  fullName: 'Harry Potter',
  sayHi() {
    setTimeout(() => console.log('Your name is ' + this.fullName), 100);
  }
};

```


```javascript
let name = 'Josie';
console.log(`When ${name} comes home, so good`);

```


```javascript
const DO_NOT_CHANGE = 42;

```

```javascript
let arr = [1, 2];
[2, 1] = [1, 2];
```

```javascript
const double = arr => arr.map(val => val * 2);

```

```javascript
const obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

const { numbers: { a, b } } = obj;

```

```javascript
const add = (a = 10, b = 10) => a + b;

```

### Research the following functions - what do they do?

`Array.from` -

[Returns an array from an array-like or iterable object.](
https://docs.microsoft.com/en-us/scripting/javascript/reference/array-from-function-array-javascript)


`Object.assign` -

[Copies the values from one or more source objects to a target object.](https://docs.microsoft.com/en-us/scripting/javascript/reference/object-assign-function-object-javascript)


`Array.includes` -

[Returns a Boolean value indicating whether an array includes a certain element.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)


`String.startsWith` -

[Returns a value that indicates whether a string or substring starts with another specified string.](https://docs.microsoft.com/en-us/scripting/javascript/reference/startswith-method-string-javascript)
