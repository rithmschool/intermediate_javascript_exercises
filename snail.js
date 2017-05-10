function snail(nestedArr) {
	let solutionArr = [];

	while (nestedArr) {
		if (nestedArr) {
			solutionArr = solutionArr.concat(nestedArr[0].splice(0));
		}	
		if (nestedArr) {
			for (let i = 1; i < nestedArr.length; i++) {
				solutionArr.push(...nestedArr[i].splice(nestedArr[i].length-1, 1))
			}
		}
		if (nestedArr) {
			for (let j = nestedArr[nestedArr.length-2].length; j >= 0; j--) {
				solutionArr.push(...nestedArr[nestedArr.length-1].splice(j, 1))
			}
		}
		if (nestedArr) {
			for (let k = nestedArr[nestedArr.length-2]; k > 0; k--) {
				solutionArr.push(...nestedArr[k].splice(0, 1))
			}
		}
	}
	return solutionArr;
}