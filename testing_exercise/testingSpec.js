var expect = chai.expect;

describe("testing exercise", function(){
	describe("replaceWith", function(){
		it("should return a string", function(){
			expect(replaceWith("awesome", "e", "z")).to.be.a("string");
		});
		it("should return a string of equal length", function(){
			expect(replaceWith("awesome", "e", "z").length).to.equal("awesome".length)
		});
		it("should respect case of lowercase letter being	 replaced", function(){
			expect(replaceWith("awesomE", "e", "z")).to.equal("awzsomE");
			expect(replaceWith("awesomE", "e", "Z")).to.equal("awZsomE");
		});
		it("should respect case of uppercase letter being replaced", function(){
			expect(replaceWith("Foof", "F", "b")).to.equal("boof");
			expect(replaceWith("Foof", "F", "B")).to.equal("Boof");
		});
		it("should accept an empty string as an argument", function(){
			expect(replaceWith("", "F", "b")).to.be.a("string").that.is.empty;
			expect(replaceWith("awesome", "", "z")).to.equal("awesome");
			expect(replaceWith("Foo", "F", "")).to.equal("oo");
		});
	});
	describe("expand", function(){
		it("should return an array", function(){
			expect(expand([1,2,3],3)).to.be.an("array");
		});
		it("should return a copy of the array with as many numbers as specified", function(){
			expect(expand([1,2,3],3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
			expect(expand(["foo", "test"],1)).to.deep.equal(["foo", "test"]);
			expect(expand([1,"foo",2,"test",3],2)).to.deep.equal([1, "foo", 2, "test", 3, 1, "foo", 2, "test", 3]);
		});
		it("rounds second argument down to nearest whole number", function(){
			expect(expand([1,2,3],2.7)).to.deep.equal([1,2,3,1,2,3]);
		});
		it("returns an empty array if second argument is less than or equal to 0", function(){
			expect(expand([1,2,3], 0)).to.be.an("array").that.is.empty;
			expect(expand(["foo", "test"], -2)).to.be.an('array').that.is.empty;
		});
		it("should return an empty array if an empty array is passed as argument", function(){
			expect(expand([],2)).to.be.an("array").that.is.empty;
		});
	});
	describe("acceptNumbersOnly", function(){
		it("should return a boolean", function(){
			expect(acceptNumbersOnly(1,"foo")).to.be.a("boolean");
			expect(acceptNumbersOnly(0,1,2,3,4.2)).to.be.a("boolean")
		});
		it("should return false for any non-number argument", function(){
			expect(acceptNumbersOnly(1,"foo")).to.equal(false);
			expect(acceptNumbersOnly(1,[],{})).to.equal(false);
			expect(acceptNumbersOnly(1,null)).to.equal(false);
			expect(acceptNumbersOnly(1,undefined)).to.equal(false);
			expect(acceptNumbersOnly(1,NaN)).to.equal(false);
		});
		it("should return false if there are no arguments", function(){
			expect(acceptNumbersOnly()).to.be.equal(false);
		});
		it("should return true if arguments are all numbers", function(){
			expect(acceptNumbersOnly(0,1,2,3,4.2)).to.equal(true);
			expect(acceptNumbersOnly(-1,-2,-3.4)).to.equal(true);
		});
	});
	describe("mergeArrays", function(){
		it("should return an array", function(){
			expect(mergeArrays([2,1],[3,4])).to.be.an("array");
		});
		it("should return an array with length equal to sum of argument arrays", function(){
			expect(mergeArrays([2,1],[3,4]).length).to.equal([1,2,3,4].length);
		});
		it("should concat argument arrays and sort resulting array", function(){
			expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
			expect(mergeArrays([-2,10,27],[3,-4,0])).to.deep.equal([-4,-2,0,3,10,27]);
			expect(mergeArrays([4,1,8],[])).to.deep.equal([1,4,8]);
		});
		it("returns an empty array if both arrays passed in are empty", function(){
			expect(mergeArrays([],[])).to.be.an("array").that.is.empty;
		});
	});
	describe("mergeObjects", function(){
		var obj1 = {
		    name: "Foo",
		    num: 33
		}
		var obj2 = {
		    test: "thing",
		    num: 55
		}
		it("should return an object", function(){
			expect(mergeObjects(obj1,obj2)).to.be.an("object");
		})
		it("should return an object that combines keys and values of both objects with value of overlapping keys equal to that of second parameter", function(){
			expect(mergeObjects(obj1,obj2)).to.have.all.keys("name", "num", "test");
			expect(mergeObjects(obj1,obj2)).to.have.property("num", 55);
		});
		it("should return an object with only keys of the passed in object if the other argument is an empty object", function(){
			expect(mergeObjects(obj1,{})).to.to.have.all.keys("name", "num");
			expect(mergeObjects({},obj2)).to.to.have.all.keys("num", "test");
		});
		it("should return an empty object if both objects passed in are empty", function(){
			expect(mergeObjects({},{})).to.be.an("object").that.is.empty;
		});
	});
})


		
		


		




