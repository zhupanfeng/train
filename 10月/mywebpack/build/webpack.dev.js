const path=require("path")

module.exports={
    mode:"development",
    devServer:{
        port:3000 ,//开发环境下端口号 http://localhost:3000/
        compress:true,//gzip 服务器压缩 浏览器自动解压 提高速度传输速度
        contentBase:path.resolve(__dirname,"../dist")//webpack启动服务器会在dist文件下(会托管dist文件，默认/托管全部)
    }
}