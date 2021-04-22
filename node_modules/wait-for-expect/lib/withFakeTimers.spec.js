"use strict";

require("./toBeInRangeMatcher");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

// this is a copy of "it waits for expectation to pass" modified to use jestFakeTimers and two ways of Date.now mocking
// This breakes when we remove the const { setTimeout, Date: { now } } = typeof window !== "undefined" ? window : global;
// line from the index.ts
beforeEach(function () {
  jest.resetModules();
  jest.restoreAllMocks();
  jest.useRealTimers();
});
test("it always uses real timers even if they were set to fake before importing the module",
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  var importedWaitForExpect, numberToChange, randomTimeout;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          jest.useFakeTimers();
          /* eslint-disable global-require */

          importedWaitForExpect = require("./index");
          jest.useRealTimers();
          numberToChange = 10; // we are using random timeout here to simulate a real-time example
          // of an async operation calling a callback at a non-deterministic time

          randomTimeout = Math.floor(Math.random() * 300);
          setTimeout(function () {
            numberToChange = 100;
          }, randomTimeout);
          jest.useFakeTimers();
          _context.next = 9;
          return importedWaitForExpect(function () {
            expect(numberToChange).toEqual(100);
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}))); // Date.now might be mocked with two main ways:
// via mocking whole Date, or by mocking just Date.now
// hence two test cases covered both ways

test("it works even if the Date was mocked",
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee2() {
  var numberToChange, expectFailingMessage;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          /* eslint-disable no-global-assign */
          // @ts-ignore: Cannot reassign to const Date
          Date = jest.fn(function () {
            return {
              now: function now() {
                return 1482363367071;
              }
            };
          });
          /* eslint-enable */

          numberToChange = 10;
          setTimeout(function () {
            numberToChange = 100;
          }, 100);
          _context2.prev = 3;
          _context2.next = 6;
          return (0, _index.default)(function () {
            expect(numberToChange).toEqual(101);
          }, 1000);

        case 6:
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](3);
          expectFailingMessage = _context2.t0.message;

        case 11:
          expect(expectFailingMessage).toMatch("Expected value to equal:");
          expect(expectFailingMessage).toMatch("101");
          expect(expectFailingMessage).toMatch("Received:");
          expect(expectFailingMessage).toMatch("100");

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, this, [[3, 8]]);
})));
test("it works even if the Date.now was mocked",
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee3() {
  var numberToChange, expectFailingMessage;
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          Date.now = jest.fn(function () {
            return 1482363367071;
          });
          numberToChange = 10;
          setTimeout(function () {
            numberToChange = 100;
          }, 100);
          _context3.prev = 3;
          _context3.next = 6;
          return (0, _index.default)(function () {
            expect(numberToChange).toEqual(101);
          }, 1000);

        case 6:
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](3);
          expectFailingMessage = _context3.t0.message;

        case 11:
          expect(expectFailingMessage).toMatch("Expected value to equal:");
          expect(expectFailingMessage).toMatch("101");
          expect(expectFailingMessage).toMatch("Received:");
          expect(expectFailingMessage).toMatch("100");

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3, this, [[3, 8]]);
})));