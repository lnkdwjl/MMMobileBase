define("views/localTourList",["ko","$","View","iScroll","views/localTourService","views/search","views/sort","/src/templates/localTourList.html"],function(e){var i=e("ko"),t=e("$"),n=e("View"),o=e("iScroll"),s=e("views/localTourService"),r=new s,a=e("views/search"),l=e("views/sort"),d=new n({id:"view_localTourList",isFirst:!0,parentView:{view:"view_index_min",path:"index"},style:{position:"absolute",width:"100%",top:"0px",bottom:"0px",overflow:"hidden"},afterRender:function(){this.isFirst&&(mx_application.views.view_localTourList=d,this.isFirst=!1)},appendView:function(){d.append(a),d.append(l),d.append(p)}}),p=new n({id:"view_localTourList_content",isFirst:!0,style:{position:"absolute",width:"100%",top:"95px",bottom:"0px",overflow:"hidden",background:"#fff"},html:e("/src/templates/localTourList.html"),afterRender:function(){if(this.isFirst){t(".localTourList_li_left").height(t(".localTourList_li_left").width()-20),t(".localTourList_li_right").height(t(".localTourList_li_left").width()-20),p.bindViewModel(w);var e=new o("#view_localTourList_content",{scrollY:!0,scrollX:!1,scrollbars:!0,fadeScrollbars:!0,probeType:3,mouseWheel:!0,tap:!0,preventDefault:!0,keyBindings:!0});e.on("scrollStart",w.scrollStart),e.on("scroll",w.scrolling),e.on("scrollEnd",w.scrollEnd),this.iScroll=e,this.isFirst=!1}this.iScroll&&(this.iScroll.refresh(),this.iScroll.scrollTo(0,0))},iScroll:null,backView:null}),w=p.viewModel={bufferHeight:40,scrollStartY:0,topOffset:!1,bottomOffset:!1,requestSign:!1,scrollStart:function(){w.scrollStartY=this.y},scrollEnd:function(){w.requestSign||(w.topOffset&&(w.requestSign=!0,w.topOffset=!1,w.topRefresh()),w.bottomOffset&&(w.requestSign=!0,w.bottomOffset=!1,w.bottomRefresh()))},scrolling:function(){var e=this.y;e>0&&e+w.scrollStartY>w.bufferHeight&&(w.topOffset=!0),0>e&&this.maxScrollY-e>w.bufferHeight&&(w.bottomOffset=!0)},topRefresh:function(){w.requestData.page.pageNo=1,w.itemList([]),w.request(w.requestData)},bottomRefresh:function(){w.requestData.page.pageNo++,w.totalPage>w.requestData.page.pageNo?w.request(w.requestData):w.requestSign=!1},totalPage:1,requestData:{destId:"f99efc21142b11e6a4bd00e066edb9ec",cateId:"",page:{pageSize:10,pageNo:1}},itemList:i.observableArray([]),request:function(){t("#noLocalTourList").hide();var e=function(){t("#localTourList").show();var e=w.itemList(),i=arguments[0].commodity;0==i.length&&t("#noLocalTourList").show(),w.totalPage=arguments[0].page.totalCount/w.requestData.page.pageSize;for(var n=0;i.length>n;n++){var o=i[n].name;o.length>20&&(o=o.substring(0,20)+"..."),i[n].name=o,e.push(i[n])}w.itemList(e),setTimeout(function(){p.iScroll.refresh(),w.requestSign=!1},100)},i=function(){console.log(arguments)};r.commodity(JSON.stringify(w.requestData),e,i)},goTo7zhou:function(e){location.href=seajs.config.data.service_urls.localTourService+"website/commodity/"+e.id}};return d});