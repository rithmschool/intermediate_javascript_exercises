function replaceWith(word, replace, replacer) {
  var wordz = word.split('');
  var newWord = [];
  
  for(var i = 0; i < word.length; i++) {
    if(word[i] === replace) {
      newWord[i] = replacer;
    } else {
      newWord[i] = word[i];
    }
  }
  
  return newWord.join('');
  
}

function expand(array, number) {

  var array1 = [];
  
  for(var i = 1; i <= number; i++) {
    array1 = array1.concat(array);
  }
  
  return array1;
  
}

function acceptNumbersOnly(n) {

  for(var i = 0; i < arguments.length; i++) {
    if(isNaN(arguments[i]) === true || typeof arguments[i] !== 'number') {
      return false;
    } 
  }
  
  return true;
  
}

function mergeArrays(a1, a2) {
  
  return a1.concat(a2).sort(function (a, b) { return a - b; });
  
}


function mergeObjects(obj1, obj2) {
  
  var mergedObject = {};
  
  for(var key in obj1) {
    mergedObject[key] = obj1[key];
  }
  
  for(var key1 in obj2) {
    mergedObject[key1] = obj2[key1];
  }
  
  return mergedObject;
  
}