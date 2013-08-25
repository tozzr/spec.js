var logger = require('./HtmlLogger.js');

(function Spec(global, logger){
	Object.prototype.should = function(matcher) {
		matcher.matches(this);
	};

	global.describe= function(context, callback) {
		logger.addContext(context);
		try {
			callback();
		}
		finally {
			logger.showResults();
		}
	};

	global.it = function(description, callback) {
		try {
			callback();
			passed(description);
		}
		catch (expectationError) {
			failed(description, expectationError);
		}
	};

	function passed(description) {
		logger.addPassed(description);
	}

	function failed(description, expectationError) {
		logger.addFailed(description, expectationError); 
	}
})(window, logger);

function ExpectationError(message) {
	this.message = message;
}

function Matcher(operation, expected) {
	this.operation = operation;
	this.expected = expected;
}
Matcher.prototype.matches = function (actual) {
	if (eval(actual + ' ' + this.operation + ' ' + this.expected))
		return;
	throw new ExpectationError('expected ' + actual + ' ' + that.operation + ' ' + this.expected); 
};

function equal(expected) {
	return new Matcher('==', expected);
}

function not_equal(expected) {
	return new Matcher('!=', expected);
}
