function drop(arr,num){
    if(num === undefined){
        return arr.slice(1);
    }
    return arr.slice(num);
}

function fromPairs(nestedArr){
    var obj = {};
    for(var i = 0; i < nestedArr.length; i++){
        obj[nestedArr[i][0]] = nestedArr[i][1]
    }
    return obj;
}

function head(arr){
    return arr[0];
}

function take(arr, n){
    if(n === 0){
        return [];
    }
    if(n >= arr.length){
        return arr.slice()
    }
    if(n < arr.length){
        return arr.slice(0,n)
    }
    return arr.slice(0,1)
}

function takeRight(arr, n){
    if(n === 0){
        return [];
    }
    if(n >= arr.length){
        return arr.slice()
    }
    if(n < arr.length){
        return arr.slice(-n)
    }
    return arr.slice(-1)
}

function takeWhile(arr,cb){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr;
}

function union(){
    var newArr = [];
    for(var i = 0; i < arguments.length; i++){
        for(var j = 0; j < arguments[i].length; j++){
            if(newArr.indexOf(arguments[i][j]) === -1){
                newArr.push(arguments[i][j])
            }
        }
    }
    return newArr;
}

function zip(){
    var zippedArr = [];
    var args = arguments;

    function calculateNumberOfArrays(){
        var maxLen = 0;
        for(var i = 0; i < args.length; i++){
            if(args[i].length > maxLen){
                maxLen = args[i].length;
            }
        }
        return maxLen;
    }

    var zipLength = args.length;
    var numArrays = calculateNumberOfArrays();
    for(var i = 0; i < numArrays; i++){
        var newArr = [];
        for(var j = 0; j < zipLength; j++){
            newArr.push(arguments[j][i]);
        }
        zippedArr.push(newArr);
    }

    return zippedArr;
}

function unzip(){
    var unZippedArr = [];
    var args = arguments;

    function calculateNumberOfArrays(){
        var maxLen = 0;
        for(var i = 0; i < args.length; i++){
            if(args[i][i].length > maxLen){
                maxLen = args[i][i].length;
            }
        }
        return maxLen;
    }
    var zipLength = args[0].length;
    var numArrays = calculateNumberOfArrays();
    for(var i = 0; i < numArrays; i++){
        var newArr = [];
        for(var j = 0; j < zipLength; j++){
            newArr.push(arguments[0][j][i]);
        }
        unZippedArr.push(newArr);
    }

    return unZippedArr;
}

function zipObject(){
    var obj = {};
    for(var i = 0; i < arguments[0].length; i++){
        obj[arguments[0][i]] = arguments[1][i]
    }
    return obj;
}

function includes(item,val,startIdx){

    if(!Array.isArray(item) && typeof item !== 'string'){
        for(key in item){
            if(val === item[key]){
                return true
            }
        }
        return false;
    }

    if(startIdx === undefined){
        return item.indexOf(val) > -1
    }

    return item.slice(startIdx).indexOf(val) > -1
}

function sample(arr){
    return arr[Math.floor(Math.random()*arr.length)]
}

function flip(fn){
    return function(){
        var reversedArgs = [];
        for(var i = arguments.length-1; i >= 0; i--){
            reversedArgs.push(arguments[i])
        }
        return fn(...reversedArgs)
    }
}

function cloneDeep(item){
    if(Array.isArray(item)){
        var newArr = [];
        for(var i = 0; i < item.length; i++){
            newArr.push(Object.assign({}, item[i]))
        }
        return newArr;
    }
    return Object.assign({}, item)
}

function sumBy(arr,cbOrKey){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(typeof cbOrKey === 'function'){
            count+= cbOrKey(arr[i])
        } else {
            count+= arr[i][cbOrKey]
        }

    }

    return count;
}

function inRange(num,start,end){
    if(arguments.length === 2){
        end = arguments[1]
        start = 0
    }
    var isNegative = Math.sign(num) === 1 ? false : true
    return isNegative ? num <= start && num > end ? true : false : num >= start && num < end ? true : false
}

function has(object, val){

    function collectKeys(obj){
        var keysArr = [];
        for(var key in obj){
            if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
                keysArr.push(key);
                keysArr = keysArr.concat(collectKeys(obj[key]));
            } else {
                keysArr.push(key);
            }
        }
        return keysArr;
    }

    function compareArrays(a1, a2){
        for(var i = 0; i<a1.length; i++){
            if(a1[i] !== a2[i]){
                return false;
            }
        }
        return true;
    }

    if(Array.isArray(val)){
        return compareArrays(collectKeys(object), val);
    }

    return val in object;
}

function omit(obj, keysToOmit){
    var newObj = {};
    for(var key in obj){
        if(keysToOmit.indexOf(key) === -1 ){
            newObj[key] = obj[key]
        }
    }
    return newObj;
}

function pick(obj, keysToPick){
    var newObj = {};
    for(var key in obj){
        if(keysToPick.indexOf(key) !== -1 ){
            newObj[key] = obj[key]
        }
    }
    return newObj;
}

function pickBy(obj, cb){
    var newObj = {};
    for(var key in obj){
        if(cb(obj[key])){
            newObj[key] = obj[key]
        }
    }
    return newObj;
}

function omitBy(obj, cb){
    var newObj = {};
    for(var key in obj){
        if(!cb(obj[key])){
            newObj[key] = obj[key]
        }
    }
    return newObj;
}

function padEnd(str, num, char){
    if(str.length >= num){
        return str;
    }

    var newStr = '';
    if(char === undefined){
        for(var i = 0; i < num-str.length; i++){
            newStr += ' ';
        }
        return str.concat(newStr);
    }

    for(var i = 0; i < num-str.length; i++){
        newStr += char[i % char.length];
    }
    return str.concat(newStr);
}

function repeat(str, num){
    if(num === 0) {
        return ''
    }
    var newStr = ''
    for(var i = 0; i < num; i++){
        newStr = newStr.concat(str);
    }
    return newStr;
}

function upperFirst(str){
    return str[0].toUpperCase().concat(str.slice(1));
}

function flatten(arr){
    var newArr = [];
    for(var i = 0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            newArr = newArr.concat(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function flattenDeep(arr){
    var newArr = [];
    for(var i = 0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            newArr = newArr.concat(flattenDeep(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

