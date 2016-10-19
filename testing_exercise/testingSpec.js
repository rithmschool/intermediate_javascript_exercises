var expect = chai.expect;

// WRITE YOUR TESTS HERE!

describe("#replaceWith", function(){
  it("replaces a character with another", function(){
    expect(replaceWith("awesome","e","z")).to.equal("awzsomz")
  });
  it("does not care about case", function(){
    expect(replaceWith("awEsome","e","z")).to.equal("awzsomz")
  });
});

describe("#expand", function(){
  it("copies an array a certain number of times", function(){
    expect(expand([1,2,3],3)).to.deep.equal([1,2,3,1,2,3,1,2,3])
  });
});

describe("#acceptNumbersOnly", function(){
  it("returns true if all values are numbers", function(){
    expect(acceptNumbersOnly(1,2,3,4,5)).to.equal(true)
  });
  it("returns false if all values are numbers", function(){
    expect(acceptNumbersOnly(1,2,3,4,NaN)).to.equal(false)
  });
});

describe("#mergeArrays", function(){
  it("merges and sorts two arrays", function(){
    expect(mergeArrays([2,1], [3,4])).to.deep.equal([1,2,3,4])
  });
});

describe("#mergeObjects", function(){
  it("combines objects", function(){
    expect(mergeObjects({name:"Elie"}, {job:"Instructor"})).to.deep.equal({
        name: "Elie",
        job: "Instructor"
    })
  })
  it("overwrites the same keys in earlier objects when merging", function(){
    expect(mergeObjects({name:"Elie"}, {name: "Bob", job:"Instructor"})).to.deep.equal({
        name: "Bob",
        job: "Instructor"
    })
  })
})

