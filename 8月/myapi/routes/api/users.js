// 用户管理api接口
const express=require("express")
const router=express.Router()
const User=require("../../model/User")
const keys=require("../../config/keys")
const bcrypt=require("bcrypt")//加密
const jwt=require("jsonwebtoken")//生成token
const passport=require("passport")//验证token

// 测试test
router.get("/test",(req,res)=>{
    res.json({msg:"login ok"})
})

// 注册接口
router.post("/register",(req,res)=>{
    // 得到数据
    User.findOne({email:req.body.email}).then((user)=>{
        if(user){
           return res.status(400).json("邮箱已注册")
        }else{
           const newUser= new User({
                email:req.body.email,
                username:req.body.username,
                password:req.body.password
            })
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(newUser.password, salt, function(err, hash) {
                    if(err) return
                    newUser.password=hash;
                    newUser.save().then((user=>{res.json(user)})).catch(err=>res.json(err))
                });
            });
        }
    })
})

// 登录接口
router.post("/login",(req,res)=>{
   const email=req.body.email;
   const password=req.body.password;
   User.findOne({email}).then((user)=>{
       if(!user){
          return res.status(404).json("用户名不存在")
       }
       else{
            bcrypt.compare(password,user.password).then((isMathch)=>{
                if(isMathch){
                    // return res.json("login success")

                  const rule={
                    id:user.id,
                    username:user.eventNames,
                    email:user.email,
                  } 
                  jwt.sign(rule,keys.secretOrKey,{expiresIn:3600},(err,token)=>{
                      if(err) console.log(err)
                      res.json({
                          success:true,
                          token:'Brarer'+token
                      })
                  })
                }else{
                    return res.status(400).json("密码不正确")
                }
            })
       }
   })
})
// 获取验证信息
router.get("/current",passport.authenticate("jwt",{session:false}),(req,res)=>{
        res.json({
            id:req.user.id,
            name:req.user.name,
            email:req.user.email
        })
})
module.exports=router
