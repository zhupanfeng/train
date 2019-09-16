const router = require("koa-router")()
const DB = require("../../model/db")
const tools = require("../../model/tools")
const multer = require("koa-multer")



// 渲染导航列表页面
router.get("/", async (ctx,next) => {
    
    let page=ctx.query.page ||1;
    let pageSize=5;
    // 获取总条数
    let resultCount=await DB.count("nav",{})
    // 计算总页数
    let totalPages=Math.ceil(resultCount/pageSize)    

   let result= await DB.find("nav",{},{},{
       page,
       pageSize,
   })
    // console.log(result)
   await ctx.render("admin/nav/index",{
       list:result,
       page,
       totalPages:totalPages,
       
   })
})
// 渲染导航添加页面
router.get("/add", async (ctx,next) => {

    await ctx.render("admin/nav/add",{
       
    })
 })
 // 处理增加导航逻辑
router.post("/doAdd", async (ctx, next) => {
    let addData=await ctx.request.body

    //  console.log(addData)

    await DB.insert("nav", addData)
    ctx.redirect(ctx.state.__HOST__ + "/admin/nav")
})
// 渲染导航编辑页面
router.get("/edit", async (ctx,next) => {
    let id=ctx.query.id;

    let result=await DB.find("nav",{"_id":DB.getObjectId(id)})

    // console.log(result)
    await ctx.render("admin/nav/edit",{
       list:result[0]
    })
 })
 // 处理编辑导航逻辑
router.post("/doEdit", async (ctx, next) => {
    let editData=ctx.request.body;

    // console.log(editData)

     let id =editData.id
     let title=editData.title;
     let url=editData.url;
     let sort=editData.sort;
     let status=editData.status;

    await DB.update("nav",{"_id": DB.getObjectId(id) },{id,title,url,sort,status})
    ctx.redirect(ctx.state.__HOST__ + "/admin/nav",)
})
module.exports = router.routes()