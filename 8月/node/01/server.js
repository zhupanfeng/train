const http=require("http")
const url=require("url")
const querystring=require("querystring")
let server=http.createServer((req,res)=>{
    let {pathname,query}=url.parse(req.url)
    //  console.log(pathname)
    if(pathname==="/abc"){
        let arr=[];
    //    在流水过程中，有两个事件，一个叫data，一个叫end 
        req.on("data",(chunk)=>{
            arr.push(chunk)
        })
        req.on("end",()=>{
            // console.log(arr)
            // [<Buffer 61 3d 31 26 62 3d 32 26 63 3d 33>]
         let str=Buffer.concat(arr).toString()
         //a=1&b=2&c=3 请求正文
        console.log(str)
        // <Buffer 61 3d 31 26 62 3d 32 26 63 3d 33>
      res.write(str)
     res.end()
    })
}

    res.write("hello")
    res.end()
})
server.listen(7777,()=>{
    console.log("服务器已启动...")
})