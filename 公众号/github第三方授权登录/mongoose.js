const mongoose=require('mongoose')
const {Schema}=mongoose
mongoose.connect("mongodb://127.0.0.1:27017/weixin",{
    useNewUrlParser:true
},()=>{
    console.log("连接数据库成功了...")
})

let MySchema=new Schema({
    accessToken:String
})

exports.ServerToken=mongoose.model("ServerToken",MySchema)