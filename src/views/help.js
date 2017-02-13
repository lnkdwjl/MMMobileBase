/**
 * Created by wangjinlai on 2016/6/30.
 */
define(function(require,exports,module){
    var view = require("View");
    var iScroll = require("iScroll");
    var view_header = require("views/header");
    var $ = require("$");
    var view_help = new view({
        id:"view_help",
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
                mx_application.views.view_help=view_help;
                this.isFirst= false;
            }
        },
        appendView : function(){
            view_header.title = "使用帮助";
            view_help.append(view_header);
            view_help.append(view_help_content);
        }
    });
    var view_help_content = new view({
        id:"view_help_content",
        isFirst:true,
        style:{
            position:"absolute",
            width:"100%",
            top:"55px",
            bottom:"0px",
            overflow: "hidden",
            background:"#fff"
        },
        html : require("/src/templates/help.html"),
        afterRender : function(){
            if(this.isFirst) {
                var myScroll = new iScroll('#view_help_content', {
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
                $("img").load(function(){
                    $("#scroller1").width($("#wrapper1").width()*2)
                    $("#scroller2").width($("#wrapper2").width()*4)
                    $("#scroller3").width($("#wrapper3").width()*2)
                    $("#scroller4").width($("#wrapper4").width()*3)
                    $("#scroller5").width($("#wrapper5").width()*4)
                    $("#scroller6").width($("#wrapper6").width()*2)
                    $("#scroller7").width($("#wrapper7").width()*2)
                    $(".viewport").height($($(".slide")[0]).find("img:first").height());
                    $(".wrapper").height($($(".slide")[0]).find("img:first").height());
                    $(".scroller").height($($(".slide")[0]).find("img:first").height());
                    $(".slide").height($($(".slide")[0]).find("img:first").height());
                    view_help_content.iScroll.refresh();
                    wrapper1.refresh();
                    wrapper2.refresh();
                    wrapper3.refresh();
                    wrapper4.refresh();
                    wrapper5.refresh();
                    wrapper6.refresh();
                    wrapper7.refresh();
                })
                var wrapper1 = new iScroll('#wrapper1', {
                    scrollX: true,
                    scrollY: false,
                    momentum: false,
                    snap: true,
                    snapSpeed: 400,
                    keyBindings: true
                });
                /*
                wrapper1.on('scrollEnd',function(){
                    var page = wrapper1.currentPage.pageX;
                    var list = $("#wrapper1").find(".slide");
                    $("#wrapper1").find(".slide").find("img").animate({marginTop:"30%"});
                    $(list[page]).find("img").animate({marginTop:"0px"});
                });

                wrapper1.on('flick',function(){
                    console.log(111)
                });
                */
                var wrapper2 = new iScroll('#wrapper2', {
                    scrollX: true,
                    scrollY: false,
                    momentum: false,
                    snap: true,
                    snapSpeed: 400,
                    keyBindings: true
                });
                var wrapper3 = new iScroll('#wrapper3', {
                    scrollX: true,
                    scrollY: false,
                    momentum: false,
                    snap: true,
                    snapSpeed: 400,
                    keyBindings: true
                });
                var wrapper4 = new iScroll('#wrapper4', {
                    scrollX: true,
                    scrollY: false,
                    momentum: false,
                    snap: true,
                    snapSpeed: 400,
                    keyBindings: true
                });
                var wrapper5 = new iScroll('#wrapper5', {
                    scrollX: true,
                    scrollY: false,
                    momentum: false,
                    snap: true,
                    snapSpeed: 400,
                    keyBindings: true
                });
                var wrapper6 = new iScroll('#wrapper6', {
                    scrollX: true,
                    scrollY: false,
                    momentum: false,
                    snap: true,
                    snapSpeed: 400,
                    keyBindings: true
                });
                var wrapper7 = new iScroll('#wrapper7', {
                    scrollX: true,
                    scrollY: false,
                    momentum: false,
                    snap: true,
                    snapSpeed: 400,
                    keyBindings: true
                });
            }

            if(this.iScroll){
                this.iScroll.refresh();
                this.iScroll.scrollTo(0,0);
            }
        },
        iScroll:null
    })
    return view_help;
});