function productOfArray(arr) {
  if(arr.length < 1) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

function collectStrings(obj) {
  var newArr = [];

  function helperCollect(object) {
    for (var key in object) {
      if(typeof object[key] !== "string") {
         helperCollect(object[key]);
      } else {
        newArr.push(object[key]);
      }
    }
  }

  helperCollect(obj);

  return newArr;
}

function contains(obj, val) {
  var result = false;

  function helperContains(object, value) {
    for (var key in object) {
      if(object[key] === value) {
        result = true;
      } else if (typeof object[key] === "object"){
         helperContains(object[key], value);
      }
    }
  }

  helperContains(obj, val);

  return result;
}

function search(arr, val) {
  var index = -1;

  function helperSearch(array, val) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === val) {
            index = i;
        } else {
            helperSearch(array.slice(i+1));
        }
     }
  }

  helperSearch(arr, val);

  return index;
}

function binarySearch(arr, val) {
  var index = -1;
  var newInd = 0;

  function binaryHelper(array, value) {
      var ind = Math.floor(array.length / 2);
      newInd += ind;
      if (array[ind] > value) {
          binaryHelper(array.slice(0, ind), value)
      } else if (array[ind] < value) {
          binaryHelper(array.slice(ind), value);
      } else {
          index = newInd;
      }
  }

  binaryHelper(arr, val);

  return index;
}
