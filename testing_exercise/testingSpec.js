var expect = chai.expect; // starter

describe("replaceWith", function(){
  it("replaces string with letter", function(){
    expect(replaceWith("awesome", "a", "z")).to.equal("zwesome");
  });
  it("is case sensitive", function(){
    expect(replaceWith("Foo", "F", "B")).to.equal("Boo");
  });
});

describe("expand", function(){
  it("takes an array and a number and returns a copy of the array with as many numbers as specified", function(){
    expect(expand([1,2,3],3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
    expect(expand(["foo", "test"],1)).to.deep.equal(["foo","test"]);
  });
});

describe("acceptNumbersOnly", function(){
  it("takes an array and a number and returns a copy of the array with as many numbers as specified", function(){
    expect(acceptNumbersOnly(1,"foo")).to.deep.equal(false);
    expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.deep.equal(true);
    expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.equal(false);
  });
});

describe("mergeArrays", function(){
  it("takes in two arrays and returns one array with values sorted", function(){
    expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
  });
});

describe("mergeObjects", function(){
  it("takes in two objects and return an object with the keys and values combined.", function(){
    expect(mergeObjects({name: "Foo", num: 33},{test: "thing", num: 55})).to.deep.equal({name: "Foo", test: "thing", num:55});
  });
});