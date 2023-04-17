import { defineComponent as we, openBlock as be, createBlock as ye, resolveDynamicComponent as Oe, normalizeClass as Y, withCtx as q, createVNode as Ee, Transition as Se, withDirectives as Pe, createElementVNode as Te, renderSlot as G, createTextVNode as Ce, toDisplayString as xe, vShow as Le } from "vue";
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var M = typeof window < "u" && typeof document < "u", K = ["Edge", "Trident", "Firefox"], re = 0;
for (var F = 0; F < K.length; F += 1)
  if (M && navigator.userAgent.indexOf(K[F]) >= 0) {
    re = 1;
    break;
  }
function Me(e) {
  var t = !1;
  return function() {
    t || (t = !0, window.Promise.resolve().then(function() {
      t = !1, e();
    }));
  };
}
function De(e) {
  var t = !1;
  return function() {
    t || (t = !0, setTimeout(function() {
      t = !1, e();
    }, re));
  };
}
var Be = M && window.Promise, ke = Be ? Me : De;
function oe(e) {
  var t = {};
  return e && t.toString.call(e) === "[object Function]";
}
function P(e, t) {
  if (e.nodeType !== 1)
    return [];
  var r = e.ownerDocument.defaultView, o = r.getComputedStyle(e, null);
  return t ? o[t] : o;
}
function V(e) {
  return e.nodeName === "HTML" ? e : e.parentNode || e.host;
}
function D(e) {
  if (!e)
    return document.body;
  switch (e.nodeName) {
    case "HTML":
    case "BODY":
      return e.ownerDocument.body;
    case "#document":
      return e.body;
  }
  var t = P(e), r = t.overflow, o = t.overflowX, n = t.overflowY;
  return /(auto|scroll|overlay)/.test(r + n + o) ? e : D(V(e));
}
var X = M && !!(window.MSInputMethodContext && document.documentMode), Q = M && /MSIE 10/.test(navigator.userAgent);
function L(e) {
  return e === 11 ? X : e === 10 ? Q : X || Q;
}
function T(e) {
  if (!e)
    return document.documentElement;
  for (var t = L(10) ? document.body : null, r = e.offsetParent || null; r === t && e.nextElementSibling; )
    r = (e = e.nextElementSibling).offsetParent;
  var o = r && r.nodeName;
  return !o || o === "BODY" || o === "HTML" ? e ? e.ownerDocument.documentElement : document.documentElement : ["TH", "TD", "TABLE"].indexOf(r.nodeName) !== -1 && P(r, "position") === "static" ? T(r) : r;
}
function Ae(e) {
  var t = e.nodeName;
  return t === "BODY" ? !1 : t === "HTML" || T(e.firstElementChild) === e;
}
function $(e) {
  return e.parentNode !== null ? $(e.parentNode) : e;
}
function k(e, t) {
  if (!e || !e.nodeType || !t || !t.nodeType)
    return document.documentElement;
  var r = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, o = r ? e : t, n = r ? t : e, i = document.createRange();
  i.setStart(o, 0), i.setEnd(n, 0);
  var s = i.commonAncestorContainer;
  if (e !== s && t !== s || o.contains(n))
    return Ae(s) ? s : T(s);
  var a = $(e);
  return a.host ? k(a.host, t) : k(e, $(t).host);
}
function C(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top", r = t === "top" ? "scrollTop" : "scrollLeft", o = e.nodeName;
  if (o === "BODY" || o === "HTML") {
    var n = e.ownerDocument.documentElement, i = e.ownerDocument.scrollingElement || n;
    return i[r];
  }
  return e[r];
}
function Ne(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, o = C(t, "top"), n = C(t, "left"), i = r ? -1 : 1;
  return e.top += o * i, e.bottom += o * i, e.left += n * i, e.right += n * i, e;
}
function Z(e, t) {
  var r = t === "x" ? "Left" : "Top", o = r === "Left" ? "Right" : "Bottom";
  return parseFloat(e["border" + r + "Width"], 10) + parseFloat(e["border" + o + "Width"], 10);
}
function ee(e, t, r, o) {
  return Math.max(t["offset" + e], t["scroll" + e], r["client" + e], r["offset" + e], r["scroll" + e], L(10) ? parseInt(r["offset" + e]) + parseInt(o["margin" + (e === "Height" ? "Top" : "Left")]) + parseInt(o["margin" + (e === "Height" ? "Bottom" : "Right")]) : 0);
}
function ie(e) {
  var t = e.body, r = e.documentElement, o = L(10) && getComputedStyle(r);
  return {
    height: ee("Height", t, r, o),
    width: ee("Width", t, r, o)
  };
}
var Fe = function(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}, We = function() {
  function e(t, r) {
    for (var o = 0; o < r.length; o++) {
      var n = r[o];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
  }
  return function(t, r, o) {
    return r && e(t.prototype, r), o && e(t, o), t;
  };
}(), x = function(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}, w = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var o in r)
      Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
  }
  return e;
};
function E(e) {
  return w({}, e, {
    right: e.left + e.width,
    bottom: e.top + e.height
  });
}
function H(e) {
  var t = {};
  try {
    if (L(10)) {
      t = e.getBoundingClientRect();
      var r = C(e, "top"), o = C(e, "left");
      t.top += r, t.left += o, t.bottom += r, t.right += o;
    } else
      t = e.getBoundingClientRect();
  } catch {
  }
  var n = {
    left: t.left,
    top: t.top,
    width: t.right - t.left,
    height: t.bottom - t.top
  }, i = e.nodeName === "HTML" ? ie(e.ownerDocument) : {}, s = i.width || e.clientWidth || n.right - n.left, a = i.height || e.clientHeight || n.bottom - n.top, f = e.offsetWidth - s, l = e.offsetHeight - a;
  if (f || l) {
    var u = P(e);
    f -= Z(u, "x"), l -= Z(u, "y"), n.width -= f, n.height -= l;
  }
  return E(n);
}
function _(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, o = L(10), n = t.nodeName === "HTML", i = H(e), s = H(t), a = D(e), f = P(t), l = parseFloat(f.borderTopWidth, 10), u = parseFloat(f.borderLeftWidth, 10);
  r && n && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
  var p = E({
    top: i.top - s.top - l,
    left: i.left - s.left - u,
    width: i.width,
    height: i.height
  });
  if (p.marginTop = 0, p.marginLeft = 0, !o && n) {
    var h = parseFloat(f.marginTop, 10), c = parseFloat(f.marginLeft, 10);
    p.top -= l - h, p.bottom -= l - h, p.left -= u - c, p.right -= u - c, p.marginTop = h, p.marginLeft = c;
  }
  return (o && !r ? t.contains(a) : t === a && a.nodeName !== "BODY") && (p = Ne(p, t)), p;
}
function Re(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = e.ownerDocument.documentElement, o = _(e, r), n = Math.max(r.clientWidth, window.innerWidth || 0), i = Math.max(r.clientHeight, window.innerHeight || 0), s = t ? 0 : C(r), a = t ? 0 : C(r, "left"), f = {
    top: s - o.top + o.marginTop,
    left: a - o.left + o.marginLeft,
    width: n,
    height: i
  };
  return E(f);
}
function ne(e) {
  var t = e.nodeName;
  if (t === "BODY" || t === "HTML")
    return !1;
  if (P(e, "position") === "fixed")
    return !0;
  var r = V(e);
  return r ? ne(r) : !1;
}
function se(e) {
  if (!e || !e.parentElement || L())
    return document.documentElement;
  for (var t = e.parentElement; t && P(t, "transform") === "none"; )
    t = t.parentElement;
  return t || document.documentElement;
}
function j(e, t, r, o) {
  var n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, i = {
    top: 0,
    left: 0
  }, s = n ? se(e) : k(e, t);
  if (o === "viewport")
    i = Re(s, n);
  else {
    var a = void 0;
    o === "scrollParent" ? (a = D(V(t)), a.nodeName === "BODY" && (a = e.ownerDocument.documentElement)) : o === "window" ? a = e.ownerDocument.documentElement : a = o;
    var f = _(a, s, n);
    if (a.nodeName === "HTML" && !ne(s)) {
      var l = ie(e.ownerDocument), u = l.height, p = l.width;
      i.top += f.top - f.marginTop, i.bottom = u + f.top, i.left += f.left - f.marginLeft, i.right = p + f.left;
    } else
      i = f;
  }
  r = r || 0;
  var h = typeof r == "number";
  return i.left += h ? r : r.left || 0, i.top += h ? r : r.top || 0, i.right -= h ? r : r.right || 0, i.bottom -= h ? r : r.bottom || 0, i;
}
function $e(e) {
  var t = e.width, r = e.height;
  return t * r;
}
function ae(e, t, r, o, n) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  if (e.indexOf("auto") === -1)
    return e;
  var s = j(r, o, i, n), a = {
    top: {
      width: s.width,
      height: t.top - s.top
    },
    right: {
      width: s.right - t.right,
      height: s.height
    },
    bottom: {
      width: s.width,
      height: s.bottom - t.bottom
    },
    left: {
      width: t.left - s.left,
      height: s.height
    }
  }, f = Object.keys(a).map(function(h) {
    return w({
      key: h
    }, a[h], {
      area: $e(a[h])
    });
  }).sort(function(h, c) {
    return c.area - h.area;
  }), l = f.filter(function(h) {
    var c = h.width, d = h.height;
    return c >= r.clientWidth && d >= r.clientHeight;
  }), u = l.length > 0 ? l[0].key : f[0].key, p = e.split("-")[1];
  return u + (p ? "-" + p : "");
}
function fe(e, t, r) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, n = o ? se(t) : k(t, r);
  return _(r, n, o);
}
function pe(e) {
  var t = e.ownerDocument.defaultView, r = t.getComputedStyle(e), o = parseFloat(r.marginTop || 0) + parseFloat(r.marginBottom || 0), n = parseFloat(r.marginLeft || 0) + parseFloat(r.marginRight || 0), i = {
    width: e.offsetWidth + n,
    height: e.offsetHeight + o
  };
  return i;
}
function A(e) {
  var t = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  return e.replace(/left|right|bottom|top/g, function(r) {
    return t[r];
  });
}
function le(e, t, r) {
  r = r.split("-")[0];
  var o = pe(e), n = {
    width: o.width,
    height: o.height
  }, i = ["right", "left"].indexOf(r) !== -1, s = i ? "top" : "left", a = i ? "left" : "top", f = i ? "height" : "width", l = i ? "width" : "height";
  return n[s] = t[s] + t[f] / 2 - o[f] / 2, r === a ? n[a] = t[a] - o[l] : n[a] = t[A(a)], n;
}
function B(e, t) {
  return Array.prototype.find ? e.find(t) : e.filter(t)[0];
}
function He(e, t, r) {
  if (Array.prototype.findIndex)
    return e.findIndex(function(n) {
      return n[t] === r;
    });
  var o = B(e, function(n) {
    return n[t] === r;
  });
  return e.indexOf(o);
}
function ue(e, t, r) {
  var o = r === void 0 ? e : e.slice(0, He(e, "name", r));
  return o.forEach(function(n) {
    n.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
    var i = n.function || n.fn;
    n.enabled && oe(i) && (t.offsets.popper = E(t.offsets.popper), t.offsets.reference = E(t.offsets.reference), t = i(t, n));
  }), t;
}
function Ie() {
  if (!this.state.isDestroyed) {
    var e = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: !1,
      offsets: {}
    };
    e.offsets.reference = fe(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = ae(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = le(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = ue(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
  }
}
function ce(e, t) {
  return e.some(function(r) {
    var o = r.name, n = r.enabled;
    return n && o === t;
  });
}
function J(e) {
  for (var t = [!1, "ms", "Webkit", "Moz", "O"], r = e.charAt(0).toUpperCase() + e.slice(1), o = 0; o < t.length; o++) {
    var n = t[o], i = n ? "" + n + r : e;
    if (typeof document.body.style[i] < "u")
      return i;
  }
  return null;
}
function Ve() {
  return this.state.isDestroyed = !0, ce(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[J("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
}
function he(e) {
  var t = e.ownerDocument;
  return t ? t.defaultView : window;
}
function de(e, t, r, o) {
  var n = e.nodeName === "BODY", i = n ? e.ownerDocument.defaultView : e;
  i.addEventListener(t, r, {
    passive: !0
  }), n || de(D(i.parentNode), t, r, o), o.push(i);
}
function _e(e, t, r, o) {
  r.updateBound = o, he(e).addEventListener("resize", r.updateBound, {
    passive: !0
  });
  var n = D(e);
  return de(n, "scroll", r.updateBound, r.scrollParents), r.scrollElement = n, r.eventsEnabled = !0, r;
}
function je() {
  this.state.eventsEnabled || (this.state = _e(this.reference, this.options, this.state, this.scheduleUpdate));
}
function Je(e, t) {
  return he(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(r) {
    r.removeEventListener("scroll", t.updateBound);
  }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
}
function Ue() {
  this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = Je(this.reference, this.state));
}
function U(e) {
  return e !== "" && !isNaN(parseFloat(e)) && isFinite(e);
}
function I(e, t) {
  Object.keys(t).forEach(function(r) {
    var o = "";
    ["width", "height", "top", "right", "bottom", "left"].indexOf(r) !== -1 && U(t[r]) && (o = "px"), e.style[r] = t[r] + o;
  });
}
function ze(e, t) {
  Object.keys(t).forEach(function(r) {
    var o = t[r];
    o !== !1 ? e.setAttribute(r, t[r]) : e.removeAttribute(r);
  });
}
function Ye(e) {
  return I(e.instance.popper, e.styles), ze(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && I(e.arrowElement, e.arrowStyles), e;
}
function qe(e, t, r, o, n) {
  var i = fe(n, t, e, r.positionFixed), s = ae(r.placement, i, t, e, r.modifiers.flip.boundariesElement, r.modifiers.flip.padding);
  return t.setAttribute("x-placement", s), I(t, {
    position: r.positionFixed ? "fixed" : "absolute"
  }), r;
}
function Ge(e, t) {
  var r = e.offsets, o = r.popper, n = r.reference, i = Math.round, s = Math.floor, a = function(y) {
    return y;
  }, f = i(n.width), l = i(o.width), u = ["left", "right"].indexOf(e.placement) !== -1, p = e.placement.indexOf("-") !== -1, h = f % 2 === l % 2, c = f % 2 === 1 && l % 2 === 1, d = t ? u || p || h ? i : s : a, v = t ? i : a;
  return {
    left: d(c && !p && t ? o.left - 1 : o.left),
    top: v(o.top),
    bottom: v(o.bottom),
    right: d(o.right)
  };
}
var Ke = M && /Firefox/i.test(navigator.userAgent);
function Xe(e, t) {
  var r = t.x, o = t.y, n = e.offsets.popper, i = B(e.instance.modifiers, function(S) {
    return S.name === "applyStyle";
  }).gpuAcceleration;
  i !== void 0 && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
  var s = i !== void 0 ? i : t.gpuAcceleration, a = T(e.instance.popper), f = H(a), l = {
    position: n.position
  }, u = Ge(e, window.devicePixelRatio < 2 || !Ke), p = r === "bottom" ? "top" : "bottom", h = o === "right" ? "left" : "right", c = J("transform"), d = void 0, v = void 0;
  if (p === "bottom" ? a.nodeName === "HTML" ? v = -a.clientHeight + u.bottom : v = -f.height + u.bottom : v = u.top, h === "right" ? a.nodeName === "HTML" ? d = -a.clientWidth + u.right : d = -f.width + u.right : d = u.left, s && c)
    l[c] = "translate3d(" + d + "px, " + v + "px, 0)", l[p] = 0, l[h] = 0, l.willChange = "transform";
  else {
    var b = p === "bottom" ? -1 : 1, y = h === "right" ? -1 : 1;
    l[p] = v * b, l[h] = d * y, l.willChange = p + ", " + h;
  }
  var g = {
    "x-placement": e.placement
  };
  return e.attributes = w({}, g, e.attributes), e.styles = w({}, l, e.styles), e.arrowStyles = w({}, e.offsets.arrow, e.arrowStyles), e;
}
function ve(e, t, r) {
  var o = B(e, function(a) {
    var f = a.name;
    return f === t;
  }), n = !!o && e.some(function(a) {
    return a.name === r && a.enabled && a.order < o.order;
  });
  if (!n) {
    var i = "`" + t + "`", s = "`" + r + "`";
    console.warn(s + " modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!");
  }
  return n;
}
function Qe(e, t) {
  var r;
  if (!ve(e.instance.modifiers, "arrow", "keepTogether"))
    return e;
  var o = t.element;
  if (typeof o == "string") {
    if (o = e.instance.popper.querySelector(o), !o)
      return e;
  } else if (!e.instance.popper.contains(o))
    return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
  var n = e.placement.split("-")[0], i = e.offsets, s = i.popper, a = i.reference, f = ["left", "right"].indexOf(n) !== -1, l = f ? "height" : "width", u = f ? "Top" : "Left", p = u.toLowerCase(), h = f ? "left" : "top", c = f ? "bottom" : "right", d = pe(o)[l];
  a[c] - d < s[p] && (e.offsets.popper[p] -= s[p] - (a[c] - d)), a[p] + d > s[c] && (e.offsets.popper[p] += a[p] + d - s[c]), e.offsets.popper = E(e.offsets.popper);
  var v = a[p] + a[l] / 2 - d / 2, b = P(e.instance.popper), y = parseFloat(b["margin" + u], 10), g = parseFloat(b["border" + u + "Width"], 10), S = v - e.offsets.popper[p] - y - g;
  return S = Math.max(Math.min(s[l] - d, S), 0), e.arrowElement = o, e.offsets.arrow = (r = {}, x(r, p, Math.round(S)), x(r, h, ""), r), e;
}
function Ze(e) {
  return e === "end" ? "start" : e === "start" ? "end" : e;
}
var me = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], W = me.slice(3);
function te(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = W.indexOf(e), o = W.slice(r + 1).concat(W.slice(0, r));
  return t ? o.reverse() : o;
}
var R = {
  FLIP: "flip",
  CLOCKWISE: "clockwise",
  COUNTERCLOCKWISE: "counterclockwise"
};
function et(e, t) {
  if (ce(e.instance.modifiers, "inner") || e.flipped && e.placement === e.originalPlacement)
    return e;
  var r = j(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed), o = e.placement.split("-")[0], n = A(o), i = e.placement.split("-")[1] || "", s = [];
  switch (t.behavior) {
    case R.FLIP:
      s = [o, n];
      break;
    case R.CLOCKWISE:
      s = te(o);
      break;
    case R.COUNTERCLOCKWISE:
      s = te(o, !0);
      break;
    default:
      s = t.behavior;
  }
  return s.forEach(function(a, f) {
    if (o !== a || s.length === f + 1)
      return e;
    o = e.placement.split("-")[0], n = A(o);
    var l = e.offsets.popper, u = e.offsets.reference, p = Math.floor, h = o === "left" && p(l.right) > p(u.left) || o === "right" && p(l.left) < p(u.right) || o === "top" && p(l.bottom) > p(u.top) || o === "bottom" && p(l.top) < p(u.bottom), c = p(l.left) < p(r.left), d = p(l.right) > p(r.right), v = p(l.top) < p(r.top), b = p(l.bottom) > p(r.bottom), y = o === "left" && c || o === "right" && d || o === "top" && v || o === "bottom" && b, g = ["top", "bottom"].indexOf(o) !== -1, S = !!t.flipVariations && (g && i === "start" && c || g && i === "end" && d || !g && i === "start" && v || !g && i === "end" && b), ge = !!t.flipVariationsByContent && (g && i === "start" && d || g && i === "end" && c || !g && i === "start" && b || !g && i === "end" && v), z = S || ge;
    (h || y || z) && (e.flipped = !0, (h || y) && (o = s[f + 1]), z && (i = Ze(i)), e.placement = o + (i ? "-" + i : ""), e.offsets.popper = w({}, e.offsets.popper, le(e.instance.popper, e.offsets.reference, e.placement)), e = ue(e.instance.modifiers, e, "flip"));
  }), e;
}
function tt(e) {
  var t = e.offsets, r = t.popper, o = t.reference, n = e.placement.split("-")[0], i = Math.floor, s = ["top", "bottom"].indexOf(n) !== -1, a = s ? "right" : "bottom", f = s ? "left" : "top", l = s ? "width" : "height";
  return r[a] < i(o[f]) && (e.offsets.popper[f] = i(o[f]) - r[l]), r[f] > i(o[a]) && (e.offsets.popper[f] = i(o[a])), e;
}
function rt(e, t, r, o) {
  var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), i = +n[1], s = n[2];
  if (!i)
    return e;
  if (s.indexOf("%") === 0) {
    var a = void 0;
    switch (s) {
      case "%p":
        a = r;
        break;
      case "%":
      case "%r":
      default:
        a = o;
    }
    var f = E(a);
    return f[t] / 100 * i;
  } else if (s === "vh" || s === "vw") {
    var l = void 0;
    return s === "vh" ? l = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : l = Math.max(document.documentElement.clientWidth, window.innerWidth || 0), l / 100 * i;
  } else
    return i;
}
function ot(e, t, r, o) {
  var n = [0, 0], i = ["right", "left"].indexOf(o) !== -1, s = e.split(/(\+|\-)/).map(function(u) {
    return u.trim();
  }), a = s.indexOf(B(s, function(u) {
    return u.search(/,|\s/) !== -1;
  }));
  s[a] && s[a].indexOf(",") === -1 && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
  var f = /\s*,\s*|\s+/, l = a !== -1 ? [s.slice(0, a).concat([s[a].split(f)[0]]), [s[a].split(f)[1]].concat(s.slice(a + 1))] : [s];
  return l = l.map(function(u, p) {
    var h = (p === 1 ? !i : i) ? "height" : "width", c = !1;
    return u.reduce(function(d, v) {
      return d[d.length - 1] === "" && ["+", "-"].indexOf(v) !== -1 ? (d[d.length - 1] = v, c = !0, d) : c ? (d[d.length - 1] += v, c = !1, d) : d.concat(v);
    }, []).map(function(d) {
      return rt(d, h, t, r);
    });
  }), l.forEach(function(u, p) {
    u.forEach(function(h, c) {
      U(h) && (n[p] += h * (u[c - 1] === "-" ? -1 : 1));
    });
  }), n;
}
function it(e, t) {
  var r = t.offset, o = e.placement, n = e.offsets, i = n.popper, s = n.reference, a = o.split("-")[0], f = void 0;
  return U(+r) ? f = [+r, 0] : f = ot(r, i, s, a), a === "left" ? (i.top += f[0], i.left -= f[1]) : a === "right" ? (i.top += f[0], i.left += f[1]) : a === "top" ? (i.left += f[0], i.top -= f[1]) : a === "bottom" && (i.left += f[0], i.top += f[1]), e.popper = i, e;
}
function nt(e, t) {
  var r = t.boundariesElement || T(e.instance.popper);
  e.instance.reference === r && (r = T(r));
  var o = J("transform"), n = e.instance.popper.style, i = n.top, s = n.left, a = n[o];
  n.top = "", n.left = "", n[o] = "";
  var f = j(e.instance.popper, e.instance.reference, t.padding, r, e.positionFixed);
  n.top = i, n.left = s, n[o] = a, t.boundaries = f;
  var l = t.priority, u = e.offsets.popper, p = {
    primary: function(c) {
      var d = u[c];
      return u[c] < f[c] && !t.escapeWithReference && (d = Math.max(u[c], f[c])), x({}, c, d);
    },
    secondary: function(c) {
      var d = c === "right" ? "left" : "top", v = u[d];
      return u[c] > f[c] && !t.escapeWithReference && (v = Math.min(u[d], f[c] - (c === "right" ? u.width : u.height))), x({}, d, v);
    }
  };
  return l.forEach(function(h) {
    var c = ["left", "top"].indexOf(h) !== -1 ? "primary" : "secondary";
    u = w({}, u, p[c](h));
  }), e.offsets.popper = u, e;
}
function st(e) {
  var t = e.placement, r = t.split("-")[0], o = t.split("-")[1];
  if (o) {
    var n = e.offsets, i = n.reference, s = n.popper, a = ["bottom", "top"].indexOf(r) !== -1, f = a ? "left" : "top", l = a ? "width" : "height", u = {
      start: x({}, f, i[f]),
      end: x({}, f, i[f] + i[l] - s[l])
    };
    e.offsets.popper = w({}, s, u[o]);
  }
  return e;
}
function at(e) {
  if (!ve(e.instance.modifiers, "hide", "preventOverflow"))
    return e;
  var t = e.offsets.reference, r = B(e.instance.modifiers, function(o) {
    return o.name === "preventOverflow";
  }).boundaries;
  if (t.bottom < r.top || t.left > r.right || t.top > r.bottom || t.right < r.left) {
    if (e.hide === !0)
      return e;
    e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
  } else {
    if (e.hide === !1)
      return e;
    e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
  }
  return e;
}
function ft(e) {
  var t = e.placement, r = t.split("-")[0], o = e.offsets, n = o.popper, i = o.reference, s = ["left", "right"].indexOf(r) !== -1, a = ["top", "left"].indexOf(r) === -1;
  return n[s ? "left" : "top"] = i[r] - (a ? n[s ? "width" : "height"] : 0), e.placement = A(t), e.offsets.popper = E(n), e;
}
var pt = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: st
  },
  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: it,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },
  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: nt,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ["left", "right", "top", "bottom"],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: "scrollParent"
  },
  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: tt
  },
  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: Qe,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: "[x-arrow]"
  },
  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: et,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: "flip",
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: "viewport",
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: !1,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: !1
  },
  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: !1,
    /** @prop {ModifierFn} */
    fn: ft
  },
  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: at
  },
  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: Xe,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: !0,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: "bottom",
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: "right"
  },
  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: Ye,
    /** @prop {Function} */
    onLoad: qe,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: void 0
  }
}, lt = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: "bottom",
  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: !1,
  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: !0,
  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: !1,
  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function() {
  },
  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function() {
  },
  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: pt
}, N = function() {
  function e(t, r) {
    var o = this, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Fe(this, e), this.scheduleUpdate = function() {
      return requestAnimationFrame(o.update);
    }, this.update = ke(this.update.bind(this)), this.options = w({}, e.Defaults, n), this.state = {
      isDestroyed: !1,
      isCreated: !1,
      scrollParents: []
    }, this.reference = t && t.jquery ? t[0] : t, this.popper = r && r.jquery ? r[0] : r, this.options.modifiers = {}, Object.keys(w({}, e.Defaults.modifiers, n.modifiers)).forEach(function(s) {
      o.options.modifiers[s] = w({}, e.Defaults.modifiers[s] || {}, n.modifiers ? n.modifiers[s] : {});
    }), this.modifiers = Object.keys(this.options.modifiers).map(function(s) {
      return w({
        name: s
      }, o.options.modifiers[s]);
    }).sort(function(s, a) {
      return s.order - a.order;
    }), this.modifiers.forEach(function(s) {
      s.enabled && oe(s.onLoad) && s.onLoad(o.reference, o.popper, o.options, s, o.state);
    }), this.update();
    var i = this.options.eventsEnabled;
    i && this.enableEventListeners(), this.state.eventsEnabled = i;
  }
  return We(e, [{
    key: "update",
    value: function() {
      return Ie.call(this);
    }
  }, {
    key: "destroy",
    value: function() {
      return Ve.call(this);
    }
  }, {
    key: "enableEventListeners",
    value: function() {
      return je.call(this);
    }
  }, {
    key: "disableEventListeners",
    value: function() {
      return Ue.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */
    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */
  }]), e;
}();
N.Utils = (typeof window < "u" ? window : global).PopperUtils;
N.placements = me;
N.Defaults = lt;
const ut = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
};
function m(e, t, r) {
  e && t && r && (document.addEventListener ? e.addEventListener(t, r, !1) : e.attachEvent("on" + t, r));
}
function O(e, t, r) {
  e && t && (document.removeEventListener ? e.removeEventListener(t, r, !1) : e.detachEvent("on" + t, r));
}
const ct = we({
  props: {
    tagName: {
      type: String,
      default: "span"
    },
    trigger: {
      type: String,
      default: "hover",
      validator: (e) => [
        "clickToOpen",
        "click",
        // Same as clickToToggle, provided for backwards compatibility.
        "clickToToggle",
        "hover",
        "focus"
      ].indexOf(e) > -1
    },
    delayOnMouseOver: {
      type: Number,
      default: 10
    },
    delayOnMouseOut: {
      type: Number,
      default: 10
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    content: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    boundariesSelector: String,
    reference: {},
    forceShow: {
      type: Boolean,
      default: !1
    },
    dataValue: {
      default: null
    },
    appendToBody: {
      type: Boolean,
      default: !1
    },
    visibleArrow: {
      type: Boolean,
      default: !0
    },
    transition: {
      type: String,
      default: ""
    },
    stopPropagation: {
      type: Boolean,
      default: !1
    },
    preventDefault: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    rootClass: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      referenceElm: null,
      popperJS: null,
      showPopper: !1,
      currentPlacement: "",
      popperOptions: {
        placement: "bottom",
        computeStyle: {
          gpuAcceleration: !1
        }
      }
    };
  },
  watch: {
    showPopper(e) {
      e ? (this.$emit("show", this), this.popperJS && this.popperJS.enableEventListeners(), this.updatePopper()) : (this.popperJS && this.popperJS.disableEventListeners(), this.$emit("hide", this));
    },
    forceShow: {
      handler(e) {
        this[e ? "doShow" : "doClose"]();
      },
      immediate: !0
    },
    disabled(e) {
      e && (this.showPopper = !1);
    }
  },
  created() {
    this.appendedArrow = !1, this.appendedToBody = !1, this.popperOptions = Object.assign(this.popperOptions, this.options);
  },
  mounted() {
    switch (this.referenceElm = this.reference || this.$slots.reference[0].elm, this.popper = this.$slots.default[0].elm, this.trigger) {
      case "clickToOpen":
        m(this.referenceElm, "click", this.doShow), m(document, "click", this.handleDocumentClick), m(document, "touchstart", this.handleDocumentClick);
        break;
      case "click":
      case "clickToToggle":
        m(this.referenceElm, "click", this.doToggle), m(document, "click", this.handleDocumentClick), m(document, "touchstart", this.handleDocumentClick);
        break;
      case "hover":
        m(this.referenceElm, "mouseover", this.onMouseOver), m(this.popper, "mouseover", this.onMouseOver), m(this.referenceElm, "mouseout", this.onMouseOut), m(this.popper, "mouseout", this.onMouseOut);
        break;
      case "focus":
        m(this.referenceElm, "focus", this.onMouseOver), m(this.popper, "focus", this.onMouseOver), m(this.referenceElm, "blur", this.onMouseOut), m(this.popper, "blur", this.onMouseOut);
        break;
    }
  },
  methods: {
    doToggle(e) {
      this.stopPropagation && e.stopPropagation(), this.preventDefault && e.preventDefault(), this.forceShow || (this.showPopper = !this.showPopper);
    },
    doShow() {
      this.showPopper = !0;
    },
    doClose() {
      this.showPopper = !1;
    },
    doDestroy() {
      this.showPopper || (this.popperJS && (this.popperJS.destroy(), this.popperJS = null), this.appendedToBody && (this.appendedToBody = !1, document.body.removeChild(this.popper.parentElement)));
    },
    createPopper() {
      this.$nextTick(() => {
        if (this.visibleArrow && this.appendArrow(this.popper), this.appendToBody && !this.appendedToBody && (this.appendedToBody = !0, document.body.appendChild(this.popper.parentElement)), this.popperJS && this.popperJS.destroy && this.popperJS.destroy(), this.boundariesSelector) {
          const e = document.querySelector(
            this.boundariesSelector
          );
          e && (this.popperOptions.modifiers = Object.assign(
            {},
            this.popperOptions.modifiers
          ), this.popperOptions.modifiers.preventOverflow = Object.assign(
            {},
            this.popperOptions.modifiers.preventOverflow
          ), this.popperOptions.modifiers.preventOverflow.boundariesElement = e);
        }
        this.popperOptions.onCreate = () => {
          this.$emit("created", this), this.$nextTick(this.updatePopper);
        }, this.popperJS = new N(
          this.referenceElm,
          this.popper,
          this.popperOptions
        );
      });
    },
    destroyPopper() {
      O(this.referenceElm, "click", this.doToggle), O(this.referenceElm, "mouseup", this.doClose), O(this.referenceElm, "mousedown", this.doShow), O(this.referenceElm, "focus", this.doShow), O(this.referenceElm, "blur", this.doClose), O(this.referenceElm, "mouseout", this.onMouseOut), O(this.referenceElm, "mouseover", this.onMouseOver), O(document, "click", this.handleDocumentClick), this.showPopper = !1, this.doDestroy();
    },
    appendArrow(e) {
      if (this.appendedArrow)
        return;
      this.appendedArrow = !0;
      const t = document.createElement("div");
      t.setAttribute("x-arrow", ""), t.className = "popper__arrow", e.appendChild(t);
    },
    updatePopper() {
      this.popperJS ? this.popperJS.scheduleUpdate() : this.createPopper();
    },
    onMouseOver() {
      clearTimeout(this._timer), this._timer = setTimeout(() => {
        this.showPopper = !0;
      }, this.delayOnMouseOver);
    },
    onMouseOut() {
      clearTimeout(this._timer), this._timer = setTimeout(() => {
        this.showPopper = !1;
      }, this.delayOnMouseOut);
    },
    handleDocumentClick(e) {
      !this.$el || !this.referenceElm || this.elementContains(this.$el, e.target) || this.elementContains(this.referenceElm, e.target) || !this.popper || this.elementContains(this.popper, e.target) || (this.$emit("documentClick", this), !this.forceShow && (this.showPopper = !1));
    },
    elementContains(e, t) {
      return typeof e.contains == "function" ? e.contains(t) : !1;
    }
  },
  destroyed() {
    this.destroyPopper();
  }
});
function ht(e, t, r, o, n, i) {
  return be(), ye(Oe(e.tagName), {
    class: Y({ "popper-active": e.showPopper })
  }, {
    default: q(() => [
      Ee(Se, {
        name: e.transition,
        "enter-active-class": e.enterActiveClass,
        "leave-active-class": e.leaveActiveClass,
        onAfterLeave: e.doDestroy
      }, {
        default: q(() => [
          Pe(Te("span", {
            ref: "popper",
            class: Y(e.rootClass)
          }, [
            G(e.$slots, "default", {}, () => [
              Ce(xe(e.content), 1)
            ])
          ], 2), [
            [Le, !e.disabled && e.showPopper]
          ])
        ]),
        _: 3
      }, 8, ["name", "enter-active-class", "leave-active-class", "onAfterLeave"]),
      G(e.$slots, "reference")
    ]),
    _: 3
  }, 8, ["class"]);
}
const vt = /* @__PURE__ */ ut(ct, [["render", ht]]);
export {
  vt as default
};
