var expect = chai.expect
var person;

beforeEach(function(){
  person = new Person("Elie", "Schoppik", "purple", 34)
})

describe("Person", function(){
  it("has a firstName", function(){
    expect(person.hasOwnProperty("firstName")).to.equal(true);
  });
  it("has a lastName", function(){
    expect(person.hasOwnProperty("lastName")).to.equal(true);
  });
  it("has a favoriteColor", function(){
    expect(person.hasOwnProperty("favoriteColor")).to.equal(true);
  });
  it("has a favoriteNumber", function(){
    expect(person.hasOwnProperty("favoriteNumber")).to.equal(true);
  });
  it("has a favoriteFoods", function(){
    expect(person.hasOwnProperty("favoriteFoods")).to.equal(true);
    expect(person.favoriteFoods).to.deep.equal([]);
  });
});

describe("#fullName", function(){
  it("returns the firstName concatenated with the lastName", function(){
    expect(person.fullName()).to.equal("Elie Schoppik")
  });
});

describe("family", function(){
  var p1, p2;
  beforeEach(function(){
    p1 = new Person()
    p2 = new Person()
  });
  it("is initialized as an empty array on the Person object", function(){
    expect(p1.family).to.exist
    expect(Array.isArray(p1.family)).to.equal(true)
    expect(p1.family.length).to.equal(0)
  });
});

describe("#addToFamily", function(){
  var p1, p2;
  beforeEach(function(){
    p1 = new Person()
    p2 = new Person()
  });
  it("is not shared amongst all objects created from the Person constructor", function(){
    p1.addToFamily(p1);
    expect(p2.family.length).to.equal(0)
  });
  it("adds a new person to the family array ONCE", function(){
    person.addToFamily(p1);
    person.addToFamily(p1);
    person.addToFamily(p1);
    expect(person.family.length).to.equal(1)
  });
  it("only adds objects created from the Person constructor to the array", function(){
    person.addToFamily(p1);
    person.addToFamily("test");
    person.addToFamily({});
    person.addToFamily([]);
    person.addToFamily(false);
    expect(person.family.length).to.equal(1)
  });
});


describe("#toString", function() {
  var p1 = new Person("Tim", "Garcia", "Blue", 7);
  it("is shared amongst all objects created from the Person constructor", function(){
    expect(p1.hasOwnProperty('toString')).to.equal(false);
    expect(Person.prototype.toString).to.exist
  });

  it("returns all the info about the Person", function() {
    expect(p1.toString()).to.equal("Tim Garcia, Favorite Color: Blue, Favorite Number: 7");
  });

});


// PART II

describe("Array.prototype.map", function(){
  var arr = [1,2,3,4]
  it("returns a new array of values with a callback run on each value", function(){
    expect(arr.map(v => v*2)).to.deep.equal([2,4,6,8])
  });
  it("allows access to the index as a second parameter", function(){
    expect(arr.map((v,i) => i*2)).to.deep.equal([0,2,4,6])
  });
  it("allows access to the array as the third parameter", function(){
    expect(arr.map((v,i,a) => a.length)).to.deep.equal([4,4,4,4])
  });
});

describe("String.prototype.reverse", function(){
  it("returns a new reversed string", function(){
    expect("test".reverse()).to.equal("tset");
    expect("tacocat".reverse()).to.equal("tacocat");
  });
});

describe("Function.prototype.bind", function(){
  function add(a,b){
    return a+b
  }
  it("returns a function with the context set", function(){
    expect(add.bind(this)).to.be.a("function");
  });
  it("returns a function with the context set", function(){
    expect(add.bind(this,3)(4)).to.equal(7);
    expect(add.bind(this)(3,4)).to.equal(7);
  });
});