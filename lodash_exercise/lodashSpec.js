var expect = chai.expect

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
    expect(takeRight([1, 2, 3], 5)).to.deep.equal([1, 2,3])
  });
  it("returns an empty array if the second parameter is 0", function(){
    expect(takeRight([1, 2, 3], 0)).to.deep.equal([])
  });
});

describe("#union", function(){
  it("returns a new array of combined values.", function(){
    expect(union([2], [1, 2])).to.deep.equal([2, 1])
  });
});

describe("#zipObject", function(){
  it("should create an object with key value pairs of each array", function(){
    expect(zipObject(['a', 'b'], [1, 2])).to.deep.equal({ 'a': 1, 'b': 2 })
  });
  it("should create keys and values if a value in the first array is specified", function(){
    expect(zipObject(['a', 'b','c','d'], [1, 2, 3])).to.deep.equal({a: 1, b: 2, c: 3, d: undefined})
  });
});

describe("#includes", function(){
  it("should return true if a value exists in an array", function(){
    expect(includes([1, 2, 3], 1)).to.equal(true)
  });
  it("should be able to start from an index in an array as a third parameter", function(){
    expect(includes([1, 2, 3], 1, 2)).to.equal(false)
  });
  it("should return true if a value exists in an object", function(){
    expect(includes({ 'a': 1, 'b': 2 }, 1)).to.equal(true)
  });
  it("should work with strings as well", function(){
    expect(includes('abcd', 'bc')).to.equal(true)
  });
});

describe("#sample", function(){
  it("should select a sample from an array", function(){
    expect(sample([1, 2, 3, 4])).to.be.within(1,4);
  });
});

describe("#cloneDeep", function(){
  it("should create a copy of an array when passed one", function(){
    expect(cloneDeep([1,2,3])).to.be.instanceof(Array);
  });
  it("should create a copy of an array when passed one", function(){
    expect(cloneDeep({})).to.be.instanceof(Object);
  });
  it("should create a deep copy of an array", function(){
    var objects = [{ 'a': 1 }, { 'b': 2 }];
    var deep = cloneDeep(objects);
    expect(deep[0] === objects[0]).to.equal(false)
  });
  it("should create a deep copy of an object", function(){
    o = {}
    o2 = cloneDeep(o)
    expect(o === o2).to.equal(false)
  });
});

describe("#sumBy", function(){
  var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
  it("should sum values based on a condition in a callback function", function(){
    expect(sumBy(objects, function(o) { return o.n; })).to.equal(20)
  });
  it("should work with keys in an object as well", function(){
    expect(sumBy(objects, 'n')).to.equal(20)
  });
});

describe("#inRange", function(){
  it("should return true if the value is in a range", function(){
    expect(inRange(3, 2, 4)).to.equal(true)
  });
  it("it should default the start to 0 when there are only two parameters", function(){
    expect(inRange(4, 8)).to.equal(true)
    expect(inRange(4, 2)).to.equal(false)
    expect(inRange(2, 2)).to.equal(false)
  });
  it("should handle negative numbers as well", function(){
    expect(inRange(-3, -2, -6)).to.equal(true)
  });
  it("should work with decimals as well", function(){
    expect(inRange(1.2, 2)).to.equal(true)
    expect(inRange(5.2, 4)).to.equal(false)
  });
});

describe("#has", function(){
  var object = { 'a': { 'b': 2 } };
  it("should return true if an object contains a key", function(){
    expect(has(object, 'a')).to.equal(true)
  });
  it("should handle an array of keys as a parameter as well", function(){
    expect(has(object, ['a', 'b'])).to.equal(true)
  });

});

describe("#omit", function(){
  it("should return a new object with all keys omitted", function(){
    var object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(omit(object, ['a', 'c'])).to.deep.equal({ 'b': '2' })
  });
});

describe("#pick", function(){
  it("should return a new object with all keys picked", function(){
    var object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(pick(object, ['a', 'c'])).to.deep.equal({ 'a': 1, 'c': 3 })
  });
});

describe("#pickBy", function(){
  it("should return a new object with all keys picked by a truthy condition in a callback function", function(){
    function isNumber(val){
      return typeof val === 'number';
    }
    var object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(pickBy(object, isNumber)).to.deep.equal({ 'a': 1, 'c': 3 })
  });
});

describe("#omitBy", function(){
  it("should return a new object with all keys omitted by a truthy condition in a callback function", function(){
    function isNumber(val){
      return typeof val === 'number';
    }
    var object = { 'a': 1, 'b': '2', 'c': 3 };

    expect(omitBy(object, isNumber)).to.deep.equal({ 'b': '2' })
  });
});

describe("#padEnd", function(){
  it("should pad with whitespace if no third parameter is passed in", function(){
    expect(padEnd('abc', 6)).to.equal('abc   ')
  });
  it("should pad both directions evenly", function(){
    expect(padEnd('abc', 6, '_-')).to.equal('abc_-_')
  });
  it("should not pad with anything if the length is less than or equal", function(){
    expect(padEnd('abc', 3)).to.equal('abc')
  });
});

describe("#repeat", function(){
  it("should repeat a string n number of times", function(){
    expect(repeat('*', 3)).to.equal('***')
    expect(repeat('abc', 2)).to.equal('abcabc')
  });
  it("should return an empty string if the second parameter is 0", function(){
    expect(repeat('abc', 0)).to.equal('')
  });
});

describe("#upperFirst", function(){
  it("should return the same string with the first letter captialized", function(){
    expect(upperFirst('fred')).to.equal('Fred')
    expect(upperFirst('FRED')).to.equal('FRED')
  });
});

describe("#flatten", function(){
  it("should flatten an array once", function(){
    expect(flatten([1, [2, [3, [4]], 5]])).to.deep.equal([1, 2, [3, [4]], 5])
  });
});

describe("#zip", function(){
  it("should Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.", function(){
    expect(zip(['a', 'b'], [1, 2], [true, false])).to.deep.equal([['a', 1, true], ['b', 2, false]])
  });
  it("should handle different length arrays", function(){
    expect(zip(['a', 'b','c'], [1, 2], [true, false])).to.deep.equal([['a', 1, true], ['b', 2, false], ['c', undefined, undefined]])
  });
});

describe("#unzip", function(){
  it("should accept an array of grouped elements and create an array regrouping the elements to their pre-zip configuration.", function(){
    expect(unzip([['a', 1, true], ['b', 2, false]])).to.deep.equal([['a', 'b'], [1, 2], [true, false]])
  });
});

describe("#flip", function(){
  it("should return a new function with the arguments flipped", function(){
    function subtract(a,b,c){
      return a-b-c
    }
    var flipped = flip(subtract)
    expect(flipped(5,2,3)).to.equal(-4)
  });
});

describe("#flattenDeep", function(){
  it("should flatten a nested array completely", function(){
    expect(flattenDeep([1, [2, [3, [4]], 5]])).to.deep.equal([1, 2, 3, 4, 5])
  });
});
