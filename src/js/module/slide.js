(function(){
	require('../../css/module/slide.css');
	//默认配置
	var defaults={
		width:465,
		delay:5000,
		duration:1000,
		total:3,
		current:1,
		timer:null
	};
	var slideModule=function(settings){
		this.config=$.extend({},defaults, settings);
		//计算
		this.config.total=this.config.dom.children('li').length||3;
		this.init();
	}
	
	slideModule.prototype={
			init:function(){
				this.bindMouseEvent();
				this.autoPlay();
			},
			slidePic:function(){	//切换图片
				var that=this;
				this.config.dom.animate({'marginLeft':-(this.config.current==this.config.total?0:this.config.current)*this.config.width+'px'},this.config.duration,function(){
					that.config.current++;
					if(that.config.current>that.config.total){
						that.config.current=1;
					}
				});
			},
			autoPlay:function(){	//自动切换
				var that=this;
				this.config.timer=setInterval(function(){
					that.slidePic();
				}, this.config.delay);
			},
			bindMouseEvent:function(){	//绑定鼠标移入/移除事件
				var that=this;
				this.config.dom.mouseenter(function(){
					if(that.config.timer){
						clearInterval(that.config.timer);
					}
				});
				this.config.dom.mouseleave(function(){
					that.autoPlay();
				});
			}
	};
	
	module.exports=slideModule;
})();
