const mongoose=require("mongoose")

 mongoose.connect("mongodb://127.0.0.1:27017/myapp2")

const UserSchema=mongoose.Schema({
    username:String,
    age:String
})

const User=mongoose.model("User",UserSchema)

let r=new User({
    username:"zhangsan",
    age:19
})

r.save(function(err){
    if(err){
        console.log(err)
    }
    console.log("保存成功")
})