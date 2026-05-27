"use strict";
(globalThis.webpackChunk_zendesk_web_widget_messenger = globalThis.webpackChunk_zendesk_web_widget_messenger || []).push([
    [7941], {
        61759(e, t, r) {
            r.d(t, {
                A: () => n
            });
            var o = r(82017);
            const n = () => {
                const [e, t] = (0, o.useState)(Math.round(100 * window.devicePixelRatio)), r = () => {
                    t(Math.round(100 * window.devicePixelRatio))
                };
                return (0, o.useEffect)((() => (window.addEventListener("resize", r), () => {
                    window.removeEventListener("resize", r)
                })), []), {
                    scale: e >= 400 ? .5 : 1,
                    isZoomedIn: e >= 400
                }
            }
        },
        34903(e, t, r) {
            r.d(t, {
                A: () => h
            });
            var o = r(6580),
                n = r(61680),
                i = r(13452),
                s = r(61759),
                a = r(39028),
                l = r(84055),
                c = r(34e3),
                d = r(34547),
                m = r(8837);
            const h = ({
                children: e,
                ariaLabel: t
            }) => {
                const r = (0, o.d4)(d.E9),
                    h = (0, o.d4)(d.fl),
                    g = (0, o.d4)(l.iG),
                    {
                        vertical: u,
                        horizontal: p
                    } = (0, o.d4)(d.XI),
                    b = u > i.G1,
                    f = a.A.isRTL() ? "rtl" : "ltr",
                    {
                        isZoomedIn: x
                    } = (0, s.A)();
                return (0, m.jsx)("div", {
                    "aria-label": t,
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        zIndex: h,
                        bottom: g === n.Fe.none ? u : (0, c.Uc)(Number(u)),
                        position: "fixed",
                        [r]: p,
                        direction: f,
                        alignItems: "end",
                        gap: i.x5,
                        ...x && b && {
                            bottom: (0, c.Uc)(Number(i.G1))
                        }
                    },
                    children: e
                })
            }
        },
        72735(e, t, r) {
            r.d(t, {
                A: () => i
            });
            var o = r(13452),
                n = r(8837);
            const i = ({
                children: e
            }) => (0, n.jsx)("div", {
                style: {
                    display: "flex",
                    gap: o.x5
                },
                children: e
            })
        },
        69928(e, t, r) {
            r.d(t, {
                A: () => h
            });
            var o = r(82017),
                n = r(6580),
                i = r(87821),
                s = r(13452),
                a = r(34e3),
                l = r(73938),
                c = r(26478),
                d = r(52602),
                m = r(8837);
            const h = (0, o.forwardRef)((({
                children: e,
                title: t
            }, r) => {
                const h = (0, n.d4)(l._) ? s.xm : s.Ez,
                    {
                        height: g,
                        width: u
                    } = (0, o.useMemo)((() => ({
                        height: (0, d.A)(a.CH, h),
                        width: (0, d.A)(a.CH, h)
                    })), [h]);
                return (0, m.jsx)(i.Ay, {
                    title: t,
                    style: {
                        height: g,
                        width: u,
                        border: 0,
                        backgroundColor: "transparent",
                        boxShadow: a.og,
                        borderRadius: "100%",
                        verticalAlign: "unset",
                        opacity: 0,
                        alignSelf: "end"
                    },
                    ref: r,
                    children: (0, m.jsx)(c.A, {
                        children: e
                    })
                })
            }))
        },
        86839(e, t, r) {
            r.d(t, {
                A: () => g
            });
            var o = r(82017),
                n = r(6580),
                i = r(87821),
                s = r(13452),
                a = r(34e3),
                l = r(73938),
                c = r(26478),
                d = r(34547),
                m = r(52602),
                h = r(8837);
            const g = (0, o.forwardRef)((({
                children: e,
                title: t,
                messageFrameWidth: r,
                maxWidth: g,
                messageFrameHeight: u
            }, p) => {
                const b = (0, n.d4)(l._) ? s.xm : s.Ez,
                    f = (0, n.d4)(d.E9),
                    {
                        borderRadius: x
                    } = (0, o.useMemo)((() => ({
                        borderRadius: (0, m.A)(a.xY, b)
                    })), [b]);
                return (0, h.jsx)(i.Ay, {
                    ref: p,
                    title: t,
                    style: {
                        width: r,
                        height: u,
                        maxWidth: g,
                        overflow: "auto",
                        border: 0,
                        backgroundColor: "transparent",
                        boxShadow: a.og,
                        borderRadius: x,
                        display: "inline-block",
                        verticalAlign: "unset",
                        transformOrigin: `bottom ${String(f)}`
                    },
                    children: (0, h.jsx)(c.A, {
                        children: e
                    })
                })
            }))
        },
        86954(e, t, r) {
            r.d(t, {
                N: () => o
            });
            const o = r(70157).Ay.div.withConfig({
                componentId: "sc-9qme4p-0"
            })(["text-align:center;overflow:auto;max-height:", "px;"], (e => e.maxMessageContainerHeight))
        },
        73756(e, t, r) {
            r.d(t, {
                A: () => c
            });
            var o = r(82017),
                n = r(6580),
                i = r(34e3),
                s = r(3523),
                a = r(24044);
            const l = 1e3 * s.X_ + 50,
                c = ({
                    isLabelVisible: e,
                    refs: t
                }) => {
                    const r = (0, n.d4)(a.xD),
                        s = (0, o.useRef)(0);
                    (0, o.useLayoutEffect)((() => {
                        s.current = Date.now()
                    }), [r]);
                    const c = (0, o.useCallback)((e => {
                        const {
                            closeFrame: r,
                            messageFrame: o,
                            avatarFrame: n
                        } = t.current;
                        if (!o ? .animate) return;
                        o.style.opacity = "0", o.style.transform = "scale(0)", r && (r.style.opacity = "0"), n && (n.style.opacity = "0");
                        o.animate([{
                            transform: "scale(0)",
                            opacity: 0
                        }, {
                            transform: "scale(1)",
                            opacity: 1
                        }], { ...i.G1,
                            delay: e ? 750 : 0
                        }).onfinish = () => {
                            o && o.contentDocument && (o.contentDocument.body.animate(i.vV, i.G1), t.current.avatarFrame && (t.current.avatarFrame.style.opacity = "1", t.current.avatarFrame.animate(i.vV, i.G1)), t.current.closeFrame && (t.current.closeFrame.style.opacity = "1", t.current.closeFrame.animate(i.vV, i.G1)), o.contentDocument.body.style.opacity = "1")
                        }
                    }), [t]);
                    (0, o.useLayoutEffect)((() => {
                        const {
                            messageFrame: r
                        } = t.current;
                        if (e) {
                            if (e) {
                                const e = Date.now() - s.current < l;
                                c(e)
                            }
                        } else r ? .contentDocument && (r.contentDocument.body.style.opacity = "0")
                    }), [e]);
                    return {
                        onClickAnimate: e => {
                            const {
                                messageFrame: r,
                                avatarFrame: o
                            } = t.current;
                            if (!r ? .animate) return void e();
                            o ? .animate([{
                                opacity: 0
                            }], {
                                delay: 100,
                                fill: "forwards"
                            });
                            r.animate([{
                                transform: "scale(1)"
                            }, {
                                transform: "scale(0.95)",
                                opacity: 1
                            }, {
                                transform: "scale(1)",
                                opacity: 0
                            }], 200).onfinish = e
                        },
                        animateHide: e => {
                            const {
                                closeFrame: r,
                                messageFrame: o,
                                avatarFrame: n
                            } = t.current;
                            if (!o ? .animate) return void e();
                            r ? .animate([{
                                opacity: 0
                            }], 200), n ? .animate([{
                                opacity: 0
                            }], 200);
                            o.animate([{
                                opacity: 0
                            }], 200).onfinish = e
                        }
                    }
                }
        },
        95910(e, t, r) {
            r.d(t, {
                A: () => h
            });
            var o = r(82017),
                n = r(6580),
                i = r(13452),
                s = r(34e3),
                a = r(34547),
                l = r(73832);
            const c = () => {
                    const {
                        innerWidth: e,
                        innerHeight: t
                    } = l.Jc;
                    return {
                        width: e,
                        height: t
                    }
                },
                d = () => {
                    const [e, t] = (0, o.useState)(c());
                    return (0, o.useEffect)((() => {
                        const e = function(e, t) {
                            let r = 0;
                            return (...o) => {
                                const n = new Date;
                                n.getTime() - r >= t && (e(...o), r = n.getTime())
                            }
                        }((() => {
                            t(c())
                        }), 200);
                        return l.Jc.addEventListener("resize", e), () => l.Jc.removeEventListener("resize", e)
                    }), []), e
                };
            var m = r(61759);
            const h = ({
                refs: e,
                isIconNextToMessage: t
            }) => {
                const [r, l] = (0, o.useState)(0), [c, h] = (0, o.useState)(0), g = (0, m.A)(), {
                    vertical: u,
                    horizontal: p
                } = (0, n.d4)(a.XI), b = u > i.G1, f = d(), x = f.width - (t ? s.yT + i.x5 : 0) - i.pJ - (g.isZoomedIn && b ? i.G1 : p), y = Math.min(s.T7, x), w = f.height - (0, s.Uc)(g.isZoomedIn ? 0 : u) - i.x5 - (e.current ? .closeFrame ? .clientHeight ? i.x5 + e.current ? .closeFrame ? .clientHeight : 0);
                return {
                    maxWidth: y,
                    messageFrameWidth: Math.min(r, x),
                    messageFrameHeight: Math.min(c, w),
                    messageContainerHeight: f.height - (e.current ? .closeFrame ? s.CH + i.x5 : 0) - (0, s.Uc)(g.isZoomedIn ? 0 : u) - i.x5,
                    setFrameDimensions: e => {
                        if (e.current) {
                            const t = e.current.getBoundingClientRect();
                            l(t.width), h(t.height)
                        }
                    }
                }
            }
        },
        99893(e, t, r) {
            r.d(t, {
                A: () => d
            });
            var o = r(29160),
                n = r(88254),
                i = r(70157);
            const s = e => void 0 === e.isPrimaryParticipant ? "inherit !important" : e.isPrimaryParticipant ? `${e.theme.messenger.colors.messageForegroundColor} !important` : `${e.theme.messenger.colors.businessMessageForegroundColor} !important`,
                a = i.Ay.span.withConfig({
                    componentId: "sc-qlp6cz-0"
                })(["text-decoration:underline;unicode-bidi:plaintext;& > a{color:", ";}:hover{opacity:0.9;}& > a[data-garden-focus-visible]{outline-color:", ";box-shadow:", ";}"], (e => s(e)), (({
                    theme: e
                }) => `${e.messenger.colors.actionBackgroundColor}`), (({
                    theme: e
                }) => `0 0 0 3px ${e.messenger.colors.actionBackgroundColor}33`)),
                l = i.Ay.span.withConfig({
                    componentId: "sc-qlp6cz-1"
                })(["cursor:pointer;unicode-bidi:plaintext;color:", ";text-decoration:underline;:hover{opacity:0.9;}:focus-visible{outline-color:", ";box-shadow:", ";border-radius:2px;}"], (e => s(e)), (({
                    theme: e
                }) => `${e.messenger.colors.actionBackgroundColor}`), (({
                    theme: e
                }) => `0 0 0 3px ${e.messenger.colors.actionBackgroundColor}33`));
            var c = r(8837);
            const d = ({
                text: e,
                href: t,
                isPrimaryParticipant: r,
                onClick: i,
                onActivate: s,
                isExternal: d = !0
            }) => {
                const m = (0, n.A)().ariaLabels.linkExternalAnchor,
                    h = e => {
                        "Enter" !== e.key && " " !== e.key || (e.preventDefault(), e.stopPropagation(), s ? .())
                    };
                return d ? (0, c.jsx)(a, {
                    isPrimaryParticipant: r,
                    children: (0, c.jsx)(o.M, {
                        onClick: i,
                        isExternal: !0,
                        href: t,
                        externalIconLabel: m,
                        children: e
                    })
                }) : (0, c.jsx)(l, {
                    isPrimaryParticipant: r,
                    role: "button",
                    tabIndex: 0,
                    onClick: e => {
                        e.stopPropagation(), s ? .()
                    },
                    onKeyDown: h,
                    children: e
                })
            }
        },
        88254(e, t, r) {
            r.d(t, {
                A: () => i
            });
            var o = r(82017),
                n = r(70157);
            const i = () => (0, o.useContext)(n.Dx).messenger.labels
        },
        95459(e, t, r) {
            r.d(t, {
                A: () => u
            });
            var o = r(93763),
                n = r.n(o),
                i = r(82017),
                s = r(70157),
                a = r(16399),
                l = r(74033);
            const c = s.Ay.button.withConfig({
                    componentId: "sc-1ee9gtf-0"
                })(["padding:", ";border:0;width:max-content;max-width:", ";overflow-wrap:break-word;word-break:break-word;background:", ";color:", ";border-radius:", ";text-align:initial;&:focus,&:active{outline:0;}&:focus{outline:none;}&[data-garden-focus-visible]{box-shadow:inset ", ";}"], (e => e.isTitleVisible ? `${e.theme.messenger.space.sixteen} ${e.theme.messenger.space.sm} ${e.theme.messenger.space.sm}` : e.theme.messenger.space.sm), (e => "" + ("number" == typeof e.maxWidth ? `${e.maxWidth}px` : "auto")), (e => e.theme.messenger.colors.proactiveMessageBackgroundColor), (e => e.theme.messenger.colors.proactiveMessageForegroundColor), (e => e.theme.messenger.borderRadii.textMessage), (e => e.theme.shadows.md(e.theme.messenger.colors.actionBackgroundColor))),
                d = s.Ay.h1.withConfig({
                    componentId: "sc-1ee9gtf-1"
                })(["margin-bottom:", ";color:", ";font-size:", ";line-height:", ";opacity:0.65;unicode-bidi:plaintext;"], (e => e.theme.messenger.space.xs), (e => e.theme.palette.black), (e => e.theme.messenger.fontSizes.sm), (e => e.theme.messenger.lineHeights.sm)),
                m = s.Ay.span.withConfig({
                    componentId: "sc-1ee9gtf-2"
                })(["font-size:", ";line-height:", ";unicode-bidi:plaintext;"], (e => e.theme.messenger.fontSizes.md), (e => e.theme.messenger.lineHeights.md));
            var h = r(8837);
            const g = ({
                title: e,
                message: t,
                htmlMessage: r,
                ariaLabel: o,
                maxWidth: n,
                onClick: s,
                onRender: g
            }) => {
                const u = (0, i.useRef)(null),
                    p = c;
                return (0, i.useLayoutEffect)((() => {
                    g ? .(u)
                })), (0, h.jsxs)(p, {
                    maxWidth: n,
                    onClick: s,
                    ref: u,
                    "aria-label": o,
                    isTitleVisible: Boolean(e),
                    children: [e && (0, h.jsx)(d, {
                        children: e
                    }), (0, h.jsx)(m, {
                        children: r ? (0, h.jsx)(a.t, {
                            children: (0, l.Y)(r)
                        }) : t
                    })]
                })
            };
            Object.assign(g, {
                propTypes: {
                    title: n().node,
                    ariaLabel: n().string,
                    message: n().node.isRequired,
                    htmlMessage: n().string,
                    maxWidth: n().number,
                    onClick: n().func.isRequired,
                    onRender: n().func
                }
            });
            const u = (0, s.Ay)(g).withConfig({
                componentId: "sc-k01s8p-0"
            })([""])
        },
        91815(e, t, r) {
            r.d(t, {
                A: () => d
            });
            var o = r(70157),
                n = (r(82017), r(43267)),
                i = r(8837),
                s = function(e) {
                    return (0, i.jsx)("svg", { ...e,
                        children: (0, i.jsx)("path", {
                            stroke: "currentColor",
                            strokeLinecap: "round",
                            d: "M3 13L13 3m0 10L3 3"
                        })
                    })
                };
            s.defaultProps = {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                focusable: "false",
                viewBox: "0 0 16 16"
            };
            const a = o.Ay.button.withConfig({
                    componentId: "sc-1uf0igr-0"
                })(["border:0;background:", ";color:", ";border-radius:", ";display:flex;align-items:center;justify-content:center;width:", ";height:", ";transform-origin:bottom;&:focus,&:active,&:hover{opacity:1;}&[data-garden-focus-visible]{box-shadow:inset ", ";outline:none;}"], (e => e.theme.messenger.colors.proactiveMessageBackgroundColor), (e => e.theme.palette.black), (e => e.theme.messenger.borderRadii.textMessage), (e => e.theme.messenger.iconSizes.xxl), (e => e.theme.messenger.iconSizes.xxl), (e => e.theme.shadows.md(e.theme.messenger.colors.actionBackgroundColor))),
                l = (0, o.Ay)(s).attrs({
                    "aria-hidden": !0
                }).withConfig({
                    componentId: "sc-1uf0igr-1"
                })(["width:", ";height:", ";"], (e => (0, n.D0)(16, e.theme.messenger.baseFontSize)), (e => (0, n.D0)(16, e.theme.messenger.baseFontSize))),
                c = ({
                    onClick: e,
                    ariaLabel: t
                }) => (0, i.jsx)(a, {
                    onClick: e,
                    "aria-label": t,
                    children: (0, i.jsx)(l, {})
                });
            c.propTypes = {};
            const d = (0, o.Ay)(c).withConfig({
                componentId: "sc-1xsbl6q-0"
            })([""])
        },
        71892(e, t, r) {
            r.d(t, {
                It: () => u,
                Sp: () => g,
                aw: () => m,
                c3: () => h,
                vt: () => d
            });
            var o = r(82017),
                n = r(68926),
                i = r(4840),
                s = r(68746),
                a = r(88254),
                l = r(8837),
                c = function(e) {
                    return (0, l.jsx)("svg", { ...e,
                        children: (0, l.jsx)("path", {
                            fill: "currentColor",
                            d: "M3.5 10a.5.5 0 110 1H1a1 1 0 01-1-1V1a1 1 0 011-1h9a1 1 0 011 1v2.5a.5.5 0 11-1 0V1H1v9h2.5zM6 6v9h9V6H6zm0-1h9a1 1 0 011 1v9a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1z"
                        })
                    })
                };
            c.defaultProps = {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                focusable: "false",
                viewBox: "0 0 16 16"
            };
            const d = ["p", "br", "pre", "span", "strong", "b", "em", "i", "u", "ins", "s", "del", "a", "ol", "ul", "li", "h1", "h2", "h3", "h4", "h5", "h6", "code", "mark", "q", "#text"],
                m = ["target", "href"],
                h = ({
                    codeContent: e,
                    codeNode: t,
                    index: r
                }) => {
                    const d = "string" == typeof e ? e : e ? .toString() || "",
                        m = g(d, r),
                        h = (0, a.A)(),
                        u = h.htmlTextMessage.tooltipCopyCode,
                        p = h.htmlTextMessage.tooltipCodeCopied,
                        [b, f] = (0, o.useState)(u),
                        x = () => {
                            f(p)
                        };
                    return (0, l.jsxs)("pre", {
                        className: "styledPre",
                        children: [(0, l.jsx)(n.CopyToClipboard, {
                            text: t.textContent ? .trim() || "",
                            onCopy: x,
                            children: (0, l.jsx)("span", {
                                children: (0, l.jsx)(s.m, {
                                    content: b,
                                    type: "light",
                                    size: "small",
                                    children: (0, l.jsx)(i.K, {
                                        size: "small",
                                        isPill: !1,
                                        className: "code-block-copy-icon",
                                        onMouseEnter: () => {
                                            f(u)
                                        },
                                        children: (0, l.jsx)(c, {
                                            onClick: x,
                                            "aria-hidden": !0
                                        })
                                    })
                                })
                            })
                        }), (0, l.jsx)("code", {
                            children: m
                        })]
                    })
                },
                g = (e, t) => (0, l.jsx)(o.Fragment, {
                    children: e
                }, `text-${t}`),
                u = e => {
                    const t = {};
                    return e.split(";").forEach((e => {
                        const [r, o] = e.split(":");
                        if (r && o) {
                            const e = r.trim(),
                                n = o.trim();
                            "color" === e && (t[e] = n)
                        }
                    })), t
                }
        },
        16399(e, t, r) {
            r.d(t, {
                t: () => s
            });
            var o = r(43267),
                n = r(70157);
            const i = (0, n.AH)(["font-size:", ";line-height:", ";word-break:break-word;"], (({
                    theme: e
                }) => e.messenger.fontSizes.md), (({
                    theme: e
                }) => e.messenger.lineHeights.md)),
                s = n.Ay.div.withConfig({
                    componentId: "sc-h4wtel-0"
                })(["", " unicode-bidi:plaintext;outline:none;border-radius:", ";padding:", ";margin:-", ";&:focus,&[data-garden-focus-visible]{outline:3px solid ", ";outline-offset:-6px;}*{", "}strong{font-weight:bold;}em{font-style:italic;}u,ins{text-decoration:underline;}h1{font-size:", ";line-height:", ";}h2{font-size:", ";line-height:", ";}h3{font-size:", ";line-height:", ";}h4{font-size:", ";}h5{font-size:", ";}h1,h2,h3,h4,h5,h6{padding-bottom:", ";}ul{list-style-type:disc;padding-left:", ";}ul:not(:nth-child(2)){margin-top:", ";}ul:not(:last-child){margin-bottom:", ";}ul ul{list-style-type:circle;padding-left:", ";margin:0 !important;}ol{list-style-type:decimal;padding-left:", ";}ol:not(:last-child){margin-bottom:", ";}pre:{margin:0;padding:0;white-space:pre-wrap;}.styledPre{padding:", " ", ";background-color:white;background-color:", ";border:1px solid '#0000001F';white-space:pre;max-width:100%;box-sizing:border-box;display:flex;flex-direction:column;margin:", " 0;& code{font-family:", ";color:", ";opacity:0.65;overflow-x:auto;::-webkit-scrollbar{width:0px;height:", ";}:hover,:active,:focus{::-webkit-scrollbar{width:", ";height:", ";}::-webkit-scrollbar-thumb{background:#d9d9d9;}outline-color:", ";}}& span:first-child{text-align:end;}svg{margin-bottom:", ";}}.code-block-copy-icon{color:", " !important;border-radius:50%;color:", ";&[data-garden-focus-visible]{outline-color:", ";box-shadow:", ";}svg{margin:0;}&:hover{background-color:", ";}&:active{background-color:", ";}}"], i, (({
                    theme: e
                }) => e.messenger.borderRadii.md), (({
                    theme: e
                }) => e.messenger.space.xs), (({
                    theme: e
                }) => e.messenger.space.xs), (({
                    theme: e
                }) => e.messenger.colors.actionBackgroundColor), i, (0, o.D0)(32), (0, o.D0)(33), (0, o.D0)(24), (0, o.D0)(25), (0, o.D0)(20), (0, o.D0)(21), (({
                    theme: e
                }) => e.messenger.fontSizes.lg), (({
                    theme: e
                }) => e.messenger.fontSizes.sixteen), (0, o.D0)(4), (0, o.D0)(14), (({
                    theme: e
                }) => e.messenger.space.xxs), (({
                    theme: e
                }) => e.messenger.space.xxs), (({
                    theme: e
                }) => e.messenger.fontSizes.sm), (({
                    theme: e
                }) => e.messenger.fontSizes.sm), (({
                    theme: e
                }) => e.messenger.space.xxs), (0, o.D0)(8), (0, o.D0)(12), (({
                    theme: e
                }) => e.messenger.colors.cardBackgroundColor), (({
                    theme: e
                }) => e.messenger.space.xxs), (({
                    theme: e
                }) => e.messenger.fontFamilies.mono), (({
                    theme: e
                }) => e.messenger.colors.cardForegroundColor), (0, o.D0)(3), (0, o.D0)(105), (0, o.D0)(3), (({
                    theme: e
                }) => e.messenger.colors.action), (({
                    theme: e
                }) => e.messenger.space.xxs), (({
                    theme: e
                }) => e.messenger.colors.cardForegroundColor), (({
                    theme: e
                }) => e.messenger.colors.cardForegroundColor), (({
                    theme: e
                }) => e.messenger.colors.action), (({
                    theme: e
                }) => `0 0 0 3px ${e.messenger.colors.action}33`), (({
                    theme: e
                }) => (0, o.B3)(e.messenger.colors.cardForegroundColor, .08)), (({
                    theme: e
                }) => (0, o.B3)(e.messenger.colors.cardForegroundColor, .2)))
        },
        74033(e, t, r) {
            r.d(t, {
                Y: () => c
            });
            var o = r(97519),
                n = r(82017),
                i = r(99893);
            const s = {
                ALLOWED_TAGS: ["p", "br", "pre", "span", "strong", "b", "em", "i", "u", "ins", "s", "del", "a", "ol", "ul", "li", "h1", "h2", "h3", "h4", "h5", "h6", "code", "mark", "q", "#text"],
                KEEP_CONTENT: !1,
                ALLOWED_URI_REGEXP: /^(?:(?:https?|mailto|tel):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i,
                ALLOWED_ATTR: ["target", "href", "style"],
                ALLOWED_STYLES: {
                    "*": {
                        color: [/^#(0x)?[0-9a-f]{3,6}$/i, /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/, ...["black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua", "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"].map((e => new RegExp(`^${e}$`)))]
                    }
                }
            };
            var a = r(71892),
                l = r(8837);
            const c = (e, t) => ((e, t) => {
                const r = (new DOMParser).parseFromString(e, "text/html"),
                    o = (e, r) => {
                        if (e.nodeType === Node.TEXT_NODE) return (0, a.Sp)(e.textContent || "", r);
                        if (e.nodeType !== Node.ELEMENT_NODE) return null;
                        const s = e,
                            c = s.nodeName.toLowerCase(),
                            d = Array.from(s.childNodes).map(((e, t) => o(e, t))),
                            m = {},
                            h = s.getAttribute("style");
                        switch (h && (m.style = (0, a.It)(h)), c) {
                            case "code":
                                {
                                    const e = s.textContent ? .trim();
                                    if (e) return (0, l.jsx)(a.c3, {
                                        codeContent: e,
                                        index: r,
                                        codeNode: s
                                    }, `code-${r}`);
                                    break
                                }
                            case "a":
                                {
                                    const e = s.getAttribute("href") || "",
                                        o = s.textContent || "",
                                        n = t ? .isLinkInternal ? .(e) ? ? !1,
                                        a = {
                                            isExternal: !1,
                                            onActivate: () => t ? .onLinkClick ? .(e)
                                        },
                                        c = {
                                            href: e,
                                            onClick: e => e.stopPropagation()
                                        };
                                    return (0, l.jsx)(i.A, {
                                        text: o,
                                        ...n ? a : c
                                    }, `link-${r}`)
                                }
                            case "br":
                                return (0, l.jsx)("br", {}, `br-${r}`);
                            default:
                                return (0, n.createElement)(c, {
                                    key: `${c}-${r}`,
                                    ...m
                                }, d)
                        }
                    };
                return Array.from(r.body.childNodes).map(((e, t) => o(e, t)))
            })(o.A.sanitize(e, s), t)
        },
        87821(e, t, r) {
            r.d(t, {
                Ay: () => l
            });
            var o = r(82017),
                n = r(54464),
                i = r(70157),
                s = r(50706),
                a = r(8837);
            const l = o.forwardRef((({
                children: e,
                rootElement: t,
                title: r,
                hidden: l,
                ...c
            }, d) => {
                const [m, h] = (e => {
                    const t = (0, o.useRef)(null),
                        r = (0, o.useCallback)((r => {
                            t.current = r, e && ("function" == typeof e ? e(t.current) : e.current = t.current)
                        }), [t, e]);
                    return [t, r]
                })(d), g = (0, o.useRef)(t), [u, p] = (0, o.useState)(!1), [b, f] = (0, o.useState)(!1);
                (0, o.useEffect)((() => {
                    const e = () => {
                        p(!0)
                    };
                    if ("complete" === m.current.contentDocument.readyState) return void e();
                    const t = m.current;
                    return t.addEventListener("load", e), () => t.removeEventListener("load", e)
                }), [m]), (0, o.useEffect)((() => {
                    if (!u) return;
                    g.current || (g.current = document.createElement("div"));
                    const e = g.current,
                        t = m.current.contentDocument.body;
                    return t.appendChild(e), f(!0), () => {
                        t.contains(e) && t.removeChild(e)
                    }
                }), [m, t, u]), (0, o.useEffect)((() => {
                    if (!b) return;
                    const e = m.current.contentDocument;
                    let t = e.querySelector("title");
                    t || (t = e.createElement("title")), t.innerHTML = "", t.appendChild(e.createTextNode(r)), e.querySelector("head").appendChild(t)
                }), [r, b, m]);
                const x = {
                    colorScheme: "light",
                    ...c.style
                };
                return u && b && !l || (x.display = "none"), (0, a.jsx)("iframe", {
                    ref: h,
                    title: r,
                    ...c,
                    style: x,
                    children: u && b && (0, a.jsx)(i.ID, {
                        target: m.current.contentDocument.querySelector("head"),
                        children: (0, a.jsx)(s.Ay, {
                            value: {
                                document: m.current.contentDocument,
                                window: m.current.contentWindow
                            },
                            children: !l && n.createPortal(e, g.current)
                        })
                    })
                })
            }))
        }
    }
]);