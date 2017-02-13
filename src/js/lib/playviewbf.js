define("https://github.com/yucopowo/playview/master/Class", [], function () {
    var t = function () {
        var e = arguments.length, n = arguments[0], i = arguments[e - 1], o = "function" == typeof i.initialize ? i.initialize : function () {
            n.prototype.initialize.apply(this, arguments)
        };
        if (e > 1) {
            var s = [o, n].concat(Array.prototype.slice.call(arguments).slice(1, e - 1), i);
            t.inherit.apply(null, s)
        } else o.prototype = i;
        return o
    };
    return t.inherit = function (e, n) {
        var i = function () {
        };
        i.prototype = n.prototype, e.prototype = new i;
        var o, s, r;
        for (o = 2, s = arguments.length; s > o; o++)r = arguments[o], "function" == typeof r && (r = r.prototype), t.Util.extend(e.prototype, r)
    }, t.Util = t.Util || {}, t.Util.extend = function (t, e) {
        if (t = t || {}, e) {
            for (var n in e) {
                var i = e[n];
                void 0 !== i && (t[n] = i)
            }
            var o = "function" == typeof window.Event && e instanceof window.Event;
            !o && e.hasOwnProperty && e.hasOwnProperty("toString") && (t.toString = e.toString)
        }
        return t
    }, t
}), define("https://github.com/yucopowo/playview/master/Message", ["https://github.com/yucopowo/playview/master/Class", "$"], function (t) {
    var e = t("https://github.com/yucopowo/playview/master/Class"), n = t("$"), i = 0, o = e({
        initialize: function () {
            this.name = name
        },
        msg_div: '<div id="msg-div" style="position:absolute;left:38%;top:10px;width:300px;z-index:20000;"></div>',
        alert: function (t, e) {
            function o(t, e) {
                return '<div class="msg' + i + '" style="border-radius:8px;-moz-border-radius:8px;background:#F6F6F6;border:2px solid#ccc;margin-top:2px;padding:10px 15px;color:#555;"><h3 style="margin:0 0 8px;font-weight:bold;font-size:15px;">' + t + '</h3><p style="margin: 0;">' + e + "</p></div>"
            }

            var s = this, r = n("document.body:first-child");
            r.length > 0 ? 0 == n("#msg-div").length && r.before(s.msg_div) : 0 == n("#msg-div").length && n(document.body).append(s.msg_div);
            var a = e;
            n("#msg-div").append(o(t, a));
            var c = n(".msg" + i);
            c.css("opacity", "0"), c.css("margin-top", "-70px"), c.animate({
                marginTop: "0px",
                opacity: "1"
            }, 1e3, function () {
                setTimeout(function () {
                    c.animate({marginTop: "-70px", opacity: "0"}, 1e3, function () {
                        c.remove()
                    })
                }, 1500)
            }), i++
        }
    }), s = new o;
    return s
}), define("https://github.com/yucopowo/playview/master/ViewArray", ["https://github.com/yucopowo/playview/master/Class", "$"], function (t) {
    var e = t("https://github.com/yucopowo/playview/master/Class"), n = t("$");
    Array.prototype._remove = function (t, e) {
        var n = this.slice((e || t) + 1 || this.length);
        return this.length = 0 > t ? this.length + t : t, this.push.apply(this, n)
    }, Array.prototype._insert = function (t, e) {
        this.splice(t, 0, e)
    };
    var i = e({
        views: null, initialize: function () {
            this.views = []
        }, size: function () {
            if (null == this.views)return 0;
            var t = this.views;
            return t.length
        }, append: function (t) {
            var e = this.views;
            e.push(t)
        }, insert: function (t, e) {
            this.views._insert(t, e)
        }, index: function (t) {
            var e = this.views;
            return n.inArray(t, e)
        }, clear: function () {
            var t = this.views.length;
            this.views._remove(0, t)
        }, remove: function (t) {
            this.views._remove(t)
        }, has: function (t) {
            var e = this.views, i = n.inArray(t, e);
            return -1 != i
        }, get: function (t) {
            var e = this.views;
            return null == t ? e : e[t]
        }, getById: function (t) {
            var e = this.views, i = null, o = [];
            return n.each(e, function (e, n) {
                null != n.id && t == n.id && (o.push(n), i = n)
            }), o.length > 1 ? o : i
        }, getByClassName: function () {
            var t = this.views, e = null, i = [];
            return n.each(t, function (t, n) {
                null != n.className && id == n.className && (i.push(n), e = n)
            }), i.length > 1 ? i : e
        }
    });
    return i
}), define("https://github.com/yucopowo/playview/master/ViewModel", ["https://github.com/yucopowo/playview/master/Class", "https://github.com/yucopowo/playview/master/View"], function (t) {
    var e = t("https://github.com/yucopowo/playview/master/Class"), n = t("https://github.com/yucopowo/playview/master/View"), i = e({
        initialize: function (t) {
            e.Util.extend(this, t)
        }, bindView: function (t) {
            var e = null;
            return null == t ? !1 : (e = "string" == typeof t ? document.getElementById(t) : t instanceof n ? t.getElement() : t, null == e ? !1 : (ko.applyBindings(this, e), !0))
        }
    });
    return i
}), define("https://github.com/yucopowo/playview/master/View", ["https://github.com/yucopowo/playview/master/Class", "$", "https://github.com/yucopowo/playview/master/ViewArray", "ko"], function (t) {
    var e = t("https://github.com/yucopowo/playview/master/Class"), n = t("$");
    (function (t, e, n) {
        function i() {
            o = e[a](function () {
                s.each(function () {
                    var e = t(this), n = e.width(), i = e.height(), o = t.data(this, u);
                    (n !== o.w || i !== o.h) && e.trigger(c, [o.w = n, o.h = i])
                }), i()
            }, r[h])
        }

        var o, s = t([]), r = t.resize = t.extend(t.resize, {}), a = "setTimeout", c = "resize", u = c + "-special-event", h = "delay", l = "throttleWindow";
        r[h] = 250, r[l] = !0, t.event.special[c] = {
            setup: function () {
                if (!r[l] && this[a])return !1;
                var e = t(this);
                s = s.add(e), t.data(this, u, {w: e.width(), h: e.height()}), 1 === s.length && i()
            }, teardown: function () {
                if (!r[l] && this[a])return !1;
                var e = t(this);
                s = s.not(e), e.removeData(u), s.length || clearTimeout(o)
            }, add: function (e) {
                function i(e, i, s) {
                    var r = t(this), a = t.data(this, u);
                    a.w = i !== n ? i : r.width(), a.h = s !== n ? s : r.height(), o.apply(this, arguments)
                }

                if (!r[l] && this[a])return !1;
                var o;
                return t.isFunction(e) ? (o = e, i) : (o = e.handler, e.handler = i, void 0)
            }
        }
    })(n, this);
    var i = t("https://github.com/yucopowo/playview/master/ViewArray"), o = t("ko"), s = e({
        id: null,
        className: null,
        style: null,
        application: null,
        parent: null,
        context: null,
        tagName: null,
        views: null,
        initialize: function (t) {
            var o = this;
            if (null != t) {
                if (t.hasOwnProperty("context") && null != t.context || (t.context = t.hasOwnProperty("tagName") ? n("<" + t.tagName + ">") : n("<div></div>")), t.hasOwnProperty("html")) {
                    var s = t.html;
                    t.context.append(s), delete t.html
                }
                e.Util.extend(o, t);
                var r = o.context;
                r.attr("id", o.id), r.addClass(o.className), o.style && r.css(o.style)
            } else o.context = n("<div></div>");
            this.views = new i
        },
        size: function () {
            return this.views.size()
        },
        get: function (t) {
            null == t && (t = 0);
            var e = this.views;
            return e.get(t)
        },
        getById: function (t) {
            return this.views.get(t)
        },
        getByClassName: function (t) {
            return this.views.getByClassName(t)
        },
        index: function (t) {
            return this.views.index(t)
        },
        attr: function (t, e) {
            return this.context.attr(t, e)
        },
        removeAttr: function (t) {
            this.context.removeAttr(t)
        },
        addClass: function (t) {
            this.context.addClass(t)
        },
        removeClass: function (t) {
            this.context.removeClass(t)
        },
        toggleClass: function (t) {
            this.context.toggleClass(t)
        },
        html: function (t) {
            return this.context.html(t)
        },
        text: function (t) {
            return this.context.text(t)
        },
        first: function () {
            return this.get(0)
        },
        last: function () {
            return this.get(this.size() - 1)
        },
        hasClass: function (t) {
            return this.context.hasClass(t)
        },
        is: function () {
        },
        has: function (t) {
            return this.views.has(t)
        },
        isVisible: function () {
            return this.context.filter(":visible").length > 0
        },
        append: function (t) {
            var e = this;
            if (!this.views.has(t)) {
                t.application = this.application, t.parent = e;
                typeof t.beforeRender == 'function' && t.beforeRender();
                this.views.append(t);
                var n = t.context;
                this.context.append(n), setTimeout(function () {
                    typeof t.afterRender == 'function' && t.afterRender()
                }, 50)
            }
        },
        before: function (t) {
            var e = this;
            if (!this.views.has(t)) {
                t.application = e.parent.application,t.parent = e.parent;
                var n = this.parent.views.index(e);
                this.parent.views.insert(n, t);
                var i = t.context;
                this.context.before(i), setTimeout(function () {
                    t.afterRender()
                }, 50)
            }
        },
        empty: function () {
            return this.context.empty(), this.views.clear(), this
        },
        remove: function (t) {
            var e = this;
            if (null == t) {
                if (null == this.parent)return;
                var t = this.parent.views.index(this);
                if (-1 == t)return;
                return e.parent.views.remove(t), e.context.remove(), void 0
            }
            var n = e.views.get(t);
            n && n.remove()
        },
        removeAll : function(){var e = this;var arr = e.views.views;for(var i=arr.length-1;i>-1;i--){if(arr[i].views.views.length>0){arr[i].removeAll();}else{arr[i].remove();}}e.remove();},
        clone: function (t, e) {
            var n = this.context.clone(t, e);
            return new s({context: n})
        },
        css: function (t, e) {
            this.context.css(t, e)
        },
        offset: function (t) {
            return this.context.offset(t)
        },
        position: function () {
            return this.context.position()
        },
        height: function (t) {
            return 0 == arguments.length ? this.context.height() : this.context.height(t)
        },
        width: function (t) {
            return 0 == arguments.length ? this.context.width() : this.context.width(t)
        },
        innerHeight: function () {
            return this.context.innerHeight()
        },
        innerWidth: function () {
            return this.context.innerWidth()
        },
        on: function (t, e, n, i) {
            return this.context.on(t, e, n, i), this
        },
        off: function (t, e, n) {
            return this.context.off(t, e, n), this
        },
        bind: function (t, e, n) {
            return this.context.bind(t, e, n), this
        },
        one: function (t, e, n) {
            return this.context.one(t, e, n), this
        },
        trigger: function (t, e) {
            return this.context.trigger(t, e), this
        },
        unbind: function (t, e) {
            e && o.cleanNode(e.context[0]);
        },
        delegate: function (t, e, n, i) {
            return this.context.delegate(t, e, n, i), this
        },
        undelegate: function (t, e, n) {
            return this.context.undelegate(t, e, n), this
        },
        hover: function (t, e) {
            return this.context.hover(t, e), this
        },
        afterRender: function () {
        },
        resize: function (t) {
            this.context.resize(t)
        },
        show: function () {
            this.context.show()
        },
        hide: function () {
            this.context.hide()
        },
        toggle: function (t, e, n) {
            this.context.toggle(t, e, n)
        },
        slideDown: function (t, e, n) {
            this.context.slideDown(t, e, n)
        },
        slideUp: function (t, e, n) {
            this.context.slideUp(t, e, n)
        },
        slideToggle: function (t, e, n) {
            this.context.slideToggle(t, e, n)
        },
        fadeIn: function (t, e, n) {
            this.context.fadeIn(t, e, n)
        },
        fadeOut: function (t, e, n) {
            this.context.fadeOut(t, e, n)
        },
        fadeTo: function (t, e, n) {
            this.context.fadeTo(t, e, n)
        },
        fadeToggle: function (t, e, n) {
            this.context.fadeToggle(t, e, n)
        },
        animate: function (t, e, n, i) {
            this.context.animate(t, e, n, i)
        },
        stop: function (t, e) {
            this.context.stop(t, e)
        },
        delay: function (t, e) {
            this.context.delay(t, e)
        },
        load: function (t) {
            var i = {
                type: "GET", url: null, data: {}, cache: !1, dataType: "html", success: function () {
                }, error: function () {
                }
            };
            i = e.Util.extend(i, t), n.ajax(i)
        },
        getApplication: function () {
            return this.application
        },
        getContext: function () {
            return this.context
        },
        getElement: function () {
            return this.context[0]
        },
        bindViewModel: function (t, e) {
            null == e && (e = this.getElement()), o.applyBindings(t, e)
        },
        bindToNode: function () {
        }
    });
    return s
}), define("https://github.com/yucopowo/playview/master/Application", ["https://github.com/yucopowo/playview/master/Class", "https://github.com/yucopowo/playview/master/ViewArray", "https://github.com/yucopowo/playview/master/View", "$"], function (t) {
    var e = t("https://github.com/yucopowo/playview/master/Class");
    t("https://github.com/yucopowo/playview/master/ViewArray");
    var n = t("https://github.com/yucopowo/playview/master/View"), i = t("$"), o = 0, s = e({
        title: null,
        charset: null,
        meta: [],
        style: null,
        body: null,
        initialize: function (t) {
            0 != o && (i("head :not(script[src*='sea.js'])").remove(), i(document.body).empty()), o++, e.Util.extend(this, t);
            var s = this, r = i(document.head), a = s.charset;
            a && (i("head meta").remove(), r.append('<meta http-equiv="Content-Type" content="text/html; charset=' + a + '">'));
            var c = s.title;
            c && (i("head title").remove(), r.append("<title>" + c + "</title>"));
            var u = s.style;
            if (u) {
                var h = "";
                i.each(u, function (t, e) {
                    var n = "";
                    i.each(e, function (t, e) {
                        n += t + ":" + e + ";"
                    });
                    var o = " " + t + "{" + n + "}";
                    h += o
                }), i("head").append('<style type="text/css"> ' + h + " </style>")
            }
            this.body = new n({context: i(document.body)})
        },
        getBody: function () {
            return this.body
        },
        appendStyle: function (t) {
            var e = "";
            i.each(t, function (t, n) {
                var o = "";
                i.each(n, function (t, e) {
                    o += t + ":" + e + ";"
                });
                var s = " " + t + "{" + o + "}";
                e += s
            }), i("head").append('<style type="text/css"> ' + e + " </style>")
        },
        appendScript: function (t) {
            i("head").append('<script type="text/javascript" src="' + t + '"></script>')
        },
        loadScript: function (t, e) {
            i.getScript(t, e)
        }
    });
    return s
});