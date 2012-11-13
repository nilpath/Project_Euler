var sys = require('sys');

var lowestNumberInRange = (process.argv[2] === undefined) ? 10 : process.argv[2];
var highestNumberInRange = (process.argv[3] === undefined) ? 99 : process.argv[3];

var highestPalindrom = 0;

var checkIfPalindromic = function(num) {
	numAsString = num.toString();
	stringLength = numAsString.length;
	isPalindromic = true;
	for(var i = 0; i < Math.floor(stringLength/2); i++){
		if(numAsString[i] !== numAsString[stringLength-1-i]) {
			isPalindromic = false;
			break;
		}
	}
	return isPalindromic;
}

for(var x = highestNumberInRange; x >= lowestNumberInRange; x--) {
	for(var y = highestNumberInRange; y >= lowestNumberInRange; y--) {
		var num = y*x;
		if(num < highestPalindrom) {
			break;
		}
		if(checkIfPalindromic(num)) {
			highestPalindrom = num;
		} 
	}
}


sys.puts(highestPalindrom);

