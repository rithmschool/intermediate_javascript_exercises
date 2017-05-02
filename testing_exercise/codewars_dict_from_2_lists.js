function createDict(keys, values) {
	var newDict = {};
	for(i=0; i<keys.length; i++) {
		if(values[i] === undefined) {
			values[i] = null;
		}
		newDict[keys[i]] = values[i];
	}
	return newDict;
}







// https://www.codewars.com/kata/5533c2a50c4fea6832000101