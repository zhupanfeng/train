// http协议：
// 请求：3部分：
//         请求头 浏览器添加 自己也可以添加
//         请求行 方法 路径 协议
//         请求正文 给服务器的数据
// 响应：
//         状态码： 200  请求成功
//                 301  永久重定向
//                 302  临时重定向
//                 304  缓存
//                 404 服务器找不到资源
//                 401 无权限访问
//                 500 服务器挂了

//         响应头：一堆的头
//         响应体(正文)：服务器给的数据


// let http=require("http")
// // function(req,res){}是回调函数 有请求是调用
// let server=http.createServer(function(req,res){
//     // req 表示请求 可读流   res 表示响应 可写流 
//     // console.log(req)//IncomingMessage
//     console.log(req.url)//前端路由：一个url对应一个组件 后端对应一个资源
// })
// let port=5000
// server.listen(port,()=>{
//     console.log(`服务器运行在${port}上`)
// })