function replaceWith(string, char, char1){
	var answer= "";

	for(var i =0; i < string.length; i++){
		if(string[i] === char){
			answer += char1;
		} else {
			answer += string[i]
		}
	}
	return answer;
}

function expand(array,number){
   var answer = [];
   
   for(var i = 0; i < number; i++){
        answer= answer.concat(array);
   }
   return answer;
}


function acceptNumbersOnly(){
    for(var i=0; i<arguments.length; i++){
        if(arguments[i] === NaN){
                return false;
        }
        if(arguments[i] !== Number(arguments[i])){
            return false;
        };
    }
    return true;
}

function mergeArrays(array,array2){
        var answer = array.concat(array2)
        return answer.sort();
}

function mergeObjects(obj, obj2) {
    for (var key in obj2) {
        if (obj2.hasOwnProperty(key)){
			obj[key] = obj2[key];
		};
    }
    return obj;
}