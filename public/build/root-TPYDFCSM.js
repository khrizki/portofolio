import "/build/_shared/chunk-P764JBYJ.js";
import {
  AnimatePresence,
  motion,
  navLinks
} from "/build/_shared/chunk-7W4R35XH.js";
import "/build/_shared/chunk-CZNGAJO4.js";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation
} from "/build/_shared/chunk-TEVHQX2B.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-CBDF6H27.js";
import "/build/_shared/chunk-CWUZT7IQ.js";
import {
  require_react
} from "/build/_shared/chunk-G4YTFA6Y.js";
import {
  createHotContext
} from "/build/_shared/chunk-QC6PON22.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/aos/dist/aos.js
var require_aos = __commonJS({
  "node_modules/aos/dist/aos.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t();
    }(exports, function() {
      return function(e) {
        function t(o) {
          if (n[o])
            return n[o].exports;
          var i = n[o] = { exports: {}, id: o, loaded: false };
          return e[o].call(i.exports, i, i.exports, t), i.loaded = true, i.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "dist/", t(0);
      }([function(e, t, n) {
        "use strict";
        function o(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }
        var i = Object.assign || function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var o2 in n2)
              Object.prototype.hasOwnProperty.call(n2, o2) && (e2[o2] = n2[o2]);
          }
          return e2;
        }, r = n(1), a = (o(r), n(6)), u = o(a), c = n(7), s = o(c), f = n(8), d = o(f), l = n(9), p = o(l), m = n(10), b = o(m), v = n(11), y = o(v), g = n(14), h = o(g), w = [], k = false, x = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: false, once: false, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: false }, j = function() {
          var e2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (e2 && (k = true), k)
            return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w;
        }, O = function() {
          w = (0, h.default)(), j();
        }, M = function() {
          w.forEach(function(e2, t2) {
            e2.node.removeAttribute("data-aos"), e2.node.removeAttribute("data-aos-easing"), e2.node.removeAttribute("data-aos-duration"), e2.node.removeAttribute("data-aos-delay");
          });
        }, S = function(e2) {
          return e2 === true || "mobile" === e2 && p.default.mobile() || "phone" === e2 && p.default.phone() || "tablet" === e2 && p.default.tablet() || "function" == typeof e2 && e2() === true;
        }, _ = function(e2) {
          x = i(x, e2), w = (0, h.default)();
          var t2 = document.all && !window.atob;
          return S(x.disable) || t2 ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = true), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(true) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() {
            j(true);
          }) : document.addEventListener(x.startEvent, function() {
            j(true);
          }), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, true)), window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, true)), window.addEventListener("scroll", (0, u.default)(function() {
            (0, b.default)(w, x.once);
          }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w);
        };
        e.exports = { init: _, refresh: j, refreshHard: O };
      }, function(e, t) {
      }, , , , , function(e, t) {
        (function(t2) {
          "use strict";
          function n(e2, t3, n2) {
            function o2(t4) {
              var n3 = b2, o3 = v2;
              return b2 = v2 = void 0, k2 = t4, g2 = e2.apply(o3, n3);
            }
            function r2(e3) {
              return k2 = e3, h2 = setTimeout(f2, t3), M ? o2(e3) : g2;
            }
            function a2(e3) {
              var n3 = e3 - w2, o3 = e3 - k2, i2 = t3 - n3;
              return S ? j(i2, y2 - o3) : i2;
            }
            function c2(e3) {
              var n3 = e3 - w2, o3 = e3 - k2;
              return void 0 === w2 || n3 >= t3 || n3 < 0 || S && o3 >= y2;
            }
            function f2() {
              var e3 = O();
              return c2(e3) ? d2(e3) : void (h2 = setTimeout(f2, a2(e3)));
            }
            function d2(e3) {
              return h2 = void 0, _ && b2 ? o2(e3) : (b2 = v2 = void 0, g2);
            }
            function l2() {
              void 0 !== h2 && clearTimeout(h2), k2 = 0, b2 = w2 = v2 = h2 = void 0;
            }
            function p2() {
              return void 0 === h2 ? g2 : d2(O());
            }
            function m2() {
              var e3 = O(), n3 = c2(e3);
              if (b2 = arguments, v2 = this, w2 = e3, n3) {
                if (void 0 === h2)
                  return r2(w2);
                if (S)
                  return h2 = setTimeout(f2, t3), o2(w2);
              }
              return void 0 === h2 && (h2 = setTimeout(f2, t3)), g2;
            }
            var b2, v2, y2, g2, h2, w2, k2 = 0, M = false, S = false, _ = true;
            if ("function" != typeof e2)
              throw new TypeError(s);
            return t3 = u(t3) || 0, i(n2) && (M = !!n2.leading, S = "maxWait" in n2, y2 = S ? x(u(n2.maxWait) || 0, t3) : y2, _ = "trailing" in n2 ? !!n2.trailing : _), m2.cancel = l2, m2.flush = p2, m2;
          }
          function o(e2, t3, o2) {
            var r2 = true, a2 = true;
            if ("function" != typeof e2)
              throw new TypeError(s);
            return i(o2) && (r2 = "leading" in o2 ? !!o2.leading : r2, a2 = "trailing" in o2 ? !!o2.trailing : a2), n(e2, t3, { leading: r2, maxWait: t3, trailing: a2 });
          }
          function i(e2) {
            var t3 = "undefined" == typeof e2 ? "undefined" : c(e2);
            return !!e2 && ("object" == t3 || "function" == t3);
          }
          function r(e2) {
            return !!e2 && "object" == ("undefined" == typeof e2 ? "undefined" : c(e2));
          }
          function a(e2) {
            return "symbol" == ("undefined" == typeof e2 ? "undefined" : c(e2)) || r(e2) && k.call(e2) == d;
          }
          function u(e2) {
            if ("number" == typeof e2)
              return e2;
            if (a(e2))
              return f;
            if (i(e2)) {
              var t3 = "function" == typeof e2.valueOf ? e2.valueOf() : e2;
              e2 = i(t3) ? t3 + "" : t3;
            }
            if ("string" != typeof e2)
              return 0 === e2 ? e2 : +e2;
            e2 = e2.replace(l, "");
            var n2 = m.test(e2);
            return n2 || b.test(e2) ? v(e2.slice(2), n2 ? 2 : 8) : p.test(e2) ? f : +e2;
          }
          var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
            return typeof e2;
          } : function(e2) {
            return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
          }, s = "Expected a function", f = NaN, d = "[object Symbol]", l = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, b = /^0o[0-7]+$/i, v = parseInt, y = "object" == ("undefined" == typeof t2 ? "undefined" : c(t2)) && t2 && t2.Object === Object && t2, g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self, h = y || g || Function("return this")(), w = Object.prototype, k = w.toString, x = Math.max, j = Math.min, O = function() {
            return h.Date.now();
          };
          e.exports = o;
        }).call(t, function() {
          return this;
        }());
      }, function(e, t) {
        (function(t2) {
          "use strict";
          function n(e2, t3, n2) {
            function i2(t4) {
              var n3 = b2, o2 = v2;
              return b2 = v2 = void 0, O = t4, g2 = e2.apply(o2, n3);
            }
            function r2(e3) {
              return O = e3, h2 = setTimeout(f2, t3), M ? i2(e3) : g2;
            }
            function u2(e3) {
              var n3 = e3 - w2, o2 = e3 - O, i3 = t3 - n3;
              return S ? x(i3, y2 - o2) : i3;
            }
            function s2(e3) {
              var n3 = e3 - w2, o2 = e3 - O;
              return void 0 === w2 || n3 >= t3 || n3 < 0 || S && o2 >= y2;
            }
            function f2() {
              var e3 = j();
              return s2(e3) ? d2(e3) : void (h2 = setTimeout(f2, u2(e3)));
            }
            function d2(e3) {
              return h2 = void 0, _ && b2 ? i2(e3) : (b2 = v2 = void 0, g2);
            }
            function l2() {
              void 0 !== h2 && clearTimeout(h2), O = 0, b2 = w2 = v2 = h2 = void 0;
            }
            function p2() {
              return void 0 === h2 ? g2 : d2(j());
            }
            function m2() {
              var e3 = j(), n3 = s2(e3);
              if (b2 = arguments, v2 = this, w2 = e3, n3) {
                if (void 0 === h2)
                  return r2(w2);
                if (S)
                  return h2 = setTimeout(f2, t3), i2(w2);
              }
              return void 0 === h2 && (h2 = setTimeout(f2, t3)), g2;
            }
            var b2, v2, y2, g2, h2, w2, O = 0, M = false, S = false, _ = true;
            if ("function" != typeof e2)
              throw new TypeError(c);
            return t3 = a(t3) || 0, o(n2) && (M = !!n2.leading, S = "maxWait" in n2, y2 = S ? k(a(n2.maxWait) || 0, t3) : y2, _ = "trailing" in n2 ? !!n2.trailing : _), m2.cancel = l2, m2.flush = p2, m2;
          }
          function o(e2) {
            var t3 = "undefined" == typeof e2 ? "undefined" : u(e2);
            return !!e2 && ("object" == t3 || "function" == t3);
          }
          function i(e2) {
            return !!e2 && "object" == ("undefined" == typeof e2 ? "undefined" : u(e2));
          }
          function r(e2) {
            return "symbol" == ("undefined" == typeof e2 ? "undefined" : u(e2)) || i(e2) && w.call(e2) == f;
          }
          function a(e2) {
            if ("number" == typeof e2)
              return e2;
            if (r(e2))
              return s;
            if (o(e2)) {
              var t3 = "function" == typeof e2.valueOf ? e2.valueOf() : e2;
              e2 = o(t3) ? t3 + "" : t3;
            }
            if ("string" != typeof e2)
              return 0 === e2 ? e2 : +e2;
            e2 = e2.replace(d, "");
            var n2 = p.test(e2);
            return n2 || m.test(e2) ? b(e2.slice(2), n2 ? 2 : 8) : l.test(e2) ? s : +e2;
          }
          var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
            return typeof e2;
          } : function(e2) {
            return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
          }, c = "Expected a function", s = NaN, f = "[object Symbol]", d = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, m = /^0o[0-7]+$/i, b = parseInt, v = "object" == ("undefined" == typeof t2 ? "undefined" : u(t2)) && t2 && t2.Object === Object && t2, y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self, g = v || y || Function("return this")(), h = Object.prototype, w = h.toString, k = Math.max, x = Math.min, j = function() {
            return g.Date.now();
          };
          e.exports = n;
        }).call(t, function() {
          return this;
        }());
      }, function(e, t) {
        "use strict";
        function n(e2) {
          var t2 = void 0, o2 = void 0, i2 = void 0;
          for (t2 = 0; t2 < e2.length; t2 += 1) {
            if (o2 = e2[t2], o2.dataset && o2.dataset.aos)
              return true;
            if (i2 = o2.children && n(o2.children))
              return true;
          }
          return false;
        }
        function o() {
          return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        }
        function i() {
          return !!o();
        }
        function r(e2, t2) {
          var n2 = window.document, i2 = o(), r2 = new i2(a);
          u = t2, r2.observe(n2.documentElement, { childList: true, subtree: true, removedNodes: true });
        }
        function a(e2) {
          e2 && e2.forEach(function(e3) {
            var t2 = Array.prototype.slice.call(e3.addedNodes), o2 = Array.prototype.slice.call(e3.removedNodes), i2 = t2.concat(o2);
            if (n(i2))
              return u();
          });
        }
        Object.defineProperty(t, "__esModule", { value: true });
        var u = function() {
        };
        t.default = { isSupported: i, ready: r };
      }, function(e, t) {
        "use strict";
        function n(e2, t2) {
          if (!(e2 instanceof t2))
            throw new TypeError("Cannot call a class as a function");
        }
        function o() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        Object.defineProperty(t, "__esModule", { value: true });
        var i = function() {
          function e2(e3, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var o2 = t2[n2];
              o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
            }
          }
          return function(t2, n2, o2) {
            return n2 && e2(t2.prototype, n2), o2 && e2(t2, o2), t2;
          };
        }(), r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s = function() {
          function e2() {
            n(this, e2);
          }
          return i(e2, [{ key: "phone", value: function() {
            var e3 = o();
            return !(!r.test(e3) && !a.test(e3.substr(0, 4)));
          } }, { key: "mobile", value: function() {
            var e3 = o();
            return !(!u.test(e3) && !c.test(e3.substr(0, 4)));
          } }, { key: "tablet", value: function() {
            return this.mobile() && !this.phone();
          } }]), e2;
        }();
        t.default = new s();
      }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var n = function(e2, t2, n2) {
          var o2 = e2.node.getAttribute("data-aos-once");
          t2 > e2.position ? e2.node.classList.add("aos-animate") : "undefined" != typeof o2 && ("false" === o2 || !n2 && "true" !== o2) && e2.node.classList.remove("aos-animate");
        }, o = function(e2, t2) {
          var o2 = window.pageYOffset, i = window.innerHeight;
          e2.forEach(function(e3, r) {
            n(e3, i + o2, t2);
          });
        };
        t.default = o;
      }, function(e, t, n) {
        "use strict";
        function o(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }
        Object.defineProperty(t, "__esModule", { value: true });
        var i = n(12), r = o(i), a = function(e2, t2) {
          return e2.forEach(function(e3, n2) {
            e3.node.classList.add("aos-init"), e3.position = (0, r.default)(e3.node, t2.offset);
          }), e2;
        };
        t.default = a;
      }, function(e, t, n) {
        "use strict";
        function o(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }
        Object.defineProperty(t, "__esModule", { value: true });
        var i = n(13), r = o(i), a = function(e2, t2) {
          var n2 = 0, o2 = 0, i2 = window.innerHeight, a2 = { offset: e2.getAttribute("data-aos-offset"), anchor: e2.getAttribute("data-aos-anchor"), anchorPlacement: e2.getAttribute("data-aos-anchor-placement") };
          switch (a2.offset && !isNaN(a2.offset) && (o2 = parseInt(a2.offset)), a2.anchor && document.querySelectorAll(a2.anchor) && (e2 = document.querySelectorAll(a2.anchor)[0]), n2 = (0, r.default)(e2).top, a2.anchorPlacement) {
            case "top-bottom":
              break;
            case "center-bottom":
              n2 += e2.offsetHeight / 2;
              break;
            case "bottom-bottom":
              n2 += e2.offsetHeight;
              break;
            case "top-center":
              n2 += i2 / 2;
              break;
            case "bottom-center":
              n2 += i2 / 2 + e2.offsetHeight;
              break;
            case "center-center":
              n2 += i2 / 2 + e2.offsetHeight / 2;
              break;
            case "top-top":
              n2 += i2;
              break;
            case "bottom-top":
              n2 += e2.offsetHeight + i2;
              break;
            case "center-top":
              n2 += e2.offsetHeight / 2 + i2;
          }
          return a2.anchorPlacement || a2.offset || isNaN(t2) || (o2 = t2), n2 + o2;
        };
        t.default = a;
      }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var n = function(e2) {
          for (var t2 = 0, n2 = 0; e2 && !isNaN(e2.offsetLeft) && !isNaN(e2.offsetTop); )
            t2 += e2.offsetLeft - ("BODY" != e2.tagName ? e2.scrollLeft : 0), n2 += e2.offsetTop - ("BODY" != e2.tagName ? e2.scrollTop : 0), e2 = e2.offsetParent;
          return { top: n2, left: t2 };
        };
        t.default = n;
      }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var n = function(e2) {
          return e2 = e2 || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e2, function(e3) {
            return { node: e3 };
          });
        };
        t.default = n;
      }]);
    });
  }
});

