(function(){
	require('../../css/module/dialog.css');
	
	var dialogModule=function(){
		//配置
		this.config={
			speed:'fast'
		};
		this.dom={};
		//加载dialog模板
		var tpl=require('../../template/module/dialog.html');
		$('body').append(tpl);
		this.init();
	};
	dialogModule.prototype={
		init:function(){		//初始化Dom并绑定事件
			this.dom.dlg=$('.dialogWrapper');
			this.dom.title=$('[node-type="dialogTitle"]');
			this.dom.summary=$('[node-type="dialogSummary"]');
			this.dom.pic=$('[node-type="dialogSrc"]');
			this.dom.text=$('[node-type="dialogText"]');
			this.dom.close=$('[action-type="closeDlg"]');
			this.bindDialogEvent();
		},
		openDialog:function(){		//打开对话框
			this.dom.dlg.fadeIn(this.config.speed);
		},
		closeDialog:function(){		//关闭对话框
			this.dom.dlg.fadeOut(this.config.speed);
		},
		bindDialogEvent:function(){		//绑定对话框事件
			var that=this;
			this.dom.close.bind('click',function(){
				that.closeDialog();
			});
		},
		/**
		 * @param {Object} dlg
		 * @param title 标题
		 * @param summary 简介/副标题
		 * @param src 图片src
		 * @param text 正文详细介绍
		 */
		openDialogWith:function(dlg){		//更新dialog文字内容并打开对话框
			this.dom.title.text(dlg.title);
			this.dom.summary.text(dlg.summary);
			this.dom.pic.attr('src',dlg.src);
			this.dom.text.text(dlg.text);
			this.openDialog();
		}
	};
	module.exports=dialogModule;
})();