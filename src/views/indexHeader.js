/**
 * Created by wangjinlai on 2016/5/10.
 */
define(function(require,exports,module){
    var ko = require("ko");
    var view = require('View');
    var view_indexHeader = new view({
        id:"view_indexHeader",
        isFirst:true,
        html : require("/src/templates/indexHeader.html"),
        afterRender : function(){
            if(this.isFirst) {
                view_indexHeader.bindViewModel(viewModel);
                this.isFirst= false;
            }
        }
    });
    var viewModel = view_indexHeader.viewModel = {
        goToBack : function(){
            var view_main = mx_application.body.getViewById("view_main");
            view_main.goBack();
        }
    }
    return view_indexHeader;
})