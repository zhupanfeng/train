const http=require("http")
const url=require("url")
let server=http.createServer((req,res)=>{
    // req就是IncomingMessage
    // 在浏览器的地址栏中输入什么样的路径，可通过req.url得到
    console.log(req.url)
    // 可以把req.url字符串转换成对象 利用url模块
    // http://localhost:7777/shou?name=xiaoming
    let {pathname,query}=url.parse(req.url)
     console.log(pathname,query)

    // console.log(pathname,query.name)
    // /shou undefined
    // url模块只能解析出了路径名和查询字符串

//  query: 'name=xiaoming',
//   pathname: '/shou',
    res.write("hello")
    res.end()
})
server.listen(7777,()=>{
    console.log("服务器已启动...")
})