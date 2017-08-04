var expect = chai.expect;

// WRITE YOUR TESTS HERE!
describe("TESTS FOR replaceWith", function() {
	it("happy path, character present twice", function() {
		expect(replaceWith("awesome", "e", "z")).to.equal("awzsomz");
	});

	it("case sensitive single character", function() {
		expect(replaceWith("Foo", "F", "B")).to.equal("Boo");
	});

	it("case sensitive multiple character", function() {
		expect(replaceWith("FooF", "F", "B")).to.equal("BooB");
	});

	it("case sensitive single character with char present in lower and upper case", function() {
		expect(replaceWith("Foof", "F", "B")).to.equal("Boof");
	});

	it("character not present", function() {
		expect(replaceWith("awesome", "p", "z")).to.equal("awesome");
	});

	it("character not present case sensitive", function() {
		expect(replaceWith("awesome", "E", "Z")).to.equal("awesome");
	});

	it("input string empty", function() {
		expect(replaceWith("", "e", "z")).to.equal("");
	});

	it("replace with Char empty", function() {
		expect(replaceWith("awesome", "", "z")).to.equal("awesome");
	});
});

describe("TESTS FOR expand", function() {
	it("happy path, expand integer array 3 times", function() {
		expect(expand([1,2,3],3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
	});

	it("happy path, expand string array 3 times", function() {
		expect(expand(["foo", "test"],1)).to.deep.equal(["foo","test"]);
	});

	it("expand array 0 times", function() {
		expect(expand(["foo", "test"],0)).to.deep.equal(["foo","test"]);
	});
});

describe("TESTS FOR acceptNumbersOnly", function() {
	it("number and string present", function() {
		expect(acceptNumbersOnly(1,"foo")).to.be.false;
	});

	it("numbers present only", function() {
		expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.be.true;
	});

	it("number and NaN present", function() {
		expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.be.false;
	});
});

describe("TESTS FOR mergeArrays", function() {
	it("two number arrays", function() {
		expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
	});

	it("two number arrays unequal length", function() {
		expect(mergeArrays([2,1],[3,4,7])).to.deep.equal([1,2,3,4,7]);
	});

	it("two string arrays unequal length", function() {
		expect(mergeArrays(["a","c"],["b","d"])).to.deep.equal(["a","b","c","d"]);
	});

	it("two string arrays unequal length", function() {
		expect(mergeArrays(["a","c"],["f","b","d"])).to.deep.equal(["a","b","c","d","f"]);
	});

	it("one empty array", function() {
		expect(mergeArrays([],[3,4])).to.deep.equal([3,4]);
	});

	it("two empty arrays", function() {
		expect(mergeArrays([],[])).to.deep.equal([]);
	});

});

describe("TESTS FOR mergeObjects", function() {
	it("two objects", function() {
		var obj1 = {name: "Foo", num: 3};
        var obj2 = {test: "thing",num: 55};
        var obj3 = {name: "Foo",test: "thing",num: 55};
		expect(mergeObjects(obj1,obj2)).to.deep.equal(obj3);
	});

	it("one empty object", function() {
		var obj1 = {};
        var obj2 = {test: "thing",num: 55};
        var obj3 = {test: "thing",num: 55};
		expect(mergeObjects(obj1,obj2)).to.deep.equal(obj3);
	});

	it("both empty", function() {
		var obj1 = {};
        var obj2 = {};
        var obj3 = {};
		expect(mergeObjects(obj1,obj2)).to.deep.equal(obj3);
	});

	it("2 override, 1 extra field", function() {
		var obj1 = {name: "Foo", num: 3};
        var obj2 = {name: "Bar", num: 55, field: "extra"};
        var obj3 = {name: "Bar",num: 55,field: "extra"};
		expect(mergeObjects(obj1,obj2)).to.deep.equal(obj3);
	});

});