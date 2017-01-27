var expect = chai.expect;

describe("replaceWith", function(){
	it("replaces characters in a string", function(){
		expect(replaceWith("awesome", "a", "z")).to.equal("zwesome");
		expect(replaceWith("Foo", "F", "B")).to.equal("Boo");
	})

});

describe("expand", function(){
	it("returns the number of copies of an array specified by second parameter", function(){
		expect(expand([1,2,3],3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
		expect(expand(["foo","test"],1)).to.deep.equal(["foo","test"]);
	});
});

describe("acceptsNumbersOnly", function(){
	it("checks to see if all arguments are numbers and !NaN", function(){
		expect(acceptsNumbersOnly(1, "foo")).to.equal(false);
		expect(acceptsNumbersOnly(1,2,3,4,5,6,7)).to.equal(true);
		expect(acceptsNumbersOnly(1,2,3,4,5,6,NaN)).to.equal(false);
	});
});

describe("mergeArrays", function(){
	it("merges two arrays and sorts the values", function(){
		expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
	});
});

var obj1;
var obj2;
beforeEach(function(){
	obj1= {
	    name: "Foo",
	    num: 33
	}
	obj2 = {
	    test: "thing",
	    num: 55
	}
});

describe("mergeObjects", function(){
	it("merges objects and overrides duplicate keys", function(){
		expect(mergeObjects(obj1, obj2)).to.deep.equal({name: "Foo", test: "thing", num: 55});
	});
});