// app/LayoutClient.tsx
var import_react4 = __toESM(require_react());

// hooks/useTheme.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ThemeContext = (0, import_react.createContext)(void 0);
function ThemeProvider({ children }) {
  const [theme, setTheme] = (0, import_react.useState)(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "dark" || saved === "light") {
        return saved;
      }
      if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        return "light";
      }
    }
    return "dark";
  });
  (0, import_react.useEffect)(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prev) => prev === "dark" ? "light" : "dark");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeContext.Provider, { value: { theme, toggleTheme }, children }, void 0, false, {
    fileName: "hooks/useTheme.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
function useTheme() {
  const context = (0, import_react.useContext)(ThemeContext);
  if (context === void 0) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// components/layout/Preloader.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
"use client";
function Preloader() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    motion.div,
    {
      className: "preloader-overlay fixed inset-0 z-[9999] flex items-center justify-center bg-background-primary",
      initial: { opacity: 1 },
      animate: { opacity: 0 },
      transition: { duration: 0.5, delay: 1 },
      exit: { opacity: 0 },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "loader w-[60px] h-[60px] border-4 border-background-tertiary border-t-accent-primary rounded-full animate-spin" }, void 0, false, {
        fileName: "components/layout/Preloader.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "components/layout/Preloader.tsx",
      lineNumber: 7,
      columnNumber: 5
    },
    this
  );
}

