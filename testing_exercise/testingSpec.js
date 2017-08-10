var expect = chai.expect;

// WRITE YOUR TESTS HERE!

describe("replaceWith", function(){
	it("returns right answer", function() {
		expect(replaceWith("awesome", "e", "z")).to.equal("awzsomz");
		expect(replaceWith("Foo", "F", "B")).to.equal("Boo");
	});
	
});


describe("expand", function() {
	it("returns right length", function() {
		expect(expand(["foo", "test"],1)).to.deep.equal(["foo","test"]);
		expect(expand([1,2,3],3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
	});
})

describe("acceptNumbersOnly", function() {
	it("returns the right bool", function(){
		expect(acceptNumbersOnly(1,"foo")).to.equal(false);
		expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.equal(true);
		expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.equal(false);
	});
	
})


describe("mergeArrays", function() {
	it("merged arrays", function() {
		expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
	})
})

describe("mergeObjects", function() {
	it("merge objects", function() {
		expect(mergeObjects({name: "Foo", num: 33}, {test: "thing", num: 55})).to.deep.equal({name: "Foo", test: "thing", num: 55});
	})
})

