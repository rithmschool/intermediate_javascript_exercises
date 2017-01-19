function drop(arr, n) {
    if (n === undefined) {n = 1};
    return arr.slice(n);
}

function fromPairs(pairs) { 
    obj = {};
    pairs.forEach(function (val) {
        obj[val[0]] = val[1];
    });
    return obj;
};

function head(arr){
	return arr[0];
}

function take(arr, n) {
    if (n === undefined) {n = 1};
    return arr.slice(0, n);
}

function takeRight(arr, n) {
    if (n === undefined) {n = 1};
    if (n === 0) {return []}
    return arr.slice(-n);
}

function takeWhile (arr, callback) {
    return arr.filter(callback)
};


function union (arrays) {
    var args = Array.from(arguments);
    uniq = [];
    args.forEach(function(x) {
        x.forEach(function(y) {
            if (!uniq.includes(y)) {
                uniq.push(y);
            }
        })
    })
return uniq;
}

function zip (arr) {
    var arr = Array.from(arguments);
    var ans = [];
    var leng = 3;
    arr.forEach(function (x) {
        if (x.length < leng) {
            leng = x.length;
        }
    })
    arr.forEach(function (val1, idx1) {
        val1.forEach(function (val2, idx2) {
            if (ans[idx2] === undefined) {
                ans[idx2] = [];
            } 
            ans[idx2].push(val2);
        })
    });
    for (i = 0; i < ans.length; i++) {
        while (leng >= ans[i].length) {
            ans[i].push(undefined);
        }
    }
    return ans;
};


function unzip (arr) {
    //loop through intial set of arrays
    //at each input, send the 1st,2nd,3rd,nth element to 
    //corr ans arr.

var ansArr = [];
var args = Array.from(arguments);
args.forEach(function (val, idx) {
    val.forEach(function (val2, idx2) {
        if (ansArr[idx2] === undefined) {
            ansArr[idx2] = [];
        }
        ansArr[idx2].push(val2);
    })
})
return ansArr;


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