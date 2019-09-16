const express=require("express")
const app=express();
const Router=express.Router()
// 路由级别路由
Router.get("/hello",(req,res)=>{

})//Cannot GET /hello
// req res又经过封装
app.get("/my",function(req,res){
    res.send("my")
})//可以直接访问 应用级别路由

app.listen(4000)

