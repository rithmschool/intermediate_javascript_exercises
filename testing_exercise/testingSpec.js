var expect = chai.expect;

// WRITE YOUR TESTS HERE!

describe("JavaScript Testing Exercise tests", function(){

	describe("replaceWith", function(){
		it("returns a string", function(){
			expect(replaceWith('awesome','e','z')).to.be.a('string');
		});

		it("replaces characters", function(){
			expect(replaceWith('awesome','e','z')).to.equal('awzsomz');
			expect(replaceWith('Foo','F','B')).to.equal('Boo');
		});

		it("is case sensitive", function(){
			expect(replaceWith('awesome','E','z')).to.equal('awesome');
		});
	});

	describe("expand", function(){
		it('returns an array', function(){
			expect(expand([1,2,3],3)).to.be.an('array');
		});

		it('expands correctly', function(){
			expect(expand([1,2,3],3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
			expect(expand(["foo", "test"],1)).to.deep.equal(['foo', 'test']);
			expect(expand([1,"Julia"],4)).to.deep.equal([1,"Julia",1,"Julia",1,"Julia",1,"Julia"]);
		});
	});

	describe('acceptNumbersOnly', function(){
		it('accepts only numbers', function(){
			expect(acceptNumbersOnly(1,"foo")).to.be.false;
			expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.be.true;
			expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.be.false;
			expect(acceptNumbersOnly(undefined,1,8)).to.be.false;
			expect(acceptNumbersOnly(8,1,null)).to.be.false;
			expect(acceptNumbersOnly([1,2,3],3,4)).to.be.false;
			expect(acceptNumbersOnly(1,5,6,{"julia": true})).to.be.false;
			expect(acceptNumbersOnly(100, -1000, 0, 3, 4.5)).to.be.true;
		});

	});

	describe('mergeArrays', function(){
		it('returns an array', function(){
			expect(mergeArrays([2,1],[3,4])).to.be.an('array');
		});

		it('merges & sorts the arrays', function(){
			expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
			expect(mergeArrays([8,1,4],[3,1])).to.deep.equal([1,1,3,4,8]);
		});
	});

	var obj1;
	var obj2;

	//Note: beforeEach is really not needed or useful here, but I'm keeping 
	//it in for reference for future
	beforeEach(function(){
		obj1 = {
			name: "Foo",
			num: 33
		}

		obj2 = {
			test: "thing",
			num: 55
		}
	});

	var obj3 = {
		name: "Julia",
		birthMonth: "March",
		interests: ['biking', 'piano', 'soccer'],
	};

	var obj4 = {
		num: 30,
		birthMonth: 'January',
		interests: ['hiking', 'reading', 'guitar']
	};

	describe('mergeObjects', function(){
		it('returns an object', function(){
			expect(mergeObjects(obj1,obj2)).to.be.an('object');
		});

		it('merges the objects & if same keys, 2nd obj key overrides 1st', function(){
			expect(mergeObjects(obj1,obj2)).to.deep.equal({
					name: "Foo",
					test: "thing",
					num: 55
			});
			expect(mergeObjects(obj3,obj4)).to.deep.equal({
					name: "Julia",
					birthMonth: 'January',
					interests: ['hiking', 'reading', 'guitar'],
					num: 30
			});
		});
	});

});