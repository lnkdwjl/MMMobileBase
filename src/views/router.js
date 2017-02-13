define(function(require) {
    require("views/utils")
    seajs.config({
        service_urls : (function(v) {
            var service_urls = {};
            if (v === "R") {
                service_urls.getDownUrl = "http://travel.mxnavi.com:8788/ln_bms_shop/manager/category/getDownUrl";
                service_urls.localTourService = "http://service.mxlvniao.com/service/";
            } else if (v === "T") {
                service_urls.getDownUrl = "http://travel.mxnavi.com:8788/ln_bms_shop/manager/category/getDownUrl";
                service_urls.localTourService = "http://192.168.12.216:9007/service/";
            } else if (v === "D") {
                service_urls.getDownUrl = "http://travel.mxnavi.com:8788/ln_bms_shop/manager/category/getDownUrl";
                service_urls.localTourService = "http://192.168.12.216:9007/service/";
            }
            return service_urls;
        })(seajs.config.data.v)
    });
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "//hm.baidu.com/hm.js?f088c4809ea0d067009e4159a1c8fdcb";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
    var Service = require('views/ServerService')
    var service = new Service();
    var data20500 = {productLine:'20500'};
    var data20600 = {productLine:'20600'};
    var data10500 = {productLine:'10500'};
    var data10600 = {productLine:'10600'};
    var error = function(){
        console.log(arguments)
    };
    var success20500 = function(){
        var url = arguments[0].downUrl;
        seajs.config.data.service_urls.japanAndroidDown = url;
    }
    var success20600 = function(){
        var url = arguments[0].downUrl;
        seajs.config.data.service_urls.koreaAndroidDown = url;
    }
    var success10500 = function(){
        var url = arguments[0].downUrl;
        seajs.config.data.service_urls.japanIosDown = url;
    }
    var success10600 = function(){
        var url = arguments[0].downUrl;
        seajs.config.data.service_urls.koreaIosDown = url;
    }
    service.getDownUrl(data20500,success20500,error);
    service.getDownUrl(data20600,success20600,error);
    service.getDownUrl(data10500,success10500,error);
    service.getDownUrl(data10600,success10600,error);
    require.async("views/application");
});
