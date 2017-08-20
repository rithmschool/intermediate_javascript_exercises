function productOfArray(arr){
  if(arr.length === 0) return 1;
  return productOfArray(arr.slice(1)) * arr[0];
  // return arr.shift() * productOfArray(arr[0]);
}

function collectStrings(obj){
  let arr = [];

  function helper(o){
    for(let prop in o){
      if(typeof o[prop] === 'string'){
        arr.push(o[prop])
      } else {
        helper(o[prop])
      }
    }
  }

  helper(obj)
  return arr;
}


function contains(obj, val){
    for(let prop in obj){
     if(obj[prop] === val){
       return true;
     }

     if(typeof obj[prop] === 'object'){
        if(contains(obj[prop], val)){
            return true
        }
     }
  }
  return false;
}


// https://www.codewars.com/kata/the-real-size-of-a-multi-dimensional-array/train/javascript
function realSize(arr) {
  let count = 0;

  function helper(a){
      for(let i = 0; i < a.length; i++){
         if(typeof a[i] === 'number'){
             count++
         }

         if(Array.isArray(a[i])){
            helper(a[i])
         }
      }
  }
   helper(arr)
  return count;
}


function SumSquares(l, sum=0){

 for(let i = 0; i < l.length; i++){
     if(Array.isArray(l[i])) {
        sum = SumSquares(l[i], sum);
     } else {
        sum += l[i]*l[i];
     }
 }

  return sum;
}


function replicate1(times, number) {
    let arr = [];


  function helper(t, n) {
        if(t === 0){
            return;
        }

       arr.push(n);
       helper(t-1, n)
     }

    helper(times, number)
    return arr;
}

function replicate(times, number) {
  if(times === 0){
    return [];
  }

  return replicate2(times--, number).concat(number);
}

function search(arr, num, i=0){

  if(arr[0] === num)  return i;
  if(arr.length === 0) return -1;


  return search(arr.slice(1), num, ++i)
}


function search2(arr, num, i=0){

  if(arr[i] === num)  return i;
  if(i === 0) return -1;

  return search(arr, num, ++i)
}

//Bineary search mush be sorted.
function binarySearch(arr, num){
  //assume sorted array with postive integers and no repeating numbers
  // newArr = arr.slice(0,num+1)
  var newArr = arr.slice();
  let index = 0;


  if(newArr[0] === num) return 0;

  function helper(a){
    let arrHalf = Math.floor(a.length/2)

    if(a.length ===1 ){
      index = -1;
      return;
    }

    if(a[arrHalf] === num){
       index += arrHalf;
       return;
    }
    if(a[arrHalf+1] === num){
       index += arrHalf+1;
       return;
    }
    if(a[arrHalf] > num){
       a = a.slice(0, arrHalf);
    }

    if(a[arrHalf] < num){
       index += arrHalf;
       a = a.slice(arrHalf);
    }

    helper(a)
  }
  helper(newArr)
  return index
}


var obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}
var answer = {
  num: "1",
  test: [],
  data: {
    val: "4",
    info: {
      isRight: true,
      random: "66"
    }
  }
}

function stringifyNumbers(obj){
  if(Array.isArray(obj)){
    var arr = [];
    for(let val of obj){
      arr.push(stringifyNumbers(val))
    }
  } else if (typeof obj === 'object'){
    var newObj = {};
    for(let prop in obj){
      newObj[prop] = stringifyNumbers(obj[prop])
      newObj;
    }
  } else if (Number.isFinite(obj)){
    return obj.toString()
  } else {
    return obj
  }

  return newObj || arr;
}

//Mutual Recursion
function F(n) { }

function M(n) { }

