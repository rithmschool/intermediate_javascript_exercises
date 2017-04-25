mocha.setup('bdd');
	var expect = chai.expect;

	describe("replaceWith", function(){
		it("replaces any instance of the first letter with the second letter", function(){
			expect(replaceWith("awesome", "e", "z")).to.equal("awzsomz");
			expect(replaceWith("Foo", "F", "B")).to.equal("Boo");
		})
	})

	describe("expand", function(){
		it("takes an array input and multiplies it by the number input to create a new array", function(){
			expect(expand([1,2,3],3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
			expect(expand(["foo", "test"],1)).to.deep.equal(["foo", "test"]);
		})
	})

	describe("acceptNumbersOnly", function(){
		it("looks at all arguments to determine if they are all numbers", function(){
			expect(acceptNumbersOnly(1,"foo")).to.equal(false);
			expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.equal(true);
			expect(acceptNumbersOnly(1,2,3,4,5,6,7,NaN)).to.equal(false);
		})
	})

	describe("mergeArrays", function(){
		it("takes in two arrays and merges them into one sorted array", function(){
			expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
		})
	})

var obj1= {
    name: "Foo",
    num: 33
}
var obj2 = {
    test: "thing",
    num: 55
}

	describe("mergeObjects", function(){
		it("takes two objects and merges them, and overriding, not duplicating keys", function(){
			expect(mergeObjects(obj1, obj2)).to.deep.equal({name: "Foo", test: "thing", num: 55})
		})
	})