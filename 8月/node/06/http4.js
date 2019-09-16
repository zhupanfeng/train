// let http=require("http")
// let fs=require("fs")
// let url=require("url")
// let path=require("path")
// let server=http.createServer(function(req,res){
//     // 服务器返回给客户端数据：json和静态资源数据(html.css.js.img)
//    let {pathname}=url.parse(req.url,true)//true表示直接把查询字符串变成了对象
//     //   console.log(pathname)
//     let absPath=path.join(__dirname,pathname)
//     // console.log(absPath)
//     fs.stat(absPath,(err,statObj)=>{
//         if(err){
//             console.log(err)
//             res.statusCode=404
//             res.end("not found")
//             return ;
//         }
//         console.log(statObj)
//     })
// })
// server.listen(5000)



let http=require("http")
let fs=require("fs")
let url=require("url")
let path=require("path")
let server=http.createServer(function(req,res){
   let {pathname}=url.parse(req.url,true)//true表示直接把查询字符串变成了对象
    let absPath=path.join(__dirname,pathname)
    fs.stat(absPath,(err,statObj)=>{
        if(err){
            console.log(err)
            res.statusCode=404
            res.end("not found")
            return ;
        }
        if(statObj.isFile()){
            // 表示读取的是一个文件
            fs.createReadStream(absPath).pipe(res)
        }
        console.log(statObj)
    })
})
server.listen(5000)