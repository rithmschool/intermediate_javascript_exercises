// function productOfArray(arr){
// 	var product = 1;
// 	for(var i = 0; i < arr.length; i++){
// 		product = product*arr[i]
// 	}

// 	return product;

// }

function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr.pop() * productOfArray(arr);

}

function collectStrings(object) {
    var strings = [];

    function combineStrings(object) {
        for (var key in object) {
            if (typeof(object[key]) === "string") {
                strings.push(object[key])
            } else if (typeof(object[key]) === "object") {
                return combineStrings(object[key]);
            }
        }
    }

    combineStrings(object);

    return strings;
}


// First tried with a helper function, and it didn't work :(
// function contains(object, value) {
//     // function to check objects
//     function checkForValue(object, value) {
//         for (key in object) {
//         	if (object[key] === value) {
//                 return true;
//             }
//             if (typeof(object[key]) === "object") {
//                 return checkForValue(object[key])
//             } 
//         }
//         return false;
//     }

//     // call function
//     checkForValue(object,value)

//     // do we need a final return?
// }


function contains(object, value) {
    for (var key in object) {
        if (object[key] === value) {
            return true;
        }
        if (typeof(object[key]) === "object") {
            return contains(object[key], value);
        }

    }
    return false;
}




function search(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return arr.indexOf(arr[i]);
        }
    }
    return arr.indexOf(value);
}




// CodeWars FUnctions
function realSize(arrays) {
    var arr = [];

    function flattenArray(array) {
        for (var i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                return flattenArray(array[i]);
            } else { arr.push(array[i]) }
        }
    }
    flattenArray(arrays);
    return arr.length;
}



function SumSquares(l) {
    var arr = [];

    function flattenArray(array) {
        for (var i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                return flattenArray(array[i]);
            } else { arr.push(array[i]) }
        }
    }
    flattenArray(arrays);
    var total = 0
    for (var i = 0; i < arr.length; i++) {
        total = total + Math.pow(arr[i], 2)
    }

    return total;

}




function SumSquares(l) {
    var arr = [];
    var total = 0;

    function flattenArray(array) {
        for (var i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                flattenArray(array[i]);
            } else { arr.push(array[i]) }
        }
    }
    flattenArray(l);
    for (var i = 0; i < arr.length; i++) {
        total = total + Math.pow(arr[i], 2)
    }
    return total;
}




function replicate(times, number) {
    var newArr = [];
    function replicateArray(times, number) {
        if (times < 1) {
            return newArr;
        } else {
            newArr.push(number);
            return newArr.concat.replicateArray((times - 1), number);
        }

        replicateArray(times, number);
    }
