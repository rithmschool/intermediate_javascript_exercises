var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function(){
            return "This person's name is " + this.fullName;
        }.apply(obj)
    }
}

console.log(
obj.person.sayHi
)

var obj = {
    fullName: "Harry Potter",
    sayHi(){
        return  "This person's name is " + this.fullName
    }
}


function sumEvenArguments(){
  var args = [].slice.call(arguments);

  return args.reduce((acc, num)=>{
    if(num % 2 === 0) acc += num
      return acc;
  },0)
}

function arrayFrom(args){
  return [].slice.call(args);;
}

function invokeMax(fn, num){
  var count = num;
  return function add(a,b){
    if(count <= 0) return 'Maxed Out!'
    count--;
    return fn.apply(this,arguments);
  }
}

var game = guessingGame(5)

function guessingGame (numTries){
  var answer = Math.floor(Math.random()*11);
  var guesses = 0;

  return function guess(num){
    guesses++
    if(numTries <= guesses) return "You are all done playing!"
    if(num === answer) return "You got it!"
    if(num < answer) return "You're too low!"
    return "You're too high!"
  }

}













