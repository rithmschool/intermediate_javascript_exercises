// var numPairs = 0;

// function countPairs(arr, num) {
//   if(arr.length <= 1) {
//     return numPairs;
//   }
//   var first = arr[0];
//   arr = arr.slice(1);
//   for(var i=0; i<arr.length; i++) {
//     if(first + arr[i] === num) {
//       numPairs += 1;
//       delete arr[i];
//     }
//   }
//   return countPairs(arr, num);
// }



function countPairs(arr, num) {
  var numPairs = 0;

  function countPairsHelper(arr, num) {
    if(arr.length <= 1) {
        return;
    }
    var first = arr[0];
    arr = arr.slice(1);
    for(var i=0; i<arr.length; i++) {
      if(first + arr[i] === num) {
        numPairs += 1;
        delete arr[i];
      }
    }
    return countPairsHelper(arr, num);
  }
  
  countPairsHelper(arr, num);
  return numPairs;
}


// !!This doesn't compare each value to all others...

// function countPairs(arr, num) {
//   var countPairs = 0;

//   function countPairsHelper(arr, num) {
//     if (arr <= 1) {
//       return;
//     }

//     if (arr[0] === arr[arr.length-1]) {
//       countPairs += 1
//       arr = arr.slice(1,arr.length-2)
//       countPairsHelper(arr, num);
//     }
//   }
//   countPairsHelper(arr, num);
//   return countPairs;
// }

// Instructor's Solution:
function countPairs(arr, num){
    let s = new Set(arr);
    let count = 0;
    for(let val of arr){
        s.delete(val)
        if(s.has(num - val)){
            count++
        }
    }
    return count;
}

