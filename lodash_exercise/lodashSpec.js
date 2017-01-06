describe("#chunk", function(){
  it("should", function(){
    expect(chunk(['a', 'b', 'c', 'd'], 2)).to.deep.equal([['a', 'b'], ['c', 'd']])
    expect(chunk(['a', 'b', 'c', 'd'], 3)).to.deep.equal([['a', 'b', 'c'], ['d']])
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
    expect(takeWhile(instructors, filterPetOwners)).to.deep.equal([{ 'name': 'matt', 'petOwner': true },
      { 'name': 'elie', 'petOwner': true }])
  });
});

describe("#union", function(){
  it("returns a new array of combined values.", function(){
    expect(union([2], [1, 2])).to.deep.equal([2, 1])
  });
});

describe("#zip", function(){
  it("should", function(){
    expect(zip(['a', 'b'], [1, 2], [true, false])).to.deep.equal([['a', 1, true], ['b', 2, false]])
  });
});

describe("#unzip", function(){
  it("should", function(){
    expect(unzip([['a', 1, true], ['b', 2, false]])).to.deep.equal([['a', 'b'], [1, 2], [true, false]])
  });
});

describe("#zipObject", function(){
  it("should", function(){
    expect(zipObject(['a', 'b'], [1, 2])).to.deep.equal({ 'a': 1, 'b': 2 })
  });
});

describe("#every", function(){
  it("should", function(){
    expect(every([true, 1, null, 'yes'], Boolean)).to.equal(false)

    var users = [
      { 'user': 'barney', 'age': 36, 'active': false },
      { 'user': 'fred',   'age': 40, 'active': false }
    ];

    expect(every(users, { 'user': 'barney', 'active': false })).to.equal(false)

    expect(every(users, ['active', false])).to.equal(true)
    expect(every(users, 'active')).to.equal(false)
  });
});

describe("#includes", function(){
  it("should", function(){
    expect(includes([1, 2, 3], 1)).to.equal(true)

    expect(includes([1, 2, 3], 1, 2)).to.equal(false)

    expect(includes({ 'a': 1, 'b': 2 }, 1)).to.equal(true)

    expect(includes('abcd', 'bc')).to.equal(true)
  });
});

describe("#sample", function(){
  it("should", function(){
    expect(sample([1, 2, 3, 4])).to.be.within(1,4);
  });
});

describe("#flip", function(){
  it("should", function(){
    function subtract(a,b,c){
      return a-b-c
    }
    var flipped = flip(subtract)
    expect(flipped(5,2,3)).to.equal(-4)
  });
});

describe("#cloneDeep", function(){
  it("should", function(){
    var objects = [{ 'a': 1 }, { 'b': 2 }];
    var deep = cloneDeep(objects);
    expect(deep[0] === objects[0]).to.equal(false)
    o = {}
    o2 = deepClone(o)
    expect(o === o2).to.equal(false)
  });
});

describe("#sumBy", function(){
  it("should", function(){
    var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

    expect(sumBy(objects, function(o) { return o.n; })).to.equal(20)

    expect(sumBy(objects, 'n')).to.equal(2)
  });
});

describe("#inRange", function(){
  it("should", function(){
    expect(inRange(3, 2, 4)).to.equal(true)

    expect(inRange(4, 8)).to.equal(true)

    expect(inRange(4, 2)).to.equal(false)

    expect(inRange(2, 2)).to.equal(false)

    expect(inRange(1.2, 2)).to.equal(true)

    expect(inRange(5.2, 4)).to.equal(false)

    expect(inRange(-3, -2, -6)).to.equal(true)
  });
});

describe("#has", function(){
  it("should", function(){
    var object = { 'a': { 'b': 2 } };
    expect(has(object, 'a')).to.equal(true)
    expect(has(object, ['a', 'b'])).to.equal(true)
  });
});

describe("#omit", function(){
  it("should", function(){
    var object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(omit(object, ['a', 'c'])).to.deep.equal({ 'b': '2' })
  });
});

describe("#pick", function(){
  it("should", function(){
    var object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(pick(object, ['a', 'c'])).to.deep.equal({ 'a': 1, 'c': 3 })
  });
});

describe("#pickBy", function(){
  it("should", function(){
    function isNumber(val){
      return typeof val === 'number';
    }
    var object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(pickBy(object, isNumber)).to.deep.equal({ 'a': 1, 'c': 3 })
  });
});

describe("#omitBy", function(){
  it("should", function(){
    function isNumber(val){
      return typeof val === 'number';
    }
    var object = { 'a': 1, 'b': '2', 'c': 3 };

    expect(omitBy(object, isNumber)).to.deep.equal({ 'b': '2' })
  });
});

describe("#pad", function(){
  it("should", function(){
    expect(pad('abc', 8)).to.equal('  abc   ')

    expect(pad('abc', 8, '_-')).to.equal('_-abc_-_')

    expect(pad('abc', 3)).to.equal('abc')
  });
});

describe("#repeat", function(){
  it("should", function(){
    expect(repeat('*', 3)).to.equal('***')

    expect(repeat('abc', 2)).to.equal('abcabc')

    expect(repeat('abc', 0)).to.equal('')
  });
});

describe("#snakeCase", function(){
  it("should", function(){
    expect(snakeCase('Foo Bar')).to.equal('foo_bar')

    expect(snakeCase('fooBar')).to.equal('foo_bar')

    expect(snakeCase('--FOO-BAR--')).to.equal('foo_bar')
  });
});

describe("#upperFirst", function(){
  it("should", function(){
    expect(upperFirst('fred')).to.equal('Fred')
    expect(upperFirst('FRED')).to.equal('FRED')
  });
});

describe("#flatten", function(){
  it("should", function(){
    expect(flatten([1, [2, [3, [4]], 5]])).to.deep.equal([1, 2, [3, [4]], 5])
  });
});

describe("#flattenDeep", function(){
  it("should", function(){
    expect(flattenDeep([1, [2, [3, [4]], 5]])).to.deep.equal([1, 2, 3, 4, 5])
  });
});