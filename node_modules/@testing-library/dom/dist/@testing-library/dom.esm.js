import _extends from '@babel/runtime/helpers/esm/extends';
import prettyFormat from 'pretty-format';
import MutationObserver from '@sheerun/mutationobserver-shim';
import { computeAccessibleName } from 'dom-accessibility-api';
import { elementRoles } from 'aria-query';
import waitForExpect from 'wait-for-expect';
import _objectWithoutPropertiesLoose from '@babel/runtime/helpers/esm/objectWithoutPropertiesLoose';

var globalObj = typeof window === 'undefined' ? global : window; // Currently this fn only supports jest timers, but it could support other test runners in the future.

function runWithRealTimers(callback) {
  var usingJestFakeTimers = globalObj.setTimeout && globalObj.setTimeout._isMockFunction && typeof jest !== 'undefined';

  if (usingJestFakeTimers) {
    jest.useRealTimers();
  }

  var callbackReturnValue = callback();

  if (usingJestFakeTimers) {
    jest.useFakeTimers();
  }

  return callbackReturnValue;
} // we only run our tests in node, and setImmediate is supported in node.
// istanbul ignore next


function setImmediatePolyfill(fn) {
  return globalObj.setTimeout(fn, 0);
}

function getTimeFunctions() {
  // istanbul ignore next
  return {
    clearTimeoutFn: globalObj.clearTimeout,
    setImmediateFn: globalObj.setImmediate || setImmediatePolyfill,
    setTimeoutFn: globalObj.setTimeout
  };
}

var _runWithRealTimers = runWithRealTimers(getTimeFunctions),
    clearTimeoutFn = _runWithRealTimers.clearTimeoutFn,
    setImmediateFn = _runWithRealTimers.setImmediateFn,
    setTimeoutFn = _runWithRealTimers.setTimeoutFn;

function newMutationObserver(onMutation) {
  var MutationObserverConstructor = typeof window !== 'undefined' && typeof window.MutationObserver !== 'undefined' ? window.MutationObserver : MutationObserver;
  return new MutationObserverConstructor(onMutation);
}

function getDocument() {
  /* istanbul ignore if */
  if (typeof window === 'undefined') {
    throw new Error('Could not find default container');
  }

  return window.document;
}

function inCypress(dom) {
  var window = dom.ownerDocument && dom.ownerDocument.defaultView || undefined;
  return typeof global !== 'undefined' && global.Cypress || typeof window !== 'undefined' && window.Cypress;
}

var inNode = function () {
  return typeof process !== 'undefined' && process.versions !== undefined && process.versions.node !== undefined;
};

var getMaxLength = function (dom) {
  return inCypress(dom) ? 0 : typeof process !== 'undefined' && process.env.DEBUG_PRINT_LIMIT || 7000;
};

var _prettyFormat$plugins = prettyFormat.plugins,
    DOMElement = _prettyFormat$plugins.DOMElement,
    DOMCollection = _prettyFormat$plugins.DOMCollection;

function prettyDOM(dom, maxLength, options) {
  if (!dom) {
    dom = getDocument().body;
  }

  if (typeof maxLength !== 'number') {
    maxLength = getMaxLength(dom);
  }

  if (maxLength === 0) {
    return '';
  }

  if (dom.documentElement) {
    dom = dom.documentElement;
  }

  var domTypeName = typeof dom;

  if (domTypeName === 'object') {
    domTypeName = dom.constructor.name;
  } else {
    // To don't fall with `in` operator
    dom = {};
  }

  if (!('outerHTML' in dom)) {
    throw new TypeError("Expected an element or document but got " + domTypeName);
  }

  var debugContent = prettyFormat(dom, _extends({
    plugins: [DOMElement, DOMCollection],
    printFunctionName: false,
    highlight: inNode()
  }, options));
  return maxLength !== undefined && dom.outerHTML.length > maxLength ? debugContent.slice(0, maxLength) + "..." : debugContent;
}

var logDOM = function () {
  return console.log(prettyDOM.apply(void 0, arguments));
};
/* eslint no-console:0 */

// other parts of the code assume that all exports from
// './queries' are query functions.

var config = {
  testIdAttribute: 'data-testid',
  asyncUtilTimeout: 4500,
  // this is to support React's async `act` function.
  // forcing react-testing-library to wrap all async functions would've been
  // a total nightmare (consider wrapping every findBy* query and then also
  // updating `within` so those would be wrapped too. Total nightmare).
  // so we have this config option that's really only intended for
  // react-testing-library to use. For that reason, this feature will remain
  // undocumented.
  asyncWrapper: function asyncWrapper(cb) {
    return cb();
  },
  // default value for the `hidden` option in `ByRole` queries
  defaultHidden: false,
  // called when getBy* queries fail. (message, container) => Error
  getElementError: function getElementError(message, container) {
    return new Error([message, prettyDOM(container)].filter(Boolean).join('\n\n'));
  }
};
function configure(newConfig) {
  if (typeof newConfig === 'function') {
    // Pass the existing config out to the provided function
    // and accept a delta in return
    newConfig = newConfig(config);
  } // Merge the incoming config delta


  config = _extends({}, config, {}, newConfig);
}
function getConfig() {
  return config;
}

function fuzzyMatches(textToMatch, node, matcher, normalizer) {
  if (typeof textToMatch !== 'string') {
    return false;
  }

  var normalizedText = normalizer(textToMatch);

  if (typeof matcher === 'string') {
    return normalizedText.toLowerCase().includes(matcher.toLowerCase());
  } else if (typeof matcher === 'function') {
    return matcher(normalizedText, node);
  } else {
    return matcher.test(normalizedText);
  }
}

function matches(textToMatch, node, matcher, normalizer) {
  if (typeof textToMatch !== 'string') {
    return false;
  }

  var normalizedText = normalizer(textToMatch);

  if (typeof matcher === 'string') {
    return normalizedText === matcher;
  } else if (typeof matcher === 'function') {
    return matcher(normalizedText, node);
  } else {
    return matcher.test(normalizedText);
  }
}

function getDefaultNormalizer(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$trim = _ref.trim,
      trim = _ref$trim === void 0 ? true : _ref$trim,
      _ref$collapseWhitespa = _ref.collapseWhitespace,
      collapseWhitespace = _ref$collapseWhitespa === void 0 ? true : _ref$collapseWhitespa;

  return function (text) {
    var normalizedText = text;
    normalizedText = trim ? normalizedText.trim() : normalizedText;
    normalizedText = collapseWhitespace ? normalizedText.replace(/\s+/g, ' ') : normalizedText;
    return normalizedText;
  };
}
/**
 * Constructs a normalizer to pass to functions in matches.js
 * @param {boolean|undefined} trim The user-specified value for `trim`, without
 * any defaulting having been applied
 * @param {boolean|undefined} collapseWhitespace The user-specified value for
 * `collapseWhitespace`, without any defaulting having been applied
 * @param {Function|undefined} normalizer The user-specified normalizer
 * @returns {Function} A normalizer
 */


