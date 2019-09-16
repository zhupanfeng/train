const http=require("http")
const url=require("url")//把路径名和查询字符串找出来
const querystring=require("querystring")//解析查询字符串
let server=http.createServer((req,res)=>{
    let {pathname,query}=url.parse(req.url)
    // console.log(pathname,query)///abc zhiya

    let r=querystring.parse(query)
    // console.log(r)//{ zhiya: '' }

  res.write("hello")
  res.end()
})
server.listen(8888,()=>{
    console.log("服务器已启动..")
})