var path=require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
    		index:"./src/js/page/index.js"
    	},
    output: {
        path: path.join(__dirname,'dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins:[
    	new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ]
};
