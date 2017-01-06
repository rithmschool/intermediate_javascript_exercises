describe("#chunk", function(){
  it("should", function(){

  });
});

describe("#drop", function(){
  it("should remove the first element of an array when no second parameter is passed", function(){
    expect(drop([1,2,3])).to.deep.equal([2,3])
  });

  it("should remove n elements from an array", function(){
    expect(drop([1,2,3],2)).to.deep.equal([3])
  });

  it("should remove all the elements of an array if the second parameter is greater than the length of the array", function(){
    expect(drop([1,2,3],10)).to.deep.equal([])
  });

  it("should not remove anything if the second parameter has a value of 0", function(){
    expect(drop([1,2,3],0)).to.deep.equal([1,2,3])
  });

  it("should NOT alter the original array", function(){
    var arr = [1,2,3];
    drop(arr,2)
    expect(arr).to.deep.equal([1,2,3])
  });
});

describe("#fromPairs", function(){
  it("returns an object composed from key-value pairs", function(){
    expect(fromPairs([['a', 1], ['b', 2]])).to.deep.equal( { 'a': 1, 'b': 2 });
  });
});

describe("#head", function(){
  it("returns the first element of an array", function(){
    expect(head([1, 2, 3])).to.equal(1)
  });
  it("returns undefined if the array is empty", function(){
    expect(head([])).to.equal(undefined)
  });
});

describe("#take", function(){
  it("makes a copy of the first element in an array", function(){
    expect(take([1, 2, 3])).to.deep.equal([1])
  });
  it("copies the entire array if the second parameter is greater or equal to the length of the array", function(){
    expect(take([1, 2, 3], 5)).to.deep.equal([1, 2, 3])
  });
  it("returns a slice of n elements in the array", function(){
    expect(take([1, 2, 3], 2)).to.deep.equal([1, 2])
  });
  it("returns an empty array if the second parameter is 0", function(){
    expect(take([1, 2, 3], 0)).to.deep.equal([])
  });
});


describe("#takeRight", function(){
  it("creates a slice of array with n elements taken from the end.", function(){
    expect(takeRight([1, 2, 3])).to.deep.equal([3])
  });
  it("returns a slice of n elements in the array ", function(){
    expect(takeRight([1, 2, 3], 2)).to.deep.equal([2, 3])
  });
  it("copies the entire array if the second parameter is greater or equal to the length of the array", function(){
    expect(takeRight([1, 2, 3], 5)).to.deep.equal([1, 2])
  });
  it("returns an empty array if the second parameter is 0", function(){
    expect(takeRight([1, 2, 3], 0)).to.deep.equal([])
  });
});

describe("#takeWhile", function(){

  var instructors = [
    { 'name': 'tim',  'petOwner': false },
    { 'name': 'matt', 'petOwner': true },
    { 'name': 'elie', 'petOwner': true }
  ];

  function filterPetOwners(instructor){
    return instructor.petOwner;
  }

  it("should return a new array based on the callback function", function(){
    expect(takeWhile(instructors, filterPetOwners)).to.deep.equal([])
  });
});

describe("#union", function(){
  it("should", function(){

  });
});

describe("#zip", function(){
  it("should", function(){

  });
});

describe("#unzip", function(){
  it("should", function(){

  });
});

describe("#zipObject", function(){
  it("should", function(){

  });
});

describe("#every", function(){
  it("should", function(){

  });
});

describe("#includes", function(){
  it("should", function(){

  });
});

describe("#sample", function(){
  it("should", function(){

  });
});

describe("#before", function(){
  it("should", function(){

  });
});

describe("#flip", function(){
  it("should", function(){

  });
});

describe("#overArgs", function(){
  it("should", function(){

  });
});

describe("#partial", function(){
  it("should", function(){

  });
});

describe("#clone", function(){
  it("should", function(){

  });
});

describe("#cloneDeep", function(){
  it("should", function(){

  });
});

describe("#sumBy", function(){
  it("should", function(){

  });
});

describe("#assign", function(){
  it("should", function(){

  });
});

describe("#has", function(){
  it("should", function(){

  });
});

describe("#omit", function(){
  it("should", function(){

  });
});

describe("#pick", function(){
  it("should", function(){

  });
});

describe("#pickBy", function(){
  it("should", function(){

  });
});

describe("#omitBy", function(){
  it("should", function(){

  });
});

describe("#pad", function(){
  it("should", function(){

  });
});

describe("#repeat", function(){
  it("should", function(){

  });
});

describe("#snakeCase", function(){
  it("should", function(){

  });
});

describe("#upperFirst", function(){
  it("should", function(){

  });
});

describe("#flatten", function(){
  it("should", function(){

  });
});

describe("#flattenDeep", function(){
  it("should", function(){

  });
});