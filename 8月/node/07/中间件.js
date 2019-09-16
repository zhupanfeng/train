const express=require("express")
const app=express();
// 中间件 执行是有顺序的
app.use("/",function(req,res,next){
    console.log("这是一个中间件1")
    next()
})
app.use("/",function(req,res,next){
    console.log("这是一个中间件2")
})
app.get("/",function(req,res){
    res.send("你好 express")
})
app.listen(4000)