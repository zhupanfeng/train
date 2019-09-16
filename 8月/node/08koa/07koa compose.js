
// koa-compose中间件  把中间件合并到一块
const Koa=require("Koa")
const compose=require("koa-compose")
const app=new Koa()


let f1= async (ctx,next)=>{
    console.log("f1")
    await next()
}
let f2= async (ctx,next)=>{
    console.log("f2")
    await next()
}
let f3= async (ctx,next)=>{
    console.log("f3")
    await next()
}
let all=compose([f1,f2,f3])
app.use(all)

app.listen(4000)