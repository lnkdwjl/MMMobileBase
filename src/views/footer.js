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
                viewModel.currentDom = $(".homeSelect")[0];
                this.isFirst = false;
            }
        }
    });
    var viewModel = view_footer.viewModel = {
        currentDom:null,
        homeClick:function(data,event){
            event.stopPropagation();
            viewModel.addClass(event);
        },
        alarmClick:function(data,event){
            event.stopPropagation();
            viewModel.addClass(event);
        },
        orderClick:function(data,event){
            event.stopPropagation();
            viewModel.addClass(event);
        },
        userClick:function(data,event){
            event.stopPropagation();
            viewModel.addClass(event);
        },
        refreshAllClass:function(dom){
            if(viewModel.currentDom!==dom){
                var className = $(viewModel.currentDom).attr("class").replace("Select","");
                $(viewModel.currentDom).removeClass();
                $(viewModel.currentDom).addClass(className);
            }
        },
        addClass:function(event){
            var dom = event.currentTarget;
            viewModel.refreshAllClass(dom);
            var className = $(dom).attr("class")+"Select";
            $(dom).removeClass();
            $(dom).addClass(className);
            viewModel.currentDom = dom;
        }
    }

    return view_footer;
});

