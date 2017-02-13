/**
 * Created by wangjinlai on 2016/5/12.
 */
define(function(require,exports,module){
    var ko = require("ko");
    var $ = require("$");
    var view = require("View");
    var iScroll = require("iScroll");
    var view_header = require("views/header");
    var view_activity = new view({
        id:"view_activity",
        parentView:{
        	view:"view_activityList",
        	path:"activityList"
        },
        isFirst:true,
        style:{
            position:"absolute",
            width:"100%",
            top:"0px",
            bottom:"0px",
            overflow:"hidden"
        },
        afterRender : function(){
            if(this.isFirst) {
                mx_application.views.view_activity=view_activity;
                this.isFirst= false;
            }
        },
        appendView : function(){
            view_header.title = "活动专区";
            view_activity.append(view_header);
            view_activity.append(view_activity_content);
        },
        imgInfo:null
    });

    var view_activity_content = new view({
        id:"view_activity_content",
        html : require("/src/templates/activity.html"),
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
                view_activity_content.bindViewModel(viewModel);
                $("img").load(function(){
                    if(view_activity_content.iScroll){
                        view_activity_content.iScroll.refresh();
                    }
                })
                var myScroll = new iScroll('#view_activity_content', {
                    scrollY: true,
                    scrollX: false,
                    scrollbars: true,
                    fadeScrollbars: true,
                    probeType: 3,
                    mouseWheel: true,
                    tap:true,
                    preventDefault: true,
                    keyBindings: true
                });
                this.iScroll = myScroll;
                this.isFirst= false;
            }
            viewModel.imgSrc(view_activity.imgInfo.fullImgSrc);
            if(this.iScroll){
                this.iScroll.refresh();
                this.iScroll.scrollTo(0,0);
            }
        },
        iScroll:null
    });
    var viewModel = view_activity_content.viewModel = {
        imgSrc : ko.observable(),
        type : (function(){
            if (window.mxlvniao && 'function' == typeof window.mxlvniao.pasteText) {
                return "android";
            }else if('function' == typeof window.pasteText){
                return "iso";
            }
        }()),
        pasteText:function(data){
            if("android" == viewModel.type){
                window.mxlvniao.pasteText(view_activity.imgInfo.weChat,"pasteTextCallBack");
            }else if("iso" == viewModel.type){
                window.pasteText(view_activity.imgInfo.weChat,"pasteTextCallBack");
            }
        },
        pasteTextCallBack : function(){
            //alert("���Ƴɹ�!");
        },
        appDown: function () {
            $("#view_loading").show();
            require.async("views/appDown", function (view_appDown) {
                var state = {
                    view:"view_appDown",
                    path:"appDown"
                };
                history.pushState(state,null,"?path=appDown&views=view_appDown");
                var view_main = mx_application.body.getViewById("view_main");
                view_main.views.views[0].removeAll();
                view_appDown.appendView();
                $("#view_loading").hide();
                view_main.append(view_appDown);
            })
        }
    }
    return view_activity;
})