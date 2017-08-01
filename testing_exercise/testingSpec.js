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
	
});