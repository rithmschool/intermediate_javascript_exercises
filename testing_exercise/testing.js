function replaceWith(string, char1, char2) {
  return string.replace(RegExp(char1,'gi'), char2);
}

function expand(arr, n) {
  var newArr = [];
  for (var i=0; i < n; i++) {
    newArr = newArr.concat(arr);
  }
  return newArr;
}

function acceptNumbersOnly() {
  return Array.from(arguments).filter((e) => isNaN(e)).length === 0;
}

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2).sort((a,b) => { return a - b });
}

function mergeObjects(obj1, obj2) {
  for(var k in obj2) {
    obj1[k] = obj2[k];
  }
  return obj1;
}