function ExpectationError(message) {
  this.message = message;
}

var Matcher = function (operation, expected) {
  this.operation = operation;
  this.expected = expected;
};

Matcher.prototype.matches = function (actual) {
  if (this.evaluate(actual)) {
    return;
  }
  throw new ExpectationError('expected ' + actual + ' ' + this.operation + ' ' + this.expected);
};

Matcher.prototype.evaluate = function (actual) {
  return eval(actual + ' ' + this.operation + ' ' + this.expected);
};

exports.Matcher = Matcher;
