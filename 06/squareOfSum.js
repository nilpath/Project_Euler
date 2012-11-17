exports.calc = function(start, stop) {
	i = parseInt(start) + parseInt(stop);
	var sum = (i * stop) / 2;
	return Math.pow(sum,2);
};
