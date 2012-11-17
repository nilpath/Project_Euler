var sys = require('sys');
var primer = require('./primefactors.js');

var lowInRange = (process.argv[2] === undefined ) ? 1 : process.argv[2];
var highInRange = (process.argv[3] === undefined ) ? 10 : process.argv[3];

var sum = 1;
var primes = null;


for(var i = lowInRange; i <= highInRange; i++) {
	if(i === 1) {
		sum*=1;
		continue;
	}

	var factors = primer.calcPrimeFactors(i);
	if(primes === null) {
		primes = factors;
		continue;
	}

	var t = i;
	primes.forEach(function(p) {
		if (t % p === 0) {
			t = t / p;
		}
	});
	if(t !== 1) {
		var diff = primer.calcPrimeFactors(t);
		diff.forEach(function(d){
			primes.push(d);
		});
	}

}

primes.forEach(function(p){
	sum *= p;
});

sys.puts(sum);
