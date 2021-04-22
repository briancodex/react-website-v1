"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findByPlaceholderText = exports.findAllByPlaceholderText = exports.getAllByPlaceholderText = exports.getByPlaceholderText = exports.queryAllByPlaceholderText = exports.queryByPlaceholderText = void 0;

var _allUtils = require("./all-utils");

const queryAllByPlaceholderText = _allUtils.queryAllByAttribute.bind(null, 'placeholder');

exports.queryAllByPlaceholderText = queryAllByPlaceholderText;

const getMultipleError = (c, text) => `Found multiple elements with the placeholder text of: ${text}`;

const getMissingError = (c, text) => `Unable to find an element with the placeholder text of: ${text}`;

const [queryByPlaceholderText, getAllByPlaceholderText, getByPlaceholderText, findAllByPlaceholderText, findByPlaceholderText] = (0, _allUtils.buildQueries)(queryAllByPlaceholderText, getMultipleError, getMissingError);
exports.findByPlaceholderText = findByPlaceholderText;
exports.findAllByPlaceholderText = findAllByPlaceholderText;
exports.getByPlaceholderText = getByPlaceholderText;
exports.getAllByPlaceholderText = getAllByPlaceholderText;
exports.queryByPlaceholderText = queryByPlaceholderText;