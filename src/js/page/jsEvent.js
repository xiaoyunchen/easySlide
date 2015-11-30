(function(){
	//引入公共CSS与页面CSS
	require('../../css/vendor/reset.css');
	require('../../css/page/jsEvent.css');
	require('../../css/module/footer.css');
	
	//引入header
	require("../module/header.js");
	
	//引入jsEvent模块
	var Delegate=require("../module/jsEvent.js");
	var delegate=new Delegate();
	delegate.addBodyListener();
	delegate.addListElement($('#list1'),$('#btn1'));
	delegate.addListElement($('#list2'),$('#btn2'));
	
})();
