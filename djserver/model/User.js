const mongoose=require("mongoose")
const Scheam=mongoose.Schema;

const UserScheam=new Scheam({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    data:{
        type:Date,
        default:Date.now
    }
})

// const User=mongoose.model("Users",UserScheam)
// module.exports=User

module.exports=User=mongoose.model("users",UserScheam)
