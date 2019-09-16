const router=require("koa-router")()


router.get("/",async (ctx)=>{
    ctx.body="api接口"
})

let manage=require("./api/manage")



// 管理员模块api接口
router.use("/manage",manage)


module.exports=router.routes()