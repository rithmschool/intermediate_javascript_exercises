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

// 2015
var person = {
    fullName: "Harry Potter",
    sayHi(){
        setTimeout(() => console.log(`Your name is ${this.fullName}`),1000)
    }
}
```

```javascript
var name = "Josie"
console.log("When " + name + " comes home, so good")

// 2015
var name = "Josie";
console.log(`When ${name} comes home, so good`);
```

```javascript
var DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // stop me from doing this!

// 2015
const DO_NOT_CHANGE = 42;
```

```javascript
var arr = [1,2]
var temp = arr[0]
arr[0] = arr[1]
arr[1] = temp

// 2015
let [ta, tb, ...tc] = arr;
arr = [tb, ta, ...tc];
```

```javascript
function double(arr){
    return arr.map(function(val){
        return val*2
    });
}

// 2015
var double = arr => arr.map(val => val*2);
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

// 2015
var {a, b} = obj.numbers;
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

// 2015
var add = (a = 10,b = 10) => a+b;
```

Research the following functions - what do they do?

`Array.from` -

`Object.assign` -

`Array.includes` -

`String.startsWith` -
