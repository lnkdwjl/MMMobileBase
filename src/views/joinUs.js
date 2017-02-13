/**
 * Created by wangjinlai on 2016/5/11.
 */
define(function(require,exports,module){
    var view = require("View");
    var iScroll = require("iScroll");
    var view_indexHeader = require("views/indexHeader");
    var view_indexFooter = require("views/indexFooter");
    var view_joinUs = new view({
        id:"view_joinUs",
        isFirst:true,
        parentView:{
        	view:"view_index_min",
        	path:"index"
        },
        style:{
            position:"absolute",
            width:"100%",
            top:"0px",
            bottom:"0px",
            overflow:"hidden"
        },
        afterRender : function(){
            if(this.isFirst) {
                mx_application.views.view_joinUs=view_joinUs;
                this.isFirst= false;
                var myScroll = new iScroll('#view_joinUs', {
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
            }
            if(this.iScroll){
                this.iScroll.refresh();
                this.iScroll.scrollTo(0,0);
            }
        },
        iScroll:null,
        appendView : function(){
            view_joinUs_min.append(view_indexHeader);
            view_joinUs_min.append(view_joinUs_content);
            view_joinUs_min.append(view_indexFooter);
            view_joinUs.append(view_joinUs_min);
        }
    });

    var view_joinUs_min = new view({
        id:"view_joinUs_min",
        isFirst:true,
        style:{
            position: "absolute",
            width:"100%"
        },
        afterRender : function(){
            if(this.isFirst) {
                this.isFirst= false;
            }
        }
    });

    var view_joinUs_content = new view({
        id:"view_joinUs_content",
        isFirst:true,
        html : require("/src/templates/joinUs.html"),
        afterRender : function(){
            if(this.isFirst) {
                view_joinUs_content.bindViewModel(viewModel);
                this.isFirst= false;
            }
        }
    });

    var viewModel = view_joinUs_content.viewModel = {

    }

    return view_joinUs;
})