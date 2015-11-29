(function(){
	//引入公共CSS与页面CSS
	require('../../css/vendor/reset.css');
	require('../../css/page/index.css');
	
	//引入并创建多个独立slideModule模块
	var slideModule=require("../module/slide.js");
	new slideModule({dom:$('[node-type="iccAdvisorPicture"]')});
	new slideModule({
		dom:$('[node-type="iccAdvisorPicture2"]'),
		delay:4000,
		duration:800
	});
})();
