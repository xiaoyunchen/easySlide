(function(){
	
	var delegate=function(){
		
	}
	
	delegate.prototype={
		addListElement:function(wrapper,btn){	//新添加一个元素
			btn.click(function(){
				var _id=new Date()-0;
				wrapper.append([
					'<li id="',
					_id,
					'">',
					_id,
					"</li>"
				].join(''));
			});
		},
		addBodyListener:function(){	//事件监听器
			document.body.addEventListener('click',function(event){
				var _id=event.target.id;
				console.log('事件委托，来自：'+_id);
			},false);
		}
	}
	
	module.exports=delegate;
})();
