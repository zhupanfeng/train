const router = require("koa-router")()
const url = require("url")



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
        userinfo: ctx.session.userinfo
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


let login = require("./admin/login")
// let user = require("./admin/user")


let manage = require("./admin/manage")

// 创建二级路由
router.get("/", async (ctx) => {
    // ctx.body="后台首页面"
    await ctx.render("admin/index.html")
})

router.use("/login", login)
// router.use("/user", user)
router.use("/manage", manage)

module.exports = router.routes()