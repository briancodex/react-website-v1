"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helpers = require("./helpers");

var defaults = {
  timeout: 4500,
  interval: 50
};
/**
 * Waits for the expectation to pass and returns a Promise
 *
 * @param  expectation  Function  Expectation that has to complete without throwing
 * @param  timeout  Number  Maximum wait interval, 4500ms by default
 * @param  interval  Number  Wait-between-retries interval, 50ms by default
 * @return  Promise  Promise to return a callback result
 */

var waitForExpect = function waitForExpect(expectation) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaults.timeout;
  var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaults.interval;
  var setTimeout = (0, _helpers.getSetTimeoutFn)(); // eslint-disable-next-line no-param-reassign

  if (interval < 1) interval = 1;
  var maxTries = Math.ceil(timeout / interval);
  var tries = 0;
  return new Promise(function (resolve, reject) {
    var rejectOrRerun = function rejectOrRerun(error) {
      if (tries > maxTries) {
        reject(error);
        return;
      } // eslint-disable-next-line no-use-before-define


      setTimeout(runExpectation, interval);
    };

    function runExpectation() {
      tries += 1;

      try {
        Promise.resolve(expectation()).then(function () {
          return resolve();
        }).catch(rejectOrRerun);
      } catch (error) {
        rejectOrRerun(error);
      }
    }

    setTimeout(runExpectation, 0);
  });
};

waitForExpect.defaults = defaults;
var _default = waitForExpect;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;