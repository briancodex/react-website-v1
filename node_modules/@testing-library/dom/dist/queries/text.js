"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryAllByText = queryAllByText;
exports.findByText = exports.findAllByText = exports.getAllByText = exports.getByText = exports.queryByText = void 0;

var _allUtils = require("./all-utils");

function queryAllByText(container, text, {
  selector = '*',
  exact = true,
  collapseWhitespace,
  trim,
  ignore = 'script, style',
  normalizer
} = {}) {
  const matcher = exact ? _allUtils.matches : _allUtils.fuzzyMatches;
  const matchNormalizer = (0, _allUtils.makeNormalizer)({
    collapseWhitespace,
    trim,
    normalizer
  });
  let baseArray = [];

  if (typeof container.matches === 'function' && container.matches(selector)) {
    baseArray = [container];
  }

  return [...baseArray, ...Array.from(container.querySelectorAll(selector))].filter(node => !ignore || !node.matches(ignore)).filter(node => matcher((0, _allUtils.getNodeText)(node), node, text, matchNormalizer));
}

const getMultipleError = (c, text) => `Found multiple elements with the text: ${text}`;

const getMissingError = (c, text) => `Unable to find an element with the text: ${text}. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.`;

const [queryByText, getAllByText, getByText, findAllByText, findByText] = (0, _allUtils.buildQueries)(queryAllByText, getMultipleError, getMissingError);
exports.findByText = findByText;
exports.findAllByText = findAllByText;
exports.getByText = getByText;
exports.getAllByText = getAllByText;
exports.queryByText = queryByText;