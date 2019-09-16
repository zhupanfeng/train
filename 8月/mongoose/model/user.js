let mongoose=require("./db")

let UserSchema=mongoose.Schema({
    name:String,
})

module.exports=mongoose.model("Users",UserSchema)

// let user=new User({
//     name:"ddd",
    
// })
// user.save(function(err,data){
//     if(err)console.log(err)
//     console.log("success")
// })