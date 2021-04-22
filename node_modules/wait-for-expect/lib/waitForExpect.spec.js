"use strict";

require("./toBeInRangeMatcher");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var originalDefaults = _objectSpread({}, _index.default.defaults);

beforeEach(function () {
  Object.assign(_index.default.defaults, originalDefaults);
});
test("it waits for expectation to pass",
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  var numberToChange, randomTimeout;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          numberToChange = 10; // we are using random timeout here to simulate a real-time example
          // of an async operation calling a callback at a non-deterministic time

          randomTimeout = Math.floor(Math.random() * 300);
          setTimeout(function () {
            numberToChange = 100;
          }, randomTimeout);
          _context.next = 5;
          return (0, _index.default)(function () {
            expect(numberToChange).toEqual(100);
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
})));
test("it fails properly with jest error message when it times out without expectation passing",
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(done) {
    var numberNotToChange;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            numberNotToChange = 200;
            _context2.prev = 1;
            _context2.next = 4;
            return (0, _index.default)(function () {
              expect(numberNotToChange).toEqual(2000);
            }, 300);

          case 4:
            _context2.next = 10;
            break;

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](1);
            expect(_context2.t0.message).toMatchSnapshot();
            done();

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[1, 6]]);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}(), 1000);
test("it fails when the change didn't happen fast enough, based on the waitForExpect timeout",
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(done) {
    var numberToChangeTooLate, timeToPassForTheChangeToHappen;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            numberToChangeTooLate = 300;
            timeToPassForTheChangeToHappen = 1000;
            setTimeout(function () {
              numberToChangeTooLate = 3000;
            }, timeToPassForTheChangeToHappen);
            _context3.prev = 3;
            _context3.next = 6;
            return (0, _index.default)(function () {
              expect(numberToChangeTooLate).toEqual(3000);
            }, timeToPassForTheChangeToHappen - 200);

          case 6:
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](3);
            expect(_context3.t0.message).toMatchSnapshot();
            done();

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[3, 8]]);
  }));

  return function (_x2) {
    return _ref3.apply(this, arguments);
  };
}(), 1500);
test("it reruns the expectation every x ms, as provided with the second argument",
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee4() {
  var timesRun, timeout, interval, expectedTimesToRun;
  return regeneratorRuntime.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          // using this would be preferable but somehow jest shares the expect.assertions between tests!
          // expect.assertions(1 + Math.floor(timeout / interval));
          timesRun = 0;
          timeout = 600;
          interval = 150;
          _context4.prev = 3;
          _context4.next = 6;
          return (0, _index.default)(function () {
            timesRun += 1;
            expect(true).toEqual(false);
          }, timeout, interval);

        case 6:
          _context4.next = 13;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](3);
          // initial run + reruns
          expectedTimesToRun = 1 + Math.floor(timeout / interval);
          expect(timesRun).toEqual(expectedTimesToRun);
          expect(timesRun).toBeInRange({
            min: expectedTimesToRun - 1,
            max: expectedTimesToRun + 1
          });

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, _callee4, this, [[3, 8]]);
})));
test("it reruns the expectation every x ms, as provided by the default timeout and interval",
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee5() {
  var timeout, interval, mockExpectation, expectedTimesToRun;
  return regeneratorRuntime.wrap(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          timeout = 600;
          interval = 150;
          _index.default.defaults.timeout = timeout;
          _index.default.defaults.interval = interval;
          mockExpectation = jest.fn();
          mockExpectation.mockImplementation(function () {
            return expect(true).toEqual(false);
          });
          _context5.prev = 6;
          _context5.next = 9;
          return (0, _index.default)(mockExpectation);

        case 9:
          throw Error("waitForExpect should have thrown");

        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](6);
          // initial run + reruns
          expectedTimesToRun = 1 + Math.floor(timeout / interval);
          expect(mockExpectation).toHaveBeenCalledTimes(expectedTimesToRun);

        case 16:
        case "end":
          return _context5.stop();
      }
    }
  }, _callee5, this, [[6, 12]]);
})));
test("it works with promises",
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee7() {
  var numberToChange, randomTimeout, sleep;
  return regeneratorRuntime.wrap(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          numberToChange = 10;
          randomTimeout = Math.floor(Math.random() * 300);
          setTimeout(function () {
            numberToChange = 100;
          }, randomTimeout);

          sleep = function sleep(ms) {
            return new Promise(function (resolve) {
              return setTimeout(function () {
                return resolve();
              }, ms);
            });
          };

          _context7.next = 6;
          return (0, _index.default)(
          /*#__PURE__*/
          _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return sleep(10);

                  case 2:
                    expect(numberToChange).toEqual(100);

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          })));

        case 6:
        case "end":
          return _context7.stop();
      }
    }
  }, _callee7, this);
})));
test("it works with a zero interval",
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee8() {
  var numberToChange;
  return regeneratorRuntime.wrap(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          numberToChange = 1;
          setTimeout(function () {
            numberToChange = 2;
          }, 10);
          _context8.next = 4;
          return (0, _index.default)(function () {
            expect(numberToChange).toEqual(2);
          }, 100, 0);

        case 4:
        case "end":
          return _context8.stop();
      }
    }
  }, _callee8, this);
})));