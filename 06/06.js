var sumSquared = require('./squareOfSum.js');
var sumOfsqrtNums = require('./sumOfSqrtNums.js');
var sys = require('sys');

var low = process.argv[2] === undefined ? 1 : process.argv[2];
var high = process.argv[3] === undefined ? 10 : process.argv[3];

var sum1 = sumSquared.calc(low,high);
var sum2 = sumOfsqrtNums.calc(low,high);

sys.puts(sum1 - sum2);
