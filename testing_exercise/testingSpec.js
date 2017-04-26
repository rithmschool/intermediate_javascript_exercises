var expect = chai.expect;

// WRITE YOUR TESTS HERE!
describe("Tests", function(){

	it("replaces lowercase", function(){
		expect(replaceWith("awesome", "e", "z")).to.be.equal("awzsomz");
	});

	it("replaces case sensitive", function(){
		expect(replaceWith("Foo", "F", "B")).to.be.equal("Boo");
	});

	// unclear test case:
	// replaceWith("Woo", "W", "p"); // Poo? or poo? thus far unspecified.

	it("Expand: ", function(){
		expect(expand([1,2,3],3)).to.be.deep.equal([1,2,3,1,2,3,1,2,3]);
		expect(expand(["foo", "test"],1)).to.be.deep.equal(["foo","test"]);
	});

	it("Does it accept only numbers?", function(){
		expect(acceptsOnlyNumbers(1,"foo")).to.be.equal(false);
		expect(acceptsOnlyNumbers(1,2,3,4,5,6,7)).to.be.equal(true);
		expect(acceptsOnlyNumbers(1,2,3,4,5,6,NaN)).to.be.equal(false);
	});

	it("mergeArrays", function(){
		expect(mergeArrays([1,3],[2,4])).to.be.deep.equal([1,2,3,4]);
	});

	it("mergeObjects",function(){
		var obj1= {
		    name: "Foo",
		    num: 33
		}
		var obj2 = {
		    test: "thing",
		    num: 55
		}
		var resultObj = {
			name: "Foo",
			test: "thing",
			num: 55
		}
		expect(mergeObjects(obj1, obj2)).to.be.deep.equal(resultObj);

	});
});