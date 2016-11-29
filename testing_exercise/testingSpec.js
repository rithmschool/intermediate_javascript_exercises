var expect = chai.expect;

// WRITE YOUR TESTS HERE!
describe("#replaceWith", function(){
	it("takes a string, char1, char2 and replaces all char1 with char2 returns a new string with characters replaced", function(){
		expect(replaceWith("awesome","a","z")).to.equal("zwesome");
		expect(replaceWith("Foofie","F","B")).to.equal("Boofie");
	});
});

describe("#expand", function(){
	it("takes an array and number and returns a copy of array with as many numbers specified", function(){
		expect(expand([1,2,3],2)).to.deep.equal([1,2,3,1,2,3]);
		expect(expand(["foo","test"],1)).to.deep.equal(["foo","test"]);
		expect(expand(["foo","test"],0)).to.deep.equal([]);
	});
});

describe("#acceptNumbersOnly", function(){
	it("takes in any number of arguments and returns true if all of them are numbers", function(){
		expect(acceptNumbersOnly(1,"foo")).to.equal(false);
		expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.equal(true);
	});
	it("watch out for NaN which is a typeof number", function(){
		expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.equal(false);
	})
});

describe("#mergeArrays", function(){
	it("takes in two arrays and returns one array with the values sorted", function(){
		expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
	});
});

describe("#mergeObjects", function(){
	it("takes two objects & returns object with keys and values combined", function(){
		var obj1= {
		    name: "Foo"
		}
		var obj2 = {
		    test: "thing"
		}
		var obj3 = {
		    name: "Foo",
		    test: "thing"
		}
		expect(mergeObjects(obj1, obj2)).to.deep.equal(obj3);
	})
	it("if the second parameter has the same key it should override the first", function(){
		var obj1= {
		    name: "Foo",
		    num: 33
		}
		var obj2 = {
		    test: "thing",
		    num: 55
		}
		var obj3 = {
		    name: "Foo",
		    test: "thing",
		    num: 55
		}
		expect(mergeObjects(obj1, obj2)).to.deep.equal(obj3);
	})
});