function makeNormalizer(_ref2) {
  var trim = _ref2.trim,
      collapseWhitespace = _ref2.collapseWhitespace,
      normalizer = _ref2.normalizer;

  if (normalizer) {
    // User has specified a custom normalizer
    if (typeof trim !== 'undefined' || typeof collapseWhitespace !== 'undefined') {
      // They've also specified a value for trim or collapseWhitespace
      throw new Error('trim and collapseWhitespace are not supported with a normalizer. ' + 'If you want to use the default trim and collapseWhitespace logic in your normalizer, ' + 'use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
    }

    return normalizer;
  } else {
    // No custom normalizer specified. Just use default.
    return getDefaultNormalizer({
      trim: trim,
      collapseWhitespace: collapseWhitespace
    });
  }
}

// Constant node.nodeType for text nodes, see:
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType#Node_type_constants
var TEXT_NODE = 3;

function getNodeText(node) {
  if (node.matches('input[type=submit], input[type=button]')) {
    return node.value;
  }

  return Array.from(node.childNodes).filter(function (child) {
    return child.nodeType === TEXT_NODE && Boolean(child.textContent);
  }).map(function (c) {
    return c.textContent;
  }).join('');
}

function waitForElement(callback, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$container = _ref.container,
      container = _ref$container === void 0 ? getDocument() : _ref$container,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? getConfig().asyncUtilTimeout : _ref$timeout,
      _ref$mutationObserver = _ref.mutationObserverOptions,
      mutationObserverOptions = _ref$mutationObserver === void 0 ? {
    subtree: true,
    childList: true,
    attributes: true,
    characterData: true
  } : _ref$mutationObserver;

  return new Promise(function (resolve, reject) {
    if (typeof callback !== 'function') {
      reject(new Error('waitForElement requires a callback as the first parameter'));
      return;
    }

    var lastError;
    var timer = setTimeoutFn(onTimeout, timeout);
    var observer = newMutationObserver(onMutation);
    runWithRealTimers(function () {
      return observer.observe(container, mutationObserverOptions);
    });

    function onDone(error, result) {
      clearTimeoutFn(timer);
      setImmediateFn(function () {
        return observer.disconnect();
      });

      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    }

    function onMutation() {
      try {
        var result = callback();

        if (result) {
          onDone(null, result);
        } // If `callback` returns falsy value, wait for the next mutation or timeout.

      } catch (error) {
        // Save the callback error to reject the promise with it.
        lastError = error; // If `callback` throws an error, wait for the next mutation or timeout.
      }
    }

    function onTimeout() {
      onDone(lastError || new Error('Timed out in waitForElement.'), null);
    }

    onMutation();
  });
}

function waitForElementWrapper() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return getConfig().asyncWrapper(function () {
    return waitForElement.apply(void 0, args);
  });
}

function getMultipleElementsFoundError(message, container) {
  return getConfig().getElementError(message + "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).", container);
}

function queryAllByAttribute(attribute, container, text, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$exact = _ref.exact,
      exact = _ref$exact === void 0 ? true : _ref$exact,
      collapseWhitespace = _ref.collapseWhitespace,
      trim = _ref.trim,
      normalizer = _ref.normalizer;

  var matcher = exact ? matches : fuzzyMatches;
  var matchNormalizer = makeNormalizer({
    collapseWhitespace: collapseWhitespace,
    trim: trim,
    normalizer: normalizer
  });
  return Array.from(container.querySelectorAll("[" + attribute + "]")).filter(function (node) {
    return matcher(node.getAttribute(attribute), node, text, matchNormalizer);
  });
}

function queryByAttribute(attribute, container, text) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var els = queryAllByAttribute.apply(void 0, [attribute, container, text].concat(args));

  if (els.length > 1) {
    throw getMultipleElementsFoundError("Found multiple elements by [" + attribute + "=" + text + "]", container);
  }

  return els[0] || null;
} // this accepts a query function and returns a function which throws an error
// if more than one elements is returned, otherwise it returns the first
// element or null


function makeSingleQuery(allQuery, getMultipleError) {
  return function (container) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var els = allQuery.apply(void 0, [container].concat(args));

    if (els.length > 1) {
      throw getMultipleElementsFoundError(getMultipleError.apply(void 0, [container].concat(args)), container);
    }

    return els[0] || null;
  };
} // this accepts a query function and returns a function which throws an error
// if an empty list of elements is returned


function makeGetAllQuery(allQuery, getMissingError) {
  return function (container) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    var els = allQuery.apply(void 0, [container].concat(args));

    if (!els.length) {
      throw getConfig().getElementError(getMissingError.apply(void 0, [container].concat(args)), container);
    }

    return els;
  };
} // this accepts a getter query function and returns a function which calls
// waitForElement and passing a function which invokes the getter.


function makeFindQuery(getter) {
  return function (container, text, options, waitForElementOptions) {
    return waitForElementWrapper(function () {
      return getter(container, text, options);
    }, waitForElementOptions);
  };
}

function buildQueries(queryAllBy, getMultipleError, getMissingError) {
  var queryBy = makeSingleQuery(queryAllBy, getMultipleError);
  var getAllBy = makeGetAllQuery(queryAllBy, getMissingError);
  var getBy = makeSingleQuery(getAllBy, getMultipleError);
  var findAllBy = makeFindQuery(getAllBy);
  var findBy = makeFindQuery(getBy);
  return [queryBy, getAllBy, getBy, findAllBy, findBy];
}

var queryHelpers = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getMultipleElementsFoundError: getMultipleElementsFoundError,
  queryAllByAttribute: queryAllByAttribute,
  queryByAttribute: queryByAttribute,
  makeSingleQuery: makeSingleQuery,
  makeGetAllQuery: makeGetAllQuery,
  makeFindQuery: makeFindQuery,
  buildQueries: buildQueries
});

