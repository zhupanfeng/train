const mongoose=require("mongoose")
// useNewUrlParser:true 去掉警告
mongoose.connect("mongodb://127.0.0.1:27017/zzz",{useNewUrlParser:true},err=>{
    if(err) return
    console.log("连接数据库成功")
})

let NewsSchema=mongoose.Schema({
   title:String,
   content:String,
   statue:{
    type:Number,
    default:1//默认参数
}
})

let News=mongoose.model("News",NewsSchema,'news')

let r=new News({
    title:"新闻标题",
    content:"新闻内容",
    
})

r.save(err=>{
    if(err){
        console.log(err)
    }
    console.log("success")
})