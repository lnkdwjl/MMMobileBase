define("views/contactUs",["View","iScroll","views/indexHeader","views/indexFooter","/src/templates/contactUs.html"],function(i){var e=i("View"),t=i("iScroll"),n=i("views/indexHeader"),o=i("views/indexFooter"),a=new e({id:"view_contactUs",isFirst:!0,parentView:{view:"view_index_min",path:"index"},style:{position:"absolute",width:"100%",top:"0px",bottom:"0px",overflow:"hidden"},afterRender:function(){if(this.isFirst){mx_application.views.view_contactUs=a,this.isFirst=!1;var i=new t("#view_contactUs",{scrollY:!0,scrollX:!1,scrollbars:!0,fadeScrollbars:!0,probeType:3,mouseWheel:!0,tap:!0,preventDefault:!0,keyBindings:!0});this.iScroll=i,this.isFirst=!1}this.iScroll&&(this.iScroll.refresh(),this.iScroll.scrollTo(0,0))},iScroll:null,appendView:function(){s.append(n),s.append(r),s.append(o),a.append(s)}}),s=new e({id:"view_contactUs_min",isFirst:!0,style:{position:"absolute",width:"100%"},afterRender:function(){this.isFirst&&(this.isFirst=!1)}}),r=new e({id:"view_contactUs_content",isFirst:!0,html:i("/src/templates/contactUs.html"),afterRender:function(){this.isFirst&&(r.bindViewModel(l),this.isFirst=!1)}}),l=r.viewModel={};return a});