function queryAllByText(container, text, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$selector = _ref.selector,
      selector = _ref$selector === void 0 ? '*' : _ref$selector,
      _ref$exact = _ref.exact,
      exact = _ref$exact === void 0 ? true : _ref$exact,
      collapseWhitespace = _ref.collapseWhitespace,
      trim = _ref.trim,
      _ref$ignore = _ref.ignore,
      ignore = _ref$ignore === void 0 ? 'script, style' : _ref$ignore,
      normalizer = _ref.normalizer;

  var matcher = exact ? matches : fuzzyMatches;
  var matchNormalizer = makeNormalizer({
    collapseWhitespace: collapseWhitespace,
    trim: trim,
    normalizer: normalizer
  });
  var baseArray = [];

  if (typeof container.matches === 'function' && container.matches(selector)) {
    baseArray = [container];
  }

  return [].concat(baseArray, Array.from(container.querySelectorAll(selector))).filter(function (node) {
    return !ignore || !node.matches(ignore);
  }).filter(function (node) {
    return matcher(getNodeText(node), node, text, matchNormalizer);
  });
}

var getMultipleError = function (c, text) {
  return "Found multiple elements with the text: " + text;
};

var getMissingError = function (c, text) {
  return "Unable to find an element with the text: " + text + ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.";
};

var _buildQueries = buildQueries(queryAllByText, getMultipleError, getMissingError),
    queryByText = _buildQueries[0],
    getAllByText = _buildQueries[1],
    getByText = _buildQueries[2],
    findAllByText = _buildQueries[3],
    findByText = _buildQueries[4];

function queryAllLabelsByText(container, text, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$exact = _ref.exact,
      exact = _ref$exact === void 0 ? true : _ref$exact,
      trim = _ref.trim,
      collapseWhitespace = _ref.collapseWhitespace,
      normalizer = _ref.normalizer;

  var matcher = exact ? matches : fuzzyMatches;
  var matchNormalizer = makeNormalizer({
    collapseWhitespace: collapseWhitespace,
    trim: trim,
    normalizer: normalizer
  });
  return Array.from(container.querySelectorAll('label')).filter(function (label) {
    var textToMatch = label.textContent; // The children of a textarea are part of `textContent` as well. We
    // need to remove them from the string so we can match it afterwards.

    Array.from(label.querySelectorAll('textarea')).forEach(function (textarea) {
      textToMatch = textToMatch.replace(textarea.value, '');
    }); // The children of a select are also part of `textContent`, so we
    // need also to remove their text.

    Array.from(label.querySelectorAll('select')).forEach(function (select) {
      textToMatch = textToMatch.replace(select.textContent, '');
    });
    return matcher(textToMatch, label, text, matchNormalizer);
  });
}

function queryAllByLabelText(container, text, _temp2) {
  var _ref2 = _temp2 === void 0 ? {} : _temp2,
      _ref2$selector = _ref2.selector,
      selector = _ref2$selector === void 0 ? '*' : _ref2$selector,
      _ref2$exact = _ref2.exact,
      exact = _ref2$exact === void 0 ? true : _ref2$exact,
      collapseWhitespace = _ref2.collapseWhitespace,
      trim = _ref2.trim,
      normalizer = _ref2.normalizer;

  var matchNormalizer = makeNormalizer({
    collapseWhitespace: collapseWhitespace,
    trim: trim,
    normalizer: normalizer
  });
  var labels = queryAllLabelsByText(container, text, {
    exact: exact,
    normalizer: matchNormalizer
  });
  var labelledElements = labels.reduce(function (matchedElements, label) {
    var elementsForLabel = [];

    if (label.control) {
      elementsForLabel.push(label.control);
    }
    /* istanbul ignore if */


    if (label.getAttribute('for')) {
      // we're using this notation because with the # selector we would have to escape special characters e.g. user.name
      // see https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector#Escaping_special_characters
      // <label for="someId">text</label><input id="someId" />
      // .control support has landed in jsdom (https://github.com/jsdom/jsdom/issues/2175)
      elementsForLabel.push(container.querySelector("[id=\"" + label.getAttribute('for') + "\"]"));
    }

    if (label.getAttribute('id')) {
      // <label id="someId">text</label><input aria-labelledby="someId" />
      container.querySelectorAll("[aria-labelledby~=\"" + label.getAttribute('id') + "\"]").forEach(function (element) {
        return elementsForLabel.push(element);
      });
    }

    if (label.childNodes.length) {
      // <label>text: <input /></label>
      label.querySelectorAll('button, input, meter, output, progress, select, textarea').forEach(function (element) {
        return elementsForLabel.push(element);
      });
    }

    return matchedElements.concat(elementsForLabel);
  }, []).filter(function (element) {
    return element !== null;
  }).concat(queryAllByAttribute('aria-label', container, text, {
    exact: exact
  }));
  var possibleAriaLabelElements = queryAllByText(container, text, {
    exact: exact,
    normalizer: matchNormalizer
  });
  var ariaLabelledElements = possibleAriaLabelElements.reduce(function (allLabelledElements, nextLabelElement) {
    var labelId = nextLabelElement.getAttribute('id');
    if (!labelId) return allLabelledElements; // ARIA labels can label multiple elements

    var labelledNodes = Array.from(container.querySelectorAll("[aria-labelledby~=\"" + labelId + "\"]"));
    return allLabelledElements.concat(labelledNodes);
  }, []);
  return Array.from(new Set([].concat(labelledElements, ariaLabelledElements))).filter(function (element) {
    return element.matches(selector);
  });
} // the getAll* query would normally look like this:
// const getAllByLabelText = makeGetAllQuery(
//   queryAllByLabelText,
//   (c, text) => `Unable to find a label with the text of: ${text}`,
// )
// however, we can give a more helpful error message than the generic one,
// so we're writing this one out by hand.


function getAllByLabelText(container, text) {
  for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  var els = queryAllByLabelText.apply(void 0, [container, text].concat(rest));

  if (!els.length) {
    var labels = queryAllLabelsByText.apply(void 0, [container, text].concat(rest));

    if (labels.length) {
      throw getConfig().getElementError("Found a label with the text of: " + text + ", however no form control was found associated to that label. Make sure you're using the \"for\" attribute or \"aria-labelledby\" attribute correctly.", container);
    } else {
      throw getConfig().getElementError("Unable to find a label with the text of: " + text, container);
    }
  }

  return els;
} // the reason mentioned above is the same reason we're not using buildQueries


var getMultipleError$1 = function (c, text) {
  return "Found multiple elements with the text of: " + text;
};

var queryByLabelText = makeSingleQuery(queryAllByLabelText, getMultipleError$1);
var getByLabelText = makeSingleQuery(getAllByLabelText, getMultipleError$1);
var findAllByLabelText = makeFindQuery(getAllByLabelText);
var findByLabelText = makeFindQuery(getByLabelText);

