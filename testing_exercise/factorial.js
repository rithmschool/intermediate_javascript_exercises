//write a function called countdown
    //this function accepts 1 param, a num
    //it will console.log that number subtract by 1
    //until we reach 0

countDown(5)

//5
//4
//3
//2
//1

function countDown(num) {
    if(num==0) {
        return;
    }
    console.log(num);
//     num -= 1
    countDown(num-1);
}

////

function factorial(num) {
	if(num===1) {
		return 1;
	}
	return num * factorial(num - 1)
}

////

function range(num) {
	if(num==1) {
		return 1;
	}
	return num + range(num-1);
}

////

function power(num, ex) {
	if(ex == 0) return 1;
	return num * power(num, ex-1);
}

// num**ex;
// Math.pow(num, ex);

function fib() {
	if(n <= 2) {
		return 1;
	}
	return fib(n-1) + fib(n-2);
}

// Fib is terribly inefficient!! f(5) should not be recalculated in the whole tree


// this is not Recursive...
function reversed() {
	reversedString = "";
	var newStr = "";
	for (var i = 0; i<=str.length; i ++) {
		newStr += str.substring(str.length-i, str.length-i-1);
	}
	return newStr;
}

//with Recursion:
str = "Elie"

function reverse(str) {
	if(str.length <= 1) {
		return str
	}
	return reverse(str.slice(1)) + str[0]
}

-->
// reverse('lie') + 'E'
// reverse('ie') + 'lE'
// reverse('e') + 'ilE'

//

function isPalindrome(str) {
	if(str.length == 2) return str[0] === str[1];
	if(str.length < 2) return true;
	if(str[0] === str[str.length-1]) {
		return isPalindrome(str.slice(1, -1));
	}
	return false;
}

//

function lessThanThree(num) {
    if(num < 3) return true;
}

function every(arr, callback) {
    if(arr.length === 1) return callback(arr[0]);
    if(callback(arr[arr.length-1])) {
        return every(arr.slice(0, -1), callback)
    };
    return false;
}

every([1,2,3], lessThanThree)  // --> false
every([1,2,2,1,0], lessThanThree)  // --> true

//


