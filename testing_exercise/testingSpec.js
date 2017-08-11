var expect = chai.expect;

describe("replaceWith", function () {
  it("replaces a capital with a capital", function(){
		expect(replaceWith("Foobar", "F", "B")).to.equal("Boobar");
	});
  it("does not capitalize when it isn't passed a capital", function(){
		expect(replaceWith("Hello", "e", "i")).to.equal("Hillo");
	});
  it("does not get rid of capitalization", function(){
		expect(replaceWith("TeST", "S", "M")).to.equal("TeMT");
	});
});

//Write a function called expand which takes an array and a number and returns a copy of the array with as many numbers as specified
describe("expand", function () {
	it("it triples the array when given three", function(){
		expect(expand([1,2,3],3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
	});
	it("does not change the array when passed one", function(){
		expect(expand(["foo", "test"],1)).to.deep.equal(["foo","test"]);
	});
});

//Write a function called mergeArrays which takes in two arrays and returns one array with the values sorted
describe("mergeArrays", function () {
	it("returns an array and sorts alphabetically", function(){
		expect(mergeArrays(["foo", "test"],["merge", "me"])).to.deep.equal(["foo", "me", "merge", "test"]);
	});
	it("returns merged array in numerical order", function(){
		expect(mergeArrays([2, 1], [3, 4])).to.deep.equal([1, 2, 3, 4]);
	});
});
//Write a function called mergeObjects which takes in two objects and return an object with the keys and values combined. If the second parameter has the same key - it should override first one. There is a built in function called Object.assign - research it, but do not use it, try to do this on your own!
describe("mergeObjects", function () {
	it("returns an object with combined keys and values", function(){
		var obj1 = {
		    name: "Foo",
		    num: 33
		};
		var obj2 = {
		    test: "thing",
		    num: 55
		};
		expect(mergeObjects(obj1, obj2)).to.deep.equal({
		    name: "Foo",
		    test: "thing",
		    num: 55
		});
	});
});