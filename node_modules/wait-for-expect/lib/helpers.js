"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSetTimeoutFn = getSetTimeoutFn;

/* eslint-disable import/prefer-default-export */

/* eslint-env jest */
// Used to avoid using Jest's fake timers and Date.now mocks
// See https://github.com/TheBrainFamily/wait-for-expect/issues/4 and
// https://github.com/TheBrainFamily/wait-for-expect/issues/12 for more info
var globalObj = typeof window === "undefined" ? global : window; // Currently this fn only supports jest timers, but it could support other test runners in the future.

function runWithRealTimers(callback) {
  var usingJestFakeTimers = // eslint-disable-next-line no-underscore-dangle
  globalObj.setTimeout._isMockFunction && typeof jest !== "undefined";

  if (usingJestFakeTimers) {
    jest.useRealTimers();
  }

  var callbackReturnValue = callback();

  if (usingJestFakeTimers) {
    jest.useFakeTimers();
  }

  return callbackReturnValue;
}

function getSetTimeoutFn() {
  return runWithRealTimers(function () {
    return globalObj.setTimeout;
  });
}