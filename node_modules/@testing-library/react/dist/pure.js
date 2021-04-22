"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  render: true,
  cleanup: true,
  fireEvent: true,
  act: true
};
exports.render = render;
exports.cleanup = cleanup;
exports.fireEvent = fireEvent;
Object.defineProperty(exports, "act", {
  enumerable: true,
  get: function () {
    return _actCompat.default;
  }
});

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _dom = require("@testing-library/dom");

Object.keys(_dom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dom[key];
    }
  });
});

var _actCompat = _interopRequireWildcard(require("./act-compat"));

(0, _dom.configure)({
  asyncWrapper: async cb => {
    let result;
    await (0, _actCompat.asyncAct)(async () => {
      result = await cb();
    });
    return result;
  }
});
const mountedContainers = new Set();

function render(ui, {
  container,
  baseElement = container,
  queries,
  hydrate = false,
  wrapper: WrapperComponent
} = {}) {
  if (!baseElement) {
    // default to document.body instead of documentElement to avoid output of potentially-large
    // head elements (such as JSS style blocks) in debug output
    baseElement = document.body;
  }

  if (!container) {
    container = baseElement.appendChild(document.createElement('div'));
  } // we'll add it to the mounted containers regardless of whether it's actually
  // added to document.body so the cleanup method works regardless of whether
  // they're passing us a custom container or not.


  mountedContainers.add(container);

  const wrapUiIfNeeded = innerElement => WrapperComponent ? _react.default.createElement(WrapperComponent, null, innerElement) : innerElement;

  (0, _actCompat.default)(() => {
    if (hydrate) {
      _reactDom.default.hydrate(wrapUiIfNeeded(ui), container);
    } else {
      _reactDom.default.render(wrapUiIfNeeded(ui), container);
    }
  });
  return (0, _extends2.default)({
    container,
    baseElement,
    debug: (el = baseElement, maxLength, options) => Array.isArray(el) ? // eslint-disable-next-line no-console
    el.forEach(e => console.log((0, _dom.prettyDOM)(e, maxLength, options))) : // eslint-disable-next-line no-console,
    console.log((0, _dom.prettyDOM)(el, maxLength, options)),
    unmount: () => _reactDom.default.unmountComponentAtNode(container),
    rerender: rerenderUi => {
      render(wrapUiIfNeeded(rerenderUi), {
        container,
        baseElement
      }); // Intentionally do not return anything to avoid unnecessarily complicating the API.
      // folks can use all the same utilities we return in the first place that are bound to the container
    },
    asFragment: () => {
      /* istanbul ignore if (jsdom limitation) */
      if (typeof document.createRange === 'function') {
        return document.createRange().createContextualFragment(container.innerHTML);
      }

      const template = document.createElement('template');
      template.innerHTML = container.innerHTML;
      return template.content;
    }
  }, (0, _dom.getQueriesForElement)(baseElement, queries));
}

function cleanup() {
  mountedContainers.forEach(cleanupAtContainer);
} // maybe one day we'll expose this (perhaps even as a utility returned by render).
// but let's wait until someone asks for it.


function cleanupAtContainer(container) {
  _reactDom.default.unmountComponentAtNode(container);

  if (container.parentNode === document.body) {
    document.body.removeChild(container);
  }

  mountedContainers.delete(container);
} // react-testing-library's version of fireEvent will call
// dom-testing-library's version of fireEvent wrapped inside
// an "act" call so that after all event callbacks have been
// been called, the resulting useEffect callbacks will also
// be called.


function fireEvent(...args) {
  let returnValue;
  (0, _actCompat.default)(() => {
    returnValue = (0, _dom.fireEvent)(...args);
  });
  return returnValue;
}

Object.keys(_dom.fireEvent).forEach(key => {
  fireEvent[key] = (...args) => {
    let returnValue;
    (0, _actCompat.default)(() => {
      returnValue = _dom.fireEvent[key](...args);
    });
    return returnValue;
  };
}); // React event system tracks native mouseOver/mouseOut events for
// running onMouseEnter/onMouseLeave handlers
// @link https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/events/EnterLeaveEventPlugin.js#L24-L31

const mouseEnter = fireEvent.mouseEnter;
const mouseLeave = fireEvent.mouseLeave;

fireEvent.mouseEnter = (...args) => {
  mouseEnter(...args);
  return fireEvent.mouseOver(...args);
};

fireEvent.mouseLeave = (...args) => {
  mouseLeave(...args);
  return fireEvent.mouseOut(...args);
};

const select = fireEvent.select;

fireEvent.select = (node, init) => {
  select(node, init); // React tracks this event only on focused inputs

  node.focus(); // React creates this event when one of the following native events happens
  // - contextMenu
  // - mouseUp
  // - dragEnd
  // - keyUp
  // - keyDown
  // so we can use any here
  // @link https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/events/SelectEventPlugin.js#L203-L224

  fireEvent.keyUp(node, init);
}; // just re-export everything from dom-testing-library
// NOTE: we're not going to export asyncAct because that's our own compatibility
// thing for people using react-dom@16.8.0. Anyone else doesn't need it and
// people should just upgrade anyway.

/* eslint func-name-matching:0 */