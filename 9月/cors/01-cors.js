const http=require("http")

http.createServer((req,res)=>{
    // 允许哪些后端访问
    res.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:5500")
    // 允许哪些头访问
    res.setHeader("Access-Control-Allow-Headers","token,xxx")
    // 允许哪些方式访问
    res.setHeader("Access-Control-Allow-Methods","OPTIONS,PUT,DELETE")
    // 每个半小时，发送一个OPTIONS请求
    res.setHeader("Access-Control-Allow-Age","1800")
// 允许客户端携带凭证
    res.setHeader("Access-Control-Allow-Credentials",true)
    // if(req.method==="OPTIONS"){
    //     return res.end()
    // }
    if(req.url === "/api"){
        res.end(JSON.stringify({name:"kkk"}))
    }
}).listen(3000)