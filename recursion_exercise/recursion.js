function productOfArray(array) {

  if (array.length === 1) {
    return array[0];
  }

  return array.pop() * productOfArray(array);

}

function collectStrings(obj) {

  var newArray = [];

  function helper(obj) {
    for (var key in obj) {
      if (typeof obj[key] === "string") {
        newArray.push(obj[key]);
      } else {
        helper(obj[key]);
      }
    }
  }

  helper(obj);

  return newArray;
}

function contains(obj, value) {

  for (var key in obj) {
    if (obj[key] === value) {
      return true;
    } else {
      return contains(obj[key], value);
    }
  }

}
