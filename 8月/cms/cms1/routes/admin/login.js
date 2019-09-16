const router=require("koa-router")()
const DB=require("../../model/db")

router.get("/",async (ctx)=>{
    // ctx.body="登录页面"
    await ctx.render("admin/login")
})

// 处理用户登录填写信息
router.post("/doLogin",async (ctx)=>{
    // console.log("....")
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    // console.log(username)
    // console.log(password)
    // 去连接数据库，寻找username和password是否一样
    var result=await DB.find("users",{"username":username,"password":password})
    // console.log(result)
    if(result.length>0){
        ctx.session.userinfo=result[0]
        ctx.redirect(ctx.state.__HOST__+"/admin")
    }else{

    }
})

module.exports=router.routes()