(function(){
	require('../../css/module/header.css');
	
	var headerModule={
		config:{	//配置信息，头部class/多少高度触发fixed，fixed class名
			headerDom:$('.headerWrapper'),
			fixedTop:80,
			fixedCls:'header-fixed'
		},
		headerFixed:function(){		//切换class
			if ($(window).scrollTop()>headerModule.config.fixedTop){
                headerModule.config.headerDom.addClass(headerModule.config.fixedCls);
            }else{
            	headerModule.config.headerDom.removeClass(headerModule.config.fixedCls);
            }
		},
		init:function(){		//为window绑定scroll事件
			$(window).bind('scroll',function(){
				headerModule.headerFixed();
			});
		}
	};
	headerModule.init();
	module.exports=null;
})();
