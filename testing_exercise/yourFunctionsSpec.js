var expect = chai.expect; 

describe("addUpto", function(){
    it("adds up the first n whole numbers", function(){
        expect(addUpTo(5)).to.equal(15);
        expect(addUpTo(3)).to.equal(6);
    });
    
    it("returns undefined for invalid inputs", function(){
        expect(addUpTo(-1)).to.equal(undefined);
        expect(addUpTo(2.5)).to.equal(undefined);
        expect(addUpTo("words")).to.equal(undefined);
    });
});

describe("replaceWith", function(){
    it("replaces the letters in a word",function(){
      expect(replaceWith("awesome", "e", "z")).to.equal("awzsomz");
      expect(replaceWith("Foo", "F", "B")).to.equal("Boo");
    });
});

describe("expand", function(){
    it("expands the array", function(){
    expect(expand([1,2,3],3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
    expect(expand(["foo", "test"],1)).to.deep.equal(["foo","test"]);
    });
});

describe("acceptNumbersOnly", function(){
    it("only accepts numbers", function(){
      expect(acceptNumbersOnly(1,"foo")).to.equal(false);
      expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.equal(true);
      expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.equal(false);
    });
});

describe("mergeArrays", function(){
    it("merges two arrays", function(){
        expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
    });
});

describe("mergeObjects", function(){
    it("merges two objects", function(){
        expect(mergeObjects(obj1, obj2)).to.deep.equal({
    name: "Foo",
    test: "thing",
    num: 55
       });
    });
});




describe("Arrays", function(){
  describe("#push", function(){
    it("adds elements to an array", function(){
      arr.push(7);
      expect(arr).to.deep.equal([1,3,5,7]);
    });
    it("returns the new length of the array", function(){
      expect(arr.push(7)).to.equal(4);
    });
    it("adds anything into the array", function(){
      expect(arr.push({})).to.equal(4);
    });
  });
});





