// ## ES2015 Exercise

// Convert the following es5 code blocks into es2015 code:

// javascript
var person = {
  fullName: "Harry Potter",
  sayHi: function (){
      setTimeout(()=>{
          console.log(`Your name is ${this.fullName}`)
      },1000)
   }
}


// javascript
var name = "Josie"
// console.log(`When ${name} comes home, so good`)


// javascript
// const DO_NOT_CHANGE = 42;
// DO_NOT_CHANGE = 50; // stop me from doing this!


// javascript
var arr = [1,2]
// var temp = arr[0]
// arr[0] = arr[1]
// arr[1] = temp
var [a,b] = arr,
    arr = [b,a];

console.log(arr)


// javascript
function double(arr){
    return arr.map(val => val*2);
}

// javascript
var obj = {
  numbers: {
    a: 1,
    b: 2
  }
}

// var a = obj.numbers.a;
// var b = obj.numbers.b;

var {a, b} = obj.numbers;

// javascript
function add(a=10,b=10){
  return a+b
}


// Research the following functions - what do they do?

// `Array.from` -
  // creates a new Array instance from an array-like or iterable object
  // for strings, split('') is similar to this. What is the difference?

// `Object.assign` -
  //merge and/or clone objects

// `Array.includes` -
  //Checks to see if an element is in an array.

// `String.startsWith` -
  //Checks to see if the beginning characters starts with a specific string.

