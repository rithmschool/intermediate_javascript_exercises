function replaceWith(entry, replaceChar, withChar) {
	if (entry.indexOf(replaceChar) !== -1) {
		console.log("FOR Loop")
		for (var i=0; i < entry.length; i++)
			if (entry[i] === replaceChar)
				 entry = entry.substr(0, i) + withChar + entry.substr(i + 1, entry.length - 1);
	}
	
	return entry;
}

function expand(arr, num) {
	if (num <=0)
		return arr;

	var nArr = [];
	for(var i=0; i < num; i++)
		for(var j=0; j < arr.length; j++)
			nArr.push(arr[j]);

	return nArr;
}