function productOfArray(array) {
  if (array.length === 1) {
    return array[0];
  }

  return array[0] * productOfArray(array.slice(1));
}

function collectStrings(obj) {
  return Object.values(obj).reduce(function(acc, curr) {
    if (typeof curr === 'string') {
      acc.push(curr);
    } else if (typeof curr === 'object') {
      acc = acc.concat(collectStrings(curr));
    }
    return acc;
  }, []);
}
// function contains(obj, value) {
//   var result = false;
//
//   function helper(obj1) {
//     for (var key in obj1) {
//       if (obj1[key] === value) {
//         result = true;
//       } else if (typeof obj1[key] === 'object') {
//         helper(obj1[key]);
//       }
//     }
//   }
//   helper(obj);
//   return result;
// }

function contains(obj, val) {
  for (var key in obj) {
    if (obj[key] === val) {
      return true;
    }
    if (typeof obj[key] === 'object') {
      if (contains(obj[key], val)) {
        return true;
      }
    }
  }
  return false;
}

function search(array, target) {
  return array.findIndex(x => x === target);
}

function binarySearch(array, target, start = 0, end = array.length - 1) {
  if (end < start) return -1;

  var middle = Math.floor((start + end) / 2);

  if (target === array[middle]) {
    return middle;
  }
  if (target < array[middle]) {
    return binarySearch(array, target, start, middle - 1);
  } else {
    return binarySearch(array, target, middle + 1, end);
  }
}

function stringifyNumbers(obj) {
  var object = {};
  for (var key in obj) {
    if (Number.isFinite(obj[key])) {
      object[key] = '' + obj[key];
    } else if (!Array.isArray(obj[key]) && typeof obj[key] === 'object') {
      object[key] = stringifyNumbers(obj[key]);
    } else {
      object[key] = obj[key];
    }
  }
  return object;
}
