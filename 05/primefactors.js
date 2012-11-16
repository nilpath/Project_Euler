



exports.calcPrimeFactors = function(bigNumber) {
	var factors = [];
	var primes = [2];
	
	var search = 2;
	while( bigNumber != 1) {
		
		isPrime = true;
		primes.forEach(function(p) {
			if(p === 2){ return; }
			if(search % p === 0) {
				isPrime = false;
			}
		});
		if(isPrime) {
			primes.push(search);
			if(bigNumber % search === 0) {
				while(bigNumber % search === 0) {
					factors.push(search);
					bigNumber = bigNumber / search;
				}
			}
		}
		if(search === 2) {
			search++;
			continue;
		} else {
			search+=2;
		}
	}
	
	return factors;
}
