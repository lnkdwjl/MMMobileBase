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
    var view_search = require("views/search");
    var view_sort = require("views/sort")
    var view_localTourList = new view({
        id:"view_localTourList",
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
                mx_application.views.view_localTourList=view_localTourList;
                this.isFirst= false;
            }
        },
        appendView : function(){
            view_localTourList.append(view_search);
            view_localTourList.append(view_sort);
            view_localTourList.append(view_localTourList_content);
        }
    });
    var view_localTourList_content = new view({
        id:"view_localTourList_content",
        isFirst:true,
        style:{
            position:"absolute",
            width:"100%",
            top:"95px",
            bottom:"0px",
            overflow: "hidden",
            background:"#fff"
        },
        html : require("/src/templates/localTourList.html"),
        afterRender : function(){
            if(this.isFirst) {
                $(".localTourList_li_left").height($(".localTourList_li_left").width()-20);
                $(".localTourList_li_right").height($(".localTourList_li_left").width()-20);
                view_localTourList_content.bindViewModel(viewModel);
                var myScroll = new iScroll('#view_localTourList_content', {
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
                myScroll.on('scrollStart',viewModel.scrollStart);
                myScroll.on('scroll', viewModel.scrolling);
                myScroll.on('scrollEnd', viewModel.scrollEnd);
                this.iScroll = myScroll;
                this.isFirst= false;
            }
            if(this.iScroll){
                this.iScroll.refresh();
                this.iScroll.scrollTo(0,0);
            }

        },
        iScroll:null,
        backView:null
    });
    var viewModel = view_localTourList_content.viewModel = {
        //触发刷新高度
        bufferHeight:40,
        //滚动起始位置
        scrollStartY : 0,
        //下拉刷新开关
        topOffset:false,
        //上拉加载开关
        bottomOffset:false,
        //是否在请求中
        requestSign : false,
        scrollStart : function(){
            viewModel.scrollStartY = this.y;
        },
        scrollEnd : function(){
            //当前是否在请求中
            if(!viewModel.requestSign){
                //下拉届新开关是否打开状态
                if(viewModel.topOffset){
                    //标记当前为请求状态
                    viewModel.requestSign = true;
                    //关闭下拉刷新
                    viewModel.topOffset = false;
                    //请求数据
                    viewModel.topRefresh();
                }
                //上拉加载开关是否打开状态
                if(viewModel.bottomOffset){
                    //标记当前为请求状态
                    viewModel.requestSign = true;
                    //关闭上接加载
                    viewModel.bottomOffset = false;
                    //请求数据
                    viewModel.bottomRefresh();
                }

            }
        },
        scrolling : function(){
            var y = this.y;
            //打开下拉刷新开关
            if(y>0&&(y)+viewModel.scrollStartY>viewModel.bufferHeight){
                viewModel.topOffset = true;
            }
            //打开上拉加载开关
            if(y<0&&this.maxScrollY-(y)>viewModel.bufferHeight){
                viewModel.bottomOffset = true;
            }
        },
        //刷新
        topRefresh : function(){
            viewModel.requestData.page.pageNo=1;
            viewModel.itemList([]);
            viewModel.request(viewModel.requestData);
        },
        //加载更多
        bottomRefresh : function(){
            viewModel.requestData.page.pageNo++;
            //是否超过最大页码
            if(viewModel.totalPage>viewModel.requestData.page.pageNo){
                viewModel.request(viewModel.requestData);
            }else{
                viewModel.requestSign = false;
            }


        },
        totalPage:1,
        requestData : {
            destId: "f99efc21142b11e6a4bd00e066edb9ec",
            cateId: "",
            page:{
                pageSize:10,
                pageNo:1
            }
        },
        itemList : ko.observableArray([]),
        request : function(data){
            $("#noLocalTourList").hide();
            var success = function(){
                $("#localTourList").show();
                var oldArr = viewModel.itemList();
                var arr = arguments[0].commodity;
                //console.log(arr)
                if(arr.length==0){
                    $("#noLocalTourList").show();
                }
                viewModel.totalPage = arguments[0].page.totalCount/viewModel.requestData.page.pageSize;
                for(var i=0;i<arr.length;i++){
                    var name = arr[i].name;
                    if(name.length>20){
                        name = name.substring(0,20)+"...";
                    }
                    arr[i].name = name;
                    oldArr.push(arr[i]);
                }
                viewModel.itemList(oldArr);
                setTimeout(function(){
                    view_localTourList_content.iScroll.refresh();
                    //关闭请求状态
                    viewModel.requestSign = false;
                },100)
            };
            var error = function(){
                console.log(arguments);
            }
            service.commodity(JSON.stringify(viewModel.requestData),success,error);
        },
        goTo7zhou : function(data){
            location.href = seajs.config.data.service_urls.localTourService + "website/commodity/" + data.id;
        }
    };
    return view_localTourList;
})