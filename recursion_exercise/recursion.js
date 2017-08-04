/* jshint esversion: 6 */

// =============================================================================
function productOfArray(array) {
  if (array.length === 1) return array[0];

  return array[0] * productOfArray(array.slice(1));
}

productOfArray([1,2,3]); // 6
productOfArray([1,2,3,10]); // 60

// =============================================================================
function collectStrings(object) {
  let strings = [];

  function helper(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'object') return helper(obj[key]);
      if (typeof obj[key] === 'string') strings.push(obj[key]);
    }
  }

  helper(object);
  return strings;
}

let o = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
};

collectStrings(o); // ["foo", "bar", "baz"])

// // =============================================================================
function contains(obj, val) {
  for (let key in obj) {
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

let nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44
                    }
                }
            }
        }
    }
};

contains(nestedObject, 44); // true
contains(nestedObject, "foo"); // false

// =============================================================================
function realSize(arrays) {
  let count = 0;

  function helper(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        count++;
      }

      if (Array.isArray(arr[i])) {
        helper(arr[i]);
      }
    }
  }

  helper(arrays);
  return count;
}

realSize([]);
realSize([[]]);
realSize([1, [1]]);
realSize([1, [], 2, [], 3, []]);
realSize([0, [1, [5, [4, 3], 1], 1]]);
realSize([[[5], 3], 0, 2, [], [4, [5, 6]]]);

// =============================================================================
function SumSquares(l) {
  let sum = 0;

  function helper(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) helper(arr[i]);
      else sum += (arr[i] * arr[i]);
    }
  }

  helper(l);
  return sum;
}

SumSquares([1,2,3]); // 14
SumSquares([[1,2],3]); // 14
SumSquares([[[[[[[[[1]]]]]]]]]); // 1
SumSquares([10,[[10],10],[10]]); // 400

// =============================================================================
function replicate(times, number) {
  if (times === 1) return [number];
  if (times < 1) return [];

  return [number].concat(replicate(times - 1, number));
}

replicate(3, 5); // [5,5,5]

// =============================================================================
function search(array, num, index = 0) {
  if (array.length === index) return -1;
  if (array[index] !== num) {
    return search(array, num, index + 1);
  } else {
    return index;
  }
}

search([1,2,3,4,5],5); // 4
search([1,2,3,4,5],15); // -1

// // =============================================================================
// // iterative solution
// function binarySearch(array, num) {
//   let left = 0;
//   let right = array.length - 1;
//   let middle = 0;
//
//   while (true) {
//     if (left > right) return -1;
//
//     middle = Math.floor((left + right) / 2);
//
//     if (array[middle] === num) return middle;
//
//     if (array[middle] < num) {
//       left = middle + 1;
//     } else right = middle - 1;
//     }
//   }
// }
//
// recursive solution
function binarySearch(array, num, left = 0, right = array.length - 1) {
  if (left > right) return -1;

  let middle = Math.floor((left + right) / 2);

  if (array[middle] === num) return middle;

  if (array[middle] < num) {
    return binarySearch(array, num, middle + 1, right);
  }

  return binarySearch(array, num, left, middle - 1);
}

binarySearch([1,2,3,4,5],5); // 4
binarySearch([1,2,3,4,5],15); // -1

// =============================================================================
function stringifyNumbers(object) {
  let newObj = {};

  for (let key in object) {
    if (typeof object[key] === 'number') {
      newObj[key] = object[key].toString();

    } else if (Array.isArray(object[key])) {
      newObj[key] = object[key];

    } else if (typeof object[key] === 'object') {
      newObj[key] = stringifyNumbers(object[key]);

    } else {
      newObj[key] = object[key];
    }
  }

  return newObj;
}








// end
