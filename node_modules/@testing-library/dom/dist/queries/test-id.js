"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findByTestId = exports.findAllByTestId = exports.getAllByTestId = exports.getByTestId = exports.queryAllByTestId = exports.queryByTestId = void 0;

var _allUtils = require("./all-utils");

const getTestIdAttribute = () => (0, _allUtils.getConfig)().testIdAttribute;

const queryAllByTestId = (...args) => (0, _allUtils.queryAllByAttribute)(getTestIdAttribute(), ...args);

exports.queryAllByTestId = queryAllByTestId;

const getMultipleError = (c, id) => `Found multiple elements by: [${getTestIdAttribute()}="${id}"]`;

const getMissingError = (c, id) => `Unable to find an element by: [${getTestIdAttribute()}="${id}"]`;

const [queryByTestId, getAllByTestId, getByTestId, findAllByTestId, findByTestId] = (0, _allUtils.buildQueries)(queryAllByTestId, getMultipleError, getMissingError);
exports.findByTestId = findByTestId;
exports.findAllByTestId = findAllByTestId;
exports.getByTestId = getByTestId;
exports.getAllByTestId = getAllByTestId;
exports.queryByTestId = queryByTestId;