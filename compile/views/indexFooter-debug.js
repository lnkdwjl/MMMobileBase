define("views/indexFooter-debug",["ko-debug","View-debug","$-debug","base64-debug","/src/templates/indexFooter-debug.html"],function(e){e("ko-debug");var i=e("View-debug"),t=e("$-debug");e("base64-debug");var n=new i({id:"view_indexFooter",isFirst:!0,html:e("/src/templates/indexFooter-debug.html"),afterRender:function(){this.isFirst&&(n.bindViewModel(o),this.isFirst=!1)}}),o=n.viewModel={aboutUs:function(){t("#view_loading").show(),e.async("views/aboutUs-debug",function(e){var i={view:"view_aboutUs",path:"aboutUs"};history.pushState(i,null,"?path=aboutUs&views=view_aboutUs");var n=mx_application.body.getViewById("view_main");n.views.views[0].removeAll(),e.appendView(),t("#view_loading").hide(),n.append(e)})},joinUs:function(){t("#view_loading").show(),e.async("views/joinUs-debug",function(e){var i={view:"view_joinUs",path:"joinUs"};history.pushState(i,null,"?path=joinUs&views=view_joinUs");var n=mx_application.body.getViewById("view_main");n.views.views[0].removeAll(),e.appendView(),t("#view_loading").hide(),n.append(e)})},contactUs:function(){t("#view_loading").show(),e.async("views/contactUs-debug",function(e){var i={view:"view_contactUs",path:"contactUs"};history.pushState(i,null,"?path=contactUs&views=view_contactUs");var n=mx_application.body.getViewById("view_main");n.views.views[0].removeAll(),e.appendView(),t("#view_loading").hide(),n.append(e)})}};return n});