## ES2015 Exercise

Convert the following es5 code blocks into es2015 code:

using this, so can't use arrow function?  .bind?

```javascript
var person = {
    fullName: "Harry Potter",
    sayHi: function(){
        setTimeout(function(){
            console.log('Your name is ${this.fullName}')
        }.bind(this),1000)
    }
}
```

done,changed to string interpolation

```javascript
var name = "Josie"
console.log('When ${name} comes home, so good')

```
done, used const 

```javascript
const DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // stop me from doing this!  
```
??

```javascript
var arr = [1,2]
var temp = arr[0]
arr[0] = arr[1]
arr[1] = temp
```

done?

```javascript
function double(arr) => ( arr.map(val => (val*2); )
```

done, destructed below

```javascript
var obj = {
    numbers: {
        a: 1,
        b: 2
    } 
}

var {a,b} = obj.numbers
```
changed to default inputs... is || saying "or ten"?

```javascript
function add(a =0,b=0){
    a = a || 10   
    b = b || 10    
    return a+b
}
```

Research the following functions - what do they do?

`Array.from` - creates a new Array from an array-like object or string (changes "foo" to ["f","o","o"]

`Object.assign` - creates a shallow copy of one source to a target source. ex: can create a new object with inputs. Object.assign({},obj); if feed empty object first it copies to a new empty object

`Array.includes` - determines if an array includes a certain element, returns boolean

`String.startsWith` - determines if a string begins with the characters of a given "search" string, returns boolean ex: string.startsWith('a'). 2nd parameter is index to begin search at, defaults to 0. 
