define(function(require) {
    var View = require("View");
    /**
     * 根据Id获取当前view下的View对象
     * 
     * @method getViewById
     * @param id {String} View对象的id值
     * @return {View|Null} 返回View对象或null对象
     */
    View.prototype.getViewById = function(id) {
        if (this.id == id) {
            return this;
        } else {
            var length = this.views.views.length;
            if (length > 0) {
                for (var i = 0; i < length; i++) {
                    var view = this.views.views[i].getViewById(id);
                    if (view) {
                        return view;
                    }
                }
            }
            return null;
        }
    };
    /**
     * 给页面添加CSS样式
     * 
     * @method addStyle
     * @param stylePath {String} css样式地址字符串
     * @param styleId {String} 添加之后Style标签的id值
     * @return {Window}
     */
    window.addStyle = function(stylePath, styleId) {
        if (Object.prototype.toString.call(document.getElementById(styleId)) !== "[object HTMLLinkElement]") {
            var style = document.createElement("link");
            style.rel = "stylesheet";
            style.type = "text/css";
            style.href = stylePath;
            style.id = styleId;
            document.getElementsByTagName("head")[0].appendChild(style);
        }
        return window;
    };
    /**
     * 获取url中的参数
     * 
     * @method getQueryString
     * @param name {String} 参数名
     * @return {String} 参数值
     */
    window.getQueryString = function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
            return unescape(r[2] || "");
        return "";
    };
    /**
     * 日期格式化
     * 
     * @method format
     * @param style {String} 格式化样式字符串
     * @return {String} 格式化之后的日期字符串
     */
    Date.prototype.format = function(style) {
        var o = {
            "M+" : this.getMonth() + 1, // month
            "d+" : this.getDate(), // day
            "h+" : this.getHours(), // hour
            "m+" : this.getMinutes(), // minute
            "s+" : this.getSeconds(), // second
            "w+" : "天一二三四五六".charAt(this.getDay()), // week
            "q+" : Math.floor((this.getMonth() + 3) / 3), // quarter
            "S" : this.getMilliseconds()
            // millisecond
        }
        if (/(y+)/.test(style)) {
            style = style.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(style)) {
                style = style.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k])
                        .substr(("" + o[k]).length));
            }
        }
        return style;
    };

    /**
     * 获取页面的大小
     * 
     * @method getClientSize
     * @return {Object} {width:Number, height:Number}
     */
    window.getClientSize = function() {
        var c = window, b = document, a = b.documentElement;
        if (c.innerHeight) {
            return {
                width : c.innerWidth,
                height : c.innerHeight
            }
        } else {
            if (a && a.clientHeight) {
                return {
                    width : a.clientWidth,
                    height : a.clientHeight
                }
            } else {
                return {
                    width : b.body.clientWidth,
                    height : b.body.clientHeight
                }
            }
        }
    }
    window.sleep = function (sleepTime) {
        for(var start = Date.now(); Date.now() - start <= sleepTime; ) { }
    }
});
