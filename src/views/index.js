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
            var height = $(".indexContent_list_content_left").width()/4*3;
            $(".indexContent_list_content_left").height(height);
            $(".indexContent_list_content_right").height(height);
            $(".indexContent_list_content").height(height);
            if(this.isFirst) {
                view_index_min.bindViewModel(viewModel);
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
        iScroll:null
    });
    //ko.applyBindings({})
    //ko.observable("")
    //ko.observableArray([])
    var viewModel = view_index_min.viewModel = {
        list:ko.observableArray([
            {
                imgsrc : "url(src/images/system/noimg.png)",
                name:'日本中小学课改方案称钓鱼岛为"日本固有领土"',
                tag:"娱乐",
                time:"2017-02-15"
            },
            {
                imgsrc : "url(src/images/system/noimg.png)",
                name:"越南外交部回应中国游客被打:正加紧查明真相",
                tag:"娱乐",
                time:"2017-02-15"
            },
            {
                imgsrc : "url(src/images/system/noimg.png)",
                name:"为什么我们会对喜欢我们的人更冷淡",
                tag:"娱乐",
                time:"2017-02-15"
            },
            {
                imgsrc : "url(src/images/system/noimg.png)",
                name:"镇雄官方称男子自愿结扎 当事人否认:遭政府威胁",
                tag:"娱乐",
                time:"2017-02-15"
            },
            {
                imgsrc : "url(src/images/system/noimg.png)",
                name:"周本顺受贿4000万一审被判15年 没收财产200万",
                tag:"娱乐",
                time:"2017-02-15"
            },
            {
                imgsrc : "url(src/images/system/noimg.png)",
                name:"又一波京官出京 环保部长亲自带队离京督查6省市",
                tag:"娱乐",
                time:"2017-02-15"
            },
            {
                imgsrc : "url(src/images/system/noimg.png)",
                name:"半山春樱一帘风  《阴阳师》樱花妖COS",
                tag:"娱乐",
                time:"2017-02-15"
            },
            {
                imgsrc : "url(src/images/system/noimg.png)",
                name:"印媒:载104颗卫星印度运载火箭发射升空",
                tag:"娱乐",
                time:"2017-02-15"
            },
            {
                imgsrc : "url(src/images/system/noimg.png)",
                name:"韩官员:朝鲜射弹激怒美国 萨德部署时间或提前",
                tag:"娱乐",
                time:"2017-02-15"
            },
            {
                imgsrc : "url(src/images/system/noimg.png)",
                name:"男子挂假牌照开车上高速 逃避盘查撞伤交警",
                tag:"娱乐",
                time:"2017-02-15"
            },
            {
                imgsrc : "url(src/images/system/noimg.png)",
                name:"共享单车最新骗局曝光！一不小心你的钱就没了",
                tag:"娱乐",
                time:"2017-02-15"
            }
        ])
    }

    return view_index_min;
})