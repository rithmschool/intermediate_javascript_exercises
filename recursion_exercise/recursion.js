function productOfArray(array){
	//base case
	if(array.length === 0){
		return 1
	}
	//different input
	return array[0] * productOfArray(array.slice(1))
}
//input: object
//output: true/false if object contains value

function contains(obj, value){
	for(var key in obj){
	  if(obj[key] === value){
             return true;
      } 
      if(typeof obj[key] === "object"){
           if(contains(obj[key], value) === true){
               return true
	  	}
	  }
	}
	return false;
}

function collectStrings(obj){
    var array =[];
    function helper(obj){
       for(var key in obj){
           if(typeof(obj[key]) === "string"){
               array.push(obj[key]);
           } else (
                helper(obj[key])
           )

       }
    }

    helper(obj);
    return array;
}

function search(array, lookFor){
    var index = 0;
    var originalLength = array.length;
    function helper(array,lookFor){
        //base case
          if(index === originalLength){
               index = -1
               return;
          }

          if(array[0] === lookFor){
                return;
          } 
          index+=1
          helper(array.slice(1), lookFor);
    }
    helper(array,lookFor);
    return index;
}

//not recursive
// function binarySearch(array, searchElement) {
//     var minIndex = 0;
//     var maxIndex = array.length - 1;
//     var currentIndex;
//     var current;

//     while (minIndex <= maxIndex) {
//         currentIndex = (minIndex + maxIndex) / 2 | 0;
//         current = array[currentIndex];

//         if (current < searchElement) {
//             minIndex = currentIndex + 1;
//         }
//         else if (current > searchElement) {
//             maxIndex = currentIndex - 1;
//         }
//         else {
//             return currentIndex;
//         }
//     }

//     return -1;
// }

//recursive
function binarySearch(array, searchElement) {
    var minIndex = 0;
    var maxIndex = array.length - 1;
    var currentIndex = (minIndex + maxIndex) / 2 | 0;
    var currentNumber = array[currentIndex];
      
    if (currentNumber < searchElement) {
        minIndex = currentIndex + 1;
        binarySearch(array.slice(minIndex), searchElement)

    }

    if (currentNumber > searchElement) {
        maxIndex = currentIndex - 1;
        binarySearch(array.slice(0, maxIndex), searchElement)
    }
  
    if (currentNumber === searchElement) {
        return currentIndex;
    }
    // } else {
    //     return -1;
    // }
}

binarySearch([1,2,3,4,5,6,7],6)
//5
