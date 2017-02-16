/**
 * APP主入口
 */
define(function(require) {
    var Application = require('Application');
    var View = require('View');
    var base64 =  require("base64");
    var iScroll = require("iScroll");
    var $ = require("$");
    var application = window.MM_application || new Application({});
    var viewFooter = require("views/footer");
    var viewHeader = require("views/header");
    window.MM_application = application;
    //访问过的view缓存
    MM_application.views=[];
    MM_application.appBack = true;
    //利用H5的popstate做前进后退处理，实现页面无刷新
    var bindPopState = function(event){
        var state = event.state || null;
        if(!state)location.href = "/";
        require.async("views/"+state.path,function(appendView){
            //删除页面元素
            var contentView = MM_application.body.getViewById("view_main_content");
            contentView.views.views[0].removeAll();
            contentView.append(appendView);
        })
    }

    var view_main = new View({
        id : "view_main",
        afterRender : function() {
        }
    });
    var view_main_hearder = new View({
        id:"view_main_hearder",
        afterRender:function(){}
    });
    var view_main_content = new View({
        id:"view_main_content",
        afterRender:function(){
        }
    });
    var view_main_footer = new View({
        id:"view_main_footer",
        afterRender:function(){}
    });
    view_main.append(view_main_hearder);
    view_main.append(view_main_content);
    view_main.append(view_main_footer);
    view_main_footer.append(viewFooter);
    view_main_hearder.append(viewHeader);
    //带参数的刷新
    var view,path;
    if(window.getQueryString("view")&&window.getQueryString("path")){
        view = window.getQueryString("view");
        path = window.getQueryString("path");
        require.async("views/"+path,function(appendView){
            var state = {
                view : view,
                path :path
            };
            //history.pushState(state,null,null);
            view_main_content.append(appendView);
            MM_application.body.append(view_main);
            setTimeout(function(){
                //后退
                window.addEventListener("popstate",bindPopState);
            },2000)
        })

    }else{
        require.async("views/index",function(index){
            var state = {
                view:"view_index_min",
                path:"index"
            }
            history.pushState(state,null,null);
            view_main_content.append(index);
            MM_application.body.append(view_main);
            setTimeout(function(){
                //后退
                window.addEventListener("popstate",bindPopState);
            },2000)
        });
    }
    return MM_application;
});
