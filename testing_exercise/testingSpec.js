var expect = chai.expect;

describe("replaceWith", function() {
  it("is case sensitive", function() {
    expect(replaceWith("awesome", "e", "z")).to.equal("awzsomz");
    expect(replaceWith("Foo", "F", "B")).to.equal("Boo");
  });
 });

describe("expand", function(){
	it("passes", function(){
		expect(expand([1,2,3],3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
	});
});

describe("acceptNumbersOnly", function(){
	it("passes", function(){
		expect(acceptNumbersOnly(1,"foo")).to.be.false;
		expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.be.true;	
		expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.be.false;			
	});
});

describe("mergeArrays", function(){
	it("passes", function(){
		expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);			
	});
});

describe("mergeObjects", function(){
	it("passes", function(){
		expect(mergeObjects({name: "Foo", num: 33},{test: "thing", num: 55})).to.deep.equal({name: "Foo",num: 55,test: "thing"});			
	});
})