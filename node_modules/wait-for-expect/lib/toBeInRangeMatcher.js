"use strict";

/* eslint-env jest */
// XXX Not sure how to make eslint not to complain here, but looks like this
// declaration works, so leaving it for now
function toBeInRange(received, _ref) {
  var min = _ref.min,
      max = _ref.max;
  var pass = received >= min && received <= max;

  if (pass) {
    return {
      message: function message() {
        return "expected ".concat(received, " < ").concat(min, " or ").concat(max, " < ").concat(received);
      },
      pass: true
    };
  }

  return {
    message: function message() {
      return "expected ".concat(min, " >= ").concat(received, " >= ").concat(max);
    },
    pass: false
  };
}

expect.extend({
  toBeInRange: toBeInRange
});