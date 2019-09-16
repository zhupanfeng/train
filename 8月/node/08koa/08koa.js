
// koa-bodyparser
const Koa=require("Koa")
const bodyParser=require('koa-bodyparser')
const app=new Koa()
app.use(bodyParser())

// ()=>{}当访问/是，调用它
app.use(async(ctx,next)=>{
//    console.log( ctx.request.body)
ctx.body="hello"
    await next();
})
app.listen(4000)