/**
 * Created by wangjinlai on 2016/5/10.
 */
define(function(require,exports,module){
    var $ = require("$");
    var ko = require("ko");
    var view = require('View');
    var iScroll = require("iScroll");
    var indexContent = require("views/indexContent")
    var indexHeader = require("views/indexHeader");
    var indexFooter = require("views/indexFooter")
    var view_index_min = new view({
        id : "view_index_min",
        isFirst:true,
        parentView:{
        	view:"view_index_min",
        	path:"index"
        },
        afterRender : function(){
            if(this.isFirst) {
                mx_application.views.view_index_min=view_index_min;
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
                $("#help").height($(".index_activity_left").height()/2);
                $("#version").height($(".index_activity_left").height()/2);
                $("img").load(function(){
                    myScroll.refresh();
                    $("#help").height($(".index_activity_left").height()/2);
                    $("#version").height($(".index_activity_left").height()/2);
                })
            }
            if(this.iScroll){
                this.iScroll.refresh();
                this.iScroll.scrollTo(0,0);
            }
        },
        iScroll:null,
        appendView:function(){
            view_index_min_content.append(indexHeader);
            view_index_min_content.append(indexContent);
            view_index_min_content.append(indexFooter);
            view_index_min.append(view_index_min_content);
        }
    })

    var view_index_min_content = new view({
        id : "view_index_min_content",
        isFirst:true,
        afterRender : function(){
            if(this.isFirst){
                this.isFirst= false;
            }
        }
    });
    return view_index_min;
})