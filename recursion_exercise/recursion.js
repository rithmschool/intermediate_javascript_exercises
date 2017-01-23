
function productOfArray(arr) {
 if (arr.length === 1 ) {return arr[0];}

 return arr.shift() * productOfArray(arr)

};

function collectStrings(obj) {
    var newArr = [];

    function helper(obj) {
        for (var key in obj) {
            if (typeof(obj[key]) === "string") {
                newArr.push(obj[key]);
            } 
            if (typeof(obj[key]) === "object") {
                return helper(obj[key])
            }
        }
    };

    helper(obj);
    
    return newArr;
};

function contains(obj, searchTerm) {

        for (var key in obj) {
            if ((obj[key]) === searchTerm) {
                return true;
            } 
            if (typeof(obj[key]) === "object") {
                return contains(obj[key], searchTerm)
            }
        }
       return false;
};

