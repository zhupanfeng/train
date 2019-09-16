const router = require("koa-router")()
const DB = require("../../model/db")
const tools = require("../../model/tools")
const multer = require("koa-multer")

// 渲染系统设置列表页面
router.get("/", async (ctx,next) => {
    
    let result=await DB.find("setting",{})
    console.log(result)
   await ctx.render("admin/setting/index",{
       list:result[0]
   })
})




module.exports = router.routes()