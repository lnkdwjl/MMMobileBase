define("views/index",["$","ko","View","iScroll","views/indexContent","views/indexHeader","views/indexFooter"],function(e){var i=e("$");e("ko");var t=e("View"),n=e("iScroll"),o=e("views/indexContent"),s=e("views/indexHeader"),r=e("views/indexFooter"),a=new t({id:"view_index_min",isFirst:!0,parentView:{view:"view_index_min",path:"index"},afterRender:function(){if(this.isFirst){mx_application.views.view_index_min=a;var e=new n("#view_index_min",{scrollY:!0,scrollX:!1,scrollbars:!0,fadeScrollbars:!0,probeType:3,mouseWheel:!0,tap:!0,preventDefault:!0,keyBindings:!0});this.iScroll=e,this.isFirst=!1,i("#help").height(i(".index_activity_left").height()/2),i("#version").height(i(".index_activity_left").height()/2),i("img").load(function(){e.refresh(),i("#help").height(i(".index_activity_left").height()/2),i("#version").height(i(".index_activity_left").height()/2)})}this.iScroll&&(this.iScroll.refresh(),this.iScroll.scrollTo(0,0))},iScroll:null,appendView:function(){l.append(s),l.append(o),l.append(r),a.append(l)}}),l=new t({id:"view_index_min_content",isFirst:!0,afterRender:function(){this.isFirst&&(this.isFirst=!1)}});return a});