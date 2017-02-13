define(function(require) {
    require("views/utils")
    seajs.config({
        //根据config.js v配置设置不同的请求路径，常到开发环境正式环境设置
        service_urls : (function(v) {
            var service_urls = {};
            if (v === "R") {
                //service_urls.getDownUrl = "正式地址";
            } else if (v === "T") {
                //service_urls.getDownUrl = "测试地址";
            } else if (v === "D") {
                //service_urls.getDownUrl = "开发地址";
            }
            return service_urls;
        })(seajs.config.data.v)
    });
    require.async("views/application");
});
