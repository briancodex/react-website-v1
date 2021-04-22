"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHaveClass = toHaveClass;

var _jestMatcherUtils = require("jest-matcher-utils");

var _utils = require("./utils");

function splitClassNames(str) {
  if (!str) {
    return [];
  }

  return str.split(/\s+/).filter(s => s.length > 0);
}

function isSubset(subset, superset) {
  return subset.every(item => superset.includes(item));
}

function toHaveClass(htmlElement, ...expectedClassNames) {
  (0, _utils.checkHtmlElement)(htmlElement, toHaveClass, this);
  const received = splitClassNames(htmlElement.getAttribute('class'));
  const expected = expectedClassNames.reduce((acc, className) => acc.concat(splitClassNames(className)), []);
  return expected.length > 0 ? {
    pass: isSubset(expected, received),
    message: () => {
      const to = this.isNot ? 'not to' : 'to';
      return (0, _utils.getMessage)((0, _jestMatcherUtils.matcherHint)(`${this.isNot ? '.not' : ''}.toHaveClass`, 'element', (0, _jestMatcherUtils.printExpected)(expected.join(' '))), `Expected the element ${to} have class`, expected.join(' '), 'Received', received.join(' '));
    }
  } : {
    pass: this.isNot ? received.length > 0 : false,
    message: () => this.isNot ? (0, _utils.getMessage)((0, _jestMatcherUtils.matcherHint)('.not.toHaveClass', 'element', ''), 'Expected the element to have classes', '(none)', 'Received', received.join(' ')) : [(0, _jestMatcherUtils.matcherHint)(`.toHaveClass`, 'element'), 'At least one expected class must be provided.'].join('\n')
  };
}