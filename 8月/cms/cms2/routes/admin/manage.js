const router=require("koa-router")()
const DB=require("../../model/db")

// 管理员列表
router.get("/",async (ctx)=>{
    // ctx.body="管理员管理列表"
    let result=await DB.find("admin",{})
    // console.log(result)
    await ctx.render("admin/manage/list",{
        list:result
    })
})

// 增加管理员
router.get("/add",async (ctx)=>{
    // ctx.body="增加管理员"
    await ctx.render("admin/manage/add.html")
})

// 编辑管理员
router.get("/edit",async (ctx)=>{
    ctx.body="编辑管理员"
})

// 删除管理员
router.get("/delete",async (ctx)=>{
    ctx.body="删除管理员"
})
module.exports=router.routes()