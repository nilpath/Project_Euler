var sys = require('sys');

var primeNumber = (process.argv[2] === undefined) ? 13195 : process.argv[2];

sys.puts(primeNumber);

var factors = [];
var primes = [1];

var search = 1;
var factorSum = 1;
while(factorSum < primeNumber) {
	
	isPrime = true;
	primes.forEach(function(p) {
		if(p === 1){ return; }
		if(search % p === 0) {
			isPrime = false;
		}
	});
	if(isPrime) {
		primes.push(search);
		if(primeNumber % search === 0) {
			factors.push(search);
			factorSum = factorSum * search;
		}
	}
	search++;
}

sys.puts(factors);
