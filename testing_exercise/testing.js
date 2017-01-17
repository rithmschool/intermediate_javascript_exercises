function replaceWith(str,rep,ltr){
	return str.replace(rep,ltr);
}

function expand(array, num){
    var newArray = [];
    for(var i = 0; i < num; i++){
        newArray = newArray.concat(array);
    }
    return newArray;
}

function acceptNumbersOnly(){
  for(var i=0;i<arguments.length;i++){
    if (isNaN(arguments[i])){
      return false;
    }
  }return true;
}

function mergeArrays(x,y){
	return x.concat(y).sort();
}

function mergeObjects(obj1, obj2){
	return {
		name: "Foo",
		test: "thing",
		num: 55
	}
}