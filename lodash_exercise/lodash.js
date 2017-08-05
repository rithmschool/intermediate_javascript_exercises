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

function cloneDeep(obj,answer={}){
   
    for(var key in obj){
        //if array
        if(typeof obj[key] === 'array'){
            var array = obj[key];
            var newArray = [];
            for(var i =0; i < array.length; i++){
                newArray.push(array[i]);
            }
            answer.push(newArray);
        }
        //if object
        if(typeof obj[key] === 'object'){
            deepClone(obj[key],answer);
        } 

        //base case, position is not obj or array
        else {
            answer[key] = obj[key];
            return;
        }
    }
    return answer;
}


function sumBy(obj,cb){
    var sum = 0;

    if(typeof cb === 'function'){
        for(var i=0; i < obj.length; i++){
            var resultOfFunction = cb(obj[i]);
            sum += resultOfFunction;
        };
    };
    
//does this require recursion??
    if(typeof cb === 'string'){
        for(var val of obj){
             if(obj[val] === cb){
                sum += obj[val]
             }
        }
    };
    return sum;
}


function inRange(a,b,c){
    var min = b;
    var max = c;
    if(arguments.length === 2){
        max = b;
        min = 0;
    }
    if(arguments[1] > arguments[2]){
        max = b;
        min = c;
    }
    if((a < max) && (a > min)){
        return true;
    }
    return false;
}

function has(object,path){

    for(var key in object){
        if(object.hasOwnProperty(key)){
            return true;
        } else {
            has(object,path)
        }
    }
    return false;
}

function omit(object,pathsArray){
    var answer = {}
    for(var j=0; j <pathsArray.length; j++){
        currentKey = pathsArray[j];  
        for(var key in object){
            if(object.hasOwnProperty(currentKey) === true){
                delete object[currentKey];
            }
        }
    };
    return object;
}

function pick(object,pathsArray){
    var answer = {}
    for(var j=0; j <pathsArray.length; j++){
        currentKey = pathsArray[j];  
        for(var key in object){
            if(object.hasOwnProperty(currentKey) === true){
                answer[currentKey] = object[currentKey];
            }
        }
    };
    return answer;
    
}

function pickBy(object,fn){
    var answer = {}
   
    for (var key in object) {
        if(fn(object[key]) === true){
            answer[key] = object[key];
        } 
    }
    return answer;    
}

function omitBy(object,fn){
    var answer = {}
   
    for (var key in object) {
        if(fn(object[key]) !== true){
            answer[key] = object[key];
        } 
    }

    return answer;    
}


function padEnd(string,length=0,chars=" "){
    if(length === 0){
        return string
    } else {
        for(var i = 1; string.length <= length-1; i++){
            string += chars;
        }
        return string
    }
}

function repeat(string,n=1){
    answer = ""
    if(n===0){
        return '';
    } else {
        for(var i = 0; i <= n; i++){
            answer += string
        }
    }
    return answer;

}

function upperFirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function flatten(array){
    var answer = [];
    for(var i = 0; i < array.length; i++){
        var currentPosition = array[i]
        if(typeof currentPosition === 'number'){
            answer.push(array[i]);
        }
        if(typeof currentPosition === 'object'){
            for(var j = 0; j < currentPosition.length; j++){
                answer.push(currentPosition[j]);
            }
        }
    }
    return answer;
}

function zip(){

}

function unzip(){

}

function flip(){

}

function flattenDeep(array, answer=[]){
    for(var i = 0; i < array.length; i++){
        var currentPosition = array[i]
        if(typeof currentPosition === 'number'){
            answer.push(array[i]);
        }
        if(typeof currentPosition === 'object'){
            //for(var j = 0; j < currentPosition.length; j++){
                answer.push(currentPosition)
                flattenDeep(array,answer)
           // }
        }
    }
    return answer;
}
