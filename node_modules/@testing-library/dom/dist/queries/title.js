"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryAllByTitle = queryAllByTitle;
exports.findByTitle = exports.findAllByTitle = exports.getAllByTitle = exports.getByTitle = exports.queryByTitle = void 0;

var _allUtils = require("./all-utils");

function queryAllByTitle(container, text, {
  exact = true,
  collapseWhitespace,
  trim,
  normalizer
} = {}) {
  const matcher = exact ? _allUtils.matches : _allUtils.fuzzyMatches;
  const matchNormalizer = (0, _allUtils.makeNormalizer)({
    collapseWhitespace,
    trim,
    normalizer
  });
  return Array.from(container.querySelectorAll('[title], svg > title')).filter(node => matcher(node.getAttribute('title'), node, text, matchNormalizer) || matcher((0, _allUtils.getNodeText)(node), node, text, matchNormalizer));
}

const getMultipleError = (c, title) => `Found multiple elements with the title: ${title}.`;

const getMissingError = (c, title) => `Unable to find an element with the title: ${title}.`;

const [queryByTitle, getAllByTitle, getByTitle, findAllByTitle, findByTitle] = (0, _allUtils.buildQueries)(queryAllByTitle, getMultipleError, getMissingError);
exports.findByTitle = findByTitle;
exports.findAllByTitle = findAllByTitle;
exports.getByTitle = getByTitle;
exports.getAllByTitle = getAllByTitle;
exports.queryByTitle = queryByTitle;