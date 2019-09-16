const express=require("express")
// 创建app 服务器
const app=express();
// 路由是一个url对应一个资源

// 应用级别路由
app.get("/",function(req,res){
    res.send("hello,express")
})
app.get("/my",function(req,res){
    res.send("个人中心")
})
app.get("/shop",function(req,res){
    res.send("商店")
})
app.get("/list",function(req,res){
    res.send("列表")
})
app.listen(4000)