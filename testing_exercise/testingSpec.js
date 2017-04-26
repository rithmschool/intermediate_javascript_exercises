var expect = chai.expect;

describe("testing exercises", function() {

    describe("replaceWith", function() {
        
        it("should replace lowercase letter", function() {
          	expect(replaceWith('awesome', 'e', 'z')).to.equal('awzsomz');
        }); 

        it("should respect case of uppercase letter being replaced", function() {
          	expect(replaceWith('Foof', 'F', 'B')).to.equal('Boof');
    	});

        it("should respect case of lowercase letter being replaced", function() {
          	expect(replaceWith('Foof', 'f', 'B')).to.equal('FooB');
    	});

        it("should respect case of replacement letter", function() {
          	expect(replaceWith('Foof', 'F', 'b')).to.equal('boof');
    	});

    });

    describe("expand", function() {
        
        it("should return a copy of the array with as many numbers as specified", function() {
          	expect(expand([1,2,3],3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
          	expect(expand([20,"katie",30,-1,5,0,3,"codes",1],2)).to.deep.equal([20,"katie",30,-1,5,0,3,"codes",1,20,"katie",30,-1,5,0,3,"codes",1]);
        }); 

        it("should round floats down to nearest whole number", function() {
          	expect(expand([1,2,3],3.7)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
    	});

        it("should return empty array if number is zero", function() {
          	expect(expand([1,2,3],0)).to.deep.equal([]);
          	expect(expand([],0)).to.deep.equal([]);
    	});

        it("should return empty array if number is less than 1", function() {
          	expect(expand([1,2,3],-20)).to.deep.equal([]);
          	expect(expand([],-1)).to.deep.equal([]);	
    	});

        it("should return empty array if array in is empty", function() {
          	expect(expand([],-20)).to.deep.equal([]);
          	expect(expand([],20)).to.deep.equal([]);	
    	});

    });

    describe("acceptNumbersOnly", function() {
        
        it("should return false for any non-numbers", function() {
          	expect(acceptNumbersOnly(1,"foo")).to.equal(false);
          	expect(acceptNumbersOnly(1,[1,2])).to.equal(false);
          	expect(acceptNumbersOnly(1,undefined)).to.equal(false);
          	expect(acceptNumbersOnly(1,null)).to.equal(false);
          	expect(acceptNumbersOnly(1,NaN)).to.equal(false);
        }); 

        it("should return true for all positive whole numbers", function() {
          	expect(acceptNumbersOnly(1,2,3)).to.equal(true);
    	});

        it("should return true for all negative whole numbers", function() {
          	expect(acceptNumbersOnly(-2, -3, -4, 1)).to.equal(true);
    	});

        it("should return true for all zeros", function() {
          	expect(acceptNumbersOnly(0, 0, 0)).to.equal(true);
    	});

    	it("should return false for no arguments", function() {
          	expect(acceptNumbersOnly()).to.equal(false);
    	});

    });


   describe("mergeArrays", function() {
        
        it("should merge simple arrays", function() {
          	expect(mergeArrays([1,2],[3,4])).to.deep.equal([1,2,3,4]);
          	expect(mergeArrays(["katie"], ["codes"])).to.deep.equal(["codes", "katie"]);
        }); 

        it("should merge arrays of different lengths", function() {
          	expect(mergeArrays([4,3],[2])).to.deep.equal([2,3,4]);
        }); 

        it("should merge empty arrays", function() {
          	expect(mergeArrays([], [3])).to.deep.equal([3]);
          	expect(mergeArrays([],[],[])).to.deep.equal([]);
        }); 

    });

    describe("mergeObjects", function() {
        
        it("should merge objects that have overlapping keys using last key", function() {
        	var obj1 = {
        		name: "Foo",
        		num: 33
        	};
        	var obj2 = {
        		test: "thing",
        		num: 55
        	};
        	var mergeObj12 = {
        		name: "Foo",
        		test: "thing",
        		num: 55
        	};
          	expect(mergeObjects(obj1,obj2)).to.deep.equal(mergeObj12);
        }); 

        it("should merge simple objects", function() {
          	var obj3 = {
        		name: "Foo",
        		num: 33
        	};
        	var obj4 = {
        		test: "thing",
        	};
        	var mergeObj34 = {
        		name: "Foo",
        		test: "thing",
        		num: 33
        	};
          	expect(mergeObjects(obj3,obj4)).to.deep.equal(mergeObj34);
        }); 

        it("should merge empty objects", function() {
          	expect(mergeObjects({}, {})).to.deep.equal({});
          	expect(mergeObjects({name: "katie"},{},{})).to.deep.equal({name: "katie"});
        }); 

    });

});