define("views/indexbf-debug",["ko-debug","$-debug","View-debug","iscroll-debug","templates/index-debug.html"],function(i){var e=i("ko-debug"),t=i("$-debug"),n=i("View-debug"),o=i("iscroll-debug");window.addStyle("src/stylesheets/min.css","min");var s=new n({id:"view_index",isFirst:!0,html:i("templates/index-debug.html"),afterRender:function(){if(this.isFirst){s.bindViewModel(r);var i=new o("#view_index",{scrollY:!0,scrollX:!0,probeType:3,mouseWheel:!0,preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|IMG)$/},keyBindings:!0});i.on("scrollStart",r.scrollStart),i.on("scroll",r.scrolling),i.on("scrollEnd",r.scrollEnd),this.isFirst=!1}}}),r=s.viewModel={bufferHeight:80,scrollStartY:0,topOffset:!1,bottomOffset:!1,requestSign:!1,scrollStart:function(){r.scrollStartY=this.y},scrollEnd:function(){r.requestSign||(r.topOffset&&(r.requestSign=!0,r.topOffset=!1,r.topRefresh()),r.bottomOffset&&(r.requestSign=!0,r.bottomOffset=!1,r.bottomRefresh()))},scrolling:function(){var i=this.y;i>0&&i+r.scrollStartY>r.bufferHeight&&(r.topOffset=!0),0>i&&this.maxScrollY-i>r.bufferHeight&&(r.bottomOffset=!0)},topRefresh:function(){console.log("up"),r.requestSign=!1},bottomRefresh:function(){console.log("bottom"),r.requestSign=!1},imgclick:function(){alert(1)},removeBind:function(){window.ko=e,console.log(t("#view_index")[0]),e.cleanNode(t("#view_index")[0])},kotext:e.observable("fdsafjeilsdjfielksdfe")};return s});