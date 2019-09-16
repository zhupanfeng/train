
// 浏览器只能发get请求
let http=require("http")
let url=require("url")
let querystring=require("querystring")
let server=http.createServer(function(req,res){
        // let urlObject=url.parse(req.url)
        // console.log(urlObject)
        // console.log(pathname)
        // console.log(query)

        let {pathname,query}=url.parse(req.url)
        let queryObj=querystring.parse(query)
        console.log(queryObj)
        
})
let port=5000
server.listen(port,()=>{
    console.log(`服务器运行在${port}上`)
})