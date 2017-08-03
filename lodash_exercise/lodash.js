function drop(array,numberToDrop){
	if(arguments.length === 1){
		return array.slice(1);
	}
    return array.slice(numberToDrop);
}

function fromPairs(array){
    var obj={};
    for(var i=0; i < array.length; i++){
        var innerArray = array[i];
        obj[innerArray[0]] = innerArray[1]
        
    }
    return obj;
}

function head(array){
    return array[0];
}

function take(array,number){
    if(arguments.length === 1){
        return array.slice(0,1);
    }
    return array.slice(0,number)
}

function takeRight(array,number){
    if(number > array.length){
        return array;
    }
    if(number === 0){
        return [];
    }
    if(arguments.length === 1){
        return array.slice(-1);
    } else {
        return array.slice(-number);
    }
}

function union(array1,array2){
    var newArray = array1.concat(array2);
    newArray = newArray.sort(function(a,b){
        return b-a;
    });
    console.log(newArray);
    for(var i =0; i < newArray.length; i++){
        if(newArray[i] === newArray[i+1])
            newArray.splice(i,1)
    }
    return newArray;
}

function zipObject(array1,array2){
    var obj={};
    for(var i=0; i < array1.length; i++){
        obj[array1[i]] = array2[i]
        
    }
    return obj;
}


function includes(thing,findMe){
    //base case
    if(arguments.length > 2){
        return false;
    }
    if(typeof thing === 'object'){
        for(var key in thing){
            if(thing[key] === findMe){
                return true;
            }
        }
    }
    if(typeof thing === 'string' || 'array'){
       if(thing.indexOf(findMe) > 0){
           return true;
       }
    } 
    
    return false;
}


function sample(array){
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function cloneDeep(){

}

function sumBy(obj,cb){
    var sum = 0;
    if(typeof cb === 'string'){
        for(var key in obj){
            if(key === cb){
                sum += obj[key]
            }
        }
    };

    if(typeof cb === 'function'){
        for(var i=0; i < obj.length; i++){
            var resultOfFunction = cb(obj[i]);
            sum += resultOfFunction;
        };
    };
    return sum;
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

function padEnd(){

}

function repeat(){

}

function upperFirst(str){

}

function flatten(){

}

function zip(){

}

function unzip(){

}

function flip(){

}

function flattenDeep(){

}
