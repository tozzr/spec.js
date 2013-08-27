/*global window */
var logger = require('./lib/HtmlLogger');
var matcher = require('./lib/matcher');

(function Spec(global, logger) {
  Object.prototype.should = function (matcher) {
    matcher.matches(this);
  };
  Object.prototype.should_be = function (matcher) {
    this.should(matcher);
  };

  global.describe = function (context, callback) {
    logger.addContext(context);
    try {
      callback();
    } finally {
      logger.showResults();
    }
  };

  function passed(description) {
    logger.addPassed(description);
  }

  function failed(description, expectationError) {
    logger.addFailed(description, expectationError);
  }

  global.it = function (description, callback) {
    try {
      callback();
      passed(description);
    } catch (expectationError) {
      failed(description, expectationError);
    }
  };

  global.equal = function (expected) {
    return new matcher.Matcher('==', expected);
  };

  global.not_equal = function (expected) {
    return new matcher.Matcher('!=', expected);
  };

  global.lower_than = function (expected) {
    return new matcher.Matcher('<', expected);
  };
}(window, logger));
