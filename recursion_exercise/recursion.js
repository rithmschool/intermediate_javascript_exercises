// 1
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    } else {
        return arr[0] * productOfArray(arr.slice(1));
    }
}

// 2
// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
// var obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }

// collectStrings(obj) // ["foo", "bar", "baz"])

function collectStrings(obj) {
    
    var returnArr = [];

    function helper(obj) {
        for (var key in obj) {
            if (typeof obj[key] === "string") {
                returnArr.push(obj[key]);
            } else if (typeof obj[key] === "object") {
                helper(obj[key]);
            } 
        }   
    }

    helper(obj);
    
    return returnArr;
}

// 3
// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
// var nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44
//                     }
//                 }
//             }
//         }
//     }
// }

// contains(nestedObject, 44) // true
// contains(nestedObject, "foo") // false

function contains (obj, val) {
    var result = false;

    function helper (obj, val) { 
        for (var key in obj) {
            if (obj[key] === val) {
                result = true;
            } else if (typeof obj[key] === "object") {
                result = helper(obj[key], val);
            } else {
                break;
            }
        }
        return result;
    }  
    
    return helper(obj, val);
}

// 4-6
// Complete the following CodeWars problems:

// https://www.codewars.com/kata/the-real-size-of-a-multi-dimensional-array/train/javascript

// submitted

// https://www.codewars.com/kata/sum-squares-of-numbers-in-list-that-may-contain-more-lists/train/javascript

// submitted

// https://www.codewars.com/kata/recursive-replication

// submitted

// 7
// BONUS

// Write a function called search that finds a value in an array and returns the index where the value is at. If the value is not found, the function should return negative 1.

// search([1,2,3,4,5],5) // 4
// search([1,2,3,4,5],15) // -1

function search (arr, val) {
    var flag = false;

    function helper(arr, val) {
        if (arr.length === 0) {
            flag = false;
            return 0;
        } else if (arr[0] === val) {
            flag = true;
            return 0;
        } else {
            return 1 + helper(arr.slice(1), val);
        }
    }

    var result = helper(arr, val);

    if (flag === true) {
        return result;
    } else if (flag === false) {
        return -1;
    }
}

// 8
// Refactor your search function to use a faster algorithm called binary search https://www.youtube.com/watch?v=JQhciTuD3E8.

// binarySearch([1,2,3,4,5],5) // 4
// binarySearch([1,2,3,4,5],15) // -1



// 9
// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

// var obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }

// stringifyNumbers()
// /*/
// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }
// /*/

// 10
// Complete this codewars problem: https://www.codewars.com/kata/mutual-recursion/train/javascript


