// components/layout/Navbar.tsx
var import_react2 = __toESM(require_react());

// lib/utils.ts
var import_aos = __toESM(require_aos());
function smoothScrollTo(elementId, offset = 70) {
  const element = document.getElementById(elementId);
  if (element) {
    const top = element.offsetTop - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}
function initAOS() {
  if (typeof window === "undefined")
    return;
  try {
    import_aos.default.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 0,
      startEvent: "DOMContentLoaded"
    });
  } catch (error) {
    console.warn("Failed to initialize AOS:", error);
  }
}

// components/ui/ThemeToggle.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
"use client";
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    motion.button,
    {
      onClick: toggleTheme,
      className: "relative w-14 h-7 rounded-full bg-background-card border border-border cursor-pointer overflow-hidden",
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
      "aria-label": `Switch to ${theme === "dark" ? "light" : "dark"} theme`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          motion.div,
          {
            className: "absolute top-1 w-5 h-5 rounded-full flex items-center justify-center shadow-md",
            animate: {
              left: theme === "dark" ? "4px" : "calc(100% - 24px)",
              backgroundColor: theme === "dark" ? "#6366f1" : "#f59e0b"
            },
            transition: { type: "spring", stiffness: 500, damping: 30 },
            children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "fas fa-moon text-[10px] text-white" }, void 0, false, {
              fileName: "components/ui/ThemeToggle.tsx",
              lineNumber: 27,
              columnNumber: 11
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "fas fa-sun text-[10px] text-white" }, void 0, false, {
              fileName: "components/ui/ThemeToggle.tsx",
              lineNumber: 29,
              columnNumber: 11
            }, this)
          },
          void 0,
          false,
          {
            fileName: "components/ui/ThemeToggle.tsx",
            lineNumber: 18,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "div",
          {
            className: "absolute inset-0 opacity-20",
            style: {
              background: theme === "dark" ? "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" : "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)"
            }
          },
          void 0,
          false,
          {
            fileName: "components/ui/ThemeToggle.tsx",
            lineNumber: 34,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "components/ui/ThemeToggle.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    this
  );
}

