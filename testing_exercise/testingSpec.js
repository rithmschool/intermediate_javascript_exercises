var expect = chai.expect;

describe('This will test the replaceWith function', function(){

	it('replaceWith should be a function', function() {
		expect(typeof replaceWith).to.equal('function');
	});
	it('replaceWith should return correct values', function () {
		expect(replaceWith("awesome", "e", "z")).to.equal("awzsomz");
		expect(replaceWith("Foo", "F", "B")).to.equal("Boo");
	});
	it('replaceWith should be case sensitive', function () {
		expect(replaceWith("awesomE", "e", "z")).to.equal("awzsomE");
		expect(replaceWith("Foo", "f", "B")).to.equal("Foo");
		expect(replaceWith("ffFFfFB", "f", "B")).to.equal("BBFFBFB");
	});

});

describe('This will test the expand function', function(){

	it('expand should be a function', function() {
		expect(typeof expand).to.equal('function');
	});
	it('expand should return correct values', function () {
		expect(expand([1,2,3],3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
		expect(expand(["foo", "test"],1)).to.deep.equal(["foo","test"]);
		expect(expand(["foo", "test"],0)).to.deep.equal([]);
	});

});

describe('This will test the acceptNumbersOnly function', function(){

	it('expand should be a function', function() {
		expect(typeof acceptNumbersOnly).to.equal('function');
	});

	it('acceptNumbersOnly should return correct values', function () {
		expect(acceptNumbersOnly(1,"foo")).to.equal(false);
		expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.equal(true);
		expect(acceptNumbersOnly(1)).to.equal(true);
	});

	it('acceptNumbersOnly should deal with objects input', function () {
		expect(acceptNumbersOnly([])).to.equal(false);
		expect(acceptNumbersOnly({})).to.equal(false);
	});

	it('acceptNumbersOnly should deal with strings input', function () {
		expect(acceptNumbersOnly('')).to.equal(false);
		expect(acceptNumbersOnly('5')).to.equal(false);
	});

	it('acceptNumbersOnly should deal with null input', function () {
		expect(acceptNumbersOnly(null)).to.equal(false);
	});

	it('acceptNumbersOnly should deal with NaN input', function () {
		expect(acceptNumbersOnly(NaN)).to.equal(false);
	});
});

describe('This will test the mergeArrays function', function(){

	it('mergeArrays should be a function', function() {
		expect(typeof mergeArrays).to.equal('function');
	});
	it('mergeArrays should return correct values', function () {
		expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
	});

});

describe('This will test the mergeObjects function', function(){
	var obj1= {
	    name: "Foo",
	    num: 33
	}
	var obj2 = {
	    test: "thing",
	    num: 55
	}
	var obj12 = {
		    name: "Foo",
		    test: "thing",
		    num: 55
		}

	it('mergeObjects should be a function', function() {
		expect(typeof mergeObjects).to.equal('function');
	});
	it('mergeObjects should return correct values', function () {
		expect(mergeObjects(obj1, obj2)).to.deep.equal(obj12);
	});

});