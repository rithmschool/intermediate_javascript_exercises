//	1.
function productOfArray(array){
    if(array.length === 0){
        return 1;
    }
    return array.shift() * productOfArray(array);
}

//	2.
function collectStrings(obj){
    var newArray = [];

    function collectStringsHelper(obj){
        for(var key in obj){
            if(typeof obj[key] === "object"){
                return collectStringsHelper(obj[key]);
            }else{
                if(typeof obj[key] === "string"){
                    newArray.push(obj[key])
                }
            }
        }
    }
    collectStringsHelper(obj);
    return newArray
}

//	3.
function contains(nestedObject, value){
    
    function containsHelper(nestedObject, value){
        for(var key in nestedObject){
            if(typeof nestedObject[key] === "object"){
                return containsHelper(nestedObject[key], value);
            }else{
                return nestedObject[key] === value;
            }
        }
    }
    return containsHelper(nestedObject, value);
}