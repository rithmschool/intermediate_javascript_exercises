function replaceWith(str, char1, char2) {
  var newStr = "";

  for (var i = 0; i < str.length; i++) {

    if (str[i] === char1) {
      newStr+= char2;
    } else {
      newStr+= str[i];
    }
  }
  return newStr;
}

function expand(arr, num) {

  var newArr = [];

  for (var i = 0; i < num; i++) {
    newArr = newArr.concat(arr);
  }

  return newArr;
}

function acceptNumbersOnly() {
  for (var arg = 0; arg < arguments.length; arg++) {
    if (isNaN(arguments[arg]) || typeof arguments[arg] !== "number") {
      return false;
    }
  }
  return true;
}

function mergeArrays(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  return newArr.sort(function(a,b) {
    return a - b;
  });
}

function mergeObjects(obj1, obj2) {
  for (var key1 in obj1) {

    for (var key2 in obj2) {

      if (key1 === key2) {
        obj1[key1] = val2;
      } else {
        obj1[key2] = val2;
      }
    }
  }
  return obj1;
}
