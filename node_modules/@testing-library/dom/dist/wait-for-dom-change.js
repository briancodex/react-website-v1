"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitForDomChange = waitForDomChangeWrapper;

var _helpers = require("./helpers");

var _config = require("./config");

function waitForDomChange({
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
    const timer = (0, _helpers.setTimeout)(function () {
      onDone(new Error('Timed out in waitForDomChange.'), null);
    }, timeout);
    const observer = (0, _helpers.newMutationObserver)(function (mutationsList) {
      onDone(null, mutationsList);
    });
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
  });
}

function waitForDomChangeWrapper(...args) {
  return (0, _config.getConfig)().asyncWrapper(() => waitForDomChange(...args));
}