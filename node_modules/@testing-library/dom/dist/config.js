"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;
exports.getConfig = getConfig;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _prettyDom = require("./pretty-dom");

// It would be cleaner for this to live inside './queries', but
// other parts of the code assume that all exports from
// './queries' are query functions.
let config = {
  testIdAttribute: 'data-testid',
  asyncUtilTimeout: 4500,
  // this is to support React's async `act` function.
  // forcing react-testing-library to wrap all async functions would've been
  // a total nightmare (consider wrapping every findBy* query and then also
  // updating `within` so those would be wrapped too. Total nightmare).
  // so we have this config option that's really only intended for
  // react-testing-library to use. For that reason, this feature will remain
  // undocumented.
  asyncWrapper: cb => cb(),
  // default value for the `hidden` option in `ByRole` queries
  defaultHidden: false,

  // called when getBy* queries fail. (message, container) => Error
  getElementError(message, container) {
    return new Error([message, (0, _prettyDom.prettyDOM)(container)].filter(Boolean).join('\n\n'));
  }

};

function configure(newConfig) {
  if (typeof newConfig === 'function') {
    // Pass the existing config out to the provided function
    // and accept a delta in return
    newConfig = newConfig(config);
  } // Merge the incoming config delta


  config = (0, _extends2.default)({}, config, {}, newConfig);
}

function getConfig() {
  return config;
}