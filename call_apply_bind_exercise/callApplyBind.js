var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function(){
            return "This person's name is " + obj.fullName
        }
    }
}

console.log( obj.person.sayHi() );


var newObj = { 
	fullName: "Harry Potter",
	sayHi() { return `This person's name is ${this.fullName}`; }
	}

console.log( newObj.sayHi() );

var newerObj = { 
	fullName: "Harry Potter",}

function sayHi() { return `This person's name is ${this.fullName}`; }

console.log( sayHi.call(obj));
console.log( sayHi.call(newObj));
console.log( sayHi.call(newerObj));
	