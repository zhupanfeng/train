const router = require("koa-router")()
const DB = require("../../model/db")
const tools = require("../../model/tools")


// 渲染分类列表的页面
router.get("/", async (ctx,next) => {
    let result = await DB.find("articlecate", {})
    let realResult=tools.cateToList(result)
    // console.log(realResult)


    await ctx.render("admin/articlecate/index",{
        list:realResult
    })
})

// 渲染添加分类页面
router.get("/add", async (ctx,next) => {
    let result=await DB.find("articlecate",{"pid":"0"})
    await ctx.render("admin/articlecate/add",{
        cateList:result
    })
})

// 处理添加分类的逻辑
router.post("/doAdd", async (ctx,next) => {
    let addData=await ctx.request.body
    // console.log(addData)
    await DB.insert("articlecate",addData)
    ctx.redirect(ctx.state.__HOST__+"/admin/articlecate")
})


// 渲染编辑分类页面
router.get("/edit", async (ctx,next) => {

    let id=ctx.query.id;
    let result=await DB.find("articlecate",{"_id":DB.getObjectId(id)})
    let articlecate=await DB.find("articlecate",{"pid":"0"})

    await ctx.render("admin/articlecate/edit",{
        list:result[0],
        catelist:articlecate
    })
})


// 处理编辑分类的逻辑
router.post("/doEdit", async (ctx,next) => {
    let editData=ctx.request.body;
    // console.log(editData)
    let id=editData.id;
    let title=editData.title;
    let pid=editData.pid;
    let keywords=editData.keywords;
    let status=editData.status;
    let description=editData.description;


    await DB.update("articlecate",{"_id":DB.getObjectId(id)},{
        title,pid,keywords,status,description
    })
    ctx.redirect(ctx.state.__HOST__+"/admin/articlecate")
})
module.exports = router.routes()