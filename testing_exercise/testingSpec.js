var expect = chai.expect;

//Write tests here
describe("Tests for exercises.", function() {
	//replaceWith tests
	describe("replaceWith tests", function() {
		it("replaceWith function should replace a given letter with a chosen letter", function() {
			expect(replaceWith("awesome", "e", "z")).to.equal("awzsomz");
		});
		it("replaceWith functions should replace a given capital letter with a chosen capital letter", function () {
			expect(replaceWith("Foo", "F", "B")).to.equal("Boo");
		});
	});
	//expand tests
	describe("expand tests", function () {
		it("expand function when given numbers should return a copy of the array with as many numbers", function() {
			expect(expand([1,2,3],3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
		});
		it("expand function when given strings should return strings within an array", function() {
			expect(expand(["foo", "test"], 1)).to.deep.equal(["foo","test"]);
		});
	})
	//acceptNumbersOnly
	describe("acceptNumbersOnly tests", function() {
		it("acceptNumbersOnly given a word should return false", function() {
			expect(acceptNumbersOnly(1,"foo")).to.equal(false);
		});
		it("acceptNumbersOnly given all numbers should return true", function() {
			expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.equal(true);
		});
		it("acceptsNumbersOnly given a NaN value should return false", function() {
			expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.equal(false);
		});
	});
	//mergeArrays
	describe("mergeArrays test", function() {
		it("mergeArrays when given two arrays will return them joined together an sorted", function() {
			expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
		});
	});
	describe("mergeObjects tests", function() {
		it("mergeObjects takes two objects and returns an object with the keys and values combined", function() {
			var obj1 = {
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
			expect(mergeObjects(obj1,obj2)).to.deep.equal(obj3);
		});
	});
});

