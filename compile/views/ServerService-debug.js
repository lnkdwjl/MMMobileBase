define("views/ServerService-debug",["FlyJSONP-debug"],function(e){var r=e("FlyJSONP-debug"),t=seajs.config.data.service_urls.getDownUrl,n=function(){};return n.prototype={request:function(e,t,n,u){r.get({url:e,parameters:t,success:function(){"function"==typeof n&&n.apply(this,arguments)},error:u})},getDownUrl:function(e,r,n){return this.request(t,e,r,n),this}},n});