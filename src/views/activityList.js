/**
 * Created by wangjinlai on 2016/5/12.
 */
define(function(require,exports,module){
    var ko = require("ko");
    var $ = require("$");
    var view = require("View");
    var iScroll = require("iScroll");
    var base64 = require("base64");
    var view_header = require("views/header");
    var view_activityList = new view({
        id:"view_activityList",
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
                mx_application.views.view_activityList=view_activityList;
                this.isFirst= false;
            }
        },
        appendView : function(){
            view_header.title = "活动专区";
            view_activityList.append(view_header);
            view_activityList.append(view_activityList_content);
        }
    });
    var view_activityList_content = new view({
        id:"view_activityList_content",
        html:require("/src/templates/activityList.html"),
        style:{
            position:"absolute",
            width:"100%",
            top:"45px",
            bottom:"0px",
            overflow: "hidden",
            background:"#fff"
        },
        isFirst:true,
        afterRender : function(){
            if(this.isFirst) {
                view_activityList_content.bindViewModel(viewModel);
                $("img").load(function(){
                    if(view_activityList_content.iScroll){
                        view_activityList_content.iScroll.refresh();
                    }
                })
                var myScroll = new iScroll('#view_activityList_content', {
                    scrollY: true,
                    scrollX: false,
                    scrollbars: true,
                    fadeScrollbars: true,
                    probeType: 3,
                    mouseWheel: true,
                    preventDefault: true,
                    tap:true,
                    keyBindings: true
                });
                view_activityList_content.iScroll = myScroll;
                this.isFirst= false;
            }
            if(this.iScroll){
                this.iScroll.refresh();
                this.iScroll.scrollTo(0,0);
            }
        },
        iScroll :null
    });

    var viewModel = view_activityList_content.viewModel = {
        imgArr : ko.observableArray([
            {
                src:"../src/images/activity/list_shuqi_end.png",
                weChat:"mxnavitravel",
                fullImgSrc:"../src/images/activity/content_shuqi_end.png"
            }
        ]),
        goActivity:function(data){
            var state = {
                view:"view_activity",
                path:"activity"
            };
            history.pushState(state,null,"?path=activity&views=view_activity&data="+base64.encode(JSON.stringify(data)));
            var view_main = mx_application.body.getViewById("view_main");
            view_main.views.views[0].removeAll();
            require.async("views/activity", function (view_activity) {
                view_activity.appendView();
                view_activity.imgInfo = data;
                view_main.append(view_activity);
            })
        }
    };
    return view_activityList;
});