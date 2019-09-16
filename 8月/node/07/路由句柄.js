const express=require("express")
const app=express();
// (req,res)=>res.send("你好 express")路由句柄
// req res url----解析req.url   querystring----解析查询字符串
// req res在原生基础上进行了封装
app.get("/",function(req,res,next){
    // res.send封装了res.write res.end res.setHeader()
    res.send("你好 express1")//你好 express1
    next()
},function(req,res){
    console.log("第二个函数调用了...")
})
app.listen(4000)