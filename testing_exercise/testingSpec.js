var expect = chai.expect;

// WRITE YOUR TESTS HERE!

/* 
Write a function called replaceWith that takes in a string, a character to replace and a character to replace it with and returns the string with the replacements. Write tests to make sure this is case sensitive

replaceWith("awesome", "e", "z") // "awzsomz"
replaceWith("Foo", "F", "B") // "Boo"
*/

describe("replaceWith()", function() {
	// not sure how to do this
	// it("has only string arguments", function() {
	// 	var arg1, arg2;
	// 	var result = replaceWith(arg1, arg2);
	// 	expect(result).to.be.a("string");
	// 	expect(arg1).to.be.a("string");
	// 	expect(arg2).to.be.a("string");
	// });
	it("works for typical case 1", function() {
		expect(replaceWith("awesome", "e", "z")).to.equal("awzsomz");
	});
	it("works for typical case 2", function() {
		expect(replaceWith("Foo", "F", "B")).to.equal("Boo");
	});
	it("is case sensitive 1", function() {
		expect(replaceWith("awesome", "E", "z")).to.not.equal("awzsomz"); // b !== B
	});
	it("is case sensitive 2", function() {
		expect(replaceWith("awesome", "e", "Z")).to.equal("awZsomZ"); // z !== Z
	});
	it("is case sensitive 3", function() {
		expect(replaceWith("Foo", "f", "B")).to.not.equal("Boo"); // f !== F
	});
	it("is case sensitive 4", function() {
		expect(replaceWith("Foo", "F", "b")).to.equal("boo"); // b !== B
	});
});

/* 
Write a function called expand which takes an array and a number and returns a copy of the array with as many numbers as specified

expand([1,2,3],3) //[1,2,3,1,2,3,1,2,3]
expand(["foo", "test"],1) //["foo","test"]
*/

describe("expand()", function() {
	it("works in zero case", function() {
		expect(expand([1, 2, 3], 0)).to.deep.equal([]);
		expect(expand([], 5)).to.deep.equal([]);
	});
	it("works with 1", function() {
		expect(expand([1], 4)).to.deep.equal([1, 1, 1, 1]);
		expect(expand(["foo", "test"],1)).to.deep.equal(["foo","test"]);
	});
	it("returns multiples", function() {
		expect(expand([1,2,3],3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
	});
	// it("doesn't work if second arg isn't a number", function() {
	// 	var result = expand(arr, num);
	// 	expect(arguments[]).to.be.a("number");
	// 	expect(arr).to.be.instanceof(Array);

	// });
	/*it("doesn't work if first arg isn't an array", function() {

	});*/
});

/* 
Write a function called acceptNumbersOnly which takes in any number of arguments and returns true if all of them are numbers. Watch out for NaN - it is a typeof "number"!

acceptNumbersOnly(1,"foo") // false
acceptNumbersOnly(1,2,3,4,5,6,7) // true
acceptNumbersOnly(1,2,3,4,5,6,NaN) // false
*/

describe("acceptNumbersOnly()", function() {
	it("returns false if typical non-numbers", function(){
		expect(acceptNumbersOnly(2, {}, 7)).to.equal(false);
		expect(acceptNumbersOnly(5, [])).to.equal(false);
		expect(acceptNumbersOnly(null)).to.equal(false);
		expect(acceptNumbersOnly(6, undefined, 9)).to.equal(false);
		expect(acceptNumbersOnly("hello", 5)).to.equal(false);
	});
	it("returns false for NaN", function() {
		expect(acceptNumbersOnly(NaN, 3)).to.equal(false);
	});
	it("returns true on all number input", function() {
		expect(acceptNumbersOnly(0)).to.equal(true);
		expect(acceptNumbersOnly(8, 9, 14)).to.equal(true);
		expect(acceptNumbersOnly(-3, 6, -12)).to.equal(true);
	});
});

/* 
Write a function called mergeArrays which takes in two arrays and returns one array with the values sorted

mergeArrays([2,1],[3,4]) // [1,2,3,4]
*/

describe("mergeArrays()", function() {
	it("returns one array", function() {
		expect(mergeArrays([4, 5, 3], [8, 7, 9])).to.deep.equal([3, 4, 5, 7, 8, 9]);
	});
	it("works with two empty arrays", function() {
		expect(mergeArrays([], [])).to.deep.equal([]);
	})
	it("works with arrays of size 1", function() {
		expect(mergeArrays([4], [2])).to.deep.equal([2, 4]);
	});
	it("works with arrays of different dimensions", function() {
		expect(mergeArrays([7, 3, 1], [2, 4])).to.deep.equal([1, 2, 3, 4, 7]);
	});
	it("has a sorted result", function() {
		expect(mergeArrays([2, 7, 3], [5, 9, 1])).to.not.deep.equal([2, 7, 3, 5, 9, 1]);
	});
});

/* 
Write a function called mergeObjects which takes in two objects and return an object with the keys and values combined. If the second parameter has the same key - it should override first one. There is a built in function called Object.assign - research it, but do not use it, try to do this on your own!

var obj1= {
    name: "Foo",
    num: 33
}

var obj2 = {
    test: "thing",
    num: 55
}

mergeObjects(obj1, obj2) 

>>
{
    name: "Foo",
    test: "thing",
    num: 55
}
*/

describe("mergeObjects()", function() {
	it("isn't valid if not called on objects", function() {
		expect(mergeObjects([], 3)).to.deep.equal({});
		expect(mergeObjects(1, 2)).to.deep.equal({});
		expect(mergeObjects(["hi"], "what")).to.deep.equal({});
	});
	it("combines two objects", function() {
		var obj1= {
		    name: "Foo",
		}

		var obj2 = {
		    test: "thing",
		    num: 55
		}
		expect(mergeObjects(obj1, obj2)).to.deep.equal({
		    name: "Foo",
		    test: "thing",
		    num: 55
		});
	});
	it("combines two empty objects", function() {
		var emptObj1 = {}
		var emptObj2 = {}
		expect(mergeObjects(emptObj1, emptObj2)).to.deep.equal({})
	});
	it("works when one is empty and other is not", function() {
		var someObj1 = {}
		var someObj2 = {
			test: "val"
		}
		expect(mergeObjects(someObj1, someObj2)).to.deep.equal({
			test: "val"
		});
	});
	it("overwrites same key to have second value", function() {
		var obj1= {
		    name: "Foo",
		    num: 33
		}

		var obj2 = {
		    test: "thing",
		    num: 55
		}
		expect(mergeObjects(obj1, obj2)).to.deep.equal({
		    name: "Foo",
		    test: "thing",
		    num: 55
		});
	});
});





