define("views/header-debug",["ko-debug","View-debug","/src/templates/header-debug.html"],function(i){var e=i("ko-debug"),t=i("View-debug"),n=new t({id:"view_header",html:i("/src/templates/header-debug.html"),isFirst:!0,afterRender:function(){this.isFirst&&(n.bindViewModel(o),this.isFirst=!1),o.title(this.title)},title:""}),o=n.viewModel={title:e.observable(""),goToBack:function(){var i=mx_application.body.getViewById("view_main");i.goBack()}};return n});