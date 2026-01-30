"use strict";
var ImageTool = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/@codexteam/ajax/dist/main.js
  var require_main = __commonJS({
    "node_modules/@codexteam/ajax/dist/main.js"(exports, module) {
      !(function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ajax = t() : e.ajax = t();
      })(window, function() {
        return (function(e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = { i: r, l: false, exports: {} };
            return e[r].call(o.exports, o, o.exports, n), o.l = true, o.exports;
          }
          return n.m = e, n.c = t, n.d = function(e2, t2, r) {
            n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: r });
          }, n.r = function(e2) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
          }, n.t = function(e2, t2) {
            if (1 & t2 && (e2 = n(e2)), 8 & t2) return e2;
            if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule) return e2;
            var r = /* @__PURE__ */ Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2) for (var o in e2) n.d(r, o, function(t3) {
              return e2[t3];
            }.bind(null, o));
            return r;
          }, n.n = function(e2) {
            var t2 = e2 && e2.__esModule ? function() {
              return e2.default;
            } : function() {
              return e2;
            };
            return n.d(t2, "a", t2), t2;
          }, n.o = function(e2, t2) {
            return Object.prototype.hasOwnProperty.call(e2, t2);
          }, n.p = "", n(n.s = 3);
        })([function(e, t) {
          var n;
          n = /* @__PURE__ */ (function() {
            return this;
          })();
          try {
            n = n || new Function("return this")();
          } catch (e2) {
            "object" == typeof window && (n = window);
          }
          e.exports = n;
        }, function(e, t, n) {
          "use strict";
          (function(e2) {
            var r = n(2), o = setTimeout;
            function i2() {
            }
            function a(e3) {
              if (!(this instanceof a)) throw new TypeError("Promises must be constructed via new");
              if ("function" != typeof e3) throw new TypeError("not a function");
              this._state = 0, this._handled = false, this._value = void 0, this._deferreds = [], d(e3, this);
            }
            function u(e3, t2) {
              for (; 3 === e3._state; ) e3 = e3._value;
              0 !== e3._state ? (e3._handled = true, a._immediateFn(function() {
                var n2 = 1 === e3._state ? t2.onFulfilled : t2.onRejected;
                if (null !== n2) {
                  var r2;
                  try {
                    r2 = n2(e3._value);
                  } catch (e4) {
                    return void s(t2.promise, e4);
                  }
                  c(t2.promise, r2);
                } else (1 === e3._state ? c : s)(t2.promise, e3._value);
              })) : e3._deferreds.push(t2);
            }
            function c(e3, t2) {
              try {
                if (t2 === e3) throw new TypeError("A promise cannot be resolved with itself.");
                if (t2 && ("object" == typeof t2 || "function" == typeof t2)) {
                  var n2 = t2.then;
                  if (t2 instanceof a) return e3._state = 3, e3._value = t2, void f(e3);
                  if ("function" == typeof n2) return void d((r2 = n2, o2 = t2, function() {
                    r2.apply(o2, arguments);
                  }), e3);
                }
                e3._state = 1, e3._value = t2, f(e3);
              } catch (t3) {
                s(e3, t3);
              }
              var r2, o2;
            }
            function s(e3, t2) {
              e3._state = 2, e3._value = t2, f(e3);
            }
            function f(e3) {
              2 === e3._state && 0 === e3._deferreds.length && a._immediateFn(function() {
                e3._handled || a._unhandledRejectionFn(e3._value);
              });
              for (var t2 = 0, n2 = e3._deferreds.length; t2 < n2; t2++) u(e3, e3._deferreds[t2]);
              e3._deferreds = null;
            }
            function l(e3, t2, n2) {
              this.onFulfilled = "function" == typeof e3 ? e3 : null, this.onRejected = "function" == typeof t2 ? t2 : null, this.promise = n2;
            }
            function d(e3, t2) {
              var n2 = false;
              try {
                e3(function(e4) {
                  n2 || (n2 = true, c(t2, e4));
                }, function(e4) {
                  n2 || (n2 = true, s(t2, e4));
                });
              } catch (e4) {
                if (n2) return;
                n2 = true, s(t2, e4);
              }
            }
            a.prototype.catch = function(e3) {
              return this.then(null, e3);
            }, a.prototype.then = function(e3, t2) {
              var n2 = new this.constructor(i2);
              return u(this, new l(e3, t2, n2)), n2;
            }, a.prototype.finally = r.a, a.all = function(e3) {
              return new a(function(t2, n2) {
                if (!e3 || void 0 === e3.length) throw new TypeError("Promise.all accepts an array");
                var r2 = Array.prototype.slice.call(e3);
                if (0 === r2.length) return t2([]);
                var o2 = r2.length;
                function i3(e4, a3) {
                  try {
                    if (a3 && ("object" == typeof a3 || "function" == typeof a3)) {
                      var u2 = a3.then;
                      if ("function" == typeof u2) return void u2.call(a3, function(t3) {
                        i3(e4, t3);
                      }, n2);
                    }
                    r2[e4] = a3, 0 == --o2 && t2(r2);
                  } catch (e5) {
                    n2(e5);
                  }
                }
                for (var a2 = 0; a2 < r2.length; a2++) i3(a2, r2[a2]);
              });
            }, a.resolve = function(e3) {
              return e3 && "object" == typeof e3 && e3.constructor === a ? e3 : new a(function(t2) {
                t2(e3);
              });
            }, a.reject = function(e3) {
              return new a(function(t2, n2) {
                n2(e3);
              });
            }, a.race = function(e3) {
              return new a(function(t2, n2) {
                for (var r2 = 0, o2 = e3.length; r2 < o2; r2++) e3[r2].then(t2, n2);
              });
            }, a._immediateFn = "function" == typeof e2 && function(t2) {
              e2(t2);
            } || function(e3) {
              o(e3, 0);
            }, a._unhandledRejectionFn = function(e3) {
              "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e3);
            }, t.a = a;
          }).call(this, n(5).setImmediate);
        }, function(e, t, n) {
          "use strict";
          t.a = function(e2) {
            var t2 = this.constructor;
            return this.then(function(n2) {
              return t2.resolve(e2()).then(function() {
                return n2;
              });
            }, function(n2) {
              return t2.resolve(e2()).then(function() {
                return t2.reject(n2);
              });
            });
          };
        }, function(e, t, n) {
          "use strict";
          function r(e2) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
              return typeof e3;
            } : function(e3) {
              return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
            })(e2);
          }
          n(4);
          var o, i2, a, u, c, s, f, l = n(8), d = (i2 = function(e2) {
            return new Promise(function(t2, n2) {
              e2 = u(e2), (e2 = c(e2)).beforeSend && e2.beforeSend();
              var r2 = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
              r2.open(e2.method, e2.url), r2.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(e2.headers).forEach(function(t3) {
                var n3 = e2.headers[t3];
                r2.setRequestHeader(t3, n3);
              });
              var o2 = e2.ratio;
              r2.upload.addEventListener("progress", function(t3) {
                var n3 = Math.round(t3.loaded / t3.total * 100), r3 = Math.ceil(n3 * o2 / 100);
                e2.progress(Math.min(r3, 100));
              }, false), r2.addEventListener("progress", function(t3) {
                var n3 = Math.round(t3.loaded / t3.total * 100), r3 = Math.ceil(n3 * (100 - o2) / 100) + o2;
                e2.progress(Math.min(r3, 100));
              }, false), r2.onreadystatechange = function() {
                if (4 === r2.readyState) {
                  var e3 = r2.response;
                  try {
                    e3 = JSON.parse(e3);
                  } catch (e4) {
                  }
                  var o3 = l.parseHeaders(r2.getAllResponseHeaders()), i3 = { body: e3, code: r2.status, headers: o3 };
                  f(r2.status) ? t2(i3) : n2(i3);
                }
              }, r2.send(e2.data);
            });
          }, a = function(e2) {
            return e2.method = "POST", i2(e2);
          }, u = function() {
            var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (e2.url && "string" != typeof e2.url) throw new Error("Url must be a string");
            if (e2.url = e2.url || "", e2.method && "string" != typeof e2.method) throw new Error("`method` must be a string or null");
            if (e2.method = e2.method ? e2.method.toUpperCase() : "GET", e2.headers && "object" !== r(e2.headers)) throw new Error("`headers` must be an object or null");
            if (e2.headers = e2.headers || {}, e2.type && ("string" != typeof e2.type || !Object.values(o).includes(e2.type))) throw new Error("`type` must be taken from module's \xABcontentType\xBB library");
            if (e2.progress && "function" != typeof e2.progress) throw new Error("`progress` must be a function or null");
            if (e2.progress = e2.progress || function(e3) {
            }, e2.beforeSend = e2.beforeSend || function(e3) {
            }, e2.ratio && "number" != typeof e2.ratio) throw new Error("`ratio` must be a number");
            if (e2.ratio < 0 || e2.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
            if (e2.ratio = e2.ratio || 90, e2.accept && "string" != typeof e2.accept) throw new Error("`accept` must be a string with a list of allowed mime-types");
            if (e2.accept = e2.accept || "*/*", e2.multiple && "boolean" != typeof e2.multiple) throw new Error("`multiple` must be a true or false");
            if (e2.multiple = e2.multiple || false, e2.fieldName && "string" != typeof e2.fieldName) throw new Error("`fieldName` must be a string");
            return e2.fieldName = e2.fieldName || "files", e2;
          }, c = function(e2) {
            switch (e2.method) {
              case "GET":
                var t2 = s(e2.data, o.URLENCODED);
                delete e2.data, e2.url = /\?/.test(e2.url) ? e2.url + "&" + t2 : e2.url + "?" + t2;
                break;
              case "POST":
              case "PUT":
              case "DELETE":
              case "UPDATE":
                var n2 = (function() {
                  return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).type || o.JSON;
                })(e2);
                (l.isFormData(e2.data) || l.isFormElement(e2.data)) && (n2 = o.FORM), e2.data = s(e2.data, n2), n2 !== d.contentType.FORM && (e2.headers["content-type"] = n2);
            }
            return e2;
          }, s = function() {
            var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            switch (arguments.length > 1 ? arguments[1] : void 0) {
              case o.URLENCODED:
                return l.urlEncode(e2);
              case o.JSON:
                return l.jsonEncode(e2);
              case o.FORM:
                return l.formEncode(e2);
              default:
                return e2;
            }
          }, f = function(e2) {
            return e2 >= 200 && e2 < 300;
          }, { contentType: o = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: i2, get: function(e2) {
            return e2.method = "GET", i2(e2);
          }, post: a, transport: function(e2) {
            return e2 = u(e2), l.selectFiles(e2).then(function(t2) {
              for (var n2 = new FormData(), r2 = 0; r2 < t2.length; r2++) n2.append(e2.fieldName, t2[r2], t2[r2].name);
              l.isObject(e2.data) && Object.keys(e2.data).forEach(function(t3) {
                var r3 = e2.data[t3];
                n2.append(t3, r3);
              });
              var o2 = e2.beforeSend;
              return e2.beforeSend = function() {
                return o2(t2);
              }, e2.data = n2, a(e2);
            });
          }, selectFiles: function(e2) {
            return delete (e2 = u(e2)).beforeSend, l.selectFiles(e2);
          } });
          e.exports = d;
        }, function(e, t, n) {
          "use strict";
          n.r(t);
          var r = n(1);
          window.Promise = window.Promise || r.a;
        }, function(e, t, n) {
          (function(e2) {
            var r = void 0 !== e2 && e2 || "undefined" != typeof self && self || window, o = Function.prototype.apply;
            function i2(e3, t2) {
              this._id = e3, this._clearFn = t2;
            }
            t.setTimeout = function() {
              return new i2(o.call(setTimeout, r, arguments), clearTimeout);
            }, t.setInterval = function() {
              return new i2(o.call(setInterval, r, arguments), clearInterval);
            }, t.clearTimeout = t.clearInterval = function(e3) {
              e3 && e3.close();
            }, i2.prototype.unref = i2.prototype.ref = function() {
            }, i2.prototype.close = function() {
              this._clearFn.call(r, this._id);
            }, t.enroll = function(e3, t2) {
              clearTimeout(e3._idleTimeoutId), e3._idleTimeout = t2;
            }, t.unenroll = function(e3) {
              clearTimeout(e3._idleTimeoutId), e3._idleTimeout = -1;
            }, t._unrefActive = t.active = function(e3) {
              clearTimeout(e3._idleTimeoutId);
              var t2 = e3._idleTimeout;
              t2 >= 0 && (e3._idleTimeoutId = setTimeout(function() {
                e3._onTimeout && e3._onTimeout();
              }, t2));
            }, n(6), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e2 && e2.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e2 && e2.clearImmediate || this && this.clearImmediate;
          }).call(this, n(0));
        }, function(e, t, n) {
          (function(e2, t2) {
            !(function(e3, n2) {
              "use strict";
              if (!e3.setImmediate) {
                var r, o, i2, a, u, c = 1, s = {}, f = false, l = e3.document, d = Object.getPrototypeOf && Object.getPrototypeOf(e3);
                d = d && d.setTimeout ? d : e3, "[object process]" === {}.toString.call(e3.process) ? r = function(e4) {
                  t2.nextTick(function() {
                    m(e4);
                  });
                } : !(function() {
                  if (e3.postMessage && !e3.importScripts) {
                    var t3 = true, n3 = e3.onmessage;
                    return e3.onmessage = function() {
                      t3 = false;
                    }, e3.postMessage("", "*"), e3.onmessage = n3, t3;
                  }
                })() ? e3.MessageChannel ? ((i2 = new MessageChannel()).port1.onmessage = function(e4) {
                  m(e4.data);
                }, r = function(e4) {
                  i2.port2.postMessage(e4);
                }) : l && "onreadystatechange" in l.createElement("script") ? (o = l.documentElement, r = function(e4) {
                  var t3 = l.createElement("script");
                  t3.onreadystatechange = function() {
                    m(e4), t3.onreadystatechange = null, o.removeChild(t3), t3 = null;
                  }, o.appendChild(t3);
                }) : r = function(e4) {
                  setTimeout(m, 0, e4);
                } : (a = "setImmediate$" + Math.random() + "$", u = function(t3) {
                  t3.source === e3 && "string" == typeof t3.data && 0 === t3.data.indexOf(a) && m(+t3.data.slice(a.length));
                }, e3.addEventListener ? e3.addEventListener("message", u, false) : e3.attachEvent("onmessage", u), r = function(t3) {
                  e3.postMessage(a + t3, "*");
                }), d.setImmediate = function(e4) {
                  "function" != typeof e4 && (e4 = new Function("" + e4));
                  for (var t3 = new Array(arguments.length - 1), n3 = 0; n3 < t3.length; n3++) t3[n3] = arguments[n3 + 1];
                  var o2 = { callback: e4, args: t3 };
                  return s[c] = o2, r(c), c++;
                }, d.clearImmediate = p;
              }
              function p(e4) {
                delete s[e4];
              }
              function m(e4) {
                if (f) setTimeout(m, 0, e4);
                else {
                  var t3 = s[e4];
                  if (t3) {
                    f = true;
                    try {
                      !(function(e5) {
                        var t4 = e5.callback, r2 = e5.args;
                        switch (r2.length) {
                          case 0:
                            t4();
                            break;
                          case 1:
                            t4(r2[0]);
                            break;
                          case 2:
                            t4(r2[0], r2[1]);
                            break;
                          case 3:
                            t4(r2[0], r2[1], r2[2]);
                            break;
                          default:
                            t4.apply(n2, r2);
                        }
                      })(t3);
                    } finally {
                      p(e4), f = false;
                    }
                  }
                }
              }
            })("undefined" == typeof self ? void 0 === e2 ? this : e2 : self);
          }).call(this, n(0), n(7));
        }, function(e, t) {
          var n, r, o = e.exports = {};
          function i2() {
            throw new Error("setTimeout has not been defined");
          }
          function a() {
            throw new Error("clearTimeout has not been defined");
          }
          function u(e2) {
            if (n === setTimeout) return setTimeout(e2, 0);
            if ((n === i2 || !n) && setTimeout) return n = setTimeout, setTimeout(e2, 0);
            try {
              return n(e2, 0);
            } catch (t2) {
              try {
                return n.call(null, e2, 0);
              } catch (t3) {
                return n.call(this, e2, 0);
              }
            }
          }
          !(function() {
            try {
              n = "function" == typeof setTimeout ? setTimeout : i2;
            } catch (e2) {
              n = i2;
            }
            try {
              r = "function" == typeof clearTimeout ? clearTimeout : a;
            } catch (e2) {
              r = a;
            }
          })();
          var c, s = [], f = false, l = -1;
          function d() {
            f && c && (f = false, c.length ? s = c.concat(s) : l = -1, s.length && p());
          }
          function p() {
            if (!f) {
              var e2 = u(d);
              f = true;
              for (var t2 = s.length; t2; ) {
                for (c = s, s = []; ++l < t2; ) c && c[l].run();
                l = -1, t2 = s.length;
              }
              c = null, f = false, (function(e3) {
                if (r === clearTimeout) return clearTimeout(e3);
                if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e3);
                try {
                  r(e3);
                } catch (t3) {
                  try {
                    return r.call(null, e3);
                  } catch (t4) {
                    return r.call(this, e3);
                  }
                }
              })(e2);
            }
          }
          function m(e2, t2) {
            this.fun = e2, this.array = t2;
          }
          function h2() {
          }
          o.nextTick = function(e2) {
            var t2 = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n2 = 1; n2 < arguments.length; n2++) t2[n2 - 1] = arguments[n2];
            s.push(new m(e2, t2)), 1 !== s.length || f || u(p);
          }, m.prototype.run = function() {
            this.fun.apply(null, this.array);
          }, o.title = "browser", o.browser = true, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = h2, o.addListener = h2, o.once = h2, o.off = h2, o.removeListener = h2, o.removeAllListeners = h2, o.emit = h2, o.prependListener = h2, o.prependOnceListener = h2, o.listeners = function(e2) {
            return [];
          }, o.binding = function(e2) {
            throw new Error("process.binding is not supported");
          }, o.cwd = function() {
            return "/";
          }, o.chdir = function(e2) {
            throw new Error("process.chdir is not supported");
          }, o.umask = function() {
            return 0;
          };
        }, function(e, t, n) {
          function r(e2, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var r2 = t2[n2];
              r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
            }
          }
          var o = n(9);
          e.exports = (function() {
            function e2() {
              !(function(e3, t3) {
                if (!(e3 instanceof t3)) throw new TypeError("Cannot call a class as a function");
              })(this, e2);
            }
            var t2, n2, i2;
            return t2 = e2, i2 = [{ key: "urlEncode", value: function(e3) {
              return o(e3);
            } }, { key: "jsonEncode", value: function(e3) {
              return JSON.stringify(e3);
            } }, { key: "formEncode", value: function(e3) {
              if (this.isFormData(e3)) return e3;
              if (this.isFormElement(e3)) return new FormData(e3);
              if (this.isObject(e3)) {
                var t3 = new FormData();
                return Object.keys(e3).forEach(function(n3) {
                  var r2 = e3[n3];
                  t3.append(n3, r2);
                }), t3;
              }
              throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
            } }, { key: "isObject", value: function(e3) {
              return "[object Object]" === Object.prototype.toString.call(e3);
            } }, { key: "isFormData", value: function(e3) {
              return e3 instanceof FormData;
            } }, { key: "isFormElement", value: function(e3) {
              return e3 instanceof HTMLFormElement;
            } }, { key: "selectFiles", value: function() {
              var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return new Promise(function(t3, n3) {
                var r2 = document.createElement("INPUT");
                r2.type = "file", e3.multiple && r2.setAttribute("multiple", "multiple"), e3.accept && r2.setAttribute("accept", e3.accept), r2.style.display = "none", document.body.appendChild(r2), r2.addEventListener("change", function(e4) {
                  var n4 = e4.target.files;
                  t3(n4), document.body.removeChild(r2);
                }, false), r2.click();
              });
            } }, { key: "parseHeaders", value: function(e3) {
              var t3 = e3.trim().split(/[\r\n]+/), n3 = {};
              return t3.forEach(function(e4) {
                var t4 = e4.split(": "), r2 = t4.shift(), o2 = t4.join(": ");
                r2 && (n3[r2] = o2);
              }), n3;
            } }], (n2 = null) && r(t2.prototype, n2), i2 && r(t2, i2), e2;
          })();
        }, function(e, t) {
          var n = function(e2) {
            return encodeURIComponent(e2).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
          }, r = function(e2, t2, o, i2) {
            return t2 = t2 || null, o = o || "&", i2 = i2 || null, e2 ? (function(e3) {
              for (var t3 = new Array(), n2 = 0; n2 < e3.length; n2++) e3[n2] && t3.push(e3[n2]);
              return t3;
            })(Object.keys(e2).map(function(a) {
              var u, c, s = a;
              if (i2 && (s = i2 + "[" + s + "]"), "object" == typeof e2[a] && null !== e2[a]) u = r(e2[a], null, o, s);
              else {
                t2 && (c = s, s = !isNaN(parseFloat(c)) && isFinite(c) ? t2 + Number(s) : s);
                var f = e2[a];
                f = (f = 0 === (f = false === (f = true === f ? "1" : f) ? "0" : f) ? "0" : f) || "", u = n(s) + "=" + n(f);
              }
              return u;
            })).join(o).replace(/[!'()*]/g, "") : "";
          };
          e.exports = r;
        }]);
      });
    }
  });

  // src/index.ts
  var index_exports = {};
  __export(index_exports, {
    default: () => ImageTool
  });

  // node_modules/@codexteam/icons/dist/index.mjs
  var i = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>';
  var h = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>';
  var Y = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>';
  var l1 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
  var C1 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';

  // src/utils/dom.ts
  function make(tagName, classNames = null, attributes = {}) {
    const el = document.createElement(tagName);
    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames !== null) {
      el.classList.add(classNames);
    }
    for (const attrName in attributes) {
      if (attributes.hasOwnProperty(attrName)) {
        el[attrName] = attributes[attrName];
      }
    }
    return el;
  }

  // src/ui.ts
  var UiState = /* @__PURE__ */ ((UiState2) => {
    UiState2["Empty"] = "empty";
    UiState2["Uploading"] = "uploading";
    UiState2["Filled"] = "filled";
    return UiState2;
  })(UiState || {});
  var Ui = class {
    /**
     * @param ui - image tool Ui module
     * @param ui.api - Editor.js API
     * @param ui.config - user config
     * @param ui.onSelectFile - callback for clicks on Select file button
     * @param ui.readOnly - read-only mode flag
     */
    constructor({ api, config, onSelectFile, readOnly }) {
      this.api = api;
      this.config = config;
      this.onSelectFile = onSelectFile;
      this.readOnly = readOnly;
      this.nodes = {
        wrapper: make("div", [this.CSS.baseClass, this.CSS.wrapper]),
        imageContainer: make("div", [this.CSS.imageContainer]),
        fileButton: this.createFileButton(),
        imageEl: void 0,
        imagePreloader: make("div", this.CSS.imagePreloader),
        caption: make("div", [this.CSS.input, this.CSS.caption], {
          contentEditable: !this.readOnly
        })
      };
      this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder;
      this.nodes.imageContainer.appendChild(this.nodes.imagePreloader);
      this.nodes.wrapper.appendChild(this.nodes.imageContainer);
      this.nodes.wrapper.appendChild(this.nodes.caption);
      this.nodes.wrapper.appendChild(this.nodes.fileButton);
    }
    /**
     * Apply visual representation of activated tune
     * @param tuneName - one of available tunes {@link Tunes.tunes}
     * @param status - true for enable, false for disable
     */
    applyTune(tuneName, status) {
      this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${tuneName}`, status);
    }
    /**
     * Renders tool UI
     */
    render() {
      this.toggleStatus("empty" /* Empty */);
      return this.nodes.wrapper;
    }
    /**
     * Shows uploading preloader
     * @param src - preview source
     */
    showPreloader(src) {
      this.nodes.imagePreloader.style.backgroundImage = `url(${src})`;
      this.toggleStatus("uploading" /* Uploading */);
    }
    /**
     * Hide uploading preloader
     */
    hidePreloader() {
      this.nodes.imagePreloader.style.backgroundImage = "";
      this.toggleStatus("empty" /* Empty */);
    }
    /**
     * Shows an image
     * @param url - image source
     */
    fillImage(url) {
      const tag = /\.mp4$/.test(url) ? "VIDEO" : "IMG";
      const attributes = {
        src: url
      };
      let eventName = "load";
      if (tag === "VIDEO") {
        attributes.autoplay = true;
        attributes.loop = true;
        attributes.muted = true;
        attributes.playsinline = true;
        eventName = "loadeddata";
      }
      this.nodes.imageEl = make(tag, this.CSS.imageEl, attributes);
      this.nodes.imageEl.addEventListener(eventName, () => {
        this.toggleStatus("filled" /* Filled */);
        if (this.nodes.imagePreloader !== void 0) {
          this.nodes.imagePreloader.style.backgroundImage = "";
        }
        this.applyWidth(this.currentWidth);
        this.ensureResizeHandle();
      });
      this.nodes.imageContainer.appendChild(this.nodes.imageEl);
    }
    /**
     * Apply a specific width (px) to the image container.
     */
    applyWidth(width) {
      const MIN = 40;
      const parentWidth = this.nodes.wrapper.parentElement?.getBoundingClientRect()?.width;
      const max = parentWidth && Number.isFinite(parentWidth) ? Math.max(MIN, parentWidth) : void 0;
      let next = width;
      if (typeof next === "number" && next > 0) {
        if (max) next = Math.min(next, max);
        next = Math.max(MIN, next);
        this.currentWidth = next;
        this.nodes.imageContainer.style.width = `${next}px`;
      } else {
        this.currentWidth = void 0;
        this.nodes.imageContainer.style.width = "";
      }
    }
    /**
     * Returns current width if set.
     */
    getWidth() {
      if (typeof this.currentWidth === "number") return this.currentWidth;
      const inline = parseFloat(this.nodes.imageContainer.style.width);
      return Number.isFinite(inline) ? inline : void 0;
    }
    /**
     * Ensure resize handle exists and is wired.
     */
    ensureResizeHandle() {
      if (this.readOnly || this.nodes.resizeHandle) return;
      const handle = make("div", this.CSS.resizeHandle);
      let startX = 0;
      let startWidth = 0;
      const onMove = (event) => {
        const delta = event.clientX - startX;
        const next = startWidth + delta;
        this.applyWidth(next);
      };
      const onUp = () => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
      };
      handle.addEventListener("mousedown", (event) => {
        event.preventDefault();
        startX = event.clientX;
        startWidth = this.nodes.imageContainer.getBoundingClientRect().width;
        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", onUp);
      });
      this.nodes.imageContainer.appendChild(handle);
      this.nodes.resizeHandle = handle;
    }
    /**
     * Shows caption input
     * @param text - caption content text
     */
    fillCaption(text) {
      if (this.nodes.caption !== void 0) {
        this.nodes.caption.innerHTML = text;
      }
    }
    /**
     * Changes UI status
     * @param status - see {@link Ui.status} constants
     */
    toggleStatus(status) {
      for (const statusType in UiState) {
        if (Object.prototype.hasOwnProperty.call(UiState, statusType)) {
          const state = UiState[statusType];
          this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${state}`, state === status);
        }
      }
    }
    /**
     * CSS classes
     */
    get CSS() {
      return {
        baseClass: this.api.styles.block,
        loading: this.api.styles.loader,
        input: this.api.styles.input,
        button: this.api.styles.button,
        /**
         * Tool's classes
         */
        wrapper: "image-tool",
        imageContainer: "image-tool__image",
        imagePreloader: "image-tool__image-preloader",
        imageEl: "image-tool__image-picture",
        caption: "image-tool__caption",
        resizeHandle: "image-tool__image-resize-handle"
      };
    }
    /**
     * Creates upload-file button
     */
    createFileButton() {
      const button = make("div", [this.CSS.button]);
      button.innerHTML = this.config.buttonContent ?? `${Y} ${this.api.i18n.t("Select an Image")}`;
      button.addEventListener("click", () => {
        this.onSelectFile();
      });
      return button;
    }
  };

  // src/uploader.ts
  var import_ajax = __toESM(require_main());

  // src/utils/isPromise.ts
  function isPromise(object) {
    return object !== void 0 && typeof object.then === "function";
  }

  // src/uploader.ts
  var Uploader = class {
    /**
     * @param params - uploader module params
     * @param params.config - image tool config
     * @param params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
     * @param params.onError - callback for uploading errors
     */
    constructor({ config, onUpload, onError }) {
      this.config = config;
      this.onUpload = onUpload;
      this.onError = onError;
    }
    /**
     * Handle clicks on the upload file button
     * Fires ajax.transport()
     * @param onPreview - callback fired when preview is ready
     */
    uploadSelectedFile({ onPreview }) {
      const preparePreview = function(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          onPreview(e.target.result);
        };
      };
      let upload;
      if (this.config.uploader && typeof this.config.uploader.uploadByFile === "function") {
        const uploadByFile = this.config.uploader.uploadByFile;
        upload = import_ajax.default.selectFiles({ accept: this.config.types ?? "image/*" }).then((files) => {
          preparePreview(files[0]);
          const customUpload = uploadByFile(files[0]);
          if (!isPromise(customUpload)) {
            console.warn("Custom uploader method uploadByFile should return a Promise");
          }
          return customUpload;
        });
      } else {
        upload = import_ajax.default.transport({
          url: this.config.endpoints.byFile,
          data: this.config.additionalRequestData,
          accept: this.config.types ?? "image/*",
          headers: this.config.additionalRequestHeaders,
          beforeSend: (files) => {
            preparePreview(files[0]);
          },
          fieldName: this.config.field ?? "image"
        }).then((response) => response.body);
      }
      upload.then((response) => {
        this.onUpload(response);
      }).catch((error) => {
        this.onError(error);
      });
    }
    /**
     * Handle clicks on the upload file button
     * Fires ajax.post()
     * @param url - image source url
     */
    uploadByUrl(url) {
      let upload;
      if (this.config.uploader && typeof this.config.uploader.uploadByUrl === "function") {
        upload = this.config.uploader.uploadByUrl(url);
        if (!isPromise(upload)) {
          console.warn("Custom uploader method uploadByUrl should return a Promise");
        }
      } else {
        upload = import_ajax.default.post({
          url: this.config.endpoints.byUrl,
          data: Object.assign({
            url
          }, this.config.additionalRequestData),
          type: import_ajax.default.contentType.JSON,
          headers: this.config.additionalRequestHeaders
        }).then((response) => response.body);
      }
      upload.then((response) => {
        this.onUpload(response);
      }).catch((error) => {
        this.onError(error);
      });
    }
    /**
     * Handle clicks on the upload file button
     * Fires ajax.post()
     * @param file - file pasted by drag-n-drop
     * @param onPreview - file pasted by drag-n-drop
     */
    uploadByFile(file, { onPreview }) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        onPreview(e.target.result);
      };
      let upload;
      if (this.config.uploader && typeof this.config.uploader.uploadByFile === "function") {
        upload = this.config.uploader.uploadByFile(file);
        if (!isPromise(upload)) {
          console.warn("Custom uploader method uploadByFile should return a Promise");
        }
      } else {
        const formData = new FormData();
        formData.append(this.config.field ?? "image", file);
        if (this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length) {
          Object.entries(this.config.additionalRequestData).forEach(([name, value]) => {
            formData.append(name, value);
          });
        }
        upload = import_ajax.default.post({
          url: this.config.endpoints.byFile,
          data: formData,
          type: import_ajax.default.contentType.JSON,
          headers: this.config.additionalRequestHeaders
        }).then((response) => response.body);
      }
      upload.then((response) => {
        this.onUpload(response);
      }).catch((error) => {
        this.onError(error);
      });
    }
  };

  // src/index.ts
  var ImageTool = class _ImageTool {
    /**
     * @param tool - tool properties got from editor.js
     * @param tool.data - previously saved data
     * @param tool.config - user config for Tool
     * @param tool.api - Editor.js API
     * @param tool.readOnly - read-only mode flag
     * @param tool.block - current Block API
     */
    constructor({ data, config, api, readOnly, block }) {
      /**
       * Caption enabled state
       * Null when user has not toggled the caption tune
       * True when user has toggled the caption tune
       * False when user has toggled the caption tune
       */
      this.isCaptionEnabled = null;
      this.api = api;
      this.block = block;
      this.config = {
        endpoints: config.endpoints,
        additionalRequestData: config.additionalRequestData,
        additionalRequestHeaders: config.additionalRequestHeaders,
        field: config.field,
        types: config.types,
        captionPlaceholder: this.api.i18n.t(config.captionPlaceholder ?? "Caption"),
        buttonContent: config.buttonContent,
        uploader: config.uploader,
        actions: config.actions,
        features: config.features || {}
      };
      this.uploader = new Uploader({
        config: this.config,
        onUpload: (response) => this.onUpload(response),
        onError: (error) => this.uploadingFailed(error)
      });
      this.ui = new Ui({
        api,
        config: this.config,
        onSelectFile: () => {
          this.uploader.uploadSelectedFile({
            onPreview: (src) => {
              this.ui.showPreloader(src);
            }
          });
        },
        readOnly
      });
      this._data = {
        caption: "",
        width: void 0,
        withBorder: false,
        withBackground: false,
        stretched: false,
        file: {
          url: ""
        }
      };
      this.data = data;
    }
    /**
     * Notify core that read-only mode is supported
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     */
    static get toolbox() {
      return {
        icon: Y,
        title: "Image"
      };
    }
    /**
     * Available image tools
     */
    static get tunes() {
      return [
        {
          name: "withBorder",
          icon: h,
          title: "With border",
          toggle: true
        },
        {
          name: "stretched",
          icon: l1,
          title: "Stretch image",
          toggle: true
        },
        {
          name: "withBackground",
          icon: i,
          title: "With background",
          toggle: true
        }
      ];
    }
    /**
     * Renders Block content
     */
    render() {
      if (this.config.features?.caption === true || this.config.features?.caption === void 0 || this.config.features?.caption === "optional" && this.data.caption) {
        this.isCaptionEnabled = true;
        this.ui.applyTune("caption", true);
      }
      return this.ui.render();
    }
    /**
     * Validate data: check if Image exists
     * @param savedData — data received after saving
     * @returns false if saved data is not correct, otherwise true
     */
    validate(savedData) {
      return !!savedData.file.url;
    }
    /**
     * Return Block data
     */
    save() {
      const caption = this.ui.nodes.caption;
      this._data.caption = caption.innerHTML;
      this._data.width = this.ui.getWidth();
      return this.data;
    }
    /**
     * Returns configuration for block tunes: add background, add border, stretch image
     * @returns TunesMenuConfig
     */
    renderSettings() {
      const tunes = _ImageTool.tunes.concat(this.config.actions || []);
      const featureTuneMap = {
        border: "withBorder",
        background: "withBackground",
        stretch: "stretched",
        caption: "caption"
      };
      if (this.config.features?.caption === "optional") {
        tunes.push({
          name: "caption",
          icon: C1,
          title: "With caption",
          toggle: true
        });
      }
      const availableTunes = tunes.filter((tune) => {
        const featureKey = Object.keys(featureTuneMap).find((key) => featureTuneMap[key] === tune.name);
        if (featureKey === "caption") {
          return this.config.features?.caption !== false;
        }
        return featureKey == null || this.config.features?.[featureKey] !== false;
      });
      const isActive = (tune) => {
        let currentState = this.data[tune.name];
        if (tune.name === "caption") {
          currentState = this.isCaptionEnabled ?? currentState;
        }
        return currentState;
      };
      return availableTunes.map((tune) => ({
        icon: tune.icon,
        label: this.api.i18n.t(tune.title),
        name: tune.name,
        toggle: tune.toggle,
        isActive: isActive(tune),
        onActivate: () => {
          if (typeof tune.action === "function") {
            tune.action(tune.name);
            return;
          }
          let newState = !isActive(tune);
          if (tune.name === "caption") {
            this.isCaptionEnabled = !(this.isCaptionEnabled ?? false);
            newState = this.isCaptionEnabled;
          }
          this.tuneToggled(tune.name, newState);
        }
      }));
    }
    /**
     * Fires after clicks on the Toolbox Image Icon
     * Initiates click on the Select File button
     */
    appendCallback() {
      this.ui.nodes.fileButton.click();
    }
    /**
     * Specify paste substitutes
     * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
     */
    static get pasteConfig() {
      return {
        /**
         * Paste HTML into Editor
         */
        tags: [
          {
            img: { src: true }
          }
        ],
        /**
         * Paste URL of image into the Editor
         */
        patterns: {
          image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i
        },
        /**
         * Drag n drop file from into the Editor
         */
        files: {
          mimeTypes: ["image/*"]
        }
      };
    }
    /**
     * Specify paste handlers
     * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
     * @param event - editor.js custom paste event
     *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
     */
    async onPaste(event) {
      switch (event.type) {
        case "tag": {
          const image = event.detail.data;
          if (/^blob:/.test(image.src)) {
            const response = await fetch(image.src);
            const file = await response.blob();
            this.uploadFile(file);
            break;
          }
          this.uploadUrl(image.src);
          break;
        }
        case "pattern": {
          const url = event.detail.data;
          this.uploadUrl(url);
          break;
        }
        case "file": {
          const file = event.detail.file;
          this.uploadFile(file);
          break;
        }
      }
    }
    /**
     * Private methods
     * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
     */
    /**
     * Stores all Tool's data
     * @param data - data in Image Tool format
     */
    set data(data) {
      this.image = data.file;
      this._data.caption = data.caption || "";
      this._data.width = typeof data.width === "number" ? data.width : void 0;
      this.ui.fillCaption(this._data.caption);
      this.ui.applyWidth(this._data.width);
      _ImageTool.tunes.forEach(({ name: tune }) => {
        const value = typeof data[tune] !== "undefined" ? data[tune] === true || data[tune] === "true" : false;
        this.setTune(tune, value);
      });
      if (data.caption) {
        this.setTune("caption", true);
      } else if (this.config.features?.caption === true) {
        this.setTune("caption", true);
      }
    }
    /**
     * Return Tool data
     */
    get data() {
      return this._data;
    }
    /**
     * Set new image file
     * @param file - uploaded file data
     */
    set image(file) {
      this._data.file = file || { url: "" };
      if (file && file.url) {
        this.ui.fillImage(file.url);
      }
    }
    /**
     * File uploading callback
     * @param response - uploading server response
     */
    onUpload(response) {
      if (response.success && Boolean(response.file)) {
        this.image = response.file;
      } else {
        this.uploadingFailed("incorrect response: " + JSON.stringify(response));
      }
    }
    /**
     * Handle uploader errors
     * @param errorText - uploading error info
     */
    uploadingFailed(errorText) {
      console.log("Image Tool: uploading failed because of", errorText);
      this.api.notifier.show({
        message: this.api.i18n.t("Couldn\u2019t upload image. Please try another."),
        style: "error"
      });
      this.ui.hidePreloader();
    }
    /**
     * Callback fired when Block Tune is activated
     * @param tuneName - tune that has been clicked
     * @param state - new state
     */
    tuneToggled(tuneName, state) {
      if (tuneName === "caption") {
        this.ui.applyTune(tuneName, state);
        if (state == false) {
          this._data.caption = "";
          this.ui.fillCaption("");
        }
      } else {
        this.setTune(tuneName, state);
      }
    }
    /**
     * Set one tune
     * @param tuneName - {@link Tunes.tunes}
     * @param value - tune state
     */
    setTune(tuneName, value) {
      this._data[tuneName] = value;
      this.ui.applyTune(tuneName, value);
      if (tuneName === "stretched") {
        Promise.resolve().then(() => {
          this.block.stretched = value;
        }).catch((err) => {
          console.error(err);
        });
      }
    }
    /**
     * Show preloader and upload image file
     * @param file - file that is currently uploading (from paste)
     */
    uploadFile(file) {
      this.uploader.uploadByFile(file, {
        onPreview: (src) => {
          this.ui.showPreloader(src);
        }
      });
    }
    /**
     * Show preloader and upload image by target url
     * @param url - url pasted
     */
    uploadUrl(url) {
      this.ui.showPreloader(url);
      this.uploader.uploadByUrl(url);
    }
  };
  return __toCommonJS(index_exports);
})();
/**
 * Image Tool for the Editor.js
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.ts — main Tool's interface, public API and methods for working with data
 *  2) uploader.ts — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.ts — module for UI manipulations: render, showing preloader, etc
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */
