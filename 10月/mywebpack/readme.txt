main:
    vue技术栈（Vue全家桶）:
            vue框架
            vue-router
            vuex
            es6
            vue-cli(脚手架)
            webpack
            UI库：ElementUI、iView
            node
webpack:
    vue-cli中已经配置好了
    是js应用程序进行打包器，用来对项目进行打包处理
    功能：
        代码转换：ts-->js  less、scss->css
        文件优化：对文件进行压缩、合并
        模块合并：将多个可以合并的模块合并到一块
        代码校验：检验代码是否符合某些规范
        自动刷新：配置一个开发服务器，dev-server开启一个服务，自动打开浏览器、、、
        自动发布：
webpack默认遵循commonjs规范：导出：module.exports="xx" 导入：require("") 
es6中的规范：导出：export xxx; export default ,导入：import

浏览器对于require等不能识别 需要转换成低级语言

在webpack @4.0版本后有0配置打包 :
        npx webpack 会把我们的文件进行打包转换
        npx webpack --mode development (在开发模式下打包)

a、

使用webpack打包时有两种模式:
   开发模式：npx webpack --mode development  主要在进行编写代码时使用
   生产模式: npx webpack --mode production   主要在项目上线时使用

    可以在packjson中配置脚本运行时方便 之间 npm run dev npm run build
    "dev":"webpack --mode development",
    "build":"webpack --mode production",
    开发模式下：代码不会被压缩
    生产模式下：会压缩
想自己配置webpack：必须创建一个webpack.config.js （在vue中创建vue.config.js）
        在webpack.config.js中：
                导出：入口(entry) 出口(output)

        开发模式&生产模式
         "scripts": {
        "dev":"webpack --env.development",
        "build":"webpack --env.production",
        "test": "echo \"Error: no test specified\" && exit 1"
        },

        module.exports=(env)=>{
        console.log(env)//{ development: true } { production: true }
        }
默认情况下配置文件是webpack.config.js,修改可以通过--config ./build/webpack.base.js

webpack-merge:合并配置文件 需要返回如果不返回 会返回默认配置webpack.config.js

b、
        webpack-dev-server
        对前端项目进行打包，打包后存储在内存中，并不会在物理磁盘上产生真实的文件

        "scripts": { 
    "dev:build":"webpack --env.development --config ./build/webpack.base.js",
    //在开发环境下打包存储在物理磁盘，不会压缩，配置文件在webpack.base.js

    "dev": "webpack-dev-server --env.development --config ./build/webpack.base.js",
    //在开发环境下打包存储在内存(默认bundle文件在/下)，不会压缩，配置文件在webpack.base.js

    "build": "webpack --env.production --config ./build/webpack.base.js"
    //在生产环境下打包存储在物理磁盘，会压缩，配置文件在webpack.base.js

         }

         
c.开发环境下：
   devServer:{
        port:3000 ,//开发环境下端口号 http://localhost:3000/
        compress:true,//gzip 服务器压缩 浏览器自动解压 提高速度传输速度
        contentBase:path.resolve(__dirname,"../dist")//webpack启动服务器会在dist文件下(会托管dist文件，默认/托管全部)
    }



d.
开发环境：
        webpack-dev-server:对前端项目打包，存储在内存
        html-webpack-plugin:根据模板生成html文件
        clean-webpack-plugin:清除不用的plugin
生产环境:

e、

默认情况下,webpack不能处理css文件，靠loader来处理
        css需要两个loader：
                css-loader:解析css
                style-loader:把css变成style(内部样式 )标签插入页面
        sass  node-sass sass-loader
        less  less  less-loader
        stylus stylus stylus-loader
        webpack要想处理css，需要"style-loader","css-loader"
        webpack要想处理scss，需要"style-loader","css-loader","sass-loader"

f、

在css中引入@import,css-loader不能识别，需要在css-loader中添加配置项
                {
                    loader:"css-loader",
                    options:
                        importLoaders: 2,
                        //  0 => no loaders (default);
                        //  1 => postcss-loader;
                        //  2 => postcss-loader, sass-loader
                    }
g、

在css3中，有一些属性需要加上前缀，浏览器才能兼容
        postcss-loader
        需要配置:
        postcss.config文件
                module.exports={
                        plugins:[
                                require("autoprefixer")//自动加前缀
                        ]
                        }

        .browserslistrc文件：
                cover 95% //浏览器覆盖程度
h、

把css专门打包成一个外部文件，不再是内部样式
        mini-css-extract-plugin
        [].filter(Boolean) 去除假数据
把分离出去的css进行压缩:
        optimize-css-assert-webpack-plugin
当使用OptimizeCssAssetsPlugin把css压缩后，原本的js就没有被压缩，
需要手动压缩：terser-webpack-plugin

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
i、
默认情况下webpack不认识图片，需要file-loader才能识别
如果图片较小可以转换成base64字符串,避免二次请求 url-loader (也可以打包图片)


