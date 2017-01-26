var expect = chai.expect;

// WRITE YOUR TESTS HERE!

describe("Should replace letters in a string", function(){
	it("It should the first parameter with the second", function() {
		expect(replaceWith('apple','a','b')).to.equal('bpple');
	})
})

describe("Return a copy of an array n times", function() {
	it("Should return a copy of an array", function() {
		expect(expand(['wolverine', 'storm'], 2)).to.deep.equal(['wolverine', 'storm', 'wolverine', 'storm']);
	})
})

describe("Returns true if all indices are numbers", function() {
	it("Should return true if all are numbers", function() {
		expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.equal(true);
	})
})

describe("Returns concatinated arrays that are sorted", function() {
	it("Should return a sorted array", function() {
		expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
	})
})

describe("Return an object with the keys and values combined", function() {
	it("Should return a combined object", function() {
		expect(mergeObjects({name: "Foo", num: 33}, {test: "thing", num: 55})).to.deep.equal({ name: 'Foo', num: 55, test: 'thing' });
	})
})