var expect = chai.expect;

describe("Testing replaceWith on a string", function(){
	it("Replaces character with another character in a string lower case", function(){
		expect(replaceWith("awesome", "e", "z")).to.equal("awzsomz");
	});
	it("Replaces character with another character in a string upper case", function(){
		expect(replaceWith("Foo","F","B")).to.equal("Boo");
	});
	it("Replaces character with another character in a string mixed case", function(){
		expect(replaceWith("Foo","F","b")).to.equal("boo");
		expect(replaceWith("Foo","f","B")).to.equal("Foo");
	});
	it("Replaces character with another character in a string with numbers", function(){
		expect(replaceWith("Foo","F","1")).to.equal("1oo");
	});
});

describe("Testing expand on an array", function(){
	it("repeats array n times on a array of numbers", function(){
		expect(expand([1,2,3],3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
	});
	it("repeats array n times on a array of stings", function(){
		expect(expand(["foo", "test"], 1)).to.deep.equal(["foo","test"]);
	});
});

describe("Testing acceptNumbersOnly to accept numbers only in arguments", function(){
	it("tests an only number arguments", function(){
		expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.equal(true);
	});
	it("tests a mixed arguments", function(){
		expect(acceptNumbersOnly(1,"foo")).to.equal(false);
		expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.equal(false);
		expect(acceptNumbersOnly(1,[2,3,4])).to.equal(false);
	});
});

describe("Testing mergeArrays to merge and sort arrays", function(){
	it("tests of it merges and sorts two number arrays", function(){
		expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
	});
	it("tests of it merges and sorts string arrays", function(){
		expect(mergeArrays(["a","c"],["d","b"])).to.deep.equal(["a","b","c","d"]);
	});
	it("tests of it merges and sorts string arrays mix", function(){
		expect(mergeArrays([1,"c",3,"a"],[4,"b", 2])).to.deep.equal([1,2,3,4,'a','b','c']);
	});
});

describe("Testing mergeObjects to merge two objects", function(){
	it("merges two objects with unique keys", function(){
		expect(mergeObjects({name: "Foo", num: 33}, {message: "Hello"})).to.deep.equals({name: "Foo", num: 33, message: "Hello"});
	});
	it("merges two objects with non-unique keys", function(){
		expect(mergeObjects({name: "Foo", num: 33}, {test: "Thing", num: 55})).to.deep.equals({name: "Foo", num: 55, test: "Thing"});
	});
});