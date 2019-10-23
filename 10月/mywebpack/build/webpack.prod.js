var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');

module.exports={
    mode:"production",
    optimization:{
        minimizer:[
            // 配置各种压缩方案 
            new OptimizeCssAssetsPlugin(),//把css压缩
            new TerserPlugin(),//手动压缩一个js
        ]
    }
}