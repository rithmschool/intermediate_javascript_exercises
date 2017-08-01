var expect = chai.expect;

describe('replaceWith', function(){
  it('Basic function replace letters', function() {
    expect(replaceWith('awesome', 'e', 'z')).to.equal('awzsomz');
  });
  it('Case sensitive', function() {
    expect(replaceWith('Foo', 'F', 'B')).to.equal('Boo');
  });
});

describe('expand', function() {
  it('Basic function with numbers', function(){
    expect(expand([1, 2, 3], 3)).to.deep.equal([1, 2, 3, 1, 2, 3, 1, 2, 3]);
  });

  it('Basic function with strings', function(){
    expect(expand(['foo', 'test'], 1)).to.deep.equal(['foo', 'test']);
  });
});

describe('acceptNumbersOnly', function() {
  it('Basic function', function() {
    expect(acceptNumbersOnly(1, 'foo')).to.equal(false)
  });

  it('Basic function true', function() {
    expect(acceptNumbersOnly(1, 2, 3, 4, 5)).to.equal(true);
  });

  it('Basic function NaN', function() {
    expect(acceptNumbersOnly(1, 2, NaN, 4, 5)).to.equal(false);
  });
});

describe('mergeArrays', function() {
  it('Basic function merges arrays', function() {
    expect(mergeArrays([2, 1], [3, 4])).to.deep.equal([1, 2, 3, 4]);
  });
});

describe('mergeObjects', function() {
  var obj1= {
      name: "Foo",
      num: 33
  }
  var obj2 = {
      test: "thing",
      num: 55
  }
  it('Basic function merge objects', function() {
    expect(mergeObjects(obj1, obj2)).to.deep.equal({name: 'Foo', test: 'thing', num: 55});
  });
});
