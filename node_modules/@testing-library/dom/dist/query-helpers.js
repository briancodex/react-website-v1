"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMultipleElementsFoundError = getMultipleElementsFoundError;
exports.queryAllByAttribute = queryAllByAttribute;
exports.queryByAttribute = queryByAttribute;
exports.makeSingleQuery = makeSingleQuery;
exports.makeGetAllQuery = makeGetAllQuery;
exports.makeFindQuery = makeFindQuery;
exports.buildQueries = buildQueries;

var _matches = require("./matches");

var _waitForElement = require("./wait-for-element");

var _config = require("./config");

function getMultipleElementsFoundError(message, container) {
  return (0, _config.getConfig)().getElementError(`${message}\n\n(If this is intentional, then use the \`*AllBy*\` variant of the query (like \`queryAllByText\`, \`getAllByText\`, or \`findAllByText\`)).`, container);
}

function queryAllByAttribute(attribute, container, text, {
  exact = true,
  collapseWhitespace,
  trim,
  normalizer
} = {}) {
  const matcher = exact ? _matches.matches : _matches.fuzzyMatches;
  const matchNormalizer = (0, _matches.makeNormalizer)({
    collapseWhitespace,
    trim,
    normalizer
  });
  return Array.from(container.querySelectorAll(`[${attribute}]`)).filter(node => matcher(node.getAttribute(attribute), node, text, matchNormalizer));
}

function queryByAttribute(attribute, container, text, ...args) {
  const els = queryAllByAttribute(attribute, container, text, ...args);

  if (els.length > 1) {
    throw getMultipleElementsFoundError(`Found multiple elements by [${attribute}=${text}]`, container);
  }

  return els[0] || null;
} // this accepts a query function and returns a function which throws an error
// if more than one elements is returned, otherwise it returns the first
// element or null


function makeSingleQuery(allQuery, getMultipleError) {
  return (container, ...args) => {
    const els = allQuery(container, ...args);

    if (els.length > 1) {
      throw getMultipleElementsFoundError(getMultipleError(container, ...args), container);
    }

    return els[0] || null;
  };
} // this accepts a query function and returns a function which throws an error
// if an empty list of elements is returned


function makeGetAllQuery(allQuery, getMissingError) {
  return (container, ...args) => {
    const els = allQuery(container, ...args);

    if (!els.length) {
      throw (0, _config.getConfig)().getElementError(getMissingError(container, ...args), container);
    }

    return els;
  };
} // this accepts a getter query function and returns a function which calls
// waitForElement and passing a function which invokes the getter.


function makeFindQuery(getter) {
  return (container, text, options, waitForElementOptions) => (0, _waitForElement.waitForElement)(() => getter(container, text, options), waitForElementOptions);
}

function buildQueries(queryAllBy, getMultipleError, getMissingError) {
  const queryBy = makeSingleQuery(queryAllBy, getMultipleError);
  const getAllBy = makeGetAllQuery(queryAllBy, getMissingError);
  const getBy = makeSingleQuery(getAllBy, getMultipleError);
  const findAllBy = makeFindQuery(getAllBy);
  const findBy = makeFindQuery(getBy);
  return [queryBy, getAllBy, getBy, findAllBy, findBy];
}