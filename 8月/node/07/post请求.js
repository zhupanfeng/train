const express=require("express")
const app=express();
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.post("/checkUser",function(req,res){
    // 得到zhangsan 99
    console.log(req.body)
    console.log(req.body.name)
    console.log(req.body.age)
    res.send("收到了post请求")
})
app.listen(4000)