var queryAllByPlaceholderText = queryAllByAttribute.bind(null, 'placeholder');

var getMultipleError$2 = function (c, text) {
  return "Found multiple elements with the placeholder text of: " + text;
};

var getMissingError$1 = function (c, text) {
  return "Unable to find an element with the placeholder text of: " + text;
};

var _buildQueries$1 = buildQueries(queryAllByPlaceholderText, getMultipleError$2, getMissingError$1),
    queryByPlaceholderText = _buildQueries$1[0],
    getAllByPlaceholderText = _buildQueries$1[1],
    getByPlaceholderText = _buildQueries$1[2],
    findAllByPlaceholderText = _buildQueries$1[3],
    findByPlaceholderText = _buildQueries$1[4];

function queryAllByDisplayValue(container, value, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$exact = _ref.exact,
      exact = _ref$exact === void 0 ? true : _ref$exact,
      collapseWhitespace = _ref.collapseWhitespace,
      trim = _ref.trim,
      normalizer = _ref.normalizer;

  var matcher = exact ? matches : fuzzyMatches;
  var matchNormalizer = makeNormalizer({
    collapseWhitespace: collapseWhitespace,
    trim: trim,
    normalizer: normalizer
  });
  return Array.from(container.querySelectorAll("input,textarea,select")).filter(function (node) {
    if (node.tagName === 'SELECT') {
      var selectedOptions = Array.from(node.options).filter(function (option) {
        return option.selected;
      });
      return selectedOptions.some(function (optionNode) {
        return matcher(getNodeText(optionNode), optionNode, value, matchNormalizer);
      });
    } else {
      return matcher(node.value, node, value, matchNormalizer);
    }
  });
}

var getMultipleError$3 = function (c, value) {
  return "Found multiple elements with the display value: " + value + ".";
};

var getMissingError$2 = function (c, value) {
  return "Unable to find an element with the display value: " + value + ".";
};

var _buildQueries$2 = buildQueries(queryAllByDisplayValue, getMultipleError$3, getMissingError$2),
    queryByDisplayValue = _buildQueries$2[0],
    getAllByDisplayValue = _buildQueries$2[1],
    getByDisplayValue = _buildQueries$2[2],
    findAllByDisplayValue = _buildQueries$2[3],
    findByDisplayValue = _buildQueries$2[4];

function queryAllByAltText(container, alt, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$exact = _ref.exact,
      exact = _ref$exact === void 0 ? true : _ref$exact,
      collapseWhitespace = _ref.collapseWhitespace,
      trim = _ref.trim,
      normalizer = _ref.normalizer;

  var matcher = exact ? matches : fuzzyMatches;
  var matchNormalizer = makeNormalizer({
    collapseWhitespace: collapseWhitespace,
    trim: trim,
    normalizer: normalizer
  });
  return Array.from(container.querySelectorAll('img,input,area')).filter(function (node) {
    return matcher(node.getAttribute('alt'), node, alt, matchNormalizer);
  });
}

var getMultipleError$4 = function (c, alt) {
  return "Found multiple elements with the alt text: " + alt;
};

var getMissingError$3 = function (c, alt) {
  return "Unable to find an element with the alt text: " + alt;
};

var _buildQueries$3 = buildQueries(queryAllByAltText, getMultipleError$4, getMissingError$3),
    queryByAltText = _buildQueries$3[0],
    getAllByAltText = _buildQueries$3[1],
    getByAltText = _buildQueries$3[2],
    findAllByAltText = _buildQueries$3[3],
    findByAltText = _buildQueries$3[4];

function queryAllByTitle(container, text, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$exact = _ref.exact,
      exact = _ref$exact === void 0 ? true : _ref$exact,
      collapseWhitespace = _ref.collapseWhitespace,
      trim = _ref.trim,
      normalizer = _ref.normalizer;

  var matcher = exact ? matches : fuzzyMatches;
  var matchNormalizer = makeNormalizer({
    collapseWhitespace: collapseWhitespace,
    trim: trim,
    normalizer: normalizer
  });
  return Array.from(container.querySelectorAll('[title], svg > title')).filter(function (node) {
    return matcher(node.getAttribute('title'), node, text, matchNormalizer) || matcher(getNodeText(node), node, text, matchNormalizer);
  });
}

var getMultipleError$5 = function (c, title) {
  return "Found multiple elements with the title: " + title + ".";
};

var getMissingError$4 = function (c, title) {
  return "Unable to find an element with the title: " + title + ".";
};

var _buildQueries$4 = buildQueries(queryAllByTitle, getMultipleError$5, getMissingError$4),
    queryByTitle = _buildQueries$4[0],
    getAllByTitle = _buildQueries$4[1],
    getByTitle = _buildQueries$4[2],
    findAllByTitle = _buildQueries$4[3],
    findByTitle = _buildQueries$4[4];

var elementRoleList = buildElementRoleList(elementRoles);
/**
 * @param {Element} element -
 * @returns {boolean} - `true` if `element` and its subtree are inaccessible
 */

function isSubtreeInaccessible(element) {
  if (element.hidden === true) {
    return true;
  }

  if (element.getAttribute('aria-hidden') === 'true') {
    return true;
  }

  var window = element.ownerDocument.defaultView;

  if (window.getComputedStyle(element).display === 'none') {
    return true;
  }

  return false;
}
/**
 * Partial implementation https://www.w3.org/TR/wai-aria-1.2/#tree_exclusion
 * which should only be used for elements with a non-presentational role i.e.
 * `role="none"` and `role="presentation"` will not be excluded.
 *
 * Implements aria-hidden semantics (i.e. parent overrides child)
 * Ignores "Child Presentational: True" characteristics
 *
 * @param {Element} element -
 * @param {object} [options] -
 * @param {function (element: Element): boolean} options.isSubtreeInaccessible -
 * can be used to return cached results from previous isSubtreeInaccessible calls
 * @returns {boolean} true if excluded, otherwise false
 */


function isInaccessible(element, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$isSubtreeIna = _options.isSubtreeInaccessible,
      isSubtreeInaccessibleImpl = _options$isSubtreeIna === void 0 ? isSubtreeInaccessible : _options$isSubtreeIna;
  var window = element.ownerDocument.defaultView; // since visibility is inherited we can exit early

  if (window.getComputedStyle(element).visibility === 'hidden') {
    return true;
  }

  var currentElement = element;

  while (currentElement) {
    if (isSubtreeInaccessibleImpl(currentElement)) {
      return true;
    }

    currentElement = currentElement.parentElement;
  }

  return false;
}

