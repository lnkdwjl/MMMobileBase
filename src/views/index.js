/**
 * Created by wangjinlai on 2016/5/10.
 */
define(function(require,exports,module){
    var $ = require("$");
    var ko = require("ko");
    var view = require('View');
    var iScroll = require("iScroll");

    var view_index_min = new view({
        id : "view_index_min",
        html : require("/src/templates/index.html"),
        isFirst:true,
        style:{
            position:"absolute",
            width:"100%",
            height:"100%",
            overflow:"hidden"
        },
        afterRender : function(){
            if(this.isFirst) {
                var myScroll = new iScroll('#view_index_min', {
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
        },
        iScroll:null,
        appendView:function(){
        }
    })

    return view_index_min;
})