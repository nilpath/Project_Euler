var sys = require('sys');
var calcFactors = require('./primefactors.js');

var bigNumber = (process.argv[2] === undefined) ? 13195 : process.argv[2];

sys.puts(bigNumber);

factors = calcFactors.calcPrimeFactors(bigNumber);

sys.puts(factors);
