(self.webpackChunk = self.webpackChunk || []).push([
    ["749"], {
        5487: function() {
            "use strict";
            window.tram = function(e) {
                function t(e, t) {
                    return (new U.Bare).init(e, t)
                }

                function n(e) {
                    var t = parseInt(e.slice(1), 16);
                    return [t >> 16 & 255, t >> 8 & 255, 255 & t]
                }

                function a(e, t, n) {
                    return "#" + (0x1000000 | e << 16 | t << 8 | n).toString(16).slice(1)
                }

                function i() {}

                function o(e, t, n) {
                    if (void 0 !== t && (n = t), void 0 === e) return n;
                    var a = n;
                    return K.test(e) || !$.test(e) ? a = parseInt(e, 10) : $.test(e) && (a = 1e3 * parseFloat(e)), 0 > a && (a = 0), a == a ? a : n
                }

                function c(e) {
                    X.debug && window && window.console.warn(e)
                }
                var r, d, l, s = function(e, t, n) {
                        function a(e) {
                            return "object" == typeof e
                        }

                        function i(e) {
                            return "function" == typeof e
                        }

                        function o() {}
                        return function c(r, d) {
                            function l() {
                                var e = new s;
                                return i(e.init) && e.init.apply(e, arguments), e
                            }

                            function s() {}
                            d === n && (d = r, r = Object), l.Bare = s;
                            var u, f = o[e] = r[e],
                                p = s[e] = l[e] = new o;
                            return p.constructor = l, l.mixin = function(t) {
                                return s[e] = l[e] = c(l, t)[e], l
                            }, l.open = function(e) {
                                if (u = {}, i(e) ? u = e.call(l, p, f, l, r) : a(e) && (u = e), a(u))
                                    for (var n in u) t.call(u, n) && (p[n] = u[n]);
                                return i(p.init) || (p.init = r), l
                            }, l.open(d)
                        }
                    }("prototype", {}.hasOwnProperty),
                    u = {
                        ease: ["ease", function(e, t, n, a) {
                            var i = (e /= a) * e,
                                o = i * e;
                            return t + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * e)
                        }],
                        "ease-in": ["ease-in", function(e, t, n, a) {
                            var i = (e /= a) * e,
                                o = i * e;
                            return t + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
                        }],
                        "ease-out": ["ease-out", function(e, t, n, a) {
                            var i = (e /= a) * e,
                                o = i * e;
                            return t + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * e)
                        }],
                        "ease-in-out": ["ease-in-out", function(e, t, n, a) {
                            var i = (e /= a) * e,
                                o = i * e;
                            return t + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
                        }],
                        linear: ["linear", function(e, t, n, a) {
                            return n * e / a + t
                        }],
                        "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(e, t, n, a) {
                            return n * (e /= a) * e + t
                        }],
                        "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(e, t, n, a) {
                            return -n * (e /= a) * (e - 2) + t
                        }],
                        "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(e, t, n, a) {
                            return (e /= a / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
                        }],
                        "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(e, t, n, a) {
                            return n * (e /= a) * e * e + t
                        }],
                        "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(e, t, n, a) {
                            return n * ((e = e / a - 1) * e * e + 1) + t
                        }],
                        "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(e, t, n, a) {
                            return (e /= a / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
                        }],
                        "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(e, t, n, a) {
                            return n * (e /= a) * e * e * e + t
                        }],
                        "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(e, t, n, a) {
                            return -n * ((e = e / a - 1) * e * e * e - 1) + t
                        }],
                        "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(e, t, n, a) {
                            return (e /= a / 2) < 1 ? n / 2 * e * e * e * e + t : -n / 2 * ((e -= 2) * e * e * e - 2) + t
                        }],
                        "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(e, t, n, a) {
                            return n * (e /= a) * e * e * e * e + t
                        }],
                        "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(e, t, n, a) {
                            return n * ((e = e / a - 1) * e * e * e * e + 1) + t
                        }],
                        "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(e, t, n, a) {
                            return (e /= a / 2) < 1 ? n / 2 * e * e * e * e * e + t : n / 2 * ((e -= 2) * e * e * e * e + 2) + t
                        }],
                        "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(e, t, n, a) {
                            return -n * Math.cos(e / a * (Math.PI / 2)) + n + t
                        }],
                        "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(e, t, n, a) {
                            return n * Math.sin(e / a * (Math.PI / 2)) + t
                        }],
                        "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(e, t, n, a) {
                            return -n / 2 * (Math.cos(Math.PI * e / a) - 1) + t
                        }],
                        "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(e, t, n, a) {
                            return 0 === e ? t : n * Math.pow(2, 10 * (e / a - 1)) + t
                        }],
                        "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(e, t, n, a) {
                            return e === a ? t + n : n * (-Math.pow(2, -10 * e / a) + 1) + t
                        }],
                        "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(e, t, n, a) {
                            return 0 === e ? t : e === a ? t + n : (e /= a / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + t : n / 2 * (-Math.pow(2, -10 * --e) + 2) + t
                        }],
                        "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(e, t, n, a) {
                            return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + t
                        }],
                        "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(e, t, n, a) {
                            return n * Math.sqrt(1 - (e = e / a - 1) * e) + t
                        }],
                        "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(e, t, n, a) {
                            return (e /= a / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + t : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
                        }],
                        "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(e, t, n, a, i) {
                            return void 0 === i && (i = 1.70158), n * (e /= a) * e * ((i + 1) * e - i) + t
                        }],
                        "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(e, t, n, a, i) {
                            return void 0 === i && (i = 1.70158), n * ((e = e / a - 1) * e * ((i + 1) * e + i) + 1) + t
                        }],
                        "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(e, t, n, a, i) {
                            return void 0 === i && (i = 1.70158), (e /= a / 2) < 1 ? n / 2 * e * e * (((i *= 1.525) + 1) * e - i) + t : n / 2 * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + t
                        }]
                    },
                    f = {
                        "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                        "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                        "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                    },
                    p = window,
                    E = "bkwld-tram",
                    g = /[\-\.0-9]/g,
                    b = /[A-Z]/,
                    I = "number",
                    y = /^(rgb|#)/,
                    T = /(em|cm|mm|in|pt|pc|px)$/,
                    m = /(em|cm|mm|in|pt|pc|px|%)$/,
                    O = /(deg|rad|turn)$/,
                    v = "unitless",
                    _ = /(all|none) 0s ease 0s/,
                    h = /^(width|height)$/,
                    A = document.createElement("a"),
                    R = ["Webkit", "Moz", "O", "ms"],
                    L = ["-webkit-", "-moz-", "-o-", "-ms-"],
                    S = function(e) {
                        if (e in A.style) return {
                            dom: e,
                            css: e
                        };
                        var t, n, a = "",
                            i = e.split("-");
                        for (t = 0; t < i.length; t++) a += i[t].charAt(0).toUpperCase() + i[t].slice(1);
                        for (t = 0; t < R.length; t++)
                            if ((n = R[t] + a) in A.style) return {
                                dom: n,
                                css: L[t] + e
                            }
                    },
                    N = t.support = {
                        bind: Function.prototype.bind,
                        transform: S("transform"),
                        transition: S("transition"),
                        backface: S("backface-visibility"),
                        timing: S("transition-timing-function")
                    };
                if (N.transition) {
                    var C = N.timing.dom;
                    if (A.style[C] = u["ease-in-back"][0], !A.style[C])
                        for (var w in f) u[w][0] = f[w]
                }
                var P = t.frame = (r = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame) && N.bind ? r.bind(p) : function(e) {
                        p.setTimeout(e, 16)
                    },
                    G = t.now = (l = (d = p.performance) && (d.now || d.webkitNow || d.msNow || d.mozNow)) && N.bind ? l.bind(d) : Date.now || function() {
                        return +new Date
                    },
                    M = s(function(t) {
                        function n(e, t) {
                            var n = function(e) {
                                    for (var t = -1, n = e ? e.length : 0, a = []; ++t < n;) {
                                        var i = e[t];
                                        i && a.push(i)
                                    }
                                    return a
                                }(("" + e).split(" ")),
                                a = n[0];
                            t = t || {};
                            var i = z[a];
                            if (!i) return c("Unsupported property: " + a);
                            if (!t.weak || !this.props[a]) {
                                var o = i[0],
                                    r = this.props[a];
                                return r || (r = this.props[a] = new o.Bare), r.init(this.$el, n, i, t), r
                            }
                        }

                        function a(e, t, a) {
                            if (e) {
                                var c = typeof e;
                                if (t || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == c && t) return this.timer = new B({
                                    duration: e,
                                    context: this,
                                    complete: i
                                }), void(this.active = !0);
                                if ("string" == c && t) {
                                    switch (e) {
                                        case "hide":
                                            d.call(this);
                                            break;
                                        case "stop":
                                            r.call(this);
                                            break;
                                        case "redraw":
                                            l.call(this);
                                            break;
                                        default:
                                            n.call(this, e, a && a[1])
                                    }
                                    return i.call(this)
                                }
                                if ("function" == c) return void e.call(this, this);
                                if ("object" == c) {
                                    var f = 0;
                                    u.call(this, e, function(e, t) {
                                        e.span > f && (f = e.span), e.stop(), e.animate(t)
                                    }, function(e) {
                                        "wait" in e && (f = o(e.wait, 0))
                                    }), s.call(this), f > 0 && (this.timer = new B({
                                        duration: f,
                                        context: this
                                    }), this.active = !0, t && (this.timer.complete = i));
                                    var p = this,
                                        E = !1,
                                        g = {};
                                    P(function() {
                                        u.call(p, e, function(e) {
                                            e.active && (E = !0, g[e.name] = e.nextStyle)
                                        }), E && p.$el.css(g)
                                    })
                                }
                            }
                        }

                        function i() {
                            if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                                var e = this.queue.shift();
                                a.call(this, e.options, !0, e.args)
                            }
                        }

                        function r(e) {
                            var t;
                            this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof e ? (t = {})[e] = 1 : t = "object" == typeof e && null != e ? e : this.props, u.call(this, t, f), s.call(this)
                        }

                        function d() {
                            r.call(this), this.el.style.display = "none"
                        }

                        function l() {
                            this.el.offsetHeight
                        }

                        function s() {
                            var e, t, n = [];
                            for (e in this.upstream && n.push(this.upstream), this.props)(t = this.props[e]).active && n.push(t.string);
                            n = n.join(","), this.style !== n && (this.style = n, this.el.style[N.transition.dom] = n)
                        }

                        function u(e, t, a) {
                            var i, o, c, r, d = t !== f,
                                l = {};
                            for (i in e) c = e[i], i in Q ? (l.transform || (l.transform = {}), l.transform[i] = c) : (b.test(i) && (i = i.replace(/[A-Z]/g, function(e) {
                                return "-" + e.toLowerCase()
                            })), i in z ? l[i] = c : (r || (r = {}), r[i] = c));
                            for (i in l) {
                                if (c = l[i], !(o = this.props[i])) {
                                    if (!d) continue;
                                    o = n.call(this, i)
                                }
                                t.call(this, o, c)
                            }
                            a && r && a.call(this, r)
                        }

                        function f(e) {
                            e.stop()
                        }

                        function p(e, t) {
                            e.set(t)
                        }

                        function g(e) {
                            this.$el.css(e)
                        }

                        function I(e, n) {
                            t[e] = function() {
                                return this.children ? y.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
                            }
                        }

                        function y(e, t) {
                            var n, a = this.children.length;
                            for (n = 0; a > n; n++) e.apply(this.children[n], t);
                            return this
                        }
                        t.init = function(t) {
                            if (this.$el = e(t), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, X.keepInherited && !X.fallback) {
                                var n = j(this.el, "transition");
                                n && !_.test(n) && (this.upstream = n)
                            }
                            N.backface && X.hideBackface && H(this.el, N.backface.css, "hidden")
                        }, I("add", n), I("start", a), I("wait", function(e) {
                            e = o(e, 0), this.active ? this.queue.push({
                                options: e
                            }) : (this.timer = new B({
                                duration: e,
                                context: this,
                                complete: i
                            }), this.active = !0)
                        }), I("then", function(e) {
                            return this.active ? (this.queue.push({
                                options: e,
                                args: arguments
                            }), void(this.timer.complete = i)) : c("No active transition timer. Use start() or wait() before then().")
                        }), I("next", i), I("stop", r), I("set", function(e) {
                            r.call(this, e), u.call(this, e, p, g)
                        }), I("show", function(e) {
                            "string" != typeof e && (e = "block"), this.el.style.display = e
                        }), I("hide", d), I("redraw", l), I("destroy", function() {
                            r.call(this), e.removeData(this.el, E), this.$el = this.el = null
                        })
                    }),
                    U = s(M, function(t) {
                        function n(t, n) {
                            var a = e.data(t, E) || e.data(t, E, new M.Bare);
                            return a.el || a.init(t), n ? a.start(n) : a
                        }
                        t.init = function(t, a) {
                            var i = e(t);
                            if (!i.length) return this;
                            if (1 === i.length) return n(i[0], a);
                            var o = [];
                            return i.each(function(e, t) {
                                o.push(n(t, a))
                            }), this.children = o, this
                        }
                    }),
                    V = s(function(e) {
                        function t() {
                            var e = this.get();
                            this.update("auto");
                            var t = this.get();
                            return this.update(e), t
                        }
                        e.init = function(e, t, n, a) {
                            this.$el = e, this.el = e[0];
                            var i, c, r, d = t[0];
                            n[2] && (d = n[2]), W[d] && (d = W[d]), this.name = d, this.type = n[1], this.duration = o(t[1], this.duration, 500), this.ease = (i = t[2], c = this.ease, r = "ease", void 0 !== c && (r = c), i in u ? i : r), this.delay = o(t[3], this.delay, 0), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = h.test(this.name), this.unit = a.unit || this.unit || X.defaultUnit, this.angle = a.angle || this.angle || X.defaultAngle, X.fallback || a.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + " " + this.duration + "ms" + ("ease" != this.ease ? " " + u[this.ease][0] : "") + (this.delay ? " " + this.delay + "ms" : ""))
                        }, e.set = function(e) {
                            e = this.convert(e, this.type), this.update(e), this.redraw()
                        }, e.transition = function(e) {
                            this.active = !0, e = this.convert(e, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == e && (e = t.call(this))), this.nextStyle = e
                        }, e.fallback = function(e) {
                            var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                            e = this.convert(e, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == e && (e = t.call(this))), this.tween = new D({
                                from: n,
                                to: e,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this
                            })
                        }, e.get = function() {
                            return j(this.el, this.name)
                        }, e.update = function(e) {
                            H(this.el, this.name, e)
                        }, e.stop = function() {
                            (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, H(this.el, this.name, this.get()));
                            var e = this.tween;
                            e && e.context && e.destroy()
                        }, e.convert = function(e, t) {
                            if ("auto" == e && this.auto) return e;
                            var n, i, o = "number" == typeof e,
                                r = "string" == typeof e;
                            switch (t) {
                                case I:
                                    if (o) return e;
                                    if (r && "" === e.replace(g, "")) return +e;
                                    i = "number(unitless)";
                                    break;
                                case y:
                                    if (r) {
                                        if ("" === e && this.original) return this.original;
                                        if (t.test(e)) return "#" == e.charAt(0) && 7 == e.length ? e : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e)) ? a(n[1], n[2], n[3]) : e).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                                    }
                                    i = "hex or rgb string";
                                    break;
                                case T:
                                    if (o) return e + this.unit;
                                    if (r && t.test(e)) return e;
                                    i = "number(px) or string(unit)";
                                    break;
                                case m:
                                    if (o) return e + this.unit;
                                    if (r && t.test(e)) return e;
                                    i = "number(px) or string(unit or %)";
                                    break;
                                case O:
                                    if (o) return e + this.angle;
                                    if (r && t.test(e)) return e;
                                    i = "number(deg) or string(angle)";
                                    break;
                                case v:
                                    if (o || r && m.test(e)) return e;
                                    i = "number(unitless) or string(unit or %)"
                            }
                            return c("Type warning: Expected: [" + i + "] Got: [" + typeof e + "] " + e), e
                        }, e.redraw = function() {
                            this.el.offsetHeight
                        }
                    }),
                    x = s(V, function(e, t) {
                        e.init = function() {
                            t.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), y))
                        }
                    }),
                    k = s(V, function(e, t) {
                        e.init = function() {
                            t.init.apply(this, arguments), this.animate = this.fallback
                        }, e.get = function() {
                            return this.$el[this.name]()
                        }, e.update = function(e) {
                            this.$el[this.name](e)
                        }
                    }),
                    F = s(V, function(e, t) {
                        function n(e, t) {
                            var n, a, i, o, c;
                            for (n in e) i = (o = Q[n])[0], a = o[1] || n, c = this.convert(e[n], i), t.call(this, a, c, i)
                        }
                        e.init = function() {
                            t.init.apply(this, arguments), this.current || (this.current = {}, Q.perspective && X.perspective && (this.current.perspective = X.perspective, H(this.el, this.name, this.style(this.current)), this.redraw()))
                        }, e.set = function(e) {
                            n.call(this, e, function(e, t) {
                                this.current[e] = t
                            }), H(this.el, this.name, this.style(this.current)), this.redraw()
                        }, e.transition = function(e) {
                            var t = this.values(e);
                            this.tween = new Y({
                                current: this.current,
                                values: t,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease
                            });
                            var n, a = {};
                            for (n in this.current) a[n] = n in t ? t[n] : this.current[n];
                            this.active = !0, this.nextStyle = this.style(a)
                        }, e.fallback = function(e) {
                            var t = this.values(e);
                            this.tween = new Y({
                                current: this.current,
                                values: t,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this
                            })
                        }, e.update = function() {
                            H(this.el, this.name, this.style(this.current))
                        }, e.style = function(e) {
                            var t, n = "";
                            for (t in e) n += t + "(" + e[t] + ") ";
                            return n
                        }, e.values = function(e) {
                            var t, a = {};
                            return n.call(this, e, function(e, n, i) {
                                a[e] = n, void 0 === this.current[e] && (t = 0, ~e.indexOf("scale") && (t = 1), this.current[e] = this.convert(t, i))
                            }), a
                        }
                    }),
                    D = s(function(t) {
                        function o() {
                            var e, t, n, a = d.length;
                            if (a)
                                for (P(o), t = G(), e = a; e--;)(n = d[e]) && n.render(t)
                        }
                        var r = {
                            ease: u.ease[1],
                            from: 0,
                            to: 1
                        };
                        t.init = function(e) {
                            this.duration = e.duration || 0, this.delay = e.delay || 0;
                            var t = e.ease || r.ease;
                            u[t] && (t = u[t][1]), "function" != typeof t && (t = r.ease), this.ease = t, this.update = e.update || i, this.complete = e.complete || i, this.context = e.context || this, this.name = e.name;
                            var n = e.from,
                                a = e.to;
                            void 0 === n && (n = r.from), void 0 === a && (a = r.to), this.unit = e.unit || "", "number" == typeof n && "number" == typeof a ? (this.begin = n, this.change = a - n) : this.format(a, n), this.value = this.begin + this.unit, this.start = G(), !1 !== e.autoplay && this.play()
                        }, t.play = function() {
                            this.active || (this.start || (this.start = G()), this.active = !0, 1 === d.push(this) && P(o))
                        }, t.stop = function() {
                            var t, n;
                            this.active && (this.active = !1, (n = e.inArray(this, d)) >= 0 && (t = d.slice(n + 1), d.length = n, t.length && (d = d.concat(t))))
                        }, t.render = function(e) {
                            var t, n = e - this.start;
                            if (this.delay) {
                                if (n <= this.delay) return;
                                n -= this.delay
                            }
                            if (n < this.duration) {
                                var i, o, c = this.ease(n, 0, 1, this.duration);
                                return t = this.startRGB ? (i = this.startRGB, o = this.endRGB, a(i[0] + c * (o[0] - i[0]), i[1] + c * (o[1] - i[1]), i[2] + c * (o[2] - i[2]))) : Math.round((this.begin + c * this.change) * l) / l, this.value = t + this.unit, void this.update.call(this.context, this.value)
                            }
                            t = this.endHex || this.begin + this.change, this.value = t + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                        }, t.format = function(e, t) {
                            if (t += "", "#" == (e += "").charAt(0)) return this.startRGB = n(t), this.endRGB = n(e), this.endHex = e, this.begin = 0, void(this.change = 1);
                            if (!this.unit) {
                                var a = t.replace(g, "");
                                a !== e.replace(g, "") && c("Units do not match [tween]: " + t + ", " + e), this.unit = a
                            }
                            t = parseFloat(t), e = parseFloat(e), this.begin = this.value = t, this.change = e - t
                        }, t.destroy = function() {
                            this.stop(), this.context = null, this.ease = this.update = this.complete = i
                        };
                        var d = [],
                            l = 1e3
                    }),
                    B = s(D, function(e) {
                        e.init = function(e) {
                            this.duration = e.duration || 0, this.complete = e.complete || i, this.context = e.context, this.play()
                        }, e.render = function(e) {
                            e - this.start < this.duration || (this.complete.call(this.context), this.destroy())
                        }
                    }),
                    Y = s(D, function(e, t) {
                        e.init = function(e) {
                            var t, n;
                            for (t in this.context = e.context, this.update = e.update, this.tweens = [], this.current = e.current, e.values) n = e.values[t], this.current[t] !== n && this.tweens.push(new D({
                                name: t,
                                from: this.current[t],
                                to: n,
                                duration: e.duration,
                                delay: e.delay,
                                ease: e.ease,
                                autoplay: !1
                            }));
                            this.play()
                        }, e.render = function(e) {
                            var t, n, a = this.tweens.length,
                                i = !1;
                            for (t = a; t--;)(n = this.tweens[t]).context && (n.render(e), this.current[n.name] = n.value, i = !0);
                            return i ? void(this.update && this.update.call(this.context)) : this.destroy()
                        }, e.destroy = function() {
                            if (t.destroy.call(this), this.tweens) {
                                var e;
                                for (e = this.tweens.length; e--;) this.tweens[e].destroy();
                                this.tweens = null, this.current = null
                            }
                        }
                    }),
                    X = t.config = {
                        debug: !1,
                        defaultUnit: "px",
                        defaultAngle: "deg",
                        keepInherited: !1,
                        hideBackface: !1,
                        perspective: "",
                        fallback: !N.transition,
                        agentTests: []
                    };
                t.fallback = function(e) {
                    if (!N.transition) return X.fallback = !0;
                    X.agentTests.push("(" + e + ")");
                    var t = RegExp(X.agentTests.join("|"), "i");
                    X.fallback = t.test(navigator.userAgent)
                }, t.fallback("6.0.[2-5] Safari"), t.tween = function(e) {
                    return new D(e)
                }, t.delay = function(e, t, n) {
                    return new B({
                        complete: t,
                        duration: e,
                        context: n
                    })
                }, e.fn.tram = function(e) {
                    return t.call(null, this, e)
                };
                var H = e.style,
                    j = e.css,
                    W = {
                        transform: N.transform && N.transform.css
                    },
                    z = {
                        color: [x, y],
                        background: [x, y, "background-color"],
                        "outline-color": [x, y],
                        "border-color": [x, y],
                        "border-top-color": [x, y],
                        "border-right-color": [x, y],
                        "border-bottom-color": [x, y],
                        "border-left-color": [x, y],
                        "border-width": [V, T],
                        "border-top-width": [V, T],
                        "border-right-width": [V, T],
                        "border-bottom-width": [V, T],
                        "border-left-width": [V, T],
                        "border-spacing": [V, T],
                        "letter-spacing": [V, T],
                        margin: [V, T],
                        "margin-top": [V, T],
                        "margin-right": [V, T],
                        "margin-bottom": [V, T],
                        "margin-left": [V, T],
                        padding: [V, T],
                        "padding-top": [V, T],
                        "padding-right": [V, T],
                        "padding-bottom": [V, T],
                        "padding-left": [V, T],
                        "outline-width": [V, T],
                        opacity: [V, I],
                        top: [V, m],
                        right: [V, m],
                        bottom: [V, m],
                        left: [V, m],
                        "font-size": [V, m],
                        "text-indent": [V, m],
                        "word-spacing": [V, m],
                        width: [V, m],
                        "min-width": [V, m],
                        "max-width": [V, m],
                        height: [V, m],
                        "min-height": [V, m],
                        "max-height": [V, m],
                        "line-height": [V, v],
                        "scroll-top": [k, I, "scrollTop"],
                        "scroll-left": [k, I, "scrollLeft"]
                    },
                    Q = {};
                N.transform && (z.transform = [F], Q = {
                    x: [m, "translateX"],
                    y: [m, "translateY"],
                    rotate: [O],
                    rotateX: [O],
                    rotateY: [O],
                    scale: [I],
                    scaleX: [I],
                    scaleY: [I],
                    skew: [O],
                    skewX: [O],
                    skewY: [O]
                }), N.transform && N.backface && (Q.z = [m, "translateZ"], Q.rotateZ = [O], Q.scaleZ = [I], Q.perspective = [T]);
                var K = /ms/,
                    $ = /s|\./;
                return e.tram = t
            }(window.jQuery)
        },
        5756: function(e, t, n) {
            "use strict";
            var a, i, o, c, r, d, l, s, u, f, p, E, g, b, I, y, T, m, O, v, _ = window.$,
                h = n(5487) && _.tram;
            (a = {}).VERSION = "1.6.0-Webflow", i = {}, o = Array.prototype, c = Object.prototype, r = Function.prototype, o.push, d = o.slice, o.concat, c.toString, l = c.hasOwnProperty, s = o.forEach, u = o.map, o.reduce, o.reduceRight, f = o.filter, o.every, p = o.some, E = o.indexOf, o.lastIndexOf, g = Object.keys, r.bind, b = a.each = a.forEach = function(e, t, n) {
                if (null == e) return e;
                if (s && e.forEach === s) e.forEach(t, n);
                else if (e.length === +e.length) {
                    for (var o = 0, c = e.length; o < c; o++)
                        if (t.call(n, e[o], o, e) === i) return
                } else
                    for (var r = a.keys(e), o = 0, c = r.length; o < c; o++)
                        if (t.call(n, e[r[o]], r[o], e) === i) return;
                return e
            }, a.map = a.collect = function(e, t, n) {
                var a = [];
                return null == e ? a : u && e.map === u ? e.map(t, n) : (b(e, function(e, i, o) {
                    a.push(t.call(n, e, i, o))
                }), a)
            }, a.find = a.detect = function(e, t, n) {
                var a;
                return I(e, function(e, i, o) {
                    if (t.call(n, e, i, o)) return a = e, !0
                }), a
            }, a.filter = a.select = function(e, t, n) {
                var a = [];
                return null == e ? a : f && e.filter === f ? e.filter(t, n) : (b(e, function(e, i, o) {
                    t.call(n, e, i, o) && a.push(e)
                }), a)
            }, I = a.some = a.any = function(e, t, n) {
                t || (t = a.identity);
                var o = !1;
                return null == e ? o : p && e.some === p ? e.some(t, n) : (b(e, function(e, a, c) {
                    if (o || (o = t.call(n, e, a, c))) return i
                }), !!o)
            }, a.contains = a.include = function(e, t) {
                return null != e && (E && e.indexOf === E ? -1 != e.indexOf(t) : I(e, function(e) {
                    return e === t
                }))
            }, a.delay = function(e, t) {
                var n = d.call(arguments, 2);
                return setTimeout(function() {
                    return e.apply(null, n)
                }, t)
            }, a.defer = function(e) {
                return a.delay.apply(a, [e, 1].concat(d.call(arguments, 1)))
            }, a.throttle = function(e) {
                var t, n, a;
                return function() {
                    t || (t = !0, n = arguments, a = this, h.frame(function() {
                        t = !1, e.apply(a, n)
                    }))
                }
            }, a.debounce = function(e, t, n) {
                var i, o, c, r, d, l = function() {
                    var s = a.now() - r;
                    s < t ? i = setTimeout(l, t - s) : (i = null, n || (d = e.apply(c, o), c = o = null))
                };
                return function() {
                    c = this, o = arguments, r = a.now();
                    var s = n && !i;
                    return i || (i = setTimeout(l, t)), s && (d = e.apply(c, o), c = o = null), d
                }
            }, a.defaults = function(e) {
                if (!a.isObject(e)) return e;
                for (var t = 1, n = arguments.length; t < n; t++) {
                    var i = arguments[t];
                    for (var o in i) void 0 === e[o] && (e[o] = i[o])
                }
                return e
            }, a.keys = function(e) {
                if (!a.isObject(e)) return [];
                if (g) return g(e);
                var t = [];
                for (var n in e) a.has(e, n) && t.push(n);
                return t
            }, a.has = function(e, t) {
                return l.call(e, t)
            }, a.isObject = function(e) {
                return e === Object(e)
            }, a.now = Date.now || function() {
                return new Date().getTime()
            }, a.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            }, y = /(.)^/, T = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }, m = /\\|'|\r|\n|\u2028|\u2029/g, O = function(e) {
                return "\\" + T[e]
            }, v = /^\s*(\w|\$)+\s*$/, a.template = function(e, t, n) {
                !t && n && (t = n);
                var i, o = RegExp([((t = a.defaults({}, t, a.templateSettings)).escape || y).source, (t.interpolate || y).source, (t.evaluate || y).source].join("|") + "|$", "g"),
                    c = 0,
                    r = "__p+='";
                e.replace(o, function(t, n, a, i, o) {
                    return r += e.slice(c, o).replace(m, O), c = o + t.length, n ? r += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : a ? r += "'+\n((__t=(" + a + "))==null?'':__t)+\n'" : i && (r += "';\n" + i + "\n__p+='"), t
                }), r += "';\n";
                var d = t.variable;
                if (d) {
                    if (!v.test(d)) throw Error("variable is not a bare identifier: " + d)
                } else r = "with(obj||{}){\n" + r + "}\n", d = "obj";
                r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
                try {
                    i = Function(t.variable || "obj", "_", r)
                } catch (e) {
                    throw e.source = r, e
                }
                var l = function(e) {
                    return i.call(this, e, a)
                };
                return l.source = "function(" + d + "){\n" + r + "}", l
            }, e.exports = a
        },
        9461: function(e, t, n) {
            "use strict";
            var a = n(3949);
            a.define("brand", e.exports = function(e) {
                var t, n = {},
                    i = document,
                    o = e("html"),
                    c = e("body"),
                    r = window.location,
                    d = /PhantomJS/i.test(navigator.userAgent),
                    l = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

                function s() {
                    var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || !!i.webkitFullscreenElement;
                    e(t).attr("style", n ? "display: none !important;" : "")
                }

                function u() {
                    var e = c.children(".w-webflow-badge"),
                        n = e.length && e.get(0) === t,
                        i = a.env("editor");
                    if (n) {
                        i && e.remove();
                        return
                    }
                    e.length && e.remove(), i || c.append(t)
                }
                return n.ready = function() {
                    var n, a, c, f = o.attr("data-wf-status"),
                        p = o.attr("data-wf-domain") || "";
                    /\.webflow\.io$/i.test(p) && r.hostname !== p && (f = !0), f && !d && (t = t || (n = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), a = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }), c = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow"), n.append(a, c), n[0]), u(), setTimeout(u, 500), e(i).off(l, s).on(l, s))
                }, n
            })
        },
        322: function(e, t, n) {
            "use strict";
            var a = n(3949);
            a.define("edit", e.exports = function(e, t, n) {
                if (n = n || {}, (a.env("test") || a.env("frame")) && !n.fixture && ! function() {
                        try {
                            return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST)
                        } catch (e) {
                            return !1
                        }
                    }()) return {
                    exit: 1
                };
                var i, o = e(window),
                    c = e(document.documentElement),
                    r = document.location,
                    d = "hashchange",
                    l = n.load || function() {
                        var t, n, a;
                        i = !0, window.WebflowEditor = !0, o.off(d, u), t = function(t) {
                            var n;
                            e.ajax({
                                url: p("https://editor-api.webflow.com/api/editor/view"),
                                data: {
                                    siteId: c.attr("data-wf-site")
                                },
                                xhrFields: {
                                    withCredentials: !0
                                },
                                dataType: "json",
                                crossDomain: !0,
                                success: (n = t, function(t) {
                                    var a, i, o;
                                    if (!t) return void console.error("Could not load editor data");
                                    t.thirdPartyCookiesSupported = n, i = (a = t.scriptPath).indexOf("//") >= 0 ? a : p("https://editor-api.webflow.com" + a), o = function() {
                                        window.WebflowEditor(t)
                                    }, e.ajax({
                                        type: "GET",
                                        url: i,
                                        dataType: "script",
                                        cache: !0
                                    }).then(o, f)
                                })
                            })
                        }, (n = window.document.createElement("iframe")).src = "https://webflow.com/site/third-party-cookie-check.html", n.style.display = "none", n.sandbox = "allow-scripts allow-same-origin", a = function(e) {
                            "WF_third_party_cookies_unsupported" === e.data ? (E(n, a), t(!1)) : "WF_third_party_cookies_supported" === e.data && (E(n, a), t(!0))
                        }, n.onerror = function() {
                            E(n, a), t(!1)
                        }, window.addEventListener("message", a, !1), window.document.body.appendChild(n)
                    },
                    s = !1;
                try {
                    s = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
                } catch (e) {}

                function u() {
                    !i && /\?edit/.test(r.hash) && l()
                }

                function f(e, t, n) {
                    throw console.error("Could not load editor script: " + t), n
                }

                function p(e) {
                    return e.replace(/([^:])\/\//g, "$1/")
                }

                function E(e, t) {
                    window.removeEventListener("message", t, !1), e.remove()
                }
                return /[?&](update)(?:[=&?]|$)/.test(r.search) || /\?update$/.test(r.href) ? function() {
                    var e = document.documentElement,
                        t = e.getAttribute("data-wf-site"),
                        n = e.getAttribute("data-wf-page"),
                        a = e.getAttribute("data-wf-item-slug"),
                        i = e.getAttribute("data-wf-collection"),
                        o = e.getAttribute("data-wf-domain");
                    if (t && n) {
                        var c = "pageId=" + n;
                        c += "&utm_source=legacy_editor", a && i && o && (c += "&domain=" + encodeURIComponent(o) + "&itemSlug=" + encodeURIComponent(a) + "&collectionId=" + i), window.location.href = "https://webflow.com/external/designer/" + t + "?" + c
                    }
                }() : s ? l() : r.search ? (/[?&](edit)(?:[=&?]|$)/.test(r.search) || /\?edit$/.test(r.href)) && l() : o.on(d, u).triggerHandler(d), {}
            })
        },
        2338: function(e, t, n) {
            "use strict";
            n(3949).define("focus-visible", e.exports = function() {
                return {
                    ready: function() {
                        if ("undefined" != typeof document) try {
                            document.querySelector(":focus-visible")
                        } catch (e) {
                            ! function(e) {
                                var t = !0,
                                    n = !1,
                                    a = null,
                                    i = {
                                        text: !0,
                                        search: !0,
                                        url: !0,
                                        tel: !0,
                                        email: !0,
                                        password: !0,
                                        number: !0,
                                        date: !0,
                                        month: !0,
                                        week: !0,
                                        time: !0,
                                        datetime: !0,
                                        "datetime-local": !0
                                    };

                                function o(e) {
                                    return !!e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList
                                }

                                function c(e) {
                                    e.getAttribute("data-wf-focus-visible") || e.setAttribute("data-wf-focus-visible", "true")
                                }

                                function r() {
                                    t = !1
                                }

                                function d() {
                                    document.addEventListener("mousemove", l), document.addEventListener("mousedown", l), document.addEventListener("mouseup", l), document.addEventListener("pointermove", l), document.addEventListener("pointerdown", l), document.addEventListener("pointerup", l), document.addEventListener("touchmove", l), document.addEventListener("touchstart", l), document.addEventListener("touchend", l)
                                }

                                function l(e) {
                                    e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", l), document.removeEventListener("mousedown", l), document.removeEventListener("mouseup", l), document.removeEventListener("pointermove", l), document.removeEventListener("pointerdown", l), document.removeEventListener("pointerup", l), document.removeEventListener("touchmove", l), document.removeEventListener("touchstart", l), document.removeEventListener("touchend", l))
                                }
                                document.addEventListener("keydown", function(n) {
                                    n.metaKey || n.altKey || n.ctrlKey || (o(e.activeElement) && c(e.activeElement), t = !0)
                                }, !0), document.addEventListener("mousedown", r, !0), document.addEventListener("pointerdown", r, !0), document.addEventListener("touchstart", r, !0), document.addEventListener("visibilitychange", function() {
                                    "hidden" === document.visibilityState && (n && (t = !0), d())
                                }, !0), d(), e.addEventListener("focus", function(e) {
                                    if (o(e.target)) {
                                        var n, a, r;
                                        (t || (a = (n = e.target).type, "INPUT" === (r = n.tagName) && i[a] && !n.readOnly || "TEXTAREA" === r && !n.readOnly || n.isContentEditable || 0)) && c(e.target)
                                    }
                                }, !0), e.addEventListener("blur", function(e) {
                                    if (o(e.target) && e.target.hasAttribute("data-wf-focus-visible")) {
                                        var t;
                                        n = !0, window.clearTimeout(a), a = window.setTimeout(function() {
                                            n = !1
                                        }, 100), (t = e.target).getAttribute("data-wf-focus-visible") && t.removeAttribute("data-wf-focus-visible")
                                    }
                                }, !0)
                            }(document)
                        }
                    }
                }
            })
        },
        8334: function(e, t, n) {
            "use strict";
            var a = n(3949);
            a.define("focus", e.exports = function() {
                var e = [],
                    t = !1;

                function n(n) {
                    t && (n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation(), e.unshift(n))
                }

                function i(n) {
                    var a, i;
                    i = (a = n.target).tagName, (/^a$/i.test(i) && null != a.href || /^(button|textarea)$/i.test(i) && !0 !== a.disabled || /^input$/i.test(i) && /^(button|reset|submit|radio|checkbox)$/i.test(a.type) && !a.disabled || !/^(button|input|textarea|select|a)$/i.test(i) && !Number.isNaN(Number.parseFloat(a.tabIndex)) || /^audio$/i.test(i) || /^video$/i.test(i) && !0 === a.controls) && (t = !0, setTimeout(() => {
                        for (t = !1, n.target.focus(); e.length > 0;) {
                            var a = e.pop();
                            a.target.dispatchEvent(new MouseEvent(a.type, a))
                        }
                    }, 0))
                }
                return {
                    ready: function() {
                        "undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within") && a.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", n, !0), document.addEventListener("click", n, !0))
                    }
                }
            })
        },
        7199: function(e) {
            "use strict";
            var t = window.jQuery,
                n = {},
                a = [],
                i = ".w-ix",
                o = {
                    reset: function(e, t) {
                        t.__wf_intro = null
                    },
                    intro: function(e, a) {
                        a.__wf_intro || (a.__wf_intro = !0, t(a).triggerHandler(n.types.INTRO))
                    },
                    outro: function(e, a) {
                        a.__wf_intro && (a.__wf_intro = null, t(a).triggerHandler(n.types.OUTRO))
                    }
                };
            n.triggers = {}, n.types = {
                INTRO: "w-ix-intro" + i,
                OUTRO: "w-ix-outro" + i
            }, n.init = function() {
                for (var e = a.length, i = 0; i < e; i++) {
                    var c = a[i];
                    c[0](0, c[1])
                }
                a = [], t.extend(n.triggers, o)
            }, n.async = function() {
                for (var e in o) {
                    var t = o[e];
                    o.hasOwnProperty(e) && (n.triggers[e] = function(e, n) {
                        a.push([t, n])
                    })
                }
            }, n.async(), e.exports = n
        },
        5134: function(e, t, n) {
            "use strict";
            var a = n(7199);

            function i(e, t, n) {
                var a = document.createEvent("CustomEvent");
                a.initCustomEvent(t, !0, !0, n || null), e.dispatchEvent(a)
            }
            var o = window.jQuery,
                c = {},
                r = ".w-ix";
            c.triggers = {}, c.types = {
                INTRO: "w-ix-intro" + r,
                OUTRO: "w-ix-outro" + r
            }, o.extend(c.triggers, {
                reset: function(e, t) {
                    a.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    a.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    a.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE")
                }
            }), c.dispatchCustomEvent = i, e.exports = c
        },
        941: function(e, t, n) {
            "use strict";
            var a = n(3949),
                i = n(6011);
            i.setEnv(a.env), a.define("ix2", e.exports = function() {
                return i
            })
        },
        3949: function(e, t, n) {
            "use strict";
            var a, i, o = {},
                c = {},
                r = [],
                d = window.Webflow || [],
                l = window.jQuery,
                s = l(window),
                u = l(document),
                f = l.isFunction,
                p = o._ = n(5756),
                E = o.tram = n(5487) && l.tram,
                g = !1,
                b = !1;

            function I(e) {
                o.env() && (f(e.design) && s.on("__wf_design", e.design), f(e.preview) && s.on("__wf_preview", e.preview)), f(e.destroy) && s.on("__wf_destroy", e.destroy), e.ready && f(e.ready) && function(e) {
                    if (g) return e.ready();
                    p.contains(r, e.ready) || r.push(e.ready)
                }(e)
            }

            function y(e) {
                var t;
                f(e.design) && s.off("__wf_design", e.design), f(e.preview) && s.off("__wf_preview", e.preview), f(e.destroy) && s.off("__wf_destroy", e.destroy), e.ready && f(e.ready) && (t = e, r = p.filter(r, function(e) {
                    return e !== t.ready
                }))
            }
            E.config.hideBackface = !1, E.config.keepInherited = !0, o.define = function(e, t, n) {
                c[e] && y(c[e]);
                var a = c[e] = t(l, p, n) || {};
                return I(a), a
            }, o.require = function(e) {
                return c[e]
            }, o.push = function(e) {
                if (g) {
                    f(e) && e();
                    return
                }
                d.push(e)
            }, o.env = function(e) {
                var t = window.__wf_design,
                    n = void 0 !== t;
                return e ? "design" === e ? n && t : "preview" === e ? n && !t : "slug" === e ? n && window.__wf_slug : "editor" === e ? window.WebflowEditor : "test" === e ? window.__wf_test : "frame" === e ? window !== window.top : void 0 : n
            };
            var T = navigator.userAgent.toLowerCase(),
                m = o.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
                O = o.env.chrome = /chrome/.test(T) && /Google/.test(navigator.vendor) && parseInt(T.match(/chrome\/(\d+)\./)[1], 10),
                v = o.env.ios = /(ipod|iphone|ipad)/.test(T);
            o.env.safari = /safari/.test(T) && !O && !v, m && u.on("touchstart mousedown", function(e) {
                a = e.target
            }), o.validClick = m ? function(e) {
                return e === a || l.contains(e, a)
            } : function() {
                return !0
            };
            var _ = "resize.webflow orientationchange.webflow load.webflow",
                h = "scroll.webflow " + _;

            function A(e, t) {
                var n = [],
                    a = {};
                return a.up = p.throttle(function(e) {
                    p.each(n, function(t) {
                        t(e)
                    })
                }), e && t && e.on(t, a.up), a.on = function(e) {
                    "function" == typeof e && (p.contains(n, e) || n.push(e))
                }, a.off = function(e) {
                    if (!arguments.length) {
                        n = [];
                        return
                    }
                    n = p.filter(n, function(t) {
                        return t !== e
                    })
                }, a
            }

            function R(e) {
                f(e) && e()
            }

            function L() {
                i && (i.reject(), s.off("load", i.resolve)), i = new l.Deferred, s.on("load", i.resolve)
            }
            o.resize = A(s, _), o.scroll = A(s, h), o.redraw = A(), o.location = function(e) {
                window.location = e
            }, o.env() && (o.location = function() {}), o.ready = function() {
                g = !0, b ? (b = !1, p.each(c, I)) : p.each(r, R), p.each(d, R), o.resize.up()
            }, o.load = function(e) {
                i.then(e)
            }, o.destroy = function(e) {
                e = e || {}, b = !0, s.triggerHandler("__wf_destroy"), null != e.domready && (g = e.domready), p.each(c, y), o.resize.off(), o.scroll.off(), o.redraw.off(), r = [], d = [], "pending" === i.state() && L()
            }, l(o.ready), L(), e.exports = window.Webflow = o
        },
        7624: function(e, t, n) {
            "use strict";
            var a = n(3949);
            a.define("links", e.exports = function(e, t) {
                var n, i, o, c = {},
                    r = e(window),
                    d = a.env(),
                    l = window.location,
                    s = document.createElement("a"),
                    u = "w--current",
                    f = /index\.(html|php)$/,
                    p = /\/$/;

                function E() {
                    var e = r.scrollTop(),
                        n = r.height();
                    t.each(i, function(t) {
                        if (!t.link.attr("hreflang")) {
                            var a = t.link,
                                i = t.sec,
                                o = i.offset().top,
                                c = i.outerHeight(),
                                r = .5 * n,
                                d = i.is(":visible") && o + c - r >= e && o + r <= e + n;
                            t.active !== d && (t.active = d, g(a, u, d))
                        }
                    })
                }

                function g(e, t, n) {
                    var a = e.hasClass(t);
                    (!n || !a) && (n || a) && (n ? e.addClass(t) : e.removeClass(t))
                }
                return c.ready = c.design = c.preview = function() {
                    n = d && a.env("design"), o = a.env("slug") || l.pathname || "", a.scroll.off(E), i = [];
                    for (var t = document.links, c = 0; c < t.length; ++c) ! function(t) {
                        if (!t.getAttribute("hreflang")) {
                            var a = n && t.getAttribute("href-disabled") || t.getAttribute("href");
                            if (s.href = a, !(a.indexOf(":") >= 0)) {
                                var c = e(t);
                                if (s.hash.length > 1 && s.host + s.pathname === l.host + l.pathname) {
                                    if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                                    var r = e(s.hash);
                                    r.length && i.push({
                                        link: c,
                                        sec: r,
                                        active: !1
                                    });
                                    return
                                }
                                "#" !== a && "" !== a && g(c, u, !d && s.href === l.href || a === o || f.test(a) && p.test(o))
                            }
                        }
                    }(t[c]);
                    i.length && (a.scroll.on(E), E())
                }, c
            })
        },
        286: function(e, t, n) {
            "use strict";
            var a = n(3949);
            a.define("scroll", e.exports = function(e) {
                var t = {
                        WF_CLICK_EMPTY: "click.wf-empty-link",
                        WF_CLICK_SCROLL: "click.wf-scroll"
                    },
                    n = window.location,
                    i = ! function() {
                        try {
                            return !!window.frameElement
                        } catch (e) {
                            return !0
                        }
                    }() ? window.history : null,
                    o = e(window),
                    c = e(document),
                    r = e(document.body),
                    d = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                        window.setTimeout(e, 15)
                    },
                    l = a.env("editor") ? ".w-editor-body" : "body",
                    s = "header, " + l + " > .header, " + l + " > .w-nav:not([data-no-scroll])",
                    u = 'a[href="#"]',
                    f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
                    p = document.createElement("style");
                p.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'));
                var E = /^#[a-zA-Z0-9][\w:.-]*$/;
                let g = "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");

                function b(e, t) {
                    var n;
                    switch (t) {
                        case "add":
                            (n = e.attr("tabindex")) ? e.attr("data-wf-tabindex-swap", n): e.attr("tabindex", "-1");
                            break;
                        case "remove":
                            (n = e.attr("data-wf-tabindex-swap")) ? (e.attr("tabindex", n), e.removeAttr("data-wf-tabindex-swap")) : e.removeAttr("tabindex")
                    }
                    e.toggleClass("wf-force-outline-none", "add" === t)
                }

                function I(t) {
                    var c = t.currentTarget;
                    if (!(a.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(c.className))) {
                        var l = E.test(c.hash) && c.host + c.pathname === n.host + n.pathname ? c.hash : "";
                        if ("" !== l) {
                            var u, f = e(l);
                            f.length && (t && (t.preventDefault(), t.stopPropagation()), u = l, n.hash !== u && i && i.pushState && !(a.env.chrome && "file:" === n.protocol) && (i.state && i.state.hash) !== u && i.pushState({
                                hash: u
                            }, "", u), window.setTimeout(function() {
                                ! function(t, n) {
                                    var a = o.scrollTop(),
                                        i = function(t) {
                                            var n = e(s),
                                                a = "fixed" === n.css("position") ? n.outerHeight() : 0,
                                                i = t.offset().top - a;
                                            if ("mid" === t.data("scroll")) {
                                                var c = o.height() - a,
                                                    r = t.outerHeight();
                                                r < c && (i -= Math.round((c - r) / 2))
                                            }
                                            return i
                                        }(t);
                                    if (a !== i) {
                                        var c = function(e, t, n) {
                                                if ("none" === document.body.getAttribute("data-wf-scroll-motion") || g.matches) return 0;
                                                var a = 1;
                                                return r.add(e).each(function(e, t) {
                                                    var n = parseFloat(t.getAttribute("data-scroll-time"));
                                                    !isNaN(n) && n >= 0 && (a = n)
                                                }), (472.143 * Math.log(Math.abs(t - n) + 125) - 2e3) * a
                                            }(t, a, i),
                                            l = Date.now(),
                                            u = function() {
                                                var e, t, o, r, s, f = Date.now() - l;
                                                window.scroll(0, (e = a, t = i, (o = f) > (r = c) ? t : e + (t - e) * ((s = o / r) < .5 ? 4 * s * s * s : (s - 1) * (2 * s - 2) * (2 * s - 2) + 1))), f <= c ? d(u) : "function" == typeof n && n()
                                            };
                                        d(u)
                                    }
                                }(f, function() {
                                    b(f, "add"), f.get(0).focus({
                                        preventScroll: !0
                                    }), b(f, "remove")
                                })
                            }, 300 * !t))
                        }
                    }
                }
                return {
                    ready: function() {
                        var {
                            WF_CLICK_EMPTY: e,
                            WF_CLICK_SCROLL: n
                        } = t;
                        c.on(n, f, I), c.on(e, u, function(e) {
                            e.preventDefault()
                        }), document.head.insertBefore(p, document.head.firstChild)
                    }
                }
            })
        },
        3695: function(e, t, n) {
            "use strict";
            n(3949).define("touch", e.exports = function(e) {
                var t = {},
                    n = window.getSelection;

                function a(t) {
                    var a, i, o = !1,
                        c = !1,
                        r = Math.min(Math.round(.04 * window.innerWidth), 40);

                    function d(e) {
                        var t = e.touches;
                        t && t.length > 1 || (o = !0, t ? (c = !0, a = t[0].clientX) : a = e.clientX, i = a)
                    }

                    function l(t) {
                        if (o) {
                            if (c && "mousemove" === t.type) {
                                t.preventDefault(), t.stopPropagation();
                                return
                            }
                            var a, d, l, s, f = t.touches,
                                p = f ? f[0].clientX : t.clientX,
                                E = p - i;
                            i = p, Math.abs(E) > r && n && "" === String(n()) && (a = "swipe", d = t, l = {
                                direction: E > 0 ? "right" : "left"
                            }, s = e.Event(a, {
                                originalEvent: d
                            }), e(d.target).trigger(s, l), u())
                        }
                    }

                    function s(e) {
                        if (o && (o = !1, c && "mouseup" === e.type)) {
                            e.preventDefault(), e.stopPropagation(), c = !1;
                            return
                        }
                    }

                    function u() {
                        o = !1
                    }
                    t.addEventListener("touchstart", d, !1), t.addEventListener("touchmove", l, !1), t.addEventListener("touchend", s, !1), t.addEventListener("touchcancel", u, !1), t.addEventListener("mousedown", d, !1), t.addEventListener("mousemove", l, !1), t.addEventListener("mouseup", s, !1), t.addEventListener("mouseout", u, !1), this.destroy = function() {
                        t.removeEventListener("touchstart", d, !1), t.removeEventListener("touchmove", l, !1), t.removeEventListener("touchend", s, !1), t.removeEventListener("touchcancel", u, !1), t.removeEventListener("mousedown", d, !1), t.removeEventListener("mousemove", l, !1), t.removeEventListener("mouseup", s, !1), t.removeEventListener("mouseout", u, !1), t = null
                    }
                }
                return e.event.special.tap = {
                    bindType: "click",
                    delegateType: "click"
                }, t.init = function(t) {
                    return (t = "string" == typeof t ? e(t).get(0) : t) ? new a(t) : null
                }, t.instance = t.init(document), t
            })
        },
        9858: function(e, t, n) {
            "use strict";
            var a = n(3949),
                i = n(5134);
            let o = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };

            function c(e, t) {
                i.dispatchCustomEvent(e, "IX3_COMPONENT_STATE_CHANGE", {
                    component: "dropdown",
                    state: t
                })
            }
            let r = /^#[a-zA-Z0-9\-_]+$/;
            a.define("dropdown", e.exports = function(e, t) {
                var n, d, l = t.debounce,
                    s = {},
                    u = a.env(),
                    f = !1,
                    p = a.env.touch,
                    E = ".w-dropdown",
                    g = "w--open",
                    b = i.triggers,
                    I = "focusout" + E,
                    y = "keydown" + E,
                    T = "mouseenter" + E,
                    m = "mousemove" + E,
                    O = "mouseleave" + E,
                    v = (p ? "click" : "mouseup") + E,
                    _ = "w-close" + E,
                    h = "setting" + E,
                    A = e(document);

                function R() {
                    n = u && a.env("design"), (d = A.find(E)).each(L)
                }

                function L(t, i) {
                    var c, d, s, f, p, b, m, O, R, L, G = e(i),
                        M = e.data(i, E);
                    M || (M = e.data(i, E, {
                        open: !1,
                        el: G,
                        config: {},
                        selectedIdx: -1
                    })), M.toggle = M.el.children(".w-dropdown-toggle"), M.list = M.el.children(".w-dropdown-list"), M.links = M.list.find("a:not(.w-dropdown .w-dropdown a)"), M.complete = (c = M, function() {
                        c.list.removeClass(g), c.toggle.removeClass(g), c.manageZ && c.el.css("z-index", "")
                    }), M.mouseLeave = (d = M, function() {
                        d.hovering = !1, d.links.is(":focus") || w(d)
                    }), M.mouseUpOutside = ((s = M).mouseUpOutside && A.off(v, s.mouseUpOutside), l(function(t) {
                        if (s.open) {
                            var n = e(t.target);
                            if (!n.closest(".w-dropdown-toggle").length) {
                                var i = -1 === e.inArray(s.el[0], n.parents(E)),
                                    o = a.env("editor");
                                if (i) {
                                    if (o) {
                                        var c = 1 === n.parents().length && 1 === n.parents("svg").length,
                                            r = n.parents(".w-editor-bem-EditorHoverControls").length;
                                        if (c || r) return
                                    }
                                    w(s)
                                }
                            }
                        }
                    })), M.mouseMoveOutside = (f = M, l(function(t) {
                        if (f.open) {
                            var n = e(t.target);
                            if (-1 === e.inArray(f.el[0], n.parents(E))) {
                                var a = n.parents(".w-editor-bem-EditorHoverControls").length,
                                    i = n.parents(".w-editor-bem-RTToolbar").length,
                                    o = e(".w-editor-bem-EditorOverlay"),
                                    c = o.find(".w-editor-edit-outline").length || o.find(".w-editor-bem-RTToolbar").length;
                                if (a || i || c) return;
                                f.hovering = !1, w(f)
                            }
                        }
                    })), S(M);
                    var U = M.toggle.attr("id"),
                        V = M.list.attr("id");
                    U || (U = "w-dropdown-toggle-" + t), V || (V = "w-dropdown-list-" + t), M.toggle.attr("id", U), M.toggle.attr("aria-controls", V), M.toggle.attr("aria-haspopup", "menu"), M.toggle.attr("aria-expanded", "false"), M.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"), "BUTTON" !== M.toggle.prop("tagName") && (M.toggle.attr("role", "button"), M.toggle.attr("tabindex") || M.toggle.attr("tabindex", "0")), M.list.attr("id", V), M.list.attr("aria-labelledby", U), M.links.each(function(e, t) {
                        t.hasAttribute("tabindex") || t.setAttribute("tabindex", "0"), r.test(t.hash) && t.addEventListener("click", w.bind(null, M))
                    }), M.el.off(E), M.toggle.off(E), M.nav && M.nav.off(E);
                    var x = N(M, !0);
                    n && M.el.on(h, (p = M, function(e, t) {
                        t = t || {}, S(p), !0 === t.open && C(p), !1 === t.open && w(p, {
                            immediate: !0
                        })
                    })), n || (u && (M.hovering = !1, w(M)), M.config.hover && M.toggle.on(T, (b = M, function() {
                        b.hovering = !0, C(b)
                    })), M.el.on(_, x), M.el.on(y, (m = M, function(e) {
                        if (!n && m.open) switch (m.selectedIdx = m.links.index(document.activeElement), e.keyCode) {
                            case o.HOME:
                                if (!m.open) return;
                                return m.selectedIdx = 0, P(m), e.preventDefault();
                            case o.END:
                                if (!m.open) return;
                                return m.selectedIdx = m.links.length - 1, P(m), e.preventDefault();
                            case o.ESCAPE:
                                return w(m), m.toggle.focus(), e.stopPropagation();
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                                return m.selectedIdx = Math.min(m.links.length - 1, m.selectedIdx + 1), P(m), e.preventDefault();
                            case o.ARROW_LEFT:
                            case o.ARROW_UP:
                                return m.selectedIdx = Math.max(-1, m.selectedIdx - 1), P(m), e.preventDefault()
                        }
                    })), M.el.on(I, (O = M, l(function(e) {
                        var {
                            relatedTarget: t,
                            target: n
                        } = e, a = O.el[0];
                        return a.contains(t) || a.contains(n) || w(O), e.stopPropagation()
                    }))), M.toggle.on(v, x), M.toggle.on(y, (L = N(R = M, !0), function(e) {
                        if (!n) {
                            if (!R.open) switch (e.keyCode) {
                                case o.ARROW_UP:
                                case o.ARROW_DOWN:
                                    return e.stopPropagation()
                            }
                            switch (e.keyCode) {
                                case o.SPACE:
                                case o.ENTER:
                                    return L(), e.stopPropagation(), e.preventDefault()
                            }
                        }
                    })), M.nav = M.el.closest(".w-nav"), M.nav.on(_, x))
                }

                function S(e) {
                    var t = Number(e.el.css("z-index"));
                    e.manageZ = 900 === t || 901 === t, e.config = {
                        hover: "true" === e.el.attr("data-hover") && !p,
                        delay: e.el.attr("data-delay")
                    }
                }

                function N(e, t) {
                    return l(function(n) {
                        if (e.open || n && "w-close" === n.type) return w(e, {
                            forceClose: t
                        });
                        C(e)
                    })
                }

                function C(t) {
                    if (!t.open) {
                        i = t.el[0], d.each(function(t, n) {
                            var a = e(n);
                            a.is(i) || a.has(i).length || a.triggerHandler(_)
                        }), t.open = !0, t.list.addClass(g), t.toggle.addClass(g), t.toggle.attr("aria-expanded", "true"), b.intro(0, t.el[0]), c(t.el[0], "open"), a.redraw.up(), t.manageZ && t.el.css("z-index", 901);
                        var i, o = a.env("editor");
                        n || A.on(v, t.mouseUpOutside), t.hovering && !o && t.el.on(O, t.mouseLeave), t.hovering && o && A.on(m, t.mouseMoveOutside), window.clearTimeout(t.delayId)
                    }
                }

                function w(e, {
                    immediate: t,
                    forceClose: n
                } = {}) {
                    if (e.open && (!e.config.hover || !e.hovering || n)) {
                        e.toggle.attr("aria-expanded", "false"), e.open = !1;
                        var a = e.config;
                        if (b.outro(0, e.el[0]), c(e.el[0], "close"), A.off(v, e.mouseUpOutside), A.off(m, e.mouseMoveOutside), e.el.off(O, e.mouseLeave), window.clearTimeout(e.delayId), !a.delay || t) return e.complete();
                        e.delayId = window.setTimeout(e.complete, a.delay)
                    }
                }

                function P(e) {
                    e.links[e.selectedIdx] && e.links[e.selectedIdx].focus()
                }
                return s.ready = R, s.design = function() {
                    f && A.find(E).each(function(t, n) {
                        e(n).triggerHandler(_)
                    }), f = !1, R()
                }, s.preview = function() {
                    f = !0, R()
                }, s
            })
        },
        1655: function(e, t, n) {
            "use strict";
            var a = n(3949),
                i = n(5134);
            let o = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };

            function c(e, t) {
                i.dispatchCustomEvent(e, "IX3_COMPONENT_STATE_CHANGE", {
                    component: "navbar",
                    state: t
                })
            }
            a.define("navbar", e.exports = function(e, t) {
                var n, r, d, l, s = {},
                    u = e.tram,
                    f = e(window),
                    p = e(document),
                    E = t.debounce,
                    g = a.env(),
                    b = ".w-nav",
                    I = "w--open",
                    y = "w--nav-dropdown-open",
                    T = "w--nav-dropdown-toggle-open",
                    m = "w--nav-dropdown-list-open",
                    O = "w--nav-link-open",
                    v = i.triggers,
                    _ = e();

                function h() {
                    a.resize.off(A)
                }

                function A() {
                    r.each(U)
                }

                function R(n, a) {
                    var i, c, r, s, u, E = e(a),
                        g = e.data(a, b);
                    g || (g = e.data(a, b, {
                        open: !1,
                        el: E,
                        config: {},
                        selectedIdx: -1
                    })), g.menu = E.find(".w-nav-menu"), g.links = g.menu.find(".w-nav-link"), g.dropdowns = g.menu.find(".w-dropdown"), g.dropdownToggle = g.menu.find(".w-dropdown-toggle"), g.dropdownList = g.menu.find(".w-dropdown-list"), g.button = E.find(".w-nav-button"), g.container = E.find(".w-container"), g.overlayContainerId = "w-nav-overlay-" + n, g.outside = ((i = g).outside && p.off("click" + b, i.outside), function(t) {
                        var n = e(t.target);
                        l && n.closest(".w-editor-bem-EditorOverlay").length || M(i, n)
                    });
                    var I = E.find(".w-nav-brand");
                    I && "/" === I.attr("href") && null == I.attr("aria-label") && I.attr("aria-label", "home"), g.button.attr("style", "-webkit-user-select: text;"), null == g.button.attr("aria-label") && g.button.attr("aria-label", "menu"), g.button.attr("role", "button"), g.button.attr("tabindex", "0"), g.button.attr("aria-controls", g.overlayContainerId), g.button.attr("aria-haspopup", "menu"), g.button.attr("aria-expanded", "false"), g.el.off(b), g.button.off(b), g.menu.off(b), N(g), d ? (S(g), g.el.on("setting" + b, (c = g, function(e, n) {
                        n = n || {};
                        var a = f.width();
                        N(c), !0 === n.open && F(c, !0), !1 === n.open && B(c, !0), c.open && t.defer(function() {
                            a !== f.width() && w(c)
                        })
                    }))) : ((r = g).overlay || (r.overlay = e('<div class="w-nav-overlay" data-wf-ignore />').appendTo(r.el), r.overlay.attr("id", r.overlayContainerId), r.parent = r.menu.parent(), B(r, !0)), g.button.on("click" + b, P(g)), g.menu.on("click" + b, "a", G(g)), g.button.on("keydown" + b, (s = g, function(e) {
                        switch (e.keyCode) {
                            case o.SPACE:
                            case o.ENTER:
                                return P(s)(), e.preventDefault(), e.stopPropagation();
                            case o.ESCAPE:
                                return B(s), e.preventDefault(), e.stopPropagation();
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                            case o.HOME:
                            case o.END:
                                if (!s.open) return e.preventDefault(), e.stopPropagation();
                                return e.keyCode === o.END ? s.selectedIdx = s.links.length - 1 : s.selectedIdx = 0, C(s), e.preventDefault(), e.stopPropagation()
                        }
                    })), g.el.on("keydown" + b, (u = g, function(e) {
                        if (u.open) switch (u.selectedIdx = u.links.index(document.activeElement), e.keyCode) {
                            case o.HOME:
                            case o.END:
                                return e.keyCode === o.END ? u.selectedIdx = u.links.length - 1 : u.selectedIdx = 0, C(u), e.preventDefault(), e.stopPropagation();
                            case o.ESCAPE:
                                return B(u), u.button.focus(), e.preventDefault(), e.stopPropagation();
                            case o.ARROW_LEFT:
                            case o.ARROW_UP:
                                return u.selectedIdx = Math.max(-1, u.selectedIdx - 1), C(u), e.preventDefault(), e.stopPropagation();
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                                return u.selectedIdx = Math.min(u.links.length - 1, u.selectedIdx + 1), C(u), e.preventDefault(), e.stopPropagation()
                        }
                    }))), U(n, a)
                }

                function L(t, n) {
                    var a = e.data(n, b);
                    a && (S(a), e.removeData(n, b))
                }

                function S(e) {
                    e.overlay && (B(e, !0), e.overlay.remove(), e.overlay = null)
                }

                function N(e) {
                    var n = {},
                        a = e.config || {},
                        i = n.animation = e.el.attr("data-animation") || "default";
                    n.animOver = /^over/.test(i), n.animDirect = /left$/.test(i) ? -1 : 1, a.animation !== i && e.open && t.defer(w, e), n.easing = e.el.attr("data-easing") || "ease", n.easing2 = e.el.attr("data-easing2") || "ease";
                    var o = e.el.attr("data-duration");
                    n.duration = null != o ? Number(o) : 400, n.docHeight = e.el.attr("data-doc-height"), e.config = n
                }

                function C(e) {
                    if (e.links[e.selectedIdx]) {
                        var t = e.links[e.selectedIdx];
                        t.focus(), G(t)
                    }
                }

                function w(e) {
                    e.open && (B(e, !0), F(e, !0))
                }

                function P(e) {
                    return E(function() {
                        e.open ? B(e) : F(e)
                    })
                }

                function G(t) {
                    return function(n) {
                        var i = e(this).attr("href");
                        if (!a.validClick(n.currentTarget)) return void n.preventDefault();
                        i && 0 === i.indexOf("#") && t.open && B(t)
                    }
                }
                s.ready = s.design = s.preview = function() {
                    d = g && a.env("design"), l = a.env("editor"), n = e(document.body), (r = p.find(b)).length && (r.each(R), h(), a.resize.on(A))
                }, s.destroy = function() {
                    _ = e(), h(), r && r.length && r.each(L)
                };
                var M = E(function(e, t) {
                    if (e.open) {
                        var n = t.closest(".w-nav-menu");
                        e.menu.is(n) || B(e)
                    }
                });

                function U(t, n) {
                    var a = e.data(n, b),
                        i = a.collapsed = "none" !== a.button.css("display");
                    if (!a.open || i || d || B(a, !0), a.container.length) {
                        var o, c = ("none" === (o = a.container.css(V)) && (o = ""), function(t, n) {
                            (n = e(n)).css(V, ""), "none" === n.css(V) && n.css(V, o)
                        });
                        a.links.each(c), a.dropdowns.each(c)
                    }
                    a.open && D(a)
                }
                var V = "max-width";

                function x(e, t) {
                    t.setAttribute("data-nav-menu-open", "")
                }

                function k(e, t) {
                    t.removeAttribute("data-nav-menu-open")
                }

                function F(e, t) {
                    if (!e.open) {
                        e.open = !0, e.menu.each(x), e.links.addClass(O), e.dropdowns.addClass(y), e.dropdownToggle.addClass(T), e.dropdownList.addClass(m), e.button.addClass(I);
                        var n = e.config;
                        ("none" === n.animation || !u.support.transform || n.duration <= 0) && (t = !0);
                        var i = D(e),
                            o = e.menu.outerHeight(!0),
                            r = e.menu.outerWidth(!0),
                            l = e.el.height(),
                            s = e.el[0];
                        if (U(0, s), v.intro(0, s), c(s, "open"), a.redraw.up(), d || p.on("click" + b, e.outside), t) return void E();
                        var f = "transform " + n.duration + "ms " + n.easing;
                        if (e.overlay && (_ = e.menu.prev(), e.overlay.show().append(e.menu)), n.animOver) {
                            u(e.menu).add(f).set({
                                x: n.animDirect * r,
                                height: i
                            }).start({
                                x: 0
                            }).then(E), e.overlay && e.overlay.width(r);
                            return
                        }
                        u(e.menu).add(f).set({
                            y: -(l + o)
                        }).start({
                            y: 0
                        }).then(E)
                    }

                    function E() {
                        e.button.attr("aria-expanded", "true")
                    }
                }

                function D(e) {
                    var t = e.config,
                        a = t.docHeight ? p.height() : n.height();
                    return t.animOver ? e.menu.height(a) : "fixed" !== e.el.css("position") && (a -= e.el.outerHeight(!0)), e.overlay && e.overlay.height(a), a
                }

                function B(e, t) {
                    if (e.open) {
                        e.open = !1, e.button.removeClass(I);
                        var n = e.config;
                        if (("none" === n.animation || !u.support.transform || n.duration <= 0) && (t = !0), v.outro(0, e.el[0]), c(e.el[0], "close"), p.off("click" + b, e.outside), t) {
                            u(e.menu).stop(), d();
                            return
                        }
                        var a = "transform " + n.duration + "ms " + n.easing2,
                            i = e.menu.outerHeight(!0),
                            o = e.menu.outerWidth(!0),
                            r = e.el.height();
                        if (n.animOver) return void u(e.menu).add(a).start({
                            x: o * n.animDirect
                        }).then(d);
                        u(e.menu).add(a).start({
                            y: -(r + i)
                        }).then(d)
                    }

                    function d() {
                        e.menu.height(""), u(e.menu).set({
                            x: 0,
                            y: 0
                        }), e.menu.each(k), e.links.removeClass(O), e.dropdowns.removeClass(y), e.dropdownToggle.removeClass(T), e.dropdownList.removeClass(m), e.overlay && e.overlay.children().length && (_.length ? e.menu.insertAfter(_) : e.menu.prependTo(e.parent), e.overlay.attr("style", "").hide()), e.el.triggerHandler("w-close"), e.button.attr("aria-expanded", "false")
                    }
                }
                return s
            })
        },
        3946: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                actionListPlaybackChanged: function() {
                    return j
                },
                animationFrameChanged: function() {
                    return F
                },
                clearRequested: function() {
                    return U
                },
                elementStateChanged: function() {
                    return H
                },
                eventListenerAdded: function() {
                    return V
                },
                eventStateChanged: function() {
                    return k
                },
                instanceAdded: function() {
                    return B
                },
                instanceRemoved: function() {
                    return X
                },
                instanceStarted: function() {
                    return Y
                },
                mediaQueriesDefined: function() {
                    return z
                },
                parameterChanged: function() {
                    return D
                },
                playbackRequested: function() {
                    return G
                },
                previewRequested: function() {
                    return P
                },
                rawDataImported: function() {
                    return S
                },
                sessionInitialized: function() {
                    return N
                },
                sessionStarted: function() {
                    return C
                },
                sessionStopped: function() {
                    return w
                },
                stopRequested: function() {
                    return M
                },
                testFrameRendered: function() {
                    return x
                },
                viewportWidthChanged: function() {
                    return W
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = n(7087),
                c = n(9468),
                {
                    IX2_RAW_DATA_IMPORTED: r,
                    IX2_SESSION_INITIALIZED: d,
                    IX2_SESSION_STARTED: l,
                    IX2_SESSION_STOPPED: s,
                    IX2_PREVIEW_REQUESTED: u,
                    IX2_PLAYBACK_REQUESTED: f,
                    IX2_STOP_REQUESTED: p,
                    IX2_CLEAR_REQUESTED: E,
                    IX2_EVENT_LISTENER_ADDED: g,
                    IX2_TEST_FRAME_RENDERED: b,
                    IX2_EVENT_STATE_CHANGED: I,
                    IX2_ANIMATION_FRAME_CHANGED: y,
                    IX2_PARAMETER_CHANGED: T,
                    IX2_INSTANCE_ADDED: m,
                    IX2_INSTANCE_STARTED: O,
                    IX2_INSTANCE_REMOVED: v,
                    IX2_ELEMENT_STATE_CHANGED: _,
                    IX2_ACTION_LIST_PLAYBACK_CHANGED: h,
                    IX2_VIEWPORT_WIDTH_CHANGED: A,
                    IX2_MEDIA_QUERIES_DEFINED: R
                } = o.IX2EngineActionTypes,
                {
                    reifyState: L
                } = c.IX2VanillaUtils,
                S = e => ({
                    type: r,
                    payload: { ...L(e)
                    }
                }),
                N = ({
                    hasBoundaryNodes: e,
                    reducedMotion: t
                }) => ({
                    type: d,
                    payload: {
                        hasBoundaryNodes: e,
                        reducedMotion: t
                    }
                }),
                C = () => ({
                    type: l
                }),
                w = () => ({
                    type: s
                }),
                P = ({
                    rawData: e,
                    defer: t
                }) => ({
                    type: u,
                    payload: {
                        defer: t,
                        rawData: e
                    }
                }),
                G = ({
                    actionTypeId: e = o.ActionTypeConsts.GENERAL_START_ACTION,
                    actionListId: t,
                    actionItemId: n,
                    eventId: a,
                    allowEvents: i,
                    immediate: c,
                    testManual: r,
                    verbose: d,
                    rawData: l
                }) => ({
                    type: f,
                    payload: {
                        actionTypeId: e,
                        actionListId: t,
                        actionItemId: n,
                        testManual: r,
                        eventId: a,
                        allowEvents: i,
                        immediate: c,
                        verbose: d,
                        rawData: l
                    }
                }),
                M = e => ({
                    type: p,
                    payload: {
                        actionListId: e
                    }
                }),
                U = () => ({
                    type: E
                }),
                V = (e, t) => ({
                    type: g,
                    payload: {
                        target: e,
                        listenerParams: t
                    }
                }),
                x = (e = 1) => ({
                    type: b,
                    payload: {
                        step: e
                    }
                }),
                k = (e, t) => ({
                    type: I,
                    payload: {
                        stateKey: e,
                        newState: t
                    }
                }),
                F = (e, t) => ({
                    type: y,
                    payload: {
                        now: e,
                        parameters: t
                    }
                }),
                D = (e, t) => ({
                    type: T,
                    payload: {
                        key: e,
                        value: t
                    }
                }),
                B = e => ({
                    type: m,
                    payload: { ...e
                    }
                }),
                Y = (e, t) => ({
                    type: O,
                    payload: {
                        instanceId: e,
                        time: t
                    }
                }),
                X = e => ({
                    type: v,
                    payload: {
                        instanceId: e
                    }
                }),
                H = (e, t, n, a) => ({
                    type: _,
                    payload: {
                        elementId: e,
                        actionTypeId: t,
                        current: n,
                        actionItem: a
                    }
                }),
                j = ({
                    actionListId: e,
                    isPlaying: t
                }) => ({
                    type: h,
                    payload: {
                        actionListId: e,
                        isPlaying: t
                    }
                }),
                W = ({
                    width: e,
                    mediaQueries: t
                }) => ({
                    type: A,
                    payload: {
                        width: e,
                        mediaQueries: t
                    }
                }),
                z = () => ({
                    type: R
                })
        },
        6011: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a, i = {
                actions: function() {
                    return l
                },
                destroy: function() {
                    return E
                },
                init: function() {
                    return p
                },
                setEnv: function() {
                    return f
                },
                store: function() {
                    return u
                }
            };
            for (var o in i) Object.defineProperty(t, o, {
                enumerable: !0,
                get: i[o]
            });
            let c = n(9516),
                r = (a = n(7243)) && a.__esModule ? a : {
                    default: a
                },
                d = n(1970),
                l = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = s(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {
                            __proto__: null
                        },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var c = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                            c && (c.get || c.set) ? Object.defineProperty(a, o, c) : a[o] = e[o]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n(3946));

            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (s = function(e) {
                    return e ? n : t
                })(e)
            }
            let u = (0, c.createStore)(r.default);

            function f(e) {
                e() && (0, d.observeRequests)(u)
            }

            function p(e) {
                E(), (0, d.startEngine)({
                    store: u,
                    rawData: e,
                    allowEvents: !0
                })
            }

            function E() {
                (0, d.stopEngine)(u)
            }
        },
        5012: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                elementContains: function() {
                    return T
                },
                getChildElements: function() {
                    return O
                },
                getClosestElement: function() {
                    return _
                },
                getProperty: function() {
                    return E
                },
                getQuerySelector: function() {
                    return b
                },
                getRefType: function() {
                    return h
                },
                getSiblingElements: function() {
                    return v
                },
                getStyle: function() {
                    return p
                },
                getValidDocument: function() {
                    return I
                },
                isSiblingNode: function() {
                    return m
                },
                matchSelector: function() {
                    return g
                },
                queryDocument: function() {
                    return y
                },
                setStyle: function() {
                    return f
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = n(9468),
                c = n(7087),
                {
                    ELEMENT_MATCHES: r
                } = o.IX2BrowserSupport,
                {
                    IX2_ID_DELIMITER: d,
                    HTML_ELEMENT: l,
                    PLAIN_OBJECT: s,
                    WF_PAGE: u
                } = c.IX2EngineConstants;

            function f(e, t, n) {
                e.style[t] = n
            }

            function p(e, t) {
                return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style instanceof CSSStyleDeclaration ? e.style[t] : void 0
            }

            function E(e, t) {
                return e[t]
            }

            function g(e) {
                return t => t[r](e)
            }

            function b({
                id: e,
                selector: t
            }) {
                if (e) {
                    let t = e;
                    if (-1 !== e.indexOf(d)) {
                        let n = e.split(d),
                            a = n[0];
                        if (t = n[1], a !== document.documentElement.getAttribute(u)) return null
                    }
                    return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`
                }
                return t
            }

            function I(e) {
                return null == e || e === document.documentElement.getAttribute(u) ? document : null
            }

            function y(e, t) {
                return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
            }

            function T(e, t) {
                return e.contains(t)
            }

            function m(e, t) {
                return e !== t && e.parentNode === t.parentNode
            }

            function O(e) {
                let t = [];
                for (let n = 0, {
                        length: a
                    } = e || []; n < a; n++) {
                    let {
                        children: a
                    } = e[n], {
                        length: i
                    } = a;
                    if (i)
                        for (let e = 0; e < i; e++) t.push(a[e])
                }
                return t
            }

            function v(e = []) {
                let t = [],
                    n = [];
                for (let a = 0, {
                        length: i
                    } = e; a < i; a++) {
                    let {
                        parentNode: i
                    } = e[a];
                    if (!i || !i.children || !i.children.length || -1 !== n.indexOf(i)) continue;
                    n.push(i);
                    let o = i.firstElementChild;
                    for (; null != o;) - 1 === e.indexOf(o) && t.push(o), o = o.nextElementSibling
                }
                return t
            }
            let _ = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
                if (!document.documentElement.contains(e)) return null;
                let n = e;
                do {
                    if (n[r] && n[r](t)) return n;
                    n = n.parentNode
                } while (null != n);
                return null
            };

            function h(e) {
                return null != e && "object" == typeof e ? e instanceof Element ? l : s : null
            }
        },
        1970: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                observeRequests: function() {
                    return q
                },
                startActionGroup: function() {
                    return eE
                },
                startEngine: function() {
                    return ea
                },
                stopActionGroup: function() {
                    return ep
                },
                stopAllActionGroups: function() {
                    return ef
                },
                stopEngine: function() {
                    return ei
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = y(n(9777)),
                c = y(n(4738)),
                r = y(n(4659)),
                d = y(n(3452)),
                l = y(n(6633)),
                s = y(n(3729)),
                u = y(n(2397)),
                f = y(n(5082)),
                p = n(7087),
                E = n(9468),
                g = n(3946),
                b = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = T(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {
                            __proto__: null
                        },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var c = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                            c && (c.get || c.set) ? Object.defineProperty(a, o, c) : a[o] = e[o]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n(5012)),
                I = y(n(8955));

            function y(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function T(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (T = function(e) {
                    return e ? n : t
                })(e)
            }
            let m = Object.keys(p.QuickEffectIds),
                O = e => m.includes(e),
                {
                    COLON_DELIMITER: v,
                    BOUNDARY_SELECTOR: _,
                    HTML_ELEMENT: h,
                    RENDER_GENERAL: A,
                    W_MOD_IX: R
                } = p.IX2EngineConstants,
                {
                    getAffectedElements: L,
                    getElementId: S,
                    getDestinationValues: N,
                    observeStore: C,
                    getInstanceId: w,
                    renderHTMLElement: P,
                    clearAllStyles: G,
                    getMaxDurationItemIndex: M,
                    getComputedStyle: U,
                    getInstanceOrigin: V,
                    reduceListToGroup: x,
                    shouldNamespaceEventParameter: k,
                    getNamespacedParameterId: F,
                    shouldAllowMediaQuery: D,
                    cleanupHTMLElement: B,
                    clearObjectCache: Y,
                    stringifyTarget: X,
                    mediaQueriesEqual: H,
                    shallowEqual: j
                } = E.IX2VanillaUtils,
                {
                    isPluginType: W,
                    createPluginInstance: z,
                    getPluginDuration: Q
                } = E.IX2VanillaPlugins,
                K = navigator.userAgent,
                $ = K.match(/iPad/i) || K.match(/iPhone/);

            function q(e) {
                C({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.preview,
                    onChange: Z
                }), C({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.playback,
                    onChange: ee
                }), C({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.stop,
                    onChange: et
                }), C({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.clear,
                    onChange: en
                })
            }

            function Z({
                rawData: e,
                defer: t
            }, n) {
                let a = () => {
                    ea({
                        store: n,
                        rawData: e,
                        allowEvents: !0
                    }), J()
                };
                t ? setTimeout(a, 0) : a()
            }

            function J() {
                document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
            }

            function ee(e, t) {
                let {
                    actionTypeId: n,
                    actionListId: a,
                    actionItemId: i,
                    eventId: o,
                    allowEvents: c,
                    immediate: r,
                    testManual: d,
                    verbose: l = !0
                } = e, {
                    rawData: s
                } = e;
                if (a && i && s && r) {
                    let e = s.actionLists[a];
                    e && (s = x({
                        actionList: e,
                        actionItemId: i,
                        rawData: s
                    }))
                }
                if (ea({
                        store: t,
                        rawData: s,
                        allowEvents: c,
                        testManual: d
                    }), a && n === p.ActionTypeConsts.GENERAL_START_ACTION || O(n)) {
                    ep({
                        store: t,
                        actionListId: a
                    }), eu({
                        store: t,
                        actionListId: a,
                        eventId: o
                    });
                    let e = eE({
                        store: t,
                        eventId: o,
                        actionListId: a,
                        immediate: r,
                        verbose: l
                    });
                    l && e && t.dispatch((0, g.actionListPlaybackChanged)({
                        actionListId: a,
                        isPlaying: !r
                    }))
                }
            }

            function et({
                actionListId: e
            }, t) {
                e ? ep({
                    store: t,
                    actionListId: e
                }) : ef({
                    store: t
                }), ei(t)
            }

            function en(e, t) {
                ei(t), G({
                    store: t,
                    elementApi: b
                })
            }

            function ea({
                store: e,
                rawData: t,
                allowEvents: n,
                testManual: a
            }) {
                let {
                    ixSession: i
                } = e.getState();
                if (t && e.dispatch((0, g.rawDataImported)(t)), !i.active) {
                    (e.dispatch((0, g.sessionInitialized)({
                        hasBoundaryNodes: !!document.querySelector(_),
                        reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
                    })), n) && (function(e) {
                        let {
                            ixData: t
                        } = e.getState(), {
                            eventTypeMap: n
                        } = t;
                        er(e), (0, u.default)(n, (t, n) => {
                            let a = I.default[n];
                            if (!a) return void console.warn(`IX2 event type not configured: ${n}`);
                            ! function({
                                logic: e,
                                store: t,
                                events: n
                            }) {
                                ! function(e) {
                                    if (!$) return;
                                    let t = {},
                                        n = "";
                                    for (let a in e) {
                                        let {
                                            eventTypeId: i,
                                            target: o
                                        } = e[a], c = b.getQuerySelector(o);
                                        t[c] || (i === p.EventTypeConsts.MOUSE_CLICK || i === p.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[c] = !0, n += c + "{cursor: pointer;touch-action: manipulation;}")
                                    }
                                    if (n) {
                                        let e = document.createElement("style");
                                        e.textContent = n, document.body.appendChild(e)
                                    }
                                }(n);
                                let {
                                    types: a,
                                    handler: i
                                } = e, {
                                    ixData: d
                                } = t.getState(), {
                                    actionLists: l
                                } = d, s = ed(n, es);
                                if (!(0, r.default)(s)) return;
                                (0, u.default)(s, (e, a) => {
                                    let i = n[a],
                                        {
                                            action: r,
                                            id: s,
                                            mediaQueries: u = d.mediaQueryKeys
                                        } = i,
                                        {
                                            actionListId: f
                                        } = r.config;
                                    H(u, d.mediaQueryKeys) || t.dispatch((0, g.mediaQueriesDefined)()), r.actionTypeId === p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(i.config) ? i.config : [i.config]).forEach(n => {
                                        let {
                                            continuousParameterGroupId: a
                                        } = n, i = (0, c.default)(l, `${f}.continuousParameterGroups`, []), r = (0, o.default)(i, ({
                                            id: e
                                        }) => e === a), d = (n.smoothing || 0) / 100, u = (n.restingState || 0) / 100;
                                        r && e.forEach((e, a) => {
                                            ! function({
                                                store: e,
                                                eventStateKey: t,
                                                eventTarget: n,
                                                eventId: a,
                                                eventConfig: i,
                                                actionListId: o,
                                                parameterGroup: r,
                                                smoothing: d,
                                                restingValue: l
                                            }) {
                                                let {
                                                    ixData: s,
                                                    ixSession: u
                                                } = e.getState(), {
                                                    events: f
                                                } = s, E = f[a], {
                                                    eventTypeId: g
                                                } = E, I = {}, y = {}, T = [], {
                                                    continuousActionGroups: m
                                                } = r, {
                                                    id: O
                                                } = r;
                                                k(g, i) && (O = F(t, O));
                                                let h = u.hasBoundaryNodes && n ? b.getClosestElement(n, _) : null;
                                                m.forEach(e => {
                                                    let {
                                                        keyframe: t,
                                                        actionItems: a
                                                    } = e;
                                                    a.forEach(e => {
                                                        let {
                                                            actionTypeId: a
                                                        } = e, {
                                                            target: i
                                                        } = e.config;
                                                        if (!i) return;
                                                        let o = i.boundaryMode ? h : null,
                                                            c = X(i) + v + a;
                                                        if (y[c] = function(e = [], t, n) {
                                                                let a, i = [...e];
                                                                return i.some((e, n) => e.keyframe === t && (a = n, !0)), null == a && (a = i.length, i.push({
                                                                    keyframe: t,
                                                                    actionItems: []
                                                                })), i[a].actionItems.push(n), i
                                                            }(y[c], t, e), !I[c]) {
                                                            I[c] = !0;
                                                            let {
                                                                config: t
                                                            } = e;
                                                            L({
                                                                config: t,
                                                                event: E,
                                                                eventTarget: n,
                                                                elementRoot: o,
                                                                elementApi: b
                                                            }).forEach(e => {
                                                                T.push({
                                                                    element: e,
                                                                    key: c
                                                                })
                                                            })
                                                        }
                                                    })
                                                }), T.forEach(({
                                                    element: t,
                                                    key: n
                                                }) => {
                                                    let i = y[n],
                                                        r = (0, c.default)(i, "[0].actionItems[0]", {}),
                                                        {
                                                            actionTypeId: s
                                                        } = r,
                                                        u = (s === p.ActionTypeConsts.PLUGIN_RIVE ? 0 === (r.config ? .target ? .selectorGuids || []).length : W(s)) ? z(s) ? .(t, r) : null,
                                                        f = N({
                                                            element: t,
                                                            actionItem: r,
                                                            elementApi: b
                                                        }, u);
                                                    eg({
                                                        store: e,
                                                        element: t,
                                                        eventId: a,
                                                        actionListId: o,
                                                        actionItem: r,
                                                        destination: f,
                                                        continuous: !0,
                                                        parameterId: O,
                                                        actionGroups: i,
                                                        smoothing: d,
                                                        restingValue: l,
                                                        pluginInstance: u
                                                    })
                                                })
                                            }({
                                                store: t,
                                                eventStateKey: s + v + a,
                                                eventTarget: e,
                                                eventId: s,
                                                eventConfig: n,
                                                actionListId: f,
                                                parameterGroup: r,
                                                smoothing: d,
                                                restingValue: u
                                            })
                                        })
                                    }), (r.actionTypeId === p.ActionTypeConsts.GENERAL_START_ACTION || O(r.actionTypeId)) && eu({
                                        store: t,
                                        actionListId: f,
                                        eventId: s
                                    })
                                });
                                let E = e => {
                                        let {
                                            ixSession: a
                                        } = t.getState();
                                        el(s, (o, c, r) => {
                                            let l = n[c],
                                                s = a.eventState[r],
                                                {
                                                    action: u,
                                                    mediaQueries: f = d.mediaQueryKeys
                                                } = l;
                                            if (!D(f, a.mediaQueryKey)) return;
                                            let E = (n = {}) => {
                                                let a = i({
                                                    store: t,
                                                    element: o,
                                                    event: l,
                                                    eventConfig: n,
                                                    nativeEvent: e,
                                                    eventStateKey: r
                                                }, s);
                                                j(a, s) || t.dispatch((0, g.eventStateChanged)(r, a))
                                            };
                                            u.actionTypeId === p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(l.config) ? l.config : [l.config]).forEach(E) : E()
                                        })
                                    },
                                    I = (0, f.default)(E, 12),
                                    y = ({
                                        target: e = document,
                                        types: n,
                                        throttle: a
                                    }) => {
                                        n.split(" ").filter(Boolean).forEach(n => {
                                            let i = a ? I : E;
                                            e.addEventListener(n, i), t.dispatch((0, g.eventListenerAdded)(e, [n, i]))
                                        })
                                    };
                                Array.isArray(a) ? a.forEach(y) : "string" == typeof a && y(e)
                            }({
                                logic: a,
                                store: e,
                                events: t
                            })
                        });
                        let {
                            ixSession: a
                        } = e.getState();
                        a.eventListeners.length && function(e) {
                            let t = () => {
                                er(e)
                            };
                            ec.forEach(n => {
                                window.addEventListener(n, t), e.dispatch((0, g.eventListenerAdded)(window, [n, t]))
                            }), t()
                        }(e)
                    }(e), function() {
                        let {
                            documentElement: e
                        } = document; - 1 === e.className.indexOf(R) && (e.className += ` ${R}`)
                    }(), e.getState().ixSession.hasDefinedMediaQueries && C({
                        store: e,
                        select: ({
                            ixSession: e
                        }) => e.mediaQueryKey,
                        onChange: () => {
                            ei(e), G({
                                store: e,
                                elementApi: b
                            }), ea({
                                store: e,
                                allowEvents: !0
                            }), J()
                        }
                    }));
                    e.dispatch((0, g.sessionStarted)()),
                        function(e, t) {
                            let n = a => {
                                let {
                                    ixSession: i,
                                    ixParameters: o
                                } = e.getState();
                                if (i.active)
                                    if (e.dispatch((0, g.animationFrameChanged)(a, o)), t) {
                                        let t = C({
                                            store: e,
                                            select: ({
                                                ixSession: e
                                            }) => e.tick,
                                            onChange: e => {
                                                n(e), t()
                                            }
                                        })
                                    } else requestAnimationFrame(n)
                            };
                            n(window.performance.now())
                        }(e, a)
                }
            }

            function ei(e) {
                let {
                    ixSession: t
                } = e.getState();
                if (t.active) {
                    let {
                        eventListeners: n
                    } = t;
                    n.forEach(eo), Y(), e.dispatch((0, g.sessionStopped)())
                }
            }

            function eo({
                target: e,
                listenerParams: t
            }) {
                e.removeEventListener.apply(e, t)
            }
            let ec = ["resize", "orientationchange"];

            function er(e) {
                let {
                    ixSession: t,
                    ixData: n
                } = e.getState(), a = window.innerWidth;
                if (a !== t.viewportWidth) {
                    let {
                        mediaQueries: t
                    } = n;
                    e.dispatch((0, g.viewportWidthChanged)({
                        width: a,
                        mediaQueries: t
                    }))
                }
            }
            let ed = (e, t) => (0, d.default)((0, s.default)(e, t), l.default),
                el = (e, t) => {
                    (0, u.default)(e, (e, n) => {
                        e.forEach((e, a) => {
                            t(e, n, n + v + a)
                        })
                    })
                },
                es = e => L({
                    config: {
                        target: e.target,
                        targets: e.targets
                    },
                    elementApi: b
                });

            function eu({
                store: e,
                actionListId: t,
                eventId: n
            }) {
                let {
                    ixData: a,
                    ixSession: i
                } = e.getState(), {
                    actionLists: o,
                    events: r
                } = a, d = r[n], l = o[t];
                if (l && l.useFirstGroupAsInitialState) {
                    let o = (0, c.default)(l, "actionItemGroups[0].actionItems", []);
                    if (!D((0, c.default)(d, "mediaQueries", a.mediaQueryKeys), i.mediaQueryKey)) return;
                    o.forEach(a => {
                        let {
                            config: i,
                            actionTypeId: o
                        } = a, c = L({
                            config: i ? .target ? .useEventTarget === !0 && i ? .target ? .objectId == null ? {
                                target: d.target,
                                targets: d.targets
                            } : i,
                            event: d,
                            elementApi: b
                        }), r = W(o);
                        c.forEach(i => {
                            let c = r ? z(o) ? .(i, a) : null;
                            eg({
                                destination: N({
                                    element: i,
                                    actionItem: a,
                                    elementApi: b
                                }, c),
                                immediate: !0,
                                store: e,
                                element: i,
                                eventId: n,
                                actionItem: a,
                                actionListId: t,
                                pluginInstance: c
                            })
                        })
                    })
                }
            }

            function ef({
                store: e
            }) {
                let {
                    ixInstances: t
                } = e.getState();
                (0, u.default)(t, t => {
                    if (!t.continuous) {
                        let {
                            actionListId: n,
                            verbose: a
                        } = t;
                        eb(t, e), a && e.dispatch((0, g.actionListPlaybackChanged)({
                            actionListId: n,
                            isPlaying: !1
                        }))
                    }
                })
            }

            function ep({
                store: e,
                eventId: t,
                eventTarget: n,
                eventStateKey: a,
                actionListId: i
            }) {
                let {
                    ixInstances: o,
                    ixSession: r
                } = e.getState(), d = r.hasBoundaryNodes && n ? b.getClosestElement(n, _) : null;
                (0, u.default)(o, n => {
                    let o = (0, c.default)(n, "actionItem.config.target.boundaryMode"),
                        r = !a || n.eventStateKey === a;
                    if (n.actionListId === i && n.eventId === t && r) {
                        if (d && o && !b.elementContains(d, n.element)) return;
                        eb(n, e), n.verbose && e.dispatch((0, g.actionListPlaybackChanged)({
                            actionListId: i,
                            isPlaying: !1
                        }))
                    }
                })
            }

            function eE({
                store: e,
                eventId: t,
                eventTarget: n,
                eventStateKey: a,
                actionListId: i,
                groupIndex: o = 0,
                immediate: r,
                verbose: d
            }) {
                let {
                    ixData: l,
                    ixSession: s
                } = e.getState(), {
                    events: u
                } = l, f = u[t] || {}, {
                    mediaQueries: p = l.mediaQueryKeys
                } = f, {
                    actionItemGroups: E,
                    useFirstGroupAsInitialState: g
                } = (0, c.default)(l, `actionLists.${i}`, {});
                if (!E || !E.length) return !1;
                o >= E.length && (0, c.default)(f, "config.loop") && (o = 0), 0 === o && g && o++;
                let I = (0 === o || 1 === o && g) && O(f.action ? .actionTypeId) ? f.config.delay : void 0,
                    y = (0, c.default)(E, [o, "actionItems"], []);
                if (!y.length || !D(p, s.mediaQueryKey)) return !1;
                let T = s.hasBoundaryNodes && n ? b.getClosestElement(n, _) : null,
                    m = M(y),
                    v = !1;
                return y.forEach((c, l) => {
                    let {
                        config: s,
                        actionTypeId: u
                    } = c, p = W(u), {
                        target: E
                    } = s;
                    E && L({
                        config: s,
                        event: f,
                        eventTarget: n,
                        elementRoot: E.boundaryMode ? T : null,
                        elementApi: b
                    }).forEach((s, f) => {
                        let E = p ? z(u) ? .(s, c) : null,
                            g = p ? Q(u)(s, c) : null;
                        v = !0;
                        let y = U({
                                element: s,
                                actionItem: c
                            }),
                            T = N({
                                element: s,
                                actionItem: c,
                                elementApi: b
                            }, E);
                        eg({
                            store: e,
                            element: s,
                            actionItem: c,
                            eventId: t,
                            eventTarget: n,
                            eventStateKey: a,
                            actionListId: i,
                            groupIndex: o,
                            isCarrier: m === l && 0 === f,
                            computedStyle: y,
                            destination: T,
                            immediate: r,
                            verbose: d,
                            pluginInstance: E,
                            pluginDuration: g,
                            instanceDelay: I
                        })
                    })
                }), v
            }

            function eg(e) {
                let t, {
                        store: n,
                        computedStyle: a,
                        ...i
                    } = e,
                    {
                        element: o,
                        actionItem: c,
                        immediate: r,
                        pluginInstance: d,
                        continuous: l,
                        restingValue: s,
                        eventId: u
                    } = i,
                    f = w(),
                    {
                        ixElements: E,
                        ixSession: I,
                        ixData: y
                    } = n.getState(),
                    T = S(E, o),
                    {
                        refState: m
                    } = E[T] || {},
                    O = b.getRefType(o),
                    v = I.reducedMotion && p.ReducedMotionTypes[c.actionTypeId];
                if (v && l) switch (y.events[u] ? .eventTypeId) {
                    case p.EventTypeConsts.MOUSE_MOVE:
                    case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                        t = s;
                        break;
                    default:
                        t = .5
                }
                let _ = V(o, m, a, c, b, d);
                if (n.dispatch((0, g.instanceAdded)({
                        instanceId: f,
                        elementId: T,
                        origin: _,
                        refType: O,
                        skipMotion: v,
                        skipToValue: t,
                        ...i
                    })), eI(document.body, "ix2-animation-started", f), r) return void
                function(e, t) {
                    let {
                        ixParameters: n
                    } = e.getState();
                    e.dispatch((0, g.instanceStarted)(t, 0)), e.dispatch((0, g.animationFrameChanged)(performance.now(), n));
                    let {
                        ixInstances: a
                    } = e.getState();
                    ey(a[t], e)
                }(n, f);
                C({
                    store: n,
                    select: ({
                        ixInstances: e
                    }) => e[f],
                    onChange: ey
                }), l || n.dispatch((0, g.instanceStarted)(f, I.tick))
            }

            function eb(e, t) {
                eI(document.body, "ix2-animation-stopping", {
                    instanceId: e.id,
                    state: t.getState()
                });
                let {
                    elementId: n,
                    actionItem: a
                } = e, {
                    ixElements: i
                } = t.getState(), {
                    ref: o,
                    refType: c
                } = i[n] || {};
                c === h && B(o, a, b), t.dispatch((0, g.instanceRemoved)(e.id))
            }

            function eI(e, t, n) {
                let a = document.createEvent("CustomEvent");
                a.initCustomEvent(t, !0, !0, n), e.dispatchEvent(a)
            }

            function ey(e, t) {
                let {
                    active: n,
                    continuous: a,
                    complete: i,
                    elementId: o,
                    actionItem: c,
                    actionTypeId: r,
                    renderType: d,
                    current: l,
                    groupIndex: s,
                    eventId: u,
                    eventTarget: f,
                    eventStateKey: p,
                    actionListId: E,
                    isCarrier: I,
                    styleProp: y,
                    verbose: T,
                    pluginInstance: m
                } = e, {
                    ixData: O,
                    ixSession: v
                } = t.getState(), {
                    events: _
                } = O, {
                    mediaQueries: R = O.mediaQueryKeys
                } = _ && _[u] ? _[u] : {};
                if (D(R, v.mediaQueryKey) && (a || n || i)) {
                    if (l || d === A && i) {
                        t.dispatch((0, g.elementStateChanged)(o, r, l, c));
                        let {
                            ixElements: e
                        } = t.getState(), {
                            ref: n,
                            refType: a,
                            refState: i
                        } = e[o] || {}, s = i && i[r];
                        (a === h || W(r)) && P(n, i, s, u, c, y, b, d, m)
                    }
                    if (i) {
                        if (I) {
                            let e = eE({
                                store: t,
                                eventId: u,
                                eventTarget: f,
                                eventStateKey: p,
                                actionListId: E,
                                groupIndex: s + 1,
                                verbose: T
                            });
                            T && !e && t.dispatch((0, g.actionListPlaybackChanged)({
                                actionListId: E,
                                isPlaying: !1
                            }))
                        }
                        eb(e, t)
                    }
                }
            }
        },
        8955: function(e, t, n) {
            "use strict";
            let a;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return ep
                }
            });
            let i = u(n(5801)),
                o = u(n(4738)),
                c = u(n(3789)),
                r = n(7087),
                d = n(1970),
                l = n(3946),
                s = n(9468);

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let {
                MOUSE_CLICK: f,
                MOUSE_SECOND_CLICK: p,
                MOUSE_DOWN: E,
                MOUSE_UP: g,
                MOUSE_OVER: b,
                MOUSE_OUT: I,
                DROPDOWN_CLOSE: y,
                DROPDOWN_OPEN: T,
                SLIDER_ACTIVE: m,
                SLIDER_INACTIVE: O,
                TAB_ACTIVE: v,
                TAB_INACTIVE: _,
                NAVBAR_CLOSE: h,
                NAVBAR_OPEN: A,
                MOUSE_MOVE: R,
                PAGE_SCROLL_DOWN: L,
                SCROLL_INTO_VIEW: S,
                SCROLL_OUT_OF_VIEW: N,
                PAGE_SCROLL_UP: C,
                SCROLLING_IN_VIEW: w,
                PAGE_FINISH: P,
                ECOMMERCE_CART_CLOSE: G,
                ECOMMERCE_CART_OPEN: M,
                PAGE_START: U,
                PAGE_SCROLL: V
            } = r.EventTypeConsts, x = "COMPONENT_ACTIVE", k = "COMPONENT_INACTIVE", {
                COLON_DELIMITER: F
            } = r.IX2EngineConstants, {
                getNamespacedParameterId: D
            } = s.IX2VanillaUtils, B = e => t => !!("object" == typeof t && e(t)) || t, Y = B(({
                element: e,
                nativeEvent: t
            }) => e === t.target), X = B(({
                element: e,
                nativeEvent: t
            }) => e.contains(t.target)), H = (0, i.default)([Y, X]), j = (e, t) => {
                if (t) {
                    let {
                        ixData: n
                    } = e.getState(), {
                        events: a
                    } = n, i = a[t];
                    if (i && !ee[i.eventTypeId]) return i
                }
                return null
            }, W = ({
                store: e,
                event: t
            }) => {
                let {
                    action: n
                } = t, {
                    autoStopEventId: a
                } = n.config;
                return !!j(e, a)
            }, z = ({
                store: e,
                event: t,
                element: n,
                eventStateKey: a
            }, i) => {
                let {
                    action: c,
                    id: r
                } = t, {
                    actionListId: l,
                    autoStopEventId: s
                } = c.config, u = j(e, s);
                return u && (0, d.stopActionGroup)({
                    store: e,
                    eventId: s,
                    eventTarget: n,
                    eventStateKey: s + F + a.split(F)[1],
                    actionListId: (0, o.default)(u, "action.config.actionListId")
                }), (0, d.stopActionGroup)({
                    store: e,
                    eventId: r,
                    eventTarget: n,
                    eventStateKey: a,
                    actionListId: l
                }), (0, d.startActionGroup)({
                    store: e,
                    eventId: r,
                    eventTarget: n,
                    eventStateKey: a,
                    actionListId: l
                }), i
            }, Q = (e, t) => (n, a) => !0 === e(n, a) ? t(n, a) : a, K = {
                handler: Q(H, z)
            }, $ = { ...K,
                types: [x, k].join(" ")
            }, q = [{
                target: window,
                types: "resize orientationchange",
                throttle: !0
            }, {
                target: document,
                types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
                throttle: !0
            }], Z = "mouseover mouseout", J = {
                types: q
            }, ee = {
                PAGE_START: U,
                PAGE_FINISH: P
            }, et = (() => {
                let e = void 0 !== window.pageXOffset,
                    t = "CSS1Compat" === document.compatMode ? document.documentElement : document.body;
                return () => ({
                    scrollLeft: e ? window.pageXOffset : t.scrollLeft,
                    scrollTop: e ? window.pageYOffset : t.scrollTop,
                    stiffScrollTop: (0, c.default)(e ? window.pageYOffset : t.scrollTop, 0, t.scrollHeight - window.innerHeight),
                    scrollWidth: t.scrollWidth,
                    scrollHeight: t.scrollHeight,
                    clientWidth: t.clientWidth,
                    clientHeight: t.clientHeight,
                    innerWidth: window.innerWidth,
                    innerHeight: window.innerHeight
                })
            })(), en = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), ea = ({
                element: e,
                nativeEvent: t
            }) => {
                let {
                    type: n,
                    target: a,
                    relatedTarget: i
                } = t, o = e.contains(a);
                if ("mouseover" === n && o) return !0;
                let c = e.contains(i);
                return "mouseout" === n && !!o && !!c
            }, ei = e => {
                let {
                    element: t,
                    event: {
                        config: n
                    }
                } = e, {
                    clientWidth: a,
                    clientHeight: i
                } = et(), o = n.scrollOffsetValue, c = "PX" === n.scrollOffsetUnit ? o : i * (o || 0) / 100;
                return en(t.getBoundingClientRect(), {
                    left: 0,
                    top: c,
                    right: a,
                    bottom: i - c
                })
            }, eo = e => (t, n) => {
                let {
                    type: a
                } = t.nativeEvent, i = -1 !== [x, k].indexOf(a) ? a === x : n.isActive, o = { ...n,
                    isActive: i
                };
                return (!n || o.isActive !== n.isActive) && e(t, o) || o
            }, ec = e => (t, n) => {
                let a = {
                    elementHovered: ea(t)
                };
                return (n ? a.elementHovered !== n.elementHovered : a.elementHovered) && e(t, a) || a
            }, er = e => (t, n = {}) => {
                let a, i, {
                        stiffScrollTop: o,
                        scrollHeight: c,
                        innerHeight: r
                    } = et(),
                    {
                        event: {
                            config: d,
                            eventTypeId: l
                        }
                    } = t,
                    {
                        scrollOffsetValue: s,
                        scrollOffsetUnit: u
                    } = d,
                    f = c - r,
                    p = Number((o / f).toFixed(2));
                if (n && n.percentTop === p) return n;
                let E = ("PX" === u ? s : r * (s || 0) / 100) / f,
                    g = 0;
                n && (a = p > n.percentTop, g = (i = n.scrollingDown !== a) ? p : n.anchorTop);
                let b = l === L ? p >= g + E : p <= g - E,
                    I = { ...n,
                        percentTop: p,
                        inBounds: b,
                        anchorTop: g,
                        scrollingDown: a
                    };
                return n && b && (i || I.inBounds !== n.inBounds) && e(t, I) || I
            }, ed = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, el = e => (t, n = {
                clickCount: 0
            }) => {
                let a = {
                    clickCount: n.clickCount % 2 + 1
                };
                return a.clickCount !== n.clickCount && e(t, a) || a
            }, es = (e = !0) => ({ ...$,
                handler: Q(e ? H : Y, eo((e, t) => t.isActive ? K.handler(e, t) : t))
            }), eu = (e = !0) => ({ ...$,
                handler: Q(e ? H : Y, eo((e, t) => t.isActive ? t : K.handler(e, t)))
            }), ef = { ...J,
                handler: (a = (e, t) => {
                    let {
                        elementVisible: n
                    } = t, {
                        event: a,
                        store: i
                    } = e, {
                        ixData: o
                    } = i.getState(), {
                        events: c
                    } = o;
                    return !c[a.action.config.autoStopEventId] && t.triggered ? t : a.eventTypeId === S === n ? (z(e), { ...t,
                        triggered: !0
                    }) : t
                }, (e, t) => {
                    let n = { ...t,
                        elementVisible: ei(e)
                    };
                    return (t ? n.elementVisible !== t.elementVisible : n.elementVisible) && a(e, n) || n
                })
            }, ep = {
                [m]: es(),
                [O]: eu(),
                [T]: es(),
                [y]: eu(),
                [A]: es(!1),
                [h]: eu(!1),
                [v]: es(),
                [_]: eu(),
                [M]: {
                    types: "ecommerce-cart-open",
                    handler: Q(H, z)
                },
                [G]: {
                    types: "ecommerce-cart-close",
                    handler: Q(H, z)
                },
                [f]: {
                    types: "click",
                    handler: Q(H, el((e, {
                        clickCount: t
                    }) => {
                        W(e) ? 1 === t && z(e) : z(e)
                    }))
                },
                [p]: {
                    types: "click",
                    handler: Q(H, el((e, {
                        clickCount: t
                    }) => {
                        2 === t && z(e)
                    }))
                },
                [E]: { ...K,
                    types: "mousedown"
                },
                [g]: { ...K,
                    types: "mouseup"
                },
                [b]: {
                    types: Z,
                    handler: Q(H, ec((e, t) => {
                        t.elementHovered && z(e)
                    }))
                },
                [I]: {
                    types: Z,
                    handler: Q(H, ec((e, t) => {
                        t.elementHovered || z(e)
                    }))
                },
                [R]: {
                    types: "mousemove mouseout scroll",
                    handler: ({
                        store: e,
                        element: t,
                        eventConfig: n,
                        nativeEvent: a,
                        eventStateKey: i
                    }, o = {
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0
                    }) => {
                        let {
                            basedOn: c,
                            selectedAxis: d,
                            continuousParameterGroupId: s,
                            reverse: u,
                            restingState: f = 0
                        } = n, {
                            clientX: p = o.clientX,
                            clientY: E = o.clientY,
                            pageX: g = o.pageX,
                            pageY: b = o.pageY
                        } = a, I = "X_AXIS" === d, y = "mouseout" === a.type, T = f / 100, m = s, O = !1;
                        switch (c) {
                            case r.EventBasedOn.VIEWPORT:
                                T = I ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(E, window.innerHeight) / window.innerHeight;
                                break;
                            case r.EventBasedOn.PAGE:
                                {
                                    let {
                                        scrollLeft: e,
                                        scrollTop: t,
                                        scrollWidth: n,
                                        scrollHeight: a
                                    } = et();T = I ? Math.min(e + g, n) / n : Math.min(t + b, a) / a;
                                    break
                                }
                            case r.EventBasedOn.ELEMENT:
                            default:
                                {
                                    m = D(i, s);
                                    let e = 0 === a.type.indexOf("mouse");
                                    if (e && !0 !== H({
                                            element: t,
                                            nativeEvent: a
                                        })) break;
                                    let n = t.getBoundingClientRect(),
                                        {
                                            left: o,
                                            top: c,
                                            width: r,
                                            height: d
                                        } = n;
                                    if (!e && !ed({
                                            left: p,
                                            top: E
                                        }, n)) break;O = !0,
                                    T = I ? (p - o) / r : (E - c) / d
                                }
                        }
                        return y && (T > .95 || T < .05) && (T = Math.round(T)), (c !== r.EventBasedOn.ELEMENT || O || O !== o.elementHovered) && (T = u ? 1 - T : T, e.dispatch((0, l.parameterChanged)(m, T))), {
                            elementHovered: O,
                            clientX: p,
                            clientY: E,
                            pageX: g,
                            pageY: b
                        }
                    }
                },
                [V]: {
                    types: q,
                    handler: ({
                        store: e,
                        eventConfig: t
                    }) => {
                        let {
                            continuousParameterGroupId: n,
                            reverse: a
                        } = t, {
                            scrollTop: i,
                            scrollHeight: o,
                            clientHeight: c
                        } = et(), r = i / (o - c);
                        r = a ? 1 - r : r, e.dispatch((0, l.parameterChanged)(n, r))
                    }
                },
                [w]: {
                    types: q,
                    handler: ({
                        element: e,
                        store: t,
                        eventConfig: n,
                        eventStateKey: a
                    }, i = {
                        scrollPercent: 0
                    }) => {
                        let {
                            scrollLeft: o,
                            scrollTop: c,
                            scrollWidth: d,
                            scrollHeight: s,
                            clientHeight: u
                        } = et(), {
                            basedOn: f,
                            selectedAxis: p,
                            continuousParameterGroupId: E,
                            startsEntering: g,
                            startsExiting: b,
                            addEndOffset: I,
                            addStartOffset: y,
                            addOffsetValue: T = 0,
                            endOffsetValue: m = 0
                        } = n;
                        if (f === r.EventBasedOn.VIEWPORT) {
                            let e = "X_AXIS" === p ? o / d : c / s;
                            return e !== i.scrollPercent && t.dispatch((0, l.parameterChanged)(E, e)), {
                                scrollPercent: e
                            }
                        } {
                            let n = D(a, E),
                                o = e.getBoundingClientRect(),
                                c = (y ? T : 0) / 100,
                                r = (I ? m : 0) / 100;
                            c = g ? c : 1 - c, r = b ? r : 1 - r;
                            let d = o.top + Math.min(o.height * c, u),
                                f = Math.min(u + (o.top + o.height * r - d), s),
                                p = Math.min(Math.max(0, u - d), f) / f;
                            return p !== i.scrollPercent && t.dispatch((0, l.parameterChanged)(n, p)), {
                                scrollPercent: p
                            }
                        }
                    }
                },
                [S]: ef,
                [N]: ef,
                [L]: { ...J,
                    handler: er((e, t) => {
                        t.scrollingDown && z(e)
                    })
                },
                [C]: { ...J,
                    handler: er((e, t) => {
                        t.scrollingDown || z(e)
                    })
                },
                [P]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: Q(Y, (e, t) => {
                        let n = {
                            finished: "complete" === document.readyState
                        };
                        return n.finished && !(t && t.finshed) && z(e), n
                    })
                },
                [U]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: Q(Y, (e, t) => (t || z(e), {
                        started: !0
                    }))
                }
            }
        },
        4609: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixData", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let {
                IX2_RAW_DATA_IMPORTED: a
            } = n(7087).IX2EngineActionTypes, i = (e = Object.freeze({}), t) => t.type === a ? t.payload.ixData || Object.freeze({}) : e
        },
        7718: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixInstances", {
                enumerable: !0,
                get: function() {
                    return O
                }
            });
            let a = n(7087),
                i = n(9468),
                o = n(1185),
                {
                    IX2_RAW_DATA_IMPORTED: c,
                    IX2_SESSION_STOPPED: r,
                    IX2_INSTANCE_ADDED: d,
                    IX2_INSTANCE_STARTED: l,
                    IX2_INSTANCE_REMOVED: s,
                    IX2_ANIMATION_FRAME_CHANGED: u
                } = a.IX2EngineActionTypes,
                {
                    optimizeFloat: f,
                    applyEasing: p,
                    createBezierEasing: E
                } = i.IX2EasingUtils,
                {
                    RENDER_GENERAL: g
                } = a.IX2EngineConstants,
                {
                    getItemConfigByKey: b,
                    getRenderType: I,
                    getStyleProp: y
                } = i.IX2VanillaUtils,
                T = (e, t) => {
                    let n, a, i, c, {
                            position: r,
                            parameterId: d,
                            actionGroups: l,
                            destinationKeys: s,
                            smoothing: u,
                            restingValue: E,
                            actionTypeId: g,
                            customEasingFn: I,
                            skipMotion: y,
                            skipToValue: T
                        } = e,
                        {
                            parameters: m
                        } = t.payload,
                        O = Math.max(1 - u, .01),
                        v = m[d];
                    null == v && (O = 1, v = E);
                    let _ = f((Math.max(v, 0) || 0) - r),
                        h = y ? T : f(r + _ * O),
                        A = 100 * h;
                    if (h === r && e.current) return e;
                    for (let e = 0, {
                            length: t
                        } = l; e < t; e++) {
                        let {
                            keyframe: t,
                            actionItems: o
                        } = l[e];
                        if (0 === e && (n = o[0]), A >= t) {
                            n = o[0];
                            let r = l[e + 1],
                                d = r && A !== t;
                            a = d ? r.actionItems[0] : null, d && (i = t / 100, c = (r.keyframe - t) / 100)
                        }
                    }
                    let R = {};
                    if (n && !a)
                        for (let e = 0, {
                                length: t
                            } = s; e < t; e++) {
                            let t = s[e];
                            R[t] = b(g, t, n.config)
                        } else if (n && a && void 0 !== i && void 0 !== c) {
                            let e = (h - i) / c,
                                t = p(n.config.easing, e, I);
                            for (let e = 0, {
                                    length: i
                                } = s; e < i; e++) {
                                let i = s[e],
                                    o = b(g, i, n.config),
                                    c = (b(g, i, a.config) - o) * t + o;
                                R[i] = c
                            }
                        }
                    return (0, o.merge)(e, {
                        position: h,
                        current: R
                    })
                },
                m = (e, t) => {
                    let {
                        active: n,
                        origin: a,
                        start: i,
                        immediate: c,
                        renderType: r,
                        verbose: d,
                        actionItem: l,
                        destination: s,
                        destinationKeys: u,
                        pluginDuration: E,
                        instanceDelay: b,
                        customEasingFn: I,
                        skipMotion: y
                    } = e, T = l.config.easing, {
                        duration: m,
                        delay: O
                    } = l.config;
                    null != E && (m = E), O = null != b ? b : O, r === g ? m = 0 : (c || y) && (m = O = 0);
                    let {
                        now: v
                    } = t.payload;
                    if (n && a) {
                        let t = v - (i + O);
                        if (d) {
                            let t = m + O,
                                n = f(Math.min(Math.max(0, (v - i) / t), 1));
                            e = (0, o.set)(e, "verboseTimeElapsed", t * n)
                        }
                        if (t < 0) return e;
                        let n = f(Math.min(Math.max(0, t / m), 1)),
                            c = p(T, n, I),
                            r = {},
                            l = null;
                        return u.length && (l = u.reduce((e, t) => {
                            let n = s[t],
                                i = parseFloat(a[t]) || 0,
                                o = parseFloat(n) - i;
                            return e[t] = o * c + i, e
                        }, {})), r.current = l, r.position = n, 1 === n && (r.active = !1, r.complete = !0), (0, o.merge)(e, r)
                    }
                    return e
                },
                O = (e = Object.freeze({}), t) => {
                    switch (t.type) {
                        case c:
                            return t.payload.ixInstances || Object.freeze({});
                        case r:
                            return Object.freeze({});
                        case d:
                            {
                                let {
                                    instanceId: n,
                                    elementId: a,
                                    actionItem: i,
                                    eventId: c,
                                    eventTarget: r,
                                    eventStateKey: d,
                                    actionListId: l,
                                    groupIndex: s,
                                    isCarrier: u,
                                    origin: f,
                                    destination: p,
                                    immediate: g,
                                    verbose: b,
                                    continuous: T,
                                    parameterId: m,
                                    actionGroups: O,
                                    smoothing: v,
                                    restingValue: _,
                                    pluginInstance: h,
                                    pluginDuration: A,
                                    instanceDelay: R,
                                    skipMotion: L,
                                    skipToValue: S
                                } = t.payload,
                                {
                                    actionTypeId: N
                                } = i,
                                C = I(N),
                                w = y(C, N),
                                P = Object.keys(p).filter(e => null != p[e] && "string" != typeof p[e]),
                                {
                                    easing: G
                                } = i.config;
                                return (0, o.set)(e, n, {
                                    id: n,
                                    elementId: a,
                                    active: !1,
                                    position: 0,
                                    start: 0,
                                    origin: f,
                                    destination: p,
                                    destinationKeys: P,
                                    immediate: g,
                                    verbose: b,
                                    current: null,
                                    actionItem: i,
                                    actionTypeId: N,
                                    eventId: c,
                                    eventTarget: r,
                                    eventStateKey: d,
                                    actionListId: l,
                                    groupIndex: s,
                                    renderType: C,
                                    isCarrier: u,
                                    styleProp: w,
                                    continuous: T,
                                    parameterId: m,
                                    actionGroups: O,
                                    smoothing: v,
                                    restingValue: _,
                                    pluginInstance: h,
                                    pluginDuration: A,
                                    instanceDelay: R,
                                    skipMotion: L,
                                    skipToValue: S,
                                    customEasingFn: Array.isArray(G) && 4 === G.length ? E(G) : void 0
                                })
                            }
                        case l:
                            {
                                let {
                                    instanceId: n,
                                    time: a
                                } = t.payload;
                                return (0, o.mergeIn)(e, [n], {
                                    active: !0,
                                    complete: !1,
                                    start: a
                                })
                            }
                        case s:
                            {
                                let {
                                    instanceId: n
                                } = t.payload;
                                if (!e[n]) return e;
                                let a = {},
                                    i = Object.keys(e),
                                    {
                                        length: o
                                    } = i;
                                for (let t = 0; t < o; t++) {
                                    let o = i[t];
                                    o !== n && (a[o] = e[o])
                                }
                                return a
                            }
                        case u:
                            {
                                let n = e,
                                    a = Object.keys(e),
                                    {
                                        length: i
                                    } = a;
                                for (let c = 0; c < i; c++) {
                                    let i = a[c],
                                        r = e[i],
                                        d = r.continuous ? T : m;
                                    n = (0, o.set)(n, i, d(r, t))
                                }
                                return n
                            }
                        default:
                            return e
                    }
                }
        },
        1540: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixParameters", {
                enumerable: !0,
                get: function() {
                    return c
                }
            });
            let {
                IX2_RAW_DATA_IMPORTED: a,
                IX2_SESSION_STOPPED: i,
                IX2_PARAMETER_CHANGED: o
            } = n(7087).IX2EngineActionTypes, c = (e = {}, t) => {
                switch (t.type) {
                    case a:
                        return t.payload.ixParameters || {};
                    case i:
                        return {};
                    case o:
                        {
                            let {
                                key: n,
                                value: a
                            } = t.payload;
                            return e[n] = a,
                            e
                        }
                    default:
                        return e
                }
            }
        },
        7243: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let a = n(9516),
                i = n(4609),
                o = n(628),
                c = n(5862),
                r = n(9468),
                d = n(7718),
                l = n(1540),
                {
                    ixElements: s
                } = r.IX2ElementsReducer,
                u = (0, a.combineReducers)({
                    ixData: i.ixData,
                    ixRequest: o.ixRequest,
                    ixSession: c.ixSession,
                    ixElements: s,
                    ixInstances: d.ixInstances,
                    ixParameters: l.ixParameters
                })
        },
        628: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixRequest", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let a = n(7087),
                i = n(1185),
                {
                    IX2_PREVIEW_REQUESTED: o,
                    IX2_PLAYBACK_REQUESTED: c,
                    IX2_STOP_REQUESTED: r,
                    IX2_CLEAR_REQUESTED: d
                } = a.IX2EngineActionTypes,
                l = {
                    preview: {},
                    playback: {},
                    stop: {},
                    clear: {}
                },
                s = Object.create(null, {
                    [o]: {
                        value: "preview"
                    },
                    [c]: {
                        value: "playback"
                    },
                    [r]: {
                        value: "stop"
                    },
                    [d]: {
                        value: "clear"
                    }
                }),
                u = (e = l, t) => {
                    if (t.type in s) {
                        let n = [s[t.type]];
                        return (0, i.setIn)(e, [n], { ...t.payload
                        })
                    }
                    return e
                }
        },
        5862: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixSession", {
                enumerable: !0,
                get: function() {
                    return b
                }
            });
            let a = n(7087),
                i = n(1185),
                {
                    IX2_SESSION_INITIALIZED: o,
                    IX2_SESSION_STARTED: c,
                    IX2_TEST_FRAME_RENDERED: r,
                    IX2_SESSION_STOPPED: d,
                    IX2_EVENT_LISTENER_ADDED: l,
                    IX2_EVENT_STATE_CHANGED: s,
                    IX2_ANIMATION_FRAME_CHANGED: u,
                    IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
                    IX2_VIEWPORT_WIDTH_CHANGED: p,
                    IX2_MEDIA_QUERIES_DEFINED: E
                } = a.IX2EngineActionTypes,
                g = {
                    active: !1,
                    tick: 0,
                    eventListeners: [],
                    eventState: {},
                    playbackState: {},
                    viewportWidth: 0,
                    mediaQueryKey: null,
                    hasBoundaryNodes: !1,
                    hasDefinedMediaQueries: !1,
                    reducedMotion: !1
                },
                b = (e = g, t) => {
                    switch (t.type) {
                        case o:
                            {
                                let {
                                    hasBoundaryNodes: n,
                                    reducedMotion: a
                                } = t.payload;
                                return (0, i.merge)(e, {
                                    hasBoundaryNodes: n,
                                    reducedMotion: a
                                })
                            }
                        case c:
                            return (0, i.set)(e, "active", !0);
                        case r:
                            {
                                let {
                                    payload: {
                                        step: n = 20
                                    }
                                } = t;
                                return (0, i.set)(e, "tick", e.tick + n)
                            }
                        case d:
                            return g;
                        case u:
                            {
                                let {
                                    payload: {
                                        now: n
                                    }
                                } = t;
                                return (0, i.set)(e, "tick", n)
                            }
                        case l:
                            {
                                let n = (0, i.addLast)(e.eventListeners, t.payload);
                                return (0, i.set)(e, "eventListeners", n)
                            }
                        case s:
                            {
                                let {
                                    stateKey: n,
                                    newState: a
                                } = t.payload;
                                return (0, i.setIn)(e, ["eventState", n], a)
                            }
                        case f:
                            {
                                let {
                                    actionListId: n,
                                    isPlaying: a
                                } = t.payload;
                                return (0, i.setIn)(e, ["playbackState", n], a)
                            }
                        case p:
                            {
                                let {
                                    width: n,
                                    mediaQueries: a
                                } = t.payload,
                                o = a.length,
                                c = null;
                                for (let e = 0; e < o; e++) {
                                    let {
                                        key: t,
                                        min: i,
                                        max: o
                                    } = a[e];
                                    if (n >= i && n <= o) {
                                        c = t;
                                        break
                                    }
                                }
                                return (0, i.merge)(e, {
                                    viewportWidth: n,
                                    mediaQueryKey: c
                                })
                            }
                        case E:
                            return (0, i.set)(e, "hasDefinedMediaQueries", !0);
                        default:
                            return e
                    }
                }
        },
        7377: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                clearPlugin: function() {
                    return s
                },
                createPluginInstance: function() {
                    return d
                },
                getPluginConfig: function() {
                    return i
                },
                getPluginDestination: function() {
                    return r
                },
                getPluginDuration: function() {
                    return o
                },
                getPluginOrigin: function() {
                    return c
                },
                renderPlugin: function() {
                    return l
                }
            };
            for (var a in n) Object.defineProperty(t, a, {
                enumerable: !0,
                get: n[a]
            });
            let i = e => e.value,
                o = (e, t) => {
                    if ("auto" !== t.config.duration) return null;
                    let n = parseFloat(e.getAttribute("data-duration"));
                    return n > 0 ? 1e3 * n : 1e3 * parseFloat(e.getAttribute("data-default-duration"))
                },
                c = e => e || {
                    value: 0
                },
                r = e => ({
                    value: e.value
                }),
                d = e => {
                    let t = window.Webflow.require("lottie");
                    if (!t) return null;
                    let n = t.createInstance(e);
                    return n.stop(), n.setSubframe(!0), n
                },
                l = (e, t, n) => {
                    if (!e) return;
                    let a = t[n.actionTypeId].value / 100;
                    e.goToFrame(e.frames * a)
                },
                s = e => {
                    let t = window.Webflow.require("lottie");
                    t && t.createInstance(e).stop()
                }
        },
        2570: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                clearPlugin: function() {
                    return E
                },
                createPluginInstance: function() {
                    return f
                },
                getPluginConfig: function() {
                    return d
                },
                getPluginDestination: function() {
                    return u
                },
                getPluginDuration: function() {
                    return l
                },
                getPluginOrigin: function() {
                    return s
                },
                renderPlugin: function() {
                    return p
                }
            };
            for (var a in n) Object.defineProperty(t, a, {
                enumerable: !0,
                get: n[a]
            });
            let i = "--wf-rive-fit",
                o = "--wf-rive-alignment",
                c = e => document.querySelector(`[data-w-id="${e}"]`),
                r = () => window.Webflow.require("rive"),
                d = (e, t) => e.value.inputs[t],
                l = () => null,
                s = (e, t) => {
                    if (e) return e;
                    let n = {},
                        {
                            inputs: a = {}
                        } = t.config.value;
                    for (let e in a) null == a[e] && (n[e] = 0);
                    return n
                },
                u = e => e.value.inputs ? ? {},
                f = (e, t) => {
                    if ((t.config ? .target ? .selectorGuids || []).length > 0) return e;
                    let n = t ? .config ? .target ? .pluginElement;
                    return n ? c(n) : null
                },
                p = (e, {
                    PLUGIN_RIVE: t
                }, n) => {
                    let a = r();
                    if (!a) return;
                    let c = a.getInstance(e),
                        d = a.rive.StateMachineInputType,
                        {
                            name: l,
                            inputs: s = {}
                        } = n.config.value || {};

                    function u(e) {
                        if (e.loaded) n();
                        else {
                            let t = () => {
                                n(), e ? .off("load", t)
                            };
                            e ? .on("load", t)
                        }

                        function n() {
                            let n = e.stateMachineInputs(l);
                            if (null != n) {
                                if (e.isPlaying || e.play(l, !1), i in s || o in s) {
                                    let t = e.layout,
                                        n = s[i] ? ? t.fit,
                                        a = s[o] ? ? t.alignment;
                                    (n !== t.fit || a !== t.alignment) && (e.layout = t.copyWith({
                                        fit: n,
                                        alignment: a
                                    }))
                                }
                                for (let e in s) {
                                    if (e === i || e === o) continue;
                                    let a = n.find(t => t.name === e);
                                    if (null != a) switch (a.type) {
                                        case d.Boolean:
                                            null != s[e] && (a.value = !!s[e]);
                                            break;
                                        case d.Number:
                                            {
                                                let n = t[e];null != n && (a.value = n);
                                                break
                                            }
                                        case d.Trigger:
                                            s[e] && a.fire()
                                    }
                                }
                            }
                        }
                    }
                    c ? .rive ? u(c.rive) : a.setLoadHandler(e, u)
                },
                E = (e, t) => null
        },
        2866: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                clearPlugin: function() {
                    return E
                },
                createPluginInstance: function() {
                    return f
                },
                getPluginConfig: function() {
                    return r
                },
                getPluginDestination: function() {
                    return u
                },
                getPluginDuration: function() {
                    return d
                },
                getPluginOrigin: function() {
                    return s
                },
                renderPlugin: function() {
                    return p
                }
            };
            for (var a in n) Object.defineProperty(t, a, {
                enumerable: !0,
                get: n[a]
            });
            let i = e => document.querySelector(`[data-w-id="${e}"]`),
                o = () => window.Webflow.require("spline"),
                c = (e, t) => e.filter(e => !t.includes(e)),
                r = (e, t) => e.value[t],
                d = () => null,
                l = Object.freeze({
                    positionX: 0,
                    positionY: 0,
                    positionZ: 0,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    scaleX: 1,
                    scaleY: 1,
                    scaleZ: 1
                }),
                s = (e, t) => {
                    let n = Object.keys(t.config.value);
                    if (e) {
                        let t = c(n, Object.keys(e));
                        return t.length ? t.reduce((e, t) => (e[t] = l[t], e), e) : e
                    }
                    return n.reduce((e, t) => (e[t] = l[t], e), {})
                },
                u = e => e.value,
                f = (e, t) => {
                    let n = t ? .config ? .target ? .pluginElement;
                    return n ? i(n) : null
                },
                p = (e, t, n) => {
                    let a = o();
                    if (!a) return;
                    let i = a.getInstance(e),
                        c = n.config.target.objectId,
                        r = e => {
                            if (!e) throw Error("Invalid spline app passed to renderSpline");
                            let n = c && e.findObjectById(c);
                            if (!n) return;
                            let {
                                PLUGIN_SPLINE: a
                            } = t;
                            null != a.positionX && (n.position.x = a.positionX), null != a.positionY && (n.position.y = a.positionY), null != a.positionZ && (n.position.z = a.positionZ), null != a.rotationX && (n.rotation.x = a.rotationX), null != a.rotationY && (n.rotation.y = a.rotationY), null != a.rotationZ && (n.rotation.z = a.rotationZ), null != a.scaleX && (n.scale.x = a.scaleX), null != a.scaleY && (n.scale.y = a.scaleY), null != a.scaleZ && (n.scale.z = a.scaleZ)
                        };
                    i ? r(i.spline) : a.setLoadHandler(e, r)
                },
                E = () => null
        },
        1407: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                clearPlugin: function() {
                    return p
                },
                createPluginInstance: function() {
                    return s
                },
                getPluginConfig: function() {
                    return c
                },
                getPluginDestination: function() {
                    return l
                },
                getPluginDuration: function() {
                    return r
                },
                getPluginOrigin: function() {
                    return d
                },
                renderPlugin: function() {
                    return f
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = n(380),
                c = (e, t) => e.value[t],
                r = () => null,
                d = (e, t) => {
                    if (e) return e;
                    let n = t.config.value,
                        a = t.config.target.objectId,
                        i = getComputedStyle(document.documentElement).getPropertyValue(a);
                    return null != n.size ? {
                        size: parseInt(i, 10)
                    } : "%" === n.unit || "-" === n.unit ? {
                        size: parseFloat(i)
                    } : null != n.red && null != n.green && null != n.blue ? (0, o.normalizeColor)(i) : void 0
                },
                l = e => e.value,
                s = () => null,
                u = {
                    color: {
                        match: ({
                            red: e,
                            green: t,
                            blue: n,
                            alpha: a
                        }) => [e, t, n, a].every(e => null != e),
                        getValue: ({
                            red: e,
                            green: t,
                            blue: n,
                            alpha: a
                        }) => `rgba(${e}, ${t}, ${n}, ${a})`
                    },
                    size: {
                        match: ({
                            size: e
                        }) => null != e,
                        getValue: ({
                            size: e
                        }, t) => "-" === t ? e : `${e}${t}`
                    }
                },
                f = (e, t, n) => {
                    let {
                        target: {
                            objectId: a
                        },
                        value: {
                            unit: i
                        }
                    } = n.config, o = t.PLUGIN_VARIABLE, c = Object.values(u).find(e => e.match(o, i));
                    c && document.documentElement.style.setProperty(a, c.getValue(o, i))
                },
                p = (e, t) => {
                    let n = t.config.target.objectId;
                    document.documentElement.style.removeProperty(n)
                }
        },
        3690: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "pluginMethodMap", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let a = n(7087),
                i = l(n(7377)),
                o = l(n(2866)),
                c = l(n(2570)),
                r = l(n(1407));

            function d(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (d = function(e) {
                    return e ? n : t
                })(e)
            }

            function l(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = d(t);
                if (n && n.has(e)) return n.get(e);
                var a = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var c = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                        c && (c.get || c.set) ? Object.defineProperty(a, o, c) : a[o] = e[o]
                    }
                return a.default = e, n && n.set(e, a), a
            }
            let s = new Map([
                [a.ActionTypeConsts.PLUGIN_LOTTIE, { ...i
                }],
                [a.ActionTypeConsts.PLUGIN_SPLINE, { ...o
                }],
                [a.ActionTypeConsts.PLUGIN_RIVE, { ...c
                }],
                [a.ActionTypeConsts.PLUGIN_VARIABLE, { ...r
                }]
            ])
        },
        8023: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                IX2_ACTION_LIST_PLAYBACK_CHANGED: function() {
                    return m
                },
                IX2_ANIMATION_FRAME_CHANGED: function() {
                    return E
                },
                IX2_CLEAR_REQUESTED: function() {
                    return u
                },
                IX2_ELEMENT_STATE_CHANGED: function() {
                    return T
                },
                IX2_EVENT_LISTENER_ADDED: function() {
                    return f
                },
                IX2_EVENT_STATE_CHANGED: function() {
                    return p
                },
                IX2_INSTANCE_ADDED: function() {
                    return b
                },
                IX2_INSTANCE_REMOVED: function() {
                    return y
                },
                IX2_INSTANCE_STARTED: function() {
                    return I
                },
                IX2_MEDIA_QUERIES_DEFINED: function() {
                    return v
                },
                IX2_PARAMETER_CHANGED: function() {
                    return g
                },
                IX2_PLAYBACK_REQUESTED: function() {
                    return l
                },
                IX2_PREVIEW_REQUESTED: function() {
                    return d
                },
                IX2_RAW_DATA_IMPORTED: function() {
                    return i
                },
                IX2_SESSION_INITIALIZED: function() {
                    return o
                },
                IX2_SESSION_STARTED: function() {
                    return c
                },
                IX2_SESSION_STOPPED: function() {
                    return r
                },
                IX2_STOP_REQUESTED: function() {
                    return s
                },
                IX2_TEST_FRAME_RENDERED: function() {
                    return _
                },
                IX2_VIEWPORT_WIDTH_CHANGED: function() {
                    return O
                }
            };
            for (var a in n) Object.defineProperty(t, a, {
                enumerable: !0,
                get: n[a]
            });
            let i = "IX2_RAW_DATA_IMPORTED",
                o = "IX2_SESSION_INITIALIZED",
                c = "IX2_SESSION_STARTED",
                r = "IX2_SESSION_STOPPED",
                d = "IX2_PREVIEW_REQUESTED",
                l = "IX2_PLAYBACK_REQUESTED",
                s = "IX2_STOP_REQUESTED",
                u = "IX2_CLEAR_REQUESTED",
                f = "IX2_EVENT_LISTENER_ADDED",
                p = "IX2_EVENT_STATE_CHANGED",
                E = "IX2_ANIMATION_FRAME_CHANGED",
                g = "IX2_PARAMETER_CHANGED",
                b = "IX2_INSTANCE_ADDED",
                I = "IX2_INSTANCE_STARTED",
                y = "IX2_INSTANCE_REMOVED",
                T = "IX2_ELEMENT_STATE_CHANGED",
                m = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
                O = "IX2_VIEWPORT_WIDTH_CHANGED",
                v = "IX2_MEDIA_QUERIES_DEFINED",
                _ = "IX2_TEST_FRAME_RENDERED"
        },
        2686: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                ABSTRACT_NODE: function() {
                    return et
                },
                AUTO: function() {
                    return H
                },
                BACKGROUND: function() {
                    return k
                },
                BACKGROUND_COLOR: function() {
                    return x
                },
                BAR_DELIMITER: function() {
                    return z
                },
                BORDER_COLOR: function() {
                    return F
                },
                BOUNDARY_SELECTOR: function() {
                    return d
                },
                CHILDREN: function() {
                    return Q
                },
                COLON_DELIMITER: function() {
                    return W
                },
                COLOR: function() {
                    return D
                },
                COMMA_DELIMITER: function() {
                    return j
                },
                CONFIG_UNIT: function() {
                    return b
                },
                CONFIG_VALUE: function() {
                    return f
                },
                CONFIG_X_UNIT: function() {
                    return p
                },
                CONFIG_X_VALUE: function() {
                    return l
                },
                CONFIG_Y_UNIT: function() {
                    return E
                },
                CONFIG_Y_VALUE: function() {
                    return s
                },
                CONFIG_Z_UNIT: function() {
                    return g
                },
                CONFIG_Z_VALUE: function() {
                    return u
                },
                DISPLAY: function() {
                    return B
                },
                FILTER: function() {
                    return G
                },
                FLEX: function() {
                    return Y
                },
                FONT_VARIATION_SETTINGS: function() {
                    return M
                },
                HEIGHT: function() {
                    return V
                },
                HTML_ELEMENT: function() {
                    return J
                },
                IMMEDIATE_CHILDREN: function() {
                    return K
                },
                IX2_ID_DELIMITER: function() {
                    return i
                },
                OPACITY: function() {
                    return P
                },
                PARENT: function() {
                    return q
                },
                PLAIN_OBJECT: function() {
                    return ee
                },
                PRESERVE_3D: function() {
                    return Z
                },
                RENDER_GENERAL: function() {
                    return ea
                },
                RENDER_PLUGIN: function() {
                    return eo
                },
                RENDER_STYLE: function() {
                    return ei
                },
                RENDER_TRANSFORM: function() {
                    return en
                },
                ROTATE_X: function() {
                    return R
                },
                ROTATE_Y: function() {
                    return L
                },
                ROTATE_Z: function() {
                    return S
                },
                SCALE_3D: function() {
                    return A
                },
                SCALE_X: function() {
                    return v
                },
                SCALE_Y: function() {
                    return _
                },
                SCALE_Z: function() {
                    return h
                },
                SIBLINGS: function() {
                    return $
                },
                SKEW: function() {
                    return N
                },
                SKEW_X: function() {
                    return C
                },
                SKEW_Y: function() {
                    return w
                },
                TRANSFORM: function() {
                    return I
                },
                TRANSLATE_3D: function() {
                    return O
                },
                TRANSLATE_X: function() {
                    return y
                },
                TRANSLATE_Y: function() {
                    return T
                },
                TRANSLATE_Z: function() {
                    return m
                },
                WF_PAGE: function() {
                    return o
                },
                WIDTH: function() {
                    return U
                },
                WILL_CHANGE: function() {
                    return X
                },
                W_MOD_IX: function() {
                    return r
                },
                W_MOD_JS: function() {
                    return c
                }
            };
            for (var a in n) Object.defineProperty(t, a, {
                enumerable: !0,
                get: n[a]
            });
            let i = "|",
                o = "data-wf-page",
                c = "w-mod-js",
                r = "w-mod-ix",
                d = ".w-dyn-item",
                l = "xValue",
                s = "yValue",
                u = "zValue",
                f = "value",
                p = "xUnit",
                E = "yUnit",
                g = "zUnit",
                b = "unit",
                I = "transform",
                y = "translateX",
                T = "translateY",
                m = "translateZ",
                O = "translate3d",
                v = "scaleX",
                _ = "scaleY",
                h = "scaleZ",
                A = "scale3d",
                R = "rotateX",
                L = "rotateY",
                S = "rotateZ",
                N = "skew",
                C = "skewX",
                w = "skewY",
                P = "opacity",
                G = "filter",
                M = "font-variation-settings",
                U = "width",
                V = "height",
                x = "backgroundColor",
                k = "background",
                F = "borderColor",
                D = "color",
                B = "display",
                Y = "flex",
                X = "willChange",
                H = "AUTO",
                j = ",",
                W = ":",
                z = "|",
                Q = "CHILDREN",
                K = "IMMEDIATE_CHILDREN",
                $ = "SIBLINGS",
                q = "PARENT",
                Z = "preserve-3d",
                J = "HTML_ELEMENT",
                ee = "PLAIN_OBJECT",
                et = "ABSTRACT_NODE",
                en = "RENDER_TRANSFORM",
                ea = "RENDER_GENERAL",
                ei = "RENDER_STYLE",
                eo = "RENDER_PLUGIN"
        },
        262: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                ActionAppliesTo: function() {
                    return o
                },
                ActionTypeConsts: function() {
                    return i
                }
            };
            for (var a in n) Object.defineProperty(t, a, {
                enumerable: !0,
                get: n[a]
            });
            let i = {
                    TRANSFORM_MOVE: "TRANSFORM_MOVE",
                    TRANSFORM_SCALE: "TRANSFORM_SCALE",
                    TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
                    TRANSFORM_SKEW: "TRANSFORM_SKEW",
                    STYLE_OPACITY: "STYLE_OPACITY",
                    STYLE_SIZE: "STYLE_SIZE",
                    STYLE_FILTER: "STYLE_FILTER",
                    STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
                    STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
                    STYLE_BORDER: "STYLE_BORDER",
                    STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
                    OBJECT_VALUE: "OBJECT_VALUE",
                    PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
                    PLUGIN_SPLINE: "PLUGIN_SPLINE",
                    PLUGIN_RIVE: "PLUGIN_RIVE",
                    PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
                    GENERAL_DISPLAY: "GENERAL_DISPLAY",
                    GENERAL_START_ACTION: "GENERAL_START_ACTION",
                    GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
                    GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
                    GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
                    GENERAL_LOOP: "GENERAL_LOOP",
                    STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
                },
                o = {
                    ELEMENT: "ELEMENT",
                    ELEMENT_CLASS: "ELEMENT_CLASS",
                    TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
                }
        },
        7087: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                ActionTypeConsts: function() {
                    return c.ActionTypeConsts
                },
                IX2EngineActionTypes: function() {
                    return r
                },
                IX2EngineConstants: function() {
                    return d
                },
                QuickEffectIds: function() {
                    return o.QuickEffectIds
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = l(n(1833), t),
                c = l(n(262), t);
            l(n(8704), t), l(n(3213), t);
            let r = u(n(8023)),
                d = u(n(2686));

            function l(e, t) {
                return Object.keys(e).forEach(function(n) {
                    "default" === n || Object.prototype.hasOwnProperty.call(t, n) || Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: function() {
                            return e[n]
                        }
                    })
                }), e
            }

            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (s = function(e) {
                    return e ? n : t
                })(e)
            }

            function u(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = s(t);
                if (n && n.has(e)) return n.get(e);
                var a = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var c = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                        c && (c.get || c.set) ? Object.defineProperty(a, o, c) : a[o] = e[o]
                    }
                return a.default = e, n && n.set(e, a), a
            }
        },
        3213: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ReducedMotionTypes", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let {
                TRANSFORM_MOVE: a,
                TRANSFORM_SCALE: i,
                TRANSFORM_ROTATE: o,
                TRANSFORM_SKEW: c,
                STYLE_SIZE: r,
                STYLE_FILTER: d,
                STYLE_FONT_VARIATION: l
            } = n(262).ActionTypeConsts, s = {
                [a]: !0,
                [i]: !0,
                [o]: !0,
                [c]: !0,
                [r]: !0,
                [d]: !0,
                [l]: !0
            }
        },
        1833: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                EventAppliesTo: function() {
                    return o
                },
                EventBasedOn: function() {
                    return c
                },
                EventContinuousMouseAxes: function() {
                    return r
                },
                EventLimitAffectedElements: function() {
                    return d
                },
                EventTypeConsts: function() {
                    return i
                },
                QuickEffectDirectionConsts: function() {
                    return s
                },
                QuickEffectIds: function() {
                    return l
                }
            };
            for (var a in n) Object.defineProperty(t, a, {
                enumerable: !0,
                get: n[a]
            });
            let i = {
                    NAVBAR_OPEN: "NAVBAR_OPEN",
                    NAVBAR_CLOSE: "NAVBAR_CLOSE",
                    TAB_ACTIVE: "TAB_ACTIVE",
                    TAB_INACTIVE: "TAB_INACTIVE",
                    SLIDER_ACTIVE: "SLIDER_ACTIVE",
                    SLIDER_INACTIVE: "SLIDER_INACTIVE",
                    DROPDOWN_OPEN: "DROPDOWN_OPEN",
                    DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
                    MOUSE_CLICK: "MOUSE_CLICK",
                    MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
                    MOUSE_DOWN: "MOUSE_DOWN",
                    MOUSE_UP: "MOUSE_UP",
                    MOUSE_OVER: "MOUSE_OVER",
                    MOUSE_OUT: "MOUSE_OUT",
                    MOUSE_MOVE: "MOUSE_MOVE",
                    MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
                    SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
                    SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
                    SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
                    ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
                    ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
                    PAGE_START: "PAGE_START",
                    PAGE_FINISH: "PAGE_FINISH",
                    PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
                    PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
                    PAGE_SCROLL: "PAGE_SCROLL"
                },
                o = {
                    ELEMENT: "ELEMENT",
                    CLASS: "CLASS",
                    PAGE: "PAGE"
                },
                c = {
                    ELEMENT: "ELEMENT",
                    VIEWPORT: "VIEWPORT"
                },
                r = {
                    X_AXIS: "X_AXIS",
                    Y_AXIS: "Y_AXIS"
                },
                d = {
                    CHILDREN: "CHILDREN",
                    SIBLINGS: "SIBLINGS",
                    IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
                },
                l = {
                    FADE_EFFECT: "FADE_EFFECT",
                    SLIDE_EFFECT: "SLIDE_EFFECT",
                    GROW_EFFECT: "GROW_EFFECT",
                    SHRINK_EFFECT: "SHRINK_EFFECT",
                    SPIN_EFFECT: "SPIN_EFFECT",
                    FLY_EFFECT: "FLY_EFFECT",
                    POP_EFFECT: "POP_EFFECT",
                    FLIP_EFFECT: "FLIP_EFFECT",
                    JIGGLE_EFFECT: "JIGGLE_EFFECT",
                    PULSE_EFFECT: "PULSE_EFFECT",
                    DROP_EFFECT: "DROP_EFFECT",
                    BLINK_EFFECT: "BLINK_EFFECT",
                    BOUNCE_EFFECT: "BOUNCE_EFFECT",
                    FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
                    FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
                    RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
                    JELLO_EFFECT: "JELLO_EFFECT",
                    GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
                    SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
                    PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
                },
                s = {
                    LEFT: "LEFT",
                    RIGHT: "RIGHT",
                    BOTTOM: "BOTTOM",
                    TOP: "TOP",
                    BOTTOM_LEFT: "BOTTOM_LEFT",
                    BOTTOM_RIGHT: "BOTTOM_RIGHT",
                    TOP_RIGHT: "TOP_RIGHT",
                    TOP_LEFT: "TOP_LEFT",
                    CLOCKWISE: "CLOCKWISE",
                    COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
                }
        },
        8704: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "InteractionTypeConsts", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = {
                MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
                MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
                MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
                SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
                SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
                MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
                PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
                PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
                PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
                NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
                DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
                ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
                TAB_INTERACTION: "TAB_INTERACTION",
                SLIDER_INTERACTION: "SLIDER_INTERACTION"
            }
        },
        380: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "normalizeColor", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let n = {
                aliceblue: "#F0F8FF",
                antiquewhite: "#FAEBD7",
                aqua: "#00FFFF",
                aquamarine: "#7FFFD4",
                azure: "#F0FFFF",
                beige: "#F5F5DC",
                bisque: "#FFE4C4",
                black: "#000000",
                blanchedalmond: "#FFEBCD",
                blue: "#0000FF",
                blueviolet: "#8A2BE2",
                brown: "#A52A2A",
                burlywood: "#DEB887",
                cadetblue: "#5F9EA0",
                chartreuse: "#7FFF00",
                chocolate: "#D2691E",
                coral: "#FF7F50",
                cornflowerblue: "#6495ED",
                cornsilk: "#FFF8DC",
                crimson: "#DC143C",
                cyan: "#00FFFF",
                darkblue: "#00008B",
                darkcyan: "#008B8B",
                darkgoldenrod: "#B8860B",
                darkgray: "#A9A9A9",
                darkgreen: "#006400",
                darkgrey: "#A9A9A9",
                darkkhaki: "#BDB76B",
                darkmagenta: "#8B008B",
                darkolivegreen: "#556B2F",
                darkorange: "#FF8C00",
                darkorchid: "#9932CC",
                darkred: "#8B0000",
                darksalmon: "#E9967A",
                darkseagreen: "#8FBC8F",
                darkslateblue: "#483D8B",
                darkslategray: "#2F4F4F",
                darkslategrey: "#2F4F4F",
                darkturquoise: "#00CED1",
                darkviolet: "#9400D3",
                deeppink: "#FF1493",
                deepskyblue: "#00BFFF",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1E90FF",
                firebrick: "#B22222",
                floralwhite: "#FFFAF0",
                forestgreen: "#228B22",
                fuchsia: "#FF00FF",
                gainsboro: "#DCDCDC",
                ghostwhite: "#F8F8FF",
                gold: "#FFD700",
                goldenrod: "#DAA520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#ADFF2F",
                grey: "#808080",
                honeydew: "#F0FFF0",
                hotpink: "#FF69B4",
                indianred: "#CD5C5C",
                indigo: "#4B0082",
                ivory: "#FFFFF0",
                khaki: "#F0E68C",
                lavender: "#E6E6FA",
                lavenderblush: "#FFF0F5",
                lawngreen: "#7CFC00",
                lemonchiffon: "#FFFACD",
                lightblue: "#ADD8E6",
                lightcoral: "#F08080",
                lightcyan: "#E0FFFF",
                lightgoldenrodyellow: "#FAFAD2",
                lightgray: "#D3D3D3",
                lightgreen: "#90EE90",
                lightgrey: "#D3D3D3",
                lightpink: "#FFB6C1",
                lightsalmon: "#FFA07A",
                lightseagreen: "#20B2AA",
                lightskyblue: "#87CEFA",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#B0C4DE",
                lightyellow: "#FFFFE0",
                lime: "#00FF00",
                limegreen: "#32CD32",
                linen: "#FAF0E6",
                magenta: "#FF00FF",
                maroon: "#800000",
                mediumaquamarine: "#66CDAA",
                mediumblue: "#0000CD",
                mediumorchid: "#BA55D3",
                mediumpurple: "#9370DB",
                mediumseagreen: "#3CB371",
                mediumslateblue: "#7B68EE",
                mediumspringgreen: "#00FA9A",
                mediumturquoise: "#48D1CC",
                mediumvioletred: "#C71585",
                midnightblue: "#191970",
                mintcream: "#F5FFFA",
                mistyrose: "#FFE4E1",
                moccasin: "#FFE4B5",
                navajowhite: "#FFDEAD",
                navy: "#000080",
                oldlace: "#FDF5E6",
                olive: "#808000",
                olivedrab: "#6B8E23",
                orange: "#FFA500",
                orangered: "#FF4500",
                orchid: "#DA70D6",
                palegoldenrod: "#EEE8AA",
                palegreen: "#98FB98",
                paleturquoise: "#AFEEEE",
                palevioletred: "#DB7093",
                papayawhip: "#FFEFD5",
                peachpuff: "#FFDAB9",
                peru: "#CD853F",
                pink: "#FFC0CB",
                plum: "#DDA0DD",
                powderblue: "#B0E0E6",
                purple: "#800080",
                rebeccapurple: "#663399",
                red: "#FF0000",
                rosybrown: "#BC8F8F",
                royalblue: "#4169E1",
                saddlebrown: "#8B4513",
                salmon: "#FA8072",
                sandybrown: "#F4A460",
                seagreen: "#2E8B57",
                seashell: "#FFF5EE",
                sienna: "#A0522D",
                silver: "#C0C0C0",
                skyblue: "#87CEEB",
                slateblue: "#6A5ACD",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#FFFAFA",
                springgreen: "#00FF7F",
                steelblue: "#4682B4",
                tan: "#D2B48C",
                teal: "#008080",
                thistle: "#D8BFD8",
                tomato: "#FF6347",
                turquoise: "#40E0D0",
                violet: "#EE82EE",
                wheat: "#F5DEB3",
                white: "#FFFFFF",
                whitesmoke: "#F5F5F5",
                yellow: "#FFFF00",
                yellowgreen: "#9ACD32"
            };

            function a(e) {
                let t, a, i, o = 1,
                    c = e.replace(/\s/g, "").toLowerCase(),
                    r = ("string" == typeof n[c] ? n[c].toLowerCase() : null) || c;
                if (r.startsWith("#")) {
                    let e = r.substring(1);
                    3 === e.length || 4 === e.length ? (t = parseInt(e[0] + e[0], 16), a = parseInt(e[1] + e[1], 16), i = parseInt(e[2] + e[2], 16), 4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255)) : (6 === e.length || 8 === e.length) && (t = parseInt(e.substring(0, 2), 16), a = parseInt(e.substring(2, 4), 16), i = parseInt(e.substring(4, 6), 16), 8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255))
                } else if (r.startsWith("rgba")) {
                    let e = r.match(/rgba\(([^)]+)\)/)[1].split(",");
                    t = parseInt(e[0], 10), a = parseInt(e[1], 10), i = parseInt(e[2], 10), o = parseFloat(e[3])
                } else if (r.startsWith("rgb")) {
                    let e = r.match(/rgb\(([^)]+)\)/)[1].split(",");
                    t = parseInt(e[0], 10), a = parseInt(e[1], 10), i = parseInt(e[2], 10)
                } else if (r.startsWith("hsla")) {
                    let e, n, c, d = r.match(/hsla\(([^)]+)\)/)[1].split(","),
                        l = parseFloat(d[0]),
                        s = parseFloat(d[1].replace("%", "")) / 100,
                        u = parseFloat(d[2].replace("%", "")) / 100;
                    o = parseFloat(d[3]);
                    let f = (1 - Math.abs(2 * u - 1)) * s,
                        p = f * (1 - Math.abs(l / 60 % 2 - 1)),
                        E = u - f / 2;
                    l >= 0 && l < 60 ? (e = f, n = p, c = 0) : l >= 60 && l < 120 ? (e = p, n = f, c = 0) : l >= 120 && l < 180 ? (e = 0, n = f, c = p) : l >= 180 && l < 240 ? (e = 0, n = p, c = f) : l >= 240 && l < 300 ? (e = p, n = 0, c = f) : (e = f, n = 0, c = p), t = Math.round((e + E) * 255), a = Math.round((n + E) * 255), i = Math.round((c + E) * 255)
                } else if (r.startsWith("hsl")) {
                    let e, n, o, c = r.match(/hsl\(([^)]+)\)/)[1].split(","),
                        d = parseFloat(c[0]),
                        l = parseFloat(c[1].replace("%", "")) / 100,
                        s = parseFloat(c[2].replace("%", "")) / 100,
                        u = (1 - Math.abs(2 * s - 1)) * l,
                        f = u * (1 - Math.abs(d / 60 % 2 - 1)),
                        p = s - u / 2;
                    d >= 0 && d < 60 ? (e = u, n = f, o = 0) : d >= 60 && d < 120 ? (e = f, n = u, o = 0) : d >= 120 && d < 180 ? (e = 0, n = u, o = f) : d >= 180 && d < 240 ? (e = 0, n = f, o = u) : d >= 240 && d < 300 ? (e = f, n = 0, o = u) : (e = u, n = 0, o = f), t = Math.round((e + p) * 255), a = Math.round((n + p) * 255), i = Math.round((o + p) * 255)
                }
                if (Number.isNaN(t) || Number.isNaN(a) || Number.isNaN(i)) throw Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
                return {
                    red: t,
                    green: a,
                    blue: i,
                    alpha: o
                }
            }
        },
        9468: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                IX2BrowserSupport: function() {
                    return o
                },
                IX2EasingUtils: function() {
                    return r
                },
                IX2Easings: function() {
                    return c
                },
                IX2ElementsReducer: function() {
                    return d
                },
                IX2VanillaPlugins: function() {
                    return l
                },
                IX2VanillaUtils: function() {
                    return s
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = f(n(2662)),
                c = f(n(8686)),
                r = f(n(3767)),
                d = f(n(5861)),
                l = f(n(1799)),
                s = f(n(4124));

            function u(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (u = function(e) {
                    return e ? n : t
                })(e)
            }

            function f(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = u(t);
                if (n && n.has(e)) return n.get(e);
                var a = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var c = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                        c && (c.get || c.set) ? Object.defineProperty(a, o, c) : a[o] = e[o]
                    }
                return a.default = e, n && n.set(e, a), a
            }
        },
        2662: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a, i = {
                ELEMENT_MATCHES: function() {
                    return l
                },
                FLEX_PREFIXED: function() {
                    return s
                },
                IS_BROWSER_ENV: function() {
                    return r
                },
                TRANSFORM_PREFIXED: function() {
                    return u
                },
                TRANSFORM_STYLE_PREFIXED: function() {
                    return p
                },
                withBrowser: function() {
                    return d
                }
            };
            for (var o in i) Object.defineProperty(t, o, {
                enumerable: !0,
                get: i[o]
            });
            let c = (a = n(9777)) && a.__esModule ? a : {
                    default: a
                },
                r = "undefined" != typeof window,
                d = (e, t) => r ? e() : t,
                l = d(() => (0, c.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
                s = d(() => {
                    let e = document.createElement("i"),
                        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
                    try {
                        let {
                            length: n
                        } = t;
                        for (let a = 0; a < n; a++) {
                            let n = t[a];
                            if (e.style.display = n, e.style.display === n) return n
                        }
                        return ""
                    } catch (e) {
                        return ""
                    }
                }, "flex"),
                u = d(() => {
                    let e = document.createElement("i");
                    if (null == e.style.transform) {
                        let t = ["Webkit", "Moz", "ms"],
                            {
                                length: n
                            } = t;
                        for (let a = 0; a < n; a++) {
                            let n = t[a] + "Transform";
                            if (void 0 !== e.style[n]) return n
                        }
                    }
                    return "transform"
                }, "transform"),
                f = u.split("transform")[0],
                p = f ? f + "TransformStyle" : "transformStyle"
        },
        3767: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a, i = {
                applyEasing: function() {
                    return u
                },
                createBezierEasing: function() {
                    return s
                },
                optimizeFloat: function() {
                    return l
                }
            };
            for (var o in i) Object.defineProperty(t, o, {
                enumerable: !0,
                get: i[o]
            });
            let c = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {
                            __proto__: null
                        },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var c = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                            c && (c.get || c.set) ? Object.defineProperty(a, o, c) : a[o] = e[o]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n(8686)),
                r = (a = n(1361)) && a.__esModule ? a : {
                    default: a
                };

            function d(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (d = function(e) {
                    return e ? n : t
                })(e)
            }

            function l(e, t = 5, n = 10) {
                let a = Math.pow(n, t),
                    i = Number(Math.round(e * a) / a);
                return Math.abs(i) > 1e-4 ? i : 0
            }

            function s(e) {
                return (0, r.default)(...e)
            }

            function u(e, t, n) {
                return 0 === t ? 0 : 1 === t ? 1 : n ? l(t > 0 ? n(t) : t) : l(t > 0 && e && c[e] ? c[e](t) : t)
            }
        },
        8686: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a, i = {
                bounce: function() {
                    return Y
                },
                bouncePast: function() {
                    return X
                },
                ease: function() {
                    return r
                },
                easeIn: function() {
                    return d
                },
                easeInOut: function() {
                    return s
                },
                easeOut: function() {
                    return l
                },
                inBack: function() {
                    return G
                },
                inCirc: function() {
                    return N
                },
                inCubic: function() {
                    return E
                },
                inElastic: function() {
                    return V
                },
                inExpo: function() {
                    return R
                },
                inOutBack: function() {
                    return U
                },
                inOutCirc: function() {
                    return w
                },
                inOutCubic: function() {
                    return b
                },
                inOutElastic: function() {
                    return k
                },
                inOutExpo: function() {
                    return S
                },
                inOutQuad: function() {
                    return p
                },
                inOutQuart: function() {
                    return T
                },
                inOutQuint: function() {
                    return v
                },
                inOutSine: function() {
                    return A
                },
                inQuad: function() {
                    return u
                },
                inQuart: function() {
                    return I
                },
                inQuint: function() {
                    return m
                },
                inSine: function() {
                    return _
                },
                outBack: function() {
                    return M
                },
                outBounce: function() {
                    return P
                },
                outCirc: function() {
                    return C
                },
                outCubic: function() {
                    return g
                },
                outElastic: function() {
                    return x
                },
                outExpo: function() {
                    return L
                },
                outQuad: function() {
                    return f
                },
                outQuart: function() {
                    return y
                },
                outQuint: function() {
                    return O
                },
                outSine: function() {
                    return h
                },
                swingFrom: function() {
                    return D
                },
                swingFromTo: function() {
                    return F
                },
                swingTo: function() {
                    return B
                }
            };
            for (var o in i) Object.defineProperty(t, o, {
                enumerable: !0,
                get: i[o]
            });
            let c = (a = n(1361)) && a.__esModule ? a : {
                    default: a
                },
                r = (0, c.default)(.25, .1, .25, 1),
                d = (0, c.default)(.42, 0, 1, 1),
                l = (0, c.default)(0, 0, .58, 1),
                s = (0, c.default)(.42, 0, .58, 1);

            function u(e) {
                return Math.pow(e, 2)
            }

            function f(e) {
                return -(Math.pow(e - 1, 2) - 1)
            }

            function p(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
            }

            function E(e) {
                return Math.pow(e, 3)
            }

            function g(e) {
                return Math.pow(e - 1, 3) + 1
            }

            function b(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
            }

            function I(e) {
                return Math.pow(e, 4)
            }

            function y(e) {
                return -(Math.pow(e - 1, 4) - 1)
            }

            function T(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
            }

            function m(e) {
                return Math.pow(e, 5)
            }

            function O(e) {
                return Math.pow(e - 1, 5) + 1
            }

            function v(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
            }

            function _(e) {
                return -Math.cos(Math.PI / 2 * e) + 1
            }

            function h(e) {
                return Math.sin(Math.PI / 2 * e)
            }

            function A(e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            }

            function R(e) {
                return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
            }

            function L(e) {
                return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1
            }

            function S(e) {
                return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
            }

            function N(e) {
                return -(Math.sqrt(1 - e * e) - 1)
            }

            function C(e) {
                return Math.sqrt(1 - Math.pow(e - 1, 2))
            }

            function w(e) {
                return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            }

            function P(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }

            function G(e) {
                return e * e * (2.70158 * e - 1.70158)
            }

            function M(e) {
                return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
            }

            function U(e) {
                let t = 1.70158;
                return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
            }

            function V(e) {
                let t = 1.70158,
                    n = 0,
                    a = 1;
                return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n)))
            }

            function x(e) {
                let t = 1.70158,
                    n = 0,
                    a = 1;
                return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), a * Math.pow(2, -10 * e) * Math.sin(2 * Math.PI * (e - t) / n) + 1)
            }

            function k(e) {
                let t = 1.70158,
                    n = 0,
                    a = 1;
                return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (n || (n = .3 * 1.5), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), e < 1) ? -.5 * (a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n)) : a * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n) * .5 + 1
            }

            function F(e) {
                let t = 1.70158;
                return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
            }

            function D(e) {
                return e * e * (2.70158 * e - 1.70158)
            }

            function B(e) {
                return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
            }

            function Y(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }

            function X(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            }
        },
        1799: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                clearPlugin: function() {
                    return g
                },
                createPluginInstance: function() {
                    return p
                },
                getPluginConfig: function() {
                    return l
                },
                getPluginDestination: function() {
                    return f
                },
                getPluginDuration: function() {
                    return u
                },
                getPluginOrigin: function() {
                    return s
                },
                isPluginType: function() {
                    return r
                },
                renderPlugin: function() {
                    return E
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = n(2662),
                c = n(3690);

            function r(e) {
                return c.pluginMethodMap.has(e)
            }
            let d = e => t => {
                    if (!o.IS_BROWSER_ENV) return () => null;
                    let n = c.pluginMethodMap.get(t);
                    if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
                    let a = n[e];
                    if (!a) throw Error(`IX2 invalid plugin method: ${e}`);
                    return a
                },
                l = d("getPluginConfig"),
                s = d("getPluginOrigin"),
                u = d("getPluginDuration"),
                f = d("getPluginDestination"),
                p = d("createPluginInstance"),
                E = d("renderPlugin"),
                g = d("clearPlugin")
        },
        4124: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                cleanupHTMLElement: function() {
                    return ej
                },
                clearAllStyles: function() {
                    return eY
                },
                clearObjectCache: function() {
                    return eu
                },
                getActionListProgress: function() {
                    return eK
                },
                getAffectedElements: function() {
                    return em
                },
                getComputedStyle: function() {
                    return eO
                },
                getDestinationValues: function() {
                    return eN
                },
                getElementId: function() {
                    return eg
                },
                getInstanceId: function() {
                    return ep
                },
                getInstanceOrigin: function() {
                    return eA
                },
                getItemConfigByKey: function() {
                    return eS
                },
                getMaxDurationItemIndex: function() {
                    return eQ
                },
                getNamespacedParameterId: function() {
                    return eZ
                },
                getRenderType: function() {
                    return eC
                },
                getStyleProp: function() {
                    return ew
                },
                mediaQueriesEqual: function() {
                    return e0
                },
                observeStore: function() {
                    return ey
                },
                reduceListToGroup: function() {
                    return e$
                },
                reifyState: function() {
                    return eb
                },
                renderHTMLElement: function() {
                    return eP
                },
                shallowEqual: function() {
                    return s.default
                },
                shouldAllowMediaQuery: function() {
                    return eJ
                },
                shouldNamespaceEventParameter: function() {
                    return eq
                },
                stringifyTarget: function() {
                    return e1
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = g(n(4075)),
                c = g(n(1455)),
                r = g(n(5720)),
                d = n(1185),
                l = n(7087),
                s = g(n(7164)),
                u = n(3767),
                f = n(380),
                p = n(1799),
                E = n(2662);

            function g(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let {
                BACKGROUND: b,
                TRANSFORM: I,
                TRANSLATE_3D: y,
                SCALE_3D: T,
                ROTATE_X: m,
                ROTATE_Y: O,
                ROTATE_Z: v,
                SKEW: _,
                PRESERVE_3D: h,
                FLEX: A,
                OPACITY: R,
                FILTER: L,
                FONT_VARIATION_SETTINGS: S,
                WIDTH: N,
                HEIGHT: C,
                BACKGROUND_COLOR: w,
                BORDER_COLOR: P,
                COLOR: G,
                CHILDREN: M,
                IMMEDIATE_CHILDREN: U,
                SIBLINGS: V,
                PARENT: x,
                DISPLAY: k,
                WILL_CHANGE: F,
                AUTO: D,
                COMMA_DELIMITER: B,
                COLON_DELIMITER: Y,
                BAR_DELIMITER: X,
                RENDER_TRANSFORM: H,
                RENDER_GENERAL: j,
                RENDER_STYLE: W,
                RENDER_PLUGIN: z
            } = l.IX2EngineConstants, {
                TRANSFORM_MOVE: Q,
                TRANSFORM_SCALE: K,
                TRANSFORM_ROTATE: $,
                TRANSFORM_SKEW: q,
                STYLE_OPACITY: Z,
                STYLE_FILTER: J,
                STYLE_FONT_VARIATION: ee,
                STYLE_SIZE: et,
                STYLE_BACKGROUND_COLOR: en,
                STYLE_BORDER: ea,
                STYLE_TEXT_COLOR: ei,
                GENERAL_DISPLAY: eo,
                OBJECT_VALUE: ec
            } = l.ActionTypeConsts, er = e => e.trim(), ed = Object.freeze({
                [en]: w,
                [ea]: P,
                [ei]: G
            }), el = Object.freeze({
                [E.TRANSFORM_PREFIXED]: I,
                [w]: b,
                [R]: R,
                [L]: L,
                [N]: N,
                [C]: C,
                [S]: S
            }), es = new Map;

            function eu() {
                es.clear()
            }
            let ef = 1;

            function ep() {
                return "i" + ef++
            }
            let eE = 1;

            function eg(e, t) {
                for (let n in e) {
                    let a = e[n];
                    if (a && a.ref === t) return a.id
                }
                return "e" + eE++
            }

            function eb({
                events: e,
                actionLists: t,
                site: n
            } = {}) {
                let a = (0, c.default)(e, (e, t) => {
                        let {
                            eventTypeId: n
                        } = t;
                        return e[n] || (e[n] = {}), e[n][t.id] = t, e
                    }, {}),
                    i = n && n.mediaQueries,
                    o = [];
                return i ? o = i.map(e => e.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
                    ixData: {
                        events: e,
                        actionLists: t,
                        eventTypeMap: a,
                        mediaQueries: i,
                        mediaQueryKeys: o
                    }
                }
            }
            let eI = (e, t) => e === t;

            function ey({
                store: e,
                select: t,
                onChange: n,
                comparator: a = eI
            }) {
                let {
                    getState: i,
                    subscribe: o
                } = e, c = o(function() {
                    let o = t(i());
                    if (null == o) return void c();
                    a(o, r) || n(r = o, e)
                }), r = t(i());
                return c
            }

            function eT(e) {
                let t = typeof e;
                if ("string" === t) return {
                    id: e
                };
                if (null != e && "object" === t) {
                    let {
                        id: t,
                        objectId: n,
                        selector: a,
                        selectorGuids: i,
                        appliesTo: o,
                        useEventTarget: c
                    } = e;
                    return {
                        id: t,
                        objectId: n,
                        selector: a,
                        selectorGuids: i,
                        appliesTo: o,
                        useEventTarget: c
                    }
                }
                return {}
            }

            function em({
                config: e,
                event: t,
                eventTarget: n,
                elementRoot: a,
                elementApi: i
            }) {
                let o, c, r;
                if (!i) throw Error("IX2 missing elementApi");
                let {
                    targets: d
                } = e;
                if (Array.isArray(d) && d.length > 0) return d.reduce((e, o) => e.concat(em({
                    config: {
                        target: o
                    },
                    event: t,
                    eventTarget: n,
                    elementRoot: a,
                    elementApi: i
                })), []);
                let {
                    getValidDocument: s,
                    getQuerySelector: u,
                    queryDocument: f,
                    getChildElements: p,
                    getSiblingElements: g,
                    matchSelector: b,
                    elementContains: I,
                    isSiblingNode: y
                } = i, {
                    target: T
                } = e;
                if (!T) return [];
                let {
                    id: m,
                    objectId: O,
                    selector: v,
                    selectorGuids: _,
                    appliesTo: h,
                    useEventTarget: A
                } = eT(T);
                if (O) return [es.has(O) ? es.get(O) : es.set(O, {}).get(O)];
                if (h === l.EventAppliesTo.PAGE) {
                    let e = s(m);
                    return e ? [e] : []
                }
                let R = (t ? .action ? .config ? .affectedElements ? ? {})[m || v] || {},
                    L = !!(R.id || R.selector),
                    S = t && u(eT(t.target));
                if (L ? (o = R.limitAffectedElements, c = S, r = u(R)) : c = r = u({
                        id: m,
                        selector: v,
                        selectorGuids: _
                    }), t && A) {
                    let e = n && (r || !0 === A) ? [n] : f(S);
                    if (r) {
                        if (A === x) return f(r).filter(t => e.some(e => I(t, e)));
                        if (A === M) return f(r).filter(t => e.some(e => I(e, t)));
                        if (A === V) return f(r).filter(t => e.some(e => y(e, t)))
                    }
                    return e
                }
                return null == c || null == r ? [] : E.IS_BROWSER_ENV && a ? f(r).filter(e => a.contains(e)) : o === M ? f(c, r) : o === U ? p(f(c)).filter(b(r)) : o === V ? g(f(c)).filter(b(r)) : f(r)
            }

            function eO({
                element: e,
                actionItem: t
            }) {
                if (!E.IS_BROWSER_ENV) return {};
                let {
                    actionTypeId: n
                } = t;
                switch (n) {
                    case et:
                    case en:
                    case ea:
                    case ei:
                    case eo:
                        return window.getComputedStyle(e);
                    default:
                        return {}
                }
            }
            let ev = /px/,
                e_ = (e, t) => t.reduce((e, t) => (null == e[t.type] && (e[t.type] = eM[t.type]), e), e || {}),
                eh = (e, t) => t.reduce((e, t) => (null == e[t.type] && (e[t.type] = eU[t.type] || t.defaultValue || 0), e), e || {});

            function eA(e, t = {}, n = {}, a, i) {
                let {
                    getStyle: c
                } = i, {
                    actionTypeId: r
                } = a;
                if ((0, p.isPluginType)(r)) return (0, p.getPluginOrigin)(r)(t[r], a);
                switch (a.actionTypeId) {
                    case Q:
                    case K:
                    case $:
                    case q:
                        return t[a.actionTypeId] || eG[a.actionTypeId];
                    case J:
                        return e_(t[a.actionTypeId], a.config.filters);
                    case ee:
                        return eh(t[a.actionTypeId], a.config.fontVariations);
                    case Z:
                        return {
                            value: (0, o.default)(parseFloat(c(e, R)), 1)
                        };
                    case et:
                        {
                            let t, i = c(e, N),
                                r = c(e, C);
                            return {
                                widthValue: a.config.widthUnit === D ? ev.test(i) ? parseFloat(i) : parseFloat(n.width) : (0, o.default)(parseFloat(i), parseFloat(n.width)),
                                heightValue: a.config.heightUnit === D ? ev.test(r) ? parseFloat(r) : parseFloat(n.height) : (0, o.default)(parseFloat(r), parseFloat(n.height))
                            }
                        }
                    case en:
                    case ea:
                    case ei:
                        return function({
                            element: e,
                            actionTypeId: t,
                            computedStyle: n,
                            getStyle: a
                        }) {
                            let i = ed[t],
                                c = a(e, i),
                                r = (function(e, t) {
                                    let n = e.exec(t);
                                    return n ? n[1] : ""
                                })(eF, ek.test(c) ? c : n[i]).split(B);
                            return {
                                rValue: (0, o.default)(parseInt(r[0], 10), 255),
                                gValue: (0, o.default)(parseInt(r[1], 10), 255),
                                bValue: (0, o.default)(parseInt(r[2], 10), 255),
                                aValue: (0, o.default)(parseFloat(r[3]), 1)
                            }
                        }({
                            element: e,
                            actionTypeId: a.actionTypeId,
                            computedStyle: n,
                            getStyle: c
                        });
                    case eo:
                        return {
                            value: (0, o.default)(c(e, k), n.display)
                        };
                    case ec:
                        return t[a.actionTypeId] || {
                            value: 0
                        };
                    default:
                        return
                }
            }
            let eR = (e, t) => (t && (e[t.type] = t.value || 0), e),
                eL = (e, t) => (t && (e[t.type] = t.value || 0), e),
                eS = (e, t, n) => {
                    if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(n, t);
                    switch (e) {
                        case J:
                            {
                                let e = (0, r.default)(n.filters, ({
                                    type: e
                                }) => e === t);
                                return e ? e.value : 0
                            }
                        case ee:
                            {
                                let e = (0, r.default)(n.fontVariations, ({
                                    type: e
                                }) => e === t);
                                return e ? e.value : 0
                            }
                        default:
                            return n[t]
                    }
                };

            function eN({
                element: e,
                actionItem: t,
                elementApi: n
            }) {
                if ((0, p.isPluginType)(t.actionTypeId)) return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
                switch (t.actionTypeId) {
                    case Q:
                    case K:
                    case $:
                    case q:
                        {
                            let {
                                xValue: e,
                                yValue: n,
                                zValue: a
                            } = t.config;
                            return {
                                xValue: e,
                                yValue: n,
                                zValue: a
                            }
                        }
                    case et:
                        {
                            let {
                                getStyle: a,
                                setStyle: i,
                                getProperty: o
                            } = n,
                            {
                                widthUnit: c,
                                heightUnit: r
                            } = t.config,
                            {
                                widthValue: d,
                                heightValue: l
                            } = t.config;
                            if (!E.IS_BROWSER_ENV) return {
                                widthValue: d,
                                heightValue: l
                            };
                            if (c === D) {
                                let t = a(e, N);
                                i(e, N, ""), d = o(e, "offsetWidth"), i(e, N, t)
                            }
                            if (r === D) {
                                let t = a(e, C);
                                i(e, C, ""), l = o(e, "offsetHeight"), i(e, C, t)
                            }
                            return {
                                widthValue: d,
                                heightValue: l
                            }
                        }
                    case en:
                    case ea:
                    case ei:
                        {
                            let {
                                rValue: a,
                                gValue: i,
                                bValue: o,
                                aValue: c,
                                globalSwatchId: r
                            } = t.config;
                            if (r && r.startsWith("--")) {
                                let {
                                    getStyle: t
                                } = n, a = t(e, r), i = (0, f.normalizeColor)(a);
                                return {
                                    rValue: i.red,
                                    gValue: i.green,
                                    bValue: i.blue,
                                    aValue: i.alpha
                                }
                            }
                            return {
                                rValue: a,
                                gValue: i,
                                bValue: o,
                                aValue: c
                            }
                        }
                    case J:
                        return t.config.filters.reduce(eR, {});
                    case ee:
                        return t.config.fontVariations.reduce(eL, {});
                    default:
                        {
                            let {
                                value: e
                            } = t.config;
                            return {
                                value: e
                            }
                        }
                }
            }

            function eC(e) {
                return /^TRANSFORM_/.test(e) ? H : /^STYLE_/.test(e) ? W : /^GENERAL_/.test(e) ? j : /^PLUGIN_/.test(e) ? z : void 0
            }

            function ew(e, t) {
                return e === W ? t.replace("STYLE_", "").toLowerCase() : null
            }

            function eP(e, t, n, a, i, o, r, d, l) {
                switch (d) {
                    case H:
                        var s = e,
                            u = t,
                            f = n,
                            g = i,
                            b = r;
                        let I = ex.map(e => {
                                let t = eG[e],
                                    {
                                        xValue: n = t.xValue,
                                        yValue: a = t.yValue,
                                        zValue: i = t.zValue,
                                        xUnit: o = "",
                                        yUnit: c = "",
                                        zUnit: r = ""
                                    } = u[e] || {};
                                switch (e) {
                                    case Q:
                                        return `${y}(${n}${o}, ${a}${c}, ${i}${r})`;
                                    case K:
                                        return `${T}(${n}${o}, ${a}${c}, ${i}${r})`;
                                    case $:
                                        return `${m}(${n}${o}) ${O}(${a}${c}) ${v}(${i}${r})`;
                                    case q:
                                        return `${_}(${n}${o}, ${a}${c})`;
                                    default:
                                        return ""
                                }
                            }).join(" "),
                            {
                                setStyle: R
                            } = b;
                        eD(s, E.TRANSFORM_PREFIXED, b), R(s, E.TRANSFORM_PREFIXED, I),
                            function({
                                actionTypeId: e
                            }, {
                                xValue: t,
                                yValue: n,
                                zValue: a
                            }) {
                                return e === Q && void 0 !== a || e === K && void 0 !== a || e === $ && (void 0 !== t || void 0 !== n)
                            }(g, f) && R(s, E.TRANSFORM_STYLE_PREFIXED, h);
                        return;
                    case W:
                        return function(e, t, n, a, i, o) {
                            let {
                                setStyle: r
                            } = o;
                            switch (a.actionTypeId) {
                                case et:
                                    {
                                        let {
                                            widthUnit: t = "",
                                            heightUnit: i = ""
                                        } = a.config,
                                        {
                                            widthValue: c,
                                            heightValue: d
                                        } = n;void 0 !== c && (t === D && (t = "px"), eD(e, N, o), r(e, N, c + t)),
                                        void 0 !== d && (i === D && (i = "px"), eD(e, C, o), r(e, C, d + i));
                                        break
                                    }
                                case J:
                                    var d = a.config;
                                    let l = (0, c.default)(n, (e, t, n) => `${e} ${n}(${t}${eV(n,d)})`, ""),
                                        {
                                            setStyle: s
                                        } = o;
                                    eD(e, L, o), s(e, L, l);
                                    break;
                                case ee:
                                    a.config;
                                    let u = (0, c.default)(n, (e, t, n) => (e.push(`"${n}" ${t}`), e), []).join(", "),
                                        {
                                            setStyle: f
                                        } = o;
                                    eD(e, S, o), f(e, S, u);
                                    break;
                                case en:
                                case ea:
                                case ei:
                                    {
                                        let t = ed[a.actionTypeId],
                                            i = Math.round(n.rValue),
                                            c = Math.round(n.gValue),
                                            d = Math.round(n.bValue),
                                            l = n.aValue;eD(e, t, o),
                                        r(e, t, l >= 1 ? `rgb(${i},${c},${d})` : `rgba(${i},${c},${d},${l})`);
                                        break
                                    }
                                default:
                                    {
                                        let {
                                            unit: t = ""
                                        } = a.config;eD(e, i, o),
                                        r(e, i, n.value + t)
                                    }
                            }
                        }(e, 0, n, i, o, r);
                    case j:
                        var w = e,
                            P = i,
                            G = r;
                        let {
                            setStyle: M
                        } = G;
                        if (P.actionTypeId === eo) {
                            let {
                                value: e
                            } = P.config;
                            M(w, k, e === A && E.IS_BROWSER_ENV ? E.FLEX_PREFIXED : e);
                        }
                        return;
                    case z:
                        {
                            let {
                                actionTypeId: e
                            } = i;
                            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(l, t, i)
                        }
                }
            }
            let eG = {
                    [Q]: Object.freeze({
                        xValue: 0,
                        yValue: 0,
                        zValue: 0
                    }),
                    [K]: Object.freeze({
                        xValue: 1,
                        yValue: 1,
                        zValue: 1
                    }),
                    [$]: Object.freeze({
                        xValue: 0,
                        yValue: 0,
                        zValue: 0
                    }),
                    [q]: Object.freeze({
                        xValue: 0,
                        yValue: 0
                    })
                },
                eM = Object.freeze({
                    blur: 0,
                    "hue-rotate": 0,
                    invert: 0,
                    grayscale: 0,
                    saturate: 100,
                    sepia: 0,
                    contrast: 100,
                    brightness: 100
                }),
                eU = Object.freeze({
                    wght: 0,
                    opsz: 0,
                    wdth: 0,
                    slnt: 0
                }),
                eV = (e, t) => {
                    let n = (0, r.default)(t.filters, ({
                        type: t
                    }) => t === e);
                    if (n && n.unit) return n.unit;
                    switch (e) {
                        case "blur":
                            return "px";
                        case "hue-rotate":
                            return "deg";
                        default:
                            return "%"
                    }
                },
                ex = Object.keys(eG),
                ek = /^rgb/,
                eF = RegExp("rgba?\\(([^)]+)\\)");

            function eD(e, t, n) {
                if (!E.IS_BROWSER_ENV) return;
                let a = el[t];
                if (!a) return;
                let {
                    getStyle: i,
                    setStyle: o
                } = n, c = i(e, F);
                if (!c) return void o(e, F, a);
                let r = c.split(B).map(er); - 1 === r.indexOf(a) && o(e, F, r.concat(a).join(B))
            }

            function eB(e, t, n) {
                if (!E.IS_BROWSER_ENV) return;
                let a = el[t];
                if (!a) return;
                let {
                    getStyle: i,
                    setStyle: o
                } = n, c = i(e, F);
                c && -1 !== c.indexOf(a) && o(e, F, c.split(B).map(er).filter(e => e !== a).join(B))
            }

            function eY({
                store: e,
                elementApi: t
            }) {
                let {
                    ixData: n
                } = e.getState(), {
                    events: a = {},
                    actionLists: i = {}
                } = n;
                Object.keys(a).forEach(e => {
                    let n = a[e],
                        {
                            config: o
                        } = n.action,
                        {
                            actionListId: c
                        } = o,
                        r = i[c];
                    r && eX({
                        actionList: r,
                        event: n,
                        elementApi: t
                    })
                }), Object.keys(i).forEach(e => {
                    eX({
                        actionList: i[e],
                        elementApi: t
                    })
                })
            }

            function eX({
                actionList: e = {},
                event: t,
                elementApi: n
            }) {
                let {
                    actionItemGroups: a,
                    continuousParameterGroups: i
                } = e;
                a && a.forEach(e => {
                    eH({
                        actionGroup: e,
                        event: t,
                        elementApi: n
                    })
                }), i && i.forEach(e => {
                    let {
                        continuousActionGroups: a
                    } = e;
                    a.forEach(e => {
                        eH({
                            actionGroup: e,
                            event: t,
                            elementApi: n
                        })
                    })
                })
            }

            function eH({
                actionGroup: e,
                event: t,
                elementApi: n
            }) {
                let {
                    actionItems: a
                } = e;
                a.forEach(e => {
                    let a, {
                        actionTypeId: i,
                        config: o
                    } = e;
                    a = (0, p.isPluginType)(i) ? t => (0, p.clearPlugin)(i)(t, e) : eW({
                        effect: ez,
                        actionTypeId: i,
                        elementApi: n
                    }), em({
                        config: o,
                        event: t,
                        elementApi: n
                    }).forEach(a)
                })
            }

            function ej(e, t, n) {
                let {
                    setStyle: a,
                    getStyle: i
                } = n, {
                    actionTypeId: o
                } = t;
                if (o === et) {
                    let {
                        config: n
                    } = t;
                    n.widthUnit === D && a(e, N, ""), n.heightUnit === D && a(e, C, "")
                }
                i(e, F) && eW({
                    effect: eB,
                    actionTypeId: o,
                    elementApi: n
                })(e)
            }
            let eW = ({
                effect: e,
                actionTypeId: t,
                elementApi: n
            }) => a => {
                switch (t) {
                    case Q:
                    case K:
                    case $:
                    case q:
                        e(a, E.TRANSFORM_PREFIXED, n);
                        break;
                    case J:
                        e(a, L, n);
                        break;
                    case ee:
                        e(a, S, n);
                        break;
                    case Z:
                        e(a, R, n);
                        break;
                    case et:
                        e(a, N, n), e(a, C, n);
                        break;
                    case en:
                    case ea:
                    case ei:
                        e(a, ed[t], n);
                        break;
                    case eo:
                        e(a, k, n)
                }
            };

            function ez(e, t, n) {
                let {
                    setStyle: a
                } = n;
                eB(e, t, n), a(e, t, ""), t === E.TRANSFORM_PREFIXED && a(e, E.TRANSFORM_STYLE_PREFIXED, "")
            }

            function eQ(e) {
                let t = 0,
                    n = 0;
                return e.forEach((e, a) => {
                    let {
                        config: i
                    } = e, o = i.delay + i.duration;
                    o >= t && (t = o, n = a)
                }), n
            }

            function eK(e, t) {
                let {
                    actionItemGroups: n,
                    useFirstGroupAsInitialState: a
                } = e, {
                    actionItem: i,
                    verboseTimeElapsed: o = 0
                } = t, c = 0, r = 0;
                return n.forEach((e, t) => {
                    if (a && 0 === t) return;
                    let {
                        actionItems: n
                    } = e, d = n[eQ(n)], {
                        config: l,
                        actionTypeId: s
                    } = d;
                    i.id === d.id && (r = c + o);
                    let u = eC(s) === j ? 0 : l.duration;
                    c += l.delay + u
                }), c > 0 ? (0, u.optimizeFloat)(r / c) : 0
            }

            function e$({
                actionList: e,
                actionItemId: t,
                rawData: n
            }) {
                let {
                    actionItemGroups: a,
                    continuousParameterGroups: i
                } = e, o = [], c = e => (o.push((0, d.mergeIn)(e, ["config"], {
                    delay: 0,
                    duration: 0
                })), e.id === t);
                return a && a.some(({
                    actionItems: e
                }) => e.some(c)), i && i.some(e => {
                    let {
                        continuousActionGroups: t
                    } = e;
                    return t.some(({
                        actionItems: e
                    }) => e.some(c))
                }), (0, d.setIn)(n, ["actionLists"], {
                    [e.id]: {
                        id: e.id,
                        actionItemGroups: [{
                            actionItems: o
                        }]
                    }
                })
            }

            function eq(e, {
                basedOn: t
            }) {
                return e === l.EventTypeConsts.SCROLLING_IN_VIEW && (t === l.EventBasedOn.ELEMENT || null == t) || e === l.EventTypeConsts.MOUSE_MOVE && t === l.EventBasedOn.ELEMENT
            }

            function eZ(e, t) {
                return e + Y + t
            }

            function eJ(e, t) {
                return null == t || -1 !== e.indexOf(t)
            }

            function e0(e, t) {
                return (0, s.default)(e && e.sort(), t && t.sort())
            }

            function e1(e) {
                if ("string" == typeof e) return e;
                if (e.pluginElement && e.objectId) return e.pluginElement + X + e.objectId;
                if (e.objectId) return e.objectId;
                let {
                    id: t = "",
                    selector: n = "",
                    useEventTarget: a = ""
                } = e;
                return t + X + n + X + a
            }
        },
        7164: function(e, t) {
            "use strict";

            function n(e, t) {
                return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let a = function(e, t) {
                if (n(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                let a = Object.keys(e),
                    i = Object.keys(t);
                if (a.length !== i.length) return !1;
                for (let i = 0; i < a.length; i++)
                    if (!Object.hasOwn(t, a[i]) || !n(e[a[i]], t[a[i]])) return !1;
                return !0
            }
        },
        5861: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                createElementState: function() {
                    return _
                },
                ixElements: function() {
                    return v
                },
                mergeActionState: function() {
                    return h
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = n(1185),
                c = n(7087),
                {
                    HTML_ELEMENT: r,
                    PLAIN_OBJECT: d,
                    ABSTRACT_NODE: l,
                    CONFIG_X_VALUE: s,
                    CONFIG_Y_VALUE: u,
                    CONFIG_Z_VALUE: f,
                    CONFIG_VALUE: p,
                    CONFIG_X_UNIT: E,
                    CONFIG_Y_UNIT: g,
                    CONFIG_Z_UNIT: b,
                    CONFIG_UNIT: I
                } = c.IX2EngineConstants,
                {
                    IX2_SESSION_STOPPED: y,
                    IX2_INSTANCE_ADDED: T,
                    IX2_ELEMENT_STATE_CHANGED: m
                } = c.IX2EngineActionTypes,
                O = {},
                v = (e = O, t = {}) => {
                    switch (t.type) {
                        case y:
                            return O;
                        case T:
                            {
                                let {
                                    elementId: n,
                                    element: a,
                                    origin: i,
                                    actionItem: c,
                                    refType: r
                                } = t.payload,
                                {
                                    actionTypeId: d
                                } = c,
                                l = e;
                                return (0, o.getIn)(l, [n, a]) !== a && (l = _(l, a, r, n, c)),
                                h(l, n, d, i, c)
                            }
                        case m:
                            {
                                let {
                                    elementId: n,
                                    actionTypeId: a,
                                    current: i,
                                    actionItem: o
                                } = t.payload;
                                return h(e, n, a, i, o)
                            }
                        default:
                            return e
                    }
                };

            function _(e, t, n, a, i) {
                let c = n === d ? (0, o.getIn)(i, ["config", "target", "objectId"]) : null;
                return (0, o.mergeIn)(e, [a], {
                    id: a,
                    ref: t,
                    refId: c,
                    refType: n
                })
            }

            function h(e, t, n, a, i) {
                let c = function(e) {
                    let {
                        config: t
                    } = e;
                    return A.reduce((e, n) => {
                        let a = n[0],
                            i = n[1],
                            o = t[a],
                            c = t[i];
                        return null != o && null != c && (e[i] = c), e
                    }, {})
                }(i);
                return (0, o.mergeIn)(e, [t, "refState", n], a, c)
            }
            let A = [
                [s, E],
                [u, g],
                [f, b],
                [p, I]
            ]
        },
        2759: function() {
            Webflow.require("ix2").init({
                events: {
                    "e-4": {
                        id: "e-4",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-8",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-5"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "668b3a82199c56fe1206764e",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "668b3a82199c56fe1206764e",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1904cdf3ca2
                    },
                    "e-135": {
                        id: "e-135",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-13",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "668b3a82199c56fe1206764e|326e7e82-dcfb-7adf-4f84-e7c93d63ce6b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "668b3a82199c56fe1206764e|326e7e82-dcfb-7adf-4f84-e7c93d63ce6b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-13-p",
                            smoothing: 60,
                            startsEntering: !0,
                            addStartOffset: !0,
                            addOffsetValue: 51,
                            startsExiting: !1,
                            addEndOffset: !0,
                            endOffsetValue: 30
                        }],
                        createdOn: 0x18c924039aa
                    },
                    "e-139": {
                        id: "e-139",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-16",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "668b3a82199c56fe1206764e",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "668b3a82199c56fe1206764e",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-16-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 90,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-16-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 90,
                            restingState: 50
                        }],
                        createdOn: 0x190729ef549
                    },
                    "e-141": {
                        id: "e-141",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-18",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "668b3a82199c56fe1206764e|c8ca3b9a-a85b-1292-375e-0096929b90e9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "668b3a82199c56fe1206764e|c8ca3b9a-a85b-1292-375e-0096929b90e9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-18-p",
                            smoothing: 95,
                            startsEntering: !1,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19076065844
                    },
                    "e-142": {
                        id: "e-142",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-19",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "668b3a82199c56fe1206764e|bcccbaf3-46c1-2507-7a29-6a1b42000574",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "668b3a82199c56fe1206764e|bcccbaf3-46c1-2507-7a29-6a1b42000574",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-19-p",
                            smoothing: 95,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x190771c4c9e
                    },
                    "e-143": {
                        id: "e-143",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-20",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "668b3a82199c56fe1206764e|1fb632f4-1ac1-6610-955a-40ba40bfac95",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "668b3a82199c56fe1206764e|1fb632f4-1ac1-6610-955a-40ba40bfac95",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-20-p",
                            smoothing: 90,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1907b453be5
                    },
                    "e-150": {
                        id: "e-150",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-155"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".faq_item",
                            originalId: "668b3a82199c56fe1206764e|2d32d869-57f8-1e98-376e-9820c6513cac",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".faq_item",
                            originalId: "668b3a82199c56fe1206764e|2d32d869-57f8-1e98-376e-9820c6513cac",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x1826a90c4d6
                    },
                    "e-204": {
                        id: "e-204",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-54",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-205"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "668b3a82199c56fe1206764e",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "668b3a82199c56fe1206764e",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19096244b84
                    },
                    "e-205": {
                        id: "e-205",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-53",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-204"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "668b3a82199c56fe1206764e",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "668b3a82199c56fe1206764e",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19096244b85
                    },
                    "e-206": {
                        id: "e-206",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-55",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "668b3a82199c56fe1206764e",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "668b3a82199c56fe1206764e",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-55-p",
                            smoothing: 80,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1909626f284
                    },
                    "e-211": {
                        id: "e-211",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-56",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-212"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "668b3a82199c56fe1206764e|dbb67e7c-7cdf-b721-24ad-9c84bc67c777",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "668b3a82199c56fe1206764e|dbb67e7c-7cdf-b721-24ad-9c84bc67c777",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x187e4ece9d5
                    },
                    "e-212": {
                        id: "e-212",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-57",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-211"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "668b3a82199c56fe1206764e|dbb67e7c-7cdf-b721-24ad-9c84bc67c777",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "668b3a82199c56fe1206764e|dbb67e7c-7cdf-b721-24ad-9c84bc67c777",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x187e4ece9d5
                    },
                    "e-213": {
                        id: "e-213",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-56",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-214"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "668b3a82199c56fe1206764e|dbb67e7c-7cdf-b721-24ad-9c84bc67c783",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "668b3a82199c56fe1206764e|dbb67e7c-7cdf-b721-24ad-9c84bc67c783",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x187e4ece9d5
                    },
                    "e-214": {
                        id: "e-214",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-57",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-213"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "668b3a82199c56fe1206764e|dbb67e7c-7cdf-b721-24ad-9c84bc67c783",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "668b3a82199c56fe1206764e|dbb67e7c-7cdf-b721-24ad-9c84bc67c783",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x187e4ece9d5
                    },
                    "e-215": {
                        id: "e-215",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-56",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-216"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "668b3a82199c56fe1206764e|dbb67e7c-7cdf-b721-24ad-9c84bc67c78f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "668b3a82199c56fe1206764e|dbb67e7c-7cdf-b721-24ad-9c84bc67c78f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x187e4ece9d5
                    },
                    "e-216": {
                        id: "e-216",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-57",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-215"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "668b3a82199c56fe1206764e|dbb67e7c-7cdf-b721-24ad-9c84bc67c78f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "668b3a82199c56fe1206764e|dbb67e7c-7cdf-b721-24ad-9c84bc67c78f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x187e4ece9d5
                    },
                    "e-217": {
                        id: "e-217",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-56",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-218"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "668b3a82199c56fe1206764e|dbb67e7c-7cdf-b721-24ad-9c84bc67c79b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "668b3a82199c56fe1206764e|dbb67e7c-7cdf-b721-24ad-9c84bc67c79b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x187e4ece9d5
                    },
                    "e-218": {
                        id: "e-218",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-57",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-217"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "668b3a82199c56fe1206764e|dbb67e7c-7cdf-b721-24ad-9c84bc67c79b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "668b3a82199c56fe1206764e|dbb67e7c-7cdf-b721-24ad-9c84bc67c79b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x187e4ece9d5
                    },
                    "e-221": {
                        id: "e-221",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-58",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-222"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "aa65ac63-3d67-0a57-93a1-a30d3955f490",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "aa65ac63-3d67-0a57-93a1-a30d3955f490",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1909a3f1e9d
                    },
                    "e-222": {
                        id: "e-222",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-59",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-221"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "aa65ac63-3d67-0a57-93a1-a30d3955f490",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "aa65ac63-3d67-0a57-93a1-a30d3955f490",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1909a3f1e9e
                    },
                    "e-223": {
                        id: "e-223",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-58",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-224"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "9abfed62-e9c4-7c37-dd58-c8362da37b8b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "9abfed62-e9c4-7c37-dd58-c8362da37b8b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1909a487aa5
                    },
                    "e-224": {
                        id: "e-224",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-59",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-223"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "9abfed62-e9c4-7c37-dd58-c8362da37b8b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "9abfed62-e9c4-7c37-dd58-c8362da37b8b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1909a487aa5
                    },
                    "e-225": {
                        id: "e-225",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-60",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-226"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".academy-card",
                            originalId: "668b3a82199c56fe1206764e|5888a8db-d0e5-7ad3-0489-b03c2435c586",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".academy-card",
                            originalId: "668b3a82199c56fe1206764e|5888a8db-d0e5-7ad3-0489-b03c2435c586",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1909a7937f0
                    },
                    "e-226": {
                        id: "e-226",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-61",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-225"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".academy-card",
                            originalId: "668b3a82199c56fe1206764e|5888a8db-d0e5-7ad3-0489-b03c2435c586",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".academy-card",
                            originalId: "668b3a82199c56fe1206764e|5888a8db-d0e5-7ad3-0489-b03c2435c586",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1909a7937f0
                    },
                    "e-227": {
                        id: "e-227",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-44",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-228"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "668b3a82199c56fe1206764e|f7380c2b-bc2f-e672-6262-596655766c97",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "668b3a82199c56fe1206764e|f7380c2b-bc2f-e672-6262-596655766c97",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190b567a677
                    },
                    "e-228": {
                        id: "e-228",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-45",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-227"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "668b3a82199c56fe1206764e|f7380c2b-bc2f-e672-6262-596655766c97",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "668b3a82199c56fe1206764e|f7380c2b-bc2f-e672-6262-596655766c97",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190b567a677
                    },
                    "e-229": {
                        id: "e-229",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-34",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-230"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "cea2cd17-6d69-45a7-146d-fecefb5310cd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "cea2cd17-6d69-45a7-146d-fecefb5310cd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190c4883b85
                    },
                    "e-230": {
                        id: "e-230",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-229"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "cea2cd17-6d69-45a7-146d-fecefb5310cd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "cea2cd17-6d69-45a7-146d-fecefb5310cd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190c4883b85
                    },
                    "e-231": {
                        id: "e-231",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-58",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-232"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "cea2cd17-6d69-45a7-146d-fecefb5310d3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "cea2cd17-6d69-45a7-146d-fecefb5310d3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190c4883b85
                    },
                    "e-232": {
                        id: "e-232",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-59",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-231"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "cea2cd17-6d69-45a7-146d-fecefb5310d3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "cea2cd17-6d69-45a7-146d-fecefb5310d3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190c4883b85
                    },
                    "e-233": {
                        id: "e-233",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-58",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-234"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "cea2cd17-6d69-45a7-146d-fecefb5310db",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "cea2cd17-6d69-45a7-146d-fecefb5310db",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190c4883b85
                    },
                    "e-234": {
                        id: "e-234",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-59",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-233"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "cea2cd17-6d69-45a7-146d-fecefb5310db",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "cea2cd17-6d69-45a7-146d-fecefb5310db",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190c4883b85
                    },
                    "e-235": {
                        id: "e-235",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-34",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-236"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "cea2cd17-6d69-45a7-146d-fecefb5310e5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "cea2cd17-6d69-45a7-146d-fecefb5310e5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190c4883b85
                    },
                    "e-236": {
                        id: "e-236",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-235"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "cea2cd17-6d69-45a7-146d-fecefb5310e5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "cea2cd17-6d69-45a7-146d-fecefb5310e5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190c4883b85
                    },
                    "e-237": {
                        id: "e-237",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-34",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-238"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "cea2cd17-6d69-45a7-146d-fecefb5310ef",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "cea2cd17-6d69-45a7-146d-fecefb5310ef",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190c4883b85
                    },
                    "e-238": {
                        id: "e-238",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-237"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "cea2cd17-6d69-45a7-146d-fecefb5310ef",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "cea2cd17-6d69-45a7-146d-fecefb5310ef",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190c4883b85
                    },
                    "e-239": {
                        id: "e-239",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-34",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-240"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "cea2cd17-6d69-45a7-146d-fecefb5310fb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "cea2cd17-6d69-45a7-146d-fecefb5310fb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190c4883b85
                    },
                    "e-240": {
                        id: "e-240",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-239"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "cea2cd17-6d69-45a7-146d-fecefb5310fb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "cea2cd17-6d69-45a7-146d-fecefb5310fb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190c4883b85
                    },
                    "e-241": {
                        id: "e-241",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-34",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-242"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "cea2cd17-6d69-45a7-146d-fecefb531107",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "cea2cd17-6d69-45a7-146d-fecefb531107",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190c4883b85
                    },
                    "e-242": {
                        id: "e-242",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-241"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "cea2cd17-6d69-45a7-146d-fecefb531107",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "cea2cd17-6d69-45a7-146d-fecefb531107",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190c4883b85
                    },
                    "e-243": {
                        id: "e-243",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-34",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-244"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "cd28ab9e-deab-db4a-e702-3aca8f82dd04",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "cd28ab9e-deab-db4a-e702-3aca8f82dd04",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190c49df1b8
                    },
                    "e-244": {
                        id: "e-244",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-243"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "cd28ab9e-deab-db4a-e702-3aca8f82dd04",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "cd28ab9e-deab-db4a-e702-3aca8f82dd04",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190c49df1b8
                    },
                    "e-245": {
                        id: "e-245",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-34",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-246"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "f3aa0cc7-19f4-2557-f652-de8ba7c46da6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "f3aa0cc7-19f4-2557-f652-de8ba7c46da6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190c49f32d2
                    },
                    "e-246": {
                        id: "e-246",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-245"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "f3aa0cc7-19f4-2557-f652-de8ba7c46da6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "f3aa0cc7-19f4-2557-f652-de8ba7c46da6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190c49f32d2
                    },
                    "e-247": {
                        id: "e-247",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-34",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-248"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "b9853866-86bc-4c7b-f33f-a2e8fd4d8af8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "b9853866-86bc-4c7b-f33f-a2e8fd4d8af8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190c49f9690
                    },
                    "e-248": {
                        id: "e-248",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-247"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "b9853866-86bc-4c7b-f33f-a2e8fd4d8af8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "b9853866-86bc-4c7b-f33f-a2e8fd4d8af8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190c49f9690
                    },
                    "e-249": {
                        id: "e-249",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-34",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-250"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "b9853866-86bc-4c7b-f33f-a2e8fd4d8b08",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "b9853866-86bc-4c7b-f33f-a2e8fd4d8b08",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190c49fd37d
                    },
                    "e-250": {
                        id: "e-250",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-249"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "b9853866-86bc-4c7b-f33f-a2e8fd4d8b08",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "b9853866-86bc-4c7b-f33f-a2e8fd4d8b08",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190c49fd37d
                    },
                    "e-251": {
                        id: "e-251",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-34",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-252"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "b9853866-86bc-4c7b-f33f-a2e8fd4d8b18",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "b9853866-86bc-4c7b-f33f-a2e8fd4d8b18",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190c4a01a94
                    },
                    "e-252": {
                        id: "e-252",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-251"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "b9853866-86bc-4c7b-f33f-a2e8fd4d8b18",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "b9853866-86bc-4c7b-f33f-a2e8fd4d8b18",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x190c4a01a94
                    },
                    "e-253": {
                        id: "e-253",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-62",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "668b3a82199c56fe1206764e|952fc1dd-ab3d-e605-8717-baeef55f5573",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "668b3a82199c56fe1206764e|952fc1dd-ab3d-e605-8717-baeef55f5573",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-62-p",
                            smoothing: 60,
                            startsEntering: !0,
                            addStartOffset: !0,
                            addOffsetValue: 51,
                            startsExiting: !1,
                            addEndOffset: !0,
                            endOffsetValue: 30
                        }],
                        createdOn: 0x18c924039aa
                    },
                    "e-254": {
                        id: "e-254",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-64",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "66a89785f0ea249fb15b674e",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "66a89785f0ea249fb15b674e",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-64-p",
                            smoothing: 80,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19102a2bbdd
                    },
                    "e-255": {
                        id: "e-255",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-54",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-256"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "66a89785f0ea249fb15b674e",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "66a89785f0ea249fb15b674e",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19102a793e5
                    },
                    "e-256": {
                        id: "e-256",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-53",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-255"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "66a89785f0ea249fb15b674e",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "66a89785f0ea249fb15b674e",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19102a793e6
                    },
                    "e-257": {
                        id: "e-257",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-64",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "tiny", "small"],
                        target: {
                            id: "66ac91dd098e5d6c13a65621",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "66ac91dd098e5d6c13a65621",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-64-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x191351b6a36
                    },
                    "e-258": {
                        id: "e-258",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-54",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-259"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "66ac91dd098e5d6c13a65621",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "66ac91dd098e5d6c13a65621",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x191351bd76e
                    },
                    "e-259": {
                        id: "e-259",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-53",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-258"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "66ac91dd098e5d6c13a65621",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "66ac91dd098e5d6c13a65621",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x191351bd794
                    },
                    "e-260": {
                        id: "e-260",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-64",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "66b4ab135cacbfb01aa5d6ef",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "66b4ab135cacbfb01aa5d6ef",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-64-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x191351e834f
                    },
                    "e-261": {
                        id: "e-261",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-54",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-262"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "66b4ab135cacbfb01aa5d6ef",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "66b4ab135cacbfb01aa5d6ef",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x191351ecbac
                    },
                    "e-262": {
                        id: "e-262",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-53",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-261"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "66b4ab135cacbfb01aa5d6ef",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "66b4ab135cacbfb01aa5d6ef",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x191351ecbc4
                    },
                    "e-263": {
                        id: "e-263",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-64",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "66b4ab1e780c0bc6f28feb10",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "66b4ab1e780c0bc6f28feb10",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-64-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x191351f5325
                    },
                    "e-264": {
                        id: "e-264",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-54",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-265"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "66b4ab1e780c0bc6f28feb10",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "66b4ab1e780c0bc6f28feb10",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x191351f89e3
                    },
                    "e-265": {
                        id: "e-265",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-53",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-264"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "66b4ab1e780c0bc6f28feb10",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "66b4ab1e780c0bc6f28feb10",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x191351f89e4
                    },
                    "e-266": {
                        id: "e-266",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-64",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "66b4ab2f6cefc3fb22385f96",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "66b4ab2f6cefc3fb22385f96",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-64-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x191351fee2a
                    },
                    "e-267": {
                        id: "e-267",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-54",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-268"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "66b4ab2f6cefc3fb22385f96",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "66b4ab2f6cefc3fb22385f96",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19135200933
                    },
                    "e-268": {
                        id: "e-268",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-53",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-267"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "66b4ab2f6cefc3fb22385f96",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "66b4ab2f6cefc3fb22385f96",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19135200959
                    },
                    "e-269": {
                        id: "e-269",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-64",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "66b4ab3dfc9625bb3cb9a784",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "66b4ab3dfc9625bb3cb9a784",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-64-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1913520c4ea
                    },
                    "e-270": {
                        id: "e-270",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-54",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-271"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "66b4ab3dfc9625bb3cb9a784",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "66b4ab3dfc9625bb3cb9a784",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1913520e88a
                    },
                    "e-271": {
                        id: "e-271",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-53",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-270"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "66b4ab3dfc9625bb3cb9a784",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "66b4ab3dfc9625bb3cb9a784",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1913520e88b
                    },
                    "e-272": {
                        id: "e-272",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-64",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "66b4ab4babcfdd6cd9580f0c",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "66b4ab4babcfdd6cd9580f0c",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-64-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1913521ac6b
                    },
                    "e-273": {
                        id: "e-273",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-54",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-274"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "66b4ab4babcfdd6cd9580f0c",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "66b4ab4babcfdd6cd9580f0c",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1913521c272
                    },
                    "e-274": {
                        id: "e-274",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-53",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-273"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "66b4ab4babcfdd6cd9580f0c",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "66b4ab4babcfdd6cd9580f0c",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1913521c273
                    },
                    "e-275": {
                        id: "e-275",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-64",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "66b4ab5917391d47bebb73e9",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "66b4ab5917391d47bebb73e9",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-64-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x191352231ef
                    },
                    "e-276": {
                        id: "e-276",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-54",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-277"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "66b4ab5917391d47bebb73e9",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "66b4ab5917391d47bebb73e9",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19135224c4f
                    },
                    "e-277": {
                        id: "e-277",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-53",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-276"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "66b4ab5917391d47bebb73e9",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "66b4ab5917391d47bebb73e9",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19135224c50
                    },
                    "e-284": {
                        id: "e-284",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-285"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|97cc6a1e-0521-110e-72ad-1710f35d4a84",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|97cc6a1e-0521-110e-72ad-1710f35d4a84",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19395d36ee2
                    },
                    "e-286": {
                        id: "e-286",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-73",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-287"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|d3a0ffce-9ab1-5b7d-f3e5-3bd1282b26d3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|d3a0ffce-9ab1-5b7d-f3e5-3bd1282b26d3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19395ddc8a0
                    },
                    "e-288": {
                        id: "e-288",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-86",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-289"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|3a536536-180a-cd0f-4b56-acc3842fbe6a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|3a536536-180a-cd0f-4b56-acc3842fbe6a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19395deba06
                    },
                    "e-290": {
                        id: "e-290",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-87",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-291"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|97cc6a1e-0521-110e-72ad-1710f35d4a89",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|97cc6a1e-0521-110e-72ad-1710f35d4a89",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19395e13367
                    },
                    "e-292": {
                        id: "e-292",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-293"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|afb52152-8997-fb14-8ae3-27a8b79f2bd1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|afb52152-8997-fb14-8ae3-27a8b79f2bd1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193aa861090
                    },
                    "e-294": {
                        id: "e-294",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-75",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-295"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|5c25192e-b0e2-7074-2f6f-a0e5628f2fed",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|5c25192e-b0e2-7074-2f6f-a0e5628f2fed",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193af01a373
                    },
                    "e-298": {
                        id: "e-298",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-74",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-299"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|47ae519d-782a-13c2-0f59-acee735fa4ed",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|47ae519d-782a-13c2-0f59-acee735fa4ed",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193af05b7af
                    },
                    "e-300": {
                        id: "e-300",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-74",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-301"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|47ae519d-782a-13c2-0f59-acee735fa4ee",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|47ae519d-782a-13c2-0f59-acee735fa4ee",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193af0685c8
                    },
                    "e-302": {
                        id: "e-302",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-75",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-303"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|5c25192e-b0e2-7074-2f6f-a0e5628f2fec",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|5c25192e-b0e2-7074-2f6f-a0e5628f2fec",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193af08598c
                    },
                    "e-304": {
                        id: "e-304",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-77",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-305"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|453c66a5-4464-3623-092f-dd43ab4c4b16",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|453c66a5-4464-3623-092f-dd43ab4c4b16",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193af167403
                    },
                    "e-306": {
                        id: "e-306",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-79",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-307"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|5e31c1a5-d683-1217-1392-a3b12e0a6d3a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|5e31c1a5-d683-1217-1392-a3b12e0a6d3a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193af169d84
                    },
                    "e-308": {
                        id: "e-308",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-73",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-309"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|328e3c6c-269b-a24c-cc63-ea64fcc1e38d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|328e3c6c-269b-a24c-cc63-ea64fcc1e38d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193af1933d8
                    },
                    "e-310": {
                        id: "e-310",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-77",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-311"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|453c66a5-4464-3623-092f-dd43ab4c4b15",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|453c66a5-4464-3623-092f-dd43ab4c4b15",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193af1a39c8
                    },
                    "e-312": {
                        id: "e-312",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-78",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-313"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|b4e52a38-6a04-9cfc-e8de-d386a8ccc7a6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|b4e52a38-6a04-9cfc-e8de-d386a8ccc7a6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193af282e8a
                    },
                    "e-314": {
                        id: "e-314",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-77",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-315"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|b4e52a38-6a04-9cfc-e8de-d386a8ccc7a7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|b4e52a38-6a04-9cfc-e8de-d386a8ccc7a7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193af282e8a
                    },
                    "e-316": {
                        id: "e-316",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-80",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-317"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|1bd2e1c5-a81b-12ba-860a-116904776c42",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|1bd2e1c5-a81b-12ba-860a-116904776c42",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193af283a73
                    },
                    "e-324": {
                        id: "e-324",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-81",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-325"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|50bf1ddb-678f-310e-80c0-80f0f48e949a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|50bf1ddb-678f-310e-80c0-80f0f48e949a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193af31ac2b
                    },
                    "e-326": {
                        id: "e-326",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-81",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-327"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|50bf1ddb-678f-310e-80c0-80f0f48e949b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|50bf1ddb-678f-310e-80c0-80f0f48e949b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193af31ac2b
                    },
                    "e-328": {
                        id: "e-328",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-83",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-329"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|50bf1ddb-678f-310e-80c0-80f0f48e94ae",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|50bf1ddb-678f-310e-80c0-80f0f48e94ae",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193af31ac2b
                    },
                    "e-330": {
                        id: "e-330",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-331"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|2f62c2cc-6d6b-971f-9485-5a37586a608c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|2f62c2cc-6d6b-971f-9485-5a37586a608c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193af756a22
                    },
                    "e-332": {
                        id: "e-332",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-82",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-333"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|62d8f8fb-d102-f456-1011-6ee488f3b4ce",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|62d8f8fb-d102-f456-1011-6ee488f3b4ce",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193afa05b3b
                    },
                    "e-334": {
                        id: "e-334",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-82",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-335"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|62d8f8fb-d102-f456-1011-6ee488f3b4cf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|62d8f8fb-d102-f456-1011-6ee488f3b4cf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193afa05b3b
                    },
                    "e-336": {
                        id: "e-336",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-85",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-337"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|5e92d083-be02-78dc-68f5-ffe4c3586fa1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|5e92d083-be02-78dc-68f5-ffe4c3586fa1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193afc9933c
                    },
                    "e-338": {
                        id: "e-338",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-85",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-339"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|5e92d083-be02-78dc-68f5-ffe4c3586fa2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|5e92d083-be02-78dc-68f5-ffe4c3586fa2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193afc9933c
                    },
                    "e-340": {
                        id: "e-340",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-84",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-341"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|afb52152-8997-fb14-8ae3-27a8b79f2bd8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|afb52152-8997-fb14-8ae3-27a8b79f2bd8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193afd24a1f
                    },
                    "e-346": {
                        id: "e-346",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-66",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-347"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|46d521c6-0c6b-e8bd-066b-0533f6a122e6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|46d521c6-0c6b-e8bd-066b-0533f6a122e6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193be51ff5a
                    },
                    "e-348": {
                        id: "e-348",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-71",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-349"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6750186b4827e1e0c434dfd4|46d521c6-0c6b-e8bd-066b-0533f6a122e8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6750186b4827e1e0c434dfd4|46d521c6-0c6b-e8bd-066b-0533f6a122e8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: 0,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x193be51ff5a
                    },
                    "e-352": {
                        id: "e-352",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-18",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "668b3a82199c56fe1206764e|d3789088-acbd-aeaf-1c4d-216789a39aee",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "668b3a82199c56fe1206764e|d3789088-acbd-aeaf-1c4d-216789a39aee",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-18-p",
                            smoothing: 95,
                            startsEntering: !1,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19b00aec796
                    }
                },
                actionLists: {
                    "a-8": {
                        id: "a-8",
                        title: "Logo Marquee(Desktop)",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-8-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".logo-marquee-grid",
                                        selectorGuids: ["65ed385d-f0b1-0dab-6cf8-2e89b536c4ee"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-8-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 24e3,
                                    target: {
                                        selector: ".logo-marquee-grid",
                                        selectorGuids: ["65ed385d-f0b1-0dab-6cf8-2e89b536c4ee"]
                                    },
                                    xValue: -100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1904cdf8835
                    },
                    "a-13": {
                        id: "a-13",
                        title: "Horizontal Scroll",
                        continuousParameterGroups: [{
                            id: "a-13-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 18,
                                actionItems: [{
                                    id: "a-13-n-2",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".roadmap-line",
                                            selectorGuids: ["9ec63aac-cba3-a5d3-a2e5-449ca7832780"]
                                        },
                                        widthValue: 0,
                                        widthUnit: "vw",
                                        heightUnit: "PX",
                                        locked: !1
                                    }
                                }]
                            }, {
                                keyframe: 19,
                                actionItems: [{
                                    id: "a-13-n-20",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|c1888674-d22d-b27f-8ea7-b0b2acb780f9"
                                        },
                                        value: .2,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-13-n-24",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|c1888674-d22d-b27f-8ea7-b0b2acb78100"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-13-n-38",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|285cbe6f-483f-ca75-b574-b4ecc4eaa4cd"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 30,
                                actionItems: [{
                                    id: "a-13-n-21",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|c1888674-d22d-b27f-8ea7-b0b2acb780f9"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-13-n-25",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|c1888674-d22d-b27f-8ea7-b0b2acb78100"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-13-n-39",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|285cbe6f-483f-ca75-b574-b4ecc4eaa4cd"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 36,
                                actionItems: [{
                                    id: "a-13-n-26",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|aefec091-e6fb-2585-8761-263ae9598855"
                                        },
                                        value: .2,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-13-n-30",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|2a164a04-39c4-9e94-8994-8ea5d5b08779"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-13-n-40",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|aa75b29a-be14-b451-f8f8-f8be8e7cd184"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 47,
                                actionItems: [{
                                    id: "a-13-n-27",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|aefec091-e6fb-2585-8761-263ae9598855"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-13-n-31",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|2a164a04-39c4-9e94-8994-8ea5d5b08779"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-13-n-41",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|aa75b29a-be14-b451-f8f8-f8be8e7cd184"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 50,
                                actionItems: [{
                                    id: "a-13-n-32",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|880a43da-b47a-3207-40a0-4f83fc1a67ee"
                                        },
                                        value: .2,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-13-n-36",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|880a43da-b47a-3207-40a0-4f83fc1a67f5"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-13-n-42",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|7fe6abda-a721-6fce-23bf-47552b9b5318"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 60,
                                actionItems: [{
                                    id: "a-13-n-33",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|880a43da-b47a-3207-40a0-4f83fc1a67ee"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-13-n-37",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|880a43da-b47a-3207-40a0-4f83fc1a67f5"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-13-n-43",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|7fe6abda-a721-6fce-23bf-47552b9b5318"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 63,
                                actionItems: [{
                                    id: "a-13-n-13",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".roadmap-line",
                                            selectorGuids: ["9ec63aac-cba3-a5d3-a2e5-449ca7832780"]
                                        },
                                        widthValue: 100,
                                        widthUnit: "vw",
                                        heightUnit: "PX",
                                        locked: !1
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x18c9233197f
                    },
                    "a-16": {
                        id: "a-16",
                        title: "product mouse move",
                        continuousParameterGroups: [{
                            id: "a-16-p",
                            type: "MOUSE_X",
                            parameterLabel: "Mouse X",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-16-n",
                                    actionTypeId: "PLUGIN_SPLINE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            pluginElement: "bf56c1b8-8130-0566-2124-8d893012b558",
                                            objectId: "3056f33c-5774-4884-8028-38b849e8bf18",
                                            id: "668b3a82199c56fe1206764e|bf56c1b8-8130-0566-2124-8d893012b558"
                                        },
                                        value: {
                                            rotationY: -1
                                        }
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-16-n-2",
                                    actionTypeId: "PLUGIN_SPLINE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            pluginElement: "bf56c1b8-8130-0566-2124-8d893012b558",
                                            objectId: "3056f33c-5774-4884-8028-38b849e8bf18",
                                            id: "668b3a82199c56fe1206764e|bf56c1b8-8130-0566-2124-8d893012b558"
                                        },
                                        value: {
                                            rotationY: 1
                                        }
                                    }
                                }]
                            }]
                        }, {
                            id: "a-16-p-2",
                            type: "MOUSE_Y",
                            parameterLabel: "Mouse Y",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-16-n-3",
                                    actionTypeId: "PLUGIN_SPLINE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            pluginElement: "bf56c1b8-8130-0566-2124-8d893012b558",
                                            objectId: "3056f33c-5774-4884-8028-38b849e8bf18",
                                            id: "668b3a82199c56fe1206764e|bf56c1b8-8130-0566-2124-8d893012b558"
                                        },
                                        value: {
                                            rotationZ: .4
                                        }
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-16-n-4",
                                    actionTypeId: "PLUGIN_SPLINE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            pluginElement: "bf56c1b8-8130-0566-2124-8d893012b558",
                                            objectId: "3056f33c-5774-4884-8028-38b849e8bf18",
                                            id: "668b3a82199c56fe1206764e|bf56c1b8-8130-0566-2124-8d893012b558"
                                        },
                                        value: {
                                            rotationZ: -.6
                                        }
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x190716efe2f
                    },
                    "a-18": {
                        id: "a-18",
                        title: "section page intro",
                        continuousParameterGroups: [{
                            id: "a-18-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 3,
                                actionItems: [{
                                    id: "a-18-n",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".page-intro-splitscreen-top",
                                            selectorGuids: ["d972b272-8cae-a4ee-5a4e-d7f144a23a8e"]
                                        },
                                        widthValue: 100,
                                        heightValue: 0,
                                        widthUnit: "%",
                                        heightUnit: "%",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-18-n-3",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".page-intro-splitscreen-bottom",
                                            selectorGuids: ["4ab78b26-d96d-037a-1220-e649b63a0078"]
                                        },
                                        widthValue: 100,
                                        heightValue: 0,
                                        widthUnit: "%",
                                        heightUnit: "%",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-18-n-10",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-heading",
                                            selectorGuids: ["cbd675e2-b80f-448f-7aba-7f773a159c8b"]
                                        },
                                        xValue: 0,
                                        yValue: 0,
                                        zValue: 0,
                                        xUnit: "px",
                                        yUnit: "px",
                                        zUnit: "px"
                                    }
                                }, {
                                    id: "a-18-n-12",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-heading",
                                            selectorGuids: ["cbd675e2-b80f-448f-7aba-7f773a159c8b"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-18-n-14",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".paragraph-regular-2",
                                            selectorGuids: ["cbd675e2-b80f-448f-7aba-7f773a159c7b"]
                                        },
                                        xValue: 0,
                                        yValue: 0,
                                        zValue: 0,
                                        xUnit: "px",
                                        yUnit: "px",
                                        zUnit: "px"
                                    }
                                }, {
                                    id: "a-18-n-16",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".paragraph-regular-2",
                                            selectorGuids: ["cbd675e2-b80f-448f-7aba-7f773a159c7b"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-18-n-18",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".logo-marquee-wapper",
                                            selectorGuids: ["bb0adcce-289e-3d13-5f3e-25a2b67237b5"]
                                        },
                                        xValue: 0,
                                        yValue: 0,
                                        zValue: 0,
                                        xUnit: "px",
                                        yUnit: "px",
                                        zUnit: "px"
                                    }
                                }, {
                                    id: "a-18-n-20",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".logo-marquee-wapper",
                                            selectorGuids: ["bb0adcce-289e-3d13-5f3e-25a2b67237b5"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-18-n-22",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".product-contents-list",
                                            selectorGuids: ["40615603-4311-bfd8-b5dd-3c9a93f97c86"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 15,
                                actionItems: [{
                                    id: "a-18-n-13",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-heading",
                                            selectorGuids: ["cbd675e2-b80f-448f-7aba-7f773a159c8b"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-18-n-17",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".paragraph-regular-2",
                                            selectorGuids: ["cbd675e2-b80f-448f-7aba-7f773a159c7b"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-18-n-21",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".logo-marquee-wapper",
                                            selectorGuids: ["bb0adcce-289e-3d13-5f3e-25a2b67237b5"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-18-n-23",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".product-contents-list",
                                            selectorGuids: ["40615603-4311-bfd8-b5dd-3c9a93f97c86"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 25,
                                actionItems: [{
                                    id: "a-18-n-4",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".page-intro-splitscreen-top",
                                            selectorGuids: ["d972b272-8cae-a4ee-5a4e-d7f144a23a8e"]
                                        },
                                        widthValue: 100,
                                        heightValue: 60,
                                        widthUnit: "%",
                                        heightUnit: "%",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-18-n-5",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".page-intro-splitscreen-bottom",
                                            selectorGuids: ["4ab78b26-d96d-037a-1220-e649b63a0078"]
                                        },
                                        widthValue: 100,
                                        heightValue: 60,
                                        widthUnit: "%",
                                        heightUnit: "%",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-18-n-11",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-heading",
                                            selectorGuids: ["cbd675e2-b80f-448f-7aba-7f773a159c8b"]
                                        },
                                        xValue: -240,
                                        yValue: -195,
                                        zValue: -80,
                                        xUnit: "px",
                                        yUnit: "px",
                                        zUnit: "px"
                                    }
                                }, {
                                    id: "a-18-n-15",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".paragraph-regular-2",
                                            selectorGuids: ["cbd675e2-b80f-448f-7aba-7f773a159c7b"]
                                        },
                                        xValue: -248,
                                        yValue: -202,
                                        zValue: -103,
                                        xUnit: "px",
                                        yUnit: "px",
                                        zUnit: "px"
                                    }
                                }, {
                                    id: "a-18-n-19",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".logo-marquee-wapper",
                                            selectorGuids: ["bb0adcce-289e-3d13-5f3e-25a2b67237b5"]
                                        },
                                        xValue: 0,
                                        yValue: 126,
                                        zValue: 0,
                                        xUnit: "px",
                                        yUnit: "px",
                                        zUnit: "px"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x1907606b6bb
                    },
                    "a-19": {
                        id: "a-19",
                        title: "supported coin move",
                        continuousParameterGroups: [{
                            id: "a-19-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-19-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "668b3a82199c56fe1206764e|bcccbaf3-46c1-2507-7a29-6a1b42000574"
                                        },
                                        yValue: 40,
                                        zValue: null,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "px"
                                    }
                                }]
                            }, {
                                keyframe: 49,
                                actionItems: [{
                                    id: "a-19-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "668b3a82199c56fe1206764e|bcccbaf3-46c1-2507-7a29-6a1b42000574"
                                        },
                                        yValue: 15,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-19-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "668b3a82199c56fe1206764e|bcccbaf3-46c1-2507-7a29-6a1b42000574"
                                        },
                                        yValue: -20,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x190771c6fbb
                    },
                    "a-20": {
                        id: "a-20",
                        title: "SC&RW bg",
                        continuousParameterGroups: [{
                            id: "a-20-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-20-n-3",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "668b3a82199c56fe1206764e|1fb632f4-1ac1-6610-955a-40ba40bfac95"
                                        },
                                        globalSwatchId: "",
                                        rValue: 22,
                                        bValue: 22,
                                        gValue: 22,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                keyframe: 30,
                                actionItems: [{
                                    id: "a-20-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".review-div.line1",
                                            selectorGuids: ["9d824e0b-55a5-d1fa-1af9-36db5746f669", "479bcbe4-f5d5-7d5c-64cc-10fd4b7bb912"]
                                        },
                                        xValue: 1,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 44,
                                actionItems: [{
                                    id: "a-20-n",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "668b3a82199c56fe1206764e|1fb632f4-1ac1-6610-955a-40ba40bfac95"
                                        },
                                        globalSwatchId: "",
                                        rValue: 22,
                                        bValue: 22,
                                        gValue: 22,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-20-n-7",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: -20,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-20-n-9",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|9801315c-fbc0-16d9-be81-6dcb8ed71437"
                                        },
                                        globalSwatchId: "",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                keyframe: 45,
                                actionItems: [{
                                    id: "a-20-n-11",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".counter-div",
                                            selectorGuids: ["abda4dff-d0a4-8c63-3982-67ee6f340f24"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 56,
                                actionItems: [{
                                    id: "a-20-n-4",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "668b3a82199c56fe1206764e|1fb632f4-1ac1-6610-955a-40ba40bfac95"
                                        },
                                        globalSwatchId: "",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-20-n-10",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|9801315c-fbc0-16d9-be81-6dcb8ed71437"
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                keyframe: 58,
                                actionItems: [{
                                    id: "a-20-n-12",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".counter-div",
                                            selectorGuids: ["abda4dff-d0a4-8c63-3982-67ee6f340f24"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 87,
                                actionItems: [{
                                    id: "a-20-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".review-div.line1",
                                            selectorGuids: ["9d824e0b-55a5-d1fa-1af9-36db5746f669", "479bcbe4-f5d5-7d5c-64cc-10fd4b7bb912"]
                                        },
                                        xValue: -11,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 95,
                                actionItems: [{
                                    id: "a-20-n-8",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: -8,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-20-n-2",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "668b3a82199c56fe1206764e|1fb632f4-1ac1-6610-955a-40ba40bfac95"
                                        },
                                        globalSwatchId: "",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x1907b3ec66e
                    },
                    "a-54": {
                        id: "a-54",
                        title: "Scroll Navi enter",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-54-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 300,
                                    target: {
                                        id: "b9853866-86bc-4c7b-f33f-a2e8fd4d8ac9"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1909626032c
                    },
                    "a-53": {
                        id: "a-53",
                        title: "Scroll Navi leave",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-53-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 300,
                                    target: {
                                        id: "b9853866-86bc-4c7b-f33f-a2e8fd4d8ac9"
                                    },
                                    yValue: -200,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1909624cc90
                    },
                    "a-55": {
                        id: "a-55",
                        title: "Scroll Navi bg",
                        continuousParameterGroups: [{
                            id: "a-55-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-55-n-22",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".wbs-navbar",
                                            selectorGuids: ["59457097-4022-8e92-ca78-e383881bf742"]
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                keyframe: 5,
                                actionItems: [{
                                    id: "a-55-n",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".wbs-navbar",
                                            selectorGuids: ["59457097-4022-8e92-ca78-e383881bf742"]
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-8",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".wbs-nav-link._1menu",
                                            selectorGuids: ["b4783722-216e-a809-331c-d660f361b8f4", "8ad3d54f-9b16-3b07-7203-e1676fba1ff3"]
                                        },
                                        globalSwatchId: "",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-12",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".navigation-dropdown",
                                            selectorGuids: ["4ab4fd9d-43a7-d53e-e854-1a1b33e1fa46"]
                                        },
                                        globalSwatchId: "",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-18",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".wbs-nav-link",
                                            selectorGuids: ["b4783722-216e-a809-331c-d660f361b8f4"]
                                        },
                                        globalSwatchId: "",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-24",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".wbs-logo.color",
                                            selectorGuids: ["80103ca3-2c46-4fe2-0fea-0c36f2a87a84", "37d27239-dde0-7b77-2c3d-cfb7b6acfc8c"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-55-n-28",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".wbs-logo.white",
                                            selectorGuids: ["80103ca3-2c46-4fe2-0fea-0c36f2a87a84", "9a5a2418-28fc-00f4-65b3-d622a083508b"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-55-n-34",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".navigation-menu.black",
                                            selectorGuids: ["97a8cfdf-9545-e477-1c7e-b20bfe0c90b3", "d3c1ca47-7409-9365-1a1e-7a0968277b58"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-55-n-36",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".navigation-menu.white",
                                            selectorGuids: ["97a8cfdf-9545-e477-1c7e-b20bfe0c90b3", "a586375a-d19b-9591-35fa-dfa8674ca5c3"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-55-n-38",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".wbs-nav-link.below-desktop",
                                            selectorGuids: ["b4783722-216e-a809-331c-d660f361b8f4", "19277560-6277-d5bd-2bf5-5802223ec873"]
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                keyframe: 6,
                                actionItems: [{
                                    id: "a-55-n-3",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".wbs-navbar",
                                            selectorGuids: ["59457097-4022-8e92-ca78-e383881bf742"]
                                        },
                                        globalSwatchId: "",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-9",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".wbs-nav-link._1menu",
                                            selectorGuids: ["b4783722-216e-a809-331c-d660f361b8f4", "8ad3d54f-9b16-3b07-7203-e1676fba1ff3"]
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-13",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".navigation-dropdown",
                                            selectorGuids: ["4ab4fd9d-43a7-d53e-e854-1a1b33e1fa46"]
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-19",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".wbs-nav-link",
                                            selectorGuids: ["b4783722-216e-a809-331c-d660f361b8f4"]
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-25",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".wbs-logo.color",
                                            selectorGuids: ["80103ca3-2c46-4fe2-0fea-0c36f2a87a84", "37d27239-dde0-7b77-2c3d-cfb7b6acfc8c"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-55-n-29",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".wbs-logo.white",
                                            selectorGuids: ["80103ca3-2c46-4fe2-0fea-0c36f2a87a84", "9a5a2418-28fc-00f4-65b3-d622a083508b"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-55-n-35",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".navigation-menu.black",
                                            selectorGuids: ["97a8cfdf-9545-e477-1c7e-b20bfe0c90b3", "d3c1ca47-7409-9365-1a1e-7a0968277b58"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-55-n-37",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".navigation-menu.white",
                                            selectorGuids: ["97a8cfdf-9545-e477-1c7e-b20bfe0c90b3", "a586375a-d19b-9591-35fa-dfa8674ca5c3"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-55-n-39",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".wbs-nav-link.below-desktop",
                                            selectorGuids: ["b4783722-216e-a809-331c-d660f361b8f4", "19277560-6277-d5bd-2bf5-5802223ec873"]
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19096270786
                    },
                    "a-56": {
                        id: "a-56",
                        title: "\uD83E\uDE97 Accordion [Open] 3",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-56-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wbs-accordion-3-content",
                                        selectorGuids: ["1c51c61d-d179-b6dc-741b-bf247283f978"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-56-n-2",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wbs-accordion-3-icon-minus",
                                        selectorGuids: ["1c51c61d-d179-b6dc-741b-bf247283f979"]
                                    },
                                    zValue: 90,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-56-n-3",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wbs-accordion-3-content",
                                        selectorGuids: ["1c51c61d-d179-b6dc-741b-bf247283f978"]
                                    },
                                    widthUnit: "PX",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }, {
                                id: "a-56-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wbs-accordion-3-icon-minus",
                                        selectorGuids: ["1c51c61d-d179-b6dc-741b-bf247283f979"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17ff37dfc8e
                    },
                    "a-57": {
                        id: "a-57",
                        title: "\uD83E\uDE97 Accordion [Close] 3",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-57-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wbs-accordion-3-content",
                                        selectorGuids: ["1c51c61d-d179-b6dc-741b-bf247283f978"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-57-n-2",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wbs-accordion-3-icon-plus",
                                        selectorGuids: ["1c51c61d-d179-b6dc-741b-bf247283f97a"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-57-n-3",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wbs-accordion-3-icon-minus",
                                        selectorGuids: ["1c51c61d-d179-b6dc-741b-bf247283f979"]
                                    },
                                    zValue: 90,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17ff3831cfe
                    },
                    "a-58": {
                        id: "a-58",
                        title: "Navi Product Hover",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-58-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 100,
                                    target: {
                                        useEventTarget: !0,
                                        id: "cea2cd17-6d69-45a7-146d-fecefb5310d3"
                                    },
                                    globalSwatchId: "",
                                    rValue: 243,
                                    bValue: 243,
                                    gValue: 243,
                                    aValue: 1
                                }
                            }, {
                                id: "a-58-n-2",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 100,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navi-product-title",
                                        selectorGuids: ["fde73e3c-2c5b-2b0e-7578-f49b7dc8444d"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 16,
                                    bValue: 107,
                                    gValue: 187,
                                    aValue: 1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1909a3f547f
                    },
                    "a-59": {
                        id: "a-59",
                        title: "Navi Product Hover Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-59-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 100,
                                    target: {
                                        useEventTarget: !0,
                                        id: "aa65ac63-3d67-0a57-93a1-a30d3955f490"
                                    },
                                    globalSwatchId: "",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-59-n-2",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 100,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navi-product-title",
                                        selectorGuids: ["fde73e3c-2c5b-2b0e-7578-f49b7dc8444d"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1909a4108be
                    },
                    "a-60": {
                        id: "a-60",
                        title: "Academy card hover on",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-60-n-4",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".academy-card-title",
                                        selectorGuids: ["683f7e64-6633-86c7-367f-41732ec9abb8"]
                                    },
                                    globalSwatchId: "--green",
                                    rValue: 31,
                                    bValue: 126,
                                    gValue: 213,
                                    aValue: 1
                                }
                            }, {
                                id: "a-60-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".academy-card-icon",
                                        selectorGuids: ["835d149e-197d-11f0-4b4b-b38a362d6477"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1909a79e1ab
                    },
                    "a-61": {
                        id: "a-61",
                        title: "Academy card hover out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-61-n-3",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 400,
                                    target: {
                                        selector: ".academy-card-title",
                                        selectorGuids: ["683f7e64-6633-86c7-367f-41732ec9abb8"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-61-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".academy-card-icon",
                                        selectorGuids: ["835d149e-197d-11f0-4b4b-b38a362d6477"]
                                    },
                                    value: .3,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1909a7c589a
                    },
                    "a-44": {
                        id: "a-44",
                        title: "Image Hover Zoom [In]",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-44-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wbs-blog-image",
                                        selectorGuids: ["3e3d896b-89f6-451b-2c33-51a74c66027d"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-44-n-5",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wbs-blog-image",
                                        selectorGuids: ["3e3d896b-89f6-451b-2c33-51a74c66027d"]
                                    },
                                    xValue: 1.05,
                                    yValue: 1.05,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x18822b0521a
                    },
                    "a-45": {
                        id: "a-45",
                        title: "Image Hover Zoom [Out]",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-45-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wbs-blog-image",
                                        selectorGuids: ["3e3d896b-89f6-451b-2c33-51a74c66027d"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x18822b0521a
                    },
                    "a-34": {
                        id: "a-34",
                        title: "Dropdown [Open]",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-34-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 350,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wbs-dropdown-list",
                                        selectorGuids: ["80103ca3-2c46-4fe2-0fea-0c36f2a87a82"]
                                    },
                                    yValue: -4,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-34-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wbs-dropdown-list-product",
                                        selectorGuids: ["b4f5237d-8d37-af08-33f9-0ef2a959a325"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-34-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 350,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wbs-dropdown-list-product",
                                        selectorGuids: ["b4f5237d-8d37-af08-33f9-0ef2a959a325"]
                                    },
                                    yValue: -4,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-34-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wbs-dropdown-list",
                                        selectorGuids: ["80103ca3-2c46-4fe2-0fea-0c36f2a87a82"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x186e89bb8d9
                    },
                    "a-35": {
                        id: "a-35",
                        title: "Dropdown [Close]",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-35-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wbs-dropdown-list",
                                        selectorGuids: ["80103ca3-2c46-4fe2-0fea-0c36f2a87a82"]
                                    },
                                    yValue: 4,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-35-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wbs-dropdown-list-product",
                                        selectorGuids: ["b4f5237d-8d37-af08-33f9-0ef2a959a325"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-35-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wbs-dropdown-list-product",
                                        selectorGuids: ["b4f5237d-8d37-af08-33f9-0ef2a959a325"]
                                    },
                                    yValue: 4,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-35-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wbs-dropdown-list",
                                        selectorGuids: ["80103ca3-2c46-4fe2-0fea-0c36f2a87a82"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x186e89bb8d9
                    },
                    "a-62": {
                        id: "a-62",
                        title: "Horizontal Scroll 2",
                        continuousParameterGroups: [{
                            id: "a-62-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 18,
                                actionItems: [{
                                    id: "a-62-n",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".roadmap-line-2",
                                            selectorGuids: ["f73bbda4-57ad-71d0-ee33-b6569557aea4"]
                                        },
                                        widthValue: 0,
                                        widthUnit: "vw",
                                        heightUnit: "PX",
                                        locked: !1
                                    }
                                }]
                            }, {
                                keyframe: 19,
                                actionItems: [{
                                    id: "a-62-n-2",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|952fc1dd-ab3d-e605-8717-baeef55f557f"
                                        },
                                        value: .2,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-62-n-3",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|952fc1dd-ab3d-e605-8717-baeef55f5585"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-62-n-4",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|952fc1dd-ab3d-e605-8717-baeef55f5584"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 30,
                                actionItems: [{
                                    id: "a-62-n-5",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|952fc1dd-ab3d-e605-8717-baeef55f557f"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-62-n-6",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|952fc1dd-ab3d-e605-8717-baeef55f5585"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-62-n-7",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|952fc1dd-ab3d-e605-8717-baeef55f5584"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 36,
                                actionItems: [{
                                    id: "a-62-n-8",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|952fc1dd-ab3d-e605-8717-baeef55f558a"
                                        },
                                        value: .2,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-62-n-9",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|952fc1dd-ab3d-e605-8717-baeef55f5590"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-62-n-10",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|952fc1dd-ab3d-e605-8717-baeef55f558f"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 47,
                                actionItems: [{
                                    id: "a-62-n-11",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|952fc1dd-ab3d-e605-8717-baeef55f558a"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-62-n-12",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|952fc1dd-ab3d-e605-8717-baeef55f5590"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-62-n-13",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|952fc1dd-ab3d-e605-8717-baeef55f558f"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 50,
                                actionItems: [{
                                    id: "a-62-n-14",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|952fc1dd-ab3d-e605-8717-baeef55f5596"
                                        },
                                        value: .2,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-62-n-15",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|952fc1dd-ab3d-e605-8717-baeef55f559c"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-62-n-16",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|952fc1dd-ab3d-e605-8717-baeef55f559b"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 60,
                                actionItems: [{
                                    id: "a-62-n-17",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|952fc1dd-ab3d-e605-8717-baeef55f5596"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-62-n-18",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|952fc1dd-ab3d-e605-8717-baeef55f559c"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-62-n-19",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "668b3a82199c56fe1206764e|952fc1dd-ab3d-e605-8717-baeef55f559b"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 63,
                                actionItems: [{
                                    id: "a-62-n-20",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".roadmap-line-2",
                                            selectorGuids: ["f73bbda4-57ad-71d0-ee33-b6569557aea4"]
                                        },
                                        widthValue: 100,
                                        widthUnit: "vw",
                                        heightUnit: "PX",
                                        locked: !1
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x18c9233197f
                    },
                    "a-64": {
                        id: "a-64",
                        title: "Scroll Navi bg-Sub",
                        continuousParameterGroups: [{
                            id: "a-64-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-64-n",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".wbs-navbar",
                                            selectorGuids: ["59457097-4022-8e92-ca78-e383881bf742"]
                                        },
                                        globalSwatchId: "",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                keyframe: 5,
                                actionItems: [{
                                    id: "a-64-n-3",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".wbs-nav-link._1menu",
                                            selectorGuids: ["b4783722-216e-a809-331c-d660f361b8f4", "8ad3d54f-9b16-3b07-7203-e1676fba1ff3"]
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-64-n-4",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".navigation-dropdown",
                                            selectorGuids: ["4ab4fd9d-43a7-d53e-e854-1a1b33e1fa46"]
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-64-n-5",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".wbs-nav-link",
                                            selectorGuids: ["b4783722-216e-a809-331c-d660f361b8f4"]
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-64-n-6",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".wbs-logo.color",
                                            selectorGuids: ["80103ca3-2c46-4fe2-0fea-0c36f2a87a84", "37d27239-dde0-7b77-2c3d-cfb7b6acfc8c"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-64-n-8",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".navigation-menu.black",
                                            selectorGuids: ["97a8cfdf-9545-e477-1c7e-b20bfe0c90b3", "d3c1ca47-7409-9365-1a1e-7a0968277b58"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-64-n-10",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".wbs-nav-link.below-desktop",
                                            selectorGuids: ["b4783722-216e-a809-331c-d660f361b8f4", "19277560-6277-d5bd-2bf5-5802223ec873"]
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                keyframe: 6,
                                actionItems: [{
                                    id: "a-64-n-11",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".wbs-navbar",
                                            selectorGuids: ["59457097-4022-8e92-ca78-e383881bf742"]
                                        },
                                        globalSwatchId: "",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-64-n-12",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".wbs-nav-link._1menu",
                                            selectorGuids: ["b4783722-216e-a809-331c-d660f361b8f4", "8ad3d54f-9b16-3b07-7203-e1676fba1ff3"]
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-64-n-13",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".navigation-dropdown",
                                            selectorGuids: ["4ab4fd9d-43a7-d53e-e854-1a1b33e1fa46"]
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-64-n-14",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".wbs-nav-link",
                                            selectorGuids: ["b4783722-216e-a809-331c-d660f361b8f4"]
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-64-n-15",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".wbs-logo.color",
                                            selectorGuids: ["80103ca3-2c46-4fe2-0fea-0c36f2a87a84", "37d27239-dde0-7b77-2c3d-cfb7b6acfc8c"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-64-n-17",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".navigation-menu.black",
                                            selectorGuids: ["97a8cfdf-9545-e477-1c7e-b20bfe0c90b3", "d3c1ca47-7409-9365-1a1e-7a0968277b58"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-64-n-19",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".wbs-nav-link.below-desktop",
                                            selectorGuids: ["b4783722-216e-a809-331c-d660f361b8f4", "19277560-6277-d5bd-2bf5-5802223ec873"]
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19096270786
                    },
                    "a-68": {
                        id: "a-68",
                        title: "AO-page3-new-bio-back",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-68-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._3.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "37322a09-856f-a44c-e1e0-13c2b2724c9f", "8eca74f3-77c1-d963-70a3-05effe438100", "ce655fe5-f41a-4fa2-6539-c37a606507c8"]
                                    },
                                    xValue: 0,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-68-n",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._3.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "37322a09-856f-a44c-e1e0-13c2b2724c9f", "8eca74f3-77c1-d963-70a3-05effe438100", "ce655fe5-f41a-4fa2-6539-c37a606507c8"]
                                    },
                                    value: "flex"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-68-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._3.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "37322a09-856f-a44c-e1e0-13c2b2724c9f", "8eca74f3-77c1-d963-70a3-05effe438100", "ce655fe5-f41a-4fa2-6539-c37a606507c8"]
                                    },
                                    xValue: 100,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-68-n-2",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._3.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "37322a09-856f-a44c-e1e0-13c2b2724c9f", "8eca74f3-77c1-d963-70a3-05effe438100", "ce655fe5-f41a-4fa2-6539-c37a606507c8"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19394848b0c
                    },
                    "a-73": {
                        id: "a-73",
                        title: "AO-page4-new-bio-back",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-73-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._4.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "8f28ba71-4e63-489f-27c8-205d7ea98f5b", "d6f0721b-36d0-6308-6a50-ec25cf1f8881", "491edd43-5465-d2c0-3389-6c20eb3dd0cd"]
                                    },
                                    xValue: 0,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-73-n-2",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._4.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "8f28ba71-4e63-489f-27c8-205d7ea98f5b", "d6f0721b-36d0-6308-6a50-ec25cf1f8881", "491edd43-5465-d2c0-3389-6c20eb3dd0cd"]
                                    },
                                    value: "flex"
                                }
                            }, {
                                id: "a-73-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._4.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "8f28ba71-4e63-489f-27c8-205d7ea98f5b", "d6f0721b-36d0-6308-6a50-ec25cf1f8881", "491edd43-5465-d2c0-3389-6c20eb3dd0cd"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-73-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._4.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "8f28ba71-4e63-489f-27c8-205d7ea98f5b", "d6f0721b-36d0-6308-6a50-ec25cf1f8881", "491edd43-5465-d2c0-3389-6c20eb3dd0cd"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-73-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._4.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "8f28ba71-4e63-489f-27c8-205d7ea98f5b", "d6f0721b-36d0-6308-6a50-ec25cf1f8881", "491edd43-5465-d2c0-3389-6c20eb3dd0cd"]
                                    },
                                    xValue: 100,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-73-n-4",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._4.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "8f28ba71-4e63-489f-27c8-205d7ea98f5b", "d6f0721b-36d0-6308-6a50-ec25cf1f8881", "491edd43-5465-d2c0-3389-6c20eb3dd0cd"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19394848b0c
                    },
                    "a-86": {
                        id: "a-86",
                        title: "AO-page4-new-bio-next",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-86-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".page._5.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "c494db50-b02d-c26e-2da3-86f5e19070b9", "91706532-adb8-ef3c-c618-5bbbfbcbd7a1", "5eeb5dab-e206-1529-11a5-1d5d4f1fe421"]
                                    },
                                    xValue: 100,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-86-n-3",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._5.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "c494db50-b02d-c26e-2da3-86f5e19070b9", "91706532-adb8-ef3c-c618-5bbbfbcbd7a1", "5eeb5dab-e206-1529-11a5-1d5d4f1fe421"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-86-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".page._5.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "c494db50-b02d-c26e-2da3-86f5e19070b9", "91706532-adb8-ef3c-c618-5bbbfbcbd7a1", "5eeb5dab-e206-1529-11a5-1d5d4f1fe421"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-86-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 200,
                                    target: {
                                        selector: ".page._5.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "c494db50-b02d-c26e-2da3-86f5e19070b9", "91706532-adb8-ef3c-c618-5bbbfbcbd7a1", "5eeb5dab-e206-1529-11a5-1d5d4f1fe421"]
                                    },
                                    xValue: 0,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-86-n-5",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._5.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "c494db50-b02d-c26e-2da3-86f5e19070b9", "91706532-adb8-ef3c-c618-5bbbfbcbd7a1", "5eeb5dab-e206-1529-11a5-1d5d4f1fe421"]
                                    },
                                    value: "flex"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-86-n-7",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".page._5.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "c494db50-b02d-c26e-2da3-86f5e19070b9", "91706532-adb8-ef3c-c618-5bbbfbcbd7a1", "5eeb5dab-e206-1529-11a5-1d5d4f1fe421"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19394848b0c
                    },
                    "a-87": {
                        id: "a-87",
                        title: "AO-page3-new-bio-next",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-87-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".page._4.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "8f28ba71-4e63-489f-27c8-205d7ea98f5b", "d6f0721b-36d0-6308-6a50-ec25cf1f8881", "491edd43-5465-d2c0-3389-6c20eb3dd0cd"]
                                    },
                                    xValue: 100,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-87-n-2",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._4.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "8f28ba71-4e63-489f-27c8-205d7ea98f5b", "d6f0721b-36d0-6308-6a50-ec25cf1f8881", "491edd43-5465-d2c0-3389-6c20eb3dd0cd"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-87-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".page._4.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "8f28ba71-4e63-489f-27c8-205d7ea98f5b", "d6f0721b-36d0-6308-6a50-ec25cf1f8881", "491edd43-5465-d2c0-3389-6c20eb3dd0cd"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-87-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 0,
                                    target: {
                                        selector: ".page._4.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "8f28ba71-4e63-489f-27c8-205d7ea98f5b", "d6f0721b-36d0-6308-6a50-ec25cf1f8881", "491edd43-5465-d2c0-3389-6c20eb3dd0cd"]
                                    },
                                    xValue: 0,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-87-n-4",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._4.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "8f28ba71-4e63-489f-27c8-205d7ea98f5b", "d6f0721b-36d0-6308-6a50-ec25cf1f8881", "491edd43-5465-d2c0-3389-6c20eb3dd0cd"]
                                    },
                                    value: "flex"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-87-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".page._4.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "8f28ba71-4e63-489f-27c8-205d7ea98f5b", "d6f0721b-36d0-6308-6a50-ec25cf1f8881", "491edd43-5465-d2c0-3389-6c20eb3dd0cd"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19394848b0c
                    },
                    "a-67": {
                        id: "a-67",
                        title: "AO-page2-new-bio-next",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-67-n",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._3.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "37322a09-856f-a44c-e1e0-13c2b2724c9f", "8eca74f3-77c1-d963-70a3-05effe438100", "ce655fe5-f41a-4fa2-6539-c37a606507c8"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-67-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".page._3.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "37322a09-856f-a44c-e1e0-13c2b2724c9f", "8eca74f3-77c1-d963-70a3-05effe438100", "ce655fe5-f41a-4fa2-6539-c37a606507c8"]
                                    },
                                    xValue: 100,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-67-n-2",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._3.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "37322a09-856f-a44c-e1e0-13c2b2724c9f", "8eca74f3-77c1-d963-70a3-05effe438100", "ce655fe5-f41a-4fa2-6539-c37a606507c8"]
                                    },
                                    value: "flex"
                                }
                            }, {
                                id: "a-67-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".page._3.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "37322a09-856f-a44c-e1e0-13c2b2724c9f", "8eca74f3-77c1-d963-70a3-05effe438100", "ce655fe5-f41a-4fa2-6539-c37a606507c8"]
                                    },
                                    xValue: 0,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19394848b0c
                    },
                    "a-75": {
                        id: "a-75",
                        title: "AO-page2-new-back",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-75-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._2.new",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "72d90c98-5732-e504-5032-61c034fbc396", "d52d68bc-6f84-ac73-0232-a8ef55e9083e"]
                                    },
                                    xValue: null,
                                    yValue: 0,
                                    xUnit: "vw",
                                    yUnit: "vh",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-75-n-2",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._2.new",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "72d90c98-5732-e504-5032-61c034fbc396", "d52d68bc-6f84-ac73-0232-a8ef55e9083e"]
                                    },
                                    value: "flex"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-75-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._2.new",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "72d90c98-5732-e504-5032-61c034fbc396", "d52d68bc-6f84-ac73-0232-a8ef55e9083e"]
                                    },
                                    xValue: null,
                                    yValue: 100,
                                    xUnit: "vw",
                                    yUnit: "vh",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-75-n-4",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._2.new",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "72d90c98-5732-e504-5032-61c034fbc396", "d52d68bc-6f84-ac73-0232-a8ef55e9083e"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19394848b0c
                    },
                    "a-74": {
                        id: "a-74",
                        title: "AO-page2-old-back",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-74-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._2.old",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "72d90c98-5732-e504-5032-61c034fbc396", "491c9f85-e1b6-d737-6c8c-4fff3507b2e2"]
                                    },
                                    xValue: null,
                                    yValue: 0,
                                    xUnit: "vw",
                                    yUnit: "vh",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-74-n-2",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._2.old",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "72d90c98-5732-e504-5032-61c034fbc396", "491c9f85-e1b6-d737-6c8c-4fff3507b2e2"]
                                    },
                                    value: "flex"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-74-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._2.old",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "72d90c98-5732-e504-5032-61c034fbc396", "491c9f85-e1b6-d737-6c8c-4fff3507b2e2"]
                                    },
                                    xValue: null,
                                    yValue: 100,
                                    xUnit: "vw",
                                    yUnit: "vh",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-74-n-4",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._2.old",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "72d90c98-5732-e504-5032-61c034fbc396", "491c9f85-e1b6-d737-6c8c-4fff3507b2e2"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19394848b0c
                    },
                    "a-77": {
                        id: "a-77",
                        title: "AO-page5-new-bio-back",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-77-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._5.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "c494db50-b02d-c26e-2da3-86f5e19070b9", "91706532-adb8-ef3c-c618-5bbbfbcbd7a1", "5eeb5dab-e206-1529-11a5-1d5d4f1fe421"]
                                    },
                                    xValue: 0,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-77-n-2",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._5.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "c494db50-b02d-c26e-2da3-86f5e19070b9", "91706532-adb8-ef3c-c618-5bbbfbcbd7a1", "5eeb5dab-e206-1529-11a5-1d5d4f1fe421"]
                                    },
                                    value: "flex"
                                }
                            }, {
                                id: "a-77-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._5.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "c494db50-b02d-c26e-2da3-86f5e19070b9", "91706532-adb8-ef3c-c618-5bbbfbcbd7a1", "5eeb5dab-e206-1529-11a5-1d5d4f1fe421"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-77-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._5.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "c494db50-b02d-c26e-2da3-86f5e19070b9", "91706532-adb8-ef3c-c618-5bbbfbcbd7a1", "5eeb5dab-e206-1529-11a5-1d5d4f1fe421"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-77-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._5.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "c494db50-b02d-c26e-2da3-86f5e19070b9", "91706532-adb8-ef3c-c618-5bbbfbcbd7a1", "5eeb5dab-e206-1529-11a5-1d5d4f1fe421"]
                                    },
                                    xValue: 100,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-77-n-4",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._5.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "c494db50-b02d-c26e-2da3-86f5e19070b9", "91706532-adb8-ef3c-c618-5bbbfbcbd7a1", "5eeb5dab-e206-1529-11a5-1d5d4f1fe421"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19394848b0c
                    },
                    "a-79": {
                        id: "a-79",
                        title: "AO-page5-new-bio-next",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-79-n",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._6.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "320772ff-46eb-0f09-c5ad-2a898c614905", "dfe827d5-2591-0032-1516-55e3cc70895c", "5a7cbc9a-1892-2460-0b8b-7cba932ced79"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-79-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".page._6.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "320772ff-46eb-0f09-c5ad-2a898c614905", "dfe827d5-2591-0032-1516-55e3cc70895c", "5a7cbc9a-1892-2460-0b8b-7cba932ced79"]
                                    },
                                    xValue: 100,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-79-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".page._6.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "320772ff-46eb-0f09-c5ad-2a898c614905", "dfe827d5-2591-0032-1516-55e3cc70895c", "5a7cbc9a-1892-2460-0b8b-7cba932ced79"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-79-n-3",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._6.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "320772ff-46eb-0f09-c5ad-2a898c614905", "dfe827d5-2591-0032-1516-55e3cc70895c", "5a7cbc9a-1892-2460-0b8b-7cba932ced79"]
                                    },
                                    value: "flex"
                                }
                            }, {
                                id: "a-79-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 0,
                                    target: {
                                        selector: ".page._6.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "320772ff-46eb-0f09-c5ad-2a898c614905", "dfe827d5-2591-0032-1516-55e3cc70895c", "5a7cbc9a-1892-2460-0b8b-7cba932ced79"]
                                    },
                                    xValue: 0,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-79-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".page._6.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "320772ff-46eb-0f09-c5ad-2a898c614905", "dfe827d5-2591-0032-1516-55e3cc70895c", "5a7cbc9a-1892-2460-0b8b-7cba932ced79"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19394848b0c
                    },
                    "a-78": {
                        id: "a-78",
                        title: "AO-page6-new-bio-back",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-78-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._6.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "320772ff-46eb-0f09-c5ad-2a898c614905", "dfe827d5-2591-0032-1516-55e3cc70895c", "5a7cbc9a-1892-2460-0b8b-7cba932ced79"]
                                    },
                                    xValue: 0,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-78-n-2",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._6.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "320772ff-46eb-0f09-c5ad-2a898c614905", "dfe827d5-2591-0032-1516-55e3cc70895c", "5a7cbc9a-1892-2460-0b8b-7cba932ced79"]
                                    },
                                    value: "flex"
                                }
                            }, {
                                id: "a-78-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._6.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "320772ff-46eb-0f09-c5ad-2a898c614905", "dfe827d5-2591-0032-1516-55e3cc70895c", "5a7cbc9a-1892-2460-0b8b-7cba932ced79"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-78-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".page._6.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "320772ff-46eb-0f09-c5ad-2a898c614905", "dfe827d5-2591-0032-1516-55e3cc70895c", "5a7cbc9a-1892-2460-0b8b-7cba932ced79"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-78-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._6.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "320772ff-46eb-0f09-c5ad-2a898c614905", "dfe827d5-2591-0032-1516-55e3cc70895c", "5a7cbc9a-1892-2460-0b8b-7cba932ced79"]
                                    },
                                    xValue: 100,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-78-n-4",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._6.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "320772ff-46eb-0f09-c5ad-2a898c614905", "dfe827d5-2591-0032-1516-55e3cc70895c", "5a7cbc9a-1892-2460-0b8b-7cba932ced79"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19394848b0c
                    },
                    "a-80": {
                        id: "a-80",
                        title: "AO-page6-new-bio-next",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-80-n",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._7.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "07da6c0a-0986-b451-142e-580abf65c5e9", "46532ec7-dd88-ff63-8e0f-7235c420bf7c", "8ab83182-e730-8448-8b2f-fc0c9067acf3"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-80-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".page._7.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "07da6c0a-0986-b451-142e-580abf65c5e9", "46532ec7-dd88-ff63-8e0f-7235c420bf7c", "8ab83182-e730-8448-8b2f-fc0c9067acf3"]
                                    },
                                    xValue: 100,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-80-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".page._7.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "07da6c0a-0986-b451-142e-580abf65c5e9", "46532ec7-dd88-ff63-8e0f-7235c420bf7c", "8ab83182-e730-8448-8b2f-fc0c9067acf3"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-80-n-3",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._7.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "07da6c0a-0986-b451-142e-580abf65c5e9", "46532ec7-dd88-ff63-8e0f-7235c420bf7c", "8ab83182-e730-8448-8b2f-fc0c9067acf3"]
                                    },
                                    value: "flex"
                                }
                            }, {
                                id: "a-80-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 0,
                                    target: {
                                        selector: ".page._7.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "07da6c0a-0986-b451-142e-580abf65c5e9", "46532ec7-dd88-ff63-8e0f-7235c420bf7c", "8ab83182-e730-8448-8b2f-fc0c9067acf3"]
                                    },
                                    xValue: 0,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-80-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".page._7.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "07da6c0a-0986-b451-142e-580abf65c5e9", "46532ec7-dd88-ff63-8e0f-7235c420bf7c", "8ab83182-e730-8448-8b2f-fc0c9067acf3"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19394848b0c
                    },
                    "a-81": {
                        id: "a-81",
                        title: "AO-page7-new-bio-back",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-81-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._7.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "07da6c0a-0986-b451-142e-580abf65c5e9", "46532ec7-dd88-ff63-8e0f-7235c420bf7c", "8ab83182-e730-8448-8b2f-fc0c9067acf3"]
                                    },
                                    xValue: 0,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-81-n-2",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._7.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "07da6c0a-0986-b451-142e-580abf65c5e9", "46532ec7-dd88-ff63-8e0f-7235c420bf7c", "8ab83182-e730-8448-8b2f-fc0c9067acf3"]
                                    },
                                    value: "flex"
                                }
                            }, {
                                id: "a-81-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._7.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "07da6c0a-0986-b451-142e-580abf65c5e9", "46532ec7-dd88-ff63-8e0f-7235c420bf7c", "8ab83182-e730-8448-8b2f-fc0c9067acf3"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-81-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._7.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "07da6c0a-0986-b451-142e-580abf65c5e9", "46532ec7-dd88-ff63-8e0f-7235c420bf7c", "8ab83182-e730-8448-8b2f-fc0c9067acf3"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-81-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._7.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "07da6c0a-0986-b451-142e-580abf65c5e9", "46532ec7-dd88-ff63-8e0f-7235c420bf7c", "8ab83182-e730-8448-8b2f-fc0c9067acf3"]
                                    },
                                    xValue: 100,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-81-n-4",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._7.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "07da6c0a-0986-b451-142e-580abf65c5e9", "46532ec7-dd88-ff63-8e0f-7235c420bf7c", "8ab83182-e730-8448-8b2f-fc0c9067acf3"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19394848b0c
                    },
                    "a-83": {
                        id: "a-83",
                        title: "AO-page7-new-bio-next",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-83-n",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._8.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "519fdffa-4cd3-bd6c-6425-c8f4b358863c", "50f87f5a-16d1-bdb8-166e-570e4ed93038", "dc57a9db-a5e6-3971-9bfe-f9e96d8f85ac"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-83-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".page._8.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "519fdffa-4cd3-bd6c-6425-c8f4b358863c", "50f87f5a-16d1-bdb8-166e-570e4ed93038", "dc57a9db-a5e6-3971-9bfe-f9e96d8f85ac"]
                                    },
                                    xValue: 100,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-83-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".page._8.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "519fdffa-4cd3-bd6c-6425-c8f4b358863c", "50f87f5a-16d1-bdb8-166e-570e4ed93038", "dc57a9db-a5e6-3971-9bfe-f9e96d8f85ac"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-83-n-3",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._8.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "519fdffa-4cd3-bd6c-6425-c8f4b358863c", "50f87f5a-16d1-bdb8-166e-570e4ed93038", "dc57a9db-a5e6-3971-9bfe-f9e96d8f85ac"]
                                    },
                                    value: "flex"
                                }
                            }, {
                                id: "a-83-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 0,
                                    target: {
                                        selector: ".page._8.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "519fdffa-4cd3-bd6c-6425-c8f4b358863c", "50f87f5a-16d1-bdb8-166e-570e4ed93038", "dc57a9db-a5e6-3971-9bfe-f9e96d8f85ac"]
                                    },
                                    xValue: 0,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-83-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".page._8.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "519fdffa-4cd3-bd6c-6425-c8f4b358863c", "50f87f5a-16d1-bdb8-166e-570e4ed93038", "dc57a9db-a5e6-3971-9bfe-f9e96d8f85ac"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19394848b0c
                    },
                    "a-82": {
                        id: "a-82",
                        title: "AO-page8-new-bio-back",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-82-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._8.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "519fdffa-4cd3-bd6c-6425-c8f4b358863c", "50f87f5a-16d1-bdb8-166e-570e4ed93038", "dc57a9db-a5e6-3971-9bfe-f9e96d8f85ac"]
                                    },
                                    xValue: 0,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-82-n-2",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._8.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "519fdffa-4cd3-bd6c-6425-c8f4b358863c", "50f87f5a-16d1-bdb8-166e-570e4ed93038", "dc57a9db-a5e6-3971-9bfe-f9e96d8f85ac"]
                                    },
                                    value: "flex"
                                }
                            }, {
                                id: "a-82-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._8.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "519fdffa-4cd3-bd6c-6425-c8f4b358863c", "50f87f5a-16d1-bdb8-166e-570e4ed93038", "dc57a9db-a5e6-3971-9bfe-f9e96d8f85ac"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-82-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._8.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "519fdffa-4cd3-bd6c-6425-c8f4b358863c", "50f87f5a-16d1-bdb8-166e-570e4ed93038", "dc57a9db-a5e6-3971-9bfe-f9e96d8f85ac"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-82-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._8.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "519fdffa-4cd3-bd6c-6425-c8f4b358863c", "50f87f5a-16d1-bdb8-166e-570e4ed93038", "dc57a9db-a5e6-3971-9bfe-f9e96d8f85ac"]
                                    },
                                    xValue: 100,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-82-n-4",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._8.new.bio",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "519fdffa-4cd3-bd6c-6425-c8f4b358863c", "50f87f5a-16d1-bdb8-166e-570e4ed93038", "dc57a9db-a5e6-3971-9bfe-f9e96d8f85ac"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19394848b0c
                    },
                    "a-85": {
                        id: "a-85",
                        title: "AO-page3-new-card-back",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-85-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._3.new.card",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "37322a09-856f-a44c-e1e0-13c2b2724c9f", "8eca74f3-77c1-d963-70a3-05effe438100", "2b69a25f-20c4-e975-b567-19f56bd99d54"]
                                    },
                                    xValue: 0,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-85-n-2",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._3.new.card",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "37322a09-856f-a44c-e1e0-13c2b2724c9f", "8eca74f3-77c1-d963-70a3-05effe438100", "2b69a25f-20c4-e975-b567-19f56bd99d54"]
                                    },
                                    value: "flex"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-85-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".page._3.new.card",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "37322a09-856f-a44c-e1e0-13c2b2724c9f", "8eca74f3-77c1-d963-70a3-05effe438100", "2b69a25f-20c4-e975-b567-19f56bd99d54"]
                                    },
                                    xValue: 100,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-85-n-4",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._3.new.card",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "37322a09-856f-a44c-e1e0-13c2b2724c9f", "8eca74f3-77c1-d963-70a3-05effe438100", "2b69a25f-20c4-e975-b567-19f56bd99d54"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19394848b0c
                    },
                    "a-84": {
                        id: "a-84",
                        title: "AO-page2-new-card-next",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-84-n",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._3.new.card",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "37322a09-856f-a44c-e1e0-13c2b2724c9f", "8eca74f3-77c1-d963-70a3-05effe438100", "2b69a25f-20c4-e975-b567-19f56bd99d54"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-84-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".page._3.new.card",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "37322a09-856f-a44c-e1e0-13c2b2724c9f", "8eca74f3-77c1-d963-70a3-05effe438100", "2b69a25f-20c4-e975-b567-19f56bd99d54"]
                                    },
                                    xValue: 100,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-84-n-3",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._3.new.card",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "37322a09-856f-a44c-e1e0-13c2b2724c9f", "8eca74f3-77c1-d963-70a3-05effe438100", "2b69a25f-20c4-e975-b567-19f56bd99d54"]
                                    },
                                    value: "flex"
                                }
                            }, {
                                id: "a-84-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".page._3.new.card",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "37322a09-856f-a44c-e1e0-13c2b2724c9f", "8eca74f3-77c1-d963-70a3-05effe438100", "2b69a25f-20c4-e975-b567-19f56bd99d54"]
                                    },
                                    xValue: 0,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19394848b0c
                    },
                    "a-66": {
                        id: "a-66",
                        title: "AO-page1-old",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-66-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".page._2.old",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "72d90c98-5732-e504-5032-61c034fbc396", "491c9f85-e1b6-d737-6c8c-4fff3507b2e2"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "vh",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-66-n-5",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._2.old",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "72d90c98-5732-e504-5032-61c034fbc396", "491c9f85-e1b6-d737-6c8c-4fff3507b2e2"]
                                    },
                                    value: "none"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-66-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".page._2.old",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "72d90c98-5732-e504-5032-61c034fbc396", "491c9f85-e1b6-d737-6c8c-4fff3507b2e2"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "vh",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-66-n-6",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._2.old",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "72d90c98-5732-e504-5032-61c034fbc396", "491c9f85-e1b6-d737-6c8c-4fff3507b2e2"]
                                    },
                                    value: "flex"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19394848b0c
                    },
                    "a-71": {
                        id: "a-71",
                        title: "AO-page1-new",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-71-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".page._2.new",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "72d90c98-5732-e504-5032-61c034fbc396", "d52d68bc-6f84-ac73-0232-a8ef55e9083e"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "vh",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-71-n-5",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._2.new",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "72d90c98-5732-e504-5032-61c034fbc396", "d52d68bc-6f84-ac73-0232-a8ef55e9083e"]
                                    },
                                    value: "none"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-71-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".page._2.new",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "72d90c98-5732-e504-5032-61c034fbc396", "d52d68bc-6f84-ac73-0232-a8ef55e9083e"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "vh",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-71-n-6",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".page._2.new",
                                        selectorGuids: ["79ff7e04-94cf-739c-0590-112f6b019c58", "72d90c98-5732-e504-5032-61c034fbc396", "d52d68bc-6f84-ac73-0232-a8ef55e9083e"]
                                    },
                                    value: "flex"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19394848b0c
                    },
                    slideInBottom: {
                        id: "slideInBottom",
                        useFirstGroupAsInitialState: !0,
                        actionItemGroups: [{
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 0,
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 1
                                }
                            }]
                        }]
                    }
                },
                site: {
                    mediaQueries: [{
                        key: "main",
                        min: 992,
                        max: 1e4
                    }, {
                        key: "medium",
                        min: 768,
                        max: 991
                    }, {
                        key: "small",
                        min: 480,
                        max: 767
                    }, {
                        key: "tiny",
                        min: 0,
                        max: 479
                    }]
                }
            })
        }
    }
]);