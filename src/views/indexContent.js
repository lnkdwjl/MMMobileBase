/**
 * Created by wangjinlai on 2016/5/12.
 */
define(function(require,exports,module) {
    var $ = require("$");
    var ko = require("ko");
    var view = require('View');
    var iScroll = require("iScroll");
    var view_indexContent = new view({
        id: "view_indexContent",
        isFirst: true,
        html: require("/src/templates/index.html"),
        afterRender: function () {
            if (this.isFirst) {
                view_indexContent.bindViewModel(viewModel);
                this.isFirst = false;
            }
        },
        iScroll : null
    });

    var viewModel = view_indexContent.viewModel = {
        hotels : function(){
            location.href = "http://www.booking.com/index.html?aid=843273";
        },
        car : function(){
            location.href = "http://u.ctrip.com/union/CtripRedirect.aspx?TypeID=2&Allianceid=281771&sid=776473&OUID=&jumpUrl=http%3A%2F%2Fm.ctrip.com%2Fwebapp%2Fcars%2Fosd%2Fosd%2Fosdindex%3Fsecondarypage%3D1%3FAllianceid%3D281771%26sid%3D776473%26OUID%3D%26MultiUnionSupport%3Dtrue";
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
        },
        activity: function () {
            $("#view_loading").show();
            require.async("views/activityList", function (view_activityList) {
                var state = {
                    view:"view_activityList",
                    path:"activityList"
                };
                history.pushState(state,null,"?path=activityList&views=view_activityList");
                var view_main = mx_application.body.getViewById("view_main");
                view_main.views.views[0].removeAll();
                view_activityList.appendView();
                $("#view_loading").hide();
                view_main.append(view_activityList);
            })
        },
        localTourList : function(data,event){
            $("#view_loading").show();
            require.async("views/localTourList", function (view_localTourList) {
                var state = {
                    view:"view_localTourList",
                    path:"localTourList"
                };
                history.pushState(state,null,"?path=localTourList&views=view_localTourList");
                var view_main = mx_application.body.getViewById("view_main");
                view_main.views.views[0].removeAll();
                view_localTourList.appendView();
                $("#view_loading").hide();
                view_main.append(view_localTourList);
            })
        },
        next : function(){
            view_indexContent.iScroll.next();
        },
        prev : function(){
            view_indexContent.iScroll.prev();
        },
        scrolling : function(){
            //console.log(this)
        },
        version : function(){
            var view_main = mx_application.body.getViewById("view_main");
            view_main.views.views[0].iScroll.scrollTo(0,view_main.views.views[0].iScroll.maxScrollY,1000);
        },
        help : function(){
            $("#view_loading").show();
            require.async("views/help",function(view_help){
                var state = {
                    view:"view_help",
                    path:"help"
                };
                history.pushState(state,null,"?path=help&views=view_help");
                var view_main = mx_application.body.getViewById("view_main");
                view_main.views.views[0].removeAll();
                view_help.appendView();
                $("#view_loading").hide();
                view_main.append(view_help);
            });
        }
    }
    return view_indexContent;
});