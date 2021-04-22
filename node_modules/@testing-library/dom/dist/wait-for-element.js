"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitForElement = waitForElementWrapper;

var _helpers = require("./helpers");

var _config = require("./config");

function waitForElement(callback, {
  container = (0, _helpers.getDocument)(),
  timeout = (0, _config.getConfig)().asyncUtilTimeout,
  mutationObserverOptions = {
    subtree: true,
    childList: true,
    attributes: true,
    characterData: true
  }
} = {}) {
  return new Promise((resolve, reject) => {
    if (typeof callback !== 'function') {
      reject(new Error('waitForElement requires a callback as the first parameter'));
      return;
    }

    let lastError;
    const timer = (0, _helpers.setTimeout)(onTimeout, timeout);
    const observer = (0, _helpers.newMutationObserver)(onMutation);
    (0, _helpers.runWithRealTimers)(() => observer.observe(container, mutationObserverOptions));

    function onDone(error, result) {
      (0, _helpers.clearTimeout)(timer);
      (0, _helpers.setImmediate)(() => observer.disconnect());

      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    }

    function onMutation() {
      try {
        const result = callback();

        if (result) {
          onDone(null, result);
        } // If `callback` returns falsy value, wait for the next mutation or timeout.

      } catch (error) {
        // Save the callback error to reject the promise with it.
        lastError = error; // If `callback` throws an error, wait for the next mutation or timeout.
      }
    }

    function onTimeout() {
      onDone(lastError || new Error('Timed out in waitForElement.'), null);
    }

    onMutation();
  });
}

function waitForElementWrapper(...args) {
  return (0, _config.getConfig)().asyncWrapper(() => waitForElement(...args));
}