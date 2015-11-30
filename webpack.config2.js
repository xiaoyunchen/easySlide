var path=require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
    		index:"./src/js/page/index.js",
    		delegate:"./src/js/page/jsEvent.js"
    	},
    output: {
        path: path.join(__dirname,'dist2'),
        filename: "[name].js"
    },
    module: {
        loaders: [	//css加载器
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins:[
    	new webpack.ProvidePlugin({	//加载jq
            $: 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({	//压缩代码
		    compress: {
		        warnings: false
		    },
		    except: ['$super', '$', 'exports', 'require']	//排除关键字
		}),
		new webpack.optimize.CommonsChunkPlugin({
			names:['index','delegate'],
			children: true,
			async: true
		})
    ]
};
