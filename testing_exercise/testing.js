function replaceWith(string, pattern, replacer) {
  var newString = [];
  string.split('').forEach(function(letter) {
    if (letter.toLowerCase() === pattern.toLowerCase()) {
      letter = replacer;
    }
    newString.push(letter);
  });
  return newString.join('');
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
  return arr1.concat(arr2).sort();
}

function mergeObjects(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
  return obj1;
}
