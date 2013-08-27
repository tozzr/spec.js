var output = '',
    newline = '<br />',
    passed = 0,
    failed = 0;

exports.addContext = function (context) {
  output += context + newline;
};

exports.addPassed = function (description) {
	passed++;
	output += '<div class="passed">' + description;
	output += '</div>';
};

exports.addFailed = function (description, expectationError) {
	failed++;
	output += '<div class="failed">' + description;
	output += ' (' + expectationError.message + ')</div>';
};

exports.showResults = function () {
	output += '<div class="result ' + (failed > 0 ? 'failed' : 'passed') + '">';
	output += 'total: ' + (passed+failed);
	output += ', passed: ' + passed;
	output += ', failed: ' + failed;
	output += '</div>';
	document.getElementById('result').innerHTML = output;
};
