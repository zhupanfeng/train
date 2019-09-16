const Koa = require("koa")

// 创建koa实例

let app = new Koa()

// 在koa中全部是中间件 ctx表示上下文 next是中间件必有的
// ctx中包装了req,res
app.use((ctx, next) => {
    // send 是express中 在koa中没有
    // ctx.res.send("hello")

    // 在原生中res上有一个end ctx.res表示拿原生的res
    // ctx.res.end("hello")//hello

    // 除了可以拿原生的res req之外 又封装了两个东西request response
    // ctx.response 表示去拿koa封装的响应对象
    // ctx.response.body = "world"//world

    // 原生的：ctx.req.xxx ctx.res.xxx
    // koa封装的：ctx.response.xxx ctx,request.xxx
    // koa建议使用koa封装的

    // console.log(ctx.req.url)// / 通过原生的方式获取url
    // console.log(ctx.request.url)// / 通过koa封装的request对象获取url
    // console.log(ctx.request.req.url)// / 通过koa封装的request对象得到原生的req对象，再得到url
    // console.log(ctx.url)// / 可以直接通过上下文得到url

    // console.log(ctx.request.path)// / 通过koa封装的request对象获取path
    // console.log(ctx.path)// / 可以直接通过上下文得到path
    // console.log(ctx.req.path)// undefined 在原生的Node中，req上面没有path

    // ctx.response.res.end("<h1>hello</h1>")//hello
    // ctx.response.end("<h1>hi</h1>")//Internal Server Error ctx.response中没有end
    // ctx.res.end("hello")//hello 
    // ctx.response.body="hi"//hi
    // ctx.body="hello"//hello


})
app.listen(4000)

// ctx.body=xxx 响应内容   ctx.url ctx.pah来获取url path