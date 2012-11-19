var sys = require('sys');

var numberToFind = process.argv[2] === undefined ? 6 : parseInt(process.argv[2]);

var primes = [2];
var current = 3;

while(primes.length !==  numberToFind) {
	var isPrime = true;
	
	for(var i = 0; i < primes.length; i++) {
		if(current % primes[i] === 0){
			isPrime = false;
			break;
		}
	}
	
	if(isPrime) {
		primes.push(current);
	}
	
	current+=2;
}

sys.puts(primes[primes.length-1]);
