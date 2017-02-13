/**
 * 
 */
define(function(require) {
    var Application = require('Application');
    var View = require('View');
    var base64 =  require("base64");
    var application = window.mx_application || new Application({});
    window.mx_application = application;
    mx_application.views = {};
    mx_application.appBack = true;
    var base64 = window.base64 = require("base64");
	
    var bindPopState = function(event){
        var state = event.state || null;
        if(!state)location.href = "/";
    	if(mx_application.views&&mx_application.views[state.view]){
            //删除页面元素
            var view_main = mx_application.body.getViewById("view_main");
            view_main.views.views[0].removeAll();

            var appendView = mx_application.views[state.view];
            appendView.appendView();
            view_main.append(appendView);
        }else{
            require.async("views/"+state.path,function(appendView){
                //删除页面元素
                var view_main = mx_application.body.getViewById("view_main");
                view_main.views.views[0].removeAll();
                appendView.appendView();
                view_main.append(appendView);
            })
        }
    }

    var view_main = new View({
        id : "view_main",
        afterRender : function() {
        },
        backView:null,
        goBack : function(){
        	var view_main = mx_application.body.getViewById("view_main");
        	var currentView = view_main.views.views[0];
        	if(mx_application.views&&mx_application.views[currentView.parentView.view]){
	            //删除页面元素
	            currentView.removeAll();
	            var appendView = mx_application.views[currentView.parentView.view];
	            appendView.appendView();
	            view_main.append(appendView);
	            history.pushState(currentView.parentView,null,"?path="+currentView.parentView.path+"&views="+currentView.parentView.view);
	        }else{
	            require.async("views/"+currentView.parentView.path,function(appendView){
	                //删除页面元素
	                currentView.removeAll();
	                appendView.appendView();
	                view_main.append(appendView);
	                history.pushState(currentView.parentView,null,"?path="+currentView.parentView.path+"&views="+currentView.parentView.view);
	            });
	        }
        }
    });
    var view_loading = new View({
        id : "view_loading",
    });

    //带参数的刷新
    var views,path;
    if(window.getQueryString("views")&&window.getQueryString("path")){
        views = window.getQueryString("views");
        path = window.getQueryString("path");
        require.async("views/"+path,function(appendView){
            //处理页面的loading
            if(window.loadingImg){
                clearInterval(window.loadingImg);
                var dom = document.getElementById("loading");
                var p = dom.parentNode;
                p.removeChild(dom);
            }
            var state = {
                view : views,
                path :path
            };
            //history.pushState(state,null,null);
            appendView.appendView();
            if(window.getQueryString("data")){
                var data = JSON.parse(base64.decode(window.getQueryString("data")));
                appendView.imgInfo = data;
            }
            view_main.append(appendView);
            mx_application.body.append(view_main);
            mx_application.body.append(view_loading);
            setTimeout(function(){
                //后退
                window.addEventListener("popstate",bindPopState);
            },2000)
        })

    }else{
        require.async("views/index",function(index){
            //处理页面的loading
            if(window.loadingImg){
                clearInterval(window.loadingImg);
                var dom = document.getElementById("loading");
                var p = dom.parentNode;
                p.removeChild(dom);
            }
            var state = {
                view:"view_index_min",
                path:"index"
            }
            history.pushState(state,null,null);
            index.appendView();
            view_main.append(index);
            mx_application.body.append(view_main);
            mx_application.body.append(view_loading);
            setTimeout(function(){
                //后退
                window.addEventListener("popstate",bindPopState);
            },2000)
        });
    }
    return mx_application;
});
