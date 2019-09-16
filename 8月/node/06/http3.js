// 利用postman发送post请求

let http=require("http")
let url=require("url")
let querystring=require("querystring")
let server=http.createServer(function(req,res){
    let arr=[]
      req.on("data",function(chunk){
           arr.push(chunk) 
      })
       req.on("end",function(){
          let str= Buffer.concat(arr).toString()
        //   console.log(str)
         let strObj= querystring.parse(str)
        //  console.log(strObj)
        res.statusCode=200
        res.setHeader("a","1")
        res.end(JSON.stringify(strObj))
       }) 
})
let port=5000
server.listen(port,()=>{
    console.log(`服务器运行在${port}上`)
})