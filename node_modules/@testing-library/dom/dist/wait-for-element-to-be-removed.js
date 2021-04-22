"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitForElementToBeRemoved = waitForElementToBeRemovedWrapper;

var _helpers = require("./helpers");

var _config = require("./config");

function waitForElementToBeRemoved(callback, {
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
      reject(new Error('waitForElementToBeRemoved requires a function as the first parameter'));
    }

    const timer = (0, _helpers.setTimeout)(function () {
      onDone(new Error('Timed out in waitForElementToBeRemoved.'), null);
    }, timeout);
    const observer = (0, _helpers.newMutationObserver)(function () {
      try {
        const result = callback();

        if (!result || Array.isArray(result) && !result.length) {
          onDone(null, true);
        } // If `callback` returns truthy value, wait for the next mutation or timeout.

      } catch (error) {
        onDone(null, true);
      }
    }); // Check if the element is not present synchronously,
    // As the name waitForElementToBeRemoved should check `present` --> `removed`

    try {
      const result = callback();

      if (!result || Array.isArray(result) && !result.length) {
        onDone(new Error('The callback function which was passed did not return an element or non-empty array of elements. waitForElementToBeRemoved requires that the element(s) exist before waiting for removal.'));
      } else {
        // Only observe for mutations only if there is element while checking synchronously
        (0, _helpers.runWithRealTimers)(() => observer.observe(container, mutationObserverOptions));
      }
    } catch (error) {
      onDone(error);
    }

    function onDone(error, result) {
      (0, _helpers.clearTimeout)(timer);
      (0, _helpers.setImmediate)(() => observer.disconnect());

      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    }
  });
}

function waitForElementToBeRemovedWrapper(...args) {
  return (0, _config.getConfig)().asyncWrapper(() => waitForElementToBeRemoved(...args));
}