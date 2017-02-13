/**
 * Created by wangjinlai on 2016/5/13.
 */
define(function(require,exports,module){
    var ko = require("ko");
    var $ = require("$");
    var view = require("View");
    var view_search = new view({
        id:"view_search",
        html : require("/src/templates/search.html"),
        isFirst:true,
        afterRender : function() {
            if(this.isFirst) {
                view_search.bindViewModel(viewModel);
                this.isFirst= false;
            }
        },
    });
    var viewModel = view_search.viewModel = {
        goToBack:function(){
            var view_main = mx_application.body.getViewById("view_main");
            var view_localTourList = view_main.getViewById("view_localTourList");
            var view_sort = view_localTourList.getViewById("view_sort");
            view_sort.viewModel.hide_area_category_content();
            var view_main = mx_application.body.getViewById("view_main");
            view_main.goBack();
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
    };
    return view_search;
})