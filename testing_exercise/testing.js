/* jshint esversion: 6 */
/* jshint devel: true */
/* jshint node: true */
/* jshint mocha: true */

'use strict';

// =============================================================================
function replaceWith(word, curLetter, newLetter) {
  let result = '';

  for (let i = 0; i < word.length; i++) {
    result += (word[i] === curLetter) ? newLetter : word[i];
  }

  return result;
}

// =============================================================================
function expand(arr, num) {
  let result = [];

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < arr.length; j++) {
      result.push(arr[j]);
    }
  }

  return result;
}

// =============================================================================
function acceptNumbersOnly() {
  if (arguments.length === 0) return false;

  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== 'number' || isNaN(arguments[i])) return false;
  }

  return true;
}

// =============================================================================
function mergeArrays(array1, array2) {
  return array1.concat(array2).sort((a, b) => {
    return a - b;
  });
}

// =============================================================================
function mergeObjects(object1, object2) {
  let result = {};

  for (let key in object1) {
    result[key] = object1[key];
  }

  for (let key in object2) {
    result[key] = object2[key];
  }

  return result;
}




// end
