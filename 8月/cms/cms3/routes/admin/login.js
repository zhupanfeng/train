const router = require("koa-router")()
const DB = require("../../model/db")
const tools=require("../../model/tools")
var svgCaptcha = require('svg-captcha')//验证码

router.get("/", async (ctx) => {
    // ctx.body="登录页面"
    await ctx.render("admin/login")
})

// 处理用户登录时填写的信息
router.post("/doLogin", async (ctx) => {
    // console.log("....")
    let username = ctx.request.body.username
    let password = ctx.request.body.password
    let code = ctx.request.body.code;
    // 判断用户提交的验证码和session中保存的验证码是否一样
    if (code.toLowerCase() === ctx.session.code.toLowerCase()) {
        // 验证码一致

        // 去数据库匹配username password是否一样
        var result = await DB.find("admin", { "username": username, "password": tools.md5(password) })
        // console.log(result)
        if (result.length > 0) {
            ctx.session.userinfo = result[0]

            // 记录此时的时间去更新数据库中的时间
            DB.update("admin",{"_id":DB.getObjectId(result[0]._id)},{last_time:new Date()})//更新数据库中的时间为当前时间

            ctx.redirect(ctx.state.__HOST__+"/admin")
        } else {
            // 用户名和密码错误

            ctx.render("admin/error",{
                message:"用户名和密码错误",
                redirect:ctx.state.__HOST__+"/admin/login"
            })
        }
    } else {
        // 验证码不一致
        ctx.render("admin/error",{
            message:"验证码错误",
            redirect:ctx.state.__HOST__+"/admin/login"
        })
    }


})
// 生成验证码
router.get("/code", async (ctx, next) => {

    var captcha = svgCaptcha.create({
        height: 40,
        width: 80,
        fontSize: 40
    });
    // 保存验证码
    ctx.session.code = captcha.text;

    // var captcha=svgCaptcha.createMathExpr({
    //     background:"skyblue",
    //     height:40,
    //     width:100,
    //     fontSize:50
    // })

    ctx.response.type = 'image/svg+xml'//svg的全称image/svg+xml
    ctx.body = captcha.data
    await next();
})

// 退出登录
router.get("/loginOut",async (ctx,next)=>{
    ctx.session.userinfo=null;//把session中的userinfo数据清空
    ctx.redirect(ctx.state.__HOST__+"/admin/login")
    await next()
})
module.exports = router.routes()