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
            if (this.isFirst) {
                view_header.bindViewModel(viewModel);
                this.isFirst = false;
            }
        }
    });
    var viewModel = view_header.viewModel = {
        title : ko.observable(""),
    }

    return view_header;
});