function getImplicitAriaRoles(currentNode) {
  // eslint bug here:
  // eslint-disable-next-line no-unused-vars
  for (var _iterator = elementRoleList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var _ref2 = _ref,
        selector = _ref2.selector,
        roles = _ref2.roles;

    if (currentNode.matches(selector)) {
      return [].concat(roles);
    }
  }

  return [];
}

function buildElementRoleList(elementRolesMap) {
  function makeElementSelector(_ref3) {
    var name = _ref3.name,
        _ref3$attributes = _ref3.attributes,
        attributes = _ref3$attributes === void 0 ? [] : _ref3$attributes;
    return "" + name + attributes.map(function (_ref4) {
      var attributeName = _ref4.name,
          value = _ref4.value,
          _ref4$constraints = _ref4.constraints,
          constraints = _ref4$constraints === void 0 ? [] : _ref4$constraints;
      var shouldNotExist = constraints.indexOf('undefined') !== -1;

      if (shouldNotExist) {
        return ":not([" + attributeName + "])";
      } else if (value) {
        return "[" + attributeName + "=\"" + value + "\"]";
      } else {
        return "[" + attributeName + "]";
      }
    }).join('');
  }

  function getSelectorSpecificity(_ref5) {
    var _ref5$attributes = _ref5.attributes,
        attributes = _ref5$attributes === void 0 ? [] : _ref5$attributes;
    return attributes.length;
  }

  var result = []; // eslint bug here:
  // eslint-disable-next-line no-unused-vars

  for (var _iterator2 = elementRolesMap.entries(), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
    var _ref8;

    if (_isArray2) {
      if (_i2 >= _iterator2.length) break;
      _ref8 = _iterator2[_i2++];
    } else {
      _i2 = _iterator2.next();
      if (_i2.done) break;
      _ref8 = _i2.value;
    }

    var _ref9 = _ref8,
        element = _ref9[0],
        roles = _ref9[1];
    result = [].concat(result, [{
      selector: makeElementSelector(element),
      roles: Array.from(roles),
      specificity: getSelectorSpecificity(element)
    }]);
  }

  return result.sort(function (_ref6, _ref7) {
    var leftSpecificity = _ref6.specificity;
    var rightSpecificity = _ref7.specificity;
    return rightSpecificity - leftSpecificity;
  });
}

function getRoles(container, _temp) {
  var _ref10 = _temp === void 0 ? {} : _temp,
      _ref10$hidden = _ref10.hidden,
      hidden = _ref10$hidden === void 0 ? false : _ref10$hidden;

  function flattenDOM(node) {
    return [node].concat(Array.from(node.children).reduce(function (acc, child) {
      return [].concat(acc, flattenDOM(child));
    }, []));
  }

  return flattenDOM(container).filter(function (element) {
    return hidden === false ? isInaccessible(element) === false : true;
  }).reduce(function (acc, node) {
    var roles = getImplicitAriaRoles(node);
    return roles.reduce(function (rolesAcc, role) {
      var _extends2, _extends3;

      return Array.isArray(rolesAcc[role]) ? _extends({}, rolesAcc, (_extends2 = {}, _extends2[role] = [].concat(rolesAcc[role], [node]), _extends2)) : _extends({}, rolesAcc, (_extends3 = {}, _extends3[role] = [node], _extends3));
    }, acc);
  }, {});
}

function prettyRoles(dom, _ref11) {
  var hidden = _ref11.hidden;
  var roles = getRoles(dom, {
    hidden: hidden
  });
  return Object.entries(roles).map(function (_ref12) {
    var role = _ref12[0],
        elements = _ref12[1];
    var delimiterBar = '-'.repeat(50);
    var elementsString = elements.map(function (el) {
      var nameString = "Name \"" + computeAccessibleName(el) + "\":\n";
      var domString = prettyDOM(el.cloneNode(false));
      return "" + nameString + domString;
    }).join('\n\n');
    return role + ":\n\n" + elementsString + "\n\n" + delimiterBar;
  }).join('\n');
}

var logRoles = function (dom, _temp2) {
  var _ref13 = _temp2 === void 0 ? {} : _temp2,
      _ref13$hidden = _ref13.hidden,
      hidden = _ref13$hidden === void 0 ? false : _ref13$hidden;

  return console.log(prettyRoles(dom, {
    hidden: hidden
  }));
};
/* eslint no-console:0 */

function queryAllByRole(container, role, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$exact = _ref.exact,
      exact = _ref$exact === void 0 ? true : _ref$exact,
      collapseWhitespace = _ref.collapseWhitespace,
      _ref$hidden = _ref.hidden,
      hidden = _ref$hidden === void 0 ? getConfig().defaultHidden : _ref$hidden,
      name = _ref.name,
      trim = _ref.trim,
      normalizer = _ref.normalizer,
      _ref$queryFallbacks = _ref.queryFallbacks,
      queryFallbacks = _ref$queryFallbacks === void 0 ? false : _ref$queryFallbacks;

  var matcher = exact ? matches : fuzzyMatches;
  var matchNormalizer = makeNormalizer({
    collapseWhitespace: collapseWhitespace,
    trim: trim,
    normalizer: normalizer
  });
  var subtreeIsInaccessibleCache = new WeakMap();

  function cachedIsSubtreeInaccessible(element) {
    if (!subtreeIsInaccessibleCache.has(element)) {
      subtreeIsInaccessibleCache.set(element, isSubtreeInaccessible(element));
    }

    return subtreeIsInaccessibleCache.get(element);
  }

  return Array.from(container.querySelectorAll('*')).filter(function (node) {
    var isRoleSpecifiedExplicitly = node.hasAttribute('role');

    if (isRoleSpecifiedExplicitly) {
      var roleValue = node.getAttribute('role');

      if (queryFallbacks) {
        return roleValue.split(' ').filter(Boolean).some(function (text) {
          return matcher(text, node, role, matchNormalizer);
        });
      } // if a custom normalizer is passed then let normalizer handle the role value


      if (normalizer) {
        return matcher(roleValue, node, role, matchNormalizer);
      } // other wise only send the first word to match


      var _roleValue$split = roleValue.split(' '),
          firstWord = _roleValue$split[0];

      return matcher(firstWord, node, role, matchNormalizer);
    }

    var implicitRoles = getImplicitAriaRoles(node);
    return implicitRoles.some(function (implicitRole) {
      return matcher(implicitRole, node, role, matchNormalizer);
    });
  }).filter(function (element) {
    return hidden === false ? isInaccessible(element, {
      isSubtreeInaccessible: cachedIsSubtreeInaccessible
    }) === false : true;
  }).filter(function (element) {
    if (name === undefined) {
      // Don't care
      return true;
    }

    return matches(computeAccessibleName(element), element, name, function (text) {
      return text;
    });
  });
}

