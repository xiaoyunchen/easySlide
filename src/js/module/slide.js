(function(){
	require('../../css/module/slide.css');
	var slideModule=function(dom,width,delay,duration){
		
		this.dom=$('[node-type="'+dom+'"]');
		this.width=width||465;
		this.delay=delay||5000;
		this.duration=duration||1000;
		//计算
		this.total=this.dom.children('li').length||3;
		this.current=0;
		this.timer=null;
		
		this.init();
	}
	
	slideModule.prototype={
			init:function(){
				this.bindMouseEvent();
				this.autoPlay();
			},
			slidePic:function(){	//切换图片
				var that=this;
				this.dom.animate({'marginLeft':-(this.current==this.total?0:this.current)*this.width+'px'},this.duration,function(){
					that.current++;
					if(that.current>that.total){
						that.current=1;
					}
				});
			},
			autoPlay:function(){	//自动切换
				var that=this;
				this.timer=setInterval(function(){
					that.slidePic();
				}, this.delay);
			},
			bindMouseEvent:function(){	//绑定鼠标移入/移除事件
				var that=this;
				this.dom.mouseenter(function(){
					if(that.timer){
						clearInterval(that.timer);
					}
				});
				this.dom.mouseleave(function(){
					that.autoPlay();
				});
			}
	};
	
	module.exports=slideModule;
})();
