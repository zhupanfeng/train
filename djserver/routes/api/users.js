const  express=require("express")
const router=express.Router()
const User=require("../../model/User")
const bcrypt=require('bcrypt')//加密
const jwt=require('jsonwebtoken')//鉴权 生成token
const keys=require("../../config/keys")
const passport=require("passport")


router.get("/test",(req,res)=>{
    res.json({msg:'hello login'})
})

// 注册接口
router.post("/register",(req,res)=>{
    // console.log(req.body)
    User.findOne({email:req.body.email}).then(user=>{
        if(user){
            // 邮箱已经被注册
            return res.status(400).json("邮箱已经被注册")
        }else{
            const newUser=new User({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            })
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(newUser.password, salt, function(err, hash) {
                    if(err) console.log(err)
                    newUser.password=hash;
                    newUser.save()
                    .then(user=>res.json(user))
                    .catch(err=>res.json(err))
                });
            });
        }
    })
})

// 登录接口
router.post("/login",(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    User.findOne({email}).then(user=>{
        if(!user){
            return res.status(404).json("用户不存在")
        }
        bcrypt.compare(password,user.password).then(isMatch=>{
            if(isMatch){
                // 把一用户的信息作为一个token
                const rule={
                    id:user.id,
                    name:user.name,
                    email:user.email
                }
                jwt.sign(rule,keys.secretOrkey,{expiresIn:3600},(err,token)=>{
                    if(err) throw err;
                    res.json({
                        success:true,
                        token:"Bearer"+token
                    })
                })
                // res.json({msg:"success"})
            }else{
                return res.status(404).json("密码错误")
            }
        })
    })
})

// 获取用户信息接口
// 当访问current时，需要带着token，验证token是否合法与过期，从token
// 中获取用户信息
// 由于之前配置ok，后面那个接口需要验证token，那么就在接口后面加
// passport.authenticate("jwt",{session:false}
router.get("/current",passport.authenticate("jwt",{session:false}),(req,res)=>{
    res.json({
        user:req.user,
        name:req.name,
        email:req.email
    })
})


module.exports=router