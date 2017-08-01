var expect = chai.expect;

describe("replaceWith", function(){
	it("returns a string", function(){
		expect(replaceWith("test", "t", "x")).to.be.a("string");
	});
	it("removes the designated character", function(){
		expect(replaceWith("test", "t", "x")).to.not.have.string("t");
	});
	it("inserts the designated character", function(){
		expect(replaceWith("test", "t", "x")).to.have.string("x");
	});
	it("replaces specific char with designated char", function() {
		expect(replaceWith("awesome", "e", "z")).to.deep.equal("awzsomz");
		expect(replaceWith("Foo", "F", "B")).to.deep.equal("Boo");
	});
	it("is case sensitive", function(){
		expect(replaceWith("aBcBbBbBb", "B", "c")).to.deep.equal("acccbcbcb");
	});
});

describe("expand", function(){
	it("returns an array", function(){
		expect(expand([1,2,3],3)).to.be.an("array");
	});
	it("should return an array that contains the original array a number of times", function(){
		expect(expand([1,2,3],3)).to.include.members([1,2,3]);
		expect(expand([1,2,3],3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
	});
});

describe("acceptNumbersOnly", function(){
	it("returns a boolean", function(){
		expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.equal(true);
		expect(acceptNumbersOnly(1,2,3,4,5,6,"hi")).to.equal(false);
	});
	it("returns true if all items in array are numbers", function(){
		expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.be.true;
		expect(acceptNumbersOnly(100,200,300,400)).to.be.true;
	});
	it("returns false if not all items numbers", function(){
		expect(acceptNumbersOnly(1, "foo")).to.be.false;
	});
	it("returns false if NaN is present", function(){
		expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.be.false;
	});
});

describe("mergeArrays", function(){
	it("returns an array", function(){
		expect(mergeArrays([2,1],[3,4])).to.be.an("array");
	});
	it("returns the array sorted", function(){
		expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
	});
});

describe("mergeObjects", function(){
	it("should return an object", function(){
		expect(mergeObjects({hello:1, bye:2}, {hello2:3, bye2:4})).to.be.an("object");
	});
	it("should override value in first passed in obj if both objs have the same key", function(){
		expect(mergeObjects({hello:1, bye:2}, {hello:3, bye:4})).to.deep.equal({hello:3, bye:4});
	});
	it("should return an object with all the keys from both objs", function(){
		expect(mergeObjects({hello:1, bye:2}, {hello2:3, bye2:4})).to.have.all.keys("hello", "bye", "hello2", "bye2");
	});
	it("should not change the key-value pairs", function(){
		expect(mergeObjects({hello:1, bye:2}, {hello2:3, bye2:4})).to.deep.equal({hello:1, bye:2, hello2:3, bye2:4});
	});
});