var getMultipleError$6 = function (c, role) {
  return "Found multiple elements with the role \"" + role + "\"";
};

var getMissingError$5 = function (container, role, _temp2) {
  var _ref2 = _temp2 === void 0 ? {} : _temp2,
      _ref2$hidden = _ref2.hidden,
      hidden = _ref2$hidden === void 0 ? getConfig().defaultHidden : _ref2$hidden,
      name = _ref2.name;

  var roles = prettyRoles(container, {
    hidden: hidden,
    includeName: name !== undefined
  });
  var roleMessage;

  if (roles.length === 0) {
    if (hidden === false) {
      roleMessage = 'There are no accessible roles. But there might be some inaccessible roles. ' + 'If you wish to access them, then set the `hidden` option to `true`. ' + 'Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole';
    } else {
      roleMessage = 'There are no available roles.';
    }
  } else {
    roleMessage = ("\nHere are the " + (hidden === false ? 'accessible' : 'available') + " roles:\n\n  " + roles.replace(/\n/g, '\n  ').replace(/\n\s\s\n/g, '\n\n') + "\n").trim();
  }

  var nameHint = '';

  if (name === undefined) {
    nameHint = '';
  } else if (typeof name === 'string') {
    nameHint = " and name \"" + name + "\"";
  } else {
    nameHint = " and name `" + name + "`";
  }

  return ("\nUnable to find an " + (hidden === false ? 'accessible ' : '') + "element with the role \"" + role + "\"" + nameHint + "\n\n" + roleMessage).trim();
};

var _buildQueries$5 = buildQueries(queryAllByRole, getMultipleError$6, getMissingError$5),
    queryByRole = _buildQueries$5[0],
    getAllByRole = _buildQueries$5[1],
    getByRole = _buildQueries$5[2],
    findAllByRole = _buildQueries$5[3],
    findByRole = _buildQueries$5[4];

var getTestIdAttribute = function () {
  return getConfig().testIdAttribute;
};

var queryAllByTestId = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return queryAllByAttribute.apply(void 0, [getTestIdAttribute()].concat(args));
};

var getMultipleError$7 = function (c, id) {
  return "Found multiple elements by: [" + getTestIdAttribute() + "=\"" + id + "\"]";
};

var getMissingError$6 = function (c, id) {
  return "Unable to find an element by: [" + getTestIdAttribute() + "=\"" + id + "\"]";
};

var _buildQueries$6 = buildQueries(queryAllByTestId, getMultipleError$7, getMissingError$6),
    queryByTestId = _buildQueries$6[0],
    getAllByTestId = _buildQueries$6[1],
    getByTestId = _buildQueries$6[2],
    findAllByTestId = _buildQueries$6[3],
    findByTestId = _buildQueries$6[4];



var queries = /*#__PURE__*/Object.freeze({
  __proto__: null,
  queryAllByLabelText: queryAllByLabelText,
  queryByLabelText: queryByLabelText,
  getAllByLabelText: getAllByLabelText,
  getByLabelText: getByLabelText,
  findAllByLabelText: findAllByLabelText,
  findByLabelText: findByLabelText,
  queryByPlaceholderText: queryByPlaceholderText,
  queryAllByPlaceholderText: queryAllByPlaceholderText,
  getByPlaceholderText: getByPlaceholderText,
  getAllByPlaceholderText: getAllByPlaceholderText,
  findAllByPlaceholderText: findAllByPlaceholderText,
  findByPlaceholderText: findByPlaceholderText,
  queryByText: queryByText,
  queryAllByText: queryAllByText,
  getByText: getByText,
  getAllByText: getAllByText,
  findAllByText: findAllByText,
  findByText: findByText,
  queryByDisplayValue: queryByDisplayValue,
  queryAllByDisplayValue: queryAllByDisplayValue,
  getByDisplayValue: getByDisplayValue,
  getAllByDisplayValue: getAllByDisplayValue,
  findAllByDisplayValue: findAllByDisplayValue,
  findByDisplayValue: findByDisplayValue,
  queryByAltText: queryByAltText,
  queryAllByAltText: queryAllByAltText,
  getByAltText: getByAltText,
  getAllByAltText: getAllByAltText,
  findAllByAltText: findAllByAltText,
  findByAltText: findByAltText,
  queryByTitle: queryByTitle,
  queryAllByTitle: queryAllByTitle,
  getByTitle: getByTitle,
  getAllByTitle: getAllByTitle,
  findAllByTitle: findAllByTitle,
  findByTitle: findByTitle,
  queryByRole: queryByRole,
  queryAllByRole: queryAllByRole,
  getAllByRole: getAllByRole,
  getByRole: getByRole,
  findAllByRole: findAllByRole,
  findByRole: findByRole,
  queryByTestId: queryByTestId,
  queryAllByTestId: queryAllByTestId,
  getByTestId: getByTestId,
  getAllByTestId: getAllByTestId,
  findAllByTestId: findAllByTestId,
  findByTestId: findByTestId
});

/**
 * @typedef {{[key: string]: Function}} FuncMap
 */

/**
 * @param {HTMLElement} element container
 * @param {FuncMap} queries object of functions
 * @param {Object} initialValue for reducer
 * @returns {FuncMap} returns object of functions bound to container
 */

function getQueriesForElement(element, queries$1, initialValue) {
  if (queries$1 === void 0) {
    queries$1 = queries;
  }

  if (initialValue === void 0) {
    initialValue = {};
  }

  return Object.keys(queries$1).reduce(function (helpers, key) {
    var fn = queries$1[key];
    helpers[key] = fn.bind(null, element);
    return helpers;
  }, initialValue);
}

function wait(callback, _temp) {
  if (callback === void 0) {
    callback = function () {};
  }

  var _ref = _temp === void 0 ? {} : _temp,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? getConfig().asyncUtilTimeout : _ref$timeout,
      _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 50 : _ref$interval;

  return waitForExpect(callback, timeout, interval);
}

function waitWrapper() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return getConfig().asyncWrapper(function () {
    return wait.apply(void 0, args);
  });
}

