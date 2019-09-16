const http=require("http")
const url=require("url")
const querystring=("querystring")
let server=http.Server((req,res)=>{
    let str="";
    let {pathname}=url.parse(req.url)
    if(pathname==="/abc"){
        let arr=[];
        req.on("data",(chunk)=>{
            arr.push(chunk)
        })
        req.on("end",()=>{
            str=Buffer.concat(arr).toString()
           let obj=querystring.parse(str)
        })
        res.write(JSON.stringify(obj)) 
        res.end(str)
    }
})
server.listen(9999,()=>{
    console.log("服务器已启动...")
})