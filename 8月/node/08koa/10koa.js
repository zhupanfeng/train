// koa-static
const Koa=require("Koa")

// koa-static托管静态资源的
const serve=require('koa-static');
const app=new Koa()

app.use(serve(__dirname+'/public'))
app.listen(4000)