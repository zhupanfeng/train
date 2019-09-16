const router = require("koa-router")()
const url=require("url")
let login = require("./admin/login")
let user = require("./admin/user")

// 得到资源的绝对路径
router.use(async (ctx, next) => {
    // http://localhost:3000/admin/login
    // 配置全局变量
    ctx.state.__HOST__ = "http://" + ctx.request.header.host;
    // console.log("http://"+ctx.request.header.host)

    // 得到资源的绝对路径
    let pathname=url.parse(ctx.request.url).pathname
    // 权限的校验
    if (ctx.session.userinfo) {
        await next()
    } else {
        if(pathname == "/admin/login"|| pathname=="/admin/login/doLogin"){
            await next()
        }else{
            ctx.redirect("/admin/login")
        }
    }

})

// 创建二级路由
router.get("/", async (ctx) => {
    // ctx.body="后台首页面"
    await ctx.render("admin/index")
})

router.use("/login", login)
router.use("/user", user)

module.exports = router.routes()