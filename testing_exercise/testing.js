function replaceWith(str, l, lreplace) {
  return str.split(l).join(lreplace);
}

//Write a function called expand which takes an array and a number and returns a copy of the array with as many numbers as specified
//expand([1,2,3],3) //[1,2,3,1,2,3,1,2,3]
function expand(arr, num) {
  var newArr = [];
  for(var i = 1; i <= num; i++) {
     newArr = newArr.concat(arr);
  }
  return newArr;
}
//Write a function called mergeArrays which takes in two arrays and returns one array with the values sorted
function mergeArrays(arr1, arr2){
  var newArr = arr1.concat(arr2).sort();
  return newArr;
}

//Write a function called mergeObjects which takes in two objects and return an object with the keys and values combined. If the second parameter has the same key - it should override first one. There is a built in function called Object.assign - research it, but do not use it, try to do this on your own!

function mergeObjects(obj1, obj2) {
  for (var key in obj2){
    obj1[key] = obj2[key];
  }
  return obj1;
}