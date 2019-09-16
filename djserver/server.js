const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const app=express()
const passport=require("passport")//验证token


app.use('*', function (req, res,next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next()
});

// 连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/dj",{useNewUrlParser:true}).then(()=>{
    console.log("连接成功")
}).catch((err)=>{
    console.log(err)
})


// 配置body-parse
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// 引入二级路由文件
const users=require("./routes/api/users")
const profiles=require("./routes/api/profile")

// 一级路由
app.use("/api/users",users)
app.use("/api/profile",profiles)

// 配置passport 配置抽离到passport中

app.use(passport.initialize());// 先初始化
require("./config/passport")(passport)//导入配置文件 传递passport


const port=3000
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})