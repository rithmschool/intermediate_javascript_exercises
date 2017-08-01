var expect = chai.expect;

// WRITE YOUR TESTS HERE!
describe('replaceWith', () => {
  it('should take a string, a match character and a replacer character', () => {
    expect(replaceWith('awesome', 'e', 'z')).to.equal('awzsomz');
  });

  it('should be case insensitive', () => {
    expect(replaceWith('awEsome', 'e', 'z')).to.equal('awzsomz');
  });

  it('should replace letters', () => {
    expect(replaceWith('Foo', 'F', 'B')).to.equal('Boo');
  });

  it('should return a string', () => {
    expect(replaceWith('awesome', 'e', 'z')).to.be.a('string');
  });
});

describe('expand', () => {
  it('should take an array and a number and returns a copy of the array with as many numbers as specified', () => {
    expect(expand([1, 2, 3], 3)).to.deep.equal([1, 2, 3, 1, 2, 3, 1, 2, 3]);
  });

  it('should take an array of strings', () => {
    expect(expand(['foo', 'test'], 1)).to.deep.equal(['foo', 'test']);
  });
});

describe('acceptNumbersOnly', () => {
  it('returns true if all args are numbers', () => {
    expect(acceptNumbersOnly(1, 2, 3, 4, 5)).to.equal(true);
  });
  it('returns false NaN exists as an arg', () => {
    expect(acceptNumbersOnly(1, 2, 3, 4, NaN)).to.equal(false);
  });
});

describe('mergeArrays', () => {
  it('merge sorts two arrays', () => {
    expect(mergeArrays([2, 1], [3, 4])).to.deep.equal([1, 2, 3, 4]);
  });
});

describe('mergeObjects', () => {
  it('merge objects', () => {
    expect(
      mergeObjects({name: 'Foo', num: 33}, {test: 'thing', num: 55})
    ).to.deep.equal({
      name: 'Foo',
      test: 'thing',
      num: 55
    });
  });
});
