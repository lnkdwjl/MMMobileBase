(function (h, e) {
    function j(b, a) {
        var c = e.ActiveXObject ? new e.ActiveXObject("Microsoft.XMLHTTP") : new e.XMLHttpRequest;
        c.open("GET", b, !0);
        c.onreadystatechange = function () {
            if (4 === c.readyState) {
                if (399 < c.status && 600 > c.status)throw Error("Could not load: " + b + ", status = " + c.status);
                a(c.responseText)
            }
        };
        return c.send(null)
    }

    function k(b) {
        b && /\S/.test(b) && (e.execScript || function (a) {
            (e.eval || eval).call(e, a)
        })(b)
    }

    var f = {}, l = {}, d = {
        name: "text", ext: [".tpl", ".html"], exec: function (b, a) {
            k('define("' + b + '#", [], "' + a.replace(/(["\\])/g,
                    "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029") + '")')
        }
    };
    f[d.name] = d;
    d = {
        name: "json", ext: [".json"], exec: function (b, a) {
            k('define("' + b + '#", [], ' + a + ")")
        }
    };
    f[d.name] = d;
    h.on("resolve", function (b) {
        var a = b.id;
        if (!a)return "";
        var c, g;
        if ((g = a.match(/^(\w+)!(.+)$/)) && g[1] && f.hasOwnProperty(g[1]))c = g[1], a = g[2];
        var a = h.resolve(a, b.refUri), e = a.replace(/\.(?:js|css)(\?|$)/, "$1");
        if (!c && (g = e.match(/[^?]+(\.\w+)(?:\?|$)/)))a:{
            c = g[1];
            for (var d in f)if (d && f.hasOwnProperty(d) && -1 < ("," + f[d].ext.join(",") + ",").indexOf("," + c + ",")) {
                c = d;
                break a
            }
            c = void 0
        }
        c && (a = a.replace(/\.js(?=$|\?)/, ""), l[a] = c);
        b.uri = a
    });
    h.on("request", function (b) {
        var a = l[b.uri];
        a && (j(b.requestUri, function (c) {
            f[a].exec(b.uri, c);
            b.callback()
        }), b.requested = !0)
    });
    "undefined" !== typeof module && (j = function (b, a) {
        a(require("fs").readFileSync(b.replace(/\?.*$/, ""), "utf8"))
    });
    define(h.dir + "plugin-text", [], {})
})(seajs, this);