! function(t) {
    function e(n) {
        if (i[n]) return i[n].exports;
        var s = i[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return t[n].call(s.exports, s, s.exports, e), s.loaded = !0, s.exports
    }
    var i = {};
    return e.m = t, e.c = i, e.p = "/", e(0)
}([function(t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var s = i(6),
        a = n(s),
        o = i(8),
        r = (n(o), i(9)),
        c = (n(r), i(7)),
        l = n(c),
        d = i(5),
        h = (n(d), i(4)),
        u = (n(h), i(3)),
        f = n(u),
        v = i(2),
        p = n(v);
    window.addEventListener("load", function(t) {
            var e = document.querySelector(".js-dotField"),
                i = document.querySelector(".js-dotFieldFooter");
            console.log("Orbit.ai 👾👾👾👾👾 Bakken & Bæck 2016"), "/" == window.location.pathname ? (new a.default(e), new l.default) : (new f.default, new p.default), new a.default(i, 2.5, !0)
        }),
        function(t, e, i, n, s, a, o) {
            t.GoogleAnalyticsObject = s, t[s] = t[s] || function() {
                (t[s].q = t[s].q || []).push(arguments)
            }, t[s].l = 1 * new Date, a = e.createElement(i), o = e.getElementsByTagName(i)[0], a.async = 1, a.src = n, o.parentNode.insertBefore(a, o)
        }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-48579361-1", "auto"), ga("send", "pageview")
}, function(t, e) {
    "use strict";

    function i(t) {
        return new Promise(function(e, i) {
            for (var n = [], s = function(i) {
                    var s = new XMLHttpRequest,
                        a = [];
                    s.onreadystatechange = function() {
                        if (4 == this.readyState && 200 == this.status) {
                            for (var i = this.responseXML, s = i.getElementsByTagName("circle"), o = 0; o < s.length; o++) a.push(s[o]);
                            n.push(a), n.length == t.length && e(n)
                        }
                    }, s.open("GET", t[i], !0), s.send()
                }, a = 0; a < t.length; a++) s(a)
        })
    }

    function n(t) {
        for (var e = t.responseXML, i = e.getElementsByTagName("circle"), n = [], s = 0; s < i.length; s++) n.push(i[s]);
        return n
    }

    function s(t, e, i, n) {
        var s = i * Math.PI / 180,
            a = t + e * Math.cos(s * n),
            o = t + e * Math.sin(s * n),
            r = {
                x: a,
                y: o
            };
        return r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.loadSVG = i, e.getPoints = n, e.getPointInCircle = s
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t) {
        for (var e = t.length - 1; e > 0; e--) {
            var i = Math.floor(Math.random() * (e + 1)),
                n = t[e];
            t[e] = t[i], t[i] = n
        }
        return t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        o = (i(1), function() {
            function t() {
                n(this, t), this.canvas = document.querySelector(".js-animNLG"), this.container = this.canvas.parentNode, this.colors = ["#CCC2FD", "#AEC2FD", "#FFFFFF", "#CCC2FD", "#AEC2FD", "#FFFFFF"], this.stage = new createjs.Stage(this.canvas), this.points = null, this.positions = [], this.listItems = [], this.padding = window.innerWidth < 600 ? 20 : 30, this.composition = new createjs.Container, this.canvasProps = {
                    width: this.container.offsetWidth,
                    height: this.container.offsetWidth,
                    center: this.container.offsetWidth / 2
                }, this.initCanvas(), this.drawDotScroll(), this.animateScroll(), this.drawList(), this.animateList()
            }
            return a(t, [{
                key: "initCanvas",
                value: function() {
                    this.canvas.width = this.canvasProps.width * window.devicePixelRatio, this.canvas.height = this.canvasProps.width * window.devicePixelRatio, this.canvas.style.width = this.canvasProps.width + "px", this.canvas.style.height = this.canvasProps.width + "px", this.stage.scaleX = window.devicePixelRatio, this.stage.scaleY = window.devicePixelRatio
                }
            }, {
                key: "drawDotScroll",
                value: function() {
                    for (var t = new createjs.Container, e = void 0, i = 0; i < 8; i++) {
                        for (var n = new createjs.Container, s = 0; s < 6; s++) {
                            var a = void 0,
                                o = void 0;
                            a = 0 == s || 1 == s ? 0 : this.padding, a = 2 == s || 3 == s ? this.padding : a, a = 4 == s ? 2 * this.padding : a, a = 5 == s ? 3 * this.padding : a, o = 1 == s || 2 == s ? this.padding : 0, o = 3 == s || 4 == s ? 2 * this.padding : o, o = s > 4 ? 3 * this.padding : o, e = new createjs.Shape, e.graphics.beginFill(this.colors[s]).drawCircle(0, 0, 2), e.x = a, e.y = o, n.addChild(e)
                        }
                        n.x = this.padding + i * (2 * this.padding), n.y = 2 * this.padding, t.addChild(n)
                    }
                    this.composition.addChild(t), this.stage.update()
                }
            }, {
                key: "animateScroll",
                value: function() {
                    var t = this,
                        e = new TimelineLite({
                            onUpdate: function() {
                                t.stage.update()
                            },
                            onComplete: function() {
                                e.restart()
                            }
                        }),
                        i = this.composition.children[0];
                    e.to(i, 3, {
                        x: this.padding * -2,
                        ease: Power0.easeNone
                    }, 0), e.fromTo(i.children[7], 2, {
                        alpha: 0
                    }, {
                        alpha: 1
                    }, .5), e.fromTo(i.children[0], 2, {
                        alpha: 1
                    }, {
                        alpha: 0
                    }, .5)
                }
            }, {
                key: "drawList",
                value: function() {
                    for (var t = this.canvasProps.width - 30, e = [.375 * t, .25 * t, .1 * t, .1 * t, .1 * t], i = new createjs.Container, n = void 0, a = void 0, o = window.innerWidth < 600 ? 5 : 10, r = 0; r < o; r++) {
                        var c = s(e),
                            l = [0, 1, 2, 3, 4],
                            d = s(l),
                            h = new createjs.Container;
                        d.splice(3, 3);
                        for (var u = 0; u < c.length; u++) {
                            for (var f = 0, v = 0, p = 0; p < u; p++) f += c[p];
                            d.indexOf(u) !== -1 && (v = 6, a = new createjs.Shape, a.graphics.beginFill("#AEC2FD").drawCircle(0, 0, 2), a.x = f + 1, h.addChild(a), this.listItems.push(a)), n = new createjs.Shape, n.graphics.beginFill("#7D6BFB").drawRoundRect(0, 0, c[u] - 4 - v, 4, 2, 2, 2, 2), n.x = f + v, n.y = -2, this.listItems.push(n), h.addChild(n)
                        }
                        h.x = 30, h.y = this.canvasProps.center + 30 + 15 * r, i.addChild(h)
                    }
                    this.composition.addChild(i), this.stage.addChild(this.composition), this.stage.update()
                }
            }, {
                key: "animateList",
                value: function() {
                    for (var t = this, e = new TimelineLite({
                            onUpdate: function() {
                                t.stage.update()
                            },
                            onComplete: function() {
                                e.restart()
                            }
                        }), i = 0; i < this.listItems.length; i++) e.fromTo(this.listItems[i], .25, {
                        alpha: 0
                    }, {
                        alpha: 1
                    }, .25 * i);
                    e.fromTo(this.composition.children[1], 1, {
                        alpha: 1
                    }, {
                        alpha: 0
                    }, .25 * (this.listItems.length - 4))
                }
            }]), t
        }());
    e.default = o
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(1),
        o = function() {
            function t() {
                var e = this;
                n(this, t), this.canvas = document.querySelector(".js-animNLP"), this.container = this.canvas.parentNode, this.icons = ["img/dots-location.e51f51b7d0.svg", "img/dots-user.c47b140c89.svg", "img/dots-building.3e744a31c2.svg"], this.colors = ["#CCC2FD", "#AEC2FD", "#FFFFFF"], this.stage = new createjs.Stage(this.canvas), this.points = null, this.positions = [], this.groups = new createjs.Container, this.dotrad = window.innerWidth < 600 ? 2.3 : 1.7, this.canvasProps = {
                    width: this.container.offsetWidth,
                    height: this.container.offsetWidth,
                    center: this.container.offsetWidth / 2
                }, this.initCanvas(), (0, a.loadSVG)(this.icons).then(function(t) {
                    e.points = t, e.getCirclePositions(t)
                }).then(function() {
                    e.drawDots(), e.animate()
                })
            }
            return s(t, [{
                key: "initCanvas",
                value: function() {
                    this.canvas.width = this.canvasProps.width * window.devicePixelRatio, this.canvas.height = this.canvasProps.width * window.devicePixelRatio, this.canvas.style.width = this.canvasProps.width + "px", this.canvas.style.height = this.canvasProps.width + "px", this.stage.scaleX = window.devicePixelRatio, this.stage.scaleY = window.devicePixelRatio
                }
            }, {
                key: "getCirclePositions",
                value: function(t) {
                    for (var e = 0; e < t.length; e++)
                        for (var i = (new createjs.Container, t[e]), n = 0; n < i.length; n++) {
                            var s = 360 / i.length,
                                o = 30 * e,
                                r = {
                                    x: (0, a.getPointInCircle)(this.canvasProps.center, 110 + o, s, n).x,
                                    y: (0, a.getPointInCircle)(this.canvasProps.center, 110 + o, s, n).y
                                };
                            this.positions.push(r)
                        }
                }
            }, {
                key: "drawDots",
                value: function() {
                    for (var t = void 0, e = 0; e < this.points.length; e++) {
                        for (var i = this.points[e], n = new createjs.Container, s = 0; s < this.points[e].length; s++) {
                            var a = Math.floor(Math.random() * this.positions.length);
                            t = new createjs.Shape, t.graphics.beginFill(this.colors[e]).drawCircle(0, 0, this.dotrad), t.assembledX = i[s].getAttribute("cx"), t.assembledY = i[s].getAttribute("cy"), t.x = t.randomX = this.positions[a].x, t.y = t.randomY = this.positions[a].y, this.positions.splice(a, 1), n.addChild(t)
                        }
                        n.regX = n.regY = this.canvasProps.center, n.x = n.y = this.canvasProps.center, n.scaleX = n.scaleY = window.innerWidth < 600 ? .8 : 1.15, this.groups.addChild(n)
                    }
                    this.groups.regX = this.groups.regY = this.canvasProps.center, this.groups.x = this.groups.y = this.canvasProps.center, this.stage.addChild(this.groups), this.stage.update()
                }
            }, {
                key: "animate",
                value: function() {
                    for (var t = this, e = new TimelineLite({
                            onUpdate: function() {
                                t.stage.update()
                            },
                            onComplete: function() {
                                e.restart()
                            }
                        }), i = 0; i < this.groups.children.length; i++) {
                        var n = this.groups.children[i],
                            s = 2 == i ? 10 : 0,
                            a = 2 == i ? 5 : 0;
                        e.to(n, 1.75 + .25 * Math.random(), {
                            rotation: 180,
                            ease: Power1.easeInOut,
                            onStart: function() {}
                        }, 2 * (i + 1) + 2 * i), e.to(n, 1.75 + .25 * Math.random(), {
                            rotation: 0,
                            ease: Power1.easeInOut
                        }, 2 * (i + 1) + 4 + 2 * i);
                        for (var o = 0; o < n.children.length; o++) {
                            var r = n.children[o];
                            e.to(r, 1.75 + .25 * Math.random(), {
                                x: this.canvasProps.center + 70 - r.assembledX - s,
                                y: this.canvasProps.center + 80 - r.assembledY - a,
                                ease: Power1.easeInOut
                            }, 2 * (i + 1) + 2 * i), e.to(r, 1.75 + .25 * Math.random(), {
                                x: r.randomX,
                                y: r.randomY,
                                ease: Power1.easeInOut
                            }, 2 * (i + 1) + 4 + 2 * i)
                        }
                    }
                }
            }]), t
        }();
    e.default = o
}, function(t, e) {
    "use strict";
    document.querySelector(".chat") && ! function() {
        for (var t = document.querySelectorAll(".tabs--assistant .tabs__item"), e = document.querySelectorAll(".chat"), i = [], n = 0, s = (new Waypoint({
                element: document.querySelector(".tabs--assistant"),
                handler: function(t) {
                    "down" == t && i[n].play(), "up" == t && i[n].pause()
                },
                offset: window.innerHeight - 300
            }), function(t) {
                var n = e[t].querySelectorAll(".chat__item"),
                    s = new TimelineLite({
                        paused: !0
                    });
                i.push(s);
                for (var a = function(i) {
                        var a = n[i],
                            o = a.querySelector(".chat__bubble"),
                            r = o.querySelector("p"),
                            c = r.getBoundingClientRect(),
                            l = a.parentNode.parentNode;
                        s.to(e[t], .75, {
                                y: "-=82",
                                onStart: function() {
                                    l.scrollTop = 0
                                }
                            }, 4 * i),
                            function(i, a) {
                                s.to(e[t], .75, {
                                    y: "-=" + (i.height - 50)
                                }, 4 * a + 2), s.fromTo(o, .25, {
                                    width: 70,
                                    height: 50
                                }, {
                                    width: i.width,
                                    height: i.height,
                                    onStart: function() {
                                        this.target.classList.add("is-sent")
                                    },
                                    onComplete: function() {
                                        this.target.classList.add("is-current"), a == n.length - 1 && setTimeout(function() {
                                            document.querySelector(".tabs--assistant").classList.add("is-complete"), l.scrollTop = l.scrollHeight
                                        }, 300)
                                    }
                                }, 4 * a + 2)
                            }(c, i)
                    }, o = 0; o < n.length; o++) a(o)
            }), a = 0; a < e.length; a++) s(a);
        for (var o = function(e) {
                t[e].addEventListener("click", function() {
                    var t = (this.dataset.tab, document.querySelectorAll(".chat__bubble.is-current"));
                    n = e;
                    for (var s = 0; s < t.length; s++) t[s].classList.remove("is-current", "is-sent");
                    for (var a = 0; a < i.length; a++) i[a].stop().seek(0);
                    document.querySelector(".tabs--assistant").classList.remove("is-complete"), i[n].play()
                })
            }, r = 0; r < t.length; r++) o(r)
    }()
}, function(t, e) {
    "use strict";
    for (var i = !1, n = document.querySelectorAll(".js-toggleContact"), s = document.getElementById("contact"), a = 0; a < n.length; a++) n[a].addEventListener("click", function() {
        i = !i, i ? document.body.classList.add("is-contact") : document.body.classList.remove("is-contact")
    });
    window.addEventListener("keyup", function(t) {
        27 == t.keyCode && (i = !i, i ? document.body.classList.add("is-contact") : document.body.classList.remove("is-contact"))
    }), s.addEventListener("submit", function(t) {
        t.preventDefault();
        var e = new XMLHttpRequest;
        e.onreadystatechange = function() {
            4 == this.readyState && 200 == this.status && (s.classList.add("is-success"), s.querySelector(".button").innerHTML = "Sent", console.log("Thank you! Contact form entry registered."), setTimeout(function() {
                document.body.classList.remove("is-contact")
            }, 5e3))
        }, e.open("POST", s.getAttribute("action")), e.send(new FormData(s))
    })
}, function(t, e) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function t(e, n, s, a) {
        var o = this;
        i(this, t), this.canvas = e, this.dots = [], this.angleMultiplier = n || 1.3, this.isStatic = s || !1, this.offset = a || -window.innerHeight / 2;
        var r = 77,
            c = r / 2,
            l = r / 10,
            d = 2,
            h = "#6255D0",
            u = Math.floor(window.innerWidth / (c + l)) + 2,
            f = Math.floor(this.canvas.offsetHeight / (c + l)) + 2,
            v = u * f,
            p = 360 / (f * this.angleMultiplier);
        this.isPaused = !0, this.canvas.width = window.innerWidth * window.devicePixelRatio, this.canvas.height = this.canvas.offsetHeight * window.devicePixelRatio, this.canvas.style.width = window.innerWidth + "px", this.canvas.style.height = this.canvas.offsetHeight + "px", this.stage = new createjs.Stage(this.canvas), this.stage.scaleX = window.devicePixelRatio, this.stage.scaleY = window.devicePixelRatio, console.log("Started dot field with: " + v + " dots. Static: " + this.isStatic + ". Element: " + e), this.waypoint = new Waypoint({
            element: this.canvas,
            handler: function(t) {
                self.isPaused = !self.isPaused, console.log("Paused: " + self.isPaused + " dotField -> " + o.canvas.className)
            },
            offset: this.offset
        });
        for (var g = 0; g < v; g++) {
            var w = g % u,
                m = Math.floor(g / u),
                y = w * r - w * c + w * l,
                P = m * r - m * c + m * l,
                C = new createjs.Shape;
            C.graphics.beginFill(h).drawCircle(0, 0, d), C.x = y, C.y = P, C.regX = d, C.regY = c, C.rotation = w * p + m * p, this.dots.push(C), this.stage.addChild(C)
        }
        this.stage.update(), this.isStatic || (createjs.Ticker.timingMode = createjs.Ticker.RAF, createjs.Ticker.addEventListener("tick", function(t) {
            if (!self.isPaused) {
                for (var e = 0; e < o.dots.length; e++) {
                    var i = o.dots[e];
                    i.rotation += .3
                }
                o.stage.update(t)
            }
        }))
    };
    e.default = n
}, function(t, e) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function t() {
        function e() {
            r && (c = n.querySelector(".tab.is-active").querySelectorAll(".data-strings__item span"), u < c.length - 1 ? u += 1 : u = 0, c.length !== h.length && (u = 0), l = c[u].dataset.highlight.split(", "), d = c[u].dataset.target, o[d].unmark(), o[d].mark(l, {
                separateWordSearch: !1
            }), u > 0 && c[u - 1].classList.remove("is-active"), 0 == u && c[c.length - 1].classList.remove("is-active"), c[u].classList.add("is-active"), h = c)
        }
        i(this, t);
        for (var n = document.querySelector(".tabs--generator"), s = n.querySelectorAll(".data-strings__item span"), a = n.querySelectorAll(".data-copy"), o = [], r = !0, c = void 0, l = void 0, d = void 0, h = [], u = 0, f = 0; f < a.length; f++) o.push(new Mark(a[f]));
        for (var v = function(t) {
                var e = s[t],
                    i = e.dataset.highlight.split(", "),
                    n = e.dataset.target;
                e.addEventListener("mouseenter", function() {
                    o[n].unmark(), o[n].mark(i, {
                        separateWordSearch: !1
                    }), r = !1
                }), e.addEventListener("click", function() {
                    o[n].unmark(), o[n].mark(i, {
                        separateWordSearch: !1
                    }), r = !1
                }), e.addEventListener("mouseleave", function() {
                    o[n].unmark(), o[d].mark(l, {
                        separateWordSearch: !1
                    }), r = !0
                })
            }, p = 0; p < s.length; p++) v(p);
        e(), n && setInterval(function() {
            e()
        }, 3e3)
    };
    e.default = n
}, function(t, e) {
    "use strict";
    for (var i = document.querySelectorAll(".js-scrollTo"), n = function(t) {
            var e = i[t],
                n = e.dataset.scroll,
                s = parseInt(e.dataset.offset) || 0,
                a = document.querySelector(".js-scrollTo-" + n).getBoundingClientRect().top + window.pageYOffset;
            e.addEventListener("click", function() {
                e.classList.contains("tabs__item") && window.innerWidth > 600 || TweenLite.to(window, 1.5, {
                    scrollTo: a - s,
                    ease: Power4.easeInOut
                })
            })
        }, s = 0; s < i.length; s++) n(s)
}, function(t, e) {
    "use strict";
    for (var i = document.querySelectorAll(".tabs__item"), n = function(t) {
            var e = i[t].dataset.tab,
                n = document.querySelector(".tab--" + e),
                s = void 0;
            i[t].addEventListener("click", function() {
                s = document.querySelectorAll(".data-strings__item span");
                for (var a = 0; a < s.length; a++) s[a].classList.remove("is-active");
                i[t].parentNode.querySelector(".tabs__item.is-active").classList.remove("is-active"), n.parentNode.querySelector(".tab.is-active").classList.remove("is-active"), this.classList.add("is-active"), n.classList.add("is-active"), console.log('Tab: "' + e + '" toggled.')
            })
        }, s = 0; s < i.length; s++) n(s)
}]);
