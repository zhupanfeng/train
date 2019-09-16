// koa-views 把数据渲染到模板中，把模板返回给浏览器

// 后端 ：给前端写api接口 拿到前端写的模板 ，把模板中的数据删除掉，然后通过模板引擎，把真实数据模板渲染到模板合适位置

// const Koa=require("Koa")
// const path=require("path")
// const views=require("koa-views")
// const app=new Koa()
// // console.log(path.join(__dirname,"/views"))
// app.use(views(path.join(__dirname,"/views"),{
//     extension:'ejs'
// }))

// app.use(async(ctx,next)=>{
//    await ctx.render("index",{title:"Koa"})
//     await next()
// })
// app.listen(4000)





