const http=require("http")
const url=require("url")

const querystring=require("querystring")
let server=http.createServer((req,res)=>{
    console.log(req.url)
    let {pathname,query}=url.parse(req.url)
     console.log(pathname,query)

     let r=querystring.parse(query)
     console.log(r)//name=xiaoming
     console.log(r.name)//name=xiaoming
    

    res.write("hello")
    res.end()
})
server.listen(7777,()=>{
    console.log("服务器已启动...")
})