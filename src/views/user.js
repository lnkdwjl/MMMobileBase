/**
 * Created by wangjinlai on 2017/2/16.
 */
define(function(require,exports,module){
    var View = require('View');
    var $ = require('$')
    var ko = require('ko');
    var iScroll = require('iScroll');
    var ViewModel = require('ViewModel');
    var view_user_min = new View({
        id:"view_user_min",
        html:require("/src/templates/user.html"),
        isFirst:true,
        iScroll:null,
        afterRender:function(){
            if(this.isFirst){
                view_user_min.bindViewModel(viewModel);
                var myScroll = new iScroll('#view_user_min', {
                    scrollY: true,
                    scrollX: false,
                    scrollbars: true,
                    fadeScrollbars: true,
                    probeType: 3,
                    mouseWheel: true,
                    tap: true,
                    preventDefault: true,
                    keyBindings: true
                });
                this.iScroll = myScroll;
                this.isFirst = false;
                $("img").load(function(){
                    myScroll.refresh();
                })
            }
            if(this.iScroll){
                this.iScroll.refresh();
                this.iScroll.scrollTo(0,0);
            }
        }
    });
    //ko.applyBindings({})
    //ko.observable("")
    //ko.observableArray([])
    var viewModel = view_user_min.viewModel = new ViewModel({
        name:ko.observable("个人中心页面")
    });
    return view_user_min;
});