const express=require("express")
const app=express();
// 中间件 执行是有顺序的
// app.use("/",function(req,res,next){
//     console.log("这是一个中间件1")
//     next()
// })
// /my 中间件是会匹配到/的
// app.use("/my",function(req,res,next){
//     console.log("这是一个中间件2")
//     next()
// })
// *也是匹配所有路由
app.use(function(req,res,next){
    console.log("这是一个中间件")
    next()
})
app.get("/",function(req,res){
    res.send("你好 express")
})
app.get("/my",function(req,res){
    res.send("my")
})
app.listen(4000)