const router=require("koa-router")()
const DB=require("../../model/db")
const tools=require("../../model/tools")

// 管理员列表
router.get("/",async (ctx)=>{
    // ctx.body="管理员管理列表"
    let result=await DB.find("admin",{})
    // console.log(result)
    await ctx.render("admin/manage/list",{
        list:result
    })
})

// 渲染管理员列表页面
router.get("/add",async (ctx)=>{
    // ctx.body="增加管理员"
    await ctx.render("admin/manage/add.html")
})

// 处理增加管理员逻辑
router.post("/doAdd",async (ctx)=>{
    let username=ctx.request.body.username
    let password=ctx.request.body.password
    let rpassword=ctx.request.body.rpassword

    //政则 \w匹配字母数字或下划线 ^以什么打头
   if( !/^\w{4,20}/.test(username)){
    await ctx.render("admin/error",{
        message:"用户名不合法",
        redirect:ctx.state.__HOST__+"/admin/manage/add"
    })
   }else if(password !=rpassword || password.length<6){
       await ctx.render("admin/error",{
           message:"密码和确认密码不一致，或密码长度小于6位",
           redirect:ctx.state.__HOST__+"/admin/manage/add"
       })
   }else{
    //    满足要求
    // 判断用户名在数据库中书否已经存在
   let findResult= await DB.find("admin",{"username":username})
    if(findResult.length>0){
        await ctx.render("admin/error",{
            message:"此用户已存在，请更换一个用户名",
            redirect:ctx.state.__HOST__+"/admin/manage/add"
        })
    }else{

        await DB.insert("admin",{"username":username,"password":tools.md5(password),"status":1,"last_time":""})
        ctx.redirect(ctx.state.__HOST__+"/admin/manage/")
    }
}
})

// 渲染编辑管理员
router.get("/edit",async (ctx)=>{
    // 得到id
    let id=ctx.query.id
    // console.log(id)
    let result=await DB.find("admin",{"_id":DB.getObjectId(id)})
    // console.log(result)
    await ctx.render("admin/manage/edit",{
        list:result[0]
    })
})
// 处理编辑管理员逻辑
router.post("/doEdit",async (ctx)=>{

    // 得到id
    let id=ctx.request.body.id

    let username=ctx.request.body.username
    let password=ctx.request.body.password
    let rpassword=ctx.request.body.rpassword
    
    if(password !=""){
        if(password !=rpassword || password.length<6){
            await ctx.render("admin/error",{
                message:"密码和确认密码不一致，或密码长度小于6",
                redirect:ctx.state.__HOST__+"/admin/manage/"
            })
        }else{
            await DB.update("admin",{"_id":DB.getObjectId(id)},{"password":tools.md5(password)})
            ctx.redirect(ctx.state.__HOST__+"/admin/manage/")
        }
    }else{
        ctx.redirect(ctx.state.__HOST__+"/admin/manage/")
    }
})

// 删除管理员
router.get("/delete",async (ctx)=>{
    ctx.body="删除管理员"
})
module.exports=router.routes()