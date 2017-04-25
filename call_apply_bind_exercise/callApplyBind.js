function sumEvenArguments() {
  var sum = 0;
  var nums = Array.prototype.slice.call(arguments);

  nums.forEach(function(x) {
    if (x % 2 === 0) {
      sum += x;
    }
  });

  return sum;
}

function arrayFrom() {
  return Array.prototype.slice.call(arguments);
}

function invokeMax(fn, max) {

  var counter = 0;

  return function() {
    counter++;
    if (counter > max) {
      return 'Maxed Out!';
    } else {
      return fn.apply(this, arguments);
    }
  };

}
