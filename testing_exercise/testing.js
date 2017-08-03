function replaceWith(string, pattern, replacer) {
  return string
    .split('')
    .map(letter => (letter === pattern ? replacer : letter))
    .join('');
}

function expand(arr, num) {
  var newArray = [];
  while (num > 0) {
    for (var i = 0; i < arr.length; i++) {
      newArray.push(arr[i]);
    }
    num--;
  }
  return newArray;
}

function acceptNumbersOnly() {
  return Array.from(arguments).every(function(item) {
    return typeof item === 'number' && !Object.is(item, NaN);
  });
}

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

function mergeObjects(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
  return obj1;
}
