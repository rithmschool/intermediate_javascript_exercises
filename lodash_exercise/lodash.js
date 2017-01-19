function drop(arr,n){
    if(n === undefined){n=1}
    return arr.slice(n);
}

function fromPairs(arr){
    var obj = {};
    arr.forEach(function(x){
       obj[x[0]] = x[1]; 
    });
    
    return obj;
}

function head(arr){
	return arr[0];
}

function take(arr,n){
    if(n === undefined){
        return arr.slice(0,1)
    }else{
        return arr.slice(0,n)
    }
}

function takeRight(arr,n){
    if(n === undefined){
        return arr.slice(arr.length-1);
    }else if(n<arr.length){
        return arr.slice(arr.length-n);
    }else {
        return arr
    }
}

function takeWhile(arr,callback){
    return arr.filter(function(x){
        return callback(x);
    })
}

function union(arr,add){
    var newArr = arr.concat(add)
    var finalArr = [];

    newArr.forEach(function(val){
        if(!finalArr.includes(val)){
            finalArr.push(val)
        }
    })
    return finalArr;
}

function zip(){

}

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