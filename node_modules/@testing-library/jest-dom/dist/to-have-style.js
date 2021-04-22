"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHaveStyle = toHaveStyle;

var _jestMatcherUtils = require("jest-matcher-utils");

var _jestDiff = _interopRequireDefault(require("jest-diff"));

var _chalk = _interopRequireDefault(require("chalk"));

var _utils = require("./utils");

function getStyleDeclaration(document, css) {
  const styles = {}; // The next block is necessary to normalize colors

  const copy = document.createElement('div');
  Object.keys(css).forEach(property => {
    copy.style[property] = css[property];
    styles[property] = copy.style[property];
  });
  return styles;
}

function isSubset(styles, computedStyle) {
  return Object.entries(styles).every(([prop, value]) => computedStyle.getPropertyValue(prop.toLowerCase()) === value);
}

function printoutStyles(styles) {
  return Object.keys(styles).sort().map(prop => `${prop}: ${styles[prop]};`).join('\n');
} // Highlights only style rules that were expected but were not found in the
// received computed styles


function expectedDiff(expected, computedStyles) {
  const received = Array.from(computedStyles).filter(prop => expected[prop]).reduce((obj, prop) => Object.assign(obj, {
    [prop]: computedStyles.getPropertyValue(prop)
  }), {});
  const diffOutput = (0, _jestDiff.default)(printoutStyles(expected), printoutStyles(received)); // Remove the "+ Received" annotation because this is a one-way diff

  return diffOutput.replace(`${_chalk.default.red('+ Received')}\n`, '');
}

function toHaveStyle(htmlElement, css) {
  (0, _utils.checkHtmlElement)(htmlElement, toHaveStyle, this);
  const parsedCSS = (0, _utils.parseCSS)(css, toHaveStyle, this);
  const {
    getComputedStyle
  } = htmlElement.ownerDocument.defaultView;
  const expected = getStyleDeclaration(htmlElement.ownerDocument, parsedCSS);
  const received = getComputedStyle(htmlElement);
  return {
    pass: isSubset(expected, received),
    message: () => {
      const matcher = `${this.isNot ? '.not' : ''}.toHaveStyle`;
      return [(0, _jestMatcherUtils.matcherHint)(matcher, 'element', ''), expectedDiff(expected, received)].join('\n\n');
    }
  };
}