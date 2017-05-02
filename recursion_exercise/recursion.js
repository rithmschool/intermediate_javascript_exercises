function productOfArray(arr) {
    if(arr.length === 1) return arr[0]
    return arr[0] * productOfArray(arr.slice(1))
}


function collectStrings(obj) {
    var newArr = [];

    function collectStringsHelper(obj) {
        for(var i=0; i<Object.keys(obj).length; i++) {
            if(typeof obj[Object.keys(obj)[i]] == 'string')
                newArr.push(obj[Object.keys(obj)[i]]);
            else {
                return collectStringsHelper(obj[Object.keys(obj)[i]]);
            }
        }
    }

    collectStringsHelper(obj)

    return newArr;
}


function contains(obj, value) {
    var result = false;

    function containsHelper(obj, value) {
        for(var key in obj) {
            if(typeof obj[key] !== 'object') {
                if(obj[key] === value) {
                    return true;
                }
            } else {
                contains(obj[key], value);
            }    
        }
    }

    containsHelper(obj, value);
    return result;
}


function search(arr, val) {
    var i = 0

    function searchHelper(arr, val) {
        if(arr.length < 1) {
            i = -1;
            return;
        } 
        if(arr[0]===val) {
            return;
        }
        i += 1;
        searchHelper(arr.slice(1), val);
    }

   searchHelper(arr, val);
   return i;
}