const express=require("express")
const router=express.Router()
const Profile=require("../../model/Profile")
const passport=require("passport")


// 添加新闻
router.post("/add",passport.authenticate("jwt",{session:false}),(req,res)=>{
    const profileFields={} 
    profileFields.type=req.body.type
    profileFields.describe=req.body.describe
    profileFields.income=req.body.income

  
    new Profile(profileFields).save().then(profile=>{
        res.json(profile)
    })
})

// 获取所有新闻列表
router.get("/list",passport.authenticate("jwt",{session:false}),(req,res)=>{
    Profile.find().then(profile=>{
        if(!profile){
            return res.status(404).json("没有任何数据")
        }
        res.json(profile)
    })
})

// 编辑接口
router.post("/edit/:id",passport.authenticate("jwt",{session:false}),(req,res)=>{
    const profileFields={} 
    profileFields.type=req.body.type
    profileFields.describe=req.body.describe
    profileFields.income=req.body.income
    
    Profile.findOneAndUpdate({_id:req.params.id},{$set:profileFields},{new:true}).then(profile=>{
        if(!profile){
            return res.status(404).json("没有任何数据")
        }
        res.json(profile)
    })
})

// 删除接口
router.get("/delete/:id",passport.authenticate("jwt",{session:false}),(req,res)=>{
   Profile.findOneAndDelete({_id:req.params.id}).then(profile=>{
       res.json("删除成功")
   })
})
module.exports=router