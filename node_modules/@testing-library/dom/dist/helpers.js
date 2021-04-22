"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDocument = getDocument;
exports.newMutationObserver = newMutationObserver;
exports.runWithRealTimers = runWithRealTimers;
exports.setTimeout = exports.setImmediate = exports.clearTimeout = void 0;

var _mutationobserverShim = _interopRequireDefault(require("@sheerun/mutationobserver-shim"));

const globalObj = typeof window === 'undefined' ? global : window; // Currently this fn only supports jest timers, but it could support other test runners in the future.

function runWithRealTimers(callback) {
  const usingJestFakeTimers = globalObj.setTimeout && globalObj.setTimeout._isMockFunction && typeof jest !== 'undefined';

  if (usingJestFakeTimers) {
    jest.useRealTimers();
  }

  const callbackReturnValue = callback();

  if (usingJestFakeTimers) {
    jest.useFakeTimers();
  }

  return callbackReturnValue;
} // we only run our tests in node, and setImmediate is supported in node.
// istanbul ignore next


function setImmediatePolyfill(fn) {
  return globalObj.setTimeout(fn, 0);
}

function getTimeFunctions() {
  // istanbul ignore next
  return {
    clearTimeoutFn: globalObj.clearTimeout,
    setImmediateFn: globalObj.setImmediate || setImmediatePolyfill,
    setTimeoutFn: globalObj.setTimeout
  };
}

const {
  clearTimeoutFn,
  setImmediateFn,
  setTimeoutFn
} = runWithRealTimers(getTimeFunctions);
exports.setTimeout = setTimeoutFn;
exports.setImmediate = setImmediateFn;
exports.clearTimeout = clearTimeoutFn;

function newMutationObserver(onMutation) {
  const MutationObserverConstructor = typeof window !== 'undefined' && typeof window.MutationObserver !== 'undefined' ? window.MutationObserver : _mutationobserverShim.default;
  return new MutationObserverConstructor(onMutation);
}

function getDocument() {
  /* istanbul ignore if */
  if (typeof window === 'undefined') {
    throw new Error('Could not find default container');
  }

  return window.document;
}