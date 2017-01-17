var expect = chai.expect;

// WRITE YOUR TESTS HERE!

    describe("addUpTo", function(){

        it("adds up the first n whole numbers", function(){
            expect(addUpTo(5)).to.equal(15);
            expect(addUpTo(3)).to.equal(6);
        });

        it("returns undefined for invalid inputs", function(){
            expect(addUpTo(-1)).to.equal(undefined);
            expect(addUpTo(2.5)).to.equal(undefined);
            expect(addUpTo("awesome")).to.equal(undefined);
        });



    });


    describe("replaceWith", function(){

        it("replaceWith is case sensitive", function(){
            expect(replaceWith("awesome", "e", "z")).to.equal("awzsomz");
            expect(replaceWith("Foo", "F", "B")).to.equal("Boo");

        });

    });


    describe("expand", function(){
        it("expanding an array", function(){
            expect(expand([1,2,3], 3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
        });
    });


    describe("acceptNumbersOnly", function(){
        it("accepted numbers only", function(){
            expect(acceptNumbersOnly(1,"foo")).to.equal(false);
            expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.equal(true);
            expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.equal(false);

        });
    });

    describe("mergeArrays", function(){
        it("merged two arrays and sorted", function(){
            expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
        });
    });

    describe("mergeObjects", function(){
        it("merge two objects overriding the key of first", function(){
            var obj1= {
                name: "Foo",
                num: 33
            }
            var obj2 = {
                test: "thing",
                num: 55
            }
            expect(mergeObjects(obj1, obj2)).to.deep.equal({
                                                            name: "Foo",
                                                            test: "thing",
                                                            num: 55
			})
        });
    });
