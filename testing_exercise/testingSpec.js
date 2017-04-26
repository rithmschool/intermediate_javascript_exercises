var expect = chai.expect;

// WRITE YOUR TESTS HERE!

describe("JS testing exercises", function() {
	describe("replaceWith", function() {
		it("is case sensitive", function() {
			expect(replaceWith("Foo", "F", "B")).to.equal("Boo");
			expect(replaceWith("awesome", "e", "z")).to.equal("awzsomz");
			expect(replaceWith("Foo", "f", "B")).to.equal("Foo");
			expect(replaceWith("foo", "F", "b")).to.equal("foo");		
		});
	});

	describe("expand", function() {
		it("has as many elements as requested; if not positive, < 0 nums, or called on empty set, result = []", function() {
			var arr = [1,2,3,5];
			var num = 3;
			expect(expand(arr, num).length).to.equal(arr.length*num);
			expect(expand(arr, num)).to.deep.equal([1,2,3,5,1,2,3,5,1,2,3,5]);
			expect(expand([1,2,3],0)).to.deep.equal([]);
			expect(expand([1,2,3], -1)).to.deep.equal([]);
			expect(expand(["foo", "test"],1)).to.deep.equal(["foo", "test"]);
			expect(expand([], 3)).to.deep.equal([]);
		});
	});

	describe("acceptNumbersOnly", function() {
		it("doesn't accept NaN, strings, arrays, objects", function() {
			expect(acceptNumbersOnly(1,2,3,4,NaN)).to.be.false;
			expect(acceptNumbersOnly(1,"foo")).to.be.false;
			expect(acceptNumbersOnly(1,2,{})).to.be.false;
			expect(acceptNumbersOnly(1,2,[1,2,3])).to.be.false;
			expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.be.true;
		});
	});

	describe("mergeArrays", function() {
		it("merges only arrays, sorts with neg numbers, returns 1 array if only 1 given", function() {
			expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
			expect(mergeArrays([2,-1],[3,-4])).to.deep.equal([-4,-1,2,3]);
			expect(mergeArrays([2,3], "hello")).to.be.undefined;
			expect(mergeArrays([2,3], [])).to.deep.equal([2,3]);
			expect(mergeArrays([2,3])).to.deep.equal([2,3]);
		})
	});

	describe("mergeObjects", function() {
		it("", function() {
			var obj1= {
    			name: "Foo",
    			num: 33
			};
			var obj2 = {
    			test: "thing",
    			num: 55
			};
			var expectedObj = {
				name: "Foo",
    			test: "thing",
    			num: 55
			};
			expect(mergeObjects(obj1, obj2)).to.deep.equal(expectedObj);
		});
	});
});

