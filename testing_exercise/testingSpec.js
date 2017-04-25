var expect = chai.expect;

describe("replaceWith", function() {
	it("should return str")

	it("should replace low case character with low case character", function() {
		expect(replaceWith("awesome", "e", "z")).to.equal("awzsomz");
	});

	it("replace high case character with high case character", function() {
		expect(replaceWith("Foo", "F", "B")).to.equal("Boo");
	});

});


describe("expand", function() {
	it("create new array concatinated with itself 3 times", function() {
		expect(expand([1,2,3], 3).length).to.equal([1,2,3,1,2,3,1,2,3].length);
	});

	it("create array of strings concatinated with itself 1 time", function() {
		expect(expand(["foo", "boo"], 1).length).to.equal(["foo", "boo"].length);
	});

});

describe("acceptNumbersOnly", function() {
	it("returns false if some arguments are not numbers", function() {
		expect(acceptNumbersOnly(1, "foo")).to.equal(false);
		expect(acceptNumbersOnly(1, 2, 3, NaN)).to.equal(false);
	});

	it("returns true if all arguments are numbers", function() {
		expect(acceptNumbersOnly(1, 2, 3, 4)).to.equal(true);
	});

});

describe("mergeArrays", function() {

	it("should concat two arrays and return a sorted array", function() {
		expect(mergeArrays([2,1], [3,4])).to.deep.equal([1,2,3,4]);
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

describe("mergeObjects", function() {
	it("return an object with the keys and values combined", function() {
		expect(mergeObjects(obj1, obj2)).to.deep.equal({
    name: "Foo",
    test: "thing",
    num: 55
		});
	});
});
