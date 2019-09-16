const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/dj").then(()=>{
    console.log("连接成功")
}).catch((err)=>{
    console.log(err)
})

module.exports=mongoose