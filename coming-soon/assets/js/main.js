

(() => {
    var u = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t), t.exports);
    var Pi = u(() => {
        window.tram = function(e) {
            function t(l, v) {
                var y = new U.Bare;
                return y.init(l, v)
            }

            function r(l) {
                return l.replace(/[A-Z]/g, function(v) {
                    return "-" + v.toLowerCase()
                })
            }

            function n(l) {
                var v = parseInt(l.slice(1), 16),
                    y = v >> 16 & 255,
                    T = v >> 8 & 255,
                    _ = 255 & v;
                return [y, T, _]
            }

            function i(l, v, y) {
                return "#" + (1 << 24 | l << 16 | v << 8 | y).toString(16).slice(1)
            }

            function o() {}

            function a(l, v) {
                f("Type warning: Expected: [" + l + "] Got: [" + typeof v + "] " + v)
            }

            function s(l, v, y) {
                f("Units do not match [" + l + "]: " + v + ", " + y)
            }

            function c(l, v, y) {
                if (v !== void 0 && (y = v), l === void 0) return y;
                var T = y;
                return qt.test(l) || !vt.test(l) ? T = parseInt(l, 10) : vt.test(l) && (T = 1e3 * parseFloat(l)), 0 > T && (T = 0), T === T ? T : y
            }

            function f(l) {
                de.debug && window && window.console.warn(l)
            }

            function E(l) {
                for (var v = -1, y = l ? l.length : 0, T = []; ++v < y;) {
                    var _ = l[v];
                    _ && T.push(_)
                }
                return T
            }
            var p = function(l, v, y) {
                    function T(re) {
                        return typeof re == "object"
                    }

                    function _(re) {
                        return typeof re == "function"
                    }

                    function O() {}

                    function z(re, he) {
                        function W() {
                            var Pe = new se;
                            return _(Pe.init) && Pe.init.apply(Pe, arguments), Pe
                        }

                        function se() {}
                        he === y && (he = re, re = Object), W.Bare = se;
                        var le, Se = O[l] = re[l],
                            rt = se[l] = W[l] = new O;
                        return rt.constructor = W, W.mixin = function(Pe) {
                            return se[l] = W[l] = z(W, Pe)[l], W
                        }, W.open = function(Pe) {
                            if (le = {}, _(Pe) ? le = Pe.call(W, rt, Se, W, re) : T(Pe) && (le = Pe), T(le))
                                for (var Tr in le) v.call(le, Tr) && (rt[Tr] = le[Tr]);
                            return _(rt.init) || (rt.init = re), W
                        }, W.open(he)
                    }
                    return z
                }("prototype", {}.hasOwnProperty),
                h = {
                    ease: ["ease", function(l, v, y, T) {
                        var _ = (l /= T) * l,
                            O = _ * l;
                        return v + y * (-2.75 * O * _ + 11 * _ * _ + -15.5 * O + 8 * _ + .25 * l)
                    }],
                    "ease-in": ["ease-in", function(l, v, y, T) {
                        var _ = (l /= T) * l,
                            O = _ * l;
                        return v + y * (-1 * O * _ + 3 * _ * _ + -3 * O + 2 * _)
                    }],
                    "ease-out": ["ease-out", function(l, v, y, T) {
                        var _ = (l /= T) * l,
                            O = _ * l;
                        return v + y * (.3 * O * _ + -1.6 * _ * _ + 2.2 * O + -1.8 * _ + 1.9 * l)
                    }],
                    "ease-in-out": ["ease-in-out", function(l, v, y, T) {
                        var _ = (l /= T) * l,
                            O = _ * l;
                        return v + y * (2 * O * _ + -5 * _ * _ + 2 * O + 2 * _)
                    }],
                    linear: ["linear", function(l, v, y, T) {
                        return y * l / T + v
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(l, v, y, T) {
                        return y * (l /= T) * l + v
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(l, v, y, T) {
                        return -y * (l /= T) * (l - 2) + v
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(l, v, y, T) {
                        return (l /= T / 2) < 1 ? y / 2 * l * l + v : -y / 2 * (--l * (l - 2) - 1) + v
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(l, v, y, T) {
                        return y * (l /= T) * l * l + v
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(l, v, y, T) {
                        return y * ((l = l / T - 1) * l * l + 1) + v
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(l, v, y, T) {
                        return (l /= T / 2) < 1 ? y / 2 * l * l * l + v : y / 2 * ((l -= 2) * l * l + 2) + v
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(l, v, y, T) {
                        return y * (l /= T) * l * l * l + v
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(l, v, y, T) {
                        return -y * ((l = l / T - 1) * l * l * l - 1) + v
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(l, v, y, T) {
                        return (l /= T / 2) < 1 ? y / 2 * l * l * l * l + v : -y / 2 * ((l -= 2) * l * l * l - 2) + v
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(l, v, y, T) {
                        return y * (l /= T) * l * l * l * l + v
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(l, v, y, T) {
                        return y * ((l = l / T - 1) * l * l * l * l + 1) + v
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(l, v, y, T) {
                        return (l /= T / 2) < 1 ? y / 2 * l * l * l * l * l + v : y / 2 * ((l -= 2) * l * l * l * l + 2) + v
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(l, v, y, T) {
                        return -y * Math.cos(l / T * (Math.PI / 2)) + y + v
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(l, v, y, T) {
                        return y * Math.sin(l / T * (Math.PI / 2)) + v
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(l, v, y, T) {
                        return -y / 2 * (Math.cos(Math.PI * l / T) - 1) + v
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(l, v, y, T) {
                        return l === 0 ? v : y * Math.pow(2, 10 * (l / T - 1)) + v
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(l, v, y, T) {
                        return l === T ? v + y : y * (-Math.pow(2, -10 * l / T) + 1) + v
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(l, v, y, T) {
                        return l === 0 ? v : l === T ? v + y : (l /= T / 2) < 1 ? y / 2 * Math.pow(2, 10 * (l - 1)) + v : y / 2 * (-Math.pow(2, -10 * --l) + 2) + v
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(l, v, y, T) {
                        return -y * (Math.sqrt(1 - (l /= T) * l) - 1) + v
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(l, v, y, T) {
                        return y * Math.sqrt(1 - (l = l / T - 1) * l) + v
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(l, v, y, T) {
                        return (l /= T / 2) < 1 ? -y / 2 * (Math.sqrt(1 - l * l) - 1) + v : y / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + v
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(l, v, y, T, _) {
                        return _ === void 0 && (_ = 1.70158), y * (l /= T) * l * ((_ + 1) * l - _) + v
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(l, v, y, T, _) {
                        return _ === void 0 && (_ = 1.70158), y * ((l = l / T - 1) * l * ((_ + 1) * l + _) + 1) + v
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(l, v, y, T, _) {
                        return _ === void 0 && (_ = 1.70158), (l /= T / 2) < 1 ? y / 2 * l * l * (((_ *= 1.525) + 1) * l - _) + v : y / 2 * ((l -= 2) * l * (((_ *= 1.525) + 1) * l + _) + 2) + v
                    }]
                },
                g = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                S = document,
                b = window,
                x = "bkwld-tram",
                A = /[\-\.0-9]/g,
                w = /[A-Z]/,
                I = "number",
                N = /^(rgb|#)/,
                C = /(em|cm|mm|in|pt|pc|px)$/,
                q = /(em|cm|mm|in|pt|pc|px|%)$/,
                G = /(deg|rad|turn)$/,
                j = "unitless",
                Y = /(all|none) 0s ease 0s/,
                ie = /^(width|height)$/,
                ee = " ",
                D = S.createElement("a"),
                m = ["Webkit", "Moz", "O", "ms"],
                P = ["-webkit-", "-moz-", "-o-", "-ms-"],
                M = function(l) {
                    if (l in D.style) return {
                        dom: l,
                        css: l
                    };
                    var v, y, T = "",
                        _ = l.split("-");
                    for (v = 0; v < _.length; v++) T += _[v].charAt(0).toUpperCase() + _[v].slice(1);
                    for (v = 0; v < m.length; v++)
                        if (y = m[v] + T, y in D.style) return {
                            dom: y,
                            css: P[v] + l
                        }
                },
                X = t.support = {
                    bind: Function.prototype.bind,
                    transform: M("transform"),
                    transition: M("transition"),
                    backface: M("backface-visibility"),
                    timing: M("transition-timing-function")
                };
            if (X.transition) {
                var $ = X.timing.dom;
                if (D.style[$] = h["ease-in-back"][0], !D.style[$])
                    for (var te in g) h[te][0] = g[te]
            }
            var L = t.frame = function() {
                    var l = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame;
                    return l && X.bind ? l.bind(b) : function(v) {
                        b.setTimeout(v, 16)
                    }
                }(),
                H = t.now = function() {
                    var l = b.performance,
                        v = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
                    return v && X.bind ? v.bind(l) : Date.now || function() {
                        return +new Date
                    }
                }(),
                k = p(function(l) {
                    function v(Z, fe) {
                        var Ie = E(("" + Z).split(ee)),
                            pe = Ie[0];
                        fe = fe || {};
                        var De = B[pe];
                        if (!De) return f("Unsupported property: " + pe);
                        if (!fe.weak || !this.props[pe]) {
                            var je = De[0],
                                Xe = this.props[pe];
                            return Xe || (Xe = this.props[pe] = new je.Bare), Xe.init(this.$el, Ie, De, fe), Xe
                        }
                    }

                    function y(Z, fe, Ie) {
                        if (Z) {
                            var pe = typeof Z;
                            if (fe || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), pe == "number" && fe) return this.timer = new Ee({
                                duration: Z,
                                context: this,
                                complete: O
                            }), void(this.active = !0);
                            if (pe == "string" && fe) {
                                switch (Z) {
                                    case "hide":
                                        W.call(this);
                                        break;
                                    case "stop":
                                        z.call(this);
                                        break;
                                    case "redraw":
                                        se.call(this);
                                        break;
                                    default:
                                        v.call(this, Z, Ie && Ie[1])
                                }
                                return O.call(this)
                            }
                            if (pe == "function") return void Z.call(this, this);
                            if (pe == "object") {
                                var De = 0;
                                rt.call(this, Z, function(be, sm) {
                                    be.span > De && (De = be.span), be.stop(), be.animate(sm)
                                }, function(be) {
                                    "wait" in be && (De = c(be.wait, 0))
                                }), Se.call(this), De > 0 && (this.timer = new Ee({
                                    duration: De,
                                    context: this
                                }), this.active = !0, fe && (this.timer.complete = O));
                                var je = this,
                                    Xe = !1,
                                    an = {};
                                L(function() {
                                    rt.call(je, Z, function(be) {
                                        be.active && (Xe = !0, an[be.name] = be.nextStyle)
                                    }), Xe && je.$el.css(an)
                                })
                            }
                        }
                    }

                    function T(Z) {
                        Z = c(Z, 0), this.active ? this.queue.push({
                            options: Z
                        }) : (this.timer = new Ee({
                            duration: Z,
                            context: this,
                            complete: O
                        }), this.active = !0)
                    }

                    function _(Z) {
                        return this.active ? (this.queue.push({
                            options: Z,
                            args: arguments
                        }), void(this.timer.complete = O)) : f("No active transition timer. Use start() or wait() before then().")
                    }

                    function O() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var Z = this.queue.shift();
                            y.call(this, Z.options, !0, Z.args)
                        }
                    }

                    function z(Z) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var fe;
                        typeof Z == "string" ? (fe = {}, fe[Z] = 1) : fe = typeof Z == "object" && Z != null ? Z : this.props, rt.call(this, fe, Pe), Se.call(this)
                    }

                    function re(Z) {
                        z.call(this, Z), rt.call(this, Z, Tr, om)
                    }

                    function he(Z) {
                        typeof Z != "string" && (Z = "block"), this.el.style.display = Z
                    }

                    function W() {
                        z.call(this), this.el.style.display = "none"
                    }

                    function se() {
                        this.el.offsetHeight
                    }

                    function le() {
                        z.call(this), e.removeData(this.el, x), this.$el = this.el = null
                    }

                    function Se() {
                        var Z, fe, Ie = [];
                        this.upstream && Ie.push(this.upstream);
                        for (Z in this.props) fe = this.props[Z], fe.active && Ie.push(fe.string);
                        Ie = Ie.join(","), this.style !== Ie && (this.style = Ie, this.el.style[X.transition.dom] = Ie)
                    }

                    function rt(Z, fe, Ie) {
                        var pe, De, je, Xe, an = fe !== Pe,
                            be = {};
                        for (pe in Z) je = Z[pe], pe in _e ? (be.transform || (be.transform = {}), be.transform[pe] = je) : (w.test(pe) && (pe = r(pe)), pe in B ? be[pe] = je : (Xe || (Xe = {}), Xe[pe] = je));
                        for (pe in be) {
                            if (je = be[pe], De = this.props[pe], !De) {
                                if (!an) continue;
                                De = v.call(this, pe)
                            }
                            fe.call(this, De, je)
                        }
                        Ie && Xe && Ie.call(this, Xe)
                    }

                    function Pe(Z) {
                        Z.stop()
                    }

                    function Tr(Z, fe) {
                        Z.set(fe)
                    }

                    function om(Z) {
                        this.$el.css(Z)
                    }

                    function ke(Z, fe) {
                        l[Z] = function() {
                            return this.children ? am.call(this, fe, arguments) : (this.el && fe.apply(this, arguments), this)
                        }
                    }

                    function am(Z, fe) {
                        var Ie, pe = this.children.length;
                        for (Ie = 0; pe > Ie; Ie++) Z.apply(this.children[Ie], fe);
                        return this
                    }
                    l.init = function(Z) {
                        if (this.$el = e(Z), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, de.keepInherited && !de.fallback) {
                            var fe = V(this.el, "transition");
                            fe && !Y.test(fe) && (this.upstream = fe)
                        }
                        X.backface && de.hideBackface && d(this.el, X.backface.css, "hidden")
                    }, ke("add", v), ke("start", y), ke("wait", T), ke("then", _), ke("next", O), ke("stop", z), ke("set", re), ke("show", he), ke("hide", W), ke("redraw", se), ke("destroy", le)
                }),
                U = p(k, function(l) {
                    function v(y, T) {
                        var _ = e.data(y, x) || e.data(y, x, new k.Bare);
                        return _.el || _.init(y), T ? _.start(T) : _
                    }
                    l.init = function(y, T) {
                        var _ = e(y);
                        if (!_.length) return this;
                        if (_.length === 1) return v(_[0], T);
                        var O = [];
                        return _.each(function(z, re) {
                            O.push(v(re, T))
                        }), this.children = O, this
                    }
                }),
                F = p(function(l) {
                    function v() {
                        var O = this.get();
                        this.update("auto");
                        var z = this.get();
                        return this.update(O), z
                    }

                    function y(O, z, re) {
                        return z !== void 0 && (re = z), O in h ? O : re
                    }

                    function T(O) {
                        var z = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(O);
                        return (z ? i(z[1], z[2], z[3]) : O).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var _ = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    l.init = function(O, z, re, he) {
                        this.$el = O, this.el = O[0];
                        var W = z[0];
                        re[2] && (W = re[2]), K[W] && (W = K[W]), this.name = W, this.type = re[1], this.duration = c(z[1], this.duration, _.duration), this.ease = y(z[2], this.ease, _.ease), this.delay = c(z[3], this.delay, _.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = ie.test(this.name), this.unit = he.unit || this.unit || de.defaultUnit, this.angle = he.angle || this.angle || de.defaultAngle, de.fallback || he.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + ee + this.duration + "ms" + (this.ease != "ease" ? ee + h[this.ease][0] : "") + (this.delay ? ee + this.delay + "ms" : ""))
                    }, l.set = function(O) {
                        O = this.convert(O, this.type), this.update(O), this.redraw()
                    }, l.transition = function(O) {
                        this.active = !0, O = this.convert(O, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), O == "auto" && (O = v.call(this))), this.nextStyle = O
                    }, l.fallback = function(O) {
                        var z = this.el.style[this.name] || this.convert(this.get(), this.type);
                        O = this.convert(O, this.type), this.auto && (z == "auto" && (z = this.convert(this.get(), this.type)), O == "auto" && (O = v.call(this))), this.tween = new J({
                            from: z,
                            to: O,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, l.get = function() {
                        return V(this.el, this.name)
                    }, l.update = function(O) {
                        d(this.el, this.name, O)
                    }, l.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, d(this.el, this.name, this.get()));
                        var O = this.tween;
                        O && O.context && O.destroy()
                    }, l.convert = function(O, z) {
                        if (O == "auto" && this.auto) return O;
                        var re, he = typeof O == "number",
                            W = typeof O == "string";
                        switch (z) {
                            case I:
                                if (he) return O;
                                if (W && O.replace(A, "") === "") return +O;
                                re = "number(unitless)";
                                break;
                            case N:
                                if (W) {
                                    if (O === "" && this.original) return this.original;
                                    if (z.test(O)) return O.charAt(0) == "#" && O.length == 7 ? O : T(O)
                                }
                                re = "hex or rgb string";
                                break;
                            case C:
                                if (he) return O + this.unit;
                                if (W && z.test(O)) return O;
                                re = "number(px) or string(unit)";
                                break;
                            case q:
                                if (he) return O + this.unit;
                                if (W && z.test(O)) return O;
                                re = "number(px) or string(unit or %)";
                                break;
                            case G:
                                if (he) return O + this.angle;
                                if (W && z.test(O)) return O;
                                re = "number(deg) or string(angle)";
                                break;
                            case j:
                                if (he || W && q.test(O)) return O;
                                re = "number(unitless) or string(unit or %)"
                        }
                        return a(re, O), O
                    }, l.redraw = function() {
                        this.el.offsetHeight
                    }
                }),
                Q = p(F, function(l, v) {
                    l.init = function() {
                        v.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), N))
                    }
                }),
                ue = p(F, function(l, v) {
                    l.init = function() {
                        v.init.apply(this, arguments), this.animate = this.fallback
                    }, l.get = function() {
                        return this.$el[this.name]()
                    }, l.update = function(y) {
                        this.$el[this.name](y)
                    }
                }),
                ce = p(F, function(l, v) {
                    function y(T, _) {
                        var O, z, re, he, W;
                        for (O in T) he = _e[O], re = he[0], z = he[1] || O, W = this.convert(T[O], re), _.call(this, z, W, re)
                    }
                    l.init = function() {
                        v.init.apply(this, arguments), this.current || (this.current = {}, _e.perspective && de.perspective && (this.current.perspective = de.perspective, d(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, l.set = function(T) {
                        y.call(this, T, function(_, O) {
                            this.current[_] = O
                        }), d(this.el, this.name, this.style(this.current)), this.redraw()
                    }, l.transition = function(T) {
                        var _ = this.values(T);
                        this.tween = new pt({
                            current: this.current,
                            values: _,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var O, z = {};
                        for (O in this.current) z[O] = O in _ ? _[O] : this.current[O];
                        this.active = !0, this.nextStyle = this.style(z)
                    }, l.fallback = function(T) {
                        var _ = this.values(T);
                        this.tween = new pt({
                            current: this.current,
                            values: _,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, l.update = function() {
                        d(this.el, this.name, this.style(this.current))
                    }, l.style = function(T) {
                        var _, O = "";
                        for (_ in T) O += _ + "(" + T[_] + ") ";
                        return O
                    }, l.values = function(T) {
                        var _, O = {};
                        return y.call(this, T, function(z, re, he) {
                            O[z] = re, this.current[z] === void 0 && (_ = 0, ~z.indexOf("scale") && (_ = 1), this.current[z] = this.convert(_, he))
                        }), O
                    }
                }),
                J = p(function(l) {
                    function v(W) {
                        re.push(W) === 1 && L(y)
                    }

                    function y() {
                        var W, se, le, Se = re.length;
                        if (Se)
                            for (L(y), se = H(), W = Se; W--;) le = re[W], le && le.render(se)
                    }

                    function T(W) {
                        var se, le = e.inArray(W, re);
                        le >= 0 && (se = re.slice(le + 1), re.length = le, se.length && (re = re.concat(se)))
                    }

                    function _(W) {
                        return Math.round(W * he) / he
                    }

                    function O(W, se, le) {
                        return i(W[0] + le * (se[0] - W[0]), W[1] + le * (se[1] - W[1]), W[2] + le * (se[2] - W[2]))
                    }
                    var z = {
                        ease: h.ease[1],
                        from: 0,
                        to: 1
                    };
                    l.init = function(W) {
                        this.duration = W.duration || 0, this.delay = W.delay || 0;
                        var se = W.ease || z.ease;
                        h[se] && (se = h[se][1]), typeof se != "function" && (se = z.ease), this.ease = se, this.update = W.update || o, this.complete = W.complete || o, this.context = W.context || this, this.name = W.name;
                        var le = W.from,
                            Se = W.to;
                        le === void 0 && (le = z.from), Se === void 0 && (Se = z.to), this.unit = W.unit || "", typeof le == "number" && typeof Se == "number" ? (this.begin = le, this.change = Se - le) : this.format(Se, le), this.value = this.begin + this.unit, this.start = H(), W.autoplay !== !1 && this.play()
                    }, l.play = function() {
                        this.active || (this.start || (this.start = H()), this.active = !0, v(this))
                    }, l.stop = function() {
                        this.active && (this.active = !1, T(this))
                    }, l.render = function(W) {
                        var se, le = W - this.start;
                        if (this.delay) {
                            if (le <= this.delay) return;
                            le -= this.delay
                        }
                        if (le < this.duration) {
                            var Se = this.ease(le, 0, 1, this.duration);
                            return se = this.startRGB ? O(this.startRGB, this.endRGB, Se) : _(this.begin + Se * this.change), this.value = se + this.unit, void this.update.call(this.context, this.value)
                        }
                        se = this.endHex || this.begin + this.change, this.value = se + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, l.format = function(W, se) {
                        if (se += "", W += "", W.charAt(0) == "#") return this.startRGB = n(se), this.endRGB = n(W), this.endHex = W, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var le = se.replace(A, ""),
                                Se = W.replace(A, "");
                            le !== Se && s("tween", se, W), this.unit = le
                        }
                        se = parseFloat(se), W = parseFloat(W), this.begin = this.value = se, this.change = W - se
                    }, l.destroy = function() {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = o
                    };
                    var re = [],
                        he = 1e3
                }),
                Ee = p(J, function(l) {
                    l.init = function(v) {
                        this.duration = v.duration || 0, this.complete = v.complete || o, this.context = v.context, this.play()
                    }, l.render = function(v) {
                        var y = v - this.start;
                        y < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                pt = p(J, function(l, v) {
                    l.init = function(y) {
                        this.context = y.context, this.update = y.update, this.tweens = [], this.current = y.current;
                        var T, _;
                        for (T in y.values) _ = y.values[T], this.current[T] !== _ && this.tweens.push(new J({
                            name: T,
                            from: this.current[T],
                            to: _,
                            duration: y.duration,
                            delay: y.delay,
                            ease: y.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, l.render = function(y) {
                        var T, _, O = this.tweens.length,
                            z = !1;
                        for (T = O; T--;) _ = this.tweens[T], _.context && (_.render(y), this.current[_.name] = _.value, z = !0);
                        return z ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, l.destroy = function() {
                        if (v.destroy.call(this), this.tweens) {
                            var y, T = this.tweens.length;
                            for (y = T; y--;) this.tweens[y].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                de = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !X.transition,
                    agentTests: []
                };
            t.fallback = function(l) {
                if (!X.transition) return de.fallback = !0;
                de.agentTests.push("(" + l + ")");
                var v = new RegExp(de.agentTests.join("|"), "i");
                de.fallback = v.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function(l) {
                return new J(l)
            }, t.delay = function(l, v, y) {
                return new Ee({
                    complete: v,
                    duration: l,
                    context: y
                })
            }, e.fn.tram = function(l) {
                return t.call(null, this, l)
            };
            var d = e.style,
                V = e.css,
                K = {
                    transform: X.transform && X.transform.css
                },
                B = {
                    color: [Q, N],
                    background: [Q, N, "background-color"],
                    "outline-color": [Q, N],
                    "border-color": [Q, N],
                    "border-top-color": [Q, N],
                    "border-right-color": [Q, N],
                    "border-bottom-color": [Q, N],
                    "border-left-color": [Q, N],
                    "border-width": [F, C],
                    "border-top-width": [F, C],
                    "border-right-width": [F, C],
                    "border-bottom-width": [F, C],
                    "border-left-width": [F, C],
                    "border-spacing": [F, C],
                    "letter-spacing": [F, C],
                    margin: [F, C],
                    "margin-top": [F, C],
                    "margin-right": [F, C],
                    "margin-bottom": [F, C],
                    "margin-left": [F, C],
                    padding: [F, C],
                    "padding-top": [F, C],
                    "padding-right": [F, C],
                    "padding-bottom": [F, C],
                    "padding-left": [F, C],
                    "outline-width": [F, C],
                    opacity: [F, I],
                    top: [F, q],
                    right: [F, q],
                    bottom: [F, q],
                    left: [F, q],
                    "font-size": [F, q],
                    "text-indent": [F, q],
                    "word-spacing": [F, q],
                    width: [F, q],
                    "min-width": [F, q],
                    "max-width": [F, q],
                    height: [F, q],
                    "min-height": [F, q],
                    "max-height": [F, q],
                    "line-height": [F, j],
                    "scroll-top": [ue, I, "scrollTop"],
                    "scroll-left": [ue, I, "scrollLeft"]
                },
                _e = {};
            X.transform && (B.transform = [ce], _e = {
                x: [q, "translateX"],
                y: [q, "translateY"],
                rotate: [G],
                rotateX: [G],
                rotateY: [G],
                scale: [I],
                scaleX: [I],
                scaleY: [I],
                skew: [G],
                skewX: [G],
                skewY: [G]
            }), X.transform && X.backface && (_e.z = [q, "translateZ"], _e.rotateZ = [G], _e.scaleZ = [I], _e.perspective = [C]);
            var qt = /ms/,
                vt = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var ys = u((rW, _s) => {
        var um = window.$,
            cm = Pi() && um.tram;
        _s.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                n = Object.prototype,
                i = Function.prototype,
                o = r.push,
                a = r.slice,
                s = r.concat,
                c = n.toString,
                f = n.hasOwnProperty,
                E = r.forEach,
                p = r.map,
                h = r.reduce,
                g = r.reduceRight,
                S = r.filter,
                b = r.every,
                x = r.some,
                A = r.indexOf,
                w = r.lastIndexOf,
                I = Array.isArray,
                N = Object.keys,
                C = i.bind,
                q = e.each = e.forEach = function(m, P, M) {
                    if (m == null) return m;
                    if (E && m.forEach === E) m.forEach(P, M);
                    else if (m.length === +m.length) {
                        for (var X = 0, $ = m.length; X < $; X++)
                            if (P.call(M, m[X], X, m) === t) return
                    } else
                        for (var te = e.keys(m), X = 0, $ = te.length; X < $; X++)
                            if (P.call(M, m[te[X]], te[X], m) === t) return;
                    return m
                };
            e.map = e.collect = function(m, P, M) {
                var X = [];
                return m == null ? X : p && m.map === p ? m.map(P, M) : (q(m, function($, te, L) {
                    X.push(P.call(M, $, te, L))
                }), X)
            }, e.find = e.detect = function(m, P, M) {
                var X;
                return G(m, function($, te, L) {
                    if (P.call(M, $, te, L)) return X = $, !0
                }), X
            }, e.filter = e.select = function(m, P, M) {
                var X = [];
                return m == null ? X : S && m.filter === S ? m.filter(P, M) : (q(m, function($, te, L) {
                    P.call(M, $, te, L) && X.push($)
                }), X)
            };
            var G = e.some = e.any = function(m, P, M) {
                P || (P = e.identity);
                var X = !1;
                return m == null ? X : x && m.some === x ? m.some(P, M) : (q(m, function($, te, L) {
                    if (X || (X = P.call(M, $, te, L))) return t
                }), !!X)
            };
            e.contains = e.include = function(m, P) {
                return m == null ? !1 : A && m.indexOf === A ? m.indexOf(P) != -1 : G(m, function(M) {
                    return M === P
                })
            }, e.delay = function(m, P) {
                var M = a.call(arguments, 2);
                return setTimeout(function() {
                    return m.apply(null, M)
                }, P)
            }, e.defer = function(m) {
                return e.delay.apply(e, [m, 1].concat(a.call(arguments, 1)))
            }, e.throttle = function(m) {
                var P, M, X;
                return function() {
                    P || (P = !0, M = arguments, X = this, cm.frame(function() {
                        P = !1, m.apply(X, M)
                    }))
                }
            }, e.debounce = function(m, P, M) {
                var X, $, te, L, H, k = function() {
                    var U = e.now() - L;
                    U < P ? X = setTimeout(k, P - U) : (X = null, M || (H = m.apply(te, $), te = $ = null))
                };
                return function() {
                    te = this, $ = arguments, L = e.now();
                    var U = M && !X;
                    return X || (X = setTimeout(k, P)), U && (H = m.apply(te, $), te = $ = null), H
                }
            }, e.defaults = function(m) {
                if (!e.isObject(m)) return m;
                for (var P = 1, M = arguments.length; P < M; P++) {
                    var X = arguments[P];
                    for (var $ in X) m[$] === void 0 && (m[$] = X[$])
                }
                return m
            }, e.keys = function(m) {
                if (!e.isObject(m)) return [];
                if (N) return N(m);
                var P = [];
                for (var M in m) e.has(m, M) && P.push(M);
                return P
            }, e.has = function(m, P) {
                return f.call(m, P)
            }, e.isObject = function(m) {
                return m === Object(m)
            }, e.now = Date.now || function() {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var j = /(.)^/,
                Y = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                ie = /\\|'|\r|\n|\u2028|\u2029/g,
                ee = function(m) {
                    return "\\" + Y[m]
                },
                D = /^\s*(\w|\$)+\s*$/;
            return e.template = function(m, P, M) {
                !P && M && (P = M), P = e.defaults({}, P, e.templateSettings);
                var X = RegExp([(P.escape || j).source, (P.interpolate || j).source, (P.evaluate || j).source].join("|") + "|$", "g"),
                    $ = 0,
                    te = "__p+='";
                m.replace(X, function(U, F, Q, ue, ce) {
                    return te += m.slice($, ce).replace(ie, ee), $ = ce + U.length, F ? te += `'+
((__t=(` + F + `))==null?'':_.escape(__t))+
'` : Q ? te += `'+
((__t=(` + Q + `))==null?'':__t)+
'` : ue && (te += `';
` + ue + `
__p+='`), U
                }), te += `';
`;
                var L = P.variable;
                if (L) {
                    if (!D.test(L)) throw new Error("variable is not a bare identifier: " + L)
                } else te = `with(obj||{}){
` + te + `}
`, L = "obj";
                te = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + te + `return __p;
`;
                var H;
                try {
                    H = new Function(P.variable || "obj", "_", te)
                } catch (U) {
                    throw U.source = te, U
                }
                var k = function(U) {
                    return H.call(this, U, e)
                };
                return k.source = "function(" + L + `){
` + te + "}", k
            }, e
        }()
    });
    var Ye = u((nW, ws) => {
        var ve = {},
            kt = {},
            jt = [],
            Mi = window.Webflow || [],
            mt = window.jQuery,
            ze = mt(window),
            lm = mt(document),
            nt = mt.isFunction,
            Ke = ve._ = ys(),
            Is = ve.tram = Pi() && mt.tram,
            un = !1,
            Fi = !1;
        Is.config.hideBackface = !1;
        Is.config.keepInherited = !0;
        ve.define = function(e, t, r) {
            kt[e] && Os(kt[e]);
            var n = kt[e] = t(mt, Ke, r) || {};
            return Ts(n), n
        };
        ve.require = function(e) {
            return kt[e]
        };

        function Ts(e) {
            ve.env() && (nt(e.design) && ze.on("__wf_design", e.design), nt(e.preview) && ze.on("__wf_preview", e.preview)), nt(e.destroy) && ze.on("__wf_destroy", e.destroy), e.ready && nt(e.ready) && fm(e)
        }

        function fm(e) {
            if (un) {
                e.ready();
                return
            }
            Ke.contains(jt, e.ready) || jt.push(e.ready)
        }

        function Os(e) {
            nt(e.design) && ze.off("__wf_design", e.design), nt(e.preview) && ze.off("__wf_preview", e.preview), nt(e.destroy) && ze.off("__wf_destroy", e.destroy), e.ready && nt(e.ready) && dm(e)
        }

        function dm(e) {
            jt = Ke.filter(jt, function(t) {
                return t !== e.ready
            })
        }
        ve.push = function(e) {
            if (un) {
                nt(e) && e();
                return
            }
            Mi.push(e)
        };
        ve.env = function(e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var sn = navigator.userAgent.toLowerCase(),
            Ss = ve.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            pm = ve.env.chrome = /chrome/.test(sn) && /Google/.test(navigator.vendor) && parseInt(sn.match(/chrome\/(\d+)\./)[1], 10),
            vm = ve.env.ios = /(ipod|iphone|ipad)/.test(sn);
        ve.env.safari = /safari/.test(sn) && !pm && !vm;
        var Di;
        Ss && lm.on("touchstart mousedown", function(e) {
            Di = e.target
        });
        ve.validClick = Ss ? function(e) {
            return e === Di || mt.contains(e, Di)
        } : function() {
            return !0
        };
        var bs = "resize.webflow orientationchange.webflow load.webflow",
            Em = "scroll.webflow " + bs;
        ve.resize = Gi(ze, bs);
        ve.scroll = Gi(ze, Em);
        ve.redraw = Gi();

        function Gi(e, t) {
            var r = [],
                n = {};
            return n.up = Ke.throttle(function(i) {
                Ke.each(r, function(o) {
                    o(i)
                })
            }), e && t && e.on(t, n.up), n.on = function(i) {
                typeof i == "function" && (Ke.contains(r, i) || r.push(i))
            }, n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = Ke.filter(r, function(o) {
                    return o !== i
                })
            }, n
        }
        ve.location = function(e) {
            window.location = e
        };
        ve.env() && (ve.location = function() {});
        ve.ready = function() {
            un = !0, Fi ? hm() : Ke.each(jt, ms), Ke.each(Mi, ms), ve.resize.up()
        };

        function ms(e) {
            nt(e) && e()
        }

        function hm() {
            Fi = !1, Ke.each(kt, Ts)
        }
        var xt;
        ve.load = function(e) {
            xt.then(e)
        };

        function As() {
            xt && (xt.reject(), ze.off("load", xt.resolve)), xt = new mt.Deferred, ze.on("load", xt.resolve)
        }
        ve.destroy = function(e) {
            e = e || {}, Fi = !0, ze.triggerHandler("__wf_destroy"), e.domready != null && (un = e.domready), Ke.each(kt, Os), ve.resize.off(), ve.scroll.off(), ve.redraw.off(), jt = [], Mi = [], xt.state() === "pending" && As()
        };
        mt(ve.ready);
        As();
        ws.exports = window.Webflow = ve
    });
    var Ns = u((iW, Cs) => {
        var Rs = Ye();
        Rs.define("brand", Cs.exports = function(e) {
            var t = {},
                r = document,
                n = e("html"),
                i = e("body"),
                o = ".w-webflow-badge",
                a = window.location,
                s = /PhantomJS/i.test(navigator.userAgent),
                c = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                f;
            t.ready = function() {
                var g = n.attr("data-wf-status"),
                    S = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(S) && a.hostname !== S && (g = !0), g && !s && (f = f || p(), h(), setTimeout(h, 500), e(r).off(c, E).on(c, E))
            };

            function E() {
                var g = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(f).attr("style", g ? "display: none !important;" : "")
            }



            function h() {
                var g = i.children(o),
                    S = g.length && g.get(0) === f,
                    b = Rs.env("editor");
                if (S) {
                    b && g.remove();
                    return
                }
                g.length && g.remove(), b || i.append(f)
            }
            return t
        })
    });
    var xs = u((oW, qs) => {
        var Xi = Ye();
        Xi.define("edit", qs.exports = function(e, t, r) {
            if (r = r || {}, (Xi.env("test") || Xi.env("frame")) && !r.fixture && !gm()) return {
                exit: 1
            };
            var n = {},
                i = e(window),
                o = e(document.documentElement),
                a = document.location,
                s = "hashchange",
                c, f = r.load || h,
                E = !1;
            try {
                E = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            E ? f() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && f() : i.on(s, p).triggerHandler(s);

            function p() {
                c || /\?edit/.test(a.hash) && f()
            }

            function h() {
                c = !0, window.WebflowEditor = !0, i.off(s, p), w(function(N) {
                    e.ajax({
                        url: A("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: g(N)
                    })
                })
            }

            function g(N) {
                return function(C) {
                    if (!C) {
                        console.error("Could not load editor data");
                        return
                    }
                    C.thirdPartyCookiesSupported = N, S(x(C.bugReporterScriptPath), function() {
                        S(x(C.scriptPath), function() {
                            window.WebflowEditor(C)
                        })
                    })
                }
            }

            function S(N, C) {
                e.ajax({
                    type: "GET",
                    url: N,
                    dataType: "script",
                    cache: !0
                }).then(C, b)
            }

            function b(N, C, q) {
                throw console.error("Could not load editor script: " + C), q
            }

            function x(N) {
                return N.indexOf("//") >= 0 ? N : A("https://editor-api.webflow.com" + N)
            }

            function A(N) {
                return N.replace(/([^:])\/\//g, "$1/")
            }

            function w(N) {
                var C = window.document.createElement("iframe");
                C.src = "https://webflow.com/site/third-party-cookie-check.html", C.style.display = "none", C.sandbox = "allow-scripts allow-same-origin";
                var q = function(G) {
                    G.data === "WF_third_party_cookies_unsupported" ? (I(C, q), N(!1)) : G.data === "WF_third_party_cookies_supported" && (I(C, q), N(!0))
                };
                C.onerror = function() {
                    I(C, q), N(!1)
                }, window.addEventListener("message", q, !1), window.document.body.appendChild(C)
            }

            function I(N, C) {
                window.removeEventListener("message", C, !1), N.remove()
            }
            return n
        });

        function gm() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var Ps = u((aW, Ls) => {
        var _m = Ye();
        _m.define("focus-visible", Ls.exports = function() {
            function e(r) {
                var n = !0,
                    i = !1,
                    o = null,
                    a = {
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

                function s(I) {
                    return !!(I && I !== document && I.nodeName !== "HTML" && I.nodeName !== "BODY" && "classList" in I && "contains" in I.classList)
                }

                function c(I) {
                    var N = I.type,
                        C = I.tagName;
                    return !!(C === "INPUT" && a[N] && !I.readOnly || C === "TEXTAREA" && !I.readOnly || I.isContentEditable)
                }

                function f(I) {
                    I.getAttribute("data-wf-focus-visible") || I.setAttribute("data-wf-focus-visible", "true")
                }

                function E(I) {
                    I.getAttribute("data-wf-focus-visible") && I.removeAttribute("data-wf-focus-visible")
                }

                function p(I) {
                    I.metaKey || I.altKey || I.ctrlKey || (s(r.activeElement) && f(r.activeElement), n = !0)
                }

                function h() {
                    n = !1
                }

                function g(I) {
                    s(I.target) && (n || c(I.target)) && f(I.target)
                }

                function S(I) {
                    s(I.target) && I.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
                        i = !1
                    }, 100), E(I.target))
                }

                function b() {
                    document.visibilityState === "hidden" && (i && (n = !0), x())
                }

                function x() {
                    document.addEventListener("mousemove", w), document.addEventListener("mousedown", w), document.addEventListener("mouseup", w), document.addEventListener("pointermove", w), document.addEventListener("pointerdown", w), document.addEventListener("pointerup", w), document.addEventListener("touchmove", w), document.addEventListener("touchstart", w), document.addEventListener("touchend", w)
                }

                function A() {
                    document.removeEventListener("mousemove", w), document.removeEventListener("mousedown", w), document.removeEventListener("mouseup", w), document.removeEventListener("pointermove", w), document.removeEventListener("pointerdown", w), document.removeEventListener("pointerup", w), document.removeEventListener("touchmove", w), document.removeEventListener("touchstart", w), document.removeEventListener("touchend", w)
                }

                function w(I) {
                    I.target.nodeName && I.target.nodeName.toLowerCase() === "html" || (n = !1, A())
                }
                document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", h, !0), document.addEventListener("pointerdown", h, !0), document.addEventListener("touchstart", h, !0), document.addEventListener("visibilitychange", b, !0), x(), r.addEventListener("focus", g, !0), r.addEventListener("blur", S, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var Fs = u((sW, Ms) => {
        var Ds = Ye();
        Ds.define("focus", Ms.exports = function() {
            var e = [],
                t = !1;

            function r(a) {
                t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
            }

            function n(a) {
                var s = a.target,
                    c = s.tagName;
                return /^a$/i.test(c) && s.href != null || /^(button|textarea)$/i.test(c) && s.disabled !== !0 || /^input$/i.test(c) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(c) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(c) || /^video$/i.test(c) && s.controls === !0
            }

            function i(a) {
                n(a) && (t = !0, setTimeout(() => {
                    for (t = !1, a.target.focus(); e.length > 0;) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type, s))
                    }
                }, 0))
            }

            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Ds.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        })
    });
    var Us = u((uW, Xs) => {
        "use strict";
        var Ui = window.jQuery,
            it = {},
            cn = [],
            Gs = ".w-ix",
            ln = {
                reset: function(e, t) {
                    t.__wf_intro = null
                },
                intro: function(e, t) {
                    t.__wf_intro || (t.__wf_intro = !0, Ui(t).triggerHandler(it.types.INTRO))
                },
                outro: function(e, t) {
                    t.__wf_intro && (t.__wf_intro = null, Ui(t).triggerHandler(it.types.OUTRO))
                }
            };
        it.triggers = {};
        it.types = {
            INTRO: "w-ix-intro" + Gs,
            OUTRO: "w-ix-outro" + Gs
        };
        it.init = function() {
            for (var e = cn.length, t = 0; t < e; t++) {
                var r = cn[t];
                r[0](0, r[1])
            }
            cn = [], Ui.extend(it.triggers, ln)
        };
        it.async = function() {
            for (var e in ln) {
                var t = ln[e];
                ln.hasOwnProperty(e) && (it.triggers[e] = function(r, n) {
                    cn.push([t, n])
                })
            }
        };
        it.async();
        Xs.exports = it
    });
    var Wi = u((cW, Bs) => {
        "use strict";
        var Vi = Us();

        function Vs(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
        }
        var ym = window.jQuery,
            fn = {},
            Ws = ".w-ix",
            mm = {
                reset: function(e, t) {
                    Vi.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    Vi.triggers.intro(e, t), Vs(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    Vi.triggers.outro(e, t), Vs(t, "COMPONENT_INACTIVE")
                }
            };
        fn.triggers = {};
        fn.types = {
            INTRO: "w-ix-intro" + Ws,
            OUTRO: "w-ix-outro" + Ws
        };
        ym.extend(fn.triggers, mm);
        Bs.exports = fn
    });
    var Hs = u((lW, Et) => {
        function Bi(e) {
            return Et.exports = Bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            } : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, Et.exports.__esModule = !0, Et.exports.default = Et.exports, Bi(e)
        }
        Et.exports = Bi, Et.exports.__esModule = !0, Et.exports.default = Et.exports
    });
    var Kt = u((fW, Or) => {
        var Im = Hs().default;

        function ks(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (ks = function(i) {
                return i ? r : t
            })(e)
        }

        function Tm(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || Im(e) !== "object" && typeof e != "function") return {
                default: e
            };
            var r = ks(t);
            if (r && r.has(e)) return r.get(e);
            var n = {},
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e, r && r.set(e, n), n
        }
        Or.exports = Tm, Or.exports.__esModule = !0, Or.exports.default = Or.exports
    });
    var ot = u((dW, Sr) => {
        function Om(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Sr.exports = Om, Sr.exports.__esModule = !0, Sr.exports.default = Sr.exports
    });
    var me = u((pW, js) => {
        var dn = function(e) {
            return e && e.Math == Math && e
        };
        js.exports = dn(typeof globalThis == "object" && globalThis) || dn(typeof window == "object" && window) || dn(typeof self == "object" && self) || dn(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    });
    var zt = u((vW, Ks) => {
        Ks.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    });
    var Lt = u((EW, zs) => {
        var Sm = zt();
        zs.exports = !Sm(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    });
    var pn = u((hW, Ys) => {
        var br = Function.prototype.call;
        Ys.exports = br.bind ? br.bind(br) : function() {
            return br.apply(br, arguments)
        }
    });
    var Js = u(Zs => {
        "use strict";
        var $s = {}.propertyIsEnumerable,
            Qs = Object.getOwnPropertyDescriptor,
            bm = Qs && !$s.call({
                1: 2
            }, 1);
        Zs.f = bm ? function(t) {
            var r = Qs(this, t);
            return !!r && r.enumerable
        } : $s
    });
    var Hi = u((_W, eu) => {
        eu.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    });
    var $e = u((yW, ru) => {
        var tu = Function.prototype,
            ki = tu.bind,
            ji = tu.call,
            Am = ki && ki.bind(ji);
        ru.exports = ki ? function(e) {
            return e && Am(ji, e)
        } : function(e) {
            return e && function() {
                return ji.apply(e, arguments)
            }
        }
    });
    var ou = u((mW, iu) => {
        var nu = $e(),
            wm = nu({}.toString),
            Rm = nu("".slice);
        iu.exports = function(e) {
            return Rm(wm(e), 8, -1)
        }
    });
    var su = u((IW, au) => {
        var Cm = me(),
            Nm = $e(),
            qm = zt(),
            xm = ou(),
            Ki = Cm.Object,
            Lm = Nm("".split);
        au.exports = qm(function() {
            return !Ki("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return xm(e) == "String" ? Lm(e, "") : Ki(e)
        } : Ki
    });
    var zi = u((TW, uu) => {
        var Pm = me(),
            Dm = Pm.TypeError;
        uu.exports = function(e) {
            if (e == null) throw Dm("Can't call method on " + e);
            return e
        }
    });
    var Ar = u((OW, cu) => {
        var Mm = su(),
            Fm = zi();
        cu.exports = function(e) {
            return Mm(Fm(e))
        }
    });
    var at = u((SW, lu) => {
        lu.exports = function(e) {
            return typeof e == "function"
        }
    });
    var Yt = u((bW, fu) => {
        var Gm = at();
        fu.exports = function(e) {
            return typeof e == "object" ? e !== null : Gm(e)
        }
    });
    var wr = u((AW, du) => {
        var Yi = me(),
            Xm = at(),
            Um = function(e) {
                return Xm(e) ? e : void 0
            };
        du.exports = function(e, t) {
            return arguments.length < 2 ? Um(Yi[e]) : Yi[e] && Yi[e][t]
        }
    });
    var vu = u((wW, pu) => {
        var Vm = $e();
        pu.exports = Vm({}.isPrototypeOf)
    });
    var hu = u((RW, Eu) => {
        var Wm = wr();
        Eu.exports = Wm("navigator", "userAgent") || ""
    });
    var Ou = u((CW, Tu) => {
        var Iu = me(),
            $i = hu(),
            gu = Iu.process,
            _u = Iu.Deno,
            yu = gu && gu.versions || _u && _u.version,
            mu = yu && yu.v8,
            Qe, vn;
        mu && (Qe = mu.split("."), vn = Qe[0] > 0 && Qe[0] < 4 ? 1 : +(Qe[0] + Qe[1]));
        !vn && $i && (Qe = $i.match(/Edge\/(\d+)/), (!Qe || Qe[1] >= 74) && (Qe = $i.match(/Chrome\/(\d+)/), Qe && (vn = +Qe[1])));
        Tu.exports = vn
    });
    var Qi = u((NW, bu) => {
        var Su = Ou(),
            Bm = zt();
        bu.exports = !!Object.getOwnPropertySymbols && !Bm(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Su && Su < 41
        })
    });
    var Zi = u((qW, Au) => {
        var Hm = Qi();
        Au.exports = Hm && !Symbol.sham && typeof Symbol.iterator == "symbol"
    });
    var Ji = u((xW, wu) => {
        var km = me(),
            jm = wr(),
            Km = at(),
            zm = vu(),
            Ym = Zi(),
            $m = km.Object;
        wu.exports = Ym ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = jm("Symbol");
            return Km(t) && zm(t.prototype, $m(e))
        }
    });
    var Cu = u((LW, Ru) => {
        var Qm = me(),
            Zm = Qm.String;
        Ru.exports = function(e) {
            try {
                return Zm(e)
            } catch {
                return "Object"
            }
        }
    });
    var qu = u((PW, Nu) => {
        var Jm = me(),
            eI = at(),
            tI = Cu(),
            rI = Jm.TypeError;
        Nu.exports = function(e) {
            if (eI(e)) return e;
            throw rI(tI(e) + " is not a function")
        }
    });
    var Lu = u((DW, xu) => {
        var nI = qu();
        xu.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : nI(r)
        }
    });
    var Du = u((MW, Pu) => {
        var iI = me(),
            eo = pn(),
            to = at(),
            ro = Yt(),
            oI = iI.TypeError;
        Pu.exports = function(e, t) {
            var r, n;
            if (t === "string" && to(r = e.toString) && !ro(n = eo(r, e)) || to(r = e.valueOf) && !ro(n = eo(r, e)) || t !== "string" && to(r = e.toString) && !ro(n = eo(r, e))) return n;
            throw oI("Can't convert object to primitive value")
        }
    });
    var Fu = u((FW, Mu) => {
        Mu.exports = !1
    });
    var En = u((GW, Xu) => {
        var Gu = me(),
            aI = Object.defineProperty;
        Xu.exports = function(e, t) {
            try {
                aI(Gu, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                Gu[e] = t
            }
            return t
        }
    });
    var hn = u((XW, Vu) => {
        var sI = me(),
            uI = En(),
            Uu = "__core-js_shared__",
            cI = sI[Uu] || uI(Uu, {});
        Vu.exports = cI
    });
    var no = u((UW, Bu) => {
        var lI = Fu(),
            Wu = hn();
        (Bu.exports = function(e, t) {
            return Wu[e] || (Wu[e] = t !== void 0 ? t : {})
        })("versions", []).push({
            version: "3.19.0",
            mode: lI ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    });
    var ku = u((VW, Hu) => {
        var fI = me(),
            dI = zi(),
            pI = fI.Object;
        Hu.exports = function(e) {
            return pI(dI(e))
        }
    });
    var It = u((WW, ju) => {
        var vI = $e(),
            EI = ku(),
            hI = vI({}.hasOwnProperty);
        ju.exports = Object.hasOwn || function(t, r) {
            return hI(EI(t), r)
        }
    });
    var io = u((BW, Ku) => {
        var gI = $e(),
            _I = 0,
            yI = Math.random(),
            mI = gI(1 .toString);
        Ku.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + mI(++_I + yI, 36)
        }
    });
    var oo = u((HW, Zu) => {
        var II = me(),
            TI = no(),
            zu = It(),
            OI = io(),
            Yu = Qi(),
            Qu = Zi(),
            $t = TI("wks"),
            Pt = II.Symbol,
            $u = Pt && Pt.for,
            SI = Qu ? Pt : Pt && Pt.withoutSetter || OI;
        Zu.exports = function(e) {
            if (!zu($t, e) || !(Yu || typeof $t[e] == "string")) {
                var t = "Symbol." + e;
                Yu && zu(Pt, e) ? $t[e] = Pt[e] : Qu && $u ? $t[e] = $u(t) : $t[e] = SI(t)
            }
            return $t[e]
        }
    });
    var rc = u((kW, tc) => {
        var bI = me(),
            AI = pn(),
            Ju = Yt(),
            ec = Ji(),
            wI = Lu(),
            RI = Du(),
            CI = oo(),
            NI = bI.TypeError,
            qI = CI("toPrimitive");
        tc.exports = function(e, t) {
            if (!Ju(e) || ec(e)) return e;
            var r = wI(e, qI),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = AI(r, e, t), !Ju(n) || ec(n)) return n;
                throw NI("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), RI(e, t)
        }
    });
    var ao = u((jW, nc) => {
        var xI = rc(),
            LI = Ji();
        nc.exports = function(e) {
            var t = xI(e, "string");
            return LI(t) ? t : t + ""
        }
    });
    var uo = u((KW, oc) => {
        var PI = me(),
            ic = Yt(),
            so = PI.document,
            DI = ic(so) && ic(so.createElement);
        oc.exports = function(e) {
            return DI ? so.createElement(e) : {}
        }
    });
    var co = u((zW, ac) => {
        var MI = Lt(),
            FI = zt(),
            GI = uo();
        ac.exports = !MI && !FI(function() {
            return Object.defineProperty(GI("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    });
    var lo = u(uc => {
        var XI = Lt(),
            UI = pn(),
            VI = Js(),
            WI = Hi(),
            BI = Ar(),
            HI = ao(),
            kI = It(),
            jI = co(),
            sc = Object.getOwnPropertyDescriptor;
        uc.f = XI ? sc : function(t, r) {
            if (t = BI(t), r = HI(r), jI) try {
                return sc(t, r)
            } catch {}
            if (kI(t, r)) return WI(!UI(VI.f, t, r), t[r])
        }
    });
    var Rr = u(($W, lc) => {
        var cc = me(),
            KI = Yt(),
            zI = cc.String,
            YI = cc.TypeError;
        lc.exports = function(e) {
            if (KI(e)) return e;
            throw YI(zI(e) + " is not an object")
        }
    });
    var Cr = u(pc => {
        var $I = me(),
            QI = Lt(),
            ZI = co(),
            fc = Rr(),
            JI = ao(),
            eT = $I.TypeError,
            dc = Object.defineProperty;
        pc.f = QI ? dc : function(t, r, n) {
            if (fc(t), r = JI(r), fc(n), ZI) try {
                return dc(t, r, n)
            } catch {}
            if ("get" in n || "set" in n) throw eT("Accessors not supported");
            return "value" in n && (t[r] = n.value), t
        }
    });
    var gn = u((ZW, vc) => {
        var tT = Lt(),
            rT = Cr(),
            nT = Hi();
        vc.exports = tT ? function(e, t, r) {
            return rT.f(e, t, nT(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        }
    });
    var po = u((JW, Ec) => {
        var iT = $e(),
            oT = at(),
            fo = hn(),
            aT = iT(Function.toString);
        oT(fo.inspectSource) || (fo.inspectSource = function(e) {
            return aT(e)
        });
        Ec.exports = fo.inspectSource
    });
    var _c = u((eB, gc) => {
        var sT = me(),
            uT = at(),
            cT = po(),
            hc = sT.WeakMap;
        gc.exports = uT(hc) && /native code/.test(cT(hc))
    });
    var vo = u((tB, mc) => {
        var lT = no(),
            fT = io(),
            yc = lT("keys");
        mc.exports = function(e) {
            return yc[e] || (yc[e] = fT(e))
        }
    });
    var _n = u((rB, Ic) => {
        Ic.exports = {}
    });
    var wc = u((nB, Ac) => {
        var dT = _c(),
            bc = me(),
            Eo = $e(),
            pT = Yt(),
            vT = gn(),
            ho = It(),
            go = hn(),
            ET = vo(),
            hT = _n(),
            Tc = "Object already initialized",
            yo = bc.TypeError,
            gT = bc.WeakMap,
            yn, Nr, mn, _T = function(e) {
                return mn(e) ? Nr(e) : yn(e, {})
            },
            yT = function(e) {
                return function(t) {
                    var r;
                    if (!pT(t) || (r = Nr(t)).type !== e) throw yo("Incompatible receiver, " + e + " required");
                    return r
                }
            };
        dT || go.state ? (Tt = go.state || (go.state = new gT), Oc = Eo(Tt.get), _o = Eo(Tt.has), Sc = Eo(Tt.set), yn = function(e, t) {
            if (_o(Tt, e)) throw new yo(Tc);
            return t.facade = e, Sc(Tt, e, t), t
        }, Nr = function(e) {
            return Oc(Tt, e) || {}
        }, mn = function(e) {
            return _o(Tt, e)
        }) : (Dt = ET("state"), hT[Dt] = !0, yn = function(e, t) {
            if (ho(e, Dt)) throw new yo(Tc);
            return t.facade = e, vT(e, Dt, t), t
        }, Nr = function(e) {
            return ho(e, Dt) ? e[Dt] : {}
        }, mn = function(e) {
            return ho(e, Dt)
        });
        var Tt, Oc, _o, Sc, Dt;
        Ac.exports = {
            set: yn,
            get: Nr,
            has: mn,
            enforce: _T,
            getterFor: yT
        }
    });
    var Nc = u((iB, Cc) => {
        var mo = Lt(),
            mT = It(),
            Rc = Function.prototype,
            IT = mo && Object.getOwnPropertyDescriptor,
            Io = mT(Rc, "name"),
            TT = Io && function() {}.name === "something",
            OT = Io && (!mo || mo && IT(Rc, "name").configurable);
        Cc.exports = {
            EXISTS: Io,
            PROPER: TT,
            CONFIGURABLE: OT
        }
    });
    var Dc = u((oB, Pc) => {
        var ST = me(),
            qc = at(),
            bT = It(),
            xc = gn(),
            AT = En(),
            wT = po(),
            Lc = wc(),
            RT = Nc().CONFIGURABLE,
            CT = Lc.get,
            NT = Lc.enforce,
            qT = String(String).split("String");
        (Pc.exports = function(e, t, r, n) {
            var i = n ? !!n.unsafe : !1,
                o = n ? !!n.enumerable : !1,
                a = n ? !!n.noTargetGet : !1,
                s = n && n.name !== void 0 ? n.name : t,
                c;
            if (qc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!bT(r, "name") || RT && r.name !== s) && xc(r, "name", s), c = NT(r), c.source || (c.source = qT.join(typeof s == "string" ? s : ""))), e === ST) {
                o ? e[t] = r : AT(t, r);
                return
            } else i ? !a && e[t] && (o = !0) : delete e[t];
            o ? e[t] = r : xc(e, t, r)
        })(Function.prototype, "toString", function() {
            return qc(this) && CT(this).source || wT(this)
        })
    });
    var To = u((aB, Mc) => {
        var xT = Math.ceil,
            LT = Math.floor;
        Mc.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? LT : xT)(t)
        }
    });
    var Gc = u((sB, Fc) => {
        var PT = To(),
            DT = Math.max,
            MT = Math.min;
        Fc.exports = function(e, t) {
            var r = PT(e);
            return r < 0 ? DT(r + t, 0) : MT(r, t)
        }
    });
    var Uc = u((uB, Xc) => {
        var FT = To(),
            GT = Math.min;
        Xc.exports = function(e) {
            return e > 0 ? GT(FT(e), 9007199254740991) : 0
        }
    });
    var Wc = u((cB, Vc) => {
        var XT = Uc();
        Vc.exports = function(e) {
            return XT(e.length)
        }
    });
    var Oo = u((lB, Hc) => {
        var UT = Ar(),
            VT = Gc(),
            WT = Wc(),
            Bc = function(e) {
                return function(t, r, n) {
                    var i = UT(t),
                        o = WT(i),
                        a = VT(n, o),
                        s;
                    if (e && r != r) {
                        for (; o > a;)
                            if (s = i[a++], s != s) return !0
                    } else
                        for (; o > a; a++)
                            if ((e || a in i) && i[a] === r) return e || a || 0;
                    return !e && -1
                }
            };
        Hc.exports = {
            includes: Bc(!0),
            indexOf: Bc(!1)
        }
    });
    var bo = u((fB, jc) => {
        var BT = $e(),
            So = It(),
            HT = Ar(),
            kT = Oo().indexOf,
            jT = _n(),
            kc = BT([].push);
        jc.exports = function(e, t) {
            var r = HT(e),
                n = 0,
                i = [],
                o;
            for (o in r) !So(jT, o) && So(r, o) && kc(i, o);
            for (; t.length > n;) So(r, o = t[n++]) && (~kT(i, o) || kc(i, o));
            return i
        }
    });
    var In = u((dB, Kc) => {
        Kc.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    });
    var Yc = u(zc => {
        var KT = bo(),
            zT = In(),
            YT = zT.concat("length", "prototype");
        zc.f = Object.getOwnPropertyNames || function(t) {
            return KT(t, YT)
        }
    });
    var Qc = u($c => {
        $c.f = Object.getOwnPropertySymbols
    });
    var Jc = u((EB, Zc) => {
        var $T = wr(),
            QT = $e(),
            ZT = Yc(),
            JT = Qc(),
            eO = Rr(),
            tO = QT([].concat);
        Zc.exports = $T("Reflect", "ownKeys") || function(t) {
            var r = ZT.f(eO(t)),
                n = JT.f;
            return n ? tO(r, n(t)) : r
        }
    });
    var tl = u((hB, el) => {
        var rO = It(),
            nO = Jc(),
            iO = lo(),
            oO = Cr();
        el.exports = function(e, t) {
            for (var r = nO(t), n = oO.f, i = iO.f, o = 0; o < r.length; o++) {
                var a = r[o];
                rO(e, a) || n(e, a, i(t, a))
            }
        }
    });
    var nl = u((gB, rl) => {
        var aO = zt(),
            sO = at(),
            uO = /#|\.prototype\./,
            qr = function(e, t) {
                var r = lO[cO(e)];
                return r == dO ? !0 : r == fO ? !1 : sO(t) ? aO(t) : !!t
            },
            cO = qr.normalize = function(e) {
                return String(e).replace(uO, ".").toLowerCase()
            },
            lO = qr.data = {},
            fO = qr.NATIVE = "N",
            dO = qr.POLYFILL = "P";
        rl.exports = qr
    });
    var ol = u((_B, il) => {
        var Ao = me(),
            pO = lo().f,
            vO = gn(),
            EO = Dc(),
            hO = En(),
            gO = tl(),
            _O = nl();
        il.exports = function(e, t) {
            var r = e.target,
                n = e.global,
                i = e.stat,
                o, a, s, c, f, E;
            if (n ? a = Ao : i ? a = Ao[r] || hO(r, {}) : a = (Ao[r] || {}).prototype, a)
                for (s in t) {
                    if (f = t[s], e.noTargetGet ? (E = pO(a, s), c = E && E.value) : c = a[s], o = _O(n ? s : r + (i ? "." : "#") + s, e.forced), !o && c !== void 0) {
                        if (typeof f == typeof c) continue;
                        gO(f, c)
                    }(e.sham || c && c.sham) && vO(f, "sham", !0), EO(a, s, f, e)
                }
        }
    });
    var sl = u((yB, al) => {
        var yO = bo(),
            mO = In();
        al.exports = Object.keys || function(t) {
            return yO(t, mO)
        }
    });
    var cl = u((mB, ul) => {
        var IO = Lt(),
            TO = Cr(),
            OO = Rr(),
            SO = Ar(),
            bO = sl();
        ul.exports = IO ? Object.defineProperties : function(t, r) {
            OO(t);
            for (var n = SO(r), i = bO(r), o = i.length, a = 0, s; o > a;) TO.f(t, s = i[a++], n[s]);
            return t
        }
    });
    var fl = u((IB, ll) => {
        var AO = wr();
        ll.exports = AO("document", "documentElement")
    });
    var yl = u((TB, _l) => {
        var wO = Rr(),
            RO = cl(),
            dl = In(),
            CO = _n(),
            NO = fl(),
            qO = uo(),
            xO = vo(),
            pl = ">",
            vl = "<",
            Ro = "prototype",
            Co = "script",
            hl = xO("IE_PROTO"),
            wo = function() {},
            gl = function(e) {
                return vl + Co + pl + e + vl + "/" + Co + pl
            },
            El = function(e) {
                e.write(gl("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            },
            LO = function() {
                var e = qO("iframe"),
                    t = "java" + Co + ":",
                    r;
                return e.style.display = "none", NO.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(gl("document.F=Object")), r.close(), r.F
            },
            Tn, On = function() {
                try {
                    Tn = new ActiveXObject("htmlfile")
                } catch {}
                On = typeof document < "u" ? document.domain && Tn ? El(Tn) : LO() : El(Tn);
                for (var e = dl.length; e--;) delete On[Ro][dl[e]];
                return On()
            };
        CO[hl] = !0;
        _l.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (wo[Ro] = wO(t), n = new wo, wo[Ro] = null, n[hl] = t) : n = On(), r === void 0 ? n : RO(n, r)
        }
    });
    var Il = u((OB, ml) => {
        var PO = oo(),
            DO = yl(),
            MO = Cr(),
            No = PO("unscopables"),
            qo = Array.prototype;
        qo[No] == null && MO.f(qo, No, {
            configurable: !0,
            value: DO(null)
        });
        ml.exports = function(e) {
            qo[No][e] = !0
        }
    });
    var Tl = u(() => {
        "use strict";
        var FO = ol(),
            GO = Oo().includes,
            XO = Il();
        FO({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return GO(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        XO("includes")
    });
    var Sl = u((AB, Ol) => {
        var UO = me(),
            VO = $e();
        Ol.exports = function(e, t) {
            return VO(UO[e].prototype[t])
        }
    });
    var Al = u((wB, bl) => {
        Tl();
        var WO = Sl();
        bl.exports = WO("Array", "includes")
    });
    var Rl = u((RB, wl) => {
        var BO = Al();
        wl.exports = BO
    });
    var Nl = u((CB, Cl) => {
        var HO = Rl();
        Cl.exports = HO
    });
    var xo = u((NB, ql) => {
        var kO = typeof global == "object" && global && global.Object === Object && global;
        ql.exports = kO
    });
    var Ze = u((qB, xl) => {
        var jO = xo(),
            KO = typeof self == "object" && self && self.Object === Object && self,
            zO = jO || KO || Function("return this")();
        xl.exports = zO
    });
    var Qt = u((xB, Ll) => {
        var YO = Ze(),
            $O = YO.Symbol;
        Ll.exports = $O
    });
    var Fl = u((LB, Ml) => {
        var Pl = Qt(),
            Dl = Object.prototype,
            QO = Dl.hasOwnProperty,
            ZO = Dl.toString,
            xr = Pl ? Pl.toStringTag : void 0;

        function JO(e) {
            var t = QO.call(e, xr),
                r = e[xr];
            try {
                e[xr] = void 0;
                var n = !0
            } catch {}
            var i = ZO.call(e);
            return n && (t ? e[xr] = r : delete e[xr]), i
        }
        Ml.exports = JO
    });
    var Xl = u((PB, Gl) => {
        var eS = Object.prototype,
            tS = eS.toString;

        function rS(e) {
            return tS.call(e)
        }
        Gl.exports = rS
    });
    var Ot = u((DB, Wl) => {
        var Ul = Qt(),
            nS = Fl(),
            iS = Xl(),
            oS = "[object Null]",
            aS = "[object Undefined]",
            Vl = Ul ? Ul.toStringTag : void 0;

        function sS(e) {
            return e == null ? e === void 0 ? aS : oS : Vl && Vl in Object(e) ? nS(e) : iS(e)
        }
        Wl.exports = sS
    });
    var Lo = u((MB, Bl) => {
        function uS(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        Bl.exports = uS
    });
    var Po = u((FB, Hl) => {
        var cS = Lo(),
            lS = cS(Object.getPrototypeOf, Object);
        Hl.exports = lS
    });
    var ht = u((GB, kl) => {
        function fS(e) {
            return e != null && typeof e == "object"
        }
        kl.exports = fS
    });
    var Do = u((XB, Kl) => {
        var dS = Ot(),
            pS = Po(),
            vS = ht(),
            ES = "[object Object]",
            hS = Function.prototype,
            gS = Object.prototype,
            jl = hS.toString,
            _S = gS.hasOwnProperty,
            yS = jl.call(Object);

        function mS(e) {
            if (!vS(e) || dS(e) != ES) return !1;
            var t = pS(e);
            if (t === null) return !0;
            var r = _S.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && jl.call(r) == yS
        }
        Kl.exports = mS
    });
    var zl = u(Mo => {
        "use strict";
        Object.defineProperty(Mo, "__esModule", {
            value: !0
        });
        Mo.default = IS;

        function IS(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
        }
    });
    var Yl = u((Go, Fo) => {
        "use strict";
        Object.defineProperty(Go, "__esModule", {
            value: !0
        });
        var TS = zl(),
            OS = SS(TS);

        function SS(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Zt;
        typeof self < "u" ? Zt = self : typeof window < "u" ? Zt = window : typeof global < "u" ? Zt = global : typeof Fo < "u" ? Zt = Fo : Zt = Function("return this")();
        var bS = (0, OS.default)(Zt);
        Go.default = bS
    });
    var Xo = u(Lr => {
        "use strict";
        Lr.__esModule = !0;
        Lr.ActionTypes = void 0;
        Lr.default = Jl;
        var AS = Do(),
            wS = Zl(AS),
            RS = Yl(),
            $l = Zl(RS);

        function Zl(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Ql = Lr.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function Jl(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
                if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
                return r(Jl)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var i = e,
                o = t,
                a = [],
                s = a,
                c = !1;

            function f() {
                s === a && (s = a.slice())
            }

            function E() {
                return o
            }

            function p(b) {
                if (typeof b != "function") throw new Error("Expected listener to be a function.");
                var x = !0;
                return f(), s.push(b),
                    function() {
                        if (x) {
                            x = !1, f();
                            var w = s.indexOf(b);
                            s.splice(w, 1)
                        }
                    }
            }

            function h(b) {
                if (!(0, wS.default)(b)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof b.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (c) throw new Error("Reducers may not dispatch actions.");
                try {
                    c = !0, o = i(o, b)
                } finally {
                    c = !1
                }
                for (var x = a = s, A = 0; A < x.length; A++) x[A]();
                return b
            }

            function g(b) {
                if (typeof b != "function") throw new Error("Expected the nextReducer to be a function.");
                i = b, h({
                    type: Ql.INIT
                })
            }

            function S() {
                var b, x = p;
                return b = {
                    subscribe: function(w) {
                        if (typeof w != "object") throw new TypeError("Expected the observer to be an object.");

                        function I() {
                            w.next && w.next(E())
                        }
                        I();
                        var N = x(I);
                        return {
                            unsubscribe: N
                        }
                    }
                }, b[$l.default] = function() {
                    return this
                }, b
            }
            return h({
                type: Ql.INIT
            }), n = {
                dispatch: h,
                subscribe: p,
                getState: E,
                replaceReducer: g
            }, n[$l.default] = S, n
        }
    });
    var Vo = u(Uo => {
        "use strict";
        Uo.__esModule = !0;
        Uo.default = CS;

        function CS(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    });
    var rf = u(Wo => {
        "use strict";
        Wo.__esModule = !0;
        Wo.default = PS;
        var ef = Xo(),
            NS = Do(),
            BB = tf(NS),
            qS = Vo(),
            HB = tf(qS);

        function tf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function xS(e, t) {
            var r = t && t.type,
                n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function LS(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t],
                    n = r(void 0, {
                        type: ef.ActionTypes.INIT
                    });
                if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                        type: i
                    }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + ef.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function PS(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1) var a;
            var s;
            try {
                LS(r)
            } catch (c) {
                s = c
            }
            return function() {
                var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    E = arguments[1];
                if (s) throw s;
                if (!1) var p;
                for (var h = !1, g = {}, S = 0; S < o.length; S++) {
                    var b = o[S],
                        x = r[b],
                        A = f[b],
                        w = x(A, E);
                    if (typeof w > "u") {
                        var I = xS(b, E);
                        throw new Error(I)
                    }
                    g[b] = w, h = h || w !== A
                }
                return h ? g : f
            }
        }
    });
    var of = u(Bo => {
        "use strict";
        Bo.__esModule = !0;
        Bo.default = DS;

        function nf(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function DS(e, t) {
            if (typeof e == "function") return nf(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i],
                    a = e[o];
                typeof a == "function" && (n[o] = nf(a, t))
            }
            return n
        }
    });
    var ko = u(Ho => {
        "use strict";
        Ho.__esModule = !0;
        Ho.default = MS;

        function MS() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length === 0) return function(o) {
                return o
            };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1],
                i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, a) {
                    return a(o)
                }, n.apply(void 0, arguments))
            }
        }
    });
    var af = u(jo => {
        "use strict";
        jo.__esModule = !0;
        var FS = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        jo.default = VS;
        var GS = ko(),
            XS = US(GS);

        function US(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function VS() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(n) {
                return function(i, o, a) {
                    var s = n(i, o, a),
                        c = s.dispatch,
                        f = [],
                        E = {
                            getState: s.getState,
                            dispatch: function(h) {
                                return c(h)
                            }
                        };
                    return f = t.map(function(p) {
                        return p(E)
                    }), c = XS.default.apply(void 0, f)(s.dispatch), FS({}, s, {
                        dispatch: c
                    })
                }
            }
        }
    });
    var Ko = u(Be => {
        "use strict";
        Be.__esModule = !0;
        Be.compose = Be.applyMiddleware = Be.bindActionCreators = Be.combineReducers = Be.createStore = void 0;
        var WS = Xo(),
            BS = Jt(WS),
            HS = rf(),
            kS = Jt(HS),
            jS = of (),
            KS = Jt(jS),
            zS = af(),
            YS = Jt(zS),
            $S = ko(),
            QS = Jt($S),
            ZS = Vo(),
            YB = Jt(ZS);

        function Jt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Be.createStore = BS.default;
        Be.combineReducers = kS.default;
        Be.bindActionCreators = KS.default;
        Be.applyMiddleware = YS.default;
        Be.compose = QS.default
    });
    var sf = u(Ce => {
        "use strict";
        Object.defineProperty(Ce, "__esModule", {
            value: !0
        });
        Ce.QuickEffectIds = Ce.QuickEffectDirectionConsts = Ce.EventTypeConsts = Ce.EventLimitAffectedElements = Ce.EventContinuousMouseAxes = Ce.EventBasedOn = Ce.EventAppliesTo = void 0;
        var JS = {
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
        };
        Ce.EventTypeConsts = JS;
        var eb = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        };
        Ce.EventAppliesTo = eb;
        var tb = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        };
        Ce.EventBasedOn = tb;
        var rb = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        };
        Ce.EventContinuousMouseAxes = rb;
        var nb = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        };
        Ce.EventLimitAffectedElements = nb;
        var ib = {
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
        };
        Ce.QuickEffectIds = ib;
        var ob = {
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
        };
        Ce.QuickEffectDirectionConsts = ob
    });
    var zo = u(er => {
        "use strict";
        Object.defineProperty(er, "__esModule", {
            value: !0
        });
        er.ActionTypeConsts = er.ActionAppliesTo = void 0;
        var ab = {
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
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        };
        er.ActionTypeConsts = ab;
        var sb = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        };
        er.ActionAppliesTo = sb
    });
    var uf = u(Sn => {
        "use strict";
        Object.defineProperty(Sn, "__esModule", {
            value: !0
        });
        Sn.InteractionTypeConsts = void 0;
        var ub = {
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
        };
        Sn.InteractionTypeConsts = ub
    });
    var cf = u(bn => {
        "use strict";
        Object.defineProperty(bn, "__esModule", {
            value: !0
        });
        bn.ReducedMotionTypes = void 0;
        var cb = zo(),
            {
                TRANSFORM_MOVE: lb,
                TRANSFORM_SCALE: fb,
                TRANSFORM_ROTATE: db,
                TRANSFORM_SKEW: pb,
                STYLE_SIZE: vb,
                STYLE_FILTER: Eb,
                STYLE_FONT_VARIATION: hb
            } = cb.ActionTypeConsts,
            gb = {
                [lb]: !0,
                [fb]: !0,
                [db]: !0,
                [pb]: !0,
                [vb]: !0,
                [Eb]: !0,
                [hb]: !0
            };
        bn.ReducedMotionTypes = gb
    });
    var lf = u(oe => {
        "use strict";
        Object.defineProperty(oe, "__esModule", {
            value: !0
        });
        oe.IX2_VIEWPORT_WIDTH_CHANGED = oe.IX2_TEST_FRAME_RENDERED = oe.IX2_STOP_REQUESTED = oe.IX2_SESSION_STOPPED = oe.IX2_SESSION_STARTED = oe.IX2_SESSION_INITIALIZED = oe.IX2_RAW_DATA_IMPORTED = oe.IX2_PREVIEW_REQUESTED = oe.IX2_PLAYBACK_REQUESTED = oe.IX2_PARAMETER_CHANGED = oe.IX2_MEDIA_QUERIES_DEFINED = oe.IX2_INSTANCE_STARTED = oe.IX2_INSTANCE_REMOVED = oe.IX2_INSTANCE_ADDED = oe.IX2_EVENT_STATE_CHANGED = oe.IX2_EVENT_LISTENER_ADDED = oe.IX2_ELEMENT_STATE_CHANGED = oe.IX2_CLEAR_REQUESTED = oe.IX2_ANIMATION_FRAME_CHANGED = oe.IX2_ACTION_LIST_PLAYBACK_CHANGED = void 0;
        var _b = "IX2_RAW_DATA_IMPORTED";
        oe.IX2_RAW_DATA_IMPORTED = _b;
        var yb = "IX2_SESSION_INITIALIZED";
        oe.IX2_SESSION_INITIALIZED = yb;
        var mb = "IX2_SESSION_STARTED";
        oe.IX2_SESSION_STARTED = mb;
        var Ib = "IX2_SESSION_STOPPED";
        oe.IX2_SESSION_STOPPED = Ib;
        var Tb = "IX2_PREVIEW_REQUESTED";
        oe.IX2_PREVIEW_REQUESTED = Tb;
        var Ob = "IX2_PLAYBACK_REQUESTED";
        oe.IX2_PLAYBACK_REQUESTED = Ob;
        var Sb = "IX2_STOP_REQUESTED";
        oe.IX2_STOP_REQUESTED = Sb;
        var bb = "IX2_CLEAR_REQUESTED";
        oe.IX2_CLEAR_REQUESTED = bb;
        var Ab = "IX2_EVENT_LISTENER_ADDED";
        oe.IX2_EVENT_LISTENER_ADDED = Ab;
        var wb = "IX2_EVENT_STATE_CHANGED";
        oe.IX2_EVENT_STATE_CHANGED = wb;
        var Rb = "IX2_ANIMATION_FRAME_CHANGED";
        oe.IX2_ANIMATION_FRAME_CHANGED = Rb;
        var Cb = "IX2_PARAMETER_CHANGED";
        oe.IX2_PARAMETER_CHANGED = Cb;
        var Nb = "IX2_INSTANCE_ADDED";
        oe.IX2_INSTANCE_ADDED = Nb;
        var qb = "IX2_INSTANCE_STARTED";
        oe.IX2_INSTANCE_STARTED = qb;
        var xb = "IX2_INSTANCE_REMOVED";
        oe.IX2_INSTANCE_REMOVED = xb;
        var Lb = "IX2_ELEMENT_STATE_CHANGED";
        oe.IX2_ELEMENT_STATE_CHANGED = Lb;
        var Pb = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
        oe.IX2_ACTION_LIST_PLAYBACK_CHANGED = Pb;
        var Db = "IX2_VIEWPORT_WIDTH_CHANGED";
        oe.IX2_VIEWPORT_WIDTH_CHANGED = Db;
        var Mb = "IX2_MEDIA_QUERIES_DEFINED";
        oe.IX2_MEDIA_QUERIES_DEFINED = Mb;
        var Fb = "IX2_TEST_FRAME_RENDERED";
        oe.IX2_TEST_FRAME_RENDERED = Fb
    });
    var ff = u(R => {
        "use strict";
        Object.defineProperty(R, "__esModule", {
            value: !0
        });
        R.W_MOD_JS = R.W_MOD_IX = R.WILL_CHANGE = R.WIDTH = R.WF_PAGE = R.TRANSLATE_Z = R.TRANSLATE_Y = R.TRANSLATE_X = R.TRANSLATE_3D = R.TRANSFORM = R.SKEW_Y = R.SKEW_X = R.SKEW = R.SIBLINGS = R.SCALE_Z = R.SCALE_Y = R.SCALE_X = R.SCALE_3D = R.ROTATE_Z = R.ROTATE_Y = R.ROTATE_X = R.RENDER_TRANSFORM = R.RENDER_STYLE = R.RENDER_PLUGIN = R.RENDER_GENERAL = R.PRESERVE_3D = R.PLAIN_OBJECT = R.PARENT = R.OPACITY = R.IX2_ID_DELIMITER = R.IMMEDIATE_CHILDREN = R.HTML_ELEMENT = R.HEIGHT = R.FONT_VARIATION_SETTINGS = R.FLEX = R.FILTER = R.DISPLAY = R.CONFIG_Z_VALUE = R.CONFIG_Z_UNIT = R.CONFIG_Y_VALUE = R.CONFIG_Y_UNIT = R.CONFIG_X_VALUE = R.CONFIG_X_UNIT = R.CONFIG_VALUE = R.CONFIG_UNIT = R.COMMA_DELIMITER = R.COLOR = R.COLON_DELIMITER = R.CHILDREN = R.BOUNDARY_SELECTOR = R.BORDER_COLOR = R.BAR_DELIMITER = R.BACKGROUND_COLOR = R.BACKGROUND = R.AUTO = R.ABSTRACT_NODE = void 0;
        var Gb = "|";
        R.IX2_ID_DELIMITER = Gb;
        var Xb = "data-wf-page";
        R.WF_PAGE = Xb;
        var Ub = "w-mod-js";
        R.W_MOD_JS = Ub;
        var Vb = "w-mod-ix";
        R.W_MOD_IX = Vb;
        var Wb = ".w-dyn-item";
        R.BOUNDARY_SELECTOR = Wb;
        var Bb = "xValue";
        R.CONFIG_X_VALUE = Bb;
        var Hb = "yValue";
        R.CONFIG_Y_VALUE = Hb;
        var kb = "zValue";
        R.CONFIG_Z_VALUE = kb;
        var jb = "value";
        R.CONFIG_VALUE = jb;
        var Kb = "xUnit";
        R.CONFIG_X_UNIT = Kb;
        var zb = "yUnit";
        R.CONFIG_Y_UNIT = zb;
        var Yb = "zUnit";
        R.CONFIG_Z_UNIT = Yb;
        var $b = "unit";
        R.CONFIG_UNIT = $b;
        var Qb = "transform";
        R.TRANSFORM = Qb;
        var Zb = "translateX";
        R.TRANSLATE_X = Zb;
        var Jb = "translateY";
        R.TRANSLATE_Y = Jb;
        var eA = "translateZ";
        R.TRANSLATE_Z = eA;
        var tA = "translate3d";
        R.TRANSLATE_3D = tA;
        var rA = "scaleX";
        R.SCALE_X = rA;
        var nA = "scaleY";
        R.SCALE_Y = nA;
        var iA = "scaleZ";
        R.SCALE_Z = iA;
        var oA = "scale3d";
        R.SCALE_3D = oA;
        var aA = "rotateX";
        R.ROTATE_X = aA;
        var sA = "rotateY";
        R.ROTATE_Y = sA;
        var uA = "rotateZ";
        R.ROTATE_Z = uA;
        var cA = "skew";
        R.SKEW = cA;
        var lA = "skewX";
        R.SKEW_X = lA;
        var fA = "skewY";
        R.SKEW_Y = fA;
        var dA = "opacity";
        R.OPACITY = dA;
        var pA = "filter";
        R.FILTER = pA;
        var vA = "font-variation-settings";
        R.FONT_VARIATION_SETTINGS = vA;
        var EA = "width";
        R.WIDTH = EA;
        var hA = "height";
        R.HEIGHT = hA;
        var gA = "backgroundColor";
        R.BACKGROUND_COLOR = gA;
        var _A = "background";
        R.BACKGROUND = _A;
        var yA = "borderColor";
        R.BORDER_COLOR = yA;
        var mA = "color";
        R.COLOR = mA;
        var IA = "display";
        R.DISPLAY = IA;
        var TA = "flex";
        R.FLEX = TA;
        var OA = "willChange";
        R.WILL_CHANGE = OA;
        var SA = "AUTO";
        R.AUTO = SA;
        var bA = ",";
        R.COMMA_DELIMITER = bA;
        var AA = ":";
        R.COLON_DELIMITER = AA;
        var wA = "|";
        R.BAR_DELIMITER = wA;
        var RA = "CHILDREN";
        R.CHILDREN = RA;
        var CA = "IMMEDIATE_CHILDREN";
        R.IMMEDIATE_CHILDREN = CA;
        var NA = "SIBLINGS";
        R.SIBLINGS = NA;
        var qA = "PARENT";
        R.PARENT = qA;
        var xA = "preserve-3d";
        R.PRESERVE_3D = xA;
        var LA = "HTML_ELEMENT";
        R.HTML_ELEMENT = LA;
        var PA = "PLAIN_OBJECT";
        R.PLAIN_OBJECT = PA;
        var DA = "ABSTRACT_NODE";
        R.ABSTRACT_NODE = DA;
        var MA = "RENDER_TRANSFORM";
        R.RENDER_TRANSFORM = MA;
        var FA = "RENDER_GENERAL";
        R.RENDER_GENERAL = FA;
        var GA = "RENDER_STYLE";
        R.RENDER_STYLE = GA;
        var XA = "RENDER_PLUGIN";
        R.RENDER_PLUGIN = XA
    });
    var Ue = u(Ae => {
        "use strict";
        var df = Kt().default;
        Object.defineProperty(Ae, "__esModule", {
            value: !0
        });
        var An = {
            IX2EngineActionTypes: !0,
            IX2EngineConstants: !0
        };
        Ae.IX2EngineConstants = Ae.IX2EngineActionTypes = void 0;
        var Yo = sf();
        Object.keys(Yo).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(An, e) || e in Ae && Ae[e] === Yo[e] || Object.defineProperty(Ae, e, {
                enumerable: !0,
                get: function() {
                    return Yo[e]
                }
            })
        });
        var $o = zo();
        Object.keys($o).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(An, e) || e in Ae && Ae[e] === $o[e] || Object.defineProperty(Ae, e, {
                enumerable: !0,
                get: function() {
                    return $o[e]
                }
            })
        });
        var Qo = uf();
        Object.keys(Qo).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(An, e) || e in Ae && Ae[e] === Qo[e] || Object.defineProperty(Ae, e, {
                enumerable: !0,
                get: function() {
                    return Qo[e]
                }
            })
        });
        var Zo = cf();
        Object.keys(Zo).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(An, e) || e in Ae && Ae[e] === Zo[e] || Object.defineProperty(Ae, e, {
                enumerable: !0,
                get: function() {
                    return Zo[e]
                }
            })
        });
        var UA = df(lf());
        Ae.IX2EngineActionTypes = UA;
        var VA = df(ff());
        Ae.IX2EngineConstants = VA
    });
    var pf = u(wn => {
        "use strict";
        Object.defineProperty(wn, "__esModule", {
            value: !0
        });
        wn.ixData = void 0;
        var WA = Ue(),
            {
                IX2_RAW_DATA_IMPORTED: BA
            } = WA.IX2EngineActionTypes,
            HA = (e = Object.freeze({}), t) => {
                switch (t.type) {
                    case BA:
                        return t.payload.ixData || Object.freeze({});
                    default:
                        return e
                }
            };
        wn.ixData = HA
    });
    var Pr = u((oH, gt) => {
        function Jo() {
            return gt.exports = Jo = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }, gt.exports.__esModule = !0, gt.exports.default = gt.exports, Jo.apply(this, arguments)
        }
        gt.exports = Jo, gt.exports.__esModule = !0, gt.exports.default = gt.exports
    });
    var tr = u(Te => {
        "use strict";
        Object.defineProperty(Te, "__esModule", {
            value: !0
        });
        var kA = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        Te.clone = Cn;
        Te.addLast = hf;
        Te.addFirst = gf;
        Te.removeLast = _f;
        Te.removeFirst = yf;
        Te.insert = mf;
        Te.removeAt = If;
        Te.replaceAt = Tf;
        Te.getIn = Nn;
        Te.set = qn;
        Te.setIn = xn;
        Te.update = Sf;
        Te.updateIn = bf;
        Te.merge = Af;
        Te.mergeDeep = wf;
        Te.mergeIn = Rf;
        Te.omit = Cf;
        Te.addDefaults = Nf;
        var vf = "INVALID_ARGS";

        function Ef(e) {
            throw new Error(e)
        }

        function ea(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var jA = {}.hasOwnProperty;

        function Cn(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = ea(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }

        function Ve(e, t, r) {
            var n = r;
            n == null && Ef(vf);
            for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++) a[s - 3] = arguments[s];
            for (var c = 0; c < a.length; c++) {
                var f = a[c];
                if (f != null) {
                    var E = ea(f);
                    if (E.length)
                        for (var p = 0; p <= E.length; p++) {
                            var h = E[p];
                            if (!(e && n[h] !== void 0)) {
                                var g = f[h];
                                t && Rn(n[h]) && Rn(g) && (g = Ve(e, t, n[h], g)), !(g === void 0 || g === n[h]) && (i || (i = !0, n = Cn(n)), n[h] = g)
                            }
                        }
                }
            }
            return n
        }

        function Rn(e) {
            var t = typeof e > "u" ? "undefined" : kA(e);
            return e != null && (t === "object" || t === "function")
        }

        function hf(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function gf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function _f(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function yf(e) {
            return e.length ? e.slice(1) : e
        }

        function mf(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }

        function If(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function Tf(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
            return i[t] = r, i
        }

        function Nn(e, t) {
            if (!Array.isArray(t) && Ef(vf), e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r ?.[i], r === void 0) return r
                }
                return r
            }
        }

        function qn(e, t, r) {
            var n = typeof t == "number" ? [] : {},
                i = e ?? n;
            if (i[t] === r) return i;
            var o = Cn(i);
            return o[t] = r, o
        }

        function Of(e, t, r, n) {
            var i = void 0,
                o = t[n];
            if (n === t.length - 1) i = r;
            else {
                var a = Rn(e) && Rn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = Of(a, t, r, n + 1)
            }
            return qn(e, o, i)
        }

        function xn(e, t, r) {
            return t.length ? Of(e, t, r, 0) : r
        }

        function Sf(e, t, r) {
            var n = e ?.[t],
                i = r(n);
            return qn(e, t, i)
        }

        function bf(e, t, r) {
            var n = Nn(e, t),
                i = r(n);
            return xn(e, t, i)
        }

        function Af(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
            return s.length ? Ve.call.apply(Ve, [null, !1, !1, e, t, r, n, i, o].concat(s)) : Ve(!1, !1, e, t, r, n, i, o)
        }

        function wf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
            return s.length ? Ve.call.apply(Ve, [null, !1, !0, e, t, r, n, i, o].concat(s)) : Ve(!1, !0, e, t, r, n, i, o)
        }

        function Rf(e, t, r, n, i, o, a) {
            var s = Nn(e, t);
            s == null && (s = {});
            for (var c = void 0, f = arguments.length, E = Array(f > 7 ? f - 7 : 0), p = 7; p < f; p++) E[p - 7] = arguments[p];
            return E.length ? c = Ve.call.apply(Ve, [null, !1, !1, s, r, n, i, o, a].concat(E)) : c = Ve(!1, !1, s, r, n, i, o, a), xn(e, t, c)
        }

        function Cf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (jA.call(e, r[i])) {
                    n = !0;
                    break
                }
            if (!n) return e;
            for (var o = {}, a = ea(e), s = 0; s < a.length; s++) {
                var c = a[s];
                r.indexOf(c) >= 0 || (o[c] = e[c])
            }
            return o
        }

        function Nf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
            return s.length ? Ve.call.apply(Ve, [null, !0, !1, e, t, r, n, i, o].concat(s)) : Ve(!0, !1, e, t, r, n, i, o)
        }
        var KA = {
            clone: Cn,
            addLast: hf,
            addFirst: gf,
            removeLast: _f,
            removeFirst: yf,
            insert: mf,
            removeAt: If,
            replaceAt: Tf,
            getIn: Nn,
            set: qn,
            setIn: xn,
            update: Sf,
            updateIn: bf,
            merge: Af,
            mergeDeep: wf,
            mergeIn: Rf,
            omit: Cf,
            addDefaults: Nf
        };
        Te.default = KA
    });
    var xf = u(Ln => {
        "use strict";
        var zA = ot().default;
        Object.defineProperty(Ln, "__esModule", {
            value: !0
        });
        Ln.ixRequest = void 0;
        var YA = zA(Pr()),
            $A = Ue(),
            QA = tr(),
            {
                IX2_PREVIEW_REQUESTED: ZA,
                IX2_PLAYBACK_REQUESTED: JA,
                IX2_STOP_REQUESTED: e0,
                IX2_CLEAR_REQUESTED: t0
            } = $A.IX2EngineActionTypes,
            r0 = {
                preview: {},
                playback: {},
                stop: {},
                clear: {}
            },
            qf = Object.create(null, {
                [ZA]: {
                    value: "preview"
                },
                [JA]: {
                    value: "playback"
                },
                [e0]: {
                    value: "stop"
                },
                [t0]: {
                    value: "clear"
                }
            }),
            n0 = (e = r0, t) => {
                if (t.type in qf) {
                    let r = [qf[t.type]];
                    return (0, QA.setIn)(e, [r], (0, YA.default)({}, t.payload))
                }
                return e
            };
        Ln.ixRequest = n0
    });
    var Pf = u(Pn => {
        "use strict";
        Object.defineProperty(Pn, "__esModule", {
            value: !0
        });
        Pn.ixSession = void 0;
        var i0 = Ue(),
            st = tr(),
            {
                IX2_SESSION_INITIALIZED: o0,
                IX2_SESSION_STARTED: a0,
                IX2_TEST_FRAME_RENDERED: s0,
                IX2_SESSION_STOPPED: u0,
                IX2_EVENT_LISTENER_ADDED: c0,
                IX2_EVENT_STATE_CHANGED: l0,
                IX2_ANIMATION_FRAME_CHANGED: f0,
                IX2_ACTION_LIST_PLAYBACK_CHANGED: d0,
                IX2_VIEWPORT_WIDTH_CHANGED: p0,
                IX2_MEDIA_QUERIES_DEFINED: v0
            } = i0.IX2EngineActionTypes,
            Lf = {
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
            E0 = 20,
            h0 = (e = Lf, t) => {
                switch (t.type) {
                    case o0:
                        {
                            let {
                                hasBoundaryNodes: r,
                                reducedMotion: n
                            } = t.payload;
                            return (0, st.merge)(e, {
                                hasBoundaryNodes: r,
                                reducedMotion: n
                            })
                        }
                    case a0:
                        return (0, st.set)(e, "active", !0);
                    case s0:
                        {
                            let {
                                payload: {
                                    step: r = E0
                                }
                            } = t;
                            return (0, st.set)(e, "tick", e.tick + r)
                        }
                    case u0:
                        return Lf;
                    case f0:
                        {
                            let {
                                payload: {
                                    now: r
                                }
                            } = t;
                            return (0, st.set)(e, "tick", r)
                        }
                    case c0:
                        {
                            let r = (0, st.addLast)(e.eventListeners, t.payload);
                            return (0, st.set)(e, "eventListeners", r)
                        }
                    case l0:
                        {
                            let {
                                stateKey: r,
                                newState: n
                            } = t.payload;
                            return (0, st.setIn)(e, ["eventState", r], n)
                        }
                    case d0:
                        {
                            let {
                                actionListId: r,
                                isPlaying: n
                            } = t.payload;
                            return (0, st.setIn)(e, ["playbackState", r], n)
                        }
                    case p0:
                        {
                            let {
                                width: r,
                                mediaQueries: n
                            } = t.payload,
                            i = n.length,
                            o = null;
                            for (let a = 0; a < i; a++) {
                                let {
                                    key: s,
                                    min: c,
                                    max: f
                                } = n[a];
                                if (r >= c && r <= f) {
                                    o = s;
                                    break
                                }
                            }
                            return (0, st.merge)(e, {
                                viewportWidth: r,
                                mediaQueryKey: o
                            })
                        }
                    case v0:
                        return (0, st.set)(e, "hasDefinedMediaQueries", !0);
                    default:
                        return e
                }
            };
        Pn.ixSession = h0
    });
    var Mf = u((cH, Df) => {
        function g0() {
            this.__data__ = [], this.size = 0
        }
        Df.exports = g0
    });
    var Dn = u((lH, Ff) => {
        function _0(e, t) {
            return e === t || e !== e && t !== t
        }
        Ff.exports = _0
    });
    var Dr = u((fH, Gf) => {
        var y0 = Dn();

        function m0(e, t) {
            for (var r = e.length; r--;)
                if (y0(e[r][0], t)) return r;
            return -1
        }
        Gf.exports = m0
    });
    var Uf = u((dH, Xf) => {
        var I0 = Dr(),
            T0 = Array.prototype,
            O0 = T0.splice;

        function S0(e) {
            var t = this.__data__,
                r = I0(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : O0.call(t, r, 1), --this.size, !0
        }
        Xf.exports = S0
    });
    var Wf = u((pH, Vf) => {
        var b0 = Dr();

        function A0(e) {
            var t = this.__data__,
                r = b0(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        Vf.exports = A0
    });
    var Hf = u((vH, Bf) => {
        var w0 = Dr();

        function R0(e) {
            return w0(this.__data__, e) > -1
        }
        Bf.exports = R0
    });
    var jf = u((EH, kf) => {
        var C0 = Dr();

        function N0(e, t) {
            var r = this.__data__,
                n = C0(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
        }
        kf.exports = N0
    });
    var Mr = u((hH, Kf) => {
        var q0 = Mf(),
            x0 = Uf(),
            L0 = Wf(),
            P0 = Hf(),
            D0 = jf();

        function rr(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        rr.prototype.clear = q0;
        rr.prototype.delete = x0;
        rr.prototype.get = L0;
        rr.prototype.has = P0;
        rr.prototype.set = D0;
        Kf.exports = rr
    });
    var Yf = u((gH, zf) => {
        var M0 = Mr();

        function F0() {
            this.__data__ = new M0, this.size = 0
        }
        zf.exports = F0
    });
    var Qf = u((_H, $f) => {
        function G0(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }
        $f.exports = G0
    });
    var Jf = u((yH, Zf) => {
        function X0(e) {
            return this.__data__.get(e)
        }
        Zf.exports = X0
    });
    var td = u((mH, ed) => {
        function U0(e) {
            return this.__data__.has(e)
        }
        ed.exports = U0
    });
    var ut = u((IH, rd) => {
        function V0(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        rd.exports = V0
    });
    var ta = u((TH, nd) => {
        var W0 = Ot(),
            B0 = ut(),
            H0 = "[object AsyncFunction]",
            k0 = "[object Function]",
            j0 = "[object GeneratorFunction]",
            K0 = "[object Proxy]";

        function z0(e) {
            if (!B0(e)) return !1;
            var t = W0(e);
            return t == k0 || t == j0 || t == H0 || t == K0
        }
        nd.exports = z0
    });
    var od = u((OH, id) => {
        var Y0 = Ze(),
            $0 = Y0["__core-js_shared__"];
        id.exports = $0
    });
    var ud = u((SH, sd) => {
        var ra = od(),
            ad = function() {
                var e = /[^.]+$/.exec(ra && ra.keys && ra.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function Q0(e) {
            return !!ad && ad in e
        }
        sd.exports = Q0
    });
    var na = u((bH, cd) => {
        var Z0 = Function.prototype,
            J0 = Z0.toString;

        function ew(e) {
            if (e != null) {
                try {
                    return J0.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        cd.exports = ew
    });
    var fd = u((AH, ld) => {
        var tw = ta(),
            rw = ud(),
            nw = ut(),
            iw = na(),
            ow = /[\\^$.*+?()[\]{}|]/g,
            aw = /^\[object .+?Constructor\]$/,
            sw = Function.prototype,
            uw = Object.prototype,
            cw = sw.toString,
            lw = uw.hasOwnProperty,
            fw = RegExp("^" + cw.call(lw).replace(ow, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function dw(e) {
            if (!nw(e) || rw(e)) return !1;
            var t = tw(e) ? fw : aw;
            return t.test(iw(e))
        }
        ld.exports = dw
    });
    var pd = u((wH, dd) => {
        function pw(e, t) {
            return e ?.[t]
        }
        dd.exports = pw
    });
    var St = u((RH, vd) => {
        var vw = fd(),
            Ew = pd();

        function hw(e, t) {
            var r = Ew(e, t);
            return vw(r) ? r : void 0
        }
        vd.exports = hw
    });
    var Mn = u((CH, Ed) => {
        var gw = St(),
            _w = Ze(),
            yw = gw(_w, "Map");
        Ed.exports = yw
    });
    var Fr = u((NH, hd) => {
        var mw = St(),
            Iw = mw(Object, "create");
        hd.exports = Iw
    });
    var yd = u((qH, _d) => {
        var gd = Fr();

        function Tw() {
            this.__data__ = gd ? gd(null) : {}, this.size = 0
        }
        _d.exports = Tw
    });
    var Id = u((xH, md) => {
        function Ow(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        md.exports = Ow
    });
    var Od = u((LH, Td) => {
        var Sw = Fr(),
            bw = "__lodash_hash_undefined__",
            Aw = Object.prototype,
            ww = Aw.hasOwnProperty;

        function Rw(e) {
            var t = this.__data__;
            if (Sw) {
                var r = t[e];
                return r === bw ? void 0 : r
            }
            return ww.call(t, e) ? t[e] : void 0
        }
        Td.exports = Rw
    });
    var bd = u((PH, Sd) => {
        var Cw = Fr(),
            Nw = Object.prototype,
            qw = Nw.hasOwnProperty;

        function xw(e) {
            var t = this.__data__;
            return Cw ? t[e] !== void 0 : qw.call(t, e)
        }
        Sd.exports = xw
    });
    var wd = u((DH, Ad) => {
        var Lw = Fr(),
            Pw = "__lodash_hash_undefined__";

        function Dw(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = Lw && t === void 0 ? Pw : t, this
        }
        Ad.exports = Dw
    });
    var Cd = u((MH, Rd) => {
        var Mw = yd(),
            Fw = Id(),
            Gw = Od(),
            Xw = bd(),
            Uw = wd();

        function nr(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        nr.prototype.clear = Mw;
        nr.prototype.delete = Fw;
        nr.prototype.get = Gw;
        nr.prototype.has = Xw;
        nr.prototype.set = Uw;
        Rd.exports = nr
    });
    var xd = u((FH, qd) => {
        var Nd = Cd(),
            Vw = Mr(),
            Ww = Mn();

        function Bw() {
            this.size = 0, this.__data__ = {
                hash: new Nd,
                map: new(Ww || Vw),
                string: new Nd
            }
        }
        qd.exports = Bw
    });
    var Pd = u((GH, Ld) => {
        function Hw(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Ld.exports = Hw
    });
    var Gr = u((XH, Dd) => {
        var kw = Pd();

        function jw(e, t) {
            var r = e.__data__;
            return kw(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        Dd.exports = jw
    });
    var Fd = u((UH, Md) => {
        var Kw = Gr();

        function zw(e) {
            var t = Kw(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        Md.exports = zw
    });
    var Xd = u((VH, Gd) => {
        var Yw = Gr();

        function $w(e) {
            return Yw(this, e).get(e)
        }
        Gd.exports = $w
    });
    var Vd = u((WH, Ud) => {
        var Qw = Gr();

        function Zw(e) {
            return Qw(this, e).has(e)
        }
        Ud.exports = Zw
    });
    var Bd = u((BH, Wd) => {
        var Jw = Gr();

        function eR(e, t) {
            var r = Jw(this, e),
                n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
        }
        Wd.exports = eR
    });
    var Fn = u((HH, Hd) => {
        var tR = xd(),
            rR = Fd(),
            nR = Xd(),
            iR = Vd(),
            oR = Bd();

        function ir(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        ir.prototype.clear = tR;
        ir.prototype.delete = rR;
        ir.prototype.get = nR;
        ir.prototype.has = iR;
        ir.prototype.set = oR;
        Hd.exports = ir
    });
    var jd = u((kH, kd) => {
        var aR = Mr(),
            sR = Mn(),
            uR = Fn(),
            cR = 200;

        function lR(e, t) {
            var r = this.__data__;
            if (r instanceof aR) {
                var n = r.__data__;
                if (!sR || n.length < cR - 1) return n.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new uR(n)
            }
            return r.set(e, t), this.size = r.size, this
        }
        kd.exports = lR
    });
    var ia = u((jH, Kd) => {
        var fR = Mr(),
            dR = Yf(),
            pR = Qf(),
            vR = Jf(),
            ER = td(),
            hR = jd();

        function or(e) {
            var t = this.__data__ = new fR(e);
            this.size = t.size
        }
        or.prototype.clear = dR;
        or.prototype.delete = pR;
        or.prototype.get = vR;
        or.prototype.has = ER;
        or.prototype.set = hR;
        Kd.exports = or
    });
    var Yd = u((KH, zd) => {
        var gR = "__lodash_hash_undefined__";

        function _R(e) {
            return this.__data__.set(e, gR), this
        }
        zd.exports = _R
    });
    var Qd = u((zH, $d) => {
        function yR(e) {
            return this.__data__.has(e)
        }
        $d.exports = yR
    });
    var Jd = u((YH, Zd) => {
        var mR = Fn(),
            IR = Yd(),
            TR = Qd();

        function Gn(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new mR; ++t < r;) this.add(e[t])
        }
        Gn.prototype.add = Gn.prototype.push = IR;
        Gn.prototype.has = TR;
        Zd.exports = Gn
    });
    var tp = u(($H, ep) => {
        function OR(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
        ep.exports = OR
    });
    var np = u((QH, rp) => {
        function SR(e, t) {
            return e.has(t)
        }
        rp.exports = SR
    });
    var oa = u((ZH, ip) => {
        var bR = Jd(),
            AR = tp(),
            wR = np(),
            RR = 1,
            CR = 2;

        function NR(e, t, r, n, i, o) {
            var a = r & RR,
                s = e.length,
                c = t.length;
            if (s != c && !(a && c > s)) return !1;
            var f = o.get(e),
                E = o.get(t);
            if (f && E) return f == t && E == e;
            var p = -1,
                h = !0,
                g = r & CR ? new bR : void 0;
            for (o.set(e, t), o.set(t, e); ++p < s;) {
                var S = e[p],
                    b = t[p];
                if (n) var x = a ? n(b, S, p, t, e, o) : n(S, b, p, e, t, o);
                if (x !== void 0) {
                    if (x) continue;
                    h = !1;
                    break
                }
                if (g) {
                    if (!AR(t, function(A, w) {
                            if (!wR(g, w) && (S === A || i(S, A, r, n, o))) return g.push(w)
                        })) {
                        h = !1;
                        break
                    }
                } else if (!(S === b || i(S, b, r, n, o))) {
                    h = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), h
        }
        ip.exports = NR
    });
    var ap = u((JH, op) => {
        var qR = Ze(),
            xR = qR.Uint8Array;
        op.exports = xR
    });
    var up = u((e5, sp) => {
        function LR(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }), r
        }
        sp.exports = LR
    });
    var lp = u((t5, cp) => {
        function PR(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }), r
        }
        cp.exports = PR
    });
    var Ep = u((r5, vp) => {
        var fp = Qt(),
            dp = ap(),
            DR = Dn(),
            MR = oa(),
            FR = up(),
            GR = lp(),
            XR = 1,
            UR = 2,
            VR = "[object Boolean]",
            WR = "[object Date]",
            BR = "[object Error]",
            HR = "[object Map]",
            kR = "[object Number]",
            jR = "[object RegExp]",
            KR = "[object Set]",
            zR = "[object String]",
            YR = "[object Symbol]",
            $R = "[object ArrayBuffer]",
            QR = "[object DataView]",
            pp = fp ? fp.prototype : void 0,
            aa = pp ? pp.valueOf : void 0;

        function ZR(e, t, r, n, i, o, a) {
            switch (r) {
                case QR:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case $R:
                    return !(e.byteLength != t.byteLength || !o(new dp(e), new dp(t)));
                case VR:
                case WR:
                case kR:
                    return DR(+e, +t);
                case BR:
                    return e.name == t.name && e.message == t.message;
                case jR:
                case zR:
                    return e == t + "";
                case HR:
                    var s = FR;
                case KR:
                    var c = n & XR;
                    if (s || (s = GR), e.size != t.size && !c) return !1;
                    var f = a.get(e);
                    if (f) return f == t;
                    n |= UR, a.set(e, t);
                    var E = MR(s(e), s(t), n, i, o, a);
                    return a.delete(e), E;
                case YR:
                    if (aa) return aa.call(e) == aa.call(t)
            }
            return !1
        }
        vp.exports = ZR
    });
    var Xn = u((n5, hp) => {
        function JR(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
            return e
        }
        hp.exports = JR
    });
    var Ne = u((i5, gp) => {
        var eC = Array.isArray;
        gp.exports = eC
    });
    var sa = u((o5, _p) => {
        var tC = Xn(),
            rC = Ne();

        function nC(e, t, r) {
            var n = t(e);
            return rC(e) ? n : tC(n, r(e))
        }
        _p.exports = nC
    });
    var mp = u((a5, yp) => {
        function iC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
                var a = e[r];
                t(a, r, e) && (o[i++] = a)
            }
            return o
        }
        yp.exports = iC
    });
    var ua = u((s5, Ip) => {
        function oC() {
            return []
        }
        Ip.exports = oC
    });
    var ca = u((u5, Op) => {
        var aC = mp(),
            sC = ua(),
            uC = Object.prototype,
            cC = uC.propertyIsEnumerable,
            Tp = Object.getOwnPropertySymbols,
            lC = Tp ? function(e) {
                return e == null ? [] : (e = Object(e), aC(Tp(e), function(t) {
                    return cC.call(e, t)
                }))
            } : sC;
        Op.exports = lC
    });
    var bp = u((c5, Sp) => {
        function fC(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }
        Sp.exports = fC
    });
    var wp = u((l5, Ap) => {
        var dC = Ot(),
            pC = ht(),
            vC = "[object Arguments]";

        function EC(e) {
            return pC(e) && dC(e) == vC
        }
        Ap.exports = EC
    });
    var Xr = u((f5, Np) => {
        var Rp = wp(),
            hC = ht(),
            Cp = Object.prototype,
            gC = Cp.hasOwnProperty,
            _C = Cp.propertyIsEnumerable,
            yC = Rp(function() {
                return arguments
            }()) ? Rp : function(e) {
                return hC(e) && gC.call(e, "callee") && !_C.call(e, "callee")
            };
        Np.exports = yC
    });
    var xp = u((d5, qp) => {
        function mC() {
            return !1
        }
        qp.exports = mC
    });
    var Un = u((Ur, ar) => {
        var IC = Ze(),
            TC = xp(),
            Dp = typeof Ur == "object" && Ur && !Ur.nodeType && Ur,
            Lp = Dp && typeof ar == "object" && ar && !ar.nodeType && ar,
            OC = Lp && Lp.exports === Dp,
            Pp = OC ? IC.Buffer : void 0,
            SC = Pp ? Pp.isBuffer : void 0,
            bC = SC || TC;
        ar.exports = bC
    });
    var Vn = u((p5, Mp) => {
        var AC = 9007199254740991,
            wC = /^(?:0|[1-9]\d*)$/;

        function RC(e, t) {
            var r = typeof e;
            return t = t ?? AC, !!t && (r == "number" || r != "symbol" && wC.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        Mp.exports = RC
    });
    var Wn = u((v5, Fp) => {
        var CC = 9007199254740991;

        function NC(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= CC
        }
        Fp.exports = NC
    });
    var Xp = u((E5, Gp) => {
        var qC = Ot(),
            xC = Wn(),
            LC = ht(),
            PC = "[object Arguments]",
            DC = "[object Array]",
            MC = "[object Boolean]",
            FC = "[object Date]",
            GC = "[object Error]",
            XC = "[object Function]",
            UC = "[object Map]",
            VC = "[object Number]",
            WC = "[object Object]",
            BC = "[object RegExp]",
            HC = "[object Set]",
            kC = "[object String]",
            jC = "[object WeakMap]",
            KC = "[object ArrayBuffer]",
            zC = "[object DataView]",
            YC = "[object Float32Array]",
            $C = "[object Float64Array]",
            QC = "[object Int8Array]",
            ZC = "[object Int16Array]",
            JC = "[object Int32Array]",
            eN = "[object Uint8Array]",
            tN = "[object Uint8ClampedArray]",
            rN = "[object Uint16Array]",
            nN = "[object Uint32Array]",
            ye = {};
        ye[YC] = ye[$C] = ye[QC] = ye[ZC] = ye[JC] = ye[eN] = ye[tN] = ye[rN] = ye[nN] = !0;
        ye[PC] = ye[DC] = ye[KC] = ye[MC] = ye[zC] = ye[FC] = ye[GC] = ye[XC] = ye[UC] = ye[VC] = ye[WC] = ye[BC] = ye[HC] = ye[kC] = ye[jC] = !1;

        function iN(e) {
            return LC(e) && xC(e.length) && !!ye[qC(e)]
        }
        Gp.exports = iN
    });
    var Vp = u((h5, Up) => {
        function oN(e) {
            return function(t) {
                return e(t)
            }
        }
        Up.exports = oN
    });
    var Bp = u((Vr, sr) => {
        var aN = xo(),
            Wp = typeof Vr == "object" && Vr && !Vr.nodeType && Vr,
            Wr = Wp && typeof sr == "object" && sr && !sr.nodeType && sr,
            sN = Wr && Wr.exports === Wp,
            la = sN && aN.process,
            uN = function() {
                try {
                    var e = Wr && Wr.require && Wr.require("util").types;
                    return e || la && la.binding && la.binding("util")
                } catch {}
            }();
        sr.exports = uN
    });
    var Bn = u((g5, jp) => {
        var cN = Xp(),
            lN = Vp(),
            Hp = Bp(),
            kp = Hp && Hp.isTypedArray,
            fN = kp ? lN(kp) : cN;
        jp.exports = fN
    });
    var fa = u((_5, Kp) => {
        var dN = bp(),
            pN = Xr(),
            vN = Ne(),
            EN = Un(),
            hN = Vn(),
            gN = Bn(),
            _N = Object.prototype,
            yN = _N.hasOwnProperty;

        function mN(e, t) {
            var r = vN(e),
                n = !r && pN(e),
                i = !r && !n && EN(e),
                o = !r && !n && !i && gN(e),
                a = r || n || i || o,
                s = a ? dN(e.length, String) : [],
                c = s.length;
            for (var f in e)(t || yN.call(e, f)) && !(a && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || hN(f, c))) && s.push(f);
            return s
        }
        Kp.exports = mN
    });
    var Hn = u((y5, zp) => {
        var IN = Object.prototype;

        function TN(e) {
            var t = e && e.constructor,
                r = typeof t == "function" && t.prototype || IN;
            return e === r
        }
        zp.exports = TN
    });
    var $p = u((m5, Yp) => {
        var ON = Lo(),
            SN = ON(Object.keys, Object);
        Yp.exports = SN
    });
    var kn = u((I5, Qp) => {
        var bN = Hn(),
            AN = $p(),
            wN = Object.prototype,
            RN = wN.hasOwnProperty;

        function CN(e) {
            if (!bN(e)) return AN(e);
            var t = [];
            for (var r in Object(e)) RN.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        Qp.exports = CN
    });
    var Mt = u((T5, Zp) => {
        var NN = ta(),
            qN = Wn();

        function xN(e) {
            return e != null && qN(e.length) && !NN(e)
        }
        Zp.exports = xN
    });
    var Br = u((O5, Jp) => {
        var LN = fa(),
            PN = kn(),
            DN = Mt();

        function MN(e) {
            return DN(e) ? LN(e) : PN(e)
        }
        Jp.exports = MN
    });
    var tv = u((S5, ev) => {
        var FN = sa(),
            GN = ca(),
            XN = Br();

        function UN(e) {
            return FN(e, XN, GN)
        }
        ev.exports = UN
    });
    var iv = u((b5, nv) => {
        var rv = tv(),
            VN = 1,
            WN = Object.prototype,
            BN = WN.hasOwnProperty;

        function HN(e, t, r, n, i, o) {
            var a = r & VN,
                s = rv(e),
                c = s.length,
                f = rv(t),
                E = f.length;
            if (c != E && !a) return !1;
            for (var p = c; p--;) {
                var h = s[p];
                if (!(a ? h in t : BN.call(t, h))) return !1
            }
            var g = o.get(e),
                S = o.get(t);
            if (g && S) return g == t && S == e;
            var b = !0;
            o.set(e, t), o.set(t, e);
            for (var x = a; ++p < c;) {
                h = s[p];
                var A = e[h],
                    w = t[h];
                if (n) var I = a ? n(w, A, h, t, e, o) : n(A, w, h, e, t, o);
                if (!(I === void 0 ? A === w || i(A, w, r, n, o) : I)) {
                    b = !1;
                    break
                }
                x || (x = h == "constructor")
            }
            if (b && !x) {
                var N = e.constructor,
                    C = t.constructor;
                N != C && "constructor" in e && "constructor" in t && !(typeof N == "function" && N instanceof N && typeof C == "function" && C instanceof C) && (b = !1)
            }
            return o.delete(e), o.delete(t), b
        }
        nv.exports = HN
    });
    var av = u((A5, ov) => {
        var kN = St(),
            jN = Ze(),
            KN = kN(jN, "DataView");
        ov.exports = KN
    });
    var uv = u((w5, sv) => {
        var zN = St(),
            YN = Ze(),
            $N = zN(YN, "Promise");
        sv.exports = $N
    });
    var lv = u((R5, cv) => {
        var QN = St(),
            ZN = Ze(),
            JN = QN(ZN, "Set");
        cv.exports = JN
    });
    var da = u((C5, fv) => {
        var eq = St(),
            tq = Ze(),
            rq = eq(tq, "WeakMap");
        fv.exports = rq
    });
    var jn = u((N5, _v) => {
        var pa = av(),
            va = Mn(),
            Ea = uv(),
            ha = lv(),
            ga = da(),
            gv = Ot(),
            ur = na(),
            dv = "[object Map]",
            nq = "[object Object]",
            pv = "[object Promise]",
            vv = "[object Set]",
            Ev = "[object WeakMap]",
            hv = "[object DataView]",
            iq = ur(pa),
            oq = ur(va),
            aq = ur(Ea),
            sq = ur(ha),
            uq = ur(ga),
            Ft = gv;
        (pa && Ft(new pa(new ArrayBuffer(1))) != hv || va && Ft(new va) != dv || Ea && Ft(Ea.resolve()) != pv || ha && Ft(new ha) != vv || ga && Ft(new ga) != Ev) && (Ft = function(e) {
            var t = gv(e),
                r = t == nq ? e.constructor : void 0,
                n = r ? ur(r) : "";
            if (n) switch (n) {
                case iq:
                    return hv;
                case oq:
                    return dv;
                case aq:
                    return pv;
                case sq:
                    return vv;
                case uq:
                    return Ev
            }
            return t
        });
        _v.exports = Ft
    });
    var Av = u((q5, bv) => {
        var _a = ia(),
            cq = oa(),
            lq = Ep(),
            fq = iv(),
            yv = jn(),
            mv = Ne(),
            Iv = Un(),
            dq = Bn(),
            pq = 1,
            Tv = "[object Arguments]",
            Ov = "[object Array]",
            Kn = "[object Object]",
            vq = Object.prototype,
            Sv = vq.hasOwnProperty;

        function Eq(e, t, r, n, i, o) {
            var a = mv(e),
                s = mv(t),
                c = a ? Ov : yv(e),
                f = s ? Ov : yv(t);
            c = c == Tv ? Kn : c, f = f == Tv ? Kn : f;
            var E = c == Kn,
                p = f == Kn,
                h = c == f;
            if (h && Iv(e)) {
                if (!Iv(t)) return !1;
                a = !0, E = !1
            }
            if (h && !E) return o || (o = new _a), a || dq(e) ? cq(e, t, r, n, i, o) : lq(e, t, c, r, n, i, o);
            if (!(r & pq)) {
                var g = E && Sv.call(e, "__wrapped__"),
                    S = p && Sv.call(t, "__wrapped__");
                if (g || S) {
                    var b = g ? e.value() : e,
                        x = S ? t.value() : t;
                    return o || (o = new _a), i(b, x, r, n, o)
                }
            }
            return h ? (o || (o = new _a), fq(e, t, r, n, i, o)) : !1
        }
        bv.exports = Eq
    });
    var ya = u((x5, Cv) => {
        var hq = Av(),
            wv = ht();

        function Rv(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !wv(e) && !wv(t) ? e !== e && t !== t : hq(e, t, r, n, Rv, i)
        }
        Cv.exports = Rv
    });
    var qv = u((L5, Nv) => {
        var gq = ia(),
            _q = ya(),
            yq = 1,
            mq = 2;

        function Iq(e, t, r, n) {
            var i = r.length,
                o = i,
                a = !n;
            if (e == null) return !o;
            for (e = Object(e); i--;) {
                var s = r[i];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
            }
            for (; ++i < o;) {
                s = r[i];
                var c = s[0],
                    f = e[c],
                    E = s[1];
                if (a && s[2]) {
                    if (f === void 0 && !(c in e)) return !1
                } else {
                    var p = new gq;
                    if (n) var h = n(f, E, c, e, t, p);
                    if (!(h === void 0 ? _q(E, f, yq | mq, n, p) : h)) return !1
                }
            }
            return !0
        }
        Nv.exports = Iq
    });
    var ma = u((P5, xv) => {
        var Tq = ut();

        function Oq(e) {
            return e === e && !Tq(e)
        }
        xv.exports = Oq
    });
    var Pv = u((D5, Lv) => {
        var Sq = ma(),
            bq = Br();

        function Aq(e) {
            for (var t = bq(e), r = t.length; r--;) {
                var n = t[r],
                    i = e[n];
                t[r] = [n, i, Sq(i)]
            }
            return t
        }
        Lv.exports = Aq
    });
    var Ia = u((M5, Dv) => {
        function wq(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Dv.exports = wq
    });
    var Fv = u((F5, Mv) => {
        var Rq = qv(),
            Cq = Pv(),
            Nq = Ia();

        function qq(e) {
            var t = Cq(e);
            return t.length == 1 && t[0][2] ? Nq(t[0][0], t[0][1]) : function(r) {
                return r === e || Rq(r, e, t)
            }
        }
        Mv.exports = qq
    });
    var Hr = u((G5, Gv) => {
        var xq = Ot(),
            Lq = ht(),
            Pq = "[object Symbol]";

        function Dq(e) {
            return typeof e == "symbol" || Lq(e) && xq(e) == Pq
        }
        Gv.exports = Dq
    });
    var zn = u((X5, Xv) => {
        var Mq = Ne(),
            Fq = Hr(),
            Gq = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            Xq = /^\w*$/;

        function Uq(e, t) {
            if (Mq(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || Fq(e) ? !0 : Xq.test(e) || !Gq.test(e) || t != null && e in Object(t)
        }
        Xv.exports = Uq
    });
    var Wv = u((U5, Vv) => {
        var Uv = Fn(),
            Vq = "Expected a function";

        function Ta(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(Vq);
            var r = function() {
                var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    o = r.cache;
                if (o.has(i)) return o.get(i);
                var a = e.apply(this, n);
                return r.cache = o.set(i, a) || o, a
            };
            return r.cache = new(Ta.Cache || Uv), r
        }
        Ta.Cache = Uv;
        Vv.exports = Ta
    });
    var Hv = u((V5, Bv) => {
        var Wq = Wv(),
            Bq = 500;

        function Hq(e) {
            var t = Wq(e, function(n) {
                    return r.size === Bq && r.clear(), n
                }),
                r = t.cache;
            return t
        }
        Bv.exports = Hq
    });
    var jv = u((W5, kv) => {
        var kq = Hv(),
            jq = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            Kq = /\\(\\)?/g,
            zq = kq(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(jq, function(r, n, i, o) {
                    t.push(i ? o.replace(Kq, "$1") : n || r)
                }), t
            });
        kv.exports = zq
    });
    var Oa = u((B5, Kv) => {
        function Yq(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
            return i
        }
        Kv.exports = Yq
    });
    var Jv = u((H5, Zv) => {
        var zv = Qt(),
            $q = Oa(),
            Qq = Ne(),
            Zq = Hr(),
            Jq = 1 / 0,
            Yv = zv ? zv.prototype : void 0,
            $v = Yv ? Yv.toString : void 0;

        function Qv(e) {
            if (typeof e == "string") return e;
            if (Qq(e)) return $q(e, Qv) + "";
            if (Zq(e)) return $v ? $v.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -Jq ? "-0" : t
        }
        Zv.exports = Qv
    });
    var tE = u((k5, eE) => {
        var ex = Jv();

        function tx(e) {
            return e == null ? "" : ex(e)
        }
        eE.exports = tx
    });
    var kr = u((j5, rE) => {
        var rx = Ne(),
            nx = zn(),
            ix = jv(),
            ox = tE();

        function ax(e, t) {
            return rx(e) ? e : nx(e, t) ? [e] : ix(ox(e))
        }
        rE.exports = ax
    });
    var cr = u((K5, nE) => {
        var sx = Hr(),
            ux = 1 / 0;

        function cx(e) {
            if (typeof e == "string" || sx(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -ux ? "-0" : t
        }
        nE.exports = cx
    });
    var Yn = u((z5, iE) => {
        var lx = kr(),
            fx = cr();

        function dx(e, t) {
            t = lx(t, e);
            for (var r = 0, n = t.length; e != null && r < n;) e = e[fx(t[r++])];
            return r && r == n ? e : void 0
        }
        iE.exports = dx
    });
    var $n = u((Y5, oE) => {
        var px = Yn();

        function vx(e, t, r) {
            var n = e == null ? void 0 : px(e, t);
            return n === void 0 ? r : n
        }
        oE.exports = vx
    });
    var sE = u(($5, aE) => {
        function Ex(e, t) {
            return e != null && t in Object(e)
        }
        aE.exports = Ex
    });
    var cE = u((Q5, uE) => {
        var hx = kr(),
            gx = Xr(),
            _x = Ne(),
            yx = Vn(),
            mx = Wn(),
            Ix = cr();

        function Tx(e, t, r) {
            t = hx(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i;) {
                var a = Ix(t[n]);
                if (!(o = e != null && r(e, a))) break;
                e = e[a]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && mx(i) && yx(a, i) && (_x(e) || gx(e)))
        }
        uE.exports = Tx
    });
    var fE = u((Z5, lE) => {
        var Ox = sE(),
            Sx = cE();

        function bx(e, t) {
            return e != null && Sx(e, t, Ox)
        }
        lE.exports = bx
    });
    var pE = u((J5, dE) => {
        var Ax = ya(),
            wx = $n(),
            Rx = fE(),
            Cx = zn(),
            Nx = ma(),
            qx = Ia(),
            xx = cr(),
            Lx = 1,
            Px = 2;

        function Dx(e, t) {
            return Cx(e) && Nx(t) ? qx(xx(e), t) : function(r) {
                var n = wx(r, e);
                return n === void 0 && n === t ? Rx(r, e) : Ax(t, n, Lx | Px)
            }
        }
        dE.exports = Dx
    });
    var Qn = u((ek, vE) => {
        function Mx(e) {
            return e
        }
        vE.exports = Mx
    });
    var Sa = u((tk, EE) => {
        function Fx(e) {
            return function(t) {
                return t ?.[e]
            }
        }
        EE.exports = Fx
    });
    var gE = u((rk, hE) => {
        var Gx = Yn();

        function Xx(e) {
            return function(t) {
                return Gx(t, e)
            }
        }
        hE.exports = Xx
    });
    var yE = u((nk, _E) => {
        var Ux = Sa(),
            Vx = gE(),
            Wx = zn(),
            Bx = cr();

        function Hx(e) {
            return Wx(e) ? Ux(Bx(e)) : Vx(e)
        }
        _E.exports = Hx
    });
    var bt = u((ik, mE) => {
        var kx = Fv(),
            jx = pE(),
            Kx = Qn(),
            zx = Ne(),
            Yx = yE();

        function $x(e) {
            return typeof e == "function" ? e : e == null ? Kx : typeof e == "object" ? zx(e) ? jx(e[0], e[1]) : kx(e) : Yx(e)
        }
        mE.exports = $x
    });
    var ba = u((ok, IE) => {
        var Qx = bt(),
            Zx = Mt(),
            Jx = Br();

        function eL(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!Zx(t)) {
                    var o = Qx(r, 3);
                    t = Jx(t), r = function(s) {
                        return o(i[s], s, i)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? i[o ? t[a] : a] : void 0
            }
        }
        IE.exports = eL
    });
    var Aa = u((ak, TE) => {
        function tL(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o;
            return -1
        }
        TE.exports = tL
    });
    var SE = u((sk, OE) => {
        var rL = /\s/;

        function nL(e) {
            for (var t = e.length; t-- && rL.test(e.charAt(t)););
            return t
        }
        OE.exports = nL
    });
    var AE = u((uk, bE) => {
        var iL = SE(),
            oL = /^\s+/;

        function aL(e) {
            return e && e.slice(0, iL(e) + 1).replace(oL, "")
        }
        bE.exports = aL
    });
    var Zn = u((ck, CE) => {
        var sL = AE(),
            wE = ut(),
            uL = Hr(),
            RE = 0 / 0,
            cL = /^[-+]0x[0-9a-f]+$/i,
            lL = /^0b[01]+$/i,
            fL = /^0o[0-7]+$/i,
            dL = parseInt;

        function pL(e) {
            if (typeof e == "number") return e;
            if (uL(e)) return RE;
            if (wE(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = wE(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = sL(e);
            var r = lL.test(e);
            return r || fL.test(e) ? dL(e.slice(2), r ? 2 : 8) : cL.test(e) ? RE : +e
        }
        CE.exports = pL
    });
    var xE = u((lk, qE) => {
        var vL = Zn(),
            NE = 1 / 0,
            EL = 17976931348623157e292;

        function hL(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = vL(e), e === NE || e === -NE) {
                var t = e < 0 ? -1 : 1;
                return t * EL
            }
            return e === e ? e : 0
        }
        qE.exports = hL
    });
    var wa = u((fk, LE) => {
        var gL = xE();

        function _L(e) {
            var t = gL(e),
                r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        LE.exports = _L
    });
    var DE = u((dk, PE) => {
        var yL = Aa(),
            mL = bt(),
            IL = wa(),
            TL = Math.max;

        function OL(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = r == null ? 0 : IL(r);
            return i < 0 && (i = TL(n + i, 0)), yL(e, mL(t, 3), i)
        }
        PE.exports = OL
    });
    var Ra = u((pk, ME) => {
        var SL = ba(),
            bL = DE(),
            AL = SL(bL);
        ME.exports = AL
    });
    var ei = u(Me => {
        "use strict";
        var wL = ot().default;
        Object.defineProperty(Me, "__esModule", {
            value: !0
        });
        Me.withBrowser = Me.TRANSFORM_STYLE_PREFIXED = Me.TRANSFORM_PREFIXED = Me.IS_BROWSER_ENV = Me.FLEX_PREFIXED = Me.ELEMENT_MATCHES = void 0;
        var RL = wL(Ra()),
            GE = typeof window < "u";
        Me.IS_BROWSER_ENV = GE;
        var Jn = (e, t) => GE ? e() : t;
        Me.withBrowser = Jn;
        var CL = Jn(() => (0, RL.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype));
        Me.ELEMENT_MATCHES = CL;
        var NL = Jn(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                r = "";
            try {
                let {
                    length: n
                } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o, e.style.display === o) return o
                }
                return r
            } catch {
                return r
            }
        }, "flex");
        Me.FLEX_PREFIXED = NL;
        var XE = Jn(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    r = "Transform",
                    {
                        length: n
                    } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0) return o
                }
            }
            return "transform"
        }, "transform");
        Me.TRANSFORM_PREFIXED = XE;
        var FE = XE.split("transform")[0],
            qL = FE ? FE + "TransformStyle" : "transformStyle";
        Me.TRANSFORM_STYLE_PREFIXED = qL
    });
    var Ca = u((Ek, HE) => {
        var xL = 4,
            LL = .001,
            PL = 1e-7,
            DL = 10,
            jr = 11,
            ti = 1 / (jr - 1),
            ML = typeof Float32Array == "function";

        function UE(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function VE(e, t) {
            return 3 * t - 6 * e
        }

        function WE(e) {
            return 3 * e
        }

        function ri(e, t, r) {
            return ((UE(t, r) * e + VE(t, r)) * e + WE(t)) * e
        }

        function BE(e, t, r) {
            return 3 * UE(t, r) * e * e + 2 * VE(t, r) * e + WE(t)
        }

        function FL(e, t, r, n, i) {
            var o, a, s = 0;
            do a = t + (r - t) / 2, o = ri(a, n, i) - e, o > 0 ? r = a : t = a; while (Math.abs(o) > PL && ++s < DL);
            return a
        }

        function GL(e, t, r, n) {
            for (var i = 0; i < xL; ++i) {
                var o = BE(t, r, n);
                if (o === 0) return t;
                var a = ri(t, r, n) - e;
                t -= a / o
            }
            return t
        }
        HE.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var o = ML ? new Float32Array(jr) : new Array(jr);
            if (t !== r || n !== i)
                for (var a = 0; a < jr; ++a) o[a] = ri(a * ti, t, n);

            function s(c) {
                for (var f = 0, E = 1, p = jr - 1; E !== p && o[E] <= c; ++E) f += ti;
                --E;
                var h = (c - o[E]) / (o[E + 1] - o[E]),
                    g = f + h * ti,
                    S = BE(g, t, n);
                return S >= LL ? GL(c, g, t, n) : S === 0 ? g : FL(c, f, f + ti, t, n)
            }
            return function(f) {
                return t === r && n === i ? f : f === 0 ? 0 : f === 1 ? 1 : ri(s(f), r, i)
            }
        }
    });
    var Na = u(ne => {
        "use strict";
        var XL = ot().default;
        Object.defineProperty(ne, "__esModule", {
            value: !0
        });
        ne.bounce = IP;
        ne.bouncePast = TP;
        ne.easeOut = ne.easeInOut = ne.easeIn = ne.ease = void 0;
        ne.inBack = dP;
        ne.inCirc = uP;
        ne.inCubic = KL;
        ne.inElastic = EP;
        ne.inExpo = oP;
        ne.inOutBack = vP;
        ne.inOutCirc = lP;
        ne.inOutCubic = YL;
        ne.inOutElastic = gP;
        ne.inOutExpo = sP;
        ne.inOutQuad = jL;
        ne.inOutQuart = ZL;
        ne.inOutQuint = tP;
        ne.inOutSine = iP;
        ne.inQuad = HL;
        ne.inQuart = $L;
        ne.inQuint = JL;
        ne.inSine = rP;
        ne.outBack = pP;
        ne.outBounce = fP;
        ne.outCirc = cP;
        ne.outCubic = zL;
        ne.outElastic = hP;
        ne.outExpo = aP;
        ne.outQuad = kL;
        ne.outQuart = QL;
        ne.outQuint = eP;
        ne.outSine = nP;
        ne.swingFrom = yP;
        ne.swingFromTo = _P;
        ne.swingTo = mP;
        var ni = XL(Ca()),
            _t = 1.70158,
            UL = (0, ni.default)(.25, .1, .25, 1);
        ne.ease = UL;
        var VL = (0, ni.default)(.42, 0, 1, 1);
        ne.easeIn = VL;
        var WL = (0, ni.default)(0, 0, .58, 1);
        ne.easeOut = WL;
        var BL = (0, ni.default)(.42, 0, .58, 1);
        ne.easeInOut = BL;

        function HL(e) {
            return Math.pow(e, 2)
        }

        function kL(e) {
            return -(Math.pow(e - 1, 2) - 1)
        }

        function jL(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
        }

        function KL(e) {
            return Math.pow(e, 3)
        }

        function zL(e) {
            return Math.pow(e - 1, 3) + 1
        }

        function YL(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
        }

        function $L(e) {
            return Math.pow(e, 4)
        }

        function QL(e) {
            return -(Math.pow(e - 1, 4) - 1)
        }

        function ZL(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
        }

        function JL(e) {
            return Math.pow(e, 5)
        }

        function eP(e) {
            return Math.pow(e - 1, 5) + 1
        }

        function tP(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
        }

        function rP(e) {
            return -Math.cos(e * (Math.PI / 2)) + 1
        }

        function nP(e) {
            return Math.sin(e * (Math.PI / 2))
        }

        function iP(e) {
            return -.5 * (Math.cos(Math.PI * e) - 1)
        }

        function oP(e) {
            return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
        }

        function aP(e) {
            return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
        }

        function sP(e) {
            return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
        }

        function uP(e) {
            return -(Math.sqrt(1 - e * e) - 1)
        }

        function cP(e) {
            return Math.sqrt(1 - Math.pow(e - 1, 2))
        }

        function lP(e) {
            return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        }

        function fP(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }

        function dP(e) {
            let t = _t;
            return e * e * ((t + 1) * e - t)
        }

        function pP(e) {
            let t = _t;
            return (e -= 1) * e * ((t + 1) * e + t) + 1
        }

        function vP(e) {
            let t = _t;
            return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
        }

        function EP(e) {
            let t = _t,
                r = 0,
                n = 1;
            return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
        }

        function hP(e) {
            let t = _t,
                r = 0,
                n = 1;
            return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
        }

        function gP(e) {
            let t = _t,
                r = 0,
                n = 1;
            return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
        }

        function _P(e) {
            let t = _t;
            return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
        }

        function yP(e) {
            let t = _t;
            return e * e * ((t + 1) * e - t)
        }

        function mP(e) {
            let t = _t;
            return (e -= 1) * e * ((t + 1) * e + t) + 1
        }

        function IP(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }

        function TP(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        }
    });
    var xa = u(Kr => {
        "use strict";
        var OP = ot().default,
            SP = Kt().default;
        Object.defineProperty(Kr, "__esModule", {
            value: !0
        });
        Kr.applyEasing = wP;
        Kr.createBezierEasing = AP;
        Kr.optimizeFloat = qa;
        var kE = SP(Na()),
            bP = OP(Ca());

        function qa(e, t = 5, r = 10) {
            let n = Math.pow(r, t),
                i = Number(Math.round(e * n) / n);
            return Math.abs(i) > 1e-4 ? i : 0
        }

        function AP(e) {
            return (0, bP.default)(...e)
        }

        function wP(e, t, r) {
            return t === 0 ? 0 : t === 1 ? 1 : qa(r ? t > 0 ? r(t) : t : t > 0 && e && kE[e] ? kE[e](t) : t)
        }
    });
    var YE = u(lr => {
        "use strict";
        Object.defineProperty(lr, "__esModule", {
            value: !0
        });
        lr.createElementState = zE;
        lr.ixElements = void 0;
        lr.mergeActionState = La;
        var ii = tr(),
            KE = Ue(),
            {
                HTML_ELEMENT: _k,
                PLAIN_OBJECT: RP,
                ABSTRACT_NODE: yk,
                CONFIG_X_VALUE: CP,
                CONFIG_Y_VALUE: NP,
                CONFIG_Z_VALUE: qP,
                CONFIG_VALUE: xP,
                CONFIG_X_UNIT: LP,
                CONFIG_Y_UNIT: PP,
                CONFIG_Z_UNIT: DP,
                CONFIG_UNIT: MP
            } = KE.IX2EngineConstants,
            {
                IX2_SESSION_STOPPED: FP,
                IX2_INSTANCE_ADDED: GP,
                IX2_ELEMENT_STATE_CHANGED: XP
            } = KE.IX2EngineActionTypes,
            jE = {},
            UP = "refState",
            VP = (e = jE, t = {}) => {
                switch (t.type) {
                    case FP:
                        return jE;
                    case GP:
                        {
                            let {
                                elementId: r,
                                element: n,
                                origin: i,
                                actionItem: o,
                                refType: a
                            } = t.payload,
                            {
                                actionTypeId: s
                            } = o,
                            c = e;
                            return (0, ii.getIn)(c, [r, n]) !== n && (c = zE(c, n, a, r, o)),
                            La(c, r, s, i, o)
                        }
                    case XP:
                        {
                            let {
                                elementId: r,
                                actionTypeId: n,
                                current: i,
                                actionItem: o
                            } = t.payload;
                            return La(e, r, n, i, o)
                        }
                    default:
                        return e
                }
            };
        lr.ixElements = VP;

        function zE(e, t, r, n, i) {
            let o = r === RP ? (0, ii.getIn)(i, ["config", "target", "objectId"]) : null;
            return (0, ii.mergeIn)(e, [n], {
                id: n,
                ref: t,
                refId: o,
                refType: r
            })
        }

        function La(e, t, r, n, i) {
            let o = BP(i),
                a = [t, UP, r];
            return (0, ii.mergeIn)(e, a, n, o)
        }
        var WP = [
            [CP, LP],
            [NP, PP],
            [qP, DP],
            [xP, MP]
        ];

        function BP(e) {
            let {
                config: t
            } = e;
            return WP.reduce((r, n) => {
                let i = n[0],
                    o = n[1],
                    a = t[i],
                    s = t[o];
                return a != null && s != null && (r[o] = s), r
            }, {})
        }
    });
    var $E = u(qe => {
        "use strict";
        Object.defineProperty(qe, "__esModule", {
            value: !0
        });
        qe.renderPlugin = qe.getPluginOrigin = qe.getPluginDuration = qe.getPluginDestination = qe.getPluginConfig = qe.createPluginInstance = qe.clearPlugin = void 0;
        var HP = e => e.value;
        qe.getPluginConfig = HP;
        var kP = (e, t) => {
            if (t.config.duration !== "auto") return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        };
        qe.getPluginDuration = kP;
        var jP = e => e || {
            value: 0
        };
        qe.getPluginOrigin = jP;
        var KP = e => ({
            value: e.value
        });
        qe.getPluginDestination = KP;
        var zP = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(), t.setSubframe(!0), t
        };
        qe.createPluginInstance = zP;
        var YP = (e, t, r) => {
            if (!e) return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        };
        qe.renderPlugin = YP;
        var $P = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        };
        qe.clearPlugin = $P
    });
    var Pa = u(Re => {
        "use strict";
        Object.defineProperty(Re, "__esModule", {
            value: !0
        });
        Re.getPluginOrigin = Re.getPluginDuration = Re.getPluginDestination = Re.getPluginConfig = Re.createPluginInstance = Re.clearPlugin = void 0;
        Re.isPluginType = JP;
        Re.renderPlugin = void 0;
        var Gt = $E(),
            QE = Ue(),
            QP = ei(),
            ZP = {
                [QE.ActionTypeConsts.PLUGIN_LOTTIE]: {
                    getConfig: Gt.getPluginConfig,
                    getOrigin: Gt.getPluginOrigin,
                    getDuration: Gt.getPluginDuration,
                    getDestination: Gt.getPluginDestination,
                    createInstance: Gt.createPluginInstance,
                    render: Gt.renderPlugin,
                    clear: Gt.clearPlugin
                }
            };

        function JP(e) {
            return e === QE.ActionTypeConsts.PLUGIN_LOTTIE
        }
        var Xt = e => t => {
                if (!QP.IS_BROWSER_ENV) return () => null;
                let r = ZP[t];
                if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
                let n = r[e];
                if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
                return n
            },
            eD = Xt("getConfig");
        Re.getPluginConfig = eD;
        var tD = Xt("getOrigin");
        Re.getPluginOrigin = tD;
        var rD = Xt("getDuration");
        Re.getPluginDuration = rD;
        var nD = Xt("getDestination");
        Re.getPluginDestination = nD;
        var iD = Xt("createInstance");
        Re.createPluginInstance = iD;
        var oD = Xt("render");
        Re.renderPlugin = oD;
        var aD = Xt("clear");
        Re.clearPlugin = aD
    });
    var JE = u((Ok, ZE) => {
        function sD(e, t) {
            return e == null || e !== e ? t : e
        }
        ZE.exports = sD
    });
    var th = u((Sk, eh) => {
        function uD(e, t, r, n) {
            var i = -1,
                o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
            return r
        }
        eh.exports = uD
    });
    var nh = u((bk, rh) => {
        function cD(e) {
            return function(t, r, n) {
                for (var i = -1, o = Object(t), a = n(t), s = a.length; s--;) {
                    var c = a[e ? s : ++i];
                    if (r(o[c], c, o) === !1) break
                }
                return t
            }
        }
        rh.exports = cD
    });
    var oh = u((Ak, ih) => {
        var lD = nh(),
            fD = lD();
        ih.exports = fD
    });
    var Da = u((wk, ah) => {
        var dD = oh(),
            pD = Br();

        function vD(e, t) {
            return e && dD(e, t, pD)
        }
        ah.exports = vD
    });
    var uh = u((Rk, sh) => {
        var ED = Mt();

        function hD(e, t) {
            return function(r, n) {
                if (r == null) return r;
                if (!ED(r)) return e(r, n);
                for (var i = r.length, o = t ? i : -1, a = Object(r);
                    (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;);
                return r
            }
        }
        sh.exports = hD
    });
    var Ma = u((Ck, ch) => {
        var gD = Da(),
            _D = uh(),
            yD = _D(gD);
        ch.exports = yD
    });
    var fh = u((Nk, lh) => {
        function mD(e, t, r, n, i) {
            return i(e, function(o, a, s) {
                r = n ? (n = !1, o) : t(r, o, a, s)
            }), r
        }
        lh.exports = mD
    });
    var ph = u((qk, dh) => {
        var ID = th(),
            TD = Ma(),
            OD = bt(),
            SD = fh(),
            bD = Ne();

        function AD(e, t, r) {
            var n = bD(e) ? ID : SD,
                i = arguments.length < 3;
            return n(e, OD(t, 4), r, i, TD)
        }
        dh.exports = AD
    });
    var Eh = u((xk, vh) => {
        var wD = Aa(),
            RD = bt(),
            CD = wa(),
            ND = Math.max,
            qD = Math.min;

        function xD(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = n - 1;
            return r !== void 0 && (i = CD(r), i = r < 0 ? ND(n + i, 0) : qD(i, n - 1)), wD(e, RD(t, 3), i, !0)
        }
        vh.exports = xD
    });
    var gh = u((Lk, hh) => {
        var LD = ba(),
            PD = Eh(),
            DD = LD(PD);
        hh.exports = DD
    });
    var yh = u(oi => {
        "use strict";
        Object.defineProperty(oi, "__esModule", {
            value: !0
        });
        oi.default = void 0;
        var MD = Object.prototype.hasOwnProperty;

        function _h(e, t) {
            return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
        }

        function FD(e, t) {
            if (_h(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            let r = Object.keys(e),
                n = Object.keys(t);
            if (r.length !== n.length) return !1;
            for (let i = 0; i < r.length; i++)
                if (!MD.call(t, r[i]) || !_h(e[r[i]], t[r[i]])) return !1;
            return !0
        }
        var GD = FD;
        oi.default = GD
    });
    var Uh = u(ge => {
        "use strict";
        var ui = ot().default;
        Object.defineProperty(ge, "__esModule", {
            value: !0
        });
        ge.cleanupHTMLElement = DM;
        ge.clearAllStyles = PM;
        ge.getActionListProgress = FM;
        ge.getAffectedElements = Wa;
        ge.getComputedStyle = cM;
        ge.getDestinationValues = hM;
        ge.getElementId = oM;
        ge.getInstanceId = nM;
        ge.getInstanceOrigin = dM;
        ge.getItemConfigByKey = void 0;
        ge.getMaxDurationItemIndex = Xh;
        ge.getNamespacedParameterId = UM;
        ge.getRenderType = Mh;
        ge.getStyleProp = gM;
        ge.mediaQueriesEqual = WM;
        ge.observeStore = uM;
        ge.reduceListToGroup = GM;
        ge.reifyState = aM;
        ge.renderHTMLElement = _M;
        Object.defineProperty(ge, "shallowEqual", {
            enumerable: !0,
            get: function() {
                return Ch.default
            }
        });
        ge.shouldAllowMediaQuery = VM;
        ge.shouldNamespaceEventParameter = XM;
        ge.stringifyTarget = BM;
        var At = ui(JE()),
            Ga = ui(ph()),
            Fa = ui(gh()),
            mh = tr(),
            Ut = Ue(),
            Ch = ui(yh()),
            XD = xa(),
            ft = Pa(),
            Fe = ei(),
            {
                BACKGROUND: UD,
                TRANSFORM: VD,
                TRANSLATE_3D: WD,
                SCALE_3D: BD,
                ROTATE_X: HD,
                ROTATE_Y: kD,
                ROTATE_Z: jD,
                SKEW: KD,
                PRESERVE_3D: zD,
                FLEX: YD,
                OPACITY: ai,
                FILTER: zr,
                FONT_VARIATION_SETTINGS: Yr,
                WIDTH: ct,
                HEIGHT: lt,
                BACKGROUND_COLOR: Nh,
                BORDER_COLOR: $D,
                COLOR: QD,
                CHILDREN: Ih,
                IMMEDIATE_CHILDREN: ZD,
                SIBLINGS: Th,
                PARENT: JD,
                DISPLAY: si,
                WILL_CHANGE: fr,
                AUTO: wt,
                COMMA_DELIMITER: $r,
                COLON_DELIMITER: eM,
                BAR_DELIMITER: Oh,
                RENDER_TRANSFORM: qh,
                RENDER_GENERAL: Xa,
                RENDER_STYLE: Ua,
                RENDER_PLUGIN: xh
            } = Ut.IX2EngineConstants,
            {
                TRANSFORM_MOVE: dr,
                TRANSFORM_SCALE: pr,
                TRANSFORM_ROTATE: vr,
                TRANSFORM_SKEW: Qr,
                STYLE_OPACITY: Lh,
                STYLE_FILTER: Zr,
                STYLE_FONT_VARIATION: Jr,
                STYLE_SIZE: Er,
                STYLE_BACKGROUND_COLOR: hr,
                STYLE_BORDER: gr,
                STYLE_TEXT_COLOR: _r,
                GENERAL_DISPLAY: ci
            } = Ut.ActionTypeConsts,
            tM = "OBJECT_VALUE",
            Ph = e => e.trim(),
            Va = Object.freeze({
                [hr]: Nh,
                [gr]: $D,
                [_r]: QD
            }),
            Dh = Object.freeze({
                [Fe.TRANSFORM_PREFIXED]: VD,
                [Nh]: UD,
                [ai]: ai,
                [zr]: zr,
                [ct]: ct,
                [lt]: lt,
                [Yr]: Yr
            }),
            Sh = {},
            rM = 1;

        function nM() {
            return "i" + rM++
        }
        var iM = 1;

        function oM(e, t) {
            for (let r in e) {
                let n = e[r];
                if (n && n.ref === t) return n.id
            }
            return "e" + iM++
        }

        function aM({
            events: e,
            actionLists: t,
            site: r
        } = {}) {
            let n = (0, Ga.default)(e, (a, s) => {
                    let {
                        eventTypeId: c
                    } = s;
                    return a[c] || (a[c] = {}), a[c][s.id] = s, a
                }, {}),
                i = r && r.mediaQueries,
                o = [];
            return i ? o = i.map(a => a.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
                ixData: {
                    events: e,
                    actionLists: t,
                    eventTypeMap: n,
                    mediaQueries: i,
                    mediaQueryKeys: o
                }
            }
        }
        var sM = (e, t) => e === t;

        function uM({
            store: e,
            select: t,
            onChange: r,
            comparator: n = sM
        }) {
            let {
                getState: i,
                subscribe: o
            } = e, a = o(c), s = t(i());

            function c() {
                let f = t(i());
                if (f == null) {
                    a();
                    return
                }
                n(f, s) || (s = f, r(s, e))
            }
            return a
        }

        function bh(e) {
            let t = typeof e;
            if (t === "string") return {
                id: e
            };
            if (e != null && t === "object") {
                let {
                    id: r,
                    objectId: n,
                    selector: i,
                    selectorGuids: o,
                    appliesTo: a,
                    useEventTarget: s
                } = e;
                return {
                    id: r,
                    objectId: n,
                    selector: i,
                    selectorGuids: o,
                    appliesTo: a,
                    useEventTarget: s
                }
            }
            return {}
        }

        function Wa({
            config: e,
            event: t,
            eventTarget: r,
            elementRoot: n,
            elementApi: i
        }) {
            var o, a, s;
            if (!i) throw new Error("IX2 missing elementApi");
            let {
                targets: c
            } = e;
            if (Array.isArray(c) && c.length > 0) return c.reduce((M, X) => M.concat(Wa({
                config: {
                    target: X
                },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: i
            })), []);
            let {
                getValidDocument: f,
                getQuerySelector: E,
                queryDocument: p,
                getChildElements: h,
                getSiblingElements: g,
                matchSelector: S,
                elementContains: b,
                isSiblingNode: x
            } = i, {
                target: A
            } = e;
            if (!A) return [];
            let {
                id: w,
                objectId: I,
                selector: N,
                selectorGuids: C,
                appliesTo: q,
                useEventTarget: G
            } = bh(A);
            if (I) return [Sh[I] || (Sh[I] = {})];
            if (q === Ut.EventAppliesTo.PAGE) {
                let M = f(w);
                return M ? [M] : []
            }
            let Y = ((o = t == null || (a = t.action) === null || a === void 0 || (s = a.config) === null || s === void 0 ? void 0 : s.affectedElements) !== null && o !== void 0 ? o : {})[w || N] || {},
                ie = !!(Y.id || Y.selector),
                ee, D, m, P = t && E(bh(t.target));
            if (ie ? (ee = Y.limitAffectedElements, D = P, m = E(Y)) : D = m = E({
                    id: w,
                    selector: N,
                    selectorGuids: C
                }), t && G) {
                let M = r && (m || G === !0) ? [r] : p(P);
                if (m) {
                    if (G === JD) return p(m).filter(X => M.some($ => b(X, $)));
                    if (G === Ih) return p(m).filter(X => M.some($ => b($, X)));
                    if (G === Th) return p(m).filter(X => M.some($ => x($, X)))
                }
                return M
            }
            return D == null || m == null ? [] : Fe.IS_BROWSER_ENV && n ? p(m).filter(M => n.contains(M)) : ee === Ih ? p(D, m) : ee === ZD ? h(p(D)).filter(S(m)) : ee === Th ? g(p(D)).filter(S(m)) : p(m)
        }

        function cM({
            element: e,
            actionItem: t
        }) {
            if (!Fe.IS_BROWSER_ENV) return {};
            let {
                actionTypeId: r
            } = t;
            switch (r) {
                case Er:
                case hr:
                case gr:
                case _r:
                case ci:
                    return window.getComputedStyle(e);
                default:
                    return {}
            }
        }
        var Ah = /px/,
            lM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = yM[n.type]), r), e || {}),
            fM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = mM[n.type] || n.defaultValue || 0), r), e || {});

        function dM(e, t = {}, r = {}, n, i) {
            let {
                getStyle: o
            } = i, {
                actionTypeId: a
            } = n;
            if ((0, ft.isPluginType)(a)) return (0, ft.getPluginOrigin)(a)(t[a]);
            switch (n.actionTypeId) {
                case dr:
                case pr:
                case vr:
                case Qr:
                    return t[n.actionTypeId] || Ba[n.actionTypeId];
                case Zr:
                    return lM(t[n.actionTypeId], n.config.filters);
                case Jr:
                    return fM(t[n.actionTypeId], n.config.fontVariations);
                case Lh:
                    return {
                        value: (0, At.default)(parseFloat(o(e, ai)), 1)
                    };
                case Er:
                    {
                        let s = o(e, ct),
                            c = o(e, lt),
                            f, E;
                        return n.config.widthUnit === wt ? f = Ah.test(s) ? parseFloat(s) : parseFloat(r.width) : f = (0, At.default)(parseFloat(s), parseFloat(r.width)),
                        n.config.heightUnit === wt ? E = Ah.test(c) ? parseFloat(c) : parseFloat(r.height) : E = (0, At.default)(parseFloat(c), parseFloat(r.height)),
                        {
                            widthValue: f,
                            heightValue: E
                        }
                    }
                case hr:
                case gr:
                case _r:
                    return qM({
                        element: e,
                        actionTypeId: n.actionTypeId,
                        computedStyle: r,
                        getStyle: o
                    });
                case ci:
                    return {
                        value: (0, At.default)(o(e, si), r.display)
                    };
                case tM:
                    return t[n.actionTypeId] || {
                        value: 0
                    };
                default:
                    return
            }
        }
        var pM = (e, t) => (t && (e[t.type] = t.value || 0), e),
            vM = (e, t) => (t && (e[t.type] = t.value || 0), e),
            EM = (e, t, r) => {
                if ((0, ft.isPluginType)(e)) return (0, ft.getPluginConfig)(e)(r, t);
                switch (e) {
                    case Zr:
                        {
                            let n = (0, Fa.default)(r.filters, ({
                                type: i
                            }) => i === t);
                            return n ? n.value : 0
                        }
                    case Jr:
                        {
                            let n = (0, Fa.default)(r.fontVariations, ({
                                type: i
                            }) => i === t);
                            return n ? n.value : 0
                        }
                    default:
                        return r[t]
                }
            };
        ge.getItemConfigByKey = EM;

        function hM({
            element: e,
            actionItem: t,
            elementApi: r
        }) {
            if ((0, ft.isPluginType)(t.actionTypeId)) return (0, ft.getPluginDestination)(t.actionTypeId)(t.config);
            switch (t.actionTypeId) {
                case dr:
                case pr:
                case vr:
                case Qr:
                    {
                        let {
                            xValue: n,
                            yValue: i,
                            zValue: o
                        } = t.config;
                        return {
                            xValue: n,
                            yValue: i,
                            zValue: o
                        }
                    }
                case Er:
                    {
                        let {
                            getStyle: n,
                            setStyle: i,
                            getProperty: o
                        } = r,
                        {
                            widthUnit: a,
                            heightUnit: s
                        } = t.config,
                        {
                            widthValue: c,
                            heightValue: f
                        } = t.config;
                        if (!Fe.IS_BROWSER_ENV) return {
                            widthValue: c,
                            heightValue: f
                        };
                        if (a === wt) {
                            let E = n(e, ct);
                            i(e, ct, ""), c = o(e, "offsetWidth"), i(e, ct, E)
                        }
                        if (s === wt) {
                            let E = n(e, lt);
                            i(e, lt, ""), f = o(e, "offsetHeight"), i(e, lt, E)
                        }
                        return {
                            widthValue: c,
                            heightValue: f
                        }
                    }
                case hr:
                case gr:
                case _r:
                    {
                        let {
                            rValue: n,
                            gValue: i,
                            bValue: o,
                            aValue: a
                        } = t.config;
                        return {
                            rValue: n,
                            gValue: i,
                            bValue: o,
                            aValue: a
                        }
                    }
                case Zr:
                    return t.config.filters.reduce(pM, {});
                case Jr:
                    return t.config.fontVariations.reduce(vM, {});
                default:
                    {
                        let {
                            value: n
                        } = t.config;
                        return {
                            value: n
                        }
                    }
            }
        }

        function Mh(e) {
            if (/^TRANSFORM_/.test(e)) return qh;
            if (/^STYLE_/.test(e)) return Ua;
            if (/^GENERAL_/.test(e)) return Xa;
            if (/^PLUGIN_/.test(e)) return xh
        }

        function gM(e, t) {
            return e === Ua ? t.replace("STYLE_", "").toLowerCase() : null
        }

        function _M(e, t, r, n, i, o, a, s, c) {
            switch (s) {
                case qh:
                    return OM(e, t, r, i, a);
                case Ua:
                    return xM(e, t, r, i, o, a);
                case Xa:
                    return LM(e, i, a);
                case xh:
                    {
                        let {
                            actionTypeId: f
                        } = i;
                        if ((0, ft.isPluginType)(f)) return (0, ft.renderPlugin)(f)(c, t, i)
                    }
            }
        }
        var Ba = {
                [dr]: Object.freeze({
                    xValue: 0,
                    yValue: 0,
                    zValue: 0
                }),
                [pr]: Object.freeze({
                    xValue: 1,
                    yValue: 1,
                    zValue: 1
                }),
                [vr]: Object.freeze({
                    xValue: 0,
                    yValue: 0,
                    zValue: 0
                }),
                [Qr]: Object.freeze({
                    xValue: 0,
                    yValue: 0
                })
            },
            yM = Object.freeze({
                blur: 0,
                "hue-rotate": 0,
                invert: 0,
                grayscale: 0,
                saturate: 100,
                sepia: 0,
                contrast: 100,
                brightness: 100
            }),
            mM = Object.freeze({
                wght: 0,
                opsz: 0,
                wdth: 0,
                slnt: 0
            }),
            IM = (e, t) => {
                let r = (0, Fa.default)(t.filters, ({
                    type: n
                }) => n === e);
                if (r && r.unit) return r.unit;
                switch (e) {
                    case "blur":
                        return "px";
                    case "hue-rotate":
                        return "deg";
                    default:
                        return "%"
                }
            },
            TM = Object.keys(Ba);

        function OM(e, t, r, n, i) {
            let o = TM.map(s => {
                    let c = Ba[s],
                        {
                            xValue: f = c.xValue,
                            yValue: E = c.yValue,
                            zValue: p = c.zValue,
                            xUnit: h = "",
                            yUnit: g = "",
                            zUnit: S = ""
                        } = t[s] || {};
                    switch (s) {
                        case dr:
                            return `${WD}(${f}${h}, ${E}${g}, ${p}${S})`;
                        case pr:
                            return `${BD}(${f}${h}, ${E}${g}, ${p}${S})`;
                        case vr:
                            return `${HD}(${f}${h}) ${kD}(${E}${g}) ${jD}(${p}${S})`;
                        case Qr:
                            return `${KD}(${f}${h}, ${E}${g})`;
                        default:
                            return ""
                    }
                }).join(" "),
                {
                    setStyle: a
                } = i;
            Vt(e, Fe.TRANSFORM_PREFIXED, i), a(e, Fe.TRANSFORM_PREFIXED, o), AM(n, r) && a(e, Fe.TRANSFORM_STYLE_PREFIXED, zD)
        }

        function SM(e, t, r, n) {
            let i = (0, Ga.default)(t, (a, s, c) => `${a} ${c}(${s}${IM(c,r)})`, ""),
                {
                    setStyle: o
                } = n;
            Vt(e, zr, n), o(e, zr, i)
        }

        function bM(e, t, r, n) {
            let i = (0, Ga.default)(t, (a, s, c) => (a.push(`"${c}" ${s}`), a), []).join(", "),
                {
                    setStyle: o
                } = n;
            Vt(e, Yr, n), o(e, Yr, i)
        }

        function AM({
            actionTypeId: e
        }, {
            xValue: t,
            yValue: r,
            zValue: n
        }) {
            return e === dr && n !== void 0 || e === pr && n !== void 0 || e === vr && (t !== void 0 || r !== void 0)
        }
        var wM = "\\(([^)]+)\\)",
            RM = /^rgb/,
            CM = RegExp(`rgba?${wM}`);

        function NM(e, t) {
            let r = e.exec(t);
            return r ? r[1] : ""
        }

        function qM({
            element: e,
            actionTypeId: t,
            computedStyle: r,
            getStyle: n
        }) {
            let i = Va[t],
                o = n(e, i),
                a = RM.test(o) ? o : r[i],
                s = NM(CM, a).split($r);
            return {
                rValue: (0, At.default)(parseInt(s[0], 10), 255),
                gValue: (0, At.default)(parseInt(s[1], 10), 255),
                bValue: (0, At.default)(parseInt(s[2], 10), 255),
                aValue: (0, At.default)(parseFloat(s[3]), 1)
            }
        }

        function xM(e, t, r, n, i, o) {
            let {
                setStyle: a
            } = o;
            switch (n.actionTypeId) {
                case Er:
                    {
                        let {
                            widthUnit: s = "",
                            heightUnit: c = ""
                        } = n.config,
                        {
                            widthValue: f,
                            heightValue: E
                        } = r;f !== void 0 && (s === wt && (s = "px"), Vt(e, ct, o), a(e, ct, f + s)),
                        E !== void 0 && (c === wt && (c = "px"), Vt(e, lt, o), a(e, lt, E + c));
                        break
                    }
                case Zr:
                    {
                        SM(e, r, n.config, o);
                        break
                    }
                case Jr:
                    {
                        bM(e, r, n.config, o);
                        break
                    }
                case hr:
                case gr:
                case _r:
                    {
                        let s = Va[n.actionTypeId],
                            c = Math.round(r.rValue),
                            f = Math.round(r.gValue),
                            E = Math.round(r.bValue),
                            p = r.aValue;Vt(e, s, o),
                        a(e, s, p >= 1 ? `rgb(${c},${f},${E})` : `rgba(${c},${f},${E},${p})`);
                        break
                    }
                default:
                    {
                        let {
                            unit: s = ""
                        } = n.config;Vt(e, i, o),
                        a(e, i, r.value + s);
                        break
                    }
            }
        }

        function LM(e, t, r) {
            let {
                setStyle: n
            } = r;
            switch (t.actionTypeId) {
                case ci:
                    {
                        let {
                            value: i
                        } = t.config;i === YD && Fe.IS_BROWSER_ENV ? n(e, si, Fe.FLEX_PREFIXED) : n(e, si, i);
                        return
                    }
            }
        }

        function Vt(e, t, r) {
            if (!Fe.IS_BROWSER_ENV) return;
            let n = Dh[t];
            if (!n) return;
            let {
                getStyle: i,
                setStyle: o
            } = r, a = i(e, fr);
            if (!a) {
                o(e, fr, n);
                return
            }
            let s = a.split($r).map(Ph);
            s.indexOf(n) === -1 && o(e, fr, s.concat(n).join($r))
        }

        function Fh(e, t, r) {
            if (!Fe.IS_BROWSER_ENV) return;
            let n = Dh[t];
            if (!n) return;
            let {
                getStyle: i,
                setStyle: o
            } = r, a = i(e, fr);
            !a || a.indexOf(n) === -1 || o(e, fr, a.split($r).map(Ph).filter(s => s !== n).join($r))
        }

        function PM({
            store: e,
            elementApi: t
        }) {
            let {
                ixData: r
            } = e.getState(), {
                events: n = {},
                actionLists: i = {}
            } = r;
            Object.keys(n).forEach(o => {
                let a = n[o],
                    {
                        config: s
                    } = a.action,
                    {
                        actionListId: c
                    } = s,
                    f = i[c];
                f && wh({
                    actionList: f,
                    event: a,
                    elementApi: t
                })
            }), Object.keys(i).forEach(o => {
                wh({
                    actionList: i[o],
                    elementApi: t
                })
            })
        }

        function wh({
            actionList: e = {},
            event: t,
            elementApi: r
        }) {
            let {
                actionItemGroups: n,
                continuousParameterGroups: i
            } = e;
            n && n.forEach(o => {
                Rh({
                    actionGroup: o,
                    event: t,
                    elementApi: r
                })
            }), i && i.forEach(o => {
                let {
                    continuousActionGroups: a
                } = o;
                a.forEach(s => {
                    Rh({
                        actionGroup: s,
                        event: t,
                        elementApi: r
                    })
                })
            })
        }

        function Rh({
            actionGroup: e,
            event: t,
            elementApi: r
        }) {
            let {
                actionItems: n
            } = e;
            n.forEach(({
                actionTypeId: i,
                config: o
            }) => {
                let a;
                (0, ft.isPluginType)(i) ? a = (0, ft.clearPlugin)(i): a = Gh({
                    effect: MM,
                    actionTypeId: i,
                    elementApi: r
                }), Wa({
                    config: o,
                    event: t,
                    elementApi: r
                }).forEach(a)
            })
        }

        function DM(e, t, r) {
            let {
                setStyle: n,
                getStyle: i
            } = r, {
                actionTypeId: o
            } = t;
            if (o === Er) {
                let {
                    config: a
                } = t;
                a.widthUnit === wt && n(e, ct, ""), a.heightUnit === wt && n(e, lt, "")
            }
            i(e, fr) && Gh({
                effect: Fh,
                actionTypeId: o,
                elementApi: r
            })(e)
        }
        var Gh = ({
            effect: e,
            actionTypeId: t,
            elementApi: r
        }) => n => {
            switch (t) {
                case dr:
                case pr:
                case vr:
                case Qr:
                    e(n, Fe.TRANSFORM_PREFIXED, r);
                    break;
                case Zr:
                    e(n, zr, r);
                    break;
                case Jr:
                    e(n, Yr, r);
                    break;
                case Lh:
                    e(n, ai, r);
                    break;
                case Er:
                    e(n, ct, r), e(n, lt, r);
                    break;
                case hr:
                case gr:
                case _r:
                    e(n, Va[t], r);
                    break;
                case ci:
                    e(n, si, r);
                    break
            }
        };

        function MM(e, t, r) {
            let {
                setStyle: n
            } = r;
            Fh(e, t, r), n(e, t, ""), t === Fe.TRANSFORM_PREFIXED && n(e, Fe.TRANSFORM_STYLE_PREFIXED, "")
        }

        function Xh(e) {
            let t = 0,
                r = 0;
            return e.forEach((n, i) => {
                let {
                    config: o
                } = n, a = o.delay + o.duration;
                a >= t && (t = a, r = i)
            }), r
        }

        function FM(e, t) {
            let {
                actionItemGroups: r,
                useFirstGroupAsInitialState: n
            } = e, {
                actionItem: i,
                verboseTimeElapsed: o = 0
            } = t, a = 0, s = 0;
            return r.forEach((c, f) => {
                if (n && f === 0) return;
                let {
                    actionItems: E
                } = c, p = E[Xh(E)], {
                    config: h,
                    actionTypeId: g
                } = p;
                i.id === p.id && (s = a + o);
                let S = Mh(g) === Xa ? 0 : h.duration;
                a += h.delay + S
            }), a > 0 ? (0, XD.optimizeFloat)(s / a) : 0
        }

        function GM({
            actionList: e,
            actionItemId: t,
            rawData: r
        }) {
            let {
                actionItemGroups: n,
                continuousParameterGroups: i
            } = e, o = [], a = s => (o.push((0, mh.mergeIn)(s, ["config"], {
                delay: 0,
                duration: 0
            })), s.id === t);
            return n && n.some(({
                actionItems: s
            }) => s.some(a)), i && i.some(s => {
                let {
                    continuousActionGroups: c
                } = s;
                return c.some(({
                    actionItems: f
                }) => f.some(a))
            }), (0, mh.setIn)(r, ["actionLists"], {
                [e.id]: {
                    id: e.id,
                    actionItemGroups: [{
                        actionItems: o
                    }]
                }
            })
        }

        function XM(e, {
            basedOn: t
        }) {
            return e === Ut.EventTypeConsts.SCROLLING_IN_VIEW && (t === Ut.EventBasedOn.ELEMENT || t == null) || e === Ut.EventTypeConsts.MOUSE_MOVE && t === Ut.EventBasedOn.ELEMENT
        }

        function UM(e, t) {
            return e + eM + t
        }

        function VM(e, t) {
            return t == null ? !0 : e.indexOf(t) !== -1
        }

        function WM(e, t) {
            return (0, Ch.default)(e && e.sort(), t && t.sort())
        }

        function BM(e) {
            if (typeof e == "string") return e;
            let {
                id: t = "",
                selector: r = "",
                useEventTarget: n = ""
            } = e;
            return t + Oh + r + Oh + n
        }
    });
    var Wt = u(Ge => {
        "use strict";
        var yr = Kt().default;
        Object.defineProperty(Ge, "__esModule", {
            value: !0
        });
        Ge.IX2VanillaUtils = Ge.IX2VanillaPlugins = Ge.IX2ElementsReducer = Ge.IX2Easings = Ge.IX2EasingUtils = Ge.IX2BrowserSupport = void 0;
        var HM = yr(ei());
        Ge.IX2BrowserSupport = HM;
        var kM = yr(Na());
        Ge.IX2Easings = kM;
        var jM = yr(xa());
        Ge.IX2EasingUtils = jM;
        var KM = yr(YE());
        Ge.IX2ElementsReducer = KM;
        var zM = yr(Pa());
        Ge.IX2VanillaPlugins = zM;
        var YM = yr(Uh());
        Ge.IX2VanillaUtils = YM
    });
    var Hh = u(fi => {
        "use strict";
        Object.defineProperty(fi, "__esModule", {
            value: !0
        });
        fi.ixInstances = void 0;
        var Vh = Ue(),
            Wh = Wt(),
            mr = tr(),
            {
                IX2_RAW_DATA_IMPORTED: $M,
                IX2_SESSION_STOPPED: QM,
                IX2_INSTANCE_ADDED: ZM,
                IX2_INSTANCE_STARTED: JM,
                IX2_INSTANCE_REMOVED: eF,
                IX2_ANIMATION_FRAME_CHANGED: tF
            } = Vh.IX2EngineActionTypes,
            {
                optimizeFloat: li,
                applyEasing: Bh,
                createBezierEasing: rF
            } = Wh.IX2EasingUtils,
            {
                RENDER_GENERAL: nF
            } = Vh.IX2EngineConstants,
            {
                getItemConfigByKey: Ha,
                getRenderType: iF,
                getStyleProp: oF
            } = Wh.IX2VanillaUtils,
            aF = (e, t) => {
                let {
                    position: r,
                    parameterId: n,
                    actionGroups: i,
                    destinationKeys: o,
                    smoothing: a,
                    restingValue: s,
                    actionTypeId: c,
                    customEasingFn: f,
                    skipMotion: E,
                    skipToValue: p
                } = e, {
                    parameters: h
                } = t.payload, g = Math.max(1 - a, .01), S = h[n];
                S == null && (g = 1, S = s);
                let b = Math.max(S, 0) || 0,
                    x = li(b - r),
                    A = E ? p : li(r + x * g),
                    w = A * 100;
                if (A === r && e.current) return e;
                let I, N, C, q;
                for (let j = 0, {
                        length: Y
                    } = i; j < Y; j++) {
                    let {
                        keyframe: ie,
                        actionItems: ee
                    } = i[j];
                    if (j === 0 && (I = ee[0]), w >= ie) {
                        I = ee[0];
                        let D = i[j + 1],
                            m = D && w !== ie;
                        N = m ? D.actionItems[0] : null, m && (C = ie / 100, q = (D.keyframe - ie) / 100)
                    }
                }
                let G = {};
                if (I && !N)
                    for (let j = 0, {
                            length: Y
                        } = o; j < Y; j++) {
                        let ie = o[j];
                        G[ie] = Ha(c, ie, I.config)
                    } else if (I && N && C !== void 0 && q !== void 0) {
                        let j = (A - C) / q,
                            Y = I.config.easing,
                            ie = Bh(Y, j, f);
                        for (let ee = 0, {
                                length: D
                            } = o; ee < D; ee++) {
                            let m = o[ee],
                                P = Ha(c, m, I.config),
                                $ = (Ha(c, m, N.config) - P) * ie + P;
                            G[m] = $
                        }
                    }
                return (0, mr.merge)(e, {
                    position: A,
                    current: G
                })
            },
            sF = (e, t) => {
                let {
                    active: r,
                    origin: n,
                    start: i,
                    immediate: o,
                    renderType: a,
                    verbose: s,
                    actionItem: c,
                    destination: f,
                    destinationKeys: E,
                    pluginDuration: p,
                    instanceDelay: h,
                    customEasingFn: g,
                    skipMotion: S
                } = e, b = c.config.easing, {
                    duration: x,
                    delay: A
                } = c.config;
                p != null && (x = p), A = h ?? A, a === nF ? x = 0 : (o || S) && (x = A = 0);
                let {
                    now: w
                } = t.payload;
                if (r && n) {
                    let I = w - (i + A);
                    if (s) {
                        let j = w - i,
                            Y = x + A,
                            ie = li(Math.min(Math.max(0, j / Y), 1));
                        e = (0, mr.set)(e, "verboseTimeElapsed", Y * ie)
                    }
                    if (I < 0) return e;
                    let N = li(Math.min(Math.max(0, I / x), 1)),
                        C = Bh(b, N, g),
                        q = {},
                        G = null;
                    return E.length && (G = E.reduce((j, Y) => {
                        let ie = f[Y],
                            ee = parseFloat(n[Y]) || 0,
                            m = (parseFloat(ie) - ee) * C + ee;
                        return j[Y] = m, j
                    }, {})), q.current = G, q.position = N, N === 1 && (q.active = !1, q.complete = !0), (0, mr.merge)(e, q)
                }
                return e
            },
            uF = (e = Object.freeze({}), t) => {
                switch (t.type) {
                    case $M:
                        return t.payload.ixInstances || Object.freeze({});
                    case QM:
                        return Object.freeze({});
                    case ZM:
                        {
                            let {
                                instanceId: r,
                                elementId: n,
                                actionItem: i,
                                eventId: o,
                                eventTarget: a,
                                eventStateKey: s,
                                actionListId: c,
                                groupIndex: f,
                                isCarrier: E,
                                origin: p,
                                destination: h,
                                immediate: g,
                                verbose: S,
                                continuous: b,
                                parameterId: x,
                                actionGroups: A,
                                smoothing: w,
                                restingValue: I,
                                pluginInstance: N,
                                pluginDuration: C,
                                instanceDelay: q,
                                skipMotion: G,
                                skipToValue: j
                            } = t.payload,
                            {
                                actionTypeId: Y
                            } = i,
                            ie = iF(Y),
                            ee = oF(ie, Y),
                            D = Object.keys(h).filter(P => h[P] != null),
                            {
                                easing: m
                            } = i.config;
                            return (0, mr.set)(e, r, {
                                id: r,
                                elementId: n,
                                active: !1,
                                position: 0,
                                start: 0,
                                origin: p,
                                destination: h,
                                destinationKeys: D,
                                immediate: g,
                                verbose: S,
                                current: null,
                                actionItem: i,
                                actionTypeId: Y,
                                eventId: o,
                                eventTarget: a,
                                eventStateKey: s,
                                actionListId: c,
                                groupIndex: f,
                                renderType: ie,
                                isCarrier: E,
                                styleProp: ee,
                                continuous: b,
                                parameterId: x,
                                actionGroups: A,
                                smoothing: w,
                                restingValue: I,
                                pluginInstance: N,
                                pluginDuration: C,
                                instanceDelay: q,
                                skipMotion: G,
                                skipToValue: j,
                                customEasingFn: Array.isArray(m) && m.length === 4 ? rF(m) : void 0
                            })
                        }
                    case JM:
                        {
                            let {
                                instanceId: r,
                                time: n
                            } = t.payload;
                            return (0, mr.mergeIn)(e, [r], {
                                active: !0,
                                complete: !1,
                                start: n
                            })
                        }
                    case eF:
                        {
                            let {
                                instanceId: r
                            } = t.payload;
                            if (!e[r]) return e;
                            let n = {},
                                i = Object.keys(e),
                                {
                                    length: o
                                } = i;
                            for (let a = 0; a < o; a++) {
                                let s = i[a];
                                s !== r && (n[s] = e[s])
                            }
                            return n
                        }
                    case tF:
                        {
                            let r = e,
                                n = Object.keys(e),
                                {
                                    length: i
                                } = n;
                            for (let o = 0; o < i; o++) {
                                let a = n[o],
                                    s = e[a],
                                    c = s.continuous ? aF : sF;
                                r = (0, mr.set)(r, a, c(s, t))
                            }
                            return r
                        }
                    default:
                        return e
                }
            };
        fi.ixInstances = uF
    });
    var kh = u(di => {
        "use strict";
        Object.defineProperty(di, "__esModule", {
            value: !0
        });
        di.ixParameters = void 0;
        var cF = Ue(),
            {
                IX2_RAW_DATA_IMPORTED: lF,
                IX2_SESSION_STOPPED: fF,
                IX2_PARAMETER_CHANGED: dF
            } = cF.IX2EngineActionTypes,
            pF = (e = {}, t) => {
                switch (t.type) {
                    case lF:
                        return t.payload.ixParameters || {};
                    case fF:
                        return {};
                    case dF:
                        {
                            let {
                                key: r,
                                value: n
                            } = t.payload;
                            return e[r] = n,
                            e
                        }
                    default:
                        return e
                }
            };
        di.ixParameters = pF
    });
    var jh = u(pi => {
        "use strict";
        Object.defineProperty(pi, "__esModule", {
            value: !0
        });
        pi.default = void 0;
        var vF = Ko(),
            EF = pf(),
            hF = xf(),
            gF = Pf(),
            _F = Wt(),
            yF = Hh(),
            mF = kh(),
            {
                ixElements: IF
            } = _F.IX2ElementsReducer,
            TF = (0, vF.combineReducers)({
                ixData: EF.ixData,
                ixRequest: hF.ixRequest,
                ixSession: gF.ixSession,
                ixElements: IF,
                ixInstances: yF.ixInstances,
                ixParameters: mF.ixParameters
            });
        pi.default = TF
    });
    var Kh = u((Uk, en) => {
        function OF(e, t) {
            if (e == null) return {};
            var r = {},
                n = Object.keys(e),
                i, o;
            for (o = 0; o < n.length; o++) i = n[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
            return r
        }
        en.exports = OF, en.exports.__esModule = !0, en.exports.default = en.exports
    });
    var Yh = u((Vk, zh) => {
        var SF = Ot(),
            bF = Ne(),
            AF = ht(),
            wF = "[object String]";

        function RF(e) {
            return typeof e == "string" || !bF(e) && AF(e) && SF(e) == wF
        }
        zh.exports = RF
    });
    var Qh = u((Wk, $h) => {
        var CF = Sa(),
            NF = CF("length");
        $h.exports = NF
    });
    var Jh = u((Bk, Zh) => {
        var qF = "\\ud800-\\udfff",
            xF = "\\u0300-\\u036f",
            LF = "\\ufe20-\\ufe2f",
            PF = "\\u20d0-\\u20ff",
            DF = xF + LF + PF,
            MF = "\\ufe0e\\ufe0f",
            FF = "\\u200d",
            GF = RegExp("[" + FF + qF + DF + MF + "]");

        function XF(e) {
            return GF.test(e)
        }
        Zh.exports = XF
    });
    var ug = u((Hk, sg) => {
        var tg = "\\ud800-\\udfff",
            UF = "\\u0300-\\u036f",
            VF = "\\ufe20-\\ufe2f",
            WF = "\\u20d0-\\u20ff",
            BF = UF + VF + WF,
            HF = "\\ufe0e\\ufe0f",
            kF = "[" + tg + "]",
            ka = "[" + BF + "]",
            ja = "\\ud83c[\\udffb-\\udfff]",
            jF = "(?:" + ka + "|" + ja + ")",
            rg = "[^" + tg + "]",
            ng = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            ig = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            KF = "\\u200d",
            og = jF + "?",
            ag = "[" + HF + "]?",
            zF = "(?:" + KF + "(?:" + [rg, ng, ig].join("|") + ")" + ag + og + ")*",
            YF = ag + og + zF,
            $F = "(?:" + [rg + ka + "?", ka, ng, ig, kF].join("|") + ")",
            eg = RegExp(ja + "(?=" + ja + ")|" + $F + YF, "g");

        function QF(e) {
            for (var t = eg.lastIndex = 0; eg.test(e);) ++t;
            return t
        }
        sg.exports = QF
    });
    var lg = u((kk, cg) => {
        var ZF = Qh(),
            JF = Jh(),
            e1 = ug();

        function t1(e) {
            return JF(e) ? e1(e) : ZF(e)
        }
        cg.exports = t1
    });
    var dg = u((jk, fg) => {
        var r1 = kn(),
            n1 = jn(),
            i1 = Mt(),
            o1 = Yh(),
            a1 = lg(),
            s1 = "[object Map]",
            u1 = "[object Set]";

        function c1(e) {
            if (e == null) return 0;
            if (i1(e)) return o1(e) ? a1(e) : e.length;
            var t = n1(e);
            return t == s1 || t == u1 ? e.size : r1(e).length
        }
        fg.exports = c1
    });
    var vg = u((Kk, pg) => {
        var l1 = "Expected a function";

        function f1(e) {
            if (typeof e != "function") throw new TypeError(l1);
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        pg.exports = f1
    });
    var Ka = u((zk, Eg) => {
        var d1 = St(),
            p1 = function() {
                try {
                    var e = d1(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch {}
            }();
        Eg.exports = p1
    });
    var za = u((Yk, gg) => {
        var hg = Ka();

        function v1(e, t, r) {
            t == "__proto__" && hg ? hg(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        gg.exports = v1
    });
    var yg = u(($k, _g) => {
        var E1 = za(),
            h1 = Dn(),
            g1 = Object.prototype,
            _1 = g1.hasOwnProperty;

        function y1(e, t, r) {
            var n = e[t];
            (!(_1.call(e, t) && h1(n, r)) || r === void 0 && !(t in e)) && E1(e, t, r)
        }
        _g.exports = y1
    });
    var Tg = u((Qk, Ig) => {
        var m1 = yg(),
            I1 = kr(),
            T1 = Vn(),
            mg = ut(),
            O1 = cr();

        function S1(e, t, r, n) {
            if (!mg(e)) return e;
            t = I1(t, e);
            for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o;) {
                var c = O1(t[i]),
                    f = r;
                if (c === "__proto__" || c === "constructor" || c === "prototype") return e;
                if (i != a) {
                    var E = s[c];
                    f = n ? n(E, c, s) : void 0, f === void 0 && (f = mg(E) ? E : T1(t[i + 1]) ? [] : {})
                }
                m1(s, c, f), s = s[c]
            }
            return e
        }
        Ig.exports = S1
    });
    var Sg = u((Zk, Og) => {
        var b1 = Yn(),
            A1 = Tg(),
            w1 = kr();

        function R1(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i;) {
                var a = t[n],
                    s = b1(e, a);
                r(s, a) && A1(o, w1(a, e), s)
            }
            return o
        }
        Og.exports = R1
    });
    var Ag = u((Jk, bg) => {
        var C1 = Xn(),
            N1 = Po(),
            q1 = ca(),
            x1 = ua(),
            L1 = Object.getOwnPropertySymbols,
            P1 = L1 ? function(e) {
                for (var t = []; e;) C1(t, q1(e)), e = N1(e);
                return t
            } : x1;
        bg.exports = P1
    });
    var Rg = u((ej, wg) => {
        function D1(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e)) t.push(r);
            return t
        }
        wg.exports = D1
    });
    var Ng = u((tj, Cg) => {
        var M1 = ut(),
            F1 = Hn(),
            G1 = Rg(),
            X1 = Object.prototype,
            U1 = X1.hasOwnProperty;

        function V1(e) {
            if (!M1(e)) return G1(e);
            var t = F1(e),
                r = [];
            for (var n in e) n == "constructor" && (t || !U1.call(e, n)) || r.push(n);
            return r
        }
        Cg.exports = V1
    });
    var xg = u((rj, qg) => {
        var W1 = fa(),
            B1 = Ng(),
            H1 = Mt();

        function k1(e) {
            return H1(e) ? W1(e, !0) : B1(e)
        }
        qg.exports = k1
    });
    var Pg = u((nj, Lg) => {
        var j1 = sa(),
            K1 = Ag(),
            z1 = xg();

        function Y1(e) {
            return j1(e, z1, K1)
        }
        Lg.exports = Y1
    });
    var Mg = u((ij, Dg) => {
        var $1 = Oa(),
            Q1 = bt(),
            Z1 = Sg(),
            J1 = Pg();

        function e2(e, t) {
            if (e == null) return {};
            var r = $1(J1(e), function(n) {
                return [n]
            });
            return t = Q1(t), Z1(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        Dg.exports = e2
    });
    var Gg = u((oj, Fg) => {
        var t2 = bt(),
            r2 = vg(),
            n2 = Mg();

        function i2(e, t) {
            return n2(e, r2(t2(t)))
        }
        Fg.exports = i2
    });
    var Ug = u((aj, Xg) => {
        var o2 = kn(),
            a2 = jn(),
            s2 = Xr(),
            u2 = Ne(),
            c2 = Mt(),
            l2 = Un(),
            f2 = Hn(),
            d2 = Bn(),
            p2 = "[object Map]",
            v2 = "[object Set]",
            E2 = Object.prototype,
            h2 = E2.hasOwnProperty;

        function g2(e) {
            if (e == null) return !0;
            if (c2(e) && (u2(e) || typeof e == "string" || typeof e.splice == "function" || l2(e) || d2(e) || s2(e))) return !e.length;
            var t = a2(e);
            if (t == p2 || t == v2) return !e.size;
            if (f2(e)) return !o2(e).length;
            for (var r in e)
                if (h2.call(e, r)) return !1;
            return !0
        }
        Xg.exports = g2
    });
    var Wg = u((sj, Vg) => {
        var _2 = za(),
            y2 = Da(),
            m2 = bt();

        function I2(e, t) {
            var r = {};
            return t = m2(t, 3), y2(e, function(n, i, o) {
                _2(r, i, t(n, i, o))
            }), r
        }
        Vg.exports = I2
    });
    var Hg = u((uj, Bg) => {
        function T2(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
            return e
        }
        Bg.exports = T2
    });
    var jg = u((cj, kg) => {
        var O2 = Qn();

        function S2(e) {
            return typeof e == "function" ? e : O2
        }
        kg.exports = S2
    });
    var zg = u((lj, Kg) => {
        var b2 = Hg(),
            A2 = Ma(),
            w2 = jg(),
            R2 = Ne();

        function C2(e, t) {
            var r = R2(e) ? b2 : A2;
            return r(e, w2(t))
        }
        Kg.exports = C2
    });
    var $g = u((fj, Yg) => {
        var N2 = Ze(),
            q2 = function() {
                return N2.Date.now()
            };
        Yg.exports = q2
    });
    var Jg = u((dj, Zg) => {
        var x2 = ut(),
            Ya = $g(),
            Qg = Zn(),
            L2 = "Expected a function",
            P2 = Math.max,
            D2 = Math.min;

        function M2(e, t, r) {
            var n, i, o, a, s, c, f = 0,
                E = !1,
                p = !1,
                h = !0;
            if (typeof e != "function") throw new TypeError(L2);
            t = Qg(t) || 0, x2(r) && (E = !!r.leading, p = "maxWait" in r, o = p ? P2(Qg(r.maxWait) || 0, t) : o, h = "trailing" in r ? !!r.trailing : h);

            function g(q) {
                var G = n,
                    j = i;
                return n = i = void 0, f = q, a = e.apply(j, G), a
            }

            function S(q) {
                return f = q, s = setTimeout(A, t), E ? g(q) : a
            }

            function b(q) {
                var G = q - c,
                    j = q - f,
                    Y = t - G;
                return p ? D2(Y, o - j) : Y
            }

            function x(q) {
                var G = q - c,
                    j = q - f;
                return c === void 0 || G >= t || G < 0 || p && j >= o
            }

            function A() {
                var q = Ya();
                if (x(q)) return w(q);
                s = setTimeout(A, b(q))
            }

            function w(q) {
                return s = void 0, h && n ? g(q) : (n = i = void 0, a)
            }

            function I() {
                s !== void 0 && clearTimeout(s), f = 0, n = c = i = s = void 0
            }

            function N() {
                return s === void 0 ? a : w(Ya())
            }

            function C() {
                var q = Ya(),
                    G = x(q);
                if (n = arguments, i = this, c = q, G) {
                    if (s === void 0) return S(c);
                    if (p) return clearTimeout(s), s = setTimeout(A, t), g(c)
                }
                return s === void 0 && (s = setTimeout(A, t)), a
            }
            return C.cancel = I, C.flush = N, C
        }
        Zg.exports = M2
    });
    var t_ = u((pj, e_) => {
        var F2 = Jg(),
            G2 = ut(),
            X2 = "Expected a function";

        function U2(e, t, r) {
            var n = !0,
                i = !0;
            if (typeof e != "function") throw new TypeError(X2);
            return G2(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), F2(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        e_.exports = U2
    });
    var vi = u(ae => {
        "use strict";
        var V2 = ot().default;
        Object.defineProperty(ae, "__esModule", {
            value: !0
        });
        ae.viewportWidthChanged = ae.testFrameRendered = ae.stopRequested = ae.sessionStopped = ae.sessionStarted = ae.sessionInitialized = ae.rawDataImported = ae.previewRequested = ae.playbackRequested = ae.parameterChanged = ae.mediaQueriesDefined = ae.instanceStarted = ae.instanceRemoved = ae.instanceAdded = ae.eventStateChanged = ae.eventListenerAdded = ae.elementStateChanged = ae.clearRequested = ae.animationFrameChanged = ae.actionListPlaybackChanged = void 0;
        var r_ = V2(Pr()),
            n_ = Ue(),
            W2 = Wt(),
            {
                IX2_RAW_DATA_IMPORTED: B2,
                IX2_SESSION_INITIALIZED: H2,
                IX2_SESSION_STARTED: k2,
                IX2_SESSION_STOPPED: j2,
                IX2_PREVIEW_REQUESTED: K2,
                IX2_PLAYBACK_REQUESTED: z2,
                IX2_STOP_REQUESTED: Y2,
                IX2_CLEAR_REQUESTED: $2,
                IX2_EVENT_LISTENER_ADDED: Q2,
                IX2_TEST_FRAME_RENDERED: Z2,
                IX2_EVENT_STATE_CHANGED: J2,
                IX2_ANIMATION_FRAME_CHANGED: eG,
                IX2_PARAMETER_CHANGED: tG,
                IX2_INSTANCE_ADDED: rG,
                IX2_INSTANCE_STARTED: nG,
                IX2_INSTANCE_REMOVED: iG,
                IX2_ELEMENT_STATE_CHANGED: oG,
                IX2_ACTION_LIST_PLAYBACK_CHANGED: aG,
                IX2_VIEWPORT_WIDTH_CHANGED: sG,
                IX2_MEDIA_QUERIES_DEFINED: uG
            } = n_.IX2EngineActionTypes,
            {
                reifyState: cG
            } = W2.IX2VanillaUtils,
            lG = e => ({
                type: B2,
                payload: (0, r_.default)({}, cG(e))
            });
        ae.rawDataImported = lG;
        var fG = ({
            hasBoundaryNodes: e,
            reducedMotion: t
        }) => ({
            type: H2,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        });
        ae.sessionInitialized = fG;
        var dG = () => ({
            type: k2
        });
        ae.sessionStarted = dG;
        var pG = () => ({
            type: j2
        });
        ae.sessionStopped = pG;
        var vG = ({
            rawData: e,
            defer: t
        }) => ({
            type: K2,
            payload: {
                defer: t,
                rawData: e
            }
        });
        ae.previewRequested = vG;
        var EG = ({
            actionTypeId: e = n_.ActionTypeConsts.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: r,
            eventId: n,
            allowEvents: i,
            immediate: o,
            testManual: a,
            verbose: s,
            rawData: c
        }) => ({
            type: z2,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: s,
                rawData: c
            }
        });
        ae.playbackRequested = EG;
        var hG = e => ({
            type: Y2,
            payload: {
                actionListId: e
            }
        });
        ae.stopRequested = hG;
        var gG = () => ({
            type: $2
        });
        ae.clearRequested = gG;
        var _G = (e, t) => ({
            type: Q2,
            payload: {
                target: e,
                listenerParams: t
            }
        });
        ae.eventListenerAdded = _G;
        var yG = (e = 1) => ({
            type: Z2,
            payload: {
                step: e
            }
        });
        ae.testFrameRendered = yG;
        var mG = (e, t) => ({
            type: J2,
            payload: {
                stateKey: e,
                newState: t
            }
        });
        ae.eventStateChanged = mG;
        var IG = (e, t) => ({
            type: eG,
            payload: {
                now: e,
                parameters: t
            }
        });
        ae.animationFrameChanged = IG;
        var TG = (e, t) => ({
            type: tG,
            payload: {
                key: e,
                value: t
            }
        });
        ae.parameterChanged = TG;
        var OG = e => ({
            type: rG,
            payload: (0, r_.default)({}, e)
        });
        ae.instanceAdded = OG;
        var SG = (e, t) => ({
            type: nG,
            payload: {
                instanceId: e,
                time: t
            }
        });
        ae.instanceStarted = SG;
        var bG = e => ({
            type: iG,
            payload: {
                instanceId: e
            }
        });
        ae.instanceRemoved = bG;
        var AG = (e, t, r, n) => ({
            type: oG,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        });
        ae.elementStateChanged = AG;
        var wG = ({
            actionListId: e,
            isPlaying: t
        }) => ({
            type: aG,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        });
        ae.actionListPlaybackChanged = wG;
        var RG = ({
            width: e,
            mediaQueries: t
        }) => ({
            type: sG,
            payload: {
                width: e,
                mediaQueries: t
            }
        });
        ae.viewportWidthChanged = RG;
        var CG = () => ({
            type: uG
        });
        ae.mediaQueriesDefined = CG
    });
    var a_ = u(xe => {
        "use strict";
        Object.defineProperty(xe, "__esModule", {
            value: !0
        });
        xe.elementContains = VG;
        xe.getChildElements = BG;
        xe.getClosestElement = void 0;
        xe.getProperty = MG;
        xe.getQuerySelector = GG;
        xe.getRefType = jG;
        xe.getSiblingElements = HG;
        xe.getStyle = DG;
        xe.getValidDocument = XG;
        xe.isSiblingNode = WG;
        xe.matchSelector = FG;
        xe.queryDocument = UG;
        xe.setStyle = PG;
        var NG = Wt(),
            qG = Ue(),
            {
                ELEMENT_MATCHES: $a
            } = NG.IX2BrowserSupport,
            {
                IX2_ID_DELIMITER: i_,
                HTML_ELEMENT: xG,
                PLAIN_OBJECT: LG,
                WF_PAGE: o_
            } = qG.IX2EngineConstants;

        function PG(e, t, r) {
            e.style[t] = r
        }

        function DG(e, t) {
            return e.style[t]
        }

        function MG(e, t) {
            return e[t]
        }

        function FG(e) {
            return t => t[$a](e)
        }

        function GG({
            id: e,
            selector: t
        }) {
            if (e) {
                let r = e;
                if (e.indexOf(i_) !== -1) {
                    let n = e.split(i_),
                        i = n[0];
                    if (r = n[1], i !== document.documentElement.getAttribute(o_)) return null
                }
                return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
            }
            return t
        }

        function XG(e) {
            return e == null || e === document.documentElement.getAttribute(o_) ? document : null
        }

        function UG(e, t) {
            return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
        }

        function VG(e, t) {
            return e.contains(t)
        }

        function WG(e, t) {
            return e !== t && e.parentNode === t.parentNode
        }

        function BG(e) {
            let t = [];
            for (let r = 0, {
                    length: n
                } = e || []; r < n; r++) {
                let {
                    children: i
                } = e[r], {
                    length: o
                } = i;
                if (o)
                    for (let a = 0; a < o; a++) t.push(i[a])
            }
            return t
        }

        function HG(e = []) {
            let t = [],
                r = [];
            for (let n = 0, {
                    length: i
                } = e; n < i; n++) {
                let {
                    parentNode: o
                } = e[n];
                if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
                r.push(o);
                let a = o.firstElementChild;
                for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling
            }
            return t
        }
        var kG = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
                if (r[$a] && r[$a](t)) return r;
                r = r.parentNode
            } while (r != null);
            return null
        };
        xe.getClosestElement = kG;

        function jG(e) {
            return e != null && typeof e == "object" ? e instanceof Element ? xG : LG : null
        }
    });
    var Qa = u((hj, u_) => {
        var KG = ut(),
            s_ = Object.create,
            zG = function() {
                function e() {}
                return function(t) {
                    if (!KG(t)) return {};
                    if (s_) return s_(t);
                    e.prototype = t;
                    var r = new e;
                    return e.prototype = void 0, r
                }
            }();
        u_.exports = zG
    });
    var Ei = u((gj, c_) => {
        function YG() {}
        c_.exports = YG
    });
    var gi = u((_j, l_) => {
        var $G = Qa(),
            QG = Ei();

        function hi(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        hi.prototype = $G(QG.prototype);
        hi.prototype.constructor = hi;
        l_.exports = hi
    });
    var v_ = u((yj, p_) => {
        var f_ = Qt(),
            ZG = Xr(),
            JG = Ne(),
            d_ = f_ ? f_.isConcatSpreadable : void 0;

        function eX(e) {
            return JG(e) || ZG(e) || !!(d_ && e && e[d_])
        }
        p_.exports = eX
    });
    var g_ = u((mj, h_) => {
        var tX = Xn(),
            rX = v_();

        function E_(e, t, r, n, i) {
            var o = -1,
                a = e.length;
            for (r || (r = rX), i || (i = []); ++o < a;) {
                var s = e[o];
                t > 0 && r(s) ? t > 1 ? E_(s, t - 1, r, n, i) : tX(i, s) : n || (i[i.length] = s)
            }
            return i
        }
        h_.exports = E_
    });
    var y_ = u((Ij, __) => {
        var nX = g_();

        function iX(e) {
            var t = e == null ? 0 : e.length;
            return t ? nX(e, 1) : []
        }
        __.exports = iX
    });
    var I_ = u((Tj, m_) => {
        function oX(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        m_.exports = oX
    });
    var S_ = u((Oj, O_) => {
        var aX = I_(),
            T_ = Math.max;

        function sX(e, t, r) {
            return t = T_(t === void 0 ? e.length - 1 : t, 0),
                function() {
                    for (var n = arguments, i = -1, o = T_(n.length - t, 0), a = Array(o); ++i < o;) a[i] = n[t + i];
                    i = -1;
                    for (var s = Array(t + 1); ++i < t;) s[i] = n[i];
                    return s[t] = r(a), aX(e, this, s)
                }
        }
        O_.exports = sX
    });
    var A_ = u((Sj, b_) => {
        function uX(e) {
            return function() {
                return e
            }
        }
        b_.exports = uX
    });
    var C_ = u((bj, R_) => {
        var cX = A_(),
            w_ = Ka(),
            lX = Qn(),
            fX = w_ ? function(e, t) {
                return w_(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: cX(t),
                    writable: !0
                })
            } : lX;
        R_.exports = fX
    });
    var q_ = u((Aj, N_) => {
        var dX = 800,
            pX = 16,
            vX = Date.now;

        function EX(e) {
            var t = 0,
                r = 0;
            return function() {
                var n = vX(),
                    i = pX - (n - r);
                if (r = n, i > 0) {
                    if (++t >= dX) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        N_.exports = EX
    });
    var L_ = u((wj, x_) => {
        var hX = C_(),
            gX = q_(),
            _X = gX(hX);
        x_.exports = _X
    });
    var D_ = u((Rj, P_) => {
        var yX = y_(),
            mX = S_(),
            IX = L_();

        function TX(e) {
            return IX(mX(e, void 0, yX), e + "")
        }
        P_.exports = TX
    });
    var G_ = u((Cj, F_) => {
        var M_ = da(),
            OX = M_ && new M_;
        F_.exports = OX
    });
    var U_ = u((Nj, X_) => {
        function SX() {}
        X_.exports = SX
    });
    var Za = u((qj, W_) => {
        var V_ = G_(),
            bX = U_(),
            AX = V_ ? function(e) {
                return V_.get(e)
            } : bX;
        W_.exports = AX
    });
    var H_ = u((xj, B_) => {
        var wX = {};
        B_.exports = wX
    });
    var Ja = u((Lj, j_) => {
        var k_ = H_(),
            RX = Object.prototype,
            CX = RX.hasOwnProperty;

        function NX(e) {
            for (var t = e.name + "", r = k_[t], n = CX.call(k_, t) ? r.length : 0; n--;) {
                var i = r[n],
                    o = i.func;
                if (o == null || o == e) return i.name
            }
            return t
        }
        j_.exports = NX
    });
    var yi = u((Pj, K_) => {
        var qX = Qa(),
            xX = Ei(),
            LX = 4294967295;

        function _i(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = LX, this.__views__ = []
        }
        _i.prototype = qX(xX.prototype);
        _i.prototype.constructor = _i;
        K_.exports = _i
    });
    var Y_ = u((Dj, z_) => {
        function PX(e, t) {
            var r = -1,
                n = e.length;
            for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
            return t
        }
        z_.exports = PX
    });
    var Q_ = u((Mj, $_) => {
        var DX = yi(),
            MX = gi(),
            FX = Y_();

        function GX(e) {
            if (e instanceof DX) return e.clone();
            var t = new MX(e.__wrapped__, e.__chain__);
            return t.__actions__ = FX(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        $_.exports = GX
    });
    var ey = u((Fj, J_) => {
        var XX = yi(),
            Z_ = gi(),
            UX = Ei(),
            VX = Ne(),
            WX = ht(),
            BX = Q_(),
            HX = Object.prototype,
            kX = HX.hasOwnProperty;

        function mi(e) {
            if (WX(e) && !VX(e) && !(e instanceof XX)) {
                if (e instanceof Z_) return e;
                if (kX.call(e, "__wrapped__")) return BX(e)
            }
            return new Z_(e)
        }
        mi.prototype = UX.prototype;
        mi.prototype.constructor = mi;
        J_.exports = mi
    });
    var ry = u((Gj, ty) => {
        var jX = yi(),
            KX = Za(),
            zX = Ja(),
            YX = ey();

        function $X(e) {
            var t = zX(e),
                r = YX[t];
            if (typeof r != "function" || !(t in jX.prototype)) return !1;
            if (e === r) return !0;
            var n = KX(r);
            return !!n && e === n[0]
        }
        ty.exports = $X
    });
    var ay = u((Xj, oy) => {
        var ny = gi(),
            QX = D_(),
            ZX = Za(),
            es = Ja(),
            JX = Ne(),
            iy = ry(),
            eU = "Expected a function",
            tU = 8,
            rU = 32,
            nU = 128,
            iU = 256;

        function oU(e) {
            return QX(function(t) {
                var r = t.length,
                    n = r,
                    i = ny.prototype.thru;
                for (e && t.reverse(); n--;) {
                    var o = t[n];
                    if (typeof o != "function") throw new TypeError(eU);
                    if (i && !a && es(o) == "wrapper") var a = new ny([], !0)
                }
                for (n = a ? n : r; ++n < r;) {
                    o = t[n];
                    var s = es(o),
                        c = s == "wrapper" ? ZX(o) : void 0;
                    c && iy(c[0]) && c[1] == (nU | tU | rU | iU) && !c[4].length && c[9] == 1 ? a = a[es(c[0])].apply(a, c[3]) : a = o.length == 1 && iy(o) ? a[s]() : a.thru(o)
                }
                return function() {
                    var f = arguments,
                        E = f[0];
                    if (a && f.length == 1 && JX(E)) return a.plant(E).value();
                    for (var p = 0, h = r ? t[p].apply(this, f) : E; ++p < r;) h = t[p].call(this, h);
                    return h
                }
            })
        }
        oy.exports = oU
    });
    var uy = u((Uj, sy) => {
        var aU = ay(),
            sU = aU();
        sy.exports = sU
    });
    var ly = u((Vj, cy) => {
        function uU(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
        }
        cy.exports = uU
    });
    var dy = u((Wj, fy) => {
        var cU = ly(),
            ts = Zn();

        function lU(e, t, r) {
            return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = ts(r), r = r === r ? r : 0), t !== void 0 && (t = ts(t), t = t === t ? t : 0), cU(ts(e), t, r)
        }
        fy.exports = lU
    });
    var Ny = u(bi => {
        "use strict";
        var Si = ot().default;
        Object.defineProperty(bi, "__esModule", {
            value: !0
        });
        bi.default = void 0;
        var He = Si(Pr()),
            fU = Si(uy()),
            dU = Si($n()),
            pU = Si(dy()),
            Bt = Ue(),
            rs = as(),
            Ii = vi(),
            vU = Wt(),
            {
                MOUSE_CLICK: EU,
                MOUSE_SECOND_CLICK: hU,
                MOUSE_DOWN: gU,
                MOUSE_UP: _U,
                MOUSE_OVER: yU,
                MOUSE_OUT: mU,
                DROPDOWN_CLOSE: IU,
                DROPDOWN_OPEN: TU,
                SLIDER_ACTIVE: OU,
                SLIDER_INACTIVE: SU,
                TAB_ACTIVE: bU,
                TAB_INACTIVE: AU,
                NAVBAR_CLOSE: wU,
                NAVBAR_OPEN: RU,
                MOUSE_MOVE: CU,
                PAGE_SCROLL_DOWN: Iy,
                SCROLL_INTO_VIEW: Ty,
                SCROLL_OUT_OF_VIEW: NU,
                PAGE_SCROLL_UP: qU,
                SCROLLING_IN_VIEW: xU,
                PAGE_FINISH: Oy,
                ECOMMERCE_CART_CLOSE: LU,
                ECOMMERCE_CART_OPEN: PU,
                PAGE_START: Sy,
                PAGE_SCROLL: DU
            } = Bt.EventTypeConsts,
            ns = "COMPONENT_ACTIVE",
            by = "COMPONENT_INACTIVE",
            {
                COLON_DELIMITER: py
            } = Bt.IX2EngineConstants,
            {
                getNamespacedParameterId: vy
            } = vU.IX2VanillaUtils,
            Ay = e => t => typeof t == "object" && e(t) ? !0 : t,
            rn = Ay(({
                element: e,
                nativeEvent: t
            }) => e === t.target),
            MU = Ay(({
                element: e,
                nativeEvent: t
            }) => e.contains(t.target)),
            dt = (0, fU.default)([rn, MU]),
            wy = (e, t) => {
                if (t) {
                    let {
                        ixData: r
                    } = e.getState(), {
                        events: n
                    } = r, i = n[t];
                    if (i && !GU[i.eventTypeId]) return i
                }
                return null
            },
            FU = ({
                store: e,
                event: t
            }) => {
                let {
                    action: r
                } = t, {
                    autoStopEventId: n
                } = r.config;
                return !!wy(e, n)
            },
            We = ({
                store: e,
                event: t,
                element: r,
                eventStateKey: n
            }, i) => {
                let {
                    action: o,
                    id: a
                } = t, {
                    actionListId: s,
                    autoStopEventId: c
                } = o.config, f = wy(e, c);
                return f && (0, rs.stopActionGroup)({
                    store: e,
                    eventId: c,
                    eventTarget: r,
                    eventStateKey: c + py + n.split(py)[1],
                    actionListId: (0, dU.default)(f, "action.config.actionListId")
                }), (0, rs.stopActionGroup)({
                    store: e,
                    eventId: a,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: s
                }), (0, rs.startActionGroup)({
                    store: e,
                    eventId: a,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: s
                }), i
            },
            Je = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
            nn = {
                handler: Je(dt, We)
            },
            Ry = (0, He.default)({}, nn, {
                types: [ns, by].join(" ")
            }),
            is = [{
                target: window,
                types: "resize orientationchange",
                throttle: !0
            }, {
                target: document,
                types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
                throttle: !0
            }],
            Ey = "mouseover mouseout",
            os = {
                types: is
            },
            GU = {
                PAGE_START: Sy,
                PAGE_FINISH: Oy
            },
            tn = (() => {
                let e = window.pageXOffset !== void 0,
                    r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
                return () => ({
                    scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                    scrollTop: e ? window.pageYOffset : r.scrollTop,
                    stiffScrollTop: (0, pU.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                    scrollWidth: r.scrollWidth,
                    scrollHeight: r.scrollHeight,
                    clientWidth: r.clientWidth,
                    clientHeight: r.clientHeight,
                    innerWidth: window.innerWidth,
                    innerHeight: window.innerHeight
                })
            })(),
            XU = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
            UU = ({
                element: e,
                nativeEvent: t
            }) => {
                let {
                    type: r,
                    target: n,
                    relatedTarget: i
                } = t, o = e.contains(n);
                if (r === "mouseover" && o) return !0;
                let a = e.contains(i);
                return !!(r === "mouseout" && o && a)
            },
            VU = e => {
                let {
                    element: t,
                    event: {
                        config: r
                    }
                } = e, {
                    clientWidth: n,
                    clientHeight: i
                } = tn(), o = r.scrollOffsetValue, c = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
                return XU(t.getBoundingClientRect(), {
                    left: 0,
                    top: c,
                    right: n,
                    bottom: i - c
                })
            },
            Cy = e => (t, r) => {
                let {
                    type: n
                } = t.nativeEvent, i = [ns, by].indexOf(n) !== -1 ? n === ns : r.isActive, o = (0, He.default)({}, r, {
                    isActive: i
                });
                return (!r || o.isActive !== r.isActive) && e(t, o) || o
            },
            hy = e => (t, r) => {
                let n = {
                    elementHovered: UU(t)
                };
                return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
            },
            WU = e => (t, r) => {
                let n = (0, He.default)({}, r, {
                    elementVisible: VU(t)
                });
                return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
            },
            gy = e => (t, r = {}) => {
                let {
                    stiffScrollTop: n,
                    scrollHeight: i,
                    innerHeight: o
                } = tn(), {
                    event: {
                        config: a,
                        eventTypeId: s
                    }
                } = t, {
                    scrollOffsetValue: c,
                    scrollOffsetUnit: f
                } = a, E = f === "PX", p = i - o, h = Number((n / p).toFixed(2));
                if (r && r.percentTop === h) return r;
                let g = (E ? c : o * (c || 0) / 100) / p,
                    S, b, x = 0;
                r && (S = h > r.percentTop, b = r.scrollingDown !== S, x = b ? h : r.anchorTop);
                let A = s === Iy ? h >= x + g : h <= x - g,
                    w = (0, He.default)({}, r, {
                        percentTop: h,
                        inBounds: A,
                        anchorTop: x,
                        scrollingDown: S
                    });
                return r && A && (b || w.inBounds !== r.inBounds) && e(t, w) || w
            },
            BU = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
            HU = e => (t, r) => {
                let n = {
                    finished: document.readyState === "complete"
                };
                return n.finished && !(r && r.finshed) && e(t), n
            },
            kU = e => (t, r) => {
                let n = {
                    started: !0
                };
                return r || e(t), n
            },
            _y = e => (t, r = {
                clickCount: 0
            }) => {
                let n = {
                    clickCount: r.clickCount % 2 + 1
                };
                return n.clickCount !== r.clickCount && e(t, n) || n
            },
            Ti = (e = !0) => (0, He.default)({}, Ry, {
                handler: Je(e ? dt : rn, Cy((t, r) => r.isActive ? nn.handler(t, r) : r))
            }),
            Oi = (e = !0) => (0, He.default)({}, Ry, {
                handler: Je(e ? dt : rn, Cy((t, r) => r.isActive ? r : nn.handler(t, r)))
            }),
            yy = (0, He.default)({}, os, {
                handler: WU((e, t) => {
                    let {
                        elementVisible: r
                    } = t, {
                        event: n,
                        store: i
                    } = e, {
                        ixData: o
                    } = i.getState(), {
                        events: a
                    } = o;
                    return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === Ty === r ? (We(e), (0, He.default)({}, t, {
                        triggered: !0
                    })) : t
                })
            }),
            my = .05,
            jU = {
                [OU]: Ti(),
                [SU]: Oi(),
                [TU]: Ti(),
                [IU]: Oi(),
                [RU]: Ti(!1),
                [wU]: Oi(!1),
                [bU]: Ti(),
                [AU]: Oi(),
                [PU]: {
                    types: "ecommerce-cart-open",
                    handler: Je(dt, We)
                },
                [LU]: {
                    types: "ecommerce-cart-close",
                    handler: Je(dt, We)
                },
                [EU]: {
                    types: "click",
                    handler: Je(dt, _y((e, {
                        clickCount: t
                    }) => {
                        FU(e) ? t === 1 && We(e) : We(e)
                    }))
                },
                [hU]: {
                    types: "click",
                    handler: Je(dt, _y((e, {
                        clickCount: t
                    }) => {
                        t === 2 && We(e)
                    }))
                },
                [gU]: (0, He.default)({}, nn, {
                    types: "mousedown"
                }),
                [_U]: (0, He.default)({}, nn, {
                    types: "mouseup"
                }),
                [yU]: {
                    types: Ey,
                    handler: Je(dt, hy((e, t) => {
                        t.elementHovered && We(e)
                    }))
                },
                [mU]: {
                    types: Ey,
                    handler: Je(dt, hy((e, t) => {
                        t.elementHovered || We(e)
                    }))
                },
                [CU]: {
                    types: "mousemove mouseout scroll",
                    handler: ({
                        store: e,
                        element: t,
                        eventConfig: r,
                        nativeEvent: n,
                        eventStateKey: i
                    }, o = {
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0
                    }) => {
                        let {
                            basedOn: a,
                            selectedAxis: s,
                            continuousParameterGroupId: c,
                            reverse: f,
                            restingState: E = 0
                        } = r, {
                            clientX: p = o.clientX,
                            clientY: h = o.clientY,
                            pageX: g = o.pageX,
                            pageY: S = o.pageY
                        } = n, b = s === "X_AXIS", x = n.type === "mouseout", A = E / 100, w = c, I = !1;
                        switch (a) {
                            case Bt.EventBasedOn.VIEWPORT:
                                {
                                    A = b ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(h, window.innerHeight) / window.innerHeight;
                                    break
                                }
                            case Bt.EventBasedOn.PAGE:
                                {
                                    let {
                                        scrollLeft: N,
                                        scrollTop: C,
                                        scrollWidth: q,
                                        scrollHeight: G
                                    } = tn();A = b ? Math.min(N + g, q) / q : Math.min(C + S, G) / G;
                                    break
                                }
                            case Bt.EventBasedOn.ELEMENT:
                            default:
                                {
                                    w = vy(i, c);
                                    let N = n.type.indexOf("mouse") === 0;
                                    if (N && dt({
                                            element: t,
                                            nativeEvent: n
                                        }) !== !0) break;
                                    let C = t.getBoundingClientRect(),
                                        {
                                            left: q,
                                            top: G,
                                            width: j,
                                            height: Y
                                        } = C;
                                    if (!N && !BU({
                                            left: p,
                                            top: h
                                        }, C)) break;I = !0,
                                    A = b ? (p - q) / j : (h - G) / Y;
                                    break
                                }
                        }
                        return x && (A > 1 - my || A < my) && (A = Math.round(A)), (a !== Bt.EventBasedOn.ELEMENT || I || I !== o.elementHovered) && (A = f ? 1 - A : A, e.dispatch((0, Ii.parameterChanged)(w, A))), {
                            elementHovered: I,
                            clientX: p,
                            clientY: h,
                            pageX: g,
                            pageY: S
                        }
                    }
                },
                [DU]: {
                    types: is,
                    handler: ({
                        store: e,
                        eventConfig: t
                    }) => {
                        let {
                            continuousParameterGroupId: r,
                            reverse: n
                        } = t, {
                            scrollTop: i,
                            scrollHeight: o,
                            clientHeight: a
                        } = tn(), s = i / (o - a);
                        s = n ? 1 - s : s, e.dispatch((0, Ii.parameterChanged)(r, s))
                    }
                },
                [xU]: {
                    types: is,
                    handler: ({
                        element: e,
                        store: t,
                        eventConfig: r,
                        eventStateKey: n
                    }, i = {
                        scrollPercent: 0
                    }) => {
                        let {
                            scrollLeft: o,
                            scrollTop: a,
                            scrollWidth: s,
                            scrollHeight: c,
                            clientHeight: f
                        } = tn(), {
                            basedOn: E,
                            selectedAxis: p,
                            continuousParameterGroupId: h,
                            startsEntering: g,
                            startsExiting: S,
                            addEndOffset: b,
                            addStartOffset: x,
                            addOffsetValue: A = 0,
                            endOffsetValue: w = 0
                        } = r, I = p === "X_AXIS";
                        if (E === Bt.EventBasedOn.VIEWPORT) {
                            let N = I ? o / s : a / c;
                            return N !== i.scrollPercent && t.dispatch((0, Ii.parameterChanged)(h, N)), {
                                scrollPercent: N
                            }
                        } else {
                            let N = vy(n, h),
                                C = e.getBoundingClientRect(),
                                q = (x ? A : 0) / 100,
                                G = (b ? w : 0) / 100;
                            q = g ? q : 1 - q, G = S ? G : 1 - G;
                            let j = C.top + Math.min(C.height * q, f),
                                ie = C.top + C.height * G - j,
                                ee = Math.min(f + ie, c),
                                m = Math.min(Math.max(0, f - j), ee) / ee;
                            return m !== i.scrollPercent && t.dispatch((0, Ii.parameterChanged)(N, m)), {
                                scrollPercent: m
                            }
                        }
                    }
                },
                [Ty]: yy,
                [NU]: yy,
                [Iy]: (0, He.default)({}, os, {
                    handler: gy((e, t) => {
                        t.scrollingDown && We(e)
                    })
                }),
                [qU]: (0, He.default)({}, os, {
                    handler: gy((e, t) => {
                        t.scrollingDown || We(e)
                    })
                }),
                [Oy]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: Je(rn, HU(We))
                },
                [Sy]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: Je(rn, kU(We))
                }
            };
        bi.default = jU
    });
    var as = u(Ct => {
        "use strict";
        var tt = ot().default,
            KU = Kt().default;
        Object.defineProperty(Ct, "__esModule", {
            value: !0
        });
        Ct.observeRequests = TV;
        Ct.startActionGroup = ps;
        Ct.startEngine = Ci;
        Ct.stopActionGroup = ds;
        Ct.stopAllActionGroups = Xy;
        Ct.stopEngine = Ni;
        var zU = tt(Pr()),
            YU = tt(Kh()),
            $U = tt(Ra()),
            Rt = tt($n()),
            QU = tt(dg()),
            ZU = tt(Gg()),
            JU = tt(Ug()),
            eV = tt(Wg()),
            on = tt(zg()),
            tV = tt(t_()),
            et = Ue(),
            Ly = Wt(),
            Oe = vi(),
            we = KU(a_()),
            rV = tt(Ny()),
            nV = ["store", "computedStyle"],
            iV = Object.keys(et.QuickEffectIds),
            ss = e => iV.includes(e),
            {
                COLON_DELIMITER: us,
                BOUNDARY_SELECTOR: Ai,
                HTML_ELEMENT: Py,
                RENDER_GENERAL: oV,
                W_MOD_IX: qy
            } = et.IX2EngineConstants,
            {
                getAffectedElements: wi,
                getElementId: aV,
                getDestinationValues: cs,
                observeStore: Ht,
                getInstanceId: sV,
                renderHTMLElement: uV,
                clearAllStyles: Dy,
                getMaxDurationItemIndex: cV,
                getComputedStyle: lV,
                getInstanceOrigin: fV,
                reduceListToGroup: dV,
                shouldNamespaceEventParameter: pV,
                getNamespacedParameterId: vV,
                shouldAllowMediaQuery: Ri,
                cleanupHTMLElement: EV,
                stringifyTarget: hV,
                mediaQueriesEqual: gV,
                shallowEqual: _V
            } = Ly.IX2VanillaUtils,
            {
                isPluginType: ls,
                createPluginInstance: fs,
                getPluginDuration: yV
            } = Ly.IX2VanillaPlugins,
            xy = navigator.userAgent,
            mV = xy.match(/iPad/i) || xy.match(/iPhone/),
            IV = 12;

        function TV(e) {
            Ht({
                store: e,
                select: ({
                    ixRequest: t
                }) => t.preview,
                onChange: bV
            }), Ht({
                store: e,
                select: ({
                    ixRequest: t
                }) => t.playback,
                onChange: AV
            }), Ht({
                store: e,
                select: ({
                    ixRequest: t
                }) => t.stop,
                onChange: wV
            }), Ht({
                store: e,
                select: ({
                    ixRequest: t
                }) => t.clear,
                onChange: RV
            })
        }

        function OV(e) {
            Ht({
                store: e,
                select: ({
                    ixSession: t
                }) => t.mediaQueryKey,
                onChange: () => {
                    Ni(e), Dy({
                        store: e,
                        elementApi: we
                    }), Ci({
                        store: e,
                        allowEvents: !0
                    }), My()
                }
            })
        }

        function SV(e, t) {
            let r = Ht({
                store: e,
                select: ({
                    ixSession: n
                }) => n.tick,
                onChange: n => {
                    t(n), r()
                }
            })
        }

        function bV({
            rawData: e,
            defer: t
        }, r) {
            let n = () => {
                Ci({
                    store: r,
                    rawData: e,
                    allowEvents: !0
                }), My()
            };
            t ? setTimeout(n, 0) : n()
        }

        function My() {
            document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
        }

        function AV(e, t) {
            let {
                actionTypeId: r,
                actionListId: n,
                actionItemId: i,
                eventId: o,
                allowEvents: a,
                immediate: s,
                testManual: c,
                verbose: f = !0
            } = e, {
                rawData: E
            } = e;
            if (n && i && E && s) {
                let p = E.actionLists[n];
                p && (E = dV({
                    actionList: p,
                    actionItemId: i,
                    rawData: E
                }))
            }
            if (Ci({
                    store: t,
                    rawData: E,
                    allowEvents: a,
                    testManual: c
                }), n && r === et.ActionTypeConsts.GENERAL_START_ACTION || ss(r)) {
                ds({
                    store: t,
                    actionListId: n
                }), Gy({
                    store: t,
                    actionListId: n,
                    eventId: o
                });
                let p = ps({
                    store: t,
                    eventId: o,
                    actionListId: n,
                    immediate: s,
                    verbose: f
                });
                f && p && t.dispatch((0, Oe.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !s
                }))
            }
        }

        function wV({
            actionListId: e
        }, t) {
            e ? ds({
                store: t,
                actionListId: e
            }) : Xy({
                store: t
            }), Ni(t)
        }

        function RV(e, t) {
            Ni(t), Dy({
                store: t,
                elementApi: we
            })
        }

        function Ci({
            store: e,
            rawData: t,
            allowEvents: r,
            testManual: n
        }) {
            let {
                ixSession: i
            } = e.getState();
            t && e.dispatch((0, Oe.rawDataImported)(t)), i.active || (e.dispatch((0, Oe.sessionInitialized)({
                hasBoundaryNodes: !!document.querySelector(Ai),
                reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
            })), r && (PV(e), CV(), e.getState().ixSession.hasDefinedMediaQueries && OV(e)), e.dispatch((0, Oe.sessionStarted)()), NV(e, n))
        }

        function CV() {
            let {
                documentElement: e
            } = document;
            e.className.indexOf(qy) === -1 && (e.className += ` ${qy}`)
        }

        function NV(e, t) {
            let r = n => {
                let {
                    ixSession: i,
                    ixParameters: o
                } = e.getState();
                i.active && (e.dispatch((0, Oe.animationFrameChanged)(n, o)), t ? SV(e, r) : requestAnimationFrame(r))
            };
            r(window.performance.now())
        }

        function Ni(e) {
            let {
                ixSession: t
            } = e.getState();
            if (t.active) {
                let {
                    eventListeners: r
                } = t;
                r.forEach(qV), e.dispatch((0, Oe.sessionStopped)())
            }
        }

        function qV({
            target: e,
            listenerParams: t
        }) {
            e.removeEventListener.apply(e, t)
        }

        function xV({
            store: e,
            eventStateKey: t,
            eventTarget: r,
            eventId: n,
            eventConfig: i,
            actionListId: o,
            parameterGroup: a,
            smoothing: s,
            restingValue: c
        }) {
            let {
                ixData: f,
                ixSession: E
            } = e.getState(), {
                events: p
            } = f, h = p[n], {
                eventTypeId: g
            } = h, S = {}, b = {}, x = [], {
                continuousActionGroups: A
            } = a, {
                id: w
            } = a;
            pV(g, i) && (w = vV(t, w));
            let I = E.hasBoundaryNodes && r ? we.getClosestElement(r, Ai) : null;
            A.forEach(N => {
                let {
                    keyframe: C,
                    actionItems: q
                } = N;
                q.forEach(G => {
                    let {
                        actionTypeId: j
                    } = G, {
                        target: Y
                    } = G.config;
                    if (!Y) return;
                    let ie = Y.boundaryMode ? I : null,
                        ee = hV(Y) + us + j;
                    if (b[ee] = LV(b[ee], C, G), !S[ee]) {
                        S[ee] = !0;
                        let {
                            config: D
                        } = G;
                        wi({
                            config: D,
                            event: h,
                            eventTarget: r,
                            elementRoot: ie,
                            elementApi: we
                        }).forEach(m => {
                            x.push({
                                element: m,
                                key: ee
                            })
                        })
                    }
                })
            }), x.forEach(({
                element: N,
                key: C
            }) => {
                let q = b[C],
                    G = (0, Rt.default)(q, "[0].actionItems[0]", {}),
                    {
                        actionTypeId: j
                    } = G,
                    Y = ls(j) ? fs(j)(N, G) : null,
                    ie = cs({
                        element: N,
                        actionItem: G,
                        elementApi: we
                    }, Y);
                vs({
                    store: e,
                    element: N,
                    eventId: n,
                    actionListId: o,
                    actionItem: G,
                    destination: ie,
                    continuous: !0,
                    parameterId: w,
                    actionGroups: q,
                    smoothing: s,
                    restingValue: c,
                    pluginInstance: Y
                })
            })
        }

        function LV(e = [], t, r) {
            let n = [...e],
                i;
            return n.some((o, a) => o.keyframe === t ? (i = a, !0) : !1), i == null && (i = n.length, n.push({
                keyframe: t,
                actionItems: []
            })), n[i].actionItems.push(r), n
        }

        function PV(e) {
            let {
                ixData: t
            } = e.getState(), {
                eventTypeMap: r
            } = t;
            Fy(e), (0, on.default)(r, (i, o) => {
                let a = rV.default[o];
                if (!a) {
                    console.warn(`IX2 event type not configured: ${o}`);
                    return
                }
                UV({
                    logic: a,
                    store: e,
                    events: i
                })
            });
            let {
                ixSession: n
            } = e.getState();
            n.eventListeners.length && MV(e)
        }
        var DV = ["resize", "orientationchange"];

        function MV(e) {
            let t = () => {
                Fy(e)
            };
            DV.forEach(r => {
                window.addEventListener(r, t), e.dispatch((0, Oe.eventListenerAdded)(window, [r, t]))
            }), t()
        }

        function Fy(e) {
            let {
                ixSession: t,
                ixData: r
            } = e.getState(), n = window.innerWidth;
            if (n !== t.viewportWidth) {
                let {
                    mediaQueries: i
                } = r;
                e.dispatch((0, Oe.viewportWidthChanged)({
                    width: n,
                    mediaQueries: i
                }))
            }
        }
        var FV = (e, t) => (0, ZU.default)((0, eV.default)(e, t), JU.default),
            GV = (e, t) => {
                (0, on.default)(e, (r, n) => {
                    r.forEach((i, o) => {
                        let a = n + us + o;
                        t(i, n, a)
                    })
                })
            },
            XV = e => {
                let t = {
                    target: e.target,
                    targets: e.targets
                };
                return wi({
                    config: t,
                    elementApi: we
                })
            };

        function UV({
            logic: e,
            store: t,
            events: r
        }) {
            VV(r);
            let {
                types: n,
                handler: i
            } = e, {
                ixData: o
            } = t.getState(), {
                actionLists: a
            } = o, s = FV(r, XV);
            if (!(0, QU.default)(s)) return;
            (0, on.default)(s, (p, h) => {
                let g = r[h],
                    {
                        action: S,
                        id: b,
                        mediaQueries: x = o.mediaQueryKeys
                    } = g,
                    {
                        actionListId: A
                    } = S.config;
                gV(x, o.mediaQueryKeys) || t.dispatch((0, Oe.mediaQueriesDefined)()), S.actionTypeId === et.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(g.config) ? g.config : [g.config]).forEach(I => {
                    let {
                        continuousParameterGroupId: N
                    } = I, C = (0, Rt.default)(a, `${A}.continuousParameterGroups`, []), q = (0, $U.default)(C, ({
                        id: Y
                    }) => Y === N), G = (I.smoothing || 0) / 100, j = (I.restingState || 0) / 100;
                    q && p.forEach((Y, ie) => {
                        let ee = b + us + ie;
                        xV({
                            store: t,
                            eventStateKey: ee,
                            eventTarget: Y,
                            eventId: b,
                            eventConfig: I,
                            actionListId: A,
                            parameterGroup: q,
                            smoothing: G,
                            restingValue: j
                        })
                    })
                }), (S.actionTypeId === et.ActionTypeConsts.GENERAL_START_ACTION || ss(S.actionTypeId)) && Gy({
                    store: t,
                    actionListId: A,
                    eventId: b
                })
            });
            let c = p => {
                    let {
                        ixSession: h
                    } = t.getState();
                    GV(s, (g, S, b) => {
                        let x = r[S],
                            A = h.eventState[b],
                            {
                                action: w,
                                mediaQueries: I = o.mediaQueryKeys
                            } = x;
                        if (!Ri(I, h.mediaQueryKey)) return;
                        let N = (C = {}) => {
                            let q = i({
                                store: t,
                                element: g,
                                event: x,
                                eventConfig: C,
                                nativeEvent: p,
                                eventStateKey: b
                            }, A);
                            _V(q, A) || t.dispatch((0, Oe.eventStateChanged)(b, q))
                        };
                        w.actionTypeId === et.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(x.config) ? x.config : [x.config]).forEach(N) : N()
                    })
                },
                f = (0, tV.default)(c, IV),
                E = ({
                    target: p = document,
                    types: h,
                    throttle: g
                }) => {
                    h.split(" ").filter(Boolean).forEach(S => {
                        let b = g ? f : c;
                        p.addEventListener(S, b), t.dispatch((0, Oe.eventListenerAdded)(p, [S, b]))
                    })
                };
            Array.isArray(n) ? n.forEach(E) : typeof n == "string" && E(e)
        }

        function VV(e) {
            if (!mV) return;
            let t = {},
                r = "";
            for (let n in e) {
                let {
                    eventTypeId: i,
                    target: o
                } = e[n], a = we.getQuerySelector(o);
                t[a] || (i === et.EventTypeConsts.MOUSE_CLICK || i === et.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[a] = !0, r += a + "{cursor: pointer;touch-action: manipulation;}")
            }
            if (r) {
                let n = document.createElement("style");
                n.textContent = r, document.body.appendChild(n)
            }
        }

        function Gy({
            store: e,
            actionListId: t,
            eventId: r
        }) {
            let {
                ixData: n,
                ixSession: i
            } = e.getState(), {
                actionLists: o,
                events: a
            } = n, s = a[r], c = o[t];
            if (c && c.useFirstGroupAsInitialState) {
                let f = (0, Rt.default)(c, "actionItemGroups[0].actionItems", []),
                    E = (0, Rt.default)(s, "mediaQueries", n.mediaQueryKeys);
                if (!Ri(E, i.mediaQueryKey)) return;
                f.forEach(p => {
                    var h;
                    let {
                        config: g,
                        actionTypeId: S
                    } = p, b = (g == null || (h = g.target) === null || h === void 0 ? void 0 : h.useEventTarget) === !0 ? {
                        target: s.target,
                        targets: s.targets
                    } : g, x = wi({
                        config: b,
                        event: s,
                        elementApi: we
                    }), A = ls(S);
                    x.forEach(w => {
                        let I = A ? fs(S)(w, p) : null;
                        vs({
                            destination: cs({
                                element: w,
                                actionItem: p,
                                elementApi: we
                            }, I),
                            immediate: !0,
                            store: e,
                            element: w,
                            eventId: r,
                            actionItem: p,
                            actionListId: t,
                            pluginInstance: I
                        })
                    })
                })
            }
        }

        function Xy({
            store: e
        }) {
            let {
                ixInstances: t
            } = e.getState();
            (0, on.default)(t, r => {
                if (!r.continuous) {
                    let {
                        actionListId: n,
                        verbose: i
                    } = r;
                    Es(r, e), i && e.dispatch((0, Oe.actionListPlaybackChanged)({
                        actionListId: n,
                        isPlaying: !1
                    }))
                }
            })
        }

        function ds({
            store: e,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i
        }) {
            let {
                ixInstances: o,
                ixSession: a
            } = e.getState(), s = a.hasBoundaryNodes && r ? we.getClosestElement(r, Ai) : null;
            (0, on.default)(o, c => {
                let f = (0, Rt.default)(c, "actionItem.config.target.boundaryMode"),
                    E = n ? c.eventStateKey === n : !0;
                if (c.actionListId === i && c.eventId === t && E) {
                    if (s && f && !we.elementContains(s, c.element)) return;
                    Es(c, e), c.verbose && e.dispatch((0, Oe.actionListPlaybackChanged)({
                        actionListId: i,
                        isPlaying: !1
                    }))
                }
            })
        }

        function ps({
            store: e,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o = 0,
            immediate: a,
            verbose: s
        }) {
            var c;
            let {
                ixData: f,
                ixSession: E
            } = e.getState(), {
                events: p
            } = f, h = p[t] || {}, {
                mediaQueries: g = f.mediaQueryKeys
            } = h, S = (0, Rt.default)(f, `actionLists.${i}`, {}), {
                actionItemGroups: b,
                useFirstGroupAsInitialState: x
            } = S;
            if (!b || !b.length) return !1;
            o >= b.length && (0, Rt.default)(h, "config.loop") && (o = 0), o === 0 && x && o++;
            let w = (o === 0 || o === 1 && x) && ss((c = h.action) === null || c === void 0 ? void 0 : c.actionTypeId) ? h.config.delay : void 0,
                I = (0, Rt.default)(b, [o, "actionItems"], []);
            if (!I.length || !Ri(g, E.mediaQueryKey)) return !1;
            let N = E.hasBoundaryNodes && r ? we.getClosestElement(r, Ai) : null,
                C = cV(I),
                q = !1;
            return I.forEach((G, j) => {
                let {
                    config: Y,
                    actionTypeId: ie
                } = G, ee = ls(ie), {
                    target: D
                } = Y;
                if (!D) return;
                let m = D.boundaryMode ? N : null;
                wi({
                    config: Y,
                    event: h,
                    eventTarget: r,
                    elementRoot: m,
                    elementApi: we
                }).forEach((M, X) => {
                    let $ = ee ? fs(ie)(M, G) : null,
                        te = ee ? yV(ie)(M, G) : null;
                    q = !0;
                    let L = C === j && X === 0,
                        H = lV({
                            element: M,
                            actionItem: G
                        }),
                        k = cs({
                            element: M,
                            actionItem: G,
                            elementApi: we
                        }, $);
                    vs({
                        store: e,
                        element: M,
                        actionItem: G,
                        eventId: t,
                        eventTarget: r,
                        eventStateKey: n,
                        actionListId: i,
                        groupIndex: o,
                        isCarrier: L,
                        computedStyle: H,
                        destination: k,
                        immediate: a,
                        verbose: s,
                        pluginInstance: $,
                        pluginDuration: te,
                        instanceDelay: w
                    })
                })
            }), q
        }

        function vs(e) {
            var t;
            let {
                store: r,
                computedStyle: n
            } = e, i = (0, YU.default)(e, nV), {
                element: o,
                actionItem: a,
                immediate: s,
                pluginInstance: c,
                continuous: f,
                restingValue: E,
                eventId: p
            } = i, h = !f, g = sV(), {
                ixElements: S,
                ixSession: b,
                ixData: x
            } = r.getState(), A = aV(S, o), {
                refState: w
            } = S[A] || {}, I = we.getRefType(o), N = b.reducedMotion && et.ReducedMotionTypes[a.actionTypeId], C;
            if (N && f) switch ((t = x.events[p]) === null || t === void 0 ? void 0 : t.eventTypeId) {
                case et.EventTypeConsts.MOUSE_MOVE:
                case et.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                    C = E;
                    break;
                default:
                    C = .5;
                    break
            }
            let q = fV(o, w, n, a, we, c);
            if (r.dispatch((0, Oe.instanceAdded)((0, zU.default)({
                    instanceId: g,
                    elementId: A,
                    origin: q,
                    refType: I,
                    skipMotion: N,
                    skipToValue: C
                }, i))), Uy(document.body, "ix2-animation-started", g), s) {
                WV(r, g);
                return
            }
            Ht({
                store: r,
                select: ({
                    ixInstances: G
                }) => G[g],
                onChange: Vy
            }), h && r.dispatch((0, Oe.instanceStarted)(g, b.tick))
        }

        function Es(e, t) {
            Uy(document.body, "ix2-animation-stopping", {
                instanceId: e.id,
                state: t.getState()
            });
            let {
                elementId: r,
                actionItem: n
            } = e, {
                ixElements: i
            } = t.getState(), {
                ref: o,
                refType: a
            } = i[r] || {};
            a === Py && EV(o, n, we), t.dispatch((0, Oe.instanceRemoved)(e.id))
        }

        function Uy(e, t, r) {
            let n = document.createEvent("CustomEvent");
            n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
        }

        function WV(e, t) {
            let {
                ixParameters: r
            } = e.getState();
            e.dispatch((0, Oe.instanceStarted)(t, 0)), e.dispatch((0, Oe.animationFrameChanged)(performance.now(), r));
            let {
                ixInstances: n
            } = e.getState();
            Vy(n[t], e)
        }

        function Vy(e, t) {
            let {
                active: r,
                continuous: n,
                complete: i,
                elementId: o,
                actionItem: a,
                actionTypeId: s,
                renderType: c,
                current: f,
                groupIndex: E,
                eventId: p,
                eventTarget: h,
                eventStateKey: g,
                actionListId: S,
                isCarrier: b,
                styleProp: x,
                verbose: A,
                pluginInstance: w
            } = e, {
                ixData: I,
                ixSession: N
            } = t.getState(), {
                events: C
            } = I, q = C[p] || {}, {
                mediaQueries: G = I.mediaQueryKeys
            } = q;
            if (Ri(G, N.mediaQueryKey) && (n || r || i)) {
                if (f || c === oV && i) {
                    t.dispatch((0, Oe.elementStateChanged)(o, s, f, a));
                    let {
                        ixElements: j
                    } = t.getState(), {
                        ref: Y,
                        refType: ie,
                        refState: ee
                    } = j[o] || {}, D = ee && ee[s];
                    switch (ie) {
                        case Py:
                            {
                                uV(Y, ee, D, p, a, x, we, c, w);
                                break
                            }
                    }
                }
                if (i) {
                    if (b) {
                        let j = ps({
                            store: t,
                            eventId: p,
                            eventTarget: h,
                            eventStateKey: g,
                            actionListId: S,
                            groupIndex: E + 1,
                            verbose: A
                        });
                        A && !j && t.dispatch((0, Oe.actionListPlaybackChanged)({
                            actionListId: S,
                            isPlaying: !1
                        }))
                    }
                    Es(e, t)
                }
            }
        }
    });
    var By = u(yt => {
        "use strict";
        var BV = Kt().default,
            HV = ot().default;
        Object.defineProperty(yt, "__esModule", {
            value: !0
        });
        yt.actions = void 0;
        yt.destroy = Wy;
        yt.init = YV;
        yt.setEnv = zV;
        yt.store = void 0;
        Nl();
        var kV = Ko(),
            jV = HV(jh()),
            hs = as(),
            KV = BV(vi());
        yt.actions = KV;
        var qi = (0, kV.createStore)(jV.default);
        yt.store = qi;

        function zV(e) {
            e() && (0, hs.observeRequests)(qi)
        }

        function YV(e) {
            Wy(), (0, hs.startEngine)({
                store: qi,
                rawData: e,
                allowEvents: !0
            })
        }

        function Wy() {
            (0, hs.stopEngine)(qi)
        }
    });
    var Ky = u((jj, jy) => {
        var Hy = Ye(),
            ky = By();
        ky.setEnv(Hy.env);
        Hy.define("ix2", jy.exports = function() {
            return ky
        })
    });
    var Yy = u((Kj, zy) => {
        var Ir = Ye();
        Ir.define("links", zy.exports = function(e, t) {
            var r = {},
                n = e(window),
                i, o = Ir.env(),
                a = window.location,
                s = document.createElement("a"),
                c = "w--current",
                f = /index\.(html|php)$/,
                E = /\/$/,
                p, h;
            r.ready = r.design = r.preview = g;

            function g() {
                i = o && Ir.env("design"), h = Ir.env("slug") || a.pathname || "", Ir.scroll.off(b), p = [];
                for (var A = document.links, w = 0; w < A.length; ++w) S(A[w]);
                p.length && (Ir.scroll.on(b), b())
            }

            function S(A) {
                var w = i && A.getAttribute("href-disabled") || A.getAttribute("href");
                if (s.href = w, !(w.indexOf(":") >= 0)) {
                    var I = e(A);
                    if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                        if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                        var N = e(s.hash);
                        N.length && p.push({
                            link: I,
                            sec: N,
                            active: !1
                        });
                        return
                    }
                    if (!(w === "#" || w === "")) {
                        var C = s.href === a.href || w === h || f.test(w) && E.test(h);
                        x(I, c, C)
                    }
                }
            }

            function b() {
                var A = n.scrollTop(),
                    w = n.height();
                t.each(p, function(I) {
                    var N = I.link,
                        C = I.sec,
                        q = C.offset().top,
                        G = C.outerHeight(),
                        j = w * .5,
                        Y = C.is(":visible") && q + G - j >= A && q + j <= A + w;
                    I.active !== Y && (I.active = Y, x(N, c, Y))
                })
            }

            function x(A, w, I) {
                var N = A.hasClass(w);
                I && N || !I && !N || (I ? A.addClass(w) : A.removeClass(w))
            }
            return r
        })
    });
    var Qy = u((zj, $y) => {
        var xi = Ye();
        xi.define("scroll", $y.exports = function(e) {
            var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                r = window.location,
                n = S() ? null : window.history,
                i = e(window),
                o = e(document),
                a = e(document.body),
                s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(D) {
                    window.setTimeout(D, 15)
                },
                c = xi.env("editor") ? ".w-editor-body" : "body",
                f = "header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])",
                E = 'a[href="#"]',
                p = 'a[href*="#"]:not(.w-tab-link):not(' + E + ")",
                h = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                g = document.createElement("style");
            g.appendChild(document.createTextNode(h));

            function S() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var b = /^#[a-zA-Z0-9][\w:.-]*$/;

            function x(D) {
                return b.test(D.hash) && D.host + D.pathname === r.host + r.pathname
            }
            let A = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function w() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || A.matches
            }

            function I(D, m) {
                var P;
                switch (m) {
                    case "add":
                        P = D.attr("tabindex"), P ? D.attr("data-wf-tabindex-swap", P) : D.attr("tabindex", "-1");
                        break;
                    case "remove":
                        P = D.attr("data-wf-tabindex-swap"), P ? (D.attr("tabindex", P), D.removeAttr("data-wf-tabindex-swap")) : D.removeAttr("tabindex");
                        break
                }
                D.toggleClass("wf-force-outline-none", m === "add")
            }

            function N(D) {
                var m = D.currentTarget;
                if (!(xi.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(m.className))) {
                    var P = x(m) ? m.hash : "";
                    if (P !== "") {
                        var M = e(P);
                        M.length && (D && (D.preventDefault(), D.stopPropagation()), C(P, D), window.setTimeout(function() {
                            q(M, function() {
                                I(M, "add"), M.get(0).focus({
                                    preventScroll: !0
                                }), I(M, "remove")
                            })
                        }, D ? 0 : 300))
                    }
                }
            }

            function C(D) {
                if (r.hash !== D && n && n.pushState && !(xi.env.chrome && r.protocol === "file:")) {
                    var m = n.state && n.state.hash;
                    m !== D && n.pushState({
                        hash: D
                    }, "", D)
                }
            }

            function q(D, m) {
                var P = i.scrollTop(),
                    M = G(D);
                if (P !== M) {
                    var X = j(D, P, M),
                        $ = Date.now(),
                        te = function() {
                            var L = Date.now() - $;
                            window.scroll(0, Y(P, M, L, X)), L <= X ? s(te) : typeof m == "function" && m()
                        };
                    s(te)
                }
            }

            function G(D) {
                var m = e(f),
                    P = m.css("position") === "fixed" ? m.outerHeight() : 0,
                    M = D.offset().top - P;
                if (D.data("scroll") === "mid") {
                    var X = i.height() - P,
                        $ = D.outerHeight();
                    $ < X && (M -= Math.round((X - $) / 2))
                }
                return M
            }

            function j(D, m, P) {
                if (w()) return 0;
                var M = 1;
                return a.add(D).each(function(X, $) {
                    var te = parseFloat($.getAttribute("data-scroll-time"));
                    !isNaN(te) && te >= 0 && (M = te)
                }), (472.143 * Math.log(Math.abs(m - P) + 125) - 2e3) * M
            }

            function Y(D, m, P, M) {
                return P > M ? m : D + (m - D) * ie(P / M)
            }

            function ie(D) {
                return D < .5 ? 4 * D * D * D : (D - 1) * (2 * D - 2) * (2 * D - 2) + 1
            }

            function ee() {
                var {
                    WF_CLICK_EMPTY: D,
                    WF_CLICK_SCROLL: m
                } = t;
                o.on(m, p, N), o.on(D, E, function(P) {
                    P.preventDefault()
                }), document.head.insertBefore(g, document.head.firstChild)
            }
            return {
                ready: ee
            }
        })
    });
    var Jy = u((Yj, Zy) => {
        var $V = Ye();
        $V.define("touch", Zy.exports = function(e) {
            var t = {},
                r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
            };

            function n(o) {
                var a = !1,
                    s = !1,
                    c = Math.min(Math.round(window.innerWidth * .04), 40),
                    f, E;
                o.addEventListener("touchstart", p, !1), o.addEventListener("touchmove", h, !1), o.addEventListener("touchend", g, !1), o.addEventListener("touchcancel", S, !1), o.addEventListener("mousedown", p, !1), o.addEventListener("mousemove", h, !1), o.addEventListener("mouseup", g, !1), o.addEventListener("mouseout", S, !1);

                function p(x) {
                    var A = x.touches;
                    A && A.length > 1 || (a = !0, A ? (s = !0, f = A[0].clientX) : f = x.clientX, E = f)
                }

                function h(x) {
                    if (a) {
                        if (s && x.type === "mousemove") {
                            x.preventDefault(), x.stopPropagation();
                            return
                        }
                        var A = x.touches,
                            w = A ? A[0].clientX : x.clientX,
                            I = w - E;
                        E = w, Math.abs(I) > c && r && String(r()) === "" && (i("swipe", x, {
                            direction: I > 0 ? "right" : "left"
                        }), S())
                    }
                }

                function g(x) {
                    if (a && (a = !1, s && x.type === "mouseup")) {
                        x.preventDefault(), x.stopPropagation(), s = !1;
                        return
                    }
                }

                function S() {
                    a = !1
                }

                function b() {
                    o.removeEventListener("touchstart", p, !1), o.removeEventListener("touchmove", h, !1), o.removeEventListener("touchend", g, !1), o.removeEventListener("touchcancel", S, !1), o.removeEventListener("mousedown", p, !1), o.removeEventListener("mousemove", h, !1), o.removeEventListener("mouseup", g, !1), o.removeEventListener("mouseout", S, !1), o = null
                }
                this.destroy = b
            }

            function i(o, a, s) {
                var c = e.Event(o, {
                    originalEvent: a
                });
                e(a.target).trigger(c, s)
            }
            return t.instance = t.init(document), t
        })
    });
    var em = u(gs => {
        "use strict";
        Object.defineProperty(gs, "__esModule", {
            value: !0
        });
        gs.default = QV;

        function QV(e, t, r, n, i, o, a, s, c, f, E, p, h) {
            return function(g) {
                e(g);
                var S = g.form,
                    b = {
                        name: S.attr("data-name") || S.attr("name") || "Untitled Form",
                        pageId: S.attr("data-wf-page-id") || "",
                        elementId: S.attr("data-wf-element-id") || "",
                        source: t.href,
                        test: r.env(),
                        fields: {},
                        fileUploads: {},
                        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(S.html()),
                        trackingCookies: n()
                    };
                let x = S.attr("data-wf-flow");
                x && (b.wfFlow = x), i(g);
                var A = o(S, b.fields);
                if (A) return a(A);
                if (b.fileUploads = s(S), c(g), !f) {
                    E(g);
                    return
                }
                p.ajax({
                    url: h,
                    type: "POST",
                    data: b,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(w) {
                    w && w.code === 200 && (g.success = !0), E(g)
                }).fail(function() {
                    E(g)
                })
            }
        }
    });
    var rm = u((Qj, tm) => {
        var Li = Ye();
        Li.define("forms", tm.exports = function(e, t) {
            var r = {},
                n = e(document),
                i, o = window.location,
                a = window.XDomainRequest && !window.atob,
                s = ".w-form",
                c, f = /e(-)?mail/i,
                E = /^\S+@\S+$/,
                p = window.alert,
                h = Li.env(),
                g, S, b, x = /list-manage[1-9]?.com/i,
                A = t.debounce(function() {
                    p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                }, 100);
            r.ready = r.design = r.preview = function() {
                w(), !h && !g && N()
            };

            function w() {
                c = e("html").attr("data-wf-site"), S = "https://webflow.com/api/v1/form/" + c, a && S.indexOf("https://webflow.com") >= 0 && (S = S.replace("https://webflow.com", "https://formdata.webflow.com")), b = `${S}/signFile`, i = e(s + " form"), i.length && i.each(I)
            }

            function I(L, H) {
                var k = e(H),
                    U = e.data(H, s);
                U || (U = e.data(H, s, {
                    form: k
                })), C(U);
                var F = k.closest("div.w-form");
                U.done = F.find("> .w-form-done"), U.fail = F.find("> .w-form-fail"), U.fileUploads = F.find(".w-file-upload"), U.fileUploads.each(function(ce) {
                    X(ce, U)
                });
                var Q = U.form.attr("aria-label") || U.form.attr("data-name") || "Form";
                U.done.attr("aria-label") || U.form.attr("aria-label", Q), U.done.attr("tabindex", "-1"), U.done.attr("role", "region"), U.done.attr("aria-label") || U.done.attr("aria-label", Q + " success"), U.fail.attr("tabindex", "-1"), U.fail.attr("role", "region"), U.fail.attr("aria-label") || U.fail.attr("aria-label", Q + " failure");
                var ue = U.action = k.attr("action");
                if (U.handler = null, U.redirect = k.attr("data-redirect"), x.test(ue)) {
                    U.handler = m;
                    return
                }
                if (!ue) {
                    if (c) {
                        U.handler = (() => {
                            let ce = em().default;
                            return ce(C, o, Li, ie, M, G, p, j, q, c, P, e, S)
                        })();
                        return
                    }
                    A()
                }
            }

            function N() {
                g = !0, n.on("submit", s + " form", function(ce) {
                    var J = e.data(this, s);
                    J.handler && (J.evt = ce, J.handler(J))
                });
                let L = ".w-checkbox-input",
                    H = ".w-radio-input",
                    k = "w--redirected-checked",
                    U = "w--redirected-focus",
                    F = "w--redirected-focus-visible",
                    Q = ":focus-visible, [data-wf-focus-visible]",
                    ue = [
                        ["checkbox", L],
                        ["radio", H]
                    ];
                n.on("change", s + ' form input[type="checkbox"]:not(' + L + ")", ce => {
                    e(ce.target).siblings(L).toggleClass(k)
                }), n.on("change", s + ' form input[type="radio"]', ce => {
                    e(`input[name="${ce.target.name}"]:not(${L})`).map((Ee, pt) => e(pt).siblings(H).removeClass(k));
                    let J = e(ce.target);
                    J.hasClass("w-radio-input") || J.siblings(H).addClass(k)
                }), ue.forEach(([ce, J]) => {
                    n.on("focus", s + ` form input[type="${ce}"]:not(` + J + ")", Ee => {
                        e(Ee.target).siblings(J).addClass(U), e(Ee.target).filter(Q).siblings(J).addClass(F)
                    }), n.on("blur", s + ` form input[type="${ce}"]:not(` + J + ")", Ee => {
                        e(Ee.target).siblings(J).removeClass(`${U} ${F}`)
                    })
                })
            }

            function C(L) {
                var H = L.btn = L.form.find(':input[type="submit"]');
                L.wait = L.btn.attr("data-wait") || null, L.success = !1, H.prop("disabled", !1), L.label && H.val(L.label)
            }

            function q(L) {
                var H = L.btn,
                    k = L.wait;
                H.prop("disabled", !0), k && (L.label = H.val(), H.val(k))
            }

            function G(L, H) {
                var k = null;
                return H = H || {}, L.find(':input:not([type="submit"]):not([type="file"])').each(function(U, F) {
                    var Q = e(F),
                        ue = Q.attr("type"),
                        ce = Q.attr("data-name") || Q.attr("name") || "Field " + (U + 1),
                        J = Q.val();
                    if (ue === "checkbox") J = Q.is(":checked");
                    else if (ue === "radio") {
                        if (H[ce] === null || typeof H[ce] == "string") return;
                        J = L.find('input[name="' + Q.attr("name") + '"]:checked').val() || null
                    }
                    typeof J == "string" && (J = e.trim(J)), H[ce] = J, k = k || ee(Q, ue, ce, J)
                }), k
            }

            function j(L) {
                var H = {};
                return L.find(':input[type="file"]').each(function(k, U) {
                    var F = e(U),
                        Q = F.attr("data-name") || F.attr("name") || "File " + (k + 1),
                        ue = F.attr("data-value");
                    typeof ue == "string" && (ue = e.trim(ue)), H[Q] = ue
                }), H
            }
            let Y = {
                _mkto_trk: "marketo"
            };

            function ie() {
                return document.cookie.split("; ").reduce(function(H, k) {
                    let U = k.split("="),
                        F = U[0];
                    if (F in Y) {
                        let Q = Y[F],
                            ue = U.slice(1).join("=");
                        H[Q] = ue
                    }
                    return H
                }, {})
            }

            function ee(L, H, k, U) {
                var F = null;
                return H === "password" ? F = "Passwords cannot be submitted." : L.attr("required") ? U ? f.test(L.attr("type")) && (E.test(U) || (F = "Please enter a valid email address for: " + k)) : F = "Please fill out the required field: " + k : k === "g-recaptcha-response" && !U && (F = "Please confirm you\u2019re not a robot."), F
            }

            function D(L) {
                M(L), P(L)
            }

            function m(L) {
                C(L);
                var H = L.form,
                    k = {};
                if (/^https/.test(o.href) && !/^https/.test(L.action)) {
                    H.attr("method", "post");
                    return
                }
                M(L);
                var U = G(H, k);
                if (U) return p(U);
                q(L);
                var F;
                t.each(k, function(J, Ee) {
                    f.test(Ee) && (k.EMAIL = J), /^((full[ _-]?)?name)$/i.test(Ee) && (F = J), /^(first[ _-]?name)$/i.test(Ee) && (k.FNAME = J), /^(last[ _-]?name)$/i.test(Ee) && (k.LNAME = J)
                }), F && !k.FNAME && (F = F.split(" "), k.FNAME = F[0], k.LNAME = k.LNAME || F[1]);
                var Q = L.action.replace("/post?", "/post-json?") + "&c=?",
                    ue = Q.indexOf("u=") + 2;
                ue = Q.substring(ue, Q.indexOf("&", ue));
                var ce = Q.indexOf("id=") + 3;
                ce = Q.substring(ce, Q.indexOf("&", ce)), k["b_" + ue + "_" + ce] = "", e.ajax({
                    url: Q,
                    data: k,
                    dataType: "jsonp"
                }).done(function(J) {
                    L.success = J.result === "success" || /already/.test(J.msg), L.success || console.info("MailChimp error: " + J.msg), P(L)
                }).fail(function() {
                    P(L)
                })
            }

            function P(L) {
                var H = L.form,
                    k = L.redirect,
                    U = L.success;
                if (U && k) {
                    Li.location(k);
                    return
                }
                L.done.toggle(U), L.fail.toggle(!U), U ? L.done.focus() : L.fail.focus(), H.toggle(!U), C(L)
            }

            function M(L) {
                L.evt && L.evt.preventDefault(), L.evt = null
            }

            function X(L, H) {
                if (!H.fileUploads || !H.fileUploads[L]) return;
                var k, U = e(H.fileUploads[L]),
                    F = U.find("> .w-file-upload-default"),
                    Q = U.find("> .w-file-upload-uploading"),
                    ue = U.find("> .w-file-upload-success"),
                    ce = U.find("> .w-file-upload-error"),
                    J = F.find(".w-file-upload-input"),
                    Ee = F.find(".w-file-upload-label"),
                    pt = Ee.children(),
                    de = ce.find(".w-file-upload-error-msg"),
                    d = ue.find(".w-file-upload-file"),
                    V = ue.find(".w-file-remove-link"),
                    K = d.find(".w-file-upload-file-name"),
                    B = de.attr("data-w-size-error"),
                    _e = de.attr("data-w-type-error"),
                    qt = de.attr("data-w-generic-error");
                if (h || Ee.on("click keydown", function(_) {
                        _.type === "keydown" && _.which !== 13 && _.which !== 32 || (_.preventDefault(), J.click())
                    }), Ee.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), V.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), h) J.on("click", function(_) {
                    _.preventDefault()
                }), Ee.on("click", function(_) {
                    _.preventDefault()
                }), pt.on("click", function(_) {
                    _.preventDefault()
                });
                else {
                    V.on("click keydown", function(_) {
                        if (_.type === "keydown") {
                            if (_.which !== 13 && _.which !== 32) return;
                            _.preventDefault()
                        }
                        J.removeAttr("data-value"), J.val(""), K.html(""), F.toggle(!0), ue.toggle(!1), Ee.focus()
                    }), J.on("change", function(_) {
                        k = _.target && _.target.files && _.target.files[0], k && (F.toggle(!1), ce.toggle(!1), Q.toggle(!0), Q.focus(), K.text(k.name), T() || q(H), H.fileUploads[L].uploading = !0, $(k, v))
                    });
                    var vt = Ee.outerHeight();
                    J.height(vt), J.width(1)
                }

                function l(_) {
                    var O = _.responseJSON && _.responseJSON.msg,
                        z = qt;
                    typeof O == "string" && O.indexOf("InvalidFileTypeError") === 0 ? z = _e : typeof O == "string" && O.indexOf("MaxFileSizeError") === 0 && (z = B), de.text(z), J.removeAttr("data-value"), J.val(""), Q.toggle(!1), F.toggle(!0), ce.toggle(!0), ce.focus(), H.fileUploads[L].uploading = !1, T() || C(H)
                }

                function v(_, O) {
                    if (_) return l(_);
                    var z = O.fileName,
                        re = O.postData,
                        he = O.fileId,
                        W = O.s3Url;
                    J.attr("data-value", he), te(W, re, k, z, y)
                }

                function y(_) {
                    if (_) return l(_);
                    Q.toggle(!1), ue.css("display", "inline-block"), ue.focus(), H.fileUploads[L].uploading = !1, T() || C(H)
                }

                function T() {
                    var _ = H.fileUploads && H.fileUploads.toArray() || [];
                    return _.some(function(O) {
                        return O.uploading
                    })
                }
            }

            function $(L, H) {
                var k = new URLSearchParams({
                    name: L.name,
                    size: L.size
                });
                e.ajax({
                    type: "GET",
                    url: `${b}?${k}`,
                    crossDomain: !0
                }).done(function(U) {
                    H(null, U)
                }).fail(function(U) {
                    H(U)
                })
            }

            function te(L, H, k, U, F) {
                var Q = new FormData;
                for (var ue in H) Q.append(ue, H[ue]);
                Q.append("file", k, U), e.ajax({
                    type: "POST",
                    url: L,
                    data: Q,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    F(null)
                }).fail(function(ce) {
                    F(ce)
                })
            }
            return r
        })
    });
    var im = u((Zj, nm) => {
        var Nt = Ye(),
            ZV = Wi(),
            Le = {
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
        Nt.define("navbar", nm.exports = function(e, t) {
            var r = {},
                n = e.tram,
                i = e(window),
                o = e(document),
                a = t.debounce,
                s, c, f, E, p = Nt.env(),
                h = '<div class="w-nav-overlay" data-wf-ignore />',
                g = ".w-nav",
                S = "w--open",
                b = "w--nav-dropdown-open",
                x = "w--nav-dropdown-toggle-open",
                A = "w--nav-dropdown-list-open",
                w = "w--nav-link-open",
                I = ZV.triggers,
                N = e();
            r.ready = r.design = r.preview = C, r.destroy = function() {
                N = e(), q(), c && c.length && c.each(ie)
            };

            function C() {
                f = p && Nt.env("design"), E = Nt.env("editor"), s = e(document.body), c = o.find(g), c.length && (c.each(Y), q(), G())
            }

            function q() {
                Nt.resize.off(j)
            }

            function G() {
                Nt.resize.on(j)
            }

            function j() {
                c.each(F)
            }

            function Y(d, V) {
                var K = e(V),
                    B = e.data(V, g);
                B || (B = e.data(V, g, {
                    open: !1,
                    el: K,
                    config: {},
                    selectedIdx: -1
                })), B.menu = K.find(".w-nav-menu"), B.links = B.menu.find(".w-nav-link"), B.dropdowns = B.menu.find(".w-dropdown"), B.dropdownToggle = B.menu.find(".w-dropdown-toggle"), B.dropdownList = B.menu.find(".w-dropdown-list"), B.button = K.find(".w-nav-button"), B.container = K.find(".w-container"), B.overlayContainerId = "w-nav-overlay-" + d, B.outside = k(B);
                var _e = K.find(".w-nav-brand");
                _e && _e.attr("href") === "/" && _e.attr("aria-label") == null && _e.attr("aria-label", "home"), B.button.attr("style", "-webkit-user-select: text;"), B.button.attr("aria-label") == null && B.button.attr("aria-label", "menu"), B.button.attr("role", "button"), B.button.attr("tabindex", "0"), B.button.attr("aria-controls", B.overlayContainerId), B.button.attr("aria-haspopup", "menu"), B.button.attr("aria-expanded", "false"), B.el.off(g), B.button.off(g), B.menu.off(g), m(B), f ? (ee(B), B.el.on("setting" + g, P(B))) : (D(B), B.button.on("click" + g, L(B)), B.menu.on("click" + g, "a", H(B)), B.button.on("keydown" + g, M(B)), B.el.on("keydown" + g, X(B))), F(d, V)
            }

            function ie(d, V) {
                var K = e.data(V, g);
                K && (ee(K), e.removeData(V, g))
            }

            function ee(d) {
                d.overlay && (de(d, !0), d.overlay.remove(), d.overlay = null)
            }

            function D(d) {
                d.overlay || (d.overlay = e(h).appendTo(d.el), d.overlay.attr("id", d.overlayContainerId), d.parent = d.menu.parent(), de(d, !0))
            }

            function m(d) {
                var V = {},
                    K = d.config || {},
                    B = V.animation = d.el.attr("data-animation") || "default";
                V.animOver = /^over/.test(B), V.animDirect = /left$/.test(B) ? -1 : 1, K.animation !== B && d.open && t.defer(te, d), V.easing = d.el.attr("data-easing") || "ease", V.easing2 = d.el.attr("data-easing2") || "ease";
                var _e = d.el.attr("data-duration");
                V.duration = _e != null ? Number(_e) : 400, V.docHeight = d.el.attr("data-doc-height"), d.config = V
            }

            function P(d) {
                return function(V, K) {
                    K = K || {};
                    var B = i.width();
                    m(d), K.open === !0 && Ee(d, !0), K.open === !1 && de(d, !0), d.open && t.defer(function() {
                        B !== i.width() && te(d)
                    })
                }
            }

            function M(d) {
                return function(V) {
                    switch (V.keyCode) {
                        case Le.SPACE:
                        case Le.ENTER:
                            return L(d)(), V.preventDefault(), V.stopPropagation();
                        case Le.ESCAPE:
                            return de(d), V.preventDefault(), V.stopPropagation();
                        case Le.ARROW_RIGHT:
                        case Le.ARROW_DOWN:
                        case Le.HOME:
                        case Le.END:
                            return d.open ? (V.keyCode === Le.END ? d.selectedIdx = d.links.length - 1 : d.selectedIdx = 0, $(d), V.preventDefault(), V.stopPropagation()) : (V.preventDefault(), V.stopPropagation())
                    }
                }
            }

            function X(d) {
                return function(V) {
                    if (d.open) switch (d.selectedIdx = d.links.index(document.activeElement), V.keyCode) {
                        case Le.HOME:
                        case Le.END:
                            return V.keyCode === Le.END ? d.selectedIdx = d.links.length - 1 : d.selectedIdx = 0, $(d), V.preventDefault(), V.stopPropagation();
                        case Le.ESCAPE:
                            return de(d), d.button.focus(), V.preventDefault(), V.stopPropagation();
                        case Le.ARROW_LEFT:
                        case Le.ARROW_UP:
                            return d.selectedIdx = Math.max(-1, d.selectedIdx - 1), $(d), V.preventDefault(), V.stopPropagation();
                        case Le.ARROW_RIGHT:
                        case Le.ARROW_DOWN:
                            return d.selectedIdx = Math.min(d.links.length - 1, d.selectedIdx + 1), $(d), V.preventDefault(), V.stopPropagation()
                    }
                }
            }

            function $(d) {
                if (d.links[d.selectedIdx]) {
                    var V = d.links[d.selectedIdx];
                    V.focus(), H(V)
                }
            }

            function te(d) {
                d.open && (de(d, !0), Ee(d, !0))
            }

            function L(d) {
                return a(function() {
                    d.open ? de(d) : Ee(d)
                })
            }

            function H(d) {
                return function(V) {
                    var K = e(this),
                        B = K.attr("href");
                    if (!Nt.validClick(V.currentTarget)) {
                        V.preventDefault();
                        return
                    }
                    B && B.indexOf("#") === 0 && d.open && de(d)
                }
            }

            function k(d) {
                return d.outside && o.off("click" + g, d.outside),
                    function(V) {
                        var K = e(V.target);
                        E && K.closest(".w-editor-bem-EditorOverlay").length || U(d, K)
                    }
            }
            var U = a(function(d, V) {
                if (d.open) {
                    var K = V.closest(".w-nav-menu");
                    d.menu.is(K) || de(d)
                }
            });

            function F(d, V) {
                var K = e.data(V, g),
                    B = K.collapsed = K.button.css("display") !== "none";
                if (K.open && !B && !f && de(K, !0), K.container.length) {
                    var _e = ue(K);
                    K.links.each(_e), K.dropdowns.each(_e)
                }
                K.open && pt(K)
            }
            var Q = "max-width";

            function ue(d) {
                var V = d.container.css(Q);
                return V === "none" && (V = ""),
                    function(K, B) {
                        B = e(B), B.css(Q, ""), B.css(Q) === "none" && B.css(Q, V)
                    }
            }

            function ce(d, V) {
                V.setAttribute("data-nav-menu-open", "")
            }

            function J(d, V) {
                V.removeAttribute("data-nav-menu-open")
            }

            function Ee(d, V) {
                if (d.open) return;
                d.open = !0, d.menu.each(ce), d.links.addClass(w), d.dropdowns.addClass(b), d.dropdownToggle.addClass(x), d.dropdownList.addClass(A), d.button.addClass(S);
                var K = d.config,
                    B = K.animation;
                (B === "none" || !n.support.transform || K.duration <= 0) && (V = !0);
                var _e = pt(d),
                    qt = d.menu.outerHeight(!0),
                    vt = d.menu.outerWidth(!0),
                    l = d.el.height(),
                    v = d.el[0];
                if (F(0, v), I.intro(0, v), Nt.redraw.up(), f || o.on("click" + g, d.outside), V) {
                    _();
                    return
                }
                var y = "transform " + K.duration + "ms " + K.easing;
                if (d.overlay && (N = d.menu.prev(), d.overlay.show().append(d.menu)), K.animOver) {
                    n(d.menu).add(y).set({
                        x: K.animDirect * vt,
                        height: _e
                    }).start({
                        x: 0
                    }).then(_), d.overlay && d.overlay.width(vt);
                    return
                }
                var T = l + qt;
                n(d.menu).add(y).set({
                    y: -T
                }).start({
                    y: 0
                }).then(_);

                function _() {
                    d.button.attr("aria-expanded", "true")
                }
            }

            function pt(d) {
                var V = d.config,
                    K = V.docHeight ? o.height() : s.height();
                return V.animOver ? d.menu.height(K) : d.el.css("position") !== "fixed" && (K -= d.el.outerHeight(!0)), d.overlay && d.overlay.height(K), K
            }

            function de(d, V) {
                if (!d.open) return;
                d.open = !1, d.button.removeClass(S);
                var K = d.config;
                if ((K.animation === "none" || !n.support.transform || K.duration <= 0) && (V = !0), I.outro(0, d.el[0]), o.off("click" + g, d.outside), V) {
                    n(d.menu).stop(), v();
                    return
                }
                var B = "transform " + K.duration + "ms " + K.easing2,
                    _e = d.menu.outerHeight(!0),
                    qt = d.menu.outerWidth(!0),
                    vt = d.el.height();
                if (K.animOver) {
                    n(d.menu).add(B).start({
                        x: qt * K.animDirect
                    }).then(v);
                    return
                }
                var l = vt + _e;
                n(d.menu).add(B).start({
                    y: -l
                }).then(v);

                function v() {
                    d.menu.height(""), n(d.menu).set({
                        x: 0,
                        y: 0
                    }), d.menu.each(J), d.links.removeClass(w), d.dropdowns.removeClass(b), d.dropdownToggle.removeClass(x), d.dropdownList.removeClass(A), d.overlay && d.overlay.children().length && (N.length ? d.menu.insertAfter(N) : d.menu.prependTo(d.parent), d.overlay.attr("style", "").hide()), d.el.triggerHandler("w-close"), d.button.attr("aria-expanded", "false")
                }
            }
            return r
        })
    });
    Ns();
    xs();
    Ps();
    Fs();
    Wi();
    Ky();
    Yy();
    Qy();
    Jy();
    rm();
    im();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63cc01c2993f00e4fa3df853",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f00e4fa3df853",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 96,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 96,
                "restingState": 50
            }],
            "createdOn": 1670912479001
        },
        "e-2": {
            "id": "e-2",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63cc01c2993f00810b3df856",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f00810b3df856",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 96,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 96,
                "restingState": 50
            }],
            "createdOn": 1670963588890
        },
        "e-3": {
            "id": "e-3",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-4"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63cc01c2993f00810b3df856",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f00810b3df856",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1670967526620
        },
        "e-5": {
            "id": "e-5",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63cc01c2993f005bc03df857",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f005bc03df857",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 96,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 96,
                "restingState": 50
            }],
            "createdOn": 1671042978027
        },
        "e-6": {
            "id": "e-6",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-7"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63cc01c2993f0013c83df85a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f0013c83df85a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1671123404987
        },
        "e-8": {
            "id": "e-8",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63cc01c2993f00b4463df859",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f00b4463df859",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-5-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-5-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1671202059170
        },
        "e-9": {
            "id": "e-9",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-10"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63cc01c2993f00e1753df85b",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f00e1753df85b",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1671230593753
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63cc01c2993f00e36e3df85c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f00e36e3df85c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-6-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-6-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1671289145667
        },
        "e-14": {
            "id": "e-14",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63cc01c2993f00b4463df859",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f00b4463df859",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 96,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 96,
                "restingState": 50
            }],
            "createdOn": 1671366629259
        },
        "e-15": {
            "id": "e-15",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63cc01c2993f00688c3df854",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f00688c3df854",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 96,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 96,
                "restingState": 50
            }],
            "createdOn": 1671367506351
        },
        "e-36": {
            "id": "e-36",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63cc01c2993f000b493df851",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f000b493df851",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 96,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 96,
                "restingState": 50
            }],
            "createdOn": 1671377049964
        },
        "e-37": {
            "id": "e-37",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-38"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63cc01c2993f00e36e3df85c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f00e36e3df85c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1671478703532
        },
        "e-59": {
            "id": "e-59",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63cc01c2993f000b493df851",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f000b493df851",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-2-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1671516987567
        },
        "e-60": {
            "id": "e-60",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63cc01c2993f00e4fa3df853",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f00e4fa3df853",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-12-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1671517587920
        },
        "e-61": {
            "id": "e-61",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63cc01c2993f0013c83df85a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f0013c83df85a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-12-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1671517711544
        },
        "e-62": {
            "id": "e-62",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63cc01c2993f00ce793df855",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f00ce793df855",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-12-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1671518060768
        },
        "e-63": {
            "id": "e-63",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63cc01c2993f00810b3df856",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f00810b3df856",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-12-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1671518099708
        },
        "e-64": {
            "id": "e-64",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63cc01c2993f005bc03df857",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f005bc03df857",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-13-p",
                "smoothing": 70,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1671518123368
        },
        "e-65": {
            "id": "e-65",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63cc01c2993f005df53df858",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f005df53df858",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-12-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1671518225746
        },
        "e-66": {
            "id": "e-66",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63cc01c2993f00b4463df859",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f00b4463df859",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-12-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1671518345946
        },
        "e-67": {
            "id": "e-67",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63cc01c2993f00e1753df85b",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f00e1753df85b",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-13-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1671518384370
        },
        "e-68": {
            "id": "e-68",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63cc01c2993f00e36e3df85c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f00e36e3df85c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-13-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1671518401498
        },
        "e-69": {
            "id": "e-69",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63cc01c2993f00688c3df854",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f00688c3df854",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-2-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1671518418143
        },
        "e-70": {
            "id": "e-70",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63cc01c2993f0069353df852",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f0069353df852",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-2-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1671518439178
        },
        "e-71": {
            "id": "e-71",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63cc01c2993f0057f13df85d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63cc01c2993f0057f13df85d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-12-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1671518456603
        },
        "e-72": {
            "id": "e-72",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-73"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".thumbnail-link-block",
                "originalId": "63cc01c2993f000b493df851|6dd51fda-2485-b8ff-9bdb-031d2ac6ba28",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".thumbnail-link-block",
                "originalId": "63cc01c2993f000b493df851|6dd51fda-2485-b8ff-9bdb-031d2ac6ba28",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1671554745414
        },
        "e-73": {
            "id": "e-73",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-72"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".thumbnail-link-block",
                "originalId": "63cc01c2993f000b493df851|6dd51fda-2485-b8ff-9bdb-031d2ac6ba28",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".thumbnail-link-block",
                "originalId": "63cc01c2993f000b493df851|6dd51fda-2485-b8ff-9bdb-031d2ac6ba28",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1671554745415
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "Mouse Move Image",
            "continuousParameterGroups": [{
                "id": "a-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-wrap",
                                "selectorGuids": ["4ae1cc11-e35b-5706-77f7-17ef79bb2d10"]
                            },
                            "xValue": 8,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-13",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-left-elipse-wrap",
                                "selectorGuids": ["14dc32bb-72ab-cf77-c28d-1efff456d111"]
                            },
                            "xValue": -8,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-17",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-two-ellipses-wrap",
                                "selectorGuids": ["c22332de-5d02-1779-7813-47184bebe98f"]
                            },
                            "xValue": 16,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-21",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-others-ellipses-wrap",
                                "selectorGuids": ["d2c6adc3-8a52-900f-39d5-9fedff6f537e"]
                            },
                            "xValue": -24,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-27",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-three-elipses-left",
                                "selectorGuids": ["7d158eb0-1130-d917-de0f-b6de13288f89"]
                            },
                            "xValue": 16,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-29",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-three-elipses-right",
                                "selectorGuids": ["9ebe03e5-0f4b-d5b0-c294-2e40d2494eaa"]
                            },
                            "xValue": -16,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-33",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-left-elipses-wrap-ex-10",
                                "selectorGuids": ["a5bce7e2-398c-bddf-c09f-42098a3b2155"]
                            },
                            "xValue": 16,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-37",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-right-elipses-wrap-ex-10",
                                "selectorGuids": ["669f3097-69a1-08dc-4cff-2eaf9daa3553"]
                            },
                            "xValue": -8,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-41",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-home-elipses-left-wrap",
                                "selectorGuids": ["ef869110-7d04-67d9-9335-0b72dbeb4459"]
                            },
                            "xValue": -8,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-47",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-home-cube-wrap-2",
                                "selectorGuids": ["0ac5e5cb-f5e8-7993-f44c-eeb05dd30642"]
                            },
                            "xValue": 16,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-49",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-home-cube-wrap-3",
                                "selectorGuids": ["fcd596d4-a773-74b2-860c-5402cbd8abe3"]
                            },
                            "xValue": 16,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-51",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-home-elipses-right-wrap",
                                "selectorGuids": ["90d14dd7-bf35-9d99-79cf-36057d9a4151"]
                            },
                            "xValue": -8,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-wrap",
                                "selectorGuids": ["4ae1cc11-e35b-5706-77f7-17ef79bb2d10"]
                            },
                            "xValue": -6,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-14",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-left-elipse-wrap",
                                "selectorGuids": ["14dc32bb-72ab-cf77-c28d-1efff456d111"]
                            },
                            "xValue": 6,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-18",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-two-ellipses-wrap",
                                "selectorGuids": ["c22332de-5d02-1779-7813-47184bebe98f"]
                            },
                            "xValue": -8,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-22",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-others-ellipses-wrap",
                                "selectorGuids": ["d2c6adc3-8a52-900f-39d5-9fedff6f537e"]
                            },
                            "xValue": 6,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-28",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-three-elipses-left",
                                "selectorGuids": ["7d158eb0-1130-d917-de0f-b6de13288f89"]
                            },
                            "xValue": -8,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-30",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-three-elipses-right",
                                "selectorGuids": ["9ebe03e5-0f4b-d5b0-c294-2e40d2494eaa"]
                            },
                            "xValue": 8,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-34",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-left-elipses-wrap-ex-10",
                                "selectorGuids": ["a5bce7e2-398c-bddf-c09f-42098a3b2155"]
                            },
                            "xValue": -8,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-38",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-right-elipses-wrap-ex-10",
                                "selectorGuids": ["669f3097-69a1-08dc-4cff-2eaf9daa3553"]
                            },
                            "xValue": 16,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-42",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-home-elipses-left-wrap",
                                "selectorGuids": ["ef869110-7d04-67d9-9335-0b72dbeb4459"]
                            },
                            "xValue": 6,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-48",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-home-cube-wrap-2",
                                "selectorGuids": ["0ac5e5cb-f5e8-7993-f44c-eeb05dd30642"]
                            },
                            "xValue": -8,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-50",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-home-cube-wrap-3",
                                "selectorGuids": ["fcd596d4-a773-74b2-860c-5402cbd8abe3"]
                            },
                            "xValue": -16,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-52",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-home-elipses-right-wrap",
                                "selectorGuids": ["90d14dd7-bf35-9d99-79cf-36057d9a4151"]
                            },
                            "xValue": 8,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-wrap",
                                "selectorGuids": ["4ae1cc11-e35b-5706-77f7-17ef79bb2d10"]
                            },
                            "xValue": null,
                            "yValue": -24,
                            "xUnit": "px",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-right-ellipses-wrap",
                                "selectorGuids": ["dfbfbd09-acb7-496b-af6b-b391fd74528b"]
                            },
                            "yValue": 8,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-15",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-left-elipse-wrap",
                                "selectorGuids": ["14dc32bb-72ab-cf77-c28d-1efff456d111"]
                            },
                            "yValue": 16,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-19",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-two-ellipses-wrap",
                                "selectorGuids": ["c22332de-5d02-1779-7813-47184bebe98f"]
                            },
                            "xValue": null,
                            "yValue": 16,
                            "xUnit": "px",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-23",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-others-ellipses-wrap",
                                "selectorGuids": ["d2c6adc3-8a52-900f-39d5-9fedff6f537e"]
                            },
                            "yValue": -8,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-25",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-three-elipses-left",
                                "selectorGuids": ["7d158eb0-1130-d917-de0f-b6de13288f89"]
                            },
                            "xValue": null,
                            "yValue": 16,
                            "xUnit": "px",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-31",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-three-elipses-right",
                                "selectorGuids": ["9ebe03e5-0f4b-d5b0-c294-2e40d2494eaa"]
                            },
                            "xValue": null,
                            "yValue": 8,
                            "xUnit": "px",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-35",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-left-elipses-wrap-ex-10",
                                "selectorGuids": ["a5bce7e2-398c-bddf-c09f-42098a3b2155"]
                            },
                            "xValue": null,
                            "yValue": 16,
                            "xUnit": "px",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-39",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-right-elipses-wrap-ex-10",
                                "selectorGuids": ["669f3097-69a1-08dc-4cff-2eaf9daa3553"]
                            },
                            "yValue": 16,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-43",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-home-elipses-left-wrap",
                                "selectorGuids": ["ef869110-7d04-67d9-9335-0b72dbeb4459"]
                            },
                            "yValue": 16,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-45",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-home-cube-wrap",
                                "selectorGuids": ["08971f54-9515-933f-fecc-4fed7d49bec4"]
                            },
                            "xValue": null,
                            "yValue": -16,
                            "xUnit": "px",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-53",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-home-elipses-right-wrap",
                                "selectorGuids": ["90d14dd7-bf35-9d99-79cf-36057d9a4151"]
                            },
                            "yValue": -8,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-wrap",
                                "selectorGuids": ["4ae1cc11-e35b-5706-77f7-17ef79bb2d10"]
                            },
                            "xValue": null,
                            "yValue": 8,
                            "xUnit": "px",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-right-ellipses-wrap",
                                "selectorGuids": ["dfbfbd09-acb7-496b-af6b-b391fd74528b"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-16",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-left-elipse-wrap",
                                "selectorGuids": ["14dc32bb-72ab-cf77-c28d-1efff456d111"]
                            },
                            "yValue": -8,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-20",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-two-ellipses-wrap",
                                "selectorGuids": ["c22332de-5d02-1779-7813-47184bebe98f"]
                            },
                            "yValue": -16,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-24",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-others-ellipses-wrap",
                                "selectorGuids": ["d2c6adc3-8a52-900f-39d5-9fedff6f537e"]
                            },
                            "yValue": 8,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-26",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-three-elipses-left",
                                "selectorGuids": ["7d158eb0-1130-d917-de0f-b6de13288f89"]
                            },
                            "yValue": -8,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-32",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-three-elipses-right",
                                "selectorGuids": ["9ebe03e5-0f4b-d5b0-c294-2e40d2494eaa"]
                            },
                            "yValue": -6,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-36",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-left-elipses-wrap-ex-10",
                                "selectorGuids": ["a5bce7e2-398c-bddf-c09f-42098a3b2155"]
                            },
                            "yValue": -8,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-40",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-right-elipses-wrap-ex-10",
                                "selectorGuids": ["669f3097-69a1-08dc-4cff-2eaf9daa3553"]
                            },
                            "yValue": -8,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-44",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-home-elipses-left-wrap",
                                "selectorGuids": ["ef869110-7d04-67d9-9335-0b72dbeb4459"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-46",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-home-cube-wrap",
                                "selectorGuids": ["08971f54-9515-933f-fecc-4fed7d49bec4"]
                            },
                            "xValue": null,
                            "yValue": 16,
                            "xUnit": "px",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-54",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".hero-home-elipses-right-wrap",
                                "selectorGuids": ["90d14dd7-bf35-9d99-79cf-36057d9a4151"]
                            },
                            "yValue": 8,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1670876931463
        },
        "a-3": {
            "id": "a-3",
            "title": "Text Slide",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-3-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".sliding-text-left",
                            "selectorGuids": ["dda24e54-91a0-8853-61e3-9d3f320696bd"]
                        },
                        "zValue": 4,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-3-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".sliding-text-right",
                            "selectorGuids": ["e3785ccd-f27e-c8c4-5143-b95b6541e41f"]
                        },
                        "yValue": null,
                        "zValue": -8,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-3-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 6000,
                        "target": {
                            "selector": ".sliding-text-right",
                            "selectorGuids": ["e3785ccd-f27e-c8c4-5143-b95b6541e41f"]
                        },
                        "xValue": 169,
                        "yValue": -24,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-3-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 6000,
                        "target": {
                            "selector": ".sliding-text-left",
                            "selectorGuids": ["dda24e54-91a0-8853-61e3-9d3f320696bd"]
                        },
                        "xValue": -169,
                        "yValue": -12,
                        "zValue": null,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "px"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-3-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".sliding-text-left",
                            "selectorGuids": ["dda24e54-91a0-8853-61e3-9d3f320696bd"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-3-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".sliding-text-right",
                            "selectorGuids": ["e3785ccd-f27e-c8c4-5143-b95b6541e41f"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1670966460425
        },
        "a-11": {
            "id": "a-11",
            "title": "Sliding Text Ex 7",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "63cc01c2993f0013c83df85a|2543eba9-48aa-b30c-3a7e-ff4798d67a5f"
                        },
                        "zValue": 4,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 4000,
                        "target": {
                            "id": "63cc01c2993f0013c83df85a|2543eba9-48aa-b30c-3a7e-ff4798d67a5f"
                        },
                        "xValue": -169,
                        "yValue": -12,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "63cc01c2993f0013c83df85a|2543eba9-48aa-b30c-3a7e-ff4798d67a5f"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1671478990726
        },
        "a-5": {
            "id": "a-5",
            "title": "Mouse Move Eyes",
            "continuousParameterGroups": [{
                "id": "a-5-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-5-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00b4463df859|94bf017e-efe2-f58b-99bf-02b5b8ec3fc3"
                            },
                            "xValue": -6,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-5-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00b4463df859|9da381b7-de96-77a1-2390-409ff37aad4c"
                            },
                            "xValue": -3,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-5-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00b4463df859|116e5411-db60-a615-4db5-69e8e7302fbf"
                            },
                            "xValue": -3,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-5-n-13",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00b4463df859|116e5411-db60-a615-4db5-69e8e7302fc0"
                            },
                            "xValue": -6,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-5-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00b4463df859|94bf017e-efe2-f58b-99bf-02b5b8ec3fc3"
                            },
                            "xValue": 6,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-5-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00b4463df859|9da381b7-de96-77a1-2390-409ff37aad4c"
                            },
                            "xValue": 3,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-5-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00b4463df859|116e5411-db60-a615-4db5-69e8e7302fbf"
                            },
                            "xValue": 3,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-5-n-14",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00b4463df859|116e5411-db60-a615-4db5-69e8e7302fc0"
                            },
                            "xValue": 6,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-5-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-5-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00b4463df859|94bf017e-efe2-f58b-99bf-02b5b8ec3fc3"
                            },
                            "yValue": -5,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-5-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00b4463df859|9da381b7-de96-77a1-2390-409ff37aad4c"
                            },
                            "yValue": -3,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-5-n-11",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00b4463df859|116e5411-db60-a615-4db5-69e8e7302fbf"
                            },
                            "yValue": -3,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-5-n-15",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00b4463df859|116e5411-db60-a615-4db5-69e8e7302fc0"
                            },
                            "yValue": -5,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-5-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00b4463df859|94bf017e-efe2-f58b-99bf-02b5b8ec3fc3"
                            },
                            "yValue": 5,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-5-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00b4463df859|9da381b7-de96-77a1-2390-409ff37aad4c"
                            },
                            "yValue": 3,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-5-n-12",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00b4463df859|116e5411-db60-a615-4db5-69e8e7302fbf"
                            },
                            "yValue": 3,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-5-n-16",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00b4463df859|116e5411-db60-a615-4db5-69e8e7302fc0"
                            },
                            "yValue": 5,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1671202068805
        },
        "a-10": {
            "id": "a-10",
            "title": "Sliding Text Ex 8",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "63cc01c2993f00e1753df85b|87d3b3ce-7e87-970c-5920-5b082bbc1990"
                        },
                        "zValue": -4,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 4000,
                        "target": {
                            "id": "63cc01c2993f00e1753df85b|87d3b3ce-7e87-970c-5920-5b082bbc1990"
                        },
                        "xValue": -169,
                        "yValue": 12,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "63cc01c2993f00e1753df85b|87d3b3ce-7e87-970c-5920-5b082bbc1990"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1671478835998
        },
        "a-6": {
            "id": "a-6",
            "title": "Mouse Move Eyes 2",
            "continuousParameterGroups": [{
                "id": "a-6-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-6-n-17",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00e36e3df85c|6feb2802-1d7c-1a2e-6613-66ab451b8e64"
                            },
                            "xValue": -10,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-21",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00e36e3df85c|6feb2802-1d7c-1a2e-6613-66ab451b8e65"
                            },
                            "xValue": -10,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-25",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00e36e3df85c|6feb2802-1d7c-1a2e-6613-66ab451b8e67"
                            },
                            "xValue": -10,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-29",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00e36e3df85c|6feb2802-1d7c-1a2e-6613-66ab451b8e68"
                            },
                            "xValue": -10,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-6-n-18",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00e36e3df85c|6feb2802-1d7c-1a2e-6613-66ab451b8e64"
                            },
                            "xValue": 10,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-22",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00e36e3df85c|6feb2802-1d7c-1a2e-6613-66ab451b8e65"
                            },
                            "xValue": 10,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-26",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00e36e3df85c|6feb2802-1d7c-1a2e-6613-66ab451b8e67"
                            },
                            "xValue": 10,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-30",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00e36e3df85c|6feb2802-1d7c-1a2e-6613-66ab451b8e68"
                            },
                            "xValue": 10,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-6-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-6-n-19",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00e36e3df85c|6feb2802-1d7c-1a2e-6613-66ab451b8e64"
                            },
                            "yValue": -8,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-23",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00e36e3df85c|6feb2802-1d7c-1a2e-6613-66ab451b8e65"
                            },
                            "yValue": -7,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-27",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00e36e3df85c|6feb2802-1d7c-1a2e-6613-66ab451b8e67"
                            },
                            "yValue": -8,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-31",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00e36e3df85c|6feb2802-1d7c-1a2e-6613-66ab451b8e68"
                            },
                            "yValue": -7,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-6-n-20",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00e36e3df85c|6feb2802-1d7c-1a2e-6613-66ab451b8e64"
                            },
                            "yValue": 8,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-24",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00e36e3df85c|6feb2802-1d7c-1a2e-6613-66ab451b8e65"
                            },
                            "yValue": 7,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-28",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00e36e3df85c|6feb2802-1d7c-1a2e-6613-66ab451b8e67"
                            },
                            "yValue": 8,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-32",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "63cc01c2993f00e36e3df85c|6feb2802-1d7c-1a2e-6613-66ab451b8e68"
                            },
                            "yValue": 7,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1671202068805
        },
        "a-9": {
            "id": "a-9",
            "title": "Sliding Text Ex 9",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 4000,
                        "target": {
                            "id": "63cc01c2993f00e36e3df85c|605895f1-de82-93ac-8f1a-2077648add7f"
                        },
                        "xValue": -169,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "63cc01c2993f00e36e3df85c|605895f1-de82-93ac-8f1a-2077648add7f"
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1671478707191
        },
        "a-2": {
            "id": "a-2",
            "title": "Navbar BG White",
            "continuousParameterGroups": [{
                "id": "a-2-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-2-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".header",
                                "selectorGuids": ["06287098-44e2-63e4-6467-adfe73be3910"]
                            },
                            "globalSwatchId": "",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 0.1
                        }
                    }]
                }, {
                    "keyframe": 1,
                    "actionItems": [{
                        "id": "a-2-n-2",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".header",
                                "selectorGuids": ["06287098-44e2-63e4-6467-adfe73be3910"]
                            },
                            "globalSwatchId": "2e23ed18",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1670966435060
        },
        "a-12": {
            "id": "a-12",
            "title": "Navbar BG Black",
            "continuousParameterGroups": [{
                "id": "a-12-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-12-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".header",
                                "selectorGuids": ["06287098-44e2-63e4-6467-adfe73be3910"]
                            },
                            "globalSwatchId": "",
                            "rValue": 29,
                            "bValue": 44,
                            "gValue": 37,
                            "aValue": 0
                        }
                    }]
                }, {
                    "keyframe": 1,
                    "actionItems": [{
                        "id": "a-12-n-2",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".header",
                                "selectorGuids": ["06287098-44e2-63e4-6467-adfe73be3910"]
                            },
                            "globalSwatchId": "36ada57d",
                            "rValue": 29,
                            "bValue": 44,
                            "gValue": 37,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1670966435060
        },
        "a-13": {
            "id": "a-13",
            "title": "Navbar BG Green",
            "continuousParameterGroups": [{
                "id": "a-13-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-13-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".header",
                                "selectorGuids": ["06287098-44e2-63e4-6467-adfe73be3910"]
                            },
                            "globalSwatchId": "",
                            "rValue": 190,
                            "bValue": 108,
                            "gValue": 228,
                            "aValue": 0
                        }
                    }]
                }, {
                    "keyframe": 1,
                    "actionItems": [{
                        "id": "a-13-n-2",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".header",
                                "selectorGuids": ["06287098-44e2-63e4-6467-adfe73be3910"]
                            },
                            "globalSwatchId": "f555ef90",
                            "rValue": 178,
                            "bValue": 75,
                            "gValue": 226,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1670966435060
        },
        "a-7": {
            "id": "a-7",
            "title": "Thumbnail Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-arrow",
                            "selectorGuids": ["8bb10e06-fd03-b8ba-57f3-1dfce27d216f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-7-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-arrow",
                            "selectorGuids": ["8bb10e06-fd03-b8ba-57f3-1dfce27d216f"]
                        },
                        "yValue": 10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-arrow",
                            "selectorGuids": ["8bb10e06-fd03-b8ba-57f3-1dfce27d216f"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-7-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-arrow",
                            "selectorGuids": ["8bb10e06-fd03-b8ba-57f3-1dfce27d216f"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1671374148311
        },
        "a-8": {
            "id": "a-8",
            "title": "Thumbnail Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-arrow",
                            "selectorGuids": ["8bb10e06-fd03-b8ba-57f3-1dfce27d216f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-arrow",
                            "selectorGuids": ["8bb10e06-fd03-b8ba-57f3-1dfce27d216f"]
                        },
                        "yValue": 10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1671374148311
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});