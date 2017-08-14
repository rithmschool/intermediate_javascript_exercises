

// WRITE YOUR TESTS HERE!

//replaceWith test
var expect = chai.expect;

describe("case sensitve letter replacement", function() {
	it("replaces charToFind with charReplacement", function() {
		expect(replaceWith('Foo', 'F', 'B')).to.equal('Boo');
		expect(replaceWith("awesome", "e", "z")).to.equal("awzsomz")
	})
})

//expand test 
describe("concatenation of arrays", function() {
	it("returns an array that has been copied", function() {
		expect(expand([1,2,3], 3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
		expect(expand(["foo", "test"], 1)).to.deep.equal(["foo","test"]);
	})
})

//acceptNumbersOnly test
describe("confirm if all arguments are numbers", function() {
	it("returns a boolean indicating if all args are numbers", function() {
		expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.equal(true);
		expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.equal(false);
	})
})

//mergeArrays test 
describe("takes in two arrays", function() {
	it("returns a sorted array", function() {
		expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
	})
})

//mergeObjects test
describe("takes in two objects", function() {
	it("returns one object with all properties", function() {
		expect(mergeObjects({name: "Foo", num: 33}, {test: "thing", num: 55})).to.deep.equal({name: "Foo", test: "thing", num: 55})
	})
})






