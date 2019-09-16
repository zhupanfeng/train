const router=require("koa-router")()
const DB=require("../model/db")
const url = require("url")
const tools = require("../model/tools")

router.use(async (ctx,next)=>{
    let pathname=url.parse(ctx.request.url).pathname
    let navResult=await DB.find("nav",{})
    // console.log(pathname)
    ctx.state.pathname=pathname;
    ctx.state.nav=navResult
    await next();
})

// 前台首页面
router.get("/",async (ctx)=>{
    let focusResult = await DB.find("focus",{})
    // console.log(focusResult)
     await ctx.render("default/index",{
        focus:focusResult
     })
})

// 前台服务页面
router.get("/server",async(ctx)=>{
    let serverResult=await DB.find("article",{"pid":"5ab34b61c1348e1148e9b8c2"})
    // console.log(serverResult)
    ctx.render("default/server",{
        list:serverResult
    })
})

// 服务详情
router.get("/content/:id",async(ctx)=>{
    let id=ctx.params.id
    // console.log(id)
    let contentResult=await DB.find("article",{"_id":DB.getObjectId(id)})
    console.log(contentResult)
    ctx.render("default/content",{
        list:contentResult[0]
    })
})

// 前台关于我们的页面
router.get("/about",async (ctx)=>{
    // 拿数据  
    ctx.render("default/about")
})

// 前台新闻页面
router.get("/news",async (ctx)=>{
    // 拿数据  
    ctx.render("default/news")
})

// 前台案例页面
router.get("/case",async (ctx)=>{
    // 
    ctx.render("default/case")
})

// 前台联系我们
router.get("/connect",async (ctx)=>{
    ctx.render("default/connect")
})

module.exports=router.routes()