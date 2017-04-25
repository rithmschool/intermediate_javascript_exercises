var expect = chai.expect;

// WRITE YOUR TESTS HERE!
describe("JS Testing Exercises", function () {

    describe("replaceWith", function () {
        /* ideally add argument stuff like
        it("should accept 3 arguments", function(){
        });
        it("should expect a string as the first argument", function(){
        });
        it("should expect a character as the second argument", function(){
        });
        it("should expect a character as the third argument", function(){
        }); */
        it("should be case sensitive", function () {
            expect(replaceWith("awesome", "e", "z")).to.equal("awzsomz");
            expect(replaceWith("awesome", "e", "Z")).to.equal("awZsomZ");
            expect(replaceWith("Foo", "F", "b")).to.equal("boo");
            expect(replaceWith("Foo", "F", "B")).to.equal("Boo");
        });
        it("should ignore empty strings (first parameter)", function () {
            expect(replaceWith("", "a", "B")).to.equal("");
        });
        it("should ignore empty strings (second parameter)", function () {
            expect(replaceWith("hello", "", "z")).to.equal("hello");
        });
        it("should not ignore empty strings (third parameter)", function () {
            expect(replaceWith("hello", "h", "")).to.equal("ello");
        });

    });

    describe("expand", function () {
        /* it("should accept 2 arguments", function(){
        });
        it("should take an array as the first argument", function(){
        });
        it ("should take a number as the second argument", function(){
        }); */
        it("should not mutate the original array", function () {
            var arr = [1, 2, 3];
            expand(arr);
            expect(arr).to.deep.equal([1, 2, 3]);
        });
        it("should return the correct number of values in the new array", function () {
            expect(expand([1, 2, 3], 3)).to.deep.equal([1, 2, 3, 1, 2, 3, 1, 2, 3]);
            expect(expand(["foo", "test"], 1)).to.deep.equal(["foo", "test"]);
            expect(expand([], 5)).to.deep.equal([]);
            expect(expand([3, 4], -10)).to.deep.equal([]);
            expect(expand([1, 2, 3], 0)).to.deep.equal([]);
        });
        it("should return the correct number of values in the new array (even if not an integer)", function () {
            expect(expand([1, 2, 3], 3.5)).to.deep.equal([1, 2, 3, 1, 2, 3, 1, 2, 3]);
        });

    });

    describe("acceptNumbersOnly", function () {
        it("should return true if all arguments are numbers", function () {
            expect(acceptNumbersOnly(1, "foo")).to.be.false;
            expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7)).to.be.true;
            expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN)).to.be.false;
            expect(acceptNumbersOnly()).to.be.false;
        });
    });

    describe("mergeArrays", function () {
        /* it("should take in 2 arrays as arguments", function(){
        });*/
        it("should return a sorted array", function () {
            expect(mergeArrays([2, 1], [3, 4])).to.deep.equal([1, 2, 3, 4]);
            expect(mergeArrays([2, 1, 5], [4, 3])).to.deep.equal([1, 2, 3, 4, 5]);
            expect(mergeArrays([-2, 1, -5], [4, 3])).to.deep.equal([-5, -2, 1, 3, 4]);
            expect(mergeArrays([], [])).to.deep.equal([]);
        });
    });

    describe("mergeObjects", function () {
        /* it("should take in 2 objects as arguments", function(){
        }); */
        var obj1 = {
            name: "Foo",
            num: 33
        }
        var obj2 = {
            test: "thing",
            num: 55
        }
        it("should return an object", function () {
            expect(mergeObjects(obj1, obj2)).to.be.an('object');
        });
        it("should use obj2's value if obj1 & obj2 have the same key", function () {
            expect(mergeObjects(obj1, obj2)).have.all.keys(['name', 'test', 'num']);
            expect(mergeObjects(obj1, obj2)).include({num: 55});
            /*/
            {
                name: "Foo",
                test: "thing",
                num: 55
            }
            /*/
        });
    });
});