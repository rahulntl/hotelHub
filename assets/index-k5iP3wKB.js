function _mergeNamespaces(n2, m2) {
  for (var i2 = 0; i2 < m2.length; i2++) {
    const e2 = m2[i2];
    if (typeof e2 !== "string" && !Array.isArray(e2)) {
      for (const k2 in e2) {
        if (k2 !== "default" && !(k2 in n2)) {
          const d2 = Object.getOwnPropertyDescriptor(e2, k2);
          if (d2) {
            Object.defineProperty(n2, k2, d2.get ? d2 : {
              enumerable: true,
              get: () => e2[k2]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$2 = Symbol.for("react.element"), n$2 = Symbol.for("react.portal"), p$3 = Symbol.for("react.fragment"), q$2 = Symbol.for("react.strict_mode"), r$1 = Symbol.for("react.profiler"), t$1 = Symbol.for("react.provider"), u$1 = Symbol.for("react.context"), v$2 = Symbol.for("react.forward_ref"), w$1 = Symbol.for("react.suspense"), x$1 = Symbol.for("react.memo"), y$1 = Symbol.for("react.lazy"), z$2 = Symbol.iterator;
function A$2(a2) {
  if (null === a2 || "object" !== typeof a2) return null;
  a2 = z$2 && a2[z$2] || a2["@@iterator"];
  return "function" === typeof a2 ? a2 : null;
}
var B$2 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$2 = Object.assign, D$2 = {};
function E$2(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$2;
  this.updater = e2 || B$2;
}
E$2.prototype.isReactComponent = {};
E$2.prototype.setState = function(a2, b2) {
  if ("object" !== typeof a2 && "function" !== typeof a2 && null != a2) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a2, b2, "setState");
};
E$2.prototype.forceUpdate = function(a2) {
  this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
};
function F$1() {
}
F$1.prototype = E$2.prototype;
function G$2(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$2;
  this.updater = e2 || B$2;
}
var H$2 = G$2.prototype = new F$1();
H$2.constructor = G$2;
C$2(H$2, E$2.prototype);
H$2.isPureReactComponent = true;
var I$2 = Array.isArray, J$1 = Object.prototype.hasOwnProperty, K$2 = { current: null }, L$2 = { key: true, ref: true, __self: true, __source: true };
function M$2(a2, b2, e2) {
  var d2, c2 = {}, k2 = null, h2 = null;
  if (null != b2) for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2) J$1.call(b2, d2) && !L$2.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
  var g2 = arguments.length - 2;
  if (1 === g2) c2.children = e2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++) f2[m2] = arguments[m2 + 2];
    c2.children = f2;
  }
  if (a2 && a2.defaultProps) for (d2 in g2 = a2.defaultProps, g2) void 0 === c2[d2] && (c2[d2] = g2[d2]);
  return { $$typeof: l$2, type: a2, key: k2, ref: h2, props: c2, _owner: K$2.current };
}
function N$2(a2, b2) {
  return { $$typeof: l$2, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
}
function O$2(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === l$2;
}
function escape(a2) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a2.replace(/[=:]/g, function(a3) {
    return b2[a3];
  });
}
var P$2 = /\/+/g;
function Q$2(a2, b2) {
  return "object" === typeof a2 && null !== a2 && null != a2.key ? escape("" + a2.key) : b2.toString(36);
}
function R$2(a2, b2, e2, d2, c2) {
  var k2 = typeof a2;
  if ("undefined" === k2 || "boolean" === k2) a2 = null;
  var h2 = false;
  if (null === a2) h2 = true;
  else switch (k2) {
    case "string":
    case "number":
      h2 = true;
      break;
    case "object":
      switch (a2.$$typeof) {
        case l$2:
        case n$2:
          h2 = true;
      }
  }
  if (h2) return h2 = a2, c2 = c2(h2), a2 = "" === d2 ? "." + Q$2(h2, 0) : d2, I$2(c2) ? (e2 = "", null != a2 && (e2 = a2.replace(P$2, "$&/") + "/"), R$2(c2, b2, e2, "", function(a3) {
    return a3;
  })) : null != c2 && (O$2(c2) && (c2 = N$2(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$2, "$&/") + "/") + a2)), b2.push(c2)), 1;
  h2 = 0;
  d2 = "" === d2 ? "." : d2 + ":";
  if (I$2(a2)) for (var g2 = 0; g2 < a2.length; g2++) {
    k2 = a2[g2];
    var f2 = d2 + Q$2(k2, g2);
    h2 += R$2(k2, b2, e2, f2, c2);
  }
  else if (f2 = A$2(a2), "function" === typeof f2) for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; ) k2 = k2.value, f2 = d2 + Q$2(k2, g2++), h2 += R$2(k2, b2, e2, f2, c2);
  else if ("object" === k2) throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$2(a2, b2, e2) {
  if (null == a2) return a2;
  var d2 = [], c2 = 0;
  R$2(a2, d2, "", "", function(a3) {
    return b2.call(e2, a3, c2++);
  });
  return d2;
}
function T$2(a2) {
  if (-1 === a2._status) {
    var b2 = a2._result;
    b2 = b2();
    b2.then(function(b3) {
      if (0 === a2._status || -1 === a2._status) a2._status = 1, a2._result = b3;
    }, function(b3) {
      if (0 === a2._status || -1 === a2._status) a2._status = 2, a2._result = b3;
    });
    -1 === a2._status && (a2._status = 0, a2._result = b2);
  }
  if (1 === a2._status) return a2._result.default;
  throw a2._result;
}
var U$2 = { current: null }, V$2 = { transition: null }, W$2 = { ReactCurrentDispatcher: U$2, ReactCurrentBatchConfig: V$2, ReactCurrentOwner: K$2 };
function X$3() {
  throw Error("act(...) is not supported in production builds of React.");
}
react_production_min.Children = { map: S$2, forEach: function(a2, b2, e2) {
  S$2(a2, function() {
    b2.apply(this, arguments);
  }, e2);
}, count: function(a2) {
  var b2 = 0;
  S$2(a2, function() {
    b2++;
  });
  return b2;
}, toArray: function(a2) {
  return S$2(a2, function(a3) {
    return a3;
  }) || [];
}, only: function(a2) {
  if (!O$2(a2)) throw Error("React.Children.only expected to receive a single React element child.");
  return a2;
} };
react_production_min.Component = E$2;
react_production_min.Fragment = p$3;
react_production_min.Profiler = r$1;
react_production_min.PureComponent = G$2;
react_production_min.StrictMode = q$2;
react_production_min.Suspense = w$1;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$2;
react_production_min.act = X$3;
react_production_min.cloneElement = function(a2, b2, e2) {
  if (null === a2 || void 0 === a2) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
  var d2 = C$2({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
  if (null != b2) {
    void 0 !== b2.ref && (k2 = b2.ref, h2 = K$2.current);
    void 0 !== b2.key && (c2 = "" + b2.key);
    if (a2.type && a2.type.defaultProps) var g2 = a2.type.defaultProps;
    for (f2 in b2) J$1.call(b2, f2) && !L$2.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2) d2.children = e2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++) g2[m2] = arguments[m2 + 2];
    d2.children = g2;
  }
  return { $$typeof: l$2, type: a2.type, key: c2, ref: k2, props: d2, _owner: h2 };
};
react_production_min.createContext = function(a2) {
  a2 = { $$typeof: u$1, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a2.Provider = { $$typeof: t$1, _context: a2 };
  return a2.Consumer = a2;
};
react_production_min.createElement = M$2;
react_production_min.createFactory = function(a2) {
  var b2 = M$2.bind(null, a2);
  b2.type = a2;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a2) {
  return { $$typeof: v$2, render: a2 };
};
react_production_min.isValidElement = O$2;
react_production_min.lazy = function(a2) {
  return { $$typeof: y$1, _payload: { _status: -1, _result: a2 }, _init: T$2 };
};
react_production_min.memo = function(a2, b2) {
  return { $$typeof: x$1, type: a2, compare: void 0 === b2 ? null : b2 };
};
react_production_min.startTransition = function(a2) {
  var b2 = V$2.transition;
  V$2.transition = {};
  try {
    a2();
  } finally {
    V$2.transition = b2;
  }
};
react_production_min.unstable_act = X$3;
react_production_min.useCallback = function(a2, b2) {
  return U$2.current.useCallback(a2, b2);
};
react_production_min.useContext = function(a2) {
  return U$2.current.useContext(a2);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a2) {
  return U$2.current.useDeferredValue(a2);
};
react_production_min.useEffect = function(a2, b2) {
  return U$2.current.useEffect(a2, b2);
};
react_production_min.useId = function() {
  return U$2.current.useId();
};
react_production_min.useImperativeHandle = function(a2, b2, e2) {
  return U$2.current.useImperativeHandle(a2, b2, e2);
};
react_production_min.useInsertionEffect = function(a2, b2) {
  return U$2.current.useInsertionEffect(a2, b2);
};
react_production_min.useLayoutEffect = function(a2, b2) {
  return U$2.current.useLayoutEffect(a2, b2);
};
react_production_min.useMemo = function(a2, b2) {
  return U$2.current.useMemo(a2, b2);
};
react_production_min.useReducer = function(a2, b2, e2) {
  return U$2.current.useReducer(a2, b2, e2);
};
react_production_min.useRef = function(a2) {
  return U$2.current.useRef(a2);
};
react_production_min.useState = function(a2) {
  return U$2.current.useState(a2);
};
react_production_min.useSyncExternalStore = function(a2, b2, e2) {
  return U$2.current.useSyncExternalStore(a2, b2, e2);
};
react_production_min.useTransition = function() {
  return U$2.current.useTransition();
};
react_production_min.version = "18.3.1";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
const React$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: React
}, [reactExports]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$1 = reactExports, k$1 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m$2 = Object.prototype.hasOwnProperty, n$1 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$2 = { key: true, ref: true, __self: true, __source: true };
function q$1(c2, a2, g2) {
  var b2, d2 = {}, e2 = null, h2 = null;
  void 0 !== g2 && (e2 = "" + g2);
  void 0 !== a2.key && (e2 = "" + a2.key);
  void 0 !== a2.ref && (h2 = a2.ref);
  for (b2 in a2) m$2.call(a2, b2) && !p$2.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
  if (c2 && c2.defaultProps) for (b2 in a2 = c2.defaultProps, a2) void 0 === d2[b2] && (d2[b2] = a2[b2]);
  return { $$typeof: k$1, type: c2, key: e2, ref: h2, props: d2, _owner: n$1.current };
}
reactJsxRuntime_production_min.Fragment = l$1;
reactJsxRuntime_production_min.jsx = q$1;
reactJsxRuntime_production_min.jsxs = q$1;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a2, b2) {
    var c2 = a2.length;
    a2.push(b2);
    a: for (; 0 < c2; ) {
      var d2 = c2 - 1 >>> 1, e2 = a2[d2];
      if (0 < g2(e2, b2)) a2[d2] = b2, a2[c2] = e2, c2 = d2;
      else break a;
    }
  }
  function h2(a2) {
    return 0 === a2.length ? null : a2[0];
  }
  function k2(a2) {
    if (0 === a2.length) return null;
    var b2 = a2[0], c2 = a2.pop();
    if (c2 !== b2) {
      a2[0] = c2;
      a: for (var d2 = 0, e2 = a2.length, w2 = e2 >>> 1; d2 < w2; ) {
        var m2 = 2 * (d2 + 1) - 1, C2 = a2[m2], n2 = m2 + 1, x2 = a2[n2];
        if (0 > g2(C2, c2)) n2 < e2 && 0 > g2(x2, C2) ? (a2[d2] = x2, a2[n2] = c2, d2 = n2) : (a2[d2] = C2, a2[m2] = c2, d2 = m2);
        else if (n2 < e2 && 0 > g2(x2, c2)) a2[d2] = x2, a2[n2] = c2, d2 = n2;
        else break a;
      }
    }
    return b2;
  }
  function g2(a2, b2) {
    var c2 = a2.sortIndex - b2.sortIndex;
    return 0 !== c2 ? c2 : a2.id - b2.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a2) {
    for (var b2 = h2(t2); null !== b2; ) {
      if (null === b2.callback) k2(t2);
      else if (b2.startTime <= a2) k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else break;
      b2 = h2(t2);
    }
  }
  function H2(a2) {
    B2 = false;
    G2(a2);
    if (!A2) if (null !== h2(r2)) A2 = true, I2(J2);
    else {
      var b2 = h2(t2);
      null !== b2 && K2(H2, b2.startTime - a2);
    }
  }
  function J2(a2, b2) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c2 = y2;
    try {
      G2(b2);
      for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a2 && !M2()); ) {
        var d2 = v2.callback;
        if ("function" === typeof d2) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e2 = d2(v2.expirationTime <= b2);
          b2 = exports.unstable_now();
          "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
          G2(b2);
        } else k2(r2);
        v2 = h2(r2);
      }
      if (null !== v2) var w2 = true;
      else {
        var m2 = h2(t2);
        null !== m2 && K2(H2, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c2, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a2 = exports.unstable_now();
      Q2 = a2;
      var b2 = true;
      try {
        b2 = O2(true, a2);
      } finally {
        b2 ? S2() : (N2 = false, O2 = null);
      }
    } else N2 = false;
  }
  var S2;
  if ("function" === typeof F2) S2 = function() {
    F2(R2);
  };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else S2 = function() {
    D2(R2, 0);
  };
  function I2(a2) {
    O2 = a2;
    N2 || (N2 = true, S2());
  }
  function K2(a2, b2) {
    L2 = D2(function() {
      a2(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a2) {
    0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports.unstable_next = function(a2) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c2 = y2;
    y2 = b2;
    try {
      return a2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c2 = y2;
    y2 = a2;
    try {
      return b2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a2, b2, c2) {
    var d2 = exports.unstable_now();
    "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a2) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a2 = { id: u2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a2.sortIndex = c2, f2(t2, a2), null === h2(r2) && a2 === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a2.sortIndex = e2, f2(r2, a2), A2 || z2 || (A2 = true, I2(J2)));
    return a2;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a2) {
    var b2 = y2;
    return function() {
      var c2 = y2;
      y2 = b2;
      try {
        return a2.apply(this, arguments);
      } finally {
        y2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p$1(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++) b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a2, b2) {
  ha(a2, b2);
  ha(a2 + "Capture", b2);
}
function ha(a2, b2) {
  ea[a2] = b2;
  for (a2 = 0; a2 < b2.length; a2++) da.add(b2[a2]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a2) {
  if (ja.call(ma, a2)) return true;
  if (ja.call(la, a2)) return false;
  if (ka.test(a2)) return ma[a2] = true;
  la[a2] = true;
  return false;
}
function pa(a2, b2, c2, d2) {
  if (null !== c2 && 0 === c2.type) return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2) return false;
      if (null !== c2) return !c2.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return "data-" !== a2 && "aria-" !== a2;
    default:
      return false;
  }
}
function qa(a2, b2, c2, d2) {
  if (null === b2 || "undefined" === typeof b2 || pa(a2, b2, c2, d2)) return true;
  if (d2) return false;
  if (null !== c2) switch (c2.type) {
    case 3:
      return !b2;
    case 4:
      return false === b2;
    case 5:
      return isNaN(b2);
    case 6:
      return isNaN(b2) || 1 > b2;
  }
  return false;
}
function v$1(a2, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a2;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var z$1 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  z$1[a2] = new v$1(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b2 = a2[0];
  z$1[b2] = new v$1(b2, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  z$1[a2] = new v$1(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  z$1[a2] = new v$1(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  z$1[a2] = new v$1(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  z$1[a2] = new v$1(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  z$1[a2] = new v$1(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  z$1[a2] = new v$1(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  z$1[a2] = new v$1(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b2 = a2.replace(
    ra,
    sa
  );
  z$1[b2] = new v$1(b2, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b2 = a2.replace(ra, sa);
  z$1[b2] = new v$1(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b2 = a2.replace(ra, sa);
  z$1[b2] = new v$1(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  z$1[a2] = new v$1(a2, 1, false, a2.toLowerCase(), null, false, false);
});
z$1.xlinkHref = new v$1("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  z$1[a2] = new v$1(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function ta(a2, b2, c2, d2) {
  var e2 = z$1.hasOwnProperty(b2) ? z$1[b2] : null;
  if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1]) qa(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b2) && (null === c2 ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a2.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a2) {
  if (null === a2 || "object" !== typeof a2) return null;
  a2 = Ja && a2[Ja] || a2["@@iterator"];
  return "function" === typeof a2 ? a2 : null;
}
var A$1 = Object.assign, La;
function Ma(a2) {
  if (void 0 === La) try {
    throw Error();
  } catch (c2) {
    var b2 = c2.stack.trim().match(/\n( *(at )?)/);
    La = b2 && b2[1] || "";
  }
  return "\n" + La + a2;
}
var Na = false;
function Oa(a2, b2) {
  if (!a2 || Na) return "";
  Na = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2) if (b2 = function() {
      throw Error();
    }, Object.defineProperty(b2.prototype, "props", { set: function() {
      throw Error();
    } }), "object" === typeof Reflect && Reflect.construct) {
      try {
        Reflect.construct(b2, []);
      } catch (l2) {
        var d2 = l2;
      }
      Reflect.construct(a2, [], b2);
    } else {
      try {
        b2.call();
      } catch (l2) {
        d2 = l2;
      }
      a2.call(b2.prototype);
    }
    else {
      try {
        throw Error();
      } catch (l2) {
        d2 = l2;
      }
      a2();
    }
  } catch (l2) {
    if (l2 && d2 && "string" === typeof l2.stack) {
      for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; ) h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--) if (e2[g2] !== f2[h2]) {
        if (1 !== g2 || 1 !== h2) {
          do
            if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
              var k2 = "\n" + e2[g2].replace(" at new ", " at ");
              a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
              return k2;
            }
          while (1 <= g2 && 0 <= h2);
        }
        break;
      }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c2;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? Ma(a2) : "";
}
function Pa(a2) {
  switch (a2.tag) {
    case 5:
      return Ma(a2.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Oa(a2.type, false), a2;
    case 11:
      return a2 = Oa(a2.type.render, false), a2;
    case 1:
      return a2 = Oa(a2.type, true), a2;
    default:
      return "";
  }
}
function Qa(a2) {
  if (null == a2) return null;
  if ("function" === typeof a2) return a2.displayName || a2.name || null;
  if ("string" === typeof a2) return a2;
  switch (a2) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a2) switch (a2.$$typeof) {
    case Ca:
      return (a2.displayName || "Context") + ".Consumer";
    case Ba:
      return (a2._context.displayName || "Context") + ".Provider";
    case Da:
      var b2 = a2.render;
      a2 = a2.displayName;
      a2 || (a2 = b2.displayName || b2.name || "", a2 = "" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
      return a2;
    case Ga:
      return b2 = a2.displayName || null, null !== b2 ? b2 : Qa(a2.type) || "Memo";
    case Ha:
      b2 = a2._payload;
      a2 = a2._init;
      try {
        return Qa(a2(b2));
      } catch (c2) {
      }
  }
  return null;
}
function Ra(a2) {
  var b2 = a2.type;
  switch (a2.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a2 = b2.render, a2 = a2.displayName || a2.name || "", b2.displayName || ("" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b2);
    case 8:
      return b2 === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b2) return b2.displayName || b2.name || null;
      if ("string" === typeof b2) return b2;
  }
  return null;
}
function Sa(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a2;
    case "object":
      return a2;
    default:
      return "";
  }
}
function Ta(a2) {
  var b2 = a2.type;
  return (a2 = a2.nodeName) && "input" === a2.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
}
function Ua(a2) {
  var b2 = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
  if (!a2.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a2, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a3) {
      d2 = "" + a3;
      f2.call(this, a3);
    } });
    Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a3) {
      d2 = "" + a3;
    }, stopTracking: function() {
      a2._valueTracker = null;
      delete a2[b2];
    } };
  }
}
function Va(a2) {
  a2._valueTracker || (a2._valueTracker = Ua(a2));
}
function Wa(a2) {
  if (!a2) return false;
  var b2 = a2._valueTracker;
  if (!b2) return true;
  var c2 = b2.getValue();
  var d2 = "";
  a2 && (d2 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d2;
  return a2 !== c2 ? (b2.setValue(a2), true) : false;
}
function Xa(a2) {
  a2 = a2 || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a2) return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b2) {
    return a2.body;
  }
}
function Ya(a2, b2) {
  var c2 = b2.checked;
  return A$1({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a2._wrapperState.initialChecked });
}
function Za(a2, b2) {
  var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
  c2 = Sa(null != b2.value ? b2.value : c2);
  a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
}
function ab(a2, b2) {
  b2 = b2.checked;
  null != b2 && ta(a2, "checked", b2, false);
}
function bb(a2, b2) {
  ab(a2, b2);
  var c2 = Sa(b2.value), d2 = b2.type;
  if (null != c2) if ("number" === d2) {
    if (0 === c2 && "" === a2.value || a2.value != c2) a2.value = "" + c2;
  } else a2.value !== "" + c2 && (a2.value = "" + c2);
  else if ("submit" === d2 || "reset" === d2) {
    a2.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? cb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a2, b2.type, Sa(b2.defaultValue));
  null == b2.checked && null != b2.defaultChecked && (a2.defaultChecked = !!b2.defaultChecked);
}
function db(a2, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value)) return;
    b2 = "" + a2._wrapperState.initialValue;
    c2 || b2 === a2.value || (a2.value = b2);
    a2.defaultValue = b2;
  }
  c2 = a2.name;
  "" !== c2 && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  "" !== c2 && (a2.name = c2);
}
function cb(a2, b2, c2) {
  if ("number" !== b2 || Xa(a2.ownerDocument) !== a2) null == c2 ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
}
var eb = Array.isArray;
function fb(a2, b2, c2, d2) {
  a2 = a2.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++) b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a2.length; c2++) e2 = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa(c2);
    b2 = null;
    for (e2 = 0; e2 < a2.length; e2++) {
      if (a2[e2].value === c2) {
        a2[e2].selected = true;
        d2 && (a2[e2].defaultSelected = true);
        return;
      }
      null !== b2 || a2[e2].disabled || (b2 = a2[e2]);
    }
    null !== b2 && (b2.selected = true);
  }
}
function gb(a2, b2) {
  if (null != b2.dangerouslySetInnerHTML) throw Error(p$1(91));
  return A$1({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
}
function hb(a2, b2) {
  var c2 = b2.value;
  if (null == c2) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (null != c2) {
      if (null != b2) throw Error(p$1(92));
      if (eb(c2)) {
        if (1 < c2.length) throw Error(p$1(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    null == b2 && (b2 = "");
    c2 = b2;
  }
  a2._wrapperState = { initialValue: Sa(c2) };
}
function ib(a2, b2) {
  var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
  null != c2 && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), null == b2.defaultValue && a2.defaultValue !== c2 && (a2.defaultValue = c2));
  null != d2 && (a2.defaultValue = "" + d2);
}
function jb(a2) {
  var b2 = a2.textContent;
  b2 === a2._wrapperState.initialValue && "" !== b2 && null !== b2 && (a2.value = b2);
}
function kb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a2, b2) {
  return null == a2 || "http://www.w3.org/1999/xhtml" === a2 ? kb(b2) : "http://www.w3.org/2000/svg" === a2 && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a2;
}
var mb, nb = function(a2) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b2, c2, d2, e2);
    });
  } : a2;
}(function(a2, b2) {
  if ("http://www.w3.org/2000/svg" !== a2.namespaceURI || "innerHTML" in a2) a2.innerHTML = b2;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = mb.firstChild; a2.firstChild; ) a2.removeChild(a2.firstChild);
    for (; b2.firstChild; ) a2.appendChild(b2.firstChild);
  }
});
function ob(a2, b2) {
  if (b2) {
    var c2 = a2.firstChild;
    if (c2 && c2 === a2.lastChild && 3 === c2.nodeType) {
      c2.nodeValue = b2;
      return;
    }
  }
  a2.textContent = b2;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a2) {
  qb.forEach(function(b2) {
    b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
    pb[b2] = pb[a2];
  });
});
function rb(a2, b2, c2) {
  return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a2) && pb[a2] ? ("" + b2).trim() : b2 + "px";
}
function sb(a2, b2) {
  a2 = a2.style;
  for (var c2 in b2) if (b2.hasOwnProperty(c2)) {
    var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
    "float" === c2 && (c2 = "cssFloat");
    d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
  }
}
var tb = A$1({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a2, b2) {
  if (b2) {
    if (tb[a2] && (null != b2.children || null != b2.dangerouslySetInnerHTML)) throw Error(p$1(137, a2));
    if (null != b2.dangerouslySetInnerHTML) {
      if (null != b2.children) throw Error(p$1(60));
      if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML)) throw Error(p$1(61));
    }
    if (null != b2.style && "object" !== typeof b2.style) throw Error(p$1(62));
  }
}
function vb(a2, b2) {
  if (-1 === a2.indexOf("-")) return "string" === typeof b2.is;
  switch (a2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return 3 === a2.nodeType ? a2.parentNode : a2;
}
var yb = null, zb = null, Ab = null;
function Bb(a2) {
  if (a2 = Cb(a2)) {
    if ("function" !== typeof yb) throw Error(p$1(280));
    var b2 = a2.stateNode;
    b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
  }
}
function Eb(a2) {
  zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
}
function Fb() {
  if (zb) {
    var a2 = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a2);
    if (b2) for (a2 = 0; a2 < b2.length; a2++) Bb(b2[a2]);
  }
}
function Gb(a2, b2) {
  return a2(b2);
}
function Hb() {
}
var Ib = false;
function Jb(a2, b2, c2) {
  if (Ib) return a2(b2, c2);
  Ib = true;
  try {
    return Gb(a2, b2, c2);
  } finally {
    if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
  }
}
function Kb(a2, b2) {
  var c2 = a2.stateNode;
  if (null === c2) return null;
  var d2 = Db(c2);
  if (null === d2) return null;
  c2 = d2[b2];
  a: switch (b2) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (d2 = !d2.disabled) || (a2 = a2.type, d2 = !("button" === a2 || "input" === a2 || "select" === a2 || "textarea" === a2));
      a2 = !d2;
      break a;
    default:
      a2 = false;
  }
  if (a2) return null;
  if (c2 && "function" !== typeof c2) throw Error(p$1(231, b2, typeof c2));
  return c2;
}
var Lb = false;
if (ia) try {
  var Mb = {};
  Object.defineProperty(Mb, "passive", { get: function() {
    Lb = true;
  } });
  window.addEventListener("test", Mb, Mb);
  window.removeEventListener("test", Mb, Mb);
} catch (a2) {
  Lb = false;
}
function Nb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a2) {
  Ob = true;
  Pb = a2;
} };
function Tb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else throw Error(p$1(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a2) {
  var b2 = a2, c2 = a2;
  if (a2.alternate) for (; b2.return; ) b2 = b2.return;
  else {
    a2 = b2;
    do
      b2 = a2, 0 !== (b2.flags & 4098) && (c2 = b2.return), a2 = b2.return;
    while (a2);
  }
  return 3 === b2.tag ? c2 : null;
}
function Wb(a2) {
  if (13 === a2.tag) {
    var b2 = a2.memoizedState;
    null === b2 && (a2 = a2.alternate, null !== a2 && (b2 = a2.memoizedState));
    if (null !== b2) return b2.dehydrated;
  }
  return null;
}
function Xb(a2) {
  if (Vb(a2) !== a2) throw Error(p$1(188));
}
function Yb(a2) {
  var b2 = a2.alternate;
  if (!b2) {
    b2 = Vb(a2);
    if (null === b2) throw Error(p$1(188));
    return b2 !== a2 ? null : a2;
  }
  for (var c2 = a2, d2 = b2; ; ) {
    var e2 = c2.return;
    if (null === e2) break;
    var f2 = e2.alternate;
    if (null === f2) {
      d2 = e2.return;
      if (null !== d2) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2) return Xb(e2), a2;
        if (f2 === d2) return Xb(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(p$1(188));
    }
    if (c2.return !== d2.return) c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2) throw Error(p$1(189));
      }
    }
    if (c2.alternate !== d2) throw Error(p$1(190));
  }
  if (3 !== c2.tag) throw Error(p$1(188));
  return c2.stateNode.current === c2 ? a2 : b2;
}
function Zb(a2) {
  a2 = Yb(a2);
  return null !== a2 ? $b(a2) : null;
}
function $b(a2) {
  if (5 === a2.tag || 6 === a2.tag) return a2;
  for (a2 = a2.child; null !== a2; ) {
    var b2 = $b(a2);
    if (null !== b2) return b2;
    a2 = a2.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B$1 = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a2) {
  if (lc && "function" === typeof lc.onCommitFiberRoot) try {
    lc.onCommitFiberRoot(kc, a2, void 0, 128 === (a2.current.flags & 128));
  } catch (b2) {
  }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a2) {
  a2 >>>= 0;
  return 0 === a2 ? 32 : 31 - (pc(a2) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a2) {
  switch (a2 & -a2) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a2 & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a2 & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a2;
  }
}
function uc(a2, b2) {
  var c2 = a2.pendingLanes;
  if (0 === c2) return 0;
  var d2 = 0, e2 = a2.suspendedLanes, f2 = a2.pingedLanes, g2 = c2 & 268435455;
  if (0 !== g2) {
    var h2 = g2 & ~e2;
    0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
  } else g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
  if (0 === d2) return 0;
  if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240))) return b2;
  0 !== (d2 & 4) && (d2 |= c2 & 16);
  b2 = a2.entangledLanes;
  if (0 !== b2) for (a2 = a2.entanglements, b2 &= d2; 0 < b2; ) c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a2[c2], b2 &= ~e2;
  return d2;
}
function vc(a2, b2) {
  switch (a2) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a2, b2) {
  for (var c2 = a2.suspendedLanes, d2 = a2.pingedLanes, e2 = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
    var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
    if (-1 === k2) {
      if (0 === (h2 & c2) || 0 !== (h2 & d2)) e2[g2] = vc(h2, b2);
    } else k2 <= b2 && (a2.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function xc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return 0 !== a2 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a2 = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a2;
}
function zc(a2) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++) b2.push(a2);
  return b2;
}
function Ac(a2, b2, c2) {
  a2.pendingLanes |= b2;
  536870912 !== b2 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
  a2 = a2.eventTimes;
  b2 = 31 - oc(b2);
  a2[b2] = c2;
}
function Bc(a2, b2) {
  var c2 = a2.pendingLanes & ~b2;
  a2.pendingLanes = b2;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= b2;
  a2.mutableReadLanes &= b2;
  a2.entangledLanes &= b2;
  b2 = a2.entanglements;
  var d2 = a2.eventTimes;
  for (a2 = a2.expirationTimes; 0 < c2; ) {
    var e2 = 31 - oc(c2), f2 = 1 << e2;
    b2[e2] = 0;
    d2[e2] = -1;
    a2[e2] = -1;
    c2 &= ~f2;
  }
}
function Cc(a2, b2) {
  var c2 = a2.entangledLanes |= b2;
  for (a2 = a2.entanglements; c2; ) {
    var d2 = 31 - oc(c2), e2 = 1 << d2;
    e2 & b2 | a2[d2] & b2 && (a2[d2] |= b2);
    c2 &= ~e2;
  }
}
var C$1 = 0;
function Dc(a2) {
  a2 &= -a2;
  return 1 < a2 ? 4 < a2 ? 0 !== (a2 & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a2, b2) {
  switch (a2) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b2.pointerId);
  }
}
function Tc(a2, b2, c2, d2, e2, f2) {
  if (null === a2 || a2.nativeEvent !== f2) return a2 = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a2;
  a2.eventSystemFlags |= d2;
  b2 = a2.targetContainers;
  null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
  return a2;
}
function Uc(a2, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return Lc = Tc(Lc, a2, b2, c2, d2, e2), true;
    case "dragenter":
      return Mc = Tc(Mc, a2, b2, c2, d2, e2), true;
    case "mouseover":
      return Nc = Tc(Nc, a2, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a2, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a2, b2, c2, d2, e2)), true;
  }
  return false;
}
function Vc(a2) {
  var b2 = Wc(a2.target);
  if (null !== b2) {
    var c2 = Vb(b2);
    if (null !== c2) {
      if (b2 = c2.tag, 13 === b2) {
        if (b2 = Wb(c2), null !== b2) {
          a2.blockedOn = b2;
          Ic(a2.priority, function() {
            Gc(c2);
          });
          return;
        }
      } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
        a2.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function Xc(a2) {
  if (null !== a2.blockedOn) return false;
  for (var b2 = a2.targetContainers; 0 < b2.length; ) {
    var c2 = Yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
    if (null === c2) {
      c2 = a2.nativeEvent;
      var d2 = new c2.constructor(c2.type, c2);
      wb = d2;
      c2.target.dispatchEvent(d2);
      wb = null;
    } else return b2 = Cb(c2), null !== b2 && Fc(b2), a2.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function Zc(a2, b2, c2) {
  Xc(a2) && c2.delete(b2);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a2, b2) {
  a2.blockedOn === b2 && (a2.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a2) {
  function b2(b3) {
    return ad(b3, a2);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a2);
    for (var c2 = 1; c2 < Kc.length; c2++) {
      var d2 = Kc[c2];
      d2.blockedOn === a2 && (d2.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a2);
  null !== Mc && ad(Mc, a2);
  null !== Nc && ad(Nc, a2);
  Oc.forEach(b2);
  Pc.forEach(b2);
  for (c2 = 0; c2 < Qc.length; c2++) d2 = Qc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
  for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); ) Vc(c2), null === c2.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a2, b2, c2, d2) {
  var e2 = C$1, f2 = cd.transition;
  cd.transition = null;
  try {
    C$1 = 1, fd(a2, b2, c2, d2);
  } finally {
    C$1 = e2, cd.transition = f2;
  }
}
function gd(a2, b2, c2, d2) {
  var e2 = C$1, f2 = cd.transition;
  cd.transition = null;
  try {
    C$1 = 4, fd(a2, b2, c2, d2);
  } finally {
    C$1 = e2, cd.transition = f2;
  }
}
function fd(a2, b2, c2, d2) {
  if (dd) {
    var e2 = Yc(a2, b2, c2, d2);
    if (null === e2) hd(a2, b2, d2, id, c2), Sc(a2, d2);
    else if (Uc(e2, a2, b2, c2, d2)) d2.stopPropagation();
    else if (Sc(a2, d2), b2 & 4 && -1 < Rc.indexOf(a2)) {
      for (; null !== e2; ) {
        var f2 = Cb(e2);
        null !== f2 && Ec(f2);
        f2 = Yc(a2, b2, c2, d2);
        null === f2 && hd(a2, b2, d2, id, c2);
        if (f2 === e2) break;
        e2 = f2;
      }
      null !== e2 && d2.stopPropagation();
    } else hd(a2, b2, d2, null, c2);
  }
}
var id = null;
function Yc(a2, b2, c2, d2) {
  id = null;
  a2 = xb(d2);
  a2 = Wc(a2);
  if (null !== a2) if (b2 = Vb(a2), null === b2) a2 = null;
  else if (c2 = b2.tag, 13 === c2) {
    a2 = Wb(b2);
    if (null !== a2) return a2;
    a2 = null;
  } else if (3 === c2) {
    if (b2.stateNode.current.memoizedState.isDehydrated) return 3 === b2.tag ? b2.stateNode.containerInfo : null;
    a2 = null;
  } else b2 !== a2 && (a2 = null);
  id = a2;
  return null;
}
function jd(a2) {
  switch (a2) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md) return md;
  var a2, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a2 = 0; a2 < c2 && b2[a2] === e2[a2]; a2++) ;
  var g2 = c2 - a2;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++) ;
  return md = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
}
function od(a2) {
  var b2 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, 0 === a2 && 13 === b2 && (a2 = 13)) : a2 = b2;
  10 === a2 && (a2 = 13);
  return 32 <= a2 || 13 === a2 ? a2 : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a2) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a2) a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A$1(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a3 = this.nativeEvent;
    a3 && (a3.preventDefault ? a3.preventDefault() : "unknown" !== typeof a3.returnValue && (a3.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a3 = this.nativeEvent;
    a3 && (a3.stopPropagation ? a3.stopPropagation() : "unknown" !== typeof a3.cancelBubble && (a3.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
  return a2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A$1({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A$1({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
  return void 0 === a2.relatedTarget ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2) return a2.movementX;
  a2 !== yd && (yd && "mousemove" === a2.type ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
  return wd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : xd;
} }), Bd = rd(Ad), Cd = A$1({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A$1({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A$1({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A$1({}, sd, { clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A$1({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a2) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
}
function zd() {
  return Pd;
}
var Qd = A$1({}, ud, { key: function(a2) {
  if (a2.key) {
    var b2 = Md[a2.key] || a2.key;
    if ("Unidentified" !== b2) return b2;
  }
  return "keypress" === a2.type ? (a2 = od(a2), 13 === a2 ? "Enter" : String.fromCharCode(a2)) : "keydown" === a2.type || "keyup" === a2.type ? Nd[a2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
  return "keypress" === a2.type ? od(a2) : 0;
}, keyCode: function(a2) {
  return "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
}, which: function(a2) {
  return "keypress" === a2.type ? od(a2) : "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
} }), Rd = rd(Qd), Sd = A$1({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A$1({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A$1({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A$1({}, Ad, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee$1 = String.fromCharCode(32), fe = false;
function ge(a2, b2) {
  switch (a2) {
    case "keyup":
      return -1 !== $d.indexOf(b2.keyCode);
    case "keydown":
      return 229 !== b2.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a2) {
  a2 = a2.detail;
  return "object" === typeof a2 && "data" in a2 ? a2.data : null;
}
var ie = false;
function je(a2, b2) {
  switch (a2) {
    case "compositionend":
      return he(b2);
    case "keypress":
      if (32 !== b2.which) return null;
      fe = true;
      return ee$1;
    case "textInput":
      return a2 = b2.data, a2 === ee$1 && fe ? null : a2;
    default:
      return null;
  }
}
function ke(a2, b2) {
  if (ie) return "compositionend" === a2 || !ae && ge(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length) return b2.char;
        if (b2.which) return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b2.locale ? null : b2.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return "input" === b2 ? !!le[a2.type] : "textarea" === b2 ? true : false;
}
function ne(a2, b2, c2, d2) {
  Eb(d2);
  b2 = oe(b2, "onChange");
  0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b2 }));
}
var pe = null, qe = null;
function re(a2) {
  se(a2, 0);
}
function te$1(a2) {
  var b2 = ue(a2);
  if (Wa(b2)) return a2;
}
function ve(a2, b2) {
  if ("change" === a2) return b2;
}
var we = false;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a2) {
  if ("value" === a2.propertyName && te$1(qe)) {
    var b2 = [];
    ne(b2, qe, a2, xb(a2));
    Jb(re, b2);
  }
}
function Ce(a2, b2, c2) {
  "focusin" === a2 ? (Ae(), pe = b2, qe = c2, pe.attachEvent("onpropertychange", Be)) : "focusout" === a2 && Ae();
}
function De(a2) {
  if ("selectionchange" === a2 || "keyup" === a2 || "keydown" === a2) return te$1(qe);
}
function Ee(a2, b2) {
  if ("click" === a2) return te$1(b2);
}
function Fe(a2, b2) {
  if ("input" === a2 || "change" === a2) return te$1(b2);
}
function Ge(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a2, b2) {
  if (He(a2, b2)) return true;
  if ("object" !== typeof a2 || null === a2 || "object" !== typeof b2 || null === b2) return false;
  var c2 = Object.keys(a2), d2 = Object.keys(b2);
  if (c2.length !== d2.length) return false;
  for (d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    if (!ja.call(b2, e2) || !He(a2[e2], b2[e2])) return false;
  }
  return true;
}
function Je(a2) {
  for (; a2 && a2.firstChild; ) a2 = a2.firstChild;
  return a2;
}
function Ke(a2, b2) {
  var c2 = Je(a2);
  a2 = 0;
  for (var d2; c2; ) {
    if (3 === c2.nodeType) {
      d2 = a2 + c2.textContent.length;
      if (a2 <= b2 && d2 >= b2) return { node: c2, offset: b2 - a2 };
      a2 = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Je(c2);
  }
}
function Le(a2, b2) {
  return a2 && b2 ? a2 === b2 ? true : a2 && 3 === a2.nodeType ? false : b2 && 3 === b2.nodeType ? Le(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
}
function Me() {
  for (var a2 = window, b2 = Xa(); b2 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c2 = "string" === typeof b2.contentWindow.location.href;
    } catch (d2) {
      c2 = false;
    }
    if (c2) a2 = b2.contentWindow;
    else break;
    b2 = Xa(a2.document);
  }
  return b2;
}
function Ne(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 && ("input" === b2 && ("text" === a2.type || "search" === a2.type || "tel" === a2.type || "url" === a2.type || "password" === a2.type) || "textarea" === b2 || "true" === a2.contentEditable);
}
function Oe(a2) {
  var b2 = Me(), c2 = a2.focusedElem, d2 = a2.selectionRange;
  if (b2 !== c2 && c2 && c2.ownerDocument && Le(c2.ownerDocument.documentElement, c2)) {
    if (null !== d2 && Ne(c2)) {
      if (b2 = d2.start, a2 = d2.end, void 0 === a2 && (a2 = b2), "selectionStart" in c2) c2.selectionStart = b2, c2.selectionEnd = Math.min(a2, c2.value.length);
      else if (a2 = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a2.getSelection) {
        a2 = a2.getSelection();
        var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
        d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
        !a2.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
        e2 = Ke(c2, f2);
        var g2 = Ke(
          c2,
          d2
        );
        e2 && g2 && (1 !== a2.rangeCount || a2.anchorNode !== e2.node || a2.anchorOffset !== e2.offset || a2.focusNode !== g2.node || a2.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a2.removeAllRanges(), f2 > d2 ? (a2.addRange(b2), a2.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a2.addRange(b2)));
      }
    }
    b2 = [];
    for (a2 = c2; a2 = a2.parentNode; ) 1 === a2.nodeType && b2.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
    "function" === typeof c2.focus && c2.focus();
    for (c2 = 0; c2 < b2.length; c2++) a2 = b2[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a2, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
  Te || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Ne(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se && Ie(Se, d2) || (Se = d2, d2 = oe(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d2 }), b2.target = Qe)));
}
function Ve(a2, b2) {
  var c2 = {};
  c2[a2.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a2] = "webkit" + b2;
  c2["Moz" + a2] = "moz" + b2;
  return c2;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a2) {
  if (Xe[a2]) return Xe[a2];
  if (!We[a2]) return a2;
  var b2 = We[a2], c2;
  for (c2 in b2) if (b2.hasOwnProperty(c2) && c2 in Ye) return Xe[a2] = b2[c2];
  return a2;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a2, b2) {
  df.set(a2, b2);
  fa(b2, [a2]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a2, b2, c2) {
  var d2 = a2.type || "unknown-event";
  a2.currentTarget = c2;
  Ub(d2, b2, void 0, a2);
  a2.currentTarget = null;
}
function se(a2, b2) {
  b2 = 0 !== (b2 & 4);
  for (var c2 = 0; c2 < a2.length; c2++) {
    var d2 = a2[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2) for (var g2 = d2.length - 1; 0 <= g2; g2--) {
        var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
        h2 = h2.listener;
        if (k2 !== f2 && e2.isPropagationStopped()) break a;
        nf(e2, h2, l2);
        f2 = k2;
      }
      else for (g2 = 0; g2 < d2.length; g2++) {
        h2 = d2[g2];
        k2 = h2.instance;
        l2 = h2.currentTarget;
        h2 = h2.listener;
        if (k2 !== f2 && e2.isPropagationStopped()) break a;
        nf(e2, h2, l2);
        f2 = k2;
      }
    }
  }
  if (Qb) throw a2 = Rb, Qb = false, Rb = null, a2;
}
function D$1(a2, b2) {
  var c2 = b2[of];
  void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
  var d2 = a2 + "__bubble";
  c2.has(d2) || (pf(b2, a2, 2, false), c2.add(d2));
}
function qf(a2, b2, c2) {
  var d2 = 0;
  b2 && (d2 |= 4);
  pf(c2, a2, d2, b2);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a2) {
  if (!a2[rf]) {
    a2[rf] = true;
    da.forEach(function(b3) {
      "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a2), qf(b3, true, a2));
    });
    var b2 = 9 === a2.nodeType ? a2 : a2.ownerDocument;
    null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
  }
}
function pf(a2, b2, c2, d2) {
  switch (jd(b2)) {
    case 1:
      var e2 = ed;
      break;
    case 4:
      e2 = gd;
      break;
    default:
      e2 = fd;
  }
  c2 = e2.bind(null, b2, c2, a2);
  e2 = void 0;
  !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
  d2 ? void 0 !== e2 ? a2.addEventListener(b2, c2, { capture: true, passive: e2 }) : a2.addEventListener(b2, c2, true) : void 0 !== e2 ? a2.addEventListener(b2, c2, { passive: e2 }) : a2.addEventListener(b2, c2, false);
}
function hd(a2, b2, c2, d2, e2) {
  var f2 = d2;
  if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2) a: for (; ; ) {
    if (null === d2) return;
    var g2 = d2.tag;
    if (3 === g2 || 4 === g2) {
      var h2 = d2.stateNode.containerInfo;
      if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2) break;
      if (4 === g2) for (g2 = d2.return; null !== g2; ) {
        var k2 = g2.tag;
        if (3 === k2 || 4 === k2) {
          if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2) return;
        }
        g2 = g2.return;
      }
      for (; null !== h2; ) {
        g2 = Wc(h2);
        if (null === g2) return;
        k2 = g2.tag;
        if (5 === k2 || 6 === k2) {
          d2 = f2 = g2;
          continue a;
        }
        h2 = h2.parentNode;
      }
    }
    d2 = d2.return;
  }
  Jb(function() {
    var d3 = f2, e3 = xb(c2), g3 = [];
    a: {
      var h3 = df.get(a2);
      if (void 0 !== h3) {
        var k3 = td, n2 = a2;
        switch (a2) {
          case "keypress":
            if (0 === od(c2)) break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c2.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a2, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
        t2 = [];
        for (var w2 = d3, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2) break;
          w2 = w2.return;
        }
        0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: t2 }));
      }
    }
    if (0 === (b2 & 7)) {
      a: {
        h3 = "mouseover" === a2 || "pointerover" === a2;
        k3 = "mouseout" === a2 || "pointerout" === a2;
        if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf])) break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
          } else k3 = null, n2 = d3;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a2 || "pointerover" === a2) t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h3 : ue(k3);
            u2 = null == n2 ? h3 : ue(n2);
            h3 = new t2(F2, w2 + "leave", k3, c2, e3);
            h3.target = J2;
            h3.relatedTarget = u2;
            F2 = null;
            Wc(e3) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2) b: {
              t2 = k3;
              x2 = n2;
              w2 = 0;
              for (u2 = t2; u2; u2 = vf(u2)) w2++;
              u2 = 0;
              for (F2 = x2; F2; F2 = vf(F2)) u2++;
              for (; 0 < w2 - u2; ) t2 = vf(t2), w2--;
              for (; 0 < u2 - w2; ) x2 = vf(x2), u2--;
              for (; w2--; ) {
                if (t2 === x2 || null !== x2 && t2 === x2.alternate) break b;
                t2 = vf(t2);
                x2 = vf(x2);
              }
              t2 = null;
            }
            else t2 = null;
            null !== k3 && wf(g3, h3, k3, t2, false);
            null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
          }
        }
      }
      a: {
        h3 = d3 ? ue(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h3.type) var na = ve;
        else if (me(h3)) if (we) na = Fe;
        else {
          na = De;
          var xa = Ce;
        }
        else (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee);
        if (na && (na = na(a2, d3))) {
          ne(g3, na, c2, e3);
          break a;
        }
        xa && xa(a2, h3, d3);
        "focusout" === a2 && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
      }
      xa = d3 ? ue(d3) : window;
      switch (a2) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d3, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g3, c2, e3);
          break;
        case "selectionchange":
          if (Pe) break;
        case "keydown":
        case "keyup":
          Ue(g3, c2, e3);
      }
      var $a;
      if (ae) b: {
        switch (a2) {
          case "compositionstart":
            var ba = "onCompositionStart";
            break b;
          case "compositionend":
            ba = "onCompositionEnd";
            break b;
          case "compositionupdate":
            ba = "onCompositionUpdate";
            break b;
        }
        ba = void 0;
      }
      else ie ? ge(a2, c2) && (ba = "onCompositionEnd") : "keydown" === a2 && 229 === c2.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c2.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d3, ba), 0 < xa.length && (ba = new Ld(ba, a2, null, c2, e3), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c2), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a2, c2) : ke(a2, c2)) d3 = oe(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
    }
    se(g3, b2);
  });
}
function tf(a2, b2, c2) {
  return { instance: a2, listener: b2, currentTarget: c2 };
}
function oe(a2, b2) {
  for (var c2 = b2 + "Capture", d2 = []; null !== a2; ) {
    var e2 = a2, f2 = e2.stateNode;
    5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a2, c2), null != f2 && d2.unshift(tf(a2, f2, e2)), f2 = Kb(a2, b2), null != f2 && d2.push(tf(a2, f2, e2)));
    a2 = a2.return;
  }
  return d2;
}
function vf(a2) {
  if (null === a2) return null;
  do
    a2 = a2.return;
  while (a2 && 5 !== a2.tag);
  return a2 ? a2 : null;
}
function wf(a2, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (null !== k2 && k2 === d2) break;
    5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
    c2 = c2.return;
  }
  0 !== g2.length && a2.push({ event: b2, listeners: g2 });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a2) {
  return ("string" === typeof a2 ? a2 : "" + a2).replace(xf, "\n").replace(yf, "");
}
function Af(a2, b2, c2) {
  b2 = zf(b2);
  if (zf(a2) !== b2 && c2) throw Error(p$1(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a2, b2) {
  return "textarea" === a2 || "noscript" === a2 || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a2) {
  return Hf.resolve(null).then(a2).catch(If);
} : Ff;
function If(a2) {
  setTimeout(function() {
    throw a2;
  });
}
function Kf(a2, b2) {
  var c2 = b2, d2 = 0;
  do {
    var e2 = c2.nextSibling;
    a2.removeChild(c2);
    if (e2 && 8 === e2.nodeType) if (c2 = e2.data, "/$" === c2) {
      if (0 === d2) {
        a2.removeChild(e2);
        bd(b2);
        return;
      }
      d2--;
    } else "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
    c2 = e2;
  } while (c2);
  bd(b2);
}
function Lf(a2) {
  for (; null != a2; a2 = a2.nextSibling) {
    var b2 = a2.nodeType;
    if (1 === b2 || 3 === b2) break;
    if (8 === b2) {
      b2 = a2.data;
      if ("$" === b2 || "$!" === b2 || "$?" === b2) break;
      if ("/$" === b2) return null;
    }
  }
  return a2;
}
function Mf(a2) {
  a2 = a2.previousSibling;
  for (var b2 = 0; a2; ) {
    if (8 === a2.nodeType) {
      var c2 = a2.data;
      if ("$" === c2 || "$!" === c2 || "$?" === c2) {
        if (0 === b2) return a2;
        b2--;
      } else "/$" === c2 && b2++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a2) {
  var b2 = a2[Of];
  if (b2) return b2;
  for (var c2 = a2.parentNode; c2; ) {
    if (b2 = c2[uf] || c2[Of]) {
      c2 = b2.alternate;
      if (null !== b2.child || null !== c2 && null !== c2.child) for (a2 = Mf(a2); null !== a2; ) {
        if (c2 = a2[Of]) return c2;
        a2 = Mf(a2);
      }
      return b2;
    }
    a2 = c2;
    c2 = a2.parentNode;
  }
  return null;
}
function Cb(a2) {
  a2 = a2[Of] || a2[uf];
  return !a2 || 5 !== a2.tag && 6 !== a2.tag && 13 !== a2.tag && 3 !== a2.tag ? null : a2;
}
function ue(a2) {
  if (5 === a2.tag || 6 === a2.tag) return a2.stateNode;
  throw Error(p$1(33));
}
function Db(a2) {
  return a2[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a2) {
  return { current: a2 };
}
function E$1(a2) {
  0 > Tf || (a2.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G$1(a2, b2) {
  Tf++;
  Sf[Tf] = a2.current;
  a2.current = b2;
}
var Vf = {}, H$1 = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a2, b2) {
  var c2 = a2.type.contextTypes;
  if (!c2) return Vf;
  var d2 = a2.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2) return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2) e2[f2] = b2[f2];
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Zf(a2) {
  a2 = a2.childContextTypes;
  return null !== a2 && void 0 !== a2;
}
function $f() {
  E$1(Wf);
  E$1(H$1);
}
function ag(a2, b2, c2) {
  if (H$1.current !== Vf) throw Error(p$1(168));
  G$1(H$1, b2);
  G$1(Wf, c2);
}
function bg(a2, b2, c2) {
  var d2 = a2.stateNode;
  b2 = b2.childContextTypes;
  if ("function" !== typeof d2.getChildContext) return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2) if (!(e2 in b2)) throw Error(p$1(108, Ra(a2) || "Unknown", e2));
  return A$1({}, c2, d2);
}
function cg(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H$1.current;
  G$1(H$1, a2);
  G$1(Wf, Wf.current);
  return true;
}
function dg(a2, b2, c2) {
  var d2 = a2.stateNode;
  if (!d2) throw Error(p$1(169));
  c2 ? (a2 = bg(a2, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a2, E$1(Wf), E$1(H$1), G$1(H$1, a2)) : E$1(Wf);
  G$1(Wf, c2);
}
var eg = null, fg = false, gg = false;
function hg(a2) {
  null === eg ? eg = [a2] : eg.push(a2);
}
function ig(a2) {
  fg = true;
  hg(a2);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a2 = 0, b2 = C$1;
    try {
      var c2 = eg;
      for (C$1 = 1; a2 < c2.length; a2++) {
        var d2 = c2[a2];
        do
          d2 = d2(true);
        while (null !== d2);
      }
      eg = null;
      fg = false;
    } catch (e2) {
      throw null !== eg && (eg = eg.slice(a2 + 1)), ac(fc, jg), e2;
    } finally {
      C$1 = b2, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a2, b2) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a2;
  ng = b2;
}
function ug(a2, b2, c2) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a2;
  var d2 = rg;
  a2 = sg;
  var e2 = 32 - oc(d2) - 1;
  d2 &= ~(1 << e2);
  c2 += 1;
  var f2 = 32 - oc(b2) + e2;
  if (30 < f2) {
    var g2 = e2 - e2 % 5;
    f2 = (d2 & (1 << g2) - 1).toString(32);
    d2 >>= g2;
    e2 -= g2;
    rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
    sg = f2 + a2;
  } else rg = 1 << f2 | c2 << e2 | d2, sg = a2;
}
function vg(a2) {
  null !== a2.return && (tg(a2, 1), ug(a2, 1, 0));
}
function wg(a2) {
  for (; a2 === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a2 === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I$1 = false, zg = null;
function Ag(a2, b2) {
  var c2 = Bg(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.stateNode = b2;
  c2.return = a2;
  b2 = a2.deletions;
  null === b2 ? (a2.deletions = [c2], a2.flags |= 16) : b2.push(c2);
}
function Cg(a2, b2) {
  switch (a2.tag) {
    case 5:
      var c2 = a2.type;
      b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return null !== b2 ? (a2.stateNode = b2, xg = a2, yg = Lf(b2.firstChild), true) : false;
    case 6:
      return b2 = "" === a2.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a2.stateNode = b2, xg = a2, yg = null, true) : false;
    case 13:
      return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a2.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a2, a2.child = c2, xg = a2, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a2) {
  return 0 !== (a2.mode & 1) && 0 === (a2.flags & 128);
}
function Eg(a2) {
  if (I$1) {
    var b2 = yg;
    if (b2) {
      var c2 = b2;
      if (!Cg(a2, b2)) {
        if (Dg(a2)) throw Error(p$1(418));
        b2 = Lf(c2.nextSibling);
        var d2 = xg;
        b2 && Cg(a2, b2) ? Ag(d2, c2) : (a2.flags = a2.flags & -4097 | 2, I$1 = false, xg = a2);
      }
    } else {
      if (Dg(a2)) throw Error(p$1(418));
      a2.flags = a2.flags & -4097 | 2;
      I$1 = false;
      xg = a2;
    }
  }
}
function Fg(a2) {
  for (a2 = a2.return; null !== a2 && 5 !== a2.tag && 3 !== a2.tag && 13 !== a2.tag; ) a2 = a2.return;
  xg = a2;
}
function Gg(a2) {
  if (a2 !== xg) return false;
  if (!I$1) return Fg(a2), I$1 = true, false;
  var b2;
  (b2 = 3 !== a2.tag) && !(b2 = 5 !== a2.tag) && (b2 = a2.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a2.type, a2.memoizedProps));
  if (b2 && (b2 = yg)) {
    if (Dg(a2)) throw Hg(), Error(p$1(418));
    for (; b2; ) Ag(a2, b2), b2 = Lf(b2.nextSibling);
  }
  Fg(a2);
  if (13 === a2.tag) {
    a2 = a2.memoizedState;
    a2 = null !== a2 ? a2.dehydrated : null;
    if (!a2) throw Error(p$1(317));
    a: {
      a2 = a2.nextSibling;
      for (b2 = 0; a2; ) {
        if (8 === a2.nodeType) {
          var c2 = a2.data;
          if ("/$" === c2) {
            if (0 === b2) {
              yg = Lf(a2.nextSibling);
              break a;
            }
            b2--;
          } else "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
        }
        a2 = a2.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(a2.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a2 = yg; a2; ) a2 = Lf(a2.nextSibling);
}
function Ig() {
  yg = xg = null;
  I$1 = false;
}
function Jg(a2) {
  null === zg ? zg = [a2] : zg.push(a2);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a2, b2, c2) {
  a2 = c2.ref;
  if (null !== a2 && "function" !== typeof a2 && "object" !== typeof a2) {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (1 !== c2.tag) throw Error(p$1(309));
        var d2 = c2.stateNode;
      }
      if (!d2) throw Error(p$1(147, a2));
      var e2 = d2, f2 = "" + a2;
      if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2) return b2.ref;
      b2 = function(a3) {
        var b3 = e2.refs;
        null === a3 ? delete b3[f2] : b3[f2] = a3;
      };
      b2._stringRef = f2;
      return b2;
    }
    if ("string" !== typeof a2) throw Error(p$1(284));
    if (!c2._owner) throw Error(p$1(290, a2));
  }
  return a2;
}
function Mg(a2, b2) {
  a2 = Object.prototype.toString.call(b2);
  throw Error(p$1(31, "[object Object]" === a2 ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
}
function Ng(a2) {
  var b2 = a2._init;
  return b2(a2._payload);
}
function Og(a2) {
  function b2(b3, c3) {
    if (a2) {
      var d3 = b3.deletions;
      null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
    }
  }
  function c2(c3, d3) {
    if (!a2) return null;
    for (; null !== d3; ) b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a3, b3) {
    for (a3 = /* @__PURE__ */ new Map(); null !== b3; ) null !== b3.key ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
    return a3;
  }
  function e2(a3, b3) {
    a3 = Pg(a3, b3);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a2) return b3.flags |= 1048576, c3;
    d3 = b3.alternate;
    if (null !== d3) return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
    b3.flags |= 2;
    return c3;
  }
  function g2(b3) {
    a2 && null === b3.alternate && (b3.flags |= 2);
    return b3;
  }
  function h2(a3, b3, c3, d3) {
    if (null === b3 || 6 !== b3.tag) return b3 = Qg(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function k2(a3, b3, c3, d3) {
    var f3 = c3.type;
    if (f3 === ya) return m2(a3, b3, c3.props.children, d3, c3.key);
    if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b3.type)) return d3 = e2(b3, c3.props), d3.ref = Lg(a3, b3, c3), d3.return = a3, d3;
    d3 = Rg(c3.type, c3.key, c3.props, null, a3.mode, d3);
    d3.ref = Lg(a3, b3, c3);
    d3.return = a3;
    return d3;
  }
  function l2(a3, b3, c3, d3) {
    if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation) return b3 = Sg(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a3;
    return b3;
  }
  function m2(a3, b3, c3, d3, f3) {
    if (null === b3 || 7 !== b3.tag) return b3 = Tg(c3, a3.mode, d3, f3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function q2(a3, b3, c3) {
    if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3) return b3 = Qg("" + b3, a3.mode, c3), b3.return = a3, b3;
    if ("object" === typeof b3 && null !== b3) {
      switch (b3.$$typeof) {
        case va:
          return c3 = Rg(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = Lg(a3, null, b3), c3.return = a3, c3;
        case wa:
          return b3 = Sg(b3, a3.mode, c3), b3.return = a3, b3;
        case Ha:
          var d3 = b3._init;
          return q2(a3, d3(b3._payload), c3);
      }
      if (eb(b3) || Ka(b3)) return b3 = Tg(b3, a3.mode, c3, null), b3.return = a3, b3;
      Mg(a3, b3);
    }
    return null;
  }
  function r2(a3, b3, c3, d3) {
    var e3 = null !== b3 ? b3.key : null;
    if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3) return null !== e3 ? null : h2(a3, b3, "" + c3, d3);
    if ("object" === typeof c3 && null !== c3) {
      switch (c3.$$typeof) {
        case va:
          return c3.key === e3 ? k2(a3, b3, c3, d3) : null;
        case wa:
          return c3.key === e3 ? l2(a3, b3, c3, d3) : null;
        case Ha:
          return e3 = c3._init, r2(
            a3,
            b3,
            e3(c3._payload),
            d3
          );
      }
      if (eb(c3) || Ka(c3)) return null !== e3 ? null : m2(a3, b3, c3, d3, null);
      Mg(a3, c3);
    }
    return null;
  }
  function y2(a3, b3, c3, d3, e3) {
    if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3) return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e3);
    if ("object" === typeof d3 && null !== d3) {
      switch (d3.$$typeof) {
        case va:
          return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a3, d3, e3);
        case wa:
          return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a3, d3, e3);
        case Ha:
          var f3 = d3._init;
          return y2(a3, b3, c3, f3(d3._payload), e3);
      }
      if (eb(d3) || Ka(d3)) return a3 = a3.get(c3) || null, m2(b3, a3, d3, e3, null);
      Mg(b3, d3);
    }
    return null;
  }
  function n2(e3, g3, h3, k3) {
    for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e3, u2, h3[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a2 && u2 && null === n3.alternate && b2(e3, u2);
      g3 = f2(n3, g3, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h3.length) return c2(e3, u2), I$1 && tg(e3, w2), l3;
    if (null === u2) {
      for (; w2 < h3.length; w2++) u2 = q2(e3, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I$1 && tg(e3, w2);
      return l3;
    }
    for (u2 = d2(e3, u2); w2 < h3.length; w2++) x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a2 && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a2 && u2.forEach(function(a3) {
      return b2(e3, a3);
    });
    I$1 && tg(e3, w2);
    return l3;
  }
  function t2(e3, g3, h3, k3) {
    var l3 = Ka(h3);
    if ("function" !== typeof l3) throw Error(p$1(150));
    h3 = l3.call(h3);
    if (null == h3) throw Error(p$1(151));
    for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e3, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a2 && m3 && null === t3.alternate && b2(e3, m3);
      g3 = f2(t3, g3, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done) return c2(
      e3,
      m3
    ), I$1 && tg(e3, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h3.next()) n3 = q2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I$1 && tg(e3, w2);
      return l3;
    }
    for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next()) n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a2 && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a2 && m3.forEach(function(a3) {
      return b2(e3, a3);
    });
    I$1 && tg(e3, w2);
    return l3;
  }
  function J2(a3, d3, f3, h3) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d3; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c2(a3, l3.sibling);
                    d3 = e2(l3, f3.props.children);
                    d3.return = a3;
                    a3 = d3;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                  c2(a3, l3.sibling);
                  d3 = e2(l3, f3.props);
                  d3.ref = Lg(a3, l3, f3);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                }
                c2(a3, l3);
                break;
              } else b2(a3, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d3 = Tg(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = Rg(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = Lg(a3, d3, f3), h3.return = a3, a3 = h3);
          }
          return g2(a3);
        case wa:
          a: {
            for (l3 = f3.key; null !== d3; ) {
              if (d3.key === l3) if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                c2(a3, d3.sibling);
                d3 = e2(d3, f3.children || []);
                d3.return = a3;
                a3 = d3;
                break a;
              } else {
                c2(a3, d3);
                break;
              }
              else b2(a3, d3);
              d3 = d3.sibling;
            }
            d3 = Sg(f3, a3.mode, h3);
            d3.return = a3;
            a3 = d3;
          }
          return g2(a3);
        case Ha:
          return l3 = f3._init, J2(a3, d3, l3(f3._payload), h3);
      }
      if (eb(f3)) return n2(a3, d3, f3, h3);
      if (Ka(f3)) return t2(a3, d3, f3, h3);
      Mg(a3, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a3, d3.sibling), d3 = e2(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = Qg(f3, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3)) : c2(a3, d3);
  }
  return J2;
}
var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
function $g() {
  Zg = Yg = Xg = null;
}
function ah(a2) {
  var b2 = Wg.current;
  E$1(Wg);
  a2._currentValue = b2;
}
function bh(a2, b2, c2) {
  for (; null !== a2; ) {
    var d2 = a2.alternate;
    (a2.childLanes & b2) !== b2 ? (a2.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
    if (a2 === c2) break;
    a2 = a2.return;
  }
}
function ch(a2, b2) {
  Xg = a2;
  Zg = Yg = null;
  a2 = a2.dependencies;
  null !== a2 && null !== a2.firstContext && (0 !== (a2.lanes & b2) && (dh = true), a2.firstContext = null);
}
function eh(a2) {
  var b2 = a2._currentValue;
  if (Zg !== a2) if (a2 = { context: a2, memoizedValue: b2, next: null }, null === Yg) {
    if (null === Xg) throw Error(p$1(308));
    Yg = a2;
    Xg.dependencies = { lanes: 0, firstContext: a2 };
  } else Yg = Yg.next = a2;
  return b2;
}
var fh = null;
function gh(a2) {
  null === fh ? fh = [a2] : fh.push(a2);
}
function hh(a2, b2, c2, d2) {
  var e2 = b2.interleaved;
  null === e2 ? (c2.next = c2, gh(b2)) : (c2.next = e2.next, e2.next = c2);
  b2.interleaved = c2;
  return ih(a2, d2);
}
function ih(a2, b2) {
  a2.lanes |= b2;
  var c2 = a2.alternate;
  null !== c2 && (c2.lanes |= b2);
  c2 = a2;
  for (a2 = a2.return; null !== a2; ) a2.childLanes |= b2, c2 = a2.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
  return 3 === c2.tag ? c2.stateNode : null;
}
var jh = false;
function kh(a2) {
  a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function lh(a2, b2) {
  a2 = a2.updateQueue;
  b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
}
function mh(a2, b2) {
  return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function nh(a2, b2, c2) {
  var d2 = a2.updateQueue;
  if (null === d2) return null;
  d2 = d2.shared;
  if (0 !== (K$1 & 2)) {
    var e2 = d2.pending;
    null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
    d2.pending = b2;
    return ih(a2, c2);
  }
  e2 = d2.interleaved;
  null === e2 ? (b2.next = b2, gh(d2)) : (b2.next = e2.next, e2.next = b2);
  d2.interleaved = b2;
  return ih(a2, c2);
}
function oh(a2, b2, c2) {
  b2 = b2.updateQueue;
  if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a2, c2);
  }
}
function ph(a2, b2) {
  var c2 = a2.updateQueue, d2 = a2.alternate;
  if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (null !== c2) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (null !== c2);
      null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a2.updateQueue = c2;
    return;
  }
  a2 = c2.lastBaseUpdate;
  null === a2 ? c2.firstBaseUpdate = b2 : a2.next = b2;
  c2.lastBaseUpdate = b2;
}
function qh(a2, b2, c2, d2) {
  var e2 = a2.updateQueue;
  jh = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (null !== h2) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    null === g2 ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var m2 = a2.alternate;
    null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e2.baseState;
    g2 = 0;
    m2 = l2 = k2 = null;
    h2 = f2;
    do {
      var r2 = h2.lane, y2 = h2.eventTime;
      if ((d2 & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var n2 = a2, t2 = h2;
          r2 = b2;
          y2 = c2;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2) break a;
              q2 = A$1({}, q2, r2);
              break a;
            case 2:
              jh = true;
          }
        }
        null !== h2.callback && 0 !== h2.lane && (a2.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
      } else y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
      h2 = h2.next;
      if (null === h2) if (h2 = e2.shared.pending, null === h2) break;
      else r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = m2;
    b2 = e2.shared.interleaved;
    if (null !== b2) {
      e2 = b2;
      do
        g2 |= e2.lane, e2 = e2.next;
      while (e2 !== b2);
    } else null === f2 && (e2.shared.lanes = 0);
    rh |= g2;
    a2.lanes = g2;
    a2.memoizedState = q2;
  }
}
function sh(a2, b2, c2) {
  a2 = b2.effects;
  b2.effects = null;
  if (null !== a2) for (b2 = 0; b2 < a2.length; b2++) {
    var d2 = a2[b2], e2 = d2.callback;
    if (null !== e2) {
      d2.callback = null;
      d2 = c2;
      if ("function" !== typeof e2) throw Error(p$1(191, e2));
      e2.call(d2);
    }
  }
}
var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
function xh(a2) {
  if (a2 === th) throw Error(p$1(174));
  return a2;
}
function yh(a2, b2) {
  G$1(wh, b2);
  G$1(vh, a2);
  G$1(uh, th);
  a2 = b2.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
      break;
    default:
      a2 = 8 === a2 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = lb(b2, a2);
  }
  E$1(uh);
  G$1(uh, b2);
}
function zh() {
  E$1(uh);
  E$1(vh);
  E$1(wh);
}
function Ah(a2) {
  xh(wh.current);
  var b2 = xh(uh.current);
  var c2 = lb(b2, a2.type);
  b2 !== c2 && (G$1(vh, a2), G$1(uh, c2));
}
function Bh(a2) {
  vh.current === a2 && (E$1(uh), E$1(vh));
}
var L$1 = Uf(0);
function Ch(a2) {
  for (var b2 = a2; null !== b2; ) {
    if (13 === b2.tag) {
      var c2 = b2.memoizedState;
      if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data)) return b2;
    } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
      if (0 !== (b2.flags & 128)) return b2;
    } else if (null !== b2.child) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a2) break;
    for (; null === b2.sibling; ) {
      if (null === b2.return || b2.return === a2) return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Dh = [];
function Eh() {
  for (var a2 = 0; a2 < Dh.length; a2++) Dh[a2]._workInProgressVersionPrimary = null;
  Dh.length = 0;
}
var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M$1 = null, N$1 = null, O$1 = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
function P$1() {
  throw Error(p$1(321));
}
function Mh(a2, b2) {
  if (null === b2) return false;
  for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++) if (!He(a2[c2], b2[c2])) return false;
  return true;
}
function Nh(a2, b2, c2, d2, e2, f2) {
  Hh = f2;
  M$1 = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Fh.current = null === a2 || null === a2.memoizedState ? Oh : Ph;
  a2 = c2(d2, e2);
  if (Jh) {
    f2 = 0;
    do {
      Jh = false;
      Kh = 0;
      if (25 <= f2) throw Error(p$1(301));
      f2 += 1;
      O$1 = N$1 = null;
      b2.updateQueue = null;
      Fh.current = Qh;
      a2 = c2(d2, e2);
    } while (Jh);
  }
  Fh.current = Rh;
  b2 = null !== N$1 && null !== N$1.next;
  Hh = 0;
  O$1 = N$1 = M$1 = null;
  Ih = false;
  if (b2) throw Error(p$1(300));
  return a2;
}
function Sh() {
  var a2 = 0 !== Kh;
  Kh = 0;
  return a2;
}
function Th() {
  var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === O$1 ? M$1.memoizedState = O$1 = a2 : O$1 = O$1.next = a2;
  return O$1;
}
function Uh() {
  if (null === N$1) {
    var a2 = M$1.alternate;
    a2 = null !== a2 ? a2.memoizedState : null;
  } else a2 = N$1.next;
  var b2 = null === O$1 ? M$1.memoizedState : O$1.next;
  if (null !== b2) O$1 = b2, N$1 = a2;
  else {
    if (null === a2) throw Error(p$1(310));
    N$1 = a2;
    a2 = { memoizedState: N$1.memoizedState, baseState: N$1.baseState, baseQueue: N$1.baseQueue, queue: N$1.queue, next: null };
    null === O$1 ? M$1.memoizedState = O$1 = a2 : O$1 = O$1.next = a2;
  }
  return O$1;
}
function Vh(a2, b2) {
  return "function" === typeof b2 ? b2(a2) : b2;
}
function Wh(a2) {
  var b2 = Uh(), c2 = b2.queue;
  if (null === c2) throw Error(p$1(311));
  c2.lastRenderedReducer = a2;
  var d2 = N$1, e2 = d2.baseQueue, f2 = c2.pending;
  if (null !== f2) {
    if (null !== e2) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (null !== e2) {
    f2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a2(d2, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
        M$1.lanes |= m2;
        rh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g2 = d2 : k2.next = h2;
    He(d2, b2.memoizedState) || (dh = true);
    b2.memoizedState = d2;
    b2.baseState = g2;
    b2.baseQueue = k2;
    c2.lastRenderedState = d2;
  }
  a2 = c2.interleaved;
  if (null !== a2) {
    e2 = a2;
    do
      f2 = e2.lane, M$1.lanes |= f2, rh |= f2, e2 = e2.next;
    while (e2 !== a2);
  } else null === e2 && (c2.lanes = 0);
  return [b2.memoizedState, c2.dispatch];
}
function Xh(a2) {
  var b2 = Uh(), c2 = b2.queue;
  if (null === c2) throw Error(p$1(311));
  c2.lastRenderedReducer = a2;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (null !== e2) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a2(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    He(f2, b2.memoizedState) || (dh = true);
    b2.memoizedState = f2;
    null === b2.baseQueue && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function Yh() {
}
function Zh(a2, b2) {
  var c2 = M$1, d2 = Uh(), e2 = b2(), f2 = !He(d2.memoizedState, e2);
  f2 && (d2.memoizedState = e2, dh = true);
  d2 = d2.queue;
  $h(ai.bind(null, c2, d2, a2), [a2]);
  if (d2.getSnapshot !== b2 || f2 || null !== O$1 && O$1.memoizedState.tag & 1) {
    c2.flags |= 2048;
    bi(9, ci.bind(null, c2, d2, e2, b2), void 0, null);
    if (null === Q$1) throw Error(p$1(349));
    0 !== (Hh & 30) || di(c2, b2, e2);
  }
  return e2;
}
function di(a2, b2, c2) {
  a2.flags |= 16384;
  a2 = { getSnapshot: b2, value: c2 };
  b2 = M$1.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, M$1.updateQueue = b2, b2.stores = [a2]) : (c2 = b2.stores, null === c2 ? b2.stores = [a2] : c2.push(a2));
}
function ci(a2, b2, c2, d2) {
  b2.value = c2;
  b2.getSnapshot = d2;
  ei(b2) && fi(a2);
}
function ai(a2, b2, c2) {
  return c2(function() {
    ei(b2) && fi(a2);
  });
}
function ei(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var c2 = b2();
    return !He(a2, c2);
  } catch (d2) {
    return true;
  }
}
function fi(a2) {
  var b2 = ih(a2, 1);
  null !== b2 && gi(b2, a2, 1, -1);
}
function hi(a2) {
  var b2 = Th();
  "function" === typeof a2 && (a2 = a2());
  b2.memoizedState = b2.baseState = a2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a2 };
  b2.queue = a2;
  a2 = a2.dispatch = ii.bind(null, M$1, a2);
  return [b2.memoizedState, a2];
}
function bi(a2, b2, c2, d2) {
  a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
  b2 = M$1.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, M$1.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
  return a2;
}
function ji() {
  return Uh().memoizedState;
}
function ki(a2, b2, c2, d2) {
  var e2 = Th();
  M$1.flags |= a2;
  e2.memoizedState = bi(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
}
function li(a2, b2, c2, d2) {
  var e2 = Uh();
  d2 = void 0 === d2 ? null : d2;
  var f2 = void 0;
  if (null !== N$1) {
    var g2 = N$1.memoizedState;
    f2 = g2.destroy;
    if (null !== d2 && Mh(d2, g2.deps)) {
      e2.memoizedState = bi(b2, c2, f2, d2);
      return;
    }
  }
  M$1.flags |= a2;
  e2.memoizedState = bi(1 | b2, c2, f2, d2);
}
function mi(a2, b2) {
  return ki(8390656, 8, a2, b2);
}
function $h(a2, b2) {
  return li(2048, 8, a2, b2);
}
function ni(a2, b2) {
  return li(4, 2, a2, b2);
}
function oi(a2, b2) {
  return li(4, 4, a2, b2);
}
function pi(a2, b2) {
  if ("function" === typeof b2) return a2 = a2(), b2(a2), function() {
    b2(null);
  };
  if (null !== b2 && void 0 !== b2) return a2 = a2(), b2.current = a2, function() {
    b2.current = null;
  };
}
function qi(a2, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
  return li(4, 4, pi.bind(null, b2, a2), c2);
}
function ri() {
}
function si(a2, b2) {
  var c2 = Uh();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
  c2.memoizedState = [a2, b2];
  return a2;
}
function ti(a2, b2) {
  var c2 = Uh();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}
function ui(a2, b2, c2) {
  if (0 === (Hh & 21)) return a2.baseState && (a2.baseState = false, dh = true), a2.memoizedState = c2;
  He(c2, b2) || (c2 = yc(), M$1.lanes |= c2, rh |= c2, a2.baseState = true);
  return b2;
}
function vi(a2, b2) {
  var c2 = C$1;
  C$1 = 0 !== c2 && 4 > c2 ? c2 : 4;
  a2(true);
  var d2 = Gh.transition;
  Gh.transition = {};
  try {
    a2(false), b2();
  } finally {
    C$1 = c2, Gh.transition = d2;
  }
}
function wi() {
  return Uh().memoizedState;
}
function xi(a2, b2, c2) {
  var d2 = yi(a2);
  c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (zi(a2)) Ai(b2, c2);
  else if (c2 = hh(a2, b2, c2, d2), null !== c2) {
    var e2 = R$1();
    gi(c2, a2, d2, e2);
    Bi(c2, b2, d2);
  }
}
function ii(a2, b2, c2) {
  var d2 = yi(a2), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (zi(a2)) Ai(b2, e2);
  else {
    var f2 = a2.alternate;
    if (0 === a2.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2)) try {
      var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
      e2.hasEagerState = true;
      e2.eagerState = h2;
      if (He(h2, g2)) {
        var k2 = b2.interleaved;
        null === k2 ? (e2.next = e2, gh(b2)) : (e2.next = k2.next, k2.next = e2);
        b2.interleaved = e2;
        return;
      }
    } catch (l2) {
    } finally {
    }
    c2 = hh(a2, b2, e2, d2);
    null !== c2 && (e2 = R$1(), gi(c2, a2, d2, e2), Bi(c2, b2, d2));
  }
}
function zi(a2) {
  var b2 = a2.alternate;
  return a2 === M$1 || null !== b2 && b2 === M$1;
}
function Ai(a2, b2) {
  Jh = Ih = true;
  var c2 = a2.pending;
  null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
  a2.pending = b2;
}
function Bi(a2, b2, c2) {
  if (0 !== (c2 & 4194240)) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a2, c2);
  }
}
var Rh = { readContext: eh, useCallback: P$1, useContext: P$1, useEffect: P$1, useImperativeHandle: P$1, useInsertionEffect: P$1, useLayoutEffect: P$1, useMemo: P$1, useReducer: P$1, useRef: P$1, useState: P$1, useDebugValue: P$1, useDeferredValue: P$1, useTransition: P$1, useMutableSource: P$1, useSyncExternalStore: P$1, useId: P$1, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a2, b2) {
  Th().memoizedState = [a2, void 0 === b2 ? null : b2];
  return a2;
}, useContext: eh, useEffect: mi, useImperativeHandle: function(a2, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
  return ki(
    4194308,
    4,
    pi.bind(null, b2, a2),
    c2
  );
}, useLayoutEffect: function(a2, b2) {
  return ki(4194308, 4, a2, b2);
}, useInsertionEffect: function(a2, b2) {
  return ki(4, 2, a2, b2);
}, useMemo: function(a2, b2) {
  var c2 = Th();
  b2 = void 0 === b2 ? null : b2;
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}, useReducer: function(a2, b2, c2) {
  var d2 = Th();
  b2 = void 0 !== c2 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
  d2.queue = a2;
  a2 = a2.dispatch = xi.bind(null, M$1, a2);
  return [d2.memoizedState, a2];
}, useRef: function(a2) {
  var b2 = Th();
  a2 = { current: a2 };
  return b2.memoizedState = a2;
}, useState: hi, useDebugValue: ri, useDeferredValue: function(a2) {
  return Th().memoizedState = a2;
}, useTransition: function() {
  var a2 = hi(false), b2 = a2[0];
  a2 = vi.bind(null, a2[1]);
  Th().memoizedState = a2;
  return [b2, a2];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a2, b2, c2) {
  var d2 = M$1, e2 = Th();
  if (I$1) {
    if (void 0 === c2) throw Error(p$1(407));
    c2 = c2();
  } else {
    c2 = b2();
    if (null === Q$1) throw Error(p$1(349));
    0 !== (Hh & 30) || di(d2, b2, c2);
  }
  e2.memoizedState = c2;
  var f2 = { value: c2, getSnapshot: b2 };
  e2.queue = f2;
  mi(ai.bind(
    null,
    d2,
    f2,
    a2
  ), [a2]);
  d2.flags |= 2048;
  bi(9, ci.bind(null, d2, f2, c2, b2), void 0, null);
  return c2;
}, useId: function() {
  var a2 = Th(), b2 = Q$1.identifierPrefix;
  if (I$1) {
    var c2 = sg;
    var d2 = rg;
    c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
    b2 = ":" + b2 + "R" + c2;
    c2 = Kh++;
    0 < c2 && (b2 += "H" + c2.toString(32));
    b2 += ":";
  } else c2 = Lh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
  return a2.memoizedState = b2;
}, unstable_isNewReconciler: false }, Ph = {
  readContext: eh,
  useCallback: si,
  useContext: eh,
  useEffect: $h,
  useImperativeHandle: qi,
  useInsertionEffect: ni,
  useLayoutEffect: oi,
  useMemo: ti,
  useReducer: Wh,
  useRef: ji,
  useState: function() {
    return Wh(Vh);
  },
  useDebugValue: ri,
  useDeferredValue: function(a2) {
    var b2 = Uh();
    return ui(b2, N$1.memoizedState, a2);
  },
  useTransition: function() {
    var a2 = Wh(Vh)[0], b2 = Uh().memoizedState;
    return [a2, b2];
  },
  useMutableSource: Yh,
  useSyncExternalStore: Zh,
  useId: wi,
  unstable_isNewReconciler: false
}, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
  return Xh(Vh);
}, useDebugValue: ri, useDeferredValue: function(a2) {
  var b2 = Uh();
  return null === N$1 ? b2.memoizedState = a2 : ui(b2, N$1.memoizedState, a2);
}, useTransition: function() {
  var a2 = Xh(Vh)[0], b2 = Uh().memoizedState;
  return [a2, b2];
}, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
function Ci(a2, b2) {
  if (a2 && a2.defaultProps) {
    b2 = A$1({}, b2);
    a2 = a2.defaultProps;
    for (var c2 in a2) void 0 === b2[c2] && (b2[c2] = a2[c2]);
    return b2;
  }
  return b2;
}
function Di(a2, b2, c2, d2) {
  b2 = a2.memoizedState;
  c2 = c2(d2, b2);
  c2 = null === c2 || void 0 === c2 ? b2 : A$1({}, b2, c2);
  a2.memoizedState = c2;
  0 === a2.lanes && (a2.updateQueue.baseState = c2);
}
var Ei = { isMounted: function(a2) {
  return (a2 = a2._reactInternals) ? Vb(a2) === a2 : false;
}, enqueueSetState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = R$1(), e2 = yi(a2), f2 = mh(d2, e2);
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = nh(a2, f2, e2);
  null !== b2 && (gi(b2, a2, e2, d2), oh(b2, a2, e2));
}, enqueueReplaceState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = R$1(), e2 = yi(a2), f2 = mh(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = nh(a2, f2, e2);
  null !== b2 && (gi(b2, a2, e2, d2), oh(b2, a2, e2));
}, enqueueForceUpdate: function(a2, b2) {
  a2 = a2._reactInternals;
  var c2 = R$1(), d2 = yi(a2), e2 = mh(c2, d2);
  e2.tag = 2;
  void 0 !== b2 && null !== b2 && (e2.callback = b2);
  b2 = nh(a2, e2, d2);
  null !== b2 && (gi(b2, a2, d2, c2), oh(b2, a2, d2));
} };
function Fi(a2, b2, c2, d2, e2, f2, g2) {
  a2 = a2.stateNode;
  return "function" === typeof a2.shouldComponentUpdate ? a2.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie(c2, d2) || !Ie(e2, f2) : true;
}
function Gi(a2, b2, c2) {
  var d2 = false, e2 = Vf;
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e2 = Zf(b2) ? Xf : H$1.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a2, e2) : Vf);
  b2 = new b2(c2, f2);
  a2.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
  b2.updater = Ei;
  a2.stateNode = b2;
  b2._reactInternals = a2;
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Hi(a2, b2, c2, d2) {
  a2 = b2.state;
  "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
  "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a2 && Ei.enqueueReplaceState(b2, b2.state, null);
}
function Ii(a2, b2, c2, d2) {
  var e2 = a2.stateNode;
  e2.props = c2;
  e2.state = a2.memoizedState;
  e2.refs = {};
  kh(a2);
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? e2.context = eh(f2) : (f2 = Zf(b2) ? Xf : H$1.current, e2.context = Yf(a2, f2));
  e2.state = a2.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  "function" === typeof f2 && (Di(a2, b2, f2, c2), e2.state = a2.memoizedState);
  "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Ei.enqueueReplaceState(e2, e2.state, null), qh(a2, c2, e2, d2), e2.state = a2.memoizedState);
  "function" === typeof e2.componentDidMount && (a2.flags |= 4194308);
}
function Ji(a2, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Pa(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a2, source: b2, stack: e2, digest: null };
}
function Ki(a2, b2, c2) {
  return { value: a2, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
}
function Li(a2, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Mi = "function" === typeof WeakMap ? WeakMap : Map;
function Ni(a2, b2, c2) {
  c2 = mh(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Oi || (Oi = true, Pi = d2);
    Li(a2, b2);
  };
  return c2;
}
function Qi(a2, b2, c2) {
  c2 = mh(-1, c2);
  c2.tag = 3;
  var d2 = a2.type.getDerivedStateFromError;
  if ("function" === typeof d2) {
    var e2 = b2.value;
    c2.payload = function() {
      return d2(e2);
    };
    c2.callback = function() {
      Li(a2, b2);
    };
  }
  var f2 = a2.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
    Li(a2, b2);
    "function" !== typeof d2 && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
  });
  return c2;
}
function Si(a2, b2, c2) {
  var d2 = a2.pingCache;
  if (null === d2) {
    d2 = a2.pingCache = new Mi();
    var e2 = /* @__PURE__ */ new Set();
    d2.set(b2, e2);
  } else e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
  e2.has(c2) || (e2.add(c2), a2 = Ti.bind(null, a2, b2, c2), b2.then(a2, a2));
}
function Ui(a2) {
  do {
    var b2;
    if (b2 = 13 === a2.tag) b2 = a2.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
    if (b2) return a2;
    a2 = a2.return;
  } while (null !== a2);
  return null;
}
function Vi(a2, b2, c2, d2, e2) {
  if (0 === (a2.mode & 1)) return a2 === b2 ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = mh(-1, 1), b2.tag = 2, nh(c2, b2, 1))), c2.lanes |= 1), a2;
  a2.flags |= 65536;
  a2.lanes = e2;
  return a2;
}
var Wi = ua.ReactCurrentOwner, dh = false;
function Xi(a2, b2, c2, d2) {
  b2.child = null === a2 ? Vg(b2, null, c2, d2) : Ug(b2, a2.child, c2, d2);
}
function Yi(a2, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  ch(b2, e2);
  d2 = Nh(a2, b2, c2, d2, f2, e2);
  c2 = Sh();
  if (null !== a2 && !dh) return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, Zi(a2, b2, e2);
  I$1 && c2 && vg(b2);
  b2.flags |= 1;
  Xi(a2, b2, d2, e2);
  return b2.child;
}
function $i(a2, b2, c2, d2, e2) {
  if (null === a2) {
    var f2 = c2.type;
    if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps) return b2.tag = 15, b2.type = f2, bj(a2, b2, f2, d2, e2);
    a2 = Rg(c2.type, null, d2, b2, b2.mode, e2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  f2 = a2.child;
  if (0 === (a2.lanes & e2)) {
    var g2 = f2.memoizedProps;
    c2 = c2.compare;
    c2 = null !== c2 ? c2 : Ie;
    if (c2(g2, d2) && a2.ref === b2.ref) return Zi(a2, b2, e2);
  }
  b2.flags |= 1;
  a2 = Pg(f2, d2);
  a2.ref = b2.ref;
  a2.return = b2;
  return b2.child = a2;
}
function bj(a2, b2, c2, d2, e2) {
  if (null !== a2) {
    var f2 = a2.memoizedProps;
    if (Ie(f2, d2) && a2.ref === b2.ref) if (dh = false, b2.pendingProps = d2 = f2, 0 !== (a2.lanes & e2)) 0 !== (a2.flags & 131072) && (dh = true);
    else return b2.lanes = a2.lanes, Zi(a2, b2, e2);
  }
  return cj(a2, b2, c2, d2, e2);
}
function dj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a2 ? a2.memoizedState : null;
  if ("hidden" === d2.mode) if (0 === (b2.mode & 1)) b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G$1(ej, fj), fj |= c2;
  else {
    if (0 === (c2 & 1073741824)) return a2 = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b2.updateQueue = null, G$1(ej, fj), fj |= a2, null;
    b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
    d2 = null !== f2 ? f2.baseLanes : c2;
    G$1(ej, fj);
    fj |= d2;
  }
  else null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G$1(ej, fj), fj |= d2;
  Xi(a2, b2, e2, c2);
  return b2.child;
}
function gj(a2, b2) {
  var c2 = b2.ref;
  if (null === a2 && null !== c2 || null !== a2 && a2.ref !== c2) b2.flags |= 512, b2.flags |= 2097152;
}
function cj(a2, b2, c2, d2, e2) {
  var f2 = Zf(c2) ? Xf : H$1.current;
  f2 = Yf(b2, f2);
  ch(b2, e2);
  c2 = Nh(a2, b2, c2, d2, f2, e2);
  d2 = Sh();
  if (null !== a2 && !dh) return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, Zi(a2, b2, e2);
  I$1 && d2 && vg(b2);
  b2.flags |= 1;
  Xi(a2, b2, c2, e2);
  return b2.child;
}
function hj(a2, b2, c2, d2, e2) {
  if (Zf(c2)) {
    var f2 = true;
    cg(b2);
  } else f2 = false;
  ch(b2, e2);
  if (null === b2.stateNode) ij(a2, b2), Gi(b2, c2, d2), Ii(b2, c2, d2, e2), d2 = true;
  else if (null === a2) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c2) ? Xf : H$1.current, l2 = Yf(b2, l2));
    var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && Hi(b2, g2, d2, l2);
    jh = false;
    var r2 = b2.memoizedState;
    g2.state = r2;
    qh(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = jh || Fi(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
  } else {
    g2 = b2.stateNode;
    lh(a2, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : Ci(b2.type, h2);
    g2.props = l2;
    q2 = b2.pendingProps;
    r2 = g2.context;
    k2 = c2.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c2) ? Xf : H$1.current, k2 = Yf(b2, k2));
    var y2 = c2.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && Hi(b2, g2, d2, k2);
    jh = false;
    r2 = b2.memoizedState;
    g2.state = r2;
    qh(b2, d2, g2, e2);
    var n2 = b2.memoizedState;
    h2 !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = jh || Fi(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), d2 = false);
  }
  return jj(a2, b2, c2, d2, f2, e2);
}
function jj(a2, b2, c2, d2, e2, f2) {
  gj(a2, b2);
  var g2 = 0 !== (b2.flags & 128);
  if (!d2 && !g2) return e2 && dg(b2, c2, false), Zi(a2, b2, f2);
  d2 = b2.stateNode;
  Wi.current = b2;
  var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
  b2.flags |= 1;
  null !== a2 && g2 ? (b2.child = Ug(b2, a2.child, null, f2), b2.child = Ug(b2, null, h2, f2)) : Xi(a2, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && dg(b2, c2, true);
  return b2.child;
}
function kj(a2) {
  var b2 = a2.stateNode;
  b2.pendingContext ? ag(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a2, b2.context, false);
  yh(a2, b2.containerInfo);
}
function lj(a2, b2, c2, d2, e2) {
  Ig();
  Jg(e2);
  b2.flags |= 256;
  Xi(a2, b2, c2, d2);
  return b2.child;
}
var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
function nj(a2) {
  return { baseLanes: a2, cachePool: null, transitions: null };
}
function oj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = L$1.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
  (h2 = g2) || (h2 = null !== a2 && null === a2.memoizedState ? false : 0 !== (e2 & 2));
  if (h2) f2 = true, b2.flags &= -129;
  else if (null === a2 || null !== a2.memoizedState) e2 |= 1;
  G$1(L$1, e2 & 1);
  if (null === a2) {
    Eg(b2);
    a2 = b2.memoizedState;
    if (null !== a2 && (a2 = a2.dehydrated, null !== a2)) return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a2.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    g2 = d2.children;
    a2 = d2.fallback;
    return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = pj(g2, d2, 0, null), a2 = Tg(a2, d2, c2, null), f2.return = b2, a2.return = b2, f2.sibling = a2, b2.child = f2, b2.child.memoizedState = nj(c2), b2.memoizedState = mj, a2) : qj(b2, g2);
  }
  e2 = a2.memoizedState;
  if (null !== e2 && (h2 = e2.dehydrated, null !== h2)) return rj(a2, b2, g2, d2, h2, e2, c2);
  if (f2) {
    f2 = d2.fallback;
    g2 = b2.mode;
    e2 = a2.child;
    h2 = e2.sibling;
    var k2 = { mode: "hidden", children: d2.children };
    0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = Pg(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
    null !== h2 ? f2 = Pg(h2, f2) : (f2 = Tg(f2, g2, c2, null), f2.flags |= 2);
    f2.return = b2;
    d2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    d2 = f2;
    f2 = b2.child;
    g2 = a2.child.memoizedState;
    g2 = null === g2 ? nj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
    f2.memoizedState = g2;
    f2.childLanes = a2.childLanes & ~c2;
    b2.memoizedState = mj;
    return d2;
  }
  f2 = a2.child;
  a2 = f2.sibling;
  d2 = Pg(f2, { mode: "visible", children: d2.children });
  0 === (b2.mode & 1) && (d2.lanes = c2);
  d2.return = b2;
  d2.sibling = null;
  null !== a2 && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a2], b2.flags |= 16) : c2.push(a2));
  b2.child = d2;
  b2.memoizedState = null;
  return d2;
}
function qj(a2, b2) {
  b2 = pj({ mode: "visible", children: b2 }, a2.mode, 0, null);
  b2.return = a2;
  return a2.child = b2;
}
function sj(a2, b2, c2, d2) {
  null !== d2 && Jg(d2);
  Ug(b2, a2.child, null, c2);
  a2 = qj(b2, b2.pendingProps.children);
  a2.flags |= 2;
  b2.memoizedState = null;
  return a2;
}
function rj(a2, b2, c2, d2, e2, f2, g2) {
  if (c2) {
    if (b2.flags & 256) return b2.flags &= -257, d2 = Ki(Error(p$1(422))), sj(a2, b2, g2, d2);
    if (null !== b2.memoizedState) return b2.child = a2.child, b2.flags |= 128, null;
    f2 = d2.fallback;
    e2 = b2.mode;
    d2 = pj({ mode: "visible", children: d2.children }, e2, 0, null);
    f2 = Tg(f2, e2, g2, null);
    f2.flags |= 2;
    d2.return = b2;
    f2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    0 !== (b2.mode & 1) && Ug(b2, a2.child, null, g2);
    b2.child.memoizedState = nj(g2);
    b2.memoizedState = mj;
    return f2;
  }
  if (0 === (b2.mode & 1)) return sj(a2, b2, g2, null);
  if ("$!" === e2.data) {
    d2 = e2.nextSibling && e2.nextSibling.dataset;
    if (d2) var h2 = d2.dgst;
    d2 = h2;
    f2 = Error(p$1(419));
    d2 = Ki(f2, d2, void 0);
    return sj(a2, b2, g2, d2);
  }
  h2 = 0 !== (g2 & a2.childLanes);
  if (dh || h2) {
    d2 = Q$1;
    if (null !== d2) {
      switch (g2 & -g2) {
        case 4:
          e2 = 2;
          break;
        case 16:
          e2 = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e2 = 32;
          break;
        case 536870912:
          e2 = 268435456;
          break;
        default:
          e2 = 0;
      }
      e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
      0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, ih(a2, e2), gi(d2, a2, e2, -1));
    }
    tj();
    d2 = Ki(Error(p$1(421)));
    return sj(a2, b2, g2, d2);
  }
  if ("$?" === e2.data) return b2.flags |= 128, b2.child = a2.child, b2 = uj.bind(null, a2), e2._reactRetry = b2, null;
  a2 = f2.treeContext;
  yg = Lf(e2.nextSibling);
  xg = b2;
  I$1 = true;
  zg = null;
  null !== a2 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a2.id, sg = a2.overflow, qg = b2);
  b2 = qj(b2, d2.children);
  b2.flags |= 4096;
  return b2;
}
function vj(a2, b2, c2) {
  a2.lanes |= b2;
  var d2 = a2.alternate;
  null !== d2 && (d2.lanes |= b2);
  bh(a2.return, b2, c2);
}
function wj(a2, b2, c2, d2, e2) {
  var f2 = a2.memoizedState;
  null === f2 ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
}
function xj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  Xi(a2, b2, d2.children, c2);
  d2 = L$1.current;
  if (0 !== (d2 & 2)) d2 = d2 & 1 | 2, b2.flags |= 128;
  else {
    if (null !== a2 && 0 !== (a2.flags & 128)) a: for (a2 = b2.child; null !== a2; ) {
      if (13 === a2.tag) null !== a2.memoizedState && vj(a2, c2, b2);
      else if (19 === a2.tag) vj(a2, c2, b2);
      else if (null !== a2.child) {
        a2.child.return = a2;
        a2 = a2.child;
        continue;
      }
      if (a2 === b2) break a;
      for (; null === a2.sibling; ) {
        if (null === a2.return || a2.return === b2) break a;
        a2 = a2.return;
      }
      a2.sibling.return = a2.return;
      a2 = a2.sibling;
    }
    d2 &= 1;
  }
  G$1(L$1, d2);
  if (0 === (b2.mode & 1)) b2.memoizedState = null;
  else switch (e2) {
    case "forwards":
      c2 = b2.child;
      for (e2 = null; null !== c2; ) a2 = c2.alternate, null !== a2 && null === Ch(a2) && (e2 = c2), c2 = c2.sibling;
      c2 = e2;
      null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
      wj(b2, false, e2, c2, f2);
      break;
    case "backwards":
      c2 = null;
      e2 = b2.child;
      for (b2.child = null; null !== e2; ) {
        a2 = e2.alternate;
        if (null !== a2 && null === Ch(a2)) {
          b2.child = e2;
          break;
        }
        a2 = e2.sibling;
        e2.sibling = c2;
        c2 = e2;
        e2 = a2;
      }
      wj(b2, true, c2, null, f2);
      break;
    case "together":
      wj(b2, false, null, null, void 0);
      break;
    default:
      b2.memoizedState = null;
  }
  return b2.child;
}
function ij(a2, b2) {
  0 === (b2.mode & 1) && null !== a2 && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
}
function Zi(a2, b2, c2) {
  null !== a2 && (b2.dependencies = a2.dependencies);
  rh |= b2.lanes;
  if (0 === (c2 & b2.childLanes)) return null;
  if (null !== a2 && b2.child !== a2.child) throw Error(p$1(153));
  if (null !== b2.child) {
    a2 = b2.child;
    c2 = Pg(a2, a2.pendingProps);
    b2.child = c2;
    for (c2.return = b2; null !== a2.sibling; ) a2 = a2.sibling, c2 = c2.sibling = Pg(a2, a2.pendingProps), c2.return = b2;
    c2.sibling = null;
  }
  return b2.child;
}
function yj(a2, b2, c2) {
  switch (b2.tag) {
    case 3:
      kj(b2);
      Ig();
      break;
    case 5:
      Ah(b2);
      break;
    case 1:
      Zf(b2.type) && cg(b2);
      break;
    case 4:
      yh(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d2 = b2.type._context, e2 = b2.memoizedProps.value;
      G$1(Wg, d2._currentValue);
      d2._currentValue = e2;
      break;
    case 13:
      d2 = b2.memoizedState;
      if (null !== d2) {
        if (null !== d2.dehydrated) return G$1(L$1, L$1.current & 1), b2.flags |= 128, null;
        if (0 !== (c2 & b2.child.childLanes)) return oj(a2, b2, c2);
        G$1(L$1, L$1.current & 1);
        a2 = Zi(a2, b2, c2);
        return null !== a2 ? a2.sibling : null;
      }
      G$1(L$1, L$1.current & 1);
      break;
    case 19:
      d2 = 0 !== (c2 & b2.childLanes);
      if (0 !== (a2.flags & 128)) {
        if (d2) return xj(a2, b2, c2);
        b2.flags |= 128;
      }
      e2 = b2.memoizedState;
      null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      G$1(L$1, L$1.current);
      if (d2) break;
      else return null;
    case 22:
    case 23:
      return b2.lanes = 0, dj(a2, b2, c2);
  }
  return Zi(a2, b2, c2);
}
var zj, Aj, Bj, Cj;
zj = function(a2, b2) {
  for (var c2 = b2.child; null !== c2; ) {
    if (5 === c2.tag || 6 === c2.tag) a2.appendChild(c2.stateNode);
    else if (4 !== c2.tag && null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2) break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === b2) return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Aj = function() {
};
Bj = function(a2, b2, c2, d2) {
  var e2 = a2.memoizedProps;
  if (e2 !== d2) {
    a2 = b2.stateNode;
    xh(uh.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Ya(a2, e2);
        d2 = Ya(a2, d2);
        f2 = [];
        break;
      case "select":
        e2 = A$1({}, e2, { value: void 0 });
        d2 = A$1({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a2, e2);
        d2 = gb(a2, d2);
        f2 = [];
        break;
      default:
        "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a2.onclick = Bf);
    }
    ub(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2) if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2]) if ("style" === l2) {
      var h2 = e2[l2];
      for (g2 in h2) h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
    } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = null != e2 ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2)) if ("style" === l2) if (h2) {
        for (g2 in h2) !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
        for (g2 in k2) k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
      } else c2 || (f2 || (f2 = []), f2.push(
        l2,
        c2
      )), c2 = k2;
      else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D$1("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2) b2.flags |= 4;
  }
};
Cj = function(a2, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Dj(a2, b2) {
  if (!I$1) switch (a2.tailMode) {
    case "hidden":
      b2 = a2.tail;
      for (var c2 = null; null !== b2; ) null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
      null === c2 ? a2.tail = null : c2.sibling = null;
      break;
    case "collapsed":
      c2 = a2.tail;
      for (var d2 = null; null !== c2; ) null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
      null === d2 ? b2 || null === a2.tail ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
  }
}
function S$1(a2) {
  var b2 = null !== a2.alternate && a2.alternate.child === a2.child, c2 = 0, d2 = 0;
  if (b2) for (var e2 = a2.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a2, e2 = e2.sibling;
  else for (e2 = a2.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a2, e2 = e2.sibling;
  a2.subtreeFlags |= d2;
  a2.childLanes = c2;
  return b2;
}
function Ej(a2, b2, c2) {
  var d2 = b2.pendingProps;
  wg(b2);
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S$1(b2), null;
    case 1:
      return Zf(b2.type) && $f(), S$1(b2), null;
    case 3:
      d2 = b2.stateNode;
      zh();
      E$1(Wf);
      E$1(H$1);
      Eh();
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (null === a2 || null === a2.child) Gg(b2) ? b2.flags |= 4 : null === a2 || a2.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Fj(zg), zg = null));
      Aj(a2, b2);
      S$1(b2);
      return null;
    case 5:
      Bh(b2);
      var e2 = xh(wh.current);
      c2 = b2.type;
      if (null !== a2 && null != b2.stateNode) Bj(a2, b2, c2, d2, e2), a2.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d2) {
          if (null === b2.stateNode) throw Error(p$1(166));
          S$1(b2);
          return null;
        }
        a2 = xh(uh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[Of] = b2;
          d2[Pf] = f2;
          a2 = 0 !== (b2.mode & 1);
          switch (c2) {
            case "dialog":
              D$1("cancel", d2);
              D$1("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              D$1("load", d2);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < lf.length; e2++) D$1(lf[e2], d2);
              break;
            case "source":
              D$1("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              D$1(
                "error",
                d2
              );
              D$1("load", d2);
              break;
            case "details":
              D$1("toggle", d2);
              break;
            case "input":
              Za(d2, f2);
              D$1("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              D$1("invalid", d2);
              break;
            case "textarea":
              hb(d2, f2), D$1("invalid", d2);
          }
          ub(c2, f2);
          e2 = null;
          for (var g2 in f2) if (f2.hasOwnProperty(g2)) {
            var h2 = f2[g2];
            "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a2), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
              d2.textContent,
              h2,
              a2
            ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D$1("scroll", d2);
          }
          switch (c2) {
            case "input":
              Va(d2);
              db(d2, f2, true);
              break;
            case "textarea":
              Va(d2);
              jb(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d2.onclick = Bf);
          }
          d2 = e2;
          b2.updateQueue = d2;
          null !== d2 && (b2.flags |= 4);
        } else {
          g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a2 && (a2 = kb(c2));
          "http://www.w3.org/1999/xhtml" === a2 ? "script" === c2 ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : "string" === typeof d2.is ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), "select" === c2 && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
          a2[Of] = b2;
          a2[Pf] = d2;
          zj(a2, b2, false, false);
          b2.stateNode = a2;
          a: {
            g2 = vb(c2, d2);
            switch (c2) {
              case "dialog":
                D$1("cancel", a2);
                D$1("close", a2);
                e2 = d2;
                break;
              case "iframe":
              case "object":
              case "embed":
                D$1("load", a2);
                e2 = d2;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < lf.length; e2++) D$1(lf[e2], a2);
                e2 = d2;
                break;
              case "source":
                D$1("error", a2);
                e2 = d2;
                break;
              case "img":
              case "image":
              case "link":
                D$1(
                  "error",
                  a2
                );
                D$1("load", a2);
                e2 = d2;
                break;
              case "details":
                D$1("toggle", a2);
                e2 = d2;
                break;
              case "input":
                Za(a2, d2);
                e2 = Ya(a2, d2);
                D$1("invalid", a2);
                break;
              case "option":
                e2 = d2;
                break;
              case "select":
                a2._wrapperState = { wasMultiple: !!d2.multiple };
                e2 = A$1({}, d2, { value: void 0 });
                D$1("invalid", a2);
                break;
              case "textarea":
                hb(a2, d2);
                e2 = gb(a2, d2);
                D$1("invalid", a2);
                break;
              default:
                e2 = d2;
            }
            ub(c2, e2);
            h2 = e2;
            for (f2 in h2) if (h2.hasOwnProperty(f2)) {
              var k2 = h2[f2];
              "style" === f2 ? sb(a2, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a2, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a2, k2) : "number" === typeof k2 && ob(a2, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D$1("scroll", a2) : null != k2 && ta(a2, f2, k2, g2));
            }
            switch (c2) {
              case "input":
                Va(a2);
                db(a2, d2, false);
                break;
              case "textarea":
                Va(a2);
                jb(a2);
                break;
              case "option":
                null != d2.value && a2.setAttribute("value", "" + Sa(d2.value));
                break;
              case "select":
                a2.multiple = !!d2.multiple;
                f2 = d2.value;
                null != f2 ? fb(a2, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                  a2,
                  !!d2.multiple,
                  d2.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e2.onClick && (a2.onclick = Bf);
            }
            switch (c2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d2 = !!d2.autoFocus;
                break a;
              case "img":
                d2 = true;
                break a;
              default:
                d2 = false;
            }
          }
          d2 && (b2.flags |= 4);
        }
        null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      }
      S$1(b2);
      return null;
    case 6:
      if (a2 && null != b2.stateNode) Cj(a2, b2, a2.memoizedProps, d2);
      else {
        if ("string" !== typeof d2 && null === b2.stateNode) throw Error(p$1(166));
        c2 = xh(wh.current);
        xh(uh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.memoizedProps;
          d2[Of] = b2;
          if (f2 = d2.nodeValue !== c2) {
            if (a2 = xg, null !== a2) switch (a2.tag) {
              case 3:
                Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
                break;
              case 5:
                true !== a2.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
            }
          }
          f2 && (b2.flags |= 4);
        } else d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
      }
      S$1(b2);
      return null;
    case 13:
      E$1(L$1);
      d2 = b2.memoizedState;
      if (null === a2 || null !== a2.memoizedState && null !== a2.memoizedState.dehydrated) {
        if (I$1 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128)) Hg(), Ig(), b2.flags |= 98560, f2 = false;
        else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
          if (null === a2) {
            if (!f2) throw Error(p$1(318));
            f2 = b2.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2) throw Error(p$1(317));
            f2[Of] = b2;
          } else Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
          S$1(b2);
          f2 = false;
        } else null !== zg && (Fj(zg), zg = null), f2 = true;
        if (!f2) return b2.flags & 65536 ? b2 : null;
      }
      if (0 !== (b2.flags & 128)) return b2.lanes = c2, b2;
      d2 = null !== d2;
      d2 !== (null !== a2 && null !== a2.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a2 || 0 !== (L$1.current & 1) ? 0 === T$1 && (T$1 = 3) : tj()));
      null !== b2.updateQueue && (b2.flags |= 4);
      S$1(b2);
      return null;
    case 4:
      return zh(), Aj(a2, b2), null === a2 && sf(b2.stateNode.containerInfo), S$1(b2), null;
    case 10:
      return ah(b2.type._context), S$1(b2), null;
    case 17:
      return Zf(b2.type) && $f(), S$1(b2), null;
    case 19:
      E$1(L$1);
      f2 = b2.memoizedState;
      if (null === f2) return S$1(b2), null;
      d2 = 0 !== (b2.flags & 128);
      g2 = f2.rendering;
      if (null === g2) if (d2) Dj(f2, false);
      else {
        if (0 !== T$1 || null !== a2 && 0 !== (a2.flags & 128)) for (a2 = b2.child; null !== a2; ) {
          g2 = Ch(a2);
          if (null !== g2) {
            b2.flags |= 128;
            Dj(f2, false);
            d2 = g2.updateQueue;
            null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
            b2.subtreeFlags = 0;
            d2 = c2;
            for (c2 = b2.child; null !== c2; ) f2 = c2, a2 = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = null === a2 ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
            G$1(L$1, L$1.current & 1 | 2);
            return b2.child;
          }
          a2 = a2.sibling;
        }
        null !== f2.tail && B$1() > Gj && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
      }
      else {
        if (!d2) if (a2 = Ch(g2), null !== a2) {
          if (b2.flags |= 128, d2 = true, c2 = a2.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I$1) return S$1(b2), null;
        } else 2 * B$1() - f2.renderingStartTime > Gj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
      }
      if (null !== f2.tail) return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B$1(), b2.sibling = null, c2 = L$1.current, G$1(L$1, d2 ? c2 & 1 | 2 : c2 & 1), b2;
      S$1(b2);
      return null;
    case 22:
    case 23:
      return Hj(), d2 = null !== b2.memoizedState, null !== a2 && null !== a2.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (fj & 1073741824) && (S$1(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S$1(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$1(156, b2.tag));
}
function Ij(a2, b2) {
  wg(b2);
  switch (b2.tag) {
    case 1:
      return Zf(b2.type) && $f(), a2 = b2.flags, a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 3:
      return zh(), E$1(Wf), E$1(H$1), Eh(), a2 = b2.flags, 0 !== (a2 & 65536) && 0 === (a2 & 128) ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 5:
      return Bh(b2), null;
    case 13:
      E$1(L$1);
      a2 = b2.memoizedState;
      if (null !== a2 && null !== a2.dehydrated) {
        if (null === b2.alternate) throw Error(p$1(340));
        Ig();
      }
      a2 = b2.flags;
      return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 19:
      return E$1(L$1), null;
    case 4:
      return zh(), null;
    case 10:
      return ah(b2.type._context), null;
    case 22:
    case 23:
      return Hj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jj = false, U$1 = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V$1 = null;
function Lj(a2, b2) {
  var c2 = a2.ref;
  if (null !== c2) if ("function" === typeof c2) try {
    c2(null);
  } catch (d2) {
    W$1(a2, b2, d2);
  }
  else c2.current = null;
}
function Mj(a2, b2, c2) {
  try {
    c2();
  } catch (d2) {
    W$1(a2, b2, d2);
  }
}
var Nj = false;
function Oj(a2, b2) {
  Cf = dd;
  a2 = Me();
  if (Ne(a2)) {
    if ("selectionStart" in a2) var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
    else a: {
      c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
      var d2 = c2.getSelection && c2.getSelection();
      if (d2 && 0 !== d2.rangeCount) {
        c2 = d2.anchorNode;
        var e2 = d2.anchorOffset, f2 = d2.focusNode;
        d2 = d2.focusOffset;
        try {
          c2.nodeType, f2.nodeType;
        } catch (F2) {
          c2 = null;
          break a;
        }
        var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a2, r2 = null;
        b: for (; ; ) {
          for (var y2; ; ) {
            q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
            q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
            3 === q2.nodeType && (g2 += q2.nodeValue.length);
            if (null === (y2 = q2.firstChild)) break;
            r2 = q2;
            q2 = y2;
          }
          for (; ; ) {
            if (q2 === a2) break b;
            r2 === c2 && ++l2 === e2 && (h2 = g2);
            r2 === f2 && ++m2 === d2 && (k2 = g2);
            if (null !== (y2 = q2.nextSibling)) break;
            q2 = r2;
            r2 = q2.parentNode;
          }
          q2 = y2;
        }
        c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
      } else c2 = null;
    }
    c2 = c2 || { start: 0, end: 0 };
  } else c2 = null;
  Df = { focusedElem: a2, selectionRange: c2 };
  dd = false;
  for (V$1 = b2; null !== V$1; ) if (b2 = V$1, a2 = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a2) a2.return = b2, V$1 = a2;
  else for (; null !== V$1; ) {
    b2 = V$1;
    try {
      var n2 = b2.alternate;
      if (0 !== (b2.flags & 1024)) switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (null !== n2) {
            var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Ci(b2.type, t2), J2);
            x2.__reactInternalSnapshotBeforeUpdate = w2;
          }
          break;
        case 3:
          var u2 = b2.stateNode.containerInfo;
          1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(p$1(163));
      }
    } catch (F2) {
      W$1(b2, b2.return, F2);
    }
    a2 = b2.sibling;
    if (null !== a2) {
      a2.return = b2.return;
      V$1 = a2;
      break;
    }
    V$1 = b2.return;
  }
  n2 = Nj;
  Nj = false;
  return n2;
}
function Pj(a2, b2, c2) {
  var d2 = b2.updateQueue;
  d2 = null !== d2 ? d2.lastEffect : null;
  if (null !== d2) {
    var e2 = d2 = d2.next;
    do {
      if ((e2.tag & a2) === a2) {
        var f2 = e2.destroy;
        e2.destroy = void 0;
        void 0 !== f2 && Mj(b2, c2, f2);
      }
      e2 = e2.next;
    } while (e2 !== d2);
  }
}
function Qj(a2, b2) {
  b2 = b2.updateQueue;
  b2 = null !== b2 ? b2.lastEffect : null;
  if (null !== b2) {
    var c2 = b2 = b2.next;
    do {
      if ((c2.tag & a2) === a2) {
        var d2 = c2.create;
        c2.destroy = d2();
      }
      c2 = c2.next;
    } while (c2 !== b2);
  }
}
function Rj(a2) {
  var b2 = a2.ref;
  if (null !== b2) {
    var c2 = a2.stateNode;
    switch (a2.tag) {
      case 5:
        a2 = c2;
        break;
      default:
        a2 = c2;
    }
    "function" === typeof b2 ? b2(a2) : b2.current = a2;
  }
}
function Sj(a2) {
  var b2 = a2.alternate;
  null !== b2 && (a2.alternate = null, Sj(b2));
  a2.child = null;
  a2.deletions = null;
  a2.sibling = null;
  5 === a2.tag && (b2 = a2.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
  a2.stateNode = null;
  a2.return = null;
  a2.dependencies = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.stateNode = null;
  a2.updateQueue = null;
}
function Tj(a2) {
  return 5 === a2.tag || 3 === a2.tag || 4 === a2.tag;
}
function Uj(a2) {
  a: for (; ; ) {
    for (; null === a2.sibling; ) {
      if (null === a2.return || Tj(a2.return)) return null;
      a2 = a2.return;
    }
    a2.sibling.return = a2.return;
    for (a2 = a2.sibling; 5 !== a2.tag && 6 !== a2.tag && 18 !== a2.tag; ) {
      if (a2.flags & 2) continue a;
      if (null === a2.child || 4 === a2.tag) continue a;
      else a2.child.return = a2, a2 = a2.child;
    }
    if (!(a2.flags & 2)) return a2.stateNode;
  }
}
function Vj(a2, b2, c2) {
  var d2 = a2.tag;
  if (5 === d2 || 6 === d2) a2 = a2.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
  else if (4 !== d2 && (a2 = a2.child, null !== a2)) for (Vj(a2, b2, c2), a2 = a2.sibling; null !== a2; ) Vj(a2, b2, c2), a2 = a2.sibling;
}
function Wj(a2, b2, c2) {
  var d2 = a2.tag;
  if (5 === d2 || 6 === d2) a2 = a2.stateNode, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
  else if (4 !== d2 && (a2 = a2.child, null !== a2)) for (Wj(a2, b2, c2), a2 = a2.sibling; null !== a2; ) Wj(a2, b2, c2), a2 = a2.sibling;
}
var X$2 = null, Xj = false;
function Yj(a2, b2, c2) {
  for (c2 = c2.child; null !== c2; ) Zj(a2, b2, c2), c2 = c2.sibling;
}
function Zj(a2, b2, c2) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
    lc.onCommitFiberUnmount(kc, c2);
  } catch (h2) {
  }
  switch (c2.tag) {
    case 5:
      U$1 || Lj(c2, b2);
    case 6:
      var d2 = X$2, e2 = Xj;
      X$2 = null;
      Yj(a2, b2, c2);
      X$2 = d2;
      Xj = e2;
      null !== X$2 && (Xj ? (a2 = X$2, c2 = c2.stateNode, 8 === a2.nodeType ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : X$2.removeChild(c2.stateNode));
      break;
    case 18:
      null !== X$2 && (Xj ? (a2 = X$2, c2 = c2.stateNode, 8 === a2.nodeType ? Kf(a2.parentNode, c2) : 1 === a2.nodeType && Kf(a2, c2), bd(a2)) : Kf(X$2, c2.stateNode));
      break;
    case 4:
      d2 = X$2;
      e2 = Xj;
      X$2 = c2.stateNode.containerInfo;
      Xj = true;
      Yj(a2, b2, c2);
      X$2 = d2;
      Xj = e2;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U$1 && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
        e2 = d2 = d2.next;
        do {
          var f2 = e2, g2 = f2.destroy;
          f2 = f2.tag;
          void 0 !== g2 && (0 !== (f2 & 2) ? Mj(c2, b2, g2) : 0 !== (f2 & 4) && Mj(c2, b2, g2));
          e2 = e2.next;
        } while (e2 !== d2);
      }
      Yj(a2, b2, c2);
      break;
    case 1:
      if (!U$1 && (Lj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount)) try {
        d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
      } catch (h2) {
        W$1(c2, b2, h2);
      }
      Yj(a2, b2, c2);
      break;
    case 21:
      Yj(a2, b2, c2);
      break;
    case 22:
      c2.mode & 1 ? (U$1 = (d2 = U$1) || null !== c2.memoizedState, Yj(a2, b2, c2), U$1 = d2) : Yj(a2, b2, c2);
      break;
    default:
      Yj(a2, b2, c2);
  }
}
function ak(a2) {
  var b2 = a2.updateQueue;
  if (null !== b2) {
    a2.updateQueue = null;
    var c2 = a2.stateNode;
    null === c2 && (c2 = a2.stateNode = new Kj());
    b2.forEach(function(b3) {
      var d2 = bk.bind(null, a2, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function ck(a2, b2) {
  var c2 = b2.deletions;
  if (null !== c2) for (var d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    try {
      var f2 = a2, g2 = b2, h2 = g2;
      a: for (; null !== h2; ) {
        switch (h2.tag) {
          case 5:
            X$2 = h2.stateNode;
            Xj = false;
            break a;
          case 3:
            X$2 = h2.stateNode.containerInfo;
            Xj = true;
            break a;
          case 4:
            X$2 = h2.stateNode.containerInfo;
            Xj = true;
            break a;
        }
        h2 = h2.return;
      }
      if (null === X$2) throw Error(p$1(160));
      Zj(f2, g2, e2);
      X$2 = null;
      Xj = false;
      var k2 = e2.alternate;
      null !== k2 && (k2.return = null);
      e2.return = null;
    } catch (l2) {
      W$1(e2, b2, l2);
    }
  }
  if (b2.subtreeFlags & 12854) for (b2 = b2.child; null !== b2; ) dk(b2, a2), b2 = b2.sibling;
}
function dk(a2, b2) {
  var c2 = a2.alternate, d2 = a2.flags;
  switch (a2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ck(b2, a2);
      ek(a2);
      if (d2 & 4) {
        try {
          Pj(3, a2, a2.return), Qj(3, a2);
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
        try {
          Pj(5, a2, a2.return);
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
      }
      break;
    case 1:
      ck(b2, a2);
      ek(a2);
      d2 & 512 && null !== c2 && Lj(c2, c2.return);
      break;
    case 5:
      ck(b2, a2);
      ek(a2);
      d2 & 512 && null !== c2 && Lj(c2, c2.return);
      if (a2.flags & 32) {
        var e2 = a2.stateNode;
        try {
          ob(e2, "");
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
      }
      if (d2 & 4 && (e2 = a2.stateNode, null != e2)) {
        var f2 = a2.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a2.type, k2 = a2.updateQueue;
        a2.updateQueue = null;
        if (null !== k2) try {
          "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
          vb(h2, g2);
          var l2 = vb(h2, f2);
          for (g2 = 0; g2 < k2.length; g2 += 2) {
            var m2 = k2[g2], q2 = k2[g2 + 1];
            "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
          }
          switch (h2) {
            case "input":
              bb(e2, f2);
              break;
            case "textarea":
              ib(e2, f2);
              break;
            case "select":
              var r2 = e2._wrapperState.wasMultiple;
              e2._wrapperState.wasMultiple = !!f2.multiple;
              var y2 = f2.value;
              null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                e2,
                !!f2.multiple,
                f2.defaultValue,
                true
              ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
          }
          e2[Pf] = f2;
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
      }
      break;
    case 6:
      ck(b2, a2);
      ek(a2);
      if (d2 & 4) {
        if (null === a2.stateNode) throw Error(p$1(162));
        e2 = a2.stateNode;
        f2 = a2.memoizedProps;
        try {
          e2.nodeValue = f2;
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
      }
      break;
    case 3:
      ck(b2, a2);
      ek(a2);
      if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated) try {
        bd(b2.containerInfo);
      } catch (t2) {
        W$1(a2, a2.return, t2);
      }
      break;
    case 4:
      ck(b2, a2);
      ek(a2);
      break;
    case 13:
      ck(b2, a2);
      ek(a2);
      e2 = a2.child;
      e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (fk = B$1()));
      d2 & 4 && ak(a2);
      break;
    case 22:
      m2 = null !== c2 && null !== c2.memoizedState;
      a2.mode & 1 ? (U$1 = (l2 = U$1) || m2, ck(b2, a2), U$1 = l2) : ck(b2, a2);
      ek(a2);
      if (d2 & 8192) {
        l2 = null !== a2.memoizedState;
        if ((a2.stateNode.isHidden = l2) && !m2 && 0 !== (a2.mode & 1)) for (V$1 = a2, m2 = a2.child; null !== m2; ) {
          for (q2 = V$1 = m2; null !== V$1; ) {
            r2 = V$1;
            y2 = r2.child;
            switch (r2.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Pj(4, r2, r2.return);
                break;
              case 1:
                Lj(r2, r2.return);
                var n2 = r2.stateNode;
                if ("function" === typeof n2.componentWillUnmount) {
                  d2 = r2;
                  c2 = r2.return;
                  try {
                    b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                  } catch (t2) {
                    W$1(d2, c2, t2);
                  }
                }
                break;
              case 5:
                Lj(r2, r2.return);
                break;
              case 22:
                if (null !== r2.memoizedState) {
                  gk(q2);
                  continue;
                }
            }
            null !== y2 ? (y2.return = r2, V$1 = y2) : gk(q2);
          }
          m2 = m2.sibling;
        }
        a: for (m2 = null, q2 = a2; ; ) {
          if (5 === q2.tag) {
            if (null === m2) {
              m2 = q2;
              try {
                e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
              } catch (t2) {
                W$1(a2, a2.return, t2);
              }
            }
          } else if (6 === q2.tag) {
            if (null === m2) try {
              q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
            } catch (t2) {
              W$1(a2, a2.return, t2);
            }
          } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a2) && null !== q2.child) {
            q2.child.return = q2;
            q2 = q2.child;
            continue;
          }
          if (q2 === a2) break a;
          for (; null === q2.sibling; ) {
            if (null === q2.return || q2.return === a2) break a;
            m2 === q2 && (m2 = null);
            q2 = q2.return;
          }
          m2 === q2 && (m2 = null);
          q2.sibling.return = q2.return;
          q2 = q2.sibling;
        }
      }
      break;
    case 19:
      ck(b2, a2);
      ek(a2);
      d2 & 4 && ak(a2);
      break;
    case 21:
      break;
    default:
      ck(
        b2,
        a2
      ), ek(a2);
  }
}
function ek(a2) {
  var b2 = a2.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c2 = a2.return; null !== c2; ) {
          if (Tj(c2)) {
            var d2 = c2;
            break a;
          }
          c2 = c2.return;
        }
        throw Error(p$1(160));
      }
      switch (d2.tag) {
        case 5:
          var e2 = d2.stateNode;
          d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
          var f2 = Uj(a2);
          Wj(a2, f2, e2);
          break;
        case 3:
        case 4:
          var g2 = d2.stateNode.containerInfo, h2 = Uj(a2);
          Vj(a2, h2, g2);
          break;
        default:
          throw Error(p$1(161));
      }
    } catch (k2) {
      W$1(a2, a2.return, k2);
    }
    a2.flags &= -3;
  }
  b2 & 4096 && (a2.flags &= -4097);
}
function hk(a2, b2, c2) {
  V$1 = a2;
  ik(a2);
}
function ik(a2, b2, c2) {
  for (var d2 = 0 !== (a2.mode & 1); null !== V$1; ) {
    var e2 = V$1, f2 = e2.child;
    if (22 === e2.tag && d2) {
      var g2 = null !== e2.memoizedState || Jj;
      if (!g2) {
        var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U$1;
        h2 = Jj;
        var l2 = U$1;
        Jj = g2;
        if ((U$1 = k2) && !l2) for (V$1 = e2; null !== V$1; ) g2 = V$1, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? jk(e2) : null !== k2 ? (k2.return = g2, V$1 = k2) : jk(e2);
        for (; null !== f2; ) V$1 = f2, ik(f2), f2 = f2.sibling;
        V$1 = e2;
        Jj = h2;
        U$1 = l2;
      }
      kk(a2);
    } else 0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V$1 = f2) : kk(a2);
  }
}
function kk(a2) {
  for (; null !== V$1; ) {
    var b2 = V$1;
    if (0 !== (b2.flags & 8772)) {
      var c2 = b2.alternate;
      try {
        if (0 !== (b2.flags & 8772)) switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            U$1 || Qj(5, b2);
            break;
          case 1:
            var d2 = b2.stateNode;
            if (b2.flags & 4 && !U$1) if (null === c2) d2.componentDidMount();
            else {
              var e2 = b2.elementType === b2.type ? c2.memoizedProps : Ci(b2.type, c2.memoizedProps);
              d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
            }
            var f2 = b2.updateQueue;
            null !== f2 && sh(b2, f2, d2);
            break;
          case 3:
            var g2 = b2.updateQueue;
            if (null !== g2) {
              c2 = null;
              if (null !== b2.child) switch (b2.child.tag) {
                case 5:
                  c2 = b2.child.stateNode;
                  break;
                case 1:
                  c2 = b2.child.stateNode;
              }
              sh(b2, g2, c2);
            }
            break;
          case 5:
            var h2 = b2.stateNode;
            if (null === c2 && b2.flags & 4) {
              c2 = h2;
              var k2 = b2.memoizedProps;
              switch (b2.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  k2.autoFocus && c2.focus();
                  break;
                case "img":
                  k2.src && (c2.src = k2.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (null === b2.memoizedState) {
              var l2 = b2.alternate;
              if (null !== l2) {
                var m2 = l2.memoizedState;
                if (null !== m2) {
                  var q2 = m2.dehydrated;
                  null !== q2 && bd(q2);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(p$1(163));
        }
        U$1 || b2.flags & 512 && Rj(b2);
      } catch (r2) {
        W$1(b2, b2.return, r2);
      }
    }
    if (b2 === a2) {
      V$1 = null;
      break;
    }
    c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V$1 = c2;
      break;
    }
    V$1 = b2.return;
  }
}
function gk(a2) {
  for (; null !== V$1; ) {
    var b2 = V$1;
    if (b2 === a2) {
      V$1 = null;
      break;
    }
    var c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V$1 = c2;
      break;
    }
    V$1 = b2.return;
  }
}
function jk(a2) {
  for (; null !== V$1; ) {
    var b2 = V$1;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c2 = b2.return;
          try {
            Qj(4, b2);
          } catch (k2) {
            W$1(b2, c2, k2);
          }
          break;
        case 1:
          var d2 = b2.stateNode;
          if ("function" === typeof d2.componentDidMount) {
            var e2 = b2.return;
            try {
              d2.componentDidMount();
            } catch (k2) {
              W$1(b2, e2, k2);
            }
          }
          var f2 = b2.return;
          try {
            Rj(b2);
          } catch (k2) {
            W$1(b2, f2, k2);
          }
          break;
        case 5:
          var g2 = b2.return;
          try {
            Rj(b2);
          } catch (k2) {
            W$1(b2, g2, k2);
          }
      }
    } catch (k2) {
      W$1(b2, b2.return, k2);
    }
    if (b2 === a2) {
      V$1 = null;
      break;
    }
    var h2 = b2.sibling;
    if (null !== h2) {
      h2.return = b2.return;
      V$1 = h2;
      break;
    }
    V$1 = b2.return;
  }
}
var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K$1 = 0, Q$1 = null, Y$1 = null, Z$1 = 0, fj = 0, ej = Uf(0), T$1 = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
function R$1() {
  return 0 !== (K$1 & 6) ? B$1() : -1 !== Ak ? Ak : Ak = B$1();
}
function yi(a2) {
  if (0 === (a2.mode & 1)) return 1;
  if (0 !== (K$1 & 2) && 0 !== Z$1) return Z$1 & -Z$1;
  if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
  a2 = C$1;
  if (0 !== a2) return a2;
  a2 = window.event;
  a2 = void 0 === a2 ? 16 : jd(a2.type);
  return a2;
}
function gi(a2, b2, c2, d2) {
  if (50 < yk) throw yk = 0, zk = null, Error(p$1(185));
  Ac(a2, c2, d2);
  if (0 === (K$1 & 2) || a2 !== Q$1) a2 === Q$1 && (0 === (K$1 & 2) && (qk |= c2), 4 === T$1 && Ck(a2, Z$1)), Dk(a2, d2), 1 === c2 && 0 === K$1 && 0 === (b2.mode & 1) && (Gj = B$1() + 500, fg && jg());
}
function Dk(a2, b2) {
  var c2 = a2.callbackNode;
  wc(a2, b2);
  var d2 = uc(a2, a2 === Q$1 ? Z$1 : 0);
  if (0 === d2) null !== c2 && bc(c2), a2.callbackNode = null, a2.callbackPriority = 0;
  else if (b2 = d2 & -d2, a2.callbackPriority !== b2) {
    null != c2 && bc(c2);
    if (1 === b2) 0 === a2.tag ? ig(Ek.bind(null, a2)) : hg(Ek.bind(null, a2)), Jf(function() {
      0 === (K$1 & 6) && jg();
    }), c2 = null;
    else {
      switch (Dc(d2)) {
        case 1:
          c2 = fc;
          break;
        case 4:
          c2 = gc;
          break;
        case 16:
          c2 = hc;
          break;
        case 536870912:
          c2 = jc;
          break;
        default:
          c2 = hc;
      }
      c2 = Fk(c2, Gk.bind(null, a2));
    }
    a2.callbackPriority = b2;
    a2.callbackNode = c2;
  }
}
function Gk(a2, b2) {
  Ak = -1;
  Bk = 0;
  if (0 !== (K$1 & 6)) throw Error(p$1(327));
  var c2 = a2.callbackNode;
  if (Hk() && a2.callbackNode !== c2) return null;
  var d2 = uc(a2, a2 === Q$1 ? Z$1 : 0);
  if (0 === d2) return null;
  if (0 !== (d2 & 30) || 0 !== (d2 & a2.expiredLanes) || b2) b2 = Ik(a2, d2);
  else {
    b2 = d2;
    var e2 = K$1;
    K$1 |= 2;
    var f2 = Jk();
    if (Q$1 !== a2 || Z$1 !== b2) uk = null, Gj = B$1() + 500, Kk(a2, b2);
    do
      try {
        Lk();
        break;
      } catch (h2) {
        Mk(a2, h2);
      }
    while (1);
    $g();
    mk.current = f2;
    K$1 = e2;
    null !== Y$1 ? b2 = 0 : (Q$1 = null, Z$1 = 0, b2 = T$1);
  }
  if (0 !== b2) {
    2 === b2 && (e2 = xc(a2), 0 !== e2 && (d2 = e2, b2 = Nk(a2, e2)));
    if (1 === b2) throw c2 = pk, Kk(a2, 0), Ck(a2, d2), Dk(a2, B$1()), c2;
    if (6 === b2) Ck(a2, d2);
    else {
      e2 = a2.current.alternate;
      if (0 === (d2 & 30) && !Ok(e2) && (b2 = Ik(a2, d2), 2 === b2 && (f2 = xc(a2), 0 !== f2 && (d2 = f2, b2 = Nk(a2, f2))), 1 === b2)) throw c2 = pk, Kk(a2, 0), Ck(a2, d2), Dk(a2, B$1()), c2;
      a2.finishedWork = e2;
      a2.finishedLanes = d2;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p$1(345));
        case 2:
          Pk(a2, tk, uk);
          break;
        case 3:
          Ck(a2, d2);
          if ((d2 & 130023424) === d2 && (b2 = fk + 500 - B$1(), 10 < b2)) {
            if (0 !== uc(a2, 0)) break;
            e2 = a2.suspendedLanes;
            if ((e2 & d2) !== d2) {
              R$1();
              a2.pingedLanes |= a2.suspendedLanes & e2;
              break;
            }
            a2.timeoutHandle = Ff(Pk.bind(null, a2, tk, uk), b2);
            break;
          }
          Pk(a2, tk, uk);
          break;
        case 4:
          Ck(a2, d2);
          if ((d2 & 4194240) === d2) break;
          b2 = a2.eventTimes;
          for (e2 = -1; 0 < d2; ) {
            var g2 = 31 - oc(d2);
            f2 = 1 << g2;
            g2 = b2[g2];
            g2 > e2 && (e2 = g2);
            d2 &= ~f2;
          }
          d2 = e2;
          d2 = B$1() - d2;
          d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * lk(d2 / 1960)) - d2;
          if (10 < d2) {
            a2.timeoutHandle = Ff(Pk.bind(null, a2, tk, uk), d2);
            break;
          }
          Pk(a2, tk, uk);
          break;
        case 5:
          Pk(a2, tk, uk);
          break;
        default:
          throw Error(p$1(329));
      }
    }
  }
  Dk(a2, B$1());
  return a2.callbackNode === c2 ? Gk.bind(null, a2) : null;
}
function Nk(a2, b2) {
  var c2 = sk;
  a2.current.memoizedState.isDehydrated && (Kk(a2, b2).flags |= 256);
  a2 = Ik(a2, b2);
  2 !== a2 && (b2 = tk, tk = c2, null !== b2 && Fj(b2));
  return a2;
}
function Fj(a2) {
  null === tk ? tk = a2 : tk.push.apply(tk, a2);
}
function Ok(a2) {
  for (var b2 = a2; ; ) {
    if (b2.flags & 16384) {
      var c2 = b2.updateQueue;
      if (null !== c2 && (c2 = c2.stores, null !== c2)) for (var d2 = 0; d2 < c2.length; d2++) {
        var e2 = c2[d2], f2 = e2.getSnapshot;
        e2 = e2.value;
        try {
          if (!He(f2(), e2)) return false;
        } catch (g2) {
          return false;
        }
      }
    }
    c2 = b2.child;
    if (b2.subtreeFlags & 16384 && null !== c2) c2.return = b2, b2 = c2;
    else {
      if (b2 === a2) break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a2) return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Ck(a2, b2) {
  b2 &= ~rk;
  b2 &= ~qk;
  a2.suspendedLanes |= b2;
  a2.pingedLanes &= ~b2;
  for (a2 = a2.expirationTimes; 0 < b2; ) {
    var c2 = 31 - oc(b2), d2 = 1 << c2;
    a2[c2] = -1;
    b2 &= ~d2;
  }
}
function Ek(a2) {
  if (0 !== (K$1 & 6)) throw Error(p$1(327));
  Hk();
  var b2 = uc(a2, 0);
  if (0 === (b2 & 1)) return Dk(a2, B$1()), null;
  var c2 = Ik(a2, b2);
  if (0 !== a2.tag && 2 === c2) {
    var d2 = xc(a2);
    0 !== d2 && (b2 = d2, c2 = Nk(a2, d2));
  }
  if (1 === c2) throw c2 = pk, Kk(a2, 0), Ck(a2, b2), Dk(a2, B$1()), c2;
  if (6 === c2) throw Error(p$1(345));
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b2;
  Pk(a2, tk, uk);
  Dk(a2, B$1());
  return null;
}
function Qk(a2, b2) {
  var c2 = K$1;
  K$1 |= 1;
  try {
    return a2(b2);
  } finally {
    K$1 = c2, 0 === K$1 && (Gj = B$1() + 500, fg && jg());
  }
}
function Rk(a2) {
  null !== wk && 0 === wk.tag && 0 === (K$1 & 6) && Hk();
  var b2 = K$1;
  K$1 |= 1;
  var c2 = ok.transition, d2 = C$1;
  try {
    if (ok.transition = null, C$1 = 1, a2) return a2();
  } finally {
    C$1 = d2, ok.transition = c2, K$1 = b2, 0 === (K$1 & 6) && jg();
  }
}
function Hj() {
  fj = ej.current;
  E$1(ej);
}
function Kk(a2, b2) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c2 = a2.timeoutHandle;
  -1 !== c2 && (a2.timeoutHandle = -1, Gf(c2));
  if (null !== Y$1) for (c2 = Y$1.return; null !== c2; ) {
    var d2 = c2;
    wg(d2);
    switch (d2.tag) {
      case 1:
        d2 = d2.type.childContextTypes;
        null !== d2 && void 0 !== d2 && $f();
        break;
      case 3:
        zh();
        E$1(Wf);
        E$1(H$1);
        Eh();
        break;
      case 5:
        Bh(d2);
        break;
      case 4:
        zh();
        break;
      case 13:
        E$1(L$1);
        break;
      case 19:
        E$1(L$1);
        break;
      case 10:
        ah(d2.type._context);
        break;
      case 22:
      case 23:
        Hj();
    }
    c2 = c2.return;
  }
  Q$1 = a2;
  Y$1 = a2 = Pg(a2.current, null);
  Z$1 = fj = b2;
  T$1 = 0;
  pk = null;
  rk = qk = rh = 0;
  tk = sk = null;
  if (null !== fh) {
    for (b2 = 0; b2 < fh.length; b2++) if (c2 = fh[b2], d2 = c2.interleaved, null !== d2) {
      c2.interleaved = null;
      var e2 = d2.next, f2 = c2.pending;
      if (null !== f2) {
        var g2 = f2.next;
        f2.next = e2;
        d2.next = g2;
      }
      c2.pending = d2;
    }
    fh = null;
  }
  return a2;
}
function Mk(a2, b2) {
  do {
    var c2 = Y$1;
    try {
      $g();
      Fh.current = Rh;
      if (Ih) {
        for (var d2 = M$1.memoizedState; null !== d2; ) {
          var e2 = d2.queue;
          null !== e2 && (e2.pending = null);
          d2 = d2.next;
        }
        Ih = false;
      }
      Hh = 0;
      O$1 = N$1 = M$1 = null;
      Jh = false;
      Kh = 0;
      nk.current = null;
      if (null === c2 || null === c2.return) {
        T$1 = 1;
        pk = b2;
        Y$1 = null;
        break;
      }
      a: {
        var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = Z$1;
        h2.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h2, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Ui(g2);
          if (null !== y2) {
            y2.flags &= -257;
            Vi(y2, g2, h2, f2, b2);
            y2.mode & 1 && Si(f2, l2, b2);
            b2 = y2;
            k2 = l2;
            var n2 = b2.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b2.updateQueue = t2;
            } else n2.add(k2);
            break a;
          } else {
            if (0 === (b2 & 1)) {
              Si(f2, l2, b2);
              tj();
              break a;
            }
            k2 = Error(p$1(426));
          }
        } else if (I$1 && h2.mode & 1) {
          var J2 = Ui(g2);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Vi(J2, g2, h2, f2, b2);
            Jg(Ji(k2, h2));
            break a;
          }
        }
        f2 = k2 = Ji(k2, h2);
        4 !== T$1 && (T$1 = 2);
        null === sk ? sk = [f2] : sk.push(f2);
        f2 = g2;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b2 &= -b2;
              f2.lanes |= b2;
              var x2 = Ni(f2, k2, b2);
              ph(f2, x2);
              break a;
            case 1:
              h2 = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var F2 = Qi(f2, h2, b2);
                ph(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Sk(c2);
    } catch (na) {
      b2 = na;
      Y$1 === c2 && null !== c2 && (Y$1 = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Jk() {
  var a2 = mk.current;
  mk.current = Rh;
  return null === a2 ? Rh : a2;
}
function tj() {
  if (0 === T$1 || 3 === T$1 || 2 === T$1) T$1 = 4;
  null === Q$1 || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q$1, Z$1);
}
function Ik(a2, b2) {
  var c2 = K$1;
  K$1 |= 2;
  var d2 = Jk();
  if (Q$1 !== a2 || Z$1 !== b2) uk = null, Kk(a2, b2);
  do
    try {
      Tk();
      break;
    } catch (e2) {
      Mk(a2, e2);
    }
  while (1);
  $g();
  K$1 = c2;
  mk.current = d2;
  if (null !== Y$1) throw Error(p$1(261));
  Q$1 = null;
  Z$1 = 0;
  return T$1;
}
function Tk() {
  for (; null !== Y$1; ) Uk(Y$1);
}
function Lk() {
  for (; null !== Y$1 && !cc(); ) Uk(Y$1);
}
function Uk(a2) {
  var b2 = Vk(a2.alternate, a2, fj);
  a2.memoizedProps = a2.pendingProps;
  null === b2 ? Sk(a2) : Y$1 = b2;
  nk.current = null;
}
function Sk(a2) {
  var b2 = a2;
  do {
    var c2 = b2.alternate;
    a2 = b2.return;
    if (0 === (b2.flags & 32768)) {
      if (c2 = Ej(c2, b2, fj), null !== c2) {
        Y$1 = c2;
        return;
      }
    } else {
      c2 = Ij(c2, b2);
      if (null !== c2) {
        c2.flags &= 32767;
        Y$1 = c2;
        return;
      }
      if (null !== a2) a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
      else {
        T$1 = 6;
        Y$1 = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (null !== b2) {
      Y$1 = b2;
      return;
    }
    Y$1 = b2 = a2;
  } while (null !== b2);
  0 === T$1 && (T$1 = 5);
}
function Pk(a2, b2, c2) {
  var d2 = C$1, e2 = ok.transition;
  try {
    ok.transition = null, C$1 = 1, Wk(a2, b2, c2, d2);
  } finally {
    ok.transition = e2, C$1 = d2;
  }
  return null;
}
function Wk(a2, b2, c2, d2) {
  do
    Hk();
  while (null !== wk);
  if (0 !== (K$1 & 6)) throw Error(p$1(327));
  c2 = a2.finishedWork;
  var e2 = a2.finishedLanes;
  if (null === c2) return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (c2 === a2.current) throw Error(p$1(177));
  a2.callbackNode = null;
  a2.callbackPriority = 0;
  var f2 = c2.lanes | c2.childLanes;
  Bc(a2, f2);
  a2 === Q$1 && (Y$1 = Q$1 = null, Z$1 = 0);
  0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || vk || (vk = true, Fk(hc, function() {
    Hk();
    return null;
  }));
  f2 = 0 !== (c2.flags & 15990);
  if (0 !== (c2.subtreeFlags & 15990) || f2) {
    f2 = ok.transition;
    ok.transition = null;
    var g2 = C$1;
    C$1 = 1;
    var h2 = K$1;
    K$1 |= 4;
    nk.current = null;
    Oj(a2, c2);
    dk(c2, a2);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a2.current = c2;
    hk(c2);
    dc();
    K$1 = h2;
    C$1 = g2;
    ok.transition = f2;
  } else a2.current = c2;
  vk && (vk = false, wk = a2, xk = e2);
  f2 = a2.pendingLanes;
  0 === f2 && (Ri = null);
  mc(c2.stateNode);
  Dk(a2, B$1());
  if (null !== b2) for (d2 = a2.onRecoverableError, c2 = 0; c2 < b2.length; c2++) e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
  if (Oi) throw Oi = false, a2 = Pi, Pi = null, a2;
  0 !== (xk & 1) && 0 !== a2.tag && Hk();
  f2 = a2.pendingLanes;
  0 !== (f2 & 1) ? a2 === zk ? yk++ : (yk = 0, zk = a2) : yk = 0;
  jg();
  return null;
}
function Hk() {
  if (null !== wk) {
    var a2 = Dc(xk), b2 = ok.transition, c2 = C$1;
    try {
      ok.transition = null;
      C$1 = 16 > a2 ? 16 : a2;
      if (null === wk) var d2 = false;
      else {
        a2 = wk;
        wk = null;
        xk = 0;
        if (0 !== (K$1 & 6)) throw Error(p$1(331));
        var e2 = K$1;
        K$1 |= 4;
        for (V$1 = a2.current; null !== V$1; ) {
          var f2 = V$1, g2 = f2.child;
          if (0 !== (V$1.flags & 16)) {
            var h2 = f2.deletions;
            if (null !== h2) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l2 = h2[k2];
                for (V$1 = l2; null !== V$1; ) {
                  var m2 = V$1;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2) q2.return = m2, V$1 = q2;
                  else for (; null !== V$1; ) {
                    m2 = V$1;
                    var r2 = m2.sibling, y2 = m2.return;
                    Sj(m2);
                    if (m2 === l2) {
                      V$1 = null;
                      break;
                    }
                    if (null !== r2) {
                      r2.return = y2;
                      V$1 = r2;
                      break;
                    }
                    V$1 = y2;
                  }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V$1 = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g2) g2.return = f2, V$1 = g2;
          else b: for (; null !== V$1; ) {
            f2 = V$1;
            if (0 !== (f2.flags & 2048)) switch (f2.tag) {
              case 0:
              case 11:
              case 15:
                Pj(9, f2, f2.return);
            }
            var x2 = f2.sibling;
            if (null !== x2) {
              x2.return = f2.return;
              V$1 = x2;
              break b;
            }
            V$1 = f2.return;
          }
        }
        var w2 = a2.current;
        for (V$1 = w2; null !== V$1; ) {
          g2 = V$1;
          var u2 = g2.child;
          if (0 !== (g2.subtreeFlags & 2064) && null !== u2) u2.return = g2, V$1 = u2;
          else b: for (g2 = w2; null !== V$1; ) {
            h2 = V$1;
            if (0 !== (h2.flags & 2048)) try {
              switch (h2.tag) {
                case 0:
                case 11:
                case 15:
                  Qj(9, h2);
              }
            } catch (na) {
              W$1(h2, h2.return, na);
            }
            if (h2 === g2) {
              V$1 = null;
              break b;
            }
            var F2 = h2.sibling;
            if (null !== F2) {
              F2.return = h2.return;
              V$1 = F2;
              break b;
            }
            V$1 = h2.return;
          }
        }
        K$1 = e2;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
          lc.onPostCommitFiberRoot(kc, a2);
        } catch (na) {
        }
        d2 = true;
      }
      return d2;
    } finally {
      C$1 = c2, ok.transition = b2;
    }
  }
  return false;
}
function Xk(a2, b2, c2) {
  b2 = Ji(c2, b2);
  b2 = Ni(a2, b2, 1);
  a2 = nh(a2, b2, 1);
  b2 = R$1();
  null !== a2 && (Ac(a2, 1, b2), Dk(a2, b2));
}
function W$1(a2, b2, c2) {
  if (3 === a2.tag) Xk(a2, a2, c2);
  else for (; null !== b2; ) {
    if (3 === b2.tag) {
      Xk(b2, a2, c2);
      break;
    } else if (1 === b2.tag) {
      var d2 = b2.stateNode;
      if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Ri || !Ri.has(d2))) {
        a2 = Ji(c2, a2);
        a2 = Qi(b2, a2, 1);
        b2 = nh(b2, a2, 1);
        a2 = R$1();
        null !== b2 && (Ac(b2, 1, a2), Dk(b2, a2));
        break;
      }
    }
    b2 = b2.return;
  }
}
function Ti(a2, b2, c2) {
  var d2 = a2.pingCache;
  null !== d2 && d2.delete(b2);
  b2 = R$1();
  a2.pingedLanes |= a2.suspendedLanes & c2;
  Q$1 === a2 && (Z$1 & c2) === c2 && (4 === T$1 || 3 === T$1 && (Z$1 & 130023424) === Z$1 && 500 > B$1() - fk ? Kk(a2, 0) : rk |= c2);
  Dk(a2, b2);
}
function Yk(a2, b2) {
  0 === b2 && (0 === (a2.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c2 = R$1();
  a2 = ih(a2, b2);
  null !== a2 && (Ac(a2, b2, c2), Dk(a2, c2));
}
function uj(a2) {
  var b2 = a2.memoizedState, c2 = 0;
  null !== b2 && (c2 = b2.retryLane);
  Yk(a2, c2);
}
function bk(a2, b2) {
  var c2 = 0;
  switch (a2.tag) {
    case 13:
      var d2 = a2.stateNode;
      var e2 = a2.memoizedState;
      null !== e2 && (c2 = e2.retryLane);
      break;
    case 19:
      d2 = a2.stateNode;
      break;
    default:
      throw Error(p$1(314));
  }
  null !== d2 && d2.delete(b2);
  Yk(a2, c2);
}
var Vk;
Vk = function(a2, b2, c2) {
  if (null !== a2) if (a2.memoizedProps !== b2.pendingProps || Wf.current) dh = true;
  else {
    if (0 === (a2.lanes & c2) && 0 === (b2.flags & 128)) return dh = false, yj(a2, b2, c2);
    dh = 0 !== (a2.flags & 131072) ? true : false;
  }
  else dh = false, I$1 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d2 = b2.type;
      ij(a2, b2);
      a2 = b2.pendingProps;
      var e2 = Yf(b2, H$1.current);
      ch(b2, c2);
      e2 = Nh(null, b2, d2, a2, e2, c2);
      var f2 = Sh();
      b2.flags |= 1;
      "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, kh(b2), e2.updater = Ei, b2.stateNode = e2, e2._reactInternals = b2, Ii(b2, d2, a2, c2), b2 = jj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I$1 && f2 && vg(b2), Xi(null, b2, e2, c2), b2 = b2.child);
      return b2;
    case 16:
      d2 = b2.elementType;
      a: {
        ij(a2, b2);
        a2 = b2.pendingProps;
        e2 = d2._init;
        d2 = e2(d2._payload);
        b2.type = d2;
        e2 = b2.tag = Zk(d2);
        a2 = Ci(d2, a2);
        switch (e2) {
          case 0:
            b2 = cj(null, b2, d2, a2, c2);
            break a;
          case 1:
            b2 = hj(null, b2, d2, a2, c2);
            break a;
          case 11:
            b2 = Yi(null, b2, d2, a2, c2);
            break a;
          case 14:
            b2 = $i(null, b2, d2, Ci(d2.type, a2), c2);
            break a;
        }
        throw Error(p$1(
          306,
          d2,
          ""
        ));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), cj(a2, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), hj(a2, b2, d2, e2, c2);
    case 3:
      a: {
        kj(b2);
        if (null === a2) throw Error(p$1(387));
        d2 = b2.pendingProps;
        f2 = b2.memoizedState;
        e2 = f2.element;
        lh(a2, b2);
        qh(b2, d2, null, c2);
        var g2 = b2.memoizedState;
        d2 = g2.element;
        if (f2.isDehydrated) if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
          e2 = Ji(Error(p$1(423)), b2);
          b2 = lj(a2, b2, d2, c2, e2);
          break a;
        } else if (d2 !== e2) {
          e2 = Ji(Error(p$1(424)), b2);
          b2 = lj(a2, b2, d2, c2, e2);
          break a;
        } else for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I$1 = true, zg = null, c2 = Vg(b2, null, d2, c2), b2.child = c2; c2; ) c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
        else {
          Ig();
          if (d2 === e2) {
            b2 = Zi(a2, b2, c2);
            break a;
          }
          Xi(a2, b2, d2, c2);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Ah(b2), null === a2 && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a2 ? a2.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), gj(a2, b2), Xi(a2, b2, g2, c2), b2.child;
    case 6:
      return null === a2 && Eg(b2), null;
    case 13:
      return oj(a2, b2, c2);
    case 4:
      return yh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a2 ? b2.child = Ug(b2, null, d2, c2) : Xi(a2, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), Yi(a2, b2, d2, e2, c2);
    case 7:
      return Xi(a2, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return Xi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return Xi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        f2 = b2.memoizedProps;
        g2 = e2.value;
        G$1(Wg, d2._currentValue);
        d2._currentValue = g2;
        if (null !== f2) if (He(f2.value, g2)) {
          if (f2.children === e2.children && !Wf.current) {
            b2 = Zi(a2, b2, c2);
            break a;
          }
        } else for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
          var h2 = f2.dependencies;
          if (null !== h2) {
            g2 = f2.child;
            for (var k2 = h2.firstContext; null !== k2; ) {
              if (k2.context === d2) {
                if (1 === f2.tag) {
                  k2 = mh(-1, c2 & -c2);
                  k2.tag = 2;
                  var l2 = f2.updateQueue;
                  if (null !== l2) {
                    l2 = l2.shared;
                    var m2 = l2.pending;
                    null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                    l2.pending = k2;
                  }
                }
                f2.lanes |= c2;
                k2 = f2.alternate;
                null !== k2 && (k2.lanes |= c2);
                bh(
                  f2.return,
                  c2,
                  b2
                );
                h2.lanes |= c2;
                break;
              }
              k2 = k2.next;
            }
          } else if (10 === f2.tag) g2 = f2.type === b2.type ? null : f2.child;
          else if (18 === f2.tag) {
            g2 = f2.return;
            if (null === g2) throw Error(p$1(341));
            g2.lanes |= c2;
            h2 = g2.alternate;
            null !== h2 && (h2.lanes |= c2);
            bh(g2, c2, b2);
            g2 = f2.sibling;
          } else g2 = f2.child;
          if (null !== g2) g2.return = f2;
          else for (g2 = f2; null !== g2; ) {
            if (g2 === b2) {
              g2 = null;
              break;
            }
            f2 = g2.sibling;
            if (null !== f2) {
              f2.return = g2.return;
              g2 = f2;
              break;
            }
            g2 = g2.return;
          }
          f2 = g2;
        }
        Xi(a2, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, d2 = b2.pendingProps.children, ch(b2, c2), e2 = eh(e2), d2 = d2(e2), b2.flags |= 1, Xi(a2, b2, d2, c2), b2.child;
    case 14:
      return d2 = b2.type, e2 = Ci(d2, b2.pendingProps), e2 = Ci(d2.type, e2), $i(a2, b2, d2, e2, c2);
    case 15:
      return bj(a2, b2, b2.type, b2.pendingProps, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), ij(a2, b2), b2.tag = 1, Zf(d2) ? (a2 = true, cg(b2)) : a2 = false, ch(b2, c2), Gi(b2, d2, e2), Ii(b2, d2, e2, c2), jj(null, b2, d2, true, a2, c2);
    case 19:
      return xj(a2, b2, c2);
    case 22:
      return dj(a2, b2, c2);
  }
  throw Error(p$1(156, b2.tag));
};
function Fk(a2, b2) {
  return ac(a2, b2);
}
function $k(a2, b2, c2, d2) {
  this.tag = a2;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a2, b2, c2, d2) {
  return new $k(a2, b2, c2, d2);
}
function aj(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function Zk(a2) {
  if ("function" === typeof a2) return aj(a2) ? 1 : 0;
  if (void 0 !== a2 && null !== a2) {
    a2 = a2.$$typeof;
    if (a2 === Da) return 11;
    if (a2 === Ga) return 14;
  }
  return 2;
}
function Pg(a2, b2) {
  var c2 = a2.alternate;
  null === c2 ? (c2 = Bg(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
  c2.flags = a2.flags & 14680064;
  c2.childLanes = a2.childLanes;
  c2.lanes = a2.lanes;
  c2.child = a2.child;
  c2.memoizedProps = a2.memoizedProps;
  c2.memoizedState = a2.memoizedState;
  c2.updateQueue = a2.updateQueue;
  b2 = a2.dependencies;
  c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a2.sibling;
  c2.index = a2.index;
  c2.ref = a2.ref;
  return c2;
}
function Rg(a2, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a2;
  if ("function" === typeof a2) aj(a2) && (g2 = 1);
  else if ("string" === typeof a2) g2 = 5;
  else a: switch (a2) {
    case ya:
      return Tg(c2.children, e2, f2, b2);
    case za:
      g2 = 8;
      e2 |= 8;
      break;
    case Aa:
      return a2 = Bg(12, c2, b2, e2 | 2), a2.elementType = Aa, a2.lanes = f2, a2;
    case Ea:
      return a2 = Bg(13, c2, b2, e2), a2.elementType = Ea, a2.lanes = f2, a2;
    case Fa:
      return a2 = Bg(19, c2, b2, e2), a2.elementType = Fa, a2.lanes = f2, a2;
    case Ia:
      return pj(c2, e2, f2, b2);
    default:
      if ("object" === typeof a2 && null !== a2) switch (a2.$$typeof) {
        case Ba:
          g2 = 10;
          break a;
        case Ca:
          g2 = 9;
          break a;
        case Da:
          g2 = 11;
          break a;
        case Ga:
          g2 = 14;
          break a;
        case Ha:
          g2 = 16;
          d2 = null;
          break a;
      }
      throw Error(p$1(130, null == a2 ? a2 : typeof a2, ""));
  }
  b2 = Bg(g2, c2, b2, e2);
  b2.elementType = a2;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function Tg(a2, b2, c2, d2) {
  a2 = Bg(7, a2, d2, b2);
  a2.lanes = c2;
  return a2;
}
function pj(a2, b2, c2, d2) {
  a2 = Bg(22, a2, d2, b2);
  a2.elementType = Ia;
  a2.lanes = c2;
  a2.stateNode = { isHidden: false };
  return a2;
}
function Qg(a2, b2, c2) {
  a2 = Bg(6, a2, null, b2);
  a2.lanes = c2;
  return a2;
}
function Sg(a2, b2, c2) {
  b2 = Bg(4, null !== a2.children ? a2.children : [], a2.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
  return b2;
}
function al(a2, b2, c2, d2, e2) {
  this.tag = b2;
  this.containerInfo = a2;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d2;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function bl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = new al(a2, b2, c2, h2, k2);
  1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
  f2 = Bg(3, null, null, b2);
  a2.current = f2;
  f2.stateNode = a2;
  f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  kh(f2);
  return a2;
}
function cl(a2, b2, c2) {
  var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
}
function dl(a2) {
  if (!a2) return Vf;
  a2 = a2._reactInternals;
  a: {
    if (Vb(a2) !== a2 || 1 !== a2.tag) throw Error(p$1(170));
    var b2 = a2;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Zf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (null !== b2);
    throw Error(p$1(171));
  }
  if (1 === a2.tag) {
    var c2 = a2.type;
    if (Zf(c2)) return bg(a2, c2, b2);
  }
  return b2;
}
function el(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = bl(c2, d2, true, a2, e2, f2, g2, h2, k2);
  a2.context = dl(null);
  c2 = a2.current;
  d2 = R$1();
  e2 = yi(c2);
  f2 = mh(d2, e2);
  f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
  nh(c2, f2, e2);
  a2.current.lanes = e2;
  Ac(a2, e2, d2);
  Dk(a2, d2);
  return a2;
}
function fl(a2, b2, c2, d2) {
  var e2 = b2.current, f2 = R$1(), g2 = yi(e2);
  c2 = dl(c2);
  null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
  b2 = mh(f2, g2);
  b2.payload = { element: a2 };
  d2 = void 0 === d2 ? null : d2;
  null !== d2 && (b2.callback = d2);
  a2 = nh(e2, b2, g2);
  null !== a2 && (gi(a2, e2, g2, f2), oh(a2, e2, g2));
  return g2;
}
function gl(a2) {
  a2 = a2.current;
  if (!a2.child) return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function hl(a2, b2) {
  a2 = a2.memoizedState;
  if (null !== a2 && null !== a2.dehydrated) {
    var c2 = a2.retryLane;
    a2.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
  }
}
function il(a2, b2) {
  hl(a2, b2);
  (a2 = a2.alternate) && hl(a2, b2);
}
function jl() {
  return null;
}
var kl = "function" === typeof reportError ? reportError : function(a2) {
  console.error(a2);
};
function ll(a2) {
  this._internalRoot = a2;
}
ml.prototype.render = ll.prototype.render = function(a2) {
  var b2 = this._internalRoot;
  if (null === b2) throw Error(p$1(409));
  fl(a2, b2, null, null);
};
ml.prototype.unmount = ll.prototype.unmount = function() {
  var a2 = this._internalRoot;
  if (null !== a2) {
    this._internalRoot = null;
    var b2 = a2.containerInfo;
    Rk(function() {
      fl(null, a2, null, null);
    });
    b2[uf] = null;
  }
};
function ml(a2) {
  this._internalRoot = a2;
}
ml.prototype.unstable_scheduleHydration = function(a2) {
  if (a2) {
    var b2 = Hc();
    a2 = { blockedOn: null, target: a2, priority: b2 };
    for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++) ;
    Qc.splice(c2, 0, a2);
    0 === c2 && Vc(a2);
  }
};
function nl(a2) {
  return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType);
}
function ol(a2) {
  return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType && (8 !== a2.nodeType || " react-mount-point-unstable " !== a2.nodeValue));
}
function pl() {
}
function ql(a2, b2, c2, d2, e2) {
  if (e2) {
    if ("function" === typeof d2) {
      var f2 = d2;
      d2 = function() {
        var a3 = gl(g2);
        f2.call(a3);
      };
    }
    var g2 = el(b2, d2, a2, 0, null, false, false, "", pl);
    a2._reactRootContainer = g2;
    a2[uf] = g2.current;
    sf(8 === a2.nodeType ? a2.parentNode : a2);
    Rk();
    return g2;
  }
  for (; e2 = a2.lastChild; ) a2.removeChild(e2);
  if ("function" === typeof d2) {
    var h2 = d2;
    d2 = function() {
      var a3 = gl(k2);
      h2.call(a3);
    };
  }
  var k2 = bl(a2, 0, false, null, null, false, false, "", pl);
  a2._reactRootContainer = k2;
  a2[uf] = k2.current;
  sf(8 === a2.nodeType ? a2.parentNode : a2);
  Rk(function() {
    fl(b2, k2, c2, d2);
  });
  return k2;
}
function rl(a2, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2;
    if ("function" === typeof e2) {
      var h2 = e2;
      e2 = function() {
        var a3 = gl(g2);
        h2.call(a3);
      };
    }
    fl(b2, g2, a2, e2);
  } else g2 = ql(c2, b2, a2, e2, d2);
  return gl(g2);
}
Ec = function(a2) {
  switch (a2.tag) {
    case 3:
      var b2 = a2.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c2 = tc(b2.pendingLanes);
        0 !== c2 && (Cc(b2, c2 | 1), Dk(b2, B$1()), 0 === (K$1 & 6) && (Gj = B$1() + 500, jg()));
      }
      break;
    case 13:
      Rk(function() {
        var b3 = ih(a2, 1);
        if (null !== b3) {
          var c3 = R$1();
          gi(b3, a2, 1, c3);
        }
      }), il(a2, 1);
  }
};
Fc = function(a2) {
  if (13 === a2.tag) {
    var b2 = ih(a2, 134217728);
    if (null !== b2) {
      var c2 = R$1();
      gi(b2, a2, 134217728, c2);
    }
    il(a2, 134217728);
  }
};
Gc = function(a2) {
  if (13 === a2.tag) {
    var b2 = yi(a2), c2 = ih(a2, b2);
    if (null !== c2) {
      var d2 = R$1();
      gi(c2, a2, b2, d2);
    }
    il(a2, b2);
  }
};
Hc = function() {
  return C$1;
};
Ic = function(a2, b2) {
  var c2 = C$1;
  try {
    return C$1 = a2, b2();
  } finally {
    C$1 = c2;
  }
};
yb = function(a2, b2, c2) {
  switch (b2) {
    case "input":
      bb(a2, c2);
      b2 = c2.name;
      if ("radio" === c2.type && null != b2) {
        for (c2 = a2; c2.parentNode; ) c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a2 && d2.form === a2.form) {
            var e2 = Db(d2);
            if (!e2) throw Error(p$1(90));
            Wa(d2);
            bb(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a2, c2);
      break;
    case "select":
      b2 = c2.value, null != b2 && fb(a2, !!c2.multiple, b2, false);
  }
};
Gb = Qk;
Hb = Rk;
var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
  a2 = Zb(a2);
  return null === a2 ? null : a2.stateNode;
}, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber) try {
    kc = vl.inject(ul), lc = vl;
  } catch (a2) {
  }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
reactDom_production_min.createPortal = function(a2, b2) {
  var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!nl(b2)) throw Error(p$1(200));
  return cl(a2, b2, null, c2);
};
reactDom_production_min.createRoot = function(a2, b2) {
  if (!nl(a2)) throw Error(p$1(299));
  var c2 = false, d2 = "", e2 = kl;
  null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
  b2 = bl(a2, 1, false, null, null, c2, false, d2, e2);
  a2[uf] = b2.current;
  sf(8 === a2.nodeType ? a2.parentNode : a2);
  return new ll(b2);
};
reactDom_production_min.findDOMNode = function(a2) {
  if (null == a2) return null;
  if (1 === a2.nodeType) return a2;
  var b2 = a2._reactInternals;
  if (void 0 === b2) {
    if ("function" === typeof a2.render) throw Error(p$1(188));
    a2 = Object.keys(a2).join(",");
    throw Error(p$1(268, a2));
  }
  a2 = Zb(b2);
  a2 = null === a2 ? null : a2.stateNode;
  return a2;
};
reactDom_production_min.flushSync = function(a2) {
  return Rk(a2);
};
reactDom_production_min.hydrate = function(a2, b2, c2) {
  if (!ol(b2)) throw Error(p$1(200));
  return rl(null, a2, b2, true, c2);
};
reactDom_production_min.hydrateRoot = function(a2, b2, c2) {
  if (!nl(a2)) throw Error(p$1(405));
  var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = kl;
  null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
  b2 = el(b2, null, a2, 1, null != c2 ? c2 : null, e2, false, f2, g2);
  a2[uf] = b2.current;
  sf(a2);
  if (d2) for (a2 = 0; a2 < d2.length; a2++) c2 = d2[a2], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
    c2,
    e2
  );
  return new ml(b2);
};
reactDom_production_min.render = function(a2, b2, c2) {
  if (!ol(b2)) throw Error(p$1(200));
  return rl(null, a2, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a2) {
  if (!ol(a2)) throw Error(p$1(40));
  return a2._reactRootContainer ? (Rk(function() {
    rl(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Qk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
  if (!ol(c2)) throw Error(p$1(200));
  if (null == a2 || void 0 === a2._reactInternals) throw Error(p$1(38));
  return rl(a2, b2, c2, false, d2);
};
reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
var createRoot;
var m$1 = reactDomExports;
{
  createRoot = m$1.createRoot;
  m$1.hydrateRoot;
}
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
const PopStateEventType = "popstate";
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createBrowserLocation(window2, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window2.location;
    return createLocation(
      "",
      {
        pathname,
        search,
        hash
      },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createBrowserHref(window2, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined") console.warn(message);
    try {
      throw new Error(message);
    } catch (e2) {
    }
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends$2({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });
  return location;
}
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  let {
    window: window2 = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window2.history;
  let action = Action.Pop;
  let listener = null;
  let index = getIndex();
  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends$2({}, globalHistory.state, {
      idx: index
    }), "");
  }
  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }
  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }
  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      window2.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }
  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }
  function createURL(to) {
    let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    href = href.replace(/ $/, "%20");
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref(window2, to);
    },
    createURL,
    encodeLocation(to) {
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace,
    go(n2) {
      return globalHistory.go(n2);
    }
  };
  return history;
}
var ResultType;
(function(ResultType2) {
  ResultType2["data"] = "data";
  ResultType2["deferred"] = "deferred";
  ResultType2["redirect"] = "redirect";
  ResultType2["error"] = "error";
})(ResultType || (ResultType = {}));
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  return matchRoutesImpl(routes, locationArg, basename, false);
}
function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i2 = 0; matches == null && i2 < branches.length; ++i2) {
    let decoded = decodePath(pathname);
    matches = matchRouteBranch(branches[i2], decoded, allowPartial);
  }
  return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        // Our types know better, but runtime JS may not!
        // @ts-expect-error
        route.index !== true,
        "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index) => {
    var _route$path;
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith("?");
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a2, b2) => a2.score !== b2.score ? b2.score - a2.score : compareIndexes(a2.routesMeta.map((meta) => meta.childrenIndex), b2.routesMeta.map((meta) => meta.childrenIndex)));
}
const paramRe = /^:[\w-]+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s2) => s2 === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s2) => !isSplat(s2)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a2, b2) {
  let siblings = a2.length === b2.length && a2.slice(0, -1).every((n2, i2) => n2 === b2[i2]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a2[a2.length - 1] - b2[b2.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname, allowPartial) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i2 = 0; i2 < routesMeta.length; ++i2) {
    let meta = routesMeta[i2];
    let end = i2 === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    let route = meta.route;
    if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
      match = matchPath({
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end: false
      }, remainingPathname);
    }
    if (!match) {
      return null;
    }
    Object.assign(matchedParams, match.params);
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = compiledParams.reduce((memo, _ref, index) => {
    let {
      paramName,
      isOptional
    } = _ref;
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    const value = captureGroups[index];
    if (isOptional && !value) {
      memo[paramName] = void 0;
    } else {
      memo[paramName] = (value || "").replace(/%2F/g, "/");
    }
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
  let params = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (_2, paramName, isOptional) => {
    params.push({
      paramName,
      isOptional: isOptional != null
    });
    return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    params.push({
      paramName: "*"
    });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else ;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, params];
}
function decodePath(value) {
  try {
    return value.split("/").map((v2) => decodeURIComponent(v2).replace(/\//g, "%2F")).join("/");
  } catch (error) {
    warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
function getResolveToMatches(matches, v7_relativeSplatPath) {
  let pathMatches = getPathContributingMatches(matches);
  if (v7_relativeSplatPath) {
    return pathMatches.map((match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase);
  }
  return pathMatches.map((match) => match.pathnameBase);
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends$2({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (!isPathRelative && toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
const validMutationMethodsArr = ["post", "put", "patch", "delete"];
new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
new Set(validRequestMethodsArr);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
const DataRouterContext = /* @__PURE__ */ reactExports.createContext(null);
const DataRouterStateContext = /* @__PURE__ */ reactExports.createContext(null);
const NavigationContext = /* @__PURE__ */ reactExports.createContext(null);
const LocationContext = /* @__PURE__ */ reactExports.createContext(null);
const RouteContext = /* @__PURE__ */ reactExports.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
const RouteErrorContext = /* @__PURE__ */ reactExports.createContext(null);
function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator2.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return reactExports.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? invariant(false) : void 0;
  return reactExports.useContext(LocationContext).location;
}
function useIsomorphicLayoutEffect(cb2) {
  let isStatic = reactExports.useContext(NavigationContext).static;
  if (!isStatic) {
    reactExports.useLayoutEffect(cb2);
  }
}
function useNavigate() {
  let {
    isDataRoute
  } = reactExports.useContext(RouteContext);
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  !useInRouterContext() ? invariant(false) : void 0;
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  let {
    basename,
    future,
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let {
    matches
  } = reactExports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
  let activeRef = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current) return;
    if (typeof to === "number") {
      navigator2.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
    if (dataRouterContext == null && basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator2.replace : navigator2.push)(path, options.state, options);
  }, [basename, navigator2, routePathnamesJson, locationPathname, dataRouterContext]);
  return navigate;
}
function useParams() {
  let {
    matches
  } = reactExports.useContext(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    future
  } = reactExports.useContext(NavigationContext);
  let {
    matches
  } = reactExports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
  return reactExports.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}
function useRoutes(routes, locationArg) {
  return useRoutesImpl(routes, locationArg);
}
function useRoutesImpl(routes, locationArg, dataRouterState, future) {
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let {
    matches: parentMatches
  } = reactExports.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  routeMatch && routeMatch.route;
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = pathname;
  if (parentPathnameBase !== "/") {
    let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
    let segments = pathname.replace(/^\//, "").split("/");
    remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
  }
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });
  let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator2.encodeLocation ? navigator2.encodeLocation(match.pathname).pathname : match.pathname
    ]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator2.encodeLocation ? navigator2.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
    ])
  })), parentMatches, dataRouterState, future);
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
      value: {
        location: _extends$1({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: Action.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let devInfo = null;
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ reactExports.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /* @__PURE__ */ reactExports.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}
const defaultErrorElement = /* @__PURE__ */ reactExports.createElement(DefaultErrorComponent, null);
class RenderErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }
    return {
      error: props.error !== void 0 ? props.error : state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ reactExports.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState, future) {
  var _dataRouterState;
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (dataRouterState === void 0) {
    dataRouterState = null;
  }
  if (future === void 0) {
    future = null;
  }
  if (matches == null) {
    var _future;
    if (!dataRouterState) {
      return null;
    }
    if (dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else if ((_future = future) != null && _future.v7_partialHydration && parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = (_dataRouterState = dataRouterState) == null ? void 0 : _dataRouterState.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex((m2) => m2.route.id && (errors == null ? void 0 : errors[m2.route.id]) !== void 0);
    !(errorIndex >= 0) ? invariant(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  let renderFallback = false;
  let fallbackIndex = -1;
  if (dataRouterState && future && future.v7_partialHydration) {
    for (let i2 = 0; i2 < renderedMatches.length; i2++) {
      let match = renderedMatches[i2];
      if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
        fallbackIndex = i2;
      }
      if (match.route.id) {
        let {
          loaderData,
          errors: errors2
        } = dataRouterState;
        let needsToRunLoader = match.route.loader && loaderData[match.route.id] === void 0 && (!errors2 || errors2[match.route.id] === void 0);
        if (match.route.lazy || needsToRunLoader) {
          renderFallback = true;
          if (fallbackIndex >= 0) {
            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
          } else {
            renderedMatches = [renderedMatches[0]];
          }
          break;
        }
      }
    }
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    let error;
    let shouldRenderHydrateFallback = false;
    let errorElement = null;
    let hydrateFallbackElement = null;
    if (dataRouterState) {
      error = errors && match.route.id ? errors[match.route.id] : void 0;
      errorElement = match.route.errorElement || defaultErrorElement;
      if (renderFallback) {
        if (fallbackIndex < 0 && index === 0) {
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = null;
        } else if (fallbackIndex === index) {
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = match.route.hydrateFallbackElement || null;
        }
      }
    }
    let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (shouldRenderHydrateFallback) {
        children = hydrateFallbackElement;
      } else if (match.route.Component) {
        children = /* @__PURE__ */ reactExports.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      } else {
        children = outlet;
      }
      return /* @__PURE__ */ reactExports.createElement(RenderedRoute, {
        match,
        routeContext: {
          outlet,
          matches: matches2,
          isDataRoute: dataRouterState != null
        },
        children
      });
    };
    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ reactExports.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      revalidation: dataRouterState.revalidation,
      component: errorElement,
      error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches: matches2,
        isDataRoute: true
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook$1 = /* @__PURE__ */ function(DataRouterHook2) {
  DataRouterHook2["UseBlocker"] = "useBlocker";
  DataRouterHook2["UseRevalidator"] = "useRevalidator";
  DataRouterHook2["UseNavigateStable"] = "useNavigate";
  return DataRouterHook2;
}(DataRouterHook$1 || {});
var DataRouterStateHook$1 = /* @__PURE__ */ function(DataRouterStateHook2) {
  DataRouterStateHook2["UseBlocker"] = "useBlocker";
  DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook2["UseActionData"] = "useActionData";
  DataRouterStateHook2["UseRouteError"] = "useRouteError";
  DataRouterStateHook2["UseNavigation"] = "useNavigation";
  DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook2["UseMatches"] = "useMatches";
  DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
  DataRouterStateHook2["UseNavigateStable"] = "useNavigate";
  DataRouterStateHook2["UseRouteId"] = "useRouteId";
  return DataRouterStateHook2;
}(DataRouterStateHook$1 || {});
function useDataRouterContext(hookName) {
  let ctx = reactExports.useContext(DataRouterContext);
  !ctx ? invariant(false) : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = reactExports.useContext(DataRouterStateContext);
  !state ? invariant(false) : void 0;
  return state;
}
function useRouteContext(hookName) {
  let route = reactExports.useContext(RouteContext);
  !route ? invariant(false) : void 0;
  return route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext();
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ? invariant(false) : void 0;
  return thisRoute.route.id;
}
function useRouteError() {
  var _state$errors;
  let error = reactExports.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook$1.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook$1.UseRouteError);
  if (error !== void 0) {
    return error;
  }
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
function useNavigateStable() {
  let {
    router
  } = useDataRouterContext(DataRouterHook$1.UseNavigateStable);
  let id2 = useCurrentRouteId(DataRouterStateHook$1.UseNavigateStable);
  let activeRef = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current) return;
    if (typeof to === "number") {
      router.navigate(to);
    } else {
      router.navigate(to, _extends$1({
        fromRouteId: id2
      }, options));
    }
  }, [router, id2]);
  return navigate;
}
function logV6DeprecationWarnings(renderFuture, routerFuture) {
  if ((renderFuture == null ? void 0 : renderFuture.v7_startTransition) === void 0) ;
  if ((renderFuture == null ? void 0 : renderFuture.v7_relativeSplatPath) === void 0 && !routerFuture) ;
}
function Route(_props) {
  invariant(false);
}
function Router(_ref5) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator: navigator2,
    static: staticProp = false,
    future
  } = _ref5;
  !!useInRouterContext() ? invariant(false) : void 0;
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = reactExports.useMemo(() => ({
    basename,
    navigator: navigator2,
    static: staticProp,
    future: _extends$1({
      v7_relativeSplatPath: false
    }, future)
  }), [basename, future, navigator2, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = reactExports.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  if (locationContext == null) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
    children,
    value: locationContext
  }));
}
function Routes(_ref6) {
  let {
    children,
    location
  } = _ref6;
  return useRoutes(createRoutesFromChildren(children), location);
}
new Promise(() => {
});
function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  let routes = [];
  reactExports.Children.forEach(children, (element, index) => {
    if (!/* @__PURE__ */ reactExports.isValidElement(element)) {
      return;
    }
    let treePath = [...parentPath, index];
    if (element.type === reactExports.Fragment) {
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
      return;
    }
    !(element.type === Route) ? invariant(false) : void 0;
    !(!element.props.index || !element.props.children) ? invariant(false) : void 0;
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }
    routes.push(route);
  });
  return routes;
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && // Ignore everything but left clicks
  (!target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event);
}
const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"];
const REACT_ROUTER_VERSION = "6";
try {
  window.__reactRouterVersion = REACT_ROUTER_VERSION;
} catch (e2) {
}
const START_TRANSITION = "startTransition";
const startTransitionImpl = React$1[START_TRANSITION];
function BrowserRouter(_ref4) {
  let {
    basename,
    children,
    future,
    window: window2
  } = _ref4;
  let historyRef = reactExports.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window: window2,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = reactExports.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = reactExports.useCallback((newState) => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  reactExports.useLayoutEffect(() => history.listen(setState), [history, setState]);
  reactExports.useEffect(() => logV6DeprecationWarnings(future), [future]);
  return /* @__PURE__ */ reactExports.createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
    future
  });
}
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const Link = /* @__PURE__ */ reactExports.forwardRef(function LinkWithRef(_ref7, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace: replace2,
    state,
    target,
    to,
    preventScrollReset,
    viewTransition
  } = _ref7, rest = _objectWithoutPropertiesLoose(_ref7, _excluded);
  let {
    basename
  } = reactExports.useContext(NavigationContext);
  let absoluteHref;
  let isExternal = false;
  if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
    absoluteHref = to;
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
        let path = stripBasename(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          to = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e2) {
      }
    }
  }
  let href = useHref(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace: replace2,
    state,
    target,
    preventScrollReset,
    relative,
    viewTransition
  });
  function handleClick(event) {
    if (onClick) onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ reactExports.createElement("a", _extends({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref,
      target
    }))
  );
});
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook2["UseSubmit"] = "useSubmit";
  DataRouterHook2["UseSubmitFetcher"] = "useSubmitFetcher";
  DataRouterHook2["UseFetcher"] = "useFetcher";
  DataRouterHook2["useViewTransitionState"] = "useViewTransitionState";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseFetcher"] = "useFetcher";
  DataRouterStateHook2["UseFetchers"] = "useFetchers";
  DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative,
    viewTransition
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, {
    relative
  });
  return reactExports.useCallback((event) => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
      navigate(to, {
        replace: replace2,
        state,
        preventScrollReset,
        relative,
        viewTransition
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative, viewTransition]);
}
var extendStatics = function(d2, b2) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
    d3.__proto__ = b3;
  } || function(d3, b3) {
    for (var p2 in b3) if (Object.prototype.hasOwnProperty.call(b3, p2)) d3[p2] = b3[p2];
  };
  return extendStatics(d2, b2);
};
function __extends(d2, b2) {
  if (typeof b2 !== "function" && b2 !== null)
    throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
  extendStatics(d2, b2);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2)) t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __rest(s2, e2) {
  var t2 = {};
  for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
    t2[p2] = s2[p2];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
      if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
        t2[p2[i2]] = s2[p2[i2]];
    }
  return t2;
}
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
}
function __generator(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t2[0] & 1) throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2 = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g2.next = verb(0), g2["throw"] = verb(1), g2["return"] = verb(2), typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2) throw new TypeError("Generator is already executing.");
    while (g2 && (g2 = 0, op[0] && (_2 = 0)), _2) try {
      if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done) return t2;
      if (y2 = 0, t2) op = [op[0] & 2, t2.value];
      switch (op[0]) {
        case 0:
        case 1:
          t2 = op;
          break;
        case 4:
          _2.label++;
          return { value: op[1], done: false };
        case 5:
          _2.label++;
          y2 = op[1];
          op = [0];
          continue;
        case 7:
          op = _2.ops.pop();
          _2.trys.pop();
          continue;
        default:
          if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _2 = 0;
            continue;
          }
          if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
            _2.label = op[1];
            break;
          }
          if (op[0] === 6 && _2.label < t2[1]) {
            _2.label = t2[1];
            t2 = op;
            break;
          }
          if (t2 && _2.label < t2[2]) {
            _2.label = t2[2];
            _2.ops.push(op);
            break;
          }
          if (t2[2]) _2.ops.pop();
          _2.trys.pop();
          continue;
      }
      op = body.call(thisArg, _2);
    } catch (e2) {
      op = [6, e2];
      y2 = 0;
    } finally {
      f2 = t2 = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e2 = new Error(message);
  return e2.name = "SuppressedError", e2.error = error, e2.suppressed = suppressed, e2;
};
function e(e2, t2) {
  var i2 = {};
  for (var o2 in e2) Object.prototype.hasOwnProperty.call(e2, o2) && t2.indexOf(o2) < 0 && (i2[o2] = e2[o2]);
  if (null != e2 && "function" == typeof Object.getOwnPropertySymbols) {
    var n2 = 0;
    for (o2 = Object.getOwnPropertySymbols(e2); n2 < o2.length; n2++) t2.indexOf(o2[n2]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, o2[n2]) && (i2[o2[n2]] = e2[o2[n2]]);
  }
  return i2;
}
"function" == typeof SuppressedError && SuppressedError;
var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function i(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
function o(e2, t2) {
  return e2(t2 = { exports: {} }, t2.exports), t2.exports;
}
var n = o(function(e2, t2) {
  Object.defineProperty(t2, "__esModule", { value: true });
  var i2 = function() {
    function e3() {
      var e4 = this;
      this.locked = /* @__PURE__ */ new Map(), this.addToLocked = function(t3, i3) {
        var o2 = e4.locked.get(t3);
        void 0 === o2 ? void 0 === i3 ? e4.locked.set(t3, []) : e4.locked.set(t3, [i3]) : void 0 !== i3 && (o2.unshift(i3), e4.locked.set(t3, o2));
      }, this.isLocked = function(t3) {
        return e4.locked.has(t3);
      }, this.lock = function(t3) {
        return new Promise(function(i3, o2) {
          e4.isLocked(t3) ? e4.addToLocked(t3, i3) : (e4.addToLocked(t3), i3());
        });
      }, this.unlock = function(t3) {
        var i3 = e4.locked.get(t3);
        if (void 0 !== i3 && 0 !== i3.length) {
          var o2 = i3.pop();
          e4.locked.set(t3, i3), void 0 !== o2 && setTimeout(o2, 0);
        } else e4.locked.delete(t3);
      };
    }
    return e3.getInstance = function() {
      return void 0 === e3.instance && (e3.instance = new e3()), e3.instance;
    }, e3;
  }();
  t2.default = function() {
    return i2.getInstance();
  };
});
i(n);
var a = i(o(function(e2, i2) {
  var o2 = t && t.__awaiter || function(e3, t2, i3, o3) {
    return new (i3 || (i3 = Promise))(function(n2, a3) {
      function r3(e4) {
        try {
          c3(o3.next(e4));
        } catch (e5) {
          a3(e5);
        }
      }
      function s3(e4) {
        try {
          c3(o3.throw(e4));
        } catch (e5) {
          a3(e5);
        }
      }
      function c3(e4) {
        e4.done ? n2(e4.value) : new i3(function(t3) {
          t3(e4.value);
        }).then(r3, s3);
      }
      c3((o3 = o3.apply(e3, t2 || [])).next());
    });
  }, a2 = t && t.__generator || function(e3, t2) {
    var i3, o3, n2, a3, r3 = { label: 0, sent: function() {
      if (1 & n2[0]) throw n2[1];
      return n2[1];
    }, trys: [], ops: [] };
    return a3 = { next: s3(0), throw: s3(1), return: s3(2) }, "function" == typeof Symbol && (a3[Symbol.iterator] = function() {
      return this;
    }), a3;
    function s3(a4) {
      return function(s4) {
        return function(a5) {
          if (i3) throw new TypeError("Generator is already executing.");
          for (; r3; ) try {
            if (i3 = 1, o3 && (n2 = 2 & a5[0] ? o3.return : a5[0] ? o3.throw || ((n2 = o3.return) && n2.call(o3), 0) : o3.next) && !(n2 = n2.call(o3, a5[1])).done) return n2;
            switch (o3 = 0, n2 && (a5 = [2 & a5[0], n2.value]), a5[0]) {
              case 0:
              case 1:
                n2 = a5;
                break;
              case 4:
                return r3.label++, { value: a5[1], done: false };
              case 5:
                r3.label++, o3 = a5[1], a5 = [0];
                continue;
              case 7:
                a5 = r3.ops.pop(), r3.trys.pop();
                continue;
              default:
                if (!(n2 = r3.trys, (n2 = n2.length > 0 && n2[n2.length - 1]) || 6 !== a5[0] && 2 !== a5[0])) {
                  r3 = 0;
                  continue;
                }
                if (3 === a5[0] && (!n2 || a5[1] > n2[0] && a5[1] < n2[3])) {
                  r3.label = a5[1];
                  break;
                }
                if (6 === a5[0] && r3.label < n2[1]) {
                  r3.label = n2[1], n2 = a5;
                  break;
                }
                if (n2 && r3.label < n2[2]) {
                  r3.label = n2[2], r3.ops.push(a5);
                  break;
                }
                n2[2] && r3.ops.pop(), r3.trys.pop();
                continue;
            }
            a5 = t2.call(e3, r3);
          } catch (e4) {
            a5 = [6, e4], o3 = 0;
          } finally {
            i3 = n2 = 0;
          }
          if (5 & a5[0]) throw a5[1];
          return { value: a5[0] ? a5[1] : void 0, done: true };
        }([a4, s4]);
      };
    }
  }, r2 = t;
  Object.defineProperty(i2, "__esModule", { value: true });
  var s2 = "browser-tabs-lock-key", c2 = { key: function(e3) {
    return o2(r2, void 0, void 0, function() {
      return a2(this, function(e4) {
        throw new Error("Unsupported");
      });
    });
  }, getItem: function(e3) {
    return o2(r2, void 0, void 0, function() {
      return a2(this, function(e4) {
        throw new Error("Unsupported");
      });
    });
  }, clear: function() {
    return o2(r2, void 0, void 0, function() {
      return a2(this, function(e3) {
        return [2, window.localStorage.clear()];
      });
    });
  }, removeItem: function(e3) {
    return o2(r2, void 0, void 0, function() {
      return a2(this, function(e4) {
        throw new Error("Unsupported");
      });
    });
  }, setItem: function(e3, t2) {
    return o2(r2, void 0, void 0, function() {
      return a2(this, function(e4) {
        throw new Error("Unsupported");
      });
    });
  }, keySync: function(e3) {
    return window.localStorage.key(e3);
  }, getItemSync: function(e3) {
    return window.localStorage.getItem(e3);
  }, clearSync: function() {
    return window.localStorage.clear();
  }, removeItemSync: function(e3) {
    return window.localStorage.removeItem(e3);
  }, setItemSync: function(e3, t2) {
    return window.localStorage.setItem(e3, t2);
  } };
  function d2(e3) {
    return new Promise(function(t2) {
      return setTimeout(t2, e3);
    });
  }
  function u2(e3) {
    for (var t2 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", i3 = "", o3 = 0; o3 < e3; o3++) {
      i3 += t2[Math.floor(Math.random() * t2.length)];
    }
    return i3;
  }
  var l2 = function() {
    function e3(t2) {
      this.acquiredIatSet = /* @__PURE__ */ new Set(), this.storageHandler = void 0, this.id = Date.now().toString() + u2(15), this.acquireLock = this.acquireLock.bind(this), this.releaseLock = this.releaseLock.bind(this), this.releaseLock__private__ = this.releaseLock__private__.bind(this), this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this), this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this), this.storageHandler = t2, void 0 === e3.waiters && (e3.waiters = []);
    }
    return e3.prototype.acquireLock = function(t2, i3) {
      return void 0 === i3 && (i3 = 5e3), o2(this, void 0, void 0, function() {
        var o3, n2, r3, l3, h2, p2, m2;
        return a2(this, function(a3) {
          switch (a3.label) {
            case 0:
              o3 = Date.now() + u2(4), n2 = Date.now() + i3, r3 = s2 + "-" + t2, l3 = void 0 === this.storageHandler ? c2 : this.storageHandler, a3.label = 1;
            case 1:
              return Date.now() < n2 ? [4, d2(30)] : [3, 8];
            case 2:
              return a3.sent(), null !== l3.getItemSync(r3) ? [3, 5] : (h2 = this.id + "-" + t2 + "-" + o3, [4, d2(Math.floor(25 * Math.random()))]);
            case 3:
              return a3.sent(), l3.setItemSync(r3, JSON.stringify({ id: this.id, iat: o3, timeoutKey: h2, timeAcquired: Date.now(), timeRefreshed: Date.now() })), [4, d2(30)];
            case 4:
              return a3.sent(), null !== (p2 = l3.getItemSync(r3)) && (m2 = JSON.parse(p2)).id === this.id && m2.iat === o3 ? (this.acquiredIatSet.add(o3), this.refreshLockWhileAcquired(r3, o3), [2, true]) : [3, 7];
            case 5:
              return e3.lockCorrector(void 0 === this.storageHandler ? c2 : this.storageHandler), [4, this.waitForSomethingToChange(n2)];
            case 6:
              a3.sent(), a3.label = 7;
            case 7:
              return o3 = Date.now() + u2(4), [3, 1];
            case 8:
              return [2, false];
          }
        });
      });
    }, e3.prototype.refreshLockWhileAcquired = function(e4, t2) {
      return o2(this, void 0, void 0, function() {
        var i3 = this;
        return a2(this, function(r3) {
          return setTimeout(function() {
            return o2(i3, void 0, void 0, function() {
              var i4, o3, r4;
              return a2(this, function(a3) {
                switch (a3.label) {
                  case 0:
                    return [4, n.default().lock(t2)];
                  case 1:
                    return a3.sent(), this.acquiredIatSet.has(t2) ? (i4 = void 0 === this.storageHandler ? c2 : this.storageHandler, null === (o3 = i4.getItemSync(e4)) ? (n.default().unlock(t2), [2]) : ((r4 = JSON.parse(o3)).timeRefreshed = Date.now(), i4.setItemSync(e4, JSON.stringify(r4)), n.default().unlock(t2), this.refreshLockWhileAcquired(e4, t2), [2])) : (n.default().unlock(t2), [2]);
                }
              });
            });
          }, 1e3), [2];
        });
      });
    }, e3.prototype.waitForSomethingToChange = function(t2) {
      return o2(this, void 0, void 0, function() {
        return a2(this, function(i3) {
          switch (i3.label) {
            case 0:
              return [4, new Promise(function(i4) {
                var o3 = false, n2 = Date.now(), a3 = false;
                function r3() {
                  if (a3 || (window.removeEventListener("storage", r3), e3.removeFromWaiting(r3), clearTimeout(s3), a3 = true), !o3) {
                    o3 = true;
                    var t3 = 50 - (Date.now() - n2);
                    t3 > 0 ? setTimeout(i4, t3) : i4(null);
                  }
                }
                window.addEventListener("storage", r3), e3.addToWaiting(r3);
                var s3 = setTimeout(r3, Math.max(0, t2 - Date.now()));
              })];
            case 1:
              return i3.sent(), [2];
          }
        });
      });
    }, e3.addToWaiting = function(t2) {
      this.removeFromWaiting(t2), void 0 !== e3.waiters && e3.waiters.push(t2);
    }, e3.removeFromWaiting = function(t2) {
      void 0 !== e3.waiters && (e3.waiters = e3.waiters.filter(function(e4) {
        return e4 !== t2;
      }));
    }, e3.notifyWaiters = function() {
      void 0 !== e3.waiters && e3.waiters.slice().forEach(function(e4) {
        return e4();
      });
    }, e3.prototype.releaseLock = function(e4) {
      return o2(this, void 0, void 0, function() {
        return a2(this, function(t2) {
          switch (t2.label) {
            case 0:
              return [4, this.releaseLock__private__(e4)];
            case 1:
              return [2, t2.sent()];
          }
        });
      });
    }, e3.prototype.releaseLock__private__ = function(t2) {
      return o2(this, void 0, void 0, function() {
        var i3, o3, r3, d3;
        return a2(this, function(a3) {
          switch (a3.label) {
            case 0:
              return i3 = void 0 === this.storageHandler ? c2 : this.storageHandler, o3 = s2 + "-" + t2, null === (r3 = i3.getItemSync(o3)) ? [2] : (d3 = JSON.parse(r3)).id !== this.id ? [3, 2] : [4, n.default().lock(d3.iat)];
            case 1:
              a3.sent(), this.acquiredIatSet.delete(d3.iat), i3.removeItemSync(o3), n.default().unlock(d3.iat), e3.notifyWaiters(), a3.label = 2;
            case 2:
              return [2];
          }
        });
      });
    }, e3.lockCorrector = function(t2) {
      for (var i3 = Date.now() - 5e3, o3 = t2, n2 = [], a3 = 0; ; ) {
        var r3 = o3.keySync(a3);
        if (null === r3) break;
        n2.push(r3), a3++;
      }
      for (var c3 = false, d3 = 0; d3 < n2.length; d3++) {
        var u3 = n2[d3];
        if (u3.includes(s2)) {
          var l3 = o3.getItemSync(u3);
          if (null !== l3) {
            var h2 = JSON.parse(l3);
            (void 0 === h2.timeRefreshed && h2.timeAcquired < i3 || void 0 !== h2.timeRefreshed && h2.timeRefreshed < i3) && (o3.removeItemSync(u3), c3 = true);
          }
        }
      }
      c3 && e3.notifyWaiters();
    }, e3.waiters = void 0, e3;
  }();
  i2.default = l2;
}));
const r = { timeoutInSeconds: 60 }, s = { name: "auth0-spa-js", version: "2.1.3" }, c = () => Date.now();
class d extends Error {
  constructor(e2, t2) {
    super(t2), this.error = e2, this.error_description = t2, Object.setPrototypeOf(this, d.prototype);
  }
  static fromPayload({ error: e2, error_description: t2 }) {
    return new d(e2, t2);
  }
}
class u extends d {
  constructor(e2, t2, i2, o2 = null) {
    super(e2, t2), this.state = i2, this.appState = o2, Object.setPrototypeOf(this, u.prototype);
  }
}
class l extends d {
  constructor() {
    super("timeout", "Timeout"), Object.setPrototypeOf(this, l.prototype);
  }
}
class h extends l {
  constructor(e2) {
    super(), this.popup = e2, Object.setPrototypeOf(this, h.prototype);
  }
}
class p extends d {
  constructor(e2) {
    super("cancelled", "Popup closed"), this.popup = e2, Object.setPrototypeOf(this, p.prototype);
  }
}
class m extends d {
  constructor(e2, t2, i2) {
    super(e2, t2), this.mfa_token = i2, Object.setPrototypeOf(this, m.prototype);
  }
}
class f extends d {
  constructor(e2, t2) {
    super("missing_refresh_token", `Missing Refresh Token (audience: '${g(e2, ["default"])}', scope: '${g(t2)}')`), this.audience = e2, this.scope = t2, Object.setPrototypeOf(this, f.prototype);
  }
}
function g(e2, t2 = []) {
  return e2 && !t2.includes(e2) ? e2 : "";
}
const w = () => window.crypto, y = () => {
  const e2 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.";
  let t2 = "";
  return Array.from(w().getRandomValues(new Uint8Array(43))).forEach((i2) => t2 += e2[i2 % e2.length]), t2;
}, k = (e2) => btoa(e2), v = (t2) => {
  var { clientId: i2 } = t2, o2 = e(t2, ["clientId"]);
  return new URLSearchParams(((e2) => Object.keys(e2).filter((t3) => void 0 !== e2[t3]).reduce((t3, i3) => Object.assign(Object.assign({}, t3), { [i3]: e2[i3] }), {}))(Object.assign({ client_id: i2 }, o2))).toString();
}, b = (e2) => ((e3) => decodeURIComponent(atob(e3).split("").map((e4) => "%" + ("00" + e4.charCodeAt(0).toString(16)).slice(-2)).join("")))(e2.replace(/_/g, "/").replace(/-/g, "+")), _ = async (e2, t2) => {
  const i2 = await fetch(e2, t2);
  return { ok: i2.ok, json: await i2.json() };
}, I = async (e2, t2, i2) => {
  const o2 = new AbortController();
  let n2;
  return t2.signal = o2.signal, Promise.race([_(e2, t2), new Promise((e3, t3) => {
    n2 = setTimeout(() => {
      o2.abort(), t3(new Error("Timeout when executing 'fetch'"));
    }, i2);
  })]).finally(() => {
    clearTimeout(n2);
  });
}, S = async (e2, t2, i2, o2, n2, a2, r2) => {
  return s2 = { auth: { audience: t2, scope: i2 }, timeout: n2, fetchUrl: e2, fetchOptions: o2, useFormData: r2 }, c2 = a2, new Promise(function(e3, t3) {
    const i3 = new MessageChannel();
    i3.port1.onmessage = function(o3) {
      o3.data.error ? t3(new Error(o3.data.error)) : e3(o3.data), i3.port1.close();
    }, c2.postMessage(s2, [i3.port2]);
  });
  var s2, c2;
}, O = async (e2, t2, i2, o2, n2, a2, r2 = 1e4) => n2 ? S(e2, t2, i2, o2, r2, n2, a2) : I(e2, o2, r2);
async function T(t2, i2) {
  var { baseUrl: o2, timeout: n2, audience: a2, scope: r2, auth0Client: c2, useFormData: u2 } = t2, l2 = e(t2, ["baseUrl", "timeout", "audience", "scope", "auth0Client", "useFormData"]);
  const h2 = u2 ? v(l2) : JSON.stringify(l2);
  return await async function(t3, i3, o3, n3, a3, r3, s2) {
    let c3, u3 = null;
    for (let e2 = 0; e2 < 3; e2++) try {
      c3 = await O(t3, o3, n3, a3, r3, s2, i3), u3 = null;
      break;
    } catch (e3) {
      u3 = e3;
    }
    if (u3) throw u3;
    const l3 = c3.json, { error: h3, error_description: p2 } = l3, g2 = e(l3, ["error", "error_description"]), { ok: w2 } = c3;
    if (!w2) {
      const e2 = p2 || `HTTP error. Unable to fetch ${t3}`;
      if ("mfa_required" === h3) throw new m(h3, e2, g2.mfa_token);
      if ("missing_refresh_token" === h3) throw new f(o3, n3);
      throw new d(h3 || "request_error", e2);
    }
    return g2;
  }(`${o2}/oauth/token`, n2, a2 || "default", r2, { method: "POST", body: h2, headers: { "Content-Type": u2 ? "application/x-www-form-urlencoded" : "application/json", "Auth0-Client": btoa(JSON.stringify(c2 || s)) } }, i2, u2);
}
const j = (...e2) => {
  return (t2 = e2.filter(Boolean).join(" ").trim().split(/\s+/), Array.from(new Set(t2))).join(" ");
  var t2;
};
class C {
  constructor(e2, t2 = "@@auth0spajs@@", i2) {
    this.prefix = t2, this.suffix = i2, this.clientId = e2.clientId, this.scope = e2.scope, this.audience = e2.audience;
  }
  toKey() {
    return [this.prefix, this.clientId, this.audience, this.scope, this.suffix].filter(Boolean).join("::");
  }
  static fromKey(e2) {
    const [t2, i2, o2, n2] = e2.split("::");
    return new C({ clientId: i2, scope: n2, audience: o2 }, t2);
  }
  static fromCacheEntry(e2) {
    const { scope: t2, audience: i2, client_id: o2 } = e2;
    return new C({ scope: t2, audience: i2, clientId: o2 });
  }
}
class z {
  set(e2, t2) {
    localStorage.setItem(e2, JSON.stringify(t2));
  }
  get(e2) {
    const t2 = window.localStorage.getItem(e2);
    if (t2) try {
      return JSON.parse(t2);
    } catch (e3) {
      return;
    }
  }
  remove(e2) {
    localStorage.removeItem(e2);
  }
  allKeys() {
    return Object.keys(window.localStorage).filter((e2) => e2.startsWith("@@auth0spajs@@"));
  }
}
class P {
  constructor() {
    this.enclosedCache = /* @__PURE__ */ function() {
      let e2 = {};
      return { set(t2, i2) {
        e2[t2] = i2;
      }, get(t2) {
        const i2 = e2[t2];
        if (i2) return i2;
      }, remove(t2) {
        delete e2[t2];
      }, allKeys: () => Object.keys(e2) };
    }();
  }
}
class x {
  constructor(e2, t2, i2) {
    this.cache = e2, this.keyManifest = t2, this.nowProvider = i2 || c;
  }
  async setIdToken(e2, t2, i2) {
    var o2;
    const n2 = this.getIdTokenCacheKey(e2);
    await this.cache.set(n2, { id_token: t2, decodedToken: i2 }), await (null === (o2 = this.keyManifest) || void 0 === o2 ? void 0 : o2.add(n2));
  }
  async getIdToken(e2) {
    const t2 = await this.cache.get(this.getIdTokenCacheKey(e2.clientId));
    if (!t2 && e2.scope && e2.audience) {
      const t3 = await this.get(e2);
      if (!t3) return;
      if (!t3.id_token || !t3.decodedToken) return;
      return { id_token: t3.id_token, decodedToken: t3.decodedToken };
    }
    if (t2) return { id_token: t2.id_token, decodedToken: t2.decodedToken };
  }
  async get(e2, t2 = 0) {
    var i2;
    let o2 = await this.cache.get(e2.toKey());
    if (!o2) {
      const t3 = await this.getCacheKeys();
      if (!t3) return;
      const i3 = this.matchExistingCacheKey(e2, t3);
      i3 && (o2 = await this.cache.get(i3));
    }
    if (!o2) return;
    const n2 = await this.nowProvider(), a2 = Math.floor(n2 / 1e3);
    return o2.expiresAt - t2 < a2 ? o2.body.refresh_token ? (o2.body = { refresh_token: o2.body.refresh_token }, await this.cache.set(e2.toKey(), o2), o2.body) : (await this.cache.remove(e2.toKey()), void await (null === (i2 = this.keyManifest) || void 0 === i2 ? void 0 : i2.remove(e2.toKey()))) : o2.body;
  }
  async set(e2) {
    var t2;
    const i2 = new C({ clientId: e2.client_id, scope: e2.scope, audience: e2.audience }), o2 = await this.wrapCacheEntry(e2);
    await this.cache.set(i2.toKey(), o2), await (null === (t2 = this.keyManifest) || void 0 === t2 ? void 0 : t2.add(i2.toKey()));
  }
  async clear(e2) {
    var t2;
    const i2 = await this.getCacheKeys();
    i2 && (await i2.filter((t3) => !e2 || t3.includes(e2)).reduce(async (e3, t3) => {
      await e3, await this.cache.remove(t3);
    }, Promise.resolve()), await (null === (t2 = this.keyManifest) || void 0 === t2 ? void 0 : t2.clear()));
  }
  async wrapCacheEntry(e2) {
    const t2 = await this.nowProvider();
    return { body: e2, expiresAt: Math.floor(t2 / 1e3) + e2.expires_in };
  }
  async getCacheKeys() {
    var e2;
    return this.keyManifest ? null === (e2 = await this.keyManifest.get()) || void 0 === e2 ? void 0 : e2.keys : this.cache.allKeys ? this.cache.allKeys() : void 0;
  }
  getIdTokenCacheKey(e2) {
    return new C({ clientId: e2 }, "@@auth0spajs@@", "@@user@@").toKey();
  }
  matchExistingCacheKey(e2, t2) {
    return t2.filter((t3) => {
      var i2;
      const o2 = C.fromKey(t3), n2 = new Set(o2.scope && o2.scope.split(" ")), a2 = (null === (i2 = e2.scope) || void 0 === i2 ? void 0 : i2.split(" ")) || [], r2 = o2.scope && a2.reduce((e3, t4) => e3 && n2.has(t4), true);
      return "@@auth0spajs@@" === o2.prefix && o2.clientId === e2.clientId && o2.audience === e2.audience && r2;
    })[0];
  }
}
class Z {
  constructor(e2, t2, i2) {
    this.storage = e2, this.clientId = t2, this.cookieDomain = i2, this.storageKey = `a0.spajs.txs.${this.clientId}`;
  }
  create(e2) {
    this.storage.save(this.storageKey, e2, { daysUntilExpire: 1, cookieDomain: this.cookieDomain });
  }
  get() {
    return this.storage.get(this.storageKey);
  }
  remove() {
    this.storage.remove(this.storageKey, { cookieDomain: this.cookieDomain });
  }
}
const K = (e2) => "number" == typeof e2, W = ["iss", "aud", "exp", "nbf", "iat", "jti", "azp", "nonce", "auth_time", "at_hash", "c_hash", "acr", "amr", "sub_jwk", "cnf", "sip_from_tag", "sip_date", "sip_callid", "sip_cseq_num", "sip_via_branch", "orig", "dest", "mky", "events", "toe", "txn", "rph", "sid", "vot", "vtm"], E = (e2) => {
  if (!e2.id_token) throw new Error("ID token is required but missing");
  const t2 = ((e3) => {
    const t3 = e3.split("."), [i3, o3, n3] = t3;
    if (3 !== t3.length || !i3 || !o3 || !n3) throw new Error("ID token could not be decoded");
    const a2 = JSON.parse(b(o3)), r2 = { __raw: e3 }, s2 = {};
    return Object.keys(a2).forEach((e4) => {
      r2[e4] = a2[e4], W.includes(e4) || (s2[e4] = a2[e4]);
    }), { encoded: { header: i3, payload: o3, signature: n3 }, header: JSON.parse(b(i3)), claims: r2, user: s2 };
  })(e2.id_token);
  if (!t2.claims.iss) throw new Error("Issuer (iss) claim must be a string present in the ID token");
  if (t2.claims.iss !== e2.iss) throw new Error(`Issuer (iss) claim mismatch in the ID token; expected "${e2.iss}", found "${t2.claims.iss}"`);
  if (!t2.user.sub) throw new Error("Subject (sub) claim must be a string present in the ID token");
  if ("RS256" !== t2.header.alg) throw new Error(`Signature algorithm of "${t2.header.alg}" is not supported. Expected the ID token to be signed with "RS256".`);
  if (!t2.claims.aud || "string" != typeof t2.claims.aud && !Array.isArray(t2.claims.aud)) throw new Error("Audience (aud) claim must be a string or array of strings present in the ID token");
  if (Array.isArray(t2.claims.aud)) {
    if (!t2.claims.aud.includes(e2.aud)) throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${e2.aud}" but was not one of "${t2.claims.aud.join(", ")}"`);
    if (t2.claims.aud.length > 1) {
      if (!t2.claims.azp) throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");
      if (t2.claims.azp !== e2.aud) throw new Error(`Authorized Party (azp) claim mismatch in the ID token; expected "${e2.aud}", found "${t2.claims.azp}"`);
    }
  } else if (t2.claims.aud !== e2.aud) throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${e2.aud}" but found "${t2.claims.aud}"`);
  if (e2.nonce) {
    if (!t2.claims.nonce) throw new Error("Nonce (nonce) claim must be a string present in the ID token");
    if (t2.claims.nonce !== e2.nonce) throw new Error(`Nonce (nonce) claim mismatch in the ID token; expected "${e2.nonce}", found "${t2.claims.nonce}"`);
  }
  if (e2.max_age && !K(t2.claims.auth_time)) throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");
  if (null == t2.claims.exp || !K(t2.claims.exp)) throw new Error("Expiration Time (exp) claim must be a number present in the ID token");
  if (!K(t2.claims.iat)) throw new Error("Issued At (iat) claim must be a number present in the ID token");
  const i2 = e2.leeway || 60, o2 = new Date(e2.now || Date.now()), n2 = /* @__PURE__ */ new Date(0);
  if (n2.setUTCSeconds(t2.claims.exp + i2), o2 > n2) throw new Error(`Expiration Time (exp) claim error in the ID token; current time (${o2}) is after expiration time (${n2})`);
  if (null != t2.claims.nbf && K(t2.claims.nbf)) {
    const e3 = /* @__PURE__ */ new Date(0);
    if (e3.setUTCSeconds(t2.claims.nbf - i2), o2 < e3) throw new Error(`Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${o2}) is before ${e3}`);
  }
  if (null != t2.claims.auth_time && K(t2.claims.auth_time)) {
    const n3 = /* @__PURE__ */ new Date(0);
    if (n3.setUTCSeconds(parseInt(t2.claims.auth_time) + e2.max_age + i2), o2 > n3) throw new Error(`Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (${o2}) is after last auth at ${n3}`);
  }
  if (e2.organization) {
    const i3 = e2.organization.trim();
    if (i3.startsWith("org_")) {
      const e3 = i3;
      if (!t2.claims.org_id) throw new Error("Organization ID (org_id) claim must be a string present in the ID token");
      if (e3 !== t2.claims.org_id) throw new Error(`Organization ID (org_id) claim mismatch in the ID token; expected "${e3}", found "${t2.claims.org_id}"`);
    } else {
      const e3 = i3.toLowerCase();
      if (!t2.claims.org_name) throw new Error("Organization Name (org_name) claim must be a string present in the ID token");
      if (e3 !== t2.claims.org_name) throw new Error(`Organization Name (org_name) claim mismatch in the ID token; expected "${e3}", found "${t2.claims.org_name}"`);
    }
  }
  return t2;
};
var R = o(function(e2, i2) {
  var o2 = t && t.__assign || function() {
    return o2 = Object.assign || function(e3) {
      for (var t2, i3 = 1, o3 = arguments.length; i3 < o3; i3++) for (var n3 in t2 = arguments[i3]) Object.prototype.hasOwnProperty.call(t2, n3) && (e3[n3] = t2[n3]);
      return e3;
    }, o2.apply(this, arguments);
  };
  function n2(e3, t2) {
    if (!t2) return "";
    var i3 = "; " + e3;
    return true === t2 ? i3 : i3 + "=" + t2;
  }
  function a2(e3, t2, i3) {
    return encodeURIComponent(e3).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/\(/g, "%28").replace(/\)/g, "%29") + "=" + encodeURIComponent(t2).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent) + function(e4) {
      if ("number" == typeof e4.expires) {
        var t3 = /* @__PURE__ */ new Date();
        t3.setMilliseconds(t3.getMilliseconds() + 864e5 * e4.expires), e4.expires = t3;
      }
      return n2("Expires", e4.expires ? e4.expires.toUTCString() : "") + n2("Domain", e4.domain) + n2("Path", e4.path) + n2("Secure", e4.secure) + n2("SameSite", e4.sameSite);
    }(i3);
  }
  function r2(e3) {
    for (var t2 = {}, i3 = e3 ? e3.split("; ") : [], o3 = /(%[\dA-F]{2})+/gi, n3 = 0; n3 < i3.length; n3++) {
      var a3 = i3[n3].split("="), r3 = a3.slice(1).join("=");
      '"' === r3.charAt(0) && (r3 = r3.slice(1, -1));
      try {
        t2[a3[0].replace(o3, decodeURIComponent)] = r3.replace(o3, decodeURIComponent);
      } catch (e4) {
      }
    }
    return t2;
  }
  function s2() {
    return r2(document.cookie);
  }
  function c2(e3, t2, i3) {
    document.cookie = a2(e3, t2, o2({ path: "/" }, i3));
  }
  i2.__esModule = true, i2.encode = a2, i2.parse = r2, i2.getAll = s2, i2.get = function(e3) {
    return s2()[e3];
  }, i2.set = c2, i2.remove = function(e3, t2) {
    c2(e3, "", o2(o2({}, t2), { expires: -1 }));
  };
});
i(R), R.encode, R.parse, R.getAll;
var U = R.get, L = R.set, D = R.remove;
const X$1 = { get(e2) {
  const t2 = U(e2);
  if (void 0 !== t2) return JSON.parse(t2);
}, save(e2, t2, i2) {
  let o2 = {};
  "https:" === window.location.protocol && (o2 = { secure: true, sameSite: "none" }), (null == i2 ? void 0 : i2.daysUntilExpire) && (o2.expires = i2.daysUntilExpire), (null == i2 ? void 0 : i2.cookieDomain) && (o2.domain = i2.cookieDomain), L(e2, JSON.stringify(t2), o2);
}, remove(e2, t2) {
  let i2 = {};
  (null == t2 ? void 0 : t2.cookieDomain) && (i2.domain = t2.cookieDomain), D(e2, i2);
} }, N = { get(e2) {
  const t2 = X$1.get(e2);
  return t2 || X$1.get(`_legacy_${e2}`);
}, save(e2, t2, i2) {
  let o2 = {};
  "https:" === window.location.protocol && (o2 = { secure: true }), (null == i2 ? void 0 : i2.daysUntilExpire) && (o2.expires = i2.daysUntilExpire), (null == i2 ? void 0 : i2.cookieDomain) && (o2.domain = i2.cookieDomain), L(`_legacy_${e2}`, JSON.stringify(t2), o2), X$1.save(e2, t2, i2);
}, remove(e2, t2) {
  let i2 = {};
  (null == t2 ? void 0 : t2.cookieDomain) && (i2.domain = t2.cookieDomain), D(e2, i2), X$1.remove(e2, t2), X$1.remove(`_legacy_${e2}`, t2);
} }, J = { get(e2) {
  if ("undefined" == typeof sessionStorage) return;
  const t2 = sessionStorage.getItem(e2);
  return null != t2 ? JSON.parse(t2) : void 0;
}, save(e2, t2) {
  sessionStorage.setItem(e2, JSON.stringify(t2));
}, remove(e2) {
  sessionStorage.removeItem(e2);
} };
function F(e2, t2, i2) {
  var o2 = void 0 === t2 ? null : t2, n2 = function(e3, t3) {
    var i3 = atob(e3);
    if (t3) {
      for (var o3 = new Uint8Array(i3.length), n3 = 0, a3 = i3.length; n3 < a3; ++n3) o3[n3] = i3.charCodeAt(n3);
      return String.fromCharCode.apply(null, new Uint16Array(o3.buffer));
    }
    return i3;
  }(e2, void 0 !== i2 && i2), a2 = n2.indexOf("\n", 10) + 1, r2 = n2.substring(a2) + (o2 ? "//# sourceMappingURL=" + o2 : ""), s2 = new Blob([r2], { type: "application/javascript" });
  return URL.createObjectURL(s2);
}
var H, Y, G, V, M = (H = "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9ImZ1bmN0aW9uIj09dHlwZW9mIFN1cHByZXNzZWRFcnJvciYmU3VwcHJlc3NlZEVycm9yO2NvbnN0IHM9ZT0+e3ZhcntjbGllbnRJZDp0fT1lLHI9ZnVuY3Rpb24oZSx0KXt2YXIgcj17fTtmb3IodmFyIHMgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxzKSYmdC5pbmRleE9mKHMpPDAmJihyW3NdPWVbc10pO2lmKG51bGwhPWUmJiJmdW5jdGlvbiI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxzLmxlbmd0aDtvKyspdC5pbmRleE9mKHNbb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLHNbb10pJiYocltzW29dXT1lW3Nbb11dKX1yZXR1cm4gcn0oZSxbImNsaWVudElkIl0pO3JldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKChlPT5PYmplY3Qua2V5cyhlKS5maWx0ZXIoKHQ9PnZvaWQgMCE9PWVbdF0pKS5yZWR1Y2UoKCh0LHIpPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse1tyXTplW3JdfSkpLHt9KSkoT2JqZWN0LmFzc2lnbih7Y2xpZW50X2lkOnR9LHIpKSkudG9TdHJpbmcoKX07bGV0IG89e307Y29uc3Qgbj0oZSx0KT0+YCR7ZX18JHt0fWA7YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGFzeW5jKHtkYXRhOnt0aW1lb3V0OmUsYXV0aDpyLGZldGNoVXJsOmksZmV0Y2hPcHRpb25zOmMsdXNlRm9ybURhdGE6YX0scG9ydHM6W3BdfSk9PntsZXQgZjtjb25zdHthdWRpZW5jZTp1LHNjb3BlOmx9PXJ8fHt9O3RyeXtjb25zdCByPWE/KGU9Pntjb25zdCB0PW5ldyBVUkxTZWFyY2hQYXJhbXMoZSkscj17fTtyZXR1cm4gdC5mb3JFYWNoKCgoZSx0KT0+e3JbdF09ZX0pKSxyfSkoYy5ib2R5KTpKU09OLnBhcnNlKGMuYm9keSk7aWYoIXIucmVmcmVzaF90b2tlbiYmInJlZnJlc2hfdG9rZW4iPT09ci5ncmFudF90eXBlKXtjb25zdCBlPSgoZSx0KT0+b1tuKGUsdCldKSh1LGwpO2lmKCFlKXRocm93IG5ldyB0KHUsbCk7Yy5ib2R5PWE/cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKTpKU09OLnN0cmluZ2lmeShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKX1sZXQgaCxnOyJmdW5jdGlvbiI9PXR5cGVvZiBBYm9ydENvbnRyb2xsZXImJihoPW5ldyBBYm9ydENvbnRyb2xsZXIsYy5zaWduYWw9aC5zaWduYWwpO3RyeXtnPWF3YWl0IFByb21pc2UucmFjZShbKGQ9ZSxuZXcgUHJvbWlzZSgoZT0+c2V0VGltZW91dChlLGQpKSkpLGZldGNoKGksT2JqZWN0LmFzc2lnbih7fSxjKSldKX1jYXRjaChlKXtyZXR1cm4gdm9pZCBwLnBvc3RNZXNzYWdlKHtlcnJvcjplLm1lc3NhZ2V9KX1pZighZylyZXR1cm4gaCYmaC5hYm9ydCgpLHZvaWQgcC5wb3N0TWVzc2FnZSh7ZXJyb3I6IlRpbWVvdXQgd2hlbiBleGVjdXRpbmcgJ2ZldGNoJyJ9KTtmPWF3YWl0IGcuanNvbigpLGYucmVmcmVzaF90b2tlbj8oKChlLHQscik9PntvW24odCxyKV09ZX0pKGYucmVmcmVzaF90b2tlbix1LGwpLGRlbGV0ZSBmLnJlZnJlc2hfdG9rZW4pOigoZSx0KT0+e2RlbGV0ZSBvW24oZSx0KV19KSh1LGwpLHAucG9zdE1lc3NhZ2Uoe29rOmcub2ssanNvbjpmfSl9Y2F0Y2goZSl7cC5wb3N0TWVzc2FnZSh7b2s6ITEsanNvbjp7ZXJyb3I6ZS5lcnJvcixlcnJvcl9kZXNjcmlwdGlvbjplLm1lc3NhZ2V9fSl9dmFyIGR9KSl9KCk7Cgo=", Y = null, G = false, function(e2) {
  return V = V || F(H, Y, G), new Worker(V, e2);
});
const A = {};
class B {
  constructor(e2, t2) {
    this.cache = e2, this.clientId = t2, this.manifestKey = this.createManifestKeyFrom(this.clientId);
  }
  async add(e2) {
    var t2;
    const i2 = new Set((null === (t2 = await this.cache.get(this.manifestKey)) || void 0 === t2 ? void 0 : t2.keys) || []);
    i2.add(e2), await this.cache.set(this.manifestKey, { keys: [...i2] });
  }
  async remove(e2) {
    const t2 = await this.cache.get(this.manifestKey);
    if (t2) {
      const i2 = new Set(t2.keys);
      return i2.delete(e2), i2.size > 0 ? await this.cache.set(this.manifestKey, { keys: [...i2] }) : await this.cache.remove(this.manifestKey);
    }
  }
  get() {
    return this.cache.get(this.manifestKey);
  }
  clear() {
    return this.cache.remove(this.manifestKey);
  }
  createManifestKeyFrom(e2) {
    return `@@auth0spajs@@::${e2}`;
  }
}
const $ = { memory: () => new P().enclosedCache, localstorage: () => new z() }, q = (e2) => $[e2], Q = (t2) => {
  const { openUrl: i2, onRedirect: o2 } = t2, n2 = e(t2, ["openUrl", "onRedirect"]);
  return Object.assign(Object.assign({}, n2), { openUrl: false === i2 || i2 ? i2 : o2 });
}, ee = new a();
class te {
  constructor(e2) {
    let t2, i2;
    if (this.userCache = new P().enclosedCache, this.defaultOptions = { authorizationParams: { scope: "openid profile email" }, useRefreshTokensFallback: false, useFormData: true }, this._releaseLockOnPageHide = async () => {
      await ee.releaseLock("auth0.lock.getTokenSilently"), window.removeEventListener("pagehide", this._releaseLockOnPageHide);
    }, this.options = Object.assign(Object.assign(Object.assign({}, this.defaultOptions), e2), { authorizationParams: Object.assign(Object.assign({}, this.defaultOptions.authorizationParams), e2.authorizationParams) }), "undefined" != typeof window && (() => {
      if (!w()) throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");
      if (void 0 === w().subtle) throw new Error("\n      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/main/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n    ");
    })(), e2.cache && e2.cacheLocation && console.warn("Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."), e2.cache) i2 = e2.cache;
    else {
      if (t2 = e2.cacheLocation || "memory", !q(t2)) throw new Error(`Invalid cache location "${t2}"`);
      i2 = q(t2)();
    }
    this.httpTimeoutMs = e2.httpTimeoutInSeconds ? 1e3 * e2.httpTimeoutInSeconds : 1e4, this.cookieStorage = false === e2.legacySameSiteCookie ? X$1 : N, this.orgHintCookieName = `auth0.${this.options.clientId}.organization_hint`, this.isAuthenticatedCookieName = ((e3) => `auth0.${e3}.is.authenticated`)(this.options.clientId), this.sessionCheckExpiryDays = e2.sessionCheckExpiryDays || 1;
    const o2 = e2.useCookiesForTransactions ? this.cookieStorage : J;
    var n2;
    this.scope = j("openid", this.options.authorizationParams.scope, this.options.useRefreshTokens ? "offline_access" : ""), this.transactionManager = new Z(o2, this.options.clientId, this.options.cookieDomain), this.nowProvider = this.options.nowProvider || c, this.cacheManager = new x(i2, i2.allKeys ? void 0 : new B(i2, this.options.clientId), this.nowProvider), this.domainUrl = (n2 = this.options.domain, /^https?:\/\//.test(n2) ? n2 : `https://${n2}`), this.tokenIssuer = ((e3, t3) => e3 ? e3.startsWith("https://") ? e3 : `https://${e3}/` : `${t3}/`)(this.options.issuer, this.domainUrl), "undefined" != typeof window && window.Worker && this.options.useRefreshTokens && "memory" === t2 && (this.options.workerUrl ? this.worker = new Worker(this.options.workerUrl) : this.worker = new M());
  }
  _url(e2) {
    const t2 = encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client || s)));
    return `${this.domainUrl}${e2}&auth0Client=${t2}`;
  }
  _authorizeUrl(e2) {
    return this._url(`/authorize?${v(e2)}`);
  }
  async _verifyIdToken(e2, t2, i2) {
    const o2 = await this.nowProvider();
    return E({ iss: this.tokenIssuer, aud: this.options.clientId, id_token: e2, nonce: t2, organization: i2, leeway: this.options.leeway, max_age: (n2 = this.options.authorizationParams.max_age, "string" != typeof n2 ? n2 : parseInt(n2, 10) || void 0), now: o2 });
    var n2;
  }
  _processOrgHint(e2) {
    e2 ? this.cookieStorage.save(this.orgHintCookieName, e2, { daysUntilExpire: this.sessionCheckExpiryDays, cookieDomain: this.options.cookieDomain }) : this.cookieStorage.remove(this.orgHintCookieName, { cookieDomain: this.options.cookieDomain });
  }
  async _prepareAuthorizeUrl(e2, t2, i2) {
    const o2 = k(y()), n2 = k(y()), a2 = y(), r2 = ((e3) => {
      const t3 = new Uint8Array(e3);
      return ((e4) => {
        const t4 = { "+": "-", "/": "_", "=": "" };
        return e4.replace(/[+/=]/g, (e5) => t4[e5]);
      })(window.btoa(String.fromCharCode(...Array.from(t3))));
    })(await (async (e3) => {
      const t3 = w().subtle.digest({ name: "SHA-256" }, new TextEncoder().encode(e3));
      return await t3;
    })(a2)), s2 = ((e3, t3, i3, o3, n3, a3, r3, s3) => Object.assign(Object.assign(Object.assign({ client_id: e3.clientId }, e3.authorizationParams), i3), { scope: j(t3, i3.scope), response_type: "code", response_mode: s3 || "query", state: o3, nonce: n3, redirect_uri: r3 || e3.authorizationParams.redirect_uri, code_challenge: a3, code_challenge_method: "S256" }))(this.options, this.scope, e2, o2, n2, r2, e2.redirect_uri || this.options.authorizationParams.redirect_uri || i2, null == t2 ? void 0 : t2.response_mode), c2 = this._authorizeUrl(s2);
    return { nonce: n2, code_verifier: a2, scope: s2.scope, audience: s2.audience || "default", redirect_uri: s2.redirect_uri, state: o2, url: c2 };
  }
  async loginWithPopup(e2, t2) {
    var i2;
    if (e2 = e2 || {}, !(t2 = t2 || {}).popup && (t2.popup = ((e3) => {
      const t3 = window.screenX + (window.innerWidth - 400) / 2, i3 = window.screenY + (window.innerHeight - 600) / 2;
      return window.open(e3, "auth0:authorize:popup", `left=${t3},top=${i3},width=400,height=600,resizable,scrollbars=yes,status=1`);
    })(""), !t2.popup)) throw new Error("Unable to open a popup for loginWithPopup - window.open returned `null`");
    const o2 = await this._prepareAuthorizeUrl(e2.authorizationParams || {}, { response_mode: "web_message" }, window.location.origin);
    t2.popup.location.href = o2.url;
    const n2 = await ((e3) => new Promise((t3, i3) => {
      let o3;
      const n3 = setInterval(() => {
        e3.popup && e3.popup.closed && (clearInterval(n3), clearTimeout(a3), window.removeEventListener("message", o3, false), i3(new p(e3.popup)));
      }, 1e3), a3 = setTimeout(() => {
        clearInterval(n3), i3(new h(e3.popup)), window.removeEventListener("message", o3, false);
      }, 1e3 * (e3.timeoutInSeconds || 60));
      o3 = function(r2) {
        if (r2.data && "authorization_response" === r2.data.type) {
          if (clearTimeout(a3), clearInterval(n3), window.removeEventListener("message", o3, false), e3.popup.close(), r2.data.response.error) return i3(d.fromPayload(r2.data.response));
          t3(r2.data.response);
        }
      }, window.addEventListener("message", o3);
    }))(Object.assign(Object.assign({}, t2), { timeoutInSeconds: t2.timeoutInSeconds || this.options.authorizeTimeoutInSeconds || 60 }));
    if (o2.state !== n2.state) throw new d("state_mismatch", "Invalid state");
    const a2 = (null === (i2 = e2.authorizationParams) || void 0 === i2 ? void 0 : i2.organization) || this.options.authorizationParams.organization;
    await this._requestToken({ audience: o2.audience, scope: o2.scope, code_verifier: o2.code_verifier, grant_type: "authorization_code", code: n2.code, redirect_uri: o2.redirect_uri }, { nonceIn: o2.nonce, organization: a2 });
  }
  async getUser() {
    var e2;
    const t2 = await this._getIdTokenFromCache();
    return null === (e2 = null == t2 ? void 0 : t2.decodedToken) || void 0 === e2 ? void 0 : e2.user;
  }
  async getIdTokenClaims() {
    var e2;
    const t2 = await this._getIdTokenFromCache();
    return null === (e2 = null == t2 ? void 0 : t2.decodedToken) || void 0 === e2 ? void 0 : e2.claims;
  }
  async loginWithRedirect(t2 = {}) {
    var i2;
    const o2 = Q(t2), { openUrl: n2, fragment: a2, appState: r2 } = o2, s2 = e(o2, ["openUrl", "fragment", "appState"]), c2 = (null === (i2 = s2.authorizationParams) || void 0 === i2 ? void 0 : i2.organization) || this.options.authorizationParams.organization, d2 = await this._prepareAuthorizeUrl(s2.authorizationParams || {}), { url: u2 } = d2, l2 = e(d2, ["url"]);
    this.transactionManager.create(Object.assign(Object.assign(Object.assign({}, l2), { appState: r2 }), c2 && { organization: c2 }));
    const h2 = a2 ? `${u2}#${a2}` : u2;
    n2 ? await n2(h2) : window.location.assign(h2);
  }
  async handleRedirectCallback(e2 = window.location.href) {
    const t2 = e2.split("?").slice(1);
    if (0 === t2.length) throw new Error("There are no query params available for parsing.");
    const { state: i2, code: o2, error: n2, error_description: a2 } = ((e3) => {
      e3.indexOf("#") > -1 && (e3 = e3.substring(0, e3.indexOf("#")));
      const t3 = new URLSearchParams(e3);
      return { state: t3.get("state"), code: t3.get("code") || void 0, error: t3.get("error") || void 0, error_description: t3.get("error_description") || void 0 };
    })(t2.join("")), r2 = this.transactionManager.get();
    if (!r2) throw new d("missing_transaction", "Invalid state");
    if (this.transactionManager.remove(), n2) throw new u(n2, a2 || n2, i2, r2.appState);
    if (!r2.code_verifier || r2.state && r2.state !== i2) throw new d("state_mismatch", "Invalid state");
    const s2 = r2.organization, c2 = r2.nonce, l2 = r2.redirect_uri;
    return await this._requestToken(Object.assign({ audience: r2.audience, scope: r2.scope, code_verifier: r2.code_verifier, grant_type: "authorization_code", code: o2 }, l2 ? { redirect_uri: l2 } : {}), { nonceIn: c2, organization: s2 }), { appState: r2.appState };
  }
  async checkSession(e2) {
    if (!this.cookieStorage.get(this.isAuthenticatedCookieName)) {
      if (!this.cookieStorage.get("auth0.is.authenticated")) return;
      this.cookieStorage.save(this.isAuthenticatedCookieName, true, { daysUntilExpire: this.sessionCheckExpiryDays, cookieDomain: this.options.cookieDomain }), this.cookieStorage.remove("auth0.is.authenticated");
    }
    try {
      await this.getTokenSilently(e2);
    } catch (e3) {
    }
  }
  async getTokenSilently(e2 = {}) {
    var t2;
    const i2 = Object.assign(Object.assign({ cacheMode: "on" }, e2), { authorizationParams: Object.assign(Object.assign(Object.assign({}, this.options.authorizationParams), e2.authorizationParams), { scope: j(this.scope, null === (t2 = e2.authorizationParams) || void 0 === t2 ? void 0 : t2.scope) }) }), o2 = await ((e3, t3) => {
      let i3 = A[t3];
      return i3 || (i3 = e3().finally(() => {
        delete A[t3], i3 = null;
      }), A[t3] = i3), i3;
    })(() => this._getTokenSilently(i2), `${this.options.clientId}::${i2.authorizationParams.audience}::${i2.authorizationParams.scope}`);
    return e2.detailedResponse ? o2 : null == o2 ? void 0 : o2.access_token;
  }
  async _getTokenSilently(t2) {
    const { cacheMode: i2 } = t2, o2 = e(t2, ["cacheMode"]);
    if ("off" !== i2) {
      const e2 = await this._getEntryFromCache({ scope: o2.authorizationParams.scope, audience: o2.authorizationParams.audience || "default", clientId: this.options.clientId });
      if (e2) return e2;
    }
    if ("cache-only" !== i2) {
      if (!await (async (e2, t3 = 3) => {
        for (let i3 = 0; i3 < t3; i3++) if (await e2()) return true;
        return false;
      })(() => ee.acquireLock("auth0.lock.getTokenSilently", 5e3), 10)) throw new l();
      try {
        if (window.addEventListener("pagehide", this._releaseLockOnPageHide), "off" !== i2) {
          const e3 = await this._getEntryFromCache({ scope: o2.authorizationParams.scope, audience: o2.authorizationParams.audience || "default", clientId: this.options.clientId });
          if (e3) return e3;
        }
        const e2 = this.options.useRefreshTokens ? await this._getTokenUsingRefreshToken(o2) : await this._getTokenFromIFrame(o2), { id_token: t3, access_token: n2, oauthTokenScope: a2, expires_in: r2 } = e2;
        return Object.assign(Object.assign({ id_token: t3, access_token: n2 }, a2 ? { scope: a2 } : null), { expires_in: r2 });
      } finally {
        await ee.releaseLock("auth0.lock.getTokenSilently"), window.removeEventListener("pagehide", this._releaseLockOnPageHide);
      }
    }
  }
  async getTokenWithPopup(e2 = {}, t2 = {}) {
    var i2;
    const o2 = Object.assign(Object.assign({}, e2), { authorizationParams: Object.assign(Object.assign(Object.assign({}, this.options.authorizationParams), e2.authorizationParams), { scope: j(this.scope, null === (i2 = e2.authorizationParams) || void 0 === i2 ? void 0 : i2.scope) }) });
    t2 = Object.assign(Object.assign({}, r), t2), await this.loginWithPopup(o2, t2);
    return (await this.cacheManager.get(new C({ scope: o2.authorizationParams.scope, audience: o2.authorizationParams.audience || "default", clientId: this.options.clientId }))).access_token;
  }
  async isAuthenticated() {
    return !!await this.getUser();
  }
  _buildLogoutUrl(t2) {
    null !== t2.clientId ? t2.clientId = t2.clientId || this.options.clientId : delete t2.clientId;
    const i2 = t2.logoutParams || {}, { federated: o2 } = i2, n2 = e(i2, ["federated"]), a2 = o2 ? "&federated" : "";
    return this._url(`/v2/logout?${v(Object.assign({ clientId: t2.clientId }, n2))}`) + a2;
  }
  async logout(t2 = {}) {
    const i2 = Q(t2), { openUrl: o2 } = i2, n2 = e(i2, ["openUrl"]);
    null === t2.clientId ? await this.cacheManager.clear() : await this.cacheManager.clear(t2.clientId || this.options.clientId), this.cookieStorage.remove(this.orgHintCookieName, { cookieDomain: this.options.cookieDomain }), this.cookieStorage.remove(this.isAuthenticatedCookieName, { cookieDomain: this.options.cookieDomain }), this.userCache.remove("@@user@@");
    const a2 = this._buildLogoutUrl(n2);
    o2 ? await o2(a2) : false !== o2 && window.location.assign(a2);
  }
  async _getTokenFromIFrame(e2) {
    const t2 = Object.assign(Object.assign({}, e2.authorizationParams), { prompt: "none" }), i2 = this.cookieStorage.get(this.orgHintCookieName);
    i2 && !t2.organization && (t2.organization = i2);
    const { url: o2, state: n2, nonce: a2, code_verifier: r2, redirect_uri: s2, scope: c2, audience: u2 } = await this._prepareAuthorizeUrl(t2, { response_mode: "web_message" }, window.location.origin);
    try {
      if (window.crossOriginIsolated) throw new d("login_required", "The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.");
      const i3 = e2.timeoutInSeconds || this.options.authorizeTimeoutInSeconds, h2 = await ((e3, t3, i4 = 60) => new Promise((o3, n3) => {
        const a3 = window.document.createElement("iframe");
        a3.setAttribute("width", "0"), a3.setAttribute("height", "0"), a3.style.display = "none";
        const r3 = () => {
          window.document.body.contains(a3) && (window.document.body.removeChild(a3), window.removeEventListener("message", s3, false));
        };
        let s3;
        const c3 = setTimeout(() => {
          n3(new l()), r3();
        }, 1e3 * i4);
        s3 = function(e4) {
          if (e4.origin != t3) return;
          if (!e4.data || "authorization_response" !== e4.data.type) return;
          const i5 = e4.source;
          i5 && i5.close(), e4.data.response.error ? n3(d.fromPayload(e4.data.response)) : o3(e4.data.response), clearTimeout(c3), window.removeEventListener("message", s3, false), setTimeout(r3, 2e3);
        }, window.addEventListener("message", s3, false), window.document.body.appendChild(a3), a3.setAttribute("src", e3);
      }))(o2, this.domainUrl, i3);
      if (n2 !== h2.state) throw new d("state_mismatch", "Invalid state");
      const p2 = await this._requestToken(Object.assign(Object.assign({}, e2.authorizationParams), { code_verifier: r2, code: h2.code, grant_type: "authorization_code", redirect_uri: s2, timeout: e2.authorizationParams.timeout || this.httpTimeoutMs }), { nonceIn: a2, organization: t2.organization });
      return Object.assign(Object.assign({}, p2), { scope: c2, oauthTokenScope: p2.scope, audience: u2 });
    } catch (e3) {
      throw "login_required" === e3.error && this.logout({ openUrl: false }), e3;
    }
  }
  async _getTokenUsingRefreshToken(e2) {
    const t2 = await this.cacheManager.get(new C({ scope: e2.authorizationParams.scope, audience: e2.authorizationParams.audience || "default", clientId: this.options.clientId }));
    if (!(t2 && t2.refresh_token || this.worker)) {
      if (this.options.useRefreshTokensFallback) return await this._getTokenFromIFrame(e2);
      throw new f(e2.authorizationParams.audience || "default", e2.authorizationParams.scope);
    }
    const i2 = e2.authorizationParams.redirect_uri || this.options.authorizationParams.redirect_uri || window.location.origin, o2 = "number" == typeof e2.timeoutInSeconds ? 1e3 * e2.timeoutInSeconds : null;
    try {
      const n2 = await this._requestToken(Object.assign(Object.assign(Object.assign({}, e2.authorizationParams), { grant_type: "refresh_token", refresh_token: t2 && t2.refresh_token, redirect_uri: i2 }), o2 && { timeout: o2 }));
      return Object.assign(Object.assign({}, n2), { scope: e2.authorizationParams.scope, oauthTokenScope: n2.scope, audience: e2.authorizationParams.audience || "default" });
    } catch (t3) {
      if ((t3.message.indexOf("Missing Refresh Token") > -1 || t3.message && t3.message.indexOf("invalid refresh token") > -1) && this.options.useRefreshTokensFallback) return await this._getTokenFromIFrame(e2);
      throw t3;
    }
  }
  async _saveEntryInCache(t2) {
    const { id_token: i2, decodedToken: o2 } = t2, n2 = e(t2, ["id_token", "decodedToken"]);
    this.userCache.set("@@user@@", { id_token: i2, decodedToken: o2 }), await this.cacheManager.setIdToken(this.options.clientId, t2.id_token, t2.decodedToken), await this.cacheManager.set(n2);
  }
  async _getIdTokenFromCache() {
    const e2 = this.options.authorizationParams.audience || "default", t2 = await this.cacheManager.getIdToken(new C({ clientId: this.options.clientId, audience: e2, scope: this.scope })), i2 = this.userCache.get("@@user@@");
    return t2 && t2.id_token === (null == i2 ? void 0 : i2.id_token) ? i2 : (this.userCache.set("@@user@@", t2), t2);
  }
  async _getEntryFromCache({ scope: e2, audience: t2, clientId: i2 }) {
    const o2 = await this.cacheManager.get(new C({ scope: e2, audience: t2, clientId: i2 }), 60);
    if (o2 && o2.access_token) {
      const { access_token: e3, oauthTokenScope: t3, expires_in: i3 } = o2, n2 = await this._getIdTokenFromCache();
      return n2 && Object.assign(Object.assign({ id_token: n2.id_token, access_token: e3 }, t3 ? { scope: t3 } : null), { expires_in: i3 });
    }
  }
  async _requestToken(e2, t2) {
    const { nonceIn: i2, organization: o2 } = t2 || {}, n2 = await T(Object.assign({ baseUrl: this.domainUrl, client_id: this.options.clientId, auth0Client: this.options.auth0Client, useFormData: this.options.useFormData, timeout: this.httpTimeoutMs }, e2), this.worker), a2 = await this._verifyIdToken(n2.id_token, i2, o2);
    return await this._saveEntryInCache(Object.assign(Object.assign(Object.assign(Object.assign({}, n2), { decodedToken: a2, scope: e2.scope, audience: e2.audience || "default" }), n2.scope ? { oauthTokenScope: n2.scope } : null), { client_id: this.options.clientId })), this.cookieStorage.save(this.isAuthenticatedCookieName, true, { daysUntilExpire: this.sessionCheckExpiryDays, cookieDomain: this.options.cookieDomain }), this._processOrgHint(o2 || a2.claims.org_id), Object.assign(Object.assign({}, n2), { decodedToken: a2 });
  }
}
var initialAuthState = {
  isAuthenticated: false,
  isLoading: true
};
var stub = function() {
  throw new Error("You forgot to wrap your component in <Auth0Provider>.");
};
var initialContext = __assign(__assign({}, initialAuthState), { buildAuthorizeUrl: stub, buildLogoutUrl: stub, getAccessTokenSilently: stub, getAccessTokenWithPopup: stub, getIdTokenClaims: stub, loginWithRedirect: stub, loginWithPopup: stub, logout: stub, handleRedirectCallback: stub });
var Auth0Context = reactExports.createContext(initialContext);
var OAuthError = (
  /** @class */
  function(_super) {
    __extends(OAuthError2, _super);
    function OAuthError2(error, error_description) {
      var _this = _super.call(this, error_description || error) || this;
      _this.error = error;
      _this.error_description = error_description;
      Object.setPrototypeOf(_this, OAuthError2.prototype);
      return _this;
    }
    return OAuthError2;
  }(Error)
);
var CODE_RE = /[?&]code=[^&]+/;
var STATE_RE = /[?&]state=[^&]+/;
var ERROR_RE = /[?&]error=[^&]+/;
var hasAuthParams = function(searchParams) {
  if (searchParams === void 0) {
    searchParams = window.location.search;
  }
  return (CODE_RE.test(searchParams) || ERROR_RE.test(searchParams)) && STATE_RE.test(searchParams);
};
var normalizeErrorFn = function(fallbackMessage) {
  return function(error) {
    if (error instanceof Error) {
      return error;
    }
    if (error !== null && typeof error === "object" && "error" in error && typeof error.error === "string") {
      if ("error_description" in error && typeof error.error_description === "string") {
        return new OAuthError(error.error, error.error_description);
      }
      return new OAuthError(error.error);
    }
    return new Error(fallbackMessage);
  };
};
var loginError = normalizeErrorFn("Login failed");
var tokenError = normalizeErrorFn("Get access token failed");
var deprecateRedirectUri = function(options) {
  var _a;
  if (options === null || options === void 0 ? void 0 : options.redirectUri) {
    console.warn("Using `redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `redirectUri` will be no longer supported in a future version");
    options.authorizationParams = options.authorizationParams || {};
    options.authorizationParams.redirect_uri = options.redirectUri;
    delete options.redirectUri;
  }
  if ((_a = options === null || options === void 0 ? void 0 : options.authorizationParams) === null || _a === void 0 ? void 0 : _a.redirectUri) {
    console.warn("Using `authorizationParams.redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `authorizationParams.redirectUri` will be removed in a future version");
    options.authorizationParams.redirect_uri = options.authorizationParams.redirectUri;
    delete options.authorizationParams.redirectUri;
  }
};
var reducer = function(state, action) {
  switch (action.type) {
    case "LOGIN_POPUP_STARTED":
      return __assign(__assign({}, state), { isLoading: true });
    case "LOGIN_POPUP_COMPLETE":
    case "INITIALISED":
      return __assign(__assign({}, state), { isAuthenticated: !!action.user, user: action.user, isLoading: false, error: void 0 });
    case "HANDLE_REDIRECT_COMPLETE":
    case "GET_ACCESS_TOKEN_COMPLETE":
      if (state.user === action.user) {
        return state;
      }
      return __assign(__assign({}, state), { isAuthenticated: !!action.user, user: action.user });
    case "LOGOUT":
      return __assign(__assign({}, state), { isAuthenticated: false, user: void 0 });
    case "ERROR":
      return __assign(__assign({}, state), { isLoading: false, error: action.error });
  }
};
var toAuth0ClientOptions = function(opts) {
  deprecateRedirectUri(opts);
  return __assign(__assign({}, opts), { auth0Client: {
    name: "auth0-react",
    version: "2.3.0"
  } });
};
var defaultOnRedirectCallback = function(appState) {
  window.history.replaceState({}, document.title, (appState === null || appState === void 0 ? void 0 : appState.returnTo) || window.location.pathname);
};
var Auth0Provider = function(opts) {
  var children = opts.children, skipRedirectCallback = opts.skipRedirectCallback, _a = opts.onRedirectCallback, onRedirectCallback = _a === void 0 ? defaultOnRedirectCallback : _a, _b = opts.context, context = _b === void 0 ? Auth0Context : _b, clientOpts = __rest(opts, ["children", "skipRedirectCallback", "onRedirectCallback", "context"]);
  var client = reactExports.useState(function() {
    return new te(toAuth0ClientOptions(clientOpts));
  })[0];
  var _c = reactExports.useReducer(reducer, initialAuthState), state = _c[0], dispatch = _c[1];
  var didInitialise = reactExports.useRef(false);
  var handleError = reactExports.useCallback(function(error) {
    dispatch({ type: "ERROR", error });
    return error;
  }, []);
  reactExports.useEffect(function() {
    if (didInitialise.current) {
      return;
    }
    didInitialise.current = true;
    (function() {
      return __awaiter(void 0, void 0, void 0, function() {
        var user, appState, error_1;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              _a2.trys.push([0, 7, , 8]);
              user = void 0;
              if (!(hasAuthParams() && !skipRedirectCallback)) return [3, 3];
              return [4, client.handleRedirectCallback()];
            case 1:
              appState = _a2.sent().appState;
              return [4, client.getUser()];
            case 2:
              user = _a2.sent();
              onRedirectCallback(appState, user);
              return [3, 6];
            case 3:
              return [4, client.checkSession()];
            case 4:
              _a2.sent();
              return [4, client.getUser()];
            case 5:
              user = _a2.sent();
              _a2.label = 6;
            case 6:
              dispatch({ type: "INITIALISED", user });
              return [3, 8];
            case 7:
              error_1 = _a2.sent();
              handleError(loginError(error_1));
              return [3, 8];
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    })();
  }, [client, onRedirectCallback, skipRedirectCallback, handleError]);
  var loginWithRedirect = reactExports.useCallback(function(opts2) {
    deprecateRedirectUri(opts2);
    return client.loginWithRedirect(opts2);
  }, [client]);
  var loginWithPopup = reactExports.useCallback(function(options, config) {
    return __awaiter(void 0, void 0, void 0, function() {
      var error_2, user;
      return __generator(this, function(_a2) {
        switch (_a2.label) {
          case 0:
            dispatch({ type: "LOGIN_POPUP_STARTED" });
            _a2.label = 1;
          case 1:
            _a2.trys.push([1, 3, , 4]);
            return [4, client.loginWithPopup(options, config)];
          case 2:
            _a2.sent();
            return [3, 4];
          case 3:
            error_2 = _a2.sent();
            handleError(loginError(error_2));
            return [
              2
              /*return*/
            ];
          case 4:
            return [4, client.getUser()];
          case 5:
            user = _a2.sent();
            dispatch({ type: "LOGIN_POPUP_COMPLETE", user });
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, [client]);
  var logout = reactExports.useCallback(function(opts2) {
    if (opts2 === void 0) {
      opts2 = {};
    }
    return __awaiter(void 0, void 0, void 0, function() {
      return __generator(this, function(_a2) {
        switch (_a2.label) {
          case 0:
            return [4, client.logout(opts2)];
          case 1:
            _a2.sent();
            if (opts2.openUrl || opts2.openUrl === false) {
              dispatch({ type: "LOGOUT" });
            }
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, [client]);
  var getAccessTokenSilently = reactExports.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function(opts2) {
      return __awaiter(void 0, void 0, void 0, function() {
        var token, error_3, _a2;
        var _b2;
        return __generator(this, function(_c2) {
          switch (_c2.label) {
            case 0:
              _c2.trys.push([0, 2, 3, 5]);
              return [4, client.getTokenSilently(opts2)];
            case 1:
              token = _c2.sent();
              return [3, 5];
            case 2:
              error_3 = _c2.sent();
              throw tokenError(error_3);
            case 3:
              _a2 = dispatch;
              _b2 = {
                type: "GET_ACCESS_TOKEN_COMPLETE"
              };
              return [4, client.getUser()];
            case 4:
              _a2.apply(void 0, [(_b2.user = _c2.sent(), _b2)]);
              return [
                7
                /*endfinally*/
              ];
            case 5:
              return [2, token];
          }
        });
      });
    },
    [client]
  );
  var getAccessTokenWithPopup = reactExports.useCallback(function(opts2, config) {
    return __awaiter(void 0, void 0, void 0, function() {
      var token, error_4, _a2;
      var _b2;
      return __generator(this, function(_c2) {
        switch (_c2.label) {
          case 0:
            _c2.trys.push([0, 2, 3, 5]);
            return [4, client.getTokenWithPopup(opts2, config)];
          case 1:
            token = _c2.sent();
            return [3, 5];
          case 2:
            error_4 = _c2.sent();
            throw tokenError(error_4);
          case 3:
            _a2 = dispatch;
            _b2 = {
              type: "GET_ACCESS_TOKEN_COMPLETE"
            };
            return [4, client.getUser()];
          case 4:
            _a2.apply(void 0, [(_b2.user = _c2.sent(), _b2)]);
            return [
              7
              /*endfinally*/
            ];
          case 5:
            return [2, token];
        }
      });
    });
  }, [client]);
  var getIdTokenClaims = reactExports.useCallback(function() {
    return client.getIdTokenClaims();
  }, [client]);
  var handleRedirectCallback = reactExports.useCallback(function(url) {
    return __awaiter(void 0, void 0, void 0, function() {
      var error_5, _a2;
      var _b2;
      return __generator(this, function(_c2) {
        switch (_c2.label) {
          case 0:
            _c2.trys.push([0, 2, 3, 5]);
            return [4, client.handleRedirectCallback(url)];
          case 1:
            return [2, _c2.sent()];
          case 2:
            error_5 = _c2.sent();
            throw tokenError(error_5);
          case 3:
            _a2 = dispatch;
            _b2 = {
              type: "HANDLE_REDIRECT_COMPLETE"
            };
            return [4, client.getUser()];
          case 4:
            _a2.apply(void 0, [(_b2.user = _c2.sent(), _b2)]);
            return [
              7
              /*endfinally*/
            ];
          case 5:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, [client]);
  var contextValue = reactExports.useMemo(function() {
    return __assign(__assign({}, state), { getAccessTokenSilently, getAccessTokenWithPopup, getIdTokenClaims, loginWithRedirect, loginWithPopup, logout, handleRedirectCallback });
  }, [
    state,
    getAccessTokenSilently,
    getAccessTokenWithPopup,
    getIdTokenClaims,
    loginWithRedirect,
    loginWithPopup,
    logout,
    handleRedirectCallback
  ]);
  return React.createElement(context.Provider, { value: contextValue }, children);
};
var useAuth0 = function(context) {
  if (context === void 0) {
    context = Auth0Context;
  }
  return reactExports.useContext(context);
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim();
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      ...rest
    }, ref) => {
      return reactExports.createElement(
        "svg",
        {
          ref,
          ...defaultAttributes,
          width: size,
          height: size,
          stroke: color,
          strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
          className: ["lucide", `lucide-${toKebabCase(iconName)}`, className].join(" "),
          ...rest
        },
        [
          ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
          ...Array.isArray(children) ? children : [children]
        ]
      );
    }
  );
  Component.displayName = `${iconName}`;
  return Component;
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ArrowLeft = createLucideIcon("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Calendar = createLucideIcon("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Car = createLucideIcon("Car", [
  [
    "path",
    {
      d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
      key: "5owen"
    }
  ],
  ["circle", { cx: "7", cy: "17", r: "2", key: "u2ysq9" }],
  ["path", { d: "M9 17h6", key: "r8uit2" }],
  ["circle", { cx: "17", cy: "17", r: "2", key: "axvx0g" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Check = createLucideIcon("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronLeft = createLucideIcon("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronRight = createLucideIcon("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CreditCard = createLucideIcon("CreditCard", [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dumbbell = createLucideIcon("Dumbbell", [
  ["path", { d: "m6.5 6.5 11 11", key: "f7oqzb" }],
  ["path", { d: "m21 21-1-1", key: "cpc6if" }],
  ["path", { d: "m3 3 1 1", key: "d3rpuf" }],
  ["path", { d: "m18 22 4-4", key: "1e32o6" }],
  ["path", { d: "m2 6 4-4", key: "189tqz" }],
  ["path", { d: "m3 10 7-7", key: "1bxui2" }],
  ["path", { d: "m14 21 7-7", key: "16x78n" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eye = createLucideIcon("Eye", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Facebook = createLucideIcon("Facebook", [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Filter = createLucideIcon("Filter", [
  ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hotel = createLucideIcon("Hotel", [
  [
    "path",
    {
      d: "M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z",
      key: "p9z69c"
    }
  ],
  ["path", { d: "m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16", key: "1bvcvh" }],
  ["path", { d: "M8 7h.01", key: "1vti4s" }],
  ["path", { d: "M16 7h.01", key: "1kdx03" }],
  ["path", { d: "M12 7h.01", key: "1ivr5q" }],
  ["path", { d: "M12 11h.01", key: "z322tv" }],
  ["path", { d: "M16 11h.01", key: "xkw8gn" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M10 22v-6.5m4 0V22", key: "16gs4s" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IndianRupee = createLucideIcon("IndianRupee", [
  ["path", { d: "M6 3h12", key: "ggurg9" }],
  ["path", { d: "M6 8h12", key: "6g4wlu" }],
  ["path", { d: "m6 13 8.5 8", key: "u1kupk" }],
  ["path", { d: "M6 13h3", key: "wdp6ag" }],
  ["path", { d: "M9 13c6.667 0 6.667-10 0-10", key: "1nkvk2" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Instagram = createLucideIcon("Instagram", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Linkedin = createLucideIcon("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LogOut = createLucideIcon("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mail = createLucideIcon("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MapPin = createLucideIcon("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MessageCircle = createLucideIcon("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Phone = createLucideIcon("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Plus = createLucideIcon("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Search = createLucideIcon("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Settings = createLucideIcon("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Space = createLucideIcon("Space", [
  ["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1", key: "lt2kga" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SquarePen = createLucideIcon("SquarePen", [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z", key: "1lpok0" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Star = createLucideIcon("Star", [
  [
    "polygon",
    {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Trash2 = createLucideIcon("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Twitter = createLucideIcon("Twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const User = createLucideIcon("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Users = createLucideIcon("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Utensils = createLucideIcon("Utensils", [
  ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
  ["path", { d: "M7 2v20", key: "1473qp" }],
  ["path", { d: "M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "1ogz0v" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Waves = createLucideIcon("Waves", [
  [
    "path",
    {
      d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "knzxuh"
    }
  ],
  [
    "path",
    {
      d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "2jd2cc"
    }
  ],
  [
    "path",
    {
      d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "rd2r6e"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wifi = createLucideIcon("Wifi", [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X = createLucideIcon("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
const Header = () => {
  var _a;
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-white shadow-lg sticky top-0 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center h-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hotel, { className: "h-8 w-8 text-blue-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold text-gray-900", children: "MNGH" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex space-x-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-gray-700 hover:text-blue-600 transition-colors", children: "Home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/hotels", className: "text-gray-700 hover:text-blue-600 transition-colors", children: "Hotels" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "text-gray-700 hover:text-blue-600 transition-colors", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "text-gray-700 hover:text-blue-600 transition-colors", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-4", children: isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4", children: [
      ((_a = user == null ? void 0 : user["https://hotelhub.com/roles"]) == null ? void 0 : _a.includes("admin")) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/admin",
          className: "flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Admin" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: (user == null ? void 0 : user.picture) || "/default-avatar.png",
            alt: (user == null ? void 0 : user.name) || "User",
            className: "h-8 w-8 rounded-full"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: user == null ? void 0 : user.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => logout({ logoutParams: { returnTo: window.location.origin } }),
          className: "flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Logout" })
          ]
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => loginWithRedirect(),
        className: "flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Login" })
        ]
      }
    ) })
  ] }) }) });
};
const Footer = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-gray-900 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Hotel, { className: "h-8 w-8 text-blue-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold", children: "MNGH" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300", children: "Your premier destination for luxury accommodations in Nainital. Discover exceptional hotels and create unforgettable memories." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "text-gray-300 hover:text-white transition-colors", children: "Home" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/hotels", className: "text-gray-300 hover:text-white transition-colors", children: "Hotels" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/about", className: "text-gray-300 hover:text-white transition-colors", children: "About Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/contact", className: "text-gray-300 hover:text-white transition-colors", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-gray-300 hover:text-white transition-colors", children: "Hotel Booking" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-gray-300 hover:text-white transition-colors", children: "Event Planning" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-gray-300 hover:text-white transition-colors", children: "Concierge Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-gray-300 hover:text-white transition-colors", children: "Travel Packages" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Contact Info" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-blue-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300", children: "+1 (555) 123-4567" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-blue-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300", children: "info@hotelhub.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-blue-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300", children: "123 Business Ave, Suite 100" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-gray-800 mt-8 pt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400", children: "© 2025 Maa Nanda Group of Hotels. All rights reserved." }) })
  ] }) });
};
const hotels = [
  {
    id: "1",
    title: "Naini RR Residency",
    description: "Naini R.R. Residency is a budget-friendly hotel situated in the Mallital‑Sherwani area of Nainital, just behind the Employment Office and a short 10-minute walk from Naini Lake . It sits near the Cheena Baba Mandir, making it especially convenient if you’re visiting the temple and exploring the lakefront, For travelers seeking easy access to Naini Lake and Cheena Baba Mandir, with free parking and a central location, Naini R.R. Residency offers good value.",
    shortDescription: "Naini RR Residency with world-class amenities",
    location: "Cheena Baba, Nainital",
    rating: 4.8,
    priceRange: { min: 1500, max: 3500 },
    amenities: ["Free WiFi", "Restaurant", "Room Service"],
    images: [
      "https://gos3.ibcdn.com/4fb501a4c7e911edbb3a0a58a9feac02.jpg",
      "https://r1imghtlak.mmtcdn.com/080fb9464a4f11ee9ee50a58a9feac02.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/698420943.jpg?hp=1&k=693910f9fcb6e75fdc3812ecc5ce8fb4e7f746c2b7221362229b53291bceffbe&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/698420943.jpg?hp=1&k=693910f9fcb6e75fdc3812ecc5ce8fb4e7f746c2b7221362229b53291bceffbe&o="
    ],
    contactDetails: {
      phone: "(+91) 8476023501",
      email: "maanandahotels@gmail.com",
      address: "Cheena Baba, Mallital, Nainital"
    },
    tariffPlans: [
      {
        id: "1",
        name: "2 Bedroom",
        price: 2500,
        period: "night",
        features: ["Free WiFi", "Breakfast Included", "Room Service"]
      },
      {
        id: "2",
        name: "4 Bedroom",
        price: 3500,
        period: "night",
        features: ["Free WiFi", "Room Service", "All Meals Included"],
        popular: true
      }
    ],
    featured: true
  },
  {
    id: "2",
    title: "Jagati Niwas",
    description: "If you are after a budget-friendly, central lakeside stay in Nainital with clean rooms, and friendly service, Jagati Niwas is an excellent pick.",
    shortDescription: "Rustic mountain lodge with breathtaking views",
    location: "Upper Mall Road",
    rating: 4.6,
    priceRange: { min: 2e3, max: 4e3 },
    amenities: ["Free WiFi", "Mountain View", "Fireplace"],
    images: [
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1134174/pexels-photo-1134174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    contactDetails: {
      phone: "(+91) 8476023501",
      email: "maanandahotels@gmail.com",
      address: "Jagati Niwas, Mall Road Nainital"
    },
    tariffPlans: [
      {
        id: "1",
        name: "2 Bedroom",
        price: 2500,
        period: "night",
        features: ["Mountain View", "Free WiFi", "Fireplace"]
      },
      {
        id: "2",
        name: "3 Bedroom",
        price: 3e3,
        period: "night",
        features: ["Mountain View", "Free WiFi", "Fireplace"],
        popular: true
      },
      {
        id: "3",
        name: "4 Bedroom",
        price: 4e3,
        period: "night",
        features: ["Mountain View", "Free WiFi", "Guide Service", "Fireplace"]
      }
    ],
    featured: true
  },
  {
    id: "3",
    title: "KGN Guest House",
    description: "Situated on Nainital Road, Sherwani, approximately 1.8km from Nainital Lake and a 5-minute drive from the lakeside and Mall Road, Close to attractions like Cave Garden and High Court",
    shortDescription: "Modern downtown hotel with city convenience",
    location: "Sherwani Mallital, Nainital",
    rating: 4.4,
    priceRange: { min: 800, max: 2500 },
    amenities: ["Free WiFi", "Room Service", "Parking"],
    images: [
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    contactDetails: {
      phone: "(+91) 8476023501",
      email: "maanandahotels@gmail.com",
      address: "KGN Guest House, Mallital, Nainital"
    },
    tariffPlans: [
      {
        id: "1",
        name: "2 Bedroom",
        price: 1500,
        period: "night",
        features: ["City View", "Free WiFi"]
      },
      {
        id: "2",
        name: "3 Bedroom",
        price: 2e3,
        period: "night",
        features: ["City View", "Free WiFi"],
        popular: true
      },
      {
        id: "3",
        name: "4 Bedroom",
        price: 2500,
        period: "night",
        features: ["City View", "Free WiFi"]
      }
    ],
    featured: false
  },
  {
    id: "4",
    title: "Baba Neem karoli Guest House",
    description: "A budget-friendly hotel in Nainital, located away from the city rush — ideal for both bachelors and families seeking a peaceful stay.",
    shortDescription: "A budget-friendly hotel in Nainital",
    location: "Mallital Nainital",
    rating: 4.9,
    priceRange: { min: 1200, max: 1500 },
    amenities: ["Free WiFi", "Parking"],
    images: [
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    contactDetails: {
      phone: "(+91) 8476023501",
      email: "maanandahotels@gmail.com",
      address: "Baba Neem karoli Guest House, Mallital, Nainital"
    },
    tariffPlans: [
      {
        id: "1",
        name: "2 Bedroom",
        price: 1500,
        period: "night",
        features: ["Free WiFi", "Parking"],
        popular: true
      }
    ],
    featured: true
  }
];
const HotelCard = ({ hotel }) => {
  const getAmenityIcon = (amenity) => {
    switch (amenity.toLowerCase()) {
      case "free wifi":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "h-4 w-4" });
      case "restaurant":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Utensils, { className: "h-4 w-4" });
      case "pool":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Waves, { className: "h-4 w-4" });
      case "parking":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { className: "h-4 w-4" });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: hotel.images[0],
          alt: hotel.title,
          className: "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        }
      ),
      hotel.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold", children: "Featured" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 text-yellow-400 fill-current" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-gray-900", children: hotel.rating })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-gray-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-500", children: hotel.location })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors", children: hotel.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4 line-clamp-2", children: hotel.shortDescription }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [
        hotel.amenities.slice(0, 4).map((amenity, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full text-xs text-gray-700",
            children: [
              getAmenityIcon(amenity),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: amenity })
            ]
          },
          index
        )),
        hotel.amenities.length > 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-100 px-2 py-1 rounded-full text-xs text-gray-700", children: [
          "+",
          hotel.amenities.length - 4,
          " more"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-gray-900", children: [
            "₹",
            hotel.priceRange.min,
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-gray-500 font-normal", children: [
              " - ₹",
              hotel.priceRange.max
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "per night" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: `/hotel/${hotel.id}`,
            className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105",
            children: "View Details"
          }
        )
      ] })
    ] })
  ] });
};
const HotelGrid = ({ hotels: hotels2 }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: hotels2.map((hotel) => /* @__PURE__ */ jsxRuntimeExports.jsx(HotelCard, { hotel }, hotel.id)) });
};
const Home = () => {
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const featuredHotels = hotels.filter((hotel) => hotel.featured);
  const allHotels = hotels.slice(0, 6);
  const filteredHotels = allHotels.filter(
    (hotel) => hotel.title.toLowerCase().includes(searchTerm.toLowerCase()) || hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "relative bg-cover bg-center h-96 flex items-center justify-center",
        style: {
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://maanandahotels.github.io/images/nainital.jpg)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-white max-w-4xl mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-6xl font-bold mb-4", children: "Find Your Perfect Stay in Nainital" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl mb-8", children: "We are delighted to have you as our guest and thank you for choosing us for your stay in this serene paradise. Nestled amidst the breathtaking hills and overlooking the tranquil Naini Lake, our hotel is dedicated to making your visit a memorable one." })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Featured Hotels" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600", children: "Discover our most popular destinations" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HotelGrid, { hotels: featuredHotels })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold mb-2", children: "100+" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg", children: "Hotels Worldwide" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold mb-2", children: "50K+" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg", children: "Happy Guests" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold mb-2", children: "4.8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg flex items-center justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-5 w-5 text-yellow-400 fill-current mr-1" }),
          "Average Rating"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold mb-2", children: "24/7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg", children: "Customer Support" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: "All Hotels" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600", children: "Explore our complete collection" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/hotels",
            className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105",
            children: "View All Hotels"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HotelGrid, { hotels: filteredHotels })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-900 text-white py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Stay Updated" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl mb-8", children: "Get the latest deals and travel tips delivered to your inbox" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            placeholder: "Enter your email",
            className: "flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200", children: "Subscribe" })
      ] })
    ] }) })
  ] });
};
const HotelFilters = ({
  searchTerm,
  onSearchChange,
  selectedLocation,
  onLocationChange,
  priceRange,
  onPriceRangeChange,
  minRating,
  onRatingChange,
  locations
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6 mb-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Filter, { className: "h-5 w-5 text-blue-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: "Filter Hotels" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-5 w-5 text-gray-400 absolute left-3 top-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search hotels...",
            value: searchTerm,
            onChange: (e2) => onSearchChange(e2.target.value),
            className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-gray-400 absolute left-3 top-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: selectedLocation,
            onChange: (e2) => onLocationChange(e2.target.value),
            className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Locations" }),
              locations.map((location) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: location, children: location }, location))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-5 w-5 text-gray-400 absolute left-3 top-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: `${priceRange[0]}-${priceRange[1]}`,
            onChange: (e2) => {
              const [min, max] = e2.target.value.split("-").map(Number);
              onPriceRangeChange([min, max]);
            },
            className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "0-10000", children: "All Prices" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "0-1000", children: "Under ₹1000" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1000-2000", children: "₹1000 - ₹2000" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2000-3000", children: "₹2000 - ₹3000" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "3000-10000", children: "₹3000+" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-5 w-5 text-gray-400 absolute left-3 top-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: minRating,
            onChange: (e2) => onRatingChange(Number(e2.target.value)),
            className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 0, children: "All Ratings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 4, children: "4+ Stars" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 4.5, children: "4.5+ Stars" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 4.8, children: "4.8+ Stars" })
            ]
          }
        )
      ] })
    ] })
  ] });
};
const Hotels = () => {
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [selectedLocation, setSelectedLocation] = reactExports.useState("");
  const [priceRange, setPriceRange] = reactExports.useState([0, 1e4]);
  const [minRating, setMinRating] = reactExports.useState(0);
  const locations = Array.from(new Set(hotels.map((hotel) => hotel.location)));
  const filteredHotels = hotels.filter((hotel) => {
    const matchesSearch = hotel.title.toLowerCase().includes(searchTerm.toLowerCase()) || hotel.description.toLowerCase().includes(searchTerm.toLowerCase()) || hotel.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !selectedLocation || hotel.location === selectedLocation;
    const matchesPrice = hotel.priceRange.min >= priceRange[0] || hotel.priceRange.max <= priceRange[1];
    const matchesRating = hotel.rating >= minRating;
    return matchesSearch && matchesLocation && matchesPrice && matchesRating;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-2", children: "All Hotels" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600", children: [
        "Discover ",
        hotels.length,
        " exceptional hotels worldwide"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HotelFilters,
      {
        searchTerm,
        onSearchChange: setSearchTerm,
        selectedLocation,
        onLocationChange: setSelectedLocation,
        priceRange,
        onPriceRangeChange: setPriceRange,
        minRating,
        onRatingChange: setMinRating,
        locations
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600", children: [
      filteredHotels.length,
      " hotel",
      filteredHotels.length !== 1 ? "s" : "",
      " found"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HotelGrid, { hotels: filteredHotels })
  ] }) });
};
const ImageGallery = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: images[currentIndex],
          alt: `${title} - Image ${currentIndex + 1}`,
          className: "w-full h-96 object-cover rounded-xl cursor-pointer",
          onClick: () => openModal(currentIndex)
        }
      ),
      images.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: prevImage,
            className: "absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-6 w-6 text-gray-800" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: nextImage,
            className: "absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-6 w-6 text-gray-800" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm", children: [
        currentIndex + 1,
        " / ",
        images.length
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2", children: images.slice(0, 4).map((image, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `relative cursor-pointer rounded-lg overflow-hidden ${index === currentIndex ? "ring-2 ring-blue-500" : ""}`,
        onClick: () => openModal(index),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: image,
              alt: `${title} - Thumbnail ${index + 1}`,
              className: "w-full h-20 object-cover hover:scale-105 transition-transform duration-200"
            }
          ),
          index === 3 && images.length > 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-semibold", children: [
            "+",
            images.length - 4
          ] })
        ]
      },
      index
    )) }),
    isModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl max-h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: closeModal,
          className: "absolute top-4 right-4 text-white hover:text-gray-300 z-10",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-8 w-8" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: images[currentIndex],
          alt: `${title} - Image ${currentIndex + 1}`,
          className: "max-w-full max-h-full object-contain"
        }
      ),
      images.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: prevImage,
            className: "absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-8 w-8" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: nextImage,
            className: "absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-8 w-8" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm", children: [
        currentIndex + 1,
        " of ",
        images.length
      ] })
    ] }) })
  ] });
};
const sendWhatsAppMessage = (bookingDetails) => {
  const whatsappNumber = "919811207386";
  const message = formatBookingMessage(bookingDetails);
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};
const formatBookingMessage = (details) => {
  const {
    hotelName,
    checkIn,
    checkOut,
    guests,
    selectedPlan,
    customerName,
    customerEmail,
    customerPhone
  } = details;
  let message = `🏨 *Hotel Booking Inquiry*

`;
  message += `*Hotel:* ${hotelName}
`;
  message += `*Check-in:* ${formatDate(checkIn)}
`;
  message += `*Check-out:* ${formatDate(checkOut)}
`;
  message += `*Guests:* ${guests}
`;
  if (selectedPlan) {
    message += `*Selected Plan:* ${selectedPlan}
`;
  }
  message += `
*Customer Details:*
`;
  if (customerName) {
    message += `*Name:* ${customerName}
`;
  }
  if (customerEmail) {
    message += `*Email:* ${customerEmail}
`;
  }
  if (customerPhone) {
    message += `*Phone:* ${customerPhone}
`;
  }
  message += `
I would like to make a reservation. Please provide availability and pricing details.

`;
  message += `Thank you! 🙏`;
  return message;
};
const formatDate = (dateString) => {
  if (!dateString) return "Not selected";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
};
const calculateNights = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) return 0;
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
  return diffDays;
};
const TariffPlans = ({ plans, hotelName }) => {
  const handleQuickInquiry = (plan) => {
    const bookingDetails = {
      hotelName: hotelName || "Selected Hotel",
      checkIn: "",
      checkOut: "",
      guests: "2 Guests",
      selectedPlan: plan.name
    };
    sendWhatsAppMessage(bookingDetails);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "Pricing Plans" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: plans.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `rounded-xl border-2 p-6 relative ${plan.popular ? "border-blue-500 bg-blue-50 shadow-lg scale-105" : "border-gray-200 bg-white"}`,
        children: [
          plan.popular && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Most Popular" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: plan.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl font-bold text-gray-900", children: [
              "₹",
              plan.price,
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-gray-500 font-normal", children: [
                "/",
                plan.period
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 mb-8", children: plan.features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: feature })
          ] }, index)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => handleQuickInquiry(plan),
              className: "w-full py-2 px-4 rounded-lg font-semibold transition-all duration-200 bg-green-600 text-white hover:bg-green-700 flex items-center justify-center space-x-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Quick Inquiry" })
              ]
            }
          ) })
        ]
      },
      plan.id
    )) })
  ] });
};
const BookingForm = ({ hotel }) => {
  const { user, isAuthenticated } = useAuth0();
  const [checkIn, setCheckIn] = reactExports.useState("");
  const [checkOut, setCheckOut] = reactExports.useState("");
  const [guests, setGuests] = reactExports.useState("2");
  const [selectedPlan, setSelectedPlan] = reactExports.useState(null);
  const [customerName, setCustomerName] = reactExports.useState((user == null ? void 0 : user.name) || "");
  const [customerEmail, setCustomerEmail] = reactExports.useState((user == null ? void 0 : user.email) || "");
  const [customerPhone, setCustomerPhone] = reactExports.useState("");
  const nights = calculateNights(checkIn, checkOut);
  const totalPrice = selectedPlan ? selectedPlan.price * nights : 0;
  const handleWhatsAppBooking = () => {
    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates");
      return;
    }
    const bookingDetails = {
      hotelName: hotel.title,
      checkIn,
      checkOut,
      guests: `${guests} Guest${guests !== "1" ? "s" : ""}`,
      selectedPlan: selectedPlan == null ? void 0 : selectedPlan.name,
      customerName: customerName || void 0,
      customerEmail: customerEmail || void 0,
      customerPhone: customerPhone || void 0
    };
    sendWhatsAppMessage(bookingDetails);
  };
  const handleDirectBooking = () => {
    alert("Direct booking feature coming soon! For now, please use WhatsApp booking.");
  };
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 864e5).toISOString().split("T")[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-6", children: "Book Your Stay" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 inline mr-1" }),
          "Check-in Date"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "date",
            value: checkIn,
            onChange: (e2) => setCheckIn(e2.target.value),
            min: today,
            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 inline mr-1" }),
          "Check-out Date"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "date",
            value: checkOut,
            onChange: (e2) => setCheckOut(e2.target.value),
            min: checkIn || tomorrow,
            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4 inline mr-1" }),
          "Number of Guests"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: guests,
            onChange: (e2) => setGuests(e2.target.value),
            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1", children: "1 Guest" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2", children: "2 Guests" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "3", children: "3 Guests" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "4", children: "4 Guests" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "5", children: "5 Guests" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "6", children: "6+ Guests" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Select Room Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: hotel.tariffPlans.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "label",
          {
            className: `flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-colors ${(selectedPlan == null ? void 0 : selectedPlan.id) === plan.id ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "plan",
                    value: plan.id,
                    checked: (selectedPlan == null ? void 0 : selectedPlan.id) === plan.id,
                    onChange: () => setSelectedPlan(plan),
                    className: "mr-3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-gray-900", children: plan.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-500", children: [
                    plan.features.slice(0, 2).join(", "),
                    plan.features.length > 2 && "..."
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-gray-900", children: [
                  "₹",
                  plan.price
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-500", children: [
                  "per ",
                  plan.period
                ] })
              ] })
            ]
          },
          plan.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-gray-900 mb-3", children: "Contact Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 inline mr-1" }),
              "Full Name"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: customerName,
                onChange: (e2) => setCustomerName(e2.target.value),
                placeholder: "Enter your full name",
                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 inline mr-1" }),
              "Email Address"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "email",
                value: customerEmail,
                onChange: (e2) => setCustomerEmail(e2.target.value),
                placeholder: "Enter your email",
                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 inline mr-1" }),
              "Phone Number"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "tel",
                value: customerPhone,
                onChange: (e2) => setCustomerPhone(e2.target.value),
                placeholder: "Enter your phone number",
                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              }
            )
          ] })
        ] })
      ] })
    ] }),
    checkIn && checkOut && selectedPlan && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 rounded-lg p-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: "Booking Summary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Room Type:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selectedPlan.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Duration:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            nights,
            " night",
            nights !== 1 ? "s" : ""
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Rate:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "₹",
            selectedPlan.price,
            " per ",
            selectedPlan.period
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t pt-2 flex justify-between font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "₹",
            totalPrice
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: handleWhatsAppBooking,
          className: "w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Book via WhatsApp" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: handleDirectBooking,
          className: "w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Book & Pay Online" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-3 text-center", children: "WhatsApp booking connects you directly with our team for personalized service" })
  ] });
};
const HotelDetail = () => {
  const { id: id2 } = useParams();
  const hotel = hotels.find((h2) => h2.id === id2);
  if (!hotel) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Hotel Not Found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/hotels",
          className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200",
          children: "Back to Hotels"
        }
      )
    ] }) });
  }
  const getAmenityIcon = (amenity) => {
    switch (amenity.toLowerCase()) {
      case "free wifi":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "h-5 w-5" });
      case "restaurant":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Utensils, { className: "h-5 w-5" });
      case "pool":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Waves, { className: "h-5 w-5" });
      case "gym":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Dumbbell, { className: "h-5 w-5" });
      case "spa":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Space, { className: "h-5 w-5" });
      case "parking":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { className: "h-5 w-5" });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/hotels",
        className: "inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Back to Hotels" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-xl shadow-lg overflow-hidden mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-2", children: hotel.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4 text-gray-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: hotel.location })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-5 w-5 text-yellow-400 fill-current" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: hotel.rating })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl font-bold text-gray-900", children: [
            "₹",
            hotel.priceRange.min,
            " - ₹",
            hotel.priceRange.max
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-500", children: "per night" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 text-lg leading-relaxed", children: hotel.description })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-xl shadow-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Gallery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ImageGallery, { images: hotel.images, title: hotel.title })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Amenities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: hotel.amenities.map((amenity, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center space-x-2 p-3 bg-gray-50 rounded-lg",
              children: [
                getAmenityIcon(amenity),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: amenity })
              ]
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-xl shadow-lg p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TariffPlans, { plans: hotel.tariffPlans }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BookingForm, { hotel }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "Contact Information" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-blue-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: hotel.contactDetails.phone })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 text-blue-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: hotel.contactDetails.email })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-blue-600 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: hotel.contactDetails.address })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-200 rounded-lg h-40 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500", children: "Interactive Map" }) })
        ] })
      ] })
    ] })
  ] }) });
};
const HotelForm = ({ hotel, onSubmit, onCancel }) => {
  const [formData, setFormData] = reactExports.useState({
    title: (hotel == null ? void 0 : hotel.title) || "",
    description: (hotel == null ? void 0 : hotel.description) || "",
    shortDescription: (hotel == null ? void 0 : hotel.shortDescription) || "",
    location: (hotel == null ? void 0 : hotel.location) || "",
    rating: (hotel == null ? void 0 : hotel.rating) || 4,
    priceRange: (hotel == null ? void 0 : hotel.priceRange) || { min: 100, max: 500 },
    amenities: (hotel == null ? void 0 : hotel.amenities) || ["Free WiFi"],
    images: (hotel == null ? void 0 : hotel.images) || [""],
    contactDetails: (hotel == null ? void 0 : hotel.contactDetails) || {
      phone: "",
      email: "",
      address: ""
    },
    tariffPlans: (hotel == null ? void 0 : hotel.tariffPlans) || [
      {
        id: "1",
        name: "Standard Room",
        price: 100,
        period: "night",
        features: ["Free WiFi", "Breakfast Included"]
      }
    ],
    featured: (hotel == null ? void 0 : hotel.featured) || false
  });
  const handleSubmit = (e2) => {
    e2.preventDefault();
    onSubmit(formData);
  };
  const addAmenity = () => {
    setFormData((prev) => ({
      ...prev,
      amenities: [...prev.amenities, ""]
    }));
  };
  const removeAmenity = (index) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.filter((_2, i2) => i2 !== index)
    }));
  };
  const updateAmenity = (index, value) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.map((amenity, i2) => i2 === index ? value : amenity)
    }));
  };
  const addImage = () => {
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ""]
    }));
  };
  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_2, i2) => i2 !== index)
    }));
  };
  const updateImage = (index, value) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.map((image, i2) => i2 === index ? value : image)
    }));
  };
  const addTariffPlan = () => {
    const newPlan = {
      id: Date.now().toString(),
      name: "New Plan",
      price: 100,
      period: "night",
      features: ["Free WiFi"]
    };
    setFormData((prev) => ({
      ...prev,
      tariffPlans: [...prev.tariffPlans, newPlan]
    }));
  };
  const removeTariffPlan = (index) => {
    setFormData((prev) => ({
      ...prev,
      tariffPlans: prev.tariffPlans.filter((_2, i2) => i2 !== index)
    }));
  };
  const updateTariffPlan = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      tariffPlans: prev.tariffPlans.map(
        (plan, i2) => i2 === index ? { ...plan, [field]: value } : plan
      )
    }));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit, className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-6", children: hotel ? "Edit Hotel" : "Add New Hotel" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Hotel Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: formData.title,
            onChange: (e2) => setFormData((prev) => ({ ...prev, title: e2.target.value })),
            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Location" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: formData.location,
            onChange: (e2) => setFormData((prev) => ({ ...prev, location: e2.target.value })),
            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            required: true
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Short Description" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          value: formData.shortDescription,
          onChange: (e2) => setFormData((prev) => ({ ...prev, shortDescription: e2.target.value })),
          className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Description" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          value: formData.description,
          onChange: (e2) => setFormData((prev) => ({ ...prev, description: e2.target.value })),
          rows: 4,
          className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Rating" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            min: "1",
            max: "5",
            step: "0.1",
            value: formData.rating,
            onChange: (e2) => setFormData((prev) => ({ ...prev, rating: Number(e2.target.value) })),
            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Min Price" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            min: "0",
            value: formData.priceRange.min,
            onChange: (e2) => setFormData((prev) => ({
              ...prev,
              priceRange: { ...prev.priceRange, min: Number(e2.target.value) }
            })),
            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Max Price" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            min: "0",
            value: formData.priceRange.max,
            onChange: (e2) => setFormData((prev) => ({
              ...prev,
              priceRange: { ...prev.priceRange, max: Number(e2.target.value) }
            })),
            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            required: true
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "checkbox",
          checked: formData.featured,
          onChange: (e2) => setFormData((prev) => ({ ...prev, featured: e2.target.checked })),
          className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-gray-700", children: "Featured Hotel" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Contact Details" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "tel",
              value: formData.contactDetails.phone,
              onChange: (e2) => setFormData((prev) => ({
                ...prev,
                contactDetails: { ...prev.contactDetails, phone: e2.target.value }
              })),
              className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              value: formData.contactDetails.email,
              onChange: (e2) => setFormData((prev) => ({
                ...prev,
                contactDetails: { ...prev.contactDetails, email: e2.target.value }
              })),
              className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: formData.contactDetails.address,
              onChange: (e2) => setFormData((prev) => ({
                ...prev,
                contactDetails: { ...prev.contactDetails, address: e2.target.value }
              })),
              className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              required: true
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Amenities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: addAmenity,
            className: "flex items-center space-x-1 bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Add" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: formData.amenities.map((amenity, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: amenity,
            onChange: (e2) => updateAmenity(index, e2.target.value),
            className: "flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            placeholder: "Enter amenity"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => removeAmenity(index),
            className: "text-red-600 hover:text-red-800",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
          }
        )
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Images" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: addImage,
            className: "flex items-center space-x-1 bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Add Image" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: formData.images.map((image, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "url",
            value: image,
            onChange: (e2) => updateImage(index, e2.target.value),
            className: "flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            placeholder: "Enter image URL"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => removeImage(index),
            className: "text-red-600 hover:text-red-800",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
          }
        )
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Tariff Plans" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: addTariffPlan,
            className: "flex items-center space-x-1 bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Add Plan" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: formData.tariffPlans.map((plan, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 rounded-lg p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-md font-medium text-gray-900", children: [
            "Plan ",
            index + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => removeTariffPlan(index),
              className: "text-red-600 hover:text-red-800",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Plan Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: plan.name,
                onChange: (e2) => updateTariffPlan(index, "name", e2.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                min: "0",
                value: plan.price,
                onChange: (e2) => updateTariffPlan(index, "price", Number(e2.target.value)),
                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Period" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: plan.period,
                onChange: (e2) => updateTariffPlan(index, "period", e2.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "night", children: "Per Night" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "week", children: "Per Week" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "month", children: "Per Month" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2 mt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: plan.popular || false,
                onChange: (e2) => updateTariffPlan(index, "popular", e2.target.checked),
                className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-gray-700", children: "Popular" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Features (comma-separated)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: plan.features.join(", "),
              onChange: (e2) => updateTariffPlan(index, "features", e2.target.value.split(", ")),
              className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              placeholder: "Free WiFi, Breakfast Included, Pool Access"
            }
          )
        ] })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end space-x-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onCancel,
          className: "px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          className: "px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200",
          children: hotel ? "Update Hotel" : "Add Hotel"
        }
      )
    ] })
  ] }) });
};
const AdminDashboard = () => {
  var _a;
  const { user, isAuthenticated } = useAuth0();
  const [showForm, setShowForm] = reactExports.useState(false);
  const [editingHotel, setEditingHotel] = reactExports.useState(null);
  const [hotelList, setHotelList] = reactExports.useState(hotels);
  const isAdmin = (_a = user == null ? void 0 : user["https://hotelhub.com/roles"]) == null ? void 0 : _a.includes("admin");
  if (!isAuthenticated || !isAdmin) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Access Denied" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "You need admin privileges to access this page." })
    ] }) });
  }
  const handleAddHotel = (hotelData) => {
    const newHotel = {
      ...hotelData,
      id: Date.now().toString()
    };
    setHotelList([...hotelList, newHotel]);
    setShowForm(false);
  };
  const handleEditHotel = (hotelData) => {
    if (editingHotel) {
      const updatedHotels = hotelList.map(
        (hotel) => hotel.id === editingHotel.id ? { ...hotelData, id: editingHotel.id } : hotel
      );
      setHotelList(updatedHotels);
      setEditingHotel(null);
      setShowForm(false);
    }
  };
  const handleDeleteHotel = (id2) => {
    if (window.confirm("Are you sure you want to delete this hotel?")) {
      setHotelList(hotelList.filter((hotel) => hotel.id !== id2));
    }
  };
  const openEditForm = (hotel) => {
    setEditingHotel(hotel);
    setShowForm(true);
  };
  const closeForm = () => {
    setShowForm(false);
    setEditingHotel(null);
  };
  if (showForm) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-50 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      HotelForm,
      {
        hotel: editingHotel || void 0,
        onSubmit: editingHotel ? handleEditHotel : handleAddHotel,
        onCancel: closeForm
      }
    ) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Admin Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 mt-2", children: [
          "Welcome back, ",
          user == null ? void 0 : user.name
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setShowForm(true),
          className: "flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Add New Hotel" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-xl shadow-lg p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Total Hotels" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-gray-900", children: hotelList.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-100 p-3 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-6 w-6 text-blue-600" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-xl shadow-lg p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Featured Hotels" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-gray-900", children: hotelList.filter((h2) => h2.featured).length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-yellow-100 p-3 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-6 w-6 text-yellow-600" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-xl shadow-lg p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Avg. Rating" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-gray-900", children: (hotelList.reduce((sum, h2) => sum + h2.rating, 0) / hotelList.length).toFixed(1) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-100 p-3 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-6 w-6 text-green-600" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-xl shadow-lg p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Locations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-gray-900", children: new Set(hotelList.map((h2) => h2.location)).size })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-100 p-3 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-6 w-6 text-purple-600" }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-4 border-b border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "All Hotels" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Hotel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Rating" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Price Range" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: hotelList.map((hotel) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: hotel.images[0],
                alt: hotel.title,
                className: "h-12 w-12 rounded-lg object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-gray-900", children: hotel.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-500", children: hotel.shortDescription })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-900", children: hotel.location }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 text-yellow-400 fill-current" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-sm text-gray-900", children: hotel.rating })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-900", children: [
            "v",
            hotel.priceRange.min,
            " - ₹",
            hotel.priceRange.max
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `px-2 py-1 text-xs font-semibold rounded-full ${hotel.featured ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}`,
              children: hotel.featured ? "Featured" : "Regular"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => window.open(`/hotel/${hotel.id}`, "_blank"),
                className: "text-blue-600 hover:text-blue-800",
                title: "View Hotel",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => openEditForm(hotel),
                className: "text-indigo-600 hover:text-indigo-800",
                title: "Edit Hotel",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleDeleteHotel(hotel.id),
                className: "text-red-600 hover:text-red-800",
                title: "Delete Hotel",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
              }
            )
          ] }) })
        ] }, hotel.id)) })
      ] }) })
    ] })
  ] }) });
};
const domain = "dev-hotelhub.us.auth0.com";
const clientId = "iJ1xUdVUzAeAatO4IC67ElNqTbnyA4s1";
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Auth0Provider,
    {
      domain,
      clientId,
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: `https://${domain}/api/v2/`,
        scope: "openid profile email"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-grow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Home, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/hotels", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Hotels, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/hotel/:id", element: /* @__PURE__ */ jsxRuntimeExports.jsx(HotelDetail, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/admin", element: /* @__PURE__ */ jsxRuntimeExports.jsx(AdminDashboard, {}) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
      ] }) })
    }
  );
}
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
