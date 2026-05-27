/*! Our embeddable contains third-party, open source software and/or libraries. To view them and their license terms, go to https://developer.zendesk.com/documentation/classic-web-widget-sdks/web-widget/getting-started/legal/ */
(globalThis.webpackChunk_zendesk_web_widget_messenger = globalThis.webpackChunk_zendesk_web_widget_messenger || []).push([
    [8301], {
        68746(e, t, n) {
            "use strict";
            n.d(t, {
                m: () => N
            });
            var o = n(82017),
                r = n(54464),
                a = n(93763),
                i = n.n(a),
                l = n(70157),
                s = n(69174),
                c = n(8544),
                p = n(7662),
                u = n(67185),
                f = n(32531),
                d = n(98804);

            function m(e) {
                return {
                    auto: "auto",
                    top: "top",
                    "top-start": "top-start",
                    "top-end": "top-end",
                    bottom: "bottom",
                    "bottom-start": "bottom-start",
                    "bottom-end": "bottom-end",
                    end: "right",
                    "end-top": "right-start",
                    "end-bottom": "right-end",
                    start: "left",
                    "start-top": "left-start",
                    "start-bottom": "left-end"
                }[e]
            }
            var h = n(29446),
                g = n(39680),
                y = n(28750),
                b = n(87254),
                T = n(54665);
            const A = "tooltip.paragraph",
                E = l.Ay.p.attrs({
                    "data-garden-id": A,
                    "data-garden-version": "8.76.9"
                }).withConfig({
                    displayName: "StyledParagraph",
                    componentId: "sc-wuqkfc-0"
                })(["margin:0;", ";"], (e => (0, b.A)(A, e)));
            E.defaultProps = {
                theme: T.A
            };
            const w = "tooltip.title",
                S = l.Ay.strong.attrs({
                    "data-garden-id": w,
                    "data-garden-version": "8.76.9"
                }).withConfig({
                    displayName: "StyledTitle",
                    componentId: "sc-vnjcvz-0"
                })(["display:none;margin:0;font-weight:", ";", ";"], (e => e.theme.fontWeights.semibold), (e => (0, b.A)(w, e)));
            S.defaultProps = {
                theme: T.A
            };
            const _ = "tooltip.tooltip",
                v = l.Ay.div.attrs({
                    "data-garden-id": _,
                    "data-garden-version": "8.76.9"
                }).withConfig({
                    displayName: "StyledTooltip",
                    componentId: "sc-gzzjq4-0"
                })(["display:inline-block;box-sizing:border-box;direction:", ";text-align:", ";font-weight:", ";", ";&[aria-hidden='true']{display:none;}", ";", ";"], (e => e.theme.rtl && "rtl"), (e => e.theme.rtl ? "right" : "left"), (e => e.theme.fontWeights.regular), (e => (e => {
                    let t, n, o, r, a, i, s, {
                            theme: c,
                            size: p,
                            type: u,
                            placement: f,
                            hasArrow: d
                        } = e,
                        m = 1.5 * c.space.base + "px",
                        y = c.borderRadii.sm,
                        b = "0 1em",
                        T = "nowrap",
                        A = (0, h.A)(5 * c.space.base, c.fontSizes.sm),
                        w = c.fontSizes.sm;
                    return "small" !== p && (y = c.borderRadii.md, n = "break-word", T = "normal", a = "break-word"), "extra-large" === p ? (b = 10 * c.space.base + "px", t = "460px", A = (0, h.A)(5 * c.space.base, c.fontSizes.md), r = 2.5 * c.space.base + "px") : "large" === p ? (b = 5 * c.space.base + "px", t = "270px", A = (0, h.A)(5 * c.space.base, c.fontSizes.md), r = 2 * c.space.base + "px") : "medium" === p && (b = "1em", t = "140px", A = (0, h.A)(4 * c.space.base, c.fontSizes.sm)), "extra-large" !== p && "large" !== p || (w = c.fontSizes.md, o = "block"), d && ("small" === p || "medium" === p ? (i = m, s = "dark" === u ? "1px" : "0") : (s = "dark" === u ? "2px" : "1px", "large" === p ? (m = 2 * c.space.base + "px", i = m) : "extra-large" === p && (m = 3 * c.space.base + "px", i = 2.5 * c.space.base + "px"))), (0, l.AH)(["margin:", ";border-radius:", ";padding:", ";max-width:", ";line-height:", ";word-wrap:", ";white-space:", ";font-size:", ";overflow-wrap:", ";", ";", "{margin-top:", ";}", "{display:", ";}"], m, y, b, t, A, a, T, w, n, d && (0, g.A)({
                        top: "bottom",
                        "top-start": "bottom-left",
                        "top-end": "bottom-right",
                        right: "left",
                        "right-start": "left-top",
                        "right-end": "left-bottom",
                        bottom: "top",
                        "bottom-start": "top-left",
                        "bottom-end": "top-right",
                        left: "right",
                        "left-start": "right-top",
                        "left-end": "right-bottom"
                    }[f] || "top", {
                        size: i,
                        inset: s
                    }), E, r, S, o)
                })(e)), (e => {
                    let t, n, {
                            theme: o,
                            type: r
                        } = e,
                        a = o.shadows.lg(`${o.space.base}px`, 2 * o.space.base + "px", (0, y.A)("chromeHue", 600, o, .15)),
                        i = (0, y.A)("chromeHue", 700, o),
                        s = (0, y.A)("background", 600, o);
                    return "light" === r && (a = o.shadows.lg(3 * o.space.base + "px", 5 * o.space.base + "px", (0, y.A)("chromeHue", 600, o, .15)), t = `${o.borders.sm} ${(0,y.A)("neutralHue",300,o)}`, i = (0, y.A)("background", 600, o), s = (0, y.A)("neutralHue", 700, o), n = (0, y.A)("foreground", 600, o)), (0, l.AH)(["border:", ";box-shadow:", ";background-color:", ";color:", ";", "{color:", ";}"], t, a, i, s, S, n)
                }), (e => (0, b.A)(_, e)));
            v.defaultProps = {
                theme: T.A
            };
            const C = l.Ay.div.withConfig({
                displayName: "StyledTooltipWrapper",
                componentId: "sc-1b7q9q6-0"
            })(["transition:opacity 10ms;opacity:1;z-index:", ";&[aria-hidden='true']{visibility:hidden;opacity:0;}"], (e => e.zIndex));
            C.defaultProps = {
                theme: T.A
            };
            const x = ["auto", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "end", "end-top", "end-bottom", "start", "start-top", "start-bottom"],
                N = e => {
                    let {
                        id: t,
                        delayMS: n,
                        isInitialVisible: a,
                        content: i,
                        refKey: h,
                        placement: g,
                        eventsEnabled: y,
                        popperModifiers: b,
                        children: T,
                        hasArrow: A,
                        size: E,
                        type: w,
                        appendToNode: S,
                        zIndex: _,
                        isVisible: x,
                        ...N
                    } = e;
                    const {
                        rtl: O
                    } = (0, o.useContext)(l.Dx), D = (0, o.useRef)(), {
                        isVisible: R,
                        getTooltipProps: k,
                        getTriggerProps: I,
                        openTooltip: L,
                        closeTooltip: M
                    } = (0, c.f)({
                        id: t,
                        delayMilliseconds: n,
                        isVisible: a
                    }), P = (0, p.oK)(x, R);
                    (0, o.useEffect)((() => {
                        P && D.current && D.current()
                    }), [P, i]);
                    const z = O ? function(e) {
                            const t = m(e);
                            return {
                                left: "right",
                                "left-start": "right-start",
                                "left-end": "right-end",
                                "top-start": "top-end",
                                "top-end": "top-start",
                                right: "left",
                                "right-start": "left-start",
                                "right-end": "left-end",
                                "bottom-start": "bottom-end",
                                "bottom-end": "bottom-start"
                            }[t] || t
                        }(g) : m(g),
                        U = o.Children.only(T),
                        H = {
                            preventOverflow: {
                                boundariesElement: "window"
                            },
                            ...b
                        };
                    return o.createElement(u.Ay, null, o.createElement(f.A, null, (e => {
                        let {
                            ref: t
                        } = e;
                        return (0, o.cloneElement)(U, I({ ...U.props,
                            [h]: (0, s.A)([t, U.ref ? U.ref : null])
                        }))
                    })), o.createElement(d.Ay, {
                        placement: z,
                        eventsEnabled: P && y,
                        modifiers: H
                    }, (e => {
                        let {
                            ref: t,
                            style: n,
                            scheduleUpdate: a,
                            placement: l
                        } = e;
                        D.current = a;
                        const {
                            onFocus: s,
                            onBlur: c,
                            ...u
                        } = N;
                        let f = E;
                        void 0 === f && (f = "dark" === w ? "small" : "large");
                        const d = {
                                hasArrow: A,
                                placement: l,
                                size: f,
                                onFocus: (0, p.mK)(s, (() => {
                                    L()
                                })),
                                onBlur: (0, p.mK)(c, (() => {
                                    M(0)
                                })),
                                "aria-hidden": !P,
                                type: w,
                                ...u
                            },
                            m = o.createElement(C, {
                                ref: P ? t : null,
                                style: n,
                                zIndex: _,
                                "aria-hidden": !P
                            }, o.createElement(v, k(d), i));
                        return S ? (0, r.createPortal)(m, S) : m
                    })))
                };
            N.displayName = "Tooltip", N.propTypes = {
                appendToNode: i().any,
                hasArrow: i().bool,
                delayMS: i().number,
                eventsEnabled: i().bool,
                id: i().string,
                content: i().node.isRequired,
                placement: i().oneOf(x),
                popperModifiers: i().any,
                size: i().oneOf(["small", "medium", "large", "extra-large"]),
                type: i().oneOf(["light", "dark"]),
                zIndex: i().oneOfType([i().number, i().string]),
                isInitialVisible: i().bool,
                refKey: i().string
            }, N.defaultProps = {
                hasArrow: !0,
                eventsEnabled: !0,
                type: "dark",
                placement: "top",
                delayMS: 500,
                refKey: "ref"
            }
        },
        49168(e, t, n) {
            "use strict";
            var o = n(87929),
                r = {
                    "text/plain": "Text",
                    "text/html": "Url",
                    default: "Text"
                };
            e.exports = function(e, t) {
                var n, a, i, l, s, c, p = !1;
                t || (t = {}), n = t.debug || !1;
                try {
                    if (i = o(), l = document.createRange(), s = document.getSelection(), (c = document.createElement("span")).textContent = e, c.ariaHidden = "true", c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", (function(o) {
                            if (o.stopPropagation(), t.format)
                                if (o.preventDefault(), void 0 === o.clipboardData) {
                                    n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                                    var a = r[t.format] || r.default;
                                    window.clipboardData.setData(a, e)
                                } else o.clipboardData.clearData(), o.clipboardData.setData(t.format, e);
                            t.onCopy && (o.preventDefault(), t.onCopy(o.clipboardData))
                        })), document.body.appendChild(c), l.selectNodeContents(c), s.addRange(l), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
                    p = !0
                } catch (o) {
                    n && console.error("unable to copy using execCommand: ", o), n && console.warn("trying IE specific stuff");
                    try {
                        window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), p = !0
                    } catch (o) {
                        n && console.error("unable to copy using clipboardData: ", o), n && console.error("falling back to prompt"), a = function(e) {
                            var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                            return e.replace(/#{\s*key\s*}/g, t)
                        }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(a, e)
                    }
                } finally {
                    s && ("function" == typeof s.removeRange ? s.removeRange(l) : s.removeAllRanges()), c && document.body.removeChild(c), i()
                }
                return p
            }
        },
        1045(e, t, n) {
            "use strict";

            function o(e) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, o(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CopyToClipboard = void 0;
            var r = l(n(82017)),
                a = l(n(49168)),
                i = ["text", "onCopy", "options", "children"];

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) {
                        g(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function p(e, t) {
                if (null == e) return {};
                var n, o, r = function(e, t) {
                    if (null == e) return {};
                    var n, o, r = {},
                        a = Object.keys(e);
                    for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function f(e, t) {
                return f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, f(e, t)
            }

            function d(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = h(e);
                    if (t) {
                        var a = h(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return function(e, t) {
                        if (t && ("object" === o(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return m(e)
                    }(this, n)
                }
            }

            function m(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function h(e) {
                return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, h(e)
            }

            function g(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var y = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && f(e, t)
                }(s, e);
                var t, n, o, l = d(s);

                function s() {
                    var e;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s);
                    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                    return g(m(e = l.call.apply(l, [this].concat(n))), "onClick", (function(t) {
                        var n = e.props,
                            o = n.text,
                            i = n.onCopy,
                            l = n.children,
                            s = n.options,
                            c = r.default.Children.only(l),
                            p = (0, a.default)(o, s);
                        i && i(o, p), c && c.props && "function" == typeof c.props.onClick && c.props.onClick(t)
                    })), e
                }
                return t = s, (n = [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = (e.text, e.onCopy, e.options, e.children),
                            n = p(e, i),
                            o = r.default.Children.only(t);
                        return r.default.cloneElement(o, c(c({}, n), {}, {
                            onClick: this.onClick
                        }))
                    }
                }]) && u(t.prototype, n), o && u(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(r.default.PureComponent);
            t.CopyToClipboard = y, g(y, "defaultProps", {
                onCopy: void 0,
                options: void 0
            })
        },
        68926(e, t, n) {
            "use strict";
            var o = n(1045).CopyToClipboard;
            o.CopyToClipboard = o, e.exports = o
        },
        87929(e) {
            e.exports = function() {
                var e = document.getSelection();
                if (!e.rangeCount) return function() {};
                for (var t = document.activeElement, n = [], o = 0; o < e.rangeCount; o++) n.push(e.getRangeAt(o));
                switch (t.tagName.toUpperCase()) {
                    case "INPUT":
                    case "TEXTAREA":
                        t.blur();
                        break;
                    default:
                        t = null
                }
                return e.removeAllRanges(),
                    function() {
                        "Caret" === e.type && e.removeAllRanges(), e.rangeCount || n.forEach((function(t) {
                            e.addRange(t)
                        })), t && t.focus()
                    }
            }
        },
        97519(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => le
            });
            const {
                entries: o,
                setPrototypeOf: r,
                isFrozen: a,
                getPrototypeOf: i,
                getOwnPropertyDescriptor: l
            } = Object;
            let {
                freeze: s,
                seal: c,
                create: p
            } = Object, {
                apply: u,
                construct: f
            } = "undefined" != typeof Reflect && Reflect;
            s || (s = function(e) {
                return e
            }), c || (c = function(e) {
                return e
            }), u || (u = function(e, t) {
                for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) o[r - 2] = arguments[r];
                return e.apply(t, o)
            }), f || (f = function(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                return new e(...n)
            });
            const d = N(Array.prototype.forEach),
                m = N(Array.prototype.lastIndexOf),
                h = N(Array.prototype.pop),
                g = N(Array.prototype.push),
                y = N(Array.prototype.splice),
                b = N(String.prototype.toLowerCase),
                T = N(String.prototype.toString),
                A = N(String.prototype.match),
                E = N(String.prototype.replace),
                w = N(String.prototype.indexOf),
                S = N(String.prototype.trim),
                _ = N(Object.prototype.hasOwnProperty),
                v = N(RegExp.prototype.test),
                C = (x = TypeError, function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return f(x, t)
                });
            var x;

            function N(e) {
                return function(t) {
                    t instanceof RegExp && (t.lastIndex = 0);
                    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
                    return u(e, t, o)
                }
            }

            function O(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b;
                r && r(e, null);
                let o = t.length;
                for (; o--;) {
                    let r = t[o];
                    if ("string" == typeof r) {
                        const e = n(r);
                        e !== r && (a(t) || (t[o] = e), r = e)
                    }
                    e[r] = !0
                }
                return e
            }

            function D(e) {
                for (let t = 0; t < e.length; t++) {
                    _(e, t) || (e[t] = null)
                }
                return e
            }

            function R(e) {
                const t = p(null);
                for (const [n, r] of o(e)) {
                    _(e, n) && (Array.isArray(r) ? t[n] = D(r) : r && "object" == typeof r && r.constructor === Object ? t[n] = R(r) : t[n] = r)
                }
                return t
            }

            function k(e, t) {
                for (; null !== e;) {
                    const n = l(e, t);
                    if (n) {
                        if (n.get) return N(n.get);
                        if ("function" == typeof n.value) return N(n.value)
                    }
                    e = i(e)
                }
                return function() {
                    return null
                }
            }
            const I = s(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
                L = s(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
                M = s(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
                P = s(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
                z = s(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
                U = s(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
                H = s(["#text"]),
                F = s(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]),
                j = s(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
                B = s(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
                W = s(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
                G = c(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
                Y = c(/<%[\w\W]*|[\w\W]*%>/gm),
                q = c(/\$\{[\w\W]*/gm),
                K = c(/^data-[\-\w.\u00B7-\uFFFF]+$/),
                X = c(/^aria-[\-\w]+$/),
                V = c(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
                $ = c(/^(?:\w+script|data):/i),
                Z = c(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
                J = c(/^html$/i),
                Q = c(/^[a-z][.\w]*(-[.\w]+)+$/i);
            var ee = Object.freeze({
                __proto__: null,
                ARIA_ATTR: X,
                ATTR_WHITESPACE: Z,
                CUSTOM_ELEMENT: Q,
                DATA_ATTR: K,
                DOCTYPE_NAME: J,
                ERB_EXPR: Y,
                IS_ALLOWED_URI: V,
                IS_SCRIPT_OR_DATA: $,
                MUSTACHE_EXPR: G,
                TMPLIT_EXPR: q
            });
            const te = 1,
                ne = 3,
                oe = 7,
                re = 8,
                ae = 9,
                ie = function() {
                    return "undefined" == typeof window ? null : window
                };
            var le = function e() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie();
                const n = t => e(t);
                if (n.version = "3.4.0", n.removed = [], !t || !t.document || t.document.nodeType !== ae || !t.Element) return n.isSupported = !1, n;
                let {
                    document: r
                } = t;
                const a = r,
                    i = a.currentScript,
                    {
                        DocumentFragment: l,
                        HTMLTemplateElement: c,
                        Node: u,
                        Element: f,
                        NodeFilter: x,
                        NamedNodeMap: N = t.NamedNodeMap || t.MozNamedAttrMap,
                        HTMLFormElement: D,
                        DOMParser: G,
                        trustedTypes: Y
                    } = t,
                    q = f.prototype,
                    K = k(q, "cloneNode"),
                    X = k(q, "remove"),
                    $ = k(q, "nextSibling"),
                    Z = k(q, "childNodes"),
                    Q = k(q, "parentNode");
                if ("function" == typeof c) {
                    const e = r.createElement("template");
                    e.content && e.content.ownerDocument && (r = e.content.ownerDocument)
                }
                let le, se = "";
                const {
                    implementation: ce,
                    createNodeIterator: pe,
                    createDocumentFragment: ue,
                    getElementsByTagName: fe
                } = r, {
                    importNode: de
                } = a;
                let me = {
                    afterSanitizeAttributes: [],
                    afterSanitizeElements: [],
                    afterSanitizeShadowDOM: [],
                    beforeSanitizeAttributes: [],
                    beforeSanitizeElements: [],
                    beforeSanitizeShadowDOM: [],
                    uponSanitizeAttribute: [],
                    uponSanitizeElement: [],
                    uponSanitizeShadowNode: []
                };
                n.isSupported = "function" == typeof o && "function" == typeof Q && ce && void 0 !== ce.createHTMLDocument;
                const {
                    MUSTACHE_EXPR: he,
                    ERB_EXPR: ge,
                    TMPLIT_EXPR: ye,
                    DATA_ATTR: be,
                    ARIA_ATTR: Te,
                    IS_SCRIPT_OR_DATA: Ae,
                    ATTR_WHITESPACE: Ee,
                    CUSTOM_ELEMENT: we
                } = ee;
                let {
                    IS_ALLOWED_URI: Se
                } = ee, _e = null;
                const ve = O({}, [...I, ...L, ...M, ...z, ...H]);
                let Ce = null;
                const xe = O({}, [...F, ...j, ...B, ...W]);
                let Ne = Object.seal(p(null, {
                        tagNameCheck: {
                            writable: !0,
                            configurable: !1,
                            enumerable: !0,
                            value: null
                        },
                        attributeNameCheck: {
                            writable: !0,
                            configurable: !1,
                            enumerable: !0,
                            value: null
                        },
                        allowCustomizedBuiltInElements: {
                            writable: !0,
                            configurable: !1,
                            enumerable: !0,
                            value: !1
                        }
                    })),
                    Oe = null,
                    De = null;
                const Re = Object.seal(p(null, {
                    tagCheck: {
                        writable: !0,
                        configurable: !1,
                        enumerable: !0,
                        value: null
                    },
                    attributeCheck: {
                        writable: !0,
                        configurable: !1,
                        enumerable: !0,
                        value: null
                    }
                }));
                let ke = !0,
                    Ie = !0,
                    Le = !1,
                    Me = !0,
                    Pe = !1,
                    ze = !0,
                    Ue = !1,
                    He = !1,
                    Fe = !1,
                    je = !1,
                    Be = !1,
                    We = !1,
                    Ge = !0,
                    Ye = !1,
                    qe = !0,
                    Ke = !1,
                    Xe = {},
                    Ve = null;
                const $e = O({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
                let Ze = null;
                const Je = O({}, ["audio", "video", "img", "source", "image", "track"]);
                let Qe = null;
                const et = O({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
                    tt = "http://www.w3.org/1998/Math/MathML",
                    nt = "http://www.w3.org/2000/svg",
                    ot = "http://www.w3.org/1999/xhtml";
                let rt = ot,
                    at = !1,
                    it = null;
                const lt = O({}, [tt, nt, ot], T);
                let st = O({}, ["mi", "mo", "mn", "ms", "mtext"]),
                    ct = O({}, ["annotation-xml"]);
                const pt = O({}, ["title", "style", "font", "a", "script"]);
                let ut = null;
                const ft = ["application/xhtml+xml", "text/html"];
                let dt = null,
                    mt = null;
                const ht = r.createElement("form"),
                    gt = function(e) {
                        return e instanceof RegExp || e instanceof Function
                    },
                    yt = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (!mt || mt !== e) {
                            if (e && "object" == typeof e || (e = {}), e = R(e), ut = -1 === ft.indexOf(e.PARSER_MEDIA_TYPE) ? "text/html" : e.PARSER_MEDIA_TYPE, dt = "application/xhtml+xml" === ut ? T : b, _e = _(e, "ALLOWED_TAGS") ? O({}, e.ALLOWED_TAGS, dt) : ve, Ce = _(e, "ALLOWED_ATTR") ? O({}, e.ALLOWED_ATTR, dt) : xe, it = _(e, "ALLOWED_NAMESPACES") ? O({}, e.ALLOWED_NAMESPACES, T) : lt, Qe = _(e, "ADD_URI_SAFE_ATTR") ? O(R(et), e.ADD_URI_SAFE_ATTR, dt) : et, Ze = _(e, "ADD_DATA_URI_TAGS") ? O(R(Je), e.ADD_DATA_URI_TAGS, dt) : Je, Ve = _(e, "FORBID_CONTENTS") ? O({}, e.FORBID_CONTENTS, dt) : $e, Oe = _(e, "FORBID_TAGS") ? O({}, e.FORBID_TAGS, dt) : R({}), De = _(e, "FORBID_ATTR") ? O({}, e.FORBID_ATTR, dt) : R({}), Xe = !!_(e, "USE_PROFILES") && e.USE_PROFILES, ke = !1 !== e.ALLOW_ARIA_ATTR, Ie = !1 !== e.ALLOW_DATA_ATTR, Le = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Me = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR, Pe = e.SAFE_FOR_TEMPLATES || !1, ze = !1 !== e.SAFE_FOR_XML, Ue = e.WHOLE_DOCUMENT || !1, je = e.RETURN_DOM || !1, Be = e.RETURN_DOM_FRAGMENT || !1, We = e.RETURN_TRUSTED_TYPE || !1, Fe = e.FORCE_BODY || !1, Ge = !1 !== e.SANITIZE_DOM, Ye = e.SANITIZE_NAMED_PROPS || !1, qe = !1 !== e.KEEP_CONTENT, Ke = e.IN_PLACE || !1, Se = e.ALLOWED_URI_REGEXP || V, rt = e.NAMESPACE || ot, st = e.MATHML_TEXT_INTEGRATION_POINTS || st, ct = e.HTML_INTEGRATION_POINTS || ct, Ne = e.CUSTOM_ELEMENT_HANDLING || p(null), e.CUSTOM_ELEMENT_HANDLING && gt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Ne.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && gt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Ne.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Ne.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Pe && (Ie = !1), Be && (je = !0), Xe && (_e = O({}, H), Ce = p(null), !0 === Xe.html && (O(_e, I), O(Ce, F)), !0 === Xe.svg && (O(_e, L), O(Ce, j), O(Ce, W)), !0 === Xe.svgFilters && (O(_e, M), O(Ce, j), O(Ce, W)), !0 === Xe.mathMl && (O(_e, z), O(Ce, B), O(Ce, W))), Re.tagCheck = null, Re.attributeCheck = null, e.ADD_TAGS && ("function" == typeof e.ADD_TAGS ? Re.tagCheck = e.ADD_TAGS : (_e === ve && (_e = R(_e)), O(_e, e.ADD_TAGS, dt))), e.ADD_ATTR && ("function" == typeof e.ADD_ATTR ? Re.attributeCheck = e.ADD_ATTR : (Ce === xe && (Ce = R(Ce)), O(Ce, e.ADD_ATTR, dt))), e.ADD_URI_SAFE_ATTR && O(Qe, e.ADD_URI_SAFE_ATTR, dt), e.FORBID_CONTENTS && (Ve === $e && (Ve = R(Ve)), O(Ve, e.FORBID_CONTENTS, dt)), e.ADD_FORBID_CONTENTS && (Ve === $e && (Ve = R(Ve)), O(Ve, e.ADD_FORBID_CONTENTS, dt)), qe && (_e["#text"] = !0), Ue && O(_e, ["html", "head", "body"]), _e.table && (O(_e, ["tbody"]), delete Oe.tbody), e.TRUSTED_TYPES_POLICY) {
                                if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML) throw C('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                                if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL) throw C('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                                le = e.TRUSTED_TYPES_POLICY, se = le.createHTML("")
                            } else void 0 === le && (le = function(e, t) {
                                if ("object" != typeof e || "function" != typeof e.createPolicy) return null;
                                let n = null;
                                const o = "data-tt-policy-suffix";
                                t && t.hasAttribute(o) && (n = t.getAttribute(o));
                                const r = "dompurify" + (n ? "#" + n : "");
                                try {
                                    return e.createPolicy(r, {
                                        createHTML: e => e,
                                        createScriptURL: e => e
                                    })
                                } catch (e) {
                                    return console.warn("TrustedTypes policy " + r + " could not be created."), null
                                }
                            }(Y, i)), null !== le && "string" == typeof se && (se = le.createHTML(""));
                            s && s(e), mt = e
                        }
                    },
                    bt = O({}, [...L, ...M, ...P]),
                    Tt = O({}, [...z, ...U]),
                    At = function(e) {
                        g(n.removed, {
                            element: e
                        });
                        try {
                            Q(e).removeChild(e)
                        } catch (t) {
                            X(e)
                        }
                    },
                    Et = function(e, t) {
                        try {
                            g(n.removed, {
                                attribute: t.getAttributeNode(e),
                                from: t
                            })
                        } catch (e) {
                            g(n.removed, {
                                attribute: null,
                                from: t
                            })
                        }
                        if (t.removeAttribute(e), "is" === e)
                            if (je || Be) try {
                                At(t)
                            } catch (e) {} else try {
                                t.setAttribute(e, "")
                            } catch (e) {}
                    },
                    wt = function(e) {
                        let t = null,
                            n = null;
                        if (Fe) e = "<remove></remove>" + e;
                        else {
                            const t = A(e, /^[\r\n\t ]+/);
                            n = t && t[0]
                        }
                        "application/xhtml+xml" === ut && rt === ot && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                        const o = le ? le.createHTML(e) : e;
                        if (rt === ot) try {
                            t = (new G).parseFromString(o, ut)
                        } catch (e) {}
                        if (!t || !t.documentElement) {
                            t = ce.createDocument(rt, "template", null);
                            try {
                                t.documentElement.innerHTML = at ? se : o
                            } catch (e) {}
                        }
                        const a = t.body || t.documentElement;
                        return e && n && a.insertBefore(r.createTextNode(n), a.childNodes[0] || null), rt === ot ? fe.call(t, Ue ? "html" : "body")[0] : Ue ? t.documentElement : a
                    },
                    St = function(e) {
                        return pe.call(e.ownerDocument || e, e, x.SHOW_ELEMENT | x.SHOW_COMMENT | x.SHOW_TEXT | x.SHOW_PROCESSING_INSTRUCTION | x.SHOW_CDATA_SECTION, null)
                    },
                    _t = function(e) {
                        return e instanceof D && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof N) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
                    },
                    vt = function(e) {
                        return "function" == typeof u && e instanceof u
                    };

                function Ct(e, t, o) {
                    d(e, (e => {
                        e.call(n, t, o, mt)
                    }))
                }
                const xt = function(e) {
                        let t = null;
                        if (Ct(me.beforeSanitizeElements, e, null), _t(e)) return At(e), !0;
                        const o = dt(e.nodeName);
                        if (Ct(me.uponSanitizeElement, e, {
                                tagName: o,
                                allowedTags: _e
                            }), ze && e.hasChildNodes() && !vt(e.firstElementChild) && v(/<[/\w!]/g, e.innerHTML) && v(/<[/\w!]/g, e.textContent)) return At(e), !0;
                        if (ze && e.namespaceURI === ot && "style" === o && vt(e.firstElementChild)) return At(e), !0;
                        if (e.nodeType === oe) return At(e), !0;
                        if (ze && e.nodeType === re && v(/<[/\w]/g, e.data)) return At(e), !0;
                        if (Oe[o] || !(Re.tagCheck instanceof Function && Re.tagCheck(o)) && !_e[o]) {
                            if (!Oe[o] && Ot(o)) {
                                if (Ne.tagNameCheck instanceof RegExp && v(Ne.tagNameCheck, o)) return !1;
                                if (Ne.tagNameCheck instanceof Function && Ne.tagNameCheck(o)) return !1
                            }
                            if (qe && !Ve[o]) {
                                const t = Q(e) || e.parentNode,
                                    n = Z(e) || e.childNodes;
                                if (n && t) {
                                    for (let o = n.length - 1; o >= 0; --o) {
                                        const r = K(n[o], !0);
                                        r.__removalCount = (e.__removalCount || 0) + 1, t.insertBefore(r, $(e))
                                    }
                                }
                            }
                            return At(e), !0
                        }
                        return e instanceof f && ! function(e) {
                            let t = Q(e);
                            t && t.tagName || (t = {
                                namespaceURI: rt,
                                tagName: "template"
                            });
                            const n = b(e.tagName),
                                o = b(t.tagName);
                            return !!it[e.namespaceURI] && (e.namespaceURI === nt ? t.namespaceURI === ot ? "svg" === n : t.namespaceURI === tt ? "svg" === n && ("annotation-xml" === o || st[o]) : Boolean(bt[n]) : e.namespaceURI === tt ? t.namespaceURI === ot ? "math" === n : t.namespaceURI === nt ? "math" === n && ct[o] : Boolean(Tt[n]) : e.namespaceURI === ot ? !(t.namespaceURI === nt && !ct[o]) && !(t.namespaceURI === tt && !st[o]) && !Tt[n] && (pt[n] || !bt[n]) : !("application/xhtml+xml" !== ut || !it[e.namespaceURI]))
                        }(e) ? (At(e), !0) : "noscript" !== o && "noembed" !== o && "noframes" !== o || !v(/<\/no(script|embed|frames)/i, e.innerHTML) ? (Pe && e.nodeType === ne && (t = e.textContent, d([he, ge, ye], (e => {
                            t = E(t, e, " ")
                        })), e.textContent !== t && (g(n.removed, {
                            element: e.cloneNode()
                        }), e.textContent = t)), Ct(me.afterSanitizeElements, e, null), !1) : (At(e), !0)
                    },
                    Nt = function(e, t, n) {
                        if (De[t]) return !1;
                        if (Ge && ("id" === t || "name" === t) && (n in r || n in ht)) return !1;
                        if (Ie && !De[t] && v(be, t));
                        else if (ke && v(Te, t));
                        else if (Re.attributeCheck instanceof Function && Re.attributeCheck(t, e));
                        else if (!Ce[t] || De[t]) {
                            if (!(Ot(e) && (Ne.tagNameCheck instanceof RegExp && v(Ne.tagNameCheck, e) || Ne.tagNameCheck instanceof Function && Ne.tagNameCheck(e)) && (Ne.attributeNameCheck instanceof RegExp && v(Ne.attributeNameCheck, t) || Ne.attributeNameCheck instanceof Function && Ne.attributeNameCheck(t, e)) || "is" === t && Ne.allowCustomizedBuiltInElements && (Ne.tagNameCheck instanceof RegExp && v(Ne.tagNameCheck, n) || Ne.tagNameCheck instanceof Function && Ne.tagNameCheck(n)))) return !1
                        } else if (Qe[t]);
                        else if (v(Se, E(n, Ee, "")));
                        else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== w(n, "data:") || !Ze[e]) {
                            if (Le && !v(Ae, E(n, Ee, "")));
                            else if (n) return !1
                        } else;
                        return !0
                    },
                    Ot = function(e) {
                        return "annotation-xml" !== e && A(e, we)
                    },
                    Dt = function(e) {
                        Ct(me.beforeSanitizeAttributes, e, null);
                        const {
                            attributes: t
                        } = e;
                        if (!t || _t(e)) return;
                        const o = {
                            attrName: "",
                            attrValue: "",
                            keepAttr: !0,
                            allowedAttributes: Ce,
                            forceKeepAttr: void 0
                        };
                        let r = t.length;
                        for (; r--;) {
                            const a = t[r],
                                {
                                    name: i,
                                    namespaceURI: l,
                                    value: s
                                } = a,
                                c = dt(i),
                                p = s;
                            let u = "value" === i ? p : S(p);
                            if (o.attrName = c, o.attrValue = u, o.keepAttr = !0, o.forceKeepAttr = void 0, Ct(me.uponSanitizeAttribute, e, o), u = o.attrValue, !Ye || "id" !== c && "name" !== c || (Et(i, e), u = "user-content-" + u), ze && v(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, u)) {
                                Et(i, e);
                                continue
                            }
                            if ("attributename" === c && A(u, "href")) {
                                Et(i, e);
                                continue
                            }
                            if (o.forceKeepAttr) continue;
                            if (!o.keepAttr) {
                                Et(i, e);
                                continue
                            }
                            if (!Me && v(/\/>/i, u)) {
                                Et(i, e);
                                continue
                            }
                            Pe && d([he, ge, ye], (e => {
                                u = E(u, e, " ")
                            }));
                            const f = dt(e.nodeName);
                            if (Nt(f, c, u)) {
                                if (le && "object" == typeof Y && "function" == typeof Y.getAttributeType)
                                    if (l);
                                    else switch (Y.getAttributeType(f, c)) {
                                        case "TrustedHTML":
                                            u = le.createHTML(u);
                                            break;
                                        case "TrustedScriptURL":
                                            u = le.createScriptURL(u)
                                    }
                                if (u !== p) try {
                                    l ? e.setAttributeNS(l, i, u) : e.setAttribute(i, u), _t(e) ? At(e) : h(n.removed)
                                } catch (t) {
                                    Et(i, e)
                                }
                            } else Et(i, e)
                        }
                        Ct(me.afterSanitizeAttributes, e, null)
                    },
                    Rt = function(e) {
                        let t = null;
                        const n = St(e);
                        for (Ct(me.beforeSanitizeShadowDOM, e, null); t = n.nextNode();) Ct(me.uponSanitizeShadowNode, t, null), xt(t), Dt(t), t.content instanceof l && Rt(t.content);
                        Ct(me.afterSanitizeShadowDOM, e, null)
                    };
                return n.sanitize = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = null,
                        r = null,
                        i = null,
                        s = null;
                    if (at = !e, at && (e = "\x3c!--\x3e"), "string" != typeof e && !vt(e)) {
                        if ("function" != typeof e.toString) throw C("toString is not a function");
                        if ("string" != typeof(e = e.toString())) throw C("dirty is not a string, aborting")
                    }
                    if (!n.isSupported) return e;
                    if (He || yt(t), n.removed = [], "string" == typeof e && (Ke = !1), Ke) {
                        if (e.nodeName) {
                            const t = dt(e.nodeName);
                            if (!_e[t] || Oe[t]) throw C("root node is forbidden and cannot be sanitized in-place")
                        }
                    } else if (e instanceof u) o = wt("\x3c!----\x3e"), r = o.ownerDocument.importNode(e, !0), r.nodeType === te && "BODY" === r.nodeName || "HTML" === r.nodeName ? o = r : o.appendChild(r);
                    else {
                        if (!je && !Pe && !Ue && -1 === e.indexOf("<")) return le && We ? le.createHTML(e) : e;
                        if (o = wt(e), !o) return je ? null : We ? se : ""
                    }
                    o && Fe && At(o.firstChild);
                    const c = St(Ke ? e : o);
                    for (; i = c.nextNode();) xt(i), Dt(i), i.content instanceof l && Rt(i.content);
                    if (Ke) return e;
                    if (je) {
                        if (Pe) {
                            o.normalize();
                            let e = o.innerHTML;
                            d([he, ge, ye], (t => {
                                e = E(e, t, " ")
                            })), o.innerHTML = e
                        }
                        if (Be)
                            for (s = ue.call(o.ownerDocument); o.firstChild;) s.appendChild(o.firstChild);
                        else s = o;
                        return (Ce.shadowroot || Ce.shadowrootmode) && (s = de.call(a, s, !0)), s
                    }
                    let p = Ue ? o.outerHTML : o.innerHTML;
                    return Ue && _e["!doctype"] && o.ownerDocument && o.ownerDocument.doctype && o.ownerDocument.doctype.name && v(J, o.ownerDocument.doctype.name) && (p = "<!DOCTYPE " + o.ownerDocument.doctype.name + ">\n" + p), Pe && d([he, ge, ye], (e => {
                        p = E(p, e, " ")
                    })), le && We ? le.createHTML(p) : p
                }, n.setConfig = function() {
                    yt(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), He = !0
                }, n.clearConfig = function() {
                    mt = null, He = !1
                }, n.isValidAttribute = function(e, t, n) {
                    mt || yt({});
                    const o = dt(e),
                        r = dt(t);
                    return Nt(o, r, n)
                }, n.addHook = function(e, t) {
                    "function" == typeof t && g(me[e], t)
                }, n.removeHook = function(e, t) {
                    if (void 0 !== t) {
                        const n = m(me[e], t);
                        return -1 === n ? void 0 : y(me[e], n, 1)[0]
                    }
                    return h(me[e])
                }, n.removeHooks = function(e) {
                    me[e] = []
                }, n.removeAllHooks = function() {
                    me = {
                        afterSanitizeAttributes: [],
                        afterSanitizeElements: [],
                        afterSanitizeShadowDOM: [],
                        beforeSanitizeAttributes: [],
                        beforeSanitizeElements: [],
                        beforeSanitizeShadowDOM: [],
                        uponSanitizeAttribute: [],
                        uponSanitizeElement: [],
                        uponSanitizeShadowNode: []
                    }
                }, n
            }()
        }
    }
]);