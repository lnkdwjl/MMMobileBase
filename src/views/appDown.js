/**
 * Created by wangjinlai on 2016/5/11.
 */
define(function(require,exports,module){
    var ko = require("ko");
    var $ = require("$");
    var view = require("View");
    var iScroll = require("iScroll");
    var view_header = require("views/header");
    var view_appDown = new view({
        id:"view_appDown",
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
                mx_application.views.view_appDown=view_appDown;
                this.isFirst= false;
            }
        },
        appendView : function(){
            view_header.title = "app下载";
            view_appDown.append(view_header);
            view_appDown.append(view_appDown_content);
        }
    });

    var view_appDown_content = new view({
        id:"view_appDown_content",
        isFirst:true,
        style:{
            position:"absolute",
            width:"100%",
            top:"45px",
            bottom:"0px",
            overflow: "hidden",
            background:"#fff"
        },
        html : require("/src/templates/appDown.html"),
        afterRender : function(){
            if(this.isFirst) {
                $(".oneRight").height($(".oneLeft").height());
                $(".towRight").height($(".towLeft").height());
                $(".fourRight").height($(".fourLeft").height());
                view_appDown_content.bindViewModel(viewModel);
                $("img").load(function(){
                    if(view_appDown_content.iScroll){
                        $(".oneRight").height($(".oneLeft").height());
                        $(".towRight").height($(".towLeft").height());
                        $(".fourRight").height($(".fourLeft").height());
                        view_appDown_content.iScroll.refresh();
                    }
                })
                var myScroll = new iScroll('#view_appDown_content', {
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
            if(this.iScroll){
                this.iScroll.refresh();
                this.iScroll.scrollTo(0,0);
            }
        },
        iScroll:null
    });
    var viewModel = view_appDown_content.viewModel = {
        japanAndroidDown : function(){
            location.href = seajs.config.data.service_urls.japanAndroidDown;
        },
        japanIosDown : function(){
            location.href = seajs.config.data.service_urls.japanIosDown;
        },
        koreaAndroidDown : function(){
            location.href = seajs.config.data.service_urls.koreaAndroidDown;
        },
        koreaIosDown : function(){
            location.href = seajs.config.data.service_urls.koreaIosDown;
        },
        iosLiteDown : function(){
            location.href = "https://itunes.apple.com/cn/app/id1089507692";
        },
        androidLiteDown : function(){
            location.href = "http://android.myapp.com/myapp/detail.htm?apkName=com.mxnavi.travel.global";
        }
    }
    return view_appDown;
})