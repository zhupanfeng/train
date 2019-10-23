const path=require("path")

const prod=require("./webpack.prod")
const dev=require("./webpack.dev")

const merge=require("webpack-merge")
const HtmlWebpackPlugin=require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 


module.exports=(env)=>{
    // console.log(env)//{ development: true } { production: true }
    let isDev=env.development;
    // console.log(isDev)//true
    const base={
        entry:path.resolve(__dirname,"../src/index.js"),
        module:{
            rules:[
                // {test:/\.css$/,use:"css-loader"},
                // {test:/\.css$/,use:"style-loader"},//默认从上到下执行
                {
                    test:/\.js$/,
                    use:"babel-loader"
                },
                {test:/\.css$/,use:[isDev ? "style-loader":MiniCssExtractPlugin.loader,{
                    loader:"css-loader",
                    options:{
                        importLoaders: 2,
                        //  0 => no loaders (default);
                        //  1 => postcss-loader;
                        //  2 => postcss-loader, sass-loader
                    }
                },"postcss-loader","sass-loader"]},//默认从后往前执行，先css-loader，后style-loader
                {test:/\.scss$/,use:["style-loader","css-loader","sass-loader"]},//默认从后往前执行，先css-loader，后style-loader
                {test:/\.(png|jpg|jpeg|gif)$/,
                    // use:"file-loader"
                    use:{
                        loader:"url-loader",
                        options:{
                            name:"image/[name].[hash:7].[ext]",//图片名字还是原来名字，hash值可以避免重名,后缀是原来后缀
                            limit:1024*40
                        }
                    }
                },
                {
                    test:/\.(ttf|svg|woff|eot)$/,
                    use:"file-loader"
                }//处理字体或图标
            ]
        },
        output:{
            filename:"bundle.js",
            path:path.resolve(__dirname,"../dist")
        },
        plugins:[
           !isDev && new MiniCssExtractPlugin({
                filename:"css/main.css"
            }),
            new CleanWebpackPlugin(),//清除不用的plugin
            new HtmlWebpackPlugin({
                template:path.resolve(__dirname,"../public/index.html"),
                filename:"index.html",//配置生成的文件名
                minify: !isDev && {
                    removeAttributeQuotes:true,//去除属性值前后的双引号
                    collapseWhitespace:true,//去掉空白格
                }
            })
        ].filter(Boolean)
    }
    if(isDev){
        // 开发模式
       return merge(base,dev)
    }else{
        return merge(base,prod)
    }
}