//1
function productOfArray(arr){
    return arr.length === 0? 1: arr.pop() * productOfArray(arr);
}
//2
function collectStrings(arr){
    var newArr = [];

    function flattenHelper(arr){
       for(var key in arr){
            if(typeof(arr[key])==="string"){
                newArr.push(arr[key])
            } else{
                return flattenHelper(arr[key])
            }
       }
    } flattenHelper(arr)

    return newArr;
}

//3
function contains(obj,val){
    for(var key in obj){
        if(obj[key] === val){
            return true
        }else if(typeof(obj[key]) === "object"){
            return contains(obj[key],val);
        }
    }return false
}