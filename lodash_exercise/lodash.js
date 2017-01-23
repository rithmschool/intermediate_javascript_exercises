function drop(array, n){
    if(n === undefined){n = 1}
    return array.slice(n);
}

function fromPairs(arrArr){
    var obj = {};
    arrArr.forEach(function(val){
        obj[val[0]] = val[1];
    });
    return obj;
}

function head(array){
    return array.shift();
}

function take(array, n){
    if(n === undefined){n = 1}
    return array.slice(0, n);
}

function takeRight(array, n){
    if(n === undefined){n = 1}
    if(n === 0){return []}
    return array.slice(-n);
}

function takeWhile(array, callback){
    return array.filter(callback)   
}

function union(arrays){
    var unique = [];
    for(var i = 0; i < arguments.length; i++){
        for(var j = 0; j < arguments[i].length; j++){
            if(!unique.includes(arguments[i][j])){
                unique.push(arguments[i][j]);
            } 
        }
    }
    return unique;
}

function zip(arr1, arr2, arr3){
   var length = 0;
   var newArr = [];
   for(var i=0; i<arguments.length; i++){
       var length = Math.max(length, arguments[i].length);
   }
   for(var i=0; i<length; i++){
       var arr = [];
       for(var j=0; j<arguments.length; j++){
           arr.push(arguments[j][i]);
       }
       newArr.push(arr);
   }
   return newArr;
}
zip(['a', 'b'], [1, 2], [true, false]);

function unzip(){

}

function zipObject(){

}

function includes(){

}

function sample(){

}

function flip(){

}

function cloneDeep(){

}

function sumBy(){

}

function inRange(){

}

function has(){

}

function omit(){

}

function pick(){

}

function pickBy(){

}

function omitBy(){

}

function pad(){

}

function repeat(){

}

function upperFirst(str){

}

function flatten(){

}

function flattenDeep(){

}