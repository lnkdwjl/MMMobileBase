define("views/appDown-debug",["ko-debug","$-debug","View-debug","iScroll-debug","views/header-debug","/src/templates/appDown-debug.html"],function(i){i("ko-debug");var e=i("$-debug"),t=i("View-debug"),o=i("iScroll-debug"),n=i("views/header-debug"),s=new t({id:"view_appDown",isFirst:!0,parentView:{view:"view_index_min",path:"index"},style:{position:"absolute",width:"100%",top:"0px",bottom:"0px",overflow:"hidden"},afterRender:function(){this.isFirst&&(mx_application.views.view_appDown=s,this.isFirst=!1)},appendView:function(){n.title="app下载",s.append(n),s.append(r)}}),r=new t({id:"view_appDown_content",isFirst:!0,style:{position:"absolute",width:"100%",top:"45px",bottom:"0px",overflow:"hidden",background:"#fff"},html:i("/src/templates/appDown-debug.html"),afterRender:function(){if(this.isFirst){e(".oneRight").height(e(".oneLeft").height()),e(".towRight").height(e(".towLeft").height()),e(".fourRight").height(e(".fourLeft").height()),r.bindViewModel(a),e("img").load(function(){r.iScroll&&(e(".oneRight").height(e(".oneLeft").height()),e(".towRight").height(e(".towLeft").height()),e(".fourRight").height(e(".fourLeft").height()),r.iScroll.refresh())});var i=new o("#view_appDown_content",{scrollY:!0,scrollX:!1,scrollbars:!0,fadeScrollbars:!0,probeType:3,mouseWheel:!0,tap:!0,preventDefault:!0,keyBindings:!0});this.iScroll=i,this.isFirst=!1}this.iScroll&&(this.iScroll.refresh(),this.iScroll.scrollTo(0,0))},iScroll:null}),a=r.viewModel={japanAndroidDown:function(){location.href=seajs.config.data.service_urls.japanAndroidDown},japanIosDown:function(){location.href=seajs.config.data.service_urls.japanIosDown},koreaAndroidDown:function(){location.href=seajs.config.data.service_urls.koreaAndroidDown},koreaIosDown:function(){location.href=seajs.config.data.service_urls.koreaIosDown},iosLiteDown:function(){location.href="https://itunes.apple.com/cn/app/id1089507692"},androidLiteDown:function(){location.href="http://android.myapp.com/myapp/detail.htm?apkName=com.mxnavi.travel.global"}};return s});