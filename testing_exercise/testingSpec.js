var expect = chai.expect;


describe("replaceWith", function() {
  it("takes in a string, a character to replace and a character to replace it with and returns the string with the replacements.", function() {
    expect(replaceWith("awesome", "e", "z")).to.equal("awzsomz");
    expect(replaceWith("Foo", "F", "B")).to.equal("Boo");
  });
})


describe("expand", function() {
  it("takes an array and a number and returns a copy of the array with as many numbers as specified", function() {
    expect(expand([1,2,3],3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
    expect(expand(["foo", "test"],1)).to.deep.equal(["foo","test"]);
  });
})


describe("acceptNumbersOnly", function() {
  it("takes in any number of arguments and returns `true` if all of them are numbers.", function() {
    expect(acceptNumbersOnly(1,"foo")).to.equal(false);
    expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.equal(true);
    expect(acceptNumbersOnly('1',2,3,4,5,6,7)).to.equal(false);
    expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.equal(false);
  });
})

describe("mergeArrays", function() {
  it("takes in two arrays and returns one array with the values sorted", function() {
    expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
   
  });
})

describe("mergeObjects", function() {
  it("takes in two objects and return an object with the keys and values combined. If the second parameter has the same key - it should override first one.", function() {
    expect(mergeObjects(obj1, obj2)).to.deep.equal(
    {
    name: "Foo",
    test: "thing",
    num: 55
	});
  });
})