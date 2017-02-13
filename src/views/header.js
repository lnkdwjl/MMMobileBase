/**
 * Created by wangjinlai on 2016/4/27.
 */
define(function(require) {
    var ko = require("ko");
    var View = require('View');
    var view_header = new View({
        id : "view_header",
        html : require("/src/templates/header.html"),
        isFirst:true,
        afterRender : function() {
            if(this.isFirst) {
                view_header.bindViewModel(viewModel);
                this.isFirst= false;
            }
            viewModel.title(this.title);
        },
        title : ""
    });
    var viewModel = view_header.viewModel = {
        title : ko.observable(""),
        goToBack:function(){
            var view_main = mx_application.body.getViewById("view_main");
            view_main.goBack();
            //history.back();
            /*
            var view_main = mx_application.body.getViewById("view_main");
            if(view_main.views.views[1].backView){
                var backView = view_main.views.views[1];
                backView.remove();
                view_main.append(backView.backView);
            }else{
                var arr = [];
                for(var i=0;i<view_main.views.views.length;i++){
                    arr.push(view_main.views.views[i].id);
                }
                for(var i=0;i<arr.length;i++){
                    view_main.getViewById(arr[i]).remove();
                }
                view_main.append(mx_application.baseView);
                mx_application.baseView.iScroll.refresh();
            }
            */
        }
    }

    return view_header;
});

