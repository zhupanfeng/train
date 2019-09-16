const router = require("koa-router")()
const url = require("url")


const ueditor=require("koa2-ueditor")

// 得到资源的绝对路径
router.use(async (ctx, next) => {
    ctx.state.__HOST__ = "http://" + ctx.request.header.host


    // 得到访问路径
    let pathname = url.parse(ctx.request.url).pathname.substring(1)//去掉前面/admin 的/
    // console.log(pathname)
    let splitUrl = pathname.split("/")//['admin','user','']
    // console.log(splitUrl)


    // 把用户信息也保存到ctx的state上面
    ctx.state.G = {
        url:splitUrl,
        userinfo: ctx.session.userinfo,
        prePage:ctx.request.header['referer']
    }


    //  权限的校验
    if (ctx.session.userinfo) {
        await next()
    } else {
        if (pathname == "admin/login" || pathname == "admin/login/doLogin" || pathname == "admin/login/code") {
            await next()
        } else {
            ctx.redirect("/admin/login")
        }
    }
})


let index=require("./admin/index")
let login = require("./admin/login")
let manage = require("./admin/manage")
let articlecate=require("./admin/articlecate")
let article=require("./admin/article")
let focus=require("./admin/focus")//轮播图


// 后台首页面
router.use(index)// /不写默认访问/
// 登录模块
router.use("/login", login)
// 管理员模块
router.use("/manage", manage)
// 分类管理模块
router.use("/articlecate",articlecate)
//内容管理模块
router.use("/article",article)
// 轮播图模块
router.use("/focus",focus)

// 配置富文本编辑器
router.all('/editor/controller',ueditor(['public',{
    "imageAllowFiles":[".png",".jpg",".jpeg"],
    "imagePathFormat":"/upload/ueditor/image/{yyyy}{mm}{dd}/{filename}"//保存为原文件名
}]))

module.exports = router.routes()