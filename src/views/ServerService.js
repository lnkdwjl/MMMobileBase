/**
 * Created by wangjinlai on 2015/12/28.
 */
define(function(require,exports,module) {
    var FlyJSONP = require("FlyJSONP");
    var $ = require("$");
    var ServerService = function(){};
    ServerService.prototype = {
        /**
         * @method requestJSONP
         * @param url {String} 请求地址
         * @param data {Object} 请求参数
         * @param success {Function} 请求成功的回调方法
         * @param [error] {Function} 请求失败的回调方法
         */
        requestJSONP: function (url, data, success, error) {
            FlyJSONP.get({
                "url": url,
                "parameters": data,
                "success": function () {
                    typeof success === "function" && success.apply(this, arguments);
                },
                "error" : function(msg) {
                    typeof error === "function" && error.apply(this, arguments);
                }
            })
        },
        /**
         * @method requestAjax
         * @param url {String} 请求地址
         * @param data {Object} 请求参数
         * @param success {Function} 请求成功的回调方法
         * @param [error] {Function} 请求失败的回调方法
         * @param [options] {Object} 请求扩展参数
         * @return {UserCenter} 当前对象
         */
        requestAjax : function(url, data, success, error, options) {
            var request_params = {
                "url" : url,
                "type" : options.method,
                "dataType" : options.dataType || "json",
                "contentType" : options.contentType || "application/json",
                "data" : data,
                "cache" : false,
                "headers" : {
                    "Accept" : "application/vnd.uucin.v2+json"
                },
                "success" : function(msg) {
                    typeof success === "function" && success.apply(this, arguments);
                },
                "error" : function(msg) {
                    typeof error === "function" && error.apply(this, arguments);
                }
            };
            $.ajax(request_params);
            return this;
        }
    }
    return ServerService;
})