const router = require("koa-router")()
const DB = require("../../model/db")
const tools = require("../../model/tools")
const multer = require("koa-multer")

// 上传文件的相关配置
var storage = multer.diskStorage({
    // 文件保存路径
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')//上传的文件 保存在什么地方
    },
    // 修改文件名称
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");//以点分割成数组，数组的最后一项就是后缀名
        cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})
// 加载配置

var upload = multer({ storage: storage });

// 渲染轮播图列表页面
router.get("/", async (ctx,next) => {
    let page=ctx.query.page ||1;
    let pageSize=5;
    // 获取总条数
    let resultCount=await DB.count("focus",{})
    // 计算总页数
    let totalPages=Math.ceil(resultCount/pageSize)    

   let result= await DB.find("focus",{},{},{
       page,
       pageSize,
   })
    // console.log(result)

   await ctx.render("admin/focus/index",{
       list:result,
       page:page,
       totalPages:totalPages
   })
})

// 渲染增加轮播图列表页面
router.get("/add", async (ctx, next) => {

    await ctx.render("admin/focus/add",{
       
    })
})
// 处理增加轮播图逻辑
router.post("/doAdd", upload.single('pic'), async (ctx, next) => {

    let title = ctx.req.body.title;
     let pic=ctx.req.file ? ctx.req.file.path.substr(7) : "";
    let url = ctx.req.body.url;
    let sort = ctx.req.body.sort;
    let status = ctx.req.body.status;
    let add_time=tools.getTime();

    let json = {
        title, pic, url, sort, status,add_time
    }

    console.log(json)

    await DB.insert("focus", json)
    ctx.redirect(ctx.state.__HOST__ + "/admin/focus")
})

// 渲染编辑分类页面
router.get("/edit", async (ctx, next) => {
    // 得到id
    let id = ctx.query.id;

    let list = await DB.find("focus", { "_id": DB.getObjectId(id) })

    await ctx.render("admin/focus/edit", {
        list: list[0],
        prevPage:ctx.state.G.prePage
    })
})

// 处理编辑轮播图逻辑
router.post("/doEdit", upload.single('pic'), async (ctx) => {
    // 接收数据
    let prevPage=ctx.req.body.prevPage || "";
    let id=ctx.req.body.id;
    let title = ctx.req.body.title;
    let url = ctx.req.body.url;
    let sort = ctx.req.body.sort;
    let status = ctx.req.body.status;
    let pic=ctx.req.file ? ctx.req.file.path.substr(7) : "";

    // var json = { title, pic, url, sort, status }
    // console.log(json)

    
    if (pic) {
        var json = { title, pic, url, sort, status }
    } else { var json = { title, url, sort, status } }

    await DB.update("focus", { "_id": DB.getObjectId(id) }, json)

    // ctx.redirect(ctx.state.__HOST__+"/admin/focus")

    if(prevPage){
        ctx.redirect(prevPage)
    }else{
        ctx.redirect(ctx.state.__HOST__+"/admin/focus")
    }
}
)
module.exports = router.routes()