/**
 * Created by wangjinlai on 2016/5/13.
 */
define(function(require,exports,module) {
    var ko = require("ko");
    var $ = require("$");
    var view = require("View");
    var iScroll = require("iScroll");
    var localTourService = require("views/localTourService");
    var service = new localTourService();
    var view_sort = new view({
        id:"view_sort",
        html : require("/src/templates/sort.html"),
        isFirst:true,
        afterRender : function() {
            if(this.isFirst) {
                view_sort.bindViewModel(viewModel);
                this.isFirst= false;
                viewModel.requestDestination();
                var areaScroll = new iScroll('#area_content', {
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
                var categoryScroll = new iScroll('#category_content', {
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
                viewModel.category_content_scroll = categoryScroll;
                viewModel.area_content_scroll = areaScroll;
                if(this.viewModel.area_content_scroll){
                    this.viewModel.area_content_scroll.refresh();
                    this.viewModel.area_content_scroll.scrollTo(0,0);
                }
                if(this.viewModel.category_content_scroll){
                    this.viewModel.category_content_scroll.refresh();
                    this.viewModel.category_content_scroll.scrollTo(0,0);
                }
            }
        },
    });
    var viewModel = view_sort.viewModel = {
        area_content_scroll:null,
        category_content_scroll:null,
        //原始的目的地数据
        baseAreaList : ko.observableArray([]),
        //当前绑定的目的地数据
        areaList : ko.observableArray([]),
        //当前绑定的服务分类数据
        categoryList : ko.observableArray([]),
        //用户选中过的目的地
        areaSelectList : ko.observableArray([]),
        //上一次的导航LIST数据
        lastAreaSelectList : ko.observableArray([]),
        //上一次目的地数据
        lastAreaList : ko.observableArray([]),
        //上一次默认TITLE数据
        LastDefaultDestination : ko.observable({}),
        //是不是第一次选择目的地
        areaSelectSign:false,
        //用户选中次数
        areaSelectListMax:0,
        //目的地选择当前是否打开中
        areaIsOpen:false,
        //服务分类选择当前是否打开中
        categoryIsOpen:false,
        defaultDestination : ko.observable({name:"加载中..."}),
        defaultCategory : ko.observable({name:"加载中..."}),
        area : function(data,event){
            if(!viewModel.areaIsOpen){
                viewModel.areaIsOpen = true;
                viewModel.categoryIsOpen = false;
                if(viewModel.areaSelectList().length==0){
                    viewModel.areaSelectList([viewModel.defaultDestination()]);
                }
                //viewModel.areaList(viewModel.baseAreaList());
                $("#area").find("span").removeClass("up");
                $("#area").find("span").addClass("down");
                $("#category").find("span").removeClass("down");
                $("#category").find("span").addClass("up");
                $("#sort_back").show();
                $("#area_content").show();
                $("#category_content").hide();
                //将选中的加对号
                var list = $("#area_content_ul").find("li");
                var  areaList =  viewModel.areaList();
                var num;
                for(var i=0;i<areaList.length;i++){
                    if(viewModel.defaultDestination().id == areaList[i].id){
                        num = i;
                        break;
                    }
                }
                $(list[num]).addClass("sortSelect");
                viewModel.area_content_scroll.refresh();
                viewModel.area_content_scroll.scrollTo(0,0)
            }
        },
        category : function(data,event){
            if(!viewModel.categoryIsOpen){
                viewModel.areaIsOpen = false;
                viewModel.categoryIsOpen = true;
                $("#area").find("span").removeClass("down");
                $("#area").find("span").addClass("up");
                $("#category").find("span").removeClass("up");
                $("#category").find("span").addClass("down");
                $("#sort_back").show();
                $("#category_content").show();
                $("#area_content").hide();
                //将选中的加对号
                var list = $("#category_content_ul").find("li");
                for(var i=0;i<list.length;i++){
                    if(viewModel.defaultCategory().name==$(list[i]).text()){
                        $(list[i]).addClass("sortSelect");
                    }
                }
                viewModel.category_content_scroll.refresh();
                viewModel.category_content_scroll.scrollTo(0,0)
            }

        },
        requestDestination : function(){
            var success = function(){
                viewModel.requestCategory();
                var arr = arguments[0];
                viewModel.defaultDestination(arr[0]);
                var obj = {
                    id : arr[0].id,
                    name : "全部",
                    children:[]
                }
                arr[0].children.unshift(obj)
                viewModel.areaList(arr[0].children);
                viewModel.baseAreaList(arr);
                viewModel.area_content_scroll.refresh();
                var view_main = mx_application.body.getViewById("view_main");
                var view_localTourList = view_main.getViewById("view_localTourList");
                var view_localTourList_content = view_localTourList.getViewById("view_localTourList_content")
                view_localTourList_content.viewModel.requestData.destId = viewModel.defaultDestination().id;
                view_localTourList_content.viewModel.itemList([]);
                view_localTourList_content.viewModel.request(view_localTourList_content.viewModel.requestData);
                viewModel.copyBaseDate();
                viewModel.area_content_scroll.refresh();
                viewModel.area_content_scroll.scrollTo(0,0)
            };
            var error = function(){
                console.log(arguments)
                viewModel.area_content_scroll.refresh();
                viewModel.area_content_scroll.scrollTo(0,0)
            };
            service.destination(null,success,error);
        },
        requestCategory : function(){
            var success = function(){
                var data = {
                    children:[],
                    id:null,
                    name:"全部类型",
                    pid:null,
                    qizhouId:null
                }
                var arr = arguments[0];
                arr.unshift(data);
                viewModel.defaultCategory(arr[0]);
                viewModel.categoryList(arr);
                viewModel.category_content_scroll.refresh();
                viewModel.category_content_scroll.scrollTo(0,0);
            };
            var error = function(){
                viewModel.category_content_scroll.refresh();
                viewModel.category_content_scroll.scrollTo(0,0);
                console.log(arguments)
            };
            service.category(null,success,error);
        },
        areaClick : function(data,event){
            var list = viewModel.areaSelectList();
            if(data.children.length>0){
                if(data.name!="全部"){
                    list.push(data);
                }
                var arr = data.children;
                if(arr[0].id!==data.id){
                    var obj = {
                        id : data.id,
                        name : "全部",
                        children:[]
                    }
                    arr.unshift(obj)
                }
                //解决魅族双击的问题
                window.sleep(500);
                viewModel.areaList(arr);
                viewModel.areaSelectListMax = list.length;
            }

            $("#area").find("span").removeClass("up");
            $("#area").find("span").addClass("down");
            $("#area_content_ul").find("li").removeClass("sortSelect");
            $(event.currentTarget).addClass("sortSelect");
            var view_main = mx_application.body.getViewById("view_main");
            var view_localTourList = view_main.getViewById("view_localTourList");
            var view_localTourList_content = view_localTourList.getViewById("view_localTourList_content");
            viewModel.areaSelectList(list);
            //叶子节点
            if(data.children.length==0){
                view_localTourList_content.viewModel.requestData.destId = data.id;
                if(data.name=="全部"){
                    var extendDate = {};
                    $.extend(true,extendDate,viewModel.areaSelectList()[viewModel.areaSelectList().length-1]);
                    if(extendDate.name.length>7){
                        extendDate.name = extendDate.name.substring(0,5)+"...";
                    }
                    viewModel.defaultDestination(extendDate);
                }else{
                    var extendDate = {};
                    $.extend(true,extendDate,data);
                    if(extendDate.name.length>7){
                        extendDate.name = extendDate.name.substring(0,5)+"...";
                    }
                    viewModel.defaultDestination(extendDate);
                }
                /*---------------保存本次搜索时的各种信息-------------------*/
                viewModel.copyBaseDate();
                /*---------------end-------------------*/
                view_localTourList_content.viewModel.itemList([]);
                view_localTourList_content.viewModel.requestData.page.pageNo = 1;
                view_localTourList_content.viewModel.request(view_localTourList_content.viewModel.requestData);
                viewModel.hide_area_category_content();
            }
            viewModel.area_content_scroll.refresh();
            viewModel.area_content_scroll.scrollTo(0,0)
        },
        categoryClick : function(data,event){
            viewModel.defaultCategory(data);
            $(event.currentTarget).addClass("sortSelect");
            $("#category").find("span").removeClass("up");
            $("#category").find("span").addClass("down");
            $("#category_content_ul").find("li").removeClass("sortSelect");
            var view_main = mx_application.body.getViewById("view_main");
            var view_localTourList = view_main.getViewById("view_localTourList");
            var view_localTourList_content = view_localTourList.getViewById("view_localTourList_content");
            view_localTourList_content.viewModel.requestData.cateId = data.id;
            view_localTourList_content.viewModel.requestData.page.pageNo = 1;
            view_localTourList_content.viewModel.itemList([]);
            view_localTourList_content.viewModel.request(view_localTourList_content.viewModel.requestData);
            viewModel.hide_area_category_content();
            viewModel.category_content_scroll.refresh();
            viewModel.category_content_scroll.scrollTo(0,0)
        },
        navClick:function(data){
            if(data.children.length>0){
                viewModel.areaList(data.children);
                var arr = viewModel.areaSelectList();
                var bindList = [];
                for(var i=0;i<arr.length;i++){
                    bindList.push(arr[i]);
                    if(arr[i].id==data.id){
                        break;
                    }
                }
                viewModel.areaSelectList(bindList);
            }
            viewModel.area_content_scroll.refresh();
            viewModel.area_content_scroll.scrollTo(0,0)
        },
        hide_area_category_content : function(){
            viewModel.categoryIsOpen = false;
            viewModel.areaIsOpen = false;
            $("#area_content").hide();
            $("#category_content").hide();
            $("#sort_back").hide();
            $("#category").find("span").removeClass("down");
            $("#category").find("span").addClass("up");
            viewModel.areaList(viewModel.lastAreaList());
            viewModel.areaSelectList(viewModel.lastAreaSelectList());
            viewModel.defaultDestination(viewModel.LastDefaultDestination());

        },
        //点击全球
        navAll : function(){
            viewModel.areaSelectList([]);
            viewModel.areaList(viewModel.baseAreaList());
            viewModel.areaSelectSign = true;
        },
        //这个方法用来备份用户的上一次请求的所有数据 以便于在取消时恢复
        copyBaseDate : function(){
            var lastAreaList = [];
            $.extend(true,lastAreaList,viewModel.areaList());
            viewModel.lastAreaList(lastAreaList);
            var lastAreaSelectList = [];
            $.extend(true,lastAreaSelectList,viewModel.areaSelectList());
            viewModel.lastAreaSelectList(lastAreaSelectList);
            var lastDefaultDestination = {};
            $.extend(true,lastDefaultDestination,viewModel.defaultDestination());
            viewModel.LastDefaultDestination(lastDefaultDestination);
        }
    };
    return view_sort;
})