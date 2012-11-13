var sys = require('sys');

var top = (process.argv[2] === undefined) ? 1000 : process.argv[2];

sys.puts('finding the sum of all the multiples of 3 and 5 under ' + top);

sum = 0;
for(var i=0; i < top; i++) {
	if( i%3 === 0 || i%5 === 0) {
		sum += i;
	}
}

sys.puts(sum);
