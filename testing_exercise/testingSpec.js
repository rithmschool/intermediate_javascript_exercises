var expect = chai.expect;

// WRITE YOUR TESTS HERE!
describe("ReplaceWith", function() {
	it ("is case sensitive", function() {
		expect(replaceWith("awesome", "e", "z")).to.equal("awzsomz");
		expect(replaceWith("Foo", "F", "B")).to.equal("Boo");
	});
});

describe("Expand", function() {
	it ("is expected output", function() {
		expect(expand([1,2,3], 3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
		expect(expand(["foo", "test"], 1)).to.deep.equal(["foo", "test"]);
	});
});

describe("AcceptNumbersOnly", function () {
	it ("is passed numbers only", function() {
		expect(acceptNumbersOnly(1, "foo")).to.equal(false);
		expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.equal(true);
		expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.equal(false);
	});
});

describe("MergeArrays", function() {
	it ("is passed valid arrays", function() {
		expect(mergeArrays([2,1],3)).to.deep.equal(false);
		expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
	});
});

var obj1= {
    name: "Foo",
    num: 33
}
var obj2 = {
    test: "thing",
    num: 55
}

describe("MergeObjects", function() {
	it ("is passed valid objects", function() {
		expect(mergeObjects(obj1, null)).to.deep.equal(false);
		expect(mergeObjects(obj1, obj2)).to.deep.equal({name: "Foo",test: "thing",num: 55});
	});

})