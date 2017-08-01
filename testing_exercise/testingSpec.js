/* jshint esversion: 6 */
/* jshint devel: true */
/* jshint node: true */
/* jshint mocha: true */

var expect = chai.expect;

// =============================================================================
// tests for replaceWith
describe('replaceWith', () => {
  it('returns data type string', () => {
    expect(replaceWith('awesome', 'e', 'z')).to.be.a('string');
    expect(replaceWith('Foo', 'F', 'B')).to.be.a('string');
  });
  it('returns expected value', () => {
    expect(replaceWith('awesome', 'e', 'z')).to.equal('awzsomz');
    expect(replaceWith('Foo', 'F', 'B')).to.equal('Boo');
  });
  it('replaces string with the correct case', () => {
    expect(replaceWith('awesome', 'e', 'z')).to.not.equal('awZsomZ');
    expect(replaceWith('Foo', 'F', 'B')).to.not.equal('boo');
  });
});

// =============================================================================
// tests for expand
describe('expand', () => {
  it('returns data type array', () => {
    expect(expand([1,2,3], 3)).to.be.an('array');
    expect(expand(['foo', 'test'], 1)).to.be.an('array');
  });
  it('returns array of expected length', () => {
    expect(expand([1,2,3], 3)).to.have.lengthOf(9);
    expect(expand(['foo', 'test'], 1)).to.have.lengthOf(2);
  });
  it('returns array with the expected values', () => {
    expect(expand([1,2,3], 3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
    expect(expand(['foo', 'test'], 1)).to.deep.equal(['foo', 'test']);
  });
});

// =============================================================================
// tests for acceptNumbersOnly
describe('acceptNumbersOnly', () => {
  it('returns a boolean data type', () => {
    expect(acceptNumbersOnly(1, 'foo')).to.be.a('boolean');
    expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.be.a('boolean');
    expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.be.a('boolean');
    expect(acceptNumbersOnly(1,2,3,4,5,6,undefined)).to.be.a('boolean');
    expect(acceptNumbersOnly(1,2,3,4,5,6,null)).to.be.a('boolean');
    expect(acceptNumbersOnly(1,2,3,4,5,6,{})).to.be.a('boolean');
    expect(acceptNumbersOnly(1,2,3,4,5,6,[])).to.be.a('boolean');
    expect(acceptNumbersOnly()).to.be.a('boolean');
  });
  it('returns expected value', () => {
    expect(acceptNumbersOnly(1, 'foo')).to.equal(false);
    expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.equal(true);
    expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.equal(false);
    expect(acceptNumbersOnly(1,2,3,4,5,6,undefined)).to.equal(false);
    expect(acceptNumbersOnly(1,2,3,4,5,6,null)).to.equal(false);
    expect(acceptNumbersOnly(1,2,3,4,5,6,{})).to.equal(false);
    expect(acceptNumbersOnly(1,2,3,4,5,6,[])).to.equal(false);
    expect(acceptNumbersOnly()).to.equal(false);
  });
});


// =============================================================================
// tests for mergeArrays
describe('mergeArrays', () => {
  it('returns an array data type', () => {
    expect(mergeArrays([2,1],[3,4])).to.be.an('array');
    expect(mergeArrays([5,9,6],[3,2,8,1])).to.be.an('array');
  });
  it('returns an array of the expected length', () => {
    expect(mergeArrays([2,1],[3,4])).to.have.lengthOf(4);
    expect(mergeArrays([5,9,6],[3,2,8,1])).to.have.lengthOf(7);
  });
  it('returns the array sorted', () => {
    expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
    expect(mergeArrays([5,9,6],[3,2,8,1])).to.deep.equal([1,2,3,5,6,8,9]);
  });
});


// =============================================================================
// tests for mergeObjects

var obj1= {
    name: "Foo",
    num: 33
};
var obj2 = {
    test: "thing",
    num: 55
};

describe('mergeObjects', () => {
  it('returns a data type of object', () => {
    expect(mergeObjects(obj1, obj2)).to.be.an('object');
  });
  it('returns the expected keys', () => {
    expect(mergeObjects(obj1, obj2)).to.have.all.keys('name', 'test', 'num');
  });
  it('returns the expected values', () => {
    expect(mergeObjects(obj1, obj2)).to.include({name: 'Foo', test: 'thing', num: 55});
    expect(mergeObjects(obj2, obj1)).to.include({name: 'Foo', test: 'thing', num: 33});
  });
  it('overwrites the existing value of an existing key', () => {
    expect(mergeObjects(obj1, obj2)).to.deep.include({num: 55});
    expect(mergeObjects(obj2, obj1)).to.deep.include({num: 33});
  });
});
