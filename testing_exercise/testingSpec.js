var expect = chai.expect;

// WRITE YOUR TESTS HERE!

describe("Let's test some fancy JS methods!", function(){
  describe("#replaceWith", function(){
    it("should replace all instances of char1 in string with char2", function(){
      expect(replaceWith("awesome","e","z")).to.equal("awzsomz");
      expect(replaceWith("Foo","F","B")).to.equal("Boo");
    });
  });

  describe("#expand", function(){
    it("should duplicate the array contents n times", function(){
      expect(expand([1,2,3],3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
      expect(expand(["foo", "test"],1)).to.deep.equal(["foo","test"]);
    });
  });

  describe("#acceptNumbersOnly", function(){
    it("should return true if all the arguments are numbers", function(){
      expect(acceptNumbersOnly(1,"foo")).to.equal(false);
      expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.equal(true);
      expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.equal(false);
    });
  });

  describe("#mergeArrays", function(){
    it("should combine sort two arrays", function(){
      expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
    });
  });

  describe("#mergeObjects", function(){
    it("should merge two objects", function(){
      var obj1= {
          name: "Foo",
          num: 33
      }
      var obj2 = {
          test: "thing",
          num: 55
      }
      expect(mergeObjects(obj1, obj2)).to.deep.equal({name: "Foo", test: "thing", num: 55});
    });
  });
});