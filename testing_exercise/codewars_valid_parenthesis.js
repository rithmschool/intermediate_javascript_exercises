function validParentheses(string) {
	if(string[0] == ")" || string[string.length-1] == "(") {
		return false;
	}
	
	countLeft = 0;
	countRight = 0;
		
	for(var i=0; i<string.length; i++) {
		if(string[i] == "(") {
			countLeft += 1;
		} else if(string[i] == ")") {
			countRight += 1;
		} else {
			return false;   // if not "(" or ")" character
		}
	}
	if(countLeft === countRight) {
		return true;
	} else {
		return false;
	}
}

// REFACTORED To Be Simpler --

function validParenthesesSimpler(string) {
	var countLeft = 0;
		
	for(var i=0; i<string.length; i++) {
		if(string[i] == "(") {
			countLeft += 1;
		} else if(string[i] == ")") {
			countLeft -= 1;
		}
    	if(countLeft<0) {
			return false;
		}
	}
	return countLeft === 0;
}