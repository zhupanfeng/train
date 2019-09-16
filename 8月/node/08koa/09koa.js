const Koa=require("Koa")
const Router=require('koa-router')
const router=new Router()
const app=new Koa()

app
.use(router.routes())
.use(router.allowedMethods())

router.get("/",(ctx,next)=>{
    ctx.body="首页"
})
router.get("/my",(ctx,next)=>{
    ctx.body="个人中心"
})
router.get("/shop",(ctx,next)=>{
    ctx.body="商店"
})
app.listen(4000)