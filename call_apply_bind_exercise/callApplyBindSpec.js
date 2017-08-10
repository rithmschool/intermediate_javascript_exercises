var expect = chai.expect

describe("#sumEvenArguments", function(){
  it("takes all of the arguments passed to a function and returns the sum of the even ones", function(){
    expect(sumEvenArguments(1,2,3,4)).to.equal(6) // 6
    expect(sumEvenArguments(1,2,6)).to.equal(8) // 8
    expect(sumEvenArguments(1,2)).to.equal(2) // 2
  });
});

describe("#arrayFrom", function(){
  function convert(){
      var arr = arrayFrom(arguments)
      return arr;
  }
  it("takes an array like object and converts it into an array", function(){
    var argsArr = convert();
    expect(argsArr.reduce).to.be.function
  });
});

describe("#invokeMax", function(){
  function add(a,b){
      return a+b
  }
  it("returns a function that calls another function a certain amount of times", function(){

   var addOnlyThreeTimes = invokeMax(add,3);
   expect(addOnlyThreeTimes(1,2)).to.equal(3) // 3
   expect(addOnlyThreeTimes(2,2)).to.equal(4) // 4
   expect(addOnlyThreeTimes(1,2)).to.equal(3) // 3
   expect(addOnlyThreeTimes(1,2)).to.equal("Maxed Out!")
   expect(addOnlyThreeTimes(1,2)).to.equal("Maxed Out!")
  });
});

describe("#guessingGame", function(){

  it("shuould return the right type", function(){
    var game = guessingGame(0);
    expect(typeof game).to.equal('function')
    expect(typeof game(0)).to.equal('string')
  });

  it("inner function should return the correct results", function(){
    var game = guessingGame(0);
    expect(game(0).substring(0,31)).to.equal('No more guesses the answer was ')
    expect(game(0)).to.equal('You are all done playing!')
    expect(game(-1)).to.equal('You are all done playing!')
    game = guessingGame(10);
    for(let t = 0; t < 10; t++){
      expect(game(-1)).to.equal("You're too low!")
    }
    expect(game(-1).substring(0,31)).to.equal('No more guesses the answer was ')
    expect(game(-1)).to.equal('You are all done playing!')
    expect(game(-1)).to.equal('You are all done playing!')
    game = guessingGame(12);
    for(let t = 0; t < 12; t++){
      expect(game(11)).to.equal("You're too high!")
    }
    expect(game(11).substring(0,31)).to.equal('No more guesses the answer was ')
    expect(game(11)).to.equal('You are all done playing!')
    expect(game(-1)).to.equal('You are all done playing!')
    game = guessingGame(11)
    var gotWin = false;
    for(let t = 0; t < 11; t++){
      if(game(t) === "You got it!"){
        gotWin = true;
        break;
      }
    }
    expect(gotWin).to.equal(true)
  });

  it("should have choose every possiblity and change", function(){
    var cntObj = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0,};
    for(let t = 0; t < 1000000; t++){
      let game = guessingGame(11);
      for(let n = 0; n < 11; n++){
        if(game(n) === "You got it!"){
          cntObj[n]++;
          break;
        }
    }

    // return false or expect(flase).to.equal(true)

  }
  for(let n = 0; n < 11; n++){
    expect(cntObj[n] > 10).to.equal(true)
  }
  });

});