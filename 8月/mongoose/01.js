const mongoose=require("mongoose")//引入

mongoose.connect("mongodb://127.0.0.1:27017/myapp")//连接数据库

// 定义一个Schema,定义字段
let UserSchema=mongoose.Schema({
    username:String,
    age:Number,
    status:Number
})

// 根据Schema创建model，model中第一个参数一般大写
// 创建的model是User,数据库里对应的集合名是users
// 如果没有指定集合名，数据库会根据model的名字来创建集合名，大写变小写，复数
let User=mongoose.model("User",UserSchema)

// 实例化model,添加字段
let u=new User({
    username:"wangcai",
    age:100,
    status:1
})

u.save(function(err){
    if(err){
        console.log(err)
    }
    console.log("数据保存成功")
})