const Koa=require("Koa")
const router=require("koa-router")()
const static=require("koa-static")
const axios=require("axios")
const quirystring=require("querystring")

const app=new  Koa()
app.use(static(__dirname+'/'))

const config={
    client_id:"aba8b12e18182d110c31",
    client_secret:"54720abf524e7d412e9d693b0ac60fbb45264806",
}
router.get("/github/login",(ctx)=>{
    // ctx.body="hello"
    let path="https://github.com/login/oauth/authorize?client_id="+config.client_id
    ctx.redirect(path)
})

router.get("/github/callback",async(ctx)=>{
    // console.log("callback..")
    const code=ctx.query.code
    // console.log(code)//6463eff301342cd91122

    const params={
        client_id:config.client_id,
        client_secret:config.client_secret,
        code:code
    }
    let res=await axios.post("https://github.com/login/oauth/access_token",params)
    // console.log(res.data)//access_token=9823ccd7f4305d0401e7d572dab62410cb69e05e&scope=&token_type=bearer
    const access_token=quirystring.parse(res.data).access_token;
    // console.log(access_token)//7f6537eb69d59228c346f46a4096aca15f8a8683
    res=await axios.get("https://api.github.com/user?access_token="+access_token)
    // console.log(res.data)//得到用户信息
    ctx.body=`
    <h1>hello ${res.data.login}</h1>
    <img src=${res.data.avatar_url} />
    `
})

app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(8888)