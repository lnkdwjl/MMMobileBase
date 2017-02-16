/**
 * Created by wangjinlai on 2017/2/16.
 */
define(function(require,exports,module){
    var View = require('View');
    var $ = require('$');
    var ko = require('ko');
    var iScroll = require('iScroll');

    var view_alarm_min = new View({
        id:"view_alarm_min",
        html:require("/src/templates/alarm.html"),
        isFirst:true,
        iScroll:null,
        afterRender:function(){
            if(this.isFirst){
                view_alarm_min.bindViewModel(viewModel);
                var myScroll = new iScroll('#view_alarm_min', {
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
    var viewModel = view_alarm_min.viewModel = {
        name:ko.observable("预定页")
    }

    return view_alarm_min;
})