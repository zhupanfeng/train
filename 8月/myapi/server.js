const  express=require("express")
const app=express()
const mongoose=require("mongoose")
const bodyParser=require("body-parser")

// 连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/myapi",{useNewUrlParser:true}).then(()=>{
    console.log("连接成功")
}).catch((err)=>{
    console.log(err)
})

app.get("/",(req,res)=>{
    res.send("hello")
})

// 配置body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const users=require("./routes/api/users")

app.use("/api/users",users)


 const port=3030
 app.listen(port,()=>{
     console.log(`Server is running on ${port}`)
 })