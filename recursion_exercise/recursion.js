function productOfArray(arr) {
  if (arr.length == 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
}

function collectStrings(obj) {
  let strings = [];
  
  function helper(o) {
    for(let prop in o) {
      if (typeof o[prop] === 'string') {
        strings.push(o[prop]);
      } else {
        helper(o[prop]);
      }
    }  
  }
  helper(obj);
  return strings;
}

function contains(obj, val) {
  for(let prop in obj){
    if(typeof obj[prop] === 'object'){
      if (contains(obj[prop], val)) {
        return true;
      }
    }
    else if(obj[prop] === val) {
      return true;
    }
  }
  return false;
}

// Bonus! Er, perhaps when I understand this better.
//
function search(arr, val, count=0){
  if(arr[count] === val) return count;
  if(count === arr.length) return -1;
  return search(arr, val, count+1);
}