function productOfArray(arr){
	if(arr.length === 0) return 1;
	return productOfArray(arr.slice(1)) * arr[0];
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


function replicate(times, number) {
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

function replicate2(times, number) {
  if(times === 0){
    return [];
  }
  
  times--

  return replicate2(times, number).concat(number);

  // return replicate2(times--, number).concat(number); 
  //I get a stack overflow when using 'times--'' in the recursion. Why is that?
}

function search(arr, num, i=0){

  if(arr[0] === num)	return i;
  if(arr.length === 0) return -1;
 
  i++
  
  return search(arr.slice(1), num, i)
}

//Bineary search mush be sorted.
function binarySearch(arr, num){
  //assume sorted array with postive integers and no repeating numbers
 	newArr = arr.slice(0,num)
  let index = 0;

  function helper(a){

	  if(a.length === 0){
	     return -1;
	  }
	  //Check if index value equals num, return index
	  //Divide arr in half.
	  //If the element in the middile of array is greater than num 
	  		//divide the upper array by half
	  		//else divide the lower array by half.
	}

	helper(newArr)

}

binarySearch([1,2,4,6,10,20,22,25,28,30],6)