function waitForElementToBeRemoved(callback, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$container = _ref.container,
      container = _ref$container === void 0 ? getDocument() : _ref$container,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? getConfig().asyncUtilTimeout : _ref$timeout,
      _ref$mutationObserver = _ref.mutationObserverOptions,
      mutationObserverOptions = _ref$mutationObserver === void 0 ? {
    subtree: true,
    childList: true,
    attributes: true,
    characterData: true
  } : _ref$mutationObserver;

  return new Promise(function (resolve, reject) {
    if (typeof callback !== 'function') {
      reject(new Error('waitForElementToBeRemoved requires a function as the first parameter'));
    }

    var timer = setTimeoutFn(function () {
      onDone(new Error('Timed out in waitForElementToBeRemoved.'), null);
    }, timeout);
    var observer = newMutationObserver(function () {
      try {
        var _result = callback();

        if (!_result || Array.isArray(_result) && !_result.length) {
          onDone(null, true);
        } // If `callback` returns truthy value, wait for the next mutation or timeout.

      } catch (error) {
        onDone(null, true);
      }
    }); // Check if the element is not present synchronously,
    // As the name waitForElementToBeRemoved should check `present` --> `removed`

    try {
      var result = callback();

      if (!result || Array.isArray(result) && !result.length) {
        onDone(new Error('The callback function which was passed did not return an element or non-empty array of elements. waitForElementToBeRemoved requires that the element(s) exist before waiting for removal.'));
      } else {
        // Only observe for mutations only if there is element while checking synchronously
        runWithRealTimers(function () {
          return observer.observe(container, mutationObserverOptions);
        });
      }
    } catch (error) {
      onDone(error);
    }

    function onDone(error, result) {
      clearTimeoutFn(timer);
      setImmediateFn(function () {
        return observer.disconnect();
      });

      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    }
  });
}

function waitForElementToBeRemovedWrapper() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return getConfig().asyncWrapper(function () {
    return waitForElementToBeRemoved.apply(void 0, args);
  });
}

function waitForDomChange(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$container = _ref.container,
      container = _ref$container === void 0 ? getDocument() : _ref$container,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? getConfig().asyncUtilTimeout : _ref$timeout,
      _ref$mutationObserver = _ref.mutationObserverOptions,
      mutationObserverOptions = _ref$mutationObserver === void 0 ? {
    subtree: true,
    childList: true,
    attributes: true,
    characterData: true
  } : _ref$mutationObserver;

  return new Promise(function (resolve, reject) {
    var timer = setTimeoutFn(function () {
      onDone(new Error('Timed out in waitForDomChange.'), null);
    }, timeout);
    var observer = newMutationObserver(function (mutationsList) {
      onDone(null, mutationsList);
    });
    runWithRealTimers(function () {
      return observer.observe(container, mutationObserverOptions);
    });

    function onDone(error, result) {
      clearTimeoutFn(timer);
      setImmediateFn(function () {
        return observer.disconnect();
      });

      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    }
  });
}

function waitForDomChangeWrapper() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return getConfig().asyncWrapper(function () {
    return waitForDomChange.apply(void 0, args);
  });
}

