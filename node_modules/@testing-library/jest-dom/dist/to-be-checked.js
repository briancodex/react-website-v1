"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeChecked = toBeChecked;

var _jestMatcherUtils = require("jest-matcher-utils");

var _utils = require("./utils");

function toBeChecked(element) {
  (0, _utils.checkHtmlElement)(element, toBeChecked, this);

  const isValidInput = () => {
    return element.tagName.toLowerCase() === 'input' && ['checkbox', 'radio'].includes(element.type);
  };

  if (!isValidInput() && !(() => {
    return ['checkbox', 'radio'].includes(element.getAttribute('role')) && ['true', 'false'].includes(element.getAttribute('aria-checked'));
  })()) {
    return {
      pass: false,
      message: () => 'only inputs with type="checkbox" or type="radio" or elements with role="checkbox" or role="radio" and a valid aria-checked attribute can be used with .toBeChecked(). Use .toHaveValue() instead'
    };
  }

  const isChecked = () => {
    if (isValidInput()) return element.checked;
    return element.getAttribute('aria-checked') === 'true';
  };

  return {
    pass: isChecked(),
    message: () => {
      const is = isChecked() ? 'is' : 'is not';
      return [(0, _jestMatcherUtils.matcherHint)(`${this.isNot ? '.not' : ''}.toBeChecked`, 'element', ''), '', `Received element ${is} checked:`, `  ${(0, _jestMatcherUtils.printReceived)(element.cloneNode(false))}`].join('\n');
    }
  };
}