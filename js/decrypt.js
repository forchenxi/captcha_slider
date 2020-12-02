window.NECaptcha = function (e) {
  function t(i) {
    if (n[i]) return n[i].exports;
    var r = n[i] = {
      exports: {},
      id: i,
      loaded: !1
    };
    e[i].call(r.exports, r, r.exports, t);
    r.loaded = !0;
    return r.exports;
  }

  var n = {};
  t.m = e;
  t.c = n;
  t.p = "/2.14.0/";
  return t(0);
}([function (e, t, n) {
  n(54);
  n(45);
  var i = n(29);
  e.exports = i;
}, function (e, t) {
  var n = {}.toString;
  var i = {
    slice: function (e, t, n) {
      for (var i = [], r = t || 0, o = n || e.length; r < o; r++) i.push(r);

      return i;
    },
    getObjKey: function (e, t) {
      for (var n in e) if (e.hasOwnProperty(n) && e[n] === t) return n;
    },
    typeOf: function (e) {
      return null == e ? String(e) : n.call(e).slice(8, -1).toLowerCase();
    },
    isFn: function (e) {
      return "function" == typeof e;
    },
    log: function (e, t) {
      var n = ["info", "warn", "error"];
      return "string" == typeof e && ~n.indexOf(e) ? void (console && console[e]("[NECaptcha] " + t)) : void i.error('util.log(type, msg): "type" must be one string of ' + n.toString());
    },
    warn: function (e) {
      i.log("warn", e);
    },
    error: function (e) {
      i.log("error", e);
    },
    assert: function (e, t) {
      if (!e) throw new Error("[NECaptcha] " + t);
    },
    msie: function r() {
      var e = navigator.userAgent;
      var r = parseInt((/msie (\d+)/.exec(e.toLowerCase()) || [])[1]);
      isNaN(r) && (r = parseInt((/trident\/.*; rv:(\d+)/.exec(e.toLowerCase()) || [])[1]));
      return r;
    },
    now: function () {
      return new Date().getTime();
    },
    getIn: function (e, t, n) {
      if ("[object Object]" !== Object.prototype.toString.call(e)) return n;
      "string" == typeof t && (t = t.split("."));

      for (var i = 0, r = t.length; i < r; i++) {
        var o = t[i];
        if (i < r - 1 && !e[o]) return n || void 0;
        e = e[o];
      }

      return e;
    },
    raf: function o(e) {
      var o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (e) {
        window.setTimeout(e, 16);
      };

      o(e);
    },
    nextFrame: function (e) {
      i.raf(function () {
        return i.raf(e);
      });
    },
    sample: function (e, t) {
      var n = e.length;
      if (n <= t) return e;

      for (var i = [], r = 0, o = 0; o < n; o++) o >= r * (n - 1) / (t - 1) && (i.push(e[o]), r += 1);

      return i;
    },
    template: function (e, t) {
      var n = function (e) {
        return e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1");
      };

      var i = {
        start: "<%",
        end: "%>",
        interpolate: /<%=(.+?)%>/g
      };
      var r = i;
      var o = new RegExp("'(?=[^" + r.end.substr(0, 1) + "]*" + n(r.end) + ")", "g");
      var a = new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + e.replace(/[\r\t\n]/g, " ").replace(o, "\t").split("'").join("\\'").split("\t").join("'").replace(r.interpolate, "',$1,'").split(r.start).join("');").split(r.end).join("p.push('") + "');}return p.join('');");
      return t ? a(t) : a;
    },
    uuid: function a(e, t) {
      var n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
      var a = [];
      var i = void 0;
      if (t = t || n.length, e) for (i = 0; i < e; i++) a[i] = n[0 | Math.random() * t];else {
        var r = void 0;

        for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", i = 0; i < 36; i++) a[i] || (r = 0 | 16 * Math.random(), a[i] = n[19 === i ? 3 & r | 8 : r]);
      }
      return a.join("");
    },
    reverse: function (e) {
      return Array.isArray(e) ? e.reverse() : "string" === i.typeOf(e) ? e.split("").reverse().join("") : e;
    },
    encodeUrlParams: function (e) {
      var t = [];

      for (var n in e) e.hasOwnProperty(n) && t.push(window.encodeURIComponent(n) + "=" + window.encodeURIComponent(e[n]));

      return t.join("&");
    }
  };
  e.exports = i;
}, function (e, t, n) {
  function i(e) {
    if (e = e || window.event, e[v]) return e;
    this.event = e;
    this.target = e.target || e.srcElement;
    var t = this.type = e.type;

    if (c.test(t) && (this.clientX = e.clientX || e.changedTouches && e.changedTouches[0].clientX, this.clientY = e.clientY || e.changedTouches && e.changedTouches[0].clientY, this.pageX = null != e.pageX ? e.pageX : e.clientX + j.scrollLeft, this.pageY = null != e.pageX ? e.pageY : e.clientY + j.scrollTop, "mouseover" === t || "mouseout" === t)) {
      for (var n = e.relatedTarget || e[("mouseover" === t ? "from" : "to") + "Element"]; n && 3 === n.nodeType;) n = n.parentNode;

      this.relatedTarget = n;
    }

    this[v] = !0;
  }

  function r(e) {
    var t = e.nodeType;
    return 1 === t || 9 === t || 11 === t ? "string" == typeof e.textContent ? e.textContent : e.innerText : 3 === t || 4 === t ? e.nodeValue : "";
  }

  var o;
  var a;
  var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  };
  var l = n(1);
  var u = n(17);
  var f = document.createElement("div");
  var c = /^(?:click|dblclick|contextmenu|DOMMouseScroll|(mouse|touch|pointer)(?:\w+))$/;
  var j = document;
  j = j.compatMode && "CSS1Compat" !== j.compatMode ? j.body : j.documentElement;
  var d = /Mobile/i.test(window.navigator.userAgent);

  var h = function () {
    var e = 0;
    var t = !1;
    var n = window.navigator;
    "undefined" != typeof n.maxTouchPoints ? e = n.maxTouchPoints : "undefined" != typeof n.msMaxTouchPoints && (e = n.msMaxTouchPoints);

    try {
      document.createEvent("TouchEvent");
      t = !0;
    } catch (i) {}

    var r = ("ontouchstart" in window);
    return e > 0 || t || r;
  }();

  var p = function () {
    try {
      document.createEvent("PointerEvent");
      return !0;
    } catch (e) {
      return !1;
    }
  }();

  var y = {
    click: "touchstart",
    mousedown: "touchstart",
    mousemove: "touchmove",
    mouseup: "touchend"
  };
  var v = "_fixed_" + Math.random().toString(36).slice(2, 7);
  var g = !1;

  try {
    document.createElement("div").addEventListener("test", function () {}, Object.defineProperty({}, "passive", {
      get: function () {
        g = !0;
        return !1;
      }
    }));
  } catch (b) {}

  Object.assign(i.prototype, {
    stop: function () {
      this.preventDefault().stopPropagation();
    },
    preventDefault: function () {
      var e = this.event;
      !h && e.preventDefault ? e.preventDefault() : e.returnValue = !1;
      return this;
    },
    stopPropagation: function () {
      this.event.stopPropagation ? this.event.stopPropagation() : this.event.cancelBubble = !0;
      return this;
    },
    stopImmediatePropagation: function () {
      this.event.stopImmediatePropagation && this.event.stopImmediatePropagation();
    }
  });
  var m = {};
  m.body = document.body;
  m.doc = document;
  m.isMobile = d;
  m.supportTouch = h;
  m.supportPointer = p;
  m.supportPassive = g;
  f.addEventListener ? (o = function (e, t, n) {
    e.addEventListener(t, n, !1);
  }, a = function (e, t, n) {
    e.removeEventListener(t, n, !1);
  }) : (o = function (e, t, n) {
    e.attachEvent("on" + t, n);
  }, a = function (e, t, n) {
    e.detachEvent("on" + t, n);
  });

  m.on = function (e, t, n) {
    var r = t.split(" ");

    n.real = function (t) {
      var r = new i(t);
      r.origin = e;
      n.call(e, r);
    };

    r.map(function (t) {
      switch (!0) {
        case d:
          o(e, y[t] || t, n.real);
          break;

        case !d && h:
          o(e, t, n.real);
          "click" !== t && o(e, y[t], n.real);
          break;

        default:
          o(e, t, n.real);
      }
    });
    return m;
  };

  m.once = function (e, t, n) {
    var i = function r() {
      var i = n.apply(this, arguments);
      m.off(e, t, r);
      return i;
    };

    return m.on(e, t, i);
  };

  m.off = function (e, t, n) {
    var i = t.split(" ");
    n = n.real || n;
    i.map(function (t) {
      switch (!0) {
        case d:
          a(e, y[t] || t, n);
          break;

        case !d && h:
          a(e, t, n);
          a(e, y[t], n);
          break;

        default:
          a(e, t, n);
      }
    });
  };

  m.find = function (e, t) {
    return "object" === ("undefined" == typeof e ? "undefined" : s(e)) && e.nodeType ? e : e ? (e = e.trim(), t = t || document, t.querySelector ? t.querySelector(e) : /^#[^#]+$/.test(e) ? document.getElementById(e.slice(1)) : /^\.[^.]+$/.test(e) ? m.getElementsByClassName(e.slice(1), t)[0] || null : /^[^.#]+$/.test(e) ? t.getElementsByTagName(e)[0] || null : null) : null;
  };

  m.findAll = function (e, t) {
    if (t = t || document, e = e.trim(), t.querySelectorAll) return t.querySelectorAll(e);

    if (/^#[^#]+$/.test(e)) {
      var n = document.getElementById(e.slice(1));
      return n ? [n] : [];
    }

    return /^\.[^.]+$/.test(e) ? m.getElementsByClassName(e.slice(1), t) : /^[^.#]+$/.test(e) ? t.getElementsByTagName(e) : [];
  };

  m.html = function (e, t) {
    return "undefined" === l.typeOf(t) ? e.innerHTML : void (e.innerHTML = t);
  };

  m.css = function (e, t) {
    e.style.cssText += ";" + t;
  };

  m.replace = function (e, t) {
    t.parentNode && t.parentNode.replaceChild(e, t);
  };

  m.remove = function (e) {
    e.parentNode && e.parentNode.removeChild(e);
  };

  m.getComputedStyle = function (e, t) {
    var n = e.currentStyle || window.getComputedStyle(e, null);
    return t ? n[t] : n;
  };

  m.addClass = function (e, t) {
    if (e) {
      var n = e.className || "";
      ~(" " + n + " ").indexOf(" " + t + " ") || (e.className = n ? n + " " + t : t);
    }
  };

  m.delClass = function (e, t) {
    if (e) {
      var n = e.className || "";
      e.className = (" " + n + " ").replace(" " + t + " ", " ").trim();
    }
  };

  m.hasClass = function (e, t) {
    if (!e) return !1;
    var n = e.className || "";
    return ~(" " + n + " ").indexOf(" " + t + " ");
  };

  m.getElementsByClassName = function (e, t) {
    if (t = t || document, document.getElementsByClassName) return t.getElementsByClassName(e);

    for (var n, i = t.getElementsByTagName("*"), r = [], o = 0, a = i.length; o < a; o++) {
      n = i[o];
      ~(" " + n.className + " ").indexOf(" " + e + " ") && r.push(n);
    }

    return r;
  };

  m.getBubblePath = function (e) {
    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document, n = [], i = e; i && i !== t;) {
      n.push(i);
      i = i.parentNode;
    }

    return n;
  };

  m.transition = function (e, t) {
    function n() {}

    l.assert(e && e.nodeType, 'transition(el, opts) "el" must be a DOM element!');
    var i = {
      name: "",
      "enter-class": "",
      "enter-active-class": "",
      "leave-class": "",
      "leave-active-class": "",
      beforeEnter: n,
      enter: n,
      afterEnter: n,
      enterCanceled: n,
      beforeLeave: n,
      leave: n,
      afterLeave: n,
      leaveCanceled: n,
      insert: n
    };
    t = Object.assign({}, i, t);
    var r = t;
    var o = r.name;
    var a = r.beforeEnter;
    var s = r.enter;
    var f = r.afterEnter;
    var c = r.enterCanceled;
    var j = r.beforeLeave;
    var d = r.leave;
    var h = r.afterLeave;
    var p = r.leaveCanceled;
    var y = r.insert;
    var v = t["enter-class"] || o && o + "-enter";
    var g = t["enter-active-class"] || o && o + "-enter-active";
    var b = t["leave-class"] || o && o + "-leave";

    var _ = t["leave-active-class"] || o && o + "-leave-active";

    var w = !l.msie() || l.msie() > 9;
    var T = "transitionend";
    var S = "animationend";
    var E = !0;
    var R = !1;
    var k = !1;

    if (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (T = "webkitTransitionEnd"), void 0 === !window.onanimationend && void 0 !== window.onwebkitanimationend && (S = "webkitAnimationEnd"), w) {
      var C = function () {
        R && (E = !0, R = !1, m.delClass(e, g), f(e));
        k && (k = !1, m.delClass(e, _), h(e));
      };

      e.addEventListener(T, C);
      e.addEventListener(S, C);
    }

    return {
      enter: function () {
        if (e) {
          if (!w) {
            y(e);
            return void f(e);
          }

          e.className = u(e.className.trim().split(/\s+/), v, g);
          a(e);
          y(e);
          E = !1;
          R = !0;
          l.nextFrame(function () {
            m.delClass(e, v);
            s(e);
          });
        }
      },
      leave: function () {
        if (e) {
          if (!w || !E) return void h(e);
          e.className = u(e.className.trim().split(/\s+/), b, _);
          j(e);
          k = !0;
          l.nextFrame(function () {
            m.delClass(e, b);
            d(e);
          });
        }
      },
      cancelEnter: function () {
        R && (R = !1, m.delClass(e, g), c(e));
      },
      cancelLeave: function () {
        k && (k = !1, m.delClass(e, _), p(e));
      },
      dispose: function () {
        w && (e.removeEventListener(T, C), e.removeEventListener(S, C));
        e = null;
      }
    };
  };

  m.text = function (e, t) {
    if (void 0 === t) return r(e);
    var n = e.nodeType;
    1 !== n && 11 !== n && 9 !== n || ("string" == typeof e.textContent ? e.textContent = t : e.innerText = t);
  };

  f.className = "yidun_class";
  m.className = f.getAttribute("className") ? function (e) {
    return e.getAttribute("className");
  } : function (e) {
    return e.getAttribute("class");
  };

  m.getRect = function (e) {
    var t = e.getBoundingClientRect();
    if ("width" in t) return t;
    var n = t.left;
    var i = t.top;
    var r = t.right;
    var o = t.bottom;
    return Object.assign({}, t, {
      width: r - n,
      height: o - i
    });
  };

  e.exports = m;
}, function (e, t) {
  t.CAPTCHA_TYPE = {
    JIGSAW: 2,
    POINT: 3,
    SMS: 4,
    INTELLISENSE: 5,
    ICON_POINT: 7,
    INFERENCE: 9,
    WORD_ORDER: 10,
    SPACE: 11
  };
  t.CAPTCHA_CLASS = {
    CAPTCHA: "yidun",
    PANEL: "yidun_panel",
    SLIDE_INDICATOR: "yidun_slide_indicator",
    SLIDER: "yidun_slider",
    JIGSAW: "yidun_jigsaw",
    POINT: "point",
    SMS: "yidun_sms",
    TIPS: "yidun_tips",
    REFRESH: "yidun_refresh",
    CONTROL: "yidun_control",
    BGIMG: "yidun_bgimg",
    INPUT: "yidun_input",
    LOADBOX: "yidun_loadbox",
    LOADICON: "yidun_loadicon",
    LOADTEXT: "yidun_loadtext",
    ERROR: "error",
    WARN: "warn",
    VERIFY: "verifying",
    SUCCESS: "success",
    LOADING: "loading",
    LOADFAIL: "loadfail"
  };
  t.WIDTH_LIMIT = [220, 1e4];
  t.SAMPLE_NUM = 50;
  t.DEVICE = {
    MOUSE: 1,
    TOUCH: 2,
    MOUSE_TOUCH: 3
  };
  t.MAX_VERIFICATION = 5;
  t.RTL_LANGS = ["ar", "he"];
  t.CACHE_MIN = 6e4;
  t.FILE_DETECT_KEY = {
    core: "NECaptcha",
    light: "NECaptcha_theme_light",
    dark: "NECaptcha_theme_dark",
    plugins: "NECaptcha_plugin",
    watchman: "initWatchman"
  };
  t.FEEDBACK_URL = "http://support.dun.163.com/feedback/captcha";
  t.RUN_ENV = {
    WEB: 10,
    ANDROID: 20,
    IOS: 30,
    MINIPROGRAM: 40,
    JUMPER_MINI_PROGRAM: 50,
    QUICKAPP: 60
  };
}, function (e, t) {
  var n = {
    INVOKE_HOOK: "INVOKE_HOOK",
    EVENT_RESET: "EVENT_RESET",
    SWITCH_TYPE: "SWITCH_TYPE",
    SET_TYPE: "SET_TYPE",
    SWITCH_LOAD_STATUS: "SWITCH_LOAD_STATUS",
    UPDATE_VERIFY_STATUS: "UPDATE_VERIFY_STATUS",
    REFRESH: "REFRESH",
    UPDATE_COUNTS_OF_VERIFYERROR: "UPDATE_COUNTS_OF_VERIFYERROR",
    SET_TOKEN: "SET_TOKEN",
    EVENT_RESET_CLASSIC: "EVENT_RESET_CLASSIC"
  };
  e.exports = n;
}, function (e, t) {
  function n(e, t, n) {
    t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n;
    return e;
  }

  function i(e, t) {
    function n() {}

    n.prototype = t.prototype;
    e.prototype = new n();
    e.prototype.constructor = e;
  }

  function r(e, t, n) {
    this.name = "CaptchaError";
    this.code = e;
    this.message = e + ("(" + b[e] + ")") + (t ? " - " + t : "");
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack;
    this.data = n || {};
  }

  var o;
  var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  };
  var s = "prototype";
  var l = 100;
  var u = 200;
  var f = 300;
  var c = 432;
  var j = 500;
  var d = 501;
  var h = 502;
  var p = 503;
  var y = 504;
  var v = 600;
  var g = 1e3;
  var b = (o = {}, n(o, l, "script error"), n(o, u, "business error"), n(o, f, "unpass error"), n(o, c, "captcha id is invalid"), n(o, j, "request error"), n(o, d, "request api error"), n(o, h, "request script error"), n(o, p, "request img error"), n(o, y, "request timeout error"), n(o, v, "request anticheat token error"), n(o, g, "unknown error"), o);
  i(r, Error);

  r[s].toString = function () {
    var e = String(this.stack);
    return 0 === e.indexOf("CaptchaError:") ? e : this.name + ": " + this.message + (e ? "\n    " + e : "");
  };

  r.set = function (e, t) {
    "number" == typeof e && "string" == typeof t && (b[e] = t);
    "object" === ("undefined" == typeof e ? "undefined" : a(e)) && e && Object.assign(b, e);
  };

  r.get = function (e) {
    return b[e];
  };

  r.remove = function (e) {
    String(e) in b && delete b[e];
  };

  t = e.exports = r;
  t.SCRIPT_ERROR = l;
  t.BUSINESS_ERROR = u;
  t.UNPASS_ERROR = f;
  t.ID_INVAILD_ERROR = c;
  t.REQUEST_ERROR = j;
  t.REQUEST_API_ERROR = d;
  t.REQUEST_SCRIPT_ERROR = h;
  t.REQUEST_IMG_ERROR = p;
  t.REQUEST_TIMEOUT_ERROR = y;
  t.ANTICHEAT_TOKEN_ERROR = v;
  t.UNKNOWN_ERROR = g;
}, function (e, t, n) {
  function i(e) {
    var t = {};
    e.map(function (e) {
      t[e] = function () {
        var t = this;
        var n = _.options.mixins || {};
        (n[e] || []).map(function (e) {
          return e.call(t);
        });
        this.$options[e].map(function (e) {
          return e.call(t);
        });
      };
    });
    return t;
  }

  function r(e) {
    function t() {}

    function n() {
      o.apply(this, arguments);
    }

    if (e instanceof _) return e;
    var i = {};
    Object.keys(e).map(function (t) {
      ["render"].indexOf(t) > -1 && (i[t] = e[t]);
    });
    f(e.methods) && Object.assign(i, e.methods);
    var o = this.extend({});
    t.prototype = o.prototype;
    n.prototype = new t();
    Object.assign(n.prototype, i);
    n.prototype.constructor = n;
    n._options = e;
    n._extend = r;
    return n;
  }

  var o = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];

      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }

    return e;
  };

  var a = n(18);
  var s = n(39);
  var l = n(10);
  var u = l.getDocFragmentRegex;
  var f = l.isPlainObject;
  var c = l.getIn;
  var j = l.parseAttrsStr;
  var d = l.diffDataToUpdate;
  var h = l.nextTick;
  var p = l.lifeCycleHooks;
  var y = n(38);
  var v = n(37);
  var g = n(40);
  var b = n(2);
  var m = 0;

  var _ = a(o({
    initialize: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      var t = this.constructor;
      var n = m++;
      this.id = "__c_" + n;
      this.name = e.name;
      this._isMounted = !1;
      this.$options = y(t._options || {}, e);
      e.render && (this.render = e.render);
      e.methods && Object.assign(this, e.methods);
      this._boundProps = e._boundProps || {};
      var i = this.$parent = e.$parent || null;
      if (i) if (i.$root) this.$root = i.$root;else {
        for (var r = i; r.$parent;) r = r.$parent;

        this.$root = r;
      }
      this.beforeCreate();
      var o = this.$options;
      var a = o.template;
      var l = o.propsData;
      var u = o.data;
      this.$props = this._validateProps(l, !0) || {};
      Object.assign(this, this.$props);
      this.$data = "function" == typeof u ? u.call(this) : u || {};
      Object.assign(this, this.$data);
      this._composer = s(a, this);
      this.$children = [];

      this._instantiateChildren();

      this._updater = {
        id: n,
        instance: this,
        data: {}
      };
      this.created();
      e.el && this.$mount(e.el);
    },
    $mount: function (e) {
      this.beforeMount();

      this._childrenBeforeMount();

      this._composeString(this._composer, this);

      var t = this._composer.toString();

      if ("string" == typeof e || e && 1 === e.nodeType) {
        e = b.find(e);
        this.$options["abstract"] ? this.$el = e : (e.innerHTML = t, this.$el = e.children[0]);
      } else {
        var n = document.createElement("div");
        n.innerHTML = t;
        this.$el = n.children[0];
        "function" == typeof e && e(this.$el);
      }

      this._childrenMounted();

      this._initEvents();

      this._isMounted = !0;
      this.mounted();
      return this;
    }
  }, i(p), {
    $setData: function (e, t) {
      !t && (e = d(e, this.$data));
      e && Object.keys(e).length && (this._resolveWatch(e).map(function (e) {
        return e();
      }), Object.assign(this.$data, e), Object.assign(this, this.$data), Object.assign(this._updater.data, e), v(this._updater), this._renderChildren(e));
    },
    $forceUpdate: function () {
      var e = Object.assign({}, this.$data, this.$props);
      this.$setData(e, !0);
    },
    $replaceChild: function (e, t) {
      var n = t.$el.parentElement;
      var i = t.$el.nextSibling;
      var r = void 0;
      r = null === i ? function (e) {
        n.appendChild(e);
      } : function (e) {
        n.insertBefore(e, i);
      };
      e._boundProps = t._boundProps;
      e.$parent = this;
      t.$destroy();
      var o = this.$children.indexOf(t);
      o > -1 && this.$children.splice(o, 1, e);
      e.$mount(r);
    },
    $destroy: function (e) {
      this._isMounted && (this.beforeDestroy(), this._childrenBeforeDestroy(), !e && !this.$options["abstract"] && this.$el && this.$el.parentElement && this.$el.parentElement.removeChild(this.$el), this._events && (this._events.off(), this._events = null), this.$el = null, this.$props = null, this.$data = null, this.$root = null, this.$parent = null, this.$children = null, this.$options = null, this._isMounted = !1);
    },
    $nextTick: h,
    render: function () {},
    _initEvents: function () {
      var e = this;
      var t = this.$el;
      var n = this.$options.on;

      if (t && f(n)) {
        var i = {};
        Object.keys(n).map(function (t) {
          i[t] = n[t].bind(e);
        });
        this._events = new g({
          $el: t,
          events: i
        });
      }
    },
    _childrenBeforeMount: function () {
      this.$children.map(function (e) {
        e.beforeMount();

        e._childrenBeforeMount();
      });
    },
    _childrenMounted: function () {
      this.$children.map(function (e) {
        e._childrenMounted();

        var t = e.$root.$el;
        e.$el = b.find(e.$options.el, t) || b.find(e.$options.el, t.parentElement);

        e._initEvents();

        e._isMounted = !0;
        e.mounted();
      });
    },
    _childrenBeforeDestroy: function () {
      this.$children.map(function (e) {
        e.$destroy(!0);
      });
    },
    _composeString: function (e, t) {
      var n = this;
      t.$children.map(function (t) {
        e.compose(t.name, t._composer.toString());

        n._composeString(e, t);
      });
    },
    _setProps: function (e) {
      e = d(e, this.$props);
      e && Object.keys(e).length && (e = this._validateProps(e), this._resolveWatch(e).map(function (e) {
        return e();
      }), Object.assign(this.$props, e), Object.assign(this, this.$props), Object.assign(this._updater.data, e), v(this._updater));
    },
    _resolveWatch: function (e) {
      var t = this;
      var n = this.$options.watch;
      if (!n) return [];
      var i = [];
      Object.keys(n).map(function (r) {
        var o = c(e, r);

        if (void 0 !== o) {
          var a = n[r].bind(t, o, c(t, r));
          i.push(a);
        }
      });
      return i;
    },
    _renderChildren: function (e) {
      this.$children.map(function (t) {
        var n = t._boundProps;
        var i = {};
        Object.keys(n).map(function (t) {
          var r = c(e, n[t]);
          void 0 !== r && (i[t] = r);
        });

        t._setProps(i);

        t._renderChildren(i);
      });
    },
    _validateProps: function (e, t) {
      if (e) {
        var n = this.$options.props;
        var i = {};
        return f(n) ? (Object.keys(n).map(function (r) {
          var o = n[r];
          var a = e[r];

          if (f(o) || (o = {
            type: o
          }), void 0 !== a) {
            var s = Object.prototype.toString;
            if (o.type && s.call(a) !== s.call(o.type())) throw new Error("[" + r + "] is not valid type.");
            i[r] = a;
          } else t && (i[r] = o["default"]);
        }), i) : e;
      }
    },
    _instantiateChildren: function () {
      var e = this;
      var t = this.$options.components;

      if (t) {
        var n = this._composer.toString();

        Object.keys(t).map(function (i) {
          var r = n.match(u(i, !0)) || [];
          r.map(function (n) {
            n = n.match(u(i)) || [];
            var r = j(n[1]);
            var o = r.props;
            var a = r.bound;
            Object.keys(a).map(function (t) {
              var n = c(e, a[t]);
              o[t] = "function" == typeof n ? n.bind(e) : n;
            });

            var s = _._extend(t[i]);

            var l = new s({
              name: i,
              propsData: o,
              _boundProps: a,
              $parent: e
            });
            e.$children.push(l);
          });
        });
      }
    }
  }));

  _.options = {};
  _._extend = r;

  _.mixin = function (e) {
    var t = _.options.mixins || {};
    _.options.mixins = y(t, e);
  };

  e.exports = _;
}, function (e, t, n) {
  function i(e, t) {
    var n = {};

    for (var i in e) t.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);

    return n;
  }

  function r(e, t) {
    function n() {}

    n.prototype = t.prototype;
    e.prototype = new n();
    e.prototype.constructor = e;
  }

  function o(e, t) {
    this.snaker = new u(l({}, e, {
      pid: "captcha",
      limit: 5
    }));
    this._captchaConfig = t || {};
    this.events = {};
  }

  function a(e, t) {
    var n = j(e);

    if ("string" === n || "number" === n) {
      "string" === n && (e = parseFloat(e), !isNaN(e) && (e = e.toFixed));
      return e.toFixed(t);
    }
  }

  function s(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    var n = "network";
    return function (i, r, o, s) {
      var u = s.status;
      var c = s.error;
      var j = s.index;
      var h = s.res;

      try {
        var g = f(i);
        var w = "image" === o ? "image" : g.path;

        if (c) {
          e.remove(n, w, r);
          var T = {
            script: p,
            image: v,
            api: y
          };
          var S = new d(T[o], c.message, l({}, t, {
            url: i
          }));
          e.collectErr(S, {
            times: j + 1
          });
        } else {
          var E = _[u];

          if (m) {
            if ("end" !== E) return;
            var R = b.getEntriesByName(h && h._originUrl || i)[0];
            if (!R) return;
            e.collect(n, w, {
              tc: a(R.responseEnd - (R.domainLookupStart || R.connectStart), 1),
              dc: a(R.domainLookupEnd - R.domainLookupStart, 1),
              cc: a(R.connectEnd - R.connectStart, 1),
              rc: a(R.responseStart - R.requestStart, 1),
              rr: a(R.responseEnd - R.responseStart, 1),
              url: i,
              host: g.host,
              https: "https" === g.protocol,
              from: "PERF"
            }, {}, l({}, t));
          } else e.collect(n, w, {
            timestamp: new Date().valueOf(),
            url: i,
            host: g.host,
            https: "https" === g.protocol,
            from: "js"
          }, {
            rangeId: r,
            rangeType: E
          }, l({}, t));
        }
      } catch (S) {}
    };
  }

  var l = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];

      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }

    return e;
  };

  var u = n(23);
  var f = n(42);
  var c = n(1);
  var j = c.typeOf;
  var d = n(5);
  var h = n(33);
  var p = d.REQUEST_SCRIPT_ERROR;
  var y = d.REQUEST_API_ERROR;
  var v = d.REQUEST_IMG_ERROR;
  var g = "prototype";
  var b = window.performance || window.msPerformance || window.webkitPerformance || {};
  var m = b && "getEntriesByName" in b;
  r(o, Error);

  o[g].collect = function (e, t, n, r, o) {
    var a = r.rangeId;
    var s = r.rangeType;

    try {
      if (a) {
        var u = n.timestamp;
        var f = i(n, ["timestamp"]);
        !this.events[e] && (this.events[e] = {});
        !this.events[e][t] && (this.events[e][t] = {});
        var c = this.events[e][t][a];

        if ("start" !== s || c) {
          if ("end" === s && c && !c.end) {
            Object.assign(c, l({
              end: u,
              extra: o
            }, f));
            var d = c.end;
            var h = c.start;
            var p = c.extra;
            var y = i(c, ["end", "start", "extra"]);
            this.snaker.trackAsync(e, t, window.encodeURIComponent(JSON.stringify(l({
              tc: d - h
            }, y))), l({}, p, {
              nts: new Date().valueOf()
            }));
            this.events[e][t][a] = null;
          }
        } else this.events[e][t][a] = l({
          ev: c,
          start: u,
          extra: o
        }, f);
      } else this.snaker.trackAsync(e, t, "string" === j(n) ? n : window.encodeURIComponent(JSON.stringify(n)), l({}, o, {
        nts: new Date().valueOf()
      }));
    } catch (v) {}
  };

  o[g].collectErr = function (e, t) {
    h(e, this._captchaConfig, l({}, t));
  };

  o[g].remove = function (e, t, n) {
    e && t && n ? this.events[e] && this.events[e][t] && delete this.events[e][t][n] : e && t ? this.events[e] && (this.events[e][t] = {}) : e && (this.events[e] = {});
  };

  o[g].clear = function () {
    try {
      this.snaker.flush();
      this.events = {};
    } catch (e) {}
  };

  var _ = {
    start: "start",
    success: "end"
  };
  t = e.exports = o;
  t.createNetCollect = s;
}, function (e, t) {
  function n(e, t) {
    function n(e, t) {
      return e.charCodeAt(Math.floor(t % e.length));
    }

    function i(e, t) {
      return t.split("").map(function (t, i) {
        return t.charCodeAt(0) ^ n(e, i);
      });
    }

    t = i(e, t);
    return _(t);
  }

  __toByte = function (e) {
    function t(t) {
      return e.apply(this, arguments);
    }

    t.toString = function () {
      return e.toString();
    };

    return t;
  }(function (e) {
    if (e < -128) return __toByte(128 - (-128 - e));
    if (e >= -128 && e <= 127) return e;
    if (e > 127) return __toByte(-129 + e - 127);
    throw new Error("1001");
  });

  var i = function (e, t) {
    return __toByte(e + t);
  };

  var r = function (e, t) {
    if (null == e) return null;
    if (null == t) return e;

    for (var n = [], r = t.length, o = 0, a = e.length; o < a; o++) n[o] = i(e[o], t[o % r]);

    return n;
  };

  var o = function (e, t) {
    e = __toByte(e);
    t = __toByte(t);
    return __toByte(e ^ t);
  };

  var a = function (e, t) {
    if (null == e || null == t || e.length != t.length) return e;

    for (var n = [], i = e.length, r = 0, a = i; r < a; r++) n[r] = o(e[r], t[r]);

    return n;
  };

  var s = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

  var l = function (e) {
    var t = [];
    t.push(s[e >>> 4 & 15]);
    t.push(s[15 & e]);
    return t.join("");
  };

  var u = function (e) {
    var t = e.length;
    if (null == e || t < 0) return new String("");

    for (var n = [], i = 0; i < t; i++) n.push(l(e[i]));

    return n.join("");
  };

  var f = function (e) {
    if (null == e || 0 == e.length) return [];

    for (var t = new String(e), n = [], i = t.length / 2, r = 0, o = 0; o < i; o++) {
      var a = parseInt(t.charAt(r++), 16) << 4;
      var s = parseInt(t.charAt(r++), 16);
      n[o] = __toByte(a + s);
    }

    return n;
  };

  var c = function (e) {
    if (null == e || void 0 == e) return e;

    for (var t = encodeURIComponent(e), n = [], i = t.length, r = 0; r < i; r++) if ("%" == t.charAt(r)) {
      if (!(r + 2 < i)) throw new Error("1009");
      n.push(f(t.charAt(++r) + "" + t.charAt(++r))[0]);
    } else n.push(t.charCodeAt(r));

    return n;
  };

  var j = function (e) {
    var t = [];
    t[0] = e >>> 24 & 255;
    t[1] = e >>> 16 & 255;
    t[2] = e >>> 8 & 255;
    t[3] = 255 & e;
    return t;
  };

  var d = function (e) {
    var t = j(e);
    return u(t);
  };

  var h = function (e, t, n) {
    var i = [];
    if (null == e || 0 == e.length) return i;
    if (e.length < n) throw new Error("1003");

    for (var r = 0; r < n; r++) i[r] = e[t + r];

    return i;
  };

  var p = function (e, t, n, i, r) {
    if (null == e || 0 == e.length) return n;
    if (null == n) throw new Error("1004");
    if (e.length < r) throw new Error("1003");

    for (var o = 0; o < r; o++) n[i + o] = e[t + o];

    return n;
  };

  var y = function (e) {
    for (var t = [], n = 0; n < e; n++) t[n] = 0;

    return t;
  };

  var v = function (e) {
    return null == e || void 0 == e || "" == e;
  };

  var g = function () {
    return ["i", "/", "x", "1", "X", "g", "U", "0", "z", "7", "k", "8", "N", "+", "l", "C", "p", "O", "n", "P", "r", "v", "6", "\\", "q", "u", "2", "G", "j", "9", "H", "R", "c", "w", "T", "Y", "Z", "4", "b", "f", "S", "J", "B", "h", "a", "W", "s", "t", "A", "e", "o", "M", "I", "E", "Q", "5", "m", "D", "d", "V", "F", "L", "K", "y"];
  };

  var b = function () {
    return "3";
  };

  var m = function (e, t, n) {
    var i;
    var r;
    var o;
    var a = g();
    var s = b();
    var l = [];

    if (1 == n) {
      i = e[t];
      r = 0;
      o = 0;
      l.push(a[i >>> 2 & 63]);
      l.push(a[(i << 4 & 48) + (r >>> 4 & 15)]);
      l.push(s);
      l.push(s);
    } else if (2 == n) {
      i = e[t];
      r = e[t + 1];
      o = 0;
      l.push(a[i >>> 2 & 63]);
      l.push(a[(i << 4 & 48) + (r >>> 4 & 15)]);
      l.push(a[(r << 2 & 60) + (o >>> 6 & 3)]);
      l.push(s);
    } else {
      if (3 != n) throw new Error("1010");
      i = e[t];
      r = e[t + 1];
      o = e[t + 2];
      l.push(a[i >>> 2 & 63]);
      l.push(a[(i << 4 & 48) + (r >>> 4 & 15)]);
      l.push(a[(r << 2 & 60) + (o >>> 6 & 3)]);
      l.push(a[63 & o]);
    }

    return l.join("");
  };

  var _ = function (e) {
    if (null == e || void 0 == e) return null;
    if (0 == e.length) return "";
    var t = 3;

    try {
      for (var n = [], i = 0; i < e.length;) {
        if (!(i + t <= e.length)) {
          n.push(m(e, i, e.length - i));
          break;
        }

        n.push(m(e, i, t));
        i += t;
      }

      return n.join("");
    } catch (r) {
      throw new Error("1010");
    }
  };

  var w = function (e) {
    return _(c(e));
  };

  var T = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];

  var S = function (e) {
    var t = 4294967295;
    if (null != e) for (var n = 0; n < e.length; n++) {
      var i = e[n];
      t = t >>> 8 ^ T[255 & (t ^ i)];
    }
    return d(4294967295 ^ t, 8);
  };

  var E = function (e) {
    return S(null == e ? [] : c(e));
  };

  var R = [120, 85, -95, -84, 122, 38, -16, -53, -11, 16, 55, 3, 125, -29, 32, -128, -94, 77, 15, 106, -88, -100, -34, 88, 78, 105, -104, -90, -70, 90, -119, -28, -19, -47, -111, 117, -105, -62, -35, 2, -14, -32, 114, 23, -21, 25, -7, -92, 96, -103, 126, 112, -113, -65, -109, -44, 47, 48, 86, 75, 62, -26, 72, -56, -27, 66, -42, 63, 14, 92, 59, -101, 19, -33, 12, -18, -126, -50, -67, 42, 7, -60, -81, -93, -86, 40, -69, -37, 98, -63, -59, 108, 46, -45, 93, 102, 65, -79, 73, -23, -46, 37, -114, -15, 44, -54, 99, -10, 60, -96, 76, 26, 61, -107, 18, -116, -55, -40, 57, -76, -82, 45, 0, -112, -77, 29, 43, -30, 109, -91, -83, 107, 101, 81, -52, -71, 84, 36, -41, 68, 39, -75, -122, -6, 11, -80, -17, -74, -73, 35, 49, -49, -127, 80, 103, 79, -25, 52, -43, 56, 41, -61, -24, 17, -118, 115, -38, 8, -78, 33, -85, -106, 58, -98, -108, 94, 116, -125, -51, -9, 71, 82, 87, -115, 9, 69, -123, 123, -117, 113, -22, -124, -87, 64, 13, 21, -89, -2, -99, -97, 1, -4, 34, 20, 83, 119, 30, -12, -110, -66, 118, -48, 6, -36, 104, -58, -102, 97, 5, -20, 31, -72, 70, -39, 67, -68, -57, 110, 89, 51, 10, -120, 28, 111, 127, 22, -3, 54, 53, -1, 100, 74, 50, 91, 27, -31, -5, -64, 124, -121, 24, -13, 95, 121, -8, 4];
  var k = 4;
  var C = 4;
  var O = 4;
  var I = 4;

  var $ = function (e) {
    var t = [];
    if (null == e || void 0 == e || 0 == e.length) return y(C);
    if (e.length >= C) return h(e, 0, C);

    for (var n = 0; n < C; n++) t[n] = e[n % e.length];

    return t;
  };

  var X = function (e) {
    if (null == e || void 0 == e || 0 == e.length) return y(k);
    var t = e.length;
    var n = 0;
    n = t % k <= k - O ? k - t % k - O : 2 * k - t % k - O;
    var i = [];
    p(e, 0, i, 0, t);

    for (var r = 0; r < n; r++) i[t + r] = 0;

    var o = j(t);
    p(o, 0, i, t + n, O);
    return i;
  };

  var x = function (e) {
    if (null == e || e.length % k != 0) throw new Error("1005");

    for (var t = [], n = 0, i = e.length / k, r = 0; r < i; r++) {
      t[r] = [];

      for (var o = 0; o < k; o++) t[r][o] = e[n++];
    }

    return t;
  };

  var A = function (e) {
    var t = e >>> 4 & 15;
    var n = 15 & e;
    var i = 16 * t + n;
    return R[i];
  };

  var P = function (e) {
    if (null == e) return null;

    for (var t = [], n = 0, i = e.length; n < i; n++) t[n] = A(e[n]);

    return t;
  };

  var N = function () {
    for (var e = [], t = 0; t < I; t++) {
      var n = 256 * Math.random();
      n = Math.floor(n);
      e[t] = __toByte(n);
    }

    return e;
  };

  var M = function (e, t) {
    if (null == e) return null;

    for (var n = __toByte(t), i = [], r = e.length, a = 0; a < r; a++) i.push(o(e[a], n));

    return i;
  };

  var D = function (e, t) {
    if (null == e) return null;

    for (var n = __toByte(t), r = [], o = e.length, a = 0; a < o; a++) r.push(i(e[a], n));

    return r;
  };

  var M = function (e, t) {
    if (null == e) return null;

    for (var n = __toByte(t), i = [], r = e.length, a = 0; a < r; a++) i.push(o(e[a], n));

    return i;
  };

  var L = function (e) {
    var t = M(e, 56);
    var n = D(t, -40);
    var i = M(n, 103);
    return i;
  };

  var V = function (e, t) {
    null == e && (e = []);
    var n = N();
    t = $(t);
    t = a(t, $(n));
    t = $(t);
    var i = t;
    var o = X(e);
    var s = x(o);
    var l = [];
    p(n, 0, l, 0, I);

    for (var u = s.length, f = 0; f < u; f++) {
      var c = L(s[f]);
      var j = a(c, t);
      var d = r(j, i);
      j = a(d, i);
      var h = P(j);
      h = P(h);
      p(h, 0, l, f * k + I, k);
      i = h;
    }

    return l;
  };

  var B = function (e) {
    var t = "14731382d816714fC59E47De5dA0C871D3F";
    if (null == t || void 0 == t) throw new Error("1008");
    null != e && void 0 != e || (e = "");
    var n = e + E(e);
    var i = c(n);
    var r = c(t);
    var o = V(i, r);
    return _(o);
  };

  t.eypt = B;
  t.xor_encode = n;
  t.toByte = __toByte;
  t.str2Bytes = c;
  t.arrayCopy = h;
  t.arrayCopy2 = p;
  t.createEmptyArray = y;
  t.isEmptyString = v;
  t.base64Encode = w;
  t.getStringCRC32 = E;
  t.toByte = __toByte;
}, function (e, t, n) {
  function i(e, t) {
    var n = {};

    for (var i in e) t.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);

    return n;
  }

  var r = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];

      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }

    return e;
  };

  var o = n(60);
  var a = n(19);
  var s = n(47);
  var l = n(41);
  var u = n(1);
  var f = 0;

  var c = function (e) {
    return "string" == typeof e ? [e, e] : Array.isArray(e) && 1 === e.length ? e.concat(e) : e;
  };

  var j = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    return parseInt(new Date().valueOf() / e, 10);
  };

  var d = {
    script: function (e, t) {
      var n = this;
      this.cacheTime && (e = e + "?v=" + j(this.cacheTime));
      o(e, {
        charset: "UTF-8"
      }, function (i, r) {
        var o = n.detectKey;

        if (i || o && !window[o]) {
          var a = new Error("Failed to load script(" + e + ")." + (i ? i.message : "unreliable script"));
          a.data = {
            url: e,
            retry: !!n._options.retry
          };
          return void t(a);
        }

        t({
          scriptEl: r,
          _originUrl: e
        });
      });
    },
    image: function (e, t) {
      var n = this;
      var i = document.createElement("img");

      i.onload = function () {
        i.onload = i.onerror = null;
        t({
          width: i.width,
          height: i.height,
          src: e
        });
      };

      i.onerror = function (r) {
        i.onload = i.onerror = null;
        var o = new Error("Failed to load image(" + e + ")." + r.message);
        o.data = {
          url: e,
          retry: !!n._options.retry
        };
        t(o);
      };

      i.src = e;
    },
    api: function (e, t, n) {
      var i = this;
      l(e, n, function (n, o, a) {
        if (n) {
          var s = new Error("Failed to request api(" + e + ")." + n.message);
          s.data = {
            url: e,
            retry: !!i._options.retry
          };
          return void t(s);
        }

        t(r({}, o, {
          _originUrl: a.url
        }));
      }, {
        timeout: this.timeout
      });
    }
  };

  var h = function (e) {
    this.id = e.id || "resource_" + f++;
    this.type = e.type || "script";
    this.url = e.url || "";
    this.payload = e.payload;
    this.timeout = e.timeout || 6e3;
    this.cacheTime = e.cacheTime ? parseInt(e.cacheTime, 10) : 0;
    this.detectKey = e.detectKey || "";
    this._options = e;
    a.call(this);
    this.load();
    this.setTimeout();
  };

  s(h, a);
  Object.assign(h.prototype, {
    load: function () {
      var e = this;
      var t = d[this.type];
      t && t.call(this, this.url, function (t) {
        return e.resolve(t);
      }, this.payload);
    },
    addSupport: function (e, t, n) {
      ("function" != typeof d[e] || n) && (d[e] = t);
    },
    setTimeout: function () {
      var e = this;
      window.setTimeout(function () {
        var t = String(e.url);
        var n = new Error("Timeout: failed to request " + e.type + "(" + t + ").");
        n.data = {
          url: t
        };
        e.resolve(n);
      }, this.timeout);
    }
  });
  h.SUPPORTS = d;

  var p = function (e) {
    d.hasOwnProperty(e) && (h[e] = function (t) {
      var n = t.disableRetry;
      var o = t.onProcess;
      var s = t.checkResult;
      var l = i(t, ["disableRetry", "onProcess", "checkResult"]);

      if (n) {
        var f = l.url;
        Array.isArray(f) && (f = f[0] || "");
        return new h(r({}, l, {
          url: f,
          type: e
        }));
      }

      var j = c(t.url);
      var d = new a();

      var p = function y() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;

        var n = function (n) {
          var i = j.length;
          t < i - 1 ? y(t + 1) : t === i - 1 && (n.data = r({}, n.data, {
            url: String(j),
            requestId: p.id
          }), d.resolve(n));
          u.isFn(o) && o(c, p.id, e, {
            status: "error",
            error: n,
            index: t
          });
        };

        var i = function (e) {
          var t = e instanceof Error ? e : new Error("Failed to check result of " + c);
          t.data = {
            url: c,
            retry: !!l.retry
          };
          n(t);
        };

        var f = function (t) {
          u.isFn(o) && o(c, p.id, e, {
            status: "success",
            res: t
          });
          d.resolve(t);
        };

        var c = j[t];
        var p = new h(r({}, l, {
          type: e,
          url: c,
          retry: t > 0
        }));
        u.isFn(o) && o(c, p.id, e, {
          status: "start"
        });
        p.then(function (e) {
          if (!u.isFn(s)) return f(e);
          var t = s(e);
          t instanceof a ? t.then(f(e))["catch"](function (e) {
            return i(e);
          }) : t ? f(e) : i();
        })["catch"](function (e) {
          return n(e);
        });
      };

      p(0);
      return d;
    });
  };

  for (var y in d) p(y);

  h.all = function (e) {
    var t = 0;
    var n = !1;
    var i = new a();
    var r = [];
    e.map(function (o, a) {
      o.then(function (o) {
        n || (r[a] = o, t++, t === e.length && i.resolve(r));
      })["catch"](function (e) {
        n = !0;
        i.resolve(e);
      });
    });
    return i;
  };

  e.exports = h;
}, function (e, t) {
  var n = function () {
    function e(e, t) {
      var n = [];
      var i = !0;
      var r = !1;
      var o = void 0;

      try {
        for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
      } catch (l) {
        r = !0;
        o = l;
      } finally {
        try {
          !i && s["return"] && s["return"]();
        } finally {
          if (r) throw o;
        }
      }

      return n;
    }

    return function (t, n) {
      if (Array.isArray(t)) return t;
      if (Symbol.iterator in Object(t)) return e(t, n);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();

  t.getDocFragmentRegex = function (e, t) {
    return new RegExp("<" + e + "\\s*([\\s\\S]+)?(?!%)>([\\s\\S]+)?<\\/" + e + ">", t ? "g" : "");
  };

  t.isPlainObject = function (e) {
    return "[object Object]" === Object.prototype.toString.call(e) && e && e.constructor === Object;
  };

  t.getIn = function (e, t, n) {
    "string" == typeof t && (t = t.split("."));

    for (var i = 0, r = t.length; i < r; i++) {
      var o = t[i];
      if (i < r - 1 && !e[o]) return n;
      e = e[o];
    }

    return e;
  };

  t.parseAttrsStr = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    var t = e.match(/[^<>*+\s=]+(?:=".*?")?/g);
    if (!t) return {
      props: {},
      bound: {}
    };
    var i = {};
    var r = {};
    t.map(function (e) {
      var t = e.split("=");
      var o = n(t, 2);
      var a = o[0];
      var s = o[1];
      void 0 === s && (s = !0);

      try {
        s = JSON.parse(s);
      } catch (l) {
        console.error(l);
      }

      if (0 === a.indexOf(":")) {
        var u = !1;
        a = a.substring(1);

        try {
          s = JSON.parse(s);
        } catch (l) {
          r[a] = s;
          u = !0;
        }

        !u && (i[a] = s);
      }

      0 === a.indexOf("@") ? (a = a.substring(1), r[a] = s) : i[a] = s;
    });
    return {
      props: i,
      bound: r
    };
  };

  t.nextTick = function (e) {
    window.Promise ? Promise.resolve().then(e) : window.setTimeout(e, 0);
  };

  t.diffDataToUpdate = function (e, t) {
    var n = {};

    for (var i in e) {
      var r = e[i];
      r !== t[i] && (n[i] = r);
    }

    return n;
  };

  t.lifeCycleHooks = ["beforeCreate", "created", "beforeMount", "mounted", "beforeDestroy"];
}, function (e, t, n) {
  function i(e) {
    var t = this;
    o.mixin(this);

    var n = function (e) {
      return t.resolve(e);
    };

    var i = function (e) {
      return t.resolve(e);
    };

    "function" == typeof e && e(n, i);
  }

  var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  };
  var o = n(19);

  i.all = function (e) {
    return new i(function (t, n) {
      var i = 0;
      var r = !1;
      var o = [];
      e.map(function (a, s) {
        a.then(function (n) {
          r || (o[s] = n, i++, i === e.length && t(o));
        })["catch"](function (e) {
          r = !0;
          n(e);
        });
      });
    });
  };

  i.resolve = function (e) {
    return e && "object" === ("undefined" == typeof e ? "undefined" : r(e)) && "function" == typeof e.then ? e : new i(function (t) {
      return t(e);
    });
  };

  i.reject = function (e) {
    return new i(function (t, n) {
      return n(e);
    });
  };

  e.exports = i;
}, function (e, t) {
  var n = {
    FETCH_CAPTCHA: "FETCH_CAPTCHA",
    FETCH_INTELLISENSE_CAPTCHA: "FETCH_INTELLISENSE_CAPTCHA",
    VERIFY_CAPTCHA: "VERIFY_CAPTCHA",
    VERIFY_INTELLISENSE_CAPTCHA: "VERIFY_INTELLISENSE_CAPTCHA",
    RESET_STATE: "RESET_STATE"
  };
  e.exports = n;
}, function (e, t, n) {
  function i(e, t, n) {
    t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n;
    return e;
  }

  function r(e, t) {
    if (!e) return {};
    var n = e.customStyles;
    var i = e.width;
    var r = e.minWidth;
    var o = parseInt(n.controlBar.height, 10);
    var a = parseInt(n.gap, 10);
    var s = Math.max(parseInt(i, 10), parseInt(r, 10)) / 2;
    return {
      controlBarHeight: o,
      imagePanelHeight: t ? 0 : s,
      gapHeight: t ? 0 : a,
      total: t ? o : o + a + s
    };
  }

  var o;
  var a = n(1);
  var s = n(2);
  var l = n(3);
  var u = l.CAPTCHA_TYPE;
  var f = l.CAPTCHA_CLASS;
  var c = l.WIDTH_LIMIT;
  var j = l.RTL_LANGS;
  var d = l.FEEDBACK_URL;
  var h = n(15);
  var p = n(17);
  var y = n(4);
  var v = y.SWITCH_TYPE;
  var g = y.INVOKE_HOOK;
  var b = y.EVENT_RESET;
  var m = y.SWITCH_LOAD_STATUS;
  var _ = y.UPDATE_VERIFY_STATUS;
  var w = y.REFRESH;
  var T = y.EVENT_RESET_CLASSIC;
  var S = y.SET_TOKEN;
  var E = n(12);
  var R = E.FETCH_CAPTCHA;
  var k = E.VERIFY_CAPTCHA;
  var C = E.RESET_STATE;
  var O = n(26);
  var I = n(27);
  var $ = n(28);
  var X = n(25);
  e.exports = {
    el: ".yidun",
    template: n(57),
    props: {
      autoWidth: {
        type: Boolean,
        "default": !1
      },
      intellisense: {
        type: Boolean,
        "default": !1
      },
      enableColor: {
        type: Boolean,
        "default": !1
      }
    },
    data: function () {
      var e = this.$store.state;
      var t = e.captchaType;
      var n = e.langPkg;
      var i = e.config;
      var r = e.load;
      var o = e.verifyStatus;
      var a = s.isMobile && this.intellisense && "bind" !== i.mode ? "260px" : i.width;
      return {
        captchaId: i.captchaId,
        captchaType: t,
        theme: i.theme,
        customStyles: i.customStyles,
        feedback: {
          url: d,
          enable: !!i.feedbackEnable
        },
        mode: "bind" === i.mode ? "popup" : this.intellisense ? "embed" : i.mode,
        width: this.autoWidth ? "auto" : a,
        minWidth: c[0] + "px",
        langPkg: n,
        load: r,
        verifyStatus: o,
        verifyPayload: null,
        inferences: [0, 1, 2, 3, 4, 5, 6, 7]
      };
    },
    on: (o = {}, i(o, "." + f.REFRESH + " click", function (e) {
      e.stopPropagation();
      var t = this.$store.state;
      var n = t.config;
      var i = t.countsOfVerifyError;
      var r = t.verifyStatus;
      i > n.maxVerification || "verifying" === r && this.captchaType !== u.SMS || "loading" === this.load.status || this.refresh();
    }), i(o, ".yidun_tips click", function () {
      var e = this.$store.state;
      var t = e.config;
      var n = e.countsOfVerifyError;
      var i = e.verifyStatus;
      "error" === i && n > t.maxVerification && this.$store.commit(T);
    }), o),
    watch: {
      captchaType: function (e, t) {
        e !== t && this.updateUIByType(e, t);
      }
    },
    mounted: function () {
      var e = this;
      var t = this.$store.state;
      var n = t.config;
      var i = t.token;
      h(this.$store.state.config.customStyles.primaryColor, this.$el, this.enableColor);
      this._baseClassNames = this.$el.className.trim();
      this._removeEvents = this.initEvents();
      this._unsubscribe = this.$store.subscribe(function (t, n) {
        var r = t.type;
        var o = t.payload;
        var a = n.captchaType;
        var s = n.load;
        var l = n.verifyStatus;

        switch (r) {
          case v:
            e.$setData({
              captchaType: a
            });
            break;

          case m:
            e.$setData({
              load: s
            });
            s && "done" === s.status && e.$store.commit(g, {
              name: "onDidRefresh"
            });
            break;

          case _:
            e.$setData({
              verifyStatus: l,
              verifyPayload: o
            });
            break;

          case b:
            !e.intellisense && e.reset();
            break;

          case T:
            var u = e.intellisense ? {
              token: i
            } : null;
            e.reset(u);
            break;

          case S:
            e.setFeedbackUrl();
        }
      });
      this.intellisense || this.reset({
        token: i
      });
      "bind" === n.mode && this.refresh({
        token: i
      });
      j.indexOf(n.lang) !== -1 && (this.$el.style.direction = "rtl");
    },
    beforeDestroy: function () {
      this._unsubscribe();

      this._removeEvents();
    },
    render: function (e) {
      var t = e.captchaType;
      var n = e.load;
      var i = e.verifyStatus;
      var r = e.verifyPayload;
      "undefined" != typeof t && this.switchCaptchaType(t);
      "undefined" != typeof n && this.changeLoadStatus(n);
      "undefined" != typeof i && this.updateVerifyStatus(i, r);
    },
    methods: {
      initEvents: function () {
        var e = this;
        var t = void 0;
        "float" === this.mode && (t = this.initFloatMode());

        var n = function (e) {
          /^IMG$/i.test(e.target.tagName) && e.preventDefault();
        };

        s.on(this.$el, "dragstart", n);
        return function () {
          t && t();
          s.off(e.$el, "dragstart", n);
        };
      },
      initFloatMode: function () {
        var e = this;
        var t = s.find("." + f.PANEL, this.$el);
        var n = s.find("." + f.CONTROL, this.$el);
        var i = !1;
        var o = null;
        var l = null;
        var u = s.transition(t, {
          name: "panel_ease_" + this.customStyles.imagePanel.align,
          insert: function (e) {
            e.style.display = "block";
            i = !0;
          },
          afterLeave: function (e) {
            e.style.display = "none";
            i = !1;
          },
          leaveCanceled: function (e) {
            e.style.display = "none";
            i = !1;
          }
        });
        var c = this;

        var j = function (e) {
          c.panelVisible = !e;
          c.$children && c.$children.map(function (e) {
            e.floatStatusChange && e.floatStatusChange();
          });
          s.isMobile && setTimeout(function () {
            c._isMounted && c.$store.commit(g, {
              name: "onFloatHeightChange",
              args: [r(c.$data, e)]
            });
          }, 200);
        };

        var d = !0;

        var h = function (t) {
          if (e._isMounted) {
            var n = t.relatedTarget && e.$el.contains(t.relatedTarget);
            if ((d || !n || "mouseover" !== t.type) && (d = !1, window.clearTimeout(l), u.cancelLeave(), "success" !== e.$store.state.verifyStatus)) return i ? j() : void (o = window.setTimeout(function () {
              var e = document.activeElement;
              e && e !== document.body && e.blur();
              u.enter();
              j();
            }, 300));
          }
        };

        var p = function (t) {
          if (e._isMounted) {
            var n = t.relatedTarget && e.$el.contains(t.relatedTarget);
            var r = !(s.isMobile || !s.supportTouch) && null === t.relatedTarget;

            if (!n && !r || "mouseout" !== t.type) {
              d = !0;
              var a = s.getBubblePath(t.target);

              if (!(~["touchstart", "pointerdown"].indexOf(t.type) && ~a.indexOf(e.$el) || ~["mouseleave", "pointerleave"].indexOf(t.type) && null === t.event.relatedTarget)) {
                window.clearTimeout(o);
                u.cancelEnter();
                var f = e.$children[0];
                var c = f && f.drag;
                !i || c && "dragging" === c.status || (l = window.setTimeout(function () {
                  u.leave();
                  j(!0);
                }, 300));
              }
            }
          }
        };

        var y = this.$store.subscribe(function (e, t) {
          var n = e.type;
          n === _ && "success" === t.verifyStatus && (u.leave(), j(!0));
        });
        var v = a.msie();
        var b = v ? "mouseenter" : "mouseover";
        var m = v ? "mouseleave" : "mouseout";

        switch (!0) {
          case s.isMobile:
            s.on(n, "touchstart", h);
            s.on(document.body, "touchstart", p);
            break;

          case !s.isMobile && s.supportTouch:
            s.on(n, "touchstart", h);
            s.on(document.body, "touchstart", p);
            s.on(this.$el, b, h);
            s.on(this.$el, m, p);
            break;

          case s.supportPointer:
            s.on(n, "pointerdown", h);
            s.on(document.body, "pointerdown", p);
            s.on(this.$el, "pointerenter", h);
            s.on(this.$el, "pointerleave", p);
            break;

          default:
            s.on(this.$el, b, h);
            s.on(this.$el, m, p);
        }

        return function () {
          s.off(e.$el, b, h);
          s.off(e.$el, m, p);
          s.off(n, "touchstart", h);
          s.off(document.body, "touchstart", p);
          s.supportPointer && (s.off(n, "pointerdown", h), s.off(document.body, "pointerdown", p), s.off(e.$el, "pointerenter", h), s.off(e.$el, "pointerleave", p));
          y();
          u.dispose();
        };
      },
      fetchCaptcha: function (e, t) {
        var n = {
          width: this.getWidth()
        };
        n.token = this.intellisense ? this.$store.state.token : this.$store.state.previousToken;
        Object.assign(n, e);
        this.$store.dispatch(R, n, t);
      },
      verifyCaptcha: function (e) {
        var t = this;
        this.$store.commit(_, {
          verifyStatus: "verifying"
        });
        var n = this.$store.state.token;

        var i = function (i) {
          t.$store.dispatch(k, Object.assign({
            token: n,
            acToken: i,
            width: t.getWidth()
          }, e));
        };

        this.$anticheatPromise ? this.$anticheatPromise.then(i) : i("");
      },
      reset: function (e) {
        this.$store.dispatch(C);
        this.refresh(e);
      },
      refresh: function (e, t) {
        var n = this.$children[0];
        n && n.reset();
        this.$anticheatPromise = null;
        this.$store.commit(w);
        this.fetchCaptcha(e, t);
      },
      updateUIByType: function (e, t) {
        t && s.delClass(this.$el, this.getCaptchaTypeClassName(t));
        s.addClass(this.$el, this.getCaptchaTypeClassName(e));
      },
      getCaptchaTypeClassName: function (e) {
        return e ? f.CAPTCHA + "--" + a.getObjKey(u, e).toLowerCase() : "";
      },
      getWidth: function () {
        return this.$el.offsetWidth;
      },
      resetClassNames: function () {
        for (var e = this._baseClassNames.split(/\s+/), t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];

        this.$el.className = p(e, this.getCaptchaTypeClassName(this.captchaType), n);
      },
      switchCaptchaType: function (e) {
        if (e) {
          var t = u.JIGSAW;
          var n = u.POINT;
          var i = u.SMS;
          var r = u.ICON_POINT;
          var o = u.INFERENCE;
          var a = u.WORD_ORDER;
          var s = u.SPACE;
          var l = {
            el: this.$el,
            propsData: {
              loadInfo: this.load,
              mode: this.mode,
              type: e,
              onVerifyCaptcha: this.verifyCaptcha.bind(this)
            },
            _boundProps: {
              loadInfo: "load"
            },
            $parent: this
          };
          var f = this.$children[0];

          switch (f && f.$destroy(), e) {
            case t:
              f = new O(l);
              break;

            case n:
            case r:
            case a:
            case s:
              f = new I(l);
              break;

            case i:
              f = new $(l);
              break;

            case o:
              f = new X(l);
          }

          f.$forceUpdate();
          this.$children = [f];
        }
      },
      changeLoadStatus: function (e) {
        if (e) {
          var t = f.CAPTCHA;
          var n = f.LOADING;
          var i = f.LOADFAIL;
          var r = f.LOADTEXT;
          var o = s.find("." + r, this.$el);
          var a = s.find(".yidun_tips__text", this.$el);
          var l = s.find(".yidun_tips__answer", this.$el);
          var u = this.$store.state.langPkg;
          var c = e.status;
          var j = e.data;

          switch (c) {
            case "loading":
              j || (this.resetClassNames(t + "--" + n), s.text(o, u.loading), s.text(a, u.loading), s.addClass(l, "hide"));
              break;

            case "done":
              this.resetClassNames();
              break;

            case "fail":
              this.resetClassNames(t + "--" + i);
              s.text(o, u.loadfail);
              s.text(a, u.loadfail);
              s.addClass(l, "hide");
          }

          "done" !== c || this.intellisense || this.isReady || (this.isReady = !0, this.$store.commit(g, {
            name: "onReady"
          }));
        }
      },
      updateVerifyStatus: function (e, t) {
        var n = this;
        var i = f.CAPTCHA;
        var r = f.SUCCESS;
        var o = f.VERIFY;
        var a = f.ERROR;
        var l = s.find(".yidun_tips__text", this.$el);
        var c = s.find(".yidun_tips__answer", this.$el);
        var j = s.find(".yidun_slider__icon--img", this.$el);
        var d = this.$data.customStyles;
        var h = d.controlBar;
        var p = void 0 === h ? {} : h;
        var y = d.icon;
        var v = void 0 === y ? {} : y;
        var g = this.$store.state;
        var b = g.langPkg;
        var m = g.config;
        var _ = g.countsOfVerifyError;

        var w = function (e) {
          !v.slider && j && (e ? (j.src = e, j.style.display = "block") : j.style.display = "none");
        };

        switch (e) {
          case "verifying":
            this.resetClassNames(i + "--" + o);
            break;

          case "success":
            this.resetClassNames(i + "--" + r);
            this.captchaType === u.JIGSAW ? s.text(l, "") : s.text(l, b.verifySuccess);
            s.addClass(c, "hide");
            w(p.slideIconSuccess);
            break;

          case "error":
            var T = _ > m.maxVerification;
            var S = i + "--" + a;
            var E = T ? S + " yidun--maxerror" : S;
            this.resetClassNames(E);
            T ? s.text(l, b.verifyOutOfLimit) : this.captchaType === u.JIGSAW ? s.text(l, "") : s.text(l, b.verifyError);
            s.addClass(c, "hide");
            w(p.slideIconError);
            !T && window.setTimeout(function () {
              return n.refresh();
            }, [u.POINT, u.INFERENCE, u.WORD_ORDER, u.ICON_POINT, u.SPACE].indexOf(this.captchaType) > -1 ? 1200 : 300);
        }
      },
      setFeedbackUrl: function () {
        var e = s.find(".yidun_feedback", this.$el);

        if (e) {
          var t = this.$store.state.token;
          e.href = this.feedback.url + "?" + a.encodeUrlParams({
            captchaId: this.captchaId,
            token: t
          });
        }
      },
      getAnticheatToken: function (e) {
        var t = e.timeout;
        this.$anticheatPromise = this.$store.state.captchaAnticheat.getToken({
          timeout: t
        });
      },
      shouldHandleFloatChange: function (e) {
        var t = this.$store.state;
        var n = t.countsOfVerifyError;
        var i = t.verifyStatus;
        var r = t.config;
        return !(n > r.maxVerification) && (!e || "done" === e.status) && !i;
      }
    }
  };
}, function (e, t, n) {
  function i(e) {
    e.stopPropagation();
    e.nativeEvent.stopPropagation();
    this.close();
  }

  function r(e, t) {
    if (!t) return e;
    var n = Object.assign({}, e, t);
    var i = n.capPadding;
    var r = n.capBarHeight;
    var o = n.width;
    var a = n.top;
    i = parseFloat(i, 10);
    i = i && 0 !== i ? i : e.capPadding;
    r = parseFloat(r, 10);
    r = r && 0 !== i ? r : e.capBarHeight;
    var l = "auto" !== o;

    if (l) {
      var u = d[0] + 2 * i + 2;
      o = parseFloat(o, 10) || 0;
      o = o > u ? o : u;
    }

    var f = "auto" !== a;
    f && ("number" === s.typeOf(a) || Number(a) || "0" === a ? a += "px" : /\d+(\.\d+)?(px|rem)/.test(a) || (a = parseFloat(a, 10) || 0, a = a >= 0 && a <= 100 ? a + "%" : e.top));
    return {
      width: o,
      top: a,
      capPadding: i,
      capBarHeight: r
    };
  }

  var o = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];

      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }

    return e;
  };

  var a = n(2);
  var s = n(1);
  var l = n(4);
  var u = l.UPDATE_VERIFY_STATUS;
  var f = n(13);
  var c = n(3);
  var j = c.RTL_LANGS;
  var d = c.WIDTH_LIMIT;
  var h = n(15);
  var p = {
    capPadding: 15,
    capBarHeight: 50,
    width: "auto",
    top: "20%"
  };
  e.exports = {
    el: ".yidun_popup",
    template: n(59),
    components: {
      "captcha-core": f
    },
    props: {
      autoOpen: {
        type: Boolean,
        "default": !0
      },
      intellisense: {
        type: Boolean,
        "default": !1
      },
      enableColor: {
        type: Boolean,
        "default": !1
      },
      onClose: Function
    },
    data: function () {
      var e = this.$store.state;
      var t = e.langPkg;
      var n = e.config;
      var i = o({}, p, n.appendTo ? {
        top: "auto"
      } : {});
      var a = r(i, n.popupStyles);
      var s = "auto" !== a.width;
      var l = "auto" !== a.top;
      return {
        langPkg: t,
        widthIsNotAuto: s,
        width: s ? a.width + "px" : "auto",
        topIsNotAuto: l,
        top: l ? a.top : "auto",
        theme: n.theme,
        popupStyles: a,
        appendTo: n.appendTo,
        enableClose: n.enableClose,
        bodyCloseModalFn: this.bodyCloseModal.bind(this)
      };
    },
    on: Object.assign({
      ".yidun_modal__close click": i
    }, a.isMobile ? null : {
      ".yidun_popup__mask click": i
    }),
    mounted: function () {
      var e = this;
      h(this.$store.state.config.customStyles.primaryColor, this.$el, this.enableColor);
      var t = a.find(".yidun_modal", this.$el);
      var n = a.find(".yidun_popup__mask", this.$el);
      a.on(this.appendTo ? n : document, "click", this.bodyCloseModalFn);
      this._transition = a.transition(t, {
        name: "popup_ease",
        beforeEnter: function () {
          n.style.opacity = "0";
        },
        insert: function () {
          e.$el.style.display = "block";
        },
        enter: function () {
          n.style.opacity = "";
        },
        leave: function () {
          n.style.opacity = "0";
        },
        afterLeave: function () {
          var t = e.onClose;
          e.$el.style.display = "none";
          t && t();
        }
      });
      this._unsubscribe = this.$store.subscribe(function (t, n) {
        var i = t.type;
        i === u && "success" === n.verifyStatus && window.setTimeout(e.close.bind(e), 500);
      });
      j.indexOf(this.$store.state.config.lang) !== -1 && (this.$el.style.direction = "rtl");
      this.autoOpen && this.open();
    },
    beforeDestroy: function () {
      this._transition.dispose();

      a.off(this.appendTo ? a.find(".yidun_popup__mask", this.$el) : document, "click", this.bodyCloseModalFn);
    },
    methods: {
      open: function () {
        var e = this;
        s.nextFrame(function () {
          return e._transition.enter();
        });
      },
      bodyCloseModal: function (e) {
        var t = a.className(e.target);
        t && t.search(/yidun/g) > -1 || this.close();
      },
      close: function () {
        this.$store.state.config.enableClose || this.closeModal();
      },
      closeModal: function () {
        this._isMounted && "none" !== this.$el.style.display && this._transition.leave();
      },
      refresh: function () {
        var e = this.$children[0];
        e && e.refresh.apply(e, arguments);
      }
    }
  };
}, function (e, t, n) {
  var i = n(21);
  var r = n(1);

  e.exports = function (e, t) {
    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];

    if (e && n) {
      var o = r.uuid();
      var a = "\n    .yidun_intellisense .yidun_intelli-tips:hover .yidun_intelli-icon,\n    .yidun_intellisense.yidun_intellisense--checking .yidun_intelli-icon,\n    .yidun_intellisense.yidun_intellisense--loading .yidun_intelli-icon,\n    .yidun.yidun--jigsaw .yidun_control .yidun_slider:hover,\n    .yidun.yidun--jigsaw .yidun_control.yidun_control--moving .yidun_slider {\n      background-color: " + e + ";\n    }\n    .yidun.yidun--jigsaw .yidun_control.yidun_control--moving .yidun_slide_indicator {\n      border-color: " + e + ";\n    }\n  ";
      var s = Object.assign([["NECaptcha-color__" + o, a]]);
      i(s, t);
    }
  };
}, function (e, t) {
  e.exports = function (e) {
    var t = e.protocol;
    var n = void 0 === t ? "" : t;
    var i = e.host;
    var r = void 0 === i ? "" : i;
    var o = e.port;
    var a = void 0 === o ? "" : o;
    var s = e.path;
    var l = void 0 === s ? "" : s;
    var u = e.search;
    var f = void 0 === u ? "" : u;
    var c = e.hash;
    var j = void 0 === c ? "" : c;

    if (n && (n = n.replace(/:?\/{0,2}$/, "://")), r) {
      var d = r.match(/^([-0-9a-zA-Z.:]*)(\/.*)?/);
      r = d[1];
      l = (d[2] || "") + "/" + l;
    }

    if (!r && (n = ""), a) {
      if (!r) throw Error('"host" is required, if "port" was provided');
      a = ":" + a;
    }

    l && (l = l.replace(/^\/*|\/+/g, "/"));
    f && (f = f.replace(/^\??/, "?"));
    j && (j = j.replace(/^#?/, "#"));
    return n + r + a + l + f + j;
  };
}, function (e, t, n) {
  var i;
  var r;
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  };
  !function () {
    var a = function () {
      function e() {}

      function t(e, t) {
        for (var n = t.length, i = 0; i < n; ++i) a(e, t[i]);
      }

      function n(e, t) {
        e[t] = !0;
      }

      function i(e, t) {
        for (var n in t) l.call(t, n) && (e[n] = !!t[n]);
      }

      function r(e, t) {
        for (var n = t.split(u), i = n.length, r = 0; r < i; ++r) e[n[r]] = !0;
      }

      function a(e, a) {
        if (a) {
          var s = "undefined" == typeof a ? "undefined" : o(a);
          "string" === s ? r(e, a) : Array.isArray(a) ? t(e, a) : "object" === s ? i(e, a) : "number" === s && n(e, a);
        }
      }

      function s() {
        for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];

        var o = new e();
        t(o, i);
        var a = [];

        for (var s in o) o[s] && a.push(s);

        return a.join(" ");
      }

      e.prototype = {};
      var l = {}.hasOwnProperty;
      var u = /\s+/;
      return s;
    }();

    "undefined" != typeof e && e.exports ? e.exports = a : "object" === o(n(22)) && n(22) ? (i = [], r = function () {
      return a;
    }.apply(t, i), !(void 0 !== r && (e.exports = r))) : window.classNames = a;
  }();
}, function (e, t) {
  function n() {
    function e(e) {
      return o.call(t(e) ? e : function () {}, e, 1);
    }

    function t(e) {
      return ("undefined" == typeof e ? "undefined" : i(e)) === a;
    }

    function n(e, t, n) {
      return function () {
        var i = this.supr;
        this.supr = n[l][e];
        var r = {}.fabricatedUndefined;
        var o = r;

        try {
          o = t.apply(this, arguments);
        } finally {
          this.supr = i;
        }

        return o;
      };
    }

    function r(e, i, r) {
      for (var o in i) i.hasOwnProperty(o) && (e[o] = t(i[o]) && t(r[l][o]) && s.test(i[o]) ? n(o, i[o], r) : i[o]);
    }

    function o(e, n) {
      function i() {}

      function o() {
        this.initialize ? this.initialize.apply(this, arguments) : (n || u && a.apply(this, arguments), f.apply(this, arguments));
      }

      i[l] = this[l];
      var a = this;
      var s = new i();
      var u = t(e);
      var f = u ? e : this;
      var c = u ? {} : e;

      o.methods = function (e) {
        r(s, e, a);
        o[l] = s;
        return this;
      };

      o.methods.call(o, c).prototype.constructor = o;
      o.extend = arguments.callee;

      o[l].implement = o.statics = function (e, t) {
        e = "string" == typeof e ? function () {
          var n = {};
          n[e] = t;
          return n;
        }() : e;
        r(this, e, a);
        return this;
      };

      return o;
    }

    var a = "function";
    var s = /xyz/.test(function () {
      xyz;
    }) ? /\bsupr\b/ : /.*/;
    var l = "prototype";
    return e;
  }

  var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  };
  e.exports = n();
}, function (e, t) {
  function n() {
    this._state = o;
    this._arg = void 0;
    this._fullfilledCallback = [];
    this._rejectedCallback = [];
  }

  function i(e) {
    window.setTimeout(e, 1);
  }

  function r(e) {
    if (e) {
      var t = new n();

      e.then = function () {
        return t.then.apply(t, arguments);
      };

      e["catch"] = function () {
        return t["catch"].apply(t, arguments);
      };

      e["finally"] = function () {
        return t["finally"].apply(t, arguments);
      };

      e.resolve = function () {
        return t.resolve.apply(t, arguments);
      };
    }
  }

  var o = "pending";
  var a = "fullfilled";
  var s = "rejected";
  Object.assign(n.prototype, {
    then: function (e, t) {
      var n = function (e) {
        return "function" == typeof e;
      };

      n(e) && this._fullfilledCallback.push(e);
      n(t) && this._rejectedCallback.push(t);
      this._state !== o && this._emit(this._state);
      return this;
    },
    "catch": function (e) {
      return this.then(null, e);
    },
    "finally": function (e) {
      return this.then(e, e);
    },
    resolve: function (e) {
      this._state === o && (e instanceof Error ? this._state = s : this._state = a, this._arg = e, this._emit(this._state));
    },
    _emit: function (e) {
      var t = this;

      switch (e) {
        case a:
          i(function () {
            t._fullfilledCallback.map(function (e) {
              return e(t._arg);
            });

            t._fullfilledCallback = [];
            t._rejectedCallback = [];
          });
          break;

        case s:
          i(function () {
            t._rejectedCallback.map(function (e) {
              return e(t._arg);
            });

            t._fullfilledCallback = [];
            t._rejectedCallback = [];
          });
      }
    }
  });
  n.mixin = r;
  e.exports = n;
}, function (e, t, n) {
  var i = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];

      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }

    return e;
  };

  var r = n(9);
  var o = n(34);

  e.exports = function (e) {
    return function (t, n, a, s) {
      Object.assign(n, {
        referer: o()
      });
      var l = i({}, e, s, {
        url: t,
        payload: n
      });
      r.api(l).then(function (e) {
        return a(null, e);
      })["catch"](a);
    };
  };
}, function (e, t) {
  function n(e, t) {
    Object.keys(t).map(function (n) {
      e.setAttribute(n, t[n]);
    });
  }

  function i(e, t) {
    var n = null;
    n = t && t.nodeType ? t : document.head || document.getElementsByTagName("head")[0];
    n.appendChild(e);
  }

  function r(e) {
    var t = document.createElement("style");
    var r = {
      type: "text/css"
    };
    n(t, r);
    i(t, e);
    return t;
  }

  function o(e, t, n) {
    var i = t.css;
    var r = t.media;
    if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = i;else {
      for (; e.firstChild;) e.removeChild(e.firstChild);

      e.appendChild(document.createTextNode(i));
    }
  }

  var a = {};

  e.exports = function (e, t) {
    var n = e[0];
    var i = n[0];
    var s = {
      css: n[1],
      media: n[2]
    };
    !a[i] && (a[i] = r(t));
    o(a[i], s);
  };
}, function (e, t) {
  (function (t) {
    e.exports = t;
  }).call(t, {});
}, function (e, t, n) {
  !function (t, n) {
    e.exports = n();
  }(this, function () {
    "use strict";

    function e(e) {
      var t = new RegExp("(^|;)[ ]*" + e + "=([^;]*)");
      var n = t.exec(document.cookie);
      return n ? decodeURIComponent(n[2]) : "";
    }

    function t(e, t, n) {
      var i;
      var r = e + "=" + encodeURIComponent(t) + ";";
      n && (i = new Date(), i.setTime(i.getTime() + n), r += "expires=" + i.toUTCString());
      document.cookie = r;
    }

    function n() {
      for (var e = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", t = "", n = 0, i = e.length; n < 16; n++) t += e.charAt(Math.floor(Math.random() * i));

      return t;
    }

    var i;

    var r = function () {
      r = Object.assign || function (e) {
        for (var t, n = 1, i = arguments.length; n < i; n++) {
          t = arguments[n];

          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        }

        return e;
      };

      return r.apply(this, arguments);
    };

    var o = {
      userData: null,
      name: location.hostname + "_snaker",
      init: function () {
        if (!o.userData) try {
          o.userData = document.createElement("INPUT");
          o.userData.type = "hidden";
          o.userData.style.display = "none";
          o.userData.addBehavior("#default#userData");
          o.userData && document.body.appendChild(o.userData);
          var e = new Date();
          e.setDate(e.getDate() + 365);
          o.userData.expires = e.toUTCString();
        } catch (t) {
          console.log("userData is disabled!");
          return !1;
        }
        return !0;
      },
      setItem: function (e, t) {
        o.init() && o.userData && (o.userData.load(o.name), o.userData.setAttribute(e, t), o.userData.save(o.name));
      },
      getItem: function (e) {
        return o.init() && o.userData ? (o.userData.load(o.name), o.userData.getAttribute(e) || "") : "";
      },
      removeItem: function (e) {
        o.init() && o.userData && (o.userData.load(o.name), o.userData.removeAttribute(e), o.userData.save(o.name));
      }
    };

    try {
      i = localStorage || o;
    } catch (a) {
      i = o;
    }

    var s = function () {
      function e(e) {
        this.name = e;
      }

      e.prototype.push = function (e) {
        if (e) try {
          var t = i.getItem(this.name);
          i.setItem(this.name, t ? t + "," + e : e);
        } catch (n) {
          console.log("localstorage or userData is disabled!");
        }
      };

      e.prototype.length = function () {
        try {
          var e = i.getItem(this.name) || "";
          return e ? e.split(",").length : 0;
        } catch (t) {
          console.log("localstorage or userData is disabled!");
          return 0;
        }
      };

      e.prototype.pop = function (e) {
        void 0 === e && (e = 1);
        var t;

        try {
          var n = i.getItem(this.name);
          var r = n ? n.split(",") : [];
          t = r.splice(0, e);
          i.setItem(this.name, r.join(","));
        } catch (o) {
          t = [];
          console.log("localstorage or userData is disabled!");
        }

        return t;
      };

      e.prototype.clear = function () {
        try {
          i.removeItem(this.name);
        } catch (e) {
          console.log("localstorage or userData is disabled!");
        }
      };

      return e;
    }();

    var l = function () {
      function i(i) {
        if (!i.pid) throw new Error("product id is required!");
        var r = i.pid;
        var o = i.bid;
        var a = i.url;
        var l = i.random;
        var u = i.limit;
        this.pid = r;
        this.bid = o;
        this.random = l || 100;
        this.limit = u || 5;
        this.url = a || "https://da.dun.163.com/sn.gif";
        this.prefix = "__snaker__" + r;
        this.cache = new s(this.prefix);
        var f = e(this.prefix);
        f ? this.uuid = f : (this.uuid = n(), t(this.prefix, this.uuid, 31536e6));
      }

      i.prototype.setUser = function (e) {
        this.uid = e;
      };

      i.prototype.serialize = function (e, t) {
        var n = this;
        var i = n.pid;
        var o = n.bid;
        var a = n.uuid;
        var s = n.uid;
        var l = e.type;
        var u = e.name;
        var f = e.value;

        var c = function (e, t) {
          return e.substring(0, t);
        };

        var j = screen.width + "x" + screen.height;
        var d = c(location.href, 200);
        var h = new Date().getTime() + "";
        var p = r({
          pid: i,
          bid: o,
          uid: s,
          uuid: a,
          type: l,
          name: u,
          value: f,
          res: j,
          pu: d,
          nts: h
        }, t);
        var y = [];

        for (var v in p) p.hasOwnProperty(v) && void 0 !== p[v] && y.push(encodeURIComponent(v + "=") + encodeURIComponent(p[v]));

        return y.join("%26");
      };

      i.prototype.sendRequest = function (e, t) {
        var n = new Image(1, 1);
        n.src = e + "?d=" + t;

        n.onload = function () {};

        n.onerror = function () {};
      };

      i.prototype.report = function (e, t, n, i, r) {
        var o = this.serialize({
          type: e,
          name: t,
          value: n
        }, r ? r : {});
        this.random < Math.random() || (i ? (this.cache.push(o), this.cache.length() >= this.limit && this.flush()) : this.sendRequest(this.url, o));
      };

      i.prototype.track = function (e, t, n, i) {
        this.report(e, t, n, !1, i);
      };

      i.prototype.trackAsync = function (e, t, n, i) {
        this.report(e, t, n, !0, i);
      };

      i.prototype.flush = function () {
        for (var e = "", t = this.cache.pop(this.limit); t.length;) {
          var n = t.pop() || "";
          n && (e.length + n.length <= 1800 ? (e = e ? e + "," + n : n, t.length || this.sendRequest(this.url, e)) : (this.sendRequest(this.url, e), e = n));
        }
      };

      return i;
    }();

    return l;
  });
}, function (e, t, n) {
  var i = n(12);
  var r = i.FETCH_INTELLISENSE_CAPTCHA;
  var o = i.VERIFY_INTELLISENSE_CAPTCHA;
  var a = i.RESET_STATE;
  var s = n(4);
  var l = s.SWITCH_LOAD_STATUS;
  var u = s.UPDATE_VERIFY_STATUS;
  var f = s.INVOKE_HOOK;
  var c = s.EVENT_RESET;
  var j = n(3);
  var d = j.CAPTCHA_TYPE;
  var h = j.SAMPLE_NUM;
  var p = n(1);
  var y = n(8);
  var v = y.eypt;
  var g = y.xor_encode;
  var b = n(6);
  var m = n(14);

  var _ = n(2);

  var w = n(11);
  e.exports = {
    data: function () {
      return {
        beginTime: p.now(),
        traceData: [],
        status: "normal",
        classicVisible: !1
      };
    },
    mounted: function () {
      this._removeEvents = this.initEvents();
      this.fetchCaptcha();
    },
    render: function (e) {
      var t = e.status;
      var n = e.classicVisible;
      void 0 !== t && this.updateUI(t);
      void 0 !== n && this.toggleClassicVisible(n);
    },
    beforeDestroy: function () {
      this._removeEvents();

      this.clear();
    },
    methods: {
      fetchCaptcha: function () {
        var e = this;
        return new w(function (t, n) {
          e.$store.dispatch(r, {
            width: ""
          }, function (i, r) {
            if (e._isMounted) {
              if (i) {
                e.$setData({
                  status: "loadfail"
                });
                return void n(i);
              }

              e.$store.commit(f, {
                name: "onReady"
              });
              e.$store.commit(f, {
                name: "onDidRefresh"
              });
              t(r);
            }
          });
        });
      },
      initEvents: function () {
        var e = this;
        var t = this.$store.subscribe(function (t, n) {
          var i = t.type;
          var r = (t.payload, n.verifyStatus);
          var o = n.load;

          switch (i) {
            case l:
              o && ("loading" === o.status && e.$setData({
                status: "loading"
              }), "done" === o.status && e.$setData({
                status: "loaddone"
              }), "fail" === o.status && e.$setData({
                status: "loadfail"
              }));
              break;

            case u:
              "success" === r && e.$setData({
                status: "success"
              });
              "error" === r && e.$setData({
                status: "error"
              });
              break;

            case c:
              e.reset();
          }
        });
        return function () {
          t();
        };
      },
      reset: function () {
        var e = this;
        this.$store.dispatch(a);
        this.fetchCaptcha().then(function () {
          e.clear();
          e.$setData({
            status: "normal"
          });
        });
      },
      clear: function () {
        var e = this;
        this._captchaIns && (this.$setData({
          classicVisible: !1
        }), this.$nextTick(function () {
          e._captchaIns.$destroy();

          e._captchaIns = null;
        }));
        this.beginTime = 0;
        this.traceData = [];
      },
      toggleClassicVisible: function (e) {
        var t = this._captchaIns;

        if (_.isMobile && t) {
          e && t.open();
          !e && t.close();
        } else {
          var n = _.find(".yidun_classic-wrapper", this.$el);

          n.style.display = e ? "block" : "none";
        }
      },
      updateUI: function (e) {
        var t = this;

        var n = _.find(".yidun_tips__text", this.$el);

        var i = this.$store.state.config;

        var r = function (e) {
          e.stopPropagation();
          t.$store.commit(c);
        };

        switch (n && _.off(n, "click", r), e) {
          case "error":
            this.$store.state.countsOfVerifyError > i.maxVerification && n && _.on(n, "click", r);
        }
      },
      verifyCaptcha: function () {
        "normal" === this.status ? this.verifyIntellisenseCaptcha() : this._captchaIns && this._captchaIns.open();
      },
      verifyIntellisenseCaptcha: function () {
        var e = this;
        var t = this.$store.state;
        var n = t.token;
        var i = t.captchaAnticheat;
        var r = p.now();
        var a = g(n, [0, 0, r - (this.beginTime || r)] + "");
        var s = this.traceData.map(function (e) {
          return g(n, e);
        });

        var l = function (t) {
          e.$store.dispatch(o, {
            token: n,
            acToken: t,
            type: d.INTELLISENSE,
            width: "240",
            data: JSON.stringify({
              d: "",
              m: v(p.sample(s, h).join(":")),
              p: v(a),
              ext: v(g(n, "1," + s.length))
            })
          }, function (t) {
            if (e._isMounted) {
              if (!t) return void e.$setData({
                status: "success"
              });

              if (!e._captchaIns) {
                var n = e.$store.state.config;

                var i = b._extend(m);

                e._captchaIns = new i({
                  store: e.$store,
                  propsData: {
                    intellisense: !0,
                    enableColor: !0,
                    onClose: function () {
                      e.$store.commit(f, {
                        name: "onClose"
                      });
                    }
                  }
                }).$mount(function (e) {
                  n.appendTo ? n.appendTo.appendChild(e) : document.body.appendChild(e);
                });
                e.$setData({
                  status: "loading"
                });
              }

              e._captchaIns.open();
            }
          });
        };

        i.getToken({
          timeout: 500
        }).then(l)["catch"](l);
      },
      closeModal: function () {
        this._captchaIns && this._captchaIns.closeModal();
      }
    }
  };
}, function (e, t, n) {
  var i = n(6);
  var r = n(2);
  var o = n(1);
  var a = n(8);
  var s = a.eypt;
  var l = a.xor_encode;
  var u = n(3);
  var f = u.CAPTCHA_CLASS;
  var c = u.SAMPLE_NUM;
  var j = n(4);
  var d = j.SWITCH_LOAD_STATUS;
  var h = j.INVOKE_HOOK;
  var p = n(5);
  var y = p.REQUEST_IMG_ERROR;
  var v = n(9);
  var g = n(7);
  var b = g.createNetCollect;
  var m = 4;
  var _ = 2;
  var w = {
    status: "dragend",
    beginTime: 0,
    clientX: 0,
    clientY: 0,
    startX: 0,
    startY: 0,
    startLeft: 0,
    startTop: 0,
    el: null
  };
  e.exports = i._extend({
    "abstract": !0,
    props: ["loadInfo", "mode"],
    data: function () {
      var e = this.$store.state.langPkg;
      return {
        langPkg: e
      };
    },
    mounted: function () {
      this.initData();
      this._removeEvents = this.initEvents();
      this.initCustomStyles();
    },
    beforeDestroy: function () {
      this._removeEvents();

      this.$el = null;
      this.$bgImgWrap = null;
      this.$picViews = [];
      this.drag = null;
      this.traceData = null;
      this.exchangePos = null;
    },
    render: function (e) {
      var t = e.loadInfo;
      t && this.changeLoadStatus(t);
    },
    methods: {
      initData: function () {
        this.clickCounts = 0;
        this.traceData = [];
        this.exchangePos = [];
        this.drag = Object.assign({}, w);
      },
      initEvents: function () {
        var e = this;
        this.$bgImgWrap = r.find("." + f.BGIMG, this.$el);
        this.$picViews = [];

        for (var t = r.findAll(".yidun_inference", this.$el), n = function (t) {
          t.target.className.indexOf("yidun_inference") !== -1 && e.onMouseDown(t);
        }, i = this.onDragEnd.bind(this), o = this.onMouseMove.bind(this), a = 0, s = t.length; a < s; a++) this.$picViews.push({
          view: t[a],
          img: r.find(".yidun_inference__img", t[a])
        });

        var l = r.supportPointer ? "pointer" : "mouse";
        r.on(this.$bgImgWrap, l + "down", n);
        r.on(document, l + "up", i);
        r.on(document, l + "move", o);
        return function () {
          r.off(e.$bgImgWrap, l + "down", n);
          r.off(document, l + "up", i);
          r.off(document, l + "move", o);
        };
      },
      initCustomStyles: function () {
        var e = this.$store.state.config.customStyles.imagePanel;
        this.$picViews[0].view.style.borderTopLeftRadius = e.borderRadius;
        this.$picViews[m - 1].view.style.borderTopRightRadius = e.borderRadius;
        this.$picViews[m].view.style.borderBottomLeftRadius = e.borderRadius;
        this.$picViews[m * _ - 1].view.style.borderBottomRightRadius = e.borderRadius;
      },
      reset: function () {
        var e = this.$store.state;
        var t = e.countsOfVerifyError;
        var n = e.config;
        var i = t > n.maxVerification;

        if (!i) {
          var o = this.$picViews;
          this.initData();
          r.delClass(this.$bgImgWrap, "yidun_bgimg--dragging");

          for (var a = 0, s = o.length; a < s; a++) {
            this.cleanInferenceCls(a);
            var l = o[a].img;
            l.style.top = "";
            l.style.left = "";
          }
        }
      },
      cleanInferenceCls: function (e) {
        this.$picViews[e] && (this.$picViews[e].view.className = "yidun_inference yidun_inference--" + e);
      },
      floatStatusChange: function () {
        this.$parent.shouldHandleFloatChange(this.loadInfo) && this.changeTipElText();
      },
      changeTipElText: function () {
        var e = r.find(".yidun_tips__text", this.$el);
        var t = this.$store.state.config;
        "float" !== (this.mode || t.mode) || this.$parent.panelVisible ? (r.text(e, this.langPkg.inferenceTip), r.delClass(this.$el, "yidun--button")) : (r.text(e, this.langPkg.clickButton), r.addClass(this.$el, "yidun--button"));
      },
      changeLoadStatus: function (e) {
        var t = this;
        var n = e.status;
        var i = e.data;

        if ("loading" === n && i) {
          var o = r.find(".yidun_bg-img", this.$el);
          var a = r.find(".yidun_tips__text", this.$el);
          var s = this.$store;
          var l = s.commit;
          var u = s.state;
          var f = u.langPkg;
          var c = u.config;
          var j = u.captchaCollector;
          v.image({
            url: i.bg,
            timeout: c.timeout,
            onProcess: b(j, {
              token: i.token
            })
          }).then(function (e) {
            if (t._isMounted) {
              o.src = e.src;

              for (var n = 0, s = t.$picViews.length; n < s; n++) t.$picViews[n].img.src = e.src;

              r.text(a, f.inferenceTip);
              l(d, {
                status: "done",
                data: i
              });
            }
          })["catch"](function (e) {
            if (t._isMounted) {
              var n = Object.assign({}, e.data, {
                token: i.token
              });
              l(d, {
                status: "fail"
              });
              l(h, {
                name: "onError",
                args: [new p(y, e.message, n)]
              });
            }
          });
        } else "done" === n && this.changeTipElText();
      },
      onMouseDown: function (e) {
        if (e.preventDefault(), this.handleDown() && "dragend" === this.drag.status) {
          var t = e.clientX;
          var n = e.clientY;
          Object.assign(this.drag, {
            beginTime: o.now(),
            clientX: t,
            clientY: n,
            startX: t,
            startY: n
          });
        }

        return !1;
      },
      onDragEnd: function (e) {
        if ("dragend" === this.drag.status) return void Object.assign(this.drag, {
          beginTime: 0
        });
        var t = this.drag.el;
        Object.assign(this.drag, w);
        var n = this.exchangePos[0];
        var i = this.$picViews[n].view;
        t.style.display = "none";
        this.cleanInferenceCls(n);
        var a = i.cloneNode(!0);

        if (r.replace(a, i), this.$picViews[n].view = a, this.$picViews[n].img = r.find(".yidun_inference__img", a), r.delClass(this.$bgImgWrap, "yidun_bgimg--dragging"), this.exchangePos[1] || 0 === this.exchangePos[1]) {
          var u = this.$picViews[this.exchangePos[1]].img;
          var f = this.getImgPos(n);
          var j = f.top;
          var d = f.left;
          u.style.top = j;
          u.style.left = d;
          this.onVerifyCaptcha({
            data: JSON.stringify({
              d: "",
              m: s(o.sample(this.traceData, c).join(":")),
              p: s(l(this.$store.state.token, this.exchangePos.join(","))),
              ext: s(l(this.$store.state.token, this.clickCounts + "," + this.traceData.length))
            })
          });
        } else {
          var h = this.$picViews[n].img;
          h.style.top = "";
          h.style.left = "";
        }
      },
      onMouseMove: function (e) {
        var t = e.clientX;
        var n = e.clientY;
        var i = this.drag;
        var r = i.status;
        var a = i.beginTime;
        var s = i.startX;
        var u = i.startY;
        var f = t - s;
        var c = n - u;

        if ("dragend" === r && a && (this.drag.status = "dragstart"), "dragend" !== this.drag.status) {
          Object.assign(this.drag, {
            clientX: t,
            clientY: n
          });
          var j = this.$store.state.token;
          var d = l(j, [Math.round(f), Math.round(c), o.now() - this.drag.beginTime] + "");
          this.traceData.push(d);
          "dragstart" === this.drag.status && this.startDrag(e);
          "dragging" === this.drag.status && this.dragging(e);
        }
      },
      handleDown: function () {
        this.clickCounts++;
        var e = this.$store.state;
        var t = e.load;
        var n = e.verifyStatus;
        return "done" === t.status && !n && "dragend" === this.drag.status;
      },
      startDrag: function (e) {
        var t = e.target;
        r.addClass(this.$bgImgWrap, "yidun_bgimg--dragging");
        var n = t.parentNode;
        var i = n.cloneNode(!0);
        i.draggable = !1;
        i.removeAttribute("style");

        for (var o = r.findAll(".yidun_inference--drag", this.$bgImgWrap), a = 0, s = o.length; a < s; a++) r.remove(o[a]);

        r.addClass(i, "yidun_inference--drag");
        this.$bgImgWrap.appendChild(i);
        r.addClass(n, "yidun_inference--origin");
        Object.assign(this.drag, {
          status: "dragging",
          el: i,
          startLeft: i.offsetLeft,
          startTop: i.offsetTop
        });

        for (var l = 0, u = this.$picViews.length; l < u; l++) if (this.$picViews[l].view === n) {
          this.exchangePos[0] = l;
          break;
        }

        this.$parent.getAnticheatToken({
          timeout: 750
        });
      },
      dragging: function () {
        var e = this.drag;
        var t = e.clientX;
        var n = e.clientY;
        var i = e.startX;
        var r = e.startY;
        var o = e.el;
        var a = this.computeOffset(t - i, n - r);
        var s = a.x;
        var l = a.y;
        o.style.left = s + "px";
        o.style.top = l + "px";
        this.readyExchange(s, l);
      },
      readyExchange: function (e, t) {
        var n = this.getDragCenterIndex(e, t);
        var i = this.exchangePos[0];
        var o = this.$picViews[i].view;

        if (n !== this.exchangePos[1]) {
          for (var a = 0, s = this.$picViews.length; a < s; a++) r.delClass(this.$picViews[a].view, "yidun_inference--target");

          if (n === -1 || i === n) {
            r.delClass(o, "yidun_inference--swap");
            return void (this.exchangePos[1] = void 0);
          }

          this.exchangePos[1] = n;
          r.addClass(this.$picViews[n].view, "yidun_inference--target");
          r.addClass(o, "yidun_inference--swap");
          var l = this.$picViews[i].img;
          var u = this.getImgPos(n);
          var f = u.top;
          var c = u.left;
          l.style.top = f;
          l.style.left = c;
        }
      },
      computeOffset: function (e, t) {
        var n = this.drag;
        var i = n.startLeft;
        var r = n.startTop;
        var o = n.el;
        var a = this.$bgImgWrap.offsetWidth - o.offsetWidth;
        var s = this.$bgImgWrap.offsetHeight - o.offsetHeight;
        var l = e + i;
        var u = t + r;
        l < 0 ? l = 0 : l > a && (l = a);
        u < 0 ? u = 0 : u > s && (u = s);
        return {
          x: l,
          y: u
        };
      },
      getDragCenterIndex: function (e, t) {
        var n = r.getRect(this.drag.el);
        var i = n.width;
        var o = n.height;
        var a = e + i / 2;
        var s = t + o / 2;
        var l = parseInt(a / i, 10);
        var u = parseInt(s / o, 10);
        return a % i === 0 || s % o === 0 ? -1 : l + u * m;
      },
      getImgPos: function (e) {
        var t = e - m;
        return {
          top: (t < 0 ? 0 : -100) + "%",
          left: (t < 0 ? e * -100 : t * -100) + "%"
        };
      }
    }
  });
}, function (e, t, n) {
  var i = function () {
    function e(e, t) {
      var n = [];
      var i = !0;
      var r = !1;
      var o = void 0;

      try {
        for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
      } catch (l) {
        r = !0;
        o = l;
      } finally {
        try {
          !i && s["return"] && s["return"]();
        } finally {
          if (r) throw o;
        }
      }

      return n;
    }

    return function (t, n) {
      if (Array.isArray(t)) return t;
      if (Symbol.iterator in Object(t)) return e(t, n);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();

  var r = n(6);
  var o = n(2);
  var a = n(1);
  var s = n(3);
  var l = s.CAPTCHA_CLASS;
  var u = s.SAMPLE_NUM;
  var f = n(4);
  var c = f.SWITCH_LOAD_STATUS;
  var j = f.INVOKE_HOOK;
  var d = n(8);
  var h = d.eypt;
  var p = d.xor_encode;
  var y = n(5);
  var v = y.REQUEST_IMG_ERROR;
  var g = n(9);
  var b = n(7);
  var m = b.createNetCollect;
  var _ = document;
  var w = {
    status: "dragend",
    beginTime: 0,
    clientX: 0,
    startX: 0,
    clientY: 0,
    startY: 0,
    left: 0,
    startLeft: 0,
    dragX: 0
  };
  e.exports = r._extend({
    "abstract": !0,
    props: ["loadInfo"],
    mounted: function () {
      this.initData();
      this._removeEvents = this.initEvents();
    },
    beforeDestroy: function () {
      this._removeEvents();

      this.sliderTransition = null;
      this.$slider.style.transition = "";
      this.$el = null;
      this.$slideIndicator = null;
      this.$slider = null;
      this.$jigsaw = null;
      this.drag = null;
    },
    render: function (e) {
      var t = e.loadInfo;
      t && this.changeLoadStatus(t);
    },
    methods: {
      initData: function () {
        this.drag = Object.assign({}, w);
        this.traceData = [];
        this.mouseDownCounts = 0;
      },
      changeSlideIcon: function (e) {
        !this.$store.state.config.customStyles.icon.slider && this.$slideIcon && (e ? (this.$slideIcon.src = e, this.$slideIcon.style.display = "block") : this.$slideIcon.style.display = "none");
      },
      initEvents: function () {
        var e = this;
        this.$slideIndicator = o.find("." + l.SLIDE_INDICATOR, this.$el);
        this.$jigsaw = o.find("." + l.JIGSAW, this.$el);
        this.$control = o.find("." + l.CONTROL, this.$el);
        this.$slider = o.find("." + l.SLIDER, this.$el);
        this.$slideIcon = o.find(".yidun_slider__icon--img", this.$el);
        var t = this.$parent.$data.customStyles.controlBar;
        var n = void 0 === t ? {} : t;
        this.controlBar = n;
        var i = this.onMouseDown.bind(this);
        var r = this.onMouseDown.bind(this);
        var a = this.onMouseMove.bind(this);
        var s = this.onMouseUp.bind(this);
        var u = o.supportPointer ? "pointer" : "mouse";
        o.on(this.$slider, u + "down", i);
        o.on(this.$jigsaw, u + "down", r);
        o.on(_, u + "move", a);
        o.on(_, u + "up", s);
        this.sliderTransition = o.transition(this.$slider, {
          beforeLeave: function (e) {
            e.style.transition = "left .3s ease-out";
          },
          afterLeave: function (e) {
            e.style.transition = "";
          }
        });
        o.supportPointer && (document.documentElement.style.touchAction = "none");
        return function () {
          o.off(e.$slider, u + "down", i);
          o.off(e.$jigsaw, u + "down", r);
          o.off(_, u + "move", a);
          o.off(_, u + "up", s);
          e.sliderTransition.dispose();
          o.supportPointer && (document.documentElement.style.touchAction = "auto");
        };
      },
      reset: function () {
        var e = this.$store.state;
        var t = e.countsOfVerifyError;
        var n = e.config;
        var i = t > n.maxVerification;
        i || (this.initData(), o.delClass(this.$control, "yidun_control--moving"), parseInt(this.$slider.style.left) && this.sliderTransition.leave(), this.$slideIndicator.style.width = 0, this.$slider.style.left = 0, this.$jigsaw.style.left = 0);
      },
      changeLoadStatus: function (e) {
        var t = this;
        var n = e.data;

        if (this.changeSlideIcon(this.controlBar.slideIcon), "loading" === e.status && n) {
          var r = this.$store.state;
          var a = r.langPkg;
          var s = r.config;
          var u = r.captchaCollector;
          var f = o.find(".yidun_tips__text", this.$el);
          var d = o.find(".yidun_bg-img", this.$el);
          var h = o.find("." + l.JIGSAW, this.$el);
          var p = this.$store.commit;
          var b = m(u, {
            token: n.token
          });
          g.all([g.image({
            url: n.bg,
            timeout: s.timeout,
            onProcess: b
          }), g.image({
            url: n.front,
            timeout: s.timeout,
            onProcess: b
          })]).then(function (e) {
            if (t._isMounted) {
              var r = i(e, 2);
              var s = r[0];
              var l = r[1];
              d.src = s.src;
              h.src = l.src;
              o.text(f, a.slideTip);
              p(c, {
                status: "done",
                data: n
              });
            }
          })["catch"](function (e) {
            if (t._isMounted) {
              var i = Object.assign({}, e.data, {
                token: n.token
              });
              p(c, {
                status: "fail"
              });
              p(j, {
                name: "onError",
                args: [new y(v, e.message, i)]
              });
            }
          });
        }
      },
      onMouseDown: function (e) {
        e.preventDefault();
        this.mouseDownCounts++;
        this.width = this.$el.offsetWidth;
        var t = this.$store.state;
        var n = t.load;
        var i = t.verifyStatus;

        if ("done" === n.status && !i) {
          var r = e.clientX;
          var o = e.clientY;
          var s = this.drag;
          "dragend" === s.status && Object.assign(s, {
            beginTime: a.now(),
            clientX: r,
            startX: r,
            clientY: o,
            startY: o,
            dragX: 0
          });
        }
      },
      onMouseMove: function (e) {
        var t = e.clientX;
        var n = e.clientY;
        var i = this.drag;
        var r = i.status;
        var s = i.beginTime;
        var l = i.startX;

        if (i.status = s && t - l > 3 && "dragend" === r ? "dragstart" : r, "dragend" !== i.status) {
          !(e.type.indexOf("touch") !== -1 && o.supportPassive) && e.preventDefault();
          Object.assign(i, {
            clientX: t,
            clientY: n,
            dragX: t - i.startX
          });
          var u = this.$store.state.token;
          var f = p(u, [Math.round(i.dragX < 0 ? 0 : i.dragX), Math.round(i.clientY - i.startY), a.now() - i.beginTime] + "");
          this.traceData.push(f);
          "dragstart" === i.status && this.onMouseMoveStart(e);
          "dragging" === i.status && this.onMouseMoving(e);
        }
      },
      onMouseMoveStart: function (e) {
        var t = o.getComputedStyle(this.$slider, "left");
        var n = o.find(".yidun_tips__text", this.$el);
        o.text(n, "");
        Object.assign(this.drag, {
          status: "dragging",
          startLeft: parseInt(t.slice(0, -2), 10)
        });
        this.$parent.getAnticheatToken({
          timeout: 750
        });
      },
      onMouseMoving: function () {
        var e = this.$slider.offsetWidth;
        var t = this.$jigsaw.offsetWidth;
        var n = this.drag.left = this.restrict(this.$slider);
        this.$slider.style.left = n + "px";
        this.$jigsaw.style.left = this.restrict(this.$jigsaw, e - t) + "px";
        o.addClass(this.$control, "yidun_control--moving");
        this.$slideIndicator.style.width = n + e + "px";
        this.changeSlideIcon(this.controlBar.slideIconMoving);
      },
      onMouseUp: function (e) {
        var t = this.drag;
        if ("dragend" === t.status) return void Object.assign(t, {
          beginTime: 0
        });
        Object.assign(t, w);
        var n = a.sample(this.traceData, u);
        var i = this.$store.state.token;
        var r = h(p(i, parseInt(this.$jigsaw.style.left, 10) / this.width * 100 + ""));
        this.onVerifyCaptcha({
          data: JSON.stringify({
            d: h(n.join(":")),
            m: "",
            p: r,
            ext: h(p(i, this.mouseDownCounts + "," + this.traceData.length))
          })
        });
      },
      restrict: function (e, t) {
        if (e) {
          var n;
          var i;
          var r = this.drag;
          var o = r.startLeft;
          var a = r.dragX;
          var s = this.width;
          var l = e.offsetWidth;
          var u = this.$slider.offsetWidth;
          var f = s - l;
          var c = o + a;
          var j = t < 0 ? -t : t / 2;
          e === this.$jigsaw && (a <= j ? (n = a, i = t < 0 ? -n / 2 : n, c += i) : s - a - u <= j ? (n = a - (s - u - j), i = t < 0 ? -n / 2 : n, c += t / 2 + i) : c += t / 2);
          c <= 0 && (c = 0);
          c >= f && (c = f);
          return c;
        }
      }
    }
  });
}, function (e, t, n) {
  function i(e, t, n) {
    t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n;
    return e;
  }

  var r;
  var o = n(6);
  var a = n(2);
  var s = n(1);
  var l = n(8);
  var u = l.eypt;
  var f = l.xor_encode;
  var c = n(3);
  var j = c.CAPTCHA_TYPE;
  var d = c.CAPTCHA_CLASS;
  var h = c.SAMPLE_NUM;
  var p = c.RTL_LANGS;
  var y = n(4);
  var v = y.SWITCH_LOAD_STATUS;
  var g = y.INVOKE_HOOK;
  var b = n(5);
  var m = b.REQUEST_IMG_ERROR;

  var _ = n(9);

  var w = n(7);
  var T = w.createNetCollect;
  e.exports = o._extend({
    "abstract": !0,
    props: ["loadInfo", "mode", "type"],
    data: function () {
      var e = this.$store.state.langPkg;
      return {
        langPkg: e
      };
    },
    on: (r = {}, i(r, "." + d.BGIMG + " click", function (e) {
      this.onClick(e);
    }), i(r, "." + d.BGIMG + " mousemove", function (e) {
      this.trackMoving(e);
    }), r),
    mounted: function () {
      this.initData();
      this.$bgImg = a.find("." + d.BGIMG, this.$el);
    },
    beforeDestroy: function () {
      this.$bgImg = null;
    },
    render: function (e) {
      var t = e.loadInfo;

      if (t && "done" === t.status) {
        var n = t.data && t.data.front;
        Array.isArray(n) && (n = n[0], t.data.front = n);
      }

      t && this.changeLoadStatus(t);
    },
    methods: {
      initData: function () {
        this.pointsStack = [];
        this.MAX_POINTS = 0;
        this.traceData = [];
        this.beginTime = 0;
        this.clickCounts = 0;
      },
      reset: function () {
        var e = this.$store.state;
        var t = e.countsOfVerifyError;
        var n = e.config;
        var i = t > n.maxVerification;
        i || (this.cleanPoints(), this.initData());
      },
      floatStatusChange: function () {
        if (this.$parent.shouldHandleFloatChange(this.loadInfo)) {
          var e = this.loadInfo.data.front || "";
          this.changeTipElText({
            message: e
          });
        }
      },
      changeTipElText: function (e) {
        var t = e.message;
        var n = void 0 === t ? "" : t;
        var i = this.$store.state.config;
        var r = this.langPkg;
        var o = this.$parent.panelVisible;
        var l = "float" === (this.mode || i.mode);
        var u = a.find(".yidun_tips__text", this.$el);
        var f = a.find(".yidun_tips__answer", this.$el);
        var c = a.find(".yidun_tips__point", this.$el);

        if (l && !o) {
          a.text(u, r.clickButton);
          a.addClass(this.$el, "yidun--button");
          a.addClass(f, "hide");
        } else {
          var d = p.indexOf(i.lang) > -1;
          this.type === j.ICON_POINT ? (d && a.addClass(f, "yidun_answer--r2l"), a.text(u, r.clickInTurn)) : this.type === j.WORD_ORDER ? a.text(u, r.clickWordInTurn) : this.type === j.SPACE ? a.text(u, n) : (d && (n = s.reverse(n)), a.text(c, n.replace(/./g, ' "$&"')), a.text(u, r.clickInTurn));
          a.delClass(f, "hide");
          a.delClass(this.$el, "yidun--button");
        }
      },
      changeLoadStatus: function (e) {
        var t = this;
        var n = e.status;
        var i = e.data;

        switch (n) {
          case "loading":
            if (i) {
              var r = a.find(".yidun_bg-img", this.$el);
              var o = a.find(".yidun_tips__img", this.$el);
              var s = this.$store;
              var l = s.commit;
              var u = s.state;

              var f = _.image({
                url: i.bg,
                timeout: u.config.timeout,
                onProcess: T(u.captchaCollector, {
                  token: i.token
                })
              });

              f.then(function (e) {
                t._isMounted && (r.src = e.src, t.type === j.ICON_POINT && (o.src = e.src), l(v, {
                  status: "done",
                  data: i
                }));
              })["catch"](function (e) {
                if (t._isMounted) {
                  var n = Object.assign({}, e.data, {
                    token: i.token
                  });
                  l(v, {
                    status: "fail"
                  });
                  l(g, {
                    name: "onError",
                    args: [new b(m, e.message, n)]
                  });
                }
              });
            }

            break;

          case "done":
            var c = i.front || "";
            var d = 0;
            d = this.type === j.ICON_POINT ? 3 : this.type === j.WORD_ORDER ? parseInt(c, 10) : this.type === j.SPACE ? 1 : c.length;
            this.MAX_POINTS = d;
            this.changeTipElText({
              message: c
            });
        }
      },
      onClick: function (e) {
        var t = this;
        var n = this.$store.state;
        var i = n.countsOfVerifyError;
        var r = n.config;
        var o = i > r.maxVerification;

        if (!o) {
          this.clickCounts++;
          var a = this.$bgImg.getBoundingClientRect();
          var l = a.left;
          var u = a.top;
          this.pointsStack.length || (this.beginTime = s.now());
          var f = this.pointsStack.slice(-1)[0];
          return f && e.target === f.el && !this.$store.state.verifyStatus ? void s.raf(function () {
            return t.$bgImg.removeChild(t.pointsStack.pop().el);
          }) : void this.addPoint({
            left: e.clientX - l,
            top: e.clientY - u
          });
        }
      },
      trackMoving: function (e) {
        if (this.beginTime) {
          var t = this.$bgImg.getBoundingClientRect();
          var n = t.left;
          var i = t.top;
          var r = f(this.$store.state.token, [Math.round(e.clientX - n), Math.round(e.clientY - i), s.now() - this.beginTime] + "");
          this.traceData.push(r);
        }
      },
      addPoint: function (e) {
        var t = e.left;
        var n = e.top;
        this.pointsStack.length || this.$parent.getAnticheatToken({
          timeout: 1e3
        });
        var i = this.pointsStack.length + 1;

        if (!(i > this.MAX_POINTS)) {
          var r = document.createElement("div");
          r.className = "yidun_icon-point yidun_point-" + i;
          a.css(r, "left: " + (t - 10) + "px; top: " + (n - 25) + "px;");
          this.$bgImg.appendChild(r);
          this.pointsStack.push({
            el: r,
            coord: f(this.$store.state.token, [Math.round(t), Math.round(n), s.now() - this.beginTime] + "")
          });
          this.shouldVerifyCaptcha();
        }
      },
      shouldVerifyCaptcha: function () {
        var e = this.pointsStack;

        if (e.length === this.MAX_POINTS) {
          var t = e.map(function (e) {
            return e.coord;
          });
          var n = this.traceData;
          this.onVerifyCaptcha({
            data: JSON.stringify({
              d: "",
              m: u(s.sample(n, h).join(":")),
              p: u(t.join(":")),
              ext: u(f(this.$store.state.token, this.clickCounts + "," + n.length))
            })
          });
        }
      },
      cleanPoints: function () {
        for (var e; e = this.pointsStack.pop();) this.$bgImg.removeChild(e.el);
      }
    }
  });
}, function (e, t, n) {
  var i = n(6);
  var r = n(2);
  var o = n(4);
  var a = o.SWITCH_LOAD_STATUS;
  var s = o.UPDATE_VERIFY_STATUS;
  var l = o.INVOKE_HOOK;
  var u = n(5);
  var f = u.REQUEST_IMG_ERROR;
  var c = n(9);
  var j = n(7);
  var d = j.createNetCollect;
  e.exports = i._extend({
    "abstract": !0,
    props: ["loadInfo"],
    data: function () {
      var e = this.$store.state;
      var t = e.langPkg;
      var n = e.config.lang;
      return {
        langPkg: t,
        lang: n
      };
    },
    mounted: function () {
      var e = this;
      this.TIMEOUT_SECONDS = 300;
      this._unsubscribe = this.$store.subscribe(function (t, n) {
        var i = t.type;
        var r = n.verifyStatus;

        switch (i) {
          case s:
            switch (r) {
              case "success":
              case "error":
                e.clearTimers();
            }

        }
      });
    },
    beforeDestroy: function () {
      this._unsubscribe();

      this.clearTimers();
    },
    render: function (e) {
      var t = e.loadInfo;
      t && this.changeLoadStatus(t);
    },
    methods: {
      changeLoadStatus: function (e) {
        var t = e.status;
        var n = e.data;

        switch (t) {
          case "loading":
            if (n) {
              var i = r.find(".yidun_bg-img", this.$el);
              var o = this.$store;
              var s = o.commit;
              var j = o.state;
              var h = c.image({
                url: n.bg,
                timeout: j.config.timeout,
                onProcess: d(j.captchaCollector, {
                  token: n.token
                })
              });
              h.then(function (e) {
                i.src = e.src;
                s(a, {
                  status: "done",
                  data: n
                });
              })["catch"](function (e) {
                var t = Object.assign({}, e.data, {
                  token: n.token
                });
                s(a, {
                  status: "fail"
                });
                s(l, {
                  name: "onError",
                  args: [new u(f, e.message, t)]
                });
              });
            }

            break;

          case "done":
            var p = r.find(".yidun_tips__text", this.$el);
            var y = this.langPkg;
            p.innerHTML = y.waitForSMS + '\n          <span class="yidun_sms-counter"></span>';
            this.countDown();
            this.pollingToVerify();
        }
      },
      pollingToVerify: function () {
        var e = this;
        var t = this.TIMEOUT_SECONDS;
        var n = 5;
        var i = 0;

        var r = function o() {
          return n * i >= t ? void e.$store.commit(s, {
            verifyStatus: "error",
            error: new Error("SMS is outdated")
          }) : (i++, e.onVerifyCaptcha({
            data: ""
          }), void (e.pollingTimer = setTimeout(o, 1e3 * n)));
        };

        r();
      },
      countDown: function () {
        var e = this;
        var t = this.TIMEOUT_SECONDS;
        var n = r.find(".yidun_sms-counter", this.$el);

        var i = function o() {
          r.text(n, t-- + "s");
          0 !== t && (e.countTimer = setTimeout(o, 1e3));
        };

        i();
      },
      clearTimers: function () {
        this.countTimer && (clearTimeout(this.countTimer), this.countTimer = null);
        this.pollingTimer && (clearTimeout(this.pollingTimer), this.pollingTimer = null);
      },
      reset: function () {
        this.clearTimers();
      }
    }
  });
}, function (e, t, n) {
  function i(e, t) {
    var n = this;
    e = h(e);
    j(e.__theme__, {
      protocol: e.protocol,
      staticServer: Array.isArray(e.staticServer) ? e.staticServer[0] : e.staticServer,
      theme: e.theme
    });
    var i = window.gdxidpyhxde;
    t = t || new k({
      bid: e.captchaId,
      url: ""
    }, e);
    var o = Object.assign({}, c.state, {
      config: e,
      fingerprint: i,
      langPkg: e.customTexts,
      $fetch: d({
        timeout: e.timeout,
        captchaConfig: e
      }),
      captchaAnticheat: new R(e, t),
      captchaCollector: t
    });
    var S = new f(Object.assign({}, c, {
      state: o
    }));
    var C = e.__serverConfig__.smart;
    var O = null;

    var I = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";

      if (e && e.nodeType) {
        var n = p.find(".yidun_input", e);
        n ? n.value = t : (n = document.createElement("input"), n.type = "hidden", n.name = "NECaptchaValidate", n.value = t, n.className = "yidun_input", e.appendChild(n));
      }
    };

    var $ = {
      onVerify: function (n, i) {
        if (n) {
          var r = n.data;

          if (r && r.counts > e.maxVerification) {
            var o = new m(_, "verify failed more then " + e.maxVerification + " times--" + n.message, Object.assign({
              token: r.token
            }, n.data));
            return void t.collectErr(o);
          }

          return void (n.code === w && t.collectErr(n));
        }

        var a = i.validate;
        I(e.element, a);
        t.clear();
      },
      onError: function (e) {
        e && "get" === e.data.api && e.code === w && t.collectErr(e);
      }
    };
    this.version = S.state.version;
    this.captchaId = e.captchaId;
    this.captchaType = S.state.captchaType;
    this.mode = e.mode;
    this.theme = e.theme;
    this.protocol = e.protocol;
    this.lang = e.lang;
    var X = S.subscribe(function (t, i) {
      var r = t.type;
      var o = t.payload;

      switch (r) {
        case a:
          n.captchaType = i.captchaType;
          break;

        case u:
        case l:
          I(e.element, "");
          break;

        case s:
          var f = o.name;
          var c = o.args;
          window.setTimeout(function () {
            var t = $[f];
            !c && (c = [n]);
            t && t.apply(null, c);
            "function" == typeof e[f] && e[f].apply(null, c);
          });
      }
    });
    r.mixin({
      beforeCreate: function () {
        this.$store = this.$parent && this.$parent.$store || this.$options.store;
      }
    });

    this.popUp = function () {
      T.assert(!1, "popUp function could only be invoked in not intellisense and mode is popup");
    };

    this.close = function () {
      T.assert(!1, 'close function could only be invoked in only "enableClose" is true and intellisense on mobile devices or mode is bind/popup');
    };

    this.verify = function () {
      T.assert(!1, "verify function could only be invoked in intellisense and mode is bind");
    };

    var x = function (t, i) {
      e.enableClose && (i && !p.isMobile || (n.close = function () {
        var e = t || O;
        e && e.closeModal();
      }));
    };

    switch (C) {
      case !0:
        if ("bind" === this.mode) {
          var A = r._extend(b);

          O = new A({
            "abstract": !0,
            el: e.element,
            store: S
          });

          this.verify = function () {
            return O.verifyCaptcha();
          };

          x(O);
          this._captchaIns = O;
        } else {
          O = new r({
            el: e.element,
            store: S,
            template: "<captcha-intellisense></captcha-intellisense>",
            components: {
              "captcha-intellisense": g
            }
          });
          var P = O && O.$children && O.$children[0];
          x(P, !0);
          this._captchaIns = P;
        }

        break;

      case !1:
      default:
        "popup" === this.mode ? (this.popUp = function () {
          if (!O) {
            var t = r._extend(v);

            O = new t({
              store: S,
              propsData: {
                onClose: function () {
                  S.commit(s, {
                    name: "onClose"
                  });
                },
                enableColor: !0
              }
            }).$mount(function (t) {
              e.appendTo ? e.appendTo.appendChild(t) : document.body.appendChild(t);
            });
          }

          O.open();
          this._captchaIns = O;
        }, x()) : (O = new r({
          el: e.element,
          store: S,
          template: '<captcha-core :enableColor="true"></captcha-core>',
          components: {
            "captcha-core": y
          }
        }), this._captchaIns = O);
    }

    I(e.element);

    this.getCaptchaType = function () {
      for (var e in E) if (E[e] === S.state.type) return e.toLowerCase();

      return "";
    };

    this.refresh = function () {
      S.commit(l);
    };

    this.destroy = function () {
      X();
      O && (O.$destroy(), O = null);
      var t = e.element;

      if (t) {
        var n = p.find(".yidun_input", t);
        n && t.removeChild(n);
      }
    };
  }

  var r = n(6);
  var o = n(4);
  var a = o.SWITCH_TYPE;
  var s = o.INVOKE_HOOK;
  var l = o.EVENT_RESET;
  var u = o.EVENT_RESET_CLASSIC;
  var f = n(43);
  var c = n(56);
  var j = n(31);
  var d = n(20);
  var h = n(35);
  var p = n(2);
  var y = n(13);
  var v = n(14);
  var g = n(30);
  var b = n(24);
  var m = n(5);
  var _ = m.UNPASS_ERROR;
  var w = m.BUSINESS_ERROR;
  var T = n(1);
  var S = n(3);
  var E = S.CAPTCHA_TYPE;
  var R = n(32);
  var k = n(7);
  e.exports = window.NECaptcha || i;
}, function (e, t, n) {
  var i = function () {
    function e(e, t) {
      var n = [];
      var i = !0;
      var r = !1;
      var o = void 0;

      try {
        for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
      } catch (l) {
        r = !0;
        o = l;
      } finally {
        try {
          !i && s["return"] && s["return"]();
        } finally {
          if (r) throw o;
        }
      }

      return n;
    }

    return function (t, n) {
      if (Array.isArray(t)) return t;
      if (Symbol.iterator in Object(t)) return e(t, n);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();

  var r = n(12);
  var o = r.FETCH_INTELLISENSE_CAPTCHA;
  var a = r.VERIFY_INTELLISENSE_CAPTCHA;
  var s = r.RESET_STATE;
  var l = n(4);
  var u = l.SWITCH_LOAD_STATUS;
  var f = l.UPDATE_VERIFY_STATUS;
  var c = l.INVOKE_HOOK;
  var j = l.EVENT_RESET;
  var d = n(3);
  var h = d.CAPTCHA_TYPE;
  var p = d.SAMPLE_NUM;
  var y = d.RTL_LANGS;
  var v = n(1);
  var g = n(2);
  var b = n(17);
  var m = n(8);
  var _ = m.eypt;
  var w = m.xor_encode;
  var T = n(6);
  var S = n(13);
  var E = n(14);
  var R = n(11);
  var k = n(15);
  e.exports = {
    el: ".yidun_intellisense",
    template: n(58),
    components: {
      "captcha-core": S
    },
    data: function () {
      var e = this.$store.state;
      var t = e.langPkg;
      var n = e.config;
      return {
        langPkg: t,
        theme: n.theme,
        status: "normal",
        classicVisible: !1,
        icon: n.customStyles.icon
      };
    },
    on: {
      ".yidun_intelli-control click": function (e) {
        if (!(["checking", "loading", "loadfail", "success"].indexOf(this.status) > -1)) return "normal" === this.status ? void this.verifyIntelliCaptcha(e) : void (!this.classicVisible && this.$setData({
          classicVisible: !0
        }));
      },
      ".yidun_intelli-control mousemove": function (e) {
        this.trackMoving(e);
      }
    },
    watch: {
      status: function (e) {
        "loaddone" === e && this.firstLoad && (this.$setData({
          classicVisible: !0
        }), this.firstLoad = !1);
        "success" === e && this.$setData({
          classicVisible: !1
        });
      }
    },
    mounted: function () {
      var e = this;
      k(this.$store.state.config.customStyles.primaryColor, this.$el);
      this.beginTime = 0;
      this.traceData = [];
      this._baseClassNames = this.$el.className.trim();
      this._removeEvents = this.initEvents();
      this.fetchCaptcha().then(function () {
        e.$store.commit(c, {
          name: "onReady"
        });
        e.$store.commit(c, {
          name: "onDidRefresh"
        });
      })["finally"](function () {
        e.$el.style.display = "";
      });
      y.indexOf(this.$store.state.config.lang) !== -1 && (this.$el.style.direction = "rtl");
    },
    beforeDestroy: function () {
      this._removeEvents();

      this.clear();
    },
    render: function (e) {
      var t = e.status;
      var n = e.classicVisible;
      void 0 !== t && this.updateUI(t);
      void 0 !== n && this.toggleClassicVisible(n);
    },
    methods: {
      initEvents: function () {
        var e = this;
        var t = g.find(".yidun_intelli-control", this.$el);

        var n = function (t) {
          e.$el.contains(t.target) || e.classicVisible && e.$setData({
            classicVisible: !1
          });
        };

        var i = function (t) {
          e.beginTime || (e.beginTime = v.now());
        };

        !g.isMobile && g.on(document, "mousedown", n);
        g.on(t, "mouseover", i);
        var r = this.$store.subscribe(function (t, n) {
          var i = t.type;
          var r = (t.payload, n.load);
          var o = n.verifyStatus;

          switch (i) {
            case u:
              r && ("loading" === r.status && e.$setData({
                status: "loading"
              }), "done" === r.status && e.$setData({
                status: "loaddone"
              }), "fail" === r.status && e.$setData({
                status: "loadfail"
              }));
              break;

            case f:
              "success" === o && e.$setData({
                status: "success"
              });
              "error" === o && e.$setData({
                status: "error"
              });
              break;

            case j:
              e.reset();
          }
        });
        return function () {
          !g.isMobile && g.off(document, "mousedown", n);
          g.off(t, "mouseover", i);
          r();
        };
      },
      createClassicCaptcha: function () {
        var e = this;

        if (g.isMobile) {
          var t = this.$store.state.config;

          var n = T._extend(E);

          this._captchaIns = new n({
            store: this.$store,
            propsData: {
              autoOpen: !1,
              intellisense: !0,
              enableColor: !1,
              onClose: function (t) {
                e.$setData({
                  classicVisible: !1
                });
                e.$store.commit(c, {
                  name: "onClose"
                });
              }
            }
          }).$mount(function (e) {
            t.appendTo ? t.appendTo.appendChild(e) : document.body.appendChild(e);
          });
        } else {
          var i = T._extend(S);

          this._captchaIns = new i({
            el: g.find(".yidun_classic-wrapper", this.$el),
            store: this.$store,
            propsData: {
              intellisense: !0,
              enableColor: !1
            }
          });
        }
      },
      fetchCaptcha: function () {
        var e = this;
        return new R(function (t, n) {
          e.$store.dispatch(o, {
            width: e.getWidth()
          }, function (i, r) {
            if (e._isMounted) return i ? (e.$setData({
              status: "loadfail"
            }), void n(i)) : void t(r);
          });
        });
      },
      clear: function () {
        var e = this;
        this._captchaIns && (this.$setData({
          classicVisible: !1
        }), this.$nextTick(function () {
          e._captchaIns.$destroy();

          e._captchaIns = null;
        }));
        this.beginTime = 0;
        this.traceData = [];
      },
      reset: function () {
        var e = this;
        this.$store.dispatch(s);
        this.fetchCaptcha().then(function () {
          e.clear();
          e.resetClassNames();
          e.$setData({
            status: "normal"
          });
        });
      },
      getWidth: function () {
        return this.$el.offsetWidth;
      },
      resetClassNames: function () {
        for (var e = this._baseClassNames.split(/\s+/), t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];

        this.$el.className = b(e, n);
      },
      loadClassicCaptcha: function () {
        this.createClassicCaptcha();
        this.firstLoad = !0;
        this.$setData({
          status: "loading"
        });

        this._captchaIns.refresh();
      },
      verifyIntelliCaptcha: function (e) {
        var t = this;
        this.$setData({
          status: "checking"
        });

        var n = function (n) {
          R.all([new R(function (i, r) {
            var o = t.$store.state.token;
            var s = t.$el.getBoundingClientRect();
            var l = s.left;
            var u = s.top;
            var f = v.now();
            var c = w(o, [Math.round(e.clientX - l), Math.round(e.clientY - u), f - (t.beginTime || f)] + "");
            var j = t.traceData.map(function (e) {
              return w(o, e);
            });
            t.$store.dispatch(a, {
              token: o,
              acToken: n,
              type: h.INTELLISENSE,
              width: t.getWidth(),
              data: JSON.stringify({
                d: "",
                m: _(v.sample(j, p).join(":")),
                p: _(c),
                ext: _(w(o, "1," + j.length))
              })
            }, function (e, n) {
              if (t._isMounted) return e ? void r(e) : void i(n);
            });
          }), new R(function (e, t) {
            window.setTimeout(e, 300);
          })]).then(function (e) {
            var n = i(e, 1);
            n[0];
            t.$setData({
              status: "success"
            });
          })["catch"](function () {
            return t.loadClassicCaptcha();
          });
        };

        this.$store.state.captchaAnticheat.getToken({
          timeout: 500
        }).then(n)["catch"](n);
      },
      trackMoving: function (e) {
        if (this.beginTime) {
          var t = this.$el.getBoundingClientRect();
          var n = t.left;
          var i = t.top;
          var r = [Math.round(e.clientX - n), Math.round(e.clientY - i), v.now() - this.beginTime] + "";
          this.traceData.push(r);
        }
      },
      toggleClassicVisible: function (e) {
        var t = this._captchaIns;

        if (g.isMobile && t) {
          e && t.open();
          !e && t.close();
        } else {
          var n = g.find(".yidun_classic-wrapper", this.$el);
          n.style.display = e ? "block" : "none";
        }
      },
      updateUI: function (e) {
        var t = this;
        var n = g.find(".yidun_intelli-text", this.$el);
        var i = g.find(".yidun_tips__text", this.$el);
        var r = this.langPkg.intellisense;
        var o = "yidun_intellisense";
        var a = this.$store.state;
        var s = a.countsOfVerifyError;
        var l = a.config;

        var u = function (e) {
          e.stopPropagation();
          t.$store.commit(j);
        };

        switch (g.off(i, "click", u), e) {
          case "normal":
            g.text(n, r.normal);
            break;

          case "checking":
            this.resetClassNames(o + "--checking");
            g.text(n, r.checking);
            break;

          case "loading":
            this.resetClassNames(o + "--loading");
            g.text(n, r.loading);
            break;

          case "loaddone":
            this.resetClassNames();
            g.text(n, r.loaddone);
            break;

          case "loadfail":
            this.resetClassNames(o + "--loadfail");
            g.text(i, r.loadfail);
            break;

          case "success":
            this.resetClassNames(o + "--success");
            g.text(i, this.langPkg.verifySuccess);
            break;

          case "error":
            var f = o + "--error";
            s > l.maxVerification ? (f += " " + o + "--maxerror", g.text(i, this.langPkg.verifyOutOfLimit), g.on(i, "click", u)) : g.text(i, this.langPkg.verifyError);
            this.resetClassNames(f);
        }
      },
      closeModal: function () {
        g.isMobile && this._captchaIns && this._captchaIns.closeModal();
      }
    }
  };
}, function (e, t, n) {
  var i = n(21);
  var r = n(1);
  var o = n(16);
  var a = {};

  e.exports = function (e, t) {
    e = Object.assign([], e);
    var n = t.protocol;
    var s = t.staticServer;
    var l = t.theme;
    var u = e[0].slice(0);

    if (!a[l]) {
      r.assert(e, "apply [" + l + " theme] failed");
      var f = o({
        protocol: n,
        host: s
      });
      u[1] = u[1].replace(/url\(['"]?\/?([^'"\s]+?)['"]?\)/g, 'url("' + f + '/$1")');
      e[0] = u;
      i(e);
      a[l] = !0;
      delete e.__theme__;
    }
  };
}, function (e, t, n) {
  function i(e, t) {
    this._captchaConf = e;
    this._captchaCollector = t;
  }

  var r = n(11);
  var o = n(5);
  var a = o.ANTICHEAT_TOKEN_ERROR;
  var s = n(1);

  i.prototype.getAnticheat = function () {
    return this._captchaConf.__anticheat__ ? this._captchaConf.__anticheat__.instance : null;
  };

  i.prototype.getToken = function (e) {
    var t = this;
    var n = e.timeout;
    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    var l = this._captchaConf;
    var u = new r(function (e) {
      var r = function u() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        var f = null;

        var c = function (n) {
          if (clearTimeout(f), r < i) setTimeout(function () {
            return u(r + 1);
          }, 200);else {
            var c = new o(a, n.message + ";initWatchman: " + s.typeOf(window.initWatchman) + ";Watchman: " + s.typeOf(window.Watchman));

            t._captchaCollector.collectErr(c);

            e(l.acConfig.token || "");
          }
        };

        try {
          f = setTimeout(function () {
            c(new Error("get anticheat token timeout"));
          }, n + 50);
          t.getAnticheat().getToken(l.acConfig.bid, function (t) {
            clearTimeout(f);
            e(t);
          }, n);
        } catch (j) {
          c(j);
        }
      };

      1 === l.acConfig.enable ? r(0) : e("");
    });
    return u;
  };

  e.exports = i;
}, function (e, t, n) {
  function i(e, t, n) {
    t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n;
    return e;
  }

  var r;
  var o = n(20);
  var a = n(16);
  var s = n(5);
  var l = s.REQUEST_SCRIPT_ERROR;
  var u = s.REQUEST_API_ERROR;
  var f = s.REQUEST_IMG_ERROR;
  var c = s.BUSINESS_ERROR;
  var j = s.UNPASS_ERROR;
  var d = s.ANTICHEAT_TOKEN_ERROR;
  var h = n(19);
  var p = n(9);
  var y = n(1);
  var v = y.uuid;
  var g = (r = {}, i(r, u, "api"), i(r, f, "image"), i(r, l, "script"), i(r, c, "business"), i(r, j, "unpass"), i(r, d, "anticheat"), r);
  var b = null;

  e.exports = function (e, t, n) {
    var i = t.protocol;
    var r = t.apiServer;
    var s = t.__serverConfig__;
    var l = void 0 === s ? {} : s;
    var u = t.captchaId;
    var f = t.timeout;
    var c = new h();

    var j = function (e) {
      var t = "/api/v2/collect";
      return Array.isArray(e) ? e.map(function (e) {
        return a({
          protocol: i,
          host: e,
          path: t
        });
      }) : a({
        protocol: i,
        host: e,
        path: t
      });
    };

    var d = j(r || l.apiServer || ["c.dun.163yun.com", "c.dun.163.com"]);
    var y = o({
      timeout: f,
      disableRetry: !0
    });
    var m = e.data;

    var _ = Object.assign({
      id: u,
      token: m.token || "",
      type: g[e.code] || "other",
      target: m.url || m.resource || "",
      message: e.toString()
    }, n);

    null == window.ip && (window.ip = function (e, t, n) {
      b = {
        ip: e,
        dns: n
      };
    });
    var w = i + "://only-d-" + v(32) + "-" + new Date().valueOf() + ".nstool.netease.com/ip.js";
    p.script({
      url: w,
      timeout: f,
      checkResult: function (e) {
        e && e.scriptEl && e.scriptEl.parentElement.removeChild(e.scriptEl);
        var t = new h();
        return b && b.dns ? (t.resolve(), t) : (setTimeout(function () {
          return t.resolve(new Error("try to collect dns again"));
        }, 100), t);
      }
    })["finally"](function () {
      Object.assign(_, b);
      y(d, _, function (e, t) {
        if (e || t.error) {
          console && console.warn("Failed to collect error.");
          var n = new Error(e ? e.message : t.msg);
          n.data = {
            url: d
          };
          return void c.resolve(n);
        }

        c.resolve();
      });
    });
    return c;
  };
}, function (e, t) {
  e.exports = function () {
    return location.href.replace(/\?[\s\S]*/, "").substring(0, 128);
  };
}, function (e, t, n) {
  function i(e) {
    return "number" === f.typeOf(e);
  }

  function r(e, t) {
    var n = /^((\d|[1-9]\d+)(\.\d+)?)(px|rem|%)?$/;
    var r = e.width;
    var o = r === g.width;
    var a = "popup" === e.mode || "bind" === e.mode;
    f.assert(r === g.width || n.test(r) || i(r) && r >= 0, 'config: "width" should be a valid number or string like "**px", "**rem", "**%"(except popup/bind mode) or "auto". By default, it is "auto"');
    f.assert(!(a && /%$/.test(r)), 'config: "width" can\'t be percentage like "**%", when mode is "popup".');
    var s = f.msie();
    f.assert(!(s < 9 && /rem$/.test(r)), 'config: "width", IE' + s + ' does not support "rem", please use a valid value');
    var l = r;
    o && a ? l = u.isMobile ? "260px" : m + "px" : (i(r) || Number(r)) && (l = r + "px");
    return l;
  }

  function o(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    var n = {
      imagePanel: {},
      controlBar: {},
      gap: "",
      icon: {},
      primaryColor: ""
    };
    Object.assign(n.imagePanel, e.imagePanel, t.imagePanel);
    Object.assign(n.controlBar, e.controlBar, t.controlBar);
    n.gap = t.gap || e.gap;
    n.primaryColor = t.primaryColor || e.primaryColor;
    Object.assign(n.icon, e.icon, t.icon);
    return n;
  }

  function a(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};

    var n = function i(e, t) {
      for (var n = {}, r = Object.keys(e), o = 0, a = r.length; o < a; o++) {
        var s = r[o];
        void 0 === t[s] ? n[s] = e[s] : "string" === f.typeOf(e[s]) ? n[s] = t[s] + "" : n[s] = i(e[s], t[s]);
      }

      return n;
    };

    return n(e, t);
  }

  function s(e) {
    e = Object.assign({}, g, e);
    var t = e.__serverConfig__.smart;
    var n = e.element;
    var s = "popup" === e.mode;
    f.assert(e.captchaId, 'config: "captchaId" is required!');
    f.assert(s || n, 'config: "element" is required when "mode" is not "popup"');
    n.nodeType || "string" !== f.typeOf(n) || (n = u.find(n), f.assert(n, 'config: "element ' + e.element + '" not found'), e.element = n);
    !t && f.assert(~["float", "embed", "popup"].indexOf(e.mode), 'config: "current captcha is not intellisense , mode "' + e.mode + '" is invalid, "float", "embed" or "popup" is expected');
    f.assert(/^https?$/.test(e.protocol), 'config: "protocol ' + e.protocol + '" is invalid. "http", "https" is expected. By default, it depends on user\'s website');
    f.assert(c[e.lang], 'config: "lang ' + e.lang + '" is invalid, supported lang: ' + Object.keys(c).toString() + ". By default, it's " + g.lang);
    t && "bind" !== e.mode ? e.width = g.width : e.width = r(e, n);
    var l = e.appendTo;
    !t && "popup" === e.mode || "bind" === e.mode || t && u.isMobile ? f.assert(!l || l.nodeType || "string" === f.typeOf(l), "config: appendTo should be a elment or string") : f.assert(!l, 'config: appendTo could only be valid when aptchaType is not intellisense and mode is "popup", or mode is bind, or captchaType is intellisense on the mobile side');
    l && !l.nodeType && "string" === f.typeOf(l) && (l = u.find(l), f.assert(l, 'config: "element ' + e.appendTo + '" which "appendTo" defined not found'), e.appendTo = l);
    l && "static" === u.getComputedStyle(l, "position") && (l.style.position = "relative");
    e.__serverConfig__.customStyles ? (f.assert(e.customStyles && v(e.customStyles), 'config: "customStyles" must be a plain Object'), e.customStyles = o(g.customStyles, e.customStyles), f.assert(e.customTexts && v(e.customTexts), 'config: "customTexts" must be a plain Object'), e.customTexts = a(c[e.lang], e.customTexts)) : (e.customStyles = g.customStyles, e.customTexts = c[e.lang]);
    f.assert("string" === f.typeOf(e.group) && e.group.length <= 32, 'config: "group" must be a string and it\'s length less than or equal 32');
    f.assert("string" === f.typeOf(e.scene) && e.scene.length <= 32, 'config: "scene" must be a string and it\'s length less than or equal 32');
    f.assert(i(e.maxVerification) && e.maxVerification >= 0, 'config: "maxVerification" must be a number and it\'s greater than or equal 0');
    e.acConfig = e.acConfig || e.__serverConfig__.ac || {};
    return e;
  }

  var l = function () {
    function e(e, t) {
      var n = [];
      var i = !0;
      var r = !1;
      var o = void 0;

      try {
        for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
      } catch (l) {
        r = !0;
        o = l;
      } finally {
        try {
          !i && s["return"] && s["return"]();
        } finally {
          if (r) throw o;
        }
      }

      return n;
    }

    return function (t, n) {
      if (Array.isArray(t)) return t;
      if (Symbol.iterator in Object(t)) return e(t, n);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();

  var u = n(2);
  var f = n(1);
  var c = n(44);
  var j = n(3);
  var d = j.WIDTH_LIMIT;
  var h = j.RUN_ENV;
  var p = j.MAX_VERIFICATION;
  var y = n(10);
  var v = y.isPlainObject;
  var g = {
    captchaId: "",
    element: null,
    appendTo: null,
    mode: u.isMobile ? "popup" : "float",
    protocol: window.location.protocol.replace(":", ""),
    lang: "zh-CN",
    width: "auto",
    ipv6: !1,
    enableClose: !1,
    customStyles: {
      imagePanel: {
        align: "top",
        borderRadius: "2px"
      },
      controlBar: {
        height: "40px",
        borderRadius: "2px"
      },
      gap: "15px",
      icon: {
        intellisenseLogo: "",
        slider: ""
      },
      primaryColor: ""
    },
    customTexts: {},
    feedbackEnable: !0,
    runEnv: h.WEB,
    group: "",
    scene: "",
    maxVerification: p
  };
  var b = l(d, 1);
  var m = b[0];
  e.exports = s;
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      "\\": "-",
      "/": "_",
      "+": "."
    };
    return e.replace(/[\\/+]/g, function (e) {
      return t[e];
    });
  };
}, function (e, t, n) {
  function i() {
    c = d.length = 0;
    j = {};
    u = f = !1;
  }

  function r() {
    f = !0;
    var e = void 0;
    var t = void 0;

    for (d.sort(function (e, t) {
      return e.id - t.id;
    }), c = 0; c < d.length; c++) {
      e = d[c];
      t = e.instance;
      j[e.id] = null;
      t._isMounted && t.render(e.data);
    }

    var n = d.slice();
    i();
    o(n);
  }

  function o(e) {
    for (var t = e.length; t--;) {
      var n = e[t];
      var i = n.instance;
      i._updater === n && i._isMounted && (n.data = {});
    }
  }

  function a(e) {
    var t = e.id;

    if (null == j[t]) {
      if (j[t] = !0, f) {
        for (var n = d.length - 1; n > c && d[n].id > e.id;) n--;

        d.splice(n + 1, 0, e);
      } else d.push(e);

      u || (u = !0, l(r));
    }
  }

  var s = n(10);
  var l = s.nextTick;
  var u = !1;
  var f = !1;
  var c = 0;
  var j = {};
  var d = [];
  e.exports = a;
}, function (e, t, n) {
  var i = n(10);
  var r = i.lifeCycleHooks;

  e.exports = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    var n = {};
    var i = t.el || e.el;
    var o = t.template || e.template;
    var a = e["abstract"];
    var s = t.components || e.components;
    var l = t.on || e.on;
    var u = t.render || e.render;
    var f = e.props;
    var c = t.propsData;
    var j = t.data || e.data;
    var d = e.methods || t.methods;
    var h = e.watch || t.watch;
    i && (n.el = i);
    o && (n.template = o);
    a && (n["abstract"] = !!a);
    s && (n.components = s);
    l && (n.on = Object.assign({}, e.on, t.on));
    u && (n.render = u);
    f && (n.props = f);
    c && (n.propsData = c);
    j && (n.data = j);
    d && (n.methods = Object.assign({}, e.methods, t.methods));
    h && (n.watch = Object.assign({}, e.watch, t.watch));

    var p = function (e, t) {
      var n = [];
      e && (n = n.concat(e));
      t && (n = n.concat(t));
      return n;
    };

    r.map(function (i) {
      n[i] = p(e[i], t[i]);
    });
    return n = Object.assign({}, t, n);
  };
}, function (e, t, n) {
  function i() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    var t = arguments[1];
    return this instanceof i ? (this._originalTemplate = e, void (this._composedStr = t ? r.template(e, t) : e)) : new i(e, t);
  }

  var r = n(1);
  var o = n(10);
  var a = o.getDocFragmentRegex;

  i.prototype.compose = function (e, t, n) {
    var i = a(e);
    var o = r.template(t, n);
    this._composedStr = this._composedStr.replace(i, o);
    return this;
  };

  i.prototype.toString = function () {
    return this._composedStr;
  };

  i.prototype.reset = function (e) {
    this._composedStr = r.template(this._originalTemplate, e);
    return this;
  };

  e.exports = i;
}, function (e, t, n) {
  var i = function () {
    function e(e, t) {
      var n = [];
      var i = !0;
      var r = !1;
      var o = void 0;

      try {
        for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
      } catch (l) {
        r = !0;
        o = l;
      } finally {
        try {
          !i && s["return"] && s["return"]();
        } finally {
          if (r) throw o;
        }
      }

      return n;
    }

    return function (t, n) {
      if (Array.isArray(t)) return t;
      if (Symbol.iterator in Object(t)) return e(t, n);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();

  var r = n(2);
  var o = n(18);
  var a = o({
    initialize: function (e) {
      var t = this.nativeEvent = e.nativeEvent;
      this.target = t.target;
      this.currentTarget = e.currentTarget;
      this.pageX = t.pageX;
      this.pageY = t.pageY;
      this.clientX = t.clientX;
      this.clientY = t.clientY;
      this.defaultPrevented = !1;
      this.cancelBubble = !1;
      this.cancelImmediateBubble = !1;
      this.type = t.type;
    },
    preventDefault: function () {
      this.defaultPrevented = !0;
    },
    stopPropagation: function () {
      this.cancelBubble = !0;
    },
    stopImmediatePropagation: function () {
      this.cancelImmediateBubble = !0;
    }
  });
  var s = o({
    initialize: function (e) {
      this.$el = e.$el;
      this.initEvents(e.events);
    },
    initEvents: function (e) {
      var t = this;
      this._captureEvents = {};
      this._bubbleEvents = {};
      this._delegationHandlers = {};
      var n = this.normalizeEvents(e);
      Object.keys(n).map(function (e) {
        var i = n[e];
        i.map(function (n) {
          t.delegate(e, n.selector, n.handler);
        });

        var o = t._delegationHandlers[e] = function (n) {
          var i = n.target;
          var r = i;
          var o = !1;

          var s = function () {
            var i = null;
            var s = t._bubbleEvents[e];
            Object.keys(s).map(function (e) {
              var t = e.match(/^([.#])([^.#\s]+)$/) || [];
              var l = t[1];
              var u = t[2];

              if ("." === l && ~r.className.indexOf(u) || "#" === l && r.id === u) {
                i = r;

                for (var f = s[e], c = 0; c < f.length; c++) {
                  var j = f[c];
                  var d = new a({
                    nativeEvent: n,
                    currentTarget: i
                  });

                  if (j.call(i, d), d.defaultPrevented && n.preventDefault(), d.cancelImmediateBubble) {
                    o = !0;
                    break;
                  }
                }

                d.cancelBubble && (o = !0);
              }
            });
            r = r.parentElement;
            r === t.$el && (o = !0);
          };

          do s(); while (t.$el && !o && r);
        };

        r.on(t.$el, e, o);
      });
    },
    off: function () {
      var e = this._delegationHandlers;

      for (var t in e) r.off(this.$el, t, e[t]);

      this._captureEvents = {};
      this._bubbleEvents = {};
      this._delegationHandlers = {};
      this.$el = null;
    },
    delegate: function (e, t, n) {
      this._bubbleEvents[e] || (this._bubbleEvents[e] = {});
      var i = this._bubbleEvents[e];
      i[t] || (i[t] = []);
      var r = i[t];
      r.push(n);
      return function () {
        var e = r.indexOf(n);
        e > -1 && r.splice(e, 1);
      };
    },
    normalizeEvents: function (e) {
      var t = {};

      for (var n in e) if (e.hasOwnProperty(n)) {
        var r = n.split(/\s+/);
        var o = i(r, 2);
        var a = o[0];
        var s = o[1];
        t[s] || (t[s] = []);
        var l = t[s];
        l.push({
          selector: a,
          handler: e[n]
        });
      }

      return t;
    }
  });
  e.exports = s;
}, function (e, t) {
  function n() {}

  function i(e, t, i, a) {
    function s() {
      f.parentNode && f.parentNode.removeChild(f);
      window[h] = n;
      c && clearTimeout(c);
    }

    function l() {
      window[h] && s();
    }

    function u(e) {
      var t = [];

      for (var n in e) e.hasOwnProperty(n) && t.push(v(n) + "=" + v(e[n]));

      return t.join("&");
    }

    "object" === ("undefined" == typeof i ? "undefined" : r(i)) && (a = i, i = null);
    "function" == typeof t && (i = t, t = null);
    a || (a = {});
    var f;
    var c;
    var j = Math.random().toString(36).slice(2, 9);
    var d = a.prefix || "__JSONP";
    var h = a.name || d + ("_" + j) + ("_" + o++);
    var p = a.param || "callback";
    var y = a.timeout || 6e3;
    var v = window.encodeURIComponent;
    var g = document.getElementsByTagName("script")[0] || document.head;
    y && (c = setTimeout(function () {
      s();
      i && i(new Error("Timeout"));
    }, y));

    window[h] = function (t) {
      s();
      i && i(null, t, {
        url: e
      });
    };

    t && (e = e.split("?")[0]);
    e += (~e.indexOf("?") ? "&" : "?") + u(t) + "&" + p + "=" + v(h);
    e = e.replace("?&", "?");
    f = document.createElement("script");
    f.type = "text/javascript";
    f.src = e;
    g.parentNode.insertBefore(f, g);
    return l;
  }

  var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  };
  var o = 0;
  e.exports = i;
}, function (e, t) {
  function n(e) {
    if (!e) return {};
    var t = document.createElement("a");
    t.href = e;
    return {
      source: e,
      protocol: t.protocol.replace(":", ""),
      host: t.hostname,
      port: t.port,
      query: t.search,
      hash: t.hash.replace("#", ""),
      path: t.pathname.replace(/^([^/])/, "/$1"),
      segments: t.pathname.replace(/^\//, "").split("/")
    };
  }

  e.exports = n;
}, function (e, t, n) {
  var i = n(18);
  var r = n(1);
  var o = n(11);
  var a = i({
    initialize: function (e) {
      this.state = e.state;
      this._committing = !1;
      this._subscribers = [];
      var t = this;
      var n = this.dispatch;
      var i = this.commit;

      this.dispatch = function (e, i, r) {
        return n.call(t, e, i, r);
      };

      this.commit = function (e, n) {
        return i.call(t, e, n);
      };

      this.registerMutations(e.mutations);
      this.registerActions(e.actions);
    },
    registerMutations: function (e) {
      this._mutations = Object.assign(this._mutations || {}, e);
    },
    registerActions: function (e) {
      this._actions = Object.assign(this._actions || {}, e);
    },
    commit: function (e, t) {
      var n = this;
      var i = {
        type: e,
        payload: t
      };
      var o = this._mutations[e];
      return o ? (this._withCommit(function () {
        o(n.state, t);
      }), void this._subscribers.map(function (e) {
        return e(i, n.state);
      })) : void r.error("[Store] unknown mutation type: " + e);
    },
    _withCommit: function (e) {
      var t = this._committing;
      this._committing = !0;
      e();
      this._committing = t;
    },
    dispatch: function (e, t, n) {
      var i = this._actions[e];
      if (!i) return void r.error("[Store] unknown action type: " + e);
      var a = {
        state: this.state,
        commit: this.commit,
        dispatch: this.dispatch
      };
      return o.resolve(i(a, t, n));
    },
    subscribe: function (e) {
      var t = this._subscribers;
      t.indexOf(e) < 0 && t.push(e);
      return function () {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      };
    },
    replaceState: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      this.state = e;
    }
  });
  e.exports = a;
}, function (e, t) {
  e.exports = {
    "zh-CN": {
      loading: "加载中...",
      loadfail: "加载失败",
      verifySuccess: "验证成功",
      verifyError: "验证失败，请重试",
      verifyOutOfLimit: "失败过多，点此重试",
      clickButton: "点此进行验证",
      clickInTurn: "请依次点击",
      clickWordInTurn: "请按语序依次点击文字",
      slideTip: "向右拖动滑块填充拼图",
      smsTip: "请按照上方图片提示完成验证",
      inferenceTip: "拖动交换2个图块复原图片",
      waitForSMS: "等待短信验证，剩余",
      popupTitle: "请完成安全验证",
      intellisense: {
        normal: "点击完成验证",
        checking: "安全检测中",
        loading: "正在加载验证",
        loadfail: "加载失败",
        loaddone: "请完成安全验证"
      }
    },
    en: {
      loading: "loading...",
      loadfail: "Load failed",
      verifySuccess: "verify success",
      verifyError: "verify failed",
      verifyOutOfLimit: "Verify failed. Please retry",
      clickButton: "Click here to verify",
      clickInTurn: "click in turn ",
      clickWordInTurn: "Please click on the text in order",
      slideTip: "drag to complete puzzle",
      smsTip: "follow the prompts complete verification",
      inferenceTip: "swap 2 tiles to restore the image",
      waitForSMS: "waiting for SMS，remaining ",
      popupTitle: "Please complete verification",
      intellisense: {
        normal: "Click the button to verify",
        checking: "verifying...",
        loading: "loading...",
        loadfail: "Load failed",
        loaddone: "Please complete verification"
      }
    },
    "zh-TW": {
      loading: "加載中...",
      loadfail: "加載失敗",
      verifySuccess: "驗證成功",
      verifyError: "驗證失敗，請重試",
      verifyOutOfLimit: "失敗過多，點此重試",
      clickButton: "點此進行驗證",
      clickInTurn: "請依次點擊",
      clickWordInTurn: "請按語序依次點擊文字",
      slideTip: "向右拖動滑塊填充拼圖",
      smsTip: "請按照上方圖片提示完成驗證",
      inferenceTip: "拖動交換2個圖塊恢復圖片",
      waitForSMS: "等待短信驗證，剩餘",
      popupTitle: "請完成安全驗證",
      intellisense: {
        normal: "點擊完成驗證",
        checking: "安全檢測中",
        loading: "正在加載驗證",
        loadfail: "加載失敗",
        loaddone: "請完成安全驗證"
      }
    },
    ja: {
      loading: "ローディング中...",
      loadfail: "失敗を収める",
      verifySuccess: "検証の成功",
      verifyError: "失敗しました",
      verifyOutOfLimit: "失敗、再試行をクリック",
      clickButton: "確認するにはここをクリック",
      clickInTurn: "順にクリックしてください",
      clickWordInTurn: "順番にテキストをクリックしてください",
      slideTip: "右にドラッグ",
      smsTip: "上の写真に従って検証を完了してください。",
      inferenceTip: "2つのタイル復元図を交換する",
      waitForSMS: "メールの検証を待って、残ります。",
      popupTitle: "安全検証を完了してください。",
      intellisense: {
        normal: "クリックして検証を完了する",
        checking: "安全診断中",
        loading: "検証をロードしている",
        loadfail: "失敗を収める",
        loaddone: "安全検証を完了してください。"
      }
    },
    ko: {
      loading: "적재 중...",
      loadfail: "실패를 거듭하다.",
      verifySuccess: "검증에 성공하다",
      verifyError: "검증 실패, 다시 시험 해 보세요.",
      verifyOutOfLimit: "실패, 다시 시도를 클릭하십시오.",
      clickButton: "확인하려면 여기를 클릭하십시오",
      clickInTurn: "순서 대로 클릭 하세요.",
      clickWordInTurn: "순서대로 텍스트를 클릭하십시오",
      slideTip: "오른쪽으로 드래그",
      smsTip: "위쪽 사진에 따라 검증이 완성 되세요.",
      inferenceTip: "두 타일 복원 다이어그램 교환",
      waitForSMS: "문자 검증을 기다리 며 남다.",
      popupTitle: "안전 검증 완료.",
      intellisense: {
        normal: "클릭 하여 검증하다",
        checking: "안전 검사 중",
        loading: "추가 검증을하고 있다.",
        loadfail: "실패를 거듭하다.",
        loaddone: "안전 검증 완료."
      }
    },
    th: {
      loading: "กำลังโหลด ...",
      loadfail: "ไม่สามารถโหลด",
      verifySuccess: "การยืนยันที่ประสบความสำเร็จ",
      verifyError: "การยืนยันล้มเหลวโปรดลองอีกครั้ง",
      verifyOutOfLimit: "ความล้มเหลวมากเกินไปลองอีกครั้ง",
      clickButton: "คลิกที่นี่เพื่อยืนยัน",
      clickInTurn: "โปรดคลิก",
      clickWordInTurn: "โปรดคลิกที่ข้อความตามลำดับ",
      slideTip: "ลากตัวเลื่อนไปทางขวาเพื่อเติมปริศนา",
      smsTip: "โปรดทำตามภาพด้านบนเพื่อยืนยัน",
      inferenceTip: "แลกเปลี่ยนไพ่สองใบเพื่อคืนค่ารูปภาพ",
      waitForSMS: "รอการยืนยันทาง SMS เหลืออยู่",
      popupTitle: "โปรดกรอกข้อมูลการยืนยันความปลอดภัย",
      intellisense: {
        normal: "คลิก Finish เพื่อยืนยัน",
        checking: "การทดสอบความปลอดภัย",
        loading: "กำลังโหลดการยืนยัน",
        loadfail: "ไม่สามารถโหลด",
        loaddone: "โปรดกรอกข้อมูลการยืนยันความปลอดภัย"
      }
    },
    vi: {
      loading: "Tải trong...",
      loadfail: "Tải thất bại",
      verifySuccess: "Xác minh thành công",
      verifyError: "Kiểm tra thất bại, hãy thử lại",
      verifyOutOfLimit: "Quá nhiều thất bại, thử lại lần nữa",
      clickButton: "Nhấp vào đây để xác minh",
      clickInTurn: "Xin vui lòng nhấp vào",
      clickWordInTurn: "Bấm vào văn bản theo thứ tự",
      slideTip: "Kéo sang phải để điền vào câu đố",
      smsTip: "Hãy làm theo hình ở trên để hoàn thành xác minh",
      inferenceTip: "Trao đổi hai gạch để khôi phục lại hình ảnh",
      waitForSMS: "Chờ đợi tin nhắn SMS còn lại",
      popupTitle: "Hãy hoàn thành kiểm tra an toàn",
      intellisense: {
        normal: "Nhấp vào để hoàn thành xác nhận",
        checking: "Kiểm tra an ninh",
        loading: "Đang tải kiểm tra",
        loadfail: "Tải thất bại",
        loaddone: "Hãy hoàn thành kiểm tra an toàn"
      }
    },
    fr: {
      loading: "téléchargement en cours...",
      loadfail: "téléchargement échoué",
      verifySuccess: "vérification confirmée",
      verifyError: "vérification échouée, veuillez réessayer",
      verifyOutOfLimit: "échecs excessifs, cliquer pour réessayer",
      clickButton: "cliquer pour accomplir la vérification",
      clickInTurn: "veuillez cliquer par ordre",
      clickWordInTurn: "Cliquez sur le texte dans l'ordre",
      slideTip: "glisser le puzzle",
      smsTip: "veuillez accomplir la vérification en suivant l'image",
      inferenceTip: "Carte de réduction des tuiles Exchange",
      waitForSMS: "En attedant de la vérification de message, il reste encore",
      popupTitle: "veuillez accomplir la vérification",
      intellisense: {
        normal: "cliquer pour accomplir la vérification",
        checking: "en vérification",
        loading: "téléchargement en cours",
        loadfail: "téléchargement échoué",
        loaddone: "veuillez accomplir la vérification"
      }
    },
    ru: {
      loading: "загрузка...",
      loadfail: "ошибка загрузки",
      verifySuccess: "проверка прошла успешно",
      verifyError: "ошибка проверки, повторите побытку",
      verifyOutOfLimit: "Много ошибок, повторите попытку",
      clickButton: "щелкать, чтобы завершить проверку",
      clickInTurn: "щелкать по очереди",
      clickWordInTurn: "Нажмите на текст в порядке",
      slideTip: "перетащить на головоломку",
      smsTip: "завершить проверку, следуя выше изображнению",
      inferenceTip: "Обменная карта сокращения тайлов",
      waitForSMS: "Ожидание подтверждения СМС, осталось",
      popupTitle: "завершите проверку безопасности",
      intellisense: {
        normal: "щелкать, чтобы завершить проверку",
        checking: "Мониторинг безопасности",
        loading: "загрузка проверки",
        loadfail: "ошибка загрузки",
        loaddone: "завершиите проверку безопасрость"
      }
    },
    ar: {
      loading: "جاري التحميل...",
      loadfail: "فشل التحميل",
      verifySuccess: "نجح التحقق",
      verifyError: "فشل التحقق، الرجاء المحاولة لمرة أخرى",
      verifyOutOfLimit: "الكثير من الفشل، انقر هنا للمحاولة لمرة أخرى",
      clickButton: "انقر لإكمال التحقق",
      clickInTurn: "الرجاء الضغط بالترتيب الصحيح",
      clickWordInTurn: "الرجاء الضغط على النص بالترتيب",
      slideTip: "حرك شريط التمرير إلى اليمين لملء اللغز",
      smsTip: "يرجي إكمال التحقق حسب الصورة أعلاه",
      inferenceTip: "تبادل اثنين من البلاط لاستعادة الصورة",
      waitForSMS: "في انتظار التحقق من الرسائل القصيرة ، تبقى",
      popupTitle: "يرجى إكمال التحقق الأمني",
      intellisense: {
        normal: "انقر لإكمال التحقق",
        checking: "جاري التفتيش الأمني",
        loading: "جاري تحميل التحقق",
        loadfail: "فشل التحميل",
        loaddone: "يرجي إكمال التحقق الأمني"
      }
    },
    de: {
      loading: "Wird geladen...",
      loadfail: "Laden fehlgeschlagen",
      verifySuccess: "Erfolg verifizieren",
      verifyError: "gescheitert. Bitte erneut versuchen",
      verifyOutOfLimit: "gescheitert. Bitte erneut versuchen",
      clickButton: "Klicken Sie auf Verifizierung",
      clickInTurn: "Klicken Sie nacheinander",
      clickWordInTurn: "Klicken Sie der Reihe nach auf den Text",
      slideTip: "ziehen sie um puzzle",
      inferenceTip: "Kachelwiederherstellungskarte austauschen",
      waitForSMS: "Warten auf SMS, bleiben",
      popupTitle: "Bitte vervollständigen Sie die Bestätigung",
      intellisense: {
        normal: "Klicken Sie auf Verifizierung",
        checking: "Überprüfen",
        loading: "Wird geladen",
        loadfail: "Laden fehlgeschlagen",
        loaddone: "Bitte vervollständigen Sie die Bestätigung"
      }
    },
    it: {
      loading: "Caricamento in corso...",
      loadfail: "Carico fallito",
      verifySuccess: "verificare il successo",
      verifyError: "verifica fallita. Per favore riprova",
      verifyOutOfLimit: "Troppi guasti, riprova",
      clickButton: "Fai clic sul pulsante per verificare",
      clickInTurn: "clicca a turno",
      clickWordInTurn: "Fare clic sul testo in ordine",
      slideTip: "trascina per completare il puzzle",
      inferenceTip: "Scambia la mappa di recupero delle tessere",
      waitForSMS: "in attesa di SMS, rimanenti",
      popupTitle: "Si prega di completare la verifica",
      intellisense: {
        normal: "Fai clic sul pulsante per verificare",
        checking: "Nella verifica",
        loading: "Caricamento in corso",
        loadfail: "Carico fallito",
        loaddone: "Si prega di completare la verifica"
      }
    },
    he: {
      loading: "טעינה...",
      loadfail: "טעינה נכשלה",
      verifySuccess: "לאמת הצלחה",
      verifyError: "טעינה נכשלה, נסה שוב",
      verifyOutOfLimit: "יותר מדי כשלים, נסה שוב",
      clickButton: "לחץ על הלחצן כדי לאמת",
      clickInTurn: "לחץ בתורו",
      clickWordInTurn: "אנא לחץ על הטקסט לפי הסדר",
      slideTip: "גרור כדי להשלים את הפאזל",
      inferenceTip: "החלף שני אריחים כדי לשחזר את התמונה",
      waitForSMS: "מחכה SMS, הנותרים",
      popupTitle: "מלא את אימות האבטחה",
      intellisense: {
        normal: "לחץ על הלחצן כדי לאמת",
        checking: "בדיקת בטיחות",
        loading: "טעינה",
        loadfail: "טעינה נכשלה",
        loaddone: "מלא את אימות האבטחה"
      }
    },
    hi: {
      loading: "लोड हो रहा है...",
      loadfail: "लोड विफल हो गया",
      verifySuccess: "सफल सत्यापन",
      verifyError: "सत्यापित विफल। कृपया पुनः प्रयास करें",
      verifyOutOfLimit: "सत्यापित विफल। कृपया पुनः प्रयास करें",
      clickButton: "सत्यापित करने के लिए बटन पर क्लिक करें",
      clickInTurn: "क्लिक पर क्लिक करें",
      clickWordInTurn: "कृपया क्रम में पाठ पर क्लिक करें",
      slideTip: "पहेली को पूरा करने के लिए स्लाइडर खींचें",
      inferenceTip: "विनिमय दो टाइल वसूली नक्शे",
      waitForSMS: "एसएमएस की प्रतीक्षा कर रहा है, शेष",
      popupTitle: "कृपया सत्यापन पूरा करें",
      intellisense: {
        normal: "सत्यापित करने के लिए बटन पर क्लिक करें",
        checking: "पुष्टि करने",
        loading: "लोड हो रहा है",
        loadfail: "लोड विफल हो गया",
        loaddone: "कृपया सत्यापन पूरा करें"
      }
    },
    id: {
      loading: "pemuatan...",
      loadfail: "Pemuatan gagal",
      verifySuccess: "Verifikasi yang berhasil",
      verifyError: "Verifikasi gagal, coba lagi",
      verifyOutOfLimit: "Terlalu banyak kegagalan, coba lagi",
      clickButton: "Klik untuk menyelesaikan verifikasi",
      clickInTurn: "klik pada gilirannya",
      clickWordInTurn: "Silakan klik teksnya secara berurutan",
      slideTip: "Seret penggeser ke teka-teki",
      inferenceTip: "Tukar dua peta pemulihan ubin",
      waitForSMS: "Menunggu verifikasi SMS, tersisa",
      popupTitle: "Silakan lengkapi verifikasi keamanan",
      intellisense: {
        normal: "Klik untuk menyelesaikan verifikasi",
        checking: "Inspeksi keamanan",
        loading: "pemuatan",
        loadfail: "Pemuatan gagal",
        loaddone: "Klik untuk menyelesaikan verifikasi"
      }
    },
    my: {
      loading: "တင်...",
      loadfail: "ဝန်ရန်မအောင်မြင်ခဲ့ပါ",
      verifySuccess: "စိစစ်အတည်ပြု အောင်မြင်မှု",
      verifyError: "မအောင်မြင်အတည်ပြုရန်။ ထပ်ကြိုးစားပါ",
      verifyOutOfLimit: "မအောင်မြင်အတည်ပြုရန်။ ထပ်ကြိုးစားပါ",
      clickButton: "အတည်ပြုရန်ခလုတ်ကိုကလစ်နှိပ်ပါ",
      clickInTurn: "အလှည့်အတွက်ကိုကလစ်နှိပ်ပါ",
      clickWordInTurn: "ကျေးဇူးပြု၍ စာသားပေါ်တွင်ကလစ်နှိပ်ပါ",
      slideTip: "ပဟေဠိဖြည့်စွက်ဖို့ဆွဲ",
      inferenceTip: "လဲလှယ်ရေးနှစ်ခုအုပ်ကြွပ်ပြန်လည်နာလန်ထူပုံရိပ်",
      waitForSMS: "ယင်း SMS အတွက်စောင့်ဆိုင်းနေ,  ရှိနေဆဲ ",
      popupTitle: "စိစစ်အတည်ပြုဖြည့်စွက်ပေးပါ",
      intellisense: {
        normal: "အတည်ပြုရန်ခလုတ်ကိုကလစ်နှိပ်ပါ",
        checking: "အတည်ပြု",
        loading: "တင်",
        loadfail: "ဝန်ရန်မအောင်မြင်ခဲ့ပါ",
        loaddone: "စိစစ်အတည်ပြုဖြည့်စွက်ပေးပါ"
      }
    },
    lo: {
      loading: "ກໍາລັງໂຫລດ",
      loadfail: "ກໍາລັງໂຫລດ ບໍ່ຮູ້",
      verifySuccess: "ການຢັ້ງຢືນສົບຜົນສໍາເລັດ",
      verifyError: "ການຢືນຢັນໄດ້ລົ້ມເຫລວ, ກະລຸນາລອງອີກຄັ້ງ",
      verifyOutOfLimit: "ການຢືນຢັນໄດ້ລົ້ມເຫລວ, ກະລຸນາລອງອີກຄັ້ງ",
      clickButton: "ກົດເພື່ອໃຫ້ສໍາເລັດການຢັ້ງຢືນ",
      clickInTurn: "ກະລຸນາກົດ",
      clickWordInTurn: "ກະລຸນາກົດໃສ່ຂໍ້ຄວາມຕາມ ລຳ ດັບ",
      slideTip: "ລາກລາກລົງໄປທາງຂວາເພື່ອຕື່ມຂໍ້ມູນໃສ່ປິດ",
      inferenceTip: "ແລກປ່ຽນສອງໂລ້ເພື່ອເຮັດໃຫ້ຮູບພາບຄືນ",
      waitForSMS: "ລໍຖ້າການຢືນຢັນ SMS, ຍັງເຫຼືອ",
      popupTitle: "ກະລຸນາສໍາເລັດການກວດສອບຄວາມປອດໄພ",
      intellisense: {
        normal: "ກົດເພື່ອໃຫ້ສໍາເລັດການຢັ້ງຢືນ",
        checking: "ການກວດສອບຄວາມປອດໄພ",
        loading: "ກໍາລັງໂຫລດ",
        loadfail: "ກໍາລັງໂຫລດ ບໍ່ຮູ້",
        loaddone: "ກະລຸນາສໍາເລັດການກວດສອບຄວາມປອດໄພ"
      }
    },
    ms: {
      loading: "Memuatkan",
      loadfail: "Beban gagal",
      verifySuccess: "Pengesahan yang berjaya",
      verifyError: "Pengesahan gagal, sila cuba lagi",
      verifyOutOfLimit: "Gagal beberapa kali, klik Cuba lagi",
      clickButton: "Klik untuk menyelesaikan pengesahan",
      clickInTurn: "Sila klik",
      clickWordInTurn: "Sila klik teks mengikut urutan",
      slideTip: "Seret untuk menyelesaikan teka-teki",
      inferenceTip: "Tukar dua jubin untuk memulihkan imej",
      waitForSMS: "Menunggu pengesahan SMS, selebihnya",
      popupTitle: "Sila lengkapkan pengesahan",
      intellisense: {
        normal: "Klik untuk menyelesaikan pengesahan",
        checking: "Pemeriksaan keselamatan",
        loading: "Memuatkan",
        loadfail: "Beban gagal",
        loaddone: "Sila lengkapkan pengesahan"
      }
    },
    pl: {
      loading: "Ładowanie...",
      loadfail: "Ładowanie nie powiodło się",
      verifySuccess: "Pomyślna weryfikacja",
      verifyError: "Błąd, spróbuj ponownie",
      verifyOutOfLimit: "Zbyt wiele błędów, spróbuj ponownie",
      clickButton: "Kliknij, aby dokończyć weryfikację",
      clickInTurn: "kliknij po kolei",
      clickWordInTurn: "Proszę kliknąć tekst w kolejności",
      slideTip: "przeciągnij, aby ukończyć układankę",
      inferenceTip: "Wymień dwie mapy redukcji płytek",
      waitForSMS: "czekam na SMS-y, pozostałe",
      popupTitle: "Zakończ weryfikację zabezpieczeń",
      intellisense: {
        normal: "Kliknij, aby dokończyć weryfikację",
        checking: "Inspekcja bezpieczeństwa",
        loading: "Ładowanie",
        loadfail: "Ładowanie nie powiodło się",
        loaddone: "Zakończ weryfikację zabezpieczeń"
      }
    },
    pt: {
      loading: "Carregando...",
      loadfail: "Carga falhou",
      verifySuccess: "Verificação bem sucedida",
      verifyError: "Falhou, por favor tente novamente",
      verifyOutOfLimit: "Muitas falhas, clique em Repetir",
      clickButton: "Clique para concluir a confirmação",
      clickInTurn: "Clique por sua vez",
      clickWordInTurn: "Por favor, clique no texto em ordem",
      slideTip: "Arraste para completar o quebra-cabeça",
      inferenceTip: "Troque dois mapas de redução de blocos",
      waitForSMS: "Aguardando SMS, permanecendo",
      popupTitle: "Por favor complete a verificação",
      intellisense: {
        normal: "Clique para concluir a confirmação",
        checking: "Na detecção de segurança",
        loading: "Carregando",
        loadfail: "Carga falhou",
        loaddone: "Por favor complete a verificação"
      }
    },
    es: {
      loading: "Cargando...",
      loadfail: "Falló la carga",
      verifySuccess: "Verificación exitosa",
      verifyError: "Falló, por favor intente de nuevo",
      verifyOutOfLimit: "Demasiados fallos, haga clic en Reintentar",
      clickButton: "Haga clic para completar la verificación",
      clickInTurn: "Por favor haga clic",
      clickWordInTurn: "Por favor haga clic en el texto en orden",
      slideTip: "Arrastra para completar el puzzle",
      inferenceTip: "Intercambia mapas de reducción de fichas",
      waitForSMS: "esperando SMS, restantes",
      popupTitle: "Por favor complete la verificación",
      intellisense: {
        normal: "Haga clic para completar la verificación",
        checking: "Inspección de seguridad",
        loading: "Cargando",
        loadfail: "Falló la carga",
        loaddone: "Haga clic para completar la verificación"
      }
    },
    tr: {
      loading: "Yükleniyor",
      loadfail: "Yükleme başarısız",
      verifySuccess: "Başarılı doğrulama",
      verifyError: "Başarısız, lütfen tekrar deneyin",
      verifyOutOfLimit: "Çok fazla hata var, lütfen tekrar deneyin",
      clickButton: "Doğrulamayı tamamlamak için tıklayın",
      clickInTurn: "sırayla tıkla",
      clickWordInTurn: "Lütfen sırayla metne tıklayın",
      slideTip: "Bulmacayı tamamlamak için sürükleyin",
      inferenceTip: "İki kutu kurtarma haritasını değiştirin",
      waitForSMS: "SMS beklemek ， kalan",
      popupTitle: "Lütfen doğrulama işlemini tamamlayın",
      intellisense: {
        normal: "Doğrulamayı tamamlamak için tıklayın",
        checking: "doğrulama",
        loading: "Yükleniyor",
        loadfail: "Yükleme başarısız",
        loaddone: "Lütfen doğrulama işlemini tamamlayın"
      }
    }
  };
}, function (e, t) {
  var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  };
  !function () {
    function i(e) {
      if (null == e) return null;

      for (var n = [], i = 0, r = e.length; i < r; i++) {
        var o = e[i];
        n[i] = ne[(o >>> 4 & 15) * 16 + (o & 15)];
      }

      return n;
    }

    function r(e) {
      var n = [];
      if (null == e || void 0 == e || e.length == 0) return f(re);

      if (e.length >= re) {
        var n = 0;
        var i = [];

        if (null != e && e.length != 0) {
          if (e.length < re) throw Error("1003");

          for (var r = 0; r < re; r++) i[r] = e[n + r];
        }

        return i;
      }

      for (i = 0; i < re; i++) n[i] = e[i % e.length];

      return n;
    }

    function o(e) {
      var n = 4294967295;
      if (null != e) for (var i = 0; i < e.length; i++) n = n >>> 8 ^ te[(n ^ e[i]) & 255];
      if (e = j(n ^ 4294967295), n = e.length, null == e || n < 0) e = new String("");else {
        for (var i = [], r = 0; r < n; r++) i.push(p(e[r]));

        e = i.join("");
      }
      return e;
    }

    function a(e, n, i) {
      var r;
      var o = ["2", "4", "0", "a", "Y", "H", "i", "Q", "x", "L", "\\", "Z", "u", "f", "V", "l", "g", "8", "s", "P", "M", "R", "6", "d", "G", "k", "X", "v", "O", "/", "C", "b", "w", "9", "W", "D", "j", "1", "E", "T", "y", "I", "S", "c", "m", "e", "o", "J", "z", "3", "7", "q", "t", "h", "B", "r", "U", "+", "K", "N", "A", "5", "p", "n"];
      var a = "F";
      var s = [];

      if (i == 1) {
        i = e[n];
        r = 0;
        s.push(o[i >>> 2 & 63]);
        s.push(o[(i << 4 & 48) + (r >>> 4 & 15)]);
        s.push(a);
        s.push(a);
      } else if (i == 2) {
        i = e[n];
        r = e[n + 1];
        e = 0;
        s.push(o[i >>> 2 & 63]);
        s.push(o[(i << 4 & 48) + (r >>> 4 & 15)]);
        s.push(o[(r << 2 & 60) + (e >>> 6 & 3)]);
        s.push(a);
      } else {
        if (i != 3) throw Error("1010");
        i = e[n];
        r = e[n + 1];
        e = e[n + 2];
        s.push(o[i >>> 2 & 63]);
        s.push(o[(i << 4 & 48) + (r >>> 4 & 15)]);
        s.push(o[(r << 2 & 60) + (e >>> 6 & 3)]);
        s.push(o[e & 63]);
      }

      return s.join("");
    }

    function f(e) {
      for (var n = [], i = 0; i < e; i++) n[i] = 0;

      return n;
    }

    function c(e, n, i, r, o) {
      if (null != e && e.length != 0) {
        if (null == i) throw Error("1004");
        if (e.length < o) throw Error("1003");

        for (var a = 0; a < o; a++) i[r + a] = e[n + a];
      }
    }

    function j(e) {
      var n = [];
      n[0] = e >>> 24 & 255;
      n[1] = e >>> 16 & 255;
      n[2] = e >>> 8 & 255;
      n[3] = e & 255;
      return n;
    }

    function d(e) {
      if (null == e || void 0 == e) return e;
      e = encodeURIComponent(e);

      for (var n = [], i = e.length, r = 0; r < i; r++) if (e.charAt(r) == "%") {
        if (!(r + 2 < i)) throw Error("1009");
        n.push(h(e.charAt(++r) + "" + e.charAt(++r))[0]);
      } else n.push(e.charCodeAt(r));

      return n;
    }

    function h(e) {
      if (null == e || e.length == 0) return [];
      e = new String(e);

      for (var n = [], i = e.length / 2, r = 0, o = 0; o < i; o++) {
        var a = parseInt(e.charAt(r++), 16) << 4;
        var s = parseInt(e.charAt(r++), 16);
        n[o] = b(a + s);
      }

      return n;
    }

    function p(e) {
      var n = [];
      n.push(ee[e >>> 4 & 15]);
      n.push(ee[e & 15]);
      return n.join("");
    }

    function y(e, n) {
      if (null == e || null == n || e.length != n.length) return e;

      for (var i = [], r = 0, o = e.length; r < o; r++) i[r] = v(e[r], n[r]);

      return i;
    }

    function v(e, t) {
      e = b(e);
      t = b(t);
      return b(e ^ t);
    }

    function g(e, t) {
      return b(e + t);
    }

    function b(e) {
      if (e < -128) return b(128 - (-128 - e));
      if (e >= -128 && e <= 127) return e;
      if (e > 127) return b(-129 + e - 127);
      throw Error("1001");
    }

    function m(i) {
      function r() {
        for (var n = ["Abadi MT Condensed Light", "Adobe Fangsong Std", "Adobe Hebrew", "Adobe Ming Std", "Agency FB", "Arab", "Arabic Typesetting", "Arial Black", "Batang", "Bauhaus 93", "Bell MT", "Bitstream Vera Serif", "Bodoni MT", "Bookman Old Style", "Braggadocio", "Broadway", "Calibri", "Californian FB", "Castellar", "Casual", "Centaur", "Century Gothic", "Chalkduster", "Colonna MT", "Copperplate Gothic Light", "DejaVu LGC Sans Mono", "Desdemona", "DFKai-SB", "Dotum", "Engravers MT", "Eras Bold ITC", "Eurostile", "FangSong", "Forte", "Franklin Gothic Heavy", "French Script MT", "Gabriola", "Gigi", "Gisha", "Goudy Old Style", "Gulim", "GungSeo", "Haettenschweiler", "Harrington", "Hiragino Sans GB", "Impact", "Informal Roman", "KacstOne", "Kino MT", "Kozuka Gothic Pr6N", "Lohit Gujarati", "Loma", "Lucida Bright", "Lucida Fax", "Magneto", "Malgun Gothic", "Matura MT Script Capitals", "Menlo", "MingLiU-ExtB", "MoolBoran", "MS PMincho", "MS Reference Sans Serif", "News Gothic MT", "Niagara Solid", "Nyala", "Palace Script MT", "Papyrus", "Perpetua", "Playbill", "PMingLiU", "Rachana", "Rockwell", "Sawasdee", "Script MT Bold", "Segoe Print", "Showcard Gothic", "SimHei", "Snap ITC", "TlwgMono", "Tw Cen MT Condensed Extra Bold", "Ubuntu", "Umpush", "Univers", "Utopia", "Vladimir Script", "Wide Latin", "仿宋", "华文中宋", "华文仿宋", "华文宋体", "华文彩云", "华文新魏", "华文楷体", "华文琥珀", "华文细黑", "华文行楷", "华文隶书", "宋体", "幼圆", "微软雅黑", "新宋体", "方正姚体", "方正舒体", "楷体", "隶书", "黑体", "新细明体", "细明体", "标楷体", "仿宋_GB2312", "楷体_GB2312", "微软正黑体", "华文黑体", "丽黑 Pro", "丽宋 Pro", "苹果丽中黑", "苹果丽细宋"], i = [], r = 0; r < n.length; r++) try {
          var a = n[r];
          o()(a) && i.push(a);
        } catch (f) {}

        return i.join(";");
      }

      function o() {
        function n(t) {
          var n = {};
          c.style.fontFamily = t;
          f.appendChild(c);
          n.height = c.offsetHeight;
          n.width = c.offsetWidth;
          f["removeChild"](c);
          return n;
        }

        var i = ["monospace", "sans-serif", "serif"];
        var r = [];
        var o = "wwwmmmmmmmmmmlli";
        var a = "72px";
        var f = G["body"];
        var c = G["createElement"]("span");

        for (c.style.fontSize = a, c.style.visibility = "hidden", c.innerHTML = o, o = 0; o < i.length; o++) r[o] = n(i[o]);

        return function (e) {
          for (var o = 0; o < r.length; o++) {
            var a = n(e + "," + i[o]);
            var s = r[o];
            if (a.height !== s.height || a.width !== s.width) return !0;
          }

          return !1;
        };
      }

      function a() {
        var t = null;
        var n = null;
        var i = [];

        try {
          n = G["createElement"]("canvas");
          t = n["getContext"]("webgl") || n["getContext"]("experimental-webgl");
        } catch (r) {}

        if (!t) return i;

        try {
          i.push(t["getSupportedExtensions"]());
        } catch (o) {}

        try {
          i.push(f(t, n));
        } catch (a) {}

        return i.join(";");
      }

      function f(n, i) {
        try {
          var r = "attribute vec2 attrVertex; varying vec2 varyinTexCoordinate; uniform vec2 uniformOffset; void main() {   varyinTexCoordinate = attrVertex + uniformOffset;   gl_Position = vec4(attrVertex, 0, 1); }";
          var o = "precision mediump float; varying vec2 varyinTexCoordinate; void main() {   gl_FragColor = vec4(varyinTexCoordinate, 0, 1); }";
          var a = n["createBuffer"]();
          n["bindBuffer"](n["ARRAY_BUFFER"], a);
          var l = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0]);
          n.bufferData(n["ARRAY_BUFFER"], l, n["STATIC_DRAW"]);
          a.k = 3;
          a.l = 3;
          var f = n["createProgram"]();
          var c = n["createShader"](n["VERTEX_SHADER"]);
          n["shaderSource"](c, r);
          n["compileShader"](c);
          var j = n["createShader"](n["FRAGMENT_SHADER"]);
          n["shaderSource"](j, o);
          n["compileShader"](j);
          n["attachShader"](f, c);
          n["attachShader"](f, j);
          n["linkProgram"](f);
          n["useProgram"](f);
          f.n = n["getAttribLocation"](f, "attrVertex");
          f.m = n["getUniformLocation"](f, "uniformOffset");
          n["enableVertexAttribArray"](f.o);
          n["vertexAttribPointer"](f.n, a.k, n.FLOAT, !1, 0, 0);
          n["uniform2f"](f.m, 1, 1);
          n["drawArrays"](n["TRIANGLE_STRIP"], 0, a.l);
          return _(i["toDataURL"]());
        } catch (d) {
          return "webgl exception";
        }
      }

      function c() {
        var n = G["createElement"]("div");
        var i = [];
        var r = ["ActiveBorder", "ActiveCaption", "AppWorkspace", "Background", "ButtonFace", "ButtonHighlight", "ButtonShadow", "ButtonText", "CaptionText", "GrayText", "Highlight", "HighlightText", "InactiveBorder", "InactiveCaption", "InactiveCaptionText", "InfoBackground", "InfoText", "Menu", "MenuText", "Scrollbar", "ThreeDDarkShadow", "ThreeDFace", "ThreeDHighlight", "ThreeDLightShadow", "ThreeDShadow", "Window", "WindowFrame", "WindowText"];
        if (!window["getComputedStyle"]) return i.join("");

        for (var o = 0; o < r.length; o++) try {
          G["body"].appendChild(n);
          n.style.color = r[o];
          i.push(r[o]);
          i.push(window["getComputedStyle"](n).getPropertyValue("color"));
          G["body"]["removeChild"](n);
        } catch (a) {
          i.push("get system colors exception");
        }

        return i.join(":");
      }

      function j() {
        try {
          var n = G["createElement"]("canvas");
          var i = n["getContext"]("2d");
          var r = "mwC nkbafjord phsgly exvt zqiu, ὠ tphst/:/uhbgtic.mo/levva";
          i["textBaseline"] = "top";
          i["font"] = "70px 'Arial'";
          i["textBaseline"] = "alphabetic";
          i["fillStyle"] = "#f60";
          i["fillRect"](125, 1, 62, 20);
          i["fillStyle"] = "#069";
          i.fillText(r, 2, 15);
          i["fillStyle"] = "rgba(102, 204, 0, 0.7)";
          i.fillText(r, 4, 17);
          return n["toDataURL"]();
        } catch (o) {
          return "canvas api exception";
        }
      }

      function d() {
        try {
          return window["ActiveXObject"] && m.h ? p() : h();
        } catch (t) {
          return "get plugin string exception";
        }
      }

      function h() {
        if (!J["plugins"]) return "";
        var n = ["4game", "AdblockPlugin", "AdobeExManCCDetect", "AdobeExManDetect", "Alawar NPAPI utils", "Aliedit Plug-In", "Alipay Security Control 3", "AliSSOLogin plugin", "AmazonMP3DownloaderPlugin", "AOL Media Playback Plugin", "AppUp", "ArchiCAD", "AVG SiteSafety plugin", "Babylon ToolBar", "Battlelog Game Launcher", "BitCometAgent", "Bitdefender QuickScan", "BlueStacks Install Detector", "CatalinaGroup Update", "Citrix ICA Client", "Citrix online plug-in", "Citrix Receiver Plug-in", "Coowon Update", "DealPlyLive Update", "Default Browser Helper", "DivX Browser Plug-In", "DivX Plus Web Player", "DivX VOD Helper Plug-in", "doubleTwist Web Plugin", "Downloaders plugin", "downloadUpdater", "eMusicPlugin DLM6", "ESN Launch Mozilla Plugin", "ESN Sonar API", "Exif Everywhere", "Facebook Plugin", "File Downloader Plug-in", "FileLab plugin", "FlyOrDie Games Plugin", "Folx 3 Browser Plugin", "FUZEShare", "GDL Object Web Plug-in 16.00", "GFACE Plugin", "Ginger", "Gnome Shell Integration", "Google Earth Plugin", "Google Earth Plug-in", "Google Gears 0.5.33.0", "Google Talk Effects Plugin", "Google Update", "Harmony Firefox Plugin", "Harmony Plug-In", "Heroes & Generals live", "HPDetect", "Html5 location provider", "IE Tab plugin", "iGetterScriptablePlugin", "iMesh plugin", "Kaspersky Password Manager", "LastPass", "LogMeIn Plugin 1.0.0.935", "LogMeIn Plugin 1.0.0.961", "Ma-Config.com plugin", "Microsoft Office 2013", "MinibarPlugin", "Native Client", "Nitro PDF Plug-In", "Nokia Suite Enabler Plugin", "Norton Identity Safe", "npAPI Plugin", "NPLastPass", "NPPlayerShell", "npTongbuAddin", "NyxLauncher", "Octoshape Streaming Services", "Online Storage plug-in", "Orbit Downloader", "Pando Web Plugin", "Parom.TV player plugin", "PDF integrado do WebKit", "PDF-XChange Viewer", "PhotoCenterPlugin1.1.2.2", "Picasa", "PlayOn Plug-in", "QQ2013 Firefox Plugin", "QQDownload Plugin", "QQMiniDL Plugin", "QQMusic", "RealDownloader Plugin", "Roblox Launcher Plugin", "RockMelt Update", "Safer Update", "SafeSearch", "Scripting.Dictionary", "SefClient Plugin", "Shell.UIHelper", "Silverlight Plug-In", "Simple Pass", "Skype Web Plugin", "SumatraPDF Browser Plugin", "Symantec PKI Client", "Tencent FTN plug-in", "Thunder DapCtrl NPAPI Plugin", "TorchHelper", "Unity Player", "Uplay PC", "VDownloader", "Veetle TV Core", "VLC Multimedia Plugin", "Web Components", "WebKit-integrierte PDF", "WEBZEN Browser Extension", "Wolfram Mathematica", "WordCaptureX", "WPI Detector 1.4", "Yandex Media Plugin", "Yandex PDF Viewer", "YouTube Plug-in", "zako"];
        var i = [];
        var r = {};
        i.push(y(J["plugins"], function (e) {
          r[e.name] = 1;
          var n = y(e, function (e) {
            return [e.type, e.suffixes].join("~");
          }).join(",");
          return [e.name, e.description, n].join("::");
        }, this).join("$"));
        i.push(y(n, function (e) {
          if (r[e]) return "";
          if (e = J["plugins"][e], !e) return "";
          var t = y(e, function (e) {
            return [e.type, e.suffixes].join("~");
          }).join(",");
          return [e.name, e.description, t].join("::");
        }, this).join(";"));
        return i.join(";");
      }

      function p() {
        return window["ActiveXObject"] ? y(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "rmocx.RealPlayer G2 Control", "Scripting.Dictionary", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "SWCtl.SWCtl", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX"], function (t) {
          try {
            new window["ActiveXObject"](t);
            return t;
          } catch (n) {
            return null;
          }
        }).join(";") : "";
      }

      function y(e, t, n) {
        var i = [];
        return null == e ? i : b && e.map === b ? e.map(t, n) : (v(e, function (e, r, o) {
          i[i.length] = t.call(n, e, r, o);
        }), i);
      }

      function v(e, n) {
        if (null !== e) if (g && e.forEach === g) e.forEach(n, void 0);else if (e.length === +e.length) for (var i = 0, r = e.length; i < r && n.call(void 0, e[i], i, e) !== {}; i++);else for (i in e) if (e.hasOwnProperty(i) && n.call(void 0, e[i], i, e) === {}) break;
      }

      var g = Array.prototype.forEach;
      var b = Array.prototype.map;
      var m = {
        e: _,
        j: !0,
        i: !0,
        h: !0,
        b: !0,
        a: !0
      };
      ("undefined" == typeof i ? "undefined" : n(i)) == "function" ? m.e = i : (null != i.b && void 0 != i.b && (m.b = i.b), null != i.a && void 0 != i.a && (m.a = i.a));

      this.get = function () {
        var i = [];
        var o = [];

        if (K) {
          var l;

          try {
            l = !!window["sessionStorage"];
          } catch (f) {
            l = !0;
          }

          i.push(l);
          var h;

          try {
            h = !!window["localStorage"];
          } catch (p) {
            h = !0;
          }

          if (i.push(h), i.push(!!window["indexedDB"]), G["body"] ? i.push(n(G["body"]["addBehavior"])) : i.push("undefined"), i.push(n(window["openDatabase"])), i.push(J["cpuClass"]), i.push(J["platform"]), l = m.i) try {
            var y = G["createElement"]("canvas");
            l = !(!y["getContext"] || !y["getContext"]("2d"));
          } catch (v) {
            l = !1;
          }
          if (l) try {
            i.push(j());
            m.b && i.push(a());
          } catch (g) {
            i.push("canvas exception");
          }
          i.push(c());
          m.a && o.push(r());
          o.push(J["userAgent"]);
          o.push(J["language"]);
          o.push(window["screen"]["colorDepth"]);
          m.j && (y = window["screen"] ? [window["screen"].height, window["screen"].width] : [0, 0], ("undefined" == typeof y ? "undefined" : n(y)) !== "undefined" && o.push(y.join("x")));
          o.push(new Date()["getTimezoneOffset"]());
          o.push(J["doNotTrack"]);
          o.push(d());
        }

        y = [];
        m.e ? (y.push(m.e(i.join("###"))), y.push(m.e(o.join("###")))) : (y.push(_(i.join("###"))), y.push(_(o.join("###"))));
        return y;
      };
    }

    function _(e) {
      var n;
      var i;
      var r;
      var o;
      var a;
      var s;
      var u = 31;

      for (n = e.length & 3, i = e.length - n, r = u, u = 3432918353, o = 461845907, s = 0; s < i;) {
        a = e.charCodeAt(s) & 255 | (e.charCodeAt(++s) & 255) << 8 | (e.charCodeAt(++s) & 255) << 16 | (e.charCodeAt(++s) & 255) << 24;
        ++s;
        a = (a & 65535) * u + (((a >>> 16) * u & 65535) << 16) & 4294967295;
        a = a << 15 | a >>> 17;
        a = (a & 65535) * o + (((a >>> 16) * o & 65535) << 16) & 4294967295;
        r ^= a;
        r = r << 13 | r >>> 19;
        r = (r & 65535) * 5 + (((r >>> 16) * 5 & 65535) << 16) & 4294967295;
        r = (r & 65535) + 27492 + (((r >>> 16) + 58964 & 65535) << 16);
      }

      switch (a = 0, n) {
        case 3:
          a ^= (e.charCodeAt(s + 2) & 255) << 16;

        case 2:
          a ^= (e.charCodeAt(s + 1) & 255) << 8;

        case 1:
          a ^= e.charCodeAt(s) & 255;
          a = (a & 65535) * u + (((a >>> 16) * u & 65535) << 16) & 4294967295;
          a = a << 15 | a >>> 17;
          a = (a & 65535) * o + (((a >>> 16) * o & 65535) << 16) & 4294967295;
          r ^= a;
      }

      r ^= e.length;
      r ^= r >>> 16;
      r = (r & 65535) * 2246822507 + (((r >>> 16) * 2246822507 & 65535) << 16) & 4294967295;
      r ^= r >>> 13;
      r = (r & 65535) * 3266489909 + (((r >>> 16) * 3266489909 & 65535) << 16) & 4294967295;
      r ^= r >>> 16;
      e = r >>> 0;
      n = [];
      n.push(e);

      try {
        for (var f, c = e + "", j = 0, d = 0, h = 0; h < c.length; h++) try {
          var p = parseInt(c.charAt(h) + "");
          var j = p || p === 0 ? j + p : j + 1;
          d++;
        } catch (y) {
          j += 1;
          d++;
        }

        d = d == 0 ? 1 : d;
        f = w(j * 1 / d, Q);

        for (var v, g = Math.floor(f / Math.pow(10, Q - 1)), b = e + "", m = 0, _ = 0, E = 0, R = 0, k = 0; k < b.length; k++) try {
          var C = parseInt(b.charAt(k) + "");
          C || C === 0 ? C < g ? (_++, m += C) : (R++, E += C) : (R++, E += g);
        } catch (O) {
          R++;
          E += g;
        }

        R = R == 0 ? 1 : R;
        _ = _ == 0 ? 1 : _;
        v = w(E * 1 / R - m * 1 / _, Z);
        n.push(T(f, Q, "0"));
        n.push(T(v, Z, "0"));
      } catch (I) {
        n = [];
        n.push(e);
        n.push(S(Q, "-").join(""));
        n.push(S(Z, "-").join(""));
      }

      return n.join("");
    }

    function w(e, n) {
      if (e < 0 || e >= 10) throw Error("1110");

      for (var i = S(n, "0"), r = "" + e, o = 0, a = 0; o < i.length && a < r.length; a++) r.charAt(a) != "." && (i[o++] = r.charAt(a));

      return parseInt(i.join(""));
    }

    function T(e, t, n) {
      if (e = "" + e, e.length > t) throw Error("1111");
      if (e.length == t) return e;

      for (var i = [], r = e.length; r < t; r++) i.push(n);

      i.push(e);
      return i.join("");
    }

    function S(e, n) {
      if (e <= 0) return [0];

      for (var i = [], r = 0; r < e; r++) i.push(n);

      return i;
    }

    function E(e) {
      return null == e || void 0 == e;
    }

    function R(e, t, n) {
      this.f = e;
      this.c = t;
      this.g = !!E(n) || n;
    }

    function k(e) {
      if (E(e) || E(e.f) || E(e.c)) return !1;

      try {
        if (E(window[e.f])) return !1;
      } catch (t) {
        return !1;
      }

      return !0;
    }

    function C(e, n) {
      if (E(e)) return "";

      for (var i = 0; i < e.length; i++) {
        var r = e[i];
        if (!E(r) && r.f == n) return r;
      }
    }

    function O() {
      var n;

      e: {
        if (!E(z)) for (n = 0; n < z.length; n++) {
          var i = z[n];

          if (i.g && !k(i)) {
            n = i;
            break e;
          }
        }
        n = null;
      }

      var r;

      if (E(n)) {
        try {
          r = window.parseFloat("1.01") === 1.01 && window.isNaN(window.parseFloat("HELLO"));
        } catch (o) {
          r = !1;
        }

        if (r) {
          var a;

          try {
            a = window.parseInt("123") === 123 && window.isNaN(window.parseInt("HELLO"));
          } catch (f) {
            a = !1;
          }

          if (a) {
            var c;

            try {
              c = window.decodeURI("%22") === "\"";
            } catch (j) {
              c = !1;
            }

            if (c) {
              var d;

              try {
                d = window.decodeURIComponent("%26") === "&";
              } catch (h) {
                d = !1;
              }

              if (d) {
                var p;

                try {
                  p = window.encodeURI("\"") === "%22";
                } catch (y) {
                  p = !1;
                }

                if (p) {
                  var v;

                  try {
                    v = window.encodeURIComponent("&") === "%26";
                  } catch (g) {
                    v = !1;
                  }

                  if (v) {
                    var b;

                    try {
                      b = window.escape("&") === "%26";
                    } catch (m) {
                      b = !1;
                    }

                    if (b) {
                      var _;

                      try {
                        _ = window.unescape("%26") === "&";
                      } catch (w) {
                        _ = !1;
                      }

                      if (_) {
                        var T;

                        try {
                          T = window.eval("(function(){return 123;})();") === 123;
                        } catch (S) {
                          T = !1;
                        }

                        r = T ? null : C(z, "eval");
                      } else r = C(z, "unescape");
                    } else r = C(z, "escape");
                  } else r = C(z, "encodeURIComponent");
                } else r = C(z, "encodeURI");
              } else r = C(z, "decodeURIComponent");
            } else r = C(z, "decodeURI");
          } else r = C(z, "parseInt");
        } else r = C(z, "parseFloat");
      } else r = n;

      return r;
    }

    function I() {
      var t = O();
      if (!E(t)) return t.c;

      try {
        t = E(window["phantom"]) || E(window["phantom"]["injectJs"]) ? null : C(z, "phantom.injectJs");
      } catch (n) {
        t = null;
      }

      if (!E(t)) return t.c;

      try {
        t = E(context) || E(context["hashCode"]) ? null : C(z, "context.hashCode");
      } catch (i) {
        t = null;
      }

      return E(t) ? null : t.c;
    }

    function $(e) {
      for (var n = [], i = 0; i < e; i++) {
        var r = Math.random() * je;
        var r = Math.floor(r);
        n.push(ce.charAt(r));
      }

      return n.join("");
    }

    function X(e) {
      for (var n = (G["cookie"] || "").split("; "), i = 0; i < n.length; i++) {
        var r = n[i].indexOf("=");

        if (r >= 0) {
          var o = n[i].substring(r + 1, n[i].length);
          if (n[i].substring(0, r) == e) return window.decodeURIComponent(o);
        }
      }

      return null;
    }

    function x(i) {
      var r = ["v", "fp", "u", "h", "ec", "em", "icp"];
      var o = "";
      if (null == i || void 0 == i) return i;

      if (("undefined" == typeof i ? "undefined" : n(i)) == ["ob", "je", "ct"].join("")) {
        for (var o = o + "{", a = 0; a < r.length; a++) if (i.hasOwnProperty(r[a])) {
          var f;
          var c = "'" + r[a] + "':'";
          f = "" + i[r[a]];
          f = null == f || void 0 == f ? f : f.replace(/'/g, "\\'").replace(/"/g, "\"");
          o += c + f + "',";
        }

        o.charAt(o.length - 1) == "," && (o = o.substring(0, o.length - 1));
        return o += "}";
      }

      return null;
    }

    function A(t, n, i, r) {
      var o = [];
      o.push(t + "=" + encodeURIComponent(n));
      i && (t = new Date(), t = new Date(r), r = t["toGMTString"](), o.push("; "), o.push("ex"), o.push("pi"), o.push("re"), o.push("s="), o.push(r));
      o.push("; ");
      o.push("pa");
      o.push("th=/");
      null != ge && void 0 != ge && ge != "" && (o.push("; "), o.push("do"), o.push("mai"), o.push("n="), o.push(ge));
      G["cookie"] = o.join("");
    }

    function P(e) {
      window[be] = e;
    }

    function N(e) {
      window[me] = e;
    }

    function M(e, n) {
      for (var i = [], r = 0; r < n; r++) i.push(e);

      return i.join("");
    }

    function D(e, t) {
      var n = X(e);
      null !== n && void 0 !== n && n !== "" || A(e, t, !1);
    }

    function L() {
      var e = X(ue);
      null != e && void 0 != e && e != "" || (e = window[me]);
      return e;
    }

    function V() {
      var e = L();
      if (null == e || void 0 == e || e == "") return !1;

      try {
        return !!((e = parseInt(e)) && e >= fe);
      } catch (t) {
        return !1;
      }
    }

    function B(e) {
      return null == e || void 0 == e || e == "" ? null : (e = e.split(":"), e.length < 2 || !/^[0-9]+$/gi.test("rmocx.RealPlayer G2 Control") ? null : parseInt("rmocx.RealPlayer G2 Control"));
    }

    function Y() {
      var e = X(le);
      null != e && void 0 != e && e != "" || (e = window[be]);
      return e;
    }

    function F() {
      var e = Y();
      return null == e || void 0 == e || e == "" ? 0 : (e = B(e), null == e ? 0 : e - (de - he) - new window["Date"]()["getTime"]());
    }

    function U(n, i) {
      var r = new window["Date"]();
      r["setTime"](r["getTime"]() - 10000);
      window["document"]["cookie"] = null == i || void 0 == i || i == "" ? n + "=null; path=/; expires=" + r["toGMTString"]() : n + "=null; path=/; domain=" + i + "; expires=" + r["toGMTString"]();
    }

    function H() {
      if (!(null == _e || void 0 == _e || _e.length <= 0)) for (var e = 0; e < _e.length; e++) {
        var n = _e[e];
        (null != ge && void 0 != ge && ge != "" || null != n && void 0 != n && n != "") && ge != n && (U(le, n), U(ue, n));
      }
    }

    function W() {
      H();
      window[me] = null;
      window[be] = null;
      var e = !0;
      var n = {
        v: "v1.1"
      };
      var h = I();
      h && (n["icp"] = h);
      h = null;
      n["h"] = q;
      var p = new window["Date"]()["getTime"]() + de;

      var _ = p + 1000 * 60 * 60 * 24 * 365 * 5;

      n["u"] = $(3) + p + $(3);

      try {
        var w = new m({
          b: ye,
          a: pe
        }).get();
        null != w && void 0 != w && w.length > 0 ? n["fp"] = w.join(",") : (n["fp"] = M("0", 10), n["ec"] = "1", e = !1);
      } catch (T) {
        n["fp"] = M("0", 10);
        n["ec"] = "1";
        e = !1;
      }

      try {
        var S = h = x(n);
        var n = se;
        if (null == n || void 0 == n) throw Error("1008");
        null != S && void 0 != S || (S = "");
        var E;
        var w = S;
        E = o(null == S ? [] : d(S));
        var R = d(w + E);
        var k = d(n);
        null == R && (R = []);
        E = [];

        for (var C = 0; C < ae; C++) {
          var O = Math.random() * 256;
          var O = Math.floor(O);
          E[C] = b(O);
        }

        var X;
        var k = r(k);
        var k = y(k, r(E));
        var C = k = r(k);
        if (null == R || void 0 == R || R.length == 0) X = f(ie);else {
          var L = R.length;
          var V = 0;
          var V = L % ie <= ie - oe ? ie - L % ie - oe : ie * 2 - L % ie - oe;
          var O = [];
          c(R, 0, O, 0, L);

          for (var B = 0; B < V; B++) O[L + B] = 0;

          c(j(L), 0, O, L + V, oe);
          X = O;
        }
        if (L = X, null == L || L.length % ie != 0) throw Error("1005");
        X = [];

        for (var Y = 0, F = L.length / ie, U = 0; U < F; U++) {
          X[U] = [];

          for (var z = 0; z < ie; z++) X[U][z] = L[Y++];
        }

        Y = [];
        c(E, 0, Y, 0, ae);

        for (var K = X.length, G = 0; G < K; G++) {
          var J;
          var Q;
          var Z = X[G];
          if (null == Z) Q = null;else {
            for (var ee = b(37), F = [], te = Z.length, ne = 0; ne < te; ne++) F.push(v(Z[ne], ee));

            Q = F;
          }
          var re;
          if (F = Q, null == F) re = null;else {
            for (var ce = b(35), U = [], je = F.length, ve = 0; ve < je; ve++) U.push(v(F[ve], ce--));

            re = U;
          }
          if (F = re, null == F) J = null;else {
            for (var ge = b(-44), U = [], _e = F.length, we = 0; we < _e; we++) U.push(g(F[we], ge++));

            J = U;
          }
          var Te;
          var Se = y(J, k);
          if (F = Se, U = C, null == F) Te = null;else if (null == U) Te = F;else {
            for (var z = [], Ee = U.length, Re = 0, ke = F.length; Re < ke; Re++) z[Re] = b(F[Re] + U[Re % Ee]);

            Te = z;
          }
          var Se = y(Te, C);
          var Ce = i(Se);
          var Ce = i(Ce);
          c(Ce, 0, Y, G * ie + ae, ie);
          C = Ce;
        }

        var Oe;
        if (null == Y || void 0 == Y) Oe = null;else if (Y.length == 0) Oe = "";else {
          var Ie = 3;

          try {
            for (var K = [], $e = 0; $e < Y.length;) {
              if (!($e + Ie <= Y.length)) {
                K.push(a(Y, $e, Y.length - $e));
                break;
              }

              K.push(a(Y, $e, Ie));
              $e += Ie;
            }

            Oe = K.join("");
          } catch (Xe) {
            throw Error("1010");
          }
        }
        h = Oe;
      } catch (xe) {
        h = x({
          ec: "2",
          em: xe.message
        });
        e = !1;
      }

      h = h + ":" + p;
      A(le, h, e, _);
      D(le, h);
      P(h);
      A(ue, fe, e, _);
      D(ue, fe);
      N(fe);
      window["setTimeout"] && window["setTimeout"](W, he);
    }

    R.prototype = {
      toString: function () {
        return "{'name':" + this.f + ", 'code':" + this.c + ", 'browserProp':" + this.g + "}";
      }
    };
    var z = [new R("window", "0000"), new R("document", "0001"), new R("navigator", "0002"), new R("location", "0003"), new R("history", "0004"), new R("screen", "0007"), new R("parent", "0008"), new R("top", "0009"), new R("self", "0010"), new R("parseFloat", "0100"), new R("parseInt", "0101"), new R("decodeURI", "0102"), new R("decodeURIComponent", "0103"), new R("encodeURI", "0104"), new R("encodeURIComponent", "0105"), new R("escape", "0106"), new R("unescape", "0107"), new R("eval", "0108"), new R("_phantom", "0200", !1), new R("callPhantom", "0201", !1), new R("phantom", "0202", !1), new R("phantom.injectJs", "0203", !1), new R("context.hashCode", "0211", !1)];
    var K = !O();
    var q = window && window["location"] && window["location"].host || "not_exist_host";
    var G = window["document"];
    var J = window["navigator"];
    var Q = 2;
    var Z = 2;
    var ee = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    var te = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918000, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
    var ne = [-9, -84, -50, 59, 115, 102, 57, 125, 94, -15, 15, 2, -72, -98, -79, 38, -56, -49, 76, -26, -117, 60, 90, 9, -107, -12, -71, -100, 63, 42, -18, 28, -120, -11, 33, 45, 79, 92, 37, 97, 4, 58, 98, 84, -97, -88, 95, -104, -13, -89, 78, -90, 119, -66, 13, -5, 29, -116, -4, -81, 27, 40, -59, -43, 85, 48, -74, 109, -64, 26, 67, -33, -115, 0, -37, -102, 88, -48, 127, -86, 41, 105, -2, 122, -42, 112, -94, 81, -31, -65, -101, -14, 65, 49, -67, -114, -103, -87, -19, 104, 66, -73, -34, -78, -45, -27, -109, -108, 47, 61, 86, 43, -54, 25, 64, -35, -44, 53, -112, 36, 73, 89, -82, 51, -32, 39, -83, 80, -85, -111, 12, -58, 103, -76, -46, -127, 34, 1, -99, 14, -57, 110, 106, 93, -52, 11, 113, 20, -106, 75, 62, -69, -39, -55, -119, 126, 114, 123, 10, 77, -121, -8, 74, 21, -93, 17, -61, -21, -105, -126, 18, 124, -17, 52, -10, -77, -24, -22, 120, -95, -25, 96, -110, 22, -23, 69, -125, -128, -47, -38, -1, 3, -20, 100, 68, 101, 5, 117, -122, 44, -51, -36, -41, 24, -80, 30, 82, -63, -40, -92, 91, -6, -53, -124, -62, -28, 111, 19, 50, 108, 70, -68, -29, -75, 99, -91, -60, -70, 71, -118, -3, 83, 87, -7, 32, 55, 31, -123, 121, 107, -113, 46, -30, 118, 54, 23, 116, -16, 7, 6, 35, 16, -96, 56, 72, 8];
    var ie = 64;
    var re = 64;
    var oe = 4;
    var ae = 4;
    var se = "14731255234d414cF91356d684E4E8F5F56c8f1bc";
    var le = "gdxidpyhxdE";
    var ue = "_9755xjdesxxd_";
    var fe = 32;
    var ce = "aZbY0cXdW1eVf2Ug3Th4SiR5jQk6PlO7mNn8MoL9pKqJrIsHtGuFvEwDxCyBzA";
    var je = ce.length;
    var de = 900000;
    var he = 840000;
    var pe = !1;
    var ye = !1;
    var ve = window && window["location"] && window["location"]["hostname"] || "not_exist_hostname";
    var ge = "";

    var ge = function (e, n) {
      if (null == e || void 0 == e || e == "" || null == n || void 0 == n || n.length <= 0) return null;
      n = n.split(";");

      for (var i = 0; i < n.length; i++) {
        var r = new RegExp(n[i].replace(/\./g, "\\.") + "$");
        if (null != e.match(r) || null != ("." + e).match(r)) return n[i];
      }

      return null;
    }(ve, ge);

    var be = le.replace(/[^a-zA-Z0-9$]/g, "").toLowerCase();
    var me = ue.replace(/[^a-zA-Z0-9$]/g, "").toLowerCase();

    var _e = function (e) {
      var n = [];
      if (!e) return n;
      e = e.split(".");

      for (var i = "", r = 0; r < e.length; r++) r < e.length - 1 && (i = "." + e[e.length - 1 - r] + i, n.push(i));

      return n;
    }(ve);

    _e.push(null);

    _e.push("." + ve);

    (function (e) {
      for (var n = 0, i = (G["cookie"] || "").split("; "), r = 0; r < i.length; r++) {
        var o = i[r].indexOf("=");
        o >= 0 && i[r].substring(0, o) == e && (n += 1);
      }

      return n;
    })(le) > 1 && H();
    (function () {
      var e = Y();
      if (null == e || void 0 == e || e == "") e = !1;else {
        var t;
        (t = V()) && (e = B(e), t = !(null == e || isNaN(e) || e - new window["Date"]()["getTime"]() <= de - he));
        e = t;
      }
      return e;
    })() ? (P(Y()), N(L()), ve = F(), window["setTimeout"] && window["setTimeout"](W, ve)) : W();
  }();
}, function (module, exports) {
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  };

  "object" !== ("undefined" == typeof JSON ? "undefined" : _typeof(JSON)) && (JSON = {});

  (function () {
    "use strict";

    function f(e) {
      return e < 10 ? "0" + e : e;
    }

    function this_value() {
      return this.valueOf();
    }

    function quote(e) {
      rx_escapable.lastIndex = 0;
      return rx_escapable.test(e) ? '"' + e.replace(rx_escapable, function (e) {
        var t = meta[e];
        return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
      }) + '"' : '"' + e + '"';
    }

    function str(e, t) {
      var n;
      var i;
      var r;
      var o;
      var a;
      var s = gap;
      var l = t[e];

      switch (l && "object" === ("undefined" == typeof l ? "undefined" : _typeof(l)) && "function" == typeof l.toJSON && (l = l.toJSON(e)), "function" == typeof rep && (l = rep.call(t, e, l)), "undefined" == typeof l ? "undefined" : _typeof(l)) {
        case "string":
          return quote(l);

        case "number":
          return isFinite(l) ? String(l) : "null";

        case "boolean":
        case "null":
          return String(l);

        case "object":
          if (!l) return "null";

          if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(l)) {
            for (o = l.length, n = 0; n < o; n += 1) a[n] = str(n, l) || "null";

            r = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]";
            gap = s;
            return r;
          }

          if (rep && "object" === ("undefined" == typeof rep ? "undefined" : _typeof(rep))) for (o = rep.length, n = 0; n < o; n += 1) "string" == typeof rep[n] && (i = rep[n], r = str(i, l), r && a.push(quote(i) + (gap ? ": " : ":") + r));else for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (r = str(i, l), r && a.push(quote(i) + (gap ? ": " : ":") + r));
          r = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}";
          gap = s;
          return r;
      }
    }

    var rx_one = /^[\],:{}\s]*$/;
    var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
    var rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
      return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
    }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value);
    var gap;
    var indent;
    var meta;
    var rep;
    "function" != typeof JSON.stringify && (meta = {
      "\b": "\\b",
      "\t": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      '"': '\\"',
      "\\": "\\\\"
    }, JSON.stringify = function (e, t, n) {
      var i;
      if (gap = "", indent = "", "number" == typeof n) for (i = 0; i < n; i += 1) indent += " ";else "string" == typeof n && (indent = n);
      if (rep = t, t && "function" != typeof t && ("object" !== ("undefined" == typeof t ? "undefined" : _typeof(t)) || "number" != typeof t.length)) throw new Error("JSON.stringify");
      return str("", {
        "": e
      });
    });
    "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
      function walk(e, t) {
        var n;
        var i;
        var r = e[t];
        if (r && "object" === ("undefined" == typeof r ? "undefined" : _typeof(r))) for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (i = walk(r, n), void 0 !== i ? r[n] = i : delete r[n]);
        return reviver.call(e, t, r);
      }

      var j;

      if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (e) {
        return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
      })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) {
        j = eval("(" + text + ")");
        return "function" == typeof reviver ? walk({
          "": j
        }, "") : j;
      }

      throw new SyntaxError("JSON.parse");
    });
  })();
}, function (e, t) {
  e.exports = function (e, t) {
    function n() {}

    n.prototype = t.prototype;
    e.prototype = new n();
    e.prototype.constructor = e;
  };
}, function (e, t) {
  Array.isArray || (Array.isArray = function (e) {
    return "[object Array]" === Object.prototype.toString.call(e);
  });
}, function (e, t) {
  "function" != typeof Object.assign && (Object.assign = function (e) {
    if (null == e) throw new TypeError("Cannot convert undefined or null to object");
    e = Object(e);

    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      if (null != n) for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }

    return e;
  });
}, function (e, t) {
  var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  };
  Object.keys || (Object.keys = function () {
    "use strict";

    var e = Object.prototype.hasOwnProperty;
    var t = !{
      toString: null
    }.propertyIsEnumerable("toString");
    var i = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];
    var r = i.length;
    return function (o) {
      if ("function" != typeof o && ("object" !== ("undefined" == typeof o ? "undefined" : n(o)) || null === o)) throw new TypeError("Object.keys called on non-object");
      var a;
      var s;
      var l = [];

      for (a in o) e.call(o, a) && l.push(a);

      if (t) for (s = 0; s < r; s++) e.call(o, i[s]) && l.push(i[s]);
      return l;
    };
  }());
}, function (e, t) {
  Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
    var n;
    if (null == this) throw new TypeError('"this" is null or not defined');
    var i = Object(this);
    var r = i.length >>> 0;
    if (0 === r) return -1;
    var o = +t || 0;
    if (Math.abs(o) === 1 / 0 && (o = 0), o >= r) return -1;

    for (n = Math.max(o >= 0 ? o : r - Math.abs(o), 0); n < r;) {
      if (n in i && i[n] === e) return n;
      n++;
    }

    return -1;
  });
}, function (e, t) {
  Array.prototype.map || (Array.prototype.map = function (e, t) {
    var n;
    var i;
    var r;
    if (null == this) throw new TypeError(" this is null or not defined");
    var o = Object(this);
    var a = o.length >>> 0;
    if ("[object Function]" !== Object.prototype.toString.call(e)) throw new TypeError(e + " is not a function");

    for (t && (n = t), i = new Array(a), r = 0; r < a;) {
      var s;
      var l;
      r in o && (s = o[r], l = e.call(n, s, r, o), i[r] = l);
      r++;
    }

    return i;
  });
}, function (e, t) {
  Function.prototype.bind || (Function.prototype.bind = function (e) {
    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var t = Array.prototype.slice.call(arguments, 1);
    var n = this;

    var i = function () {};

    var r = function () {
      return n.apply(this instanceof i ? this : e, t.concat(Array.prototype.slice.call(arguments)));
    };

    this.prototype && (i.prototype = this.prototype);
    r.prototype = new i();
    return r;
  });
}, function (e, t, n) {
  n(46);
  n(52);
  n(51);
  n(48);
  n(50);
  n(49);
  n(55);
  n(53);
}, function (e, t) {
  String.prototype.trim || (String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  });
}, function (e, t, n) {
  function i(e, t, n) {
    t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n;
    return e;
  }

  function r(e, t) {
    var n = e.apiServer;
    var i = e.protocol;
    var r = "/api/v2" + t;
    return Array.isArray(n) ? n.map(function (e) {
      return X({
        protocol: i,
        host: e,
        path: r
      });
    }) : X({
      protocol: i,
      host: n,
      path: r
    });
  }

  function o(e, t, n) {
    var i = e || !t && new Error('Server error, "res" is not right.(' + n + ")") || t.error && new Error(t.error + ": " + t.msg + ".(" + n + ")") || null;
    !e && t && t.error ? i.code = B : !e && t || (i.code = V);
    return i;
  }

  function a(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 256;
    return null == e ? "" : String($.isFn(e) ? e() : e).substring(0, t);
  }

  function s() {
    var e = $.uuid(32);
    return A(e);
  }

  var l;
  var u;
  var f = n(4);
  var c = f.INVOKE_HOOK;
  var j = f.EVENT_RESET;
  var d = f.SWITCH_TYPE;
  var h = f.SET_TYPE;
  var p = f.SWITCH_LOAD_STATUS;
  var y = f.UPDATE_VERIFY_STATUS;
  var v = f.REFRESH;
  var g = f.UPDATE_COUNTS_OF_VERIFYERROR;
  var b = f.SET_TOKEN;
  var m = f.EVENT_RESET_CLASSIC;

  var _ = n(12);

  var w = _.FETCH_CAPTCHA;
  var T = _.FETCH_INTELLISENSE_CAPTCHA;
  var S = _.VERIFY_CAPTCHA;
  var E = _.VERIFY_INTELLISENSE_CAPTCHA;
  var R = _.RESET_STATE;
  var k = n(3);
  var C = k.CAPTCHA_TYPE;
  var O = k.DEVICE;
  var I = n(2);
  var $ = n(1);
  var X = n(16);
  var x = n(8);
  var A = x.eypt;
  var P = n(36);
  var N = n(7);
  var M = N.createNetCollect;
  var D = n(5);
  var L = D.UNPASS_ERROR;
  var V = D.REQUEST_API_ERROR;
  var B = D.BUSINESS_ERROR;
  var Y = I.isMobile ? O.TOUCH : I.supportTouch ? O.MOUSE_TOUCH : O.MOUSE;
  var F = {
    state: {
      version: "2.14.0",
      fingerprint: "",
      config: null,
      langPkg: null,
      captchaType: null,
      type: "",
      load: null,
      verifyStatus: "",
      token: "",
      previousToken: "",
      countsOfVerifyError: 0
    },
    mutations: (l = {}, i(l, c, function () {}), i(l, j, function () {}), i(l, m, function () {}), i(l, d, function (e, t) {
      e.captchaType = t.captchaType;
    }), i(l, h, function (e, t) {
      e.type = t.captchaType;
    }), i(l, p, function (e, t) {
      e.load = t;
    }), i(l, y, function (e, t) {
      e.verifyStatus = t.verifyStatus;
    }), i(l, v, function (e) {
      e.load = null;
      e.verifyStatus = "";
    }), i(l, g, function (e, t) {
      e.countsOfVerifyError = t.counts;
    }), i(l, b, function (e, t) {
      t && (e.previousToken = t);
      e.token = t;
    }), l),
    actions: (u = {}, i(u, R, function (e) {
      var t = e.commit;
      t(d, {
        captchaType: null
      });
      t(p, null);
      t(y, {
        verifyStatus: ""
      });
      t(b, "");
      t(g, {
        counts: 0
      });
    }), i(u, w, function (e, t) {
      var n = e.commit;
      var i = e.state;
      var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
      var l = i.fingerprint;
      var u = i.version;
      var f = i.$fetch;
      var j = i.captchaCollector;
      var y = i.config;
      var v = y.apiServer;
      var g = y.captchaId;
      var m = y.protocol;
      var _ = y.captchaType;
      var w = y.ipv6;
      var T = y.runEnv;
      var S = y.group;
      var E = y.scene;
      var R = Object.assign({
        id: g,
        fp: l,
        https: "https" === m,
        type: _,
        version: u,
        dpr: window.devicePixelRatio || 1,
        dev: Y,
        cb: s(),
        ipv6: w,
        runEnv: T,
        group: S,
        scene: E
      }, t);
      var k = r({
        apiServer: v,
        protocol: m
      }, "/get");
      n(p, {
        status: "loading"
      });
      f(k, R, function (e, t) {
        if (e = o(e, t, k)) {
          var r = new D(e.code, e.message, {
            url: k,
            api: "get"
          });
          a(r);
          n(p, {
            status: "fail",
            data: r
          });
          return void n(c, {
            name: "onError",
            args: [r]
          });
        }

        a(null, t);
        var s = t.data;
        s.type !== C.INTELLISENSE && s.type !== i.captchaType && n(d, {
          captchaType: s.type,
          prevCaptchaType: i.captchaType
        });
        n(h, {
          captchaType: s.type
        });
        n(b, s.token);
        n(p, {
          status: "loading",
          data: s
        });
      }, {
        onProcess: M(j)
      });
    }), i(u, T, function (e, t) {
      var n = e.commit;
      var i = e.state;
      var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
      var l = i.fingerprint;
      var u = i.version;
      var f = i.$fetch;
      var j = i.captchaCollector;
      var d = i.config;
      var p = d.apiServer;
      var y = d.captchaId;
      var v = d.protocol;
      var g = d.captchaType;
      var m = d.ipv6;
      var _ = d.runEnv;
      var w = d.group;
      var T = d.scene;
      var S = r({
        apiServer: p,
        protocol: v
      }, "/get");
      f(S, {
        id: y,
        fp: l,
        https: "https" === v,
        type: g,
        width: t.width,
        version: u,
        dpr: window.devicePixelRatio || 1,
        dev: Y,
        cb: s(),
        ipv6: m,
        runEnv: _,
        group: w,
        scene: T
      }, function (e, t) {
        if (e = o(e, t, S)) {
          var i = new D(e.code, e.message, {
            url: S,
            api: "get"
          });
          n(c, {
            name: "onError",
            args: [i]
          });
          return void a(i);
        }

        n(h, {
          captchaType: C.INTELLISENSE
        });
        n(b, t.data.token);
        a(null, t);
      }, {
        onProcess: M(j)
      });
    }), i(u, E, function (e, t, n) {
      var i = e.commit;
      var l = e.state;
      var u = l.version;
      var f = l.type;
      var j = l.$fetch;
      var d = l.captchaCollector;
      var h = l.config;
      var p = h.apiServer;
      var y = h.captchaId;
      var v = h.protocol;
      var g = h.extraData;
      var b = h.runEnv;
      var m = Object.assign({
        id: y,
        version: u,
        cb: s(),
        extraData: a(g),
        runEnv: b
      }, t);

      var _ = r({
        apiServer: p,
        protocol: v
      }, "/check");

      j(_, m, function (e, t) {
        if (e = o(e, t, _), e ? e = new D(e.code, e.message, {
          url: _,
          token: m.token,
          type: f
        }) : $.getIn(t, "data.result") || (e = new D(L, "Failed to verify captcha.", {
          url: _,
          type: f,
          token: m.token
        })), e) i(c, {
          name: "onVerify",
          args: [e]
        });else {
          var r = l.fingerprint;
          var a = P(A(t.data.validate + "::" + r));
          i(c, {
            name: "onVerify",
            args: [null, {
              validate: a
            }]
          });
        }
        n && n(e, t);
      }, {
        onProcess: M(d, {
          token: m.token
        })
      });
    }), i(u, S, function (e, t) {
      var n = e.commit;
      var i = e.state;
      var l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
      var u = i.fingerprint;
      var f = i.captchaType;
      var j = i.version;
      var d = i.verifyStatus;
      var h = i.countsOfVerifyError;
      var p = i.$fetch;
      var v = i.type;
      var b = i.captchaCollector;
      var m = i.config;
      var _ = m.apiServer;
      var w = m.captchaId;
      var T = m.protocol;
      var S = m.extraData;
      var E = m.runEnv;
      var R = t.token;
      var k = t.data;
      var O = t.width;
      var I = t.acToken;
      var $ = r({
        apiServer: _,
        protocol: T
      }, "/check");
      n(y, {
        verifyStatus: "verifying"
      });

      var X = function (e, t) {
        var i = t && t.data;

        if (e = o(e, t, $), !(["success", "error"].indexOf(d) > -1)) {
          if (e || !i.result && f !== C.SMS) {
            var r = e ? e.message : "Failed to verify captcha.";
            var a = e ? e.code : L;
            e = new D(a, r, {
              url: $,
              token: R,
              type: v,
              counts: h + 1
            });
            n(y, {
              verifyStatus: "error",
              error: e
            });
            n(g, {
              counts: h + 1
            });
            n(c, {
              name: "onVerify",
              args: [e]
            });
            return void l(e);
          }

          if (i.result) {
            var s = P(A(i.validate + "::" + u));
            n(y, {
              verifyStatus: "success",
              validate: i.validate
            });
            n(c, {
              name: "onVerify",
              args: [null, {
                validate: s
              }]
            });
            l(null, t);
          }
        }
      };

      p($, {
        id: w,
        token: R,
        acToken: I,
        data: k,
        width: O,
        type: f,
        version: j,
        cb: s(),
        extraData: a(S),
        runEnv: E
      }, X, {
        onProcess: M(b, {
          token: R
        })
      });
    }), u)
  };
  e.exports = F;
}, function (e, t) {
  e.exports = '<div\n  class="yidun <%= \'yidun--\' + theme %> <%= \'yidun--\' + mode %>"\n  style="width: <%= width %>; min-width: <%= minWidth %>">\n  <div\n    class="yidun_panel"\n    <% if (mode === \'float\') { %>\n    style="<%= customStyles.imagePanel.align === \'top\'\n    ? \'bottom: \' + customStyles.controlBar.height + \'; padding-bottom: \' + customStyles.gap\n    : \'top: \' + customStyles.controlBar.height + \'; padding-top: \' + customStyles.gap %>"\n    <% } else { %>\n    style="padding-bottom: <%= customStyles.gap %>"\n    <% } %>\n    >\n    <div class="yidun_panel-placeholder">\n      <% if (mode === \'float\') { %>\n      <iframe class="yidun_cover-frame"></iframe>\n      <% } %>\n      <div class="yidun_bgimg" style="border-radius: <%= customStyles.imagePanel.borderRadius %>">\n        <img class="yidun_bg-img" style="border-radius: <%= customStyles.imagePanel.borderRadius %>"/>\n        <img class="yidun_jigsaw"/>\n        <% for (var i in inferences) { %>\n          <% if (inferences.hasOwnProperty(i)) { %>\n          <div class="yidun_inference <%= \'yidun_inference--\' + i %>" draggable="true">\n            <img class="yidun_inference__img" draggable="false" />\n            <span class="yidun_inference__border"></span>\n          </div>\n          <% } %>\n        <% } %>\n      </div>\n      <div class="yidun_loadbox" style="border-radius: <%= customStyles.imagePanel.borderRadius %>">\n        <div class="yidun_loadbox__inner">\n          <div class="yidun_loadicon"></div>\n          <span class="yidun_loadtext"><%= langPkg[\'loading\'] %></span>\n        </div>\n      </div>\n      <div class="yidun_top">\n        <% if (feedback.enable) { %>\n        <a class="yidun_feedback" href="<%= feedback.url + \'?captchaId=\' + captchaId %>"  target="_blank"></a>\n        <% } %>\n        <div class="yidun_refresh"></div>\n      </div>\n    </div>\n  </div>\n  <div\n    class="yidun_control"\n    style="height: <%= customStyles.controlBar.height %>; border-radius: <%= customStyles.controlBar.borderRadius %>">\n    <div class="yidun_slide_indicator" style="height: <%= customStyles.controlBar.height %>; border-radius: <%= customStyles.controlBar.borderRadius %>"></div>\n    <div class="yidun_slider" style="width: <%= customStyles.controlBar.height %>; border-radius: <%= customStyles.controlBar.borderRadius %>">\n      <!-- 分支二兼容旧接口 -->\n      <% if (customStyles.icon.slider) { %>\n      <img src="<%= customStyles.icon.slider %>" class="yidun_slider__icon" />\n      <% } else if (customStyles.controlBar.slideIcon || customStyles.controlBar.slideIconSuccess || customStyles.controlBar.slideIconError || customStyles.controlBar.slideIconMoving) { %>\n      <span class="yidun_slider__icon"></span>\n      <img src="<%= customStyles.controlBar.slideIcon %>" class="yidun_slider__icon yidun_slider__icon--img" />\n      <% } else { %>\n      <span class="yidun_slider__icon"></span>\n      <% } %>\n    </div>\n    <div class="yidun_tips" style="line-height: <%= customStyles.controlBar.height %>">\n      <span class="yidun_tips__icon"></span>\n      <span class="yidun_tips__text yidun-fallback__tip"></span>\n      <div class="yidun_tips__answer">\n        <span class="yidun_tips__point"></span>\n        <img class="yidun_tips__img" />\n      </div>\n    </div>\n  </div>\n</div>\n';
}, function (e, t) {
  e.exports = '<div class="yidun_intellisense <%= \'yidun_intellisense--\' + theme %>" style="display: none">\n  <div class="yidun_intelli-control">\n    <div class="yidun_intelli-tips">\n      <div class="yidun_intelli-icon">\n        <% if (icon.intellisenseLogo) { %>\n          <img src="<%= icon.intellisenseLogo%>" class="yidun_logo" />\n        <% } else { %>\n          <span class="yidun_logo"></span>\n        <% } %>\n        <span class="yidun_intelli-loading"></span>\n        <div class="yidun_ball-scale-multiple">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n      <span class="yidun_intelli-text"><%= langPkg.intellisense.normal %></span>\n    </div>\n    <div class="yidun_classic-tips">\n      <span class="yidun_tips__icon"></span>\n      <span class="yidun_tips__text yidun-fallback__tip"></span>\n    </div>\n  </div>\n  <div class="yidun_classic-container">\n    <iframe class="yidun_cover-frame"></iframe>\n    <div class="yidun_classic-wrapper" style="display: <%= classicVisible ? \'block\' : \'none\' %>"></div>\n  </div>\n</div>\n';
}, function (e, t) {
  e.exports = '<div\n  class="<%= \'yidun_popup--\' + theme %> yidun_popup <%= topIsNotAuto ? \'\' : \'yidun_popup--auto\' %> <%= appendTo ? \'yidun_popup--append\' : \'\' %>"\n  style="display: none">\n  <!-- iframe用于遮挡页面中object、embed、select等元素 -->\n  <iframe class="yidun_cover-frame"></iframe>\n  <div class="yidun_popup__mask"></div>\n  <div class="yidun_modal__wrap">\n    <div class="yidun_modal__subwrap">\n      <div \n        class="yidun_modal"\n        style="<% if (topIsNotAuto) { %> top: <%= top %>; <% } %> <% if (widthIsNotAuto) { %> width: <%= width %>; <% } %>">\n        <div\n          class="yidun_modal__title"\n          style="height: <%= popupStyles.capBarHeight %>px;line-height: <%= popupStyles.capBarHeight %>px;">\n          <%= langPkg[\'popupTitle\'] %>\n          <% if (!enableClose) { %>\n            <span\n              class="yidun_modal__close"\n              style="top: <%= (popupStyles.capBarHeight - 24) / 2 %>px">\n              <span class="yidun_icon-close"></span>\n            </span>\n          <% } %>\n        </div>\n        <div\n          class="yidun_modal__body"\n          style="padding: <%= popupStyles.capPadding %>px;">\n          <captcha-core :intellisense="intellisense" :autoWidth="widthIsNotAuto" :enableColor="false"></captcha-core>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n';
}, function (e, t) {
  function n(e, t) {
    for (var n in t) e.setAttribute(n, t[n]);
  }

  function i(e, t) {
    e.onload = function () {
      this.onerror = this.onload = null;
      t(null, e);
    };

    e.onerror = function () {
      this.onerror = this.onload = null;
      t(new Error("Failed to load " + this.src), e);
    };
  }

  function r(e, t) {
    e.onreadystatechange = function () {
      "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, t(null, e));
    };
  }

  e.exports = function (e, t, o) {
    var a = document.head || document.getElementsByTagName("head")[0];
    var s = document.createElement("script");
    "function" == typeof t && (o = t, t = {});
    t = t || {};

    o = o || function () {};

    s.type = t.type || "text/javascript";
    s.charset = t.charset || "utf8";
    s.async = !("async" in t) || !!t.async;
    s.src = e;
    t.attrs && n(s, t.attrs);
    t.text && (s.text = "" + t.text);
    var l = "onload" in s ? i : r;
    l(s, o);
    s.onload || i(s, o);
    a.appendChild(s);
  };
}]);