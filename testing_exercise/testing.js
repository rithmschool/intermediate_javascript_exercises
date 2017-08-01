function replaceWith(str, char, replaced) {
  return str.split(char).join(replaced);
}

function expand(array, num) {
  var newArray = [];
  for (var i = 0; i < num; i++) {
    for(var j = 0; j < array.length; j++) {
      newArray.push(array[j]);
    }
  }
  return newArray;
}

function acceptNumbersOnly() {
  var isTrue = true;
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] === parseInt(arguments[i])) {
      isTrue = isTrue && true;
    }
    else isTrue = false;

  }
  return isTrue;
}

function mergeArrays(array1, array2) {
  var newArray = array1.concat(array2);
  return newArray.sort(function(a, b) {
    return a - b;
  });
}

function mergeObjects(obj1, obj2) {
  for (var key in obj2) {
    if (obj2.hasOwnProperty(key)){
      obj1[key] = obj2[key];
    }
  }
  return obj1;
}
