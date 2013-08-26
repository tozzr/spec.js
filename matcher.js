function ExpectationError(message) {
  this.message = message;
}

var Matcher = function (operation, expected) {
  this.operation = operation;
  this.expected = expected;
};

Matcher.prototype.matches = function (actual) {
  var result = eval(actual + ' ' + this.operation + ' ' + this.expected);
  if (result) {
    return;
  }
  throw new ExpectationError('expected ' + actual + ' ' + this.operation + ' ' + this.expected);
};

exports.Matcher = Matcher;
