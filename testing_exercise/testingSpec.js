var expect = chai.expect;

// WRITE YOUR TESTS HERE!


// - Write a function called `replaceWith` that takes in a string, a character to 
// replace and a character to replace it with and returns the string with the replacements. 
// Write tests to make sure this is case **sensitive**

// ```javascript
// replaceWith("awesome", "e", "z") // "awzsomz"
// replaceWith("Foo", "F", "B") // "Boo"
// ```

describe("replaceWith", function(){

  it("returns a string", function(){
    expect(replaceWith("word")).to.be.a("string");
  });

  it("functions as expected", function(){
  	expect(replaceWith("Fake", "F", "B")).to.equal("Bake");

  })

  it ("returns a word that has been replaced with the correct case", function(){
  	expect(replaceWith("fake", "f", "B")).to.equal("Bake");

  })
  

});


// - Write a function called `expand` which takes an array and 
// a number and returns a copy of the array with as many numbers as specified
// javascript
// expand([1,2,3],3) //[1,2,3,1,2,3,1,2,3]
// expand(["foo", "test"],1) //["foo","test"]




describe("expand", function(){

	it ("returns an array", function(){
		expect(expand( [ 1 , 2, 3], 3) ).to.be.an("array");
	})

	it ("returns 0 if the second argument is 0 or negative", function(){
		expect(expand( [2, 4, 6], -4) ).to.equal("2nd argument provided is negative. This can not work here")
	})

	it ("returns as many copies of the initial array as specified", function(){
		expect(expand(["alpha", "beta", "gamma"], 2)).to.deep.equal(["alpha", "beta", "gamma", "alpha", "beta", "gamma"])
	})


})



//  Write a function called `acceptNumbersOnly` which takes in any number of 
// arguments and returns `true` if all of them are numbers. Watch out for `NaN` - it is a `typeof "number"`!

// ```javascript
// acceptNumbersOnly(1,"foo") // false
// acceptNumbersOnly(1,2,3,4,5,6,7) // true
// acceptNumbersOnly(1,2,3,4,5,6,NaN) // false

describe("acceptNumbersOnly", function(){
	it ("returns true if all arguments are present", function (){
		expect(acceptNumbersOnly( 1, 2, 3, 4 ) ).to.equal(true);
	})
	it ("returns false if non-number data types are present", function(){
		expect(acceptNumbersOnly( 1, "lion", 2   )).to.equal(false);
	})
	it ("returns false if NaN is passed as an argument", function(){
		expect(acceptNumbersOnly( 1, NaN, 2 )).to.equal(false);
	})
})

 // Write a function called `mergeArrays` which takes in two arrays and returns one array with the values sorted

// javascript  mergeArrays([2,1],[3,4]) // [1,2,3,4]

describe("mergeArrays", function(){
	it ("returns an array", function(){
		expect(mergeArrays( [ 1 , 2],  [3, 4] ) ).to.be.an("array")

	})

	it ("returns an unsorted array", function(){
		expect(mergeArrays( [1, 2], [4 , 3] ) ).to.deep.equal([1, 2, 3, 4]);

		
	})
	it ("returns an array with the wrong number of total array elements ", function(){
		expect(mergeArrays( [1, 3] , [4, 5, 6] ).length ).to.equal(5);

	})

		
})




// Write a function called `mergeObjects` which takes in two objects 
// and return an object with the keys and values combined. 
// If the second parameter has the same key - it should override first one. 
// There is a built in function called `Object.assign` - research it, 
// but do not use it, try to do this on your own!

var obj1 = {
	name: "Foo",
    num: 33	
}

var obj2 = {
    test: "thing",
    num: 55
}

describe("mergeObjects", function(){
	it ("returns something that is not an object", function(){
		expect(mergeObjects( obj1, obj2) ).to.be.an("object");
	})
	// it ("returns an object with an incorrect number of keys"), function(){
	// 	expect( Object.keys ( mergeObjects ( obj1, obj2) ).length).to.be(4);
	// })

})

