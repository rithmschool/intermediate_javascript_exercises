function addUpTo(n){
    if(n >= 0  && typeof(n) ==="number" && n % 1 === 0){
      var total = 0;
    for(var i = 0; i <= n; i++){
        total += i;
    }
    return total;
    }
    
    return;
}


var arr;
beforeEach(function(){
  arr = [1,3,5];
});



function replaceWith(str, letter, replacement){
    var re = new RegExp(letter,"g");
    var newStr = str.replace(re, replacement);
    return newStr;
}


function expand(arr, num){
    var newArr = [];
    for(var i = 0; i < num; i++){
        newArr.push(arr);
        }
    
    return newArr.reduce(function(acc, next){
        return acc.concat(next);
    });

}


function acceptNumbersOnly(){
   for (var i = 0; i < arguments.length; i++){
     if(!Number.isInteger(arguments[i])){
       return false;
     }
   }
   return true;
 }


function mergeArrays(arr1,arr2){
  var newArr = arr1.concat(arr2);
  return newArr.sort(function(a,b){
    return a - b;
  });
}

var obj1= {
    name: "Foo",
    num: 33
}
var obj2 = {
    test: "thing",
    num: 55
}

function mergeObjects(a,b){
  var newObj = {};
  for(var key in a){
    newObj[key] = a[key];
  }
  
  for(var bkey in b){
    newObj[bkey] = b[bkey];
  }
  
  return newObj;
}