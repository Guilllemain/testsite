/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),

/***/ 11:
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
(function () {
  if (window.CKEDITOR && window.CKEDITOR.dom) return;window.CKEDITOR || (window.CKEDITOR = function () {
    var a = /(^|.*[\\\/])ckeditor\.js(?:\?.*|;.*)?$/i,
        d = { timestamp: "I63C", version: "4.10.0", revision: "de1371d", rnd: Math.floor(900 * Math.random()) + 100, _: { pending: [], basePathSrcPattern: a }, status: "unloaded", basePath: function () {
        var b = window.CKEDITOR_BASEPATH || "";if (!b) for (var c = document.getElementsByTagName("script"), d = 0; d < c.length; d++) {
          var g = c[d].src.match(a);if (g) {
            b = g[1];break;
          }
        }-1 == b.indexOf(":/") && "//" != b.slice(0, 2) && (b = 0 === b.indexOf("/") ? location.href.match(/^.*?:\/\/[^\/]*/)[0] + b : location.href.match(/^[^\?]*\/(?:)/)[0] + b);if (!b) throw 'The CKEditor installation path could not be automatically detected. Please set the global variable "CKEDITOR_BASEPATH" before creating editor instances.';return b;
      }(), getUrl: function getUrl(a) {
        -1 == a.indexOf(":/") && 0 !== a.indexOf("/") && (a = this.basePath + a);this.timestamp && "/" != a.charAt(a.length - 1) && !/[&?]t=/.test(a) && (a += (0 <= a.indexOf("?") ? "\x26" : "?") + "t\x3d" + this.timestamp);return a;
      }, domReady: function () {
        function a() {
          try {
            document.addEventListener ? (document.removeEventListener("DOMContentLoaded", a, !1), b()) : document.attachEvent && "complete" === document.readyState && (document.detachEvent("onreadystatechange", a), b());
          } catch (c) {}
        }function b() {
          for (var a; a = c.shift();) {
            a();
          }
        }var c = [];return function (b) {
          function n() {
            try {
              document.documentElement.doScroll("left");
            } catch (e) {
              setTimeout(n, 1);return;
            }a();
          }c.push(b);"complete" === document.readyState && setTimeout(a, 1);if (1 == c.length) if (document.addEventListener) document.addEventListener("DOMContentLoaded", a, !1), window.addEventListener("load", a, !1);else if (document.attachEvent) {
            document.attachEvent("onreadystatechange", a);window.attachEvent("onload", a);b = !1;try {
              b = !window.frameElement;
            } catch (r) {}document.documentElement.doScroll && b && n();
          }
        };
      }() },
        b = window.CKEDITOR_GETURL;if (b) {
      var c = d.getUrl;d.getUrl = function (a) {
        return b.call(d, a) || c.call(d, a);
      };
    }return d;
  }());
  CKEDITOR.event || (CKEDITOR.event = function () {}, CKEDITOR.event.implementOn = function (a) {
    var d = CKEDITOR.event.prototype,
        b;for (b in d) {
      null == a[b] && (a[b] = d[b]);
    }
  }, CKEDITOR.event.prototype = function () {
    function a(a) {
      var f = d(this);return f[a] || (f[a] = new b(a));
    }var d = function d(a) {
      a = a.getPrivate && a.getPrivate() || a._ || (a._ = {});return a.events || (a.events = {});
    },
        b = function b(a) {
      this.name = a;this.listeners = [];
    };b.prototype = { getListenerIndex: function getListenerIndex(a) {
        for (var b = 0, d = this.listeners; b < d.length; b++) {
          if (d[b].fn == a) return b;
        }return -1;
      } };
    return { define: function define(b, d) {
        var h = a.call(this, b);CKEDITOR.tools.extend(h, d, !0);
      }, on: function on(b, d, h, k, g) {
        function n(e, a, y, v) {
          e = { name: b, sender: this, editor: e, data: a, listenerData: k, stop: y, cancel: v, removeListener: r };return !1 === d.call(h, e) ? !1 : e.data;
        }function r() {
          y.removeListener(b, d);
        }var e = a.call(this, b);if (0 > e.getListenerIndex(d)) {
          e = e.listeners;h || (h = this);isNaN(g) && (g = 10);var y = this;n.fn = d;n.priority = g;for (var v = e.length - 1; 0 <= v; v--) {
            if (e[v].priority <= g) return e.splice(v + 1, 0, n), { removeListener: r };
          }e.unshift(n);
        }return { removeListener: r };
      },
      once: function once() {
        var a = Array.prototype.slice.call(arguments),
            b = a[1];a[1] = function (a) {
          a.removeListener();return b.apply(this, arguments);
        };return this.on.apply(this, a);
      }, capture: function capture() {
        CKEDITOR.event.useCapture = 1;var a = this.on.apply(this, arguments);CKEDITOR.event.useCapture = 0;return a;
      }, fire: function () {
        var a = 0,
            b = function b() {
          a = 1;
        },
            h = 0,
            k = function k() {
          h = 1;
        };return function (g, n, r) {
          var e = d(this)[g];g = a;var y = h;a = h = 0;if (e) {
            var v = e.listeners;if (v.length) for (var v = v.slice(0), A, D = 0; D < v.length; D++) {
              if (e.errorProof) try {
                A = v[D].call(this, r, n, b, k);
              } catch (x) {} else A = v[D].call(this, r, n, b, k);!1 === A ? h = 1 : "undefined" != typeof A && (n = A);if (a || h) break;
            }
          }n = h ? !1 : "undefined" == typeof n ? !0 : n;a = g;h = y;return n;
        };
      }(), fireOnce: function fireOnce(a, b, h) {
        b = this.fire(a, b, h);delete d(this)[a];return b;
      }, removeListener: function removeListener(a, b) {
        var h = d(this)[a];if (h) {
          var k = h.getListenerIndex(b);0 <= k && h.listeners.splice(k, 1);
        }
      }, removeAllListeners: function removeAllListeners() {
        var a = d(this),
            b;for (b in a) {
          delete a[b];
        }
      }, hasListeners: function hasListeners(a) {
        return (a = d(this)[a]) && 0 < a.listeners.length;
      } };
  }());
  CKEDITOR.editor || (CKEDITOR.editor = function () {
    CKEDITOR._.pending.push([this, arguments]);CKEDITOR.event.call(this);
  }, CKEDITOR.editor.prototype.fire = function (a, d) {
    a in { instanceReady: 1, loaded: 1 } && (this[a] = !0);return CKEDITOR.event.prototype.fire.call(this, a, d, this);
  }, CKEDITOR.editor.prototype.fireOnce = function (a, d) {
    a in { instanceReady: 1, loaded: 1 } && (this[a] = !0);return CKEDITOR.event.prototype.fireOnce.call(this, a, d, this);
  }, CKEDITOR.event.implementOn(CKEDITOR.editor.prototype));
  CKEDITOR.env || (CKEDITOR.env = function () {
    var a = navigator.userAgent.toLowerCase(),
        d = a.match(/edge[ \/](\d+.?\d*)/),
        b = -1 < a.indexOf("trident/"),
        b = !(!d && !b),
        b = { ie: b, edge: !!d, webkit: !b && -1 < a.indexOf(" applewebkit/"), air: -1 < a.indexOf(" adobeair/"), mac: -1 < a.indexOf("macintosh"), quirks: "BackCompat" == document.compatMode && (!document.documentMode || 10 > document.documentMode), mobile: -1 < a.indexOf("mobile"), iOS: /(ipad|iphone|ipod)/.test(a), isCustomDomain: function isCustomDomain() {
        if (!this.ie) return !1;var a = document.domain,
            b = window.location.hostname;
        return a != b && a != "[" + b + "]";
      }, secure: "https:" == location.protocol };b.gecko = "Gecko" == navigator.product && !b.webkit && !b.ie;b.webkit && (-1 < a.indexOf("chrome") ? b.chrome = !0 : b.safari = !0);var c = 0;b.ie && (c = d ? parseFloat(d[1]) : b.quirks || !document.documentMode ? parseFloat(a.match(/msie (\d+)/)[1]) : document.documentMode, b.ie9Compat = 9 == c, b.ie8Compat = 8 == c, b.ie7Compat = 7 == c, b.ie6Compat = 7 > c || b.quirks);b.gecko && (d = a.match(/rv:([\d\.]+)/)) && (d = d[1].split("."), c = 1E4 * d[0] + 100 * (d[1] || 0) + 1 * (d[2] || 0));b.air && (c = parseFloat(a.match(/ adobeair\/(\d+)/)[1]));
    b.webkit && (c = parseFloat(a.match(/ applewebkit\/(\d+)/)[1]));b.version = c;b.isCompatible = !(b.ie && 7 > c) && !(b.gecko && 4E4 > c) && !(b.webkit && 534 > c);b.hidpi = 2 <= window.devicePixelRatio;b.needsBrFiller = b.gecko || b.webkit || b.ie && 10 < c;b.needsNbspFiller = b.ie && 11 > c;b.cssClass = "cke_browser_" + (b.ie ? "ie" : b.gecko ? "gecko" : b.webkit ? "webkit" : "unknown");b.quirks && (b.cssClass += " cke_browser_quirks");b.ie && (b.cssClass += " cke_browser_ie" + (b.quirks ? "6 cke_browser_iequirks" : b.version));b.air && (b.cssClass += " cke_browser_air");
    b.iOS && (b.cssClass += " cke_browser_ios");b.hidpi && (b.cssClass += " cke_hidpi");return b;
  }());
  "unloaded" == CKEDITOR.status && function () {
    CKEDITOR.event.implementOn(CKEDITOR);CKEDITOR.loadFullCore = function () {
      if ("basic_ready" != CKEDITOR.status) CKEDITOR.loadFullCore._load = 1;else {
        delete CKEDITOR.loadFullCore;var a = document.createElement("script");a.type = "text/javascript";a.src = CKEDITOR.basePath + "ckeditor.js";document.getElementsByTagName("head")[0].appendChild(a);
      }
    };CKEDITOR.loadFullCoreTimeout = 0;CKEDITOR.add = function (a) {
      (this._.pending || (this._.pending = [])).push(a);
    };(function () {
      CKEDITOR.domReady(function () {
        var a = CKEDITOR.loadFullCore,
            d = CKEDITOR.loadFullCoreTimeout;a && (CKEDITOR.status = "basic_ready", a && a._load ? a() : d && setTimeout(function () {
          CKEDITOR.loadFullCore && CKEDITOR.loadFullCore();
        }, 1E3 * d));
      });
    })();CKEDITOR.status = "basic_loaded";
  }();"use strict";CKEDITOR.VERBOSITY_WARN = 1;CKEDITOR.VERBOSITY_ERROR = 2;CKEDITOR.verbosity = CKEDITOR.VERBOSITY_WARN | CKEDITOR.VERBOSITY_ERROR;CKEDITOR.warn = function (a, d) {
    CKEDITOR.verbosity & CKEDITOR.VERBOSITY_WARN && CKEDITOR.fire("log", { type: "warn", errorCode: a, additionalData: d });
  };
  CKEDITOR.error = function (a, d) {
    CKEDITOR.verbosity & CKEDITOR.VERBOSITY_ERROR && CKEDITOR.fire("log", { type: "error", errorCode: a, additionalData: d });
  };
  CKEDITOR.on("log", function (a) {
    if (window.console && window.console.log) {
      var d = console[a.data.type] ? a.data.type : "log",
          b = a.data.errorCode;if (a = a.data.additionalData) console[d]("[CKEDITOR] Error code: " + b + ".", a);else console[d]("[CKEDITOR] Error code: " + b + ".");console[d]("[CKEDITOR] For more information about this error go to https://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_errors-section-" + b);
    }
  }, null, null, 999);CKEDITOR.dom = {};
  (function () {
    var a = [],
        d = CKEDITOR.env.gecko ? "-moz-" : CKEDITOR.env.webkit ? "-webkit-" : CKEDITOR.env.ie ? "-ms-" : "",
        b = /&/g,
        c = />/g,
        f = /</g,
        h = /"/g,
        k = /&(lt|gt|amp|quot|nbsp|shy|#\d{1,5});/g,
        g = { lt: "\x3c", gt: "\x3e", amp: "\x26", quot: '"', nbsp: " ", shy: "­" },
        n = function n(a, e) {
      return "#" == e[0] ? String.fromCharCode(parseInt(e.slice(1), 10)) : g[e];
    };CKEDITOR.on("reset", function () {
      a = [];
    });CKEDITOR.tools = { arrayCompare: function arrayCompare(a, e) {
        if (!a && !e) return !0;if (!a || !e || a.length != e.length) return !1;for (var b = 0; b < a.length; b++) {
          if (a[b] != e[b]) return !1;
        }return !0;
      }, getIndex: function getIndex(a, e) {
        for (var b = 0; b < a.length; ++b) {
          if (e(a[b])) return b;
        }return -1;
      }, clone: function clone(a) {
        var e;if (a && a instanceof Array) {
          e = [];for (var b = 0; b < a.length; b++) {
            e[b] = CKEDITOR.tools.clone(a[b]);
          }return e;
        }if (null === a || "object" != (typeof a === "undefined" ? "undefined" : _typeof(a)) || a instanceof String || a instanceof Number || a instanceof Boolean || a instanceof Date || a instanceof RegExp || a.nodeType || a.window === a) return a;e = new a.constructor();for (b in a) {
          e[b] = CKEDITOR.tools.clone(a[b]);
        }return e;
      }, capitalize: function capitalize(a, e) {
        return a.charAt(0).toUpperCase() + (e ? a.slice(1) : a.slice(1).toLowerCase());
      }, extend: function extend(a) {
        var e = arguments.length,
            b,
            v;"boolean" == typeof (b = arguments[e - 1]) ? e-- : "boolean" == typeof (b = arguments[e - 2]) && (v = arguments[e - 1], e -= 2);for (var c = 1; c < e; c++) {
          var g = arguments[c],
              d;for (d in g) {
            if (!0 === b || null == a[d]) if (!v || d in v) a[d] = g[d];
          }
        }return a;
      }, prototypedCopy: function prototypedCopy(a) {
        var e = function e() {};e.prototype = a;return new e();
      }, copy: function copy(a) {
        var e = {},
            b;for (b in a) {
          e[b] = a[b];
        }return e;
      }, isArray: function isArray(a) {
        return "[object Array]" == Object.prototype.toString.call(a);
      },
      isEmpty: function isEmpty(a) {
        for (var e in a) {
          if (a.hasOwnProperty(e)) return !1;
        }return !0;
      }, cssVendorPrefix: function cssVendorPrefix(a, e, b) {
        if (b) return d + a + ":" + e + ";" + a + ":" + e;b = {};b[a] = e;b[d + a] = e;return b;
      }, cssStyleToDomStyle: function () {
        var a = document.createElement("div").style,
            e = "undefined" != typeof a.cssFloat ? "cssFloat" : "undefined" != typeof a.styleFloat ? "styleFloat" : "float";return function (a) {
          return "float" == a ? e : a.replace(/-./g, function (a) {
            return a.substr(1).toUpperCase();
          });
        };
      }(), buildStyleHtml: function buildStyleHtml(a) {
        a = [].concat(a);for (var e, b = [], v = 0; v < a.length; v++) {
          if (e = a[v]) /@import|[{}]/.test(e) ? b.push("\x3cstyle\x3e" + e + "\x3c/style\x3e") : b.push('\x3clink type\x3d"text/css" rel\x3dstylesheet href\x3d"' + e + '"\x3e');
        }return b.join("");
      }, htmlEncode: function htmlEncode(a) {
        return void 0 === a || null === a ? "" : String(a).replace(b, "\x26amp;").replace(c, "\x26gt;").replace(f, "\x26lt;");
      }, htmlDecode: function htmlDecode(a) {
        return a.replace(k, n);
      }, htmlEncodeAttr: function htmlEncodeAttr(a) {
        return CKEDITOR.tools.htmlEncode(a).replace(h, "\x26quot;");
      }, htmlDecodeAttr: function htmlDecodeAttr(a) {
        return CKEDITOR.tools.htmlDecode(a);
      },
      transformPlainTextToHtml: function transformPlainTextToHtml(a, e) {
        var b = e == CKEDITOR.ENTER_BR,
            v = this.htmlEncode(a.replace(/\r\n/g, "\n")),
            v = v.replace(/\t/g, "\x26nbsp;\x26nbsp; \x26nbsp;"),
            c = e == CKEDITOR.ENTER_P ? "p" : "div";if (!b) {
          var g = /\n{2}/g;if (g.test(v)) var d = "\x3c" + c + "\x3e",
              m = "\x3c/" + c + "\x3e",
              v = d + v.replace(g, function () {
            return m + d;
          }) + m;
        }v = v.replace(/\n/g, "\x3cbr\x3e");b || (v = v.replace(new RegExp("\x3cbr\x3e(?\x3d\x3c/" + c + "\x3e)"), function (a) {
          return CKEDITOR.tools.repeat(a, 2);
        }));v = v.replace(/^ | $/g, "\x26nbsp;");return v = v.replace(/(>|\s) /g, function (a, e) {
          return e + "\x26nbsp;";
        }).replace(/ (?=<)/g, "\x26nbsp;");
      }, getNextNumber: function () {
        var a = 0;return function () {
          return ++a;
        };
      }(), getNextId: function getNextId() {
        return "cke_" + this.getNextNumber();
      }, getUniqueId: function getUniqueId() {
        for (var a = "e", e = 0; 8 > e; e++) {
          a += Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
        }return a;
      }, override: function override(a, e) {
        var b = e(a);b.prototype = a.prototype;return b;
      }, setTimeout: function setTimeout(a, e, b, c, g) {
        g || (g = window);b || (b = g);return g.setTimeout(function () {
          c ? a.apply(b, [].concat(c)) : a.apply(b);
        }, e || 0);
      }, throttle: function throttle(a, e, b) {
        var c,
            g = 0;b = b || {};return { input: function input() {
            function d() {
              g = new Date().getTime();c = !1;e.apply(b, n);
            }var n = Array.prototype.slice.call(arguments);c && (clearTimeout(c), c = 0);var m = new Date().getTime() - g;m < a ? c = setTimeout(d, a - m) : d();
          }, reset: function reset() {
            c && (clearTimeout(c), c = g = 0);
          } };
      }, trim: function () {
        var a = /(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g;return function (e) {
          return e.replace(a, "");
        };
      }(), ltrim: function () {
        var a = /^[ \t\n\r]+/g;return function (e) {
          return e.replace(a, "");
        };
      }(), rtrim: function () {
        var a = /[ \t\n\r]+$/g;return function (e) {
          return e.replace(a, "");
        };
      }(), indexOf: function indexOf(a, e) {
        if ("function" == typeof e) for (var b = 0, c = a.length; b < c; b++) {
          if (e(a[b])) return b;
        } else {
          if (a.indexOf) return a.indexOf(e);b = 0;for (c = a.length; b < c; b++) {
            if (a[b] === e) return b;
          }
        }return -1;
      }, search: function search(a, e) {
        var b = CKEDITOR.tools.indexOf(a, e);return 0 <= b ? a[b] : null;
      }, bind: function bind(a, e) {
        return function () {
          return a.apply(e, arguments);
        };
      }, createClass: function createClass(a) {
        var e = a.$,
            b = a.base,
            c = a.privates || a._,
            g = a.proto;a = a.statics;!e && (e = function e() {
          b && this.base.apply(this, arguments);
        });if (c) var d = e,
            e = function e() {
          var a = this._ || (this._ = {}),
              e;for (e in c) {
            var b = c[e];a[e] = "function" == typeof b ? CKEDITOR.tools.bind(b, this) : b;
          }d.apply(this, arguments);
        };b && (e.prototype = this.prototypedCopy(b.prototype), e.prototype.constructor = e, e.base = b, e.baseProto = b.prototype, e.prototype.base = function () {
          this.base = b.prototype.base;b.apply(this, arguments);this.base = arguments.callee;
        });g && this.extend(e.prototype, g, !0);a && this.extend(e, a, !0);return e;
      }, addFunction: function addFunction(b, e) {
        return a.push(function () {
          return b.apply(e || this, arguments);
        }) - 1;
      }, removeFunction: function removeFunction(b) {
        a[b] = null;
      }, callFunction: function callFunction(b) {
        var e = a[b];return e && e.apply(window, Array.prototype.slice.call(arguments, 1));
      }, cssLength: function () {
        var a = /^-?\d+\.?\d*px$/,
            e;return function (b) {
          e = CKEDITOR.tools.trim(b + "") + "px";return a.test(e) ? e : b || "";
        };
      }(), convertToPx: function () {
        var a;return function (e) {
          a || (a = CKEDITOR.dom.element.createFromHtml('\x3cdiv style\x3d"position:absolute;left:-9999px;top:-9999px;margin:0px;padding:0px;border:0px;"\x3e\x3c/div\x3e', CKEDITOR.document), CKEDITOR.document.getBody().append(a));return (/%$/.test(e) ? e : (a.setStyle("width", e), a.$.clientWidth)
          );
        };
      }(), repeat: function repeat(a, e) {
        return Array(e + 1).join(a);
      }, tryThese: function tryThese() {
        for (var a, e = 0, b = arguments.length; e < b; e++) {
          var c = arguments[e];try {
            a = c();break;
          } catch (g) {}
        }return a;
      }, genKey: function genKey() {
        return Array.prototype.slice.call(arguments).join("-");
      }, defer: function defer(a) {
        return function () {
          var e = arguments,
              b = this;window.setTimeout(function () {
            a.apply(b, e);
          }, 0);
        };
      }, normalizeCssText: function normalizeCssText(a, e) {
        var b = [],
            c,
            g = CKEDITOR.tools.parseCssText(a, !0, e);for (c in g) {
          b.push(c + ":" + g[c]);
        }b.sort();return b.length ? b.join(";") + ";" : "";
      }, convertRgbToHex: function convertRgbToHex(a) {
        return a.replace(/(?:rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\))/gi, function (a, b, c, g) {
          a = [b, c, g];for (b = 0; 3 > b; b++) {
            a[b] = ("0" + parseInt(a[b], 10).toString(16)).slice(-2);
          }return "#" + a.join("");
        });
      }, normalizeHex: function normalizeHex(a) {
        return a.replace(/#(([0-9a-f]{3}){1,2})($|;|\s+)/gi, function (a, b, c, g) {
          a = b.toLowerCase();3 == a.length && (a = a.split(""), a = [a[0], a[0], a[1], a[1], a[2], a[2]].join(""));return "#" + a + g;
        });
      }, parseCssText: function parseCssText(a, e, b) {
        var c = {};b && (a = new CKEDITOR.dom.element("span").setAttribute("style", a).getAttribute("style") || "");a && (a = CKEDITOR.tools.normalizeHex(CKEDITOR.tools.convertRgbToHex(a)));if (!a || ";" == a) return c;a.replace(/&quot;/g, '"').replace(/\s*([^:;\s]+)\s*:\s*([^;]+)\s*(?=;|$)/g, function (a, b, g) {
          e && (b = b.toLowerCase(), "font-family" == b && (g = g.replace(/\s*,\s*/g, ",")), g = CKEDITOR.tools.trim(g));c[b] = g;
        });return c;
      }, writeCssText: function writeCssText(a, e) {
        var b,
            c = [];for (b in a) {
          c.push(b + ":" + a[b]);
        }e && c.sort();return c.join("; ");
      },
      objectCompare: function objectCompare(a, e, b) {
        var c;if (!a && !e) return !0;if (!a || !e) return !1;for (c in a) {
          if (a[c] != e[c]) return !1;
        }if (!b) for (c in e) {
          if (a[c] != e[c]) return !1;
        }return !0;
      }, objectKeys: function objectKeys(a) {
        var e = [],
            b;for (b in a) {
          e.push(b);
        }return e;
      }, convertArrayToObject: function convertArrayToObject(a, e) {
        var b = {};1 == arguments.length && (e = !0);for (var c = 0, g = a.length; c < g; ++c) {
          b[a[c]] = e;
        }return b;
      }, fixDomain: function fixDomain() {
        for (var a;;) {
          try {
            a = window.parent.document.domain;break;
          } catch (e) {
            a = a ? a.replace(/.+?(?:\.|$)/, "") : document.domain;if (!a) break;document.domain = a;
          }
        }return !!a;
      }, eventsBuffer: function eventsBuffer(a, e, b) {
        function c() {
          d = new Date().getTime();g = !1;b ? e.call(b) : e();
        }var g,
            d = 0;return { input: function input() {
            if (!g) {
              var e = new Date().getTime() - d;e < a ? g = setTimeout(c, a - e) : c();
            }
          }, reset: function reset() {
            g && clearTimeout(g);g = d = 0;
          } };
      }, enableHtml5Elements: function enableHtml5Elements(a, e) {
        for (var b = "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video".split(" "), c = b.length, g; c--;) {
          g = a.createElement(b[c]), e && a.appendChild(g);
        }
      }, checkIfAnyArrayItemMatches: function checkIfAnyArrayItemMatches(a, e) {
        for (var b = 0, c = a.length; b < c; ++b) {
          if (a[b].match(e)) return !0;
        }return !1;
      }, checkIfAnyObjectPropertyMatches: function checkIfAnyObjectPropertyMatches(a, e) {
        for (var b in a) {
          if (b.match(e)) return !0;
        }return !1;
      }, keystrokeToString: function keystrokeToString(a, e) {
        var b = this.keystrokeToArray(a, e);b.display = b.display.join("+");b.aria = b.aria.join("+");return b;
      }, keystrokeToArray: function keystrokeToArray(a, e) {
        var b = e & 16711680,
            c = e & 65535,
            g = CKEDITOR.env.mac,
            d = [],
            n = [];b & CKEDITOR.CTRL && (d.push(g ? "⌘" : a[17]), n.push(g ? a[224] : a[17]));
        b & CKEDITOR.ALT && (d.push(g ? "⌥" : a[18]), n.push(a[18]));b & CKEDITOR.SHIFT && (d.push(g ? "⇧" : a[16]), n.push(a[16]));c && (a[c] ? (d.push(a[c]), n.push(a[c])) : (d.push(String.fromCharCode(c)), n.push(String.fromCharCode(c))));return { display: d, aria: n };
      }, transparentImageData: "data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw\x3d\x3d", getCookie: function getCookie(a) {
        a = a.toLowerCase();for (var e = document.cookie.split(";"), b, c, g = 0; g < e.length; g++) {
          if (b = e[g].split("\x3d"), c = decodeURIComponent(CKEDITOR.tools.trim(b[0]).toLowerCase()), c === a) return decodeURIComponent(1 < b.length ? b[1] : "");
        }return null;
      }, setCookie: function setCookie(a, e) {
        document.cookie = encodeURIComponent(a) + "\x3d" + encodeURIComponent(e) + ";path\x3d/";
      }, getCsrfToken: function getCsrfToken() {
        var a = CKEDITOR.tools.getCookie("ckCsrfToken");if (!a || 40 != a.length) {
          var a = [],
              e = "";if (window.crypto && window.crypto.getRandomValues) a = new Uint8Array(40), window.crypto.getRandomValues(a);else for (var b = 0; 40 > b; b++) {
            a.push(Math.floor(256 * Math.random()));
          }for (b = 0; b < a.length; b++) {
            var c = "abcdefghijklmnopqrstuvwxyz0123456789".charAt(a[b] % 36),
                e = e + (.5 < Math.random() ? c.toUpperCase() : c);
          }a = e;CKEDITOR.tools.setCookie("ckCsrfToken", a);
        }return a;
      }, escapeCss: function escapeCss(a) {
        return a ? window.CSS && CSS.escape ? CSS.escape(a) : isNaN(parseInt(a.charAt(0), 10)) ? a : "\\3" + a.charAt(0) + " " + a.substring(1, a.length) : "";
      }, getMouseButton: function getMouseButton(a) {
        var b = (a = a.data) && a.$;return a && b ? CKEDITOR.env.ie && 9 > CKEDITOR.env.version ? 4 === b.button ? CKEDITOR.MOUSE_BUTTON_MIDDLE : 1 === b.button ? CKEDITOR.MOUSE_BUTTON_LEFT : CKEDITOR.MOUSE_BUTTON_RIGHT : b.button : !1;
      }, convertHexStringToBytes: function convertHexStringToBytes(a) {
        var b = [],
            c = a.length / 2,
            g;for (g = 0; g < c; g++) {
          b.push(parseInt(a.substr(2 * g, 2), 16));
        }return b;
      }, convertBytesToBase64: function convertBytesToBase64(a) {
        var b = "",
            c = a.length,
            g;for (g = 0; g < c; g += 3) {
          var d = a.slice(g, g + 3),
              n = d.length,
              f = [],
              m;if (3 > n) for (m = n; 3 > m; m++) {
            d[m] = 0;
          }f[0] = (d[0] & 252) >> 2;f[1] = (d[0] & 3) << 4 | d[1] >> 4;f[2] = (d[1] & 15) << 2 | (d[2] & 192) >> 6;f[3] = d[2] & 63;for (m = 0; 4 > m; m++) {
            b = m <= n ? b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(f[m]) : b + "\x3d";
          }
        }return b;
      }, style: { parse: { _colors: { aliceblue: "#F0F8FF", antiquewhite: "#FAEBD7",
            aqua: "#00FFFF", aquamarine: "#7FFFD4", azure: "#F0FFFF", beige: "#F5F5DC", bisque: "#FFE4C4", black: "#000000", blanchedalmond: "#FFEBCD", blue: "#0000FF", blueviolet: "#8A2BE2", brown: "#A52A2A", burlywood: "#DEB887", cadetblue: "#5F9EA0", chartreuse: "#7FFF00", chocolate: "#D2691E", coral: "#FF7F50", cornflowerblue: "#6495ED", cornsilk: "#FFF8DC", crimson: "#DC143C", cyan: "#00FFFF", darkblue: "#00008B", darkcyan: "#008B8B", darkgoldenrod: "#B8860B", darkgray: "#A9A9A9", darkgreen: "#006400", darkgrey: "#A9A9A9", darkkhaki: "#BDB76B", darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F", darkorange: "#FF8C00", darkorchid: "#9932CC", darkred: "#8B0000", darksalmon: "#E9967A", darkseagreen: "#8FBC8F", darkslateblue: "#483D8B", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", darkturquoise: "#00CED1", darkviolet: "#9400D3", deeppink: "#FF1493", deepskyblue: "#00BFFF", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1E90FF", firebrick: "#B22222", floralwhite: "#FFFAF0", forestgreen: "#228B22", fuchsia: "#FF00FF", gainsboro: "#DCDCDC", ghostwhite: "#F8F8FF", gold: "#FFD700", goldenrod: "#DAA520",
            gray: "#808080", green: "#008000", greenyellow: "#ADFF2F", grey: "#808080", honeydew: "#F0FFF0", hotpink: "#FF69B4", indianred: "#CD5C5C", indigo: "#4B0082", ivory: "#FFFFF0", khaki: "#F0E68C", lavender: "#E6E6FA", lavenderblush: "#FFF0F5", lawngreen: "#7CFC00", lemonchiffon: "#FFFACD", lightblue: "#ADD8E6", lightcoral: "#F08080", lightcyan: "#E0FFFF", lightgoldenrodyellow: "#FAFAD2", lightgray: "#D3D3D3", lightgreen: "#90EE90", lightgrey: "#D3D3D3", lightpink: "#FFB6C1", lightsalmon: "#FFA07A", lightseagreen: "#20B2AA", lightskyblue: "#87CEFA",
            lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#B0C4DE", lightyellow: "#FFFFE0", lime: "#00FF00", limegreen: "#32CD32", linen: "#FAF0E6", magenta: "#FF00FF", maroon: "#800000", mediumaquamarine: "#66CDAA", mediumblue: "#0000CD", mediumorchid: "#BA55D3", mediumpurple: "#9370DB", mediumseagreen: "#3CB371", mediumslateblue: "#7B68EE", mediumspringgreen: "#00FA9A", mediumturquoise: "#48D1CC", mediumvioletred: "#C71585", midnightblue: "#191970", mintcream: "#F5FFFA", mistyrose: "#FFE4E1", moccasin: "#FFE4B5", navajowhite: "#FFDEAD",
            navy: "#000080", oldlace: "#FDF5E6", olive: "#808000", olivedrab: "#6B8E23", orange: "#FFA500", orangered: "#FF4500", orchid: "#DA70D6", palegoldenrod: "#EEE8AA", palegreen: "#98FB98", paleturquoise: "#AFEEEE", palevioletred: "#DB7093", papayawhip: "#FFEFD5", peachpuff: "#FFDAB9", peru: "#CD853F", pink: "#FFC0CB", plum: "#DDA0DD", powderblue: "#B0E0E6", purple: "#800080", rebeccapurple: "#663399", red: "#FF0000", rosybrown: "#BC8F8F", royalblue: "#4169E1", saddlebrown: "#8B4513", salmon: "#FA8072", sandybrown: "#F4A460", seagreen: "#2E8B57", seashell: "#FFF5EE",
            sienna: "#A0522D", silver: "#C0C0C0", skyblue: "#87CEEB", slateblue: "#6A5ACD", slategray: "#708090", slategrey: "#708090", snow: "#FFFAFA", springgreen: "#00FF7F", steelblue: "#4682B4", tan: "#D2B48C", teal: "#008080", thistle: "#D8BFD8", tomato: "#FF6347", turquoise: "#40E0D0", violet: "#EE82EE", wheat: "#F5DEB3", white: "#FFFFFF", whitesmoke: "#F5F5F5", yellow: "#FFFF00", yellowgreen: "#9ACD32" }, _borderStyle: "none hidden dotted dashed solid double groove ridge inset outset".split(" "), _widthRegExp: /^(thin|medium|thick|[\+-]?\d+(\.\d+)?[a-z%]+|[\+-]?0+(\.0+)?|\.\d+[a-z%]+)$/,
          _rgbaRegExp: /rgba?\(\s*\d+%?\s*,\s*\d+%?\s*,\s*\d+%?\s*(?:,\s*[0-9.]+\s*)?\)/gi, _hslaRegExp: /hsla?\(\s*[0-9.]+\s*,\s*\d+%\s*,\s*\d+%\s*(?:,\s*[0-9.]+\s*)?\)/gi, background: function background(a) {
            var b = {},
                c = this._findColor(a);c.length && (b.color = c[0], CKEDITOR.tools.array.forEach(c, function (b) {
              a = a.replace(b, "");
            }));if (a = CKEDITOR.tools.trim(a)) b.unprocessed = a;return b;
          }, margin: function margin(a) {
            function b(a) {
              c.top = g[a[0]];c.right = g[a[1]];c.bottom = g[a[2]];c.left = g[a[3]];
            }var c = {},
                g = a.match(/(?:\-?[\.\d]+(?:%|\w*)|auto|inherit|initial|unset)/g) || ["0px"];switch (g.length) {case 1:
                b([0, 0, 0, 0]);break;case 2:
                b([0, 1, 0, 1]);break;case 3:
                b([0, 1, 2, 1]);break;case 4:
                b([0, 1, 2, 3]);}return c;
          }, border: function border(a) {
            var b = {},
                c = a.split(/\s+/g);a = CKEDITOR.tools.style.parse._findColor(a);a.length && (b.color = a[0]);CKEDITOR.tools.array.forEach(c, function (a) {
              b.style || -1 === CKEDITOR.tools.indexOf(CKEDITOR.tools.style.parse._borderStyle, a) ? !b.width && CKEDITOR.tools.style.parse._widthRegExp.test(a) && (b.width = a) : b.style = a;
            });return b;
          }, _findColor: function _findColor(a) {
            var b = [],
                c = CKEDITOR.tools.array,
                b = b.concat(a.match(this._rgbaRegExp) || []),
                b = b.concat(a.match(this._hslaRegExp) || []);return b = b.concat(c.filter(a.split(/\s+/), function (a) {
              return a.match(/^\#[a-f0-9]{3}(?:[a-f0-9]{3})?$/gi) ? !0 : a.toLowerCase() in CKEDITOR.tools.style.parse._colors;
            }));
          } } }, array: { filter: function filter(a, b, c) {
          var g = [];this.forEach(a, function (d, n) {
            b.call(c, d, n, a) && g.push(d);
          });return g;
        }, forEach: function forEach(a, b, c) {
          var g = a.length,
              d;for (d = 0; d < g; d++) {
            b.call(c, a[d], d, a);
          }
        }, map: function map(a, b, c) {
          for (var g = [], d = 0; d < a.length; d++) {
            g.push(b.call(c, a[d], d, a));
          }return g;
        }, reduce: function reduce(a, b, c, g) {
          for (var d = 0; d < a.length; d++) {
            c = b.call(g, c, a[d], d, a);
          }return c;
        }, every: function every(a, b, c) {
          if (!a.length) return !0;b = this.filter(a, b, c);return a.length === b.length;
        } }, object: { findKey: function findKey(a, b) {
          if ("object" !== (typeof a === "undefined" ? "undefined" : _typeof(a))) return null;for (var c in a) {
            if (a[c] === b) return c;
          }return null;
        }, merge: function merge(a, b) {
          var c = CKEDITOR.tools,
              g = c.clone(a),
              d = c.clone(b);c.array.forEach(c.objectKeys(d), function (a) {
            g[a] = "object" === _typeof(d[a]) && "object" === _typeof(g[a]) ? c.object.merge(g[a], d[a]) : d[a];
          });return g;
        } }, getAbsoluteRectPosition: function getAbsoluteRectPosition(a, b) {
        function c(a) {
          if (a) {
            var b = a.getClientRect();g.top += b.top;g.left += b.left;"x" in g && "y" in g && (g.x += b.x, g.y += b.y);c(a.getWindow().getFrame());
          }
        }var g = CKEDITOR.tools.copy(b);c(a.getFrame());var d = CKEDITOR.document.getWindow().getScrollPosition();g.top += d.y;g.left += d.x;"x" in g && "y" in g && (g.y += d.y, g.x += d.x);g.right = g.left + g.width;g.bottom = g.top + g.height;return g;
      } };CKEDITOR.tools.array.indexOf = CKEDITOR.tools.indexOf;CKEDITOR.tools.array.isArray = CKEDITOR.tools.isArray;
    CKEDITOR.MOUSE_BUTTON_LEFT = 0;CKEDITOR.MOUSE_BUTTON_MIDDLE = 1;CKEDITOR.MOUSE_BUTTON_RIGHT = 2;
  })();
  CKEDITOR.dtd = function () {
    var a = CKEDITOR.tools.extend,
        d = function d(a, b) {
      for (var c = CKEDITOR.tools.clone(a), g = 1; g < arguments.length; g++) {
        b = arguments[g];for (var d in b) {
          delete c[d];
        }
      }return c;
    },
        b = {},
        c = {},
        f = { address: 1, article: 1, aside: 1, blockquote: 1, details: 1, div: 1, dl: 1, fieldset: 1, figure: 1, footer: 1, form: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, header: 1, hgroup: 1, hr: 1, main: 1, menu: 1, nav: 1, ol: 1, p: 1, pre: 1, section: 1, table: 1, ul: 1 },
        h = { command: 1, link: 1, meta: 1, noscript: 1, script: 1, style: 1 },
        k = {},
        g = { "#": 1 },
        n = { center: 1, dir: 1, noframes: 1 };
    a(b, { a: 1, abbr: 1, area: 1, audio: 1, b: 1, bdi: 1, bdo: 1, br: 1, button: 1, canvas: 1, cite: 1, code: 1, command: 1, datalist: 1, del: 1, dfn: 1, em: 1, embed: 1, i: 1, iframe: 1, img: 1, input: 1, ins: 1, kbd: 1, keygen: 1, label: 1, map: 1, mark: 1, meter: 1, noscript: 1, object: 1, output: 1, progress: 1, q: 1, ruby: 1, s: 1, samp: 1, script: 1, select: 1, small: 1, span: 1, strong: 1, sub: 1, sup: 1, textarea: 1, time: 1, u: 1, "var": 1, video: 1, wbr: 1 }, g, { acronym: 1, applet: 1, basefont: 1, big: 1, font: 1, isindex: 1, strike: 1, style: 1, tt: 1 });a(c, f, b, n);d = { a: d(b, { a: 1, button: 1 }), abbr: b, address: c,
      area: k, article: c, aside: c, audio: a({ source: 1, track: 1 }, c), b: b, base: k, bdi: b, bdo: b, blockquote: c, body: c, br: k, button: d(b, { a: 1, button: 1 }), canvas: b, caption: c, cite: b, code: b, col: k, colgroup: { col: 1 }, command: k, datalist: a({ option: 1 }, b), dd: c, del: b, details: a({ summary: 1 }, c), dfn: b, div: c, dl: { dt: 1, dd: 1 }, dt: c, em: b, embed: k, fieldset: a({ legend: 1 }, c), figcaption: c, figure: a({ figcaption: 1 }, c), footer: c, form: c, h1: b, h2: b, h3: b, h4: b, h5: b, h6: b, head: a({ title: 1, base: 1 }, h), header: c, hgroup: { h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1 }, hr: k, html: a({ head: 1,
        body: 1 }, c, h), i: b, iframe: g, img: k, input: k, ins: b, kbd: b, keygen: k, label: b, legend: b, li: c, link: k, main: c, map: c, mark: b, menu: a({ li: 1 }, c), meta: k, meter: d(b, { meter: 1 }), nav: c, noscript: a({ link: 1, meta: 1, style: 1 }, b), object: a({ param: 1 }, b), ol: { li: 1 }, optgroup: { option: 1 }, option: g, output: b, p: b, param: k, pre: b, progress: d(b, { progress: 1 }), q: b, rp: b, rt: b, ruby: a({ rp: 1, rt: 1 }, b), s: b, samp: b, script: g, section: c, select: { optgroup: 1, option: 1 }, small: b, source: k, span: b, strong: b, style: g, sub: b, summary: a({ h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1 }, b),
      sup: b, table: { caption: 1, colgroup: 1, thead: 1, tfoot: 1, tbody: 1, tr: 1 }, tbody: { tr: 1 }, td: c, textarea: g, tfoot: { tr: 1 }, th: c, thead: { tr: 1 }, time: d(b, { time: 1 }), title: g, tr: { th: 1, td: 1 }, track: k, u: b, ul: { li: 1 }, "var": b, video: a({ source: 1, track: 1 }, c), wbr: k, acronym: b, applet: a({ param: 1 }, c), basefont: k, big: b, center: c, dialog: k, dir: { li: 1 }, font: b, isindex: k, noframes: c, strike: b, tt: b };a(d, { $block: a({ audio: 1, dd: 1, dt: 1, figcaption: 1, li: 1, video: 1 }, f, n), $blockLimit: { article: 1, aside: 1, audio: 1, body: 1, caption: 1, details: 1, dir: 1, div: 1, dl: 1,
        fieldset: 1, figcaption: 1, figure: 1, footer: 1, form: 1, header: 1, hgroup: 1, main: 1, menu: 1, nav: 1, ol: 1, section: 1, table: 1, td: 1, th: 1, tr: 1, ul: 1, video: 1 }, $cdata: { script: 1, style: 1 }, $editable: { address: 1, article: 1, aside: 1, blockquote: 1, body: 1, details: 1, div: 1, fieldset: 1, figcaption: 1, footer: 1, form: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, header: 1, hgroup: 1, main: 1, nav: 1, p: 1, pre: 1, section: 1 }, $empty: { area: 1, base: 1, basefont: 1, br: 1, col: 1, command: 1, dialog: 1, embed: 1, hr: 1, img: 1, input: 1, isindex: 1, keygen: 1, link: 1, meta: 1, param: 1, source: 1,
        track: 1, wbr: 1 }, $inline: b, $list: { dl: 1, ol: 1, ul: 1 }, $listItem: { dd: 1, dt: 1, li: 1 }, $nonBodyContent: a({ body: 1, head: 1, html: 1 }, d.head), $nonEditable: { applet: 1, audio: 1, button: 1, embed: 1, iframe: 1, map: 1, object: 1, option: 1, param: 1, script: 1, textarea: 1, video: 1 }, $object: { applet: 1, audio: 1, button: 1, hr: 1, iframe: 1, img: 1, input: 1, object: 1, select: 1, table: 1, textarea: 1, video: 1 }, $removeEmpty: { abbr: 1, acronym: 1, b: 1, bdi: 1, bdo: 1, big: 1, cite: 1, code: 1, del: 1, dfn: 1, em: 1, font: 1, i: 1, ins: 1, label: 1, kbd: 1, mark: 1, meter: 1, output: 1, q: 1, ruby: 1,
        s: 1, samp: 1, small: 1, span: 1, strike: 1, strong: 1, sub: 1, sup: 1, time: 1, tt: 1, u: 1, "var": 1 }, $tabIndex: { a: 1, area: 1, button: 1, input: 1, object: 1, select: 1, textarea: 1 }, $tableContent: { caption: 1, col: 1, colgroup: 1, tbody: 1, td: 1, tfoot: 1, th: 1, thead: 1, tr: 1 }, $transparent: { a: 1, audio: 1, canvas: 1, del: 1, ins: 1, map: 1, noscript: 1, object: 1, video: 1 }, $intermediate: { caption: 1, colgroup: 1, dd: 1, dt: 1, figcaption: 1, legend: 1, li: 1, optgroup: 1, option: 1, rp: 1, rt: 1, summary: 1, tbody: 1, td: 1, tfoot: 1, th: 1, thead: 1, tr: 1 } });return d;
  }();
  CKEDITOR.dom.event = function (a) {
    this.$ = a;
  };
  CKEDITOR.dom.event.prototype = { getKey: function getKey() {
      return this.$.keyCode || this.$.which;
    }, getKeystroke: function getKeystroke() {
      var a = this.getKey();if (this.$.ctrlKey || this.$.metaKey) a += CKEDITOR.CTRL;this.$.shiftKey && (a += CKEDITOR.SHIFT);this.$.altKey && (a += CKEDITOR.ALT);return a;
    }, preventDefault: function preventDefault(a) {
      var d = this.$;d.preventDefault ? d.preventDefault() : d.returnValue = !1;a && this.stopPropagation();
    }, stopPropagation: function stopPropagation() {
      var a = this.$;a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
    }, getTarget: function getTarget() {
      var a = this.$.target || this.$.srcElement;return a ? new CKEDITOR.dom.node(a) : null;
    }, getPhase: function getPhase() {
      return this.$.eventPhase || 2;
    }, getPageOffset: function getPageOffset() {
      var a = this.getTarget().getDocument().$;return { x: this.$.pageX || this.$.clientX + (a.documentElement.scrollLeft || a.body.scrollLeft), y: this.$.pageY || this.$.clientY + (a.documentElement.scrollTop || a.body.scrollTop) };
    } };CKEDITOR.CTRL = 1114112;CKEDITOR.SHIFT = 2228224;CKEDITOR.ALT = 4456448;CKEDITOR.EVENT_PHASE_CAPTURING = 1;CKEDITOR.EVENT_PHASE_AT_TARGET = 2;
  CKEDITOR.EVENT_PHASE_BUBBLING = 3;CKEDITOR.dom.domObject = function (a) {
    a && (this.$ = a);
  };
  CKEDITOR.dom.domObject.prototype = function () {
    var a = function a(_a, b) {
      return function (c) {
        "undefined" != typeof CKEDITOR && _a.fire(b, new CKEDITOR.dom.event(c));
      };
    };return { getPrivate: function getPrivate() {
        var a;(a = this.getCustomData("_")) || this.setCustomData("_", a = {});return a;
      }, on: function on(d) {
        var b = this.getCustomData("_cke_nativeListeners");b || (b = {}, this.setCustomData("_cke_nativeListeners", b));b[d] || (b = b[d] = a(this, d), this.$.addEventListener ? this.$.addEventListener(d, b, !!CKEDITOR.event.useCapture) : this.$.attachEvent && this.$.attachEvent("on" + d, b));return CKEDITOR.event.prototype.on.apply(this, arguments);
      }, removeListener: function removeListener(a) {
        CKEDITOR.event.prototype.removeListener.apply(this, arguments);if (!this.hasListeners(a)) {
          var b = this.getCustomData("_cke_nativeListeners"),
              c = b && b[a];c && (this.$.removeEventListener ? this.$.removeEventListener(a, c, !1) : this.$.detachEvent && this.$.detachEvent("on" + a, c), delete b[a]);
        }
      }, removeAllListeners: function removeAllListeners() {
        var a = this.getCustomData("_cke_nativeListeners"),
            b;for (b in a) {
          var c = a[b];this.$.detachEvent ? this.$.detachEvent("on" + b, c) : this.$.removeEventListener && this.$.removeEventListener(b, c, !1);delete a[b];
        }CKEDITOR.event.prototype.removeAllListeners.call(this);
      } };
  }();
  (function (a) {
    var d = {};CKEDITOR.on("reset", function () {
      d = {};
    });a.equals = function (a) {
      try {
        return a && a.$ === this.$;
      } catch (c) {
        return !1;
      }
    };a.setCustomData = function (a, c) {
      var f = this.getUniqueId();(d[f] || (d[f] = {}))[a] = c;return this;
    };a.getCustomData = function (a) {
      var c = this.$["data-cke-expando"];return (c = c && d[c]) && a in c ? c[a] : null;
    };a.removeCustomData = function (a) {
      var c = this.$["data-cke-expando"],
          c = c && d[c],
          f,
          h;c && (f = c[a], h = a in c, delete c[a]);return h ? f : null;
    };a.clearCustomData = function () {
      this.removeAllListeners();var a = this.$["data-cke-expando"];a && delete d[a];
    };a.getUniqueId = function () {
      return this.$["data-cke-expando"] || (this.$["data-cke-expando"] = CKEDITOR.tools.getNextNumber());
    };CKEDITOR.event.implementOn(a);
  })(CKEDITOR.dom.domObject.prototype);
  CKEDITOR.dom.node = function (a) {
    return a ? new CKEDITOR.dom[a.nodeType == CKEDITOR.NODE_DOCUMENT ? "document" : a.nodeType == CKEDITOR.NODE_ELEMENT ? "element" : a.nodeType == CKEDITOR.NODE_TEXT ? "text" : a.nodeType == CKEDITOR.NODE_COMMENT ? "comment" : a.nodeType == CKEDITOR.NODE_DOCUMENT_FRAGMENT ? "documentFragment" : "domObject"](a) : this;
  };CKEDITOR.dom.node.prototype = new CKEDITOR.dom.domObject();CKEDITOR.NODE_ELEMENT = 1;CKEDITOR.NODE_DOCUMENT = 9;CKEDITOR.NODE_TEXT = 3;CKEDITOR.NODE_COMMENT = 8;CKEDITOR.NODE_DOCUMENT_FRAGMENT = 11;
  CKEDITOR.POSITION_IDENTICAL = 0;CKEDITOR.POSITION_DISCONNECTED = 1;CKEDITOR.POSITION_FOLLOWING = 2;CKEDITOR.POSITION_PRECEDING = 4;CKEDITOR.POSITION_IS_CONTAINED = 8;CKEDITOR.POSITION_CONTAINS = 16;
  CKEDITOR.tools.extend(CKEDITOR.dom.node.prototype, { appendTo: function appendTo(a, d) {
      a.append(this, d);return a;
    }, clone: function clone(a, d) {
      function b(c) {
        c["data-cke-expando"] && (c["data-cke-expando"] = !1);if (c.nodeType == CKEDITOR.NODE_ELEMENT || c.nodeType == CKEDITOR.NODE_DOCUMENT_FRAGMENT) if (d || c.nodeType != CKEDITOR.NODE_ELEMENT || c.removeAttribute("id", !1), a) {
          c = c.childNodes;for (var f = 0; f < c.length; f++) {
            b(c[f]);
          }
        }
      }function c(b) {
        if (b.type == CKEDITOR.NODE_ELEMENT || b.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT) {
          if (b.type != CKEDITOR.NODE_DOCUMENT_FRAGMENT) {
            var d = b.getName();":" == d[0] && b.renameNode(d.substring(1));
          }if (a) for (d = 0; d < b.getChildCount(); d++) {
            c(b.getChild(d));
          }
        }
      }var f = this.$.cloneNode(a);b(f);f = new CKEDITOR.dom.node(f);CKEDITOR.env.ie && 9 > CKEDITOR.env.version && (this.type == CKEDITOR.NODE_ELEMENT || this.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT) && c(f);return f;
    }, hasPrevious: function hasPrevious() {
      return !!this.$.previousSibling;
    }, hasNext: function hasNext() {
      return !!this.$.nextSibling;
    }, insertAfter: function insertAfter(a) {
      a.$.parentNode.insertBefore(this.$, a.$.nextSibling);return a;
    }, insertBefore: function insertBefore(a) {
      a.$.parentNode.insertBefore(this.$, a.$);return a;
    }, insertBeforeMe: function insertBeforeMe(a) {
      this.$.parentNode.insertBefore(a.$, this.$);return a;
    }, getAddress: function getAddress(a) {
      for (var d = [], b = this.getDocument().$.documentElement, c = this.$; c && c != b;) {
        var f = c.parentNode;f && d.unshift(this.getIndex.call({ $: c }, a));c = f;
      }return d;
    }, getDocument: function getDocument() {
      return new CKEDITOR.dom.document(this.$.ownerDocument || this.$.parentNode.ownerDocument);
    }, getIndex: function getIndex(a) {
      function d(a, c) {
        var n = c ? a.nextSibling : a.previousSibling;return n && n.nodeType == CKEDITOR.NODE_TEXT ? b(n) ? d(n, c) : n : null;
      }function b(a) {
        return !a.nodeValue || a.nodeValue == CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE;
      }var c = this.$,
          f = -1,
          h;if (!this.$.parentNode || a && c.nodeType == CKEDITOR.NODE_TEXT && b(c) && !d(c) && !d(c, !0)) return -1;do {
        a && c != this.$ && c.nodeType == CKEDITOR.NODE_TEXT && (h || b(c)) || (f++, h = c.nodeType == CKEDITOR.NODE_TEXT);
      } while (c = c.previousSibling);return f;
    }, getNextSourceNode: function getNextSourceNode(a, d, b) {
      if (b && !b.call) {
        var c = b;b = function b(a) {
          return !a.equals(c);
        };
      }a = !a && this.getFirst && this.getFirst();var f;if (!a) {
        if (this.type == CKEDITOR.NODE_ELEMENT && b && !1 === b(this, !0)) return null;a = this.getNext();
      }for (; !a && (f = (f || this).getParent());) {
        if (b && !1 === b(f, !0)) return null;a = f.getNext();
      }return !a || b && !1 === b(a) ? null : d && d != a.type ? a.getNextSourceNode(!1, d, b) : a;
    }, getPreviousSourceNode: function getPreviousSourceNode(a, d, b) {
      if (b && !b.call) {
        var c = b;b = function b(a) {
          return !a.equals(c);
        };
      }a = !a && this.getLast && this.getLast();var f;if (!a) {
        if (this.type == CKEDITOR.NODE_ELEMENT && b && !1 === b(this, !0)) return null;a = this.getPrevious();
      }for (; !a && (f = (f || this).getParent());) {
        if (b && !1 === b(f, !0)) return null;a = f.getPrevious();
      }return !a || b && !1 === b(a) ? null : d && a.type != d ? a.getPreviousSourceNode(!1, d, b) : a;
    }, getPrevious: function getPrevious(a) {
      var d = this.$,
          b;do {
        b = (d = d.previousSibling) && 10 != d.nodeType && new CKEDITOR.dom.node(d);
      } while (b && a && !a(b));return b;
    }, getNext: function getNext(a) {
      var d = this.$,
          b;do {
        b = (d = d.nextSibling) && new CKEDITOR.dom.node(d);
      } while (b && a && !a(b));return b;
    }, getParent: function getParent(a) {
      var d = this.$.parentNode;return d && (d.nodeType == CKEDITOR.NODE_ELEMENT || a && d.nodeType == CKEDITOR.NODE_DOCUMENT_FRAGMENT) ? new CKEDITOR.dom.node(d) : null;
    }, getParents: function getParents(a) {
      var d = this,
          b = [];do {
        b[a ? "push" : "unshift"](d);
      } while (d = d.getParent());return b;
    }, getCommonAncestor: function getCommonAncestor(a) {
      if (a.equals(this)) return this;if (a.contains && a.contains(this)) return a;var d = this.contains ? this : this.getParent();do {
        if (d.contains(a)) return d;
      } while (d = d.getParent());return null;
    }, getPosition: function getPosition(a) {
      var d = this.$,
          b = a.$;if (d.compareDocumentPosition) return d.compareDocumentPosition(b);if (d == b) return CKEDITOR.POSITION_IDENTICAL;if (this.type == CKEDITOR.NODE_ELEMENT && a.type == CKEDITOR.NODE_ELEMENT) {
        if (d.contains) {
          if (d.contains(b)) return CKEDITOR.POSITION_CONTAINS + CKEDITOR.POSITION_PRECEDING;if (b.contains(d)) return CKEDITOR.POSITION_IS_CONTAINED + CKEDITOR.POSITION_FOLLOWING;
        }if ("sourceIndex" in d) return 0 > d.sourceIndex || 0 > b.sourceIndex ? CKEDITOR.POSITION_DISCONNECTED : d.sourceIndex < b.sourceIndex ? CKEDITOR.POSITION_PRECEDING : CKEDITOR.POSITION_FOLLOWING;
      }d = this.getAddress();a = a.getAddress();for (var b = Math.min(d.length, a.length), c = 0; c < b; c++) {
        if (d[c] != a[c]) return d[c] < a[c] ? CKEDITOR.POSITION_PRECEDING : CKEDITOR.POSITION_FOLLOWING;
      }return d.length < a.length ? CKEDITOR.POSITION_CONTAINS + CKEDITOR.POSITION_PRECEDING : CKEDITOR.POSITION_IS_CONTAINED + CKEDITOR.POSITION_FOLLOWING;
    }, getAscendant: function getAscendant(a, d) {
      var b = this.$,
          c,
          f;d || (b = b.parentNode);"function" == typeof a ? (f = !0, c = a) : (f = !1, c = function c(b) {
        b = "string" == typeof b.nodeName ? b.nodeName.toLowerCase() : "";return "string" == typeof a ? b == a : b in a;
      });for (; b;) {
        if (c(f ? new CKEDITOR.dom.node(b) : b)) return new CKEDITOR.dom.node(b);
        try {
          b = b.parentNode;
        } catch (h) {
          b = null;
        }
      }return null;
    }, hasAscendant: function hasAscendant(a, d) {
      var b = this.$;d || (b = b.parentNode);for (; b;) {
        if (b.nodeName && b.nodeName.toLowerCase() == a) return !0;b = b.parentNode;
      }return !1;
    }, move: function move(a, d) {
      a.append(this.remove(), d);
    }, remove: function remove(a) {
      var d = this.$,
          b = d.parentNode;if (b) {
        if (a) for (; a = d.firstChild;) {
          b.insertBefore(d.removeChild(a), d);
        }b.removeChild(d);
      }return this;
    }, replace: function replace(a) {
      this.insertBefore(a);a.remove();
    }, trim: function trim() {
      this.ltrim();this.rtrim();
    }, ltrim: function ltrim() {
      for (var a; this.getFirst && (a = this.getFirst());) {
        if (a.type == CKEDITOR.NODE_TEXT) {
          var d = CKEDITOR.tools.ltrim(a.getText()),
              b = a.getLength();if (d) d.length < b && (a.split(b - d.length), this.$.removeChild(this.$.firstChild));else {
            a.remove();continue;
          }
        }break;
      }
    }, rtrim: function rtrim() {
      for (var a; this.getLast && (a = this.getLast());) {
        if (a.type == CKEDITOR.NODE_TEXT) {
          var d = CKEDITOR.tools.rtrim(a.getText()),
              b = a.getLength();if (d) d.length < b && (a.split(d.length), this.$.lastChild.parentNode.removeChild(this.$.lastChild));else {
            a.remove();continue;
          }
        }break;
      }CKEDITOR.env.needsBrFiller && (a = this.$.lastChild) && 1 == a.type && "br" == a.nodeName.toLowerCase() && a.parentNode.removeChild(a);
    }, isReadOnly: function isReadOnly(a) {
      var d = this;this.type != CKEDITOR.NODE_ELEMENT && (d = this.getParent());CKEDITOR.env.edge && d && d.is("textarea", "input") && (a = !0);if (!a && d && "undefined" != typeof d.$.isContentEditable) return !(d.$.isContentEditable || d.data("cke-editable"));for (; d;) {
        if (d.data("cke-editable")) return !1;if (d.hasAttribute("contenteditable")) return "false" == d.getAttribute("contenteditable");d = d.getParent();
      }return !0;
    } });
  CKEDITOR.dom.window = function (a) {
    CKEDITOR.dom.domObject.call(this, a);
  };CKEDITOR.dom.window.prototype = new CKEDITOR.dom.domObject();
  CKEDITOR.tools.extend(CKEDITOR.dom.window.prototype, { focus: function focus() {
      this.$.focus();
    }, getViewPaneSize: function getViewPaneSize() {
      var a = this.$.document,
          d = "CSS1Compat" == a.compatMode;return { width: (d ? a.documentElement.clientWidth : a.body.clientWidth) || 0, height: (d ? a.documentElement.clientHeight : a.body.clientHeight) || 0 };
    }, getScrollPosition: function getScrollPosition() {
      var a = this.$;if ("pageXOffset" in a) return { x: a.pageXOffset || 0, y: a.pageYOffset || 0 };a = a.document;return { x: a.documentElement.scrollLeft || a.body.scrollLeft || 0, y: a.documentElement.scrollTop || a.body.scrollTop || 0 };
    }, getFrame: function getFrame() {
      var a = this.$.frameElement;return a ? new CKEDITOR.dom.element.get(a) : null;
    } });CKEDITOR.dom.document = function (a) {
    CKEDITOR.dom.domObject.call(this, a);
  };CKEDITOR.dom.document.prototype = new CKEDITOR.dom.domObject();
  CKEDITOR.tools.extend(CKEDITOR.dom.document.prototype, { type: CKEDITOR.NODE_DOCUMENT, appendStyleSheet: function appendStyleSheet(a) {
      if (this.$.createStyleSheet) this.$.createStyleSheet(a);else {
        var d = new CKEDITOR.dom.element("link");d.setAttributes({ rel: "stylesheet", type: "text/css", href: a });this.getHead().append(d);
      }
    }, appendStyleText: function appendStyleText(a) {
      if (this.$.createStyleSheet) {
        var d = this.$.createStyleSheet("");d.cssText = a;
      } else {
        var b = new CKEDITOR.dom.element("style", this);b.append(new CKEDITOR.dom.text(a, this));this.getHead().append(b);
      }return d || b.$.sheet;
    }, createElement: function createElement(a, d) {
      var b = new CKEDITOR.dom.element(a, this);d && (d.attributes && b.setAttributes(d.attributes), d.styles && b.setStyles(d.styles));return b;
    }, createText: function createText(a) {
      return new CKEDITOR.dom.text(a, this);
    }, focus: function focus() {
      this.getWindow().focus();
    }, getActive: function getActive() {
      var a;try {
        a = this.$.activeElement;
      } catch (d) {
        return null;
      }return new CKEDITOR.dom.element(a);
    }, getById: function getById(a) {
      return (a = this.$.getElementById(a)) ? new CKEDITOR.dom.element(a) : null;
    }, getByAddress: function getByAddress(a, d) {
      for (var b = this.$.documentElement, c = 0; b && c < a.length; c++) {
        var f = a[c];if (d) for (var h = -1, k = 0; k < b.childNodes.length; k++) {
          var g = b.childNodes[k];if (!0 !== d || 3 != g.nodeType || !g.previousSibling || 3 != g.previousSibling.nodeType) if (h++, h == f) {
            b = g;break;
          }
        } else b = b.childNodes[f];
      }return b ? new CKEDITOR.dom.node(b) : null;
    }, getElementsByTag: function getElementsByTag(a, d) {
      CKEDITOR.env.ie && 8 >= document.documentMode || !d || (a = d + ":" + a);return new CKEDITOR.dom.nodeList(this.$.getElementsByTagName(a));
    }, getHead: function getHead() {
      var a = this.$.getElementsByTagName("head")[0];
      return a = a ? new CKEDITOR.dom.element(a) : this.getDocumentElement().append(new CKEDITOR.dom.element("head"), !0);
    }, getBody: function getBody() {
      return new CKEDITOR.dom.element(this.$.body);
    }, getDocumentElement: function getDocumentElement() {
      return new CKEDITOR.dom.element(this.$.documentElement);
    }, getWindow: function getWindow() {
      return new CKEDITOR.dom.window(this.$.parentWindow || this.$.defaultView);
    }, write: function write(a) {
      this.$.open("text/html", "replace");CKEDITOR.env.ie && (a = a.replace(/(?:^\s*<!DOCTYPE[^>]*?>)|^/i, '$\x26\n\x3cscript data-cke-temp\x3d"1"\x3e(' + CKEDITOR.tools.fixDomain + ")();\x3c/script\x3e"));this.$.write(a);this.$.close();
    }, find: function find(a) {
      return new CKEDITOR.dom.nodeList(this.$.querySelectorAll(a));
    }, findOne: function findOne(a) {
      return (a = this.$.querySelector(a)) ? new CKEDITOR.dom.element(a) : null;
    }, _getHtml5ShivFrag: function _getHtml5ShivFrag() {
      var a = this.getCustomData("html5ShivFrag");a || (a = this.$.createDocumentFragment(), CKEDITOR.tools.enableHtml5Elements(a, !0), this.setCustomData("html5ShivFrag", a));return a;
    } });CKEDITOR.dom.nodeList = function (a) {
    this.$ = a;
  };
  CKEDITOR.dom.nodeList.prototype = { count: function count() {
      return this.$.length;
    }, getItem: function getItem(a) {
      return 0 > a || a >= this.$.length ? null : (a = this.$[a]) ? new CKEDITOR.dom.node(a) : null;
    }, toArray: function toArray() {
      return CKEDITOR.tools.array.map(this.$, function (a) {
        return new CKEDITOR.dom.node(a);
      });
    } };CKEDITOR.dom.element = function (a, d) {
    "string" == typeof a && (a = (d ? d.$ : document).createElement(a));CKEDITOR.dom.domObject.call(this, a);
  };
  CKEDITOR.dom.element.get = function (a) {
    return (a = "string" == typeof a ? document.getElementById(a) || document.getElementsByName(a)[0] : a) && (a.$ ? a : new CKEDITOR.dom.element(a));
  };CKEDITOR.dom.element.prototype = new CKEDITOR.dom.node();CKEDITOR.dom.element.createFromHtml = function (a, d) {
    var b = new CKEDITOR.dom.element("div", d);b.setHtml(a);return b.getFirst().remove();
  };
  CKEDITOR.dom.element.setMarker = function (a, d, b, c) {
    var f = d.getCustomData("list_marker_id") || d.setCustomData("list_marker_id", CKEDITOR.tools.getNextNumber()).getCustomData("list_marker_id"),
        h = d.getCustomData("list_marker_names") || d.setCustomData("list_marker_names", {}).getCustomData("list_marker_names");a[f] = d;h[b] = 1;return d.setCustomData(b, c);
  };CKEDITOR.dom.element.clearAllMarkers = function (a) {
    for (var d in a) {
      CKEDITOR.dom.element.clearMarkers(a, a[d], 1);
    }
  };
  CKEDITOR.dom.element.clearMarkers = function (a, d, b) {
    var c = d.getCustomData("list_marker_names"),
        f = d.getCustomData("list_marker_id"),
        h;for (h in c) {
      d.removeCustomData(h);
    }d.removeCustomData("list_marker_names");b && (d.removeCustomData("list_marker_id"), delete a[f]);
  };
  (function () {
    function a(a, b) {
      return -1 < (" " + a + " ").replace(h, " ").indexOf(" " + b + " ");
    }function d(a) {
      var b = !0;a.$.id || (a.$.id = "cke_tmp_" + CKEDITOR.tools.getNextNumber(), b = !1);return function () {
        b || a.removeAttribute("id");
      };
    }function b(a, b) {
      var c = CKEDITOR.tools.escapeCss(a.$.id);return "#" + c + " " + b.split(/,\s*/).join(", #" + c + " ");
    }function c(a) {
      for (var b = 0, c = 0, e = k[a].length; c < e; c++) {
        b += parseFloat(this.getComputedStyle(k[a][c]) || 0, 10) || 0;
      }return b;
    }var f = document.createElement("_").classList,
        f = "undefined" !== typeof f && null !== String(f.add).match(/\[Native code\]/gi),
        h = /[\n\t\r]/g;CKEDITOR.tools.extend(CKEDITOR.dom.element.prototype, { type: CKEDITOR.NODE_ELEMENT, addClass: f ? function (a) {
        this.$.classList.add(a);return this;
      } : function (b) {
        var c = this.$.className;c && (a(c, b) || (c += " " + b));this.$.className = c || b;return this;
      }, removeClass: f ? function (a) {
        var b = this.$;b.classList.remove(a);b.className || b.removeAttribute("class");return this;
      } : function (b) {
        var c = this.getAttribute("class");c && a(c, b) && ((c = c.replace(new RegExp("(?:^|\\s+)" + b + "(?\x3d\\s|$)"), "").replace(/^\s+/, "")) ? this.setAttribute("class", c) : this.removeAttribute("class"));return this;
      }, hasClass: function hasClass(b) {
        return a(this.$.className, b);
      }, append: function append(a, b) {
        "string" == typeof a && (a = this.getDocument().createElement(a));b ? this.$.insertBefore(a.$, this.$.firstChild) : this.$.appendChild(a.$);return a;
      }, appendHtml: function appendHtml(a) {
        if (this.$.childNodes.length) {
          var b = new CKEDITOR.dom.element("div", this.getDocument());b.setHtml(a);b.moveChildren(this);
        } else this.setHtml(a);
      }, appendText: function appendText(a) {
        null != this.$.text && CKEDITOR.env.ie && 9 > CKEDITOR.env.version ? this.$.text += a : this.append(new CKEDITOR.dom.text(a));
      }, appendBogus: function appendBogus(a) {
        if (a || CKEDITOR.env.needsBrFiller) {
          for (a = this.getLast(); a && a.type == CKEDITOR.NODE_TEXT && !CKEDITOR.tools.rtrim(a.getText());) {
            a = a.getPrevious();
          }a && a.is && a.is("br") || (a = this.getDocument().createElement("br"), CKEDITOR.env.gecko && a.setAttribute("type", "_moz"), this.append(a));
        }
      }, breakParent: function breakParent(a, b) {
        var c = new CKEDITOR.dom.range(this.getDocument());c.setStartAfter(this);c.setEndAfter(a);
        var e = c.extractContents(!1, b || !1),
            d;c.insertNode(this.remove());if (CKEDITOR.env.ie && !CKEDITOR.env.edge) {
          for (c = new CKEDITOR.dom.element("div"); d = e.getFirst();) {
            d.$.style.backgroundColor && (d.$.style.backgroundColor = d.$.style.backgroundColor), c.append(d);
          }c.insertAfter(this);c.remove(!0);
        } else e.insertAfterNode(this);
      }, contains: document.compareDocumentPosition ? function (a) {
        return !!(this.$.compareDocumentPosition(a.$) & 16);
      } : function (a) {
        var b = this.$;return a.type != CKEDITOR.NODE_ELEMENT ? b.contains(a.getParent().$) : b != a.$ && b.contains(a.$);
      }, focus: function () {
        function a() {
          try {
            this.$.focus();
          } catch (b) {}
        }return function (b) {
          b ? CKEDITOR.tools.setTimeout(a, 100, this) : a.call(this);
        };
      }(), getHtml: function getHtml() {
        var a = this.$.innerHTML;return CKEDITOR.env.ie ? a.replace(/<\?[^>]*>/g, "") : a;
      }, getOuterHtml: function getOuterHtml() {
        if (this.$.outerHTML) return this.$.outerHTML.replace(/<\?[^>]*>/, "");var a = this.$.ownerDocument.createElement("div");a.appendChild(this.$.cloneNode(!0));return a.innerHTML;
      }, getClientRect: function getClientRect(a) {
        var b = CKEDITOR.tools.extend({}, this.$.getBoundingClientRect());!b.width && (b.width = b.right - b.left);!b.height && (b.height = b.bottom - b.top);return a ? CKEDITOR.tools.getAbsoluteRectPosition(this.getWindow(), b) : b;
      }, setHtml: CKEDITOR.env.ie && 9 > CKEDITOR.env.version ? function (a) {
        try {
          var b = this.$;if (this.getParent()) return b.innerHTML = a;var c = this.getDocument()._getHtml5ShivFrag();c.appendChild(b);b.innerHTML = a;c.removeChild(b);return a;
        } catch (e) {
          this.$.innerHTML = "";b = new CKEDITOR.dom.element("body", this.getDocument());b.$.innerHTML = a;for (b = b.getChildren(); b.count();) {
            this.append(b.getItem(0));
          }return a;
        }
      } : function (a) {
        return this.$.innerHTML = a;
      }, setText: function () {
        var a = document.createElement("p");a.innerHTML = "x";a = a.textContent;return function (b) {
          this.$[a ? "textContent" : "innerText"] = b;
        };
      }(), getAttribute: function () {
        var a = function a(_a2) {
          return this.$.getAttribute(_a2, 2);
        };return CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks) ? function (a) {
          switch (a) {case "class":
              a = "className";break;case "http-equiv":
              a = "httpEquiv";break;case "name":
              return this.$.name;case "tabindex":
              return a = this.$.getAttribute(a, 2), 0 !== a && 0 === this.$.tabIndex && (a = null), a;case "checked":
              return a = this.$.attributes.getNamedItem(a), (a.specified ? a.nodeValue : this.$.checked) ? "checked" : null;case "hspace":case "value":
              return this.$[a];case "style":
              return this.$.style.cssText;case "contenteditable":case "contentEditable":
              return this.$.attributes.getNamedItem("contentEditable").specified ? this.$.getAttribute("contentEditable") : null;}return this.$.getAttribute(a, 2);
        } : a;
      }(), getAttributes: function getAttributes(a) {
        var b = {},
            c = this.$.attributes,
            e;a = CKEDITOR.tools.isArray(a) ? a : [];for (e = 0; e < c.length; e++) {
          -1 === CKEDITOR.tools.indexOf(a, c[e].name) && (b[c[e].name] = c[e].value);
        }return b;
      }, getChildren: function getChildren() {
        return new CKEDITOR.dom.nodeList(this.$.childNodes);
      }, getComputedStyle: document.defaultView && document.defaultView.getComputedStyle ? function (a) {
        var b = this.getWindow().$.getComputedStyle(this.$, null);return b ? b.getPropertyValue(a) : "";
      } : function (a) {
        return this.$.currentStyle[CKEDITOR.tools.cssStyleToDomStyle(a)];
      }, getDtd: function getDtd() {
        var a = CKEDITOR.dtd[this.getName()];this.getDtd = function () {
          return a;
        };return a;
      }, getElementsByTag: CKEDITOR.dom.document.prototype.getElementsByTag, getTabIndex: function getTabIndex() {
        var a = this.$.tabIndex;return 0 !== a || CKEDITOR.dtd.$tabIndex[this.getName()] || 0 === parseInt(this.getAttribute("tabindex"), 10) ? a : -1;
      }, getText: function getText() {
        return this.$.textContent || this.$.innerText || "";
      }, getWindow: function getWindow() {
        return this.getDocument().getWindow();
      }, getId: function getId() {
        return this.$.id || null;
      }, getNameAtt: function getNameAtt() {
        return this.$.name || null;
      }, getName: function getName() {
        var a = this.$.nodeName.toLowerCase();
        if (CKEDITOR.env.ie && 8 >= document.documentMode) {
          var b = this.$.scopeName;"HTML" != b && (a = b.toLowerCase() + ":" + a);
        }this.getName = function () {
          return a;
        };return this.getName();
      }, getValue: function getValue() {
        return this.$.value;
      }, getFirst: function getFirst(a) {
        var b = this.$.firstChild;(b = b && new CKEDITOR.dom.node(b)) && a && !a(b) && (b = b.getNext(a));return b;
      }, getLast: function getLast(a) {
        var b = this.$.lastChild;(b = b && new CKEDITOR.dom.node(b)) && a && !a(b) && (b = b.getPrevious(a));return b;
      }, getStyle: function getStyle(a) {
        return this.$.style[CKEDITOR.tools.cssStyleToDomStyle(a)];
      },
      is: function is() {
        var a = this.getName();if ("object" == _typeof(arguments[0])) return !!arguments[0][a];for (var b = 0; b < arguments.length; b++) {
          if (arguments[b] == a) return !0;
        }return !1;
      }, isEditable: function isEditable(a) {
        var b = this.getName();return this.isReadOnly() || "none" == this.getComputedStyle("display") || "hidden" == this.getComputedStyle("visibility") || CKEDITOR.dtd.$nonEditable[b] || CKEDITOR.dtd.$empty[b] || this.is("a") && (this.data("cke-saved-name") || this.hasAttribute("name")) && !this.getChildCount() ? !1 : !1 !== a ? (a = CKEDITOR.dtd[b] || CKEDITOR.dtd.span, !(!a || !a["#"])) : !0;
      }, isIdentical: function isIdentical(a) {
        var b = this.clone(0, 1);a = a.clone(0, 1);b.removeAttributes(["_moz_dirty", "data-cke-expando", "data-cke-saved-href", "data-cke-saved-name"]);a.removeAttributes(["_moz_dirty", "data-cke-expando", "data-cke-saved-href", "data-cke-saved-name"]);if (b.$.isEqualNode) return b.$.style.cssText = CKEDITOR.tools.normalizeCssText(b.$.style.cssText), a.$.style.cssText = CKEDITOR.tools.normalizeCssText(a.$.style.cssText), b.$.isEqualNode(a.$);b = b.getOuterHtml();a = a.getOuterHtml();if (CKEDITOR.env.ie && 9 > CKEDITOR.env.version && this.is("a")) {
          var c = this.getParent();c.type == CKEDITOR.NODE_ELEMENT && (c = c.clone(), c.setHtml(b), b = c.getHtml(), c.setHtml(a), a = c.getHtml());
        }return b == a;
      }, isVisible: function isVisible() {
        var a = (this.$.offsetHeight || this.$.offsetWidth) && "hidden" != this.getComputedStyle("visibility"),
            b,
            c;a && CKEDITOR.env.webkit && (b = this.getWindow(), !b.equals(CKEDITOR.document.getWindow()) && (c = b.$.frameElement) && (a = new CKEDITOR.dom.element(c).isVisible()));return !!a;
      }, isEmptyInlineRemoveable: function isEmptyInlineRemoveable() {
        if (!CKEDITOR.dtd.$removeEmpty[this.getName()]) return !1;
        for (var a = this.getChildren(), b = 0, c = a.count(); b < c; b++) {
          var e = a.getItem(b);if (e.type != CKEDITOR.NODE_ELEMENT || !e.data("cke-bookmark")) if (e.type == CKEDITOR.NODE_ELEMENT && !e.isEmptyInlineRemoveable() || e.type == CKEDITOR.NODE_TEXT && CKEDITOR.tools.trim(e.getText())) return !1;
        }return !0;
      }, hasAttributes: CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks) ? function () {
        for (var a = this.$.attributes, b = 0; b < a.length; b++) {
          var c = a[b];switch (c.nodeName) {case "class":
              if (this.getAttribute("class")) return !0;case "data-cke-expando":
              continue;
            default:
              if (c.specified) return !0;}
        }return !1;
      } : function () {
        var a = this.$.attributes,
            b = a.length,
            c = { "data-cke-expando": 1, _moz_dirty: 1 };return 0 < b && (2 < b || !c[a[0].nodeName] || 2 == b && !c[a[1].nodeName]);
      }, hasAttribute: function () {
        function a(b) {
          var c = this.$.attributes.getNamedItem(b);if ("input" == this.getName()) switch (b) {case "class":
              return 0 < this.$.className.length;case "checked":
              return !!this.$.checked;case "value":
              return b = this.getAttribute("type"), "checkbox" == b || "radio" == b ? "on" != this.$.value : !!this.$.value;}return c ? c.specified : !1;
        }return CKEDITOR.env.ie ? 8 > CKEDITOR.env.version ? function (b) {
          return "name" == b ? !!this.$.name : a.call(this, b);
        } : a : function (a) {
          return !!this.$.attributes.getNamedItem(a);
        };
      }(), hide: function hide() {
        this.setStyle("display", "none");
      }, moveChildren: function moveChildren(a, b) {
        var c = this.$;a = a.$;if (c != a) {
          var e;if (b) for (; e = c.lastChild;) {
            a.insertBefore(c.removeChild(e), a.firstChild);
          } else for (; e = c.firstChild;) {
            a.appendChild(c.removeChild(e));
          }
        }
      }, mergeSiblings: function () {
        function a(b, c, e) {
          if (c && c.type == CKEDITOR.NODE_ELEMENT) {
            for (var d = []; c.data("cke-bookmark") || c.isEmptyInlineRemoveable();) {
              if (d.push(c), c = e ? c.getNext() : c.getPrevious(), !c || c.type != CKEDITOR.NODE_ELEMENT) return;
            }if (b.isIdentical(c)) {
              for (var g = e ? b.getLast() : b.getFirst(); d.length;) {
                d.shift().move(b, !e);
              }c.moveChildren(b, !e);c.remove();g && g.type == CKEDITOR.NODE_ELEMENT && g.mergeSiblings();
            }
          }
        }return function (b) {
          if (!1 === b || CKEDITOR.dtd.$removeEmpty[this.getName()] || this.is("a")) a(this, this.getNext(), !0), a(this, this.getPrevious());
        };
      }(), show: function show() {
        this.setStyles({ display: "",
          visibility: "" });
      }, setAttribute: function () {
        var a = function a(_a3, b) {
          this.$.setAttribute(_a3, b);return this;
        };return CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks) ? function (b, c) {
          "class" == b ? this.$.className = c : "style" == b ? this.$.style.cssText = c : "tabindex" == b ? this.$.tabIndex = c : "checked" == b ? this.$.checked = c : "contenteditable" == b ? a.call(this, "contentEditable", c) : a.apply(this, arguments);return this;
        } : CKEDITOR.env.ie8Compat && CKEDITOR.env.secure ? function (b, c) {
          if ("src" == b && c.match(/^http:\/\//)) try {
            a.apply(this, arguments);
          } catch (e) {} else a.apply(this, arguments);return this;
        } : a;
      }(), setAttributes: function setAttributes(a) {
        for (var b in a) {
          this.setAttribute(b, a[b]);
        }return this;
      }, setValue: function setValue(a) {
        this.$.value = a;return this;
      }, removeAttribute: function () {
        var a = function a(_a4) {
          this.$.removeAttribute(_a4);
        };return CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks) ? function (a) {
          "class" == a ? a = "className" : "tabindex" == a ? a = "tabIndex" : "contenteditable" == a && (a = "contentEditable");this.$.removeAttribute(a);
        } : a;
      }(), removeAttributes: function removeAttributes(a) {
        if (CKEDITOR.tools.isArray(a)) for (var b = 0; b < a.length; b++) {
          this.removeAttribute(a[b]);
        } else for (b in a = a || this.getAttributes(), a) {
          a.hasOwnProperty(b) && this.removeAttribute(b);
        }
      }, removeStyle: function removeStyle(a) {
        var b = this.$.style;if (b.removeProperty || "border" != a && "margin" != a && "padding" != a) b.removeProperty ? b.removeProperty(a) : b.removeAttribute(CKEDITOR.tools.cssStyleToDomStyle(a)), this.$.style.cssText || this.removeAttribute("style");else {
          var c = ["top", "left", "right", "bottom"],
              e;"border" == a && (e = ["color", "style", "width"]);for (var b = [], d = 0; d < c.length; d++) {
            if (e) for (var v = 0; v < e.length; v++) {
              b.push([a, c[d], e[v]].join("-"));
            } else b.push([a, c[d]].join("-"));
          }for (a = 0; a < b.length; a++) {
            this.removeStyle(b[a]);
          }
        }
      }, setStyle: function setStyle(a, b) {
        this.$.style[CKEDITOR.tools.cssStyleToDomStyle(a)] = b;return this;
      }, setStyles: function setStyles(a) {
        for (var b in a) {
          this.setStyle(b, a[b]);
        }return this;
      }, setOpacity: function setOpacity(a) {
        CKEDITOR.env.ie && 9 > CKEDITOR.env.version ? (a = Math.round(100 * a), this.setStyle("filter", 100 <= a ? "" : "progid:DXImageTransform.Microsoft.Alpha(opacity\x3d" + a + ")")) : this.setStyle("opacity", a);
      }, unselectable: function unselectable() {
        this.setStyles(CKEDITOR.tools.cssVendorPrefix("user-select", "none"));if (CKEDITOR.env.ie) {
          this.setAttribute("unselectable", "on");for (var a, b = this.getElementsByTag("*"), c = 0, e = b.count(); c < e; c++) {
            a = b.getItem(c), a.setAttribute("unselectable", "on");
          }
        }
      }, getPositionedAncestor: function getPositionedAncestor() {
        for (var a = this; "html" != a.getName();) {
          if ("static" != a.getComputedStyle("position")) return a;a = a.getParent();
        }return null;
      }, getDocumentPosition: function getDocumentPosition(a) {
        var b = 0,
            c = 0,
            e = this.getDocument(),
            d = e.getBody(),
            v = "BackCompat" == e.$.compatMode;if (document.documentElement.getBoundingClientRect && (CKEDITOR.env.ie ? 8 !== CKEDITOR.env.version : 1)) {
          var f = this.$.getBoundingClientRect(),
              h = e.$.documentElement,
              x = h.clientTop || d.$.clientTop || 0,
              m = h.clientLeft || d.$.clientLeft || 0,
              k = !0;CKEDITOR.env.ie && (k = e.getDocumentElement().contains(this), e = e.getBody().contains(this), k = v && e || !v && k);k && (CKEDITOR.env.webkit || CKEDITOR.env.ie && 12 <= CKEDITOR.env.version ? (b = d.$.scrollLeft || h.scrollLeft, c = d.$.scrollTop || h.scrollTop) : (c = v ? d.$ : h, b = c.scrollLeft, c = c.scrollTop), b = f.left + b - m, c = f.top + c - x);
        } else for (x = this, m = null; x && "body" != x.getName() && "html" != x.getName();) {
          b += x.$.offsetLeft - x.$.scrollLeft;c += x.$.offsetTop - x.$.scrollTop;x.equals(this) || (b += x.$.clientLeft || 0, c += x.$.clientTop || 0);for (; m && !m.equals(x);) {
            b -= m.$.scrollLeft, c -= m.$.scrollTop, m = m.getParent();
          }m = x;x = (f = x.$.offsetParent) ? new CKEDITOR.dom.element(f) : null;
        }a && (f = this.getWindow(), x = a.getWindow(), !f.equals(x) && f.$.frameElement && (a = new CKEDITOR.dom.element(f.$.frameElement).getDocumentPosition(a), b += a.x, c += a.y));document.documentElement.getBoundingClientRect || !CKEDITOR.env.gecko || v || (b += this.$.clientLeft ? 1 : 0, c += this.$.clientTop ? 1 : 0);return { x: b, y: c };
      }, scrollIntoView: function scrollIntoView(a) {
        var b = this.getParent();if (b) {
          do {
            if ((b.$.clientWidth && b.$.clientWidth < b.$.scrollWidth || b.$.clientHeight && b.$.clientHeight < b.$.scrollHeight) && !b.is("body") && this.scrollIntoParent(b, a, 1), b.is("html")) {
              var c = b.getWindow();try {
                var e = c.$.frameElement;e && (b = new CKEDITOR.dom.element(e));
              } catch (d) {}
            }
          } while (b = b.getParent());
        }
      }, scrollIntoParent: function scrollIntoParent(a, b, c) {
        var e, d, v, f;function h(b, c) {
          /body|html/.test(a.getName()) ? a.getWindow().$.scrollBy(b, c) : (a.$.scrollLeft += b, a.$.scrollTop += c);
        }function x(a, b) {
          var c = { x: 0, y: 0 };if (!a.is(k ? "body" : "html")) {
            var e = a.$.getBoundingClientRect();c.x = e.left;c.y = e.top;
          }e = a.getWindow();e.equals(b) || (e = x(CKEDITOR.dom.element.get(e.$.frameElement), b), c.x += e.x, c.y += e.y);return c;
        }function m(a, b) {
          return parseInt(a.getComputedStyle("margin-" + b) || 0, 10) || 0;
        }!a && (a = this.getWindow());v = a.getDocument();var k = "BackCompat" == v.$.compatMode;a instanceof CKEDITOR.dom.window && (a = k ? v.getBody() : v.getDocumentElement());
        CKEDITOR.env.webkit && (v = this.getEditor(!1)) && (v._.previousScrollTop = null);v = a.getWindow();d = x(this, v);var u = x(a, v),
            K = this.$.offsetHeight;e = this.$.offsetWidth;var l = a.$.clientHeight,
            t = a.$.clientWidth;v = d.x - m(this, "left") - u.x || 0;f = d.y - m(this, "top") - u.y || 0;e = d.x + e + m(this, "right") - (u.x + t) || 0;d = d.y + K + m(this, "bottom") - (u.y + l) || 0;(0 > f || 0 < d) && h(0, !0 === b ? f : !1 === b ? d : 0 > f ? f : d);c && (0 > v || 0 < e) && h(0 > v ? v : e, 0);
      }, setState: function setState(a, b, c) {
        b = b || "cke";switch (a) {case CKEDITOR.TRISTATE_ON:
            this.addClass(b + "_on");this.removeClass(b + "_off");this.removeClass(b + "_disabled");c && this.setAttribute("aria-pressed", !0);c && this.removeAttribute("aria-disabled");break;case CKEDITOR.TRISTATE_DISABLED:
            this.addClass(b + "_disabled");this.removeClass(b + "_off");this.removeClass(b + "_on");c && this.setAttribute("aria-disabled", !0);c && this.removeAttribute("aria-pressed");break;default:
            this.addClass(b + "_off"), this.removeClass(b + "_on"), this.removeClass(b + "_disabled"), c && this.removeAttribute("aria-pressed"), c && this.removeAttribute("aria-disabled");}
      },
      getFrameDocument: function getFrameDocument() {
        var a = this.$;try {
          a.contentWindow.document;
        } catch (b) {
          a.src = a.src;
        }return a && new CKEDITOR.dom.document(a.contentWindow.document);
      }, copyAttributes: function copyAttributes(a, b) {
        var c = this.$.attributes;b = b || {};for (var e = 0; e < c.length; e++) {
          var d = c[e],
              v = d.nodeName.toLowerCase(),
              f;if (!(v in b)) if ("checked" == v && (f = this.getAttribute(v))) a.setAttribute(v, f);else if (!CKEDITOR.env.ie || this.hasAttribute(v)) f = this.getAttribute(v), null === f && (f = d.nodeValue), a.setAttribute(v, f);
        }"" !== this.$.style.cssText && (a.$.style.cssText = this.$.style.cssText);
      }, renameNode: function renameNode(a) {
        if (this.getName() != a) {
          var b = this.getDocument();a = new CKEDITOR.dom.element(a, b);this.copyAttributes(a);this.moveChildren(a);this.getParent(!0) && this.$.parentNode.replaceChild(a.$, this.$);a.$["data-cke-expando"] = this.$["data-cke-expando"];this.$ = a.$;delete this.getName;
        }
      }, getChild: function () {
        function a(b, c) {
          var e = b.childNodes;if (0 <= c && c < e.length) return e[c];
        }return function (b) {
          var c = this.$;if (b.slice) for (b = b.slice(); 0 < b.length && c;) {
            c = a(c, b.shift());
          } else c = a(c, b);return c ? new CKEDITOR.dom.node(c) : null;
        };
      }(), getChildCount: function getChildCount() {
        return this.$.childNodes.length;
      }, disableContextMenu: function disableContextMenu() {
        function a(b) {
          return b.type == CKEDITOR.NODE_ELEMENT && b.hasClass("cke_enable_context_menu");
        }this.on("contextmenu", function (b) {
          b.data.getTarget().getAscendant(a, !0) || b.data.preventDefault();
        });
      }, getDirection: function getDirection(a) {
        return a ? this.getComputedStyle("direction") || this.getDirection() || this.getParent() && this.getParent().getDirection(1) || this.getDocument().$.dir || "ltr" : this.getStyle("direction") || this.getAttribute("dir");
      }, data: function data(a, b) {
        a = "data-" + a;if (void 0 === b) return this.getAttribute(a);!1 === b ? this.removeAttribute(a) : this.setAttribute(a, b);return null;
      }, getEditor: function getEditor(a) {
        var b = CKEDITOR.instances,
            c,
            e,
            d;a = a || void 0 === a;for (c in b) {
          if (e = b[c], e.element.equals(this) && e.elementMode != CKEDITOR.ELEMENT_MODE_APPENDTO || !a && (d = e.editable()) && (d.equals(this) || d.contains(this))) return e;
        }return null;
      }, find: function find(a) {
        var c = d(this);a = new CKEDITOR.dom.nodeList(this.$.querySelectorAll(b(this, a)));c();return a;
      }, findOne: function findOne(a) {
        var c = d(this);a = this.$.querySelector(b(this, a));c();return a ? new CKEDITOR.dom.element(a) : null;
      }, forEach: function forEach(a, b, c) {
        if (!(c || b && this.type != b)) var e = a(this);if (!1 !== e) {
          c = this.getChildren();for (var d = 0; d < c.count(); d++) {
            e = c.getItem(d), e.type == CKEDITOR.NODE_ELEMENT ? e.forEach(a, b) : b && e.type != b || a(e);
          }
        }
      } });var k = { width: ["border-left-width", "border-right-width", "padding-left", "padding-right"], height: ["border-top-width", "border-bottom-width", "padding-top", "padding-bottom"] };
    CKEDITOR.dom.element.prototype.setSize = function (a, b, d) {
      "number" == typeof b && (!d || CKEDITOR.env.ie && CKEDITOR.env.quirks || (b -= c.call(this, a)), this.setStyle(a, b + "px"));
    };CKEDITOR.dom.element.prototype.getSize = function (a, b) {
      var d = Math.max(this.$["offset" + CKEDITOR.tools.capitalize(a)], this.$["client" + CKEDITOR.tools.capitalize(a)]) || 0;b && (d -= c.call(this, a));return d;
    };
  })();CKEDITOR.dom.documentFragment = function (a) {
    a = a || CKEDITOR.document;this.$ = a.type == CKEDITOR.NODE_DOCUMENT ? a.$.createDocumentFragment() : a;
  };
  CKEDITOR.tools.extend(CKEDITOR.dom.documentFragment.prototype, CKEDITOR.dom.element.prototype, { type: CKEDITOR.NODE_DOCUMENT_FRAGMENT, insertAfterNode: function insertAfterNode(a) {
      a = a.$;a.parentNode.insertBefore(this.$, a.nextSibling);
    }, getHtml: function getHtml() {
      var a = new CKEDITOR.dom.element("div");this.clone(1, 1).appendTo(a);return a.getHtml().replace(/\s*data-cke-expando=".*?"/g, "");
    } }, !0, { append: 1, appendBogus: 1, clone: 1, getFirst: 1, getHtml: 1, getLast: 1, getParent: 1, getNext: 1, getPrevious: 1, appendTo: 1, moveChildren: 1, insertBefore: 1,
    insertAfterNode: 1, replace: 1, trim: 1, type: 1, ltrim: 1, rtrim: 1, getDocument: 1, getChildCount: 1, getChild: 1, getChildren: 1 });
  (function () {
    function a(a, b) {
      var c = this.range;if (this._.end) return null;if (!this._.start) {
        this._.start = 1;if (c.collapsed) return this.end(), null;c.optimize();
      }var e,
          d = c.startContainer;e = c.endContainer;var f = c.startOffset,
          y = c.endOffset,
          h,
          l = this.guard,
          t = this.type,
          g = a ? "getPreviousSourceNode" : "getNextSourceNode";if (!a && !this._.guardLTR) {
        var L = e.type == CKEDITOR.NODE_ELEMENT ? e : e.getParent(),
            C = e.type == CKEDITOR.NODE_ELEMENT ? e.getChild(y) : e.getNext();this._.guardLTR = function (a, b) {
          return (!b || !L.equals(a)) && (!C || !a.equals(C)) && (a.type != CKEDITOR.NODE_ELEMENT || !b || !a.equals(c.root));
        };
      }if (a && !this._.guardRTL) {
        var k = d.type == CKEDITOR.NODE_ELEMENT ? d : d.getParent(),
            q = d.type == CKEDITOR.NODE_ELEMENT ? f ? d.getChild(f - 1) : null : d.getPrevious();this._.guardRTL = function (a, b) {
          return (!b || !k.equals(a)) && (!q || !a.equals(q)) && (a.type != CKEDITOR.NODE_ELEMENT || !b || !a.equals(c.root));
        };
      }var E = a ? this._.guardRTL : this._.guardLTR;h = l ? function (a, b) {
        return !1 === E(a, b) ? !1 : l(a, b);
      } : E;this.current ? e = this.current[g](!1, t, h) : (a ? e.type == CKEDITOR.NODE_ELEMENT && (e = 0 < y ? e.getChild(y - 1) : !1 === h(e, !0) ? null : e.getPreviousSourceNode(!0, t, h)) : (e = d, e.type == CKEDITOR.NODE_ELEMENT && ((e = e.getChild(f)) || (e = !1 === h(d, !0) ? null : d.getNextSourceNode(!0, t, h)))), e && !1 === h(e) && (e = null));for (; e && !this._.end;) {
        this.current = e;if (!this.evaluator || !1 !== this.evaluator(e)) {
          if (!b) return e;
        } else if (b && this.evaluator) return !1;e = e[g](!1, t, h);
      }this.end();return this.current = null;
    }function d(b) {
      for (var c, e = null; c = a.call(this, b);) {
        e = c;
      }return e;
    }CKEDITOR.dom.walker = CKEDITOR.tools.createClass({ $: function $(a) {
        this.range = a;this._ = {};
      }, proto: { end: function end() {
          this._.end = 1;
        }, next: function next() {
          return a.call(this);
        }, previous: function previous() {
          return a.call(this, 1);
        }, checkForward: function checkForward() {
          return !1 !== a.call(this, 0, 1);
        }, checkBackward: function checkBackward() {
          return !1 !== a.call(this, 1, 1);
        }, lastForward: function lastForward() {
          return d.call(this);
        }, lastBackward: function lastBackward() {
          return d.call(this, 1);
        }, reset: function reset() {
          delete this.current;this._ = {};
        } } });var b = { block: 1, "list-item": 1, table: 1, "table-row-group": 1, "table-header-group": 1, "table-footer-group": 1, "table-row": 1, "table-column-group": 1,
      "table-column": 1, "table-cell": 1, "table-caption": 1 },
        c = { absolute: 1, fixed: 1 };CKEDITOR.dom.element.prototype.isBlockBoundary = function (a) {
      return "none" != this.getComputedStyle("float") || this.getComputedStyle("position") in c || !b[this.getComputedStyle("display")] ? !!(this.is(CKEDITOR.dtd.$block) || a && this.is(a)) : !0;
    };CKEDITOR.dom.walker.blockBoundary = function (a) {
      return function (b) {
        return !(b.type == CKEDITOR.NODE_ELEMENT && b.isBlockBoundary(a));
      };
    };CKEDITOR.dom.walker.listItemBoundary = function () {
      return this.blockBoundary({ br: 1 });
    };
    CKEDITOR.dom.walker.bookmark = function (a, b) {
      function c(a) {
        return a && a.getName && "span" == a.getName() && a.data("cke-bookmark");
      }return function (e) {
        var d, f;d = e && e.type != CKEDITOR.NODE_ELEMENT && (f = e.getParent()) && c(f);d = a ? d : d || c(e);return !!(b ^ d);
      };
    };CKEDITOR.dom.walker.whitespaces = function (a) {
      return function (b) {
        var c;b && b.type == CKEDITOR.NODE_TEXT && (c = !CKEDITOR.tools.trim(b.getText()) || CKEDITOR.env.webkit && b.getText() == CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE);return !!(a ^ c);
      };
    };CKEDITOR.dom.walker.invisible = function (a) {
      var b = CKEDITOR.dom.walker.whitespaces(),
          c = CKEDITOR.env.webkit ? 1 : 0;return function (e) {
        b(e) ? e = 1 : (e.type == CKEDITOR.NODE_TEXT && (e = e.getParent()), e = e.$.offsetWidth <= c);return !!(a ^ e);
      };
    };CKEDITOR.dom.walker.nodeType = function (a, b) {
      return function (c) {
        return !!(b ^ c.type == a);
      };
    };CKEDITOR.dom.walker.bogus = function (a) {
      function b(a) {
        return !h(a) && !k(a);
      }return function (c) {
        var e = CKEDITOR.env.needsBrFiller ? c.is && c.is("br") : c.getText && f.test(c.getText());e && (e = c.getParent(), c = c.getNext(b), e = e.isBlockBoundary() && (!c || c.type == CKEDITOR.NODE_ELEMENT && c.isBlockBoundary()));return !!(a ^ e);
      };
    };CKEDITOR.dom.walker.temp = function (a) {
      return function (b) {
        b.type != CKEDITOR.NODE_ELEMENT && (b = b.getParent());b = b && b.hasAttribute("data-cke-temp");return !!(a ^ b);
      };
    };var f = /^[\t\r\n ]*(?:&nbsp;|\xa0)$/,
        h = CKEDITOR.dom.walker.whitespaces(),
        k = CKEDITOR.dom.walker.bookmark(),
        g = CKEDITOR.dom.walker.temp(),
        n = function n(a) {
      return k(a) || h(a) || a.type == CKEDITOR.NODE_ELEMENT && a.is(CKEDITOR.dtd.$inline) && !a.is(CKEDITOR.dtd.$empty);
    };CKEDITOR.dom.walker.ignored = function (a) {
      return function (b) {
        b = h(b) || k(b) || g(b);return !!(a ^ b);
      };
    };var r = CKEDITOR.dom.walker.ignored();CKEDITOR.dom.walker.empty = function (a) {
      return function (b) {
        for (var c = 0, e = b.getChildCount(); c < e; ++c) {
          if (!r(b.getChild(c))) return !!a;
        }return !a;
      };
    };var e = CKEDITOR.dom.walker.empty(),
        y = CKEDITOR.dom.walker.validEmptyBlockContainers = CKEDITOR.tools.extend(function (a) {
      var b = {},
          c;for (c in a) {
        CKEDITOR.dtd[c]["#"] && (b[c] = 1);
      }return b;
    }(CKEDITOR.dtd.$block), { caption: 1, td: 1, th: 1 });CKEDITOR.dom.walker.editable = function (a) {
      return function (b) {
        b = r(b) ? !1 : b.type == CKEDITOR.NODE_TEXT || b.type == CKEDITOR.NODE_ELEMENT && (b.is(CKEDITOR.dtd.$inline) || b.is("hr") || "false" == b.getAttribute("contenteditable") || !CKEDITOR.env.needsBrFiller && b.is(y) && e(b)) ? !0 : !1;return !!(a ^ b);
      };
    };CKEDITOR.dom.element.prototype.getBogus = function () {
      var a = this;do {
        a = a.getPreviousSourceNode();
      } while (n(a));return a && (CKEDITOR.env.needsBrFiller ? a.is && a.is("br") : a.getText && f.test(a.getText())) ? a : !1;
    };
  })();
  CKEDITOR.dom.range = function (a) {
    this.endOffset = this.endContainer = this.startOffset = this.startContainer = null;this.collapsed = !0;var d = a instanceof CKEDITOR.dom.document;this.document = d ? a : a.getDocument();this.root = d ? a.getBody() : a;
  };
  (function () {
    function a(a) {
      a.collapsed = a.startContainer && a.endContainer && a.startContainer.equals(a.endContainer) && a.startOffset == a.endOffset;
    }function d(a, b, c, d, f) {
      function h(a, b, c, e) {
        var d = c ? a.getPrevious() : a.getNext();if (e && k) return d;l || e ? b.append(a.clone(!0, f), c) : (a.remove(), r && b.append(a, c));return d;
      }function m() {
        var a,
            b,
            c,
            e = Math.min(O.length, p.length);for (a = 0; a < e; a++) {
          if (b = O[a], c = p[a], !b.equals(c)) return a;
        }return a - 1;
      }function g() {
        var b = N - 1,
            c = E && z && !t.equals(F);b < w - 1 || b < B - 1 || c ? (c ? a.moveToPosition(F, CKEDITOR.POSITION_BEFORE_START) : B == b + 1 && q ? a.moveToPosition(p[b], CKEDITOR.POSITION_BEFORE_END) : a.moveToPosition(p[b + 1], CKEDITOR.POSITION_BEFORE_START), d && (b = O[b + 1]) && b.type == CKEDITOR.NODE_ELEMENT && (c = CKEDITOR.dom.element.createFromHtml('\x3cspan data-cke-bookmark\x3d"1" style\x3d"display:none"\x3e\x26nbsp;\x3c/span\x3e', a.document), c.insertAfter(b), b.mergeSiblings(!1), a.moveToBookmark({ startNode: c }))) : a.collapse(!0);
      }a.optimizeBookmark();var k = 0 === b,
          r = 1 == b,
          l = 2 == b;b = l || r;var t = a.startContainer,
          F = a.endContainer,
          L = a.startOffset,
          C = a.endOffset,
          M,
          q,
          E,
          z,
          H,
          P;if (l && F.type == CKEDITOR.NODE_TEXT && (t.equals(F) || t.type === CKEDITOR.NODE_ELEMENT && t.getFirst().equals(F))) c.append(a.document.createText(F.substring(L, C)));else {
        F.type == CKEDITOR.NODE_TEXT ? l ? P = !0 : F = F.split(C) : 0 < F.getChildCount() ? C >= F.getChildCount() ? (F = F.getChild(C - 1), q = !0) : F = F.getChild(C) : z = q = !0;t.type == CKEDITOR.NODE_TEXT ? l ? H = !0 : t.split(L) : 0 < t.getChildCount() ? 0 === L ? (t = t.getChild(L), M = !0) : t = t.getChild(L - 1) : E = M = !0;for (var O = t.getParents(), p = F.getParents(), N = m(), w = O.length - 1, B = p.length - 1, G = c, I, X, V, da = -1, Q = N; Q <= w; Q++) {
          X = O[Q];V = X.getNext();for (Q != w || X.equals(p[Q]) && w < B ? b && (I = G.append(X.clone(0, f))) : M ? h(X, G, !1, E) : H && G.append(a.document.createText(X.substring(L))); V;) {
            if (V.equals(p[Q])) {
              da = Q;break;
            }V = h(V, G);
          }G = I;
        }G = c;for (Q = N; Q <= B; Q++) {
          if (c = p[Q], V = c.getPrevious(), c.equals(O[Q])) b && (G = G.getChild(0));else {
            Q != B || c.equals(O[Q]) && B < w ? b && (I = G.append(c.clone(0, f))) : q ? h(c, G, !1, z) : P && G.append(a.document.createText(c.substring(0, C)));if (Q > da) for (; V;) {
              V = h(V, G, !0);
            }G = I;
          }
        }l || g();
      }
    }
    function b() {
      var a = !1,
          b = CKEDITOR.dom.walker.whitespaces(),
          c = CKEDITOR.dom.walker.bookmark(!0),
          d = CKEDITOR.dom.walker.bogus();return function (f) {
        return c(f) || b(f) ? !0 : d(f) && !a ? a = !0 : f.type == CKEDITOR.NODE_TEXT && (f.hasAscendant("pre") || CKEDITOR.tools.trim(f.getText()).length) || f.type == CKEDITOR.NODE_ELEMENT && !f.is(h) ? !1 : !0;
      };
    }function c(a) {
      var b = CKEDITOR.dom.walker.whitespaces(),
          c = CKEDITOR.dom.walker.bookmark(1);return function (d) {
        return c(d) || b(d) ? !0 : !a && k(d) || d.type == CKEDITOR.NODE_ELEMENT && d.is(CKEDITOR.dtd.$removeEmpty);
      };
    }
    function f(a) {
      return function () {
        var b;return this[a ? "getPreviousNode" : "getNextNode"](function (a) {
          !b && r(a) && (b = a);return n(a) && !(k(a) && a.equals(b));
        });
      };
    }var h = { abbr: 1, acronym: 1, b: 1, bdo: 1, big: 1, cite: 1, code: 1, del: 1, dfn: 1, em: 1, font: 1, i: 1, ins: 1, label: 1, kbd: 1, q: 1, samp: 1, small: 1, span: 1, strike: 1, strong: 1, sub: 1, sup: 1, tt: 1, u: 1, "var": 1 },
        k = CKEDITOR.dom.walker.bogus(),
        g = /^[\t\r\n ]*(?:&nbsp;|\xa0)$/,
        n = CKEDITOR.dom.walker.editable(),
        r = CKEDITOR.dom.walker.ignored(!0);CKEDITOR.dom.range.prototype = { clone: function clone() {
        var a = new CKEDITOR.dom.range(this.root);a._setStartContainer(this.startContainer);a.startOffset = this.startOffset;a._setEndContainer(this.endContainer);a.endOffset = this.endOffset;a.collapsed = this.collapsed;return a;
      }, collapse: function collapse(a) {
        a ? (this._setEndContainer(this.startContainer), this.endOffset = this.startOffset) : (this._setStartContainer(this.endContainer), this.startOffset = this.endOffset);this.collapsed = !0;
      }, cloneContents: function cloneContents(a) {
        var b = new CKEDITOR.dom.documentFragment(this.document);this.collapsed || d(this, 2, b, !1, "undefined" == typeof a ? !0 : a);return b;
      }, deleteContents: function deleteContents(a) {
        this.collapsed || d(this, 0, null, a);
      }, extractContents: function extractContents(a, b) {
        var c = new CKEDITOR.dom.documentFragment(this.document);this.collapsed || d(this, 1, c, a, "undefined" == typeof b ? !0 : b);return c;
      }, createBookmark: function createBookmark(a) {
        var b,
            c,
            d,
            f,
            h = this.collapsed;b = this.document.createElement("span");b.data("cke-bookmark", 1);b.setStyle("display", "none");b.setHtml("\x26nbsp;");a && (d = "cke_bm_" + CKEDITOR.tools.getNextNumber(), b.setAttribute("id", d + (h ? "C" : "S")));h || (c = b.clone(), c.setHtml("\x26nbsp;"), a && c.setAttribute("id", d + "E"), f = this.clone(), f.collapse(), f.insertNode(c));f = this.clone();f.collapse(!0);f.insertNode(b);c ? (this.setStartAfter(b), this.setEndBefore(c)) : this.moveToPosition(b, CKEDITOR.POSITION_AFTER_END);return { startNode: a ? d + (h ? "C" : "S") : b, endNode: a ? d + "E" : c, serializable: a, collapsed: h };
      }, createBookmark2: function () {
        function a(b) {
          var e = b.container,
              d = b.offset,
              m;m = e;var f = d;m = m.type != CKEDITOR.NODE_ELEMENT || 0 === f || f == m.getChildCount() ? 0 : m.getChild(f - 1).type == CKEDITOR.NODE_TEXT && m.getChild(f).type == CKEDITOR.NODE_TEXT;m && (e = e.getChild(d - 1), d = e.getLength());if (e.type == CKEDITOR.NODE_ELEMENT && 0 < d) {
            a: {
              for (m = e; d--;) {
                if (f = m.getChild(d).getIndex(!0), 0 <= f) {
                  d = f;break a;
                }
              }d = -1;
            }d += 1;
          }if (e.type == CKEDITOR.NODE_TEXT) {
            m = e;for (f = 0; (m = m.getPrevious()) && m.type == CKEDITOR.NODE_TEXT;) {
              f += m.getText().replace(CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE, "").length;
            }m = f;e.getText() ? d += m : (f = e.getPrevious(c), m ? (d = m, e = f ? f.getNext() : e.getParent().getFirst()) : (e = e.getParent(), d = f ? f.getIndex(!0) + 1 : 0));
          }b.container = e;b.offset = d;
        }function b(a, c) {
          var e = c.getCustomData("cke-fillingChar");if (e) {
            var d = a.container;e.equals(d) && (a.offset -= CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE.length, 0 >= a.offset && (a.offset = d.getIndex(), a.container = d.getParent()));
          }
        }var c = CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_TEXT, !0);return function (c) {
          var d = this.collapsed,
              f = { container: this.startContainer, offset: this.startOffset },
              m = { container: this.endContainer, offset: this.endOffset };c && (a(f), b(f, this.root), d || (a(m), b(m, this.root)));return { start: f.container.getAddress(c), end: d ? null : m.container.getAddress(c), startOffset: f.offset, endOffset: m.offset, normalized: c, collapsed: d, is2: !0 };
        };
      }(), moveToBookmark: function moveToBookmark(a) {
        if (a.is2) {
          var b = this.document.getByAddress(a.start, a.normalized),
              c = a.startOffset,
              d = a.end && this.document.getByAddress(a.end, a.normalized);a = a.endOffset;this.setStart(b, c);d ? this.setEnd(d, a) : this.collapse(!0);
        } else b = (c = a.serializable) ? this.document.getById(a.startNode) : a.startNode, a = c ? this.document.getById(a.endNode) : a.endNode, this.setStartBefore(b), b.remove(), a ? (this.setEndBefore(a), a.remove()) : this.collapse(!0);
      }, getBoundaryNodes: function getBoundaryNodes() {
        var a = this.startContainer,
            b = this.endContainer,
            c = this.startOffset,
            d = this.endOffset,
            f;if (a.type == CKEDITOR.NODE_ELEMENT) if (f = a.getChildCount(), f > c) a = a.getChild(c);else if (1 > f) a = a.getPreviousSourceNode();else {
          for (a = a.$; a.lastChild;) {
            a = a.lastChild;
          }a = new CKEDITOR.dom.node(a);a = a.getNextSourceNode() || a;
        }if (b.type == CKEDITOR.NODE_ELEMENT) if (f = b.getChildCount(), f > d) b = b.getChild(d).getPreviousSourceNode(!0);else if (1 > f) b = b.getPreviousSourceNode();else {
          for (b = b.$; b.lastChild;) {
            b = b.lastChild;
          }b = new CKEDITOR.dom.node(b);
        }a.getPosition(b) & CKEDITOR.POSITION_FOLLOWING && (a = b);return { startNode: a, endNode: b };
      }, getCommonAncestor: function getCommonAncestor(a, b) {
        var c = this.startContainer,
            d = this.endContainer,
            c = c.equals(d) ? a && c.type == CKEDITOR.NODE_ELEMENT && this.startOffset == this.endOffset - 1 ? c.getChild(this.startOffset) : c : c.getCommonAncestor(d);return b && !c.is ? c.getParent() : c;
      }, optimize: function optimize() {
        var a = this.startContainer,
            b = this.startOffset;a.type != CKEDITOR.NODE_ELEMENT && (b ? b >= a.getLength() && this.setStartAfter(a) : this.setStartBefore(a));a = this.endContainer;b = this.endOffset;a.type != CKEDITOR.NODE_ELEMENT && (b ? b >= a.getLength() && this.setEndAfter(a) : this.setEndBefore(a));
      }, optimizeBookmark: function optimizeBookmark() {
        var a = this.startContainer,
            b = this.endContainer;a.is && a.is("span") && a.data("cke-bookmark") && this.setStartAt(a, CKEDITOR.POSITION_BEFORE_START);b && b.is && b.is("span") && b.data("cke-bookmark") && this.setEndAt(b, CKEDITOR.POSITION_AFTER_END);
      },
      trim: function trim(a, b) {
        var c = this.startContainer,
            d = this.startOffset,
            f = this.collapsed;if ((!a || f) && c && c.type == CKEDITOR.NODE_TEXT) {
          if (d) {
            if (d >= c.getLength()) d = c.getIndex() + 1, c = c.getParent();else {
              var h = c.split(d),
                  d = c.getIndex() + 1,
                  c = c.getParent();this.startContainer.equals(this.endContainer) ? this.setEnd(h, this.endOffset - this.startOffset) : c.equals(this.endContainer) && (this.endOffset += 1);
            }
          } else d = c.getIndex(), c = c.getParent();this.setStart(c, d);if (f) {
            this.collapse(!0);return;
          }
        }c = this.endContainer;d = this.endOffset;
        b || f || !c || c.type != CKEDITOR.NODE_TEXT || (d ? (d >= c.getLength() || c.split(d), d = c.getIndex() + 1) : d = c.getIndex(), c = c.getParent(), this.setEnd(c, d));
      }, enlarge: function enlarge(a, b) {
        function c(a) {
          return a && a.type == CKEDITOR.NODE_ELEMENT && a.hasAttribute("contenteditable") ? null : a;
        }var d = new RegExp(/[^\s\ufeff]/);switch (a) {case CKEDITOR.ENLARGE_INLINE:
            var f = 1;case CKEDITOR.ENLARGE_ELEMENT:
            var h = function h(a, b) {
              var c = new CKEDITOR.dom.range(g);c.setStart(a, b);c.setEndAt(g, CKEDITOR.POSITION_BEFORE_END);var c = new CKEDITOR.dom.walker(c),
                  e;for (c.guard = function (a) {
                return !(a.type == CKEDITOR.NODE_ELEMENT && a.isBlockBoundary());
              }; e = c.next();) {
                if (e.type != CKEDITOR.NODE_TEXT) return !1;M = e != a ? e.getText() : e.substring(b);if (d.test(M)) return !1;
              }return !0;
            };if (this.collapsed) break;var m = this.getCommonAncestor(),
                g = this.root,
                k,
                r,
                l,
                t,
                F,
                L = !1,
                C,
                M;C = this.startContainer;var q = this.startOffset;C.type == CKEDITOR.NODE_TEXT ? (q && (C = !CKEDITOR.tools.trim(C.substring(0, q)).length && C, L = !!C), C && ((t = C.getPrevious()) || (l = C.getParent()))) : (q && (t = C.getChild(q - 1) || C.getLast()), t || (l = C));for (l = c(l); l || t;) {
              if (l && !t) {
                !F && l.equals(m) && (F = !0);if (f ? l.isBlockBoundary() : !g.contains(l)) break;L && "inline" == l.getComputedStyle("display") || (L = !1, F ? k = l : this.setStartBefore(l));t = l.getPrevious();
              }for (; t;) {
                if (C = !1, t.type == CKEDITOR.NODE_COMMENT) t = t.getPrevious();else {
                  if (t.type == CKEDITOR.NODE_TEXT) M = t.getText(), d.test(M) && (t = null), C = /[\s\ufeff]$/.test(M);else if ((t.$.offsetWidth > (CKEDITOR.env.webkit ? 1 : 0) || b && t.is("br")) && !t.data("cke-bookmark")) if (L && CKEDITOR.dtd.$removeEmpty[t.getName()]) {
                    M = t.getText();if (d.test(M)) t = null;else for (var q = t.$.getElementsByTagName("*"), E = 0, z; z = q[E++];) {
                      if (!CKEDITOR.dtd.$removeEmpty[z.nodeName.toLowerCase()]) {
                        t = null;break;
                      }
                    }t && (C = !!M.length);
                  } else t = null;C && (L ? F ? k = l : l && this.setStartBefore(l) : L = !0);if (t) {
                    C = t.getPrevious();if (!l && !C) {
                      l = t;t = null;break;
                    }t = C;
                  } else l = null;
                }
              }l && (l = c(l.getParent()));
            }C = this.endContainer;q = this.endOffset;l = t = null;F = L = !1;C.type == CKEDITOR.NODE_TEXT ? CKEDITOR.tools.trim(C.substring(q)).length ? L = !0 : (L = !C.getLength(), q == C.getLength() ? (t = C.getNext()) || (l = C.getParent()) : h(C, q) && (l = C.getParent())) : (t = C.getChild(q)) || (l = C);for (; l || t;) {
              if (l && !t) {
                !F && l.equals(m) && (F = !0);if (f ? l.isBlockBoundary() : !g.contains(l)) break;L && "inline" == l.getComputedStyle("display") || (L = !1, F ? r = l : l && this.setEndAfter(l));t = l.getNext();
              }for (; t;) {
                C = !1;if (t.type == CKEDITOR.NODE_TEXT) M = t.getText(), h(t, 0) || (t = null), C = /^[\s\ufeff]/.test(M);else if (t.type == CKEDITOR.NODE_ELEMENT) {
                  if ((0 < t.$.offsetWidth || b && t.is("br")) && !t.data("cke-bookmark")) if (L && CKEDITOR.dtd.$removeEmpty[t.getName()]) {
                    M = t.getText();if (d.test(M)) t = null;else for (q = t.$.getElementsByTagName("*"), E = 0; z = q[E++];) {
                      if (!CKEDITOR.dtd.$removeEmpty[z.nodeName.toLowerCase()]) {
                        t = null;break;
                      }
                    }t && (C = !!M.length);
                  } else t = null;
                } else C = 1;C && L && (F ? r = l : this.setEndAfter(l));if (t) {
                  C = t.getNext();if (!l && !C) {
                    l = t;t = null;break;
                  }t = C;
                } else l = null;
              }l && (l = c(l.getParent()));
            }k && r && (m = k.contains(r) ? r : k, this.setStartBefore(m), this.setEndAfter(m));break;case CKEDITOR.ENLARGE_BLOCK_CONTENTS:case CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS:
            l = new CKEDITOR.dom.range(this.root);
            g = this.root;l.setStartAt(g, CKEDITOR.POSITION_AFTER_START);l.setEnd(this.startContainer, this.startOffset);l = new CKEDITOR.dom.walker(l);var H,
                P,
                O = CKEDITOR.dom.walker.blockBoundary(a == CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS ? { br: 1 } : null),
                p = null,
                N = function N(a) {
              if (a.type == CKEDITOR.NODE_ELEMENT && "false" == a.getAttribute("contenteditable")) {
                if (p) {
                  if (p.equals(a)) {
                    p = null;return;
                  }
                } else p = a;
              } else if (p) return;var b = O(a);b || (H = a);return b;
            },
                f = function f(a) {
              var b = N(a);!b && a.is && a.is("br") && (P = a);return b;
            };l.guard = N;l = l.lastBackward();
            H = H || g;this.setStartAt(H, !H.is("br") && (!l && this.checkStartOfBlock() || l && H.contains(l)) ? CKEDITOR.POSITION_AFTER_START : CKEDITOR.POSITION_AFTER_END);if (a == CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS) {
              l = this.clone();l = new CKEDITOR.dom.walker(l);var w = CKEDITOR.dom.walker.whitespaces(),
                  B = CKEDITOR.dom.walker.bookmark();l.evaluator = function (a) {
                return !w(a) && !B(a);
              };if ((l = l.previous()) && l.type == CKEDITOR.NODE_ELEMENT && l.is("br")) break;
            }l = this.clone();l.collapse();l.setEndAt(g, CKEDITOR.POSITION_BEFORE_END);l = new CKEDITOR.dom.walker(l);
            l.guard = a == CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS ? f : N;H = p = P = null;l = l.lastForward();H = H || g;this.setEndAt(H, !l && this.checkEndOfBlock() || l && H.contains(l) ? CKEDITOR.POSITION_BEFORE_END : CKEDITOR.POSITION_BEFORE_START);P && this.setEndAfter(P);}
      }, shrink: function shrink(a, b, c) {
        var d = "boolean" === typeof c ? c : c && "boolean" === typeof c.shrinkOnBlockBoundary ? c.shrinkOnBlockBoundary : !0,
            f = c && c.skipBogus;if (!this.collapsed) {
          a = a || CKEDITOR.SHRINK_TEXT;var h = this.clone(),
              m = this.startContainer,
              g = this.endContainer,
              k = this.startOffset,
              r = this.endOffset,
              l = c = 1;m && m.type == CKEDITOR.NODE_TEXT && (k ? k >= m.getLength() ? h.setStartAfter(m) : (h.setStartBefore(m), c = 0) : h.setStartBefore(m));g && g.type == CKEDITOR.NODE_TEXT && (r ? r >= g.getLength() ? h.setEndAfter(g) : (h.setEndAfter(g), l = 0) : h.setEndBefore(g));var h = new CKEDITOR.dom.walker(h),
              t = CKEDITOR.dom.walker.bookmark(),
              F = CKEDITOR.dom.walker.bogus();h.evaluator = function (b) {
            return b.type == (a == CKEDITOR.SHRINK_ELEMENT ? CKEDITOR.NODE_ELEMENT : CKEDITOR.NODE_TEXT);
          };var L;h.guard = function (b, c) {
            if (f && F(b) || t(b)) return !0;
            if (a == CKEDITOR.SHRINK_ELEMENT && b.type == CKEDITOR.NODE_TEXT || c && b.equals(L) || !1 === d && b.type == CKEDITOR.NODE_ELEMENT && b.isBlockBoundary() || b.type == CKEDITOR.NODE_ELEMENT && b.hasAttribute("contenteditable")) return !1;c || b.type != CKEDITOR.NODE_ELEMENT || (L = b);return !0;
          };c && (m = h[a == CKEDITOR.SHRINK_ELEMENT ? "lastForward" : "next"]()) && this.setStartAt(m, b ? CKEDITOR.POSITION_AFTER_START : CKEDITOR.POSITION_BEFORE_START);l && (h.reset(), (h = h[a == CKEDITOR.SHRINK_ELEMENT ? "lastBackward" : "previous"]()) && this.setEndAt(h, b ? CKEDITOR.POSITION_BEFORE_END : CKEDITOR.POSITION_AFTER_END));return !(!c && !l);
        }
      }, insertNode: function insertNode(a) {
        this.optimizeBookmark();this.trim(!1, !0);var b = this.startContainer,
            c = b.getChild(this.startOffset);c ? a.insertBefore(c) : b.append(a);a.getParent() && a.getParent().equals(this.endContainer) && this.endOffset++;this.setStartBefore(a);
      }, moveToPosition: function moveToPosition(a, b) {
        this.setStartAt(a, b);this.collapse(!0);
      }, moveToRange: function moveToRange(a) {
        this.setStart(a.startContainer, a.startOffset);this.setEnd(a.endContainer, a.endOffset);
      }, selectNodeContents: function selectNodeContents(a) {
        this.setStart(a, 0);this.setEnd(a, a.type == CKEDITOR.NODE_TEXT ? a.getLength() : a.getChildCount());
      }, setStart: function setStart(b, c) {
        b.type == CKEDITOR.NODE_ELEMENT && CKEDITOR.dtd.$empty[b.getName()] && (c = b.getIndex(), b = b.getParent());this._setStartContainer(b);this.startOffset = c;this.endContainer || (this._setEndContainer(b), this.endOffset = c);a(this);
      }, setEnd: function setEnd(b, c) {
        b.type == CKEDITOR.NODE_ELEMENT && CKEDITOR.dtd.$empty[b.getName()] && (c = b.getIndex() + 1, b = b.getParent());this._setEndContainer(b);this.endOffset = c;this.startContainer || (this._setStartContainer(b), this.startOffset = c);a(this);
      }, setStartAfter: function setStartAfter(a) {
        this.setStart(a.getParent(), a.getIndex() + 1);
      }, setStartBefore: function setStartBefore(a) {
        this.setStart(a.getParent(), a.getIndex());
      }, setEndAfter: function setEndAfter(a) {
        this.setEnd(a.getParent(), a.getIndex() + 1);
      }, setEndBefore: function setEndBefore(a) {
        this.setEnd(a.getParent(), a.getIndex());
      }, setStartAt: function setStartAt(b, c) {
        switch (c) {case CKEDITOR.POSITION_AFTER_START:
            this.setStart(b, 0);break;case CKEDITOR.POSITION_BEFORE_END:
            b.type == CKEDITOR.NODE_TEXT ? this.setStart(b, b.getLength()) : this.setStart(b, b.getChildCount());break;case CKEDITOR.POSITION_BEFORE_START:
            this.setStartBefore(b);break;case CKEDITOR.POSITION_AFTER_END:
            this.setStartAfter(b);}a(this);
      }, setEndAt: function setEndAt(b, c) {
        switch (c) {case CKEDITOR.POSITION_AFTER_START:
            this.setEnd(b, 0);break;case CKEDITOR.POSITION_BEFORE_END:
            b.type == CKEDITOR.NODE_TEXT ? this.setEnd(b, b.getLength()) : this.setEnd(b, b.getChildCount());break;case CKEDITOR.POSITION_BEFORE_START:
            this.setEndBefore(b);break;case CKEDITOR.POSITION_AFTER_END:
            this.setEndAfter(b);}a(this);
      },
      fixBlock: function fixBlock(a, b) {
        var c = this.createBookmark(),
            d = this.document.createElement(b);this.collapse(a);this.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS);this.extractContents().appendTo(d);d.trim();this.insertNode(d);var f = d.getBogus();f && f.remove();d.appendBogus();this.moveToBookmark(c);return d;
      }, splitBlock: function splitBlock(a, b) {
        var c = new CKEDITOR.dom.elementPath(this.startContainer, this.root),
            d = new CKEDITOR.dom.elementPath(this.endContainer, this.root),
            f = c.block,
            h = d.block,
            m = null;if (!c.blockLimit.equals(d.blockLimit)) return null;
        "br" != a && (f || (f = this.fixBlock(!0, a), h = new CKEDITOR.dom.elementPath(this.endContainer, this.root).block), h || (h = this.fixBlock(!1, a)));c = f && this.checkStartOfBlock();d = h && this.checkEndOfBlock();this.deleteContents();f && f.equals(h) && (d ? (m = new CKEDITOR.dom.elementPath(this.startContainer, this.root), this.moveToPosition(h, CKEDITOR.POSITION_AFTER_END), h = null) : c ? (m = new CKEDITOR.dom.elementPath(this.startContainer, this.root), this.moveToPosition(f, CKEDITOR.POSITION_BEFORE_START), f = null) : (h = this.splitElement(f, b || !1), f.is("ul", "ol") || f.appendBogus()));return { previousBlock: f, nextBlock: h, wasStartOfBlock: c, wasEndOfBlock: d, elementPath: m };
      }, splitElement: function splitElement(a, b) {
        if (!this.collapsed) return null;this.setEndAt(a, CKEDITOR.POSITION_BEFORE_END);var c = this.extractContents(!1, b || !1),
            d = a.clone(!1, b || !1);c.appendTo(d);d.insertAfter(a);this.moveToPosition(a, CKEDITOR.POSITION_AFTER_END);return d;
      }, removeEmptyBlocksAtEnd: function () {
        function a(d) {
          return function (a) {
            return b(a) || c(a) || a.type == CKEDITOR.NODE_ELEMENT && a.isEmptyInlineRemoveable() || d.is("table") && a.is("caption") ? !1 : !0;
          };
        }var b = CKEDITOR.dom.walker.whitespaces(),
            c = CKEDITOR.dom.walker.bookmark(!1);return function (b) {
          for (var c = this.createBookmark(), d = this[b ? "endPath" : "startPath"](), f = d.block || d.blockLimit, h; f && !f.equals(d.root) && !f.getFirst(a(f));) {
            h = f.getParent(), this[b ? "setEndAt" : "setStartAt"](f, CKEDITOR.POSITION_AFTER_END), f.remove(1), f = h;
          }this.moveToBookmark(c);
        };
      }(), startPath: function startPath() {
        return new CKEDITOR.dom.elementPath(this.startContainer, this.root);
      }, endPath: function endPath() {
        return new CKEDITOR.dom.elementPath(this.endContainer, this.root);
      }, checkBoundaryOfElement: function checkBoundaryOfElement(a, b) {
        var d = b == CKEDITOR.START,
            f = this.clone();f.collapse(d);f[d ? "setStartAt" : "setEndAt"](a, d ? CKEDITOR.POSITION_AFTER_START : CKEDITOR.POSITION_BEFORE_END);f = new CKEDITOR.dom.walker(f);f.evaluator = c(d);return f[d ? "checkBackward" : "checkForward"]();
      }, checkStartOfBlock: function checkStartOfBlock() {
        var a = this.startContainer,
            c = this.startOffset;CKEDITOR.env.ie && c && a.type == CKEDITOR.NODE_TEXT && (a = CKEDITOR.tools.ltrim(a.substring(0, c)), g.test(a) && this.trim(0, 1));this.trim();a = new CKEDITOR.dom.elementPath(this.startContainer, this.root);c = this.clone();c.collapse(!0);c.setStartAt(a.block || a.blockLimit, CKEDITOR.POSITION_AFTER_START);a = new CKEDITOR.dom.walker(c);a.evaluator = b();return a.checkBackward();
      }, checkEndOfBlock: function checkEndOfBlock() {
        var a = this.endContainer,
            c = this.endOffset;CKEDITOR.env.ie && a.type == CKEDITOR.NODE_TEXT && (a = CKEDITOR.tools.rtrim(a.substring(c)), g.test(a) && this.trim(1, 0));this.trim();a = new CKEDITOR.dom.elementPath(this.endContainer, this.root);c = this.clone();c.collapse(!1);c.setEndAt(a.block || a.blockLimit, CKEDITOR.POSITION_BEFORE_END);
        a = new CKEDITOR.dom.walker(c);a.evaluator = b();return a.checkForward();
      }, getPreviousNode: function getPreviousNode(a, b, c) {
        var d = this.clone();d.collapse(1);d.setStartAt(c || this.root, CKEDITOR.POSITION_AFTER_START);c = new CKEDITOR.dom.walker(d);c.evaluator = a;c.guard = b;return c.previous();
      }, getNextNode: function getNextNode(a, b, c) {
        var d = this.clone();d.collapse();d.setEndAt(c || this.root, CKEDITOR.POSITION_BEFORE_END);c = new CKEDITOR.dom.walker(d);c.evaluator = a;c.guard = b;return c.next();
      }, checkReadOnly: function () {
        function a(b, c) {
          for (; b;) {
            if (b.type == CKEDITOR.NODE_ELEMENT) {
              if ("false" == b.getAttribute("contentEditable") && !b.data("cke-editable")) return 0;if (b.is("html") || "true" == b.getAttribute("contentEditable") && (b.contains(c) || b.equals(c))) break;
            }b = b.getParent();
          }return 1;
        }return function () {
          var b = this.startContainer,
              c = this.endContainer;return !(a(b, c) && a(c, b));
        };
      }(), moveToElementEditablePosition: function moveToElementEditablePosition(a, b) {
        if (a.type == CKEDITOR.NODE_ELEMENT && !a.isEditable(!1)) return this.moveToPosition(a, b ? CKEDITOR.POSITION_AFTER_END : CKEDITOR.POSITION_BEFORE_START), !0;for (var c = 0; a;) {
          if (a.type == CKEDITOR.NODE_TEXT) {
            b && this.endContainer && this.checkEndOfBlock() && g.test(a.getText()) ? this.moveToPosition(a, CKEDITOR.POSITION_BEFORE_START) : this.moveToPosition(a, b ? CKEDITOR.POSITION_AFTER_END : CKEDITOR.POSITION_BEFORE_START);c = 1;break;
          }if (a.type == CKEDITOR.NODE_ELEMENT) if (a.isEditable()) this.moveToPosition(a, b ? CKEDITOR.POSITION_BEFORE_END : CKEDITOR.POSITION_AFTER_START), c = 1;else if (b && a.is("br") && this.endContainer && this.checkEndOfBlock()) this.moveToPosition(a, CKEDITOR.POSITION_BEFORE_START);else if ("false" == a.getAttribute("contenteditable") && a.is(CKEDITOR.dtd.$block)) return this.setStartBefore(a), this.setEndAfter(a), !0;var d = a,
              f = c,
              h = void 0;d.type == CKEDITOR.NODE_ELEMENT && d.isEditable(!1) && (h = d[b ? "getLast" : "getFirst"](r));f || h || (h = d[b ? "getPrevious" : "getNext"](r));a = h;
        }return !!c;
      }, moveToClosestEditablePosition: function moveToClosestEditablePosition(a, b) {
        var c,
            d = 0,
            f,
            h,
            m = [CKEDITOR.POSITION_AFTER_END, CKEDITOR.POSITION_BEFORE_START];a ? (c = new CKEDITOR.dom.range(this.root), c.moveToPosition(a, m[b ? 0 : 1])) : c = this.clone();if (a && !a.is(CKEDITOR.dtd.$block)) d = 1;else if (f = c[b ? "getNextEditableNode" : "getPreviousEditableNode"]()) d = 1, (h = f.type == CKEDITOR.NODE_ELEMENT) && f.is(CKEDITOR.dtd.$block) && "false" == f.getAttribute("contenteditable") ? (c.setStartAt(f, CKEDITOR.POSITION_BEFORE_START), c.setEndAt(f, CKEDITOR.POSITION_AFTER_END)) : !CKEDITOR.env.needsBrFiller && h && f.is(CKEDITOR.dom.walker.validEmptyBlockContainers) ? (c.setEnd(f, 0), c.collapse()) : c.moveToPosition(f, m[b ? 1 : 0]);d && this.moveToRange(c);return !!d;
      }, moveToElementEditStart: function moveToElementEditStart(a) {
        return this.moveToElementEditablePosition(a);
      },
      moveToElementEditEnd: function moveToElementEditEnd(a) {
        return this.moveToElementEditablePosition(a, !0);
      }, getEnclosedNode: function getEnclosedNode() {
        var a = this.clone();a.optimize();if (a.startContainer.type != CKEDITOR.NODE_ELEMENT || a.endContainer.type != CKEDITOR.NODE_ELEMENT) return null;var a = new CKEDITOR.dom.walker(a),
            b = CKEDITOR.dom.walker.bookmark(!1, !0),
            c = CKEDITOR.dom.walker.whitespaces(!0);a.evaluator = function (a) {
          return c(a) && b(a);
        };var d = a.next();a.reset();return d && d.equals(a.previous()) ? d : null;
      }, getTouchedStartNode: function getTouchedStartNode() {
        var a = this.startContainer;
        return this.collapsed || a.type != CKEDITOR.NODE_ELEMENT ? a : a.getChild(this.startOffset) || a;
      }, getTouchedEndNode: function getTouchedEndNode() {
        var a = this.endContainer;return this.collapsed || a.type != CKEDITOR.NODE_ELEMENT ? a : a.getChild(this.endOffset - 1) || a;
      }, getNextEditableNode: f(), getPreviousEditableNode: f(1), _getTableElement: function _getTableElement(a) {
        a = a || { td: 1, th: 1, tr: 1, tbody: 1, thead: 1, tfoot: 1, table: 1 };var b = this.startContainer,
            c = this.endContainer,
            d = b.getAscendant("table", !0),
            f = c.getAscendant("table", !0);return CKEDITOR.env.safari && d && c.equals(this.root) ? b.getAscendant(a, !0) : this.getEnclosedNode() ? this.getEnclosedNode().getAscendant(a, !0) : d && f && (d.equals(f) || d.contains(f) || f.contains(d)) ? b.getAscendant(a, !0) : null;
      }, scrollIntoView: function scrollIntoView() {
        var a = new CKEDITOR.dom.element.createFromHtml("\x3cspan\x3e\x26nbsp;\x3c/span\x3e", this.document),
            b,
            c,
            d,
            f = this.clone();f.optimize();(d = f.startContainer.type == CKEDITOR.NODE_TEXT) ? (c = f.startContainer.getText(), b = f.startContainer.split(f.startOffset), a.insertAfter(f.startContainer)) : f.insertNode(a);a.scrollIntoView();
        d && (f.startContainer.setText(c), b.remove());a.remove();
      }, getClientRects: function () {
        function a(b, c) {
          var d = CKEDITOR.tools.array.map(b, function (a) {
            return a;
          }),
              e = new CKEDITOR.dom.range(c.root),
              f,
              h,
              l;c.startContainer instanceof CKEDITOR.dom.element && (h = 0 === c.startOffset && c.startContainer.hasAttribute("data-widget"));c.endContainer instanceof CKEDITOR.dom.element && (l = (l = c.endOffset === (c.endContainer.getChildCount ? c.endContainer.getChildCount() : c.endContainer.length)) && c.endContainer.hasAttribute("data-widget"));
          h && e.setStart(c.startContainer.getParent(), c.startContainer.getIndex());l && e.setEnd(c.endContainer.getParent(), c.endContainer.getIndex() + 1);if (h || l) c = e;e = c.cloneContents();e = CKEDITOR.dom.document.prototype.find.call(e, "[data-cke-widget-id]").toArray();if (e = CKEDITOR.tools.array.map(e, function (a) {
            var b = c.root.editor;a = a.getAttribute("data-cke-widget-id");return b.widgets.instances[a].element;
          })) return e = CKEDITOR.tools.array.map(e, function (a) {
            var b;b = a.getParent().hasClass("cke_widget_wrapper") ? a.getParent() : a;f = this.root.getDocument().$.createRange();f.setStart(b.getParent().$, b.getIndex());f.setEnd(b.getParent().$, b.getIndex() + 1);b = f.getClientRects();b.widgetRect = a.getClientRect();return b;
          }, c), CKEDITOR.tools.array.forEach(e, function (a) {
            function b(e) {
              CKEDITOR.tools.array.forEach(d, function (b, f) {
                var l = CKEDITOR.tools.objectCompare(a[e], b);l || (l = CKEDITOR.tools.objectCompare(a.widgetRect, b));l && (Array.prototype.splice.call(d, f, a.length - e, a.widgetRect), c = !0);
              });c || (e < d.length - 1 ? b(e + 1) : d.push(a.widgetRect));
            }
            var c;b(0);
          }), d;
        }function b(a, c, e) {
          var f;c.collapsed ? e.startContainer instanceof CKEDITOR.dom.element ? (a = e.checkStartOfBlock(), f = new CKEDITOR.dom.text("​"), a ? e.startContainer.append(f, !0) : 0 === e.startOffset ? f.insertBefore(e.startContainer.getFirst()) : (e = e.startContainer.getChildren().getItem(e.startOffset - 1), f.insertAfter(e)), c.setStart(f.$, 0), c.setEnd(f.$, 0), a = c.getClientRects(), f.remove()) : e.startContainer instanceof CKEDITOR.dom.text && ("" === e.startContainer.getText() ? (e.startContainer.setText("​"), a = c.getClientRects(), e.startContainer.setText("")) : a = [d(e.createBookmark())]) : a = [d(e.createBookmark())];return a;
        }function c(a, b, d) {
          a = CKEDITOR.tools.extend({}, a);b && (a = CKEDITOR.tools.getAbsoluteRectPosition(d.document.getWindow(), a));!a.width && (a.width = a.right - a.left);!a.height && (a.height = a.bottom - a.top);return a;
        }function d(a) {
          var b = a.startNode;a = a.endNode;var c;b.setText("​");b.removeStyle("display");a ? (a.setText("​"), a.removeStyle("display"), c = [b.getClientRect(), a.getClientRect()], a.remove()) : c = [b.getClientRect(), b.getClientRect()];b.remove();return { right: Math.max(c[0].right, c[1].right), bottom: Math.max(c[0].bottom, c[1].bottom), left: Math.min(c[0].left, c[1].left), top: Math.min(c[0].top, c[1].top), width: Math.abs(c[0].left - c[1].left), height: Math.max(c[0].bottom, c[1].bottom) - Math.min(c[0].top, c[1].top) };
        }return void 0 !== this.document.getSelection ? function (d) {
          var f = this.root.getDocument().$.createRange(),
              m;f.setStart(this.startContainer.$, this.startOffset);f.setEnd(this.endContainer.$, this.endOffset);
          m = f.getClientRects();m = a(m, this);m.length || (m = b(m, f, this));return CKEDITOR.tools.array.map(m, function (a) {
            return c(a, d, this);
          }, this);
        } : function (a) {
          return [c(d(this.createBookmark()), a, this)];
        };
      }(), _setStartContainer: function _setStartContainer(a) {
        this.startContainer = a;
      }, _setEndContainer: function _setEndContainer(a) {
        this.endContainer = a;
      }, _find: function _find(a, b) {
        var c = this.getCommonAncestor(),
            d = this.getBoundaryNodes(),
            f = [],
            h,
            m,
            g,
            k;if (c && c.find) for (m = c.find(a), h = 0; h < m.count(); h++) {
          if (c = m.getItem(h), b || !c.isReadOnly()) g = c.getPosition(d.startNode) & CKEDITOR.POSITION_FOLLOWING || d.startNode.equals(c), k = c.getPosition(d.endNode) & CKEDITOR.POSITION_PRECEDING + CKEDITOR.POSITION_IS_CONTAINED || d.endNode.equals(c), g && k && f.push(c);
        }return f;
      } };CKEDITOR.dom.range.mergeRanges = function (a) {
      return CKEDITOR.tools.array.reduce(a, function (a, b) {
        var c = a[a.length - 1],
            d = !1;b = b.clone();b.enlarge(CKEDITOR.ENLARGE_ELEMENT);if (c) {
          var e = new CKEDITOR.dom.range(b.root),
              d = new CKEDITOR.dom.walker(e),
              f = CKEDITOR.dom.walker.whitespaces();e.setStart(c.endContainer, c.endOffset);e.setEnd(b.startContainer, b.startOffset);
          for (e = d.next(); f(e) || b.endContainer.equals(e);) {
            e = d.next();
          }d = !e;
        }d ? c.setEnd(b.endContainer, b.endOffset) : a.push(b);return a;
      }, []);
    };
  })();CKEDITOR.POSITION_AFTER_START = 1;CKEDITOR.POSITION_BEFORE_END = 2;CKEDITOR.POSITION_BEFORE_START = 3;CKEDITOR.POSITION_AFTER_END = 4;CKEDITOR.ENLARGE_ELEMENT = 1;CKEDITOR.ENLARGE_BLOCK_CONTENTS = 2;CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS = 3;CKEDITOR.ENLARGE_INLINE = 4;CKEDITOR.START = 1;CKEDITOR.END = 2;CKEDITOR.SHRINK_ELEMENT = 1;CKEDITOR.SHRINK_TEXT = 2;"use strict";
  (function () {
    function a(a) {
      1 > arguments.length || (this.range = a, this.forceBrBreak = 0, this.enlargeBr = 1, this.enforceRealBlocks = 0, this._ || (this._ = {}));
    }function d(a) {
      var b = [];a.forEach(function (a) {
        if ("true" == a.getAttribute("contenteditable")) return b.push(a), !1;
      }, CKEDITOR.NODE_ELEMENT, !0);return b;
    }function b(a, c, f, h) {
      a: {
        null == h && (h = d(f));for (var g; g = h.shift();) {
          if (g.getDtd().p) {
            h = { element: g, remaining: h };break a;
          }
        }h = null;
      }if (!h) return 0;if ((g = CKEDITOR.filter.instances[h.element.data("cke-filter")]) && !g.check(c)) return b(a, c, f, h.remaining);c = new CKEDITOR.dom.range(h.element);c.selectNodeContents(h.element);c = c.createIterator();c.enlargeBr = a.enlargeBr;c.enforceRealBlocks = a.enforceRealBlocks;c.activeFilter = c.filter = g;a._.nestedEditable = { element: h.element, container: f, remaining: h.remaining, iterator: c };return 1;
    }function c(a, b, c) {
      if (!b) return !1;a = a.clone();a.collapse(!c);return a.checkBoundaryOfElement(b, c ? CKEDITOR.START : CKEDITOR.END);
    }var f = /^[\r\n\t ]+$/,
        h = CKEDITOR.dom.walker.bookmark(!1, !0),
        k = CKEDITOR.dom.walker.whitespaces(!0),
        g = function g(a) {
      return h(a) && k(a);
    },
        n = { dd: 1, dt: 1, li: 1 };a.prototype = { getNextParagraph: function getNextParagraph(a) {
        var d, k, v, A, D;a = a || "p";if (this._.nestedEditable) {
          if (d = this._.nestedEditable.iterator.getNextParagraph(a)) return this.activeFilter = this._.nestedEditable.iterator.activeFilter, d;this.activeFilter = this.filter;if (b(this, a, this._.nestedEditable.container, this._.nestedEditable.remaining)) return this.activeFilter = this._.nestedEditable.iterator.activeFilter, this._.nestedEditable.iterator.getNextParagraph(a);this._.nestedEditable = null;
        }if (!this.range.root.getDtd()[a]) return null;if (!this._.started) {
          var x = this.range.clone();k = x.startPath();var m = x.endPath(),
              J = !x.collapsed && c(x, k.block),
              u = !x.collapsed && c(x, m.block, 1);x.shrink(CKEDITOR.SHRINK_ELEMENT, !0);J && x.setStartAt(k.block, CKEDITOR.POSITION_BEFORE_END);u && x.setEndAt(m.block, CKEDITOR.POSITION_AFTER_START);k = x.endContainer.hasAscendant("pre", !0) || x.startContainer.hasAscendant("pre", !0);x.enlarge(this.forceBrBreak && !k || !this.enlargeBr ? CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS : CKEDITOR.ENLARGE_BLOCK_CONTENTS);
          x.collapsed || (k = new CKEDITOR.dom.walker(x.clone()), m = CKEDITOR.dom.walker.bookmark(!0, !0), k.evaluator = m, this._.nextNode = k.next(), k = new CKEDITOR.dom.walker(x.clone()), k.evaluator = m, k = k.previous(), this._.lastNode = k.getNextSourceNode(!0, null, x.root), this._.lastNode && this._.lastNode.type == CKEDITOR.NODE_TEXT && !CKEDITOR.tools.trim(this._.lastNode.getText()) && this._.lastNode.getParent().isBlockBoundary() && (m = this.range.clone(), m.moveToPosition(this._.lastNode, CKEDITOR.POSITION_AFTER_END), m.checkEndOfBlock() && (m = new CKEDITOR.dom.elementPath(m.endContainer, m.root), this._.lastNode = (m.block || m.blockLimit).getNextSourceNode(!0))), this._.lastNode && x.root.contains(this._.lastNode) || (this._.lastNode = this._.docEndMarker = x.document.createText(""), this._.lastNode.insertAfter(k)), x = null);this._.started = 1;k = x;
        }m = this._.nextNode;x = this._.lastNode;for (this._.nextNode = null; m;) {
          var J = 0,
              u = m.hasAscendant("pre"),
              K = m.type != CKEDITOR.NODE_ELEMENT,
              l = 0;if (K) m.type == CKEDITOR.NODE_TEXT && f.test(m.getText()) && (K = 0);else {
            var t = m.getName();
            if (CKEDITOR.dtd.$block[t] && "false" == m.getAttribute("contenteditable")) {
              d = m;b(this, a, d);break;
            } else if (m.isBlockBoundary(this.forceBrBreak && !u && { br: 1 })) {
              if ("br" == t) K = 1;else if (!k && !m.getChildCount() && "hr" != t) {
                d = m;v = m.equals(x);break;
              }k && (k.setEndAt(m, CKEDITOR.POSITION_BEFORE_START), "br" != t && (this._.nextNode = m));J = 1;
            } else {
              if (m.getFirst()) {
                k || (k = this.range.clone(), k.setStartAt(m, CKEDITOR.POSITION_BEFORE_START));m = m.getFirst();continue;
              }K = 1;
            }
          }K && !k && (k = this.range.clone(), k.setStartAt(m, CKEDITOR.POSITION_BEFORE_START));
          v = (!J || K) && m.equals(x);if (k && !J) for (; !m.getNext(g) && !v;) {
            t = m.getParent();if (t.isBlockBoundary(this.forceBrBreak && !u && { br: 1 })) {
              J = 1;K = 0;v || t.equals(x);k.setEndAt(t, CKEDITOR.POSITION_BEFORE_END);break;
            }m = t;K = 1;v = m.equals(x);l = 1;
          }K && k.setEndAt(m, CKEDITOR.POSITION_AFTER_END);m = this._getNextSourceNode(m, l, x);if ((v = !m) || J && k) break;
        }if (!d) {
          if (!k) return this._.docEndMarker && this._.docEndMarker.remove(), this._.nextNode = null;d = new CKEDITOR.dom.elementPath(k.startContainer, k.root);m = d.blockLimit;J = { div: 1, th: 1, td: 1 };
          d = d.block;!d && m && !this.enforceRealBlocks && J[m.getName()] && k.checkStartOfBlock() && k.checkEndOfBlock() && !m.equals(k.root) ? d = m : !d || this.enforceRealBlocks && d.is(n) ? (d = this.range.document.createElement(a), k.extractContents().appendTo(d), d.trim(), k.insertNode(d), A = D = !0) : "li" != d.getName() ? k.checkStartOfBlock() && k.checkEndOfBlock() || (d = d.clone(!1), k.extractContents().appendTo(d), d.trim(), D = k.splitBlock(), A = !D.wasStartOfBlock, D = !D.wasEndOfBlock, k.insertNode(d)) : v || (this._.nextNode = d.equals(x) ? null : this._getNextSourceNode(k.getBoundaryNodes().endNode, 1, x));
        }A && (A = d.getPrevious()) && A.type == CKEDITOR.NODE_ELEMENT && ("br" == A.getName() ? A.remove() : A.getLast() && "br" == A.getLast().$.nodeName.toLowerCase() && A.getLast().remove());D && (A = d.getLast()) && A.type == CKEDITOR.NODE_ELEMENT && "br" == A.getName() && (!CKEDITOR.env.needsBrFiller || A.getPrevious(h) || A.getNext(h)) && A.remove();this._.nextNode || (this._.nextNode = v || d.equals(x) || !x ? null : this._getNextSourceNode(d, 1, x));return d;
      }, _getNextSourceNode: function _getNextSourceNode(a, b, c) {
        function d(a) {
          return !(a.equals(c) || a.equals(f));
        }var f = this.range.root;for (a = a.getNextSourceNode(b, null, d); !h(a);) {
          a = a.getNextSourceNode(b, null, d);
        }return a;
      } };CKEDITOR.dom.range.prototype.createIterator = function () {
      return new a(this);
    };
  })();
  CKEDITOR.command = function (a, d) {
    this.uiItems = [];this.exec = function (b) {
      if (this.state == CKEDITOR.TRISTATE_DISABLED || !this.checkAllowed()) return !1;this.editorFocus && a.focus();return !1 === this.fire("exec") ? !0 : !1 !== d.exec.call(this, a, b);
    };this.refresh = function (a, b) {
      if (!this.readOnly && a.readOnly) return !0;if (this.context && !b.isContextFor(this.context) || !this.checkAllowed(!0)) return this.disable(), !0;this.startDisabled || this.enable();this.modes && !this.modes[a.mode] && this.disable();return !1 === this.fire("refresh", { editor: a, path: b }) ? !0 : d.refresh && !1 !== d.refresh.apply(this, arguments);
    };var b;this.checkAllowed = function (c) {
      return c || "boolean" != typeof b ? b = a.activeFilter.checkFeature(this) : b;
    };CKEDITOR.tools.extend(this, d, { modes: { wysiwyg: 1 }, editorFocus: 1, contextSensitive: !!d.context, state: CKEDITOR.TRISTATE_DISABLED });CKEDITOR.event.call(this);
  };
  CKEDITOR.command.prototype = { enable: function enable() {
      this.state == CKEDITOR.TRISTATE_DISABLED && this.checkAllowed() && this.setState(this.preserveState && "undefined" != typeof this.previousState ? this.previousState : CKEDITOR.TRISTATE_OFF);
    }, disable: function disable() {
      this.setState(CKEDITOR.TRISTATE_DISABLED);
    }, setState: function setState(a) {
      if (this.state == a || a != CKEDITOR.TRISTATE_DISABLED && !this.checkAllowed()) return !1;this.previousState = this.state;this.state = a;this.fire("state");return !0;
    }, toggleState: function toggleState() {
      this.state == CKEDITOR.TRISTATE_OFF ? this.setState(CKEDITOR.TRISTATE_ON) : this.state == CKEDITOR.TRISTATE_ON && this.setState(CKEDITOR.TRISTATE_OFF);
    } };CKEDITOR.event.implementOn(CKEDITOR.command.prototype);CKEDITOR.ENTER_P = 1;CKEDITOR.ENTER_BR = 2;CKEDITOR.ENTER_DIV = 3;
  CKEDITOR.config = { customConfig: "config.js", autoUpdateElement: !0, language: "", defaultLanguage: "en", contentsLangDirection: "", enterMode: CKEDITOR.ENTER_P, forceEnterMode: !1, shiftEnterMode: CKEDITOR.ENTER_BR, docType: "\x3c!DOCTYPE html\x3e", bodyId: "", bodyClass: "", fullPage: !1, height: 200, contentsCss: CKEDITOR.getUrl("contents.css"), extraPlugins: "", removePlugins: "", protectedSource: [], tabIndex: 0, width: "", baseFloatZIndex: 1E4, blockedKeystrokes: [CKEDITOR.CTRL + 66, CKEDITOR.CTRL + 73, CKEDITOR.CTRL + 85] };
  (function () {
    function a(a, b, c, d, f) {
      var e, w;a = [];for (e in b) {
        w = b[e];w = "boolean" == typeof w ? {} : "function" == typeof w ? { match: w } : E(w);"$" != e.charAt(0) && (w.elements = e);c && (w.featureName = c.toLowerCase());var l = w;l.elements = k(l.elements, /\s+/) || null;l.propertiesOnly = l.propertiesOnly || !0 === l.elements;var p = /\s*,\s*/,
            m = void 0;for (m in P) {
          l[m] = k(l[m], p) || null;var h = l,
              t = O[m],
              q = k(l[O[m]], p),
              z = l[m],
              B = [],
              g = !0,
              H = void 0;q ? g = !1 : q = {};for (H in z) {
            "!" == H.charAt(0) && (H = H.slice(1), B.push(H), q[H] = !0, g = !1);
          }for (; H = B.pop();) {
            z[H] = z["!" + H], delete z["!" + H];
          }h[t] = (g ? !1 : q) || null;
        }l.match = l.match || null;d.push(w);a.push(w);
      }b = f.elements;f = f.generic;var F;c = 0;for (d = a.length; c < d; ++c) {
        e = E(a[c]);w = !0 === e.classes || !0 === e.styles || !0 === e.attributes;l = e;m = t = p = void 0;for (p in P) {
          l[p] = J(l[p]);
        }h = !0;for (m in O) {
          p = O[m];t = l[p];q = [];z = void 0;for (z in t) {
            -1 < z.indexOf("*") ? q.push(new RegExp("^" + z.replace(/\*/g, ".*") + "$")) : q.push(z);
          }t = q;t.length && (l[p] = t, h = !1);
        }l.nothingRequired = h;l.noProperties = !(l.attributes || l.classes || l.styles);if (!0 === e.elements || null === e.elements) f[w ? "unshift" : "push"](e);else for (F in l = e.elements, delete e.elements, l) {
          if (b[F]) b[F][w ? "unshift" : "push"](e);else b[F] = [e];
        }
      }
    }function d(a, c, d, f) {
      if (!a.match || a.match(c)) if (f || g(a, c)) if (a.propertiesOnly || (d.valid = !0), d.allAttributes || (d.allAttributes = b(a.attributes, c.attributes, d.validAttributes)), d.allStyles || (d.allStyles = b(a.styles, c.styles, d.validStyles)), !d.allClasses) {
        a = a.classes;c = c.classes;f = d.validClasses;if (a) {
          if (!0 === a) a = !0;else {
            for (var e = 0, w = c.length, l; e < w; ++e) {
              l = c[e], f[l] || (f[l] = a(l));
            }a = !1;
          }
        } else a = !1;d.allClasses = a;
      }
    }function b(a, b, c) {
      if (!a) return !1;if (!0 === a) return !0;for (var d in b) {
        c[d] || (c[d] = a(d));
      }return !1;
    }function c(a, b, c) {
      if (!a.match || a.match(b)) {
        if (a.noProperties) return !1;c.hadInvalidAttribute = f(a.attributes, b.attributes) || c.hadInvalidAttribute;c.hadInvalidStyle = f(a.styles, b.styles) || c.hadInvalidStyle;a = a.classes;b = b.classes;if (a) {
          for (var d = !1, e = !0 === a, l = b.length; l--;) {
            if (e || a(b[l])) b.splice(l, 1), d = !0;
          }a = d;
        } else a = !1;c.hadInvalidClass = a || c.hadInvalidClass;
      }
    }function f(a, b) {
      if (!a) return !1;var c = !1,
          d = !0 === a,
          f;for (f in b) {
        if (d || a(f)) delete b[f], c = !0;
      }return c;
    }function h(a, b, c) {
      if (a.disabled || a.customConfig && !c || !b) return !1;a._.cachedChecks = {};return !0;
    }function k(a, b) {
      if (!a) return !1;if (!0 === a) return a;if ("string" == typeof a) return a = z(a), "*" == a ? !0 : CKEDITOR.tools.convertArrayToObject(a.split(b));if (CKEDITOR.tools.isArray(a)) return a.length ? CKEDITOR.tools.convertArrayToObject(a) : !1;var c = {},
          d = 0,
          f;for (f in a) {
        c[f] = a[f], d++;
      }return d ? c : !1;
    }function g(a, b) {
      if (a.nothingRequired) return !0;
      var c, d, f, e;if (f = a.requiredClasses) for (e = b.classes, c = 0; c < f.length; ++c) {
        if (d = f[c], "string" == typeof d) {
          if (-1 == CKEDITOR.tools.indexOf(e, d)) return !1;
        } else if (!CKEDITOR.tools.checkIfAnyArrayItemMatches(e, d)) return !1;
      }return n(b.styles, a.requiredStyles) && n(b.attributes, a.requiredAttributes);
    }function n(a, b) {
      if (!b) return !0;for (var c = 0, d; c < b.length; ++c) {
        if (d = b[c], "string" == typeof d) {
          if (!(d in a)) return !1;
        } else if (!CKEDITOR.tools.checkIfAnyObjectPropertyMatches(a, d)) return !1;
      }return !0;
    }function r(a) {
      if (!a) return {};
      a = a.split(/\s*,\s*/).sort();for (var b = {}; a.length;) {
        b[a.shift()] = "cke-test";
      }return b;
    }function e(a) {
      var b,
          c,
          d,
          f,
          e = {},
          l = 1;for (a = z(a); b = a.match(p);) {
        (c = b[2]) ? (d = y(c, "styles"), f = y(c, "attrs"), c = y(c, "classes")) : d = f = c = null, e["$" + l++] = { elements: b[1], classes: c, styles: d, attributes: f }, a = a.slice(b[0].length);
      }return e;
    }function y(a, b) {
      var c = a.match(N[b]);return c ? z(c[1]) : null;
    }function v(a) {
      var b = a.styleBackup = a.attributes.style,
          c = a.classBackup = a.attributes["class"];a.styles || (a.styles = CKEDITOR.tools.parseCssText(b || "", 1));a.classes || (a.classes = c ? c.split(/\s+/) : []);
    }function A(a, b, f, e) {
      var l = 0,
          p;e.toHtml && (b.name = b.name.replace(w, "$1"));if (e.doCallbacks && a.elementCallbacks) {
        a: {
          p = a.elementCallbacks;for (var h = 0, q = p.length, E; h < q; ++h) {
            if (E = p[h](b)) {
              p = E;break a;
            }
          }p = void 0;
        }if (p) return p;
      }if (e.doTransform && (p = a._.transformations[b.name])) {
        v(b);for (h = 0; h < p.length; ++h) {
          t(a, b, p[h]);
        }x(b);
      }if (e.doFilter) {
        a: {
          h = b.name;q = a._;a = q.allowedRules.elements[h];p = q.allowedRules.generic;h = q.disallowedRules.elements[h];q = q.disallowedRules.generic;
          E = e.skipRequired;var z = { valid: !1, validAttributes: {}, validClasses: {}, validStyles: {}, allAttributes: !1, allClasses: !1, allStyles: !1, hadInvalidAttribute: !1, hadInvalidClass: !1, hadInvalidStyle: !1 },
              g,
              k;if (a || p) {
            v(b);if (h) for (g = 0, k = h.length; g < k; ++g) {
              if (!1 === c(h[g], b, z)) {
                a = null;break a;
              }
            }if (q) for (g = 0, k = q.length; g < k; ++g) {
              c(q[g], b, z);
            }if (a) for (g = 0, k = a.length; g < k; ++g) {
              d(a[g], b, z, E);
            }if (p) for (g = 0, k = p.length; g < k; ++g) {
              d(p[g], b, z, E);
            }a = z;
          } else a = null;
        }if (!a || !a.valid) return f.push(b), 1;k = a.validAttributes;var H = a.validStyles;
        p = a.validClasses;var h = b.attributes,
            F = b.styles,
            q = b.classes;E = b.classBackup;var L = b.styleBackup,
            G,
            N,
            C = [],
            z = [],
            O = /^data-cke-/;g = !1;delete h.style;delete h["class"];delete b.classBackup;delete b.styleBackup;if (!a.allAttributes) for (G in h) {
          k[G] || (O.test(G) ? G == (N = G.replace(/^data-cke-saved-/, "")) || k[N] || (delete h[G], g = !0) : (delete h[G], g = !0));
        }if (!a.allStyles || a.hadInvalidStyle) {
          for (G in F) {
            a.allStyles || H[G] ? C.push(G + ":" + F[G]) : g = !0;
          }C.length && (h.style = C.sort().join("; "));
        } else L && (h.style = L);if (!a.allClasses || a.hadInvalidClass) {
          for (G = 0; G < q.length; ++G) {
            (a.allClasses || p[q[G]]) && z.push(q[G]);
          }z.length && (h["class"] = z.sort().join(" "));E && z.length < E.split(/\s+/).length && (g = !0);
        } else E && (h["class"] = E);g && (l = 1);if (!e.skipFinalValidation && !m(b)) return f.push(b), 1;
      }e.toHtml && (b.name = b.name.replace(B, "cke:$1"));return l;
    }function D(a) {
      var b = [],
          c;for (c in a) {
        -1 < c.indexOf("*") && b.push(c.replace(/\*/g, ".*"));
      }return b.length ? new RegExp("^(?:" + b.join("|") + ")$") : null;
    }function x(a) {
      var b = a.attributes,
          c;delete b.style;delete b["class"];
      if (c = CKEDITOR.tools.writeCssText(a.styles, !0)) b.style = c;a.classes.length && (b["class"] = a.classes.sort().join(" "));
    }function m(a) {
      switch (a.name) {case "a":
          if (!(a.children.length || a.attributes.name || a.attributes.id)) return !1;break;case "img":
          if (!a.attributes.src) return !1;}return !0;
    }function J(a) {
      if (!a) return !1;if (!0 === a) return !0;var b = D(a);return function (c) {
        return c in a || b && c.match(b);
      };
    }function u() {
      return new CKEDITOR.htmlParser.element("br");
    }function K(a) {
      return a.type == CKEDITOR.NODE_ELEMENT && ("br" == a.name || q.$block[a.name]);
    }function l(a, b, c) {
      var d = a.name;if (q.$empty[d] || !a.children.length) "hr" == d && "br" == b ? a.replaceWith(u()) : (a.parent && c.push({ check: "it", el: a.parent }), a.remove());else if (q.$block[d] || "tr" == d) {
        if ("br" == b) a.previous && !K(a.previous) && (b = u(), b.insertBefore(a)), a.next && !K(a.next) && (b = u(), b.insertAfter(a)), a.replaceWithChildren();else {
          var d = a.children,
              f;b: {
            f = q[b];for (var e = 0, l = d.length, w; e < l; ++e) {
              if (w = d[e], w.type == CKEDITOR.NODE_ELEMENT && !f[w.name]) {
                f = !1;break b;
              }
            }f = !0;
          }if (f) a.name = b, a.attributes = {}, c.push({ check: "parent-down", el: a });else {
            f = a.parent;for (var e = f.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT || "body" == f.name, p, h, l = d.length; 0 < l;) {
              w = d[--l], e && (w.type == CKEDITOR.NODE_TEXT || w.type == CKEDITOR.NODE_ELEMENT && q.$inline[w.name]) ? (p || (p = new CKEDITOR.htmlParser.element(b), p.insertAfter(a), c.push({ check: "parent-down", el: p })), p.add(w, 0)) : (p = null, h = q[f.name] || q.span, w.insertAfter(a), f.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT || w.type != CKEDITOR.NODE_ELEMENT || h[w.name] || c.push({ check: "el-up", el: w }));
            }a.remove();
          }
        }
      } else d in { style: 1, script: 1 } ? a.remove() : (a.parent && c.push({ check: "it", el: a.parent }), a.replaceWithChildren());
    }function t(a, b, c) {
      var d, f;for (d = 0; d < c.length; ++d) {
        if (f = c[d], !(f.check && !a.check(f.check, !1) || f.left && !f.left(b))) {
          f.right(b, G);break;
        }
      }
    }function F(a, b) {
      var c = b.getDefinition(),
          d = c.attributes,
          f = c.styles,
          e,
          l,
          w,
          p;if (a.name != c.element) return !1;for (e in d) {
        if ("class" == e) for (c = d[e].split(/\s+/), w = a.classes.join("|"); p = c.pop();) {
          if (-1 == w.indexOf(p)) return !1;
        } else if (a.attributes[e] != d[e]) return !1;
      }for (l in f) {
        if (a.styles[l] != f[l]) return !1;
      }return !0;
    }function L(a, b) {
      var c, d;"string" == typeof a ? c = a : a instanceof CKEDITOR.style ? d = a : (c = a[0], d = a[1]);return [{ element: c, left: d, right: function right(a, c) {
          c.transform(a, b);
        } }];
    }function C(a) {
      return function (b) {
        return F(b, a);
      };
    }function M(a) {
      return function (b, c) {
        c[a](b);
      };
    }var q = CKEDITOR.dtd,
        E = CKEDITOR.tools.copy,
        z = CKEDITOR.tools.trim,
        H = ["", "p", "br", "div"];CKEDITOR.FILTER_SKIP_TREE = 2;CKEDITOR.filter = function (a) {
      this.allowedContent = [];this.disallowedContent = [];this.elementCallbacks = null;this.disabled = !1;this.editor = null;this.id = CKEDITOR.tools.getNextNumber();this._ = { allowedRules: { elements: {}, generic: [] }, disallowedRules: { elements: {}, generic: [] }, transformations: {}, cachedTests: {}, cachedChecks: {} };CKEDITOR.filter.instances[this.id] = this;if (a instanceof CKEDITOR.editor) {
        a = this.editor = a;this.customConfig = !0;var b = a.config.allowedContent;!0 === b ? this.disabled = !0 : (b || (this.customConfig = !1), this.allow(b, "config", 1), this.allow(a.config.extraAllowedContent, "extra", 1), this.allow(H[a.enterMode] + " " + H[a.shiftEnterMode], "default", 1), this.disallow(a.config.disallowedContent));
      } else this.customConfig = !1, this.allow(a, "default", 1);
    };CKEDITOR.filter.instances = {};CKEDITOR.filter.prototype = { allow: function allow(b, c, d) {
        if (!h(this, b, d)) return !1;var f, l;if ("string" == typeof b) b = e(b);else if (b instanceof CKEDITOR.style) {
          if (b.toAllowedContentRules) return this.allow(b.toAllowedContentRules(this.editor), c, d);f = b.getDefinition();b = {};d = f.attributes;b[f.element] = f = { styles: f.styles, requiredStyles: f.styles && CKEDITOR.tools.objectKeys(f.styles) };
          d && (d = E(d), f.classes = d["class"] ? d["class"].split(/\s+/) : null, f.requiredClasses = f.classes, delete d["class"], f.attributes = d, f.requiredAttributes = d && CKEDITOR.tools.objectKeys(d));
        } else if (CKEDITOR.tools.isArray(b)) {
          for (f = 0; f < b.length; ++f) {
            l = this.allow(b[f], c, d);
          }return l;
        }a(this, b, c, this.allowedContent, this._.allowedRules);return !0;
      }, applyTo: function applyTo(a, b, c, d) {
        if (this.disabled) return !1;var f = this,
            e = [],
            w = this.editor && this.editor.config.protectedSource,
            p,
            h = !1,
            t = { doFilter: !c, doTransform: !0, doCallbacks: !0, toHtml: b };
        a.forEach(function (a) {
          if (a.type == CKEDITOR.NODE_ELEMENT) {
            if ("off" == a.attributes["data-cke-filter"]) return !1;if (!b || "span" != a.name || !~CKEDITOR.tools.objectKeys(a.attributes).join("|").indexOf("data-cke-")) if (p = A(f, a, e, t), p & 1) h = !0;else if (p & 2) return !1;
          } else if (a.type == CKEDITOR.NODE_COMMENT && a.value.match(/^\{cke_protected\}(?!\{C\})/)) {
            var c;a: {
              var d = decodeURIComponent(a.value.replace(/^\{cke_protected\}/, ""));c = [];var l, m, q;if (w) for (m = 0; m < w.length; ++m) {
                if ((q = d.match(w[m])) && q[0].length == d.length) {
                  c = !0;
                  break a;
                }
              }d = CKEDITOR.htmlParser.fragment.fromHtml(d);1 == d.children.length && (l = d.children[0]).type == CKEDITOR.NODE_ELEMENT && A(f, l, c, t);c = !c.length;
            }c || e.push(a);
          }
        }, null, !0);e.length && (h = !0);var E;a = [];d = H[d || (this.editor ? this.editor.enterMode : CKEDITOR.ENTER_P)];for (var z; c = e.pop();) {
          c.type == CKEDITOR.NODE_ELEMENT ? l(c, d, a) : c.remove();
        }for (; E = a.pop();) {
          if (c = E.el, c.parent) switch (z = q[c.parent.name] || q.span, E.check) {case "it":
              q.$removeEmpty[c.name] && !c.children.length ? l(c, d, a) : m(c) || l(c, d, a);break;case "el-up":
              c.parent.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT || z[c.name] || l(c, d, a);break;case "parent-down":
              c.parent.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT || z[c.name] || l(c.parent, d, a);}
        }return h;
      }, checkFeature: function checkFeature(a) {
        if (this.disabled || !a) return !0;a.toFeature && (a = a.toFeature(this.editor));return !a.requiredContent || this.check(a.requiredContent);
      }, disable: function disable() {
        this.disabled = !0;
      }, disallow: function disallow(b) {
        if (!h(this, b, !0)) return !1;"string" == typeof b && (b = e(b));a(this, b, null, this.disallowedContent, this._.disallowedRules);return !0;
      },
      addContentForms: function addContentForms(a) {
        if (!this.disabled && a) {
          var b,
              c,
              d = [],
              f;for (b = 0; b < a.length && !f; ++b) {
            c = a[b], ("string" == typeof c || c instanceof CKEDITOR.style) && this.check(c) && (f = c);
          }if (f) {
            for (b = 0; b < a.length; ++b) {
              d.push(L(a[b], f));
            }this.addTransformations(d);
          }
        }
      }, addElementCallback: function addElementCallback(a) {
        this.elementCallbacks || (this.elementCallbacks = []);this.elementCallbacks.push(a);
      }, addFeature: function addFeature(a) {
        if (this.disabled || !a) return !0;a.toFeature && (a = a.toFeature(this.editor));this.allow(a.allowedContent, a.name);this.addTransformations(a.contentTransformations);
        this.addContentForms(a.contentForms);return a.requiredContent && (this.customConfig || this.disallowedContent.length) ? this.check(a.requiredContent) : !0;
      }, addTransformations: function addTransformations(a) {
        var b, c;if (!this.disabled && a) {
          var d = this._.transformations,
              f;for (f = 0; f < a.length; ++f) {
            b = a[f];var e = void 0,
                l = void 0,
                w = void 0,
                p = void 0,
                h = void 0,
                m = void 0;c = [];for (l = 0; l < b.length; ++l) {
              w = b[l], "string" == typeof w ? (w = w.split(/\s*:\s*/), p = w[0], h = null, m = w[1]) : (p = w.check, h = w.left, m = w.right), e || (e = w, e = e.element ? e.element : p ? p.match(/^([a-z0-9]+)/i)[0] : e.left.getDefinition().element), h instanceof CKEDITOR.style && (h = C(h)), c.push({ check: p == e ? null : p, left: h, right: "string" == typeof m ? M(m) : m });
            }b = e;d[b] || (d[b] = []);d[b].push(c);
          }
        }
      }, check: function check(a, b, c) {
        if (this.disabled) return !0;if (CKEDITOR.tools.isArray(a)) {
          for (var d = a.length; d--;) {
            if (this.check(a[d], b, c)) return !0;
          }return !1;
        }var f, w;if ("string" == typeof a) {
          w = a + "\x3c" + (!1 === b ? "0" : "1") + (c ? "1" : "0") + "\x3e";if (w in this._.cachedChecks) return this._.cachedChecks[w];d = e(a).$1;f = d.styles;var l = d.classes;d.name = d.elements;
          d.classes = l = l ? l.split(/\s*,\s*/) : [];d.styles = r(f);d.attributes = r(d.attributes);d.children = [];l.length && (d.attributes["class"] = l.join(" "));f && (d.attributes.style = CKEDITOR.tools.writeCssText(d.styles));f = d;
        } else d = a.getDefinition(), f = d.styles, l = d.attributes || {}, f && !CKEDITOR.tools.isEmpty(f) ? (f = E(f), l.style = CKEDITOR.tools.writeCssText(f, !0)) : f = {}, f = { name: d.element, attributes: l, classes: l["class"] ? l["class"].split(/\s+/) : [], styles: f, children: [] };var l = CKEDITOR.tools.clone(f),
            p = [],
            h;if (!1 !== b && (h = this._.transformations[f.name])) {
          for (d = 0; d < h.length; ++d) {
            t(this, f, h[d]);
          }x(f);
        }A(this, l, p, { doFilter: !0, doTransform: !1 !== b, skipRequired: !c, skipFinalValidation: !c });b = 0 < p.length ? !1 : CKEDITOR.tools.objectCompare(f.attributes, l.attributes, !0) ? !0 : !1;"string" == typeof a && (this._.cachedChecks[w] = b);return b;
      }, getAllowedEnterMode: function () {
        var a = ["p", "div", "br"],
            b = { p: CKEDITOR.ENTER_P, div: CKEDITOR.ENTER_DIV, br: CKEDITOR.ENTER_BR };return function (c, d) {
          var f = a.slice(),
              e;if (this.check(H[c])) return c;for (d || (f = f.reverse()); e = f.pop();) {
            if (this.check(e)) return b[e];
          }return CKEDITOR.ENTER_BR;
        };
      }(), clone: function clone() {
        var a = new CKEDITOR.filter(),
            b = CKEDITOR.tools.clone;a.allowedContent = b(this.allowedContent);a._.allowedRules = b(this._.allowedRules);a.disallowedContent = b(this.disallowedContent);a._.disallowedRules = b(this._.disallowedRules);a._.transformations = b(this._.transformations);a.disabled = this.disabled;a.editor = this.editor;return a;
      }, destroy: function destroy() {
        delete CKEDITOR.filter.instances[this.id];delete this._;delete this.allowedContent;delete this.disallowedContent;
      } };
    var P = { styles: 1, attributes: 1, classes: 1 },
        O = { styles: "requiredStyles", attributes: "requiredAttributes", classes: "requiredClasses" },
        p = /^([a-z0-9\-*\s]+)((?:\s*\{[!\w\-,\s\*]+\}\s*|\s*\[[!\w\-,\s\*]+\]\s*|\s*\([!\w\-,\s\*]+\)\s*){0,3})(?:;\s*|$)/i,
        N = { styles: /{([^}]+)}/, attrs: /\[([^\]]+)\]/, classes: /\(([^\)]+)\)/ },
        w = /^cke:(object|embed|param)$/,
        B = /^(object|embed|param)$/,
        G;G = CKEDITOR.filter.transformationsTools = { sizeToStyle: function sizeToStyle(a) {
        this.lengthToStyle(a, "width");this.lengthToStyle(a, "height");
      }, sizeToAttribute: function sizeToAttribute(a) {
        this.lengthToAttribute(a, "width");this.lengthToAttribute(a, "height");
      }, lengthToStyle: function lengthToStyle(a, b, c) {
        c = c || b;if (!(c in a.styles)) {
          var d = a.attributes[b];d && (/^\d+$/.test(d) && (d += "px"), a.styles[c] = d);
        }delete a.attributes[b];
      }, lengthToAttribute: function lengthToAttribute(a, b, c) {
        c = c || b;if (!(c in a.attributes)) {
          var d = a.styles[b],
              f = d && d.match(/^(\d+)(?:\.\d*)?px$/);f ? a.attributes[c] = f[1] : "cke-test" == d && (a.attributes[c] = "cke-test");
        }delete a.styles[b];
      }, alignmentToStyle: function alignmentToStyle(a) {
        if (!("float" in a.styles)) {
          var b = a.attributes.align;if ("left" == b || "right" == b) a.styles["float"] = b;
        }delete a.attributes.align;
      }, alignmentToAttribute: function alignmentToAttribute(a) {
        if (!("align" in a.attributes)) {
          var b = a.styles["float"];if ("left" == b || "right" == b) a.attributes.align = b;
        }delete a.styles["float"];
      }, splitBorderShorthand: function splitBorderShorthand(a) {
        if (a.styles.border) {
          var b = CKEDITOR.tools.style.parse.border(a.styles.border);b.color && (a.styles["border-color"] = b.color);b.style && (a.styles["border-style"] = b.style);b.width && (a.styles["border-width"] = b.width);delete a.styles.border;
        }
      }, listTypeToStyle: function listTypeToStyle(a) {
        if (a.attributes.type) switch (a.attributes.type) {case "a":
            a.styles["list-style-type"] = "lower-alpha";break;case "A":
            a.styles["list-style-type"] = "upper-alpha";break;case "i":
            a.styles["list-style-type"] = "lower-roman";break;case "I":
            a.styles["list-style-type"] = "upper-roman";break;case "1":
            a.styles["list-style-type"] = "decimal";break;default:
            a.styles["list-style-type"] = a.attributes.type;}
      }, splitMarginShorthand: function splitMarginShorthand(a) {
        function b(d) {
          a.styles["margin-top"] = c[d[0]];a.styles["margin-right"] = c[d[1]];a.styles["margin-bottom"] = c[d[2]];a.styles["margin-left"] = c[d[3]];
        }if (a.styles.margin) {
          var c = a.styles.margin.match(/(\-?[\.\d]+\w+)/g) || ["0px"];switch (c.length) {case 1:
              b([0, 0, 0, 0]);break;case 2:
              b([0, 1, 0, 1]);break;case 3:
              b([0, 1, 2, 1]);break;case 4:
              b([0, 1, 2, 3]);}delete a.styles.margin;
        }
      }, matchesStyle: F, transform: function transform(a, b) {
        if ("string" == typeof b) a.name = b;else {
          var c = b.getDefinition(),
              d = c.styles,
              f = c.attributes,
              e,
              l,
              w,
              p;a.name = c.element;for (e in f) {
            if ("class" == e) for (c = a.classes.join("|"), w = f[e].split(/\s+/); p = w.pop();) {
              -1 == c.indexOf(p) && a.classes.push(p);
            } else a.attributes[e] = f[e];
          }for (l in d) {
            a.styles[l] = d[l];
          }
        }
      } };
  })();
  (function () {
    CKEDITOR.focusManager = function (a) {
      if (a.focusManager) return a.focusManager;this.hasFocus = !1;this.currentActive = null;this._ = { editor: a };return this;
    };CKEDITOR.focusManager._ = { blurDelay: 200 };CKEDITOR.focusManager.prototype = { focus: function focus(a) {
        this._.timer && clearTimeout(this._.timer);a && (this.currentActive = a);this.hasFocus || this._.locked || ((a = CKEDITOR.currentInstance) && a.focusManager.blur(1), this.hasFocus = !0, (a = this._.editor.container) && a.addClass("cke_focus"), this._.editor.fire("focus"));
      }, lock: function lock() {
        this._.locked = 1;
      }, unlock: function unlock() {
        delete this._.locked;
      }, blur: function blur(a) {
        function d() {
          if (this.hasFocus) {
            this.hasFocus = !1;var a = this._.editor.container;a && a.removeClass("cke_focus");this._.editor.fire("blur");
          }
        }if (!this._.locked) {
          this._.timer && clearTimeout(this._.timer);var b = CKEDITOR.focusManager._.blurDelay;a || !b ? d.call(this) : this._.timer = CKEDITOR.tools.setTimeout(function () {
            delete this._.timer;d.call(this);
          }, b, this);
        }
      }, add: function add(a, d) {
        var b = a.getCustomData("focusmanager");if (!b || b != this) {
          b && b.remove(a);var b = "focus",
              c = "blur";d && (CKEDITOR.env.ie ? (b = "focusin", c = "focusout") : CKEDITOR.event.useCapture = 1);var f = { blur: function blur() {
              a.equals(this.currentActive) && this.blur();
            }, focus: function focus() {
              this.focus(a);
            } };a.on(b, f.focus, this);a.on(c, f.blur, this);d && (CKEDITOR.event.useCapture = 0);a.setCustomData("focusmanager", this);a.setCustomData("focusmanager_handlers", f);
        }
      }, remove: function remove(a) {
        a.removeCustomData("focusmanager");var d = a.removeCustomData("focusmanager_handlers");a.removeListener("blur", d.blur);a.removeListener("focus", d.focus);
      } };
  })();CKEDITOR.keystrokeHandler = function (a) {
    if (a.keystrokeHandler) return a.keystrokeHandler;this.keystrokes = {};this.blockedKeystrokes = {};this._ = { editor: a };return this;
  };
  (function () {
    var a,
        d = function d(b) {
      b = b.data;var d = b.getKeystroke(),
          h = this.keystrokes[d],
          k = this._.editor;a = !1 === k.fire("key", { keyCode: d, domEvent: b });a || (h && (a = !1 !== k.execCommand(h, { from: "keystrokeHandler" })), a || (a = !!this.blockedKeystrokes[d]));a && b.preventDefault(!0);return !a;
    },
        b = function b(_b) {
      a && (a = !1, _b.data.preventDefault(!0));
    };CKEDITOR.keystrokeHandler.prototype = { attach: function attach(a) {
        a.on("keydown", d, this);if (CKEDITOR.env.gecko && CKEDITOR.env.mac) a.on("keypress", b, this);
      } };
  })();
  (function () {
    CKEDITOR.lang = { languages: { af: 1, ar: 1, az: 1, bg: 1, bn: 1, bs: 1, ca: 1, cs: 1, cy: 1, da: 1, de: 1, "de-ch": 1, el: 1, "en-au": 1, "en-ca": 1, "en-gb": 1, en: 1, eo: 1, es: 1, "es-mx": 1, et: 1, eu: 1, fa: 1, fi: 1, fo: 1, "fr-ca": 1, fr: 1, gl: 1, gu: 1, he: 1, hi: 1, hr: 1, hu: 1, id: 1, is: 1, it: 1, ja: 1, ka: 1, km: 1, ko: 1, ku: 1, lt: 1, lv: 1, mk: 1, mn: 1, ms: 1, nb: 1, nl: 1, no: 1, oc: 1, pl: 1, "pt-br": 1, pt: 1, ro: 1, ru: 1, si: 1, sk: 1, sl: 1, sq: 1, "sr-latn": 1, sr: 1, sv: 1, th: 1, tr: 1, tt: 1, ug: 1, uk: 1, vi: 1, "zh-cn": 1, zh: 1 }, rtl: { ar: 1, fa: 1, he: 1, ku: 1, ug: 1 }, load: function load(a, d, b) {
        a && CKEDITOR.lang.languages[a] || (a = this.detect(d, a));var c = this;d = function d() {
          c[a].dir = c.rtl[a] ? "rtl" : "ltr";b(a, c[a]);
        };this[a] ? d() : CKEDITOR.scriptLoader.load(CKEDITOR.getUrl("lang/" + a + ".js"), d, this);
      }, detect: function detect(a, d) {
        var b = this.languages;d = d || navigator.userLanguage || navigator.language || a;var c = d.toLowerCase().match(/([a-z]+)(?:-([a-z]+))?/),
            f = c[1],
            c = c[2];b[f + "-" + c] ? f = f + "-" + c : b[f] || (f = null);CKEDITOR.lang.detect = f ? function () {
          return f;
        } : function (a) {
          return a;
        };return f || a;
      } };
  })();
  CKEDITOR.scriptLoader = function () {
    var a = {},
        d = {};return { load: function load(b, c, f, h) {
        var k = "string" == typeof b;k && (b = [b]);f || (f = CKEDITOR);var g = b.length,
            n = [],
            r = [],
            e = function e(a) {
          c && (k ? c.call(f, a) : c.call(f, n, r));
        };if (0 === g) e(!0);else {
          var y = function y(a, b) {
            (b ? n : r).push(a);0 >= --g && (h && CKEDITOR.document.getDocumentElement().removeStyle("cursor"), e(b));
          },
              v = function v(b, c) {
            a[b] = 1;var f = d[b];delete d[b];for (var e = 0; e < f.length; e++) {
              f[e](b, c);
            }
          },
              A = function A(b) {
            if (a[b]) y(b, !0);else {
              var f = d[b] || (d[b] = []);f.push(y);if (!(1 < f.length)) {
                var e = new CKEDITOR.dom.element("script");e.setAttributes({ type: "text/javascript", src: b });c && (CKEDITOR.env.ie && (8 >= CKEDITOR.env.version || CKEDITOR.env.ie9Compat) ? e.$.onreadystatechange = function () {
                  if ("loaded" == e.$.readyState || "complete" == e.$.readyState) e.$.onreadystatechange = null, v(b, !0);
                } : (e.$.onload = function () {
                  setTimeout(function () {
                    v(b, !0);
                  }, 0);
                }, e.$.onerror = function () {
                  v(b, !1);
                }));e.appendTo(CKEDITOR.document.getHead());
              }
            }
          };h && CKEDITOR.document.getDocumentElement().setStyle("cursor", "wait");for (var D = 0; D < g; D++) {
            A(b[D]);
          }
        }
      },
      queue: function () {
        function a() {
          var b;(b = c[0]) && this.load(b.scriptUrl, b.callback, CKEDITOR, 0);
        }var c = [];return function (d, h) {
          var k = this;c.push({ scriptUrl: d, callback: function callback() {
              h && h.apply(this, arguments);c.shift();a.call(k);
            } });1 == c.length && a.call(this);
        };
      }() };
  }();CKEDITOR.resourceManager = function (a, d) {
    this.basePath = a;this.fileName = d;this.registered = {};this.loaded = {};this.externals = {};this._ = { waitingList: {} };
  };
  CKEDITOR.resourceManager.prototype = { add: function add(a, d) {
      if (this.registered[a]) throw Error('[CKEDITOR.resourceManager.add] The resource name "' + a + '" is already registered.');var b = this.registered[a] = d || {};b.name = a;b.path = this.getPath(a);CKEDITOR.fire(a + CKEDITOR.tools.capitalize(this.fileName) + "Ready", b);return this.get(a);
    }, get: function get(a) {
      return this.registered[a] || null;
    }, getPath: function getPath(a) {
      var d = this.externals[a];return CKEDITOR.getUrl(d && d.dir || this.basePath + a + "/");
    }, getFilePath: function getFilePath(a) {
      var d = this.externals[a];
      return CKEDITOR.getUrl(this.getPath(a) + (d ? d.file : this.fileName + ".js"));
    }, addExternal: function addExternal(a, d, b) {
      a = a.split(",");for (var c = 0; c < a.length; c++) {
        var f = a[c];b || (d = d.replace(/[^\/]+$/, function (a) {
          b = a;return "";
        }));this.externals[f] = { dir: d, file: b || this.fileName + ".js" };
      }
    }, load: function load(a, d, b) {
      CKEDITOR.tools.isArray(a) || (a = a ? [a] : []);for (var c = this.loaded, f = this.registered, h = [], k = {}, g = {}, n = 0; n < a.length; n++) {
        var r = a[n];if (r) if (c[r] || f[r]) g[r] = this.get(r);else {
          var e = this.getFilePath(r);h.push(e);e in k || (k[e] = []);k[e].push(r);
        }
      }CKEDITOR.scriptLoader.load(h, function (a, f) {
        if (f.length) throw Error('[CKEDITOR.resourceManager.load] Resource name "' + k[f[0]].join(",") + '" was not found at "' + f[0] + '".');for (var e = 0; e < a.length; e++) {
          for (var h = k[a[e]], n = 0; n < h.length; n++) {
            var m = h[n];g[m] = this.get(m);c[m] = 1;
          }
        }d.call(b, g);
      }, this);
    } };CKEDITOR.plugins = new CKEDITOR.resourceManager("plugins/", "plugin");
  CKEDITOR.plugins.load = CKEDITOR.tools.override(CKEDITOR.plugins.load, function (a) {
    var d = {};return function (b, c, f) {
      var h = {},
          k = function k(b) {
        a.call(this, b, function (a) {
          CKEDITOR.tools.extend(h, a);var b = [],
              e;for (e in a) {
            var g = a[e],
                v = g && g.requires;if (!d[e]) {
              if (g.icons) for (var A = g.icons.split(","), D = A.length; D--;) {
                CKEDITOR.skin.addIcon(A[D], g.path + "icons/" + (CKEDITOR.env.hidpi && g.hidpi ? "hidpi/" : "") + A[D] + ".png");
              }d[e] = 1;
            }if (v) for (v.split && (v = v.split(",")), g = 0; g < v.length; g++) {
              h[v[g]] || b.push(v[g]);
            }
          }if (b.length) k.call(this, b);else {
            for (e in h) {
              g = h[e], g.onLoad && !g.onLoad._called && (!1 === g.onLoad() && delete h[e], g.onLoad._called = 1);
            }c && c.call(f || window, h);
          }
        }, this);
      };k.call(this, b);
    };
  });CKEDITOR.plugins.setLang = function (a, d, b) {
    var c = this.get(a);a = c.langEntries || (c.langEntries = {});c = c.lang || (c.lang = []);c.split && (c = c.split(","));-1 == CKEDITOR.tools.indexOf(c, d) && c.push(d);a[d] = b;
  };CKEDITOR.ui = function (a) {
    if (a.ui) return a.ui;this.items = {};this.instances = {};this.editor = a;this._ = { handlers: {} };return this;
  };
  CKEDITOR.ui.prototype = { add: function add(a, d, b) {
      b.name = a.toLowerCase();var c = this.items[a] = { type: d, command: b.command || null, args: Array.prototype.slice.call(arguments, 2) };CKEDITOR.tools.extend(c, b);
    }, get: function get(a) {
      return this.instances[a];
    }, create: function create(a) {
      var d = this.items[a],
          b = d && this._.handlers[d.type],
          c = d && d.command && this.editor.getCommand(d.command),
          b = b && b.create.apply(this, d.args);this.instances[a] = b;c && c.uiItems.push(b);b && !b.type && (b.type = d.type);return b;
    }, addHandler: function addHandler(a, d) {
      this._.handlers[a] = d;
    }, space: function space(a) {
      return CKEDITOR.document.getById(this.spaceId(a));
    }, spaceId: function spaceId(a) {
      return this.editor.id + "_" + a;
    } };CKEDITOR.event.implementOn(CKEDITOR.ui);
  (function () {
    function a(a, f, e) {
      CKEDITOR.event.call(this);a = a && CKEDITOR.tools.clone(a);if (void 0 !== f) {
        if (!(f instanceof CKEDITOR.dom.element)) throw Error("Expect element of type CKEDITOR.dom.element.");if (!e) throw Error("One of the element modes must be specified.");if (CKEDITOR.env.ie && CKEDITOR.env.quirks && e == CKEDITOR.ELEMENT_MODE_INLINE) throw Error("Inline element mode is not supported on IE quirks.");if (!b(f, e)) throw Error('The specified element mode is not supported on element: "' + f.getName() + '".');
        this.element = f;this.elementMode = e;this.name = this.elementMode != CKEDITOR.ELEMENT_MODE_APPENDTO && (f.getId() || f.getNameAtt());
      } else this.elementMode = CKEDITOR.ELEMENT_MODE_NONE;this._ = {};this.commands = {};this.templates = {};this.name = this.name || d();this.id = CKEDITOR.tools.getNextId();this.status = "unloaded";this.config = CKEDITOR.tools.prototypedCopy(CKEDITOR.config);this.ui = new CKEDITOR.ui(this);this.focusManager = new CKEDITOR.focusManager(this);this.keystrokeHandler = new CKEDITOR.keystrokeHandler(this);this.on("readOnly", c);this.on("selectionChange", function (a) {
        h(this, a.data.path);
      });this.on("activeFilterChange", function () {
        h(this, this.elementPath(), !0);
      });this.on("mode", c);this.on("instanceReady", function () {
        if (this.config.startupFocus) {
          if ("end" === this.config.startupFocus) {
            var a = this.createRange();a.selectNodeContents(this.editable());a.shrink(CKEDITOR.SHRINK_ELEMENT, !0);a.collapse();this.getSelection().selectRanges([a]);
          }this.focus();
        }
      });CKEDITOR.fire("instanceCreated", null, this);CKEDITOR.add(this);CKEDITOR.tools.setTimeout(function () {
        "destroyed" !== this.status ? g(this, a) : CKEDITOR.warn("editor-incorrect-destroy");
      }, 0, this);
    }function d() {
      do {
        var a = "editor" + ++D;
      } while (CKEDITOR.instances[a]);return a;
    }function b(a, b) {
      return b == CKEDITOR.ELEMENT_MODE_INLINE ? a.is(CKEDITOR.dtd.$editable) || a.is("textarea") : b == CKEDITOR.ELEMENT_MODE_REPLACE ? !a.is(CKEDITOR.dtd.$nonBodyContent) : 1;
    }function c() {
      var a = this.commands,
          b;for (b in a) {
        f(this, a[b]);
      }
    }function f(a, b) {
      b[b.startDisabled ? "disable" : a.readOnly && !b.readOnly ? "disable" : b.modes[a.mode] ? "enable" : "disable"]();
    }function h(a, b, c) {
      if (b) {
        var d,
            f,
            e = a.commands;for (f in e) {
          d = e[f], (c || d.contextSensitive) && d.refresh(a, b);
        }
      }
    }function k(a) {
      var b = a.config.customConfig;if (!b) return !1;var b = CKEDITOR.getUrl(b),
          c = x[b] || (x[b] = {});c.fn ? (c.fn.call(a, a.config), CKEDITOR.getUrl(a.config.customConfig) != b && k(a) || a.fireOnce("customConfigLoaded")) : CKEDITOR.scriptLoader.queue(b, function () {
        c.fn = CKEDITOR.editorConfig ? CKEDITOR.editorConfig : function () {};k(a);
      });return !0;
    }function g(a, b) {
      a.on("customConfigLoaded", function () {
        if (b) {
          if (b.on) for (var c in b.on) {
            a.on(c, b.on[c]);
          }CKEDITOR.tools.extend(a.config, b, !0);delete a.config.on;
        }c = a.config;a.readOnly = c.readOnly ? !0 : a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? a.element.is("textarea") ? a.element.hasAttribute("disabled") || a.element.hasAttribute("readonly") : a.element.isReadOnly() : a.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE ? a.element.hasAttribute("disabled") || a.element.hasAttribute("readonly") : !1;a.blockless = a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? !(a.element.is("textarea") || CKEDITOR.dtd[a.element.getName()].p) : !1;a.tabIndex = c.tabIndex || a.element && a.element.getAttribute("tabindex") || 0;a.activeEnterMode = a.enterMode = a.blockless ? CKEDITOR.ENTER_BR : c.enterMode;a.activeShiftEnterMode = a.shiftEnterMode = a.blockless ? CKEDITOR.ENTER_BR : c.shiftEnterMode;c.skin && (CKEDITOR.skinName = c.skin);a.fireOnce("configLoaded");a.dataProcessor = new CKEDITOR.htmlDataProcessor(a);a.filter = a.activeFilter = new CKEDITOR.filter(a);n(a);
      });b && null != b.customConfig && (a.config.customConfig = b.customConfig);k(a) || a.fireOnce("customConfigLoaded");
    }
    function n(a) {
      CKEDITOR.skin.loadPart("editor", function () {
        r(a);
      });
    }function r(a) {
      CKEDITOR.lang.load(a.config.language, a.config.defaultLanguage, function (b, c) {
        var d = a.config.title;a.langCode = b;a.lang = CKEDITOR.tools.prototypedCopy(c);a.title = "string" == typeof d || !1 === d ? d : [a.lang.editor, a.name].join(", ");a.config.contentsLangDirection || (a.config.contentsLangDirection = a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? a.element.getDirection(1) : a.lang.dir);a.fire("langLoaded");e(a);
      });
    }function e(a) {
      a.getStylesSet(function (b) {
        a.once("loaded", function () {
          a.fire("stylesSet", { styles: b });
        }, null, null, 1);y(a);
      });
    }function y(a) {
      function b(a) {
        if (!a) return "";CKEDITOR.tools.isArray(a) && (a = a.join(","));return a.replace(/\s/g, "");
      }var c = a.config,
          d = b(c.plugins),
          f = b(c.extraPlugins),
          e = b(c.removePlugins);if (f) var h = new RegExp("(?:^|,)(?:" + f.replace(/,/g, "|") + ")(?\x3d,|$)", "g"),
          d = d.replace(h, ""),
          d = d + ("," + f);if (e) var g = new RegExp("(?:^|,)(?:" + e.replace(/,/g, "|") + ")(?\x3d,|$)", "g"),
          d = d.replace(g, "");CKEDITOR.env.air && (d += ",adobeair");CKEDITOR.plugins.load(d.split(","), function (b) {
        var d = [],
            f = [],
            e = [];a.plugins = b;for (var l in b) {
          var h = b[l],
              t = h.lang,
              k = null,
              p = h.requires,
              F;CKEDITOR.tools.isArray(p) && (p = p.join(","));if (p && (F = p.match(g))) for (; p = F.pop();) {
            CKEDITOR.error("editor-plugin-required", { plugin: p.replace(",", ""), requiredBy: l });
          }t && !a.lang[l] && (t.split && (t = t.split(",")), 0 <= CKEDITOR.tools.indexOf(t, a.langCode) ? k = a.langCode : (k = a.langCode.replace(/-.*/, ""), k = k != a.langCode && 0 <= CKEDITOR.tools.indexOf(t, k) ? k : 0 <= CKEDITOR.tools.indexOf(t, "en") ? "en" : t[0]), h.langEntries && h.langEntries[k] ? (a.lang[l] = h.langEntries[k], k = null) : e.push(CKEDITOR.getUrl(h.path + "lang/" + k + ".js")));f.push(k);d.push(h);
        }CKEDITOR.scriptLoader.load(e, function () {
          for (var b = ["beforeInit", "init", "afterInit"], e = 0; e < b.length; e++) {
            for (var l = 0; l < d.length; l++) {
              var p = d[l];0 === e && f[l] && p.lang && p.langEntries && (a.lang[p.name] = p.langEntries[f[l]]);if (p[b[e]]) p[b[e]](a);
            }
          }a.fireOnce("pluginsLoaded");c.keystrokes && a.setKeystroke(a.config.keystrokes);for (l = 0; l < a.config.blockedKeystrokes.length; l++) {
            a.keystrokeHandler.blockedKeystrokes[a.config.blockedKeystrokes[l]] = 1;
          }a.status = "loaded";a.fireOnce("loaded");CKEDITOR.fire("instanceLoaded", null, a);
        });
      });
    }function v() {
      var a = this.element;if (a && this.elementMode != CKEDITOR.ELEMENT_MODE_APPENDTO) {
        var b = this.getData();this.config.htmlEncodeOutput && (b = CKEDITOR.tools.htmlEncode(b));a.is("textarea") ? a.setValue(b) : a.setHtml(b);return !0;
      }return !1;
    }function A(a, b) {
      function c(a) {
        var b = a.startContainer,
            d = a.endContainer;return b.is && (b.is("tr") || b.is("td") && b.equals(d) && a.endOffset === b.getChildCount()) ? !0 : !1;
      }function d(a) {
        var b = a.startContainer;
        return b.is("tr") ? a.cloneContents() : b.clone(!0);
      }for (var f = new CKEDITOR.dom.documentFragment(), e, h, g, k = 0; k < a.length; k++) {
        var M = a[k],
            q = M.startContainer.getAscendant("tr", !0);c(M) ? (e || (e = q.getAscendant("table").clone(), e.append(q.getAscendant({ thead: 1, tbody: 1, tfoot: 1 }).clone()), f.append(e), e = e.findOne("thead, tbody, tfoot")), h && h.equals(q) || (h = q, g = q.clone(), e.append(g)), g.append(d(M))) : f.append(M.cloneContents());
      }return e ? f : b.getHtmlFromRange(a[0]);
    }a.prototype = CKEDITOR.editor.prototype;CKEDITOR.editor = a;var D = 0,
        x = {};CKEDITOR.tools.extend(CKEDITOR.editor.prototype, { addCommand: function addCommand(a, b) {
        b.name = a.toLowerCase();var c = b instanceof CKEDITOR.command ? b : new CKEDITOR.command(this, b);this.mode && f(this, c);return this.commands[a] = c;
      }, _attachToForm: function _attachToForm() {
        function a(b) {
          c.updateElement();c._.required && !d.getValue() && !1 === c.fire("required") && b.data.preventDefault();
        }function b(a) {
          return !!(a && a.call && a.apply);
        }var c = this,
            d = c.element,
            f = new CKEDITOR.dom.element(d.$.form);d.is("textarea") && f && (f.on("submit", a), b(f.$.submit) && (f.$.submit = CKEDITOR.tools.override(f.$.submit, function (b) {
          return function () {
            a();b.apply ? b.apply(this) : b();
          };
        })), c.on("destroy", function () {
          f.removeListener("submit", a);
        }));
      }, destroy: function destroy(a) {
        this.fire("beforeDestroy");!a && v.call(this);this.editable(null);this.filter && (this.filter.destroy(), delete this.filter);delete this.activeFilter;this.status = "destroyed";this.fire("destroy");this.removeAllListeners();CKEDITOR.remove(this);CKEDITOR.fire("instanceDestroyed", null, this);
      }, elementPath: function elementPath(a) {
        if (!a) {
          a = this.getSelection();if (!a) return null;a = a.getStartElement();
        }return a ? new CKEDITOR.dom.elementPath(a, this.editable()) : null;
      }, createRange: function createRange() {
        var a = this.editable();return a ? new CKEDITOR.dom.range(a) : null;
      }, execCommand: function execCommand(a, b) {
        var c = this.getCommand(a),
            d = { name: a, commandData: b || {}, command: c };return c && c.state != CKEDITOR.TRISTATE_DISABLED && !1 !== this.fire("beforeCommandExec", d) && (d.returnValue = c.exec(d.commandData), !c.async && !1 !== this.fire("afterCommandExec", d)) ? d.returnValue : !1;
      }, getCommand: function getCommand(a) {
        return this.commands[a];
      },
      getData: function getData(a) {
        !a && this.fire("beforeGetData");var b = this._.data;"string" != typeof b && (b = (b = this.element) && this.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE ? b.is("textarea") ? b.getValue() : b.getHtml() : "");b = { dataValue: b };!a && this.fire("getData", b);return b.dataValue;
      }, getSnapshot: function getSnapshot() {
        var a = this.fire("getSnapshot");"string" != typeof a && (a = (a = this.element) && this.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE ? a.is("textarea") ? a.getValue() : a.getHtml() : "");return a;
      }, loadSnapshot: function loadSnapshot(a) {
        this.fire("loadSnapshot", a);
      }, setData: function setData(a, b, c) {
        var d = !0,
            f = b;b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b.internal, f = b.callback, d = !b.noSnapshot);!c && d && this.fire("saveSnapshot");if (f || !c) this.once("dataReady", function (a) {
          !c && d && this.fire("saveSnapshot");f && f.call(a.editor);
        });a = { dataValue: a };!c && this.fire("setData", a);this._.data = a.dataValue;!c && this.fire("afterSetData", a);
      }, setReadOnly: function setReadOnly(a) {
        a = null == a || a;this.readOnly != a && (this.readOnly = a, this.keystrokeHandler.blockedKeystrokes[8] = +a, this.editable().setReadOnly(a), this.fire("readOnly"));
      },
      insertHtml: function insertHtml(a, b, c) {
        this.fire("insertHtml", { dataValue: a, mode: b, range: c });
      }, insertText: function insertText(a) {
        this.fire("insertText", a);
      }, insertElement: function insertElement(a) {
        this.fire("insertElement", a);
      }, getSelectedHtml: function getSelectedHtml(a) {
        var b = this.editable(),
            c = this.getSelection(),
            c = c && c.getRanges();if (!b || !c || 0 === c.length) return null;b = A(c, b);return a ? b.getHtml() : b;
      }, extractSelectedHtml: function extractSelectedHtml(a, b) {
        var c = this.editable(),
            d = this.getSelection().getRanges(),
            f = new CKEDITOR.dom.documentFragment(),
            e;if (!c || 0 === d.length) return null;
        for (e = 0; e < d.length; e++) {
          f.append(c.extractHtmlFromRange(d[e], b));
        }b || this.getSelection().selectRanges([d[0]]);return a ? f.getHtml() : f;
      }, focus: function focus() {
        this.fire("beforeFocus");
      }, checkDirty: function checkDirty() {
        return "ready" == this.status && this._.previousValue !== this.getSnapshot();
      }, resetDirty: function resetDirty() {
        this._.previousValue = this.getSnapshot();
      }, updateElement: function updateElement() {
        return v.call(this);
      }, setKeystroke: function setKeystroke() {
        for (var a = this.keystrokeHandler.keystrokes, b = CKEDITOR.tools.isArray(arguments[0]) ? arguments[0] : [[].slice.call(arguments, 0)], c, d, f = b.length; f--;) {
          c = b[f], d = 0, CKEDITOR.tools.isArray(c) && (d = c[1], c = c[0]), d ? a[c] = d : delete a[c];
        }
      }, getCommandKeystroke: function getCommandKeystroke(a) {
        if (a = "string" === typeof a ? this.getCommand(a) : a) {
          var b = CKEDITOR.tools.object.findKey(this.commands, a),
              c = this.keystrokeHandler.keystrokes,
              d;if (a.fakeKeystroke) return a.fakeKeystroke;for (d in c) {
            if (c.hasOwnProperty(d) && c[d] == b) return d;
          }
        }return null;
      }, addFeature: function addFeature(a) {
        return this.filter.addFeature(a);
      }, setActiveFilter: function setActiveFilter(a) {
        a || (a = this.filter);this.activeFilter !== a && (this.activeFilter = a, this.fire("activeFilterChange"), a === this.filter ? this.setActiveEnterMode(null, null) : this.setActiveEnterMode(a.getAllowedEnterMode(this.enterMode), a.getAllowedEnterMode(this.shiftEnterMode, !0)));
      }, setActiveEnterMode: function setActiveEnterMode(a, b) {
        a = a ? this.blockless ? CKEDITOR.ENTER_BR : a : this.enterMode;b = b ? this.blockless ? CKEDITOR.ENTER_BR : b : this.shiftEnterMode;if (this.activeEnterMode != a || this.activeShiftEnterMode != b) this.activeEnterMode = a, this.activeShiftEnterMode = b, this.fire("activeEnterModeChange");
      },
      showNotification: function showNotification(a) {
        alert(a);
      } });
  })();CKEDITOR.ELEMENT_MODE_NONE = 0;CKEDITOR.ELEMENT_MODE_REPLACE = 1;CKEDITOR.ELEMENT_MODE_APPENDTO = 2;CKEDITOR.ELEMENT_MODE_INLINE = 3;CKEDITOR.htmlParser = function () {
    this._ = { htmlPartsRegex: /<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)--\x3e)|(?:([^\/\s>]+)((?:\s+[\w\-:.]+(?:\s*=\s*?(?:(?:"[^"]*")|(?:'[^']*')|[^\s"'\/>]+))?)*)[\S\s]*?(\/?)>))/g };
  };
  (function () {
    var a = /([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,
        d = { checked: 1, compact: 1, declare: 1, defer: 1, disabled: 1, ismap: 1, multiple: 1, nohref: 1, noresize: 1, noshade: 1, nowrap: 1, readonly: 1, selected: 1 };CKEDITOR.htmlParser.prototype = { onTagOpen: function onTagOpen() {}, onTagClose: function onTagClose() {}, onText: function onText() {}, onCDATA: function onCDATA() {}, onComment: function onComment() {}, parse: function parse(b) {
        for (var c, f, h = 0, k; c = this._.htmlPartsRegex.exec(b);) {
          f = c.index;if (f > h) if (h = b.substring(h, f), k) k.push(h);else this.onText(h);
          h = this._.htmlPartsRegex.lastIndex;if (f = c[1]) if (f = f.toLowerCase(), k && CKEDITOR.dtd.$cdata[f] && (this.onCDATA(k.join("")), k = null), !k) {
            this.onTagClose(f);continue;
          }if (k) k.push(c[0]);else if (f = c[3]) {
            if (f = f.toLowerCase(), !/="/.test(f)) {
              var g = {},
                  n,
                  r = c[4];c = !!c[5];if (r) for (; n = a.exec(r);) {
                var e = n[1].toLowerCase();n = n[2] || n[3] || n[4] || "";g[e] = !n && d[e] ? e : CKEDITOR.tools.htmlDecodeAttr(n);
              }this.onTagOpen(f, g, c);!k && CKEDITOR.dtd.$cdata[f] && (k = []);
            }
          } else if (f = c[2]) this.onComment(f);
        }if (b.length > h) this.onText(b.substring(h, b.length));
      } };
  })();
  CKEDITOR.htmlParser.basicWriter = CKEDITOR.tools.createClass({ $: function $() {
      this._ = { output: [] };
    }, proto: { openTag: function openTag(a) {
        this._.output.push("\x3c", a);
      }, openTagClose: function openTagClose(a, d) {
        d ? this._.output.push(" /\x3e") : this._.output.push("\x3e");
      }, attribute: function attribute(a, d) {
        "string" == typeof d && (d = CKEDITOR.tools.htmlEncodeAttr(d));this._.output.push(" ", a, '\x3d"', d, '"');
      }, closeTag: function closeTag(a) {
        this._.output.push("\x3c/", a, "\x3e");
      }, text: function text(a) {
        this._.output.push(a);
      }, comment: function comment(a) {
        this._.output.push("\x3c!--", a, "--\x3e");
      }, write: function write(a) {
        this._.output.push(a);
      }, reset: function reset() {
        this._.output = [];this._.indent = !1;
      }, getHtml: function getHtml(a) {
        var d = this._.output.join("");a && this.reset();return d;
      } } });"use strict";
  (function () {
    CKEDITOR.htmlParser.node = function () {};CKEDITOR.htmlParser.node.prototype = { remove: function remove() {
        var a = this.parent.children,
            d = CKEDITOR.tools.indexOf(a, this),
            b = this.previous,
            c = this.next;b && (b.next = c);c && (c.previous = b);a.splice(d, 1);this.parent = null;
      }, replaceWith: function replaceWith(a) {
        var d = this.parent.children,
            b = CKEDITOR.tools.indexOf(d, this),
            c = a.previous = this.previous,
            f = a.next = this.next;c && (c.next = a);f && (f.previous = a);d[b] = a;a.parent = this.parent;this.parent = null;
      }, insertAfter: function insertAfter(a) {
        var d = a.parent.children,
            b = CKEDITOR.tools.indexOf(d, a),
            c = a.next;d.splice(b + 1, 0, this);this.next = a.next;this.previous = a;a.next = this;c && (c.previous = this);this.parent = a.parent;
      }, insertBefore: function insertBefore(a) {
        var d = a.parent.children,
            b = CKEDITOR.tools.indexOf(d, a);d.splice(b, 0, this);this.next = a;(this.previous = a.previous) && (a.previous.next = this);a.previous = this;this.parent = a.parent;
      }, getAscendant: function getAscendant(a) {
        var d = "function" == typeof a ? a : "string" == typeof a ? function (b) {
          return b.name == a;
        } : function (b) {
          return b.name in a;
        },
            b = this.parent;for (; b && b.type == CKEDITOR.NODE_ELEMENT;) {
          if (d(b)) return b;b = b.parent;
        }return null;
      }, wrapWith: function wrapWith(a) {
        this.replaceWith(a);a.add(this);return a;
      }, getIndex: function getIndex() {
        return CKEDITOR.tools.indexOf(this.parent.children, this);
      }, getFilterContext: function getFilterContext(a) {
        return a || {};
      } };
  })();"use strict";CKEDITOR.htmlParser.comment = function (a) {
    this.value = a;this._ = { isBlockLike: !1 };
  };
  CKEDITOR.htmlParser.comment.prototype = CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node(), { type: CKEDITOR.NODE_COMMENT, filter: function filter(a, d) {
      var b = this.value;if (!(b = a.onComment(d, b, this))) return this.remove(), !1;if ("string" != typeof b) return this.replaceWith(b), !1;this.value = b;return !0;
    }, writeHtml: function writeHtml(a, d) {
      d && this.filter(d);a.comment(this.value);
    } });"use strict";
  (function () {
    CKEDITOR.htmlParser.text = function (a) {
      this.value = a;this._ = { isBlockLike: !1 };
    };CKEDITOR.htmlParser.text.prototype = CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node(), { type: CKEDITOR.NODE_TEXT, filter: function filter(a, d) {
        if (!(this.value = a.onText(d, this.value, this))) return this.remove(), !1;
      }, writeHtml: function writeHtml(a, d) {
        d && this.filter(d);a.text(this.value);
      } });
  })();"use strict";
  (function () {
    CKEDITOR.htmlParser.cdata = function (a) {
      this.value = a;
    };CKEDITOR.htmlParser.cdata.prototype = CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node(), { type: CKEDITOR.NODE_TEXT, filter: function filter() {}, writeHtml: function writeHtml(a) {
        a.write(this.value);
      } });
  })();"use strict";CKEDITOR.htmlParser.fragment = function () {
    this.children = [];this.parent = null;this._ = { isBlockLike: !0, hasInlineStarted: !1 };
  };
  (function () {
    function a(a) {
      return a.attributes["data-cke-survive"] ? !1 : "a" == a.name && a.attributes.href || CKEDITOR.dtd.$removeEmpty[a.name];
    }var d = CKEDITOR.tools.extend({ table: 1, ul: 1, ol: 1, dl: 1 }, CKEDITOR.dtd.table, CKEDITOR.dtd.ul, CKEDITOR.dtd.ol, CKEDITOR.dtd.dl),
        b = { ol: 1, ul: 1 },
        c = CKEDITOR.tools.extend({}, { html: 1 }, CKEDITOR.dtd.html, CKEDITOR.dtd.body, CKEDITOR.dtd.head, { style: 1, script: 1 }),
        f = { ul: "li", ol: "li", dl: "dd", table: "tbody", tbody: "tr", thead: "tr", tfoot: "tr", tr: "td" };CKEDITOR.htmlParser.fragment.fromHtml = function (h, k, g) {
      function n(a) {
        var b;if (0 < m.length) for (var c = 0; c < m.length; c++) {
          var d = m[c],
              f = d.name,
              e = CKEDITOR.dtd[f],
              l = u.name && CKEDITOR.dtd[u.name];l && !l[f] || a && e && !e[a] && CKEDITOR.dtd[a] ? f == u.name && (y(u, u.parent, 1), c--) : (b || (r(), b = 1), d = d.clone(), d.parent = u, u = d, m.splice(c, 1), c--);
        }
      }function r() {
        for (; J.length;) {
          y(J.shift(), u);
        }
      }function e(a) {
        if (a._.isBlockLike && "pre" != a.name && "textarea" != a.name) {
          var b = a.children.length,
              c = a.children[b - 1],
              d;c && c.type == CKEDITOR.NODE_TEXT && ((d = CKEDITOR.tools.rtrim(c.value)) ? c.value = d : a.children.length = b - 1);
        }
      }function y(b, c, d) {
        c = c || u || x;var f = u;void 0 === b.previous && (v(c, b) && (u = c, D.onTagOpen(g, {}), b.returnPoint = c = u), e(b), a(b) && !b.children.length || c.add(b), "pre" == b.name && (l = !1), "textarea" == b.name && (K = !1));b.returnPoint ? (u = b.returnPoint, delete b.returnPoint) : u = d ? c : f;
      }function v(a, b) {
        if ((a == x || "body" == a.name) && g && (!a.name || CKEDITOR.dtd[a.name][g])) {
          var c, d;return (c = b.attributes && (d = b.attributes["data-cke-real-element-type"]) ? d : b.name) && c in CKEDITOR.dtd.$inline && !(c in CKEDITOR.dtd.head) && !b.isOrphan || b.type == CKEDITOR.NODE_TEXT;
        }
      }function A(a, b) {
        return a in CKEDITOR.dtd.$listItem || a in CKEDITOR.dtd.$tableContent ? a == b || "dt" == a && "dd" == b || "dd" == a && "dt" == b : !1;
      }var D = new CKEDITOR.htmlParser(),
          x = k instanceof CKEDITOR.htmlParser.element ? k : "string" == typeof k ? new CKEDITOR.htmlParser.element(k) : new CKEDITOR.htmlParser.fragment(),
          m = [],
          J = [],
          u = x,
          K = "textarea" == x.name,
          l = "pre" == x.name;D.onTagOpen = function (f, e, h, g) {
        e = new CKEDITOR.htmlParser.element(f, e);e.isUnknown && h && (e.isEmpty = !0);e.isOptionalClose = g;
        if (a(e)) m.push(e);else {
          if ("pre" == f) l = !0;else {
            if ("br" == f && l) {
              u.add(new CKEDITOR.htmlParser.text("\n"));return;
            }"textarea" == f && (K = !0);
          }if ("br" == f) J.push(e);else {
            for (; !(g = (h = u.name) ? CKEDITOR.dtd[h] || (u._.isBlockLike ? CKEDITOR.dtd.div : CKEDITOR.dtd.span) : c, e.isUnknown || u.isUnknown || g[f]);) {
              if (u.isOptionalClose) D.onTagClose(h);else if (f in b && h in b) h = u.children, (h = h[h.length - 1]) && "li" == h.name || y(h = new CKEDITOR.htmlParser.element("li"), u), !e.returnPoint && (e.returnPoint = u), u = h;else if (f in CKEDITOR.dtd.$listItem && !A(f, h)) D.onTagOpen("li" == f ? "ul" : "dl", {}, 0, 1);else if (h in d && !A(f, h)) !e.returnPoint && (e.returnPoint = u), u = u.parent;else if (h in CKEDITOR.dtd.$inline && m.unshift(u), u.parent) y(u, u.parent, 1);else {
                e.isOrphan = 1;break;
              }
            }n(f);r();e.parent = u;e.isEmpty ? y(e) : u = e;
          }
        }
      };D.onTagClose = function (a) {
        for (var b = m.length - 1; 0 <= b; b--) {
          if (a == m[b].name) {
            m.splice(b, 1);return;
          }
        }for (var c = [], d = [], f = u; f != x && f.name != a;) {
          f._.isBlockLike || d.unshift(f), c.push(f), f = f.returnPoint || f.parent;
        }if (f != x) {
          for (b = 0; b < c.length; b++) {
            var e = c[b];y(e, e.parent);
          }u = f;f._.isBlockLike && r();y(f, f.parent);f == u && (u = u.parent);m = m.concat(d);
        }"body" == a && (g = !1);
      };D.onText = function (a) {
        if (!(u._.hasInlineStarted && !J.length || l || K) && (a = CKEDITOR.tools.ltrim(a), 0 === a.length)) return;var b = u.name,
            e = b ? CKEDITOR.dtd[b] || (u._.isBlockLike ? CKEDITOR.dtd.div : CKEDITOR.dtd.span) : c;if (!K && !e["#"] && b in d) D.onTagOpen(f[b] || ""), D.onText(a);else {
          r();n();l || K || (a = a.replace(/[\t\r\n ]{2,}|[\t\r\n]/g, " "));a = new CKEDITOR.htmlParser.text(a);if (v(u, a)) this.onTagOpen(g, {}, 0, 1);u.add(a);
        }
      };D.onCDATA = function (a) {
        u.add(new CKEDITOR.htmlParser.cdata(a));
      };D.onComment = function (a) {
        r();n();u.add(new CKEDITOR.htmlParser.comment(a));
      };D.parse(h);for (r(); u != x;) {
        y(u, u.parent, 1);
      }e(x);return x;
    };CKEDITOR.htmlParser.fragment.prototype = { type: CKEDITOR.NODE_DOCUMENT_FRAGMENT, add: function add(a, b) {
        isNaN(b) && (b = this.children.length);var c = 0 < b ? this.children[b - 1] : null;if (c) {
          if (a._.isBlockLike && c.type == CKEDITOR.NODE_TEXT && (c.value = CKEDITOR.tools.rtrim(c.value), 0 === c.value.length)) {
            this.children.pop();this.add(a);return;
          }c.next = a;
        }a.previous = c;a.parent = this;this.children.splice(b, 0, a);this._.hasInlineStarted || (this._.hasInlineStarted = a.type == CKEDITOR.NODE_TEXT || a.type == CKEDITOR.NODE_ELEMENT && !a._.isBlockLike);
      }, filter: function filter(a, b) {
        b = this.getFilterContext(b);a.onRoot(b, this);this.filterChildren(a, !1, b);
      }, filterChildren: function filterChildren(a, b, c) {
        if (this.childrenFilteredBy != a.id) {
          c = this.getFilterContext(c);if (b && !this.parent) a.onRoot(c, this);this.childrenFilteredBy = a.id;for (b = 0; b < this.children.length; b++) {
            !1 === this.children[b].filter(a, c) && b--;
          }
        }
      }, writeHtml: function writeHtml(a, b) {
        b && this.filter(b);this.writeChildrenHtml(a);
      }, writeChildrenHtml: function writeChildrenHtml(a, b, c) {
        var d = this.getFilterContext();if (c && !this.parent && b) b.onRoot(d, this);b && this.filterChildren(b, !1, d);b = 0;c = this.children;for (d = c.length; b < d; b++) {
          c[b].writeHtml(a);
        }
      }, forEach: function forEach(a, b, c) {
        if (!(c || b && this.type != b)) var d = a(this);if (!1 !== d) {
          c = this.children;for (var f = 0; f < c.length; f++) {
            d = c[f], d.type == CKEDITOR.NODE_ELEMENT ? d.forEach(a, b) : b && d.type != b || a(d);
          }
        }
      }, getFilterContext: function getFilterContext(a) {
        return a || {};
      } };
  })();"use strict";
  (function () {
    function a() {
      this.rules = [];
    }function d(b, c, d, h) {
      var k, g;for (k in c) {
        (g = b[k]) || (g = b[k] = new a()), g.add(c[k], d, h);
      }
    }CKEDITOR.htmlParser.filter = CKEDITOR.tools.createClass({ $: function $(b) {
        this.id = CKEDITOR.tools.getNextNumber();this.elementNameRules = new a();this.attributeNameRules = new a();this.elementsRules = {};this.attributesRules = {};this.textRules = new a();this.commentRules = new a();this.rootRules = new a();b && this.addRules(b, 10);
      }, proto: { addRules: function addRules(a, c) {
          var f;"number" == typeof c ? f = c : c && "priority" in c && (f = c.priority);"number" != typeof f && (f = 10);"object" != (typeof c === "undefined" ? "undefined" : _typeof(c)) && (c = {});a.elementNames && this.elementNameRules.addMany(a.elementNames, f, c);a.attributeNames && this.attributeNameRules.addMany(a.attributeNames, f, c);a.elements && d(this.elementsRules, a.elements, f, c);a.attributes && d(this.attributesRules, a.attributes, f, c);a.text && this.textRules.add(a.text, f, c);a.comment && this.commentRules.add(a.comment, f, c);a.root && this.rootRules.add(a.root, f, c);
        }, applyTo: function applyTo(a) {
          a.filter(this);
        }, onElementName: function onElementName(a, c) {
          return this.elementNameRules.execOnName(a, c);
        }, onAttributeName: function onAttributeName(a, c) {
          return this.attributeNameRules.execOnName(a, c);
        }, onText: function onText(a, c, d) {
          return this.textRules.exec(a, c, d);
        }, onComment: function onComment(a, c, d) {
          return this.commentRules.exec(a, c, d);
        }, onRoot: function onRoot(a, c) {
          return this.rootRules.exec(a, c);
        }, onElement: function onElement(a, c) {
          for (var d = [this.elementsRules["^"], this.elementsRules[c.name], this.elementsRules.$], h, k = 0; 3 > k; k++) {
            if (h = d[k]) {
              h = h.exec(a, c, this);if (!1 === h) return null;if (h && h != c) return this.onNode(a, h);if (c.parent && !c.name) break;
            }
          }return c;
        },
        onNode: function onNode(a, c) {
          var d = c.type;return d == CKEDITOR.NODE_ELEMENT ? this.onElement(a, c) : d == CKEDITOR.NODE_TEXT ? new CKEDITOR.htmlParser.text(this.onText(a, c.value)) : d == CKEDITOR.NODE_COMMENT ? new CKEDITOR.htmlParser.comment(this.onComment(a, c.value)) : null;
        }, onAttribute: function onAttribute(a, c, d, h) {
          return (d = this.attributesRules[d]) ? d.exec(a, h, c, this) : h;
        } } });CKEDITOR.htmlParser.filterRulesGroup = a;a.prototype = { add: function add(a, c, d) {
        this.rules.splice(this.findIndex(c), 0, { value: a, priority: c, options: d });
      }, addMany: function addMany(a, c, d) {
        for (var h = [this.findIndex(c), 0], k = 0, g = a.length; k < g; k++) {
          h.push({ value: a[k], priority: c, options: d });
        }this.rules.splice.apply(this.rules, h);
      }, findIndex: function findIndex(a) {
        for (var c = this.rules, d = c.length - 1; 0 <= d && a < c[d].priority;) {
          d--;
        }return d + 1;
      }, exec: function exec(a, c) {
        var d = c instanceof CKEDITOR.htmlParser.node || c instanceof CKEDITOR.htmlParser.fragment,
            h = Array.prototype.slice.call(arguments, 1),
            k = this.rules,
            g = k.length,
            n,
            r,
            e,
            y;for (y = 0; y < g; y++) {
          if (d && (n = c.type, r = c.name), e = k[y], !(a.nonEditable && !e.options.applyToAll || a.nestedEditable && e.options.excludeNestedEditable)) {
            e = e.value.apply(null, h);if (!1 === e || d && e && (e.name != r || e.type != n)) return e;null != e && (h[0] = c = e);
          }
        }return c;
      }, execOnName: function execOnName(a, c) {
        for (var d = 0, h = this.rules, k = h.length, g; c && d < k; d++) {
          g = h[d], a.nonEditable && !g.options.applyToAll || a.nestedEditable && g.options.excludeNestedEditable || (c = c.replace(g.value[0], g.value[1]));
        }return c;
      } };
  })();
  (function () {
    function a(a, d) {
      function e(a) {
        return a || CKEDITOR.env.needsNbspFiller ? new CKEDITOR.htmlParser.text(" ") : new CKEDITOR.htmlParser.element("br", { "data-cke-bogus": 1 });
      }function p(a, d) {
        return function (f) {
          if (f.type != CKEDITOR.NODE_DOCUMENT_FRAGMENT) {
            var l = [],
                w = b(f),
                p,
                E;if (w) for (q(w, 1) && l.push(w); w;) {
              h(w) && (p = c(w)) && q(p) && ((E = c(p)) && !h(E) ? l.push(p) : (e(z).insertAfter(p), p.remove())), w = w.previous;
            }for (w = 0; w < l.length; w++) {
              l[w].remove();
            }if (l = !a || !1 !== ("function" == typeof d ? d(f) : d)) z || CKEDITOR.env.needsBrFiller || f.type != CKEDITOR.NODE_DOCUMENT_FRAGMENT ? z || CKEDITOR.env.needsBrFiller || !(7 < document.documentMode || f.name in CKEDITOR.dtd.tr || f.name in CKEDITOR.dtd.$listItem) ? (l = b(f), l = !l || "form" == f.name && "input" == l.name) : l = !1 : l = !1;l && f.add(e(a));
          }
        };
      }function q(a, b) {
        if ((!z || CKEDITOR.env.needsBrFiller) && a.type == CKEDITOR.NODE_ELEMENT && "br" == a.name && !a.attributes["data-cke-eol"]) return !0;var c;return a.type == CKEDITOR.NODE_TEXT && (c = a.value.match(m)) && (c.index && (new CKEDITOR.htmlParser.text(a.value.substring(0, c.index)).insertBefore(a), a.value = c[0]), !CKEDITOR.env.needsBrFiller && z && (!b || a.parent.name in g) || !z && ((c = a.previous) && "br" == c.name || !c || h(c))) ? !0 : !1;
      }var E = { elements: {} },
          z = "html" == d,
          g = CKEDITOR.tools.extend({}, l),
          t;for (t in g) {
        "#" in u[t] || delete g[t];
      }for (t in g) {
        E.elements[t] = p(z, a.config.fillEmptyBlocks);
      }E.root = p(z, !1);E.elements.br = function (a) {
        return function (b) {
          if (b.parent.type != CKEDITOR.NODE_DOCUMENT_FRAGMENT) {
            var d = b.attributes;if ("data-cke-bogus" in d || "data-cke-eol" in d) delete d["data-cke-bogus"];else {
              for (d = b.next; d && f(d);) {
                d = d.next;
              }var l = c(b);!d && h(b.parent) ? k(b.parent, e(a)) : h(d) && l && !h(l) && e(a).insertBefore(d);
            }
          }
        };
      }(z);return E;
    }function d(a, b) {
      return a != CKEDITOR.ENTER_BR && !1 !== b ? a == CKEDITOR.ENTER_DIV ? "div" : "p" : !1;
    }function b(a) {
      for (a = a.children[a.children.length - 1]; a && f(a);) {
        a = a.previous;
      }return a;
    }function c(a) {
      for (a = a.previous; a && f(a);) {
        a = a.previous;
      }return a;
    }function f(a) {
      return a.type == CKEDITOR.NODE_TEXT && !CKEDITOR.tools.trim(a.value) || a.type == CKEDITOR.NODE_ELEMENT && a.attributes["data-cke-bookmark"];
    }function h(a) {
      return a && (a.type == CKEDITOR.NODE_ELEMENT && a.name in l || a.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT);
    }function k(a, b) {
      var c = a.children[a.children.length - 1];a.children.push(b);b.parent = a;c && (c.next = b, b.previous = c);
    }function g(a) {
      a = a.attributes;"false" != a.contenteditable && (a["data-cke-editable"] = a.contenteditable ? "true" : 1);a.contenteditable = "false";
    }function n(a) {
      a = a.attributes;switch (a["data-cke-editable"]) {case "true":
          a.contenteditable = "true";break;case "1":
          delete a.contenteditable;}
    }function r(a) {
      return a.replace(M, function (a, b, c) {
        return "\x3c" + b + c.replace(q, function (a, b) {
          return E.test(b) && -1 == c.indexOf("data-cke-saved-" + b) ? " data-cke-saved-" + a + " data-cke-" + CKEDITOR.rnd + "-" + a : a;
        }) + "\x3e";
      });
    }function e(a, b) {
      return a.replace(b, function (a, b, c) {
        0 === a.indexOf("\x3ctextarea") && (a = b + A(c).replace(/</g, "\x26lt;").replace(/>/g, "\x26gt;") + "\x3c/textarea\x3e");return "\x3ccke:encoded\x3e" + encodeURIComponent(a) + "\x3c/cke:encoded\x3e";
      });
    }function y(a) {
      return a.replace(P, function (a, b) {
        return decodeURIComponent(b);
      });
    }function v(a) {
      return a.replace(/\x3c!--(?!{cke_protected})[\s\S]+?--\x3e/g, function (a) {
        return "\x3c!--" + J + "{C}" + encodeURIComponent(a).replace(/--/g, "%2D%2D") + "--\x3e";
      });
    }function A(a) {
      return a.replace(/\x3c!--\{cke_protected\}\{C\}([\s\S]+?)--\x3e/g, function (a, b) {
        return decodeURIComponent(b);
      });
    }function D(a, b) {
      var c = b._.dataStore;return a.replace(/\x3c!--\{cke_protected\}([\s\S]+?)--\x3e/g, function (a, b) {
        return decodeURIComponent(b);
      }).replace(/\{cke_protected_(\d+)\}/g, function (a, b) {
        return c && c[b] || "";
      });
    }function x(a, b) {
      var c = [],
          d = b.config.protectedSource,
          f = b._.dataStore || (b._.dataStore = { id: 1 }),
          e = /<\!--\{cke_temp(comment)?\}(\d*?)--\x3e/g,
          d = [/<script[\s\S]*?(<\/script>|$)/gi, /<noscript[\s\S]*?<\/noscript>/gi, /<meta[\s\S]*?\/?>/gi].concat(d);a = a.replace(/\x3c!--[\s\S]*?--\x3e/g, function (a) {
        return "\x3c!--{cke_tempcomment}" + (c.push(a) - 1) + "--\x3e";
      });for (var l = 0; l < d.length; l++) {
        a = a.replace(d[l], function (a) {
          a = a.replace(e, function (a, b, d) {
            return c[d];
          });return (/cke_temp(comment)?/.test(a) ? a : "\x3c!--{cke_temp}" + (c.push(a) - 1) + "--\x3e"
          );
        });
      }a = a.replace(e, function (a, b, d) {
        return "\x3c!--" + J + (b ? "{C}" : "") + encodeURIComponent(c[d]).replace(/--/g, "%2D%2D") + "--\x3e";
      });a = a.replace(/<\w+(?:\s+(?:(?:[^\s=>]+\s*=\s*(?:[^'"\s>]+|'[^']*'|"[^"]*"))|[^\s=\/>]+))+\s*\/?>/g, function (a) {
        return a.replace(/\x3c!--\{cke_protected\}([^>]*)--\x3e/g, function (a, b) {
          f[f.id] = decodeURIComponent(b);return "{cke_protected_" + f.id++ + "}";
        });
      });return a = a.replace(/<(title|iframe|textarea)([^>]*)>([\s\S]*?)<\/\1>/g, function (a, c, d, f) {
        return "\x3c" + c + d + "\x3e" + D(A(f), b) + "\x3c/" + c + "\x3e";
      });
    }CKEDITOR.htmlDataProcessor = function (b) {
      var c,
          f,
          l = this;this.editor = b;this.dataFilter = c = new CKEDITOR.htmlParser.filter();this.htmlFilter = f = new CKEDITOR.htmlParser.filter();this.writer = new CKEDITOR.htmlParser.basicWriter();c.addRules(t);c.addRules(F, { applyToAll: !0 });c.addRules(a(b, "data"), { applyToAll: !0 });f.addRules(L);f.addRules(C, { applyToAll: !0 });f.addRules(a(b, "html"), { applyToAll: !0 });b.on("toHtml", function (a) {
        a = a.data;var c = a.dataValue,
            f,
            c = x(c, b),
            c = e(c, H),
            c = r(c),
            c = e(c, z),
            c = c.replace(O, "$1cke:$2"),
            c = c.replace(N, "\x3ccke:$1$2\x3e\x3c/cke:$1\x3e"),
            c = c.replace(/(<pre\b[^>]*>)(\r\n|\n)/g, "$1$2$2"),
            c = c.replace(/([^a-z0-9<\-])(on\w{3,})(?!>)/gi, "$1data-cke-" + CKEDITOR.rnd + "-$2");f = a.context || b.editable().getName();var l;CKEDITOR.env.ie && 9 > CKEDITOR.env.version && "pre" == f && (f = "div", c = "\x3cpre\x3e" + c + "\x3c/pre\x3e", l = 1);f = b.document.createElement(f);f.setHtml("a" + c);c = f.getHtml().substr(1);c = c.replace(new RegExp("data-cke-" + CKEDITOR.rnd + "-", "ig"), "");l && (c = c.replace(/^<pre>|<\/pre>$/gi, ""));c = c.replace(p, "$1$2");c = y(c);c = A(c);f = !1 === a.fixForBody ? !1 : d(a.enterMode, b.config.autoParagraph);c = CKEDITOR.htmlParser.fragment.fromHtml(c, a.context, f);f && (l = c, !l.children.length && CKEDITOR.dtd[l.name][f] && (f = new CKEDITOR.htmlParser.element(f), l.add(f)));a.dataValue = c;
      }, null, null, 5);b.on("toHtml", function (a) {
        a.data.filter.applyTo(a.data.dataValue, !0, a.data.dontFilter, a.data.enterMode) && b.fire("dataFiltered");
      }, null, null, 6);b.on("toHtml", function (a) {
        a.data.dataValue.filterChildren(l.dataFilter, !0);
      }, null, null, 10);b.on("toHtml", function (a) {
        a = a.data;var b = a.dataValue,
            c = new CKEDITOR.htmlParser.basicWriter();b.writeChildrenHtml(c);b = c.getHtml(!0);a.dataValue = v(b);
      }, null, null, 15);b.on("toDataFormat", function (a) {
        var c = a.data.dataValue;a.data.enterMode != CKEDITOR.ENTER_BR && (c = c.replace(/^<br *\/?>/i, ""));a.data.dataValue = CKEDITOR.htmlParser.fragment.fromHtml(c, a.data.context, d(a.data.enterMode, b.config.autoParagraph));
      }, null, null, 5);b.on("toDataFormat", function (a) {
        a.data.dataValue.filterChildren(l.htmlFilter, !0);
      }, null, null, 10);b.on("toDataFormat", function (a) {
        a.data.filter.applyTo(a.data.dataValue, !1, !0);
      }, null, null, 11);b.on("toDataFormat", function (a) {
        var c = a.data.dataValue,
            d = l.writer;d.reset();c.writeChildrenHtml(d);c = d.getHtml(!0);c = A(c);c = D(c, b);a.data.dataValue = c;
      }, null, null, 15);
    };CKEDITOR.htmlDataProcessor.prototype = { toHtml: function toHtml(a, b, c, d) {
        var f = this.editor,
            e,
            l,
            p,
            h;b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) ? (e = b.context, c = b.fixForBody, d = b.dontFilter, l = b.filter, p = b.enterMode, h = b.protectedWhitespaces) : e = b;e || null === e || (e = f.editable().getName());return f.fire("toHtml", { dataValue: a, context: e, fixForBody: c, dontFilter: d,
          filter: l || f.filter, enterMode: p || f.enterMode, protectedWhitespaces: h }).dataValue;
      }, toDataFormat: function toDataFormat(a, b) {
        var c, d, f;b && (c = b.context, d = b.filter, f = b.enterMode);c || null === c || (c = this.editor.editable().getName());return this.editor.fire("toDataFormat", { dataValue: a, filter: d || this.editor.filter, context: c, enterMode: f || this.editor.enterMode }).dataValue;
      } };var m = /(?:&nbsp;|\xa0)$/,
        J = "{cke_protected}",
        u = CKEDITOR.dtd,
        K = "caption colgroup col thead tfoot tbody".split(" "),
        l = CKEDITOR.tools.extend({}, u.$blockLimit, u.$block),
        t = { elements: { input: g, textarea: g } },
        F = { attributeNames: [[/^on/, "data-cke-pa-on"], [/^srcdoc/, "data-cke-pa-srcdoc"], [/^data-cke-expando$/, ""]], elements: { iframe: function iframe(a) {
          if (a.attributes && a.attributes.src) {
            var b = a.attributes.src.toLowerCase().replace(/[^a-z]/gi, "");if (0 === b.indexOf("javascript") || 0 === b.indexOf("data")) a.attributes["data-cke-pa-src"] = a.attributes.src, delete a.attributes.src;
          }
        } } },
        L = { elements: { embed: function embed(a) {
          var b = a.parent;if (b && "object" == b.name) {
            var c = b.attributes.width,
                b = b.attributes.height;
            c && (a.attributes.width = c);b && (a.attributes.height = b);
          }
        }, a: function a(_a5) {
          var b = _a5.attributes;if (!(_a5.children.length || b.name || b.id || _a5.attributes["data-cke-saved-name"])) return !1;
        } } },
        C = { elementNames: [[/^cke:/, ""], [/^\?xml:namespace$/, ""]], attributeNames: [[/^data-cke-(saved|pa)-/, ""], [/^data-cke-.*/, ""], ["hidefocus", ""]], elements: { $: function $(a) {
          var b = a.attributes;if (b) {
            if (b["data-cke-temp"]) return !1;for (var c = ["name", "href", "src"], d, f = 0; f < c.length; f++) {
              d = "data-cke-saved-" + c[f], d in b && delete b[c[f]];
            }
          }return a;
        },
        table: function table(a) {
          a.children.slice(0).sort(function (a, b) {
            var c, d;a.type == CKEDITOR.NODE_ELEMENT && b.type == a.type && (c = CKEDITOR.tools.indexOf(K, a.name), d = CKEDITOR.tools.indexOf(K, b.name));-1 < c && -1 < d && c != d || (c = a.parent ? a.getIndex() : -1, d = b.parent ? b.getIndex() : -1);return c > d ? 1 : -1;
          });
        }, param: function param(a) {
          a.children = [];a.isEmpty = !0;return a;
        }, span: function span(a) {
          "Apple-style-span" == a.attributes["class"] && delete a.name;
        }, html: function html(a) {
          delete a.attributes.contenteditable;delete a.attributes["class"];
        }, body: function body(a) {
          delete a.attributes.spellcheck;
          delete a.attributes.contenteditable;
        }, style: function style(a) {
          var b = a.children[0];b && b.value && (b.value = CKEDITOR.tools.trim(b.value));a.attributes.type || (a.attributes.type = "text/css");
        }, title: function title(a) {
          var b = a.children[0];!b && k(a, b = new CKEDITOR.htmlParser.text());b.value = a.attributes["data-cke-title"] || "";
        }, input: n, textarea: n }, attributes: { "class": function _class(a) {
          return CKEDITOR.tools.ltrim(a.replace(/(?:^|\s+)cke_[^\s]*/g, "")) || !1;
        } } };CKEDITOR.env.ie && (C.attributes.style = function (a) {
      return a.replace(/(^|;)([^\:]+)/g, function (a) {
        return a.toLowerCase();
      });
    });var M = /<(a|area|img|input|source)\b([^>]*)>/gi,
        q = /([\w-:]+)\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|(?:[^ "'>]+))/gi,
        E = /^(href|src|name)$/i,
        z = /(?:<style(?=[ >])[^>]*>[\s\S]*?<\/style>)|(?:<(:?link|meta|base)[^>]*>)/gi,
        H = /(<textarea(?=[ >])[^>]*>)([\s\S]*?)(?:<\/textarea>)/gi,
        P = /<cke:encoded>([^<]*)<\/cke:encoded>/gi,
        O = /(<\/?)((?:object|embed|param|html|body|head|title)[^>]*>)/gi,
        p = /(<\/?)cke:((?:html|body|head|title)[^>]*>)/gi,
        N = /<cke:(param|embed)([^>]*?)\/?>(?!\s*<\/cke:\1)/gi;
  })();
  "use strict";CKEDITOR.htmlParser.element = function (a, d) {
    this.name = a;this.attributes = d || {};this.children = [];var b = a || "",
        c = b.match(/^cke:(.*)/);c && (b = c[1]);b = !!(CKEDITOR.dtd.$nonBodyContent[b] || CKEDITOR.dtd.$block[b] || CKEDITOR.dtd.$listItem[b] || CKEDITOR.dtd.$tableContent[b] || CKEDITOR.dtd.$nonEditable[b] || "br" == b);this.isEmpty = !!CKEDITOR.dtd.$empty[a];this.isUnknown = !CKEDITOR.dtd[a];this._ = { isBlockLike: b, hasInlineStarted: this.isEmpty || !b };
  };
  CKEDITOR.htmlParser.cssStyle = function (a) {
    var d = {};((a instanceof CKEDITOR.htmlParser.element ? a.attributes.style : a) || "").replace(/&quot;/g, '"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g, function (a, c, f) {
      "font-family" == c && (f = f.replace(/["']/g, ""));d[c.toLowerCase()] = f;
    });return { rules: d, populate: function populate(a) {
        var c = this.toString();c && (a instanceof CKEDITOR.dom.element ? a.setAttribute("style", c) : a instanceof CKEDITOR.htmlParser.element ? a.attributes.style = c : a.style = c);
      }, toString: function toString() {
        var a = [],
            c;
        for (c in d) {
          d[c] && a.push(c, ":", d[c], ";");
        }return a.join("");
      } };
  };
  (function () {
    function a(a) {
      return function (b) {
        return b.type == CKEDITOR.NODE_ELEMENT && ("string" == typeof a ? b.name == a : b.name in a);
      };
    }var d = function d(a, b) {
      a = a[0];b = b[0];return a < b ? -1 : a > b ? 1 : 0;
    },
        b = CKEDITOR.htmlParser.fragment.prototype;CKEDITOR.htmlParser.element.prototype = CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node(), { type: CKEDITOR.NODE_ELEMENT, add: b.add, clone: function clone() {
        return new CKEDITOR.htmlParser.element(this.name, this.attributes);
      }, filter: function filter(a, b) {
        var d = this,
            k,
            g;b = d.getFilterContext(b);if (b.off) return !0;
        if (!d.parent) a.onRoot(b, d);for (;;) {
          k = d.name;if (!(g = a.onElementName(b, k))) return this.remove(), !1;d.name = g;if (!(d = a.onElement(b, d))) return this.remove(), !1;if (d !== this) return this.replaceWith(d), !1;if (d.name == k) break;if (d.type != CKEDITOR.NODE_ELEMENT) return this.replaceWith(d), !1;if (!d.name) return this.replaceWithChildren(), !1;
        }k = d.attributes;var n, r;for (n in k) {
          for (g = k[n];;) {
            if (r = a.onAttributeName(b, n)) {
              if (r != n) delete k[n], n = r;else break;
            } else {
              delete k[n];break;
            }
          }r && (!1 === (g = a.onAttribute(b, d, r, g)) ? delete k[r] : k[r] = g);
        }d.isEmpty || this.filterChildren(a, !1, b);return !0;
      }, filterChildren: b.filterChildren, writeHtml: function writeHtml(a, b) {
        b && this.filter(b);var h = this.name,
            k = [],
            g = this.attributes,
            n,
            r;a.openTag(h, g);for (n in g) {
          k.push([n, g[n]]);
        }a.sortAttributes && k.sort(d);n = 0;for (r = k.length; n < r; n++) {
          g = k[n], a.attribute(g[0], g[1]);
        }a.openTagClose(h, this.isEmpty);this.writeChildrenHtml(a);this.isEmpty || a.closeTag(h);
      }, writeChildrenHtml: b.writeChildrenHtml, replaceWithChildren: function replaceWithChildren() {
        for (var a = this.children, b = a.length; b;) {
          a[--b].insertAfter(this);
        }this.remove();
      }, forEach: b.forEach, getFirst: function getFirst(b) {
        if (!b) return this.children.length ? this.children[0] : null;"function" != typeof b && (b = a(b));for (var d = 0, h = this.children.length; d < h; ++d) {
          if (b(this.children[d])) return this.children[d];
        }return null;
      }, getHtml: function getHtml() {
        var a = new CKEDITOR.htmlParser.basicWriter();this.writeChildrenHtml(a);return a.getHtml();
      }, setHtml: function setHtml(a) {
        a = this.children = CKEDITOR.htmlParser.fragment.fromHtml(a).children;for (var b = 0, d = a.length; b < d; ++b) {
          a[b].parent = this;
        }
      }, getOuterHtml: function getOuterHtml() {
        var a = new CKEDITOR.htmlParser.basicWriter();this.writeHtml(a);return a.getHtml();
      }, split: function split(a) {
        for (var b = this.children.splice(a, this.children.length - a), d = this.clone(), k = 0; k < b.length; ++k) {
          b[k].parent = d;
        }d.children = b;b[0] && (b[0].previous = null);0 < a && (this.children[a - 1].next = null);this.parent.add(d, this.getIndex() + 1);return d;
      }, find: function find(a, b) {
        void 0 === b && (b = !1);var d = [],
            k;for (k = 0; k < this.children.length; k++) {
          var g = this.children[k];"function" == typeof a && a(g) ? d.push(g) : "string" == typeof a && g.name === a && d.push(g);
          b && g.find && (d = d.concat(g.find(a, b)));
        }return d;
      }, addClass: function addClass(a) {
        if (!this.hasClass(a)) {
          var b = this.attributes["class"] || "";this.attributes["class"] = b + (b ? " " : "") + a;
        }
      }, removeClass: function removeClass(a) {
        var b = this.attributes["class"];b && ((b = CKEDITOR.tools.trim(b.replace(new RegExp("(?:\\s+|^)" + a + "(?:\\s+|$)"), " "))) ? this.attributes["class"] = b : delete this.attributes["class"]);
      }, hasClass: function hasClass(a) {
        var b = this.attributes["class"];return b ? new RegExp("(?:^|\\s)" + a + "(?\x3d\\s|$)").test(b) : !1;
      }, getFilterContext: function getFilterContext(a) {
        var b = [];a || (a = { off: !1, nonEditable: !1, nestedEditable: !1 });a.off || "off" != this.attributes["data-cke-processor"] || b.push("off", !0);a.nonEditable || "false" != this.attributes.contenteditable ? a.nonEditable && !a.nestedEditable && "true" == this.attributes.contenteditable && b.push("nestedEditable", !0) : b.push("nonEditable", !0);if (b.length) {
          a = CKEDITOR.tools.copy(a);for (var d = 0; d < b.length; d += 2) {
            a[b[d]] = b[d + 1];
          }
        }return a;
      } }, !0);
  })();
  (function () {
    var a = /{([^}]+)}/g;CKEDITOR.template = function (a) {
      this.source = String(a);
    };CKEDITOR.template.prototype.output = function (d, b) {
      var c = this.source.replace(a, function (a, b) {
        return void 0 !== d[b] ? d[b] : a;
      });return b ? b.push(c) : c;
    };
  })();delete CKEDITOR.loadFullCore;CKEDITOR.instances = {};CKEDITOR.document = new CKEDITOR.dom.document(document);
  CKEDITOR.add = function (a) {
    CKEDITOR.instances[a.name] = a;a.on("focus", function () {
      CKEDITOR.currentInstance != a && (CKEDITOR.currentInstance = a, CKEDITOR.fire("currentInstance"));
    });a.on("blur", function () {
      CKEDITOR.currentInstance == a && (CKEDITOR.currentInstance = null, CKEDITOR.fire("currentInstance"));
    });CKEDITOR.fire("instance", null, a);
  };CKEDITOR.remove = function (a) {
    delete CKEDITOR.instances[a.name];
  };
  (function () {
    var a = {};CKEDITOR.addTemplate = function (d, b) {
      var c = a[d];if (c) return c;c = { name: d, source: b };CKEDITOR.fire("template", c);return a[d] = new CKEDITOR.template(c.source);
    };CKEDITOR.getTemplate = function (d) {
      return a[d];
    };
  })();(function () {
    var a = [];CKEDITOR.addCss = function (d) {
      a.push(d);
    };CKEDITOR.getCss = function () {
      return a.join("\n");
    };
  })();CKEDITOR.on("instanceDestroyed", function () {
    CKEDITOR.tools.isEmpty(this.instances) && CKEDITOR.fire("reset");
  });CKEDITOR.TRISTATE_ON = 1;CKEDITOR.TRISTATE_OFF = 2;
  CKEDITOR.TRISTATE_DISABLED = 0;
  (function () {
    CKEDITOR.inline = function (a, d) {
      if (!CKEDITOR.env.isCompatible) return null;a = CKEDITOR.dom.element.get(a);if (a.getEditor()) throw 'The editor instance "' + a.getEditor().name + '" is already attached to the provided element.';var b = new CKEDITOR.editor(d, a, CKEDITOR.ELEMENT_MODE_INLINE),
          c = a.is("textarea") ? a : null;c ? (b.setData(c.getValue(), null, !0), a = CKEDITOR.dom.element.createFromHtml('\x3cdiv contenteditable\x3d"' + !!b.readOnly + '" class\x3d"cke_textarea_inline"\x3e' + c.getValue() + "\x3c/div\x3e", CKEDITOR.document), a.insertAfter(c), c.hide(), c.$.form && b._attachToForm()) : b.setData(a.getHtml(), null, !0);b.on("loaded", function () {
        b.fire("uiReady");b.editable(a);b.container = a;b.ui.contentsElement = a;b.setData(b.getData(1));b.resetDirty();b.fire("contentDom");b.mode = "wysiwyg";b.fire("mode");b.status = "ready";b.fireOnce("instanceReady");CKEDITOR.fire("instanceReady", null, b);
      }, null, null, 1E4);b.on("destroy", function () {
        c && (b.container.clearCustomData(), b.container.remove(), c.show());b.element.clearCustomData();delete b.element;
      });
      return b;
    };CKEDITOR.inlineAll = function () {
      var a, d, b;for (b in CKEDITOR.dtd.$editable) {
        for (var c = CKEDITOR.document.getElementsByTag(b), f = 0, h = c.count(); f < h; f++) {
          a = c.getItem(f), "true" == a.getAttribute("contenteditable") && (d = { element: a, config: {} }, !1 !== CKEDITOR.fire("inline", d) && CKEDITOR.inline(a, d.config));
        }
      }
    };CKEDITOR.domReady(function () {
      !CKEDITOR.disableAutoInline && CKEDITOR.inlineAll();
    });
  })();CKEDITOR.replaceClass = "ckeditor";
  (function () {
    function a(a, f, h, k) {
      if (!CKEDITOR.env.isCompatible) return null;a = CKEDITOR.dom.element.get(a);if (a.getEditor()) throw 'The editor instance "' + a.getEditor().name + '" is already attached to the provided element.';var g = new CKEDITOR.editor(f, a, k);k == CKEDITOR.ELEMENT_MODE_REPLACE && (a.setStyle("visibility", "hidden"), g._.required = a.hasAttribute("required"), a.removeAttribute("required"));h && g.setData(h, null, !0);g.on("loaded", function () {
        b(g);k == CKEDITOR.ELEMENT_MODE_REPLACE && g.config.autoUpdateElement && a.$.form && g._attachToForm();g.setMode(g.config.startupMode, function () {
          g.resetDirty();g.status = "ready";g.fireOnce("instanceReady");CKEDITOR.fire("instanceReady", null, g);
        });
      });g.on("destroy", d);return g;
    }function d() {
      var a = this.container,
          b = this.element;a && (a.clearCustomData(), a.remove());b && (b.clearCustomData(), this.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE && (b.show(), this._.required && b.setAttribute("required", "required")), delete this.element);
    }function b(a) {
      var b = a.name,
          d = a.element,
          k = a.elementMode,
          g = a.fire("uiSpace", { space: "top", html: "" }).html,
          n = a.fire("uiSpace", { space: "bottom", html: "" }).html,
          r = new CKEDITOR.template('\x3c{outerEl} id\x3d"cke_{name}" class\x3d"{id} cke cke_reset cke_chrome cke_editor_{name} cke_{langDir} ' + CKEDITOR.env.cssClass + '"  dir\x3d"{langDir}" lang\x3d"{langCode}" role\x3d"application"' + (a.title ? ' aria-labelledby\x3d"cke_{name}_arialbl"' : "") + "\x3e" + (a.title ? '\x3cspan id\x3d"cke_{name}_arialbl" class\x3d"cke_voice_label"\x3e{voiceLabel}\x3c/span\x3e' : "") + '\x3c{outerEl} class\x3d"cke_inner cke_reset" role\x3d"presentation"\x3e{topHtml}\x3c{outerEl} id\x3d"{contentId}" class\x3d"cke_contents cke_reset" role\x3d"presentation"\x3e\x3c/{outerEl}\x3e{bottomHtml}\x3c/{outerEl}\x3e\x3c/{outerEl}\x3e'),
          b = CKEDITOR.dom.element.createFromHtml(r.output({ id: a.id, name: b, langDir: a.lang.dir, langCode: a.langCode, voiceLabel: a.title, topHtml: g ? '\x3cspan id\x3d"' + a.ui.spaceId("top") + '" class\x3d"cke_top cke_reset_all" role\x3d"presentation" style\x3d"height:auto"\x3e' + g + "\x3c/span\x3e" : "", contentId: a.ui.spaceId("contents"), bottomHtml: n ? '\x3cspan id\x3d"' + a.ui.spaceId("bottom") + '" class\x3d"cke_bottom cke_reset_all" role\x3d"presentation"\x3e' + n + "\x3c/span\x3e" : "", outerEl: CKEDITOR.env.ie ? "span" : "div" }));k == CKEDITOR.ELEMENT_MODE_REPLACE ? (d.hide(), b.insertAfter(d)) : d.append(b);a.container = b;a.ui.contentsElement = a.ui.space("contents");g && a.ui.space("top").unselectable();n && a.ui.space("bottom").unselectable();d = a.config.width;k = a.config.height;d && b.setStyle("width", CKEDITOR.tools.cssLength(d));k && a.ui.space("contents").setStyle("height", CKEDITOR.tools.cssLength(k));b.disableContextMenu();CKEDITOR.env.webkit && b.on("focus", function () {
        a.focus();
      });a.fireOnce("uiReady");
    }CKEDITOR.replace = function (b, d) {
      return a(b, d, null, CKEDITOR.ELEMENT_MODE_REPLACE);
    };
    CKEDITOR.appendTo = function (b, d, h) {
      return a(b, d, h, CKEDITOR.ELEMENT_MODE_APPENDTO);
    };CKEDITOR.replaceAll = function () {
      for (var a = document.getElementsByTagName("textarea"), b = 0; b < a.length; b++) {
        var d = null,
            k = a[b];if (k.name || k.id) {
          if ("string" == typeof arguments[0]) {
            if (!new RegExp("(?:^|\\s)" + arguments[0] + "(?:$|\\s)").test(k.className)) continue;
          } else if ("function" == typeof arguments[0] && (d = {}, !1 === arguments[0](k, d))) continue;this.replace(k, d);
        }
      }
    };CKEDITOR.editor.prototype.addMode = function (a, b) {
      (this._.modes || (this._.modes = {}))[a] = b;
    };CKEDITOR.editor.prototype.setMode = function (a, b) {
      var d = this,
          k = this._.modes;if (a != d.mode && k && k[a]) {
        d.fire("beforeSetMode", a);if (d.mode) {
          var g = d.checkDirty(),
              k = d._.previousModeData,
              n,
              r = 0;d.fire("beforeModeUnload");d.editable(0);d._.previousMode = d.mode;d._.previousModeData = n = d.getData(1);"source" == d.mode && k == n && (d.fire("lockSnapshot", { forceUpdate: !0 }), r = 1);d.ui.space("contents").setHtml("");d.mode = "";
        } else d._.previousModeData = d.getData(1);this._.modes[a](function () {
          d.mode = a;void 0 !== g && !g && d.resetDirty();r ? d.fire("unlockSnapshot") : "wysiwyg" == a && d.fire("saveSnapshot");setTimeout(function () {
            d.fire("mode");b && b.call(d);
          }, 0);
        });
      }
    };CKEDITOR.editor.prototype.resize = function (a, b, d, k) {
      var g = this.container,
          n = this.ui.space("contents"),
          r = CKEDITOR.env.webkit && this.document && this.document.getWindow().$.frameElement;k = k ? this.container.getFirst(function (a) {
        return a.type == CKEDITOR.NODE_ELEMENT && a.hasClass("cke_inner");
      }) : g;k.setSize("width", a, !0);r && (r.style.width = "1%");var e = (k.$.offsetHeight || 0) - (n.$.clientHeight || 0),
          g = Math.max(b - (d ? 0 : e), 0);b = d ? b + e : b;n.setStyle("height", g + "px");r && (r.style.width = "100%");this.fire("resize", { outerHeight: b, contentsHeight: g, outerWidth: a || k.getSize("width") });
    };CKEDITOR.editor.prototype.getResizable = function (a) {
      return a ? this.ui.space("contents") : this.container;
    };CKEDITOR.domReady(function () {
      CKEDITOR.replaceClass && CKEDITOR.replaceAll(CKEDITOR.replaceClass);
    });
  })();CKEDITOR.config.startupMode = "wysiwyg";
  (function () {
    function a(a) {
      var b = a.editor,
          e = a.data.path,
          f = e.blockLimit,
          g = a.data.selection,
          h = g.getRanges()[0],
          q;if (CKEDITOR.env.gecko || CKEDITOR.env.ie && CKEDITOR.env.needsBrFiller) if (g = d(g, e)) g.appendBogus(), q = CKEDITOR.env.ie;k(b, e.block, f) && h.collapsed && !h.getCommonAncestor().isReadOnly() && (e = h.clone(), e.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS), f = new CKEDITOR.dom.walker(e), f.guard = function (a) {
        return !c(a) || a.type == CKEDITOR.NODE_COMMENT || a.isReadOnly();
      }, !f.checkForward() || e.checkStartOfBlock() && e.checkEndOfBlock()) && (b = h.fixBlock(!0, b.activeEnterMode == CKEDITOR.ENTER_DIV ? "div" : "p"), CKEDITOR.env.needsBrFiller || (b = b.getFirst(c)) && b.type == CKEDITOR.NODE_TEXT && CKEDITOR.tools.trim(b.getText()).match(/^(?:&nbsp;|\xa0)$/) && b.remove(), q = 1, a.cancel());q && h.select();
    }function d(a, b) {
      if (a.isFake) return 0;var d = b.block || b.blockLimit,
          e = d && d.getLast(c);if (!(!d || !d.isBlockBoundary() || e && e.type == CKEDITOR.NODE_ELEMENT && e.isBlockBoundary() || d.is("pre") || d.getBogus())) return d;
    }function b(a) {
      var b = a.data.getTarget();b.is("input") && (b = b.getAttribute("type"), "submit" != b && "reset" != b || a.data.preventDefault());
    }function c(a) {
      return e(a) && y(a);
    }function f(a, b) {
      return function (c) {
        var d = c.data.$.toElement || c.data.$.fromElement || c.data.$.relatedTarget;(d = d && d.nodeType == CKEDITOR.NODE_ELEMENT ? new CKEDITOR.dom.element(d) : null) && (b.equals(d) || b.contains(d)) || a.call(this, c);
      };
    }function h(a) {
      function b(a) {
        return function (b, e) {
          e && b.type == CKEDITOR.NODE_ELEMENT && b.is(f) && (d = b);if (!(e || !c(b) || a && A(b))) return !1;
        };
      }var d,
          e = a.getRanges()[0];a = a.root;
      var f = { table: 1, ul: 1, ol: 1, dl: 1 };if (e.startPath().contains(f)) {
        var g = e.clone();g.collapse(1);g.setStartAt(a, CKEDITOR.POSITION_AFTER_START);a = new CKEDITOR.dom.walker(g);a.guard = b();a.checkBackward();if (d) return g = e.clone(), g.collapse(), g.setEndAt(d, CKEDITOR.POSITION_AFTER_END), a = new CKEDITOR.dom.walker(g), a.guard = b(!0), d = !1, a.checkForward(), d;
      }return null;
    }function k(a, b, c) {
      return !1 !== a.config.autoParagraph && a.activeEnterMode != CKEDITOR.ENTER_BR && (a.editable().equals(c) && !b || b && "true" == b.getAttribute("contenteditable"));
    }
    function g(a) {
      return a.activeEnterMode != CKEDITOR.ENTER_BR && !1 !== a.config.autoParagraph ? a.activeEnterMode == CKEDITOR.ENTER_DIV ? "div" : "p" : !1;
    }function n(a) {
      var b = a.editor;b.getSelection().scrollIntoView();setTimeout(function () {
        b.fire("saveSnapshot");
      }, 0);
    }function r(a, b, c) {
      var d = a.getCommonAncestor(b);for (b = a = c ? b : a; (a = a.getParent()) && !d.equals(a) && 1 == a.getChildCount();) {
        b = a;
      }b.remove();
    }var e, y, v, A, D, x, m, J, u, K;CKEDITOR.editable = CKEDITOR.tools.createClass({ base: CKEDITOR.dom.element, $: function $(a, b) {
        this.base(b.$ || b);this.editor = a;this.status = "unloaded";this.hasFocus = !1;this.setup();
      }, proto: { focus: function focus() {
          var a;if (CKEDITOR.env.webkit && !this.hasFocus && (a = this.editor._.previousActive || this.getDocument().getActive(), this.contains(a))) {
            a.focus();return;
          }CKEDITOR.env.edge && 14 < CKEDITOR.env.version && !this.hasFocus && this.getDocument().equals(CKEDITOR.document) && (this.editor._.previousScrollTop = this.$.scrollTop);try {
            if (!CKEDITOR.env.ie || CKEDITOR.env.edge && 14 < CKEDITOR.env.version || !this.getDocument().equals(CKEDITOR.document)) {
              if (CKEDITOR.env.chrome) {
                var b = this.$.scrollTop;this.$.focus();this.$.scrollTop = b;
              } else this.$.focus();
            } else this.$.setActive();
          } catch (c) {
            if (!CKEDITOR.env.ie) throw c;
          }CKEDITOR.env.safari && !this.isInline() && (a = CKEDITOR.document.getActive(), a.equals(this.getWindow().getFrame()) || this.getWindow().focus());
        }, on: function on(a, b) {
          var c = Array.prototype.slice.call(arguments, 0);CKEDITOR.env.ie && /^focus|blur$/.exec(a) && (a = "focus" == a ? "focusin" : "focusout", b = f(b, this), c[0] = a, c[1] = b);return CKEDITOR.dom.element.prototype.on.apply(this, c);
        }, attachListener: function attachListener(a) {
          !this._.listeners && (this._.listeners = []);var b = Array.prototype.slice.call(arguments, 1),
              b = a.on.apply(a, b);this._.listeners.push(b);return b;
        }, clearListeners: function clearListeners() {
          var a = this._.listeners;try {
            for (; a.length;) {
              a.pop().removeListener();
            }
          } catch (b) {}
        }, restoreAttrs: function restoreAttrs() {
          var a = this._.attrChanges,
              b,
              c;for (c in a) {
            a.hasOwnProperty(c) && (b = a[c], null !== b ? this.setAttribute(c, b) : this.removeAttribute(c));
          }
        }, attachClass: function attachClass(a) {
          var b = this.getCustomData("classes");this.hasClass(a) || (!b && (b = []), b.push(a), this.setCustomData("classes", b), this.addClass(a));
        }, changeAttr: function changeAttr(a, b) {
          var c = this.getAttribute(a);b !== c && (!this._.attrChanges && (this._.attrChanges = {}), a in this._.attrChanges || (this._.attrChanges[a] = c), this.setAttribute(a, b));
        }, insertText: function insertText(a) {
          this.editor.focus();this.insertHtml(this.transformPlainTextToHtml(a), "text");
        }, transformPlainTextToHtml: function transformPlainTextToHtml(a) {
          var b = this.editor.getSelection().getStartElement().hasAscendant("pre", !0) ? CKEDITOR.ENTER_BR : this.editor.activeEnterMode;return CKEDITOR.tools.transformPlainTextToHtml(a, b);
        }, insertHtml: function insertHtml(a, b, c) {
          var d = this.editor;d.focus();d.fire("saveSnapshot");c || (c = d.getSelection().getRanges()[0]);x(this, b || "html", a, c);c.select();n(this);this.editor.fire("afterInsertHtml", {});
        }, insertHtmlIntoRange: function insertHtmlIntoRange(a, b, c) {
          x(this, c || "html", a, b);this.editor.fire("afterInsertHtml", { intoRange: b });
        }, insertElement: function insertElement(a, b) {
          var d = this.editor;d.focus();d.fire("saveSnapshot");var e = d.activeEnterMode,
              d = d.getSelection(),
              f = a.getName(),
              f = CKEDITOR.dtd.$block[f];b || (b = d.getRanges()[0]);this.insertElementIntoRange(a, b) && (b.moveToPosition(a, CKEDITOR.POSITION_AFTER_END), f && ((f = a.getNext(function (a) {
            return c(a) && !A(a);
          })) && f.type == CKEDITOR.NODE_ELEMENT && f.is(CKEDITOR.dtd.$block) ? f.getDtd()["#"] ? b.moveToElementEditStart(f) : b.moveToElementEditEnd(a) : f || e == CKEDITOR.ENTER_BR || (f = b.fixBlock(!0, e == CKEDITOR.ENTER_DIV ? "div" : "p"), b.moveToElementEditStart(f))));d.selectRanges([b]);n(this);
        }, insertElementIntoSelection: function insertElementIntoSelection(a) {
          this.insertElement(a);
        }, insertElementIntoRange: function insertElementIntoRange(a, b) {
          var c = this.editor,
              d = c.config.enterMode,
              e = a.getName(),
              f = CKEDITOR.dtd.$block[e];if (b.checkReadOnly()) return !1;b.deleteContents(1);b.startContainer.type == CKEDITOR.NODE_ELEMENT && (b.startContainer.is({ tr: 1, table: 1, tbody: 1, thead: 1, tfoot: 1 }) ? m(b) : b.startContainer.is(CKEDITOR.dtd.$list) && J(b));var q, g;if (f) for (; (q = b.getCommonAncestor(0, 1)) && (g = CKEDITOR.dtd[q.getName()]) && (!g || !g[e]);) {
            q.getName() in CKEDITOR.dtd.span ? b.splitElement(q) : b.checkStartOfBlock() && b.checkEndOfBlock() ? (b.setStartBefore(q), b.collapse(!0), q.remove()) : b.splitBlock(d == CKEDITOR.ENTER_DIV ? "div" : "p", c.editable());
          }b.insertNode(a);return !0;
        }, setData: function setData(a, b) {
          b || (a = this.editor.dataProcessor.toHtml(a));this.setHtml(a);this.fixInitialSelection();"unloaded" == this.status && (this.status = "ready");this.editor.fire("dataReady");
        }, getData: function getData(a) {
          var b = this.getHtml();a || (b = this.editor.dataProcessor.toDataFormat(b));return b;
        }, setReadOnly: function setReadOnly(a) {
          this.setAttribute("contenteditable", !a);
        }, detach: function detach() {
          this.removeClass("cke_editable");this.status = "detached";var a = this.editor;this._.detach();
          delete a.document;delete a.window;
        }, isInline: function isInline() {
          return this.getDocument().equals(CKEDITOR.document);
        }, fixInitialSelection: function fixInitialSelection() {
          function a() {
            var b = c.getDocument().$,
                d = b.getSelection(),
                e;a: if (d.anchorNode && d.anchorNode == c.$) e = !0;else {
              if (CKEDITOR.env.webkit && (e = c.getDocument().getActive()) && e.equals(c) && !d.anchorNode) {
                e = !0;break a;
              }e = void 0;
            }e && (e = new CKEDITOR.dom.range(c), e.moveToElementEditStart(c), b = b.createRange(), b.setStart(e.startContainer.$, e.startOffset), b.collapse(!0), d.removeAllRanges(), d.addRange(b));
          }function b() {
            var a = c.getDocument().$,
                d = a.selection,
                e = c.getDocument().getActive();"None" == d.type && e.equals(c) && (d = new CKEDITOR.dom.range(c), a = a.body.createTextRange(), d.moveToElementEditStart(c), d = d.startContainer, d.type != CKEDITOR.NODE_ELEMENT && (d = d.getParent()), a.moveToElementText(d.$), a.collapse(!0), a.select());
          }var c = this;if (CKEDITOR.env.ie && (9 > CKEDITOR.env.version || CKEDITOR.env.quirks)) this.hasFocus && (this.focus(), b());else if (this.hasFocus) this.focus(), a();else this.once("focus", function () {
            a();
          }, null, null, -999);
        }, getHtmlFromRange: function getHtmlFromRange(a) {
          if (a.collapsed) return new CKEDITOR.dom.documentFragment(a.document);a = { doc: this.getDocument(), range: a.clone() };u.eol.detect(a, this);u.bogus.exclude(a);u.cell.shrink(a);a.fragment = a.range.cloneContents();u.tree.rebuild(a, this);u.eol.fix(a, this);return new CKEDITOR.dom.documentFragment(a.fragment.$);
        }, extractHtmlFromRange: function extractHtmlFromRange(a, b) {
          var c = K,
              d = { range: a, doc: a.document },
              e = this.getHtmlFromRange(a);if (a.collapsed) return a.optimize(), e;a.enlarge(CKEDITOR.ENLARGE_INLINE, 1);c.table.detectPurge(d);d.bookmark = a.createBookmark();delete d.range;var f = this.editor.createRange();f.moveToPosition(d.bookmark.startNode, CKEDITOR.POSITION_BEFORE_START);d.targetBookmark = f.createBookmark();c.list.detectMerge(d, this);c.table.detectRanges(d, this);c.block.detectMerge(d, this);d.tableContentsRanges ? (c.table.deleteRanges(d), a.moveToBookmark(d.bookmark), d.range = a) : (a.moveToBookmark(d.bookmark), d.range = a, a.extractContents(c.detectExtractMerge(d)));a.moveToBookmark(d.targetBookmark);a.optimize();
          c.fixUneditableRangePosition(a);c.list.merge(d, this);c.table.purge(d, this);c.block.merge(d, this);if (b) {
            c = a.startPath();if (d = a.checkStartOfBlock() && a.checkEndOfBlock() && c.block && !a.root.equals(c.block)) {
              a: {
                var d = c.block.getElementsByTag("span"),
                    f = 0,
                    q;if (d) for (; q = d.getItem(f++);) {
                  if (!y(q)) {
                    d = !0;break a;
                  }
                }d = !1;
              }d = !d;
            }d && (a.moveToPosition(c.block, CKEDITOR.POSITION_BEFORE_START), c.block.remove());
          } else c.autoParagraph(this.editor, a), v(a.startContainer) && a.startContainer.appendBogus();a.startContainer.mergeSiblings();
          return e;
        }, setup: function setup() {
          var a = this.editor;this.attachListener(a, "beforeGetData", function () {
            var b = this.getData();this.is("textarea") || !1 !== a.config.ignoreEmptyParagraph && (b = b.replace(D, function (a, b) {
              return b;
            }));a.setData(b, null, 1);
          }, this);this.attachListener(a, "getSnapshot", function (a) {
            a.data = this.getData(1);
          }, this);this.attachListener(a, "afterSetData", function () {
            this.setData(a.getData(1));
          }, this);this.attachListener(a, "loadSnapshot", function (a) {
            this.setData(a.data, 1);
          }, this);this.attachListener(a, "beforeFocus", function () {
            var b = a.getSelection();(b = b && b.getNative()) && "Control" == b.type || this.focus();
          }, this);this.attachListener(a, "insertHtml", function (a) {
            this.insertHtml(a.data.dataValue, a.data.mode, a.data.range);
          }, this);this.attachListener(a, "insertElement", function (a) {
            this.insertElement(a.data);
          }, this);this.attachListener(a, "insertText", function (a) {
            this.insertText(a.data);
          }, this);this.setReadOnly(a.readOnly);this.attachClass("cke_editable");a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? this.attachClass("cke_editable_inline") : a.elementMode != CKEDITOR.ELEMENT_MODE_REPLACE && a.elementMode != CKEDITOR.ELEMENT_MODE_APPENDTO || this.attachClass("cke_editable_themed");this.attachClass("cke_contents_" + a.config.contentsLangDirection);a.keystrokeHandler.blockedKeystrokes[8] = +a.readOnly;a.keystrokeHandler.attach(this);this.on("blur", function () {
            this.hasFocus = !1;
          }, null, null, -1);this.on("focus", function () {
            this.hasFocus = !0;
          }, null, null, -1);if (CKEDITOR.env.webkit) this.on("scroll", function () {
            a._.previousScrollTop = a.editable().$.scrollTop;
          }, null, null, -1);if (CKEDITOR.env.edge && 14 < CKEDITOR.env.version) {
            var d = function d() {
              var b = a.editable();null != a._.previousScrollTop && b.getDocument().equals(CKEDITOR.document) && (b.$.scrollTop = a._.previousScrollTop, a._.previousScrollTop = null, this.removeListener("scroll", d));
            };this.on("scroll", d);
          }a.focusManager.add(this);this.equals(CKEDITOR.document.getActive()) && (this.hasFocus = !0, a.once("contentDom", function () {
            a.focusManager.focus(this);
          }, this));this.isInline() && this.changeAttr("tabindex", a.tabIndex);if (!this.is("textarea")) {
            a.document = this.getDocument();a.window = this.getWindow();var f = a.document;this.changeAttr("spellcheck", !a.config.disableNativeSpellChecker);var g = a.config.contentsLangDirection;this.getDirection(1) != g && this.changeAttr("dir", g);var k = CKEDITOR.getCss();if (k) {
              var g = f.getHead(),
                  m = g.getCustomData("stylesheet");m ? k != m.getText() && (CKEDITOR.env.ie && 9 > CKEDITOR.env.version ? m.$.styleSheet.cssText = k : m.setText(k)) : (k = f.appendStyleText(k), k = new CKEDITOR.dom.element(k.ownerNode || k.owningElement), g.setCustomData("stylesheet", k), k.data("cke-temp", 1));
            }g = f.getCustomData("stylesheet_ref") || 0;f.setCustomData("stylesheet_ref", g + 1);this.setCustomData("cke_includeReadonly", !a.config.disableReadonlyStyling);this.attachListener(this, "click", function (a) {
              a = a.data;var b = new CKEDITOR.dom.elementPath(a.getTarget(), this).contains("a");b && 2 != a.$.button && b.isReadOnly() && a.preventDefault();
            });var q = { 8: 1, 46: 1 };this.attachListener(a, "key", function (b) {
              if (a.readOnly) return !0;var c = b.data.domEvent.getKey(),
                  d;b = a.getSelection();if (0 !== b.getRanges().length) {
                if (c in q) {
                  var f,
                      g = b.getRanges()[0],
                      p = g.startPath(),
                      k,
                      w,
                      B,
                      c = 8 == c;CKEDITOR.env.ie && 11 > CKEDITOR.env.version && (f = b.getSelectedElement()) || (f = h(b)) ? (a.fire("saveSnapshot"), g.moveToPosition(f, CKEDITOR.POSITION_BEFORE_START), f.remove(), g.select(), a.fire("saveSnapshot"), d = 1) : g.collapsed && ((k = p.block) && (B = k[c ? "getPrevious" : "getNext"](e)) && B.type == CKEDITOR.NODE_ELEMENT && B.is("table") && g[c ? "checkStartOfBlock" : "checkEndOfBlock"]() ? (a.fire("saveSnapshot"), g[c ? "checkEndOfBlock" : "checkStartOfBlock"]() && k.remove(), g["moveToElementEdit" + (c ? "End" : "Start")](B), g.select(), a.fire("saveSnapshot"), d = 1) : p.blockLimit && p.blockLimit.is("td") && (w = p.blockLimit.getAscendant("table")) && g.checkBoundaryOfElement(w, c ? CKEDITOR.START : CKEDITOR.END) && (B = w[c ? "getPrevious" : "getNext"](e)) ? (a.fire("saveSnapshot"), g["moveToElementEdit" + (c ? "End" : "Start")](B), g.checkStartOfBlock() && g.checkEndOfBlock() ? B.remove() : g.select(), a.fire("saveSnapshot"), d = 1) : (w = p.contains(["td", "th", "caption"])) && g.checkBoundaryOfElement(w, c ? CKEDITOR.START : CKEDITOR.END) && (d = 1));
                }return !d;
              }
            });
            a.blockless && CKEDITOR.env.ie && CKEDITOR.env.needsBrFiller && this.attachListener(this, "keyup", function (b) {
              b.data.getKeystroke() in q && !this.getFirst(c) && (this.appendBogus(), b = a.createRange(), b.moveToPosition(this, CKEDITOR.POSITION_AFTER_START), b.select());
            });this.attachListener(this, "dblclick", function (b) {
              if (a.readOnly) return !1;b = { element: b.data.getTarget() };a.fire("doubleclick", b);
            });CKEDITOR.env.ie && this.attachListener(this, "click", b);CKEDITOR.env.ie && !CKEDITOR.env.edge || this.attachListener(this, "mousedown", function (b) {
              var c = b.data.getTarget();c.is("img", "hr", "input", "textarea", "select") && !c.isReadOnly() && (a.getSelection().selectElement(c), c.is("input", "textarea", "select") && b.data.preventDefault());
            });CKEDITOR.env.edge && this.attachListener(this, "mouseup", function (b) {
              (b = b.data.getTarget()) && b.is("img") && !b.isReadOnly() && a.getSelection().selectElement(b);
            });CKEDITOR.env.gecko && this.attachListener(this, "mouseup", function (b) {
              if (2 == b.data.$.button && (b = b.data.getTarget(), !b.getOuterHtml().replace(D, ""))) {
                var c = a.createRange();c.moveToElementEditStart(b);c.select(!0);
              }
            });CKEDITOR.env.webkit && (this.attachListener(this, "click", function (a) {
              a.data.getTarget().is("input", "select") && a.data.preventDefault();
            }), this.attachListener(this, "mouseup", function (a) {
              a.data.getTarget().is("input", "textarea") && a.data.preventDefault();
            }));CKEDITOR.env.webkit && this.attachListener(a, "key", function (b) {
              if (a.readOnly) return !0;var c = b.data.domEvent.getKey();if (c in q && (b = a.getSelection(), 0 !== b.getRanges().length)) {
                var c = 8 == c,
                    d = b.getRanges()[0];
                b = d.startPath();if (d.collapsed) a: {
                  var e = b.block;if (e && d[c ? "checkStartOfBlock" : "checkEndOfBlock"]() && d.moveToClosestEditablePosition(e, !c) && d.collapsed) {
                    if (d.startContainer.type == CKEDITOR.NODE_ELEMENT) {
                      var f = d.startContainer.getChild(d.startOffset - (c ? 1 : 0));if (f && f.type == CKEDITOR.NODE_ELEMENT && f.is("hr")) {
                        a.fire("saveSnapshot");f.remove();b = !0;break a;
                      }
                    }d = d.startPath().block;if (!d || d && d.contains(e)) b = void 0;else {
                      a.fire("saveSnapshot");var p;(p = (c ? d : e).getBogus()) && p.remove();p = a.getSelection();f = p.createBookmarks();
                      (c ? e : d).moveChildren(c ? d : e, !1);b.lastElement.mergeSiblings();r(e, d, !c);p.selectBookmarks(f);b = !0;
                    }
                  } else b = !1;
                } else c = d, p = b.block, d = c.endPath().block, p && d && !p.equals(d) ? (a.fire("saveSnapshot"), (e = p.getBogus()) && e.remove(), c.enlarge(CKEDITOR.ENLARGE_INLINE), c.deleteContents(), d.getParent() && (d.moveChildren(p, !1), b.lastElement.mergeSiblings(), r(p, d, !0)), c = a.getSelection().getRanges()[0], c.collapse(1), c.optimize(), "" === c.startContainer.getHtml() && c.startContainer.appendBogus(), c.select(), b = !0) : b = !1;if (!b) return;
                a.getSelection().scrollIntoView();a.fire("saveSnapshot");return !1;
              }
            }, this, null, 100);
          }
        } }, _: { detach: function detach() {
          this.editor.setData(this.editor.getData(), 0, 1);this.clearListeners();this.restoreAttrs();var a;if (a = this.removeCustomData("classes")) for (; a.length;) {
            this.removeClass(a.pop());
          }if (!this.is("textarea")) {
            a = this.getDocument();var b = a.getHead();if (b.getCustomData("stylesheet")) {
              var c = a.getCustomData("stylesheet_ref");--c ? a.setCustomData("stylesheet_ref", c) : (a.removeCustomData("stylesheet_ref"), b.removeCustomData("stylesheet").remove());
            }
          }this.editor.fire("contentDomUnload");
          delete this.editor;
        } } });CKEDITOR.editor.prototype.editable = function (a) {
      var b = this._.editable;if (b && a) return 0;arguments.length && (b = this._.editable = a ? a instanceof CKEDITOR.editable ? a : new CKEDITOR.editable(this, a) : (b && b.detach(), null));return b;
    };CKEDITOR.on("instanceLoaded", function (b) {
      var c = b.editor;c.on("insertElement", function (a) {
        a = a.data;a.type == CKEDITOR.NODE_ELEMENT && (a.is("input") || a.is("textarea")) && ("false" != a.getAttribute("contentEditable") && a.data("cke-editable", a.hasAttribute("contenteditable") ? "true" : "1"), a.setAttribute("contentEditable", !1));
      });c.on("selectionChange", function (b) {
        if (!c.readOnly) {
          var d = c.getSelection();d && !d.isLocked && (d = c.checkDirty(), c.fire("lockSnapshot"), a(b), c.fire("unlockSnapshot"), !d && c.resetDirty());
        }
      });
    });CKEDITOR.on("instanceCreated", function (a) {
      var b = a.editor;b.on("mode", function () {
        var a = b.editable();if (a && a.isInline()) {
          var c = b.title;a.changeAttr("role", "textbox");a.changeAttr("aria-multiline", "true");a.changeAttr("aria-label", c);c && a.changeAttr("title", c);var d = b.fire("ariaEditorHelpLabel", {}).label;if (d && (c = this.ui.space(this.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? "top" : "contents"))) {
            var e = CKEDITOR.tools.getNextId(),
                d = CKEDITOR.dom.element.createFromHtml('\x3cspan id\x3d"' + e + '" class\x3d"cke_voice_label"\x3e' + d + "\x3c/span\x3e");c.append(d);a.changeAttr("aria-describedby", e);
          }
        }
      });
    });CKEDITOR.addCss(".cke_editable{cursor:text}.cke_editable img,.cke_editable input,.cke_editable textarea{cursor:default}");e = CKEDITOR.dom.walker.whitespaces(!0);y = CKEDITOR.dom.walker.bookmark(!1, !0);v = CKEDITOR.dom.walker.empty();A = CKEDITOR.dom.walker.bogus();D = /(^|<body\b[^>]*>)\s*<(p|div|address|h\d|center|pre)[^>]*>\s*(?:<br[^>]*>|&nbsp;|\u00A0|&#160;)?\s*(:?<\/\2>)?\s*(?=$|<\/body>)/gi;x = function () {
      function a(b) {
        return b.type == CKEDITOR.NODE_ELEMENT;
      }function b(c, d) {
        var e,
            f,
            g,
            q,
            h = [],
            z = d.range.startContainer;e = d.range.startPath();for (var z = E[z.getName()], k = 0, H = c.getChildren(), m = H.count(), n = -1, r = -1, C = 0, P = e.contains(E.$list); k < m; ++k) {
          e = H.getItem(k), a(e) ? (g = e.getName(), P && g in CKEDITOR.dtd.$list ? h = h.concat(b(e, d)) : (q = !!z[g], "br" != g || !e.data("cke-eol") || k && k != m - 1 || (C = (f = k ? h[k - 1].node : H.getItem(k + 1)) && (!a(f) || !f.is("br")), f = f && a(f) && E.$block[f.getName()]), -1 != n || q || (n = k), q || (r = k), h.push({ isElement: 1, isLineBreak: C, isBlock: e.isBlockBoundary(), hasBlockSibling: f, node: e, name: g, allowed: q }), f = C = 0)) : h.push({ isElement: 0, node: e, allowed: 1 });
        }-1 < n && (h[n].firstNotAllowed = 1);-1 < r && (h[r].lastNotAllowed = 1);return h;
      }function d(b, c) {
        var e = [],
            f = b.getChildren(),
            g = f.count(),
            q,
            h = 0,
            z = E[c],
            k = !b.is(E.$inline) || b.is("br");
        for (k && e.push(" "); h < g; h++) {
          q = f.getItem(h), a(q) && !q.is(z) ? e = e.concat(d(q, c)) : e.push(q);
        }k && e.push(" ");return e;
      }function e(b) {
        return a(b.startContainer) && b.startContainer.getChild(b.startOffset - 1);
      }function f(b) {
        return b && a(b) && (b.is(E.$removeEmpty) || b.is("a") && !b.isBlockBoundary());
      }function h(b, c, d, e) {
        var f = b.clone(),
            g,
            q;f.setEndAt(c, CKEDITOR.POSITION_BEFORE_END);(g = new CKEDITOR.dom.walker(f).next()) && a(g) && z[g.getName()] && (q = g.getPrevious()) && a(q) && !q.getParent().equals(b.startContainer) && d.contains(q) && e.contains(g) && g.isIdentical(q) && (g.moveChildren(q), g.remove(), h(b, c, d, e));
      }function q(b, c) {
        function d(b, c) {
          if (c.isBlock && c.isElement && !c.node.is("br") && a(b) && b.is("br")) return b.remove(), 1;
        }var e = c.endContainer.getChild(c.endOffset),
            f = c.endContainer.getChild(c.endOffset - 1);e && d(e, b[b.length - 1]);f && d(f, b[0]) && (c.setEnd(c.endContainer, c.endOffset - 1), c.collapse());
      }var E = CKEDITOR.dtd,
          z = { p: 1, div: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, ul: 1, ol: 1, li: 1, pre: 1, dl: 1, blockquote: 1 },
          H = { p: 1, div: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1,
        h6: 1 },
          m = CKEDITOR.tools.extend({}, E.$inline);delete m.br;return function (z, p, N, w) {
        var B = z.editor,
            G = !1;"unfiltered_html" == p && (p = "html", G = !0);if (!w.checkReadOnly()) {
          var I = new CKEDITOR.dom.elementPath(w.startContainer, w.root).blockLimit || w.root;z = { type: p, dontFilter: G, editable: z, editor: B, range: w, blockLimit: I, mergeCandidates: [], zombies: [] };p = z.range;w = z.mergeCandidates;var n, r;"text" == z.type && p.shrink(CKEDITOR.SHRINK_ELEMENT, !0, !1) && (n = CKEDITOR.dom.element.createFromHtml("\x3cspan\x3e\x26nbsp;\x3c/span\x3e", p.document), p.insertNode(n), p.setStartAfter(n));G = new CKEDITOR.dom.elementPath(p.startContainer);z.endPath = I = new CKEDITOR.dom.elementPath(p.endContainer);if (!p.collapsed) {
            var B = I.block || I.blockLimit,
                v = p.getCommonAncestor();B && !B.equals(v) && !B.contains(v) && p.checkEndOfBlock() && z.zombies.push(B);p.deleteContents();
          }for (; (r = e(p)) && a(r) && r.isBlockBoundary() && G.contains(r);) {
            p.moveToPosition(r, CKEDITOR.POSITION_BEFORE_END);
          }h(p, z.blockLimit, G, I);n && (p.setEndBefore(n), p.collapse(), n.remove());n = p.startPath();
          if (B = n.contains(f, !1, 1)) p.splitElement(B), z.inlineStylesRoot = B, z.inlineStylesPeak = n.lastElement;n = p.createBookmark();(B = n.startNode.getPrevious(c)) && a(B) && f(B) && w.push(B);(B = n.startNode.getNext(c)) && a(B) && f(B) && w.push(B);for (B = n.startNode; (B = B.getParent()) && f(B);) {
            w.push(B);
          }p.moveToBookmark(n);if (n = N) {
            n = z.range;if ("text" == z.type && z.inlineStylesRoot) {
              r = z.inlineStylesPeak;p = r.getDocument().createText("{cke-peak}");for (w = z.inlineStylesRoot.getParent(); !r.equals(w);) {
                p = p.appendTo(r.clone()), r = r.getParent();
              }N = p.getOuterHtml().split("{cke-peak}").join(N);
            }r = z.blockLimit.getName();if (/^\s+|\s+$/.test(N) && "span" in CKEDITOR.dtd[r]) {
              var x = '\x3cspan data-cke-marker\x3d"1"\x3e\x26nbsp;\x3c/span\x3e';N = x + N + x;
            }N = z.editor.dataProcessor.toHtml(N, { context: null, fixForBody: !1, protectedWhitespaces: !!x, dontFilter: z.dontFilter, filter: z.editor.activeFilter, enterMode: z.editor.activeEnterMode });r = n.document.createElement("body");r.setHtml(N);x && (r.getFirst().remove(), r.getLast().remove());if ((x = n.startPath().block) && (1 != x.getChildCount() || !x.getBogus())) a: {
              var y;if (1 == r.getChildCount() && a(y = r.getFirst()) && y.is(H) && !y.hasAttribute("contenteditable")) {
                x = y.getElementsByTag("*");n = 0;for (w = x.count(); n < w; n++) {
                  if (p = x.getItem(n), !p.is(m)) break a;
                }y.moveChildren(y.getParent(1));y.remove();
              }
            }z.dataWrapper = r;n = N;
          }if (n) {
            y = z.range;n = y.document;var u;r = z.blockLimit;w = 0;var A,
                x = [],
                D,
                T;N = B = 0;var J, K;p = y.startContainer;var G = z.endPath.elements[0],
                W,
                I = G.getPosition(p),
                v = !!G.getCommonAncestor(p) && I != CKEDITOR.POSITION_IDENTICAL && !(I & CKEDITOR.POSITION_CONTAINS + CKEDITOR.POSITION_IS_CONTAINED);p = b(z.dataWrapper, z);for (q(p, y); w < p.length; w++) {
              I = p[w];if (u = I.isLineBreak) {
                u = y;J = r;var S = void 0,
                    Y = void 0;I.hasBlockSibling ? u = 1 : (S = u.startContainer.getAscendant(E.$block, 1)) && S.is({ div: 1, p: 1 }) ? (Y = S.getPosition(J), Y == CKEDITOR.POSITION_IDENTICAL || Y == CKEDITOR.POSITION_CONTAINS ? u = 0 : (J = u.splitElement(S), u.moveToPosition(J, CKEDITOR.POSITION_AFTER_START), u = 1)) : u = 0;
              }if (u) N = 0 < w;else {
                u = y.startPath();!I.isBlock && k(z.editor, u.block, u.blockLimit) && (T = g(z.editor)) && (T = n.createElement(T), T.appendBogus(), y.insertNode(T), CKEDITOR.env.needsBrFiller && (A = T.getBogus()) && A.remove(), y.moveToPosition(T, CKEDITOR.POSITION_BEFORE_END));if ((u = y.startPath().block) && !u.equals(D)) {
                  if (A = u.getBogus()) A.remove(), x.push(u);D = u;
                }I.firstNotAllowed && (B = 1);if (B && I.isElement) {
                  u = y.startContainer;for (J = null; u && !E[u.getName()][I.name];) {
                    if (u.equals(r)) {
                      u = null;break;
                    }J = u;u = u.getParent();
                  }if (u) J && (K = y.splitElement(J), z.zombies.push(K), z.zombies.push(J));else {
                    J = r.getName();W = !w;u = w == p.length - 1;J = d(I.node, J);for (var S = [], Y = J.length, Z = 0, ba = void 0, ca = 0, U = -1; Z < Y; Z++) {
                      ba = J[Z], " " == ba ? (ca || W && !Z || (S.push(new CKEDITOR.dom.text(" ")), U = S.length), ca = 1) : (S.push(ba), ca = 0);
                    }u && U == S.length && S.pop();W = S;
                  }
                }if (W) {
                  for (; u = W.pop();) {
                    y.insertNode(u);
                  }W = 0;
                } else y.insertNode(I.node);I.lastNotAllowed && w < p.length - 1 && ((K = v ? G : K) && y.setEndAt(K, CKEDITOR.POSITION_AFTER_START), B = 0);y.collapse();
              }
            }1 != p.length ? A = !1 : (A = p[0], A = A.isElement && "false" == A.node.getAttribute("contenteditable"));A && (N = !0, u = p[0].node, y.setStartAt(u, CKEDITOR.POSITION_BEFORE_START), y.setEndAt(u, CKEDITOR.POSITION_AFTER_END));z.dontMoveCaret = N;z.bogusNeededBlocks = x;
          }A = z.range;var R;K = z.bogusNeededBlocks;for (W = A.createBookmark(); D = z.zombies.pop();) {
            D.getParent() && (T = A.clone(), T.moveToElementEditStart(D), T.removeEmptyBlocksAtEnd());
          }if (K) for (; D = K.pop();) {
            CKEDITOR.env.needsBrFiller ? D.appendBogus() : D.append(A.document.createText(" "));
          }for (; D = z.mergeCandidates.pop();) {
            D.mergeSiblings();
          }A.moveToBookmark(W);if (!z.dontMoveCaret) {
            for (D = e(A); D && a(D) && !D.is(E.$empty);) {
              if (D.isBlockBoundary()) A.moveToPosition(D, CKEDITOR.POSITION_BEFORE_END);else {
                if (f(D) && D.getHtml().match(/(\s|&nbsp;)$/g)) {
                  R = null;break;
                }R = A.clone();R.moveToPosition(D, CKEDITOR.POSITION_BEFORE_END);
              }D = D.getLast(c);
            }R && A.moveToRange(R);
          }
        }
      };
    }();m = function () {
      function a(b) {
        b = new CKEDITOR.dom.walker(b);b.guard = function (a, b) {
          if (b) return !1;if (a.type == CKEDITOR.NODE_ELEMENT) return a.is(CKEDITOR.dtd.$tableContent);
        };b.evaluator = function (a) {
          return a.type == CKEDITOR.NODE_ELEMENT;
        };return b;
      }function b(a, c, d) {
        c = a.getDocument().createElement(c);a.append(c, d);return c;
      }
      function c(a) {
        var b = a.count(),
            d;for (b; 0 < b--;) {
          d = a.getItem(b), CKEDITOR.tools.trim(d.getHtml()) || (d.appendBogus(), CKEDITOR.env.ie && 9 > CKEDITOR.env.version && d.getChildCount() && d.getFirst().remove());
        }
      }return function (d) {
        var e = d.startContainer,
            f = e.getAscendant("table", 1),
            g = !1;c(f.getElementsByTag("td"));c(f.getElementsByTag("th"));f = d.clone();f.setStart(e, 0);f = a(f).lastBackward();f || (f = d.clone(), f.setEndAt(e, CKEDITOR.POSITION_BEFORE_END), f = a(f).lastForward(), g = !0);f || (f = e);f.is("table") ? (d.setStartAt(f, CKEDITOR.POSITION_BEFORE_START), d.collapse(!0), f.remove()) : (f.is({ tbody: 1, thead: 1, tfoot: 1 }) && (f = b(f, "tr", g)), f.is("tr") && (f = b(f, f.getParent().is("thead") ? "th" : "td", g)), (e = f.getBogus()) && e.remove(), d.moveToPosition(f, g ? CKEDITOR.POSITION_AFTER_START : CKEDITOR.POSITION_BEFORE_END));
      };
    }();J = function () {
      function a(b) {
        b = new CKEDITOR.dom.walker(b);b.guard = function (a, b) {
          if (b) return !1;if (a.type == CKEDITOR.NODE_ELEMENT) return a.is(CKEDITOR.dtd.$list) || a.is(CKEDITOR.dtd.$listItem);
        };b.evaluator = function (a) {
          return a.type == CKEDITOR.NODE_ELEMENT && a.is(CKEDITOR.dtd.$listItem);
        };return b;
      }return function (b) {
        var c = b.startContainer,
            d = !1,
            e;e = b.clone();e.setStart(c, 0);e = a(e).lastBackward();e || (e = b.clone(), e.setEndAt(c, CKEDITOR.POSITION_BEFORE_END), e = a(e).lastForward(), d = !0);e || (e = c);e.is(CKEDITOR.dtd.$list) ? (b.setStartAt(e, CKEDITOR.POSITION_BEFORE_START), b.collapse(!0), e.remove()) : ((c = e.getBogus()) && c.remove(), b.moveToPosition(e, d ? CKEDITOR.POSITION_AFTER_START : CKEDITOR.POSITION_BEFORE_END), b.select());
      };
    }();u = { eol: { detect: function detect(a, b) {
          var c = a.range,
              d = c.clone(),
              e = c.clone(),
              f = new CKEDITOR.dom.elementPath(c.startContainer, b),
              g = new CKEDITOR.dom.elementPath(c.endContainer, b);d.collapse(1);e.collapse();f.block && d.checkBoundaryOfElement(f.block, CKEDITOR.END) && (c.setStartAfter(f.block), a.prependEolBr = 1);g.block && e.checkBoundaryOfElement(g.block, CKEDITOR.START) && (c.setEndBefore(g.block), a.appendEolBr = 1);
        }, fix: function fix(a, b) {
          var c = b.getDocument(),
              d;a.appendEolBr && (d = this.createEolBr(c), a.fragment.append(d));!a.prependEolBr || d && !d.getPrevious() || a.fragment.append(this.createEolBr(c), 1);
        }, createEolBr: function createEolBr(a) {
          return a.createElement("br", { attributes: { "data-cke-eol": 1 } });
        } }, bogus: { exclude: function exclude(a) {
          var b = a.range.getBoundaryNodes(),
              c = b.startNode,
              b = b.endNode;!b || !A(b) || c && c.equals(b) || a.range.setEndBefore(b);
        } }, tree: { rebuild: function rebuild(a, b) {
          var c = a.range,
              d = c.getCommonAncestor(),
              e = new CKEDITOR.dom.elementPath(d, b),
              f = new CKEDITOR.dom.elementPath(c.startContainer, b),
              c = new CKEDITOR.dom.elementPath(c.endContainer, b),
              g;d.type == CKEDITOR.NODE_TEXT && (d = d.getParent());if (e.blockLimit.is({ tr: 1,
            table: 1 })) {
            var h = e.contains("table").getParent();g = function g(a) {
              return !a.equals(h);
            };
          } else if (e.block && e.block.is(CKEDITOR.dtd.$listItem) && (f = f.contains(CKEDITOR.dtd.$list), c = c.contains(CKEDITOR.dtd.$list), !f.equals(c))) {
            var z = e.contains(CKEDITOR.dtd.$list).getParent();g = function g(a) {
              return !a.equals(z);
            };
          }g || (g = function g(a) {
            return !a.equals(e.block) && !a.equals(e.blockLimit);
          });this.rebuildFragment(a, b, d, g);
        }, rebuildFragment: function rebuildFragment(a, b, c, d) {
          for (var e; c && !c.equals(b) && d(c);) {
            e = c.clone(0, 1), a.fragment.appendTo(e), a.fragment = e, c = c.getParent();
          }
        } }, cell: { shrink: function shrink(a) {
          a = a.range;var b = a.startContainer,
              c = a.endContainer,
              d = a.startOffset,
              e = a.endOffset;b.type == CKEDITOR.NODE_ELEMENT && b.equals(c) && b.is("tr") && ++d == e && a.shrink(CKEDITOR.SHRINK_TEXT);
        } } };K = function () {
      function a(b, c) {
        var d = b.getParent();if (d.is(CKEDITOR.dtd.$inline)) b[c ? "insertBefore" : "insertAfter"](d);
      }function b(c, d, e) {
        a(d);a(e, 1);for (var f; f = e.getNext();) {
          f.insertAfter(d), d = f;
        }v(c) && c.remove();
      }function c(a, b) {
        var d = new CKEDITOR.dom.range(a);d.setStartAfter(b.startNode);
        d.setEndBefore(b.endNode);return d;
      }return { list: { detectMerge: function detectMerge(a, b) {
            var d = c(b, a.bookmark),
                e = d.startPath(),
                f = d.endPath(),
                g = e.contains(CKEDITOR.dtd.$list),
                h = f.contains(CKEDITOR.dtd.$list);a.mergeList = g && h && g.getParent().equals(h.getParent()) && !g.equals(h);a.mergeListItems = e.block && f.block && e.block.is(CKEDITOR.dtd.$listItem) && f.block.is(CKEDITOR.dtd.$listItem);if (a.mergeList || a.mergeListItems) d = d.clone(), d.setStartBefore(a.bookmark.startNode), d.setEndAfter(a.bookmark.endNode), a.mergeListBookmark = d.createBookmark();
          }, merge: function merge(a, c) {
            if (a.mergeListBookmark) {
              var d = a.mergeListBookmark.startNode,
                  e = a.mergeListBookmark.endNode,
                  f = new CKEDITOR.dom.elementPath(d, c),
                  g = new CKEDITOR.dom.elementPath(e, c);if (a.mergeList) {
                var h = f.contains(CKEDITOR.dtd.$list),
                    k = g.contains(CKEDITOR.dtd.$list);h.equals(k) || (k.moveChildren(h), k.remove());
              }a.mergeListItems && (f = f.contains(CKEDITOR.dtd.$listItem), g = g.contains(CKEDITOR.dtd.$listItem), f.equals(g) || b(g, d, e));d.remove();e.remove();
            }
          } }, block: { detectMerge: function detectMerge(a, b) {
            if (!a.tableContentsRanges && !a.mergeListBookmark) {
              var c = new CKEDITOR.dom.range(b);c.setStartBefore(a.bookmark.startNode);c.setEndAfter(a.bookmark.endNode);a.mergeBlockBookmark = c.createBookmark();
            }
          }, merge: function merge(a, c) {
            if (a.mergeBlockBookmark && !a.purgeTableBookmark) {
              var d = a.mergeBlockBookmark.startNode,
                  e = a.mergeBlockBookmark.endNode,
                  f = new CKEDITOR.dom.elementPath(d, c),
                  g = new CKEDITOR.dom.elementPath(e, c),
                  f = f.block,
                  g = g.block;f && g && !f.equals(g) && b(g, d, e);d.remove();e.remove();
            }
          } }, table: function () {
          function a(c) {
            var e = [],
                f,
                g = new CKEDITOR.dom.walker(c),
                h = c.startPath().contains(d),
                k = c.endPath().contains(d),
                p = {};g.guard = function (a, g) {
              if (a.type == CKEDITOR.NODE_ELEMENT) {
                var B = "visited_" + (g ? "out" : "in");if (a.getCustomData(B)) return;CKEDITOR.dom.element.setMarker(p, a, B, 1);
              }if (g && h && a.equals(h)) f = c.clone(), f.setEndAt(h, CKEDITOR.POSITION_BEFORE_END), e.push(f);else if (!g && k && a.equals(k)) f = c.clone(), f.setStartAt(k, CKEDITOR.POSITION_AFTER_START), e.push(f);else {
                if (B = !g) B = a.type == CKEDITOR.NODE_ELEMENT && a.is(d) && (!h || b(a, h)) && (!k || b(a, k));if (!B && (B = g)) if (a.is(d)) var B = h && h.getAscendant("table", !0),
                    l = k && k.getAscendant("table", !0),
                    H = a.getAscendant("table", !0),
                    B = B && B.contains(H) || l && l.contains(H);else B = void 0;B && (f = c.clone(), f.selectNodeContents(a), e.push(f));
              }
            };g.lastForward();CKEDITOR.dom.element.clearAllMarkers(p);return e;
          }function b(a, c) {
            var d = CKEDITOR.POSITION_CONTAINS + CKEDITOR.POSITION_IS_CONTAINED,
                e = a.getPosition(c);return e === CKEDITOR.POSITION_IDENTICAL ? !1 : 0 === (e & d);
          }var d = { td: 1, th: 1, caption: 1 };return { detectPurge: function detectPurge(a) {
              var b = a.range,
                  c = b.clone();c.enlarge(CKEDITOR.ENLARGE_ELEMENT);var c = new CKEDITOR.dom.walker(c),
                  e = 0;c.evaluator = function (a) {
                a.type == CKEDITOR.NODE_ELEMENT && a.is(d) && ++e;
              };c.checkForward();if (1 < e) {
                var c = b.startPath().contains("table"),
                    f = b.endPath().contains("table");c && f && b.checkBoundaryOfElement(c, CKEDITOR.START) && b.checkBoundaryOfElement(f, CKEDITOR.END) && (b = a.range.clone(), b.setStartBefore(c), b.setEndAfter(f), a.purgeTableBookmark = b.createBookmark());
              }
            }, detectRanges: function detectRanges(e, f) {
              var g = c(f, e.bookmark),
                  h = g.clone(),
                  k,
                  l,
                  p = g.getCommonAncestor();p.is(CKEDITOR.dtd.$tableContent) && !p.is(d) && (p = p.getAscendant("table", !0));l = p;p = new CKEDITOR.dom.elementPath(g.startContainer, l);l = new CKEDITOR.dom.elementPath(g.endContainer, l);p = p.contains("table");l = l.contains("table");if (p || l) p && l && b(p, l) ? (e.tableSurroundingRange = h, h.setStartAt(p, CKEDITOR.POSITION_AFTER_END), h.setEndAt(l, CKEDITOR.POSITION_BEFORE_START), h = g.clone(), h.setEndAt(p, CKEDITOR.POSITION_AFTER_END), k = g.clone(), k.setStartAt(l, CKEDITOR.POSITION_BEFORE_START), k = a(h).concat(a(k))) : p ? l || (e.tableSurroundingRange = h, h.setStartAt(p, CKEDITOR.POSITION_AFTER_END), g.setEndAt(p, CKEDITOR.POSITION_AFTER_END)) : (e.tableSurroundingRange = h, h.setEndAt(l, CKEDITOR.POSITION_BEFORE_START), g.setStartAt(l, CKEDITOR.POSITION_AFTER_START)), e.tableContentsRanges = k ? k : a(g);
            }, deleteRanges: function deleteRanges(a) {
              for (var b; b = a.tableContentsRanges.pop();) {
                b.extractContents(), v(b.startContainer) && b.startContainer.appendBogus();
              }a.tableSurroundingRange && a.tableSurroundingRange.extractContents();
            }, purge: function purge(a) {
              if (a.purgeTableBookmark) {
                var b = a.doc,
                    c = a.range.clone(),
                    b = b.createElement("p");b.insertBefore(a.purgeTableBookmark.startNode);c.moveToBookmark(a.purgeTableBookmark);c.deleteContents();a.range.moveToPosition(b, CKEDITOR.POSITION_AFTER_START);
              }
            } };
        }(), detectExtractMerge: function detectExtractMerge(a) {
          return !(a.range.startPath().contains(CKEDITOR.dtd.$listItem) && a.range.endPath().contains(CKEDITOR.dtd.$listItem));
        }, fixUneditableRangePosition: function fixUneditableRangePosition(a) {
          a.startContainer.getDtd()["#"] || a.moveToClosestEditablePosition(null, !0);
        }, autoParagraph: function autoParagraph(a, b) {
          var c = b.startPath(),
              d;k(a, c.block, c.blockLimit) && (d = g(a)) && (d = b.document.createElement(d), d.appendBogus(), b.insertNode(d), b.moveToPosition(d, CKEDITOR.POSITION_AFTER_START));
        } };
    }();
  })();
  (function () {
    function a(a) {
      return CKEDITOR.plugins.widget && CKEDITOR.plugins.widget.isDomWidget(a);
    }function d(b, c) {
      if (0 === b.length || a(b[0].getEnclosedNode())) return !1;var d, e;if ((d = !c && 1 === b.length) && !(d = b[0].collapsed)) {
        var f = b[0];d = f.startContainer.getAscendant({ td: 1, th: 1 }, !0);var g = f.endContainer.getAscendant({ td: 1, th: 1 }, !0);e = CKEDITOR.tools.trim;d && d.equals(g) && !d.findOne("td, th, tr, tbody, table") ? (f = f.cloneContents(), d = f.getFirst() ? e(f.getFirst().getText()) !== e(d.getText()) : !0) : d = !1;
      }if (d) return !1;
      for (e = 0; e < b.length; e++) {
        if (d = b[e]._getTableElement(), !d) return !1;
      }return !0;
    }function b(a) {
      function b(a) {
        a = a.find("td, th");var c = [],
            d;for (d = 0; d < a.count(); d++) {
          c.push(a.getItem(d));
        }return c;
      }var c = [],
          d,
          e;for (e = 0; e < a.length; e++) {
        d = a[e]._getTableElement(), d.is && d.is({ td: 1, th: 1 }) ? c.push(d) : c = c.concat(b(d));
      }return c;
    }function c(a) {
      a = b(a);var c = "",
          d = [],
          e,
          f;for (f = 0; f < a.length; f++) {
        e && !e.equals(a[f].getAscendant("tr")) ? (c += d.join("\t") + "\n", e = a[f].getAscendant("tr"), d = []) : 0 === f && (e = a[f].getAscendant("tr")), d.push(a[f].getText());
      }return c += d.join("\t");
    }function f(a) {
      var b = this.root.editor,
          d = b.getSelection(1);this.reset();l = !0;d.root.once("selectionchange", function (a) {
        a.cancel();
      }, null, null, 0);d.selectRanges([a[0]]);d = this._.cache;d.ranges = new CKEDITOR.dom.rangeList(a);d.type = CKEDITOR.SELECTION_TEXT;d.selectedElement = a[0]._getTableElement();d.selectedText = c(a);d.nativeSel = null;this.isFake = 1;this.rev = J++;b._.fakeSelection = this;l = !1;this.root.fire("selectionchange");
    }function h() {
      var b = this._.fakeSelection,
          c;if (b) {
        c = this.getSelection(1);
        var e;if (!(e = !c) && (e = !c.isHidden())) {
          e = b;var f = c.getRanges(),
              g = e.getRanges(),
              h = f.length && f[0]._getTableElement() && f[0]._getTableElement().getAscendant("table", !0),
              p = g.length && g[0]._getTableElement() && g[0]._getTableElement().getAscendant("table", !0),
              k = 1 === f.length && f[0]._getTableElement() && f[0]._getTableElement().is("table"),
              w = 1 === g.length && g[0]._getTableElement() && g[0]._getTableElement().is("table");if (a(e.getSelectedElement())) e = !1;else {
            var l = 1 === f.length && f[0].collapsed,
                g = d(f, !!CKEDITOR.env.webkit) && d(g);h = h && p ? h.equals(p) || p.contains(h) : !1;h && (l || g) ? (k && !w && e.selectRanges(f), e = !0) : e = !1;
          }e = !e;
        }e && (b.reset(), b = 0);
      }if (!b && (b = c || this.getSelection(1), !b || b.getType() == CKEDITOR.SELECTION_NONE)) return;this.fire("selectionCheck", b);c = this.elementPath();c.compare(this._.selectionPreviousPath) || (e = this._.selectionPreviousPath && this._.selectionPreviousPath.blockLimit.equals(c.blockLimit), CKEDITOR.env.webkit && !e && (this._.previousActive = this.document.getActive()), this._.selectionPreviousPath = c, this.fire("selectionChange", { selection: b, path: c }));
    }function k() {
      F = !0;t || (g.call(this), t = CKEDITOR.tools.setTimeout(g, 200, this));
    }function g() {
      t = null;F && (CKEDITOR.tools.setTimeout(h, 0, this), F = !1);
    }function n(a) {
      return L(a) || a.type == CKEDITOR.NODE_ELEMENT && !a.is(CKEDITOR.dtd.$empty) ? !0 : !1;
    }function r(a) {
      function b(c, d) {
        return c && c.type != CKEDITOR.NODE_TEXT ? a.clone()["moveToElementEdit" + (d ? "End" : "Start")](c) : !1;
      }if (!(a.root instanceof CKEDITOR.editable)) return !1;var c = a.startContainer,
          d = a.getPreviousNode(n, null, c),
          e = a.getNextNode(n, null, c);return b(d) || b(e, 1) || !(d || e || c.type == CKEDITOR.NODE_ELEMENT && c.isBlockBoundary() && c.getBogus()) ? !0 : !1;
    }function e(a) {
      y(a, !1);var b = a.getDocument().createText(u);a.setCustomData("cke-fillingChar", b);return b;
    }function y(a, b) {
      var c = a && a.removeCustomData("cke-fillingChar");if (c) {
        if (!1 !== b) {
          var d = a.getDocument().getSelection().getNative(),
              e = d && "None" != d.type && d.getRangeAt(0),
              f = u.length;if (c.getLength() > f && e && e.intersectsNode(c.$)) {
            var g = [{ node: d.anchorNode, offset: d.anchorOffset }, { node: d.focusNode, offset: d.focusOffset }];
            d.anchorNode == c.$ && d.anchorOffset > f && (g[0].offset -= f);d.focusNode == c.$ && d.focusOffset > f && (g[1].offset -= f);
          }
        }c.setText(v(c.getText(), 1));g && (c = a.getDocument().$, d = c.getSelection(), c = c.createRange(), c.setStart(g[0].node, g[0].offset), c.collapse(!0), d.removeAllRanges(), d.addRange(c), d.extend(g[1].node, g[1].offset));
      }
    }function v(a, b) {
      return b ? a.replace(K, function (a, b) {
        return b ? " " : "";
      }) : a.replace(u, "");
    }function A(a, b) {
      var c = b && CKEDITOR.tools.htmlEncode(b) || "\x26nbsp;",
          c = CKEDITOR.dom.element.createFromHtml('\x3cdiv data-cke-hidden-sel\x3d"1" data-cke-temp\x3d"1" style\x3d"' + (CKEDITOR.env.ie && 14 > CKEDITOR.env.version ? "display:none" : "position:fixed;top:0;left:-1000px") + '"\x3e' + c + "\x3c/div\x3e", a.document);a.fire("lockSnapshot");a.editable().append(c);var d = a.getSelection(1),
          e = a.createRange(),
          f = d.root.on("selectionchange", function (a) {
        a.cancel();
      }, null, null, 0);e.setStartAt(c, CKEDITOR.POSITION_AFTER_START);e.setEndAt(c, CKEDITOR.POSITION_BEFORE_END);d.selectRanges([e]);f.removeListener();a.fire("unlockSnapshot");a._.hiddenSelectionContainer = c;
    }function D(a) {
      var b = { 37: 1, 39: 1,
        8: 1, 46: 1 };return function (c) {
        var d = c.data.getKeystroke();if (b[d]) {
          var e = a.getSelection().getRanges(),
              f = e[0];1 == e.length && f.collapsed && (d = f[38 > d ? "getPreviousEditableNode" : "getNextEditableNode"]()) && d.type == CKEDITOR.NODE_ELEMENT && "false" == d.getAttribute("contenteditable") && (a.getSelection().fake(d), c.data.preventDefault(), c.cancel());
        }
      };
    }function x(a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b];c.getCommonAncestor().isReadOnly() && a.splice(b, 1);if (!c.collapsed) {
          if (c.startContainer.isReadOnly()) for (var d = c.startContainer, e; d && !((e = d.type == CKEDITOR.NODE_ELEMENT) && d.is("body") || !d.isReadOnly());) {
            e && "false" == d.getAttribute("contentEditable") && c.setStartAfter(d), d = d.getParent();
          }d = c.startContainer;e = c.endContainer;var f = c.startOffset,
              g = c.endOffset,
              h = c.clone();d && d.type == CKEDITOR.NODE_TEXT && (f >= d.getLength() ? h.setStartAfter(d) : h.setStartBefore(d));e && e.type == CKEDITOR.NODE_TEXT && (g ? h.setEndAfter(e) : h.setEndBefore(e));d = new CKEDITOR.dom.walker(h);d.evaluator = function (d) {
            if (d.type == CKEDITOR.NODE_ELEMENT && d.isReadOnly()) {
              var e = c.clone();c.setEndBefore(d);c.collapsed && a.splice(b--, 1);d.getPosition(h.endContainer) & CKEDITOR.POSITION_CONTAINS || (e.setStartAfter(d), e.collapsed || a.splice(b + 1, 0, e));return !0;
            }return !1;
          };d.next();
        }
      }return a;
    }var m = "function" != typeof window.getSelection,
        J = 1,
        u = CKEDITOR.tools.repeat("​", 7),
        K = new RegExp(u + "( )?", "g"),
        l,
        t,
        F,
        L = CKEDITOR.dom.walker.invisible(1),
        C = function () {
      function a(b) {
        return function (a) {
          var c = a.editor.createRange();c.moveToClosestEditablePosition(a.selected, b) && a.editor.getSelection().selectRanges([c]);
          return !1;
        };
      }function b(a) {
        return function (b) {
          var c = b.editor,
              d = c.createRange(),
              e;if (!c.readOnly) return (e = d.moveToClosestEditablePosition(b.selected, a)) || (e = d.moveToClosestEditablePosition(b.selected, !a)), e && c.getSelection().selectRanges([d]), c.fire("saveSnapshot"), b.selected.remove(), e || (d.moveToElementEditablePosition(c.editable()), c.getSelection().selectRanges([d])), c.fire("saveSnapshot"), !1;
        };
      }var c = a(),
          d = a(1);return { 37: c, 38: c, 39: d, 40: d, 8: b(), 46: b(1) };
    }();CKEDITOR.on("instanceCreated", function (a) {
      function b() {
        var a = c.getSelection();a && a.removeAllRanges();
      }var c = a.editor;c.on("contentDom", function () {
        function a() {
          r = new CKEDITOR.dom.selection(c.getSelection());r.lock();
        }function b() {
          f.removeListener("mouseup", b);q.removeListener("mouseup", b);var a = CKEDITOR.document.$.selection,
              c = a.createRange();"None" != a.type && c.parentElement() && c.parentElement().ownerDocument == e.$ && c.select();
        }function d(a) {
          if (CKEDITOR.env.ie) {
            var b = (a = a.getRanges()[0]) ? a.startContainer.getAscendant(function (a) {
              return a.type == CKEDITOR.NODE_ELEMENT && ("false" == a.getAttribute("contenteditable") || "true" == a.getAttribute("contenteditable"));
            }, !0) : null;return a && "false" == b.getAttribute("contenteditable") && b;
          }
        }var e = c.document,
            f = CKEDITOR.document,
            g = c.editable(),
            l = e.getBody(),
            q = e.getDocumentElement(),
            E = g.isInline(),
            n,
            r;CKEDITOR.env.gecko && g.attachListener(g, "focus", function (a) {
          a.removeListener();0 !== n && (a = c.getSelection().getNative()) && a.isCollapsed && a.anchorNode == g.$ && (a = c.createRange(), a.moveToElementEditStart(g), a.select());
        }, null, null, -2);g.attachListener(g, CKEDITOR.env.webkit ? "DOMFocusIn" : "focus", function () {
          n && CKEDITOR.env.webkit && (n = c._.previousActive && c._.previousActive.equals(e.getActive())) && null != c._.previousScrollTop && c._.previousScrollTop != g.$.scrollTop && (g.$.scrollTop = c._.previousScrollTop);c.unlockSelection(n);n = 0;
        }, null, null, -1);g.attachListener(g, "mousedown", function () {
          n = 0;
        });if (CKEDITOR.env.ie || E) m ? g.attachListener(g, "beforedeactivate", a, null, null, -1) : g.attachListener(c, "selectionCheck", a, null, null, -1), g.attachListener(g, CKEDITOR.env.webkit ? "DOMFocusOut" : "blur", function () {
          c.lockSelection(r);n = 1;
        }, null, null, -1), g.attachListener(g, "mousedown", function () {
          n = 0;
        });if (CKEDITOR.env.ie && !E) {
          var v;g.attachListener(g, "mousedown", function (a) {
            2 == a.data.$.button && ((a = c.document.getSelection()) && a.getType() != CKEDITOR.SELECTION_NONE || (v = c.window.getScrollPosition()));
          });g.attachListener(g, "mouseup", function (a) {
            2 == a.data.$.button && v && (c.document.$.documentElement.scrollLeft = v.x, c.document.$.documentElement.scrollTop = v.y);v = null;
          });if ("BackCompat" != e.$.compatMode) {
            if (CKEDITOR.env.ie7Compat || CKEDITOR.env.ie6Compat) {
              var t, u;q.on("mousedown", function (a) {
                function b(a) {
                  a = a.data.$;if (t) {
                    var c = l.$.createTextRange();try {
                      c.moveToPoint(a.clientX, a.clientY);
                    } catch (d) {}t.setEndPoint(0 > u.compareEndPoints("StartToStart", c) ? "EndToEnd" : "StartToStart", c);t.select();
                  }
                }function c() {
                  q.removeListener("mousemove", b);f.removeListener("mouseup", c);q.removeListener("mouseup", c);t.select();
                }a = a.data;if (a.getTarget().is("html") && a.$.y < q.$.clientHeight && a.$.x < q.$.clientWidth) {
                  t = l.$.createTextRange();try {
                    t.moveToPoint(a.$.clientX, a.$.clientY);
                  } catch (d) {}u = t.duplicate();q.on("mousemove", b);f.on("mouseup", c);q.on("mouseup", c);
                }
              });
            }if (7 < CKEDITOR.env.version && 11 > CKEDITOR.env.version) q.on("mousedown", function (a) {
              a.data.getTarget().is("html") && (f.on("mouseup", b), q.on("mouseup", b));
            });
          }
        }g.attachListener(g, "selectionchange", h, c);g.attachListener(g, "keyup", k, c);g.attachListener(g, "keydown", function (a) {
          var b = this.getSelection(1);d(b) && (b.selectElement(d(b)), a.data.preventDefault());
        }, c);g.attachListener(g, CKEDITOR.env.webkit ? "DOMFocusIn" : "focus", function () {
          c.forceNextSelectionCheck();c.selectionChange(1);
        });if (E && (CKEDITOR.env.webkit || CKEDITOR.env.gecko)) {
          var x;g.attachListener(g, "mousedown", function () {
            x = 1;
          });g.attachListener(e.getDocumentElement(), "mouseup", function () {
            x && k.call(c);x = 0;
          });
        } else g.attachListener(CKEDITOR.env.ie ? g : e.getDocumentElement(), "mouseup", k, c);CKEDITOR.env.webkit && g.attachListener(e, "keydown", function (a) {
          switch (a.data.getKey()) {case 13:case 33:case 34:case 35:case 36:case 37:case 39:case 8:case 45:case 46:
              g.hasFocus && y(g);}
        }, null, null, -1);g.attachListener(g, "keydown", D(c), null, null, -1);
      });c.on("setData", function () {
        c.unlockSelection();CKEDITOR.env.webkit && b();
      });c.on("contentDomUnload", function () {
        c.unlockSelection();
      });if (CKEDITOR.env.ie9Compat) c.on("beforeDestroy", b, null, null, 9);c.on("dataReady", function () {
        delete c._.fakeSelection;delete c._.hiddenSelectionContainer;c.selectionChange(1);
      });c.on("loadSnapshot", function () {
        var a = CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT),
            b = c.editable().getLast(a);b && b.hasAttribute("data-cke-hidden-sel") && (b.remove(), CKEDITOR.env.gecko && (a = c.editable().getFirst(a)) && a.is("br") && a.getAttribute("_moz_editor_bogus_node") && a.remove());
      }, null, null, 100);c.on("key", function (a) {
        if ("wysiwyg" == c.mode) {
          var b = c.getSelection();if (b.isFake) {
            var d = C[a.data.keyCode];if (d) return d({ editor: c, selected: b.getSelectedElement(), selection: b, keyEvent: a });
          }
        }
      });
    });if (CKEDITOR.env.webkit) CKEDITOR.on("instanceReady", function (a) {
      var b = a.editor;b.on("selectionChange", function () {
        var a = b.editable(),
            c = a.getCustomData("cke-fillingChar");
        c && (c.getCustomData("ready") ? (y(a), a.editor.fire("selectionCheck")) : c.setCustomData("ready", 1));
      }, null, null, -1);b.on("beforeSetMode", function () {
        y(b.editable());
      }, null, null, -1);b.on("getSnapshot", function (a) {
        a.data && (a.data = v(a.data));
      }, b, null, 20);b.on("toDataFormat", function (a) {
        a.data.dataValue = v(a.data.dataValue);
      }, null, null, 0);
    });CKEDITOR.editor.prototype.selectionChange = function (a) {
      (a ? h : k).call(this);
    };CKEDITOR.editor.prototype.getSelection = function (a) {
      return !this._.savedSelection && !this._.fakeSelection || a ? (a = this.editable()) && "wysiwyg" == this.mode ? new CKEDITOR.dom.selection(a) : null : this._.savedSelection || this._.fakeSelection;
    };CKEDITOR.editor.prototype.lockSelection = function (a) {
      a = a || this.getSelection(1);return a.getType() != CKEDITOR.SELECTION_NONE ? (!a.isLocked && a.lock(), this._.savedSelection = a, !0) : !1;
    };CKEDITOR.editor.prototype.unlockSelection = function (a) {
      var b = this._.savedSelection;return b ? (b.unlock(a), delete this._.savedSelection, !0) : !1;
    };CKEDITOR.editor.prototype.forceNextSelectionCheck = function () {
      delete this._.selectionPreviousPath;
    };
    CKEDITOR.dom.document.prototype.getSelection = function () {
      return new CKEDITOR.dom.selection(this);
    };CKEDITOR.dom.range.prototype.select = function () {
      var a = this.root instanceof CKEDITOR.editable ? this.root.editor.getSelection() : new CKEDITOR.dom.selection(this.root);a.selectRanges([this]);return a;
    };CKEDITOR.SELECTION_NONE = 1;CKEDITOR.SELECTION_TEXT = 2;CKEDITOR.SELECTION_ELEMENT = 3;CKEDITOR.dom.selection = function (a) {
      if (a instanceof CKEDITOR.dom.selection) {
        var b = a;a = a.root;
      }var c = a instanceof CKEDITOR.dom.element;
      this.rev = b ? b.rev : J++;this.document = a instanceof CKEDITOR.dom.document ? a : a.getDocument();this.root = c ? a : this.document.getBody();this.isLocked = 0;this._ = { cache: {} };if (b) return CKEDITOR.tools.extend(this._.cache, b._.cache), this.isFake = b.isFake, this.isLocked = b.isLocked, this;a = this.getNative();var d, e;if (a) if (a.getRangeAt) d = (e = a.rangeCount && a.getRangeAt(0)) && new CKEDITOR.dom.node(e.commonAncestorContainer);else {
        try {
          e = a.createRange();
        } catch (f) {}d = e && CKEDITOR.dom.element.get(e.item && e.item(0) || e.parentElement());
      }if (!d || d.type != CKEDITOR.NODE_ELEMENT && d.type != CKEDITOR.NODE_TEXT || !this.root.equals(d) && !this.root.contains(d)) this._.cache.type = CKEDITOR.SELECTION_NONE, this._.cache.startElement = null, this._.cache.selectedElement = null, this._.cache.selectedText = "", this._.cache.ranges = new CKEDITOR.dom.rangeList();return this;
    };var M = { img: 1, hr: 1, li: 1, table: 1, tr: 1, td: 1, th: 1, embed: 1, object: 1, ol: 1, ul: 1, a: 1, input: 1, form: 1, select: 1, textarea: 1, button: 1, fieldset: 1, thead: 1, tfoot: 1 };CKEDITOR.tools.extend(CKEDITOR.dom.selection, { _removeFillingCharSequenceString: v,
      _createFillingCharSequenceNode: e, FILLING_CHAR_SEQUENCE: u });CKEDITOR.dom.selection.prototype = { getNative: function getNative() {
        return void 0 !== this._.cache.nativeSel ? this._.cache.nativeSel : this._.cache.nativeSel = m ? this.document.$.selection : this.document.getWindow().$.getSelection();
      }, getType: m ? function () {
        var a = this._.cache;if (a.type) return a.type;var b = CKEDITOR.SELECTION_NONE;try {
          var c = this.getNative(),
              d = c.type;"Text" == d && (b = CKEDITOR.SELECTION_TEXT);"Control" == d && (b = CKEDITOR.SELECTION_ELEMENT);c.createRange().parentElement() && (b = CKEDITOR.SELECTION_TEXT);
        } catch (e) {}return a.type = b;
      } : function () {
        var a = this._.cache;if (a.type) return a.type;var b = CKEDITOR.SELECTION_TEXT,
            c = this.getNative();if (!c || !c.rangeCount) b = CKEDITOR.SELECTION_NONE;else if (1 == c.rangeCount) {
          var c = c.getRangeAt(0),
              d = c.startContainer;d == c.endContainer && 1 == d.nodeType && 1 == c.endOffset - c.startOffset && M[d.childNodes[c.startOffset].nodeName.toLowerCase()] && (b = CKEDITOR.SELECTION_ELEMENT);
        }return a.type = b;
      }, getRanges: function () {
        var a = m ? function () {
          function a(b) {
            return new CKEDITOR.dom.node(b).getIndex();
          }
          var b = function b(_b2, c) {
            _b2 = _b2.duplicate();_b2.collapse(c);var d = _b2.parentElement();if (!d.hasChildNodes()) return { container: d, offset: 0 };for (var e = d.children, f, g, h = _b2.duplicate(), k = 0, l = e.length - 1, q = -1, m, n; k <= l;) {
              if (q = Math.floor((k + l) / 2), f = e[q], h.moveToElementText(f), m = h.compareEndPoints("StartToStart", _b2), 0 < m) l = q - 1;else if (0 > m) k = q + 1;else return { container: d, offset: a(f) };
            }if (-1 == q || q == e.length - 1 && 0 > m) {
              h.moveToElementText(d);h.setEndPoint("StartToStart", _b2);h = h.text.replace(/(\r\n|\r)/g, "\n").length;e = d.childNodes;if (!h) return f = e[e.length - 1], f.nodeType != CKEDITOR.NODE_TEXT ? { container: d, offset: e.length } : { container: f, offset: f.nodeValue.length };for (d = e.length; 0 < h && 0 < d;) {
                g = e[--d], g.nodeType == CKEDITOR.NODE_TEXT && (n = g, h -= g.nodeValue.length);
              }return { container: n, offset: -h };
            }h.collapse(0 < m ? !0 : !1);h.setEndPoint(0 < m ? "StartToStart" : "EndToStart", _b2);h = h.text.replace(/(\r\n|\r)/g, "\n").length;if (!h) return { container: d, offset: a(f) + (0 < m ? 0 : 1) };for (; 0 < h;) {
              try {
                g = f[0 < m ? "previousSibling" : "nextSibling"], g.nodeType == CKEDITOR.NODE_TEXT && (h -= g.nodeValue.length, n = g), f = g;
              } catch (r) {
                return { container: d, offset: a(f) };
              }
            }return { container: n, offset: 0 < m ? -h : n.nodeValue.length + h };
          };return function () {
            var a = this.getNative(),
                c = a && a.createRange(),
                d = this.getType();if (!a) return [];if (d == CKEDITOR.SELECTION_TEXT) return a = new CKEDITOR.dom.range(this.root), d = b(c, !0), a.setStart(new CKEDITOR.dom.node(d.container), d.offset), d = b(c), a.setEnd(new CKEDITOR.dom.node(d.container), d.offset), a.endContainer.getPosition(a.startContainer) & CKEDITOR.POSITION_PRECEDING && a.endOffset <= a.startContainer.getIndex() && a.collapse(), [a];if (d == CKEDITOR.SELECTION_ELEMENT) {
              for (var d = [], e = 0; e < c.length; e++) {
                for (var f = c.item(e), g = f.parentNode, h = 0, a = new CKEDITOR.dom.range(this.root); h < g.childNodes.length && g.childNodes[h] != f; h++) {}a.setStart(new CKEDITOR.dom.node(g), h);a.setEnd(new CKEDITOR.dom.node(g), h + 1);d.push(a);
              }return d;
            }return [];
          };
        }() : function () {
          var a = [],
              b,
              c = this.getNative();if (!c) return a;for (var d = 0; d < c.rangeCount; d++) {
            var e = c.getRangeAt(d);b = new CKEDITOR.dom.range(this.root);b.setStart(new CKEDITOR.dom.node(e.startContainer), e.startOffset);b.setEnd(new CKEDITOR.dom.node(e.endContainer), e.endOffset);a.push(b);
          }return a;
        };return function (b) {
          var c = this._.cache,
              d = c.ranges;d || (c.ranges = d = new CKEDITOR.dom.rangeList(a.call(this)));return b ? x(new CKEDITOR.dom.rangeList(d.slice())) : d;
        };
      }(), getStartElement: function getStartElement() {
        var a = this._.cache;if (void 0 !== a.startElement) return a.startElement;var b;switch (this.getType()) {case CKEDITOR.SELECTION_ELEMENT:
            return this.getSelectedElement();case CKEDITOR.SELECTION_TEXT:
            var c = this.getRanges()[0];
            if (c) {
              if (c.collapsed) b = c.startContainer, b.type != CKEDITOR.NODE_ELEMENT && (b = b.getParent());else {
                for (c.optimize(); b = c.startContainer, c.startOffset == (b.getChildCount ? b.getChildCount() : b.getLength()) && !b.isBlockBoundary();) {
                  c.setStartAfter(b);
                }b = c.startContainer;if (b.type != CKEDITOR.NODE_ELEMENT) return b.getParent();if ((b = b.getChild(c.startOffset)) && b.type == CKEDITOR.NODE_ELEMENT) for (c = b.getFirst(); c && c.type == CKEDITOR.NODE_ELEMENT;) {
                  b = c, c = c.getFirst();
                } else b = c.startContainer;
              }b = b.$;
            }}return a.startElement = b ? new CKEDITOR.dom.element(b) : null;
      }, getSelectedElement: function getSelectedElement() {
        var a = this._.cache;if (void 0 !== a.selectedElement) return a.selectedElement;var b = this,
            c = CKEDITOR.tools.tryThese(function () {
          return b.getNative().createRange().item(0);
        }, function () {
          for (var a = b.getRanges()[0].clone(), c, d, e = 2; e && !((c = a.getEnclosedNode()) && c.type == CKEDITOR.NODE_ELEMENT && M[c.getName()] && (d = c)); e--) {
            a.shrink(CKEDITOR.SHRINK_ELEMENT);
          }return d && d.$;
        });return a.selectedElement = c ? new CKEDITOR.dom.element(c) : null;
      }, getSelectedText: function getSelectedText() {
        var a = this._.cache;if (void 0 !== a.selectedText) return a.selectedText;var b = this.getNative(),
            b = m ? "Control" == b.type ? "" : b.createRange().text : b.toString();return a.selectedText = b;
      }, lock: function lock() {
        this.getRanges();this.getStartElement();this.getSelectedElement();this.getSelectedText();this._.cache.nativeSel = null;this.isLocked = 1;
      }, unlock: function unlock(a) {
        if (this.isLocked) {
          if (a) var b = this.getSelectedElement(),
              c = this.getRanges(),
              e = this.isFake;this.isLocked = 0;this.reset();a && (a = b || c[0] && c[0].getCommonAncestor()) && a.getAscendant("body", 1) && (d(c) ? f.call(this, c) : e ? this.fake(b) : b ? this.selectElement(b) : this.selectRanges(c));
        }
      }, reset: function reset() {
        this._.cache = {};this.isFake = 0;var a = this.root.editor;if (a && a._.fakeSelection) if (this.rev == a._.fakeSelection.rev) {
          delete a._.fakeSelection;var b = a._.hiddenSelectionContainer;if (b) {
            var c = a.checkDirty();a.fire("lockSnapshot");b.remove();a.fire("unlockSnapshot");!c && a.resetDirty();
          }delete a._.hiddenSelectionContainer;
        } else CKEDITOR.warn("selection-fake-reset");this.rev = J++;
      }, selectElement: function selectElement(a) {
        var b = new CKEDITOR.dom.range(this.root);b.setStartBefore(a);b.setEndAfter(a);this.selectRanges([b]);
      }, selectRanges: function selectRanges(a) {
        var b = this.root.editor,
            c = b && b._.hiddenSelectionContainer;this.reset();if (c) for (var c = this.root, g, h = 0; h < a.length; ++h) {
          g = a[h], g.endContainer.equals(c) && (g.endOffset = Math.min(g.endOffset, c.getChildCount()));
        }if (a.length) if (this.isLocked) {
          var k = CKEDITOR.document.getActive();this.unlock();this.selectRanges(a);this.lock();k && !k.equals(this.root) && k.focus();
        } else {
          var p;a: {
            var n, w;if (1 == a.length && !(w = a[0]).collapsed && (p = w.getEnclosedNode()) && p.type == CKEDITOR.NODE_ELEMENT && (w = w.clone(), w.shrink(CKEDITOR.SHRINK_ELEMENT, !0), (n = w.getEnclosedNode()) && n.type == CKEDITOR.NODE_ELEMENT && (p = n), "false" == p.getAttribute("contenteditable"))) break a;p = void 0;
          }if (p) this.fake(p);else if (b && b.plugins.tableselection && CKEDITOR.plugins.tableselection.isSupportedEnvironment && d(a) && !l) f.call(this, a);else {
            if (m) {
              n = CKEDITOR.dom.walker.whitespaces(!0);p = /\ufeff|\u00a0/;w = { table: 1, tbody: 1, tr: 1 };1 < a.length && (b = a[a.length - 1], a[0].setEnd(b.endContainer, b.endOffset));b = a[0];a = b.collapsed;var B, G, I;if ((c = b.getEnclosedNode()) && c.type == CKEDITOR.NODE_ELEMENT && c.getName() in M && (!c.is("a") || !c.getText())) try {
                I = c.$.createControlRange();I.addElement(c.$);I.select();return;
              } catch (v) {}if (b.startContainer.type == CKEDITOR.NODE_ELEMENT && b.startContainer.getName() in w || b.endContainer.type == CKEDITOR.NODE_ELEMENT && b.endContainer.getName() in w) b.shrink(CKEDITOR.NODE_ELEMENT, !0), a = b.collapsed;I = b.createBookmark();w = I.startNode;a || (k = I.endNode);
              I = b.document.$.body.createTextRange();I.moveToElementText(w.$);I.moveStart("character", 1);k ? (p = b.document.$.body.createTextRange(), p.moveToElementText(k.$), I.setEndPoint("EndToEnd", p), I.moveEnd("character", -1)) : (B = w.getNext(n), G = w.hasAscendant("pre"), B = !(B && B.getText && B.getText().match(p)) && (G || !w.hasPrevious() || w.getPrevious().is && w.getPrevious().is("br")), G = b.document.createElement("span"), G.setHtml("\x26#65279;"), G.insertBefore(w), B && b.document.createText("﻿").insertBefore(w));b.setStartBefore(w);
              w.remove();a ? (B ? (I.moveStart("character", -1), I.select(), b.document.$.selection.clear()) : I.select(), b.moveToPosition(G, CKEDITOR.POSITION_BEFORE_START), G.remove()) : (b.setEndBefore(k), k.remove(), I.select());
            } else {
              k = this.getNative();if (!k) return;this.removeAllRanges();for (I = 0; I < a.length; I++) {
                if (I < a.length - 1 && (B = a[I], G = a[I + 1], p = B.clone(), p.setStart(B.endContainer, B.endOffset), p.setEnd(G.startContainer, G.startOffset), !p.collapsed && (p.shrink(CKEDITOR.NODE_ELEMENT, !0), b = p.getCommonAncestor(), p = p.getEnclosedNode(), b.isReadOnly() || p && p.isReadOnly()))) {
                  G.setStart(B.startContainer, B.startOffset);a.splice(I--, 1);continue;
                }b = a[I];G = this.document.$.createRange();b.collapsed && CKEDITOR.env.webkit && r(b) && (p = e(this.root), b.insertNode(p), (B = p.getNext()) && !p.getPrevious() && B.type == CKEDITOR.NODE_ELEMENT && "br" == B.getName() ? (y(this.root), b.moveToPosition(B, CKEDITOR.POSITION_BEFORE_START)) : b.moveToPosition(p, CKEDITOR.POSITION_AFTER_END));G.setStart(b.startContainer.$, b.startOffset);try {
                  G.setEnd(b.endContainer.$, b.endOffset);
                } catch (t) {
                  if (0 <= t.toString().indexOf("NS_ERROR_ILLEGAL_VALUE")) b.collapse(1), G.setEnd(b.endContainer.$, b.endOffset);else throw t;
                }k.addRange(G);
              }
            }this.reset();this.root.fire("selectionchange");
          }
        }
      }, fake: function fake(a, b) {
        var c = this.root.editor;void 0 === b && a.hasAttribute("aria-label") && (b = a.getAttribute("aria-label"));this.reset();A(c, b);var d = this._.cache,
            e = new CKEDITOR.dom.range(this.root);e.setStartBefore(a);e.setEndAfter(a);d.ranges = new CKEDITOR.dom.rangeList(e);d.selectedElement = d.startElement = a;d.type = CKEDITOR.SELECTION_ELEMENT;
        d.selectedText = d.nativeSel = null;this.isFake = 1;this.rev = J++;c._.fakeSelection = this;this.root.fire("selectionchange");
      }, isHidden: function isHidden() {
        var a = this.getCommonAncestor();a && a.type == CKEDITOR.NODE_TEXT && (a = a.getParent());return !(!a || !a.data("cke-hidden-sel"));
      }, isInTable: function isInTable(a) {
        return d(this.getRanges(), a);
      }, isCollapsed: function isCollapsed() {
        var a = this.getRanges();return 1 === a.length && a[0].collapsed;
      }, createBookmarks: function createBookmarks(a) {
        a = this.getRanges().createBookmarks(a);this.isFake && (a.isFake = 1);return a;
      }, createBookmarks2: function createBookmarks2(a) {
        a = this.getRanges().createBookmarks2(a);this.isFake && (a.isFake = 1);return a;
      }, selectBookmarks: function selectBookmarks(a) {
        for (var b = [], c, e = 0; e < a.length; e++) {
          var f = new CKEDITOR.dom.range(this.root);f.moveToBookmark(a[e]);b.push(f);
        }a.isFake && (c = d(b) ? b[0]._getTableElement() : b[0].getEnclosedNode(), c && c.type == CKEDITOR.NODE_ELEMENT || (CKEDITOR.warn("selection-not-fake"), a.isFake = 0));a.isFake && !d(b) ? this.fake(c) : this.selectRanges(b);return this;
      }, getCommonAncestor: function getCommonAncestor() {
        var a = this.getRanges();return a.length ? a[0].startContainer.getCommonAncestor(a[a.length - 1].endContainer) : null;
      }, scrollIntoView: function scrollIntoView() {
        this.type != CKEDITOR.SELECTION_NONE && this.getRanges()[0].scrollIntoView();
      }, removeAllRanges: function removeAllRanges() {
        if (this.getType() != CKEDITOR.SELECTION_NONE) {
          var a = this.getNative();try {
            a && a[m ? "empty" : "removeAllRanges"]();
          } catch (b) {}this.reset();
        }
      } };
  })();"use strict";CKEDITOR.STYLE_BLOCK = 1;CKEDITOR.STYLE_INLINE = 2;CKEDITOR.STYLE_OBJECT = 3;
  (function () {
    function a(a, b) {
      for (var c, d; (a = a.getParent()) && !a.equals(b);) {
        if (a.getAttribute("data-nostyle")) c = a;else if (!d) {
          var e = a.getAttribute("contentEditable");"false" == e ? c = a : "true" == e && (d = 1);
        }
      }return c;
    }function d(a, b, c, d) {
      return (a.getPosition(b) | d) == d && (!c.childRule || c.childRule(a));
    }function b(c) {
      var e = c.document;if (c.collapsed) e = J(this, e), c.insertNode(e), c.moveToPosition(e, CKEDITOR.POSITION_BEFORE_END);else {
        var g = this.element,
            h = this._.definition,
            k,
            l = h.ignoreReadonly,
            m = l || h.includeReadonly;null == m && (m = c.root.getCustomData("cke_includeReadonly"));var n = CKEDITOR.dtd[g];n || (k = !0, n = CKEDITOR.dtd.span);c.enlarge(CKEDITOR.ENLARGE_INLINE, 1);c.trim();var r = c.createBookmark(),
            v = r.startNode,
            t = r.endNode,
            q = v,
            u;if (!l) {
          var x = c.getCommonAncestor(),
              l = a(v, x),
              x = a(t, x);l && (q = l.getNextSourceNode(!0));x && (t = x);
        }for (q.getPosition(t) == CKEDITOR.POSITION_FOLLOWING && (q = 0); q;) {
          l = !1;if (q.equals(t)) q = null, l = !0;else {
            var y = q.type == CKEDITOR.NODE_ELEMENT ? q.getName() : null,
                x = y && "false" == q.getAttribute("contentEditable"),
                A = y && q.getAttribute("data-nostyle");if (y && q.data("cke-bookmark")) {
              q = q.getNextSourceNode(!0);continue;
            }if (x && m && CKEDITOR.dtd.$block[y]) for (var C = q, E = f(C), F = void 0, H = E.length, K = 0, C = H && new CKEDITOR.dom.range(C.getDocument()); K < H; ++K) {
              var F = E[K],
                  L = CKEDITOR.filter.instances[F.data("cke-filter")];if (L ? L.check(this) : 1) C.selectNodeContents(F), b.call(this, C);
            }E = y ? !n[y] || A ? 0 : x && !m ? 0 : d(q, t, h, P) : 1;if (E) {
              if (F = q.getParent(), E = h, H = g, K = k, !F || !(F.getDtd() || CKEDITOR.dtd.span)[H] && !K || E.parentRule && !E.parentRule(F)) l = !0;else {
                if (u || y && CKEDITOR.dtd.$removeEmpty[y] && (q.getPosition(t) | P) != P || (u = c.clone(), u.setStartBefore(q)), y = q.type, y == CKEDITOR.NODE_TEXT || x || y == CKEDITOR.NODE_ELEMENT && !q.getChildCount()) {
                  for (var y = q, M; (l = !y.getNext(z)) && (M = y.getParent(), n[M.getName()]) && d(M, v, h, O);) {
                    y = M;
                  }u.setEndAfter(y);
                }
              }
            } else l = !0;q = q.getNextSourceNode(A || x);
          }if (l && u && !u.collapsed) {
            for (var l = J(this, e), x = l.hasAttributes(), A = u.getCommonAncestor(), y = {}, E = {}, F = {}, H = {}, U, R, aa; l && A;) {
              if (A.getName() == g) {
                for (U in h.attributes) {
                  !H[U] && (aa = A.getAttribute(R)) && (l.getAttribute(U) == aa ? E[U] = 1 : H[U] = 1);
                }for (R in h.styles) {
                  !F[R] && (aa = A.getStyle(R)) && (l.getStyle(R) == aa ? y[R] = 1 : F[R] = 1);
                }
              }A = A.getParent();
            }for (U in E) {
              l.removeAttribute(U);
            }for (R in y) {
              l.removeStyle(R);
            }x && !l.hasAttributes() && (l = null);l ? (u.extractContents().appendTo(l), u.insertNode(l), D.call(this, l), l.mergeSiblings(), CKEDITOR.env.ie || l.$.normalize()) : (l = new CKEDITOR.dom.element("span"), u.extractContents().appendTo(l), u.insertNode(l), D.call(this, l), l.remove(!0));u = null;
          }
        }c.moveToBookmark(r);c.shrink(CKEDITOR.SHRINK_TEXT);
        c.shrink(CKEDITOR.NODE_ELEMENT, !0);
      }
    }function c(a) {
      function b() {
        for (var a = new CKEDITOR.dom.elementPath(d.getParent()), c = new CKEDITOR.dom.elementPath(n.getParent()), e = null, f = null, g = 0; g < a.elements.length; g++) {
          var h = a.elements[g];if (h == a.block || h == a.blockLimit) break;r.checkElementRemovable(h, !0) && (e = h);
        }for (g = 0; g < c.elements.length; g++) {
          h = c.elements[g];if (h == c.block || h == c.blockLimit) break;r.checkElementRemovable(h, !0) && (f = h);
        }f && n.breakParent(f);e && d.breakParent(e);
      }a.enlarge(CKEDITOR.ENLARGE_INLINE, 1);var c = a.createBookmark(),
          d = c.startNode,
          e = this._.definition.alwaysRemoveElement;if (a.collapsed) {
        for (var f = new CKEDITOR.dom.elementPath(d.getParent(), a.root), g, h = 0, k; h < f.elements.length && (k = f.elements[h]) && k != f.block && k != f.blockLimit; h++) {
          if (this.checkElementRemovable(k)) {
            var m;!e && a.collapsed && (a.checkBoundaryOfElement(k, CKEDITOR.END) || (m = a.checkBoundaryOfElement(k, CKEDITOR.START))) ? (g = k, g.match = m ? "start" : "end") : (k.mergeSiblings(), k.is(this.element) ? A.call(this, k) : x(k, l(this)[k.getName()]));
          }
        }if (g) {
          e = d;for (h = 0;; h++) {
            k = f.elements[h];if (k.equals(g)) break;else if (k.match) continue;else k = k.clone();k.append(e);e = k;
          }e["start" == g.match ? "insertBefore" : "insertAfter"](g);
        }
      } else {
        var n = c.endNode,
            r = this;b();for (f = d; !f.equals(n);) {
          g = f.getNextSourceNode(), f.type == CKEDITOR.NODE_ELEMENT && this.checkElementRemovable(f) && (f.getName() == this.element ? A.call(this, f) : x(f, l(this)[f.getName()]), g.type == CKEDITOR.NODE_ELEMENT && g.contains(d) && (b(), g = d.getNext())), f = g;
        }
      }a.moveToBookmark(c);a.shrink(CKEDITOR.NODE_ELEMENT, !0);
    }function f(a) {
      var b = [];a.forEach(function (a) {
        if ("true" == a.getAttribute("contenteditable")) return b.push(a), !1;
      }, CKEDITOR.NODE_ELEMENT, !0);return b;
    }function h(a) {
      var b = a.getEnclosedNode() || a.getCommonAncestor(!1, !0);(a = new CKEDITOR.dom.elementPath(b, a.root).contains(this.element, 1)) && !a.isReadOnly() && u(a, this);
    }function k(a) {
      var b = a.getCommonAncestor(!0, !0);if (a = new CKEDITOR.dom.elementPath(b, a.root).contains(this.element, 1)) {
        var b = this._.definition,
            c = b.attributes;if (c) for (var d in c) {
          a.removeAttribute(d, c[d]);
        }if (b.styles) for (var e in b.styles) {
          b.styles.hasOwnProperty(e) && a.removeStyle(e);
        }
      }
    }function g(a) {
      var b = a.createBookmark(!0),
          c = a.createIterator();c.enforceRealBlocks = !0;this._.enterMode && (c.enlargeBr = this._.enterMode != CKEDITOR.ENTER_BR);for (var d, e = a.document, f; d = c.getNextParagraph();) {
        !d.isReadOnly() && (c.activeFilter ? c.activeFilter.check(this) : 1) && (f = J(this, e, d), r(d, f));
      }a.moveToBookmark(b);
    }function n(a) {
      var b = a.createBookmark(1),
          c = a.createIterator();c.enforceRealBlocks = !0;c.enlargeBr = this._.enterMode != CKEDITOR.ENTER_BR;for (var d, e; d = c.getNextParagraph();) {
        this.checkElementRemovable(d) && (d.is("pre") ? ((e = this._.enterMode == CKEDITOR.ENTER_BR ? null : a.document.createElement(this._.enterMode == CKEDITOR.ENTER_P ? "p" : "div")) && d.copyAttributes(e), r(d, e)) : A.call(this, d));
      }a.moveToBookmark(b);
    }function r(a, b) {
      var c = !b;c && (b = a.getDocument().createElement("div"), a.copyAttributes(b));var d = b && b.is("pre"),
          f = a.is("pre"),
          g = !d && f;if (d && !f) {
        f = b;(g = a.getBogus()) && g.remove();g = a.getHtml();g = y(g, /(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g, "");g = g.replace(/[ \t\r\n]*(<br[^>]*>)[ \t\r\n]*/gi, "$1");g = g.replace(/([ \t\n\r]+|&nbsp;)/g, " ");g = g.replace(/<br\b[^>]*>/gi, "\n");if (CKEDITOR.env.ie) {
          var h = a.getDocument().createElement("div");h.append(f);f.$.outerHTML = "\x3cpre\x3e" + g + "\x3c/pre\x3e";f.copyAttributes(h.getFirst());f = h.getFirst().remove();
        } else f.setHtml(g);b = f;
      } else g ? b = v(c ? [a.getHtml()] : e(a), b) : a.moveChildren(b);b.replace(a);if (d) {
        var c = b,
            k;(k = c.getPrevious(H)) && k.type == CKEDITOR.NODE_ELEMENT && k.is("pre") && (d = y(k.getHtml(), /\n$/, "") + "\n\n" + y(c.getHtml(), /^\n/, ""), CKEDITOR.env.ie ? c.$.outerHTML = "\x3cpre\x3e" + d + "\x3c/pre\x3e" : c.setHtml(d), k.remove());
      } else c && m(b);
    }function e(a) {
      var b = [];y(a.getOuterHtml(), /(\S\s*)\n(?:\s|(<span[^>]+data-cke-bookmark.*?\/span>))*\n(?!$)/gi, function (a, b, c) {
        return b + "\x3c/pre\x3e" + c + "\x3cpre\x3e";
      }).replace(/<pre\b.*?>([\s\S]*?)<\/pre>/gi, function (a, c) {
        b.push(c);
      });return b;
    }function y(a, b, c) {
      var d = "",
          e = "";a = a.replace(/(^<span[^>]+data-cke-bookmark.*?\/span>)|(<span[^>]+data-cke-bookmark.*?\/span>$)/gi, function (a, b, c) {
        b && (d = b);c && (e = c);return "";
      });return d + a.replace(b, c) + e;
    }function v(a, b) {
      var c;
      1 < a.length && (c = new CKEDITOR.dom.documentFragment(b.getDocument()));for (var d = 0; d < a.length; d++) {
        var e = a[d],
            e = e.replace(/(\r\n|\r)/g, "\n"),
            e = y(e, /^[ \t]*\n/, ""),
            e = y(e, /\n$/, ""),
            e = y(e, /^[ \t]+|[ \t]+$/g, function (a, b) {
          return 1 == a.length ? "\x26nbsp;" : b ? " " + CKEDITOR.tools.repeat("\x26nbsp;", a.length - 1) : CKEDITOR.tools.repeat("\x26nbsp;", a.length - 1) + " ";
        }),
            e = e.replace(/\n/g, "\x3cbr\x3e"),
            e = e.replace(/[ \t]{2,}/g, function (a) {
          return CKEDITOR.tools.repeat("\x26nbsp;", a.length - 1) + " ";
        });if (c) {
          var f = b.clone();f.setHtml(e);
          c.append(f);
        } else b.setHtml(e);
      }return c || b;
    }function A(a, b) {
      var c = this._.definition,
          d = c.attributes,
          c = c.styles,
          e = l(this)[a.getName()],
          f = CKEDITOR.tools.isEmpty(d) && CKEDITOR.tools.isEmpty(c),
          g;for (g in d) {
        if ("class" != g && !this._.definition.fullMatch || a.getAttribute(g) == t(g, d[g])) b && "data-" == g.slice(0, 5) || (f = a.hasAttribute(g), a.removeAttribute(g));
      }for (var h in c) {
        this._.definition.fullMatch && a.getStyle(h) != t(h, c[h], !0) || (f = f || !!a.getStyle(h), a.removeStyle(h));
      }x(a, e, C[a.getName()]);f && (this._.definition.alwaysRemoveElement ? m(a, 1) : !CKEDITOR.dtd.$block[a.getName()] || this._.enterMode == CKEDITOR.ENTER_BR && !a.hasAttributes() ? m(a) : a.renameNode(this._.enterMode == CKEDITOR.ENTER_P ? "p" : "div"));
    }function D(a) {
      for (var b = l(this), c = a.getElementsByTag(this.element), d, e = c.count(); 0 <= --e;) {
        d = c.getItem(e), d.isReadOnly() || A.call(this, d, !0);
      }for (var f in b) {
        if (f != this.element) for (c = a.getElementsByTag(f), e = c.count() - 1; 0 <= e; e--) {
          d = c.getItem(e), d.isReadOnly() || x(d, b[f]);
        }
      }
    }function x(a, b, c) {
      if (b = b && b.attributes) for (var d = 0; d < b.length; d++) {
        var e = b[d][0],
            f;if (f = a.getAttribute(e)) {
          var g = b[d][1];(null === g || g.test && g.test(f) || "string" == typeof g && f == g) && a.removeAttribute(e);
        }
      }c || m(a);
    }function m(a, b) {
      if (!a.hasAttributes() || b) if (CKEDITOR.dtd.$block[a.getName()]) {
        var c = a.getPrevious(H),
            d = a.getNext(H);!c || c.type != CKEDITOR.NODE_TEXT && c.isBlockBoundary({ br: 1 }) || a.append("br", 1);!d || d.type != CKEDITOR.NODE_TEXT && d.isBlockBoundary({ br: 1 }) || a.append("br");a.remove(!0);
      } else c = a.getFirst(), d = a.getLast(), a.remove(!0), c && (c.type == CKEDITOR.NODE_ELEMENT && c.mergeSiblings(), d && !c.equals(d) && d.type == CKEDITOR.NODE_ELEMENT && d.mergeSiblings());
    }function J(a, b, c) {
      var d;d = a.element;"*" == d && (d = "span");d = new CKEDITOR.dom.element(d, b);c && c.copyAttributes(d);d = u(d, a);b.getCustomData("doc_processing_style") && d.hasAttribute("id") ? d.removeAttribute("id") : b.setCustomData("doc_processing_style", 1);return d;
    }function u(a, b) {
      var c = b._.definition,
          d = c.attributes,
          c = CKEDITOR.style.getStyleText(c);if (d) for (var e in d) {
        a.setAttribute(e, d[e]);
      }c && a.setAttribute("style", c);return a;
    }function K(a, b) {
      for (var c in a) {
        a[c] = a[c].replace(E, function (a, c) {
          return b[c];
        });
      }
    }function l(a) {
      if (a._.overrides) return a._.overrides;var b = a._.overrides = {},
          c = a._.definition.overrides;if (c) {
        CKEDITOR.tools.isArray(c) || (c = [c]);for (var d = 0; d < c.length; d++) {
          var e = c[d],
              f,
              g;"string" == typeof e ? f = e.toLowerCase() : (f = e.element ? e.element.toLowerCase() : a.element, g = e.attributes);e = b[f] || (b[f] = {});if (g) {
            var e = e.attributes = e.attributes || [],
                h;for (h in g) {
              e.push([h.toLowerCase(), g[h]]);
            }
          }
        }
      }return b;
    }function t(a, b, c) {
      var d = new CKEDITOR.dom.element("span");
      d[c ? "setStyle" : "setAttribute"](a, b);return d[c ? "getStyle" : "getAttribute"](a);
    }function F(a, b) {
      function c(a, b) {
        return "font-family" == b.toLowerCase() ? a.replace(/["']/g, "") : a;
      }"string" == typeof a && (a = CKEDITOR.tools.parseCssText(a));"string" == typeof b && (b = CKEDITOR.tools.parseCssText(b, !0));for (var d in a) {
        if (!(d in b) || c(b[d], d) != c(a[d], d) && "inherit" != a[d] && "inherit" != b[d]) return !1;
      }return !0;
    }function L(a, b, c) {
      var d = a.document,
          e = a.getRanges();b = b ? this.removeFromRange : this.applyToRange;var f, g;if (a.isFake && a.isInTable()) for (f = [], g = 0; g < e.length; g++) {
        f.push(e[g].clone());
      }for (var h = e.createIterator(); g = h.getNextRange();) {
        b.call(this, g, c);
      }a.selectRanges(f || e);d.removeCustomData("doc_processing_style");
    }var C = { address: 1, div: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, p: 1, pre: 1, section: 1, header: 1, footer: 1, nav: 1, article: 1, aside: 1, figure: 1, dialog: 1, hgroup: 1, time: 1, meter: 1, menu: 1, command: 1, keygen: 1, output: 1, progress: 1, details: 1, datagrid: 1, datalist: 1 },
        M = { a: 1, blockquote: 1, embed: 1, hr: 1, img: 1, li: 1, object: 1, ol: 1, table: 1, td: 1, tr: 1, th: 1, ul: 1, dl: 1, dt: 1,
      dd: 1, form: 1, audio: 1, video: 1 },
        q = /\s*(?:;\s*|$)/,
        E = /#\((.+?)\)/g,
        z = CKEDITOR.dom.walker.bookmark(0, 1),
        H = CKEDITOR.dom.walker.whitespaces(1);CKEDITOR.style = function (a, b) {
      if ("string" == typeof a.type) return new CKEDITOR.style.customHandlers[a.type](a);var c = a.attributes;c && c.style && (a.styles = CKEDITOR.tools.extend({}, a.styles, CKEDITOR.tools.parseCssText(c.style)), delete c.style);b && (a = CKEDITOR.tools.clone(a), K(a.attributes, b), K(a.styles, b));c = this.element = a.element ? "string" == typeof a.element ? a.element.toLowerCase() : a.element : "*";this.type = a.type || (C[c] ? CKEDITOR.STYLE_BLOCK : M[c] ? CKEDITOR.STYLE_OBJECT : CKEDITOR.STYLE_INLINE);"object" == _typeof(this.element) && (this.type = CKEDITOR.STYLE_OBJECT);this._ = { definition: a };
    };CKEDITOR.style.prototype = { apply: function apply(a) {
        if (a instanceof CKEDITOR.dom.document) return L.call(this, a.getSelection());if (this.checkApplicable(a.elementPath(), a)) {
          var b = this._.enterMode;b || (this._.enterMode = a.activeEnterMode);L.call(this, a.getSelection(), 0, a);this._.enterMode = b;
        }
      }, remove: function remove(a) {
        if (a instanceof CKEDITOR.dom.document) return L.call(this, a.getSelection(), 1);if (this.checkApplicable(a.elementPath(), a)) {
          var b = this._.enterMode;b || (this._.enterMode = a.activeEnterMode);L.call(this, a.getSelection(), 1, a);this._.enterMode = b;
        }
      }, applyToRange: function applyToRange(a) {
        this.applyToRange = this.type == CKEDITOR.STYLE_INLINE ? b : this.type == CKEDITOR.STYLE_BLOCK ? g : this.type == CKEDITOR.STYLE_OBJECT ? h : null;return this.applyToRange(a);
      }, removeFromRange: function removeFromRange(a) {
        this.removeFromRange = this.type == CKEDITOR.STYLE_INLINE ? c : this.type == CKEDITOR.STYLE_BLOCK ? n : this.type == CKEDITOR.STYLE_OBJECT ? k : null;return this.removeFromRange(a);
      }, applyToObject: function applyToObject(a) {
        u(a, this);
      }, checkActive: function checkActive(a, b) {
        switch (this.type) {case CKEDITOR.STYLE_BLOCK:
            return this.checkElementRemovable(a.block || a.blockLimit, !0, b);case CKEDITOR.STYLE_OBJECT:case CKEDITOR.STYLE_INLINE:
            for (var c = a.elements, d = 0, e; d < c.length; d++) {
              if (e = c[d], this.type != CKEDITOR.STYLE_INLINE || e != a.block && e != a.blockLimit) {
                if (this.type == CKEDITOR.STYLE_OBJECT) {
                  var f = e.getName();if (!("string" == typeof this.element ? f == this.element : f in this.element)) continue;
                }if (this.checkElementRemovable(e, !0, b)) return !0;
              }
            }}return !1;
      }, checkApplicable: function checkApplicable(a, b, c) {
        b && b instanceof CKEDITOR.filter && (c = b);if (c && !c.check(this)) return !1;switch (this.type) {case CKEDITOR.STYLE_OBJECT:
            return !!a.contains(this.element);case CKEDITOR.STYLE_BLOCK:
            return !!a.blockLimit.getDtd()[this.element];}return !0;
      }, checkElementMatch: function checkElementMatch(a, b) {
        var c = this._.definition;if (!a || !c.ignoreReadonly && a.isReadOnly()) return !1;var d = a.getName();if ("string" == typeof this.element ? d == this.element : d in this.element) {
          if (!b && !a.hasAttributes()) return !0;if (d = c._AC) c = d;else {
            var d = {},
                e = 0,
                f = c.attributes;if (f) for (var g in f) {
              e++, d[g] = f[g];
            }if (g = CKEDITOR.style.getStyleText(c)) d.style || e++, d.style = g;d._length = e;c = c._AC = d;
          }if (c._length) {
            for (var h in c) {
              if ("_length" != h) if (d = a.getAttribute(h) || "", "style" == h ? F(c[h], d) : c[h] == d) {
                if (!b) return !0;
              } else if (b) return !1;
            }if (b) return !0;
          } else return !0;
        }return !1;
      }, checkElementRemovable: function checkElementRemovable(a, b, c) {
        if (this.checkElementMatch(a, b, c)) return !0;if (b = l(this)[a.getName()]) {
          var d;
          if (!(b = b.attributes)) return !0;for (c = 0; c < b.length; c++) {
            if (d = b[c][0], d = a.getAttribute(d)) {
              var e = b[c][1];if (null === e) return !0;if ("string" == typeof e) {
                if (d == e) return !0;
              } else if (e.test(d)) return !0;
            }
          }
        }return !1;
      }, buildPreview: function buildPreview(a) {
        var b = this._.definition,
            c = [],
            d = b.element;"bdo" == d && (d = "span");var c = ["\x3c", d],
            e = b.attributes;if (e) for (var f in e) {
          c.push(" ", f, '\x3d"', e[f], '"');
        }(e = CKEDITOR.style.getStyleText(b)) && c.push(' style\x3d"', e, '"');c.push("\x3e", a || b.name, "\x3c/", d, "\x3e");return c.join("");
      }, getDefinition: function getDefinition() {
        return this._.definition;
      } };
    CKEDITOR.style.getStyleText = function (a) {
      var b = a._ST;if (b) return b;var b = a.styles,
          c = a.attributes && a.attributes.style || "",
          d = "";c.length && (c = c.replace(q, ";"));for (var e in b) {
        var f = b[e],
            g = (e + ":" + f).replace(q, ";");"inherit" == f ? d += g : c += g;
      }c.length && (c = CKEDITOR.tools.normalizeCssText(c, !0));return a._ST = c + d;
    };CKEDITOR.style.customHandlers = {};CKEDITOR.style.addCustomHandler = function (a) {
      var b = function b(a) {
        this._ = { definition: a };this.setup && this.setup(a);
      };b.prototype = CKEDITOR.tools.extend(CKEDITOR.tools.prototypedCopy(CKEDITOR.style.prototype), { assignedTo: CKEDITOR.STYLE_OBJECT }, a, !0);return this.customHandlers[a.type] = b;
    };var P = CKEDITOR.POSITION_PRECEDING | CKEDITOR.POSITION_IDENTICAL | CKEDITOR.POSITION_IS_CONTAINED,
        O = CKEDITOR.POSITION_FOLLOWING | CKEDITOR.POSITION_IDENTICAL | CKEDITOR.POSITION_IS_CONTAINED;
  })();CKEDITOR.styleCommand = function (a, d) {
    this.requiredContent = this.allowedContent = this.style = a;CKEDITOR.tools.extend(this, d, !0);
  };
  CKEDITOR.styleCommand.prototype.exec = function (a) {
    a.focus();this.state == CKEDITOR.TRISTATE_OFF ? a.applyStyle(this.style) : this.state == CKEDITOR.TRISTATE_ON && a.removeStyle(this.style);
  };CKEDITOR.stylesSet = new CKEDITOR.resourceManager("", "stylesSet");CKEDITOR.addStylesSet = CKEDITOR.tools.bind(CKEDITOR.stylesSet.add, CKEDITOR.stylesSet);CKEDITOR.loadStylesSet = function (a, d, b) {
    CKEDITOR.stylesSet.addExternal(a, d, "");CKEDITOR.stylesSet.load(a, b);
  };
  CKEDITOR.tools.extend(CKEDITOR.editor.prototype, { attachStyleStateChange: function attachStyleStateChange(a, d) {
      var b = this._.styleStateChangeCallbacks;b || (b = this._.styleStateChangeCallbacks = [], this.on("selectionChange", function (a) {
        for (var d = 0; d < b.length; d++) {
          var h = b[d],
              k = h.style.checkActive(a.data.path, this) ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF;h.fn.call(this, k);
        }
      }));b.push({ style: a, fn: d });
    }, applyStyle: function applyStyle(a) {
      a.apply(this);
    }, removeStyle: function removeStyle(a) {
      a.remove(this);
    }, getStylesSet: function getStylesSet(a) {
      if (this._.stylesDefinitions) a(this._.stylesDefinitions);else {
        var d = this,
            b = d.config.stylesCombo_stylesSet || d.config.stylesSet;if (!1 === b) a(null);else if (b instanceof Array) d._.stylesDefinitions = b, a(b);else {
          b || (b = "default");var b = b.split(":"),
              c = b[0];CKEDITOR.stylesSet.addExternal(c, b[1] ? b.slice(1).join(":") : CKEDITOR.getUrl("styles.js"), "");CKEDITOR.stylesSet.load(c, function (b) {
            d._.stylesDefinitions = b[c];a(d._.stylesDefinitions);
          });
        }
      }
    } });
  CKEDITOR.dom.comment = function (a, d) {
    "string" == typeof a && (a = (d ? d.$ : document).createComment(a));CKEDITOR.dom.domObject.call(this, a);
  };CKEDITOR.dom.comment.prototype = new CKEDITOR.dom.node();CKEDITOR.tools.extend(CKEDITOR.dom.comment.prototype, { type: CKEDITOR.NODE_COMMENT, getOuterHtml: function getOuterHtml() {
      return "\x3c!--" + this.$.nodeValue + "--\x3e";
    } });"use strict";
  (function () {
    var a = {},
        d = {},
        b;for (b in CKEDITOR.dtd.$blockLimit) {
      b in CKEDITOR.dtd.$list || (a[b] = 1);
    }for (b in CKEDITOR.dtd.$block) {
      b in CKEDITOR.dtd.$blockLimit || b in CKEDITOR.dtd.$empty || (d[b] = 1);
    }CKEDITOR.dom.elementPath = function (b, f) {
      var h = null,
          k = null,
          g = [],
          n = b,
          r;f = f || b.getDocument().getBody();n || (n = f);do {
        if (n.type == CKEDITOR.NODE_ELEMENT) {
          g.push(n);if (!this.lastElement && (this.lastElement = n, n.is(CKEDITOR.dtd.$object) || "false" == n.getAttribute("contenteditable"))) continue;if (n.equals(f)) break;if (!k && (r = n.getName(), "true" == n.getAttribute("contenteditable") ? k = n : !h && d[r] && (h = n), a[r])) {
            if (r = !h && "div" == r) {
              a: {
                r = n.getChildren();for (var e = 0, y = r.count(); e < y; e++) {
                  var v = r.getItem(e);if (v.type == CKEDITOR.NODE_ELEMENT && CKEDITOR.dtd.$block[v.getName()]) {
                    r = !0;break a;
                  }
                }r = !1;
              }r = !r;
            }r ? h = n : k = n;
          }
        }
      } while (n = n.getParent());k || (k = f);this.block = h;this.blockLimit = k;this.root = f;this.elements = g;
    };
  })();
  CKEDITOR.dom.elementPath.prototype = { compare: function compare(a) {
      var d = this.elements;a = a && a.elements;if (!a || d.length != a.length) return !1;for (var b = 0; b < d.length; b++) {
        if (!d[b].equals(a[b])) return !1;
      }return !0;
    }, contains: function contains(a, d, b) {
      var c = 0,
          f;"string" == typeof a && (f = function f(b) {
        return b.getName() == a;
      });a instanceof CKEDITOR.dom.element ? f = function f(b) {
        return b.equals(a);
      } : CKEDITOR.tools.isArray(a) ? f = function f(b) {
        return -1 < CKEDITOR.tools.indexOf(a, b.getName());
      } : "function" == typeof a ? f = a : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && (f = function f(b) {
        return b.getName() in a;
      });var h = this.elements,
          k = h.length;d && (b ? c += 1 : --k);b && (h = Array.prototype.slice.call(h, 0), h.reverse());for (; c < k; c++) {
        if (f(h[c])) return h[c];
      }return null;
    }, isContextFor: function isContextFor(a) {
      var d;return a in CKEDITOR.dtd.$block ? (d = this.contains(CKEDITOR.dtd.$intermediate) || this.root.equals(this.block) && this.block || this.blockLimit, !!d.getDtd()[a]) : !0;
    }, direction: function direction() {
      return (this.block || this.blockLimit || this.root).getDirection(1);
    } };
  CKEDITOR.dom.text = function (a, d) {
    "string" == typeof a && (a = (d ? d.$ : document).createTextNode(a));this.$ = a;
  };CKEDITOR.dom.text.prototype = new CKEDITOR.dom.node();
  CKEDITOR.tools.extend(CKEDITOR.dom.text.prototype, { type: CKEDITOR.NODE_TEXT, getLength: function getLength() {
      return this.$.nodeValue.length;
    }, getText: function getText() {
      return this.$.nodeValue;
    }, setText: function setText(a) {
      this.$.nodeValue = a;
    }, split: function split(a) {
      var d = this.$.parentNode,
          b = d.childNodes.length,
          c = this.getLength(),
          f = this.getDocument(),
          h = new CKEDITOR.dom.text(this.$.splitText(a), f);d.childNodes.length == b && (a >= c ? (h = f.createText(""), h.insertAfter(this)) : (a = f.createText(""), a.insertAfter(h), a.remove()));return h;
    }, substring: function substring(a, d) {
      return "number" != typeof d ? this.$.nodeValue.substr(a) : this.$.nodeValue.substring(a, d);
    } });
  (function () {
    function a(a, c, d) {
      var h = a.serializable,
          k = c[d ? "endContainer" : "startContainer"],
          g = d ? "endOffset" : "startOffset",
          n = h ? c.document.getById(a.startNode) : a.startNode;a = h ? c.document.getById(a.endNode) : a.endNode;k.equals(n.getPrevious()) ? (c.startOffset = c.startOffset - k.getLength() - a.getPrevious().getLength(), k = a.getNext()) : k.equals(a.getPrevious()) && (c.startOffset -= k.getLength(), k = a.getNext());k.equals(n.getParent()) && c[g]++;k.equals(a.getParent()) && c[g]++;c[d ? "endContainer" : "startContainer"] = k;return c;
    }
    CKEDITOR.dom.rangeList = function (a) {
      if (a instanceof CKEDITOR.dom.rangeList) return a;a ? a instanceof CKEDITOR.dom.range && (a = [a]) : a = [];return CKEDITOR.tools.extend(a, d);
    };var d = { createIterator: function createIterator() {
        var a = this,
            c = CKEDITOR.dom.walker.bookmark(),
            d = [],
            h;return { getNextRange: function getNextRange(k) {
            h = void 0 === h ? 0 : h + 1;var g = a[h];if (g && 1 < a.length) {
              if (!h) for (var n = a.length - 1; 0 <= n; n--) {
                d.unshift(a[n].createBookmark(!0));
              }if (k) for (var r = 0; a[h + r + 1];) {
                var e = g.document;k = 0;n = e.getById(d[r].endNode);for (e = e.getById(d[r + 1].startNode);;) {
                  n = n.getNextSourceNode(!1);if (e.equals(n)) k = 1;else if (c(n) || n.type == CKEDITOR.NODE_ELEMENT && n.isBlockBoundary()) continue;break;
                }if (!k) break;r++;
              }for (g.moveToBookmark(d.shift()); r--;) {
                n = a[++h], n.moveToBookmark(d.shift()), g.setEnd(n.endContainer, n.endOffset);
              }
            }return g;
          } };
      }, createBookmarks: function createBookmarks(b) {
        for (var c = [], d, h = 0; h < this.length; h++) {
          c.push(d = this[h].createBookmark(b, !0));for (var k = h + 1; k < this.length; k++) {
            this[k] = a(d, this[k]), this[k] = a(d, this[k], !0);
          }
        }return c;
      }, createBookmarks2: function createBookmarks2(a) {
        for (var c = [], d = 0; d < this.length; d++) {
          c.push(this[d].createBookmark2(a));
        }return c;
      }, moveToBookmarks: function moveToBookmarks(a) {
        for (var c = 0; c < this.length; c++) {
          this[c].moveToBookmark(a[c]);
        }
      } };
  })();
  (function () {
    function a() {
      return CKEDITOR.getUrl(CKEDITOR.skinName.split(",")[1] || "skins/" + CKEDITOR.skinName.split(",")[0] + "/");
    }function d(b) {
      var c = CKEDITOR.skin["ua_" + b],
          d = CKEDITOR.env;if (c) for (var c = c.split(",").sort(function (a, b) {
        return a > b ? -1 : 1;
      }), f = 0, g; f < c.length; f++) {
        if (g = c[f], d.ie && (g.replace(/^ie/, "") == d.version || d.quirks && "iequirks" == g) && (g = "ie"), d[g]) {
          b += "_" + c[f];break;
        }
      }return CKEDITOR.getUrl(a() + b + ".css");
    }function b(a, b) {
      h[a] || (CKEDITOR.document.appendStyleSheet(d(a)), h[a] = 1);b && b();
    }function c(a) {
      var b = a.getById(k);b || (b = a.getHead().append("style"), b.setAttribute("id", k), b.setAttribute("type", "text/css"));return b;
    }function f(a, b, c) {
      var d, f, g;if (CKEDITOR.env.webkit) for (b = b.split("}").slice(0, -1), f = 0; f < b.length; f++) {
        b[f] = b[f].split("{");
      }for (var h = 0; h < a.length; h++) {
        if (CKEDITOR.env.webkit) for (f = 0; f < b.length; f++) {
          g = b[f][1];for (d = 0; d < c.length; d++) {
            g = g.replace(c[d][0], c[d][1]);
          }a[h].$.sheet.addRule(b[f][0], g);
        } else {
          g = b;for (d = 0; d < c.length; d++) {
            g = g.replace(c[d][0], c[d][1]);
          }CKEDITOR.env.ie && 11 > CKEDITOR.env.version ? a[h].$.styleSheet.cssText += g : a[h].$.innerHTML += g;
        }
      }
    }var h = {};CKEDITOR.skin = { path: a, loadPart: function loadPart(c, d) {
        CKEDITOR.skin.name != CKEDITOR.skinName.split(",")[0] ? CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(a() + "skin.js"), function () {
          b(c, d);
        }) : b(c, d);
      }, getPath: function getPath(a) {
        return CKEDITOR.getUrl(d(a));
      }, icons: {}, addIcon: function addIcon(a, b, c, d) {
        a = a.toLowerCase();this.icons[a] || (this.icons[a] = { path: b, offset: c || 0, bgsize: d || "16px" });
      }, getIconStyle: function getIconStyle(a, b, c, d, f) {
        var g;a && (a = a.toLowerCase(), b && (g = this.icons[a + "-rtl"]), g || (g = this.icons[a]));a = c || g && g.path || "";d = d || g && g.offset;f = f || g && g.bgsize || "16px";a && (a = a.replace(/'/g, "\\'"));return a && "background-image:url('" + CKEDITOR.getUrl(a) + "');background-position:0 " + d + "px;background-size:" + f + ";";
      } };CKEDITOR.tools.extend(CKEDITOR.editor.prototype, { getUiColor: function getUiColor() {
        return this.uiColor;
      }, setUiColor: function setUiColor(a) {
        var b = c(CKEDITOR.document);return (this.setUiColor = function (a) {
          this.uiColor = a;var c = CKEDITOR.skin.chameleon,
              d = "",
              h = "";"function" == typeof c && (d = c(this, "editor"), h = c(this, "panel"));a = [[n, a]];f([b], d, a);f(g, h, a);
        }).call(this, a);
      } });var k = "cke_ui_color",
        g = [],
        n = /\$color/g;CKEDITOR.on("instanceLoaded", function (a) {
      if (!CKEDITOR.env.ie || !CKEDITOR.env.quirks) {
        var b = a.editor;a = function a(_a6) {
          _a6 = (_a6.data[0] || _a6.data).element.getElementsByTag("iframe").getItem(0).getFrameDocument();if (!_a6.getById("cke_ui_color")) {
            _a6 = c(_a6);g.push(_a6);var d = b.getUiColor();d && f([_a6], CKEDITOR.skin.chameleon(b, "panel"), [[n, d]]);
          }
        };b.on("panelShow", a);b.on("menuShow", a);b.config.uiColor && b.setUiColor(b.config.uiColor);
      }
    });
  })();
  (function () {
    if (CKEDITOR.env.webkit) CKEDITOR.env.hc = !1;else {
      var a = CKEDITOR.dom.element.createFromHtml('\x3cdiv style\x3d"width:0;height:0;position:absolute;left:-10000px;border:1px solid;border-color:red blue"\x3e\x3c/div\x3e', CKEDITOR.document);a.appendTo(CKEDITOR.document.getHead());try {
        var d = a.getComputedStyle("border-top-color"),
            b = a.getComputedStyle("border-right-color");CKEDITOR.env.hc = !(!d || d != b);
      } catch (c) {
        CKEDITOR.env.hc = !1;
      }a.remove();
    }CKEDITOR.env.hc && (CKEDITOR.env.cssClass += " cke_hc");CKEDITOR.document.appendStyleText(".cke{visibility:hidden;}");
    CKEDITOR.status = "loaded";CKEDITOR.fireOnce("loaded");if (a = CKEDITOR._.pending) for (delete CKEDITOR._.pending, d = 0; d < a.length; d++) {
      CKEDITOR.editor.prototype.constructor.apply(a[d][0], a[d][1]), CKEDITOR.add(a[d][0]);
    }
  })(); /*
        Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
        For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
        */
  CKEDITOR.skin.name = "moono-lisa";CKEDITOR.skin.ua_editor = "ie,iequirks,ie8,gecko";CKEDITOR.skin.ua_dialog = "ie,iequirks,ie8";
  CKEDITOR.skin.chameleon = function () {
    var b = function () {
      return function (b, d) {
        for (var a = b.match(/[^#]./g), e = 0; 3 > e; e++) {
          var f = e,
              c;c = parseInt(a[e], 16);c = ("0" + (0 > d ? 0 | c * (1 + d) : 0 | c + (255 - c) * d).toString(16)).slice(-2);a[f] = c;
        }return "#" + a.join("");
      };
    }(),
        f = { editor: new CKEDITOR.template("{id}.cke_chrome [border-color:{defaultBorder};] {id} .cke_top [ background-color:{defaultBackground};border-bottom-color:{defaultBorder};] {id} .cke_bottom [background-color:{defaultBackground};border-top-color:{defaultBorder};] {id} .cke_resizer [border-right-color:{ckeResizer}] {id} .cke_dialog_title [background-color:{defaultBackground};border-bottom-color:{defaultBorder};] {id} .cke_dialog_footer [background-color:{defaultBackground};outline-color:{defaultBorder};] {id} .cke_dialog_tab [background-color:{dialogTab};border-color:{defaultBorder};] {id} .cke_dialog_tab:hover [background-color:{lightBackground};] {id} .cke_dialog_contents [border-top-color:{defaultBorder};] {id} .cke_dialog_tab_selected, {id} .cke_dialog_tab_selected:hover [background:{dialogTabSelected};border-bottom-color:{dialogTabSelectedBorder};] {id} .cke_dialog_body [background:{dialogBody};border-color:{defaultBorder};] {id} a.cke_button_off:hover,{id} a.cke_button_off:focus,{id} a.cke_button_off:active [background-color:{darkBackground};border-color:{toolbarElementsBorder};] {id} .cke_button_on [background-color:{ckeButtonOn};border-color:{toolbarElementsBorder};] {id} .cke_toolbar_separator,{id} .cke_toolgroup a.cke_button:last-child:after,{id} .cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after [background-color: {toolbarElementsBorder};border-color: {toolbarElementsBorder};] {id} a.cke_combo_button:hover,{id} a.cke_combo_button:focus,{id} .cke_combo_on a.cke_combo_button [border-color:{toolbarElementsBorder};background-color:{darkBackground};] {id} .cke_combo:after [border-color:{toolbarElementsBorder};] {id} .cke_path_item [color:{elementsPathColor};] {id} a.cke_path_item:hover,{id} a.cke_path_item:focus,{id} a.cke_path_item:active [background-color:{darkBackground};] {id}.cke_panel [border-color:{defaultBorder};] "), panel: new CKEDITOR.template(".cke_panel_grouptitle [background-color:{lightBackground};border-color:{defaultBorder};] .cke_menubutton_icon [background-color:{menubuttonIcon};] .cke_menubutton:hover,.cke_menubutton:focus,.cke_menubutton:active [background-color:{menubuttonHover};] .cke_menubutton:hover .cke_menubutton_icon, .cke_menubutton:focus .cke_menubutton_icon, .cke_menubutton:active .cke_menubutton_icon [background-color:{menubuttonIconHover};] .cke_menubutton_disabled:hover .cke_menubutton_icon,.cke_menubutton_disabled:focus .cke_menubutton_icon,.cke_menubutton_disabled:active .cke_menubutton_icon [background-color:{menubuttonIcon};] .cke_menuseparator [background-color:{menubuttonIcon};] a:hover.cke_colorbox, a:active.cke_colorbox [border-color:{defaultBorder};] a:hover.cke_colorauto, a:hover.cke_colormore, a:active.cke_colorauto, a:active.cke_colormore [background-color:{ckeColorauto};border-color:{defaultBorder};] ") };
    return function (g, d) {
      var a = b(g.uiColor, .4),
          a = { id: "." + g.id, defaultBorder: b(a, -.2), toolbarElementsBorder: b(a, -.25), defaultBackground: a, lightBackground: b(a, .8), darkBackground: b(a, -.15), ckeButtonOn: b(a, .4), ckeResizer: b(a, -.4), ckeColorauto: b(a, .8), dialogBody: b(a, .7), dialogTab: b(a, .65), dialogTabSelected: "#FFF", dialogTabSelectedBorder: "#FFF", elementsPathColor: b(a, -.6), menubuttonHover: b(a, .1), menubuttonIcon: b(a, .5), menubuttonIconHover: b(a, .3) };return f[d].output(a).replace(/\[/g, "{").replace(/\]/g, "}");
    };
  }();CKEDITOR.plugins.add("dialogui", { onLoad: function onLoad() {
      var h = function h(b) {
        this._ || (this._ = {});this._["default"] = this._.initValue = b["default"] || "";this._.required = b.required || !1;for (var a = [this._], d = 1; d < arguments.length; d++) {
          a.push(arguments[d]);
        }a.push(!0);CKEDITOR.tools.extend.apply(CKEDITOR.tools, a);return this._;
      },
          v = { build: function build(b, a, d) {
          return new CKEDITOR.ui.dialog.textInput(b, a, d);
        } },
          n = { build: function build(b, a, d) {
          return new CKEDITOR.ui.dialog[a.type](b, a, d);
        } },
          q = { isChanged: function isChanged() {
          return this.getValue() != this.getInitValue();
        }, reset: function reset(b) {
          this.setValue(this.getInitValue(), b);
        }, setInitValue: function setInitValue() {
          this._.initValue = this.getValue();
        }, resetInitValue: function resetInitValue() {
          this._.initValue = this._["default"];
        }, getInitValue: function getInitValue() {
          return this._.initValue;
        } },
          r = CKEDITOR.tools.extend({}, CKEDITOR.ui.dialog.uiElement.prototype.eventProcessors, { onChange: function onChange(b, a) {
          this._.domOnChangeRegistered || (b.on("load", function () {
            this.getInputElement().on("change", function () {
              b.parts.dialog.isVisible() && this.fire("change", { value: this.getValue() });
            }, this);
          }, this), this._.domOnChangeRegistered = !0);this.on("change", a);
        } }, !0),
          x = /^on([A-Z]\w+)/,
          t = function t(b) {
        for (var a in b) {
          (x.test(a) || "title" == a || "type" == a) && delete b[a];
        }return b;
      },
          w = function w(b) {
        b = b.data.getKeystroke();b == CKEDITOR.SHIFT + CKEDITOR.ALT + 36 ? this.setDirectionMarker("ltr") : b == CKEDITOR.SHIFT + CKEDITOR.ALT + 35 && this.setDirectionMarker("rtl");
      };CKEDITOR.tools.extend(CKEDITOR.ui.dialog, { labeledElement: function labeledElement(b, a, d, f) {
          if (!(4 > arguments.length)) {
            var c = h.call(this, a);c.labelId = CKEDITOR.tools.getNextId() + "_label";this._.children = [];var e = { role: a.role || "presentation" };a.includeLabel && (e["aria-labelledby"] = c.labelId);CKEDITOR.ui.dialog.uiElement.call(this, b, a, d, "div", null, e, function () {
              var e = [],
                  g = a.required ? " cke_required" : "";"horizontal" != a.labelLayout ? e.push('\x3clabel class\x3d"cke_dialog_ui_labeled_label' + g + '" ', ' id\x3d"' + c.labelId + '"', c.inputId ? ' for\x3d"' + c.inputId + '"' : "", (a.labelStyle ? ' style\x3d"' + a.labelStyle + '"' : "") + "\x3e", a.label, "\x3c/label\x3e", '\x3cdiv class\x3d"cke_dialog_ui_labeled_content"', a.controlStyle ? ' style\x3d"' + a.controlStyle + '"' : "", ' role\x3d"presentation"\x3e', f.call(this, b, a), "\x3c/div\x3e") : (g = { type: "hbox", widths: a.widths, padding: 0, children: [{ type: "html", html: '\x3clabel class\x3d"cke_dialog_ui_labeled_label' + g + '" id\x3d"' + c.labelId + '" for\x3d"' + c.inputId + '"' + (a.labelStyle ? ' style\x3d"' + a.labelStyle + '"' : "") + "\x3e" + CKEDITOR.tools.htmlEncode(a.label) + "\x3c/label\x3e" }, { type: "html", html: '\x3cspan class\x3d"cke_dialog_ui_labeled_content"' + (a.controlStyle ? ' style\x3d"' + a.controlStyle + '"' : "") + "\x3e" + f.call(this, b, a) + "\x3c/span\x3e" }] }, CKEDITOR.dialog._.uiElementBuilders.hbox.build(b, g, e));return e.join("");
            });
          }
        }, textInput: function textInput(b, a, d) {
          if (!(3 > arguments.length)) {
            h.call(this, a);var f = this._.inputId = CKEDITOR.tools.getNextId() + "_textInput",
                c = { "class": "cke_dialog_ui_input_" + a.type, id: f, type: a.type };a.validate && (this.validate = a.validate);a.maxLength && (c.maxlength = a.maxLength);a.size && (c.size = a.size);a.inputStyle && (c.style = a.inputStyle);var e = this,
                m = !1;b.on("load", function () {
              e.getInputElement().on("keydown", function (a) {
                13 == a.data.getKeystroke() && (m = !0);
              });e.getInputElement().on("keyup", function (a) {
                13 == a.data.getKeystroke() && m && (b.getButton("ok") && setTimeout(function () {
                  b.getButton("ok").click();
                }, 0), m = !1);e.bidi && w.call(e, a);
              }, null, null, 1E3);
            });CKEDITOR.ui.dialog.labeledElement.call(this, b, a, d, function () {
              var b = ['\x3cdiv class\x3d"cke_dialog_ui_input_', a.type, '" role\x3d"presentation"'];a.width && b.push('style\x3d"width:' + a.width + '" ');b.push("\x3e\x3cinput ");c["aria-labelledby"] = this._.labelId;this._.required && (c["aria-required"] = this._.required);for (var e in c) {
                b.push(e + '\x3d"' + c[e] + '" ');
              }b.push(" /\x3e\x3c/div\x3e");return b.join("");
            });
          }
        }, textarea: function textarea(b, a, d) {
          if (!(3 > arguments.length)) {
            h.call(this, a);var f = this,
                c = this._.inputId = CKEDITOR.tools.getNextId() + "_textarea",
                e = {};a.validate && (this.validate = a.validate);e.rows = a.rows || 5;e.cols = a.cols || 20;e["class"] = "cke_dialog_ui_input_textarea " + (a["class"] || "");"undefined" != typeof a.inputStyle && (e.style = a.inputStyle);a.dir && (e.dir = a.dir);if (f.bidi) b.on("load", function () {
              f.getInputElement().on("keyup", w);
            }, f);CKEDITOR.ui.dialog.labeledElement.call(this, b, a, d, function () {
              e["aria-labelledby"] = this._.labelId;this._.required && (e["aria-required"] = this._.required);var a = ['\x3cdiv class\x3d"cke_dialog_ui_input_textarea" role\x3d"presentation"\x3e\x3ctextarea id\x3d"', c, '" '],
                  b;for (b in e) {
                a.push(b + '\x3d"' + CKEDITOR.tools.htmlEncode(e[b]) + '" ');
              }a.push("\x3e", CKEDITOR.tools.htmlEncode(f._["default"]), "\x3c/textarea\x3e\x3c/div\x3e");return a.join("");
            });
          }
        }, checkbox: function checkbox(b, a, d) {
          if (!(3 > arguments.length)) {
            var f = h.call(this, a, { "default": !!a["default"] });a.validate && (this.validate = a.validate);CKEDITOR.ui.dialog.uiElement.call(this, b, a, d, "span", null, null, function () {
              var c = CKEDITOR.tools.extend({}, a, { id: a.id ? a.id + "_checkbox" : CKEDITOR.tools.getNextId() + "_checkbox" }, !0),
                  e = [],
                  d = CKEDITOR.tools.getNextId() + "_label",
                  g = { "class": "cke_dialog_ui_checkbox_input", type: "checkbox", "aria-labelledby": d };t(c);a["default"] && (g.checked = "checked");"undefined" != typeof c.inputStyle && (c.style = c.inputStyle);
              f.checkbox = new CKEDITOR.ui.dialog.uiElement(b, c, e, "input", null, g);e.push(' \x3clabel id\x3d"', d, '" for\x3d"', g.id, '"' + (a.labelStyle ? ' style\x3d"' + a.labelStyle + '"' : "") + "\x3e", CKEDITOR.tools.htmlEncode(a.label), "\x3c/label\x3e");return e.join("");
            });
          }
        }, radio: function radio(b, a, d) {
          if (!(3 > arguments.length)) {
            h.call(this, a);this._["default"] || (this._["default"] = this._.initValue = a.items[0][1]);a.validate && (this.validate = a.validate);var f = [],
                c = this;a.role = "radiogroup";a.includeLabel = !0;CKEDITOR.ui.dialog.labeledElement.call(this, b, a, d, function () {
              for (var e = [], d = [], g = (a.id ? a.id : CKEDITOR.tools.getNextId()) + "_radio", k = 0; k < a.items.length; k++) {
                var l = a.items[k],
                    h = void 0 !== l[2] ? l[2] : l[0],
                    n = void 0 !== l[1] ? l[1] : l[0],
                    p = CKEDITOR.tools.getNextId() + "_radio_input",
                    q = p + "_label",
                    p = CKEDITOR.tools.extend({}, a, { id: p, title: null, type: null }, !0),
                    h = CKEDITOR.tools.extend({}, p, { title: h }, !0),
                    r = { type: "radio", "class": "cke_dialog_ui_radio_input", name: g, value: n, "aria-labelledby": q },
                    u = [];c._["default"] == n && (r.checked = "checked");t(p);t(h);"undefined" != typeof p.inputStyle && (p.style = p.inputStyle);p.keyboardFocusable = !0;f.push(new CKEDITOR.ui.dialog.uiElement(b, p, u, "input", null, r));u.push(" ");new CKEDITOR.ui.dialog.uiElement(b, h, u, "label", null, { id: q, "for": r.id }, l[0]);e.push(u.join(""));
              }new CKEDITOR.ui.dialog.hbox(b, f, e, d);return d.join("");
            });this._.children = f;
          }
        }, button: function button(b, a, d) {
          if (arguments.length) {
            "function" == typeof a && (a = a(b.getParentEditor()));h.call(this, a, { disabled: a.disabled || !1 });CKEDITOR.event.implementOn(this);var f = this;b.on("load", function () {
              var a = this.getElement();
              (function () {
                a.on("click", function (a) {
                  f.click();a.data.preventDefault();
                });a.on("keydown", function (a) {
                  a.data.getKeystroke() in { 32: 1 } && (f.click(), a.data.preventDefault());
                });
              })();a.unselectable();
            }, this);var c = CKEDITOR.tools.extend({}, a);delete c.style;var e = CKEDITOR.tools.getNextId() + "_label";CKEDITOR.ui.dialog.uiElement.call(this, b, c, d, "a", null, { style: a.style, href: "javascript:void(0)", title: a.label, hidefocus: "true", "class": a["class"], role: "button", "aria-labelledby": e }, '\x3cspan id\x3d"' + e + '" class\x3d"cke_dialog_ui_button"\x3e' + CKEDITOR.tools.htmlEncode(a.label) + "\x3c/span\x3e");
          }
        }, select: function select(b, a, d) {
          if (!(3 > arguments.length)) {
            var f = h.call(this, a);a.validate && (this.validate = a.validate);f.inputId = CKEDITOR.tools.getNextId() + "_select";CKEDITOR.ui.dialog.labeledElement.call(this, b, a, d, function () {
              var c = CKEDITOR.tools.extend({}, a, { id: a.id ? a.id + "_select" : CKEDITOR.tools.getNextId() + "_select" }, !0),
                  e = [],
                  d = [],
                  g = { id: f.inputId, "class": "cke_dialog_ui_input_select", "aria-labelledby": this._.labelId };e.push('\x3cdiv class\x3d"cke_dialog_ui_input_', a.type, '" role\x3d"presentation"');a.width && e.push('style\x3d"width:' + a.width + '" ');e.push("\x3e");void 0 !== a.size && (g.size = a.size);void 0 !== a.multiple && (g.multiple = a.multiple);t(c);for (var k = 0, l; k < a.items.length && (l = a.items[k]); k++) {
                d.push('\x3coption value\x3d"', CKEDITOR.tools.htmlEncode(void 0 !== l[1] ? l[1] : l[0]).replace(/"/g, "\x26quot;"), '" /\x3e ', CKEDITOR.tools.htmlEncode(l[0]));
              }"undefined" != typeof c.inputStyle && (c.style = c.inputStyle);f.select = new CKEDITOR.ui.dialog.uiElement(b, c, e, "select", null, g, d.join(""));e.push("\x3c/div\x3e");return e.join("");
            });
          }
        }, file: function file(b, a, d) {
          if (!(3 > arguments.length)) {
            void 0 === a["default"] && (a["default"] = "");var f = CKEDITOR.tools.extend(h.call(this, a), { definition: a, buttons: [] });a.validate && (this.validate = a.validate);b.on("load", function () {
              CKEDITOR.document.getById(f.frameId).getParent().addClass("cke_dialog_ui_input_file");
            });CKEDITOR.ui.dialog.labeledElement.call(this, b, a, d, function () {
              f.frameId = CKEDITOR.tools.getNextId() + "_fileInput";var b = ['\x3ciframe frameborder\x3d"0" allowtransparency\x3d"0" class\x3d"cke_dialog_ui_input_file" role\x3d"presentation" id\x3d"', f.frameId, '" title\x3d"', a.label, '" src\x3d"javascript:void('];b.push(CKEDITOR.env.ie ? "(function(){" + encodeURIComponent("document.open();(" + CKEDITOR.tools.fixDomain + ")();document.close();") + "})()" : "0");b.push(')"\x3e\x3c/iframe\x3e');return b.join("");
            });
          }
        }, fileButton: function fileButton(b, a, d) {
          var f = this;if (!(3 > arguments.length)) {
            h.call(this, a);a.validate && (this.validate = a.validate);var c = CKEDITOR.tools.extend({}, a),
                e = c.onClick;c.className = (c.className ? c.className + " " : "") + "cke_dialog_ui_button";c.onClick = function (c) {
              var d = a["for"];c = e ? e.call(this, c) : !1;!1 !== c && ("xhr" !== c && b.getContentElement(d[0], d[1]).submit(), this.disable());
            };b.on("load", function () {
              b.getContentElement(a["for"][0], a["for"][1])._.buttons.push(f);
            });CKEDITOR.ui.dialog.button.call(this, b, c, d);
          }
        }, html: function () {
          var b = /^\s*<[\w:]+\s+([^>]*)?>/,
              a = /^(\s*<[\w:]+(?:\s+[^>]*)?)((?:.|\r|\n)+)$/,
              d = /\/$/;return function (f, c, e) {
            if (!(3 > arguments.length)) {
              var m = [],
                  g = c.html;"\x3c" != g.charAt(0) && (g = "\x3cspan\x3e" + g + "\x3c/span\x3e");var k = c.focus;if (k) {
                var l = this.focus;
                this.focus = function () {
                  ("function" == typeof k ? k : l).call(this);this.fire("focus");
                };c.isFocusable && (this.isFocusable = this.isFocusable);this.keyboardFocusable = !0;
              }CKEDITOR.ui.dialog.uiElement.call(this, f, c, m, "span", null, null, "");m = m.join("").match(b);g = g.match(a) || ["", "", ""];d.test(g[1]) && (g[1] = g[1].slice(0, -1), g[2] = "/" + g[2]);e.push([g[1], " ", m[1] || "", g[2]].join(""));
            }
          };
        }(), fieldset: function fieldset(b, a, d, f, c) {
          var e = c.label;this._ = { children: a };CKEDITOR.ui.dialog.uiElement.call(this, b, c, f, "fieldset", null, null, function () {
            var a = [];e && a.push("\x3clegend" + (c.labelStyle ? ' style\x3d"' + c.labelStyle + '"' : "") + "\x3e" + e + "\x3c/legend\x3e");for (var b = 0; b < d.length; b++) {
              a.push(d[b]);
            }return a.join("");
          });
        } }, !0);CKEDITOR.ui.dialog.html.prototype = new CKEDITOR.ui.dialog.uiElement();CKEDITOR.ui.dialog.labeledElement.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement(), { setLabel: function setLabel(b) {
          var a = CKEDITOR.document.getById(this._.labelId);1 > a.getChildCount() ? new CKEDITOR.dom.text(b, CKEDITOR.document).appendTo(a) : a.getChild(0).$.nodeValue = b;return this;
        }, getLabel: function getLabel() {
          var b = CKEDITOR.document.getById(this._.labelId);return !b || 1 > b.getChildCount() ? "" : b.getChild(0).getText();
        }, eventProcessors: r }, !0);CKEDITOR.ui.dialog.button.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement(), { click: function click() {
          return this._.disabled ? !1 : this.fire("click", { dialog: this._.dialog });
        }, enable: function enable() {
          this._.disabled = !1;var b = this.getElement();b && b.removeClass("cke_disabled");
        }, disable: function disable() {
          this._.disabled = !0;this.getElement().addClass("cke_disabled");
        },
        isVisible: function isVisible() {
          return this.getElement().getFirst().isVisible();
        }, isEnabled: function isEnabled() {
          return !this._.disabled;
        }, eventProcessors: CKEDITOR.tools.extend({}, CKEDITOR.ui.dialog.uiElement.prototype.eventProcessors, { onClick: function onClick(b, a) {
            this.on("click", function () {
              a.apply(this, arguments);
            });
          } }, !0), accessKeyUp: function accessKeyUp() {
          this.click();
        }, accessKeyDown: function accessKeyDown() {
          this.focus();
        }, keyboardFocusable: !0 }, !0);CKEDITOR.ui.dialog.textInput.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement(), { getInputElement: function getInputElement() {
          return CKEDITOR.document.getById(this._.inputId);
        },
        focus: function focus() {
          var b = this.selectParentTab();setTimeout(function () {
            var a = b.getInputElement();a && a.$.focus();
          }, 0);
        }, select: function select() {
          var b = this.selectParentTab();setTimeout(function () {
            var a = b.getInputElement();a && (a.$.focus(), a.$.select());
          }, 0);
        }, accessKeyUp: function accessKeyUp() {
          this.select();
        }, setValue: function setValue(b) {
          if (this.bidi) {
            var a = b && b.charAt(0);(a = "‪" == a ? "ltr" : "‫" == a ? "rtl" : null) && (b = b.slice(1));this.setDirectionMarker(a);
          }b || (b = "");return CKEDITOR.ui.dialog.uiElement.prototype.setValue.apply(this, arguments);
        },
        getValue: function getValue() {
          var b = CKEDITOR.ui.dialog.uiElement.prototype.getValue.call(this);if (this.bidi && b) {
            var a = this.getDirectionMarker();a && (b = ("ltr" == a ? "‪" : "‫") + b);
          }return b;
        }, setDirectionMarker: function setDirectionMarker(b) {
          var a = this.getInputElement();b ? a.setAttributes({ dir: b, "data-cke-dir-marker": b }) : this.getDirectionMarker() && a.removeAttributes(["dir", "data-cke-dir-marker"]);
        }, getDirectionMarker: function getDirectionMarker() {
          return this.getInputElement().data("cke-dir-marker");
        }, keyboardFocusable: !0 }, q, !0);CKEDITOR.ui.dialog.textarea.prototype = new CKEDITOR.ui.dialog.textInput();CKEDITOR.ui.dialog.select.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement(), { getInputElement: function getInputElement() {
          return this._.select.getElement();
        }, add: function add(b, a, d) {
          var f = new CKEDITOR.dom.element("option", this.getDialog().getParentEditor().document),
              c = this.getInputElement().$;f.$.text = b;f.$.value = void 0 === a || null === a ? b : a;void 0 === d || null === d ? CKEDITOR.env.ie ? c.add(f.$) : c.add(f.$, null) : c.add(f.$, d);return this;
        }, remove: function remove(b) {
          this.getInputElement().$.remove(b);
          return this;
        }, clear: function clear() {
          for (var b = this.getInputElement().$; 0 < b.length;) {
            b.remove(0);
          }return this;
        }, keyboardFocusable: !0 }, q, !0);CKEDITOR.ui.dialog.checkbox.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement(), { getInputElement: function getInputElement() {
          return this._.checkbox.getElement();
        }, setValue: function setValue(b, a) {
          this.getInputElement().$.checked = b;!a && this.fire("change", { value: b });
        }, getValue: function getValue() {
          return this.getInputElement().$.checked;
        }, accessKeyUp: function accessKeyUp() {
          this.setValue(!this.getValue());
        }, eventProcessors: { onChange: function onChange(b, a) {
            if (!CKEDITOR.env.ie || 8 < CKEDITOR.env.version) return r.onChange.apply(this, arguments);b.on("load", function () {
              var a = this._.checkbox.getElement();a.on("propertychange", function (b) {
                b = b.data.$;"checked" == b.propertyName && this.fire("change", { value: a.$.checked });
              }, this);
            }, this);this.on("change", a);return null;
          } }, keyboardFocusable: !0 }, q, !0);CKEDITOR.ui.dialog.radio.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement(), { setValue: function setValue(b, a) {
          for (var d = this._.children, f, c = 0; c < d.length && (f = d[c]); c++) {
            f.getElement().$.checked = f.getValue() == b;
          }!a && this.fire("change", { value: b });
        }, getValue: function getValue() {
          for (var b = this._.children, a = 0; a < b.length; a++) {
            if (b[a].getElement().$.checked) return b[a].getValue();
          }return null;
        }, accessKeyUp: function accessKeyUp() {
          var b = this._.children,
              a;for (a = 0; a < b.length; a++) {
            if (b[a].getElement().$.checked) {
              b[a].getElement().focus();return;
            }
          }b[0].getElement().focus();
        }, eventProcessors: { onChange: function onChange(b, a) {
            if (!CKEDITOR.env.ie || 8 < CKEDITOR.env.version) return r.onChange.apply(this, arguments);b.on("load", function () {
              for (var a = this._.children, b = this, c = 0; c < a.length; c++) {
                a[c].getElement().on("propertychange", function (a) {
                  a = a.data.$;"checked" == a.propertyName && this.$.checked && b.fire("change", { value: this.getAttribute("value") });
                });
              }
            }, this);this.on("change", a);return null;
          } } }, q, !0);CKEDITOR.ui.dialog.file.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement(), q, { getInputElement: function getInputElement() {
          var b = CKEDITOR.document.getById(this._.frameId).getFrameDocument();return 0 < b.$.forms.length ? new CKEDITOR.dom.element(b.$.forms[0].elements[0]) : this.getElement();
        }, submit: function submit() {
          this.getInputElement().getParent().$.submit();return this;
        }, getAction: function getAction() {
          return this.getInputElement().getParent().$.action;
        }, registerEvents: function registerEvents(b) {
          var a = /^on([A-Z]\w+)/,
              d,
              f = function f(a, b, c, d) {
            a.on("formLoaded", function () {
              a.getInputElement().on(c, d, a);
            });
          },
              c;for (c in b) {
            if (d = c.match(a)) this.eventProcessors[c] ? this.eventProcessors[c].call(this, this._.dialog, b[c]) : f(this, this._.dialog, d[1].toLowerCase(), b[c]);
          }return this;
        }, reset: function reset() {
          function b() {
            d.$.open();
            var b = "";f.size && (b = f.size - (CKEDITOR.env.ie ? 7 : 0));var h = a.frameId + "_input";d.$.write(['\x3chtml dir\x3d"' + g + '" lang\x3d"' + k + '"\x3e\x3chead\x3e\x3ctitle\x3e\x3c/title\x3e\x3c/head\x3e\x3cbody style\x3d"margin: 0; overflow: hidden; background: transparent;"\x3e', '\x3cform enctype\x3d"multipart/form-data" method\x3d"POST" dir\x3d"' + g + '" lang\x3d"' + k + '" action\x3d"', CKEDITOR.tools.htmlEncode(f.action), '"\x3e\x3clabel id\x3d"', a.labelId, '" for\x3d"', h, '" style\x3d"display:none"\x3e', CKEDITOR.tools.htmlEncode(f.label), '\x3c/label\x3e\x3cinput style\x3d"width:100%" id\x3d"', h, '" aria-labelledby\x3d"', a.labelId, '" type\x3d"file" name\x3d"', CKEDITOR.tools.htmlEncode(f.id || "cke_upload"), '" size\x3d"', CKEDITOR.tools.htmlEncode(0 < b ? b : ""), '" /\x3e\x3c/form\x3e\x3c/body\x3e\x3c/html\x3e\x3cscript\x3e', CKEDITOR.env.ie ? "(" + CKEDITOR.tools.fixDomain + ")();" : "", "window.parent.CKEDITOR.tools.callFunction(" + e + ");", "window.onbeforeunload \x3d function() {window.parent.CKEDITOR.tools.callFunction(" + m + ")}", "\x3c/script\x3e"].join(""));
            d.$.close();for (b = 0; b < c.length; b++) {
              c[b].enable();
            }
          }var a = this._,
              d = CKEDITOR.document.getById(a.frameId).getFrameDocument(),
              f = a.definition,
              c = a.buttons,
              e = this.formLoadedNumber,
              m = this.formUnloadNumber,
              g = a.dialog._.editor.lang.dir,
              k = a.dialog._.editor.langCode;e || (e = this.formLoadedNumber = CKEDITOR.tools.addFunction(function () {
            this.fire("formLoaded");
          }, this), m = this.formUnloadNumber = CKEDITOR.tools.addFunction(function () {
            this.getInputElement().clearCustomData();
          }, this), this.getDialog()._.editor.on("destroy", function () {
            CKEDITOR.tools.removeFunction(e);
            CKEDITOR.tools.removeFunction(m);
          }));CKEDITOR.env.gecko ? setTimeout(b, 500) : b();
        }, getValue: function getValue() {
          return this.getInputElement().$.value || "";
        }, setInitValue: function setInitValue() {
          this._.initValue = "";
        }, eventProcessors: { onChange: function onChange(b, a) {
            this._.domOnChangeRegistered || (this.on("formLoaded", function () {
              this.getInputElement().on("change", function () {
                this.fire("change", { value: this.getValue() });
              }, this);
            }, this), this._.domOnChangeRegistered = !0);this.on("change", a);
          } }, keyboardFocusable: !0 }, !0);CKEDITOR.ui.dialog.fileButton.prototype = new CKEDITOR.ui.dialog.button();CKEDITOR.ui.dialog.fieldset.prototype = CKEDITOR.tools.clone(CKEDITOR.ui.dialog.hbox.prototype);CKEDITOR.dialog.addUIElement("text", v);CKEDITOR.dialog.addUIElement("password", v);CKEDITOR.dialog.addUIElement("textarea", n);CKEDITOR.dialog.addUIElement("checkbox", n);CKEDITOR.dialog.addUIElement("radio", n);CKEDITOR.dialog.addUIElement("button", n);CKEDITOR.dialog.addUIElement("select", n);CKEDITOR.dialog.addUIElement("file", n);CKEDITOR.dialog.addUIElement("fileButton", n);CKEDITOR.dialog.addUIElement("html", n);CKEDITOR.dialog.addUIElement("fieldset", { build: function build(b, a, d) {
          for (var f = a.children, c, e = [], h = [], g = 0; g < f.length && (c = f[g]); g++) {
            var k = [];e.push(k);h.push(CKEDITOR.dialog._.uiElementBuilders[c.type].build(b, c, k));
          }return new CKEDITOR.ui.dialog[a.type](b, h, e, d, a);
        } });
    } });CKEDITOR.DIALOG_RESIZE_NONE = 0;CKEDITOR.DIALOG_RESIZE_WIDTH = 1;CKEDITOR.DIALOG_RESIZE_HEIGHT = 2;CKEDITOR.DIALOG_RESIZE_BOTH = 3;CKEDITOR.DIALOG_STATE_IDLE = 1;CKEDITOR.DIALOG_STATE_BUSY = 2;
  (function () {
    function x() {
      for (var a = this._.tabIdList.length, b = CKEDITOR.tools.indexOf(this._.tabIdList, this._.currentTabId) + a, c = b - 1; c > b - a; c--) {
        if (this._.tabs[this._.tabIdList[c % a]][0].$.offsetHeight) return this._.tabIdList[c % a];
      }return null;
    }function A() {
      for (var a = this._.tabIdList.length, b = CKEDITOR.tools.indexOf(this._.tabIdList, this._.currentTabId), c = b + 1; c < b + a; c++) {
        if (this._.tabs[this._.tabIdList[c % a]][0].$.offsetHeight) return this._.tabIdList[c % a];
      }return null;
    }function K(a, b) {
      for (var c = a.$.getElementsByTagName("input"), e = 0, d = c.length; e < d; e++) {
        var f = new CKEDITOR.dom.element(c[e]);"text" == f.getAttribute("type").toLowerCase() && (b ? (f.setAttribute("value", f.getCustomData("fake_value") || ""), f.removeCustomData("fake_value")) : (f.setCustomData("fake_value", f.getAttribute("value")), f.setAttribute("value", "")));
      }
    }function T(a, b) {
      var c = this.getInputElement();c && (a ? c.removeAttribute("aria-invalid") : c.setAttribute("aria-invalid", !0));a || (this.select ? this.select() : this.focus());b && alert(b);this.fire("validated", { valid: a, msg: b });
    }
    function U() {
      var a = this.getInputElement();a && a.removeAttribute("aria-invalid");
    }function V(a) {
      var b = CKEDITOR.dom.element.createFromHtml(CKEDITOR.addTemplate("dialog", W).output({ id: CKEDITOR.tools.getNextNumber(), editorId: a.id, langDir: a.lang.dir, langCode: a.langCode, editorDialogClass: "cke_editor_" + a.name.replace(/\./g, "\\.") + "_dialog", closeTitle: a.lang.common.close, hidpi: CKEDITOR.env.hidpi ? "cke_hidpi" : "" })),
          c = b.getChild([0, 0, 0, 0, 0]),
          e = c.getChild(0),
          d = c.getChild(1);a.plugins.clipboard && CKEDITOR.plugins.clipboard.preventDefaultDropOnElement(c);
      !CKEDITOR.env.ie || CKEDITOR.env.quirks || CKEDITOR.env.edge || (a = "javascript:void(function(){" + encodeURIComponent("document.open();(" + CKEDITOR.tools.fixDomain + ")();document.close();") + "}())", CKEDITOR.dom.element.createFromHtml('\x3ciframe frameBorder\x3d"0" class\x3d"cke_iframe_shim" src\x3d"' + a + '" tabIndex\x3d"-1"\x3e\x3c/iframe\x3e').appendTo(c.getParent()));e.unselectable();d.unselectable();return { element: b, parts: { dialog: b.getChild(0), title: e, close: d, tabs: c.getChild(2), contents: c.getChild([3, 0, 0, 0]),
          footer: c.getChild([3, 0, 1, 0]) } };
    }function L(a, b, c) {
      this.element = b;this.focusIndex = c;this.tabIndex = 0;this.isFocusable = function () {
        return !b.getAttribute("disabled") && b.isVisible();
      };this.focus = function () {
        a._.currentFocusIndex = this.focusIndex;this.element.focus();
      };b.on("keydown", function (a) {
        a.data.getKeystroke() in { 32: 1, 13: 1 } && this.fire("click");
      });b.on("focus", function () {
        this.fire("mouseover");
      });b.on("blur", function () {
        this.fire("mouseout");
      });
    }function X(a) {
      function b() {
        a.layout();
      }var c = CKEDITOR.document.getWindow();
      c.on("resize", b);a.on("hide", function () {
        c.removeListener("resize", b);
      });
    }function M(a, b) {
      this._ = { dialog: a };CKEDITOR.tools.extend(this, b);
    }function Y(a) {
      function b(b) {
        var c = a.getSize(),
            k = CKEDITOR.document.getWindow().getViewPaneSize(),
            q = b.data.$.screenX,
            n = b.data.$.screenY,
            r = q - e.x,
            l = n - e.y;e = { x: q, y: n };d.x += r;d.y += l;a.move(d.x + h[3] < g ? -h[3] : d.x - h[1] > k.width - c.width - g ? k.width - c.width + ("rtl" == f.lang.dir ? 0 : h[1]) : d.x, d.y + h[0] < g ? -h[0] : d.y - h[2] > k.height - c.height - g ? k.height - c.height + h[2] : d.y, 1);b.data.preventDefault();
      }
      function c() {
        CKEDITOR.document.removeListener("mousemove", b);CKEDITOR.document.removeListener("mouseup", c);if (CKEDITOR.env.ie6Compat) {
          var a = u.getChild(0).getFrameDocument();a.removeListener("mousemove", b);a.removeListener("mouseup", c);
        }
      }var e = null,
          d = null,
          f = a.getParentEditor(),
          g = f.config.dialog_magnetDistance,
          h = CKEDITOR.skin.margins || [0, 0, 0, 0];"undefined" == typeof g && (g = 20);a.parts.title.on("mousedown", function (g) {
        e = { x: g.data.$.screenX, y: g.data.$.screenY };CKEDITOR.document.on("mousemove", b);CKEDITOR.document.on("mouseup", c);d = a.getPosition();if (CKEDITOR.env.ie6Compat) {
          var f = u.getChild(0).getFrameDocument();f.on("mousemove", b);f.on("mouseup", c);
        }g.data.preventDefault();
      }, a);
    }function Z(a) {
      function b(b) {
        var c = "rtl" == f.lang.dir,
            n = k.width,
            q = k.height,
            G = n + (b.data.$.screenX - m.x) * (c ? -1 : 1) * (a._.moved ? 1 : 2),
            H = q + (b.data.$.screenY - m.y) * (a._.moved ? 1 : 2),
            B = a._.element.getFirst(),
            B = c && B.getComputedStyle("right"),
            C = a.getPosition();C.y + H > p.height && (H = p.height - C.y);(c ? B : C.x) + G > p.width && (G = p.width - (c ? B : C.x));if (d == CKEDITOR.DIALOG_RESIZE_WIDTH || d == CKEDITOR.DIALOG_RESIZE_BOTH) n = Math.max(e.minWidth || 0, G - g);if (d == CKEDITOR.DIALOG_RESIZE_HEIGHT || d == CKEDITOR.DIALOG_RESIZE_BOTH) q = Math.max(e.minHeight || 0, H - h);a.resize(n, q);a._.moved || a.layout();b.data.preventDefault();
      }function c() {
        CKEDITOR.document.removeListener("mouseup", c);CKEDITOR.document.removeListener("mousemove", b);q && (q.remove(), q = null);if (CKEDITOR.env.ie6Compat) {
          var a = u.getChild(0).getFrameDocument();a.removeListener("mouseup", c);a.removeListener("mousemove", b);
        }
      }var e = a.definition,
          d = e.resizable;
      if (d != CKEDITOR.DIALOG_RESIZE_NONE) {
        var f = a.getParentEditor(),
            g,
            h,
            p,
            m,
            k,
            q,
            n = CKEDITOR.tools.addFunction(function (d) {
          k = a.getSize();var e = a.parts.contents;e.$.getElementsByTagName("iframe").length && (q = CKEDITOR.dom.element.createFromHtml('\x3cdiv class\x3d"cke_dialog_resize_cover" style\x3d"height: 100%; position: absolute; width: 100%;"\x3e\x3c/div\x3e'), e.append(q));h = k.height - a.parts.contents.getSize("height", !(CKEDITOR.env.gecko || CKEDITOR.env.ie && CKEDITOR.env.quirks));g = k.width - a.parts.contents.getSize("width", 1);m = { x: d.screenX, y: d.screenY };p = CKEDITOR.document.getWindow().getViewPaneSize();CKEDITOR.document.on("mousemove", b);CKEDITOR.document.on("mouseup", c);CKEDITOR.env.ie6Compat && (e = u.getChild(0).getFrameDocument(), e.on("mousemove", b), e.on("mouseup", c));d.preventDefault && d.preventDefault();
        });a.on("load", function () {
          var b = "";d == CKEDITOR.DIALOG_RESIZE_WIDTH ? b = " cke_resizer_horizontal" : d == CKEDITOR.DIALOG_RESIZE_HEIGHT && (b = " cke_resizer_vertical");b = CKEDITOR.dom.element.createFromHtml('\x3cdiv class\x3d"cke_resizer' + b + " cke_resizer_" + f.lang.dir + '" title\x3d"' + CKEDITOR.tools.htmlEncode(f.lang.common.resize) + '" onmousedown\x3d"CKEDITOR.tools.callFunction(' + n + ', event )"\x3e' + ("ltr" == f.lang.dir ? "◢" : "◣") + "\x3c/div\x3e");a.parts.footer.append(b, 1);
        });f.on("destroy", function () {
          CKEDITOR.tools.removeFunction(n);
        });
      }
    }function I(a) {
      a.data.preventDefault(1);
    }function N(a) {
      var b = CKEDITOR.document.getWindow(),
          c = a.config,
          e = CKEDITOR.skinName || a.config.skin,
          d = c.dialog_backgroundCoverColor || ("moono-lisa" == e ? "black" : "white"),
          e = c.dialog_backgroundCoverOpacity,
          f = c.baseFloatZIndex,
          c = CKEDITOR.tools.genKey(d, e, f),
          g = z[c];g ? g.show() : (f = ['\x3cdiv tabIndex\x3d"-1" style\x3d"position: ', CKEDITOR.env.ie6Compat ? "absolute" : "fixed", "; z-index: ", f, "; top: 0px; left: 0px; ", CKEDITOR.env.ie6Compat ? "" : "background-color: " + d, '" class\x3d"cke_dialog_background_cover"\x3e'], CKEDITOR.env.ie6Compat && (d = "\x3chtml\x3e\x3cbody style\x3d\\'background-color:" + d + ";\\'\x3e\x3c/body\x3e\x3c/html\x3e", f.push('\x3ciframe hidefocus\x3d"true" frameborder\x3d"0" id\x3d"cke_dialog_background_iframe" src\x3d"javascript:'), f.push("void((function(){" + encodeURIComponent("document.open();(" + CKEDITOR.tools.fixDomain + ")();document.write( '" + d + "' );document.close();") + "})())"), f.push('" style\x3d"position:absolute;left:0;top:0;width:100%;height: 100%;filter: progid:DXImageTransform.Microsoft.Alpha(opacity\x3d0)"\x3e\x3c/iframe\x3e')), f.push("\x3c/div\x3e"), g = CKEDITOR.dom.element.createFromHtml(f.join("")), g.setOpacity(void 0 !== e ? e : .5), g.on("keydown", I), g.on("keypress", I), g.on("keyup", I), g.appendTo(CKEDITOR.document.getBody()), z[c] = g);a.focusManager.add(g);u = g;a = function a() {
        var a = b.getViewPaneSize();g.setStyles({ width: a.width + "px", height: a.height + "px" });
      };var h = function h() {
        var a = b.getScrollPosition(),
            c = CKEDITOR.dialog._.currentTop;g.setStyles({ left: a.x + "px", top: a.y + "px" });if (c) {
          do {
            a = c.getPosition(), c.move(a.x, a.y);
          } while (c = c._.parentDialog);
        }
      };J = a;b.on("resize", a);a();CKEDITOR.env.mac && CKEDITOR.env.webkit || g.focus();if (CKEDITOR.env.ie6Compat) {
        var p = function p() {
          h();arguments.callee.prevScrollHandler.apply(this, arguments);
        };b.$.setTimeout(function () {
          p.prevScrollHandler = window.onscroll || function () {};window.onscroll = p;
        }, 0);h();
      }
    }function O(a) {
      u && (a.focusManager.remove(u), a = CKEDITOR.document.getWindow(), u.hide(), a.removeListener("resize", J), CKEDITOR.env.ie6Compat && a.$.setTimeout(function () {
        window.onscroll = window.onscroll && window.onscroll.prevScrollHandler || null;
      }, 0), J = null);
    }var v = CKEDITOR.tools.cssLength,
        W = '\x3cdiv class\x3d"cke_reset_all {editorId} {editorDialogClass} {hidpi}" dir\x3d"{langDir}" lang\x3d"{langCode}" role\x3d"dialog" aria-labelledby\x3d"cke_dialog_title_{id}"\x3e\x3ctable class\x3d"cke_dialog ' + CKEDITOR.env.cssClass + ' cke_{langDir}" style\x3d"position:absolute" role\x3d"presentation"\x3e\x3ctr\x3e\x3ctd role\x3d"presentation"\x3e\x3cdiv class\x3d"cke_dialog_body" role\x3d"presentation"\x3e\x3cdiv id\x3d"cke_dialog_title_{id}" class\x3d"cke_dialog_title" role\x3d"presentation"\x3e\x3c/div\x3e\x3ca id\x3d"cke_dialog_close_button_{id}" class\x3d"cke_dialog_close_button" href\x3d"javascript:void(0)" title\x3d"{closeTitle}" role\x3d"button"\x3e\x3cspan class\x3d"cke_label"\x3eX\x3c/span\x3e\x3c/a\x3e\x3cdiv id\x3d"cke_dialog_tabs_{id}" class\x3d"cke_dialog_tabs" role\x3d"tablist"\x3e\x3c/div\x3e\x3ctable class\x3d"cke_dialog_contents" role\x3d"presentation"\x3e\x3ctr\x3e\x3ctd id\x3d"cke_dialog_contents_{id}" class\x3d"cke_dialog_contents_body" role\x3d"presentation"\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd id\x3d"cke_dialog_footer_{id}" class\x3d"cke_dialog_footer" role\x3d"presentation"\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e';
    CKEDITOR.dialog = function (a, b) {
      function c() {
        var a = l._.focusList;a.sort(function (a, b) {
          return a.tabIndex != b.tabIndex ? b.tabIndex - a.tabIndex : a.focusIndex - b.focusIndex;
        });for (var b = a.length, c = 0; c < b; c++) {
          a[c].focusIndex = c;
        }
      }function e(a) {
        var b = l._.focusList;a = a || 0;if (!(1 > b.length)) {
          var c = l._.currentFocusIndex;l._.tabBarMode && 0 > a && (c = 0);try {
            b[c].getInputElement().$.blur();
          } catch (d) {}var e = c,
              g = 1 < l._.pageCount;do {
            e += a;if (g && !l._.tabBarMode && (e == b.length || -1 == e)) {
              l._.tabBarMode = !0;l._.tabs[l._.currentTabId][0].focus();
              l._.currentFocusIndex = -1;return;
            }e = (e + b.length) % b.length;if (e == c) break;
          } while (a && !b[e].isFocusable());b[e].focus();"text" == b[e].type && b[e].select();
        }
      }function d(b) {
        if (l == CKEDITOR.dialog._.currentTop) {
          var c = b.data.getKeystroke(),
              d = "rtl" == a.lang.dir,
              g = [37, 38, 39, 40];q = n = 0;if (9 == c || c == CKEDITOR.SHIFT + 9) e(c == CKEDITOR.SHIFT + 9 ? -1 : 1), q = 1;else if (c == CKEDITOR.ALT + 121 && !l._.tabBarMode && 1 < l.getPageCount()) l._.tabBarMode = !0, l._.tabs[l._.currentTabId][0].focus(), l._.currentFocusIndex = -1, q = 1;else if (-1 != CKEDITOR.tools.indexOf(g, c) && l._.tabBarMode) c = -1 != CKEDITOR.tools.indexOf([d ? 39 : 37, 38], c) ? x.call(l) : A.call(l), l.selectPage(c), l._.tabs[c][0].focus(), q = 1;else if (13 != c && 32 != c || !l._.tabBarMode) {
            if (13 == c) c = b.data.getTarget(), c.is("a", "button", "select", "textarea") || c.is("input") && "button" == c.$.type || ((c = this.getButton("ok")) && CKEDITOR.tools.setTimeout(c.click, 0, c), q = 1), n = 1;else if (27 == c) (c = this.getButton("cancel")) ? CKEDITOR.tools.setTimeout(c.click, 0, c) : !1 !== this.fire("cancel", { hide: !0 }).hide && this.hide(), n = 1;else return;
          } else this.selectPage(this._.currentTabId), this._.tabBarMode = !1, this._.currentFocusIndex = -1, e(1), q = 1;f(b);
        }
      }function f(a) {
        q ? a.data.preventDefault(1) : n && a.data.stopPropagation();
      }var g = CKEDITOR.dialog._.dialogDefinitions[b],
          h = CKEDITOR.tools.clone(aa),
          p = a.config.dialog_buttonsOrder || "OS",
          m = a.lang.dir,
          k = {},
          q,
          n;("OS" == p && CKEDITOR.env.mac || "rtl" == p && "ltr" == m || "ltr" == p && "rtl" == m) && h.buttons.reverse();g = CKEDITOR.tools.extend(g(a), h);g = CKEDITOR.tools.clone(g);g = new P(this, g);h = V(a);this._ = { editor: a, element: h.element, name: b, contentSize: { width: 0, height: 0 },
        size: { width: 0, height: 0 }, contents: {}, buttons: {}, accessKeyMap: {}, tabs: {}, tabIdList: [], currentTabId: null, currentTabIndex: null, pageCount: 0, lastTab: null, tabBarMode: !1, focusList: [], currentFocusIndex: 0, hasFocus: !1 };this.parts = h.parts;CKEDITOR.tools.setTimeout(function () {
        a.fire("ariaWidget", this.parts.contents);
      }, 0, this);h = { position: CKEDITOR.env.ie6Compat ? "absolute" : "fixed", top: 0, visibility: "hidden" };h["rtl" == m ? "right" : "left"] = 0;this.parts.dialog.setStyles(h);CKEDITOR.event.call(this);this.definition = g = CKEDITOR.fire("dialogDefinition", { name: b, definition: g }, a).definition;if (!("removeDialogTabs" in a._) && a.config.removeDialogTabs) {
        h = a.config.removeDialogTabs.split(";");for (m = 0; m < h.length; m++) {
          if (p = h[m].split(":"), 2 == p.length) {
            var r = p[0];k[r] || (k[r] = []);k[r].push(p[1]);
          }
        }a._.removeDialogTabs = k;
      }if (a._.removeDialogTabs && (k = a._.removeDialogTabs[b])) for (m = 0; m < k.length; m++) {
        g.removeContents(k[m]);
      }if (g.onLoad) this.on("load", g.onLoad);if (g.onShow) this.on("show", g.onShow);if (g.onHide) this.on("hide", g.onHide);if (g.onOk) this.on("ok", function (b) {
        a.fire("saveSnapshot");
        setTimeout(function () {
          a.fire("saveSnapshot");
        }, 0);!1 === g.onOk.call(this, b) && (b.data.hide = !1);
      });this.state = CKEDITOR.DIALOG_STATE_IDLE;if (g.onCancel) this.on("cancel", function (a) {
        !1 === g.onCancel.call(this, a) && (a.data.hide = !1);
      });var l = this,
          t = function t(a) {
        var b = l._.contents,
            c = !1,
            d;for (d in b) {
          for (var e in b[d]) {
            if (c = a.call(this, b[d][e])) return;
          }
        }
      };this.on("ok", function (a) {
        t(function (b) {
          if (b.validate) {
            var c = b.validate(this),
                d = "string" == typeof c || !1 === c;d && (a.data.hide = !1, a.stop());T.call(b, !d, "string" == typeof c ? c : void 0);return d;
          }
        });
      }, this, null, 0);this.on("cancel", function (b) {
        t(function (c) {
          if (c.isChanged()) return a.config.dialog_noConfirmCancel || confirm(a.lang.common.confirmCancel) || (b.data.hide = !1), !0;
        });
      }, this, null, 0);this.parts.close.on("click", function (a) {
        !1 !== this.fire("cancel", { hide: !0 }).hide && this.hide();a.data.preventDefault();
      }, this);this.changeFocus = e;var y = this._.element;a.focusManager.add(y, 1);this.on("show", function () {
        y.on("keydown", d, this);if (CKEDITOR.env.gecko) y.on("keypress", f, this);
      });this.on("hide", function () {
        y.removeListener("keydown", d);CKEDITOR.env.gecko && y.removeListener("keypress", f);t(function (a) {
          U.apply(a);
        });
      });this.on("iframeAdded", function (a) {
        new CKEDITOR.dom.document(a.data.iframe.$.contentWindow.document).on("keydown", d, this, null, 0);
      });this.on("show", function () {
        c();var b = 1 < l._.pageCount;a.config.dialog_startupFocusTab && b ? (l._.tabBarMode = !0, l._.tabs[l._.currentTabId][0].focus(), l._.currentFocusIndex = -1) : this._.hasFocus || (this._.currentFocusIndex = b ? -1 : this._.focusList.length - 1, g.onFocus ? (b = g.onFocus.call(this)) && b.focus() : e(1));
      }, this, null, 4294967295);if (CKEDITOR.env.ie6Compat) this.on("load", function () {
        var a = this.getElement(),
            b = a.getFirst();b.remove();b.appendTo(a);
      }, this);Y(this);Z(this);new CKEDITOR.dom.text(g.title, CKEDITOR.document).appendTo(this.parts.title);for (m = 0; m < g.contents.length; m++) {
        (k = g.contents[m]) && this.addPage(k);
      }this.parts.tabs.on("click", function (a) {
        var b = a.data.getTarget();b.hasClass("cke_dialog_tab") && (b = b.$.id, this.selectPage(b.substring(4, b.lastIndexOf("_"))), this._.tabBarMode && (this._.tabBarMode = !1, this._.currentFocusIndex = -1, e(1)), a.data.preventDefault());
      }, this);m = [];k = CKEDITOR.dialog._.uiElementBuilders.hbox.build(this, { type: "hbox", className: "cke_dialog_footer_buttons", widths: [], children: g.buttons }, m).getChild();this.parts.footer.setHtml(m.join(""));for (m = 0; m < k.length; m++) {
        this._.buttons[k[m].id] = k[m];
      }
    };CKEDITOR.dialog.prototype = { destroy: function destroy() {
        this.hide();this._.element.remove();
      }, resize: function () {
        return function (a, b) {
          this._.contentSize && this._.contentSize.width == a && this._.contentSize.height == b || (CKEDITOR.dialog.fire("resize", { dialog: this, width: a, height: b }, this._.editor), this.fire("resize", { width: a, height: b }, this._.editor), this.parts.contents.setStyles({ width: a + "px", height: b + "px" }), "rtl" == this._.editor.lang.dir && this._.position && (this._.position.x = CKEDITOR.document.getWindow().getViewPaneSize().width - this._.contentSize.width - parseInt(this._.element.getFirst().getStyle("right"), 10)), this._.contentSize = { width: a, height: b });
        };
      }(), getSize: function getSize() {
        var a = this._.element.getFirst();
        return { width: a.$.offsetWidth || 0, height: a.$.offsetHeight || 0 };
      }, move: function move(a, b, c) {
        var e = this._.element.getFirst(),
            d = "rtl" == this._.editor.lang.dir,
            f = "fixed" == e.getComputedStyle("position");CKEDITOR.env.ie && e.setStyle("zoom", "100%");f && this._.position && this._.position.x == a && this._.position.y == b || (this._.position = { x: a, y: b }, f || (f = CKEDITOR.document.getWindow().getScrollPosition(), a += f.x, b += f.y), d && (f = this.getSize(), a = CKEDITOR.document.getWindow().getViewPaneSize().width - f.width - a), b = { top: (0 < b ? b : 0) + "px" }, b[d ? "right" : "left"] = (0 < a ? a : 0) + "px", e.setStyles(b), c && (this._.moved = 1));
      }, getPosition: function getPosition() {
        return CKEDITOR.tools.extend({}, this._.position);
      }, show: function show() {
        var a = this._.element,
            b = this.definition;a.getParent() && a.getParent().equals(CKEDITOR.document.getBody()) ? a.setStyle("display", "block") : a.appendTo(CKEDITOR.document.getBody());this.resize(this._.contentSize && this._.contentSize.width || b.width || b.minWidth, this._.contentSize && this._.contentSize.height || b.height || b.minHeight);this.reset();null === this._.currentTabId && this.selectPage(this.definition.contents[0].id);null === CKEDITOR.dialog._.currentZIndex && (CKEDITOR.dialog._.currentZIndex = this._.editor.config.baseFloatZIndex);this._.element.getFirst().setStyle("z-index", CKEDITOR.dialog._.currentZIndex += 10);null === CKEDITOR.dialog._.currentTop ? (CKEDITOR.dialog._.currentTop = this, this._.parentDialog = null, N(this._.editor)) : (this._.parentDialog = CKEDITOR.dialog._.currentTop, this._.parentDialog.getElement().getFirst().$.style.zIndex -= Math.floor(this._.editor.config.baseFloatZIndex / 2), CKEDITOR.dialog._.currentTop = this);a.on("keydown", Q);a.on("keyup", R);this._.hasFocus = !1;for (var c in b.contents) {
          if (b.contents[c]) {
            var a = b.contents[c],
                e = this._.tabs[a.id],
                d = a.requiredContent,
                f = 0;if (e) {
              for (var g in this._.contents[a.id]) {
                var h = this._.contents[a.id][g];"hbox" != h.type && "vbox" != h.type && h.getInputElement() && (h.requiredContent && !this._.editor.activeFilter.check(h.requiredContent) ? h.disable() : (h.enable(), f++));
              }!f || d && !this._.editor.activeFilter.check(d) ? e[0].addClass("cke_dialog_tab_disabled") : e[0].removeClass("cke_dialog_tab_disabled");
            }
          }
        }CKEDITOR.tools.setTimeout(function () {
          this.layout();X(this);this.parts.dialog.setStyle("visibility", "");this.fireOnce("load", {});CKEDITOR.ui.fire("ready", this);this.fire("show", {});this._.editor.fire("dialogShow", this);this._.parentDialog || this._.editor.focusManager.lock();this.foreach(function (a) {
            a.setInitValue && a.setInitValue();
          });
        }, 100, this);
      }, layout: function layout() {
        var a = this.parts.dialog,
            b = this.getSize(),
            c = CKEDITOR.document.getWindow().getViewPaneSize(),
            e = (c.width - b.width) / 2,
            d = (c.height - b.height) / 2;CKEDITOR.env.ie6Compat || (b.height + (0 < d ? d : 0) > c.height || b.width + (0 < e ? e : 0) > c.width ? a.setStyle("position", "absolute") : a.setStyle("position", "fixed"));this.move(this._.moved ? this._.position.x : e, this._.moved ? this._.position.y : d);
      }, foreach: function foreach(a) {
        for (var b in this._.contents) {
          for (var c in this._.contents[b]) {
            a.call(this, this._.contents[b][c]);
          }
        }return this;
      }, reset: function () {
        var a = function a(_a7) {
          _a7.reset && _a7.reset(1);
        };return function () {
          this.foreach(a);return this;
        };
      }(),
      setupContent: function setupContent() {
        var a = arguments;this.foreach(function (b) {
          b.setup && b.setup.apply(b, a);
        });
      }, commitContent: function commitContent() {
        var a = arguments;this.foreach(function (b) {
          CKEDITOR.env.ie && this._.currentFocusIndex == b.focusIndex && b.getInputElement().$.blur();b.commit && b.commit.apply(b, a);
        });
      }, hide: function hide() {
        if (this.parts.dialog.isVisible()) {
          this.fire("hide", {});this._.editor.fire("dialogHide", this);this.selectPage(this._.tabIdList[0]);var a = this._.element;a.setStyle("display", "none");this.parts.dialog.setStyle("visibility", "hidden");for (ba(this); CKEDITOR.dialog._.currentTop != this;) {
            CKEDITOR.dialog._.currentTop.hide();
          }if (this._.parentDialog) {
            var b = this._.parentDialog.getElement().getFirst();b.setStyle("z-index", parseInt(b.$.style.zIndex, 10) + Math.floor(this._.editor.config.baseFloatZIndex / 2));
          } else O(this._.editor);if (CKEDITOR.dialog._.currentTop = this._.parentDialog) CKEDITOR.dialog._.currentZIndex -= 10;else {
            CKEDITOR.dialog._.currentZIndex = null;a.removeListener("keydown", Q);a.removeListener("keyup", R);var c = this._.editor;
            c.focus();setTimeout(function () {
              c.focusManager.unlock();CKEDITOR.env.iOS && c.window.focus();
            }, 0);
          }delete this._.parentDialog;this.foreach(function (a) {
            a.resetInitValue && a.resetInitValue();
          });this.setState(CKEDITOR.DIALOG_STATE_IDLE);
        }
      }, addPage: function addPage(a) {
        if (!a.requiredContent || this._.editor.filter.check(a.requiredContent)) {
          for (var b = [], c = a.label ? ' title\x3d"' + CKEDITOR.tools.htmlEncode(a.label) + '"' : "", e = CKEDITOR.dialog._.uiElementBuilders.vbox.build(this, { type: "vbox", className: "cke_dialog_page_contents",
            children: a.elements, expand: !!a.expand, padding: a.padding, style: a.style || "width: 100%;" }, b), d = this._.contents[a.id] = {}, f = e.getChild(), g = 0; e = f.shift();) {
            e.notAllowed || "hbox" == e.type || "vbox" == e.type || g++, d[e.id] = e, "function" == typeof e.getChild && f.push.apply(f, e.getChild());
          }g || (a.hidden = !0);b = CKEDITOR.dom.element.createFromHtml(b.join(""));b.setAttribute("role", "tabpanel");e = CKEDITOR.env;d = "cke_" + a.id + "_" + CKEDITOR.tools.getNextNumber();c = CKEDITOR.dom.element.createFromHtml(['\x3ca class\x3d"cke_dialog_tab"', 0 < this._.pageCount ? " cke_last" : "cke_first", c, a.hidden ? ' style\x3d"display:none"' : "", ' id\x3d"', d, '"', e.gecko && !e.hc ? "" : ' href\x3d"javascript:void(0)"', ' tabIndex\x3d"-1" hidefocus\x3d"true" role\x3d"tab"\x3e', a.label, "\x3c/a\x3e"].join(""));b.setAttribute("aria-labelledby", d);this._.tabs[a.id] = [c, b];this._.tabIdList.push(a.id);!a.hidden && this._.pageCount++;this._.lastTab = c;this.updateStyle();b.setAttribute("name", a.id);b.appendTo(this.parts.contents);c.unselectable();this.parts.tabs.append(c);a.accessKey && (S(this, this, "CTRL+" + a.accessKey, ca, da), this._.accessKeyMap["CTRL+" + a.accessKey] = a.id);
        }
      }, selectPage: function selectPage(a) {
        if (this._.currentTabId != a && !this._.tabs[a][0].hasClass("cke_dialog_tab_disabled") && !1 !== this.fire("selectPage", { page: a, currentPage: this._.currentTabId })) {
          for (var b in this._.tabs) {
            var c = this._.tabs[b][0],
                e = this._.tabs[b][1];b != a && (c.removeClass("cke_dialog_tab_selected"), e.hide());e.setAttribute("aria-hidden", b != a);
          }var d = this._.tabs[a];d[0].addClass("cke_dialog_tab_selected");CKEDITOR.env.ie6Compat || CKEDITOR.env.ie7Compat ? (K(d[1]), d[1].show(), setTimeout(function () {
            K(d[1], 1);
          }, 0)) : d[1].show();this._.currentTabId = a;this._.currentTabIndex = CKEDITOR.tools.indexOf(this._.tabIdList, a);
        }
      }, updateStyle: function updateStyle() {
        this.parts.dialog[(1 === this._.pageCount ? "add" : "remove") + "Class"]("cke_single_page");
      }, hidePage: function hidePage(a) {
        var b = this._.tabs[a] && this._.tabs[a][0];b && 1 != this._.pageCount && b.isVisible() && (a == this._.currentTabId && this.selectPage(x.call(this)), b.hide(), this._.pageCount--, this.updateStyle());
      }, showPage: function showPage(a) {
        if (a = this._.tabs[a] && this._.tabs[a][0]) a.show(), this._.pageCount++, this.updateStyle();
      }, getElement: function getElement() {
        return this._.element;
      }, getName: function getName() {
        return this._.name;
      }, getContentElement: function getContentElement(a, b) {
        var c = this._.contents[a];return c && c[b];
      }, getValueOf: function getValueOf(a, b) {
        return this.getContentElement(a, b).getValue();
      }, setValueOf: function setValueOf(a, b, c) {
        return this.getContentElement(a, b).setValue(c);
      }, getButton: function getButton(a) {
        return this._.buttons[a];
      }, click: function click(a) {
        return this._.buttons[a].click();
      }, disableButton: function disableButton(a) {
        return this._.buttons[a].disable();
      },
      enableButton: function enableButton(a) {
        return this._.buttons[a].enable();
      }, getPageCount: function getPageCount() {
        return this._.pageCount;
      }, getParentEditor: function getParentEditor() {
        return this._.editor;
      }, getSelectedElement: function getSelectedElement() {
        return this.getParentEditor().getSelection().getSelectedElement();
      }, addFocusable: function addFocusable(a, b) {
        if ("undefined" == typeof b) b = this._.focusList.length, this._.focusList.push(new L(this, a, b));else {
          this._.focusList.splice(b, 0, new L(this, a, b));for (var c = b + 1; c < this._.focusList.length; c++) {
            this._.focusList[c].focusIndex++;
          }
        }
      },
      setState: function setState(a) {
        if (this.state != a) {
          this.state = a;if (a == CKEDITOR.DIALOG_STATE_BUSY) {
            if (!this.parts.spinner) {
              var b = this.getParentEditor().lang.dir,
                  c = { attributes: { "class": "cke_dialog_spinner" }, styles: { "float": "rtl" == b ? "right" : "left" } };c.styles["margin-" + ("rtl" == b ? "left" : "right")] = "8px";this.parts.spinner = CKEDITOR.document.createElement("div", c);this.parts.spinner.setHtml("\x26#8987;");this.parts.spinner.appendTo(this.parts.title, 1);
            }this.parts.spinner.show();this.getButton("ok").disable();
          } else a == CKEDITOR.DIALOG_STATE_IDLE && (this.parts.spinner && this.parts.spinner.hide(), this.getButton("ok").enable());this.fire("state", a);
        }
      } };CKEDITOR.tools.extend(CKEDITOR.dialog, { add: function add(a, b) {
        this._.dialogDefinitions[a] && "function" != typeof b || (this._.dialogDefinitions[a] = b);
      }, exists: function exists(a) {
        return !!this._.dialogDefinitions[a];
      }, getCurrent: function getCurrent() {
        return CKEDITOR.dialog._.currentTop;
      }, isTabEnabled: function isTabEnabled(a, b, c) {
        a = a.config.removeDialogTabs;return !(a && a.match(new RegExp("(?:^|;)" + b + ":" + c + "(?:$|;)", "i")));
      }, okButton: function () {
        var a = function a(_a8, c) {
          c = c || {};return CKEDITOR.tools.extend({ id: "ok", type: "button", label: _a8.lang.common.ok, "class": "cke_dialog_ui_button_ok", onClick: function onClick(a) {
              a = a.data.dialog;!1 !== a.fire("ok", { hide: !0 }).hide && a.hide();
            } }, c, !0);
        };a.type = "button";a.override = function (b) {
          return CKEDITOR.tools.extend(function (c) {
            return a(c, b);
          }, { type: "button" }, !0);
        };return a;
      }(), cancelButton: function () {
        var a = function a(_a9, c) {
          c = c || {};return CKEDITOR.tools.extend({ id: "cancel", type: "button", label: _a9.lang.common.cancel,
            "class": "cke_dialog_ui_button_cancel", onClick: function onClick(a) {
              a = a.data.dialog;!1 !== a.fire("cancel", { hide: !0 }).hide && a.hide();
            } }, c, !0);
        };a.type = "button";a.override = function (b) {
          return CKEDITOR.tools.extend(function (c) {
            return a(c, b);
          }, { type: "button" }, !0);
        };return a;
      }(), addUIElement: function addUIElement(a, b) {
        this._.uiElementBuilders[a] = b;
      } });CKEDITOR.dialog._ = { uiElementBuilders: {}, dialogDefinitions: {}, currentTop: null, currentZIndex: null };CKEDITOR.event.implementOn(CKEDITOR.dialog);CKEDITOR.event.implementOn(CKEDITOR.dialog.prototype);
    var aa = { resizable: CKEDITOR.DIALOG_RESIZE_BOTH, minWidth: 600, minHeight: 400, buttons: [CKEDITOR.dialog.okButton, CKEDITOR.dialog.cancelButton] },
        D = function D(a, b, c) {
      for (var e = 0, d; d = a[e]; e++) {
        if (d.id == b || c && d[c] && (d = D(d[c], b, c))) return d;
      }return null;
    },
        E = function E(a, b, c, e, d) {
      if (c) {
        for (var f = 0, g; g = a[f]; f++) {
          if (g.id == c) return a.splice(f, 0, b), b;if (e && g[e] && (g = E(g[e], b, c, e, !0))) return g;
        }if (d) return null;
      }a.push(b);return b;
    },
        F = function F(a, b, c) {
      for (var e = 0, d; d = a[e]; e++) {
        if (d.id == b) return a.splice(e, 1);if (c && d[c] && (d = F(d[c], b, c))) return d;
      }return null;
    },
        P = function P(a, b) {
      this.dialog = a;for (var c = b.contents, e = 0, d; d = c[e]; e++) {
        c[e] = d && new M(a, d);
      }CKEDITOR.tools.extend(this, b);
    };P.prototype = { getContents: function getContents(a) {
        return D(this.contents, a);
      }, getButton: function getButton(a) {
        return D(this.buttons, a);
      }, addContents: function addContents(a, b) {
        return E(this.contents, a, b);
      }, addButton: function addButton(a, b) {
        return E(this.buttons, a, b);
      }, removeContents: function removeContents(a) {
        F(this.contents, a);
      }, removeButton: function removeButton(a) {
        F(this.buttons, a);
      } };M.prototype = { get: function get(a) {
        return D(this.elements, a, "children");
      }, add: function add(a, b) {
        return E(this.elements, a, b, "children");
      }, remove: function remove(a) {
        F(this.elements, a, "children");
      } };var J,
        z = {},
        u,
        w = {},
        Q = function Q(a) {
      var b = a.data.$.ctrlKey || a.data.$.metaKey,
          c = a.data.$.altKey,
          e = a.data.$.shiftKey,
          d = String.fromCharCode(a.data.$.keyCode);(b = w[(b ? "CTRL+" : "") + (c ? "ALT+" : "") + (e ? "SHIFT+" : "") + d]) && b.length && (b = b[b.length - 1], b.keydown && b.keydown.call(b.uiElement, b.dialog, b.key), a.data.preventDefault());
    },
        R = function R(a) {
      var b = a.data.$.ctrlKey || a.data.$.metaKey,
          c = a.data.$.altKey,
          e = a.data.$.shiftKey,
          d = String.fromCharCode(a.data.$.keyCode);(b = w[(b ? "CTRL+" : "") + (c ? "ALT+" : "") + (e ? "SHIFT+" : "") + d]) && b.length && (b = b[b.length - 1], b.keyup && (b.keyup.call(b.uiElement, b.dialog, b.key), a.data.preventDefault()));
    },
        S = function S(a, b, c, e, d) {
      (w[c] || (w[c] = [])).push({ uiElement: a, dialog: b, key: c, keyup: d || a.accessKeyUp, keydown: e || a.accessKeyDown });
    },
        ba = function ba(a) {
      for (var b in w) {
        for (var c = w[b], e = c.length - 1; 0 <= e; e--) {
          c[e].dialog != a && c[e].uiElement != a || c.splice(e, 1);
        }0 === c.length && delete w[b];
      }
    },
        da = function da(a, b) {
      a._.accessKeyMap[b] && a.selectPage(a._.accessKeyMap[b]);
    },
        ca = function ca() {};(function () {
      CKEDITOR.ui.dialog = { uiElement: function uiElement(a, b, c, e, d, f, g) {
          if (!(4 > arguments.length)) {
            var h = (e.call ? e(b) : e) || "div",
                p = ["\x3c", h, " "],
                m = (d && d.call ? d(b) : d) || {},
                k = (f && f.call ? f(b) : f) || {},
                q = (g && g.call ? g.call(this, a, b) : g) || "",
                n = this.domId = k.id || CKEDITOR.tools.getNextId() + "_uiElement";b.requiredContent && !a.getParentEditor().filter.check(b.requiredContent) && (m.display = "none", this.notAllowed = !0);k.id = n;var r = {};b.type && (r["cke_dialog_ui_" + b.type] = 1);b.className && (r[b.className] = 1);b.disabled && (r.cke_disabled = 1);for (var l = k["class"] && k["class"].split ? k["class"].split(" ") : [], n = 0; n < l.length; n++) {
              l[n] && (r[l[n]] = 1);
            }l = [];for (n in r) {
              l.push(n);
            }k["class"] = l.join(" ");b.title && (k.title = b.title);r = (b.style || "").split(";");b.align && (l = b.align, m["margin-left"] = "left" == l ? 0 : "auto", m["margin-right"] = "right" == l ? 0 : "auto");for (n in m) {
              r.push(n + ":" + m[n]);
            }b.hidden && r.push("display:none");for (n = r.length - 1; 0 <= n; n--) {
              "" === r[n] && r.splice(n, 1);
            }0 < r.length && (k.style = (k.style ? k.style + "; " : "") + r.join("; "));for (n in k) {
              p.push(n + '\x3d"' + CKEDITOR.tools.htmlEncode(k[n]) + '" ');
            }p.push("\x3e", q, "\x3c/", h, "\x3e");c.push(p.join(""));(this._ || (this._ = {})).dialog = a;"boolean" == typeof b.isChanged && (this.isChanged = function () {
              return b.isChanged;
            });"function" == typeof b.isChanged && (this.isChanged = b.isChanged);"function" == typeof b.setValue && (this.setValue = CKEDITOR.tools.override(this.setValue, function (a) {
              return function (c) {
                a.call(this, b.setValue.call(this, c));
              };
            }));"function" == typeof b.getValue && (this.getValue = CKEDITOR.tools.override(this.getValue, function (a) {
              return function () {
                return b.getValue.call(this, a.call(this));
              };
            }));CKEDITOR.event.implementOn(this);this.registerEvents(b);this.accessKeyUp && this.accessKeyDown && b.accessKey && S(this, a, "CTRL+" + b.accessKey);var t = this;a.on("load", function () {
              var b = t.getInputElement();if (b) {
                var c = t.type in { checkbox: 1, ratio: 1 } && CKEDITOR.env.ie && 8 > CKEDITOR.env.version ? "cke_dialog_ui_focused" : "";b.on("focus", function () {
                  a._.tabBarMode = !1;a._.hasFocus = !0;t.fire("focus");
                  c && this.addClass(c);
                });b.on("blur", function () {
                  t.fire("blur");c && this.removeClass(c);
                });
              }
            });CKEDITOR.tools.extend(this, b);this.keyboardFocusable && (this.tabIndex = b.tabIndex || 0, this.focusIndex = a._.focusList.push(this) - 1, this.on("focus", function () {
              a._.currentFocusIndex = t.focusIndex;
            }));
          }
        }, hbox: function hbox(a, b, c, e, d) {
          if (!(4 > arguments.length)) {
            this._ || (this._ = {});var f = this._.children = b,
                g = d && d.widths || null,
                h = d && d.height || null,
                p,
                m = { role: "presentation" };d && d.align && (m.align = d.align);CKEDITOR.ui.dialog.uiElement.call(this, a, d || { type: "hbox" }, e, "table", {}, m, function () {
              var a = ['\x3ctbody\x3e\x3ctr class\x3d"cke_dialog_ui_hbox"\x3e'];for (p = 0; p < c.length; p++) {
                var b = "cke_dialog_ui_hbox_child",
                    e = [];0 === p && (b = "cke_dialog_ui_hbox_first");p == c.length - 1 && (b = "cke_dialog_ui_hbox_last");a.push('\x3ctd class\x3d"', b, '" role\x3d"presentation" ');g ? g[p] && e.push("width:" + v(g[p])) : e.push("width:" + Math.floor(100 / c.length) + "%");h && e.push("height:" + v(h));d && void 0 !== d.padding && e.push("padding:" + v(d.padding));CKEDITOR.env.ie && CKEDITOR.env.quirks && f[p].align && e.push("text-align:" + f[p].align);0 < e.length && a.push('style\x3d"' + e.join("; ") + '" ');a.push("\x3e", c[p], "\x3c/td\x3e");
              }a.push("\x3c/tr\x3e\x3c/tbody\x3e");return a.join("");
            });
          }
        }, vbox: function vbox(a, b, c, e, d) {
          if (!(3 > arguments.length)) {
            this._ || (this._ = {});var f = this._.children = b,
                g = d && d.width || null,
                h = d && d.heights || null;CKEDITOR.ui.dialog.uiElement.call(this, a, d || { type: "vbox" }, e, "div", null, { role: "presentation" }, function () {
              var b = ['\x3ctable role\x3d"presentation" cellspacing\x3d"0" border\x3d"0" '];
              b.push('style\x3d"');d && d.expand && b.push("height:100%;");b.push("width:" + v(g || "100%"), ";");CKEDITOR.env.webkit && b.push("float:none;");b.push('"');b.push('align\x3d"', CKEDITOR.tools.htmlEncode(d && d.align || ("ltr" == a.getParentEditor().lang.dir ? "left" : "right")), '" ');b.push("\x3e\x3ctbody\x3e");for (var e = 0; e < c.length; e++) {
                var k = [];b.push('\x3ctr\x3e\x3ctd role\x3d"presentation" ');g && k.push("width:" + v(g || "100%"));h ? k.push("height:" + v(h[e])) : d && d.expand && k.push("height:" + Math.floor(100 / c.length) + "%");
                d && void 0 !== d.padding && k.push("padding:" + v(d.padding));CKEDITOR.env.ie && CKEDITOR.env.quirks && f[e].align && k.push("text-align:" + f[e].align);0 < k.length && b.push('style\x3d"', k.join("; "), '" ');b.push(' class\x3d"cke_dialog_ui_vbox_child"\x3e', c[e], "\x3c/td\x3e\x3c/tr\x3e");
              }b.push("\x3c/tbody\x3e\x3c/table\x3e");return b.join("");
            });
          }
        } };
    })();CKEDITOR.ui.dialog.uiElement.prototype = { getElement: function getElement() {
        return CKEDITOR.document.getById(this.domId);
      }, getInputElement: function getInputElement() {
        return this.getElement();
      }, getDialog: function getDialog() {
        return this._.dialog;
      },
      setValue: function setValue(a, b) {
        this.getInputElement().setValue(a);!b && this.fire("change", { value: a });return this;
      }, getValue: function getValue() {
        return this.getInputElement().getValue();
      }, isChanged: function isChanged() {
        return !1;
      }, selectParentTab: function selectParentTab() {
        for (var a = this.getInputElement(); (a = a.getParent()) && -1 == a.$.className.search("cke_dialog_page_contents");) {}if (!a) return this;a = a.getAttribute("name");this._.dialog._.currentTabId != a && this._.dialog.selectPage(a);return this;
      }, focus: function focus() {
        this.selectParentTab().getInputElement().focus();
        return this;
      }, registerEvents: function registerEvents(a) {
        var b = /^on([A-Z]\w+)/,
            c,
            e = function e(a, b, c, d) {
          b.on("load", function () {
            a.getInputElement().on(c, d, a);
          });
        },
            d;for (d in a) {
          if (c = d.match(b)) this.eventProcessors[d] ? this.eventProcessors[d].call(this, this._.dialog, a[d]) : e(this, this._.dialog, c[1].toLowerCase(), a[d]);
        }return this;
      }, eventProcessors: { onLoad: function onLoad(a, b) {
          a.on("load", b, this);
        }, onShow: function onShow(a, b) {
          a.on("show", b, this);
        }, onHide: function onHide(a, b) {
          a.on("hide", b, this);
        } }, accessKeyDown: function accessKeyDown() {
        this.focus();
      }, accessKeyUp: function accessKeyUp() {},
      disable: function disable() {
        var a = this.getElement();this.getInputElement().setAttribute("disabled", "true");a.addClass("cke_disabled");
      }, enable: function enable() {
        var a = this.getElement();this.getInputElement().removeAttribute("disabled");a.removeClass("cke_disabled");
      }, isEnabled: function isEnabled() {
        return !this.getElement().hasClass("cke_disabled");
      }, isVisible: function isVisible() {
        return this.getInputElement().isVisible();
      }, isFocusable: function isFocusable() {
        return this.isEnabled() && this.isVisible() ? !0 : !1;
      } };CKEDITOR.ui.dialog.hbox.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement(), { getChild: function getChild(a) {
        if (1 > arguments.length) return this._.children.concat();a.splice || (a = [a]);return 2 > a.length ? this._.children[a[0]] : this._.children[a[0]] && this._.children[a[0]].getChild ? this._.children[a[0]].getChild(a.slice(1, a.length)) : null;
      } }, !0);CKEDITOR.ui.dialog.vbox.prototype = new CKEDITOR.ui.dialog.hbox();(function () {
      var a = { build: function build(a, c, e) {
          for (var d = c.children, f, g = [], h = [], p = 0; p < d.length && (f = d[p]); p++) {
            var m = [];g.push(m);h.push(CKEDITOR.dialog._.uiElementBuilders[f.type].build(a, f, m));
          }return new CKEDITOR.ui.dialog[c.type](a, h, g, e, c);
        } };CKEDITOR.dialog.addUIElement("hbox", a);CKEDITOR.dialog.addUIElement("vbox", a);
    })();CKEDITOR.dialogCommand = function (a, b) {
      this.dialogName = a;CKEDITOR.tools.extend(this, b, !0);
    };CKEDITOR.dialogCommand.prototype = { exec: function exec(a) {
        var b = this.tabId;a.openDialog(this.dialogName, function (a) {
          b && a.selectPage(b);
        });
      }, canUndo: !1, editorFocus: 1 };(function () {
      var a = /^([a]|[^a])+$/,
          b = /^\d*$/,
          c = /^\d*(?:\.\d+)?$/,
          e = /^(((\d*(\.\d+))|(\d*))(px|\%)?)?$/,
          d = /^(((\d*(\.\d+))|(\d*))(px|em|ex|in|cm|mm|pt|pc|\%)?)?$/i,
          f = /^(\s*[\w-]+\s*:\s*[^:;]+(?:;|$))*$/;CKEDITOR.VALIDATE_OR = 1;CKEDITOR.VALIDATE_AND = 2;CKEDITOR.dialog.validate = { functions: function functions() {
          var a = arguments;return function () {
            var b = this && this.getValue ? this.getValue() : a[0],
                c,
                d = CKEDITOR.VALIDATE_AND,
                e = [],
                f;for (f = 0; f < a.length; f++) {
              if ("function" == typeof a[f]) e.push(a[f]);else break;
            }f < a.length && "string" == typeof a[f] && (c = a[f], f++);f < a.length && "number" == typeof a[f] && (d = a[f]);var n = d == CKEDITOR.VALIDATE_AND ? !0 : !1;for (f = 0; f < e.length; f++) {
              n = d == CKEDITOR.VALIDATE_AND ? n && e[f](b) : n || e[f](b);
            }return n ? !0 : c;
          };
        }, regex: function regex(a, b) {
          return function (c) {
            c = this && this.getValue ? this.getValue() : c;return a.test(c) ? !0 : b;
          };
        }, notEmpty: function notEmpty(b) {
          return this.regex(a, b);
        }, integer: function integer(a) {
          return this.regex(b, a);
        }, number: function number(a) {
          return this.regex(c, a);
        }, cssLength: function cssLength(a) {
          return this.functions(function (a) {
            return d.test(CKEDITOR.tools.trim(a));
          }, a);
        }, htmlLength: function htmlLength(a) {
          return this.functions(function (a) {
            return e.test(CKEDITOR.tools.trim(a));
          }, a);
        }, inlineStyle: function inlineStyle(a) {
          return this.functions(function (a) {
            return f.test(CKEDITOR.tools.trim(a));
          }, a);
        }, equals: function equals(a, b) {
          return this.functions(function (b) {
            return b == a;
          }, b);
        }, notEqual: function notEqual(a, b) {
          return this.functions(function (b) {
            return b != a;
          }, b);
        } };CKEDITOR.on("instanceDestroyed", function (a) {
        if (CKEDITOR.tools.isEmpty(CKEDITOR.instances)) {
          for (var b; b = CKEDITOR.dialog._.currentTop;) {
            b.hide();
          }for (var c in z) {
            z[c].remove();
          }z = {};
        }a = a.editor._.storedDialogs;for (var d in a) {
          a[d].destroy();
        }
      });
    })();CKEDITOR.tools.extend(CKEDITOR.editor.prototype, { openDialog: function openDialog(a, b) {
        var c = null,
            e = CKEDITOR.dialog._.dialogDefinitions[a];
        null === CKEDITOR.dialog._.currentTop && N(this);if ("function" == typeof e) c = this._.storedDialogs || (this._.storedDialogs = {}), c = c[a] || (c[a] = new CKEDITOR.dialog(this, a)), b && b.call(c, c), c.show();else {
          if ("failed" == e) throw O(this), Error('[CKEDITOR.dialog.openDialog] Dialog "' + a + '" failed when loading definition.');"string" == typeof e && CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(e), function () {
            "function" != typeof CKEDITOR.dialog._.dialogDefinitions[a] && (CKEDITOR.dialog._.dialogDefinitions[a] = "failed");this.openDialog(a, b);
          }, this, 0, 1);
        }CKEDITOR.skin.loadPart("dialog");return c;
      } });
  })();CKEDITOR.plugins.add("dialog", { requires: "dialogui", init: function init(x) {
      x.on("doubleclick", function (A) {
        A.data.dialog && x.openDialog(A.data.dialog);
      }, null, null, 999);
    } });CKEDITOR.plugins.add("about", { requires: "dialog", init: function init(a) {
      var b = a.addCommand("about", new CKEDITOR.dialogCommand("about"));b.modes = { wysiwyg: 1, source: 1 };b.canUndo = !1;b.readOnly = 1;a.ui.addButton && a.ui.addButton("About", { label: a.lang.about.dlgTitle, command: "about", toolbar: "about" });CKEDITOR.dialog.add("about", this.path + "dialogs/about.js");
    } });CKEDITOR.plugins.add("basicstyles", { init: function init(c) {
      var e = 0,
          d = function d(g, _d, b, a) {
        if (a) {
          a = new CKEDITOR.style(a);var f = h[b];f.unshift(a);c.attachStyleStateChange(a, function (a) {
            !c.readOnly && c.getCommand(b).setState(a);
          });c.addCommand(b, new CKEDITOR.styleCommand(a, { contentForms: f }));c.ui.addButton && c.ui.addButton(g, { label: _d, command: b, toolbar: "basicstyles," + (e += 10) });
        }
      },
          h = { bold: ["strong", "b", ["span", function (a) {
          a = a.styles["font-weight"];return "bold" == a || 700 <= +a;
        }]], italic: ["em", "i", ["span", function (a) {
          return "italic" == a.styles["font-style"];
        }]], underline: ["u", ["span", function (a) {
          return "underline" == a.styles["text-decoration"];
        }]], strike: ["s", "strike", ["span", function (a) {
          return "line-through" == a.styles["text-decoration"];
        }]], subscript: ["sub"], superscript: ["sup"] },
          b = c.config,
          a = c.lang.basicstyles;d("Bold", a.bold, "bold", b.coreStyles_bold);d("Italic", a.italic, "italic", b.coreStyles_italic);d("Underline", a.underline, "underline", b.coreStyles_underline);d("Strike", a.strike, "strike", b.coreStyles_strike);d("Subscript", a.subscript, "subscript", b.coreStyles_subscript);d("Superscript", a.superscript, "superscript", b.coreStyles_superscript);c.setKeystroke([[CKEDITOR.CTRL + 66, "bold"], [CKEDITOR.CTRL + 73, "italic"], [CKEDITOR.CTRL + 85, "underline"]]);
    } });CKEDITOR.config.coreStyles_bold = { element: "strong", overrides: "b" };CKEDITOR.config.coreStyles_italic = { element: "em", overrides: "i" };CKEDITOR.config.coreStyles_underline = { element: "u" };CKEDITOR.config.coreStyles_strike = { element: "s", overrides: "strike" };CKEDITOR.config.coreStyles_subscript = { element: "sub" };
  CKEDITOR.config.coreStyles_superscript = { element: "sup" };(function () {
    function q(b, a) {
      CKEDITOR.tools.extend(this, a, { editor: b, id: "cke-" + CKEDITOR.tools.getUniqueId(), area: b._.notificationArea });a.type || (this.type = "info");this.element = this._createElement();b.plugins.clipboard && CKEDITOR.plugins.clipboard.preventDefaultDropOnElement(this.element);
    }function r(b) {
      var a = this;this.editor = b;this.notifications = [];this.element = this._createElement();this._uiBuffer = CKEDITOR.tools.eventsBuffer(10, this._layout, this);this._changeBuffer = CKEDITOR.tools.eventsBuffer(500, this._layout, this);b.on("destroy", function () {
        a._removeListeners();a.element.remove();
      });
    }CKEDITOR.plugins.add("notification", { init: function init(b) {
        function a(b) {
          var a = new CKEDITOR.dom.element("div");a.setStyles({ position: "fixed", "margin-left": "-9999px" });a.setAttributes({ "aria-live": "assertive", "aria-atomic": "true" });a.setText(b);CKEDITOR.document.getBody().append(a);setTimeout(function () {
            a.remove();
          }, 100);
        }b._.notificationArea = new r(b);b.showNotification = function (a, d, e) {
          var f, l;"progress" == d ? f = e : l = e;a = new CKEDITOR.plugins.notification(b, { message: a, type: d, progress: f, duration: l });a.show();return a;
        };b.on("key", function (c) {
          if (27 == c.data.keyCode) {
            var d = b._.notificationArea.notifications;d.length && (a(b.lang.notification.closed), d[d.length - 1].hide(), c.cancel());
          }
        });
      } });q.prototype = { show: function show() {
        !1 !== this.editor.fire("notificationShow", { notification: this }) && (this.area.add(this), this._hideAfterTimeout());
      }, update: function update(b) {
        var a = !0;!1 === this.editor.fire("notificationUpdate", { notification: this, options: b }) && (a = !1);var c = this.element,
            d = c.findOne(".cke_notification_message"),
            e = c.findOne(".cke_notification_progress"),
            f = b.type;c.removeAttribute("role");b.progress && "progress" != this.type && (f = "progress");f && (c.removeClass(this._getClass()), c.removeAttribute("aria-label"), this.type = f, c.addClass(this._getClass()), c.setAttribute("aria-label", this.type), "progress" != this.type || e ? "progress" != this.type && e && e.remove() : (e = this._createProgressElement(), e.insertBefore(d)));void 0 !== b.message && (this.message = b.message, d.setHtml(this.message));void 0 !== b.progress && (this.progress = b.progress, e && e.setStyle("width", this._getPercentageProgress()));a && b.important && (c.setAttribute("role", "alert"), this.isVisible() || this.area.add(this));this.duration = b.duration;this._hideAfterTimeout();
      }, hide: function hide() {
        !1 !== this.editor.fire("notificationHide", { notification: this }) && this.area.remove(this);
      }, isVisible: function isVisible() {
        return 0 <= CKEDITOR.tools.indexOf(this.area.notifications, this);
      }, _createElement: function _createElement() {
        var b = this,
            a,
            c,
            d = this.editor.lang.common.close;a = new CKEDITOR.dom.element("div");a.addClass("cke_notification");
        a.addClass(this._getClass());a.setAttributes({ id: this.id, role: "alert", "aria-label": this.type });"progress" == this.type && a.append(this._createProgressElement());c = new CKEDITOR.dom.element("p");c.addClass("cke_notification_message");c.setHtml(this.message);a.append(c);c = CKEDITOR.dom.element.createFromHtml('\x3ca class\x3d"cke_notification_close" href\x3d"javascript:void(0)" title\x3d"' + d + '" role\x3d"button" tabindex\x3d"-1"\x3e\x3cspan class\x3d"cke_label"\x3eX\x3c/span\x3e\x3c/a\x3e');a.append(c);c.on("click", function () {
          b.editor.focus();b.hide();
        });return a;
      }, _getClass: function _getClass() {
        return "progress" == this.type ? "cke_notification_info" : "cke_notification_" + this.type;
      }, _createProgressElement: function _createProgressElement() {
        var b = new CKEDITOR.dom.element("span");b.addClass("cke_notification_progress");b.setStyle("width", this._getPercentageProgress());return b;
      }, _getPercentageProgress: function _getPercentageProgress() {
        return Math.round(100 * (this.progress || 0)) + "%";
      }, _hideAfterTimeout: function _hideAfterTimeout() {
        var b = this,
            a;this._hideTimeoutId && clearTimeout(this._hideTimeoutId);
        if ("number" == typeof this.duration) a = this.duration;else if ("info" == this.type || "success" == this.type) a = "number" == typeof this.editor.config.notification_duration ? this.editor.config.notification_duration : 5E3;a && (b._hideTimeoutId = setTimeout(function () {
          b.hide();
        }, a));
      } };r.prototype = { add: function add(b) {
        this.notifications.push(b);this.element.append(b.element);1 == this.element.getChildCount() && (CKEDITOR.document.getBody().append(this.element), this._attachListeners());this._layout();
      }, remove: function remove(b) {
        var a = CKEDITOR.tools.indexOf(this.notifications, b);0 > a || (this.notifications.splice(a, 1), b.element.remove(), this.element.getChildCount() || (this._removeListeners(), this.element.remove()));
      }, _createElement: function _createElement() {
        var b = this.editor,
            a = b.config,
            c = new CKEDITOR.dom.element("div");c.addClass("cke_notifications_area");c.setAttribute("id", "cke_notifications_area_" + b.name);c.setStyle("z-index", a.baseFloatZIndex - 2);return c;
      }, _attachListeners: function _attachListeners() {
        var b = CKEDITOR.document.getWindow(),
            a = this.editor;b.on("scroll", this._uiBuffer.input);b.on("resize", this._uiBuffer.input);
        a.on("change", this._changeBuffer.input);a.on("floatingSpaceLayout", this._layout, this, null, 20);a.on("blur", this._layout, this, null, 20);
      }, _removeListeners: function _removeListeners() {
        var b = CKEDITOR.document.getWindow(),
            a = this.editor;b.removeListener("scroll", this._uiBuffer.input);b.removeListener("resize", this._uiBuffer.input);a.removeListener("change", this._changeBuffer.input);a.removeListener("floatingSpaceLayout", this._layout);a.removeListener("blur", this._layout);
      }, _layout: function _layout() {
        function b() {
          a.setStyle("left", k(n + d.width - g - h));
        }var a = this.element,
            c = this.editor,
            d = c.ui.contentsElement.getClientRect(),
            e = c.ui.contentsElement.getDocumentPosition(),
            f,
            l,
            u = a.getClientRect(),
            m,
            g = this._notificationWidth,
            h = this._notificationMargin;m = CKEDITOR.document.getWindow();var p = m.getScrollPosition(),
            t = m.getViewPaneSize(),
            q = CKEDITOR.document.getBody(),
            r = q.getDocumentPosition(),
            k = CKEDITOR.tools.cssLength;g && h || (m = this.element.getChild(0), g = this._notificationWidth = m.getClientRect().width, h = this._notificationMargin = parseInt(m.getComputedStyle("margin-left"), 10) + parseInt(m.getComputedStyle("margin-right"), 10));c.toolbar && (f = c.ui.space("top"), l = f.getClientRect());f && f.isVisible() && l.bottom > d.top && l.bottom < d.bottom - u.height ? a.setStyles({ position: "fixed", top: k(l.bottom) }) : 0 < d.top ? a.setStyles({ position: "absolute", top: k(e.y) }) : e.y + d.height - u.height > p.y ? a.setStyles({ position: "fixed", top: 0 }) : a.setStyles({ position: "absolute", top: k(e.y + d.height - u.height) });var n = "fixed" == a.getStyle("position") ? d.left : "static" != q.getComputedStyle("position") ? e.x - r.x : e.x;d.width < g + h ? e.x + g + h > p.x + t.width ? b() : a.setStyle("left", k(n)) : e.x + g + h > p.x + t.width ? a.setStyle("left", k(n)) : e.x + d.width / 2 + g / 2 + h > p.x + t.width ? a.setStyle("left", k(n - e.x + p.x + t.width - g - h)) : 0 > d.left + d.width - g - h ? b() : 0 > d.left + d.width / 2 - g / 2 ? a.setStyle("left", k(n - e.x + p.x)) : a.setStyle("left", k(n + d.width / 2 - g / 2 - h / 2));
      } };CKEDITOR.plugins.notification = q;
  })();(function () {
    var c = '\x3ca id\x3d"{id}" class\x3d"cke_button cke_button__{name} cke_button_{state} {cls}"' + (CKEDITOR.env.gecko && !CKEDITOR.env.hc ? "" : " href\x3d\"javascript:void('{titleJs}')\"") + ' title\x3d"{title}" tabindex\x3d"-1" hidefocus\x3d"true" role\x3d"button" aria-labelledby\x3d"{id}_label" aria-describedby\x3d"{id}_description" aria-haspopup\x3d"{hasArrow}" aria-disabled\x3d"{ariaDisabled}"';CKEDITOR.env.gecko && CKEDITOR.env.mac && (c += ' onkeypress\x3d"return false;"');CKEDITOR.env.gecko && (c += ' onblur\x3d"this.style.cssText \x3d this.style.cssText;"');var c = c + (' onkeydown\x3d"return CKEDITOR.tools.callFunction({keydownFn},event);" onfocus\x3d"return CKEDITOR.tools.callFunction({focusFn},event);" ' + (CKEDITOR.env.ie ? 'onclick\x3d"return false;" onmouseup' : "onclick") + '\x3d"CKEDITOR.tools.callFunction({clickFn},this);return false;"\x3e\x3cspan class\x3d"cke_button_icon cke_button__{iconName}_icon" style\x3d"{style}"'),
        c = c + '\x3e\x26nbsp;\x3c/span\x3e\x3cspan id\x3d"{id}_label" class\x3d"cke_button_label cke_button__{name}_label" aria-hidden\x3d"false"\x3e{label}\x3c/span\x3e\x3cspan id\x3d"{id}_description" class\x3d"cke_button_label" aria-hidden\x3d"false"\x3e{ariaShortcut}\x3c/span\x3e{arrowHtml}\x3c/a\x3e',
        v = CKEDITOR.addTemplate("buttonArrow", '\x3cspan class\x3d"cke_button_arrow"\x3e' + (CKEDITOR.env.hc ? "\x26#9660;" : "") + "\x3c/span\x3e"),
        w = CKEDITOR.addTemplate("button", c);CKEDITOR.plugins.add("button", { beforeInit: function beforeInit(a) {
        a.ui.addHandler(CKEDITOR.UI_BUTTON, CKEDITOR.ui.button.handler);
      } });CKEDITOR.UI_BUTTON = "button";CKEDITOR.ui.button = function (a) {
      CKEDITOR.tools.extend(this, a, { title: a.label, click: a.click || function (b) {
          b.execCommand(a.command);
        } });this._ = {};
    };CKEDITOR.ui.button.handler = { create: function create(a) {
        return new CKEDITOR.ui.button(a);
      } };
    CKEDITOR.ui.button.prototype = { render: function render(a, b) {
        function c() {
          var f = a.mode;f && (f = this.modes[f] ? void 0 !== n[f] ? n[f] : CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, f = a.readOnly && !this.readOnly ? CKEDITOR.TRISTATE_DISABLED : f, this.setState(f), this.refresh && this.refresh());
        }var n = null,
            p = CKEDITOR.env,
            q = this._.id = CKEDITOR.tools.getNextId(),
            g = "",
            d = this.command,
            t,
            k,
            l;this._.editor = a;var e = { id: q, button: this, editor: a, focus: function focus() {
            CKEDITOR.document.getById(q).focus();
          }, execute: function execute() {
            this.button.click(a);
          },
          attach: function attach(a) {
            this.button.attach(a);
          } },
            x = CKEDITOR.tools.addFunction(function (a) {
          if (e.onkey) return a = new CKEDITOR.dom.event(a), !1 !== e.onkey(e, a.getKeystroke());
        }),
            y = CKEDITOR.tools.addFunction(function (a) {
          var b;e.onfocus && (b = !1 !== e.onfocus(e, new CKEDITOR.dom.event(a)));return b;
        }),
            u = 0;e.clickFn = t = CKEDITOR.tools.addFunction(function () {
          u && (a.unlockSelection(1), u = 0);e.execute();p.iOS && a.focus();
        });this.modes ? (n = {}, a.on("beforeModeUnload", function () {
          a.mode && this._.state != CKEDITOR.TRISTATE_DISABLED && (n[a.mode] = this._.state);
        }, this), a.on("activeFilterChange", c, this), a.on("mode", c, this), !this.readOnly && a.on("readOnly", c, this)) : d && (d = a.getCommand(d)) && (d.on("state", function () {
          this.setState(d.state);
        }, this), g += d.state == CKEDITOR.TRISTATE_ON ? "on" : d.state == CKEDITOR.TRISTATE_DISABLED ? "disabled" : "off");var m;if (this.directional) a.on("contentDirChanged", function (b) {
          var c = CKEDITOR.document.getById(this._.id),
              d = c.getFirst();b = b.data;b != a.lang.dir ? c.addClass("cke_" + b) : c.removeClass("cke_ltr").removeClass("cke_rtl");d.setAttribute("style", CKEDITOR.skin.getIconStyle(m, "rtl" == b, this.icon, this.iconOffset));
        }, this);d ? (k = a.getCommandKeystroke(d)) && (l = CKEDITOR.tools.keystrokeToString(a.lang.common.keyboard, k)) : g += "off";k = this.name || this.command;var h = null,
            r = this.icon;m = k;this.icon && !/\./.test(this.icon) ? (m = this.icon, r = null) : (this.icon && (h = this.icon), CKEDITOR.env.hidpi && this.iconHiDpi && (h = this.iconHiDpi));h ? (CKEDITOR.skin.addIcon(h, h), r = null) : h = m;g = { id: q, name: k, iconName: m, label: this.label, cls: this.className || "", state: g, ariaDisabled: "disabled" == g ? "true" : "false", title: this.title + (l ? " (" + l.display + ")" : ""), ariaShortcut: l ? a.lang.common.keyboardShortcut + " " + l.aria : "", titleJs: p.gecko && !p.hc ? "" : (this.title || "").replace("'", ""), hasArrow: this.hasArrow ? "true" : "false", keydownFn: x, focusFn: y, clickFn: t, style: CKEDITOR.skin.getIconStyle(h, "rtl" == a.lang.dir, r, this.iconOffset), arrowHtml: this.hasArrow ? v.output() : "" };w.output(g, b);if (this.onRender) this.onRender();return e;
      }, setState: function setState(a) {
        if (this._.state == a) return !1;this._.state = a;var b = CKEDITOR.document.getById(this._.id);
        return b ? (b.setState(a, "cke_button"), a == CKEDITOR.TRISTATE_DISABLED ? b.setAttribute("aria-disabled", !0) : b.removeAttribute("aria-disabled"), this.hasArrow ? (a = a == CKEDITOR.TRISTATE_ON ? this._.editor.lang.button.selectedLabel.replace(/%1/g, this.label) : this.label, CKEDITOR.document.getById(this._.id + "_label").setText(a)) : a == CKEDITOR.TRISTATE_ON ? b.setAttribute("aria-pressed", !0) : b.removeAttribute("aria-pressed"), !0) : !1;
      }, getState: function getState() {
        return this._.state;
      }, toFeature: function toFeature(a) {
        if (this._.feature) return this._.feature;
        var b = this;this.allowedContent || this.requiredContent || !this.command || (b = a.getCommand(this.command) || b);return this._.feature = b;
      } };CKEDITOR.ui.prototype.addButton = function (a, b) {
      this.add(a, CKEDITOR.UI_BUTTON, b);
    };
  })();(function () {
    function D(a) {
      function d() {
        for (var b = f(), e = CKEDITOR.tools.clone(a.config.toolbarGroups) || v(a), n = 0; n < e.length; n++) {
          var g = e[n];if ("/" != g) {
            "string" == typeof g && (g = e[n] = { name: g });var l,
                d = g.groups;if (d) for (var h = 0; h < d.length; h++) {
              l = d[h], (l = b[l]) && c(g, l);
            }(l = b[g.name]) && c(g, l);
          }
        }return e;
      }function f() {
        var b = {},
            c,
            e,
            g;for (c in a.ui.items) {
          e = a.ui.items[c], g = e.toolbar || "others", g = g.split(","), e = g[0], g = parseInt(g[1] || -1, 10), b[e] || (b[e] = []), b[e].push({ name: c, order: g });
        }for (e in b) {
          b[e] = b[e].sort(function (b, a) {
            return b.order == a.order ? 0 : 0 > a.order ? -1 : 0 > b.order ? 1 : b.order < a.order ? -1 : 1;
          });
        }return b;
      }function c(c, e) {
        if (e.length) {
          c.items ? c.items.push(a.ui.create("-")) : c.items = [];for (var d; d = e.shift();) {
            d = "string" == typeof d ? d : d.name, b && -1 != CKEDITOR.tools.indexOf(b, d) || (d = a.ui.create(d)) && a.addFeature(d) && c.items.push(d);
          }
        }
      }function h(b) {
        var a = [],
            e,
            d,
            h;for (e = 0; e < b.length; ++e) {
          d = b[e], h = {}, "/" == d ? a.push(d) : CKEDITOR.tools.isArray(d) ? (c(h, CKEDITOR.tools.clone(d)), a.push(h)) : d.items && (c(h, CKEDITOR.tools.clone(d.items)), h.name = d.name, a.push(h));
        }return a;
      }var b = a.config.removeButtons,
          b = b && b.split(","),
          e = a.config.toolbar;"string" == typeof e && (e = a.config["toolbar_" + e]);return a.toolbar = e ? h(e) : d();
    }function v(a) {
      return a._.toolbarGroups || (a._.toolbarGroups = [{ name: "document", groups: ["mode", "document", "doctools"] }, { name: "clipboard", groups: ["clipboard", "undo"] }, { name: "editing", groups: ["find", "selection", "spellchecker"] }, { name: "forms" }, "/", { name: "basicstyles", groups: ["basicstyles", "cleanup"] }, { name: "paragraph", groups: ["list", "indent", "blocks", "align", "bidi"] }, { name: "links" }, { name: "insert" }, "/", { name: "styles" }, { name: "colors" }, { name: "tools" }, { name: "others" }, { name: "about" }]);
    }var z = function z() {
      this.toolbars = [];this.focusCommandExecuted = !1;
    };z.prototype.focus = function () {
      for (var a = 0, d; d = this.toolbars[a++];) {
        for (var f = 0, c; c = d.items[f++];) {
          if (c.focus) {
            c.focus();return;
          }
        }
      }
    };var E = { modes: { wysiwyg: 1, source: 1 }, readOnly: 1, exec: function exec(a) {
        a.toolbox && (a.toolbox.focusCommandExecuted = !0, CKEDITOR.env.ie || CKEDITOR.env.air ? setTimeout(function () {
          a.toolbox.focus();
        }, 100) : a.toolbox.focus());
      } };CKEDITOR.plugins.add("toolbar", { requires: "button", init: function init(a) {
        var d,
            f = function f(c, h) {
          var b,
              e = "rtl" == a.lang.dir,
              k = a.config.toolbarGroupCycling,
              q = e ? 37 : 39,
              e = e ? 39 : 37,
              k = void 0 === k || k;switch (h) {case 9:case CKEDITOR.SHIFT + 9:
              for (; !b || !b.items.length;) {
                if (b = 9 == h ? (b ? b.next : c.toolbar.next) || a.toolbox.toolbars[0] : (b ? b.previous : c.toolbar.previous) || a.toolbox.toolbars[a.toolbox.toolbars.length - 1], b.items.length) for (c = b.items[d ? b.items.length - 1 : 0]; c && !c.focus;) {
                  (c = d ? c.previous : c.next) || (b = 0);
                }
              }c && c.focus();return !1;case q:
              b = c;do {
                b = b.next, !b && k && (b = c.toolbar.items[0]);
              } while (b && !b.focus);b ? b.focus() : f(c, 9);return !1;case 40:
              return c.button && c.button.hasArrow ? c.execute() : f(c, 40 == h ? q : e), !1;case e:case 38:
              b = c;do {
                b = b.previous, !b && k && (b = c.toolbar.items[c.toolbar.items.length - 1]);
              } while (b && !b.focus);b ? b.focus() : (d = 1, f(c, CKEDITOR.SHIFT + 9), d = 0);return !1;case 27:
              return a.focus(), !1;case 13:case 32:
              return c.execute(), !1;}return !0;
        };a.on("uiSpace", function (c) {
          if (c.data.space == a.config.toolbarLocation) {
            c.removeListener();
            a.toolbox = new z();var d = CKEDITOR.tools.getNextId(),
                b = ['\x3cspan id\x3d"', d, '" class\x3d"cke_voice_label"\x3e', a.lang.toolbar.toolbars, "\x3c/span\x3e", '\x3cspan id\x3d"' + a.ui.spaceId("toolbox") + '" class\x3d"cke_toolbox" role\x3d"group" aria-labelledby\x3d"', d, '" onmousedown\x3d"return false;"\x3e'],
                d = !1 !== a.config.toolbarStartupExpanded,
                e,
                k;a.config.toolbarCanCollapse && a.elementMode != CKEDITOR.ELEMENT_MODE_INLINE && b.push('\x3cspan class\x3d"cke_toolbox_main"' + (d ? "\x3e" : ' style\x3d"display:none"\x3e'));
            for (var q = a.toolbox.toolbars, n = D(a), g = n.length, l = 0; l < g; l++) {
              var r,
                  m = 0,
                  w,
                  p = n[l],
                  v = "/" !== p && ("/" === n[l + 1] || l == g - 1),
                  x;if (p) if (e && (b.push("\x3c/span\x3e"), k = e = 0), "/" === p) b.push('\x3cspan class\x3d"cke_toolbar_break"\x3e\x3c/span\x3e');else {
                x = p.items || p;for (var y = 0; y < x.length; y++) {
                  var t = x[y],
                      A;if (t) {
                    var B = function B(c) {
                      c = c.render(a, b);u = m.items.push(c) - 1;0 < u && (c.previous = m.items[u - 1], c.previous.next = c);c.toolbar = m;c.onkey = f;c.onfocus = function () {
                        a.toolbox.focusCommandExecuted || a.focus();
                      };
                    };if (t.type == CKEDITOR.UI_SEPARATOR) k = e && t;else {
                      A = !1 !== t.canGroup;if (!m) {
                        r = CKEDITOR.tools.getNextId();m = { id: r, items: [] };w = p.name && (a.lang.toolbar.toolbarGroups[p.name] || p.name);b.push('\x3cspan id\x3d"', r, '" class\x3d"cke_toolbar' + (v ? ' cke_toolbar_last"' : '"'), w ? ' aria-labelledby\x3d"' + r + '_label"' : "", ' role\x3d"toolbar"\x3e');w && b.push('\x3cspan id\x3d"', r, '_label" class\x3d"cke_voice_label"\x3e', w, "\x3c/span\x3e");b.push('\x3cspan class\x3d"cke_toolbar_start"\x3e\x3c/span\x3e');var u = q.push(m) - 1;0 < u && (m.previous = q[u - 1], m.previous.next = m);
                      }A ? e || (b.push('\x3cspan class\x3d"cke_toolgroup" role\x3d"presentation"\x3e'), e = 1) : e && (b.push("\x3c/span\x3e"), e = 0);k && (B(k), k = 0);B(t);
                    }
                  }
                }e && (b.push("\x3c/span\x3e"), k = e = 0);m && b.push('\x3cspan class\x3d"cke_toolbar_end"\x3e\x3c/span\x3e\x3c/span\x3e');
              }
            }a.config.toolbarCanCollapse && b.push("\x3c/span\x3e");if (a.config.toolbarCanCollapse && a.elementMode != CKEDITOR.ELEMENT_MODE_INLINE) {
              var C = CKEDITOR.tools.addFunction(function () {
                a.execCommand("toolbarCollapse");
              });a.on("destroy", function () {
                CKEDITOR.tools.removeFunction(C);
              });
              a.addCommand("toolbarCollapse", { readOnly: 1, exec: function exec(b) {
                  var a = b.ui.space("toolbar_collapser"),
                      c = a.getPrevious(),
                      d = b.ui.space("contents"),
                      e = c.getParent(),
                      h = parseInt(d.$.style.height, 10),
                      g = e.$.offsetHeight,
                      f = a.hasClass("cke_toolbox_collapser_min");f ? (c.show(), a.removeClass("cke_toolbox_collapser_min"), a.setAttribute("title", b.lang.toolbar.toolbarCollapse)) : (c.hide(), a.addClass("cke_toolbox_collapser_min"), a.setAttribute("title", b.lang.toolbar.toolbarExpand));a.getFirst().setText(f ? "▲" : "◀");d.setStyle("height", h - (e.$.offsetHeight - g) + "px");b.fire("resize", { outerHeight: b.container.$.offsetHeight, contentsHeight: d.$.offsetHeight, outerWidth: b.container.$.offsetWidth });
                }, modes: { wysiwyg: 1, source: 1 } });a.setKeystroke(CKEDITOR.ALT + (CKEDITOR.env.ie || CKEDITOR.env.webkit ? 189 : 109), "toolbarCollapse");b.push('\x3ca title\x3d"' + (d ? a.lang.toolbar.toolbarCollapse : a.lang.toolbar.toolbarExpand) + '" id\x3d"' + a.ui.spaceId("toolbar_collapser") + '" tabIndex\x3d"-1" class\x3d"cke_toolbox_collapser');d || b.push(" cke_toolbox_collapser_min");
              b.push('" onclick\x3d"CKEDITOR.tools.callFunction(' + C + ')"\x3e', '\x3cspan class\x3d"cke_arrow"\x3e\x26#9650;\x3c/span\x3e', "\x3c/a\x3e");
            }b.push("\x3c/span\x3e");c.data.html += b.join("");
          }
        });a.on("destroy", function () {
          if (this.toolbox) {
            var a,
                d = 0,
                b,
                e,
                f;for (a = this.toolbox.toolbars; d < a.length; d++) {
              for (e = a[d].items, b = 0; b < e.length; b++) {
                f = e[b], f.clickFn && CKEDITOR.tools.removeFunction(f.clickFn), f.keyDownFn && CKEDITOR.tools.removeFunction(f.keyDownFn);
              }
            }
          }
        });a.on("uiReady", function () {
          var c = a.ui.space("toolbox");c && a.focusManager.add(c, 1);
        });a.addCommand("toolbarFocus", E);a.setKeystroke(CKEDITOR.ALT + 121, "toolbarFocus");a.ui.add("-", CKEDITOR.UI_SEPARATOR, {});a.ui.addHandler(CKEDITOR.UI_SEPARATOR, { create: function create() {
            return { render: function render(a, d) {
                d.push('\x3cspan class\x3d"cke_toolbar_separator" role\x3d"separator"\x3e\x3c/span\x3e');return {};
              } };
          } });
      } });CKEDITOR.ui.prototype.addToolbarGroup = function (a, d, f) {
      var c = v(this.editor),
          h = 0 === d,
          b = { name: a };if (f) {
        if (f = CKEDITOR.tools.search(c, function (a) {
          return a.name == f;
        })) {
          !f.groups && (f.groups = []);if (d && (d = CKEDITOR.tools.indexOf(f.groups, d), 0 <= d)) {
            f.groups.splice(d + 1, 0, a);return;
          }h ? f.groups.splice(0, 0, a) : f.groups.push(a);return;
        }d = null;
      }d && (d = CKEDITOR.tools.indexOf(c, function (a) {
        return a.name == d;
      }));h ? c.splice(0, 0, a) : "number" == typeof d ? c.splice(d + 1, 0, b) : c.push(a);
    };
  })();CKEDITOR.UI_SEPARATOR = "separator";CKEDITOR.config.toolbarLocation = "top";(function () {
    function r(a, b, c) {
      b.type || (b.type = "auto");if (c && !1 === a.fire("beforePaste", b) || !b.dataValue && b.dataTransfer.isEmpty()) return !1;b.dataValue || (b.dataValue = "");if (CKEDITOR.env.gecko && "drop" == b.method && a.toolbox) a.once("afterPaste", function () {
        a.toolbox.focus();
      });return a.fire("paste", b);
    }function x(a) {
      function b() {
        var b = a.editable();if (CKEDITOR.plugins.clipboard.isCustomCopyCutSupported) {
          var c = function c(b) {
            a.getSelection().isCollapsed() || (a.readOnly && "cut" == b.name || p.initPasteDataTransfer(b, a), b.data.preventDefault());
          };b.on("copy", c);b.on("cut", c);b.on("cut", function () {
            a.readOnly || a.extractSelectedHtml();
          }, null, null, 999);
        }b.on(p.mainPasteEvent, function (a) {
          "beforepaste" == p.mainPasteEvent && m || k(a);
        });"beforepaste" == p.mainPasteEvent && (b.on("paste", function (a) {
          u || (g(), a.data.preventDefault(), k(a), e("paste"));
        }), b.on("contextmenu", h, null, null, 0), b.on("beforepaste", function (a) {
          !a.data || a.data.$.ctrlKey || a.data.$.shiftKey || h();
        }, null, null, 0));b.on("beforecut", function () {
          !m && f(a);
        });var d;b.attachListener(CKEDITOR.env.ie ? b : a.document.getDocumentElement(), "mouseup", function () {
          d = setTimeout(function () {
            t();
          }, 0);
        });a.on("destroy", function () {
          clearTimeout(d);
        });b.on("keyup", t);
      }function c(b) {
        return { type: b, canUndo: "cut" == b, startDisabled: !0, fakeKeystroke: "cut" == b ? CKEDITOR.CTRL + 88 : CKEDITOR.CTRL + 67, exec: function exec() {
            "cut" == this.type && f();var b;var c = this.type;if (CKEDITOR.env.ie) b = e(c);else try {
              b = a.document.$.execCommand(c, !1, null);
            } catch (d) {
              b = !1;
            }b || a.showNotification(a.lang.clipboard[this.type + "Error"]);return b;
          } };
      }function d() {
        return { canUndo: !1,
          async: !0, fakeKeystroke: CKEDITOR.CTRL + 86, exec: function exec(a, b) {
            function c(b, h) {
              h = "undefined" !== typeof h ? h : !0;b ? (b.method = "paste", b.dataTransfer || (b.dataTransfer = p.initPasteDataTransfer()), r(a, b, h)) : e && !a._.forcePasteDialog && a.showNotification(n, "info", a.config.clipboard_notificationDuration);a._.forcePasteDialog = !1;a.fire("afterCommandExec", { name: "paste", command: d, returnValue: !!b });
            }b = "undefined" !== typeof b && null !== b ? b : {};var d = this,
                e = "undefined" !== typeof b.notification ? b.notification : !0,
                h = b.type,
                f = CKEDITOR.tools.keystrokeToString(a.lang.common.keyboard, a.getCommandKeystroke(this)),
                n = "string" === typeof e ? e : a.lang.clipboard.pasteNotification.replace(/%1/, '\x3ckbd aria-label\x3d"' + f.aria + '"\x3e' + f.display + "\x3c/kbd\x3e"),
                f = "string" === typeof b ? b : b.dataValue;h && !0 !== a.config.forcePasteAsPlainText && "allow-word" !== a.config.forcePasteAsPlainText ? a._.nextPasteType = h : delete a._.nextPasteType;"string" === typeof f ? c({ dataValue: f }) : a.getClipboardData(c);
          } };
      }function g() {
        u = 1;setTimeout(function () {
          u = 0;
        }, 100);
      }function h() {
        m = 1;setTimeout(function () {
          m = 0;
        }, 10);
      }function e(b) {
        var c = a.document,
            d = c.getBody(),
            e = !1,
            h = function h() {
          e = !0;
        };d.on(b, h);7 < CKEDITOR.env.version ? c.$.execCommand(b) : c.$.selection.createRange().execCommand(b);d.removeListener(b, h);return e;
      }function f() {
        if (CKEDITOR.env.ie && !CKEDITOR.env.quirks) {
          var b = a.getSelection(),
              c,
              d,
              e;b.getType() == CKEDITOR.SELECTION_ELEMENT && (c = b.getSelectedElement()) && (d = b.getRanges()[0], e = a.document.createText(""), e.insertBefore(c), d.setStartBefore(e), d.setEndAfter(c), b.selectRanges([d]), setTimeout(function () {
            c.getParent() && (e.remove(), b.selectElement(c));
          }, 0));
        }
      }function l(b, c) {
        var d = a.document,
            e = a.editable(),
            h = function h(a) {
          a.cancel();
        },
            f;if (!d.getById("cke_pastebin")) {
          var n = a.getSelection(),
              g = n.createBookmarks();CKEDITOR.env.ie && n.root.fire("selectionchange");var k = new CKEDITOR.dom.element(!CKEDITOR.env.webkit && !e.is("body") || CKEDITOR.env.ie ? "div" : "body", d);k.setAttributes({ id: "cke_pastebin", "data-cke-temp": "1" });var l = 0,
              d = d.getWindow();CKEDITOR.env.webkit ? (e.append(k), k.addClass("cke_editable"), e.is("body") || (l = "static" != e.getComputedStyle("position") ? e : CKEDITOR.dom.element.get(e.$.offsetParent), l = l.getDocumentPosition().y)) : e.getAscendant(CKEDITOR.env.ie ? "body" : "html", 1).append(k);k.setStyles({ position: "absolute", top: d.getScrollPosition().y - l + 10 + "px", width: "1px", height: Math.max(1, d.getViewPaneSize().height - 20) + "px", overflow: "hidden", margin: 0, padding: 0 });CKEDITOR.env.safari && k.setStyles(CKEDITOR.tools.cssVendorPrefix("user-select", "text"));(l = k.getParent().isReadOnly()) ? (k.setOpacity(0), k.setAttribute("contenteditable", !0)) : k.setStyle("ltr" == a.config.contentsLangDirection ? "left" : "right", "-10000px");a.on("selectionChange", h, null, null, 0);if (CKEDITOR.env.webkit || CKEDITOR.env.gecko) f = e.once("blur", h, null, null, -100);l && k.focus();l = new CKEDITOR.dom.range(k);l.selectNodeContents(k);var t = l.select();CKEDITOR.env.ie && (f = e.once("blur", function () {
            a.lockSelection(t);
          }));var q = CKEDITOR.document.getWindow().getScrollPosition().y;setTimeout(function () {
            CKEDITOR.env.webkit && (CKEDITOR.document.getBody().$.scrollTop = q);f && f.removeListener();CKEDITOR.env.ie && e.focus();n.selectBookmarks(g);
            k.remove();var b;CKEDITOR.env.webkit && (b = k.getFirst()) && b.is && b.hasClass("Apple-style-span") && (k = b);a.removeListener("selectionChange", h);c(k.getHtml());
          }, 0);
        }
      }function y() {
        if ("paste" == p.mainPasteEvent) return a.fire("beforePaste", { type: "auto", method: "paste" }), !1;a.focus();g();var b = a.focusManager;b.lock();if (a.editable().fire(p.mainPasteEvent) && !e("paste")) return b.unlock(), !1;b.unlock();return !0;
      }function n(b) {
        if ("wysiwyg" == a.mode) switch (b.data.keyCode) {case CKEDITOR.CTRL + 86:case CKEDITOR.SHIFT + 45:
            b = a.editable();g();"paste" == p.mainPasteEvent && b.fire("beforepaste");break;case CKEDITOR.CTRL + 88:case CKEDITOR.SHIFT + 46:
            a.fire("saveSnapshot"), setTimeout(function () {
              a.fire("saveSnapshot");
            }, 50);}
      }function k(b) {
        var c = { type: "auto", method: "paste", dataTransfer: p.initPasteDataTransfer(b) };c.dataTransfer.cacheData();var d = !1 !== a.fire("beforePaste", c);d && p.canClipboardApiBeTrusted(c.dataTransfer, a) ? (b.data.preventDefault(), setTimeout(function () {
          r(a, c);
        }, 0)) : l(b, function (b) {
          c.dataValue = b.replace(/<span[^>]+data-cke-bookmark[^<]*?<\/span>/ig, "");d && r(a, c);
        });
      }function t() {
        if ("wysiwyg" == a.mode) {
          var b = q("paste");a.getCommand("cut").setState(q("cut"));a.getCommand("copy").setState(q("copy"));a.getCommand("paste").setState(b);a.fire("pasteState", b);
        }
      }function q(b) {
        if (v && b in { paste: 1, cut: 1 }) return CKEDITOR.TRISTATE_DISABLED;if ("paste" == b) return CKEDITOR.TRISTATE_OFF;b = a.getSelection();var c = b.getRanges();return b.getType() == CKEDITOR.SELECTION_NONE || 1 == c.length && c[0].collapsed ? CKEDITOR.TRISTATE_DISABLED : CKEDITOR.TRISTATE_OFF;
      }var p = CKEDITOR.plugins.clipboard,
          m = 0,
          u = 0,
          v = 0;(function () {
        a.on("key", n);a.on("contentDom", b);a.on("selectionChange", function (a) {
          v = a.data.selection.getRanges()[0].checkReadOnly();t();
        });if (a.contextMenu) {
          a.contextMenu.addListener(function (a, b) {
            v = b.getRanges()[0].checkReadOnly();return { cut: q("cut"), copy: q("copy"), paste: q("paste") };
          });var c = null;a.on("menuShow", function () {
            c && (c.removeListener(), c = null);var b = a.contextMenu.findItemByCommandName("paste");b && b.element && (c = b.element.on("touchend", function () {
              a._.forcePasteDialog = !0;
            }));
          });
        }if (a.ui.addButton) a.once("instanceReady", function () {
          a._.pasteButtons && CKEDITOR.tools.array.forEach(a._.pasteButtons, function (b) {
            if (b = a.ui.get(b)) CKEDITOR.document.getById(b._.id).on("touchend", function () {
              a._.forcePasteDialog = !0;
            });
          });
        });
      })();(function () {
        function b(c, d, e, h, f) {
          var n = a.lang.clipboard[d];a.addCommand(d, e);a.ui.addButton && a.ui.addButton(c, { label: n, command: d, toolbar: "clipboard," + h });a.addMenuItems && a.addMenuItem(d, { label: n, command: d, group: "clipboard", order: f });
        }b("Cut", "cut", c("cut"), 10, 1);b("Copy", "copy", c("copy"), 20, 4);b("Paste", "paste", d(), 30, 8);a._.pasteButtons || (a._.pasteButtons = []);a._.pasteButtons.push("Paste");
      })();a.getClipboardData = function (b, c) {
        function d(a) {
          a.removeListener();a.cancel();c(a.data);
        }function e(a) {
          a.removeListener();a.cancel();c({ type: f, dataValue: a.data.dataValue, dataTransfer: a.data.dataTransfer, method: "paste" });
        }var h = !1,
            f = "auto";c || (c = b, b = null);a.on("beforePaste", function (a) {
          a.removeListener();h = !0;f = a.data.type;
        }, null, null, 1E3);a.on("paste", d, null, null, 0);!1 === y() && (a.removeListener("paste", d), a._.forcePasteDialog && h && a.fire("pasteDialog") ? (a.on("pasteDialogCommit", e), a.on("dialogHide", function (a) {
          a.removeListener();a.data.removeListener("pasteDialogCommit", e);a.data._.committed || c(null);
        })) : c(null));
      };
    }function z(a) {
      if (CKEDITOR.env.webkit) {
        if (!a.match(/^[^<]*$/g) && !a.match(/^(<div><br( ?\/)?><\/div>|<div>[^<]*<\/div>)*$/gi)) return "html";
      } else if (CKEDITOR.env.ie) {
        if (!a.match(/^([^<]|<br( ?\/)?>)*$/gi) && !a.match(/^(<p>([^<]|<br( ?\/)?>)*<\/p>|(\r\n))*$/gi)) return "html";
      } else if (CKEDITOR.env.gecko) {
        if (!a.match(/^([^<]|<br( ?\/)?>)*$/gi)) return "html";
      } else return "html";
      return "htmlifiedtext";
    }function A(a, b) {
      function c(a) {
        return CKEDITOR.tools.repeat("\x3c/p\x3e\x3cp\x3e", ~~(a / 2)) + (1 == a % 2 ? "\x3cbr\x3e" : "");
      }b = b.replace(/(?!\u3000)\s+/g, " ").replace(/> +</g, "\x3e\x3c").replace(/<br ?\/>/gi, "\x3cbr\x3e");b = b.replace(/<\/?[A-Z]+>/g, function (a) {
        return a.toLowerCase();
      });if (b.match(/^[^<]$/)) return b;CKEDITOR.env.webkit && -1 < b.indexOf("\x3cdiv\x3e") && (b = b.replace(/^(<div>(<br>|)<\/div>)(?!$|(<div>(<br>|)<\/div>))/g, "\x3cbr\x3e").replace(/^(<div>(<br>|)<\/div>){2}(?!$)/g, "\x3cdiv\x3e\x3c/div\x3e"), b.match(/<div>(<br>|)<\/div>/) && (b = "\x3cp\x3e" + b.replace(/(<div>(<br>|)<\/div>)+/g, function (a) {
        return c(a.split("\x3c/div\x3e\x3cdiv\x3e").length + 1);
      }) + "\x3c/p\x3e"), b = b.replace(/<\/div><div>/g, "\x3cbr\x3e"), b = b.replace(/<\/?div>/g, ""));CKEDITOR.env.gecko && a.enterMode != CKEDITOR.ENTER_BR && (CKEDITOR.env.gecko && (b = b.replace(/^<br><br>$/, "\x3cbr\x3e")), -1 < b.indexOf("\x3cbr\x3e\x3cbr\x3e") && (b = "\x3cp\x3e" + b.replace(/(<br>){2,}/g, function (a) {
        return c(a.length / 4);
      }) + "\x3c/p\x3e"));return B(a, b);
    }function C() {
      function a() {
        var a = {},
            b;for (b in CKEDITOR.dtd) {
          "$" != b.charAt(0) && "div" != b && "span" != b && (a[b] = 1);
        }return a;
      }var b = {};return { get: function get(c) {
          return "plain-text" == c ? b.plainText || (b.plainText = new CKEDITOR.filter("br")) : "semantic-content" == c ? ((c = b.semanticContent) || (c = new CKEDITOR.filter(), c.allow({ $1: { elements: a(), attributes: !0, styles: !1, classes: !1 } }), c = b.semanticContent = c), c) : c ? new CKEDITOR.filter(c) : null;
        } };
    }function w(a, b, c) {
      b = CKEDITOR.htmlParser.fragment.fromHtml(b);var d = new CKEDITOR.htmlParser.basicWriter();c.applyTo(b, !0, !1, a.activeEnterMode);b.writeHtml(d);return d.getHtml();
    }function B(a, b) {
      a.enterMode == CKEDITOR.ENTER_BR ? b = b.replace(/(<\/p><p>)+/g, function (a) {
        return CKEDITOR.tools.repeat("\x3cbr\x3e", a.length / 7 * 2);
      }).replace(/<\/?p>/g, "") : a.enterMode == CKEDITOR.ENTER_DIV && (b = b.replace(/<(\/)?p>/g, "\x3c$1div\x3e"));return b;
    }function D(a) {
      a.data.preventDefault();a.data.$.dataTransfer.dropEffect = "none";
    }function E(a) {
      var b = CKEDITOR.plugins.clipboard;a.on("contentDom", function () {
        function c(b, c, e) {
          c.select();r(a, { dataTransfer: e,
            method: "drop" }, 1);e.sourceEditor.fire("saveSnapshot");e.sourceEditor.editable().extractHtmlFromRange(b);e.sourceEditor.getSelection().selectRanges([b]);e.sourceEditor.fire("saveSnapshot");
        }function d(c, e) {
          c.select();r(a, { dataTransfer: e, method: "drop" }, 1);b.resetDragDataTransfer();
        }function g(b, c, e) {
          var d = { $: b.data.$, target: b.data.getTarget() };c && (d.dragRange = c);e && (d.dropRange = e);!1 === a.fire(b.name, d) && b.data.preventDefault();
        }function h(a) {
          a.type != CKEDITOR.NODE_ELEMENT && (a = a.getParent());return a.getChildCount();
        }
        var e = a.editable(),
            f = CKEDITOR.plugins.clipboard.getDropTarget(a),
            l = a.ui.space("top"),
            m = a.ui.space("bottom");b.preventDefaultDropOnElement(l);b.preventDefaultDropOnElement(m);e.attachListener(f, "dragstart", g);e.attachListener(a, "dragstart", b.resetDragDataTransfer, b, null, 1);e.attachListener(a, "dragstart", function (c) {
          b.initDragDataTransfer(c, a);
        }, null, null, 2);e.attachListener(a, "dragstart", function () {
          var c = b.dragRange = a.getSelection().getRanges()[0];CKEDITOR.env.ie && 10 > CKEDITOR.env.version && (b.dragStartContainerChildCount = c ? h(c.startContainer) : null, b.dragEndContainerChildCount = c ? h(c.endContainer) : null);
        }, null, null, 100);e.attachListener(f, "dragend", g);e.attachListener(a, "dragend", b.initDragDataTransfer, b, null, 1);e.attachListener(a, "dragend", b.resetDragDataTransfer, b, null, 100);e.attachListener(f, "dragover", function (a) {
          if (CKEDITOR.env.edge) a.data.preventDefault();else {
            var b = a.data.getTarget();b && b.is && b.is("html") ? a.data.preventDefault() : CKEDITOR.env.ie && CKEDITOR.plugins.clipboard.isFileApiSupported && a.data.$.dataTransfer.types.contains("Files") && a.data.preventDefault();
          }
        });e.attachListener(f, "drop", function (c) {
          if (!c.data.$.defaultPrevented) {
            c.data.preventDefault();var e = c.data.getTarget();if (!e.isReadOnly() || e.type == CKEDITOR.NODE_ELEMENT && e.is("html")) {
              var e = b.getRangeAtDropPosition(c, a),
                  d = b.dragRange;e && g(c, d, e);
            }
          }
        }, null, null, 9999);e.attachListener(a, "drop", b.initDragDataTransfer, b, null, 1);e.attachListener(a, "drop", function (e) {
          if (e = e.data) {
            var h = e.dropRange,
                f = e.dragRange,
                g = e.dataTransfer;g.getTransferType(a) == CKEDITOR.DATA_TRANSFER_INTERNAL ? setTimeout(function () {
              b.internalDrop(f, h, g, a);
            }, 0) : g.getTransferType(a) == CKEDITOR.DATA_TRANSFER_CROSS_EDITORS ? c(f, h, g) : d(h, g);
          }
        }, null, null, 9999);
      });
    }var m;CKEDITOR.plugins.add("clipboard", { requires: "dialog,notification,toolbar", init: function init(a) {
        var b,
            c = C();a.config.forcePasteAsPlainText ? b = "plain-text" : a.config.pasteFilter ? b = a.config.pasteFilter : !CKEDITOR.env.webkit || "pasteFilter" in a.config || (b = "semantic-content");a.pasteFilter = c.get(b);x(a);E(a);CKEDITOR.dialog.add("paste", CKEDITOR.getUrl(this.path + "dialogs/paste.js"));if (CKEDITOR.env.gecko) {
          var d = ["image/png", "image/jpeg", "image/gif"],
              g;a.on("paste", function (b) {
            var c = b.data,
                f = c.dataTransfer;if (!c.dataValue && "paste" == c.method && f && 1 == f.getFilesCount() && g != f.id && (f = f.getFile(0), -1 != CKEDITOR.tools.indexOf(d, f.type))) {
              var l = new FileReader();l.addEventListener("load", function () {
                b.data.dataValue = '\x3cimg src\x3d"' + l.result + '" /\x3e';a.fire("paste", b.data);
              }, !1);l.addEventListener("abort", function () {
                a.fire("paste", b.data);
              }, !1);l.addEventListener("error", function () {
                a.fire("paste", b.data);
              }, !1);l.readAsDataURL(f);g = c.dataTransfer.id;b.stop();
            }
          }, null, null, 1);
        }a.on("paste", function (b) {
          b.data.dataTransfer || (b.data.dataTransfer = new CKEDITOR.plugins.clipboard.dataTransfer());if (!b.data.dataValue) {
            var c = b.data.dataTransfer,
                d = c.getData("text/html");if (d) b.data.dataValue = d, b.data.type = "html";else if (d = c.getData("text/plain")) b.data.dataValue = a.editable().transformPlainTextToHtml(d), b.data.type = "text";
          }
        }, null, null, 1);a.on("paste", function (a) {
          var b = a.data.dataValue,
              c = CKEDITOR.dtd.$block;-1 < b.indexOf("Apple-") && (b = b.replace(/<span class="Apple-converted-space">&nbsp;<\/span>/gi, " "), "html" != a.data.type && (b = b.replace(/<span class="Apple-tab-span"[^>]*>([^<]*)<\/span>/gi, function (a, b) {
            return b.replace(/\t/g, "\x26nbsp;\x26nbsp; \x26nbsp;");
          })), -1 < b.indexOf('\x3cbr class\x3d"Apple-interchange-newline"\x3e') && (a.data.startsWithEOL = 1, a.data.preSniffing = "html", b = b.replace(/<br class="Apple-interchange-newline">/, "")), b = b.replace(/(<[^>]+) class="Apple-[^"]*"/gi, "$1"));
          if (b.match(/^<[^<]+cke_(editable|contents)/i)) {
            var d,
                g,
                n = new CKEDITOR.dom.element("div");for (n.setHtml(b); 1 == n.getChildCount() && (d = n.getFirst()) && d.type == CKEDITOR.NODE_ELEMENT && (d.hasClass("cke_editable") || d.hasClass("cke_contents"));) {
              n = g = d;
            }g && (b = g.getHtml().replace(/<br>$/i, ""));
          }CKEDITOR.env.ie ? b = b.replace(/^&nbsp;(?: |\r\n)?<(\w+)/g, function (b, d) {
            return d.toLowerCase() in c ? (a.data.preSniffing = "html", "\x3c" + d) : b;
          }) : CKEDITOR.env.webkit ? b = b.replace(/<\/(\w+)><div><br><\/div>$/, function (b, d) {
            return d in c ? (a.data.endsWithEOL = 1, "\x3c/" + d + "\x3e") : b;
          }) : CKEDITOR.env.gecko && (b = b.replace(/(\s)<br>$/, "$1"));a.data.dataValue = b;
        }, null, null, 3);a.on("paste", function (b) {
          b = b.data;var d = a._.nextPasteType || b.type,
              f = b.dataValue,
              g,
              m = a.config.clipboard_defaultContentType || "html",
              n = b.dataTransfer.getTransferType(a) == CKEDITOR.DATA_TRANSFER_EXTERNAL,
              k = !0 === a.config.forcePasteAsPlainText;g = "html" == d || "html" == b.preSniffing ? "html" : z(f);delete a._.nextPasteType;"htmlifiedtext" == g && (f = A(a.config, f));if ("text" == d && "html" == g) f = w(a, f, c.get("plain-text"));else if (n && a.pasteFilter && !b.dontFilter || k) f = w(a, f, a.pasteFilter);b.startsWithEOL && (f = '\x3cbr data-cke-eol\x3d"1"\x3e' + f);b.endsWithEOL && (f += '\x3cbr data-cke-eol\x3d"1"\x3e');"auto" == d && (d = "html" == g || "html" == m ? "html" : "text");b.type = d;b.dataValue = f;delete b.preSniffing;delete b.startsWithEOL;delete b.endsWithEOL;
        }, null, null, 6);a.on("paste", function (b) {
          b = b.data;b.dataValue && (a.insertHtml(b.dataValue, b.type, b.range), setTimeout(function () {
            a.fire("afterPaste");
          }, 0));
        }, null, null, 1E3);a.on("pasteDialog", function (b) {
          setTimeout(function () {
            a.openDialog("paste", b.data);
          }, 0);
        });
      } });CKEDITOR.plugins.clipboard = { isCustomCopyCutSupported: (!CKEDITOR.env.ie || 16 <= CKEDITOR.env.version) && !CKEDITOR.env.iOS, isCustomDataTypesSupported: !CKEDITOR.env.ie || 16 <= CKEDITOR.env.version, isFileApiSupported: !CKEDITOR.env.ie || 9 < CKEDITOR.env.version, mainPasteEvent: CKEDITOR.env.ie && !CKEDITOR.env.edge ? "beforepaste" : "paste", addPasteButton: function addPasteButton(a, b, c) {
        a.ui.addButton && (a.ui.addButton(b, c), a._.pasteButtons || (a._.pasteButtons = []), a._.pasteButtons.push(b));
      }, canClipboardApiBeTrusted: function canClipboardApiBeTrusted(a, b) {
        return a.getTransferType(b) != CKEDITOR.DATA_TRANSFER_EXTERNAL || CKEDITOR.env.chrome && !a.isEmpty() || CKEDITOR.env.gecko && (a.getData("text/html") || a.getFilesCount()) || CKEDITOR.env.safari && 603 <= CKEDITOR.env.version && !CKEDITOR.env.iOS || CKEDITOR.env.edge && 16 <= CKEDITOR.env.version ? !0 : !1;
      }, getDropTarget: function getDropTarget(a) {
        var b = a.editable();return CKEDITOR.env.ie && 9 > CKEDITOR.env.version || b.isInline() ? b : a.document;
      }, fixSplitNodesAfterDrop: function fixSplitNodesAfterDrop(a, b, c, d) {
        function g(a, c, d) {
          var g = a;g.type == CKEDITOR.NODE_TEXT && (g = a.getParent());if (g.equals(c) && d != c.getChildCount()) return a = b.startContainer.getChild(b.startOffset - 1), c = b.startContainer.getChild(b.startOffset), a && a.type == CKEDITOR.NODE_TEXT && c && c.type == CKEDITOR.NODE_TEXT && (d = a.getLength(), a.setText(a.getText() + c.getText()), c.remove(), b.setStart(a, d), b.collapse(!0)), !0;
        }var h = b.startContainer;"number" == typeof d && "number" == typeof c && h.type == CKEDITOR.NODE_ELEMENT && (g(a.startContainer, h, c) || g(a.endContainer, h, d));
      }, isDropRangeAffectedByDragRange: function isDropRangeAffectedByDragRange(a, b) {
        var c = b.startContainer,
            d = b.endOffset;return a.endContainer.equals(c) && a.endOffset <= d || a.startContainer.getParent().equals(c) && a.startContainer.getIndex() < d || a.endContainer.getParent().equals(c) && a.endContainer.getIndex() < d ? !0 : !1;
      }, internalDrop: function internalDrop(a, b, c, d) {
        var g = CKEDITOR.plugins.clipboard,
            h = d.editable(),
            e,
            f;d.fire("saveSnapshot");d.fire("lockSnapshot", { dontUpdate: 1 });CKEDITOR.env.ie && 10 > CKEDITOR.env.version && this.fixSplitNodesAfterDrop(a, b, g.dragStartContainerChildCount, g.dragEndContainerChildCount);(f = this.isDropRangeAffectedByDragRange(a, b)) || (e = a.createBookmark(!1));g = b.clone().createBookmark(!1);f && (e = a.createBookmark(!1));a = e.startNode;b = e.endNode;f = g.startNode;b && a.getPosition(f) & CKEDITOR.POSITION_PRECEDING && b.getPosition(f) & CKEDITOR.POSITION_FOLLOWING && f.insertBefore(a);a = d.createRange();a.moveToBookmark(e);h.extractHtmlFromRange(a, 1);b = d.createRange();b.moveToBookmark(g);r(d, { dataTransfer: c, method: "drop", range: b }, 1);d.fire("unlockSnapshot");
      }, getRangeAtDropPosition: function getRangeAtDropPosition(a, b) {
        var c = a.data.$,
            d = c.clientX,
            g = c.clientY,
            h = b.getSelection(!0).getRanges()[0],
            e = b.createRange();if (a.data.testRange) return a.data.testRange;if (document.caretRangeFromPoint && b.document.$.caretRangeFromPoint(d, g)) c = b.document.$.caretRangeFromPoint(d, g), e.setStart(CKEDITOR.dom.node(c.startContainer), c.startOffset), e.collapse(!0);else if (c.rangeParent) e.setStart(CKEDITOR.dom.node(c.rangeParent), c.rangeOffset), e.collapse(!0);else {
          if (CKEDITOR.env.ie && 8 < CKEDITOR.env.version && h && b.editable().hasFocus) return h;
          if (document.body.createTextRange) {
            b.focus();c = b.document.getBody().$.createTextRange();try {
              for (var f = !1, l = 0; 20 > l && !f; l++) {
                if (!f) try {
                  c.moveToPoint(d, g - l), f = !0;
                } catch (m) {}if (!f) try {
                  c.moveToPoint(d, g + l), f = !0;
                } catch (n) {}
              }if (f) {
                var k = "cke-temp-" + new Date().getTime();c.pasteHTML('\x3cspan id\x3d"' + k + '"\x3e​\x3c/span\x3e');var t = b.document.getById(k);e.moveToPosition(t, CKEDITOR.POSITION_BEFORE_START);t.remove();
              } else {
                var q = b.document.$.elementFromPoint(d, g),
                    p = new CKEDITOR.dom.element(q),
                    r;if (p.equals(b.editable()) || "html" == p.getName()) return h && h.startContainer && !h.startContainer.equals(b.editable()) ? h : null;r = p.getClientRect();d < r.left ? e.setStartAt(p, CKEDITOR.POSITION_AFTER_START) : e.setStartAt(p, CKEDITOR.POSITION_BEFORE_END);e.collapse(!0);
              }
            } catch (u) {
              return null;
            }
          } else return null;
        }return e;
      }, initDragDataTransfer: function initDragDataTransfer(a, b) {
        var c = a.data.$ ? a.data.$.dataTransfer : null,
            d = new this.dataTransfer(c, b);"dragstart" === a.name && d.storeId();c ? this.dragData && d.id == this.dragData.id ? d = this.dragData : this.dragData = d : this.dragData ? d = this.dragData : this.dragData = d;a.data.dataTransfer = d;
      }, resetDragDataTransfer: function resetDragDataTransfer() {
        this.dragData = null;
      }, initPasteDataTransfer: function initPasteDataTransfer(a, b) {
        if (this.isCustomCopyCutSupported) {
          if (a && a.data && a.data.$) {
            var c = a.data.$.clipboardData,
                d = new this.dataTransfer(c, b);"copy" !== a.name && "cut" !== a.name || d.storeId();this.copyCutData && d.id == this.copyCutData.id ? (d = this.copyCutData, d.$ = c) : this.copyCutData = d;return d;
          }return new this.dataTransfer(null, b);
        }return new this.dataTransfer(CKEDITOR.env.edge && a && a.data.$ && a.data.$.clipboardData || null, b);
      }, preventDefaultDropOnElement: function preventDefaultDropOnElement(a) {
        a && a.on("dragover", D);
      } };m = CKEDITOR.plugins.clipboard.isCustomDataTypesSupported ? "cke/id" : "Text";CKEDITOR.plugins.clipboard.dataTransfer = function (a, b) {
      a && (this.$ = a);this._ = { metaRegExp: /^<meta.*?>/i, bodyRegExp: /<body(?:[\s\S]*?)>([\s\S]*)<\/body>/i, fragmentRegExp: /\x3c!--(?:Start|End)Fragment--\x3e/g, data: {}, files: [], nativeHtmlCache: "", normalizeType: function normalizeType(a) {
          a = a.toLowerCase();return "text" == a || "text/plain" == a ? "Text" : "url" == a ? "URL" : a;
        } };this._.fallbackDataTransfer = new CKEDITOR.plugins.clipboard.fallbackDataTransfer(this);this.id = this.getData(m);this.id || (this.id = "Text" == m ? "" : "cke-" + CKEDITOR.tools.getUniqueId());b && (this.sourceEditor = b, this.setData("text/html", b.getSelectedHtml(1)), "Text" == m || this.getData("text/plain") || this.setData("text/plain", b.getSelection().getSelectedText()));
    };CKEDITOR.DATA_TRANSFER_INTERNAL = 1;CKEDITOR.DATA_TRANSFER_CROSS_EDITORS = 2;CKEDITOR.DATA_TRANSFER_EXTERNAL = 3;CKEDITOR.plugins.clipboard.dataTransfer.prototype = { getData: function getData(a, b) {
        a = this._.normalizeType(a);var c = "text/html" == a && b ? this._.nativeHtmlCache : this._.data[a];if (void 0 === c || null === c || "" === c) {
          if (this._.fallbackDataTransfer.isRequired()) c = this._.fallbackDataTransfer.getData(a, b);else try {
            c = this.$.getData(a) || "";
          } catch (d) {
            c = "";
          }"text/html" != a || b || (c = this._stripHtml(c));
        }"Text" == a && CKEDITOR.env.gecko && this.getFilesCount() && "file://" == c.substring(0, 7) && (c = "");if ("string" === typeof c) var g = c.indexOf("\x3c/html\x3e"),
            c = -1 !== g ? c.substring(0, g + 7) : c;return c;
      },
      setData: function setData(a, b) {
        a = this._.normalizeType(a);"text/html" == a ? (this._.data[a] = this._stripHtml(b), this._.nativeHtmlCache = b) : this._.data[a] = b;if (CKEDITOR.plugins.clipboard.isCustomDataTypesSupported || "URL" == a || "Text" == a) if ("Text" == m && "Text" == a && (this.id = b), this._.fallbackDataTransfer.isRequired()) this._.fallbackDataTransfer.setData(a, b);else try {
          this.$.setData(a, b);
        } catch (c) {}
      }, storeId: function storeId() {
        "Text" !== m && this.setData(m, this.id);
      }, getTransferType: function getTransferType(a) {
        return this.sourceEditor ? this.sourceEditor == a ? CKEDITOR.DATA_TRANSFER_INTERNAL : CKEDITOR.DATA_TRANSFER_CROSS_EDITORS : CKEDITOR.DATA_TRANSFER_EXTERNAL;
      }, cacheData: function cacheData() {
        function a(a) {
          a = b._.normalizeType(a);var c = b.getData(a);"text/html" == a && (b._.nativeHtmlCache = b.getData(a, !0), c = b._stripHtml(c));c && (b._.data[a] = c);
        }if (this.$) {
          var b = this,
              c,
              d;if (CKEDITOR.plugins.clipboard.isCustomDataTypesSupported) {
            if (this.$.types) for (c = 0; c < this.$.types.length; c++) {
              a(this.$.types[c]);
            }
          } else a("Text"), a("URL");d = this._getImageFromClipboard();if (this.$ && this.$.files || d) {
            this._.files = [];if (this.$.files && this.$.files.length) for (c = 0; c < this.$.files.length; c++) {
              this._.files.push(this.$.files[c]);
            }0 === this._.files.length && d && this._.files.push(d);
          }
        }
      }, getFilesCount: function getFilesCount() {
        return this._.files.length ? this._.files.length : this.$ && this.$.files && this.$.files.length ? this.$.files.length : this._getImageFromClipboard() ? 1 : 0;
      }, getFile: function getFile(a) {
        return this._.files.length ? this._.files[a] : this.$ && this.$.files && this.$.files.length ? this.$.files[a] : 0 === a ? this._getImageFromClipboard() : void 0;
      }, isEmpty: function isEmpty() {
        var a = {},
            b;if (this.getFilesCount()) return !1;CKEDITOR.tools.array.forEach(CKEDITOR.tools.objectKeys(this._.data), function (b) {
          a[b] = 1;
        });if (this.$) if (CKEDITOR.plugins.clipboard.isCustomDataTypesSupported) {
          if (this.$.types) for (var c = 0; c < this.$.types.length; c++) {
            a[this.$.types[c]] = 1;
          }
        } else a.Text = 1, a.URL = 1;"Text" != m && (a[m] = 0);for (b in a) {
          if (a[b] && "" !== this.getData(b)) return !1;
        }return !0;
      }, _getImageFromClipboard: function _getImageFromClipboard() {
        var a;if (this.$ && this.$.items && this.$.items[0]) try {
          if ((a = this.$.items[0].getAsFile()) && a.type) return a;
        } catch (b) {}
      }, _stripHtml: function _stripHtml(a) {
        if (a && a.length) {
          a = a.replace(this._.metaRegExp, "");var b = this._.bodyRegExp.exec(a);b && b.length && (a = b[1], a = a.replace(this._.fragmentRegExp, ""));
        }return a;
      } };CKEDITOR.plugins.clipboard.fallbackDataTransfer = function (a) {
      this._dataTransfer = a;this._customDataFallbackType = "text/html";
    };CKEDITOR.plugins.clipboard.fallbackDataTransfer._isCustomMimeTypeSupported = null;CKEDITOR.plugins.clipboard.fallbackDataTransfer._customTypes = [];CKEDITOR.plugins.clipboard.fallbackDataTransfer.prototype = { isRequired: function isRequired() {
        var a = CKEDITOR.plugins.clipboard.fallbackDataTransfer,
            b = this._dataTransfer.$;if (null === a._isCustomMimeTypeSupported) if (b) {
          a._isCustomMimeTypeSupported = !1;try {
            b.setData("cke/mimetypetest", "cke test value"), a._isCustomMimeTypeSupported = "cke test value" === b.getData("cke/mimetypetest"), b.clearData("cke/mimetypetest");
          } catch (c) {}
        } else return !1;return !a._isCustomMimeTypeSupported;
      }, getData: function getData(a, b) {
        var c = this._getData(this._customDataFallbackType, !0);if (b) return c;var c = this._extractDataComment(c),
            d = null,
            d = a === this._customDataFallbackType ? c.content : c.data && c.data[a] ? c.data[a] : this._getData(a, !0);return null !== d ? d : "";
      }, setData: function setData(a, b) {
        var c = a === this._customDataFallbackType;c && (b = this._applyDataComment(b, this._getFallbackTypeData()));var d = b,
            g = this._dataTransfer.$;try {
          g.setData(a, d), c && (this._dataTransfer._.nativeHtmlCache = d);
        } catch (h) {
          if (this._isUnsupportedMimeTypeError(h)) {
            c = CKEDITOR.plugins.clipboard.fallbackDataTransfer;-1 === CKEDITOR.tools.indexOf(c._customTypes, a) && c._customTypes.push(a);
            var c = this._getFallbackTypeContent(),
                e = this._getFallbackTypeData();e[a] = d;try {
              d = this._applyDataComment(c, e), g.setData(this._customDataFallbackType, d), this._dataTransfer._.nativeHtmlCache = d;
            } catch (f) {
              d = "";
            }
          }
        }return d;
      }, _getData: function _getData(a, b) {
        var c = this._dataTransfer._.data;if (!b && c[a]) return c[a];try {
          return this._dataTransfer.$.getData(a);
        } catch (d) {
          return null;
        }
      }, _getFallbackTypeContent: function _getFallbackTypeContent() {
        var a = this._dataTransfer._.data[this._customDataFallbackType];a || (a = this._extractDataComment(this._getData(this._customDataFallbackType, !0)).content);return a;
      }, _getFallbackTypeData: function _getFallbackTypeData() {
        var a = CKEDITOR.plugins.clipboard.fallbackDataTransfer._customTypes,
            b = this._extractDataComment(this._getData(this._customDataFallbackType, !0)).data || {},
            c = this._dataTransfer._.data;CKEDITOR.tools.array.forEach(a, function (a) {
          void 0 !== c[a] ? b[a] = c[a] : void 0 !== b[a] && (b[a] = b[a]);
        }, this);return b;
      }, _isUnsupportedMimeTypeError: function _isUnsupportedMimeTypeError(a) {
        return a.message && -1 !== a.message.search(/element not found/gi);
      }, _extractDataComment: function _extractDataComment(a) {
        var b = { data: null, content: a || "" };if (a && 16 < a.length) {
          var c;(c = /\x3c!--cke-data:(.*?)--\x3e/g.exec(a)) && c[1] && (b.data = JSON.parse(decodeURIComponent(c[1])), b.content = a.replace(c[0], ""));
        }return b;
      }, _applyDataComment: function _applyDataComment(a, b) {
        var c = "";b && CKEDITOR.tools.objectKeys(b).length && (c = "\x3c!--cke-data:" + encodeURIComponent(JSON.stringify(b)) + "--\x3e");return c + (a && a.length ? a : "");
      } };
  })();CKEDITOR.config.clipboard_notificationDuration = 1E4;(function () {
    function q(b, d, a) {
      a = b.config.forceEnterMode || a;if ("wysiwyg" == b.mode) {
        d || (d = b.activeEnterMode);var h = b.elementPath();h && !h.isContextFor("p") && (d = CKEDITOR.ENTER_BR, a = 1);b.fire("saveSnapshot");d == CKEDITOR.ENTER_BR ? t(b, d, null, a) : u(b, d, null, a);b.fire("saveSnapshot");
      }
    }function v(b) {
      b = b.getSelection().getRanges(!0);for (var d = b.length - 1; 0 < d; d--) {
        b[d].deleteContents();
      }return b[0];
    }function y(b) {
      var d = b.startContainer.getAscendant(function (a) {
        return a.type == CKEDITOR.NODE_ELEMENT && "true" == a.getAttribute("contenteditable");
      }, !0);if (b.root.equals(d)) return b;d = new CKEDITOR.dom.range(d);d.moveToRange(b);return d;
    }CKEDITOR.plugins.add("enterkey", { init: function init(b) {
        b.addCommand("enter", { modes: { wysiwyg: 1 }, editorFocus: !1, exec: function exec(b) {
            q(b);
          } });b.addCommand("shiftEnter", { modes: { wysiwyg: 1 }, editorFocus: !1, exec: function exec(b) {
            q(b, b.activeShiftEnterMode, 1);
          } });b.setKeystroke([[13, "enter"], [CKEDITOR.SHIFT + 13, "shiftEnter"]]);
      } });var z = CKEDITOR.dom.walker.whitespaces(),
        A = CKEDITOR.dom.walker.bookmark();CKEDITOR.plugins.enterkey = { enterBlock: function enterBlock(b, d, a, h) {
        if (a = a || v(b)) {
          a = y(a);var f = a.document,
              k = a.checkStartOfBlock(),
              m = a.checkEndOfBlock(),
              l = b.elementPath(a.startContainer),
              c = l.block,
              n = d == CKEDITOR.ENTER_DIV ? "div" : "p",
              e;if (k && m) {
            if (c && (c.is("li") || c.getParent().is("li"))) {
              c.is("li") || (c = c.getParent());a = c.getParent();e = a.getParent();h = !c.hasPrevious();var p = !c.hasNext(),
                  n = b.getSelection(),
                  g = n.createBookmarks(),
                  k = c.getDirection(1),
                  m = c.getAttribute("class"),
                  r = c.getAttribute("style"),
                  q = e.getDirection(1) != k;b = b.enterMode != CKEDITOR.ENTER_BR || q || r || m;
              if (e.is("li")) h || p ? (h && p && a.remove(), c[p ? "insertAfter" : "insertBefore"](e)) : c.breakParent(e);else {
                if (b) {
                  if (l.block.is("li") ? (e = f.createElement(d == CKEDITOR.ENTER_P ? "p" : "div"), q && e.setAttribute("dir", k), r && e.setAttribute("style", r), m && e.setAttribute("class", m), c.moveChildren(e)) : e = l.block, h || p) e[h ? "insertBefore" : "insertAfter"](a);else c.breakParent(a), e.insertAfter(a);
                } else if (c.appendBogus(!0), h || p) for (; f = c[h ? "getFirst" : "getLast"]();) {
                  f[h ? "insertBefore" : "insertAfter"](a);
                } else for (c.breakParent(a); f = c.getLast();) {
                  f.insertAfter(a);
                }c.remove();
              }n.selectBookmarks(g);return;
            }if (c && c.getParent().is("blockquote")) {
              c.breakParent(c.getParent());c.getPrevious().getFirst(CKEDITOR.dom.walker.invisible(1)) || c.getPrevious().remove();c.getNext().getFirst(CKEDITOR.dom.walker.invisible(1)) || c.getNext().remove();a.moveToElementEditStart(c);a.select();return;
            }
          } else if (c && c.is("pre") && !m) {
            t(b, d, a, h);return;
          }if (k = a.splitBlock(n)) {
            d = k.previousBlock;c = k.nextBlock;l = k.wasStartOfBlock;b = k.wasEndOfBlock;c ? (g = c.getParent(), g.is("li") && (c.breakParent(g), c.move(c.getNext(), 1))) : d && (g = d.getParent()) && g.is("li") && (d.breakParent(g), g = d.getNext(), a.moveToElementEditStart(g), d.move(d.getPrevious()));if (l || b) {
              if (d) {
                if (d.is("li") || !w.test(d.getName()) && !d.is("pre")) e = d.clone();
              } else c && (e = c.clone());e ? h && !e.is("li") && e.renameNode(n) : g && g.is("li") ? e = g : (e = f.createElement(n), d && (p = d.getDirection()) && e.setAttribute("dir", p));if (f = k.elementPath) for (h = 0, n = f.elements.length; h < n; h++) {
                g = f.elements[h];if (g.equals(f.block) || g.equals(f.blockLimit)) break;CKEDITOR.dtd.$removeEmpty[g.getName()] && (g = g.clone(), e.moveChildren(g), e.append(g));
              }e.appendBogus();e.getParent() || a.insertNode(e);e.is("li") && e.removeAttribute("value");!CKEDITOR.env.ie || !l || b && d.getChildCount() || (a.moveToElementEditStart(b ? d : e), a.select());a.moveToElementEditStart(l && !b ? c : e);
            } else c.is("li") && (e = a.clone(), e.selectNodeContents(c), e = new CKEDITOR.dom.walker(e), e.evaluator = function (a) {
              return !(A(a) || z(a) || a.type == CKEDITOR.NODE_ELEMENT && a.getName() in CKEDITOR.dtd.$inline && !(a.getName() in CKEDITOR.dtd.$empty));
            }, (g = e.next()) && g.type == CKEDITOR.NODE_ELEMENT && g.is("ul", "ol") && (CKEDITOR.env.needsBrFiller ? f.createElement("br") : f.createText(" ")).insertBefore(g)), c && a.moveToElementEditStart(c);a.select();a.scrollIntoView();
          }
        }
      }, enterBr: function enterBr(b, d, a, h) {
        if (a = a || v(b)) {
          var f = a.document,
              k = a.checkEndOfBlock(),
              m = new CKEDITOR.dom.elementPath(b.getSelection().getStartElement()),
              l = m.block,
              c = l && m.block.getName();h || "li" != c ? (!h && k && w.test(c) ? (k = l.getDirection()) ? (f = f.createElement("div"), f.setAttribute("dir", k), f.insertAfter(l), a.setStart(f, 0)) : (f.createElement("br").insertAfter(l), CKEDITOR.env.gecko && f.createText("").insertAfter(l), a.setStartAt(l.getNext(), CKEDITOR.env.ie ? CKEDITOR.POSITION_BEFORE_START : CKEDITOR.POSITION_AFTER_START)) : (b = "pre" == c && CKEDITOR.env.ie && 8 > CKEDITOR.env.version ? f.createText("\r") : f.createElement("br"), a.deleteContents(), a.insertNode(b), CKEDITOR.env.needsBrFiller ? (f.createText("﻿").insertAfter(b), k && (l || m.blockLimit).appendBogus(), b.getNext().$.nodeValue = "", a.setStartAt(b.getNext(), CKEDITOR.POSITION_AFTER_START)) : a.setStartAt(b, CKEDITOR.POSITION_AFTER_END)), a.collapse(!0), a.select(), a.scrollIntoView()) : u(b, d, a, h);
        }
      } };var x = CKEDITOR.plugins.enterkey,
        t = x.enterBr,
        u = x.enterBlock,
        w = /^h[1-6]$/;
  })();(function () {
    function k(b, f) {
      var g = {},
          c = [],
          e = { nbsp: " ", shy: "­", gt: "\x3e", lt: "\x3c", amp: "\x26", apos: "'", quot: '"' };b = b.replace(/\b(nbsp|shy|gt|lt|amp|apos|quot)(?:,|$)/g, function (b, a) {
        var d = f ? "\x26" + a + ";" : e[a];g[d] = f ? e[a] : "\x26" + a + ";";c.push(d);return "";
      });if (!f && b) {
        b = b.split(",");var a = document.createElement("div"),
            d;a.innerHTML = "\x26" + b.join(";\x26") + ";";d = a.innerHTML;a = null;for (a = 0; a < d.length; a++) {
          var h = d.charAt(a);g[h] = "\x26" + b[a] + ";";c.push(h);
        }
      }g.regex = c.join(f ? "|" : "");return g;
    }CKEDITOR.plugins.add("entities", { afterInit: function afterInit(b) {
        function f(a) {
          return h[a];
        }function g(b) {
          return "force" != c.entities_processNumerical && a[b] ? a[b] : "\x26#" + b.charCodeAt(0) + ";";
        }var c = b.config;if (b = (b = b.dataProcessor) && b.htmlFilter) {
          var e = [];!1 !== c.basicEntities && e.push("nbsp,gt,lt,amp");c.entities && (e.length && e.push("quot,iexcl,cent,pound,curren,yen,brvbar,sect,uml,copy,ordf,laquo,not,shy,reg,macr,deg,plusmn,sup2,sup3,acute,micro,para,middot,cedil,sup1,ordm,raquo,frac14,frac12,frac34,iquest,times,divide,fnof,bull,hellip,prime,Prime,oline,frasl,weierp,image,real,trade,alefsym,larr,uarr,rarr,darr,harr,crarr,lArr,uArr,rArr,dArr,hArr,forall,part,exist,empty,nabla,isin,notin,ni,prod,sum,minus,lowast,radic,prop,infin,ang,and,or,cap,cup,int,there4,sim,cong,asymp,ne,equiv,le,ge,sub,sup,nsub,sube,supe,oplus,otimes,perp,sdot,lceil,rceil,lfloor,rfloor,lang,rang,loz,spades,clubs,hearts,diams,circ,tilde,ensp,emsp,thinsp,zwnj,zwj,lrm,rlm,ndash,mdash,lsquo,rsquo,sbquo,ldquo,rdquo,bdquo,dagger,Dagger,permil,lsaquo,rsaquo,euro"), c.entities_latin && e.push("Agrave,Aacute,Acirc,Atilde,Auml,Aring,AElig,Ccedil,Egrave,Eacute,Ecirc,Euml,Igrave,Iacute,Icirc,Iuml,ETH,Ntilde,Ograve,Oacute,Ocirc,Otilde,Ouml,Oslash,Ugrave,Uacute,Ucirc,Uuml,Yacute,THORN,szlig,agrave,aacute,acirc,atilde,auml,aring,aelig,ccedil,egrave,eacute,ecirc,euml,igrave,iacute,icirc,iuml,eth,ntilde,ograve,oacute,ocirc,otilde,ouml,oslash,ugrave,uacute,ucirc,uuml,yacute,thorn,yuml,OElig,oelig,Scaron,scaron,Yuml"), c.entities_greek && e.push("Alpha,Beta,Gamma,Delta,Epsilon,Zeta,Eta,Theta,Iota,Kappa,Lambda,Mu,Nu,Xi,Omicron,Pi,Rho,Sigma,Tau,Upsilon,Phi,Chi,Psi,Omega,alpha,beta,gamma,delta,epsilon,zeta,eta,theta,iota,kappa,lambda,mu,nu,xi,omicron,pi,rho,sigmaf,sigma,tau,upsilon,phi,chi,psi,omega,thetasym,upsih,piv"), c.entities_additional && e.push(c.entities_additional));var a = k(e.join(",")),
              d = a.regex ? "[" + a.regex + "]" : "a^";delete a.regex;c.entities && c.entities_processNumerical && (d = "[^ -~]|" + d);var d = new RegExp(d, "g"),
              h = k("nbsp,gt,lt,amp,shy", !0),
              l = new RegExp(h.regex, "g");b.addRules({ text: function text(a) {
              return a.replace(l, f).replace(d, g);
            } }, { applyToAll: !0, excludeNestedEditable: !0 });
        }
      } });
  })();CKEDITOR.config.basicEntities = !0;CKEDITOR.config.entities = !0;CKEDITOR.config.entities_latin = !0;CKEDITOR.config.entities_greek = !0;
  CKEDITOR.config.entities_additional = "#39";(function () {
    function k(a) {
      var l = a.config,
          p = a.fire("uiSpace", { space: "top", html: "" }).html,
          t = function () {
        function f(a, c, e) {
          b.setStyle(c, w(e));b.setStyle("position", a);
        }function e(a) {
          var b = k.getDocumentPosition();switch (a) {case "top":
              f("absolute", "top", b.y - q - r);break;case "pin":
              f("fixed", "top", x);break;case "bottom":
              f("absolute", "top", b.y + (c.height || c.bottom - c.top) + r);}m = a;
        }var m,
            k,
            n,
            c,
            h,
            q,
            v,
            p = l.floatSpaceDockedOffsetX || 0,
            r = l.floatSpaceDockedOffsetY || 0,
            u = l.floatSpacePinnedOffsetX || 0,
            x = l.floatSpacePinnedOffsetY || 0;return function (d) {
          if (k = a.editable()) {
            var f = d && "focus" == d.name;f && b.show();a.fire("floatingSpaceLayout", { show: f });b.removeStyle("left");b.removeStyle("right");n = b.getClientRect();c = k.getClientRect();h = g.getViewPaneSize();q = n.height;v = "pageXOffset" in g.$ ? g.$.pageXOffset : CKEDITOR.document.$.documentElement.scrollLeft;m ? (q + r <= c.top ? e("top") : q + r > h.height - c.bottom ? e("pin") : e("bottom"), d = h.width / 2, d = l.floatSpacePreferRight ? "right" : 0 < c.left && c.right < h.width && c.width > n.width ? "rtl" == l.contentsLangDirection ? "right" : "left" : d - c.left > c.right - d ? "left" : "right", n.width > h.width ? (d = "left", f = 0) : (f = "left" == d ? 0 < c.left ? c.left : 0 : c.right < h.width ? h.width - c.right : 0, f + n.width > h.width && (d = "left" == d ? "right" : "left", f = 0)), b.setStyle(d, w(("pin" == m ? u : p) + f + ("pin" == m ? 0 : "left" == d ? v : -v)))) : (m = "pin", e("pin"), t(d));
          }
        };
      }();if (p) {
        var k = new CKEDITOR.template('\x3cdiv id\x3d"cke_{name}" class\x3d"cke {id} cke_reset_all cke_chrome cke_editor_{name} cke_float cke_{langDir} ' + CKEDITOR.env.cssClass + '" dir\x3d"{langDir}" title\x3d"' + (CKEDITOR.env.gecko ? " " : "") + '" lang\x3d"{langCode}" role\x3d"application" style\x3d"{style}"' + (a.title ? ' aria-labelledby\x3d"cke_{name}_arialbl"' : " ") + "\x3e" + (a.title ? '\x3cspan id\x3d"cke_{name}_arialbl" class\x3d"cke_voice_label"\x3e{voiceLabel}\x3c/span\x3e' : " ") + '\x3cdiv class\x3d"cke_inner"\x3e\x3cdiv id\x3d"{topId}" class\x3d"cke_top" role\x3d"presentation"\x3e{content}\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e'),
            b = CKEDITOR.document.getBody().append(CKEDITOR.dom.element.createFromHtml(k.output({ content: p, id: a.id, langDir: a.lang.dir,
          langCode: a.langCode, name: a.name, style: "display:none;z-index:" + (l.baseFloatZIndex - 1), topId: a.ui.spaceId("top"), voiceLabel: a.title }))),
            u = CKEDITOR.tools.eventsBuffer(500, t),
            e = CKEDITOR.tools.eventsBuffer(100, t);b.unselectable();b.on("mousedown", function (a) {
          a = a.data;a.getTarget().hasAscendant("a", 1) || a.preventDefault();
        });a.on("focus", function (b) {
          t(b);a.on("change", u.input);g.on("scroll", e.input);g.on("resize", e.input);
        });a.on("blur", function () {
          b.hide();a.removeListener("change", u.input);g.removeListener("scroll", e.input);g.removeListener("resize", e.input);
        });a.on("destroy", function () {
          g.removeListener("scroll", e.input);g.removeListener("resize", e.input);b.clearCustomData();b.remove();
        });a.focusManager.hasFocus && b.show();a.focusManager.add(b, 1);
      }
    }var g = CKEDITOR.document.getWindow(),
        w = CKEDITOR.tools.cssLength;CKEDITOR.plugins.add("floatingspace", { init: function init(a) {
        a.on("loaded", function () {
          k(this);
        }, null, null, 20);
      } });
  })();(function () {
    function m(a) {
      function f(a) {
        var b = !1;g.attachListener(g, "keydown", function () {
          var d = c.getBody().getElementsByTag(a);if (!b) {
            for (var e = 0; e < d.count(); e++) {
              d.getItem(e).setCustomData("retain", !0);
            }b = !0;
          }
        }, null, null, 1);g.attachListener(g, "keyup", function () {
          var d = c.getElementsByTag(a);b && (1 == d.count() && !d.getItem(0).getCustomData("retain") && CKEDITOR.tools.isEmpty(d.getItem(0).getAttributes()) && d.getItem(0).remove(1), b = !1);
        });
      }var b = this.editor,
          c = a.document,
          d = c.body,
          e = c.getElementById("cke_actscrpt");
      e && e.parentNode.removeChild(e);(e = c.getElementById("cke_shimscrpt")) && e.parentNode.removeChild(e);(e = c.getElementById("cke_basetagscrpt")) && e.parentNode.removeChild(e);d.contentEditable = !0;CKEDITOR.env.ie && (d.hideFocus = !0, d.disabled = !0, d.removeAttribute("disabled"));delete this._.isLoadingData;this.$ = d;c = new CKEDITOR.dom.document(c);this.setup();this.fixInitialSelection();var g = this;CKEDITOR.env.ie && !CKEDITOR.env.edge && c.getDocumentElement().addClass(c.$.compatMode);CKEDITOR.env.ie && !CKEDITOR.env.edge && b.enterMode != CKEDITOR.ENTER_P ? f("p") : CKEDITOR.env.edge && 15 > CKEDITOR.env.version && b.enterMode != CKEDITOR.ENTER_DIV && f("div");if (CKEDITOR.env.webkit || CKEDITOR.env.ie && 10 < CKEDITOR.env.version) c.getDocumentElement().on("mousedown", function (a) {
        a.data.getTarget().is("html") && setTimeout(function () {
          b.editable().focus();
        });
      });n(b);try {
        b.document.$.execCommand("2D-position", !1, !0);
      } catch (h) {}(CKEDITOR.env.gecko || CKEDITOR.env.ie && "CSS1Compat" == b.document.$.compatMode) && this.attachListener(this, "keydown", function (a) {
        var c = a.data.getKeystroke();if (33 == c || 34 == c) if (CKEDITOR.env.ie) setTimeout(function () {
          b.getSelection().scrollIntoView();
        }, 0);else if (b.window.$.innerHeight > this.$.offsetHeight) {
          var d = b.createRange();d[33 == c ? "moveToElementEditStart" : "moveToElementEditEnd"](this);d.select();a.data.preventDefault();
        }
      });CKEDITOR.env.ie && this.attachListener(c, "blur", function () {
        try {
          c.$.selection.empty();
        } catch (a) {}
      });CKEDITOR.env.iOS && this.attachListener(c, "touchend", function () {
        a.focus();
      });d = b.document.getElementsByTag("title").getItem(0);
      d.data("cke-title", d.getText());CKEDITOR.env.ie && (b.document.$.title = this._.docTitle);CKEDITOR.tools.setTimeout(function () {
        "unloaded" == this.status && (this.status = "ready");b.fire("contentDom");this._.isPendingFocus && (b.focus(), this._.isPendingFocus = !1);setTimeout(function () {
          b.fire("dataReady");
        }, 0);
      }, 0, this);
    }function n(a) {
      function f() {
        var c;a.editable().attachListener(a, "selectionChange", function () {
          var d = a.getSelection().getSelectedElement();d && (c && (c.detachEvent("onresizestart", b), c = null), d.$.attachEvent("onresizestart", b), c = d.$);
        });
      }function b(a) {
        a.returnValue = !1;
      }if (CKEDITOR.env.gecko) try {
        var c = a.document.$;c.execCommand("enableObjectResizing", !1, !a.config.disableObjectResizing);c.execCommand("enableInlineTableEditing", !1, !a.config.disableNativeTableHandles);
      } catch (d) {} else CKEDITOR.env.ie && 11 > CKEDITOR.env.version && a.config.disableObjectResizing && f(a);
    }function p() {
      var a = [];if (8 <= CKEDITOR.document.$.documentMode) {
        a.push("html.CSS1Compat [contenteditable\x3dfalse]{min-height:0 !important}");var f = [],
            b;for (b in CKEDITOR.dtd.$removeEmpty) {
          f.push("html.CSS1Compat " + b + "[contenteditable\x3dfalse]");
        }a.push(f.join(",") + "{display:inline-block}");
      } else CKEDITOR.env.gecko && (a.push("html{height:100% !important}"), a.push("img:-moz-broken{-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"));a.push("html{cursor:text;*cursor:auto}");a.push("img,input,textarea{cursor:default}");return a.join("\n");
    }var l;CKEDITOR.plugins.add("wysiwygarea", { init: function init(a) {
        a.config.fullPage && a.addFeature({ allowedContent: "html head title; style [media,type]; body (*)[id]; meta link [*]",
          requiredContent: "body" });a.addMode("wysiwyg", function (f) {
          function b(b) {
            b && b.removeListener();a.editable(new l(a, d.$.contentWindow.document.body));a.setData(a.getData(1), f);
          }var c = "document.open();" + (CKEDITOR.env.ie ? "(" + CKEDITOR.tools.fixDomain + ")();" : "") + "document.close();",
              c = CKEDITOR.env.air ? "javascript:void(0)" : CKEDITOR.env.ie && !CKEDITOR.env.edge ? "javascript:void(function(){" + encodeURIComponent(c) + "}())" : "",
              d = CKEDITOR.dom.element.createFromHtml('\x3ciframe src\x3d"' + c + '" frameBorder\x3d"0"\x3e\x3c/iframe\x3e');
          d.setStyles({ width: "100%", height: "100%" });d.addClass("cke_wysiwyg_frame").addClass("cke_reset");c = a.ui.space("contents");c.append(d);var e = CKEDITOR.env.ie && !CKEDITOR.env.edge || CKEDITOR.env.gecko;if (e) d.on("load", b);var g = a.title,
              h = a.fire("ariaEditorHelpLabel", {}).label;g && (CKEDITOR.env.ie && h && (g += ", " + h), d.setAttribute("title", g));if (h) {
            var g = CKEDITOR.tools.getNextId(),
                k = CKEDITOR.dom.element.createFromHtml('\x3cspan id\x3d"' + g + '" class\x3d"cke_voice_label"\x3e' + h + "\x3c/span\x3e");c.append(k, 1);d.setAttribute("aria-describedby", g);
          }a.on("beforeModeUnload", function (a) {
            a.removeListener();k && k.remove();
          });d.setAttributes({ tabIndex: a.tabIndex, allowTransparency: "true" });!e && b();a.fire("ariaWidget", d);
        });
      } });CKEDITOR.editor.prototype.addContentsCss = function (a) {
      var f = this.config,
          b = f.contentsCss;CKEDITOR.tools.isArray(b) || (f.contentsCss = b ? [b] : []);f.contentsCss.push(a);
    };l = CKEDITOR.tools.createClass({ $: function $() {
        this.base.apply(this, arguments);this._.frameLoadedHandler = CKEDITOR.tools.addFunction(function (a) {
          CKEDITOR.tools.setTimeout(m, 0, this, a);
        }, this);this._.docTitle = this.getWindow().getFrame().getAttribute("title");
      }, base: CKEDITOR.editable, proto: { setData: function setData(a, f) {
          var b = this.editor;if (f) this.setHtml(a), this.fixInitialSelection(), b.fire("dataReady");else {
            this._.isLoadingData = !0;b._.dataStore = { id: 1 };var c = b.config,
                d = c.fullPage,
                e = c.docType,
                g = CKEDITOR.tools.buildStyleHtml(p()).replace(/<style>/, '\x3cstyle data-cke-temp\x3d"1"\x3e');d || (g += CKEDITOR.tools.buildStyleHtml(b.config.contentsCss));var h = c.baseHref ? '\x3cbase href\x3d"' + c.baseHref + '" data-cke-temp\x3d"1" /\x3e' : "";d && (a = a.replace(/<!DOCTYPE[^>]*>/i, function (a) {
              b.docType = e = a;return "";
            }).replace(/<\?xml\s[^\?]*\?>/i, function (a) {
              b.xmlDeclaration = a;return "";
            }));a = b.dataProcessor.toHtml(a);d ? (/<body[\s|>]/.test(a) || (a = "\x3cbody\x3e" + a), /<html[\s|>]/.test(a) || (a = "\x3chtml\x3e" + a + "\x3c/html\x3e"), /<head[\s|>]/.test(a) ? /<title[\s|>]/.test(a) || (a = a.replace(/<head[^>]*>/, "$\x26\x3ctitle\x3e\x3c/title\x3e")) : a = a.replace(/<html[^>]*>/, "$\x26\x3chead\x3e\x3ctitle\x3e\x3c/title\x3e\x3c/head\x3e"), h && (a = a.replace(/<head[^>]*?>/, "$\x26" + h)), a = a.replace(/<\/head\s*>/, g + "$\x26"), a = e + a) : a = c.docType + '\x3chtml dir\x3d"' + c.contentsLangDirection + '" lang\x3d"' + (c.contentsLanguage || b.langCode) + '"\x3e\x3chead\x3e\x3ctitle\x3e' + this._.docTitle + "\x3c/title\x3e" + h + g + "\x3c/head\x3e\x3cbody" + (c.bodyId ? ' id\x3d"' + c.bodyId + '"' : "") + (c.bodyClass ? ' class\x3d"' + c.bodyClass + '"' : "") + "\x3e" + a + "\x3c/body\x3e\x3c/html\x3e";CKEDITOR.env.gecko && (a = a.replace(/<body/, '\x3cbody contenteditable\x3d"true" '), 2E4 > CKEDITOR.env.version && (a = a.replace(/<body[^>]*>/, "$\x26\x3c!-- cke-content-start --\x3e")));c = '\x3cscript id\x3d"cke_actscrpt" type\x3d"text/javascript"' + (CKEDITOR.env.ie ? ' defer\x3d"defer" ' : "") + "\x3evar wasLoaded\x3d0;function onload(){if(!wasLoaded)window.parent.CKEDITOR.tools.callFunction(" + this._.frameLoadedHandler + ",window);wasLoaded\x3d1;}" + (CKEDITOR.env.ie ? "onload();" : 'document.addEventListener("DOMContentLoaded", onload, false );') + "\x3c/script\x3e";CKEDITOR.env.ie && 9 > CKEDITOR.env.version && (c += '\x3cscript id\x3d"cke_shimscrpt"\x3ewindow.parent.CKEDITOR.tools.enableHtml5Elements(document)\x3c/script\x3e');
            h && CKEDITOR.env.ie && 10 > CKEDITOR.env.version && (c += '\x3cscript id\x3d"cke_basetagscrpt"\x3evar baseTag \x3d document.querySelector( "base" );baseTag.href \x3d baseTag.href;\x3c/script\x3e');a = a.replace(/(?=\s*<\/(:?head)>)/, c);this.clearCustomData();this.clearListeners();b.fire("contentDomUnload");var k = this.getDocument();try {
              k.write(a);
            } catch (l) {
              setTimeout(function () {
                k.write(a);
              }, 0);
            }
          }
        }, getData: function getData(a) {
          if (a) return this.getHtml();a = this.editor;var f = a.config,
              b = f.fullPage,
              c = b && a.docType,
              d = b && a.xmlDeclaration,
              e = this.getDocument(),
              b = b ? e.getDocumentElement().getOuterHtml() : e.getBody().getHtml();CKEDITOR.env.gecko && f.enterMode != CKEDITOR.ENTER_BR && (b = b.replace(/<br>(?=\s*(:?$|<\/body>))/, ""));b = a.dataProcessor.toDataFormat(b);d && (b = d + "\n" + b);c && (b = c + "\n" + b);return b;
        }, focus: function focus() {
          this._.isLoadingData ? this._.isPendingFocus = !0 : l.baseProto.focus.call(this);
        }, detach: function detach() {
          var a = this.editor,
              f = a.document,
              b;try {
            b = a.window.getFrame();
          } catch (c) {}l.baseProto.detach.call(this);this.clearCustomData();f.getDocumentElement().clearCustomData();
          CKEDITOR.tools.removeFunction(this._.frameLoadedHandler);b && b.getParent() ? (b.clearCustomData(), (a = b.removeCustomData("onResize")) && a.removeListener(), b.remove()) : CKEDITOR.warn("editor-destroy-iframe");
        } } });
  })();CKEDITOR.config.disableObjectResizing = !1;CKEDITOR.config.disableNativeTableHandles = !0;CKEDITOR.config.disableNativeSpellChecker = !0;(function () {
    function m(a, b) {
      var e, f;b.on("refresh", function (a) {
        var b = [k],
            c;for (c in a.data.states) {
          b.push(a.data.states[c]);
        }this.setState(CKEDITOR.tools.search(b, p) ? p : k);
      }, b, null, 100);b.on("exec", function (b) {
        e = a.getSelection();f = e.createBookmarks(1);b.data || (b.data = {});b.data.done = !1;
      }, b, null, 0);b.on("exec", function () {
        a.forceNextSelectionCheck();e.selectBookmarks(f);
      }, b, null, 100);
    }var k = CKEDITOR.TRISTATE_DISABLED,
        p = CKEDITOR.TRISTATE_OFF;CKEDITOR.plugins.add("indent", { init: function init(a) {
        var b = CKEDITOR.plugins.indent.genericDefinition;
        m(a, a.addCommand("indent", new b(!0)));m(a, a.addCommand("outdent", new b()));a.ui.addButton && (a.ui.addButton("Indent", { label: a.lang.indent.indent, command: "indent", directional: !0, toolbar: "indent,20" }), a.ui.addButton("Outdent", { label: a.lang.indent.outdent, command: "outdent", directional: !0, toolbar: "indent,10" }));a.on("dirChanged", function (b) {
          var f = a.createRange(),
              l = b.data.node;f.setStartBefore(l);f.setEndAfter(l);for (var n = new CKEDITOR.dom.walker(f), c; c = n.next();) {
            if (c.type == CKEDITOR.NODE_ELEMENT) if (!c.equals(l) && c.getDirection()) f.setStartAfter(c), n = new CKEDITOR.dom.walker(f);else {
              var d = a.config.indentClasses;if (d) for (var g = "ltr" == b.data.dir ? ["_rtl", ""] : ["", "_rtl"], h = 0; h < d.length; h++) {
                c.hasClass(d[h] + g[0]) && (c.removeClass(d[h] + g[0]), c.addClass(d[h] + g[1]));
              }d = c.getStyle("margin-right");g = c.getStyle("margin-left");d ? c.setStyle("margin-left", d) : c.removeStyle("margin-left");g ? c.setStyle("margin-right", g) : c.removeStyle("margin-right");
            }
          }
        });
      } });CKEDITOR.plugins.indent = { genericDefinition: function genericDefinition(a) {
        this.isIndent = !!a;
        this.startDisabled = !this.isIndent;
      }, specificDefinition: function specificDefinition(a, b, e) {
        this.name = b;this.editor = a;this.jobs = {};this.enterBr = a.config.enterMode == CKEDITOR.ENTER_BR;this.isIndent = !!e;this.relatedGlobal = e ? "indent" : "outdent";this.indentKey = e ? 9 : CKEDITOR.SHIFT + 9;this.database = {};
      }, registerCommands: function registerCommands(a, b) {
        a.on("pluginsLoaded", function () {
          for (var a in b) {
            (function (a, b) {
              var e = a.getCommand(b.relatedGlobal),
                  c;for (c in b.jobs) {
                e.on("exec", function (d) {
                  d.data.done || (a.fire("lockSnapshot"), b.execJob(a, c) && (d.data.done = !0), a.fire("unlockSnapshot"), CKEDITOR.dom.element.clearAllMarkers(b.database));
                }, this, null, c), e.on("refresh", function (d) {
                  d.data.states || (d.data.states = {});d.data.states[b.name + "@" + c] = b.refreshJob(a, c, d.data.path);
                }, this, null, c);
              }a.addFeature(b);
            })(this, b[a]);
          }
        });
      } };CKEDITOR.plugins.indent.genericDefinition.prototype = { context: "p", exec: function exec() {} };CKEDITOR.plugins.indent.specificDefinition.prototype = { execJob: function execJob(a, b) {
        var e = this.jobs[b];if (e.state != k) return e.exec.call(this, a);
      }, refreshJob: function refreshJob(a, b, e) {
        b = this.jobs[b];a.activeFilter.checkFeature(this) ? b.state = b.refresh.call(this, a, e) : b.state = k;return b.state;
      }, getContext: function getContext(a) {
        return a.contains(this.context);
      } };
  })();(function () {
    function w(f) {
      function g(b) {
        for (var e = c.startContainer, a = c.endContainer; e && !e.getParent().equals(b);) {
          e = e.getParent();
        }for (; a && !a.getParent().equals(b);) {
          a = a.getParent();
        }if (!e || !a) return !1;for (var d = [], h = !1; !h;) {
          e.equals(a) && (h = !0), d.push(e), e = e.getNext();
        }if (1 > d.length) return !1;e = b.getParents(!0);for (a = 0; a < e.length; a++) {
          if (e[a].getName && p[e[a].getName()]) {
            b = e[a];break;
          }
        }for (var e = k.isIndent ? 1 : -1, a = d[0], d = d[d.length - 1], h = CKEDITOR.plugins.list.listToArray(b, q), m = h[d.getCustomData("listarray_index")].indent, a = a.getCustomData("listarray_index"); a <= d.getCustomData("listarray_index"); a++) {
          if (h[a].indent += e, 0 < e) {
            for (var g = h[a].parent, n = a - 1; 0 <= n; n--) {
              if (h[n].indent === e) {
                g = h[n].parent;break;
              }
            }h[a].parent = new CKEDITOR.dom.element(g.getName(), g.getDocument());
          }
        }for (a = d.getCustomData("listarray_index") + 1; a < h.length && h[a].indent > m; a++) {
          h[a].indent += e;
        }e = CKEDITOR.plugins.list.arrayToList(h, q, null, f.config.enterMode, b.getDirection());if (!k.isIndent) {
          var t;if ((t = b.getParent()) && t.is("li")) for (var d = e.listNode.getChildren(), r = [], l, a = d.count() - 1; 0 <= a; a--) {
            (l = d.getItem(a)) && l.is && l.is("li") && r.push(l);
          }
        }e && e.listNode.replace(b);if (r && r.length) for (a = 0; a < r.length; a++) {
          for (l = b = r[a]; (l = l.getNext()) && l.is && l.getName() in p;) {
            CKEDITOR.env.needsNbspFiller && !b.getFirst(x) && b.append(c.document.createText(" ")), b.append(l);
          }b.insertAfter(t);
        }e && f.fire("contentDomInvalidated");return !0;
      }for (var k = this, q = this.database, p = this.context, c, m = f.getSelection(), m = (m && m.getRanges()).createIterator(); c = m.getNextRange();) {
        for (var b = c.getCommonAncestor(); b && (b.type != CKEDITOR.NODE_ELEMENT || !p[b.getName()]);) {
          if (f.editable().equals(b)) {
            b = !1;break;
          }b = b.getParent();
        }b || (b = c.startPath().contains(p)) && c.setEndAt(b, CKEDITOR.POSITION_BEFORE_END);if (!b) {
          var d = c.getEnclosedNode();d && d.type == CKEDITOR.NODE_ELEMENT && d.getName() in p && (c.setStartAt(d, CKEDITOR.POSITION_AFTER_START), c.setEndAt(d, CKEDITOR.POSITION_BEFORE_END), b = d);
        }b && c.startContainer.type == CKEDITOR.NODE_ELEMENT && c.startContainer.getName() in p && (d = new CKEDITOR.dom.walker(c), d.evaluator = n, c.startContainer = d.next());b && c.endContainer.type == CKEDITOR.NODE_ELEMENT && c.endContainer.getName() in p && (d = new CKEDITOR.dom.walker(c), d.evaluator = n, c.endContainer = d.previous());if (b) return g(b);
      }return 0;
    }function n(f) {
      return f.type == CKEDITOR.NODE_ELEMENT && f.is("li");
    }function x(f) {
      return y(f) && z(f);
    }var y = CKEDITOR.dom.walker.whitespaces(!0),
        z = CKEDITOR.dom.walker.bookmark(!1, !0),
        u = CKEDITOR.TRISTATE_DISABLED,
        v = CKEDITOR.TRISTATE_OFF;CKEDITOR.plugins.add("indentlist", { requires: "indent", init: function init(f) {
        function g(f) {
          k.specificDefinition.apply(this, arguments);this.requiredContent = ["ul", "ol"];f.on("key", function (g) {
            var c = f.elementPath();if ("wysiwyg" == f.mode && g.data.keyCode == this.indentKey && c) {
              var m = this.getContext(c);!m || this.isIndent && CKEDITOR.plugins.indentList.firstItemInPath(this.context, c, m) || (f.execCommand(this.relatedGlobal), g.cancel());
            }
          }, this);this.jobs[this.isIndent ? 10 : 30] = { refresh: this.isIndent ? function (f, c) {
              var g = this.getContext(c),
                  b = CKEDITOR.plugins.indentList.firstItemInPath(this.context, c, g);return g && this.isIndent && !b ? v : u;
            } : function (f, c) {
              return !this.getContext(c) || this.isIndent ? u : v;
            }, exec: CKEDITOR.tools.bind(w, this) };
        }var k = CKEDITOR.plugins.indent;k.registerCommands(f, { indentlist: new g(f, "indentlist", !0), outdentlist: new g(f, "outdentlist") });CKEDITOR.tools.extend(g.prototype, k.specificDefinition.prototype, { context: { ol: 1, ul: 1 } });
      } });CKEDITOR.plugins.indentList = {};CKEDITOR.plugins.indentList.firstItemInPath = function (f, g, k) {
      var q = g.contains(n);k || (k = g.contains(f));return k && q && q.equals(k.getFirst(n));
    };
  })();(function () {
    function g(a, b) {
      var c = l.exec(a),
          d = l.exec(b);if (c) {
        if (!c[2] && "px" == d[2]) return d[1];if ("px" == c[2] && !d[2]) return d[1] + "px";
      }return b;
    }var k = CKEDITOR.htmlParser.cssStyle,
        h = CKEDITOR.tools.cssLength,
        l = /^((?:\d*(?:\.\d+))|(?:\d+))(.*)?$/i,
        m = { elements: { $: function $(a) {
          var b = a.attributes;if ((b = (b = (b = b && b["data-cke-realelement"]) && new CKEDITOR.htmlParser.fragment.fromHtml(decodeURIComponent(b))) && b.children[0]) && a.attributes["data-cke-resizable"]) {
            var c = new k(a).rules;a = b.attributes;var d = c.width,
                c = c.height;d && (a.width = g(a.width, d));c && (a.height = g(a.height, c));
          }return b;
        } } };CKEDITOR.plugins.add("fakeobjects", { init: function init(a) {
        a.filter.allow("img[!data-cke-realelement,src,alt,title](*){*}", "fakeobjects");
      }, afterInit: function afterInit(a) {
        (a = (a = a.dataProcessor) && a.htmlFilter) && a.addRules(m, { applyToAll: !0 });
      } });CKEDITOR.editor.prototype.createFakeElement = function (a, b, c, d) {
      var e = this.lang.fakeobjects,
          e = e[c] || e.unknown;b = { "class": b, "data-cke-realelement": encodeURIComponent(a.getOuterHtml()), "data-cke-real-node-type": a.type,
        alt: e, title: e, align: a.getAttribute("align") || "" };CKEDITOR.env.hc || (b.src = CKEDITOR.tools.transparentImageData);c && (b["data-cke-real-element-type"] = c);d && (b["data-cke-resizable"] = d, c = new k(), d = a.getAttribute("width"), a = a.getAttribute("height"), d && (c.rules.width = h(d)), a && (c.rules.height = h(a)), c.populate(b));return this.document.createElement("img", { attributes: b });
    };CKEDITOR.editor.prototype.createFakeParserElement = function (a, b, c, d) {
      var e = this.lang.fakeobjects,
          e = e[c] || e.unknown,
          f;f = new CKEDITOR.htmlParser.basicWriter();
      a.writeHtml(f);f = f.getHtml();b = { "class": b, "data-cke-realelement": encodeURIComponent(f), "data-cke-real-node-type": a.type, alt: e, title: e, align: a.attributes.align || "" };CKEDITOR.env.hc || (b.src = CKEDITOR.tools.transparentImageData);c && (b["data-cke-real-element-type"] = c);d && (b["data-cke-resizable"] = d, d = a.attributes, a = new k(), c = d.width, d = d.height, void 0 !== c && (a.rules.width = h(c)), void 0 !== d && (a.rules.height = h(d)), a.populate(b));return new CKEDITOR.htmlParser.element("img", b);
    };CKEDITOR.editor.prototype.restoreRealElement = function (a) {
      if (a.data("cke-real-node-type") != CKEDITOR.NODE_ELEMENT) return null;var b = CKEDITOR.dom.element.createFromHtml(decodeURIComponent(a.data("cke-realelement")), this.document);if (a.data("cke-resizable")) {
        var c = a.getStyle("width");a = a.getStyle("height");c && b.setAttribute("width", g(b.getAttribute("width"), c));a && b.setAttribute("height", g(b.getAttribute("height"), a));
      }return b;
    };
  })();(function () {
    function p(c) {
      return c.replace(/'/g, "\\$\x26");
    }function q(c) {
      for (var b, a = c.length, d = [], f = 0; f < a; f++) {
        b = c.charCodeAt(f), d.push(b);
      }return "String.fromCharCode(" + d.join(",") + ")";
    }function r(c, b) {
      var a = c.plugins.link,
          d = a.compiledProtectionFunction.params,
          f,
          e;e = [a.compiledProtectionFunction.name, "("];for (var g = 0; g < d.length; g++) {
        a = d[g].toLowerCase(), f = b[a], 0 < g && e.push(","), e.push("'", f ? p(encodeURIComponent(b[a])) : "", "'");
      }e.push(")");return e.join("");
    }function n(c) {
      c = c.config.emailProtection || "";
      var b;c && "encode" != c && (b = {}, c.replace(/^([^(]+)\(([^)]+)\)$/, function (a, c, f) {
        b.name = c;b.params = [];f.replace(/[^,\s]+/g, function (a) {
          b.params.push(a);
        });
      }));return b;
    }CKEDITOR.plugins.add("link", { requires: "dialog,fakeobjects", onLoad: function onLoad() {
        function c(b) {
          return a.replace(/%1/g, "rtl" == b ? "right" : "left").replace(/%2/g, "cke_contents_" + b);
        }var b = "background:url(" + CKEDITOR.getUrl(this.path + "images" + (CKEDITOR.env.hidpi ? "/hidpi" : "") + "/anchor.png") + ") no-repeat %1 center;border:1px dotted #00f;background-size:16px;",
            a = ".%2 a.cke_anchor,.%2 a.cke_anchor_empty,.cke_editable.%2 a[name],.cke_editable.%2 a[data-cke-saved-name]{" + b + "padding-%1:18px;cursor:auto;}.%2 img.cke_anchor{" + b + "width:16px;min-height:15px;height:1.15em;vertical-align:text-bottom;}";CKEDITOR.addCss(c("ltr") + c("rtl"));
      }, init: function init(c) {
        var b = "a[!href]";CKEDITOR.dialog.isTabEnabled(c, "link", "advanced") && (b = b.replace("]", ",accesskey,charset,dir,id,lang,name,rel,tabindex,title,type,download]{*}(*)"));CKEDITOR.dialog.isTabEnabled(c, "link", "target") && (b = b.replace("]", ",target,onclick]"));c.addCommand("link", new CKEDITOR.dialogCommand("link", { allowedContent: b, requiredContent: "a[href]" }));c.addCommand("anchor", new CKEDITOR.dialogCommand("anchor", { allowedContent: "a[!name,id]", requiredContent: "a[name]" }));c.addCommand("unlink", new CKEDITOR.unlinkCommand());c.addCommand("removeAnchor", new CKEDITOR.removeAnchorCommand());c.setKeystroke(CKEDITOR.CTRL + 76, "link");c.ui.addButton && (c.ui.addButton("Link", { label: c.lang.link.toolbar, command: "link", toolbar: "links,10" }), c.ui.addButton("Unlink", { label: c.lang.link.unlink, command: "unlink", toolbar: "links,20" }), c.ui.addButton("Anchor", { label: c.lang.link.anchor.toolbar, command: "anchor", toolbar: "links,30" }));CKEDITOR.dialog.add("link", this.path + "dialogs/link.js");CKEDITOR.dialog.add("anchor", this.path + "dialogs/anchor.js");c.on("doubleclick", function (a) {
          var b = a.data.element.getAscendant({ a: 1, img: 1 }, !0);b && !b.isReadOnly() && (b.is("a") ? (a.data.dialog = !b.getAttribute("name") || b.getAttribute("href") && b.getChildCount() ? "link" : "anchor", a.data.link = b) : CKEDITOR.plugins.link.tryRestoreFakeAnchor(c, b) && (a.data.dialog = "anchor"));
        }, null, null, 0);c.on("doubleclick", function (a) {
          a.data.dialog in { link: 1, anchor: 1 } && a.data.link && c.getSelection().selectElement(a.data.link);
        }, null, null, 20);c.addMenuItems && c.addMenuItems({ anchor: { label: c.lang.link.anchor.menu, command: "anchor", group: "anchor", order: 1 }, removeAnchor: { label: c.lang.link.anchor.remove, command: "removeAnchor", group: "anchor", order: 5 }, link: { label: c.lang.link.menu, command: "link", group: "link",
            order: 1 }, unlink: { label: c.lang.link.unlink, command: "unlink", group: "link", order: 5 } });c.contextMenu && c.contextMenu.addListener(function (a) {
          if (!a || a.isReadOnly()) return null;a = CKEDITOR.plugins.link.tryRestoreFakeAnchor(c, a);if (!a && !(a = CKEDITOR.plugins.link.getSelectedLink(c))) return null;var b = {};a.getAttribute("href") && a.getChildCount() && (b = { link: CKEDITOR.TRISTATE_OFF, unlink: CKEDITOR.TRISTATE_OFF });a && a.hasAttribute("name") && (b.anchor = b.removeAnchor = CKEDITOR.TRISTATE_OFF);return b;
        });this.compiledProtectionFunction = n(c);
      }, afterInit: function afterInit(c) {
        c.dataProcessor.dataFilter.addRules({ elements: { a: function a(_a10) {
              return _a10.attributes.name ? _a10.children.length ? null : c.createFakeParserElement(_a10, "cke_anchor", "anchor") : null;
            } } });var b = c._.elementsPath && c._.elementsPath.filters;b && b.push(function (a, b) {
          if ("a" == b && (CKEDITOR.plugins.link.tryRestoreFakeAnchor(c, a) || a.getAttribute("name") && (!a.getAttribute("href") || !a.getChildCount()))) return "anchor";
        });
      } });var t = /^javascript:/,
        u = /^mailto:([^?]+)(?:\?(.+))?$/,
        v = /subject=([^;?:@&=$,\/]*)/i,
        w = /body=([^;?:@&=$,\/]*)/i,
        x = /^#(.*)$/,
        y = /^((?:http|https|ftp|news):\/\/)?(.*)$/,
        z = /^(_(?:self|top|parent|blank))$/,
        A = /^javascript:void\(location\.href='mailto:'\+String\.fromCharCode\(([^)]+)\)(?:\+'(.*)')?\)$/,
        B = /^javascript:([^(]+)\(([^)]+)\)$/,
        C = /\s*window.open\(\s*this\.href\s*,\s*(?:'([^']*)'|null)\s*,\s*'([^']*)'\s*\)\s*;\s*return\s*false;*\s*/,
        D = /(?:^|,)([^=]+)=(\d+|yes|no)/gi,
        m = { id: "advId", dir: "advLangDir", accessKey: "advAccessKey", name: "advName", lang: "advLangCode", tabindex: "advTabIndex",
      title: "advTitle", type: "advContentType", "class": "advCSSClasses", charset: "advCharset", style: "advStyles", rel: "advRel" };CKEDITOR.plugins.link = { getSelectedLink: function getSelectedLink(c, b) {
        var a = c.getSelection(),
            d = a.getSelectedElement(),
            f = a.getRanges(),
            e = [],
            g;if (!b && d && d.is("a")) return d;for (d = 0; d < f.length; d++) {
          if (g = a.getRanges()[d], g.shrink(CKEDITOR.SHRINK_ELEMENT, !0, { skipBogus: !0 }), (g = c.elementPath(g.getCommonAncestor()).contains("a", 1)) && b) e.push(g);else if (g) return g;
        }return b ? e : null;
      }, getEditorAnchors: function getEditorAnchors(c) {
        for (var b = c.editable(), a = b.isInline() && !c.plugins.divarea ? c.document : b, b = a.getElementsByTag("a"), a = a.getElementsByTag("img"), d = [], f = 0, e; e = b.getItem(f++);) {
          (e.data("cke-saved-name") || e.hasAttribute("name")) && d.push({ name: e.data("cke-saved-name") || e.getAttribute("name"), id: e.getAttribute("id") });
        }for (f = 0; e = a.getItem(f++);) {
          (e = this.tryRestoreFakeAnchor(c, e)) && d.push({ name: e.getAttribute("name"), id: e.getAttribute("id") });
        }return d;
      }, fakeAnchor: !0, tryRestoreFakeAnchor: function tryRestoreFakeAnchor(c, b) {
        if (b && b.data("cke-real-element-type") && "anchor" == b.data("cke-real-element-type")) {
          var a = c.restoreRealElement(b);if (a.data("cke-saved-name")) return a;
        }
      }, parseLinkAttributes: function parseLinkAttributes(c, b) {
        var a = b && (b.data("cke-saved-href") || b.getAttribute("href")) || "",
            d = c.plugins.link.compiledProtectionFunction,
            f = c.config.emailProtection,
            e,
            g = {};a.match(t) && ("encode" == f ? a = a.replace(A, function (a, b, c) {
          c = c || "";return "mailto:" + String.fromCharCode.apply(String, b.split(",")) + c.replace(/\\'/g, "'");
        }) : f && a.replace(B, function (a, b, c) {
          if (b == d.name) {
            g.type = "email";a = g.email = {};b = /(^')|('$)/g;c = c.match(/[^,\s]+/g);for (var e = c.length, f, h, k = 0; k < e; k++) {
              f = decodeURIComponent, h = c[k].replace(b, "").replace(/\\'/g, "'"), h = f(h), f = d.params[k].toLowerCase(), a[f] = h;
            }a.address = [a.name, a.domain].join("@");
          }
        }));if (!g.type) if (f = a.match(x)) g.type = "anchor", g.anchor = {}, g.anchor.name = g.anchor.id = f[1];else if (f = a.match(u)) {
          e = a.match(v);a = a.match(w);g.type = "email";var k = g.email = {};k.address = f[1];e && (k.subject = decodeURIComponent(e[1]));a && (k.body = decodeURIComponent(a[1]));
        } else a && (e = a.match(y)) && (g.type = "url", g.url = {}, g.url.protocol = e[1], g.url.url = e[2]);if (b) {
          if (a = b.getAttribute("target")) g.target = { type: a.match(z) ? a : "frame", name: a };else if (a = (a = b.data("cke-pa-onclick") || b.getAttribute("onclick")) && a.match(C)) for (g.target = { type: "popup", name: a[1] }; f = D.exec(a[2]);) {
            "yes" != f[2] && "1" != f[2] || f[1] in { height: 1, width: 1, top: 1, left: 1 } ? isFinite(f[2]) && (g.target[f[1]] = f[2]) : g.target[f[1]] = !0;
          }null !== b.getAttribute("download") && (g.download = !0);var a = {},
              h;for (h in m) {
            (f = b.getAttribute(h)) && (a[m[h]] = f);
          }if (h = b.data("cke-saved-name") || a.advName) a.advName = h;CKEDITOR.tools.isEmpty(a) || (g.advanced = a);
        }return g;
      }, getLinkAttributes: function getLinkAttributes(c, b) {
        var a = c.config.emailProtection || "",
            d = {};switch (b.type) {case "url":
            var a = b.url && void 0 !== b.url.protocol ? b.url.protocol : "http://",
                f = b.url && CKEDITOR.tools.trim(b.url.url) || "";d["data-cke-saved-href"] = 0 === f.indexOf("/") ? f : a + f;break;case "anchor":
            a = b.anchor && b.anchor.id;d["data-cke-saved-href"] = "#" + (b.anchor && b.anchor.name || a || "");break;case "email":
            var e = b.email,
                f = e.address;
            switch (a) {case "":case "encode":
                var g = encodeURIComponent(e.subject || ""),
                    k = encodeURIComponent(e.body || ""),
                    e = [];g && e.push("subject\x3d" + g);k && e.push("body\x3d" + k);e = e.length ? "?" + e.join("\x26") : "";"encode" == a ? (a = ["javascript:void(location.href\x3d'mailto:'+", q(f)], e && a.push("+'", p(e), "'"), a.push(")")) : a = ["mailto:", f, e];break;default:
                a = f.split("@", 2), e.name = a[0], e.domain = a[1], a = ["javascript:", r(c, e)];}d["data-cke-saved-href"] = a.join("");}if (b.target) if ("popup" == b.target.type) {
          for (var a = ["window.open(this.href, '", b.target.name || "", "', '"], h = "resizable status location toolbar menubar fullscreen scrollbars dependent".split(" "), f = h.length, g = function g(a) {
            b.target[a] && h.push(a + "\x3d" + b.target[a]);
          }, e = 0; e < f; e++) {
            h[e] += b.target[h[e]] ? "\x3dyes" : "\x3dno";
          }g("width");g("left");g("height");g("top");a.push(h.join(","), "'); return false;");d["data-cke-pa-onclick"] = a.join("");
        } else "notSet" != b.target.type && b.target.name && (d.target = b.target.name);b.download && (d.download = "");if (b.advanced) {
          for (var l in m) {
            (a = b.advanced[m[l]]) && (d[l] = a);
          }d.name && (d["data-cke-saved-name"] = d.name);
        }d["data-cke-saved-href"] && (d.href = d["data-cke-saved-href"]);l = { target: 1, onclick: 1, "data-cke-pa-onclick": 1, "data-cke-saved-name": 1, download: 1 };b.advanced && CKEDITOR.tools.extend(l, m);for (var n in d) {
          delete l[n];
        }return { set: d, removed: CKEDITOR.tools.objectKeys(l) };
      }, showDisplayTextForElement: function showDisplayTextForElement(c, b) {
        var a = { img: 1, table: 1, tbody: 1, thead: 1, tfoot: 1, input: 1, select: 1, textarea: 1 },
            d = b.getSelection();return b.widgets && b.widgets.focused || d && 1 < d.getRanges().length ? !1 : !c || !c.getName || !c.is(a);
      } };CKEDITOR.unlinkCommand = function () {};CKEDITOR.unlinkCommand.prototype = { exec: function exec(c) {
        if (CKEDITOR.env.ie) {
          var b = c.getSelection().getRanges()[0],
              a = b.getPreviousEditableNode() && b.getPreviousEditableNode().getAscendant("a", !0) || b.getNextEditableNode() && b.getNextEditableNode().getAscendant("a", !0),
              d;b.collapsed && a && (d = b.createBookmark(), b.selectNodeContents(a), b.select());
        }a = new CKEDITOR.style({ element: "a", type: CKEDITOR.STYLE_INLINE, alwaysRemoveElement: 1 });c.removeStyle(a);
        d && (b.moveToBookmark(d), b.select());
      }, refresh: function refresh(c, b) {
        var a = b.lastElement && b.lastElement.getAscendant("a", !0);a && "a" == a.getName() && a.getAttribute("href") && a.getChildCount() ? this.setState(CKEDITOR.TRISTATE_OFF) : this.setState(CKEDITOR.TRISTATE_DISABLED);
      }, contextSensitive: 1, startDisabled: 1, requiredContent: "a[href]", editorFocus: 1 };CKEDITOR.removeAnchorCommand = function () {};CKEDITOR.removeAnchorCommand.prototype = { exec: function exec(c) {
        var b = c.getSelection(),
            a = b.createBookmarks(),
            d;if (b && (d = b.getSelectedElement()) && (d.getChildCount() ? d.is("a") : CKEDITOR.plugins.link.tryRestoreFakeAnchor(c, d))) d.remove(1);else if (d = CKEDITOR.plugins.link.getSelectedLink(c)) d.hasAttribute("href") ? (d.removeAttributes({ name: 1, "data-cke-saved-name": 1 }), d.removeClass("cke_anchor")) : d.remove(1);b.selectBookmarks(a);
      }, requiredContent: "a[name]" };CKEDITOR.tools.extend(CKEDITOR.config, { linkShowAdvancedTab: !0, linkShowTargetTab: !0 });
  })();(function () {
    function I(b, m, e) {
      function c(c) {
        if (!(!(a = d[c ? "getFirst" : "getLast"]()) || a.is && a.isBlockBoundary() || !(p = m.root[c ? "getPrevious" : "getNext"](CKEDITOR.dom.walker.invisible(!0))) || p.is && p.isBlockBoundary({ br: 1 }))) b.document.createElement("br")[c ? "insertBefore" : "insertAfter"](a);
      }for (var f = CKEDITOR.plugins.list.listToArray(m.root, e), g = [], k = 0; k < m.contents.length; k++) {
        var h = m.contents[k];(h = h.getAscendant("li", !0)) && !h.getCustomData("list_item_processed") && (g.push(h), CKEDITOR.dom.element.setMarker(e, h, "list_item_processed", !0));
      }h = null;for (k = 0; k < g.length; k++) {
        h = g[k].getCustomData("listarray_index"), f[h].indent = -1;
      }for (k = h + 1; k < f.length; k++) {
        if (f[k].indent > f[k - 1].indent + 1) {
          g = f[k - 1].indent + 1 - f[k].indent;for (h = f[k].indent; f[k] && f[k].indent >= h;) {
            f[k].indent += g, k++;
          }k--;
        }
      }var d = CKEDITOR.plugins.list.arrayToList(f, e, null, b.config.enterMode, m.root.getAttribute("dir")).listNode,
          a,
          p;c(!0);c();d.replace(m.root);b.fire("contentDomInvalidated");
    }function B(b, m) {
      this.name = b;this.context = this.type = m;this.allowedContent = m + " li";this.requiredContent = m;
    }function E(b, m, e, c) {
      for (var f, g; f = b[c ? "getLast" : "getFirst"](J);) {
        (g = f.getDirection(1)) !== m.getDirection(1) && f.setAttribute("dir", g), f.remove(), e ? f[c ? "insertBefore" : "insertAfter"](e) : m.append(f, c);
      }
    }function F(b) {
      function m(e) {
        var c = b[e ? "getPrevious" : "getNext"](u);c && c.type == CKEDITOR.NODE_ELEMENT && c.is(b.getName()) && (E(b, c, null, !e), b.remove(), b = c);
      }m();m(1);
    }function G(b) {
      return b.type == CKEDITOR.NODE_ELEMENT && (b.getName() in CKEDITOR.dtd.$block || b.getName() in CKEDITOR.dtd.$listItem) && CKEDITOR.dtd[b.getName()]["#"];
    }function C(b, m, e) {
      b.fire("saveSnapshot");e.enlarge(CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS);var c = e.extractContents();m.trim(!1, !0);var f = m.createBookmark(),
          g = new CKEDITOR.dom.elementPath(m.startContainer),
          k = g.block,
          g = g.lastElement.getAscendant("li", 1) || k,
          h = new CKEDITOR.dom.elementPath(e.startContainer),
          d = h.contains(CKEDITOR.dtd.$listItem),
          h = h.contains(CKEDITOR.dtd.$list);k ? (k = k.getBogus()) && k.remove() : h && (k = h.getPrevious(u)) && z(k) && k.remove();(k = c.getLast()) && k.type == CKEDITOR.NODE_ELEMENT && k.is("br") && k.remove();(k = m.startContainer.getChild(m.startOffset)) ? c.insertBefore(k) : m.startContainer.append(c);d && (c = A(d)) && (g.contains(d) ? (E(c, d.getParent(), d), c.remove()) : g.append(c));for (; e.checkStartOfBlock() && e.checkEndOfBlock();) {
        h = e.startPath();c = h.block;if (!c) break;c.is("li") && (g = c.getParent(), c.equals(g.getLast(u)) && c.equals(g.getFirst(u)) && (c = g));e.moveToPosition(c, CKEDITOR.POSITION_BEFORE_START);c.remove();
      }e = e.clone();c = b.editable();e.setEndAt(c, CKEDITOR.POSITION_BEFORE_END);e = new CKEDITOR.dom.walker(e);
      e.evaluator = function (a) {
        return u(a) && !z(a);
      };(e = e.next()) && e.type == CKEDITOR.NODE_ELEMENT && e.getName() in CKEDITOR.dtd.$list && F(e);m.moveToBookmark(f);m.select();b.fire("saveSnapshot");
    }function A(b) {
      return (b = b.getLast(u)) && b.type == CKEDITOR.NODE_ELEMENT && b.getName() in v ? b : null;
    }var v = { ol: 1, ul: 1 },
        K = CKEDITOR.dom.walker.whitespaces(),
        H = CKEDITOR.dom.walker.bookmark(),
        u = function u(b) {
      return !(K(b) || H(b));
    },
        z = CKEDITOR.dom.walker.bogus();CKEDITOR.plugins.list = { listToArray: function listToArray(b, m, e, c, f) {
        if (!v[b.getName()]) return [];
        c || (c = 0);e || (e = []);for (var g = 0, k = b.getChildCount(); g < k; g++) {
          var h = b.getChild(g);h.type == CKEDITOR.NODE_ELEMENT && h.getName() in CKEDITOR.dtd.$list && CKEDITOR.plugins.list.listToArray(h, m, e, c + 1);if ("li" == h.$.nodeName.toLowerCase()) {
            var d = { parent: b, indent: c, element: h, contents: [] };f ? d.grandparent = f : (d.grandparent = b.getParent(), d.grandparent && "li" == d.grandparent.$.nodeName.toLowerCase() && (d.grandparent = d.grandparent.getParent()));m && CKEDITOR.dom.element.setMarker(m, h, "listarray_index", e.length);e.push(d);
            for (var a = 0, p = h.getChildCount(), l; a < p; a++) {
              l = h.getChild(a), l.type == CKEDITOR.NODE_ELEMENT && v[l.getName()] ? CKEDITOR.plugins.list.listToArray(l, m, e, c + 1, d.grandparent) : d.contents.push(l);
            }
          }
        }return e;
      }, arrayToList: function arrayToList(b, m, e, c, f) {
        e || (e = 0);if (!b || b.length < e + 1) return null;for (var g, k = b[e].parent.getDocument(), h = new CKEDITOR.dom.documentFragment(k), d = null, a = e, p = Math.max(b[e].indent, 0), l = null, q, n, t = c == CKEDITOR.ENTER_P ? "p" : "div";;) {
          var r = b[a];g = r.grandparent;q = r.element.getDirection(1);if (r.indent == p) {
            d && b[a].parent.getName() == d.getName() || (d = b[a].parent.clone(!1, 1), f && d.setAttribute("dir", f), h.append(d));l = d.append(r.element.clone(0, 1));q != d.getDirection(1) && l.setAttribute("dir", q);for (g = 0; g < r.contents.length; g++) {
              l.append(r.contents[g].clone(1, 1));
            }a++;
          } else if (r.indent == Math.max(p, 0) + 1) r = b[a - 1].element.getDirection(1), a = CKEDITOR.plugins.list.arrayToList(b, null, a, c, r != q ? q : null), !l.getChildCount() && CKEDITOR.env.needsNbspFiller && 7 >= k.$.documentMode && l.append(k.createText(" ")), l.append(a.listNode), a = a.nextIndex;else if (-1 == r.indent && !e && g) {
            v[g.getName()] ? (l = r.element.clone(!1, !0), q != g.getDirection(1) && l.setAttribute("dir", q)) : l = new CKEDITOR.dom.documentFragment(k);var d = g.getDirection(1) != q,
                y = r.element,
                D = y.getAttribute("class"),
                z = y.getAttribute("style"),
                A = l.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT && (c != CKEDITOR.ENTER_BR || d || z || D),
                w,
                B = r.contents.length,
                x;for (g = 0; g < B; g++) {
              if (w = r.contents[g], H(w) && 1 < B) A ? x = w.clone(1, 1) : l.append(w.clone(1, 1));else if (w.type == CKEDITOR.NODE_ELEMENT && w.isBlockBoundary()) {
                d && !w.getDirection() && w.setAttribute("dir", q);n = w;var C = y.getAttribute("style");C && n.setAttribute("style", C.replace(/([^;])$/, "$1;") + (n.getAttribute("style") || ""));D && w.addClass(D);n = null;x && (l.append(x), x = null);l.append(w.clone(1, 1));
              } else A ? (n || (n = k.createElement(t), l.append(n), d && n.setAttribute("dir", q)), z && n.setAttribute("style", z), D && n.setAttribute("class", D), x && (n.append(x), x = null), n.append(w.clone(1, 1))) : l.append(w.clone(1, 1));
            }x && ((n || l).append(x), x = null);l.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT && a != b.length - 1 && (CKEDITOR.env.needsBrFiller && (q = l.getLast()) && q.type == CKEDITOR.NODE_ELEMENT && q.is("br") && q.remove(), (q = l.getLast(u)) && q.type == CKEDITOR.NODE_ELEMENT && q.is(CKEDITOR.dtd.$block) || l.append(k.createElement("br")));q = l.$.nodeName.toLowerCase();"div" != q && "p" != q || l.appendBogus();h.append(l);d = null;a++;
          } else return null;n = null;if (b.length <= a || Math.max(b[a].indent, 0) < p) break;
        }if (m) for (b = h.getFirst(); b;) {
          if (b.type == CKEDITOR.NODE_ELEMENT && (CKEDITOR.dom.element.clearMarkers(m, b), b.getName() in CKEDITOR.dtd.$listItem && (e = b, k = f = c = void 0, c = e.getDirection()))) {
            for (f = e.getParent(); f && !(k = f.getDirection());) {
              f = f.getParent();
            }c == k && e.removeAttribute("dir");
          }b = b.getNextSourceNode();
        }return { listNode: h, nextIndex: a };
      } };var L = /^h[1-6]$/,
        J = CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT);B.prototype = { exec: function exec(b) {
        this.refresh(b, b.elementPath());var m = b.config,
            e = b.getSelection(),
            c = e && e.getRanges();if (this.state == CKEDITOR.TRISTATE_OFF) {
          var f = b.editable();if (f.getFirst(u)) {
            var g = 1 == c.length && c[0];(m = g && g.getEnclosedNode()) && m.is && this.type == m.getName() && this.setState(CKEDITOR.TRISTATE_ON);
          } else m.enterMode == CKEDITOR.ENTER_BR ? f.appendBogus() : c[0].fixBlock(1, m.enterMode == CKEDITOR.ENTER_P ? "p" : "div"), e.selectRanges(c);
        }for (var m = e.createBookmarks(!0), f = [], k = {}, c = c.createIterator(), h = 0; (g = c.getNextRange()) && ++h;) {
          var d = g.getBoundaryNodes(),
              a = d.startNode,
              p = d.endNode;a.type == CKEDITOR.NODE_ELEMENT && "td" == a.getName() && g.setStartAt(d.startNode, CKEDITOR.POSITION_AFTER_START);p.type == CKEDITOR.NODE_ELEMENT && "td" == p.getName() && g.setEndAt(d.endNode, CKEDITOR.POSITION_BEFORE_END);g = g.createIterator();for (g.forceBrBreak = this.state == CKEDITOR.TRISTATE_OFF; d = g.getNextParagraph();) {
            if (!d.getCustomData("list_block")) {
              CKEDITOR.dom.element.setMarker(k, d, "list_block", 1);for (var l = b.elementPath(d), a = l.elements, p = 0, l = l.blockLimit, q, n = a.length - 1; 0 <= n && (q = a[n]); n--) {
                if (v[q.getName()] && l.contains(q)) {
                  l.removeCustomData("list_group_object_" + h);(a = q.getCustomData("list_group_object")) ? a.contents.push(d) : (a = { root: q, contents: [d] }, f.push(a), CKEDITOR.dom.element.setMarker(k, q, "list_group_object", a));p = 1;break;
                }
              }p || (p = l, p.getCustomData("list_group_object_" + h) ? p.getCustomData("list_group_object_" + h).contents.push(d) : (a = { root: p, contents: [d] }, CKEDITOR.dom.element.setMarker(k, p, "list_group_object_" + h, a), f.push(a)));
            }
          }
        }for (q = []; 0 < f.length;) {
          if (a = f.shift(), this.state == CKEDITOR.TRISTATE_OFF) {
            if (v[a.root.getName()]) {
              c = b;h = a;a = k;g = q;p = CKEDITOR.plugins.list.listToArray(h.root, a);l = [];for (d = 0; d < h.contents.length; d++) {
                n = h.contents[d], (n = n.getAscendant("li", !0)) && !n.getCustomData("list_item_processed") && (l.push(n), CKEDITOR.dom.element.setMarker(a, n, "list_item_processed", !0));
              }for (var n = h.root.getDocument(), t = void 0, r = void 0, d = 0; d < l.length; d++) {
                var y = l[d].getCustomData("listarray_index"),
                    t = p[y].parent;t.is(this.type) || (r = n.createElement(this.type), t.copyAttributes(r, { start: 1, type: 1 }), r.removeStyle("list-style-type"), p[y].parent = r);
              }a = CKEDITOR.plugins.list.arrayToList(p, a, null, c.config.enterMode);p = void 0;l = a.listNode.getChildCount();for (d = 0; d < l && (p = a.listNode.getChild(d)); d++) {
                p.getName() == this.type && g.push(p);
              }a.listNode.replace(h.root);c.fire("contentDomInvalidated");
            } else {
              p = b;g = a;d = q;l = g.contents;c = g.root.getDocument();h = [];1 == l.length && l[0].equals(g.root) && (a = c.createElement("div"), l[0].moveChildren && l[0].moveChildren(a), l[0].append(a), l[0] = a);g = g.contents[0].getParent();for (n = 0; n < l.length; n++) {
                g = g.getCommonAncestor(l[n].getParent());
              }t = p.config.useComputedState;p = a = void 0;t = void 0 === t || t;for (n = 0; n < l.length; n++) {
                for (r = l[n]; y = r.getParent();) {
                  if (y.equals(g)) {
                    h.push(r);!p && r.getDirection() && (p = 1);r = r.getDirection(t);null !== a && (a = a && a != r ? null : r);break;
                  }r = y;
                }
              }if (!(1 > h.length)) {
                l = h[h.length - 1].getNext();n = c.createElement(this.type);d.push(n);for (t = d = void 0; h.length;) {
                  d = h.shift(), t = c.createElement("li"), r = d, r.is("pre") || L.test(r.getName()) || "false" == r.getAttribute("contenteditable") ? d.appendTo(t) : (d.copyAttributes(t), a && d.getDirection() && (t.removeStyle("direction"), t.removeAttribute("dir")), d.moveChildren(t), d.remove()), t.appendTo(n);
                }a && p && n.setAttribute("dir", a);l ? n.insertBefore(l) : n.appendTo(g);
              }
            }
          } else this.state == CKEDITOR.TRISTATE_ON && v[a.root.getName()] && I.call(this, b, a, k);
        }for (n = 0; n < q.length; n++) {
          F(q[n]);
        }CKEDITOR.dom.element.clearAllMarkers(k);e.selectBookmarks(m);b.focus();
      }, refresh: function refresh(b, m) {
        var e = m.contains(v, 1),
            c = m.blockLimit || m.root;e && c.contains(e) ? this.setState(e.is(this.type) ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF) : this.setState(CKEDITOR.TRISTATE_OFF);
      } };CKEDITOR.plugins.add("list", { requires: "indentlist", init: function init(b) {
        b.blockless || (b.addCommand("numberedlist", new B("numberedlist", "ol")), b.addCommand("bulletedlist", new B("bulletedlist", "ul")), b.ui.addButton && (b.ui.addButton("NumberedList", { label: b.lang.list.numberedlist, command: "numberedlist", directional: !0, toolbar: "list,10" }), b.ui.addButton("BulletedList", { label: b.lang.list.bulletedlist, command: "bulletedlist", directional: !0, toolbar: "list,20" })), b.on("key", function (m) {
          var e = m.data.domEvent.getKey(),
              c;if ("wysiwyg" == b.mode && e in { 8: 1, 46: 1 }) {
            var f = b.getSelection().getRanges()[0],
                g = f && f.startPath();if (f && f.collapsed) {
              var k = 8 == e,
                  h = b.editable(),
                  d = new CKEDITOR.dom.walker(f.clone());d.evaluator = function (a) {
                return u(a) && !z(a);
              };d.guard = function (a, b) {
                return !(b && a.type == CKEDITOR.NODE_ELEMENT && a.is("table"));
              };e = f.clone();if (k) {
                var a;(a = g.contains(v)) && f.checkBoundaryOfElement(a, CKEDITOR.START) && (a = a.getParent()) && a.is("li") && (a = A(a)) ? (c = a, a = a.getPrevious(u), e.moveToPosition(a && z(a) ? a : c, CKEDITOR.POSITION_BEFORE_START)) : (d.range.setStartAt(h, CKEDITOR.POSITION_AFTER_START), d.range.setEnd(f.startContainer, f.startOffset), (a = d.previous()) && a.type == CKEDITOR.NODE_ELEMENT && (a.getName() in v || a.is("li")) && (a.is("li") || (d.range.selectNodeContents(a), d.reset(), d.evaluator = G, a = d.previous()), c = a, e.moveToElementEditEnd(c), e.moveToPosition(e.endPath().block, CKEDITOR.POSITION_BEFORE_END)));if (c) C(b, e, f), m.cancel();else {
                  var p = g.contains(v);p && f.checkBoundaryOfElement(p, CKEDITOR.START) && (c = p.getFirst(u), f.checkBoundaryOfElement(c, CKEDITOR.START) && (a = p.getPrevious(u), A(c) ? a && (f.moveToElementEditEnd(a), f.select()) : b.execCommand("outdent"), m.cancel()));
                }
              } else if (c = g.contains("li")) {
                if (d.range.setEndAt(h, CKEDITOR.POSITION_BEFORE_END), k = (h = c.getLast(u)) && G(h) ? h : c, g = 0, (a = d.next()) && a.type == CKEDITOR.NODE_ELEMENT && a.getName() in v && a.equals(h) ? (g = 1, a = d.next()) : f.checkBoundaryOfElement(k, CKEDITOR.END) && (g = 2), g && a) {
                  f = f.clone();f.moveToElementEditStart(a);if (1 == g && (e.optimize(), !e.startContainer.equals(c))) {
                    for (c = e.startContainer; c.is(CKEDITOR.dtd.$inline);) {
                      p = c, c = c.getParent();
                    }p && e.moveToPosition(p, CKEDITOR.POSITION_AFTER_END);
                  }2 == g && (e.moveToPosition(e.endPath().block, CKEDITOR.POSITION_BEFORE_END), f.endPath().block && f.moveToPosition(f.endPath().block, CKEDITOR.POSITION_AFTER_START));
                  C(b, e, f);m.cancel();
                }
              } else d.range.setEndAt(h, CKEDITOR.POSITION_BEFORE_END), (a = d.next()) && a.type == CKEDITOR.NODE_ELEMENT && a.is(v) && (a = a.getFirst(u), g.block && f.checkStartOfBlock() && f.checkEndOfBlock() ? (g.block.remove(), f.moveToElementEditStart(a), f.select()) : A(a) ? (f.moveToElementEditStart(a), f.select()) : (f = f.clone(), f.moveToElementEditStart(a), C(b, e, f)), m.cancel());setTimeout(function () {
                b.selectionChange(1);
              });
            }
          }
        }));
      } });
  })();(function () {
    var g = [CKEDITOR.CTRL + 90, CKEDITOR.CTRL + 89, CKEDITOR.CTRL + CKEDITOR.SHIFT + 90],
        n = { 8: 1, 46: 1 };CKEDITOR.plugins.add("undo", { init: function init(a) {
        function b(a) {
          d.enabled && !1 !== a.data.command.canUndo && d.save();
        }function c() {
          d.enabled = a.readOnly ? !1 : "wysiwyg" == a.mode;d.onChange();
        }var d = a.undoManager = new e(a),
            l = d.editingHandler = new k(d),
            f = a.addCommand("undo", { exec: function exec() {
            d.undo() && (a.selectionChange(), this.fire("afterUndo"));
          }, startDisabled: !0, canUndo: !1 }),
            h = a.addCommand("redo", { exec: function exec() {
            d.redo() && (a.selectionChange(), this.fire("afterRedo"));
          }, startDisabled: !0, canUndo: !1 });a.setKeystroke([[g[0], "undo"], [g[1], "redo"], [g[2], "redo"]]);d.onChange = function () {
          f.setState(d.undoable() ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED);h.setState(d.redoable() ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED);
        };a.on("beforeCommandExec", b);a.on("afterCommandExec", b);a.on("saveSnapshot", function (a) {
          d.save(a.data && a.data.contentOnly);
        });a.on("contentDom", l.attachListeners, l);a.on("instanceReady", function () {
          a.fire("saveSnapshot");
        });
        a.on("beforeModeUnload", function () {
          "wysiwyg" == a.mode && d.save(!0);
        });a.on("mode", c);a.on("readOnly", c);a.ui.addButton && (a.ui.addButton("Undo", { label: a.lang.undo.undo, command: "undo", toolbar: "undo,10" }), a.ui.addButton("Redo", { label: a.lang.undo.redo, command: "redo", toolbar: "undo,20" }));a.resetUndo = function () {
          d.reset();a.fire("saveSnapshot");
        };a.on("updateSnapshot", function () {
          d.currentImage && d.update();
        });a.on("lockSnapshot", function (a) {
          a = a.data;d.lock(a && a.dontUpdate, a && a.forceUpdate);
        });a.on("unlockSnapshot", d.unlock, d);
      } });CKEDITOR.plugins.undo = {};var e = CKEDITOR.plugins.undo.UndoManager = function (a) {
      this.strokesRecorded = [0, 0];this.locked = null;this.previousKeyGroup = -1;this.limit = a.config.undoStackSize || 20;this.strokesLimit = 25;this.editor = a;this.reset();
    };e.prototype = { type: function type(a, b) {
        var c = e.getKeyGroup(a),
            d = this.strokesRecorded[c] + 1;b = b || d >= this.strokesLimit;this.typing || (this.hasUndo = this.typing = !0, this.hasRedo = !1, this.onChange());b ? (d = 0, this.editor.fire("saveSnapshot")) : this.editor.fire("change");this.strokesRecorded[c] = d;this.previousKeyGroup = c;
      }, keyGroupChanged: function keyGroupChanged(a) {
        return e.getKeyGroup(a) != this.previousKeyGroup;
      }, reset: function reset() {
        this.snapshots = [];this.index = -1;this.currentImage = null;this.hasRedo = this.hasUndo = !1;this.locked = null;this.resetType();
      }, resetType: function resetType() {
        this.strokesRecorded = [0, 0];this.typing = !1;this.previousKeyGroup = -1;
      }, refreshState: function refreshState() {
        this.hasUndo = !!this.getNextImage(!0);this.hasRedo = !!this.getNextImage(!1);this.resetType();this.onChange();
      }, save: function save(a, b, c) {
        var d = this.editor;if (this.locked || "ready" != d.status || "wysiwyg" != d.mode) return !1;var e = d.editable();if (!e || "ready" != e.status) return !1;e = this.snapshots;b || (b = new f(d));if (!1 === b.contents) return !1;if (this.currentImage) if (b.equalsContent(this.currentImage)) {
          if (a || b.equalsSelection(this.currentImage)) return !1;
        } else !1 !== c && d.fire("change");e.splice(this.index + 1, e.length - this.index - 1);e.length == this.limit && e.shift();this.index = e.push(b) - 1;this.currentImage = b;!1 !== c && this.refreshState();return !0;
      }, restoreImage: function restoreImage(a) {
        var b = this.editor,
            c;a.bookmarks && (b.focus(), c = b.getSelection());this.locked = { level: 999 };this.editor.loadSnapshot(a.contents);a.bookmarks ? c.selectBookmarks(a.bookmarks) : CKEDITOR.env.ie && (c = this.editor.document.getBody().$.createTextRange(), c.collapse(!0), c.select());this.locked = null;this.index = a.index;this.currentImage = this.snapshots[this.index];this.update();this.refreshState();b.fire("change");
      }, getNextImage: function getNextImage(a) {
        var b = this.snapshots,
            c = this.currentImage,
            d;if (c) if (a) for (d = this.index - 1; 0 <= d; d--) {
          if (a = b[d], !c.equalsContent(a)) return a.index = d, a;
        } else for (d = this.index + 1; d < b.length; d++) {
          if (a = b[d], !c.equalsContent(a)) return a.index = d, a;
        }return null;
      }, redoable: function redoable() {
        return this.enabled && this.hasRedo;
      }, undoable: function undoable() {
        return this.enabled && this.hasUndo;
      }, undo: function undo() {
        if (this.undoable()) {
          this.save(!0);var a = this.getNextImage(!0);if (a) return this.restoreImage(a), !0;
        }return !1;
      }, redo: function redo() {
        if (this.redoable() && (this.save(!0), this.redoable())) {
          var a = this.getNextImage(!1);if (a) return this.restoreImage(a), !0;
        }return !1;
      }, update: function update(a) {
        if (!this.locked) {
          a || (a = new f(this.editor));for (var b = this.index, c = this.snapshots; 0 < b && this.currentImage.equalsContent(c[b - 1]);) {
            --b;
          }c.splice(b, this.index - b + 1, a);this.index = b;this.currentImage = a;
        }
      }, updateSelection: function updateSelection(a) {
        if (!this.snapshots.length) return !1;var b = this.snapshots,
            c = b[b.length - 1];return c.equalsContent(a) && !c.equalsSelection(a) ? (this.currentImage = b[b.length - 1] = a, !0) : !1;
      }, lock: function lock(a, b) {
        if (this.locked) this.locked.level++;else if (a) this.locked = { level: 1 };else {
          var c = null;if (b) c = !0;else {
            var d = new f(this.editor, !0);this.currentImage && this.currentImage.equalsContent(d) && (c = d);
          }this.locked = { update: c, level: 1 };
        }
      }, unlock: function unlock() {
        if (this.locked && ! --this.locked.level) {
          var a = this.locked.update;this.locked = null;if (!0 === a) this.update();else if (a) {
            var b = new f(this.editor, !0);a.equalsContent(b) || this.update();
          }
        }
      } };e.navigationKeyCodes = { 37: 1, 38: 1, 39: 1, 40: 1, 36: 1, 35: 1, 33: 1, 34: 1 };e.keyGroups = { PRINTABLE: 0, FUNCTIONAL: 1 };e.isNavigationKey = function (a) {
      return !!e.navigationKeyCodes[a];
    };e.getKeyGroup = function (a) {
      var b = e.keyGroups;
      return n[a] ? b.FUNCTIONAL : b.PRINTABLE;
    };e.getOppositeKeyGroup = function (a) {
      var b = e.keyGroups;return a == b.FUNCTIONAL ? b.PRINTABLE : b.FUNCTIONAL;
    };e.ieFunctionalKeysBug = function (a) {
      return CKEDITOR.env.ie && e.getKeyGroup(a) == e.keyGroups.FUNCTIONAL;
    };var f = CKEDITOR.plugins.undo.Image = function (a, b) {
      this.editor = a;a.fire("beforeUndoImage");var c = a.getSnapshot();CKEDITOR.env.ie && c && (c = c.replace(/\s+data-cke-expando=".*?"/g, ""));this.contents = c;b || (this.bookmarks = (c = c && a.getSelection()) && c.createBookmarks2(!0));a.fire("afterUndoImage");
    },
        h = /\b(?:href|src|name)="[^"]*?"/gi;f.prototype = { equalsContent: function equalsContent(a) {
        var b = this.contents;a = a.contents;CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks) && (b = b.replace(h, ""), a = a.replace(h, ""));return b != a ? !1 : !0;
      }, equalsSelection: function equalsSelection(a) {
        var b = this.bookmarks;a = a.bookmarks;if (b || a) {
          if (!b || !a || b.length != a.length) return !1;for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = a[c];if (d.startOffset != e.startOffset || d.endOffset != e.endOffset || !CKEDITOR.tools.arrayCompare(d.start, e.start) || !CKEDITOR.tools.arrayCompare(d.end, e.end)) return !1;
          }
        }return !0;
      } };var k = CKEDITOR.plugins.undo.NativeEditingHandler = function (a) {
      this.undoManager = a;this.ignoreInputEvent = !1;this.keyEventsStack = new m();this.lastKeydownImage = null;
    };k.prototype = { onKeydown: function onKeydown(a) {
        var b = a.data.getKey();if (229 !== b) if (-1 < CKEDITOR.tools.indexOf(g, a.data.getKeystroke())) a.data.preventDefault();else if (this.keyEventsStack.cleanUp(a), a = this.undoManager, this.keyEventsStack.getLast(b) || this.keyEventsStack.push(b), this.lastKeydownImage = new f(a.editor), e.isNavigationKey(b) || this.undoManager.keyGroupChanged(b)) if (a.strokesRecorded[0] || a.strokesRecorded[1]) a.save(!1, this.lastKeydownImage, !1), a.resetType();
      }, onInput: function onInput() {
        if (this.ignoreInputEvent) this.ignoreInputEvent = !1;else {
          var a = this.keyEventsStack.getLast();a || (a = this.keyEventsStack.push(0));this.keyEventsStack.increment(a.keyCode);this.keyEventsStack.getTotalInputs() >= this.undoManager.strokesLimit && (this.undoManager.type(a.keyCode, !0), this.keyEventsStack.resetInputs());
        }
      }, onKeyup: function onKeyup(a) {
        var b = this.undoManager;
        a = a.data.getKey();var c = this.keyEventsStack.getTotalInputs();this.keyEventsStack.remove(a);if (!(e.ieFunctionalKeysBug(a) && this.lastKeydownImage && this.lastKeydownImage.equalsContent(new f(b.editor, !0)))) if (0 < c) b.type(a);else if (e.isNavigationKey(a)) this.onNavigationKey(!0);
      }, onNavigationKey: function onNavigationKey(a) {
        var b = this.undoManager;!a && b.save(!0, null, !1) || b.updateSelection(new f(b.editor));b.resetType();
      }, ignoreInputEventListener: function ignoreInputEventListener() {
        this.ignoreInputEvent = !0;
      }, activateInputEventListener: function activateInputEventListener() {
        this.ignoreInputEvent = !1;
      }, attachListeners: function attachListeners() {
        var a = this.undoManager.editor,
            b = a.editable(),
            c = this;b.attachListener(b, "keydown", function (a) {
          c.onKeydown(a);if (e.ieFunctionalKeysBug(a.data.getKey())) c.onInput();
        }, null, null, 999);b.attachListener(b, CKEDITOR.env.ie ? "keypress" : "input", c.onInput, c, null, 999);b.attachListener(b, "keyup", c.onKeyup, c, null, 999);b.attachListener(b, "paste", c.ignoreInputEventListener, c, null, 999);b.attachListener(b, "drop", c.ignoreInputEventListener, c, null, 999);a.on("afterPaste", c.activateInputEventListener, c, null, 999);b.attachListener(b.isInline() ? b : a.document.getDocumentElement(), "click", function () {
          c.onNavigationKey();
        }, null, null, 999);b.attachListener(this.undoManager.editor, "blur", function () {
          c.keyEventsStack.remove(9);
        }, null, null, 999);
      } };var m = CKEDITOR.plugins.undo.KeyEventsStack = function () {
      this.stack = [];
    };m.prototype = { push: function push(a) {
        a = this.stack.push({ keyCode: a, inputs: 0 });return this.stack[a - 1];
      }, getLastIndex: function getLastIndex(a) {
        if ("number" != typeof a) return this.stack.length - 1;for (var b = this.stack.length; b--;) {
          if (this.stack[b].keyCode == a) return b;
        }return -1;
      }, getLast: function getLast(a) {
        a = this.getLastIndex(a);return -1 != a ? this.stack[a] : null;
      }, increment: function increment(a) {
        this.getLast(a).inputs++;
      }, remove: function remove(a) {
        a = this.getLastIndex(a);-1 != a && this.stack.splice(a, 1);
      }, resetInputs: function resetInputs(a) {
        if ("number" == typeof a) this.getLast(a).inputs = 0;else for (a = this.stack.length; a--;) {
          this.stack[a].inputs = 0;
        }
      }, getTotalInputs: function getTotalInputs() {
        for (var a = this.stack.length, b = 0; a--;) {
          b += this.stack[a].inputs;
        }return b;
      }, cleanUp: function cleanUp(a) {
        a = a.data.$;a.ctrlKey || a.metaKey || this.remove(17);
        a.shiftKey || this.remove(16);a.altKey || this.remove(18);
      } };
  })();CKEDITOR.config.plugins = 'dialogui,dialog,about,basicstyles,notification,button,toolbar,clipboard,enterkey,entities,floatingspace,wysiwygarea,indent,indentlist,fakeobjects,link,list,undo';CKEDITOR.config.skin = 'moono-lisa';(function () {
    var setIcons = function setIcons(icons, strip) {
      var path = CKEDITOR.getUrl('plugins/' + strip);icons = icons.split(',');for (var i = 0; i < icons.length; i++) {
        CKEDITOR.skin.icons[icons[i]] = { path: path, offset: -icons[++i], bgsize: icons[++i] };
      }
    };if (CKEDITOR.env.hidpi) setIcons('about,0,,bold,24,,italic,48,,strike,72,,subscript,96,,superscript,120,,underline,144,,copy-rtl,168,,copy,192,,cut-rtl,216,,cut,240,,paste-rtl,264,,paste,288,,indent-rtl,312,,indent,336,,outdent-rtl,360,,outdent,384,,anchor-rtl,408,,anchor,432,,link,456,,unlink,480,,bulletedlist-rtl,504,,bulletedlist,528,,numberedlist-rtl,552,,numberedlist,576,,redo-rtl,600,,redo,624,,undo-rtl,648,,undo,672,', 'icons_hidpi.png');else setIcons('about,0,auto,bold,24,auto,italic,48,auto,strike,72,auto,subscript,96,auto,superscript,120,auto,underline,144,auto,copy-rtl,168,auto,copy,192,auto,cut-rtl,216,auto,cut,240,auto,paste-rtl,264,auto,paste,288,auto,indent-rtl,312,auto,indent,336,auto,outdent-rtl,360,auto,outdent,384,auto,anchor-rtl,408,auto,anchor,432,auto,link,456,auto,unlink,480,auto,bulletedlist-rtl,504,auto,bulletedlist,528,auto,numberedlist-rtl,552,auto,numberedlist,576,auto,redo-rtl,600,auto,redo,624,auto,undo-rtl,648,auto,undo,672,auto', 'icons.png');
  })();CKEDITOR.lang.languages = { "af": 1, "sq": 1, "ar": 1, "az": 1, "eu": 1, "bn": 1, "bs": 1, "bg": 1, "ca": 1, "zh-cn": 1, "zh": 1, "hr": 1, "cs": 1, "da": 1, "nl": 1, "en": 1, "en-au": 1, "en-ca": 1, "en-gb": 1, "eo": 1, "et": 1, "fo": 1, "fi": 1, "fr": 1, "fr-ca": 1, "gl": 1, "ka": 1, "de": 1, "de-ch": 1, "el": 1, "gu": 1, "he": 1, "hi": 1, "hu": 1, "is": 1, "id": 1, "it": 1, "ja": 1, "km": 1, "ko": 1, "ku": 1, "lv": 1, "lt": 1, "mk": 1, "ms": 1, "mn": 1, "no": 1, "nb": 1, "oc": 1, "fa": 1, "pl": 1, "pt-br": 1, "pt": 1, "ro": 1, "ru": 1, "sr": 1, "sr-latn": 1, "si": 1, "sk": 1, "sl": 1, "es": 1, "es-mx": 1, "sv": 1, "tt": 1, "th": 1, "tr": 1, "ug": 1, "uk": 1, "vi": 1, "cy": 1 };
})();

/***/ })

/******/ });