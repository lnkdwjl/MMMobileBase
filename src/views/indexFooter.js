/**
 * Created by wangjinlai on 2016/5/10.
 */
define(function(require,exports,module){
    var ko = require("ko");
    var view = require('View');
    var $ = require("$");
    var base64 = require("base64");
    var view_indexFooter = new view({
        id:"view_indexFooter",
        isFirst:true,
        html : require("/src/templates/indexFooter.html"),
        afterRender : function(){
            if(this.isFirst) {
                view_indexFooter.bindViewModel(viewModel);
                this.isFirst= false;
            }
        }
    });
    var viewModel = view_indexFooter.viewModel = {
        aboutUs:function(){
            $("#view_loading").show();
            require.async("views/aboutUs",function(view_aboutUs){
                var state = {
                    view:"view_aboutUs",
                    path:"aboutUs"
                };
                history.pushState(state,null,"?path=aboutUs&views=view_aboutUs");
                var view_main = mx_application.body.getViewById("view_main");
                view_main.views.views[0].removeAll();
                view_aboutUs.appendView();
                $("#view_loading").hide();
                view_main.append(view_aboutUs)
            })
        },
        joinUs:function(){
            $("#view_loading").show();
            require.async("views/joinUs",function(view_joinUs){
                var state = {
                    view:"view_joinUs",
                    path:"joinUs"
                };
                history.pushState(state,null,"?path=joinUs&views=view_joinUs");
                var view_main = mx_application.body.getViewById("view_main");
                view_main.views.views[0].removeAll();
                view_joinUs.appendView();
                $("#view_loading").hide();
                view_main.append(view_joinUs)
            })
        },
        contactUs:function(){
            $("#view_loading").show();
            require.async("views/contactUs",function(view_contactUs){
                var state = {
                    view:"view_contactUs",
                    path:"contactUs"
                };
                history.pushState(state,null,"?path=contactUs&views=view_contactUs");
                var view_main = mx_application.body.getViewById("view_main");
                view_main.views.views[0].removeAll();
                view_contactUs.appendView();
                $("#view_loading").hide();
                view_main.append(view_contactUs)
            })
        }
    }
    return view_indexFooter;
})
