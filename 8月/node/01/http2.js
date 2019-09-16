const http=require("http")

// url
// localhost域名
// 3000端口
// /abc路径名
// name="zhang" 查询字符串
// 路径名+查询字符串=路径
// #2345 hash

// req表示请求对象 res表示响应对象
let server=http.createServer((req,res)=>{
    res.write("hello")
    res.end()
})
server.listen(3000,()=>{
    console.log("服务器已启动...")
})