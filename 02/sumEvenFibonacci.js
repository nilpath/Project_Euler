var sys = require('sys');

var top = (process.argv[2] === undefined ) ? 100 : process.argv[2];
var first = 1;
var second = 2;

var Evenfib = function(last, current, sum, top) {
	if(current % 2 === 0) {
		sum += current;
	}
	next = last + current;

	if ( next > top ) { return sum;}
	else {
		return  Evenfib(current, next, sum, top);
	}
}

res = Evenfib(first, second, 0, top);
sys.puts(res);
