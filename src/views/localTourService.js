/**
 * Created by wangjinlai on 2016/5/13.
 */
define(function(require,exports,module) {
    var baseUrl = seajs.config.data.service_urls.localTourService;
    var $ = require("$");
    var service_urls = {
        commodity : baseUrl + "text/commodity",
        destination : baseUrl + "text/destination",
        category : baseUrl + "text/category"
    };
    var localTourService = function(){};
    localTourService.prototype = {
        request : function(url, data, success, error, options) {
        $("#view_loading").show();
            options = options || {};
            $.ajax({
                "url" : url,
                "type" : options.method || "post",
                "dataType" : options.dataType || "json",
                "data" : data,
                "cache" : false,
                "success" : function(msg) {
                    $("#view_loading").hide();
                    typeof success === "function" && success.apply(this, arguments);
                },
                "error" : function(msg){
                    $("#view_loading").hide();
                    typeof error === "function" && error.apply(this, arguments);
                },
                "headers" : {
                    "Accept" : "application/vnd.mxlvniao.V1+json"
                }
            });
            return this;
        },
        commodity : function(data,success,error){
            this.request(service_urls.commodity, data, success, error);
            return this;
        },
        destination : function(data,success,error){
            this.request(service_urls.destination, data, success, error);
            return this;
        },
        category : function(data,success,error){
            this.request(service_urls.category, data, success, error);
            return this;
        }
    };
    return localTourService;
})