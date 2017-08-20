function drop(arr, num=1){
  let result = [];

  for(let i =num; i < arr.length; i++){
    result.push(arr[i]);
  }

  return result;
}

function fromPairs(arr){
 return arr.reduce((acc, el) => {
   acc[el[0]] = el[1];

   return acc;
 }, {})

 // let result = {};
 // for(let i = 0; i < arr.length; i++){
 //    result[arr[i][0]] = arr[i][1];
 // }

 // return result;
}

function head(arr){
  return arr[0];
}

function take(arr, num=1){
  arr = arr.slice();
  arr.length = num;
  return arr;
}

function takeRight(arr, num=1){
  let result = [];

  if(num > arr.length) return arr;
  for(let i = arr.length-num; i < arr.length; i++){
    result.push(arr[i]);
  }

  return result;
}


function union(...a){

  return  a.reduce((acc, el)=>{
            return acc.concat(el);
          },[])
          .reduce((acc, el)=>{
            if(!acc.includes(el)){
              acc.push(el)
            }
            return acc;
          },[])
  // let result = [];

  // let argC = [];
  // let arg = arguments;

  // for(let i = 0; i < arg.length; i++){
  //  argC = argC.concat(arg[i])
  // }

  // for(let i = 0; i < argC.length; i++){
  //  if(result.indexOf(argC[i]) === -1)
  //    result.push(argC[i])
  // }

  // return result;
}

function zipObject(arr1, arr2){

  return arr1.reduce((acc, el, i) =>{
           acc[el] = arr2[i]
           return acc;
        },{})

  // let result = {};
  // for(let i = 0; i <arr1.length; i++){
  //  result[arr1[i]] = arr2[i];
  // }
  // return result;
}

function includes(item, num){

  if(arguments.length > 2) return false

  if(item instanceof Object){
    for(let prop in item){
      if(item[prop] === num) return true
    }
  }

  if(item.indexOf(num) > -1){
    return true
  }
  return false
}

function sample(arr){
  return arr[Math.floor(Math.random() * arr.length)]
}


function cloneDeep(obj){
  if(Array.isArray(obj)){
    var arr = [];
    for(let val of obj){
      arr.push(cloneDeep(val))
    }
  } else if (typeof obj === 'object'){
    var newObj = {};
    for(let prop in obj){
      newObj[prop] = cloneDeep(obj[prop])
    }
  } else {
    return obj
  }

  return newObj || arr;
}

function sumBy(arr, fnStr ){
  let sum =0;

  for(let el of arr){
    sum += el[fnStr] || fnStr(el);
  }
  return sum;
}

function inRange(num, start, end=0){
  let min = Math.min(start, end),
      max = Math.max(start, end);

  return num > min && num < max;
}


function has(obj, search){
  searchArr = typeof search === 'string' ? search.split('.'): search;
  let index = -1,
      result = true;


  function iterator(o){
    index++

    if(searchArr.length-1 === index && o[searchArr[index]]) return;

    if(typeof o[searchArr[index]] === 'object'){
       iterator(o[searchArr[index]])
    } else {
      result = false;
      return
    }
  }

  iterator(obj)
  return result;
}

function omit(obj, arr){
  let result = {};

  for(let prop in obj){
    if(arr.indexOf(prop) === -1){
      result[prop] = obj[prop];
    }
  }
  return result;
}


function pick(obj, arr){
  let result = {};

  for(let prop in obj){
    if(arr.includes(prop)){
      result[prop] = obj[prop];
    }
  }
  return result;
}

function pickBy(obj, callBack){
  let result = {};

  for(let prop in obj){
    if(callBack(obj[prop])){
      result[prop] = obj[prop];
    }
  }
  return result;

}

function omitBy(obj, callBack){
  let result = {};

  for(let prop in obj){
    if(!callBack(obj[prop])){
      result[prop] = obj[prop];
    }
  }
  return result;

}

function padEnd(str, num, repeatChars = ' '){
  let strLng = str.length,
      result = str;

  if(strLng-1 < num){
    for(let i= 0; i < num-strLng; i++){
      result += repeatChars[i % repeatChars.length]
    }
  }


  // if(strLng-1 >= num) return str;
  // let xRepeat = Math.ceil((num-strLng)/repeatChars.length);

  // return (str+repeatChars
  //          .repeat(xRepeat))
  //          .substring(0, num);
  // return (str+Array(xRepeat+1)
  //          .join(repeatChars))
  //          .substring(0, num);

  return result;
}

function repeat(str, num){
  let strLng = str.length,
      result = '';

  if(num > 0){
    for(let i= 0; i < num; i++){
      result += str;
    }
  }

  return result;
}

function upperFirst(str){
  return str[0].toUpperCase()+str.slice(1);
}



function flatten(arr){
  return arr.reduce((acc, el) =>{
     return acc.concat(el)
  }, [])
}



function zip(...arr){
  let result = [],
      longestArrayLength = -1;

  function helper(a, counter){
    let currentArr =[];
    if(longestArrayLength === counter) return

    for(let i = 0; i < a.length; i++){
       if(counter === 0 && a[i].length > longestArrayLength)
        longestArrayLength = a[i].length;

       currentArr.push(a[i][counter])
    }
    result.push(currentArr)
    helper(a, ++counter)
  }

  helper(arr,0)
  return result;
}



function unzip(arr){
  let result = [];

  function helper(a, counter){
    if(counter === arr.length) return

    for(let i = 0; i < a[counter].length; i++){
      if(a[counter].length > result.length)
        result.push(Array(a.length))

        result[i][counter] = a[counter][i];
    }
    helper(a, ++counter)
  }

  helper(arr, 0)
  return result;
}


function flip(fn){
  let reverseElements =[];

  return function (...a){
      for(let i = a.length-1; i >= 0 ; i--){
        reverseElements.push(a[i])
      }

      return fn(...reverseElements)
  }

}


function flattenDeep(a, result=[]) {
  if(Array.isArray(a)){
    for(let val of a){
      flattenDeep(val, result)
    }
  } else {
     result.push(a)
  }
  return result;
}










