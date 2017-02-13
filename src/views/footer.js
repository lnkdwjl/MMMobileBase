/**
 * Created by wangjinlai on 2016/4/27.
 */
define(function(require) {
    var ko = require("ko");
    var View = require('View');
    var view_footer = new View({
        id : "view_footer",
        html : require("/src/templates/footer.html"),
        afterRender : function() {
            view_footer.bindViewModel(viewModel);
        }
    });
    var viewModel = view_footer.viewModel = {

    }

    return view_footer;
});

