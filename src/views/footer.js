/**
 * Created by wangjinlai on 2016/4/27.
 */
define(function(require) {
    var ko = require("ko");
    var View = require('View');
    var $ = require("$");
    var view_footer = new View({
        id : "view_footer",
        html : require("/src/templates/footer.html"),
        isFirst:true,
        afterRender : function() {
            if(this.isFirst) {
                view_footer.bindViewModel(viewModel);
                this.isFirst = false;
            }
            viewModel.addClass(viewModel.refreshDom());
        }
    });
    var viewModel = view_footer.viewModel = {
        refreshDom:function(){
            var path = window.getQueryString("path");
            if(!path){path="index"}
            var map = {
                index:"home",
                alarm:"alarm",
                order:"order",
                user:"user"
            };
            return $("."+map[path])[0];
        },
        currentDom:null,
        homeClick:function(data,event){
            event.stopPropagation();
            viewModel.addClass(event.currentTarget);
            require.async("views/index",function(view_index_min){
                var contentView = window.MM_application.body.getViewById("view_main_content");
                contentView.views.views[0].removeAll();
                contentView.append(view_index_min);
                var state = {
                    view : "view_index_min",
                    path :"index"
                };
                history.pushState(state,null,"/");
            });
        },
        alarmClick:function(data,event){
            event.stopPropagation();
            viewModel.addClass(event.currentTarget);
            require.async("views/alarm",function(view_alarm_min){
                var contentView = window.MM_application.body.getViewById("view_main_content");
                contentView.views.views[0].removeAll();
                contentView.append(view_alarm_min);
                var state = {
                    view : "view_alarm_min",
                    path :"alarm"
                };
                history.pushState(state,null,"?path=alarm&view=view_alarm_min");
            });
        },
        orderClick:function(data,event){
            event.stopPropagation();
            viewModel.addClass(event.currentTarget);
            require.async("views/order",function(view_order_min){
                var contentView = window.MM_application.body.getViewById("view_main_content");
                contentView.views.views[0].removeAll();
                contentView.append(view_order_min);
                var state = {
                    view : "view_order_min",
                    path :"order"
                };
                history.pushState(state,null,"?path=order&view=view_order_min");
            });
        },
        userClick:function(data,event){
            event.stopPropagation();
            viewModel.addClass(event.currentTarget);
            require.async("views/user",function(view_user_min){
                var contentView = window.MM_application.body.getViewById("view_main_content");
                contentView.views.views[0].removeAll();
                contentView.append(view_user_min);
                var state = {
                    view : "view_user_min",
                    path :"user"
                };
                history.pushState(state,null,"?path=user&view=view_user_min");
            });
        },
        refreshAllClass:function(dom){
            if(viewModel.currentDom&&viewModel.currentDom!==dom){
                var className = $(viewModel.currentDom).attr("class").replace("Select","");
                $(viewModel.currentDom).removeClass();
                $(viewModel.currentDom).addClass(className);
            }
        },
        addClass:function(dom){
            if(dom!==viewModel.currentDom){
                viewModel.refreshAllClass(dom);
                var className = $(dom).attr("class")+"Select";
                $(dom).removeClass();
                $(dom).addClass(className);
                viewModel.currentDom = dom;
            }
            return;
        }
    }

    return view_footer;
});

