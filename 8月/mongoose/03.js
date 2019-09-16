const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/myapp")

const UserSchema=mongoose.Schema({
    email:String,
    password:String,
})

const User=mongoose.model("User", UserSchema,"abc")//第三个参数为集合名

let t=new User({
    email:123456,
    password:123456
})

// t.save(function(err){
//     if(err){
//         console.log(err)
//     }
//     console.log("success")
// })


// 查询 根据model来查询
// User.find({"_id":"5d6cd2219a4e5b318cc2216f"},function(err,data){
//     if(err) {
//         console.log(err)
//     }
//     console.log(data)
// })

// 更新数据
// User.updateOne({"_id":"5d6cd2219a4e5b318cc2216f"},{"email":234567,"password":234567},function(err,data){
//     if(err)console.log(err)
//     console.log("更新成功")
// })

// 删除数据
// User.deleteOne({"_id":"5d6cd22736be7f442038a55b"},function(err,data){
//     if(err)console.log(err)
//     console.log(data)
// })