/**
 * Created by wangjinlai on 2015/12/28.
 */
define(function(require,exports,module) {
    var FlyJSONP = require("FlyJSONP");
    var downUrl = seajs.config.data.service_urls.getDownUrl;
    var ServerService = function(){};
    ServerService.prototype = {
        request: function (url, data, success, error) {
            FlyJSONP.get({
                "url": url,
                "parameters": data,
                success: function () {
                    typeof success === "function" && success.apply(this, arguments);
                },
                "error": error
            })
        },
        getDownUrl : function(data,success,error){
            this.request(downUrl,data,success,error);
            return this;
        }
    }
    return ServerService;
})