// http超文本传输协议 规则


// 一般情况下，都是客户端去访问服务器 服务器也可以主动给客户端发信息
// 客户端：浏览器 js代码
const http=require("http")

// req表示请求对象 res表示响应对象
let server=http.createServer((req,res)=>{
    res.write("hello")
    res.end()
})
server.listen(3000,()=>{
    console.log("服务器已启动...")
})