// components/layout/Navbar.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
"use client";
function Navbar() {
  const [isScrolled, setIsScrolled] = (0, import_react2.useState)(false);
  const [isHidden, setIsHidden] = (0, import_react2.useState)(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, import_react2.useState)(false);
  const [activeSection, setActiveSection] = (0, import_react2.useState)("home");
  const lastScrollY = (0, import_react2.useRef)(0);
  (0, import_react2.useEffect)(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = currentScrollY;
      setIsScrolled(currentScrollY > 50);
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const htmlSection = section;
        const sectionTop = htmlSection.offsetTop - 100;
        const sectionHeight = htmlSection.offsetHeight;
        const sectionId = section.getAttribute("id");
        if (currentScrollY > sectionTop && currentScrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId || "home");
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    smoothScrollTo(sectionId);
    setIsMobileMenuOpen(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    motion.nav,
    {
      className: "fixed top-0 left-0 right-0 z-50 pointer-events-none",
      animate: { y: isHidden ? "-100%" : "0" },
      transition: { duration: 0.3 },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-300 ${isScrolled ? "pt-3" : "pt-2"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "div",
          {
            className: `pointer-events-auto h-[4.5rem] flex items-center justify-between transition-all duration-300 ${isScrolled ? "glass rounded-2xl px-4 sm:px-5 shadow-md" : "px-2 sm:px-3"}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "a",
                {
                  href: "#home",
                  onClick: (e) => handleNavClick(e, "#home"),
                  className: "group inline-flex items-center gap-2.5 text-text-primary",
                  "aria-label": "Kembali ke beranda",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary font-mono text-sm font-extrabold text-white shadow-lg shadow-indigo-950/30 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105", children: "KR" }, void 0, false, {
                      fileName: "components/layout/Navbar.tsx",
                      lineNumber: 82,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "hidden sm:block font-mono text-sm font-bold tracking-tight", children: [
                      "khairul",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-accent-secondary", children: ".dev" }, void 0, false, {
                        fileName: "components/layout/Navbar.tsx",
                        lineNumber: 84,
                        columnNumber: 22
                      }, this)
                    ] }, void 0, true, {
                      fileName: "components/layout/Navbar.tsx",
                      lineNumber: 83,
                      columnNumber: 13
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "components/layout/Navbar.tsx",
                  lineNumber: 76,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "hidden md:flex items-center gap-1 rounded-full border border-transparent px-2 py-1", children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "a",
                {
                  href: link.href,
                  onClick: (e) => handleNavClick(e, link.href),
                  className: `relative rounded-full px-3 py-2 text-sm font-semibold transition-colors ${activeSection === link.href.replace("#", "") ? "text-text-primary" : "text-text-secondary hover:text-text-primary"}`,
                  children: [
                    activeSection === link.href.replace("#", "") && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                      motion.span,
                      {
                        layoutId: "activeNavigation",
                        className: "absolute inset-0 -z-10 rounded-full bg-accent-primary/15 ring-1 ring-accent-primary/25",
                        transition: { type: "spring", stiffness: 420, damping: 32 }
                      },
                      void 0,
                      false,
                      {
                        fileName: "components/layout/Navbar.tsx",
                        lineNumber: 102,
                        columnNumber: 21
                      },
                      this
                    ),
                    link.name
                  ]
                },
                void 0,
                true,
                {
                  fileName: "components/layout/Navbar.tsx",
                  lineNumber: 92,
                  columnNumber: 17
                },
                this
              ) }, link.href, false, {
                fileName: "components/layout/Navbar.tsx",
                lineNumber: 91,
                columnNumber: 15
              }, this)) }, void 0, false, {
                fileName: "components/layout/Navbar.tsx",
                lineNumber: 89,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hidden md:flex items-center gap-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  "a",
                  {
                    href: "#contact",
                    onClick: (e) => handleNavClick(e, "#contact"),
                    className: "rounded-full bg-text-primary px-3.5 py-2 text-xs font-bold text-background-primary shadow-sm transition-transform hover:-translate-y-0.5",
                    children: "Mari bicara"
                  },
                  void 0,
                  false,
                  {
                    fileName: "components/layout/Navbar.tsx",
                    lineNumber: 116,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ThemeToggle, {}, void 0, false, {
                  fileName: "components/layout/Navbar.tsx",
                  lineNumber: 123,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "components/layout/Navbar.tsx",
                lineNumber: 115,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "button",
                {
                  className: "md:hidden grid h-10 w-10 place-items-center rounded-xl border border-border bg-background-card/60",
                  onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
                  "aria-label": "Buka menu navigasi",
                  "aria-expanded": isMobileMenuOpen,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "flex flex-col gap-1.5", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                      motion.span,
                      {
                        animate: { rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 7 : 0 },
                        className: "h-0.5 w-5 bg-text-primary transition-all"
                      },
                      void 0,
                      false,
                      {
                        fileName: "components/layout/Navbar.tsx",
                        lineNumber: 134,
                        columnNumber: 15
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                      motion.span,
                      {
                        animate: { opacity: isMobileMenuOpen ? 0 : 1 },
                        className: "h-0.5 w-5 bg-text-primary transition-all"
                      },
                      void 0,
                      false,
                      {
                        fileName: "components/layout/Navbar.tsx",
                        lineNumber: 138,
                        columnNumber: 15
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                      motion.span,
                      {
                        animate: { rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -7 : 0 },
                        className: "h-0.5 w-5 bg-text-primary transition-all"
                      },
                      void 0,
                      false,
                      {
                        fileName: "components/layout/Navbar.tsx",
                        lineNumber: 142,
                        columnNumber: 15
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "components/layout/Navbar.tsx",
                    lineNumber: 133,
                    columnNumber: 13
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "components/layout/Navbar.tsx",
                  lineNumber: 127,
                  columnNumber: 11
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "components/layout/Navbar.tsx",
            lineNumber: 68,
            columnNumber: 9
          },
          this
        ) }, void 0, false, {
          fileName: "components/layout/Navbar.tsx",
          lineNumber: 67,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AnimatePresence, { children: isMobileMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          motion.div,
          {
            initial: { opacity: 0, y: -12 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -12 },
            transition: { type: "tween", duration: 0.2 },
            className: "pointer-events-auto md:hidden mx-4 mt-2 rounded-2xl border border-border bg-background-secondary/95 p-2 shadow-lg backdrop-blur-xl",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "flex flex-col gap-1 p-2", children: [
              navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "a",
                {
                  href: link.href,
                  onClick: (e) => handleNavClick(e, link.href),
                  className: `block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${activeSection === link.href.replace("#", "") ? "bg-accent-primary/12 text-accent-primary" : "text-text-secondary hover:bg-white/5 hover:text-text-primary"}`,
                  children: link.name
                },
                void 0,
                false,
                {
                  fileName: "components/layout/Navbar.tsx",
                  lineNumber: 164,
                  columnNumber: 19
                },
                this
              ) }, link.href, false, {
                fileName: "components/layout/Navbar.tsx",
                lineNumber: 163,
                columnNumber: 17
              }, this)),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "mt-2 flex items-center justify-between border-t border-border px-3 pt-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-widest text-text-muted", children: "Tampilan" }, void 0, false, {
                  fileName: "components/layout/Navbar.tsx",
                  lineNumber: 178,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ThemeToggle, {}, void 0, false, {
                  fileName: "components/layout/Navbar.tsx",
                  lineNumber: 179,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "components/layout/Navbar.tsx",
                lineNumber: 177,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "components/layout/Navbar.tsx",
              lineNumber: 161,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "components/layout/Navbar.tsx",
            lineNumber: 154,
            columnNumber: 11
          },
          this
        ) }, void 0, false, {
          fileName: "components/layout/Navbar.tsx",
          lineNumber: 152,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "components/layout/Navbar.tsx",
      lineNumber: 62,
      columnNumber: 5
    },
    this
  );
}

// components/layout/Footer.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
"use client";
function Footer() {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("footer", { className: "border-t border-border bg-background-secondary/75 py-8 backdrop-blur-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-6 md:flex-row md:items-center md:justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center justify-center gap-3 md:justify-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "#home", className: "grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary font-mono text-xs font-extrabold text-white shadow-sm", "aria-label": "Kembali ke beranda", children: "KR" }, void 0, false, {
        fileName: "components/layout/Footer.tsx",
        lineNumber: 10,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-sm font-bold text-text-primary", children: "Khairul Rizky" }, void 0, false, {
          fileName: "components/layout/Footer.tsx",
          lineNumber: 12,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs text-text-muted", children: "Designed and developed with care." }, void 0, false, {
          fileName: "components/layout/Footer.tsx",
          lineNumber: 13,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "components/layout/Footer.tsx",
        lineNumber: 11,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "components/layout/Footer.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col items-center gap-3 text-center md:items-end md:text-right", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs font-medium text-text-muted md:justify-end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Remix" }, void 0, false, {
          fileName: "components/layout/Footer.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-border-hover", children: "\u2022" }, void 0, false, {
          fileName: "components/layout/Footer.tsx",
          lineNumber: 18,
          columnNumber: 31
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Tailwind CSS" }, void 0, false, {
          fileName: "components/layout/Footer.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-border-hover", children: "\u2022" }, void 0, false, {
          fileName: "components/layout/Footer.tsx",
          lineNumber: 19,
          columnNumber: 38
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Framer Motion" }, void 0, false, {
          fileName: "components/layout/Footer.tsx",
          lineNumber: 20,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "components/layout/Footer.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs text-text-muted", children: [
        "\xA9 ",
        currentYear,
        " Khairul Rizky. Dibuat dengan ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-red-400", children: "\u2764" }, void 0, false, {
          fileName: "components/layout/Footer.tsx",
          lineNumber: 22,
          columnNumber: 100
        }, this),
        " dan ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-amber-500", children: "\u2615" }, void 0, false, {
          fileName: "components/layout/Footer.tsx",
          lineNumber: 22,
          columnNumber: 144
        }, this)
      ] }, void 0, true, {
        fileName: "components/layout/Footer.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "components/layout/Footer.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "components/layout/Footer.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "components/layout/Footer.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// components/ui/BackToTop.tsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
"use client";
function BackToTop() {
  const [isVisible, setIsVisible] = (0, import_react3.useState)(false);
  (0, import_react3.useEffect)(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AnimatePresence, { children: isVisible && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    motion.button,
    {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
      whileHover: { y: -3 },
      whileTap: { scale: 0.95 },
      onClick: scrollToTop,
      className: "fixed bottom-8 right-8 w-12 h-12 bg-accent-primary text-white rounded-xl shadow-lg flex items-center justify-center z-40 hover:bg-accent-secondary transition-colors",
      "aria-label": "Back to top",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("i", { className: "fas fa-arrow-up" }, void 0, false, {
        fileName: "components/ui/BackToTop.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this)
    },
    void 0,
    false,
    {
      fileName: "components/ui/BackToTop.tsx",
      lineNumber: 29,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "components/ui/BackToTop.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/LayoutClient.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/LayoutClient.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/LayoutClient.tsx"
  );
  import.meta.hot.lastModified = "1786327701712.594";
}
function LayoutClient({
  children
}) {
  _s();
  const [isLoading, setIsLoading] = (0, import_react4.useState)(true);
  const [mounted, setMounted] = (0, import_react4.useState)(false);
  const lenisRef = (0, import_react4.useRef)(null);
  const location = useLocation();
  (0, import_react4.useEffect)(() => {
    setMounted(true);
    const timerAOS = setTimeout(() => {
      initAOS();
    }, 100);
    const initLenis = async () => {
      try {
        let raf2 = function(time) {
          lenis.raf(time);
          requestAnimationFrame(raf2);
        };
        var raf = raf2;
        const Lenis = (await import("/build/_shared/lenis-WBMOOPOP.js")).default;
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          infinite: false
        });
        requestAnimationFrame(raf2);
        lenisRef.current = lenis;
      } catch (error) {
        console.warn("Lenis initialization failed:", error);
      }
    };
    initLenis();
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    window.scrollTo(0, 0);
    return () => {
      clearTimeout(timer);
      clearTimeout(timerAOS);
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, [location.pathname]);
  if (!mounted) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ThemeProvider, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(AnimatePresence, { children: isLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Preloader, {}, void 0, false, {
      fileName: "app/LayoutClient.tsx",
      lineNumber: 94,
      columnNumber: 23
    }, this) }, void 0, false, {
      fileName: "app/LayoutClient.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Navbar, {}, void 0, false, {
      fileName: "app/LayoutClient.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: "relative", children }, void 0, false, {
      fileName: "app/LayoutClient.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BackToTop, {}, void 0, false, {
      fileName: "app/LayoutClient.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/LayoutClient.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/LayoutClient.tsx",
    lineNumber: 92,
    columnNumber: 10
  }, this);
}
_s(LayoutClient, "or2vkUiy9PIK5HYp+zigLyx+bOg=", false, function() {
  return [useLocation];
});
_c = LayoutClient;
var _c;
$RefreshReg$(_c, "LayoutClient");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/styles/global.css?url
var global_default = "/build/_assets/global-DKU2FI6I.css?url";

// app/root.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
}, {
  rel: "stylesheet",
  href: global_default
}];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("html", { lang: "id", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("meta", { name: "description", content: "Portfolio profesional Khairul Rizky, Developer & Programmer" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("title", { children: "Portofolio | Khairul Rizky - Developer & Programmer" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(LayoutClient, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c2 = App;
var _c2;
$RefreshReg$(_c2, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-TPYDFCSM.js.map
