var expect = chai.expect;

describe("replaceWith", function() {
	it("should return a string", function() {
		expect(replaceWith("awesome")).to.be.a('string');
	});

	it("should return string of the same length", function() {
		expect(replaceWith("awesome").length).to.equal("awesome".length);
	});

	it("should replace low case character with low case character", function() {
		expect(replaceWith("awesome", "e", "z")).to.equal("awzsomz");
	});

	it("replace high case character with high case character", function() {
		expect(replaceWith("Foo", "F", "B")).to.equal("Boo");
	});

});


describe("expand", function() {

	it("should return an array", function() {
		expect(expand(["foo", "boo"], 1)).to.be.an('array');
	});

	it("should create new array concatinated with itself 3 times", function() {
		expect(expand([1,2,3], 3).length).to.equal([1,2,3,1,2,3,1,2,3].length);
	});

	it("should create array of strings concatinated with itself 1 time", function() {
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
	it("should return an array", function() {
		expect(mergeArrays([2,3], [2,4])).to.be.an('array');
	});

	it("should return an array with the length sum of two given arrays", function() {
		expect(mergeArrays([2,1], [3,4]).length).to.equal([2,1,3,4].length);
	});

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
	it("should return an object", function() {
		expect(mergeObjects(obj1, obj2)).to.be.an('object');
	});

	it("should return an object with the keys and values combined", function() {
		expect(mergeObjects(obj1, obj2)).to.include.keys('name', 'test', 'num');
	});
	it("should return an object with value overwritten by second object if present", function() {
		expect(mergeObjects(obj1, obj2)).to.have.property('num').and.equal(55);
	});

});
