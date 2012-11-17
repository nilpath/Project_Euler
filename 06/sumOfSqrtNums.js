exports.calc = function(start, stop){
	var sum = 0;
	for(var i = start; i <= stop; i++) {
		iSquared = Math.pow(i, 2);
		sum += iSquared;
	}
	return sum;
};
