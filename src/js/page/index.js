(function(){
	//引入公共CSS与页面CSS
	require('../../css/vendor/reset.css');
	require('../../css/page/index.css');
	
	//引入并创建多个独立slideModule模块
	var slideModule=require("../module/slide.js");
	new slideModule('iccAdvisorPicture');
	new slideModule('iccAdvisorPicture2',465,4000,800);
})();
