const router=require("koa-router")()

// 创建二级路由
router.get("/",async(ctx)=>{
    ctx.body="api接口"
})


module.exports=router.routes()