var eventMap = {
  // Clipboard Events
  copy: {
    EventType: 'ClipboardEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  cut: {
    EventType: 'ClipboardEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  paste: {
    EventType: 'ClipboardEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  // Composition Events
  compositionEnd: {
    EventType: 'CompositionEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  compositionStart: {
    EventType: 'CompositionEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  compositionUpdate: {
    EventType: 'CompositionEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  // Keyboard Events
  keyDown: {
    EventType: 'KeyboardEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      charCode: 0
    }
  },
  keyPress: {
    EventType: 'KeyboardEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      charCode: 0
    }
  },
  keyUp: {
    EventType: 'KeyboardEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      charCode: 0
    }
  },
  // Focus Events
  focus: {
    EventType: 'FocusEvent',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  blur: {
    EventType: 'FocusEvent',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  focusIn: {
    EventType: 'FocusEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false
    }
  },
  focusOut: {
    EventType: 'FocusEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false
    }
  },
  // Form Events
  change: {
    EventType: 'Event',
    defaultInit: {
      bubbles: true,
      cancelable: false
    }
  },
  input: {
    EventType: 'InputEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false
    }
  },
  invalid: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: true
    }
  },
  submit: {
    EventType: 'Event',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  reset: {
    EventType: 'Event',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  // Mouse Events
  click: {
    EventType: 'MouseEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      button: 0
    }
  },
  contextMenu: {
    EventType: 'MouseEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  dblClick: {
    EventType: 'MouseEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  drag: {
    EventType: 'DragEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  dragEnd: {
    EventType: 'DragEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false
    }
  },
  dragEnter: {
    EventType: 'DragEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  dragExit: {
    EventType: 'DragEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false
    }
  },
  dragLeave: {
    EventType: 'DragEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false
    }
  },
  dragOver: {
    EventType: 'DragEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  dragStart: {
    EventType: 'DragEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  drop: {
    EventType: 'DragEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  mouseDown: {
    EventType: 'MouseEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  mouseEnter: {
    EventType: 'MouseEvent',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  mouseLeave: {
    EventType: 'MouseEvent',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  mouseMove: {
    EventType: 'MouseEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  mouseOut: {
    EventType: 'MouseEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  mouseOver: {
    EventType: 'MouseEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  mouseUp: {
    EventType: 'MouseEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  // Selection Events
  select: {
    EventType: 'Event',
    defaultInit: {
      bubbles: true,
      cancelable: false
    }
  },
  // Touch Events
  touchCancel: {
    EventType: 'TouchEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false
    }
  },
  touchEnd: {
    EventType: 'TouchEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  touchMove: {
    EventType: 'TouchEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  touchStart: {
    EventType: 'TouchEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  // UI Events
  scroll: {
    EventType: 'UIEvent',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  // Wheel Events
  wheel: {
    EventType: 'WheelEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  // Media Events
  abort: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  canPlay: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  canPlayThrough: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  durationChange: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  emptied: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  encrypted: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  ended: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  loadedData: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  loadedMetadata: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  loadStart: {
    EventType: 'ProgressEvent',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  pause: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  play: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  playing: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  progress: {
    EventType: 'ProgressEvent',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  rateChange: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  seeked: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  seeking: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  stalled: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  suspend: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  timeUpdate: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  volumeChange: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  waiting: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  // Image Events
  load: {
    EventType: 'UIEvent',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  error: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  // Animation Events
  animationStart: {
    EventType: 'AnimationEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false
    }
  },
  animationEnd: {
    EventType: 'AnimationEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false
    }
  },
  animationIteration: {
    EventType: 'AnimationEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false
    }
  },
  // Transition Events
  transitionEnd: {
    EventType: 'TransitionEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  // pointer events
  pointerOver: {
    EventType: 'PointerEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  pointerEnter: {
    EventType: 'PointerEvent',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  pointerDown: {
    EventType: 'PointerEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  pointerMove: {
    EventType: 'PointerEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  pointerUp: {
    EventType: 'PointerEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  pointerCancel: {
    EventType: 'PointerEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false
    }
  },
  pointerOut: {
    EventType: 'PointerEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  pointerLeave: {
    EventType: 'PointerEvent',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  gotPointerCapture: {
    EventType: 'PointerEvent',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  lostPointerCapture: {
    EventType: 'PointerEvent',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  // history events
  popState: {
    EventType: 'PopStateEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false
    }
  }
};
var eventAliasMap = {
  doubleClick: 'dblClick'
};

function fireEvent(element, event) {
  if (!event) {
    throw new Error("Unable to fire an event - please provide an event object.");
  }

  if (!element) {
    throw new Error("Unable to fire a \"" + event.type + "\" event - please provide a DOM element.");
  }

  return element.dispatchEvent(event);
}

var createEvent = {};
Object.keys(eventMap).forEach(function (key) {
  var _eventMap$key = eventMap[key],
      EventType = _eventMap$key.EventType,
      defaultInit = _eventMap$key.defaultInit;
  var eventName = key.toLowerCase();

  createEvent[key] = function (node, init) {
    if (!node) {
      throw new Error("Unable to fire a \"" + key + "\" event - please provide a DOM element.");
    }

    var eventInit = _extends({}, defaultInit, {}, init);

    var _eventInit$target = eventInit.target;
    _eventInit$target = _eventInit$target === void 0 ? {} : _eventInit$target;

    var value = _eventInit$target.value,
        files = _eventInit$target.files,
        targetProperties = _objectWithoutPropertiesLoose(_eventInit$target, ["value", "files"]);

    if (value !== undefined) {
      setNativeValue(node, value);
    }

    if (files !== undefined) {
      // input.files is a read-only property so this is not allowed:
      // input.files = [file]
      // so we have to use this workaround to set the property
      Object.defineProperty(node, 'files', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: files
      });
    }

    Object.assign(node, targetProperties);
    var window = getWindowFromNode(node);
    var EventConstructor = window[EventType] || window.Event;
    /* istanbul ignore else  */

    if (typeof EventConstructor === 'function') {
      return new EventConstructor(eventName, eventInit);
    } else {
      // IE11 polyfill from https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
      var event = window.document.createEvent(EventType);

      var bubbles = eventInit.bubbles,
          cancelable = eventInit.cancelable,
          detail = eventInit.detail,
          otherInit = _objectWithoutPropertiesLoose(eventInit, ["bubbles", "cancelable", "detail"]);

      event.initEvent(eventName, bubbles, cancelable, detail);
      Object.keys(otherInit).forEach(function (eventKey) {
        event[eventKey] = otherInit[eventKey];
      });
      return event;
    }
  };

  fireEvent[key] = function (node, init) {
    return fireEvent(node, createEvent[key](node, init));
  };
});

function getWindowFromNode(node) {
  // istanbul ignore next I'm not sure what could cause the final else so we'll leave it uncovered.
  if (node.defaultView) {
    // node is document
    return node.defaultView;
  } else if (node.ownerDocument && node.ownerDocument.defaultView) {
    // node is a DOM node
    return node.ownerDocument.defaultView;
  } else if (node.window) {
    // node is window
    return node.window;
  } else {
    // no idea...
    throw new Error("Unable to find the \"window\" object for the given node. fireEvent currently supports firing events on DOM nodes, document, and window. Please file an issue with the code that's causing you to see this error: https://github.com/testing-library/dom-testing-library/issues/new");
  }
} // function written after some investigation here:
// https://github.com/facebook/react/issues/10135#issuecomment-401496776


function setNativeValue(element, value) {
  var _ref = Object.getOwnPropertyDescriptor(element, 'value') || {},
      valueSetter = _ref.set;

  var prototype = Object.getPrototypeOf(element);

  var _ref2 = Object.getOwnPropertyDescriptor(prototype, 'value') || {},
      prototypeValueSetter = _ref2.set;

  if (prototypeValueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter.call(element, value);
  }
  /* istanbul ignore next (I don't want to bother) */
  else if (valueSetter) {
      valueSetter.call(element, value);
    } else {
      throw new Error('The given element does not have a value setter');
    }
}

Object.keys(eventAliasMap).forEach(function (aliasKey) {
  var key = eventAliasMap[aliasKey];

  fireEvent[aliasKey] = function () {
    return fireEvent[key].apply(fireEvent, arguments);
  };
});
/* eslint complexity:["error", 9] */

var debug = function (element, maxLength, options) {
  return Array.isArray(element) ? element.forEach(function (el) {
    return logDOM(el, maxLength, options);
  }) : logDOM(element, maxLength, options);
};

var screen = typeof document !== 'undefined' && document.body ? getQueriesForElement(document.body, queries, {
  debug: debug
}) : Object.keys(queries).reduce(function (helpers, key) {
  helpers[key] = function () {
    throw new TypeError('For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error');
  };

  return helpers;
}, {
  debug: debug
});

export { getQueriesForElement as bindElementToQueries, buildQueries, configure, createEvent, findAllByAltText, findAllByDisplayValue, findAllByLabelText, findAllByPlaceholderText, findAllByRole, findAllByTestId, findAllByText, findAllByTitle, findByAltText, findByDisplayValue, findByLabelText, findByPlaceholderText, findByRole, findByTestId, findByText, findByTitle, fireEvent, getAllByAltText, getAllByDisplayValue, getAllByLabelText, getAllByPlaceholderText, getAllByRole, getAllByTestId, getAllByText, getAllByTitle, getByAltText, getByDisplayValue, getByLabelText, getByPlaceholderText, getByRole, getByTestId, getByText, getByTitle, getDefaultNormalizer, getMultipleElementsFoundError, getNodeText, getQueriesForElement, getRoles, isInaccessible, logDOM, logRoles, makeFindQuery, makeGetAllQuery, makeSingleQuery, prettyDOM, queries, queryAllByAltText, queryAllByAttribute, queryAllByDisplayValue, queryAllByLabelText, queryAllByPlaceholderText, queryAllByRole, queryAllByTestId, queryAllByText, queryAllByTitle, queryByAltText, queryByAttribute, queryByDisplayValue, queryByLabelText, queryByPlaceholderText, queryByRole, queryByTestId, queryByText, queryByTitle, queryHelpers, screen, waitWrapper as wait, waitForDomChangeWrapper as waitForDomChange, waitForElementWrapper as waitForElement, waitForElementToBeRemovedWrapper as waitForElementToBeRemoved, getQueriesForElement as within };
